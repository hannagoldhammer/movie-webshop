import { IMovieData } from '../model/IMovieData';
import { Subject } from 'rxjs';
import { Movie } from '../model/Movie';

export default class MockDataService implements IMovieData{
  oneMovie: Subject<Movie>;
  getMovie(id: number): void {
    throw new Error("Method not implemented.");
  }
  private testMovieList: Movie[] = [
    {id: 3, name: "Star", description: "Good", imageUrl: "url-String", price: 100, amount: 1, productCategory:[{categoryId:5, category: null}]},
    {id: 4, name: "Moon", description: "Very good", imageUrl: "url-String", price: 50, amount: 1, productCategory:[{categoryId:5, category: null}]}
  ];

  movieData: Subject<Movie[]> = new Subject<Movie[]>();

  getMovieData(): void {
    this.movieData.next(this.testMovieList)
  }
}
