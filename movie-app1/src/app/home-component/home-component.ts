import { Component } from '@angular/core';
import { MovieVar } from '../models/movieVar';

@Component({
  selector: 'app-home-component',
  imports: [],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class HomeComponent {

  //#region Objects of movies array

  /**
   * @description Recommended Movies Array
   */

  recommendedMovies: MovieVar[] = [{
    id: 1,
    title: 'Kantara ',
    year: '2025',
    imageUrl: "assets/Kantara.avif"
  }, {
    id: 2,
    title: 'They Call Him OG ',
    year: '2025',
    imageUrl: 'assets/they-call-him-og.avif'
  }, {
    id: 3,
    title: 'Jolly LLB 3 ',
    year: '2025',
    imageUrl: 'assets/jolly-llb-3.avif'
  }, {
    id: 4,
    title: 'Sunny sanskari ki Tulsi kumari ',
    year: '2025',
    imageUrl: 'assets/Sunny Sanskari.avif'
  }, {
    id: 5,
    title: 'Shin chan the movie',
    year: '2025',
    imageUrl: 'assets/shin-chan.avif'
  }, {
    id: 6,
    title: 'Chainsaw Man ',
    year: '2025',
    imageUrl: 'assets/chainsaw-man.avif'
  }, {
    id: 7,
    title: 'Homebound ',
    year: '2025',
    imageUrl: 'assets/homebound.avif'
  }, {
    id: 8,
    title: 'Mirai ',
    year: '2025',
    imageUrl: 'assets/mirai.avif'
  }, {
    id: 9,
    title: 'One Battle After Another ',
    year: '2025',
    imageUrl: 'assets/one-battle-after-another.avif'
  }, {
    id: 10,
    title: 'The movie',
    year: '2025',
    imageUrl: 'assets/f1-the-movie.avif'
  }, {
    id: 11,
    title: 'Kushi',
    year: '2025',
    imageUrl: 'assets/kushi.avif'
  }, {
    id: 4,
    title: 'Sunny sanskari ki Tulsi kumari',
    year: '2025',
    imageUrl: 'assets/Sunny Sanskari.avif'
  }
  ]

  //#endregion
}
