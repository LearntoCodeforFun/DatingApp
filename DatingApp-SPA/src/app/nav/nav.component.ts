import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  logginUserName = 'User';

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.logginUserName = this.authService.getLoginUserName();
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.logginUserName = this.authService.getLoginUserName();
      this.alertify.success('logged in successfully');
    }, error => {
      this.alertify.error(error);
      console.log('failed to login');
      console.log(error);
    });
    console.log(this.model);
  }

  loggedIn() {
    return this.authService.loggedIn();
  //  const token = localStorage.getItem('token');
  //  return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    console.log('logged out');
  }
}
