import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBoisComponent } from './listar-bois.component';

describe('ListarBoisComponent', () => {
  let component: ListarBoisComponent;
  let fixture: ComponentFixture<ListarBoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarBoisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarBoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
