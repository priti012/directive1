import { Directive, HostListener  } from '@angular/core';

@Directive({ selector: 'myHidden' })
export class HiddenDirective {

    constructor() {}


    
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    alert("hi ");
    var nameArray = ["Rick Bross","Madison Smith","Jack Johnson"];
    for (var i = 0; i < nameArray.length; i++) {
    if(nameArray[i].indexOf($('#listo').val())>-1)
    $('#myField').append('<option value='+ nameArray[i] + '>');
    
    }
  }
    
}
