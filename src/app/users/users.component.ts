import { Component, OnInit } from '@angular/core';
import {  UsersService } from "../users.service";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ UsersService ]
})
export class UsersComponent implements OnInit {

  constructor(private gUsers: UsersService) { }

  ngOnInit(): void {
  }

  doSearch(username: string){
this.gUsers.getUsers(username);
  }

}
