import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false;

  constructor(private router: Router) { }

  checkLoggedIn(): boolean {
    if (localStorage.getItem('userData')) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    return this.isLoggedIn;
  }

  logOut() {
    localStorage.clear()
    this.router.navigate(['/login']);
  }
}
