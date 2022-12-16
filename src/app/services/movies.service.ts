import { Injectable } from '@angular/core';
import   {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  _url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=bf091621962bdf5c30339e874a2a0c1a&language=en-US&page=1';
  constructor(private http: HttpClient) {
    
  }

  getMovies(){
    return this.http.get(this._url)
  }
}
