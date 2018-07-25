import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-reactive-form',
  templateUrl: './my-reactive-form.component.html',
  styleUrls: ['./my-reactive-form.component.css']
})
export class MyReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  form = new FormGroup({
    'username' : new FormControl(),
    'password' : new FormControl()
  });

}
