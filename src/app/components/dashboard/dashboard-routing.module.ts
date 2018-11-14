import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGuard } from '../../auth/guards/admin.guard';
import { UserGuard } from '../../auth/guards/user.guard';

import { LoggedUserInfoComponent } from './for-both/logged-user-info/logged-user-info.component';
import { ChangePasswordComponent } from './for-both/change-password/change-password.component';
import { ManageUsersComponent } from './for-admin/manage-users/manage-users.component';
import { DashRootComponent } from './for-both/dash-root/dash-root.component';

const routes: Routes = [
  {
    path: '',
    component: DashRootComponent,
    canActivate: [UserGuard, AdminGuard]
  },
  {
    path: 'manage-users',
    component: ManageUsersComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'user-details/:action',
    component: LoggedUserInfoComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [UserGuard, AdminGuard]
  },
  {
    path: 'logged-user-info/:action',
    component: LoggedUserInfoComponent,
    canActivate: [UserGuard, AdminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
