import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginNewComponent } from './components/login-new/login-new.component';
import { RegistrationNewComponent } from './components/registration-new/registration-new.component';


const routes: Routes = [
  // {
  //   path:'',
  //   component:HomeComponent,
  //   pathMatch:'full'
  // },
  // {
  //   path:"login",
  //   component:LoginComponent,
  //   pathMatch:"full"
  // },
  {
      path:'',
      component:LoginNewComponent,
      pathMatch:'full'
  },
  {
    path:"dashboard",
    component:DashboardComponent,
    pathMatch:"full"
  },
  // {
  //   path:"registration",
  //   component:RegistrationComponent,
  //   pathMatch:"full"
  // },
  // {
  //   path:"loginNew",
  //   component:LoginNewComponent,
  //   pathMatch:'full'
  // },
  {
    path:"registrationNew",
    component:RegistrationNewComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
