import { Component } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
  selector: "my-app",
  template: `
    <h1> Autocomplete Directive Test - Local Source </h1>
    
    <h3>With Array of Strings</h3>
    <pre>source: {{json(arrayOfStrings)}}</pre>
    <div ng2-auto-complete 
      [source]="arrayOfStrings"
      (ngModelChange)="myCallback($event)"
      placeholder="enter text">
      <input [ngModel]="model1" />
    </div>
    <br/>selected model1: {{json(model1)}}<br/><br/>
  
 `,
  styles: [`
    ng2-auto-complete, input {
      display: block; border: 1px solid #ccc; width: 300px;
    }
  `]
})
export class AppComponent {



  arrayOfStrings: string[] =
    ["A. this", "A. is", "A. array", "A. of", "A. text", "B. this", "B. is", "B. array", "B. of", "B. text", "C. this", "C. is", "C. array", "C. of", "C. text", "D. this", "D. is", "D. array", "D. of", "D. text",];

 
  model1 = "is";
 

  myCallback(newVal) {
    console.log("value is changed to ", newVal);
    this.model1 = newVal;
  }

  renderHero = (data: any) : SafeHtml => {
    let html = `<b style='float:left;width:100%'>${data.name}</b>
                <img style="float: left;padding: 5px;" src="${data.thumbnail.path}/portrait_small.${data.thumbnail.extension}"> 
                <span>${data.description}</span>`;

    return this._sanitizer.bypassSecurityTrustHtml(html);
  }

  rightAligned = (data: any) : SafeHtml => {
    let html = `<div style="text-align:right">${data}.00</div>`;
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }

  json(obj) {
    return JSON.stringify(obj);
  }
}
