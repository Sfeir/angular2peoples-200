import { NgLocalization } from '@angular/common';

export class CustomLocalization extends NgLocalization {
   getPluralCategory(value: any) {
     if(value > 1) {
       return 'other';
     }
   }
 }
