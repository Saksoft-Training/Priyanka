import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieVar } from './models/movieVar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeMovieService {
  //#region Constructor
  /**
   * @description Constructor method to initialize the HttpClient for making HTTP requests
   * @param http Injected instance of HttpClient used to fetch data from external sources
   */
  constructor(private http: HttpClient) { }
  //#endregion
  //#region Methods
  /**
   * @description Fetches the list of movies from the local JSON file
   * @returns Observable<MovieVar[]> An observable stream containing an array of MovieVar objects
   */
  getMovies(): Observable<MovieVar[]> {
    return this.http.get<MovieVar[]>('assets/movies.json');
  }
  //#endregion
}
