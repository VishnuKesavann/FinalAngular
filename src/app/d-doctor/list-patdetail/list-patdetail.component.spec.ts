import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPatdetailComponent } from './list-patdetail.component';

describe('ListPatdetailComponent', () => {
  let component: ListPatdetailComponent;
  let fixture: ComponentFixture<ListPatdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPatdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPatdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
