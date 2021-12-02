import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidantionErrorsService } from 'src/app/shared/components/validators/validantion-errors.service';

@Component({
  selector: 'app-cadastro-boi',
  templateUrl: './cadastro-boi.component.html',
  styleUrls: ['./cadastro-boi.component.scss'],
})
export class CadastroBoiComponent implements OnInit {
  formData!: FormGroup;

  constructor(public validationErrors: ValidantionErrorsService,
    private fb: FormBuilder) {}


  get f(): { [key: string]: AbstractControl; }
  {
      return this.formData.controls;
  }

  ngOnInit(): void {
    this.formData= this.fb.group({
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
  teste(e:any){
    
    console.log(e);
  }
}
