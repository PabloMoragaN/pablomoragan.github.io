import { Component, OnInit } from '@angular/core';
import { animate, transition, state, style, trigger } from '@angular/animations';

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
  constructor() { }

  ngOnInit() {
  }


  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

}
