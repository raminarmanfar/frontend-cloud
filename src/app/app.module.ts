import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialsModule } from './app-material-module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);

import { AppComponent } from './components/app-root/app.component';
import { ToolbarComponent } from './components/ui-design/toolbar/toolbar.component';
import { SubToolbarComponent } from './components/ui-design/sub-toolbar/sub-toolbar.component';
import { NavbarComponent } from './components/ui-design/navbar/navbar.component';
import { FooterComponent } from './components/ui-design/footer/footer.component';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    FooterComponent,
    SubToolbarComponent,
    WelcomeComponent,
    UnderConstructionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppMaterialsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
