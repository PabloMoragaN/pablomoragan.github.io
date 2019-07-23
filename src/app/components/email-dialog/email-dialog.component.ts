import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'email-dialog',
  templateUrl: './email-dialog.component.html',
  styleUrls: ['./email-dialog.component.css']
})
export class EmailDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EmailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private _formBuilder: FormBuilder) { }

  public _sendEmailForm: FormGroup;

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
  closeDialog() {
    this.dialogRef.close();
  }
}
