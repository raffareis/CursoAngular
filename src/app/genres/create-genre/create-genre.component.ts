import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenreCreationDTO } from '../genres.models';


@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {


  constructor(private router: Router) { }
  ngOnInit(): void {

  }
  saveChanges(genreCreationDTO: GenreCreationDTO) {
    console.log(genreCreationDTO);
    this.router.navigate(['/genres']);
  }
}



