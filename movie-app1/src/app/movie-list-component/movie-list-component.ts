import { Component, OnInit } from '@angular/core';
import { MovieVar } from '../models/movieVar';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-list-component',
  imports: [],
  templateUrl: './movie-list-component.html',
  styleUrls: ['../../styles.scss']
})
export class MovieListComponent implements OnInit {
  movieList: MovieVar[] = [];
  //#region Constructor
  /**   
   * @param movieService - Injected instance of MovieService.
   */
  constructor(private movieService: MovieService) { }
  //#endregion
  //#region On Init
  /**
   *@description Retrieves the list of movies from the injected MovieService and assigns them to the movieList array.
   */
  ngOnInit(): void {
    this.movieList = this.movieService.getMovies();
  }
  //#endregion
  //#region Delete the movie
  /**
 * Add a new movie to the list
 * @summary Calls the deleteMovie method from MovieService to remove the specified movie from the list.
 * @param movie of type MovieVar receives the movie to be deleted
 * @returns void
 */
  public deleteMovie(movie: MovieVar): void {
    this.movieService.deleteMovie(movie);
  }
  //#endregion
}
