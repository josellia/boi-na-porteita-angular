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
import { Router } from '@angular/router';
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

  public today: Date = new Date();

  constructor(
    public validationErrors: ValidantionErrorsService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private boiService: BoisService,
    private router: Router,
    private currencyPipe: CurrencyPipe,

  ) {}

  get f(): { [key: string]: AbstractControl } {
    return this.formData.controls;
  }

  ngOnInit(): void {
    this.formData = this.fb.group({
      breed: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      photoUrl: ['', [Validators.required, Validators.minLength(10)]],
      description: ['', [Validators.maxLength(200)]],
      birthDate: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.minLength(0)]],
    });

    this.genders = ['Fêmia', 'Macho'];

    // let price =  this.formData.get('price');
   // const {price} = this.formData.value;

    // use pipe to display currency

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

  save(): void {
    this.formData.markAllAsTouched();
    if (this.formData.invalid) {
      return;
    }

    const boi = this.formData.getRawValue() as Boi;
    console.log(boi);
    this.saveCow(boi);
  }

  clearForm(): void {
    this.formData.reset();
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

}
