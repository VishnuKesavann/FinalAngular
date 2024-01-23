import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-confirmation-dailog',
  templateUrl: './confirmation-dailog.component.html',
  styleUrls: ['./confirmation-dailog.component.scss']
})
export class ConfirmationDailogComponent  {

  constructor(public dialogRef: MatDialogRef<ConfirmationDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }) { }

    onConfirm(): void {
      this.dialogRef.close(true);
    }
  
    onCancel(): void {
      this.dialogRef.close(false);
    }
 

}
