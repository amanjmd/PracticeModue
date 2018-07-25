import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MyReactiveFormComponent } from './my-reactive-form/my-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FavouriteComponent,
    ContactComponent,
    MyReactiveFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
