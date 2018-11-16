import { UserDetailInfoComponent } from './for-both/user-detail-info/user-detail-info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGuard } from '../../auth/guards/admin.guard';
import { UserGuard } from '../../auth/guards/user.guard';

import { ChangePasswordComponent } from './for-both/change-password/change-password.component';
import { ManageUsersComponent } from './for-admin/manage-users/manage-users.component';
import { DashRootComponent } from './for-both/dash-root/dash-root.component';
import { DataOperation } from 'src/app/models/enums/DataOperationEnum';

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
    path: 'logged-user-details/:action',
    component: UserDetailInfoComponent,
    canActivate: [UserGuard, AdminGuard]
  },
  {
    path: 'user-details/:action',
    component: UserDetailInfoComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [UserGuard, AdminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
