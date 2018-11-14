import { AppDirectivesModule } from './app-directives-modules';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialsModule } from './app-material-module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);

import { AdminGuard } from './auth/guards/admin.guard';
import { UserGuard } from './auth/guards/user.guard';
import { AuthService } from './auth/auth.service';
import { ContactService } from './services/contact.service';
import { UserService } from './services/user.service';

import { AppComponent } from './components/app-root/app.component';
import { ToolbarComponent } from './components/ui-design/toolbar/toolbar.component';
import { SubToolbarComponent } from './components/ui-design/sub-toolbar/sub-toolbar.component';
import { NavbarComponent } from './components/ui-design/navbar/navbar.component';
import { FooterComponent } from './components/ui-design/footer/footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { DialogComponent } from './components/ui-design/dialog/dialog.component';
import { PopupLoginComponent } from './components/popup-login/popup-login.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppMaterialsModule,
    FontAwesomeModule,
    HttpClientModule,
    AppDirectivesModule,
  ],
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    FooterComponent,
    SubToolbarComponent,
    WelcomeComponent,
    UnderConstructionComponent,
    DialogComponent,
    PopupLoginComponent,
  ],
  entryComponents: [
    DialogComponent,
    PopupLoginComponent,
  ],
  providers: [
    AuthService,
    UserGuard,
    AdminGuard,
    ContactService,
    UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
