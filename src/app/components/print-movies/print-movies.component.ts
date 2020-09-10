import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/Movie';
import { DataService } from 'src/app/service/data.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-print-movies',
  templateUrl: './print-movies.component.html',
  styleUrls: ['./print-movies.component.scss']
})
export class PrintMoviesComponent implements OnInit {
  showImg: true;
  listOfMovies: Movie[] = [];
  id: number;

  imageCover = true;

  constructor(
    private service: DataService, private cartService: CartService) { }

  ngOnInit(): void {

    this.service.movieData.subscribe((movieArray: Movie[]) => {
      this.listOfMovies = movieArray,
      (error: any) => {console.log("Ett fel uppstod: " + error)},
      console.log(movieArray);
    },
    );
    this.service.getMovieData();
  }

  addToCart(movie: Movie){
    this.cartService.addToCart(movie);
  }
}
