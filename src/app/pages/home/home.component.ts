import { Component } from '@angular/core';
import { AuthService } from '@first-line/firstline-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(public auth: AuthService) { }
  loginWithRedirect() {
    this.auth.loginWithRedirect();
  }
}
