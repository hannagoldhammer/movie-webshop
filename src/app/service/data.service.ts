import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovieData } from '../model/IMovieData';
import { Movie } from '../model/Movie';
import { Subject } from 'rxjs';
import { Order } from '../model/Order';
import { Category } from '../model/Category';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IMovieData{
  apiURL = "https://medieinstitutet-wie-products.azurewebsites.net/api/products";
  orderApiURL = "https://medieinstitutet-wie-products.azurewebsites.net/api/orders";
  categoryApiURL = "https://medieinstitutet-wie-products.azurewebsites.net/api/categories";
  urlMovieApi: number;

  constructor(private http: HttpClient) { }

  movieData: Subject<Movie[]> = new Subject<Movie[]>();
  categoryData:Subject<Category[]> = new Subject<Category[]>();

  oneMovie = new Subject<Movie>();

  order: Order = new Order;

  getMovieData(): void {
    this.getCategoryData();
    this.categoryData.subscribe((categories: Category[]) => {

      this.http.get(this.apiURL).subscribe((apiData: any) => {

        const movies: Movie[] = apiData.map(apiMovie => {
          const movie = new Movie();
          movie.id = apiMovie.id;
          movie.name = apiMovie.name;
          movie.description = apiMovie.description;
          movie.imageUrl = apiMovie.imageUrl;
          movie.price = apiMovie.price;
          movie.productCategory = apiMovie.productCategory;

          apiMovie.productCategory.forEach(element => {
            categories.forEach(categoryItem => {
              if(categoryItem.categoryId == element.categoryId){
                element.category = categoryItem.category;
              }
            });
          });

          return movie;
        });
        this.movieData.next(movies);
      });
    })
  }

  getCategoryData(): void {
    this.http.get(this.categoryApiURL).subscribe((apiCategorires: any) => {

      const categories: Category[] = apiCategorires.map((apiCategory: any) => {
        const category = new Category();
        category.categoryId = apiCategory.id;
        category.category = apiCategory.name;

        return category;
      });
      this.categoryData.next(categories);
    });
  }

  getMovie(id: number){
    this.getCategoryData();
    this.categoryData.subscribe((categories: Category[]) => {

      this.http.get(this.apiURL + "/" + id).subscribe((apiMovieDetails: any) => {

          apiMovieDetails.productCategory.forEach(element => {
          categories.forEach(categoryItem => {
            if(categoryItem.categoryId == element.categoryId){
              element.category = categoryItem.category;
            }
          });
        });
        this.oneMovie.next(apiMovieDetails);
      })
    });
  }

  postOrder(order: Order): void {
    this.http.post<Order>(this.orderApiURL, order).subscribe((order: Order) => {
      this.order = order,
      (error: any) => {console.log("Ett fel uppstod: " + error)},

      console.log(order);
    });
  }
}
