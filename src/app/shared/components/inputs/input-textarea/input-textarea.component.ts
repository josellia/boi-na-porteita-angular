import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidantionErrorsService } from '../../validators/validantion-errors.service';

@Component({
  selector: 'app-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.css']
})
export class InputTextareaComponent  {
  @Input() idInput!: string;
  @Input() inputPlaceholder!:string;
  @Input() controlName!:string;
  @Input() formGroup!: FormGroup;

  constructor(public validationsErrors: ValidantionErrorsService) { }

  get formControl():AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}
