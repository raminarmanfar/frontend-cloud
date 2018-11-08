import { AdminGuard } from '../../auth/guards/admin.guard';
import { UserGuard } from '../../auth/guards/user.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoggedUserInfoComponent } from './for-both/logged-user-info/logged-user-info.component';
import { ChangePasswordComponent } from './for-both/change-password/change-password.component';
import { AdminDashRootComponent } from './for-admin/admin-dash-root/admin-dash-root.component';
import { UserDashRootComponent } from './for-user/user-dash-root/user-dash-root.component';
import { ManageUsersComponent } from './for-admin/manage-users/manage-users.component';

const routes: Routes = [
  {
    path: 'user-page',
    component: UserDashRootComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'admin-page',
    component: AdminDashRootComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'manage-users',
    component: ManageUsersComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'logged-user-info',
    component: LoggedUserInfoComponent,
    canActivate: [UserGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
