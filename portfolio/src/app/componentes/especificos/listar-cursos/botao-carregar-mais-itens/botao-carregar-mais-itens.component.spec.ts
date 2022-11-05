import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCarregarMaisItensComponent } from './botao-carregar-mais-itens.component';

describe('BotaoCarregarMaisItensComponent', () => {
  let component: BotaoCarregarMaisItensComponent;
  let fixture: ComponentFixture<BotaoCarregarMaisItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoCarregarMaisItensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoCarregarMaisItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
