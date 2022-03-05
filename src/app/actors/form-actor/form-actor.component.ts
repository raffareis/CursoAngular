import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorCreationDTO, ActorDTO } from '../actors.models';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css']
})
export class FormActorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  form!: FormGroup;

  @Input()
  model: ActorDTO | undefined;

  @Output()
  onSubmit: EventEmitter<ActorCreationDTO> = new EventEmitter<ActorCreationDTO>();


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [
          Validators.required,
          Validators.minLength(3),
        ]
      }],
      dateOfBirth: ['', {
        validators: [
          Validators.required,
        ]
      }],
      picture: [''],
      biography: [''],
    });

    if (this.model) {
      this.form.patchValue(this.model);
    }
  }
  submit() {
    this.onSubmit.emit(this.form.value);
  }
  onImageSelected(image: File) {
    this.form.get('picture')?.setValue(image);
  }
  getErrorMessageFieldName() {
    var fieldName = this.form.get('name');
    if (fieldName?.hasError('required')) {
      return 'You must enter a value';
    }
    if (fieldName?.hasError('minlength')) {
      return 'You must enter at least 3 characters';
    }
    fieldName = this.form.get('dateOfBirth');
    if (fieldName?.hasError('required')) {
      return 'You must enter a value';
    }


    return '';
  }

  biographyChanged(value: string) {
    this.form.get('biography')?.setValue(value);
  }

}
