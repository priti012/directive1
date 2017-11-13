import {Component, NgModule,Directive, VERSION,HostListener,} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { ViewChild,Output,EventEmitter } from '@angular/core';
declare var $:JQueryStatic;
@Component({
 selector: "my-app",
  template: `
    <h1> Autocomplete Directive Test - Local Source </h1>
     
  
     <input mydir [(ngModel)]="someOtherProp" list='myField1' (myField)="myent($event)"/>
     <datalist id="myField1" #dataContainer >
      
</datalist>
    {{myField}}
  
 `,
  styles: [`
    ng2-auto-complete, input {
      display: block; border: 1px solid #ccc; width: 300px;
    }
  `]
})
export class App {
  name:string;
  myField='test';
  datalist1:any;
  
  @ViewChild('dataContainer') dataContainer: ElementRef;
  
  constructor() {
    this.name = `Angular! v${VERSION.full}`
  }
  
  myent($event)
  {
    //data from services..
    let str=""
    let nameArray = ["Rick Bross","Madison Smith","Jack Johnson"];
    for (var i = 0; i < nameArray.length; i++) {
    if ((nameArray[i]).toUpperCase().indexOf(($event).toUpperCase())>-1)
    str = str + '<option value='+ nameArray[i] + '>';
    }
    //alert(str)
    this.dataContainer.nativeElement.innerHTML = str
  }
    
    //this.datalist1= '<option value="sourabh">'
    //this.loadData();
  }


@Directive({ selector: '[mydir]' })
export class HiddenDirective {
@Output('myField') customSubmit: EventEmitter<any> = new EventEmitter();


constructor() {}

  
@HostListener('keyup', ['$event'])
handleKeyboardEvent(event) {
  //alert(event.target.value);
  this.customSubmit.emit(event.target.value)

}
    
}

@NgModule({
  imports: [ BrowserModule ,FormsModule],
  declarations: [ App,HiddenDirective],
  bootstrap: [ App ]
})
export class AppModule {}