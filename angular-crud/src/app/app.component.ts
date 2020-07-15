import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-crud';
  user$: any;
  user: any;  
  constructor(private authService: AuthService){}

  ngOnInit(){    
    this.user$ = this.authService.user$;
    this.user = this.authService.user;
  }
}
