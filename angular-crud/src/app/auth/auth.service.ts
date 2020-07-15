import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: BehaviorSubject<Observable<firebase.User>> = new BehaviorSubject<Observable<firebase.User>>(null);
  user$ = this.user.asObservable().pipe(switchMap((user: Observable<firebase.User>) => user));

  constructor(private angularFireAuth: AngularFireAuth) { 
    this.user.next(this.angularFireAuth.authState);
  }

  loginGoogle(): Observable<auth.UserCredential> {
    
    return from(this.angularFireAuth.signInWithPopup(new auth.GoogleAuthProvider()));
  }

  logoutGoogle(): Observable<void> {
    return from(this.angularFireAuth.signOut());
  }
}
