import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasTecnologiasComponent } from './minhas-tecnologias.component';

describe('MinhasTecnologiasComponent', () => {
  let component: MinhasTecnologiasComponent;
  let fixture: ComponentFixture<MinhasTecnologiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhasTecnologiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasTecnologiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
