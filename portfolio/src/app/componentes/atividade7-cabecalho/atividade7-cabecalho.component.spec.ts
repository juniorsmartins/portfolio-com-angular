import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade7CabecalhoComponent } from './atividade7-cabecalho.component';

describe('Atividade7CabecalhoComponent', () => {
  let component: Atividade7CabecalhoComponent;
  let fixture: ComponentFixture<Atividade7CabecalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atividade7CabecalhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atividade7CabecalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
