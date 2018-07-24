import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isActive = true;
  title = 'app';
  
  onSave(){
    console.log("Button Clicked");
  }

  onKeyUp($event){
    console.log($event.keyCode + " \n");
  }

}
