import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ValidantionErrorsService } from 'src/app/shared/components/validators/validantion-errors.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-cadastro-boi',
  templateUrl: './cadastro-boi.component.html',
  styleUrls: ['./cadastro-boi.component.scss'],
})
export class CadastroBoiComponent implements OnInit {
  formData!: FormGroup;
  genders!: Array<string>

  constructor(
    public validationErrors: ValidantionErrorsService,
    private fb: FormBuilder
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
      price: [
        '',
        [
          Validators.required,
          Validators.min(0),
         
        ],
      ],
    });

    this.genders = ['Fêmia', 'Macho'];
    
  }

  save(): void {
    this.formData.markAllAsTouched();
    if (this.formData.invalid) {
      return;
    }
    alert(JSON.stringify(this.formData.value, null, 4));
  }
  clearForm(): void {
    this.formData.reset();
  }

  
  currencyMask() {

    const currencyControl: AbstractControl = this.formData?.controls['price'];
    
    let mask = currencyControl.value;
    currencyControl?.valueChanges.subscribe((data) => {
  
     data =  data?.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      });
     
       mask = data;
      console.log('VAUE',mask);
      // this.formData.controls['price'].setValue(mask, {
      //   emitEvent: false,
      // });
      // console.log(data);
      return mask
    });
  }

  teste(e: any){
    console.log(e);
  e.target.value.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  }
}
// https://www.ti-enxame.com/pt/angular/mascara-para-uma-entrada/826048165/

// TODO LIST: https://www.youtube.com/watch?v=NqsispG1Bv4