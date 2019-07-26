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

  async switchType(event) {


    if(event.value === 'references'){
      this._sendEmailForm.get('comment').setValue("I'd like to formally request your references.");

    }else if(event.value === 'hiring'){
      this._sendEmailForm.get('comment').setValue("");

    }else if(event.value === 'general'){
      this._sendEmailForm.get('comment').setValue("");
    }
  }


  async createForm() {
    this._sendEmailForm = this._formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ["", [Validators.required]],
      type: ["",[Validators.required]],
      comment: ["", [Validators.required]],
    });

    if(this.data.type || this.data.type!=null || this.data.type!=undefined){

      if(this.data.type === 'references'){
        this._sendEmailForm.get('type').setValue("references");

        this._sendEmailForm.get('comment').setValue("I'd like to formally request your references.");
  
      }else if(this.data.type === 'hiring'){
        this._sendEmailForm.get('type').setValue("hiring");


      } else if(this.data.type === 'general'){
        this._sendEmailForm.get('type').setValue("general");

        
     
      }
    }
  }


  async submitEmail() {
    console.log(this._sendEmailForm.value);
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
