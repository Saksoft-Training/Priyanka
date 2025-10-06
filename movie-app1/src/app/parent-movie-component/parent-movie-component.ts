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
  styleUrl: './parent-movie-component.scss'
})
export class ParentMovieComponent implements OnInit {
  addingmovie: MovieVar[] = [];
  selectedMovie: MovieVar | null = null;

  constructor(
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    // Get movies from the service
    this.addingmovie = this.movieService.getMovies();
  }

  deleteMovie(movie: MovieVar) {
    // Delete movie using the service
    this.movieService.deleteMovie(movie);
    console.log('Movie deleted:', movie);
   
    if (this.selectedMovie === movie) {
      // Clear selected movie if it was deleted
      this.selectedMovie = null;
    }
  }
 
  showMovieDetails(movie: MovieVar) {
    this.selectedMovie = movie;
    console.log('Selected movie:', movie);
  }
}
