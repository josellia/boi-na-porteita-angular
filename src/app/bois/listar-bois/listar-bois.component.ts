import { Component, OnInit } from '@angular/core';
import { BoisService } from 'src/app/core/bois.service';
import { Boi } from 'src/app/shared/models/boi';

@Component({
  selector: 'app-listar-bois',
  templateUrl: './listar-bois.component.html',
  styleUrls: ['./listar-bois.component.scss']
})
export class ListarBoisComponent implements OnInit {
 bois!: Boi[];

  constructor(private boisService: BoisService) { }

  ngOnInit(): void {
    this.boisService.listar().subscribe((bois: Boi[]) => {
      console.log(bois);
      this.bois = bois;
    });
  }
  open(){}
}
