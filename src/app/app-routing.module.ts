import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginNewComponent } from './components/login-new/login-new.component';
import { TopThreeProductsComponent } from './components/top-three-products/top-three-products.component';
import { TopWidgetComponent } from './components/top-widget/top-widget.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:"dashboard",
    component:DashboardComponent,
    pathMatch:"full"
  },
  {
    path:"registration",
    component:RegistrationComponent,
    pathMatch:"full"
  },
  {
    path:"loginNew",
    component:LoginNewComponent,
    pathMatch:'full'
  },
  {
    path:"TopThreeProductsComponent",
    component:TopThreeProductsComponent,
    pathMatch:"full"
  },
  {
    
      path:"TopWidgetComponent",
      component:TopWidgetComponent,
      pathMatch:"full"
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
