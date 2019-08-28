import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailSenderService } from 'src/app/services/email-sender.service';
import { WarningGenericComponent } from '../warning-generic/warning-generic.component';

@Component({
  selector: 'email-dialog',
  templateUrl: './email-dialog.component.html',
  styleUrls: ['./email-dialog.component.css'],
  providers: [EmailSenderService]
})
export class EmailDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EmailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private _formBuilder: FormBuilder, private _emailSenderService: EmailSenderService,private dialog?: MatDialog) { }

  public _sendEmailForm: FormGroup;
  public isPopupOpened = true;

  async ngOnInit() {
    await this.createForm();
  }

  async switchType(event) {


    if (event.value === 'references') {
      this._sendEmailForm.get('comment').setValue("I'd like to formally request your references.");

    } else if (event.value === 'hiring') {
      this._sendEmailForm.get('comment').setValue("");

    } else if (event.value === 'general') {
      this._sendEmailForm.get('comment').setValue("");
    }
  }


  async createForm() {
    this._sendEmailForm = this._formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ["", [Validators.required]],
      type: ["", [Validators.required]],
      comment: ["", [Validators.required]],
    });

    if (this.data.type || this.data.type != null || this.data.type != undefined) {

      if (this.data.type === 'references') {
        this._sendEmailForm.get('type').setValue("references");

        this._sendEmailForm.get('comment').setValue("I would like to formally request your references.");

      } else if (this.data.type === 'hiring') {
        this._sendEmailForm.get('type').setValue("hiring");


      } else if (this.data.type === 'general') {
        this._sendEmailForm.get('type').setValue("general");



      }
    }
  }


  async submitEmail() {

      this.isPopupOpened = true;
      const dialogRef = this.dialog.open(WarningGenericComponent, {
        
        data: { message: "I'll get in touch with you as soon as I can. Thanks for your email "+this._sendEmailForm.value.firstname+".", timer: 10 }
      });


      dialogRef.afterClosed().subscribe(async result => {
        this.isPopupOpened = false;
        return;
      });

    this.dialogRef.close();
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
