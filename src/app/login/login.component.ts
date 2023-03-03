import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = "";
  password = "";
  errorMsg = ""; 

  constructor (private auth: AuthService, private router: Router) {}

  ngOnInit() {

  }

  login() {
    if(this.username.trim().length === 0) {
      this.errorMsg = "Userrname is requied";
    }
    else if (this.password.trim().length === 0) {
      this.errorMsg = "Password is requied";
    }
    else {
      this.errorMsg = "";
      let result = this.auth.login(this.username, this.password);
      if (result === 200) {
        this.router.navigate(['home'])
      }
      if (result === 403) {
        this.errorMsg = "Invalid Credential";
      }
    }
  }

}
