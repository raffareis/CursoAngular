export interface MovieDTO {
    title: string,
    genreId: number,
    posterUrl: string,
    releaseDate: string,
    inTheaters: boolean,
    upcomingReleases: boolean,
    id: number
}

export interface MovieFilterDTO {
    title: string,
    genreId: number,
    inTheaters: boolean,
    upcomingReleases: boolean
}
