import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.movies = [
      {
        id: 1,
        name: 'The Shawshank Redemption',
        year: 1994,
        rating: 9.3,
        genre: 'Drama',
        description: 'Two imprisoned',
        image: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg'

      },
      {
        id: 2,
        name: 'The Godfather',
        year: 1972,
        rating: 9.2,
        genre: 'Crime',
        description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        image: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg'

      },
      {
        id: 3,
        name: 'The Godfather: Part II',
        year: 1974,
        rating: 9.0,
        genre: 'Crime',
        description: 'The early life and career of Vito Corleone in 1920s New York City is portrayed while his son, Michael, expands and tightens his grip on the family crime syndicate.',
        image: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg'
      }
    ]
  }

  movies: any;

  title = 'FrontEnd';
}
