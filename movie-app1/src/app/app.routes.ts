import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { AddMovieComponent } from './add-movie-component/add-movie-component';
import { AboutComponent } from './about-component/about-component';
import { MovieListComponent } from './movie-list-component/movie-list-component';
import { ParentMovieComponent } from './parent-movie-component/parent-movie-component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'Home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'addmovie',component:ParentMovieComponent},
    {path:'list',component:MovieListComponent},
    
    // {path:'About',compoenent:}
];
