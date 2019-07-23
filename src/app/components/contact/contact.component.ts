import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public _sendEmailForm: FormGroup;

  constructor(private _formBuilder: FormBuilder){

  }


  async ngOnInit() {
    await this.createForm();
  }




  async createForm() {
    this._sendEmailForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      email: ["", [Validators.required]],
      comment: ["", [Validators.required]],
    });
  }


  async submitEmail() {
    console.log(this._sendEmailForm.value);
  }
}
