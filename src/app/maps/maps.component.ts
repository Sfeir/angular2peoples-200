import { Component, Input, ViewChild } from '@angular/core';
import { MapsInfoWindowComponent } from './maps-infowindow.component';

@Component({
  moduleId: module.id,
  selector: 'sfeir-maps',
  templateUrl: 'maps.component.html',
  styleUrls: ['maps.component.css'],
  directives: [MapsInfoWindowComponent]
})
export class MapsComponent {

  @Input() lat: number;
  @Input() lng: number;
  @Input() person: any;

  @ViewChild('map') mapElement: any;
  @ViewChild('marker') markerElement: any;

  private map: any;
  private marker: any;
  private infoWindow: any;

  constructor() {}

  ngAfterContentInit() {
    this.initilize(this.lat, this.lng);
  }

  ngOnChanges() {
    if(this.map){
      setTimeout( () => this.updateMap(this.lat, this.lng), 500 );
    }
  }

  private initilize(latitude, longitude) {
    let position = new google.maps.LatLng(latitude, longitude);
    let mapOptions = {
        zoom: 13,
        center: position,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.marker = new google.maps.Marker({
        position,
        map: this.map,
        title: 'Position'
    });

    this.infoWindow = new google.maps.InfoWindow({content: 'Loading'});
    this.infoWindow.open(this.map, this.marker);
    this.marker.addListener('click', () => {
      this.infoWindow.open(this.map, this.marker);
    });

  }

  private updateMap(lat, lng) {
    let pos = {lat, lng};

    let markerContent = this.markerElement.nativeElement.innerHTML;
    this.infoWindow.setContent(markerContent);
    this.infoWindow.setPosition(pos);

    this.marker.setPosition(pos);
    this.map.setCenter(pos);
  }

}
