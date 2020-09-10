import { Subject } from 'rxjs';
import { Movie } from './Movie';

export interface IMovieData {
  movieData: Subject<Movie[]>;
  oneMovie: Subject<Movie>;

  getMovieData(): void;
  getMovie(id: number): void;

}
