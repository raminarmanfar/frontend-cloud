import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
  declarations: [
    ChangePasswordComponent,
  ]
})
export class DashboardModule { }
