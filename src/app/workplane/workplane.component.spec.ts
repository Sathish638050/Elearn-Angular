import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplaneComponent } from './workplane.component';

describe('WorkplaneComponent', () => {
  let component: WorkplaneComponent;
  let fixture: ComponentFixture<WorkplaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkplaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
