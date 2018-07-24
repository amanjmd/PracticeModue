import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {

  isSubscribed : boolean;

  log(x){
  
    console.log(x);
    console.log("is Subscribed : "+ this.isSubscribed);
  }
}
