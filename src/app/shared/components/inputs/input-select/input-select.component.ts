import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidantionErrorsService } from '../../validators/validantion-errors.service';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent  {

  @Input() inputPlaceholder!: string;
  @Input() controlName!: string;
  @Input() formGroup!: FormGroup;

  constructor(public validationsErrors: ValidantionErrorsService) { }

  get formControl(): AbstractControl{
    return this.formGroup.controls[this.controlName];
  }
  

}
