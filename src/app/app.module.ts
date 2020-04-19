import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserBoardComponent } from './components/userboard/userboard.component';
import { ModeratorBoardComponent } from './components/moderatorboard/moderatorboard.component';
import { AdminBoardComponent } from './components/adminboard/adminboard.component';

import { authInterceptorProviders } from './services/httprequestauthinterceptor.service';
import { CommonModule } from '@angular/common';

@NgModule( {
  declarations: [
    AppComponent,
    RegisterComponent,
    ProfileComponent,
    LoginComponent,
    HomeComponent,
    UserBoardComponent,
    ModeratorBoardComponent,
    AdminBoardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ authInterceptorProviders ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
