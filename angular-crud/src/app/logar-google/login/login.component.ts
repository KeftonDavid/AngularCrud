import { auth } from 'firebase/app';
import { Component, OnInit } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { AuthService } from './../../auth/auth.service';
import { Router } from '@angular/router';
import { take, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user$: Observable<firebase.User> = this.auth.user$;

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.auth
      .loginGoogle()
      .pipe(
        take(1),
        catchError((error) => {
          alert(`${error.message} 😢`);
          return EMPTY;
        }),
      )
      .subscribe(
        (response) =>
          response &&
          alert(`Bem vindo`)); 
  }

  logout() {
    this.auth
      .logoutGoogle()
      .pipe(take(1))
      .subscribe((response) => {
        this.router.navigate(['']);
        alert('Volte sempre')
      });
  }
}



