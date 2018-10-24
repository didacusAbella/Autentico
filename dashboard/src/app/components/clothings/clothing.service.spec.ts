import { TestBed } from '@angular/core/testing';

import { ClothingService } from './clothing.service';

describe('ClothingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClothingService = TestBed.get(ClothingService);
    expect(service).toBeTruthy();
  });
});
