import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public _sendEmailForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  async ngOnInit() {


   await this.createForm();

  }


  async createForm(){
    this._sendEmailForm = this._formBuilder.group({
      name: ['',[Validators.required]],
      email: ["", [Validators.required]],
      comment: ["", [Validators.required]],
  });
  }


  async submitEmail(){
    console.log(this._sendEmailForm.value);
  }
}
