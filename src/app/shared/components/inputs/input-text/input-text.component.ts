import { Component, Input } from '@angular/core';
import { AbstractControl,  FormGroup } from '@angular/forms';
import { ValidantionErrorsService } from '../../validators/validantion-errors.service';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent{

 @Input() idInput!:string;
 @Input() inputPlaceholder!:string;
 @Input() formGroup!: FormGroup;
 @Input() controlName!: string;


  constructor(public validationErrors: ValidantionErrorsService) { }

  get formControl(): AbstractControl{
    return this.formGroup.controls[this.controlName];
  } 
}
