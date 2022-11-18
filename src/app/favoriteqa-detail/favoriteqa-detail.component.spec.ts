import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteqaDetailComponent } from './favoriteqa-detail.component';

describe('FavoriteqaDetailComponent', () => {
  let component: FavoriteqaDetailComponent;
  let fixture: ComponentFixture<FavoriteqaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteqaDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteqaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
