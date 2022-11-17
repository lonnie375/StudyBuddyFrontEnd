import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyqaDetailComponent } from './studyqa-detail.component';

describe('StudyqaDetailComponent', () => {
  let component: StudyqaDetailComponent;
  let fixture: ComponentFixture<StudyqaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyqaDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyqaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
