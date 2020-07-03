import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasTecnologiasListaComponent } from './minhas-tecnologias-lista.component';

describe('MinhasTecnologiasListaComponent', () => {
  let component: MinhasTecnologiasListaComponent;
  let fixture: ComponentFixture<MinhasTecnologiasListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhasTecnologiasListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasTecnologiasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
