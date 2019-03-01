//3. import the component decorator
import { Component } from "@angular/core";

//2. define component decorator above the class
@Component({
  selector: 'pm-root', //find this custom html tag in index.html
  template: `
  <div><h1>{{pageTitle}}</h1>
    <div>I made my first component!</div>
  </div>`
})

//1. start by creating class
export class AppComponent {
  pageTitle: string = "American Public Mysteries";
}