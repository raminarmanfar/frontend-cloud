import { AppDirectivesModule } from '../../app-directives-modules';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppMaterialsModule } from '../../app-material-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { GoalsComponent } from './goals/goals.component';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    FlexLayoutModule,
    AppMaterialsModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AppDirectivesModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    AboutMeComponent,
    ContactMeComponent,
    ProjectsComponent,
    GoalsComponent,
  ]
})
export class PublicModule { }
