import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabaddComponent } from './labadd.component';

describe('LabaddComponent', () => {
  let component: LabaddComponent;
  let fixture: ComponentFixture<LabaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
