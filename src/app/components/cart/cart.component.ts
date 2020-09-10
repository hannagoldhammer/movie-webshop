import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Movie } from 'src/app/model/Movie';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit(): void {  }

  clearCart(){
    this.cartService.clearCart();
  }

  deleteMovie(movie: Movie){
    this.cartService.deleteMovie(movie);
  }

  getNumberOfItems(): number{
    return this.cartService.getNumberOfItems();
  }

  getCartItems(){
    return this.cartService.getCartItems();
  }
}
