import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CapturingOperationsPNC } from 'src/app/shared/models/cashDifference.interface';

@Component({
  selector: 'app-operations-capture-dialog',
  templateUrl: './operations-capture-dialog.component.html',
  styleUrls: ['./operations-capture-dialog.component.scss']
})
export class OperationsCaptureDialogComponent implements OnInit {

  capturingInfo!: CapturingOperationsPNC;

  constructor( @Inject(MAT_DIALOG_DATA) public data: { element: CapturingOperationsPNC[] } ) { 
    this.capturingInfo = data.element[0];
  }

  ngOnInit(): void {
    console.log("Estoy recibiendo ", this.capturingInfo);
  }

}
