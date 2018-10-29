import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AppMaterialsModule } from '../../app-material-module';

import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoggedUserInfoComponent } from './logged-user-info/logged-user-info.component';
import { DashRootComponent } from './dash-root/dash-root.component';
import { UniqueValidatorDirective } from '../../utils/UniqueValidator.directive';
import { PasswordValidatorDirective } from '../../utils/PasswordValidator.directive';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FlexLayoutModule,
    AppMaterialsModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  declarations: [
    UniqueValidatorDirective,
    PasswordValidatorDirective,

    ChangePasswordComponent,
    LoggedUserInfoComponent,
    DashRootComponent,
  ]
})
export class DashboardModule { }
