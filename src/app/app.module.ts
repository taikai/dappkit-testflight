import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CustomCommonModule } from './custom-common/custom-common.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RoutingModule } from './routing.module';
import { HomeComponent } from './home/home.component';
import { ModelPageComponent } from './model-page/model-page.component';
import { Models } from './app.config';
import { NavbarModule } from './navbar/navbar.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModelPageComponent,
  ],
  imports: [
    BrowserModule,
    CustomCommonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    RoutingModule,
    NavbarModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
