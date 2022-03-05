import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUpercase } from 'src/app/validators/firstLetterUppercase';
import { GenreCreationDTO } from '../genres.models';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent implements OnInit {


  constructor(private formBuilder: FormBuilder) { }

  form!: FormGroup;

  @Input()
  model: GenreCreationDTO | undefined;

  @Output()
  onSubmit: EventEmitter<GenreCreationDTO> = new EventEmitter<GenreCreationDTO>();

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required, Validators.minLength(3), firstLetterUpercase()],
      }]
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }






  getErrorMessageFieldName() {
    const field = this.form.get('name');
    if (field?.hasError('required')) {
      return 'You must enter a value';
    }
    if (field?.hasError('minlength')) {
      return 'You must enter at least 3 characters';
    }
    if (field?.hasError('firstLetterUpercase')) {
      return field?.getError('firstLetterUpercase')?.message;
    }

    return '';
  }


  submit() {

    this.onSubmit.emit(this.form.value);

  }

}
