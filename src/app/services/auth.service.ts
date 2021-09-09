import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { User } from '../modules/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 // user:User

  userData: Observable<any>;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
    console.log(this.userData);
   }


    
 /* Sign up */
 SignUp(email: string, password: string) {
  this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(res => {
    console.log('You are Successfully signed up!', res);
    })
    .catch(error => {
    console.log('Something is wrong:', error.message);
    });
  }
  
  /* Sign in */
  SignIn(email: string, password: string) {
    debugger
  this.angularFireAuth
  .signInWithEmailAndPassword(email, password)
  .then(res => {
  console.log(`You're in!`);
  })
  .catch(err => {
  console.log('Something went wrong:',err.message);
  });
  }
  
  /* Sign out */
  SignOut() {
  this.angularFireAuth
  .signOut();
  }
 
}
