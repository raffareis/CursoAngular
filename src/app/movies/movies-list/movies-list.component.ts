import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  deleteMovie(id: number): void {
    this.movies?.splice(this.movies.findIndex(movie => movie.id === id), 1);
    console.log("deletando filme: " + id);
  }
  editMovie(id: number): void {

    console.log("editando filme: " + id);
  }

  @Input()
  movies: { id: number; name: string; year: number; rating: number; genre: string; description: string; image: string; }[] | undefined;


}
