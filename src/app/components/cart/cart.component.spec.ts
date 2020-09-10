import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { Movie } from 'src/app/model/Movie';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should clear the cart", () => {
    component.clearCart();
    let itemsInCart = component.getCartItems().length;

    expect(itemsInCart).toEqual(0);

    const newMovie: Movie = {
      name: "En liten film",
      price: 200,
      imageUrl: "URL",
      id: 79,
      description: "Beskrivning på en film",
      amount: 2,
      productCategory: []
    }

    component.cartService.addToCart(newMovie);

    itemsInCart = component.getCartItems().length;

    expect(itemsInCart).toEqual(1);

    component.clearCart();

    itemsInCart = component.getCartItems().length;

    expect(itemsInCart).toEqual(0);
  });

  it('should delete a movie', () => {
    component.cartService.clearCart();
    let itemsInCart = component.getNumberOfItems();

    expect(itemsInCart).toEqual(0)

    const addMovie = new Movie();
    addMovie.name = "En liten film",
    addMovie.price = 200;
    addMovie.imageUrl = "URL";
    addMovie.id = 79;
    addMovie.description = "Beskrivning på en film";
    addMovie.amount = 2;

    component.cartService.addToCart(addMovie);

    const addMovie2 = new Movie();
    addMovie2.name = "En stor film",
    addMovie2.price = 50;
    addMovie2.imageUrl = "URL";
    addMovie2.id = 80;
    addMovie2.description = "Beskrivning på en stor film";
    addMovie2.amount = 3;

    component.cartService.addToCart(addMovie2);

    itemsInCart = component.cartService.getNumberOfItems();

    expect(itemsInCart).toEqual(5);

    expect(component.cartService.getCartItems().length).toEqual(2)

    component.cartService.deleteMovie(addMovie);

    itemsInCart = component.cartService.getNumberOfItems();

    expect(itemsInCart).toEqual(3);

    expect(component.cartService.getCartItems().length).toEqual(1)
  });

  it('should get total price', () => {
    component.cartService.clearCart();
    let totalPrice: number = 0;

    const addMovie = new Movie();
    addMovie.name = "En liten film",
    addMovie.price = 49;
    addMovie.imageUrl = "URL";
    addMovie.id = 79;
    addMovie.description = "Beskrivning på en film";
    addMovie.amount = 2;

    component.cartService.addToCart(addMovie);

    const addMovie2 = new Movie();
    addMovie2.name = "En stor film",
    addMovie2.price = 50;
    addMovie2.imageUrl = "URL";
    addMovie2.id = 80;
    addMovie2.description = "Beskrivning på en stor film";
    addMovie2.amount = 3;

    component.cartService.addToCart(addMovie2);

    totalPrice = component.cartService.getTotalPrice();

    expect(totalPrice).toEqual((49 * 2) + (50 * 3));
  });

  it('should delete one item from cart', () => {
    const movie = {
      id: 1, name: 'En film som ska raderas', description: 'Är den raderad?', price: 50, imageUrl: 'URL',
      amount: 1, year: 1996, productCategory: [{ categoryId: 1, category: 'action' }]
    };
    component.deleteMovie(movie);
    expect(component.getCartItems.length).toEqual(0);
  });
});
