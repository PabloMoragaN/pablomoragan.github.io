import { Component, OnInit } from '@angular/core';
import { ResumePdfDialogComponent } from './resume-pdf-dialog/resume-pdf-dialog.component';
import { MatDialog } from '@angular/material';
import { EmailDialogComponent } from '../email-dialog/email-dialog.component';

@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  public resumeShow = false;


  constructor(public dialog: MatDialog) { }


  spinnerValue(value) {
    return value + "%";
  }

  ngOnInit() {
  }


  openResumePdfDialog() : void {
    const dialogRef = this.dialog.open(ResumePdfDialogComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
     
    });

  }


  openEmailDialog(): void {
    const dialogRef = this.dialog.open(EmailDialogComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {

    });

  }

}
