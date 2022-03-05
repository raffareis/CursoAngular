import { Component, OnInit } from '@angular/core';
import { MovieDTO } from '../movies/movies.models';
import { MoviesService } from '../utilities/mock-data/movie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.carregaDados();
  }

  moviesInTheater: MovieDTO[] | undefined;
  moviesFutureRelease: MovieDTO[] | undefined;

  title = 'FrontEnd';


  userRated(rating: number) {
    alert(rating);
  }

  private carregaDados() {
    var l = new MoviesService();


    this.moviesInTheater = l.list().filter(movie => movie.inTheaters);
    console.log(this.moviesInTheater);
    this.moviesFutureRelease = l.list().filter(movie => movie.upcomingReleases);
  }

}
