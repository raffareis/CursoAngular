import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from '../utils';


@Component({
  selector: 'app-input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.css']
})
export class InputImageComponent implements OnInit {

  constructor() { }

  @Output()
  onImageSelected = new EventEmitter<File>();

  @Input()
  urlCurrentImage: string | undefined;


  imageBase64: string | undefined;

  ngOnInit(): void {
  }
  change(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (!fileList) return;
    let file = fileList[0]
    if (file) {
      toBase64(fileList[0]).then((value: string) => this.imageBase64 = value);
      this.urlCurrentImage = undefined;
      this.onImageSelected.emit(file);
    }
  }

}
