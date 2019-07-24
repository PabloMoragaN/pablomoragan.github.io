import { Component, OnInit, Inject } from '@angular/core';
import { EmailDialogComponent } from '../../email-dialog/email-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'resume-pdf-dialog',
  templateUrl: './resume-pdf-dialog.component.html',
  styleUrls: ['./resume-pdf-dialog.component.css']
})
export class ResumePdfDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EmailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
