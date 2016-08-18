import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sfeir-person',
  templateUrl: 'person.component.html',
  styleUrls: ['person.component.css']
})
export class PersonComponent implements OnInit {

  private person: any = {};

  constructor() { }

  ngOnInit() {
    this.person = {
      "email": "luannpowers@sfeir.com",
      "lastname": "Shaffer",
      "firstname": "Vargas",
      "gender": "male",
      "photo": "https://randomuser.me/portraits/men/57.jpg",
      "id": 4013,
      "twitter": "irure",
      "slack": "pariatur",
      "github": "aute",
      "linkedin": "enim",
      "url": "do",
      "contactInfoPro": {
        "mail": "vargasshaffer@sfeir.com",
        "fixedPhone": "+33197542822",
        "mobilePhone": "+33688258827",
        "street": "108 Covert Street",
        "postalCode": "66205",
        "city": "Saranap"
      },
      "functionName": "Greta",
      "functionDescription": "Teresa",
      "entity": "Sfeir-Luxembourg",
      "currentClient": "Adeo",
      "workcity": "Paris",
      "workAdress": "Place...",
      "manager": "Bruno",
      "department": "Recrutement",
      "skills": [
        "ad",
        "dolore",
        "ullamco",
        "sunt",
        "exercitation",
        "Lorem",
        "sint"
      ],
      "entryDate": "27/03/2005",
      "birthDate": "17/10/2008",
      "socialNumber": "16499299613",
      "contactInfoPerso": {
        "mail": "teresashaffer@sfeir.com",
        "fixedPhone": "+33180943636",
        "mobilePhone": "+33684757129",
        "street": "949 Montgomery Street",
        "postalCode": "51008",
        "city": "Tampico"
      },
      "emergencyContact": "",
      "emergencyPhoneNumber": "",
      "driverLicence": "",
      "tshirtSize": "XL",
      "numberOfChild": 2,
      "geo": {
        "lat": 48.849332568574255,
        "lng": 2.367236381364804
      }
    };
  }

}
