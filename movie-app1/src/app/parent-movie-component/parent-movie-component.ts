import { Component, OnInit } from '@angular/core';
import { MovieVar } from '../models/movieVar';
import { HomeComponent } from '../home-component/home-component';
import { MovieListComponent } from '../movie-list-component/movie-list-component';
import { AddMovieComponent } from '../add-movie-component/add-movie-component';
import { AboutComponent } from '../about-component/about-component';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent-movie-component',
  imports: [AddMovieComponent, CommonModule],
  templateUrl: './parent-movie-component.html',
  styleUrls: ['../../styles.scss']
})
export class ParentMovieComponent implements OnInit {
  //#region variables
  /**
   * @param selectedMovie of type MovieVar|null receives the selected movie
   * @param addingmovie of type MovieVar[] receives the array of added movies
   */
  addingmovie: MovieVar[] = [];
  selectedMovie: MovieVar | null = null;
  //#endregion
  //#region Constructor
  /**
   * @param movieService of type MovieService receives the service
   *
   * @summary Initializes the component with the injected MovieService
   */
  constructor(private movieService: MovieService) { }
  //#endregion
  //#region ngOnInit
  /**
   * @summary Initialize the component by getting movies from the service
   */
  ngOnInit(): void {
    // Get movies from the service

  }
  //#endregion
  //#region delete the movie that selected
  /**
  * Add a new movie to the list
   * 
  * @param movie of type MovieVar receives the movie to be deleted
  * @summary Calls the deleteMovie method from MovieService to remove the movie from the list.Delete movie using the service also Clear selected movie if it was deleted.
  */
  public deleteMovie(movie: MovieVar): void {

    this.movieService.deleteMovie(movie);

    if (this.selectedMovie === movie) {
      this.selectedMovie = null;
    }
  }
  //#endregion
  //#region showMovieDetails
  /**
   * @params movie of type MovieVar receives the movie
   * 
   * @summary shows details of the movie 
   */
  public showMovieDetails(movie: MovieVar): void {
    this.selectedMovie = movie;

  }
  //#endregion
}
