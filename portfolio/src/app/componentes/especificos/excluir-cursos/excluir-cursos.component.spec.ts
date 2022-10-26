import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirCursosComponent } from './excluir-cursos.component';

describe('ExcluirCursosComponent', () => {
  let component: ExcluirCursosComponent;
  let fixture: ComponentFixture<ExcluirCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
