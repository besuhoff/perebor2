/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FmgComponent } from './fmg.component';

describe('FmgComponent', () => {
  let component: FmgComponent;
  let fixture: ComponentFixture<FmgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
