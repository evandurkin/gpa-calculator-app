// Title: Exercise 7.4
// Author: Evan Durkin
// Date: February 19, 2022

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpaComponent } from './gpa.component';

describe('GpaComponent', () => {
  let component: GpaComponent;
  let fixture: ComponentFixture<GpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
