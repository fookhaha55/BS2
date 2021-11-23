import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BS2';
  n1: number = 5;
  n2: number = 2;
  picName:string = "https://s.isanook.com/au/0/ud/15/77967/lamborghinihuracansto6.jpg";
  hi(name:string){
    alert("Hi " + name);
  }
}
