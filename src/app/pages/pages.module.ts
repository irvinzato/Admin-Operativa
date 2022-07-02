import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialsModule } from './../materials/materials.module';

import { PagesRoutingModule } from './pages-routing.module';
import { CashDifferencesComponent } from './cash-differences/cash-differences.component';
import { OperationCaptureComponent } from './operation-capture/operation-capture.component';
import { HomeComponent } from './home/home.component';
import { OperationsCaptureDialogComponent } from './cash-differences/operations-capture-dialog/operations-capture-dialog.component';


@NgModule({
  declarations: [
    CashDifferencesComponent,
    OperationCaptureComponent,
    HomeComponent,
    OperationsCaptureDialogComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialsModule,
    FormsModule
  ]
})
export class PagesModule { }
