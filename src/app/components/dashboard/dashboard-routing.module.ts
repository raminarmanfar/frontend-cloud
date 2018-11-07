import { AuthGuard } from '../../auth/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashRootComponent } from './dashboard-user/dash-root/dash-root.component';
import { LoggedUserInfoComponent } from './for-both/logged-user-info/logged-user-info.component';
import { ChangePasswordComponent } from './for-both/change-password/change-password.component';

const routes: Routes = [
  {
    path: '',
    component: DashRootComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'logged-user-info',
    component: LoggedUserInfoComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
