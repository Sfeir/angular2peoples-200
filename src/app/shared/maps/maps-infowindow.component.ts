import { Component, Input, Output, EventEmitter, NgZone } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'sfeir-maps-infowindow',
  template: `
  <div (click)="clickTitle($event)">
    <img width="80" height="80" src="{{ person.photo }}" />
    <h3>
      <span>{{ person.firstname }} {{ person.lastname }}</span>
    </h3>
  </div>
  `,
  host: {
    '[hidden]': 'visibilityStatus'
  },
  styles: [`
    div {
      text-align: center;
      padding-left: 20px;
    }
    h3 {
      margin: 2px;
    }
    img {
      border-radius: 50%;
    }
  `],
  directives: [ROUTER_DIRECTIVES]
})
export class MapsInfoWindowComponent {

  @Input() person: any;
  @Output('onTitleClick') ee$: EventEmitter<any>;

  private visibilityStatus: string = 'none';

  constructor(
    private zone: NgZone
  ) {
    this.ee$ = new EventEmitter<any>();
  }

  setVisibility(state: boolean) {
    console.log(this, state);
    this.visibilityStatus = state ? 'block':'none';
  }

  clickTitle(event) {
    //@todo event not working
    this.zone.run( () => {
      event.preventDefault();
      this.ee$.emit(event);
    });
  }

}
