import { Component,  EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';



import { ValidantionErrorsService } from '../../validators/validantion-errors.service';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
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
  // ngOnDestroy() {
  //   this.eventsSubscription.unsubscribe();
  // }
 
}

// CANAL PARA BEHAVIOR SUBJECT https://www.youtube.com/c/JsWiz1/videos