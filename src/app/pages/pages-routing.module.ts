import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CashDifferencesComponent } from './cash-differences/cash-differences.component';
import { OperationCaptureComponent } from './operation-capture/operation-capture.component';

const routes: Routes = [
  { 
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'cash-difference',
        component: CashDifferencesComponent
      },
      {
        path: 'operation-capture',
        component: OperationCaptureComponent
      },
      {
        path: '**',
        redirectTo: '/'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
