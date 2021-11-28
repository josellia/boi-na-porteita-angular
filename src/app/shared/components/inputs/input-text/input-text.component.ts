import { Component, Input } from '@angular/core';
import { AbstractControl,  FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent{

 @Input() inputName!: string; 
 @Input() idInput!:string;
 @Input() placeholderInput!:string;
 @Input() formGroup!: FormGroup;
 @Input() controlName!: string;

  constructor() { }

  get formControl(): AbstractControl{
    return this.formGroup.controls[this.controlName];
  } 
}
