import { Injectable } from '@angular/core';
import { Movie } from '../model/Movie';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  addToCart(movie) {
    let cartItems = this.getCartItems();
    let existed: boolean = false;

    for (let i = 0; i < cartItems.length; i++) {
      if(cartItems[i].id == movie.id){
        cartItems[i].amount++;
        existed = true;
      }
    }
    if(!existed){
      if(movie.amount == undefined){
        movie.amount = 1;
      }
      cartItems.push(movie);
    }
    window.localStorage.setItem("movie", JSON.stringify(cartItems));
  }

  getCartItems() {
    let cartItems = JSON.parse(localStorage.getItem("movie")) || [];
    if(cartItems == undefined){
      return []
    }

    return cartItems;
  }

  getTotalPrice(): number{
    let totalPrice: number = 0;
    let cartItems = this.getCartItems();

    cartItems.forEach(item => {
      totalPrice = totalPrice + item.price * item.amount;
    });

    return totalPrice;
  }

  clearCart() {
    let cartItems = [];

    window.localStorage.setItem("movie", JSON.stringify(cartItems));

    return cartItems;
  }

  deleteMovie(movie: Movie){
    let cartItems = this.getCartItems();
    for (let i = 0; i < cartItems.length; i++) {
      let removeMovie = cartItems[i].id;
      if(removeMovie == movie.id){
        cartItems.splice(i, 1);
      }
    }
    window.localStorage.setItem("movie", JSON.stringify(cartItems));
  }

  getNumberOfItems(): number{
    let totalAmount: number = 0;
    let cartItems = this.getCartItems();

    cartItems.forEach(item => {
      totalAmount += item.amount;
    });

    return totalAmount;
  }
}
