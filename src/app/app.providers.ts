import { MdToolbar } from '@angular2-material/toolbar';
import { MdInput } from '@angular2-material/input';
import { MdIcon } from '@angular2-material/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';


export let MD_DIRECTIVES: any = [
  MdToolbar,
  MdInput,
  MdIcon,
  ...MD_LIST_DIRECTIVES,
  ...MD_CARD_DIRECTIVES
];
