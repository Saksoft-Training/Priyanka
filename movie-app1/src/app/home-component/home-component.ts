import { Component } from '@angular/core';
import { MovieVar } from '../models/movieVar';
import { MovieService } from '../services/movie.service';
import { HomeMovieService } from '../home-movie-service';

@Component({
  selector: 'app-home-component',
  imports: [],
  templateUrl: './home-component.html',
  styleUrls: ['../../styles.scss']
})
export class HomeComponent {
  //#region Objects of movies array
  /**
   * @description Recommended Movies Array
   */
  recommendedMovies: MovieVar[] = [];
  //#endregion
  //#region Constructor Method
  /**
   * @description Constructor method to initialize the object of HomeMovieService
   * @param homeService to initialize the HomeMovieService
   */
  constructor(private homeService: HomeMovieService) { }
  //#endregion
  //#region OnInit Method
  /**
   * @description Lifecycle hook that initializes the component and fetches recommended movies
  */
  ngOnInit(): void {
    this.homeService.getMovies().subscribe({
      next: (movies) => {
        this.recommendedMovies = movies;
      },
      error: (err) => {
        console.error('Error loading movies:', err);
      }
    });
  }
  //#endregion
}
