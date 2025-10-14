import { Component, OnInit } from '@angular/core';
import { MovieVar } from '../models/movieVar';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-list-component',
  imports: [],
  templateUrl: './movie-list-component.html',
  styleUrl: './movie-list-component.scss'
})
export class MovieListComponent implements OnInit {
  movieList: MovieVar[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    
    this.movieList = this.movieService.getMovies();
  }

/**
 * Add a new movie to the list
 * 
 * @param movie of type MovieVar receives the movie to be deleted
 * @returns void

 * @summary Calls the deleteMovie method from MovieService to remove the specified movie from the list.
 */
  deleteMovie(movie: MovieVar): void {
    this.movieService.deleteMovie(movie);
  }
}
