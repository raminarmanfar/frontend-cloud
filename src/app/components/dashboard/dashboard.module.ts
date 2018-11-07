import { AppDirectivesModule } from './../../app-directives-modules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AppMaterialsModule } from '../../app-material-module';

import { ChangePasswordComponent } from './for-both/change-password/change-password.component';
import { LoggedUserInfoComponent } from './for-both/logged-user-info/logged-user-info.component';
import { DashRootComponent } from './dashboard-user/dash-root/dash-root.component';
import { ManageUsersComponent } from './dashboard-admin/manage-users/manage-users.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FlexLayoutModule,
    AppMaterialsModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AppDirectivesModule,
  ],
  declarations: [
    ChangePasswordComponent,
    LoggedUserInfoComponent,
    DashRootComponent,
    ManageUsersComponent,
  ]
})
export class DashboardModule { }
