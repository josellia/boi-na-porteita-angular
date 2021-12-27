import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BoisService } from 'src/app/core/bois.service';
import { Boi } from 'src/app/shared/models/boi';

import { debounceTime } from 'rxjs/operators';
import { ConfigParams } from 'src/app/shared/models/config-params';

@Component({
  selector: 'app-listar-bois',
  templateUrl: './listar-bois.component.html',
  styleUrls: ['./listar-bois.component.scss'],
})
export class ListarBoisComponent implements OnInit {
  config: ConfigParams = {
    page: 0,
    limit:4,
    search: '',
    field: {type: '', value: ''}
  };
  bois: Boi[] = [];
  listFilter!: FormGroup;
  genders!: Array<string>;

  constructor(
    private boisService: BoisService,
    private fb: FormBuilder,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.listFilter = this.fb.group({
      breed: [''],
      gender: [''],
    });

    this.filters();

    this.genders = ['Fêmia', 'Macho'];

    this.listBoi();
  }

  open(id:number):void {
    this.router.navigateByUrl(`/bois/${id}`);
  }

  onScroll(): void {
    this.listBoi();
  }

  private listBoi(): void {
     this.config.page++;


    this.boisService
      .listar(this.config)
      .subscribe((bois: Boi[]) => {
        this.bois.push(...bois);
      });
  }

  private filters() {
    this.listFilter
      .get('breed')
      ?.valueChanges.pipe(debounceTime(500))
      .subscribe((val: string) => {
        this.config.search = val;
        this.reset();
      });

    this.listFilter
      .get('gender')
      ?.valueChanges.pipe(debounceTime(500))
      .subscribe((val: string) => {
        this.config.field = {type: 'gender', value: val};
        this.reset();
      });
  }

  private reset(): void {
    this.config.page = 0;
    this.bois = [];
    this.listBoi();
  }


}
