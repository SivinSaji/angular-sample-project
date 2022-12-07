import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    if (this.loginService.checkLoggedIn()) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  localData: any
  loginMesssage: any;
  loginSuccess = false;
  currentvalue = '';
  temp = 'surya'
  numberArray = [7, 8, 9, 4, 5, 6, 1, 2, 3];

  submitButton = {
    fontSize: "1rem",
    width: "100px",
    backgroundColor: "#222424",
    padding: ".5rem 1rem",
    margin: ".3rem",
    color: "#fff",
    borderRadius: ".5rem"
  };

  userLogin(formData: NgForm) {
    const password = "1234";
    if (formData.value.password == '' || formData.value.password == null) {
      this.loginSuccess = false;
      this.loginMesssage = 'Password is required';
    } else {
      if (formData.value.password == password) {
        localStorage.setItem('userData', password);
        console.log(localStorage.getItem('userData'));

        this.loginMesssage = 'Unlocked';
        this.router.navigate(['/home']);
        this.loginSuccess = true;
      } else {
        this.loginSuccess = false;
        this.loginMesssage = 'Password is incorrect';
      }
    }
  }

  numberClick(num: number) {
    if (this.currentvalue == null) {
      this.currentvalue = '';
      let number = num + '';
      this.currentvalue = this.currentvalue + number;
    } else {
      let number = num + '';
      this.currentvalue = this.currentvalue + number;
    }
  }

  delete() {
    this.currentvalue = this.currentvalue.slice(0, -1);
  }

  clear() {
    this.currentvalue = '';
  }

  logOut() {
    localStorage.clear()
    this.router.navigate(['/login']);
  }

  colorFunction() {

  }
}
