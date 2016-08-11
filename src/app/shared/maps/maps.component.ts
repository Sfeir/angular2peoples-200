import { Component, Input, ViewChild } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sfeir-maps',
  templateUrl: 'maps.component.html',
  styleUrls: ['maps.component.css']
})
export class MapsComponent {

  @Input() people: any[];
  @ViewChild('map') mapElement: any;

  private map: any;
  private bounds: any;
  private marker: any;
  private infoWindow: any;
  private selectedPerson: any;

  constructor() {
    this.selectedPerson = {};
  }

  ngAfterViewInit() {
    this.initilize();
  }

  ngOnChanges() {
    if(this.map){
      setTimeout( () => this.updateMap(), 500 );
    }
  }

  private initilize() {
    this.bounds = new google.maps.LatLngBounds();
    let mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(48.85661400000001, 2.3522219000000177),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    // Display multiple markers on a map
    this.infoWindow = new google.maps.InfoWindow();
  }

  // called on ngOnChanges
  private updateMap() {

      this.people.forEach( (person, index) => {

        if(!person.geo) return false;

        let position = new google.maps.LatLng(person.geo.lat, person.geo.lng);
        this.bounds.extend(position);

        let marker = new google.maps.Marker({
          position: position,
          map: this.map
        });

        // Allow each marker to have an info window
        let infoWindow = this.infoWindow;
        let map = this.map;
        let selectedPerson = this.selectedPerson;
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return (clickEvent) => {
            infoWindow.setContent(`
              <div>
                <img width="80" height="80" src="${person.photo}" />
                <h3>
                  <span>${person.firstname} ${person.lastname}</span>
                </h3>
              </div>
            `);
            infoWindow.open(map, marker);
            infoWindow.setPosition(position);
          }
        })(marker, index));

      });

      // Automatically center around the selected
      // marker
      if(this.people.length === 1) {
        let person = this.people.pop();
        let position = new google.maps.LatLng(person.geo.lat, person.geo.lng);
        this.map.setCenter(position);
        let marker = new google.maps.Marker({
          position: position,
          map: this.map
        });
        this.infoWindow.setContent(`
          <div>
            <img width="80" height="80" src="${person.photo}" />
            <h3>
              <span>${person.firstname} ${person.lastname}</span>
            </h3>
          </div>
        `);
        this.infoWindow.open(this.map, marker);
      }
      else {
        // Automatically center the map fitting all markers on the screen
        this.map.fitBounds(this.bounds);
      }

  }

}
