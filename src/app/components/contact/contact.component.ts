import { Component, OnInit } from '@angular/core';
import { EmailDialogComponent } from '../email-dialog/email-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {



  constructor(public dialog: MatDialog){

  }


  async ngOnInit() {

  }

  openHiringEmailDialog(): void {
    const dialogRef = this.dialog.open(EmailDialogComponent, {
      data: {type: 'hiring'}
    });

    dialogRef.afterClosed().subscribe(result => {

    });

  }

  openGeneralEmailDialog(): void {
    const dialogRef = this.dialog.open(EmailDialogComponent, {
      data: {type: 'general'}
    });

    dialogRef.afterClosed().subscribe(result => {

    });

  }



}
