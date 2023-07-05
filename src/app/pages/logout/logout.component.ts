import { Component } from '@angular/core';
import { AuthService } from '@first-line/firstline-angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  constructor(public auth: AuthService) {}
}
