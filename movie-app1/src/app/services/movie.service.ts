import { Injectable } from '@angular/core';
import { MovieVar } from '../models/movieVar';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieList: MovieVar[] = [
    {
      id: 1,
      title: 'Kantara',
      year: '2025',
      imageUrl: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kantara-a-legend-chapter-1-et00377351-1701090949.jpg'
    },
    {
      id: 2,
      title: 'They Call Him OG',
      year: '2025',
      imageUrl: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/they-call-him-og-et00369074-1758290791.jpg'
    },
    {
      id: 3,
      title: 'Jolly LLB 3',
      year: '2025',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA0NC43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00450799-rwxwjqxupb-portrait.jpg'
    }
  ];

  constructor() { }

  // Get all movies
  getMovies(): MovieVar[] {
    return this.movieList;
  }

  // Add a new movie
  addMovie(movie: MovieVar): void {
    // Generate a new ID based on the current list
    const newId = this.movieList.length > 0 
      ? Math.max(...this.movieList.map(m => m.id)) + 1 
      : 1;
    
    const newMovie: MovieVar = {
      ...movie,
      id: newId
    };
    
    this.movieList.push(newMovie);
  }

  // Delete a movie
  deleteMovie(movie: MovieVar): void {
    const index = this.movieList.indexOf(movie);
    if (index > -1) {
      this.movieList.splice(index, 1);
    }
  }

  // Delete movie by ID
  deleteMovieById(id: number): void {
    const index = this.movieList.findIndex(m => m.id === id);
    if (index > -1) {
      this.movieList.splice(index, 1);
    }
  }
}