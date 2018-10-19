import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { GoalsComponent } from './goals/goals.component';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    AboutMeComponent,
    ContactMeComponent,
    ProjectsComponent,
    GoalsComponent,
  ]
})
export class PublicModule { }
