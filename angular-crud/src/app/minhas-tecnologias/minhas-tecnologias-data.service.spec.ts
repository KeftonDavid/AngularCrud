import { TestBed } from '@angular/core/testing';

import { MinhasTecnologiasDataService } from './minhas-tecnologias-data.service';

describe('MinhasTecnologiasDataService', () => {
  let service: MinhasTecnologiasDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinhasTecnologiasDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
