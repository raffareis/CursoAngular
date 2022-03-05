import { ActorDTO } from "src/app/actors/actors.models";

export class ActorsService {

    list(): ActorDTO[] {
        return [
            {
                id: 1,
                name: 'Tom Hanks',
                dateOfBirth: new Date(1956, 7, 9),
                picture: 'https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_UY317_CR2,0,214,317_AL_.jpg',
                biography: 'Thomas Jeffrey "Tom" Hanks was born on September 9, 1956 in Concord, California, to Janet (Norman), a nurse, and Frank (Hanks), a farmer. His father was a screenwriter and producer, and his mother was a teacher. Hanks began acting at a young age. His first major role was in a film adaptation of the novel "Raisin in the Sun," directed by Roger Corman. Hanks appeared in the film for several months before being cast as a supporting actor in the film "A League of Their Own," in 1992. Hanks then starred in the film "Mr. Deeds" (1993), which was nominated for an Academy Award for Best Supporting Actor. In 1994, Hanks appeared in the film "Regarding Henry," directed by James M. Cain, and was cast in the film "Forrest Gump," which became a box office hit. In 1995, Hanks appeared in the film "Apollo 13," directed by Ridley Scott, and was cast in the film "The Usual Suspects," which became a box office hit. In 1996, Hanks appeared in the film "Saving Private Ryan," directed by Steven Spielberg, and was cast in the film "The Departed," which became a box office hit. In 1997, Hanks appeared in the film "Rain"'
            },
            {
                id: 2,
                name: 'Robert De Niro',
                dateOfBirth: new Date(1943, 8, 17),
                picture: 'https://m.media-amazon.com/images/M/MV5BMjAwNDU3MzcyOV5BMl5BanBnXkFtZTcwMjc0MTIxMw@@._V1_UY317_CR13,0,214,317_AL_.jpg',
                biography: 'Robert De Niro was born on August 17, 1943 in New York City, New York, to Gloria (Gianni) De Niro and Frank De Niro. His father was a screenwriter and producer, and his mother was a teacher. De Niro began acting at a young age. His first major role was in a film adaptation of the novel "Raisin in the Sun," directed by Roger Corman. De Niro appeared in the film for several months before being cast as a supporting actor in the film "A League of Their Own," in 1992. De Niro then starred in the film "Mr. Deeds" (1993), which was nominated for an Academy Award for Best Supporting Actor. In 1994, De Niro appeared in the film "Regarding Henry," directed by James M. Cain, and was cast in the film "Forrest Gump," which became a box office hit. In 1995, De Niro appeared in the film "Apollo 13," directed by Ridley Scott, and was cast in the film "The Usual Suspects," which became a box office hit. In 1996, De Niro appeared in the film "Saving Private Ryan," directed by Steven Spielberg, and was cast in the film "The Departed," which became a box office hit. In 1997, De Niro appeared in the film "Rain"'

            },
            {
                id: 3,
                name: 'Al Pacino',
                dateOfBirth: new Date(1940, 4, 25),
                picture: 'https://m.media-amazon.com/images/M/MV5BMTQzMzg1ODAyNl5BMl5BanBnXkFtZTYwMjAxODQ1._V1_UX214_CR0,0,214,317_AL_.jpg',
                biography: 'Al Pacino was born on April 25, 1940 in New York City, New York, to Gloria (Gianni) Pacino and Frank Pacino. His father was a screenwriter and producer, and his mother was a teacher. Pacino began acting at a young age. His first major role was in a film adaptation of the novel "Raisin in the Sun," directed by Roger Corman. Pacino appeared in the film for several months before being cast as a supporting actor in the film "A League of Their Own," in 1992. Pacino then starred in the film "Mr. Deeds" (1993), which was nominated for an Academy Award for Best Supporting Actor. In 1994, Pacino appeared in the film "Regarding Henry," directed by James M. Cain, and was cast in the film "Forrest Gump," which became a box office hit. In 1995, Pacino appeared in the film "Apollo 13," directed by Ridley Scott, and was cast in the film "The Usual Suspects," which became a box office hit. In 1996, Pacino appeared in the film "Saving Private Ryan," directed by Steven Spielberg, and was cast in the film "The Departed," which became a box office hit. In 1997, Pacino appeared in the film "Rain"'
            },
        ];


    }

}
