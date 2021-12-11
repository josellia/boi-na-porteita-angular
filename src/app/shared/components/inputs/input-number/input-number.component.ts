import { Component, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';


import { ValidantionErrorsService } from '../../validators/validantion-errors.service';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {
  @Input() inputMask!: any;
  @Input() idInput!:string;
  @Input() inputPlaceholder!:string ;
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  @Input() min!: string;
  @Input() max!:string;
  @Input() step!: string;
  

  constructor(public validationErrors:ValidantionErrorsService) { }

  ngOnInit(): void {
  }

  get formControl(): AbstractControl{
    return this.formGroup.controls[this.controlName];
  }

  get maskInput( ){
    const mask: AbstractControl = this.formGroup.controls[this.controlName];
    console.log(mask);
   return  mask;

  }
}
