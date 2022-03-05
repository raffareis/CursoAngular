import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieTheatersService } from 'src/app/utilities/mock-data/movie-theater-service';
import { MovieTheaterCreationDTO, MovieTheaterDTO } from '../movie-theaters.models';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css']
})
export class EditMovieTheaterComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  @Input()
  model: MovieTheaterDTO | undefined;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.model = new MovieTheatersService().list().find(x => x.id == params.id);
    });
  }

  saveChanges(movieTheaterCreationDTO: MovieTheaterCreationDTO) {
    console.log(movieTheaterCreationDTO);
  }

}
