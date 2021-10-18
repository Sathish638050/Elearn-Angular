import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCOurseComponent } from './add-course.component';

describe('AddCOurseComponent', () => {
  let component: AddCOurseComponent;
  let fixture: ComponentFixture<AddCOurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCOurseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCOurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
