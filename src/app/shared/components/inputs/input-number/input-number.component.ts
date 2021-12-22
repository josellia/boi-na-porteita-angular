import { Component,  EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValidantionErrorsService } from '../../validators/validantion-errors.service';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, multi: true,
      useExisting: forwardRef(() => InputNumberComponent)
    }
  ]
})
export class InputNumberComponent implements OnInit {

  @Input() idInput!:string;
  @Input() inputPlaceholder!:string ;
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  @Input() min!: string;
  @Input() max!:string;
  @Input() step!: string;


  @Input() set maskInput(m: string) {
    this.controlName = (m && m.toUpperCase())
  }
  @Output() mask: EventEmitter<string> = new EventEmitter<string>();


  constructor(public validationErrors:ValidantionErrorsService) { }

  ngOnInit(): void {

  }

  get formControl(): AbstractControl{
    return this.formGroup.controls[this.controlName];
  }

  onMask():void {
    const capture = this.formGroup.get('price')
    const myMask =  capture?.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    this.mask.emit(myMask);
    console.log(myMask);
  }
  // _handler(event: any) {

  // }
  // ngOnDestroy() {
  //   this.eventsSubscription.unsubscribe();
  // }

}

// CANAL PARA BEHAVIOR SUBJECT https://www.youtube.com/c/JsWiz1/videos

// MASCARA :https://www.youtube.com/watch?v=9owiMs_09Fo
