import { Http } from '@angular/http'; 
//  allow us to send requests to the Reddit or Other API

import { FORM_DIRECTIVES } from '@angular/common'; 
//FORM_DIRECTIVES imports all the form related directives from the angular library

import { Control } from '@angular/common';
//will allow us to create a “Control” for inputs (which will supply our Observable).
//-----------ex---------------------------- 
this.subredditControl = new Control();
this.subredditControl.valueChanges.subscribe( value => {} );
//input창의 변화를 감지하고 변화를 subscribe
//-----------------------------------------
