import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroBoiComponent } from './cadastro-boi.component';

describe('CadastroBoiComponent', () => {
  let component: CadastroBoiComponent;
  let fixture: ComponentFixture<CadastroBoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroBoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroBoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
