import { Component } from '@angular/core';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Assignment3';

  constructor(public cartService: CartService) { }

  getNumberOfItems(): string{
    return this.cartService.getNumberOfItems().toString();
  }
}
