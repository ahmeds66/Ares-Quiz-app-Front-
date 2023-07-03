import { User } from './../model/users.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  users!: User[];

  constructor() {
    this.users = [
      {cin: 14428038, username: "Ares" , password: "123456", email: "souissiahmed@gmail.com", firstname:"Ahmed", lastname:"Souissi", dateOfBirth: new Date('06/06/2002') , address:"00000000", phone:"0000000000" , role:"admin"},
      {cin: 65558655, username:"admin" , password: "123456", email: "test@gmail.com", firstname:"test", lastname:"test", dateOfBirth: new Date('06/06/2002') , address:"", phone:"" , role:"admin"},
      {cin: 45486544, username: "Mohamed66",password: "123456", email: "mohamed@email.com", firstname:"Mohamed", lastname:"Souissi", dateOfBirth: new Date('06/06/2002') , address:"", phone:"" , role:"user"}
    ];
   }

    getUsers() {
      return this.users;
    }

    getUsersByCin(cin: number) {
      return this.users.find(user => user.cin === cin);
    }

    getUserByUsername(username: string) {
      return this.users.find(user => user.username === username);
    }

    addUser(user: User) {
      this.users.push(user);
    }

    

}
