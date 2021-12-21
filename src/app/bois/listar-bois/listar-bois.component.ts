import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  listFilter!: FormGroup;
  genders!: Array<string>;

  constructor(private boisService: BoisService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.listFilter = this.fb.group({
      breed: [''],
      gender: ['']
    });

   this.genders = ['Fêmia', 'Macho'];

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
