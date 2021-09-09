import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user?: User
  email?: string;
  password?: string;
  constructor(private router:Router, private authService: AuthService) {
   // this.user = new User();
  }

  ngOnInit(): void {
  }

  signUp() {
      if(this.email != undefined && this.password != undefined) 
      {
        debugger
        this.authService.SignUp(this.email, this.password)
        this.email = '';
        this.password = '';
      } 
  }
  
  signIn() {
    if(this.email != undefined && this.password != undefined) 
    {
      this.authService.SignIn(this.email, this.password);
      this.email = '';
      this.password = '';
    }
  }
  
  signOut() {
    this.authService.SignOut();
  }

}
