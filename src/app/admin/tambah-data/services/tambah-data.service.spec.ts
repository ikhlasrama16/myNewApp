import { TestBed } from '@angular/core/testing';

import { TambahDataService } from './tambah-data.service';

describe('TambahDataService', () => {
  let service: TambahDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TambahDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
