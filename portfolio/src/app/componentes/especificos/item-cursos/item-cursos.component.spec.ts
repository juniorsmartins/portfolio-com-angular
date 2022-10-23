import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCursosComponent } from './item-cursos.component';

describe('ItemCursosComponent', () => {
  let component: ItemCursosComponent;
  let fixture: ComponentFixture<ItemCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
