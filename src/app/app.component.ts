import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practiceP';
  
  colorbg="#fff"
  ChangeBack(){
    this.colorbg="#000"
    console.warn(this.colorbg)
  }
}