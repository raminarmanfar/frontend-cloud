import { Component, Input, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../../../models/DialogData';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @Input() info: any;
  @Output() btnClick: EventEmitter<any> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onBtnClick(): void {
    this.btnClick.emit({ message: 'mothing yet.' });
    this.dialogRef.close();
  }
}
