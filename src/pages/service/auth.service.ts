import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Nav} from 'ionic-angular'

@Injectable()
export class AuthService {

  authState: any = null;

  constructor(private afAuth: AngularFireAuth,  private nav: Nav) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
  }
 

  
  loginWithEmail(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        return user;
        // this.authState = user
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }
  signOut(): void {
    this.afAuth.auth.signOut();
  }
}
