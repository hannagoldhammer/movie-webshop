import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { Order } from 'src/app/model/Order';
import { Movie } from 'src/app/model/Movie';
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  cartItems: Movie[] = [];

  constructor(private service: DataService, private cartService: CartService, private route: Router) {
    this.paymentForm.value.paymentMethod = "mastercard";
   }

  paymentForm = new FormGroup({
    companyId: new FormControl(99),
    created: new FormControl(new Date()),
    createdBy: new FormControl("", [Validators.required, Validators.minLength(3)]),
    paymentMethod: new FormControl([Validators.required]),
    totalPrice: new FormControl()
  });

  get createdBy() {
    return this.paymentForm.get("createdBy");
  }

  get paymentMethod() {
    return this.paymentForm.get("paymentMethod");
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();

    if(localStorage.getItem("movie")) {
      this.cartItems = JSON.parse(localStorage.getItem("movie"));
    } else {
      this.cartItems = []
    }
  }

  saveForm(){
    const order = new Order();
    order.companyId;
    order.createdBy = this.paymentForm.value.createdBy;
    order.created = new Date();
    order.paymentMethod =  this.paymentForm.value.paymentMethod;
    order.status = 2;
    order.totalPrice = this.cartService.getTotalPrice();
    order.orderRows = [];

    const orderRowDetails = this.cartItems.map((row) => {
      return {
        productId: row.id,
        amount: row.amount
      };
    });

    orderRowDetails.forEach((product) => {
      order.orderRows.push(product);
    });

    this.service.postOrder(order);
    window.localStorage.clear();
    this.route.navigate(["/thankyou"]);
  }
}
