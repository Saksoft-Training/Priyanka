import { Component, EventEmitter, Output } from '@angular/core';
import { MovieVar } from '../models/movieVar';
import { MovieService } from '../services/movie.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-add-movie-component',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './add-movie-component.html',
    styleUrl: './add-movie-component.scss'
})
export class AddMovieComponent {
    title: string = '';
  year: string = '';
  imageUrl: string = '';
  
  constructor(private movieService: MovieService) {}
  
/**
 * Add a new movie to the list

 * @summary Initializes a MovieVar object with title year, and imageUrl.
 * @returns A new Movie object with id set to 0
 * 
 */
  add() {
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
}