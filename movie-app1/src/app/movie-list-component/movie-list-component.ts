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

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    // Get movies from the service
    this.movieList = this.movieService.getMovies();
  }

  // Method to delete a movie
  deleteMovie(movie: MovieVar): void {
    this.movieService.deleteMovie(movie);
  }
}
