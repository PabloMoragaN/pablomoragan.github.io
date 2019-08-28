import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-warning-generic',
  templateUrl: './warning-generic.component.html',
  styleUrls: ['./warning-generic.component.css']
})
export class WarningGenericComponent implements OnInit {
  public timer;
  public message;
  public intervalo;


  constructor(private dialogRef: MatDialogRef<WarningGenericComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

 
  async ngOnInit() {
    this.timer=this.data.timer;
        this.message=this.data.message;

        this.intervalo = setInterval(async () => {
          this.timer = this.timer - 1;
    
          if (this.timer === 0) {
            this.closeDialog();
    
          }
        }, 1000);
    
        
    }

    closeDialog():void{

       clearInterval(this.intervalo);

        this.dialogRef.close();
    }
   

}
