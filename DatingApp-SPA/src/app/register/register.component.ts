import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor( private authServcie: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
   // console.log("username: " + this.model.username +"; password: "+ this.model.password);
    this.authServcie.register(this.model).subscribe(() => {
      this.alertify.success ('registration successful');
      console.log('registration successful');
    }, error => {
      this.alertify.error(error);
      console.log(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }
}
