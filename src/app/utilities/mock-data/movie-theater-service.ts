import { MovieTheaterDTO } from "src/app/movie-theaters/movie-theaters.models";

export class MovieTheatersService {
    constructor() { }

    list(): MovieTheaterDTO[] {
        return [
            {
                id: 1,
                name: "Cinepolis",
                longitude: -47.4609375,
                latitude: -24.02137934290029
            },
            {
                id: 2,
                name: "Cinepolis 2",
                longitude: -10.1605,
                latitude: 41.5194
            },

        ];
    }
}
