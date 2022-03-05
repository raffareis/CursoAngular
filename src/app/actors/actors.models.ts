export interface ActorDTO {
    id: number,
    name: string,
    dateOfBirth: Date,
    picture: string,
    biography: string
}
export interface ActorCreationDTO {
    id: number,
    name: string,
    dateOfBirth: Date,
    picture: File,
    biography: string
}
