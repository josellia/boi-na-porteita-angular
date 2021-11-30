import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {
  @Input() mask?: (value: string) => string;
  constructor() { }

  ngOnInit(): void {
  }

}
