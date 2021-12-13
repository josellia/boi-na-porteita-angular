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
  btnCancel = 'Cancelar';
  colorBtn = 'primary';
  isBtnClose = false;

  constructor( public dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
   if(this.data) {
     this.title = this.data.title || this.title;
     this.descriptionModal = this.data.descriptionModal || this.descriptionModal;
     this.btnSuccess = this.data.btnSuccess || this.btnSuccess;
     this.btnCancel = this.data.btnCancel || this.btnCancel;
     this.colorBtn = this.data.colorBtn || this.colorBtn;
     this.isBtnClose = this.data.isBtnClose || this.isBtnClose;
   }
  }

}
