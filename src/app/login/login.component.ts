import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { User } from '../model/users.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
user = new User();

constructor(private authService : AuthService) { }

onloggedin(){
  console.log(this.user);
  this.authService.login(this.user.username,this.user.password);
}
}
