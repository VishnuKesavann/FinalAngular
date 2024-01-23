import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledPatientListComponent } from './disabled-patient-list.component';

describe('DisabledPatientListComponent', () => {
  let component: DisabledPatientListComponent;
  let fixture: ComponentFixture<DisabledPatientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisabledPatientListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledPatientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
