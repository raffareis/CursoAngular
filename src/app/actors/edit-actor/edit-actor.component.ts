import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorsService } from 'src/app/utilities/mock-data/actor-service';
import { ActorCreationDTO, ActorDTO } from '../actors.models';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  @Input()
  model!: ActorDTO | undefined;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.model = new ActorsService().list().find(x => x.id == params.id);
    });
  }

  saveChanges(actorCreationDTO: ActorCreationDTO) {
    console.log(actorCreationDTO);
  }

}
