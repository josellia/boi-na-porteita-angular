import { Component,   forwardRef, Input, OnInit, EventEmitter, Output} from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

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
export class InputNumberComponent implements OnInit, ControlValueAccessor {

  public mask = {
    guide: true,
    showMask: true,

    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
  };


  public innerValue = 0;
  private onChange:Function =  (_: any) => {};
  private onTouched:Function =  () => {};


  @Input() idInput!:string;
  @Input() inputPlaceholder!:string ;
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  @Input() min!: string;
  @Input() max!:string;
  @Input() step!: string;

 @Input()
 get value():number{
   return this.innerValue;
 }

 set value(v: number){
   if(v !== this.innerValue) {
     this.innerValue = v;

   }

 }

 @Output() change: EventEmitter<any> = new EventEmitter<any>();

  constructor(public validationErrors:ValidantionErrorsService) { }

  ngOnInit(): void {

  }

  get formControl(): AbstractControl{
    return this.formGroup.controls[this.controlName];
  }


  writeValue(value: any): void{
    if(value !== this.innerValue) {
      this.innerValue = value;

      this.change.emit(this.innerValue);
    }
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  registerOnChange(fn:any) {
    this.onChange = fn;

  }
  doKeypress():void {
    this.onTouched();
  }

  setDisabledState?(isDisabled: boolean): void{
    isDisabled ?
      this.formGroup.controls[this.controlName].disable()
    : this.formGroup.controls[this.controlName].enable();
  }

  handlerChange(event:any) {
    this.value = event;
    this.onBlur()
  }
  onBlur(){
   this.onChange(this.innerValue);
   this.change.emit(this.innerValue)
  }

  // emitEventMask(event: {target: HTMLInputElement}) {
  //   this.change.emit(event.target.value);
  //   console.log(event);
  // }





}





// https://github.com/snorkpete/everycent/blob/master/webclientv3/src/app/shared/form/money-field/money-field.component.ts
//  <input
//   type="text"
//   [ngModel]="contact.phone"
//   (ngModelChange)="contact.phone = unmask($event)"  />

//   unmask(val) {
//   return val.replace(/\D+/g, '');
//}
