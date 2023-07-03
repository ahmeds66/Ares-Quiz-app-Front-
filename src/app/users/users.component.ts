import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User} from '../model/users.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users!: User[];

  constructor(private usersService : UsersService,) {
    this.users = usersService.getUsers();
  }
  
  ngOnInit(): void {
  }

}

