import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedNewMovie } from './added-new-movie';

describe('AddedNewMovie', () => {
  let component: AddedNewMovie;
  let fixture: ComponentFixture<AddedNewMovie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddedNewMovie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddedNewMovie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
