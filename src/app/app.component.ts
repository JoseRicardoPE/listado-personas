import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  titulo:string = 'Listado de Personas con Angular';

  constructor(private loginService:LoginService){ }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyD_TNwWeKKKFO9YFihJK6IpszWTrGHOL78",
      authDomain: "listado-personas-caae3.firebaseapp.com",
    })
  }

  isAuthenticated(){
    return this.loginService.isAuthenticated();
  }

  salir(){
    this.loginService.logOut();
  }

}


 