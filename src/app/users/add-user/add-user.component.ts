import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/users.model';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  newUser = new User();
  valid=false;


  constructor(private usersService : UsersService,
              private router : Router) { }

  ngOnInit() {
  }

  addUser(){
    console.log(this.newUser);
    //check if the id is already used or not
    if (this.usersService.getUsersByCin(this.newUser.cin) != null) {
      alert("This id is already used");
      return;
    }
    //check if the username is already used or not
    if (this.usersService.getUserByUsername(this.newUser.username) != null) {
      alert("This username is already used");
      return;
    }
    let conf = confirm("Are you sure you want to add this user?");
      if (conf == true) {
    this.usersService.addUser(this.newUser);
    this.router.navigate(['users']);
    }
    else {
      return;
    }
  }
  checkform() {
    if (this.newUser.cin == null || this.newUser.cin < 0 || this.newUser.cin > 99999999) {
      alert("CIN must be a number between 0 and 99999999");
      return this.valid = false;
    }
    else if (this.newUser.username == null || this.newUser.username.length < 6) {
      alert("Username must be at least 6 characters");
      return this.valid = false;
    }
    else if (this.newUser.password == null || this.newUser.password.length < 6) {
      alert("Password must be at least 6 characters");
      return this.valid = false;
    }
    else if (this.newUser.role == null) {
      alert("Role must be selected");
      return this.valid = false;
    }
    else {
      return this.valid = true;
    }
  }



}
