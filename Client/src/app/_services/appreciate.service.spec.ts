import { TestBed, inject } from '@angular/core/testing';

import { AppreciateService } from './appreciate.service';

describe('AppreciateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppreciateService]
    });
  });

  it('should be created', inject([AppreciateService], (service: AppreciateService) => {
    expect(service).toBeTruthy();
  }));
});
