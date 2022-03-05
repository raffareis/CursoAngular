import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoordinatesMap } from 'src/app/utilities/map/coordinate';
import { MovieTheaterCreationDTO, MovieTheaterDTO } from '../movie-theaters.models';

@Component({
  selector: 'app-movie-theater-form',
  templateUrl: './movie-theater-form.component.html',
  styleUrls: ['./movie-theater-form.component.css']
})
export class MovieTheaterFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form!: FormGroup;
  initialCoordinates: CoordinatesMap[] = [];

  @Input()
  model: MovieTheaterDTO | undefined;

  @Output()
  onSubmit: EventEmitter<MovieTheaterCreationDTO> = new EventEmitter<MovieTheaterCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [
          Validators.required,
        ]
      }],
      longitude: ['', {
        validators: [
          Validators.required,
        ]
      }],
      latitude: ['', {
        validators: [
          Validators.required,
        ]
      }]
    });

    if (this.model) {

      this.form.patchValue(this.model);
      this.initialCoordinates.push({
        latitude: this.model.latitude,
        longitude: this.model.longitude
      });
    }

  }
  selectedLocation(coordinates: CoordinatesMap) {
    this.form.patchValue(coordinates);
  }
  submit() {
    this.onSubmit.emit(this.form.value);
  }

}
