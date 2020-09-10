import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { RouterTestingModule } from "@angular/router/testing";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrintMoviesComponent } from './components/print-movies/print-movies.component';
import { OneMovieComponent } from './components/one-movie/one-movie.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ReactiveFormsModule } from "@angular/forms";
import { AdminComponent } from './components/admin/admin.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

@NgModule({
  declarations: [
    AppComponent,
    PrintMoviesComponent,
    OneMovieComponent,
    CartComponent,
    PaymentComponent,
    AdminComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterTestingModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
