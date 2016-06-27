import { Component, Input, Output, EventEmitter, NgZone } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'sfeir-maps-marker',
  host: {
    '(click)':'clickTitle($event)'
  },
  template: `
  <div (click)="clickTitle($event)" onclick="clickTitle()">
    <img width="80" height="80" src="{{ photo }}" />
    <h3>
      <span>{{ title }}</span>
    </h3>
  </div>
  `,
  styles: [`
    div {
      text-align: center;
      padding-left: 20px;
    }
    h3 {
      margin: 2px;
    }
    h3 span {
      color: #0168AB;
      font-weight: bold;
      cursor: pointer;
      text-decoration: underline;
    }
    img {
      border-radius: 50%;
    }
  `],
  directives: [ROUTER_DIRECTIVES]
})
export class MapsInfoWindowComponent {

  @Input() lat: number;
  @Input() lng: number;
  @Input() title: number;
  @Input() photo: string;

  @Output('onTitleClick') ee$: EventEmitter<any>;

  constructor(
    private zone: NgZone
  ) {
    this.ee$ = new EventEmitter<any>();
  }

  clickTitle(event) {
    //@todo event not working
    this.zone.run( () => {
      event.preventDefault();
      this.ee$.emit(event);
    });
  }

}
