import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorCreationDTO, ActorDTO } from '../actors.models';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.css']
})
export class CreateActorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


  }

  saveChanges(actorCreationDTO: ActorCreationDTO) {
    console.log(actorCreationDTO);
  }

}
