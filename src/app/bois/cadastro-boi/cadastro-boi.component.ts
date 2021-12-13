import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BoisService } from 'src/app/core/bois.service';
import { ValidantionErrorsService } from 'src/app/shared/components/validators/validantion-errors.service';
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
  
  public today: Date = new Date();
  
  constructor(
    public validationErrors: ValidantionErrorsService,
    private fb: FormBuilder,
    private boiService: BoisService
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
    this.boiService.saveBoi(boi).subscribe(
      () => {
        alert('Save suscess');
      },
      () => {
        alert('Error');
      }
    );
  }
}
