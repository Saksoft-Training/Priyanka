import { Component } from '@angular/core';
import { MovieVar } from '../models/movieVar';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../services/movie.service';
import { HighLight } from '../high-light';

@Component({
  selector: 'app-add-movie-component',
  imports: [FormsModule, HighLight],
  templateUrl: './add-movie-component.html',
  styleUrls: ['../../styles.scss']
})
export class AddMovieComponent {
  //#region Properties
  title: string = '';
  year: string = '';
  imageUrl: string = '';
  //#endregion
  //#region Constructor
  /**
   * Creates an instance of AddMovieComponent.
   * @param {MovieService} movieService - The service used for managing movies
   */
  constructor(private movieService: MovieService) { }
  //#endregion
  //#region add Function adds movie 
  /**
   * @summary propoerties are initialized
   * @description Adds a new movie to the list and it resets the form fields.
   */
  public add(): void {
    const newmovie: MovieVar = {
      id: 0,
      title: this.title,
      year: this.year,
      imageUrl: this.imageUrl
    };
    this.movieService.addMovie(newmovie);
    this.title = '';
    this.year = '';
    this.imageUrl = '';
  }
  //#endRegion
}
