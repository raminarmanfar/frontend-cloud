import { AppDirectivesModule } from '../../app-directives-modules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AppMaterialsModule } from '../../app-material-module';

import { ChangePasswordComponent } from './for-both/change-password/change-password.component';
import { ManageUsersComponent } from './for-admin/manage-users/manage-users.component';
import { UserDetailInfoComponent } from './for-both/user-detail-info/user-detail-info.component';
import { UserDashRootComponent } from './for-user/user-dash-root/user-dash-root.component';
import { AdminDashRootComponent } from './for-admin/admin-dash-root/admin-dash-root.component';
import { DashRootComponent } from './for-both/dash-root/dash-root.component';

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
    ManageUsersComponent,
    UserDetailInfoComponent,
    UserDashRootComponent,
    AdminDashRootComponent,
    DashRootComponent,
    UserDetailInfoComponent,
  ]
})
export class DashboardModule { }
