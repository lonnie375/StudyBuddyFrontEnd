import { TestBed } from '@angular/core/testing';

import { StudyqaService } from './studyqa.service';

describe('StudyqaService', () => {
  let service: StudyqaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudyqaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
