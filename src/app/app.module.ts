import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//Custom Imports.
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';

var firebaseConfig = {
  apiKey: "AIzaSyC_3Jki7CtVzTkxTwOc-7960LvNG0ypGgc",
  authDomain: "firestore-8a45f.firebaseapp.com",
  databaseURL: "https://firestore-8a45f.firebaseio.com",
  projectId: "firestore-8a45f",
  storageBucket: "",
  messagingSenderId: "661636630923"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
