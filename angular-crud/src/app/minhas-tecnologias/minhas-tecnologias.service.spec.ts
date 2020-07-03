import { TestBed } from '@angular/core/testing';

import { MinhasTecnologiasService } from './minhas-tecnologias.service';

describe('MinhasTecnologiasService', () => {
  let service: MinhasTecnologiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinhasTecnologiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
