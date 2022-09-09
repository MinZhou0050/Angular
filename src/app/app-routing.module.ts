import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { AddashboardComponent } from './modules/addashboard/addashboard.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DashboardtComponent } from './modules/dashboardt/dashboardt.component';
import { PostsComponent } from './modules/posts/posts.component';
import { SignupComponent } from './signup/signup.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login', component:UserLoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'timesheet', component:TimesheetComponent,
  children:[{
    path:'job', component: DashboardtComponent
  },{
    path:'add', component:AddashboardComponent
  }]},
  {path:'main', component:MainComponent,
  children:[{
    path:'job', component: DashboardComponent
  },{
    path:'machine', component:PostsComponent
  },{
    path:'home', component:HomeComponent
  }]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
