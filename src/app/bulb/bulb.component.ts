import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bulb',
  templateUrl: './bulb.component.html',
  styleUrls: ['./bulb.component.css']
})
export class BulbComponent {
  bulbImage = "./assets/bulb.png"
  constructor(private router: Router) {
  }
  faCompactDisc = faCompactDisc;
  logOut() {
    localStorage.clear()
    this.router.navigate(['/login']);
  }
}
