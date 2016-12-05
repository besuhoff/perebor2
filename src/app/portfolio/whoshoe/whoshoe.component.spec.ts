/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhoshoeComponent } from './whoshoe.component';

describe('WhoshoeComponent', () => {
  let component: WhoshoeComponent;
  let fixture: ComponentFixture<WhoshoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoshoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoshoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
