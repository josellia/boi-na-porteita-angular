import { Component, Inject,  OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  title = 'Sucesso!';
  descriptionModal = 'Seu registro foi cadastrado com sucesso!';
  btnSuccess = 'Ok';
  btnCancel = 'Cancelar'

  constructor( public dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
