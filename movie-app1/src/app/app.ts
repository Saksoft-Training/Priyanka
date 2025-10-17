import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ParentMovieComponent } from './parent-movie-component/parent-movie-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrls: ['../styles.scss']
})
export class App {
  protected readonly title = signal('movie-app1');
}
