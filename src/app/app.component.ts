import { Component, OnInit } from '@angular/core';
import { Movie } from './models/movie';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  movies: Movie[] = [] ;

  constructor(private moviesServices: MoviesService){
  }
  ngOnInit(): void {
    this.listMovies()
  }

  listMovies(){
    this.moviesServices.getMovies().subscribe((movies:any) => {
      this.movies = movies['results'];
    });
  }


}
