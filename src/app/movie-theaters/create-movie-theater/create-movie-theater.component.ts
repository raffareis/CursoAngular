import { Component, OnInit } from '@angular/core';
import { MovieTheaterCreationDTO } from '../movie-theaters.models';

@Component({
  selector: 'app-create-movie-theater',
  templateUrl: './create-movie-theater.component.html',
  styleUrls: ['./create-movie-theater.component.css']
})
export class CreateMovieTheaterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveChanges(movieTheaterCreationDTO: MovieTheaterCreationDTO) {
    console.log(movieTheaterCreationDTO);
  }

}
