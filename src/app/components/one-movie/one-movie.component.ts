import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/model/Movie';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-one-movie',
  templateUrl: './one-movie.component.html',
  styleUrls: ['./one-movie.component.scss']
})
export class OneMovieComponent implements OnInit {
  id: number;
  thisMovie: Movie;
  showMovie: boolean = false;
  listOfMovies: Movie[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: DataService,
    private cartService: CartService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = Number(params.id);
      this.service.oneMovie.subscribe((movie: Movie) => {
        this.thisMovie = movie;
        this.showMovie = true;
      })
      this.service.getMovie(this.id);
    });
  }

  addToCart(){
    this.cartService.addToCart(this.thisMovie);
  }
}
