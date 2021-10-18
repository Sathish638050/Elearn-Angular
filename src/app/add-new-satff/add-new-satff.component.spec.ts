import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSatffComponent } from './add-new-satff.component';

describe('AddNewSatffComponent', () => {
  let component: AddNewSatffComponent;
  let fixture: ComponentFixture<AddNewSatffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewSatffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewSatffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
