import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTodayappComponent } from './list-todayapp.component';

describe('ListTodayappComponent', () => {
  let component: ListTodayappComponent;
  let fixture: ComponentFixture<ListTodayappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTodayappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTodayappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
