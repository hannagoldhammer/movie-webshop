import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrintMoviesComponent } from './components/print-movies/print-movies.component';
import { OneMovieComponent } from './components/one-movie/one-movie.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AdminComponent } from './components/admin/admin.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';


const routes: Routes = [
  { path: "", component: PrintMoviesComponent },
  { path: "movies/:id", component: OneMovieComponent },
  { path: "cart", component: CartComponent },
  { path: "payment", component: PaymentComponent },
  { path: "admin", component: AdminComponent },
  { path: "thankyou", component: ThankYouComponent },
  { path: "**", component: PrintMoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
