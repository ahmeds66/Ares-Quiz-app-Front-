import { Router } from '@angular/router';
import { UsersService } from './users.service';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  users = this.usersService.getUsers();

  public loggedUser!: string;
  public isloggedIn: boolean = false;
  public isAdmin: boolean = false;// to set role as admin on login
  public isUser: boolean = false;// to set role as user on login
  public token!: string;


  constructor(private usersService : UsersService,
              private router : Router) { }

  ngOnInit() {}

  logout() {
    this.isloggedIn = false;
    this.isAdmin = false;
    this.loggedUser = "";
    localStorage.removeItem('token');
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    this.router.navigate(['login']);
  }
  
  cycrptToken(token: string) {
    let encryptedToken = "";
    for (let i = 0; i < token.length; i++) {
      encryptedToken += String.fromCharCode(token.charCodeAt(i) + 1);
    }
    return encryptedToken;
  }

  login(username: string, password: string) {
    this.users.forEach( (curUser) => {
      if (curUser.username == username && curUser.password == password) {
        this.loggedUser = username;
        this.isloggedIn = true;
        if (curUser.role == "admin") {
          this.isAdmin = true;
        }
        else {
          this.isUser = true;
        }
        localStorage.setItem('isloggedIn',String(this.isloggedIn));
        localStorage.setItem('isAdmin',String(this.isAdmin));
        localStorage.setItem('loggedUser',this.loggedUser);
        this.router.navigate(['/dashboard']);
      }
    }
    );
  }

}
