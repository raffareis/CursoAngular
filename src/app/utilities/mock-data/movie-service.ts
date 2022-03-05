import { MovieDTO } from "src/app/movies/movies.models";

export class MoviesService {
    constructor() { }

    list(): MovieDTO[] {
        return [{
            id: 1,
            title: 'The Shawshank Redemption',
            genreId: 1,
            posterUrl: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
            releaseDate: '1994-09-23',
            inTheaters: true,
            upcomingReleases: false
        },
        {
            id: 2,
            title: 'The Godfather',
            genreId: 1,
            posterUrl: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
            releaseDate: '1972-03-14',
            inTheaters: false,
            upcomingReleases: true
        },
        {
            id: 3,
            title: 'The Godfather: Part II',
            genreId: 1,
            posterUrl: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
            releaseDate: '1974-12-20',
            inTheaters: true,
            upcomingReleases: true
        },
        {
            id: 4,
            title: 'The Dark Knight',
            genreId: 1,
            posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
            releaseDate: '2008-07-18',
            inTheaters: true,
            upcomingReleases: false
        },
        {
            id: 5,
            title: 'The Matrix',
            genreId: 2,
            posterUrl: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
            releaseDate: '1999-03-30',
            inTheaters: true,
            upcomingReleases: false



        },
        {
            id: 6,
            title: 'The Matrix Reloaded',
            genreId: 2,
            posterUrl: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
            releaseDate: '2003-03-28',
            inTheaters: true,
            upcomingReleases: false


        },
        {
            id: 7,
            title: 'The Lord of the Rings: The Return of the King',
            genreId: 3,
            posterUrl: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
            releaseDate: '2003-12-17',
            inTheaters: false,
            upcomingReleases: false
        },
        {
            id: 8,
            title: 'The Lord of the Rings: The Fellowship of the Ring',
            genreId: 3,
            posterUrl: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg',
            releaseDate: '2001-12-19',
            inTheaters: true,
            upcomingReleases: false
        }

        ];
    }
}
