import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerDetailsPage } from './broker-details.page';

describe('BrokerDetailsPage', () => {
  let component: BrokerDetailsPage;
  let fixture: ComponentFixture<BrokerDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokerDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
