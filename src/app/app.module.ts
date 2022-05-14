import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/commons/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-modules';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SignUpComponent } from './components/pages/signup/signup.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RoutingComponent } from './components/commons/routing/routing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValueResultComponent } from './components/pages/value-result/value-result.component';
import { LoadExcelComponent } from './components/commons/load-excel/load-excel.component';
import { PortfolioRoutingModule } from './components/pages/portfolio/portfolio-routing.module';
import { PortfolioEditComponent } from './components/pages/portfolio/portfolio-edit/portfolio-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    SignUpComponent,
    LoginComponent,
    RoutingComponent,
    ValueResultComponent,
    LoadExcelComponent,
    PortfolioEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    PortfolioRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
