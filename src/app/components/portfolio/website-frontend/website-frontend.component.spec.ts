import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteFrontendComponent } from './website-frontend.component';

describe('WebsiteFrontendComponent', () => {
  let component: WebsiteFrontendComponent;
  let fixture: ComponentFixture<WebsiteFrontendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteFrontendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
