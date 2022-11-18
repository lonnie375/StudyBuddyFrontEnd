import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteqaListComponent } from './favoriteqa-list.component';

describe('FavoriteqaListComponent', () => {
  let component: FavoriteqaListComponent;
  let fixture: ComponentFixture<FavoriteqaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteqaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteqaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
