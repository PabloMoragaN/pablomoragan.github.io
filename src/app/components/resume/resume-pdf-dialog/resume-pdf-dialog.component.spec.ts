import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePdfDialogComponent } from './resume-pdf-dialog.component';

describe('ResumePdfDialogComponent', () => {
  let component: ResumePdfDialogComponent;
  let fixture: ComponentFixture<ResumePdfDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumePdfDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumePdfDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
