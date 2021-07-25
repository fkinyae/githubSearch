import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import {  UsersService } from "../users.service";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any = Users;
  


  constructor(private userService:  UsersService) {
    
   }

  ngOnInit(): void {
    
  }

  doSearch(username: string){
 this.userService.getUsers(username);
 this.users = this.userService.users;
this.ngOnInit();
  }

}
