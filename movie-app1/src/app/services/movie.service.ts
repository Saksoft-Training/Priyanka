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
      imageUrl: 'assets/kantara.avif'
    },
    {
      id: 2,
      title: 'They Call Him OG',
      year: '2025',
      imageUrl: 'assets/they-call-him-og.avif'
    },
    {
      id: 3,
      title: 'Jolly LLB 3',
      year: '2025',
      imageUrl: 'assets/jolly-llb-3.avif'
    }
  ];
  //#region GetMovies
  /**
   * @summary Retrieves all movies from the movie list.
   * @returns MovieVar[] - Array of all movies
   */
  public getMovies(): MovieVar[] {
    return this.movieList;
  }
  //#endregion
  /**
 * @summary Adds a new movie to the movie list.
 * @param movie - The MovieVar object to be added (without ID).
 * The method generates a new unique ID for the movie before adding.
 * @returns void
 */
  //#region Add Movie
  public addMovie(movie: MovieVar): void {
    // Generate a new ID based on the current list
    const newId = this.movieList.length > 0
      ? Math.max(...this.movieList.map(m => m.id)) + 1 : 1;
    const newMovie: MovieVar = {
      ...movie,
      id: newId
    };
    this.movieList.push(newMovie);
  }
  //#endregion
  /**
 * @summary Deletes a specific movie from the movie list.
 * @param movie - The MovieVar object to be deleted.
 * @returns void
 */
  //#region delete the movie
  public deleteMovie(movie: MovieVar): void {
    const index = this.movieList.indexOf(movie);
    if (index > -1) {
      this.movieList.splice(index, 1);
    }
  }
  //#endregion
  //#region
  /**
 * @summary Deletes a movie from the movie list by its ID.
 * @param id - The unique identifier of the movie to be deleted.
 * @returns void
 */
  public deleteMovieById(id: number): void {
    const index = this.movieList.findIndex(m => m.id === id);
    if (index > -1) {
      this.movieList.splice(index, 1);
    }
  }
  //endregion
}