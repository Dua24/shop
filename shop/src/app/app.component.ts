import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;

  constructor(private route: Router, private authService: AuthService) {
    this.title = 'login'
  }
  ngOnInit(): void {

  }
  login() {
    this.authService.login()
  }

  logout() {
    this.authService.logout()
  }
}
