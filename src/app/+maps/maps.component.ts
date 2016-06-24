import { Component, OnInit, Input, ViewChild } from '@angular/core';

declare var google: any;

@Component({
  moduleId: module.id,
  selector: 'sfeir-maps',
  templateUrl: 'maps.component.html',
  styleUrls: ['maps.component.css'],
  directives: []
})
export class MapsComponent implements OnInit {

  @Input() lat: number;
  @Input() lng: number;

  @ViewChild('map') map: any;

  constructor() {}

  ngOnInit() {
    this.initilize(this.lat, this.lng);
  }

  initilize(latitude, longitude) {
    var myLatlng = new google.maps.LatLng(latitude, longitude);
    var mapOptions = {
        zoom: 8,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(this.map.nativeElement, mapOptions);

     //=====Initialise Default Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'marker'
     //=====You can even customize the icons here
    });

     //=====Initialise InfoWindow
    var infowindow = new google.maps.InfoWindow({
        content: "<B>Skyway Dr</B>"
    });

     //=====Eventlistener for InfoWindow
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
  }

}
