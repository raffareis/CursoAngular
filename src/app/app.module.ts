import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { HomeComponent } from './home/home.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { IndexMovieTheatersComponent } from './movie-theaters/index-movie-theaters/index-movie-theaters.component';
import { CreateMovieTheaterComponent } from './movie-theaters/create-movie-theater/create-movie-theater.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { EditMovieTheaterComponent } from './movie-theaters/edit-movie-theater/edit-movie-theater.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGenreComponent } from './genres/form-genre/form-genre.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component'
import { MoviesService } from './utilities/mock-data/movie-service';
import { FormActorComponent } from './actors/form-actor/form-actor.component';
import { InputImageComponent } from './utilities/input-image/input-image.component';
import { InputMarkdownComponent } from './utilities/input-markdown/input-markdown.component';
import { MarkdownModule } from 'ngx-markdown';
import { MovieTheaterFormComponent } from './movie-theaters/movie-theater-form/movie-theater-form.component'
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MapComponent } from './utilities/map/map.component'


@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    GenericListComponent,
    MenuComponent,
    RatingComponent,
    HomeComponent,
    IndexGenresComponent,
    CreateGenreComponent,
    IndexActorsComponent,
    CreateActorComponent,
    IndexMovieTheatersComponent,
    CreateMovieTheaterComponent,
    CreateMovieComponent,
    EditActorComponent,
    EditMovieComponent,
    EditMovieTheaterComponent,
    EditGenreComponent,
    FormGenreComponent,
    MovieFilterComponent,
    FormActorComponent,
    InputImageComponent,
    InputMarkdownComponent,
    MovieTheaterFormComponent,
    MapComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LeafletModule,
    MarkdownModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
