import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MoviesService } from 'src/app/utilities/mock-data/movie-service';
import { MovieDTO, MovieFilterDTO } from '../movies.models';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {


  }
  form!: FormGroup;
  movies!: MovieDTO[];
  originalMovies!: MovieDTO[];
  genres = [{ id: 1, name: 'Action' }, { id: 2, name: 'Comedy' }, { id: 3, name: 'Drama' }];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false

    });

    var movieService = new MoviesService();
    this.movies = movieService.list();
    this.originalMovies = this.movies;

    this.form.valueChanges.subscribe(value => {
      this.filterMovies(value);

    });
  }
  clearForm(): void {
    this.form.reset();
  }
  filterMovies(value: MovieFilterDTO) {
    console.log(value);
    if (value.title && value.title != '') {
      // filter by title
      this.movies = this.originalMovies.filter(movie => movie.title.toLowerCase().includes(value.title.toLowerCase()));
    } else {
      this.movies = this.originalMovies;
    }
  }

}


