import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BoisService } from 'src/app/core/bois.service';
import { Boi } from 'src/app/shared/models/boi';

import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-listar-bois',
  templateUrl: './listar-bois.component.html',
  styleUrls: ['./listar-bois.component.scss'],
})
export class ListarBoisComponent implements OnInit {
  readonly limit = 4;
  page = 0;
  breed!: string;
  gender!: string;
  bois: Boi[] = [];
  listFilter!: FormGroup;
  genders!: Array<string>;


  constructor(private boisService: BoisService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.listFilter = this.fb.group({
      breed: [''],
      gender: ['']
    });

    this.filters();

   this.genders = ['Fêmia', 'Macho'];

    this.listBoi();
  }

  onScroll(): void {
    this.listBoi()
  }

  private listBoi(): void {
    this.page++;
    this.boisService.listar(this.page, this.limit, this.breed, this.gender).subscribe((bois: Boi[]) => {
      this.bois.push(...bois);
    });
  }

  private filters() {
    this.listFilter.get('breed')?.valueChanges.pipe(debounceTime(500))
    .subscribe((val: string) => {
      this.breed = val;
      this.reset()
    });

    this.listFilter.get('gender')?.valueChanges.pipe(debounceTime(500)).subscribe((val: string) => {
      this.gender = val;
      this.reset()
    });
  }


  private reset():void {
    this.page = 0;
    this.bois = [];
    this.listBoi();
  }
  open() {}
}
