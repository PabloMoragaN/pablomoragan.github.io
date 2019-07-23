import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EmailDialogComponent } from './components/email-dialog/email-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pmoraga-website';

  constructor(public dialog: MatDialog) {

  }
  ngOnInit(): void {


  }



   openEmailDialog() : void {
    const dialogRef = this.dialog.open(EmailDialogComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
     
    });

  }

}


