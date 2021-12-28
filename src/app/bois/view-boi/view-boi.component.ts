import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BoisService } from 'src/app/core/bois.service';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { Alert } from 'src/app/shared/models/alert';
import { Boi } from 'src/app/shared/models/boi';

@Component({
  selector: 'app-view-boi',
  templateUrl: './view-boi.component.html',
  styleUrls: ['./view-boi.component.scss'],
})
export class ViewBoiComponent implements OnInit {
  boi!: Boi;
  id!: number;

  constructor(
    public dialog: MatDialog,
    private activateRoute: ActivatedRoute,
    private boisService: BoisService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.view();
  }

  del() {
    const config = {
      data: {
        title: 'Você tem certeza que deseja excluir?',
        descriptionModal:
          'Caso tenha certeza que deseja excluir, click no botão ok',
        isBtnClose: true,
        colorBtnCancel: 'primary',
        colorBtnSucess: 'warn'
      } as Alert,
    };
    const dialogRef = this.dialog.open(AlertComponent, config);
    dialogRef.afterClosed().subscribe((op: boolean) => {
      if (op) {
        this.boisService.delCown(this.id).subscribe(() => {
          this.router.navigateByUrl('/bois');
        });
      }
    });
  }

  private view(): void {
    this.boisService.viewCown(this.id).subscribe((boi: Boi) => {
      this.boi = boi;
    });
  }
}
