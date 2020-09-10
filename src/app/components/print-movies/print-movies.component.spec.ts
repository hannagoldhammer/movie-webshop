import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintMoviesComponent } from './print-movies.component';
import { Movie } from 'src/app/model/Movie';
import { DataService } from 'src/app/service/data.service';
import MockDataService from 'src/app/service/MockDataService';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';


describe('PrintMoviesComponent', () => {
  let component: PrintMoviesComponent;
  let fixture: ComponentFixture<PrintMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintMoviesComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule, HttpClientModule ],
      providers: [ PrintMoviesComponent, {provide: DataService, useClass: MockDataService} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should get movies", () => {
    expect(component.listOfMovies.length).toBeGreaterThan(0);
    expect(component.listOfMovies[0].name).toContain("Star");
  });

  it("Number of movies should equal to two", () => {
    const quantityCartInTheBegining = component.listOfMovies.length;

    expect(quantityCartInTheBegining).toEqual(2);
  });

  it("Should add one movie to the cart", () => {
    const quantityCartInTheBegining = component.listOfMovies.length;

    const addMovie = new Movie();
    addMovie.name = "En liten film",
    addMovie.price = 200;
    addMovie.imageUrl = "URL";
    addMovie.id = 1;
    addMovie.description = "Beskrivning på en film";
    addMovie.amount = 1;

    component.addToCart(addMovie);

    const cartTotal = component.listOfMovies.length;

    expect(cartTotal).toBeGreaterThan(1);
  })
});
