import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PrivateComponent } from './pages/private/private.component';
import { PublicComponent } from './pages/public/public.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { BasicInterceptor } from './interceptors/basic.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrivateComponent,
    PublicComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: BasicInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
