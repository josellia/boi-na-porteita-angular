import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alert } from '../../models/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  alert = {
    title: 'Sucesso!',
    descriptionModal: 'Seu registro foi cadastrado com sucesso!',
    btnSuccess: 'Ok',
    btnCancel: 'Cancelar',
    colorBtnSucess: 'accent',
    colorBtnCancel:'warm',
    isBtnClose: false,
  } as Alert;

  constructor(
    public dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alert
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.alert.title = this.data.title || this.alert.title;
      this.alert.descriptionModal =
        this.data.descriptionModal || this.alert.descriptionModal;
      this.alert.btnSuccess = this.data.btnSuccess || this.alert.btnSuccess;
      this.alert.btnCancel = this.data.btnCancel || this.alert.btnCancel;
      this.alert.colorBtnSucess = this.data.colorBtnSucess || this.alert.colorBtnSucess;
      this.alert.colorBtnCancel = this.data.colorBtnCancel || this.alert.colorBtnCancel;
      this.alert.isBtnClose = this.data.isBtnClose || this.alert.isBtnClose;
    }
  }
}
