import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.maxRatingArray = Array(this.maxRating).fill(0);
    this.previousRating = this.selectedRating;
  }

  @Input()
  maxRating = 5;
  @Input()
  selectedRating = 0;
  @Output()
  onRate: EventEmitter<number> = new EventEmitter<number>();

  previousRating = 0;

  maxRatingArray: number[] = [];

  hover(index: number) {
    this.selectedRating = index + 1;
  }

  leave() {
    this.selectedRating = this.previousRating;
  }

  rate(index: number) {
    this.selectedRating = index + 1;
    this.previousRating = this.selectedRating;
    this.onRate.emit(this.selectedRating);
  }

}
