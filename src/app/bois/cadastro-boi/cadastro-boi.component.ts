import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BoisService } from 'src/app/core/bois.service';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { ValidantionErrorsService } from 'src/app/shared/components/validators/validantion-errors.service';
import { Alert } from 'src/app/shared/models/alert';
import { Boi } from 'src/app/shared/models/boi';
import { CurrencyPipe } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-cadastro-boi',
  templateUrl: './cadastro-boi.component.html',
  styleUrls: ['./cadastro-boi.component.scss'],
})
export class CadastroBoiComponent implements OnInit {
  @ViewChild('preco') preco!: ElementRef;

  formData!: FormGroup;
  genders!: Array<string>;
  id!: number;

  public today: Date = new Date();

  constructor(
    public validationErrors: ValidantionErrorsService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private boiService: BoisService,
    private router: Router,
    private currencyPipe: CurrencyPipe,
    private activateRoute: ActivatedRoute
  ) {}

  get f(): { [key: string]: AbstractControl } {
    return this.formData.controls;
  }

  ngOnInit(): void {
    this.genders = ['Fêmia', 'Macho'];
    this.id = this.activateRoute.snapshot.params['id'];

    if (this.id) {
      this.boiService.viewCown(this.id).subscribe((boi: Boi) => {
        console.log(boi);
        this.createForm(boi);
      });
    } else {
      this.createForm(this.createCownEmpty());
    }

    this.mask();

    // let price =  this.formData.get('price');
    // const {price} = this.formData.value;

    // use pipe to display currency
  }

  mask() {
    this.formData.valueChanges.subscribe((form) => {
      if (form.price) {
        this.formData.patchValue(
          {
            price: this.currencyPipe.transform(
              form.price.replace(/\D/g, '').replace(/^0+/, ''),
              'BRL',
              'symbol',
              '1.0-0'
            ),
          },
          { emitEvent: false }
        );
      }
    });
  }
  submit(): void {
    this.formData.markAllAsTouched();
    if (this.formData.invalid) {
      return;
    }

    const boi = this.formData.getRawValue() as Boi;
    if (this.id) {
      boi.id = this.id;
      this.editCow(boi);
    } else {
      this.saveCow(boi);
    }
  }

  clearForm(): void {
    this.formData.reset();
  }

  private createForm(boi: Boi): void {
    this.formData = this.fb.group({
      breed: [
        boi.breed,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      photoUrl: [boi.photoUrl, [Validators.required, Validators.minLength(10)]],
      description: [boi.description, [Validators.maxLength(200)]],
      birthDate: [boi.birthDate, [Validators.required]],
      gender: [boi.gender, [Validators.required]],
      price: [boi.price, [Validators.required, Validators.minLength(0)]],
    });
  }

  private createCownEmpty(): Boi {
    return {
      breed: '',
      photoUrl: '',
      description: '',
      birthDate: '',
      gender: '',
      price: 0,
      id: 0,
    } as Boi;
  }

  private saveCow(boi: Boi): void {
    this.boiService.saveBoi(boi).subscribe({
      next: () => {
        const config = {
          data: {
            btnSuccess: 'Ir para a listagem',
            btnCancel: 'Cadastrar novo bovino',
            colorBtnCancel: 'primary',
            isBtnClose: true,
          } as Alert,
        };
        const dialogRef = this.dialog.open(AlertComponent, config);
        dialogRef.afterClosed().subscribe((op: boolean) => {
          op ? this.router.navigateByUrl('/bois') : this.clearForm();
        });
      },
      error: () => {
        const config = {
          data: {
            title: 'Erro ao salvar o registro',
            btnSuccess: 'Fechar',
            descriptionModal:
              'Não conseguimos salvar seu registro, favor tentar novamente mais tarde',
            colorBtnSucess: 'warn',
          } as Alert,
        };
        this.dialog.open(AlertComponent, config);
      },
    });
  }

  private editCow(boi: Boi): void {
    this.boiService.editBoi(boi).subscribe({
      next: () => {
        const config = {
          data: {
            descriptionModal: 'Seu registro foi atualizado com sucesso',
            btnSuccess: 'Ir para a listagem',
          } as Alert,
        };
        const dialogRef = this.dialog.open(AlertComponent, config);
        dialogRef
          .afterClosed()
          .subscribe(() => this.router.navigateByUrl('/bois'));
      },
      error: () => {
        const config = {
          data: {
            title: 'Erro ao editar o registro',
            btnSuccess: 'Fechar',
            descriptionModal:
              'Não conseguimos editar seu registro, favor tentar novamente mais tarde',
            colorBtnSucess: 'warn',
          } as Alert,
        };
        this.dialog.open(AlertComponent, config);
      },
    });
  }
}
