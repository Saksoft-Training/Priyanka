import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentMovieComponent } from './parent-movie-component';

describe('ParentMovieComponent', () => {
  let component: ParentMovieComponent;
  let fixture: ComponentFixture<ParentMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentMovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
