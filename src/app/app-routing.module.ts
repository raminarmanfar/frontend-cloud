import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'home',
    redirectTo: ''
  },
  {
    path: 'public',
    loadChildren: '../app/components/public/public.module#PublicModule'
  },
  {
    path: 'dashboard',
    loadChildren: '../app/components/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: '**',
    component: UnderConstructionComponent
  }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
