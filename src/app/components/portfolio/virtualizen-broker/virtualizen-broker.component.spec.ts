import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualizenBrokerComponent } from './virtualizen-broker.component';

describe('VirtualizenBrokerComponent', () => {
  let component: VirtualizenBrokerComponent;
  let fixture: ComponentFixture<VirtualizenBrokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualizenBrokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualizenBrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
