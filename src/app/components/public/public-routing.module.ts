import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { GoalsComponent } from './goals/goals.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AboutMeComponent
  },
  {
    path: 'about-me',
    redirectTo: ''
  },
  {
    path: 'contact-me',
    component: ContactMeComponent
  },
  {
    path: 'register-user',
    component: RegisterComponent
  },
  {
    path: 'forget-passowrd',
    component: ForgetPasswordComponent
  },
  {
    path: 'goals',
    component: GoalsComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
