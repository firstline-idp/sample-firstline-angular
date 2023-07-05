import { Component, Inject } from '@angular/core';
import { AuthService } from '@first-line/firstline-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) { }

  loginWithRedirect() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout();
  }
}
