import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade7RodapeComponent } from './atividade7-rodape.component';

describe('Atividade7RodapeComponent', () => {
  let component: Atividade7RodapeComponent;
  let fixture: ComponentFixture<Atividade7RodapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atividade7RodapeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atividade7RodapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
