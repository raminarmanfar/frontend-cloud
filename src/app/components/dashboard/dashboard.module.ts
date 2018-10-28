import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoggedUserInfoComponent } from './logged-user-info/logged-user-info.component';
import { DashRootComponent } from './dash-root/dash-root.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
  declarations: [
    ChangePasswordComponent,
    LoggedUserInfoComponent,
    DashRootComponent,
  ]
})
export class DashboardModule { }
