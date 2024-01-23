import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPathisComponent } from './list-pathis.component';

describe('ListPathisComponent', () => {
  let component: ListPathisComponent;
  let fixture: ComponentFixture<ListPathisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPathisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPathisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
