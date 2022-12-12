import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  bulbImage = "./assets/bulb.png"
  constructor(private router: Router) {
  }
  faCompactDisc = faCompactDisc;
  logOut() {
    localStorage.clear()
    this.router.navigate(['/login']);
  }
}
