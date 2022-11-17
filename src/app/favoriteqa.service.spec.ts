import { TestBed } from '@angular/core/testing';

import { FavoriteqaService } from './favoriteqa.service';

describe('FavoriteqaService', () => {
  let service: FavoriteqaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteqaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
