import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningGenericComponent } from './warning-generic.component';

describe('WarningGenericComponent', () => {
  let component: WarningGenericComponent;
  let fixture: ComponentFixture<WarningGenericComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningGenericComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
