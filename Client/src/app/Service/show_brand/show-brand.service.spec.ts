import { TestBed } from '@angular/core/testing';

import { ShowBrandService } from './show-brand.service';

describe('ShowBrandService', () => {
  let service: ShowBrandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowBrandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
