//our root app component
import {Component, NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { NgModel } from '@angular/forms'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HiddenDirective } from 'src/app.directive'
@Component({
  selector: 'my-app',
  templateUrl: 'src/app.html',
  
  })
export class App {
  name:string;
  constructor() {
  }
/*  myName(event)

  {
    var nameArray = ["Rick Bross","Madison Smith","Jack Johnson"];
    for (var i = 0; i < nameArray.length; i++) {
      console.log("hi", $('#listo').val());
      if(nameArray[i].indexOf($('#listo').val())>-1)
   // alert(i + " - " + nameArray[i]); //Works Fine, "0 - Rick Bross", "1 - Madison Smith", etc.
    $('#myField').append('<option value='+ nameArray[i] + '>');
    console.log("ng ",name);
    }// Not working.
}*/
  }


@NgModule({
  imports: [ BrowserModule,FormsModule ],
  declarations: [ App,HiddenDirective ],
  bootstrap: [ App ]
})
export class AppModule {}