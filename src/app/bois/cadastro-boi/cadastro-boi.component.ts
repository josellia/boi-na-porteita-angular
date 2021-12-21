import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-cadastro-boi',
  templateUrl: './cadastro-boi.component.html',
  styleUrls: ['./cadastro-boi.component.scss'],
})
export class CadastroBoiComponent implements OnInit {
  formData!: FormGroup;
  genders!: Array<string>;

  public today: any = new Date();
  

  constructor(
    public validationErrors: ValidantionErrorsService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private boiService: BoisService,
    private router: Router
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
      price: ['', [Validators.required, Validators.min(0)]],
    });

    this.genders = ['Fêmia', 'Macho'];

    // const {price} = this.formData.value;
    // console.log('Price in here ', price);
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
  maskInput(mask:any){
  // let price =  this.formData.get('price');
  //  price = mask;
   mask.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
  }
}
