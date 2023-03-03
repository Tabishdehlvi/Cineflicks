import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router ) { }

  login(user: string, pswd: string) {
    if(user === 'Tabish' && pswd === '12385') {
      return 200;
    }
    else {
      return 403;
    }
  }

  logout() {
    this.router.navigate(['login'])
  }

}
