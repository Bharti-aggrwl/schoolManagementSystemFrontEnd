import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegistrationComponent } from './components/registration/registration.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LoginNewComponent } from './components/login-new/login-new.component';
import { TopWidgetComponent } from './components/top-widget/top-widget.component';
import { SalesByCategoryComponent } from './components/sales-by-category/sales-by-category.component';
import { SalesByMonthComponent } from './components/sales-by-month/sales-by-month.component';
import { TopThreeProductsComponent } from './components/top-three-products/top-three-products.component';
import { LastFewTransactionsComponent } from './components/last-few-transactions/last-few-transactions.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SchoolAttendanceComponent } from './components/school-attendance/school-attendance.component';
import { RegistrationNewComponent } from './components/registration-new/registration-new.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SideNavComponent,
    LoginNewComponent,
    TopWidgetComponent,
    SalesByCategoryComponent,
    SalesByMonthComponent,
    TopThreeProductsComponent,
    LastFewTransactionsComponent,
    DashboardComponent,
    SchoolAttendanceComponent,
    RegistrationNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatDividerModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
