import { TestBed } from '@angular/core/testing';

import { DetalleserviceService } from './detalleservice.service';

describe('DetalleserviceService', () => {
  let service: DetalleserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
