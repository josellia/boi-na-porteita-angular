import { Component, OnInit } from '@angular/core';
import { BoisService } from 'src/app/core/bois.service';
import { Boi } from 'src/app/shared/models/boi';

@Component({
  selector: 'app-listar-bois',
  templateUrl: './listar-bois.component.html',
  styleUrls: ['./listar-bois.component.scss'],
})
export class ListarBoisComponent implements OnInit {
  readonly limit = 4;
  page = 0;
  bois: Boi[] = [];

  constructor(private boisService: BoisService) {}

  ngOnInit(): void {
    this.listBoi();
  }
  onScroll(): void {
    this.listBoi()
  }

  private listBoi(): void {
    this.page++;
    this.boisService.listar(this.page, this.limit).subscribe((bois: Boi[]) => {
      this.bois.push(...bois);
    });
  }

  open() {}
}
