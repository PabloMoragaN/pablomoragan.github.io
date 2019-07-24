import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EmailDialogComponent } from './components/email-dialog/email-dialog.component';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pmoraga-website';

  constructor(public dialog: MatDialog,private _router: Router) {

  }
  
  ngOnInit(): void {

    this._router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });

  }


   openEmailDialog() : void {
    const dialogRef = this.dialog.open(EmailDialogComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
     
    });

  }

}


