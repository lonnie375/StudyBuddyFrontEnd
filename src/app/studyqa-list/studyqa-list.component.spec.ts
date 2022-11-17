import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyqaListComponent } from './studyqa-list.component';

describe('StudyqaListComponent', () => {
  let component: StudyqaListComponent;
  let fixture: ComponentFixture<StudyqaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyqaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyqaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
