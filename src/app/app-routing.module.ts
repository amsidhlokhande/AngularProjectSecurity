import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { AdminBoardComponent } from './components/adminboard/adminboard.component';
import { ModeratorBoardComponent } from './components/moderatorboard/moderatorboard.component';
import { UserBoardComponent } from './components/userboard/userboard.component';


const routes: Routes = [
  { path: 'adminboard', component: AdminBoardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'moderatorboard', component: ModeratorBoardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'userboard', component: UserBoardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
