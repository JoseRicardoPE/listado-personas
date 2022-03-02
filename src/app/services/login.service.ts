import { Injectable } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import * as firebase from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: any;

  constructor(private router: Router) { }

  login(email: string, password: string) {
    const auth = firebase.getAuth();
    firebase.signInWithEmailAndPassword(auth, email, password)
    .then( (response) => {
      auth.currentUser?.getIdToken().then( token => {
        this.token = token;
        this.router.navigate(['/']);
      })
    })
  }
  getIdToken(){
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logOut(){
    const auth = firebase.getAuth();
    auth.signOut().then( () => {
      this.token = null;
      this.router.navigate(['/login']);
    }).catch (error => { console.log(`Error de logout ${error}`)});
  }
}


