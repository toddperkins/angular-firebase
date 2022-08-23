import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyApZ6dzNDDtoFw3peoNyLNBhQcAemQc300",
      authDomain: "angular-fire-9f48d.firebaseapp.com",
      projectId: "angular-fire-9f48d",
      storageBucket: "angular-fire-9f48d.appspot.com",
      messagingSenderId: "434137657379",
      appId: "1:434137657379:web:335357cad32c21fc218196"
    }),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
