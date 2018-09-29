import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Student4Component } from './student4.component';

describe('Student4Component', () => {
  let component: Student4Component;
  let fixture: ComponentFixture<Student4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Student4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Student4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
