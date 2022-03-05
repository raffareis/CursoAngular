import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tileLayer, latLng, LeafletMouseEvent, Marker, marker, Icon, icon } from 'leaflet'
import { CoordinatesMap } from './coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  layers: Marker<any>[] = [];

  @Input()
  initialCoordinates: CoordinatesMap[] = [];

  @Output()
  onSelectedLocation = new EventEmitter<CoordinatesMap>();

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Angular Movies' })
    ],
    zoom: 5,
    center: latLng(-24.0213793429002, -47.4609375)
  };
  ngOnInit(): void {
    console.log("Initial Coordinates: ", this.initialCoordinates);
    this.layers = this.initialCoordinates.map(value => marker([value.latitude, value.longitude], this.markerOptions));
  }

  markerOptions = {
    icon: icon({
      ...Icon.Default.prototype.options,
      iconUrl: 'assets/marker-icon.png',
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      shadowUrl: 'assets/marker-shadow.png'
    })
  };



  mapClick(event: LeafletMouseEvent) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    this.layers = [];
    this.layers.push(marker([lat, lng], this.markerOptions));
    this.onSelectedLocation.emit({ latitude: lat, longitude: lng });


  }

}
