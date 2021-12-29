import { Component, Input} from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidantionErrorsService } from '../../validators/validantion-errors.service';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css']
})
export class InputDateComponent {
  @Input() idInput!:string;
  @Input() inputPlaceholder!:string;
  @Input() formGroup!: FormGroup;
  @Input() controlName!:string;
  @Input() maxDate!:string;


  constructor(public validationsErrors: ValidantionErrorsService ) {

  }

 get formControl(): AbstractControl{
   return this.formGroup.controls[this.controlName];
 }
}
