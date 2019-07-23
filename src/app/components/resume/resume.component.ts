import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  public resumeShow = false;


  constructor() { }


  spinnerValue(value) {
    return value + "%";
  }

  ngOnInit() {
  }

}
