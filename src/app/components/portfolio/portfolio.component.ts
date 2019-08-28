import { Component, OnInit } from '@angular/core';
import { animate, transition, state, style, trigger } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { WarningGenericComponent } from '../warning-generic/warning-generic.component';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations:[trigger('fadeInOut', [
    state('void', style({
      opacity: 0
    })),
    transition('void <=> *', animate(1000)),
  ])]
})
export class PortfolioComponent implements OnInit {

  currentState = 'initial';
  public isPopupOpened = true;

  constructor(private dialog?: MatDialog) { }

  ngOnInit() {
  }


  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  openWarningGeneric(){

    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(WarningGenericComponent, {
      data: { message: "The current project is under development", timer: 5 }
    });

    dialogRef.updatePosition({ top: '30px' });


    dialogRef.afterClosed().subscribe(async result => {
      this.isPopupOpened = false;
      return;
    });


  }

}
