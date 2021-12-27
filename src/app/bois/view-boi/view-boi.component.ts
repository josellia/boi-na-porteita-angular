import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoisService } from 'src/app/core/bois.service';
import { Boi } from 'src/app/shared/models/boi';

@Component({
  selector: 'app-view-boi',
  templateUrl: './view-boi.component.html',
  styleUrls: ['./view-boi.component.scss'],
})
export class ViewBoiComponent implements OnInit {
  boi!: Boi;

  constructor(
    private activateRoute: ActivatedRoute,
    private boisService: BoisService
  ) {}

  ngOnInit(): void {
    this.view(this.activateRoute.snapshot.params['id']);
  }

  private view(id: number): void {
    this.boisService.viewCown(id).subscribe((boi: Boi) => {
      this.boi = boi;
    });
  }
}
