import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Users } from "./users";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users:any = Users;

  constructor(private http: HttpClient) {
    this.users = new Users("", "","", 0, "",  new Date(), 0, 0);
   }

   getUsers (username:string){

     interface ApiResponse {
            html_url: string;
            description: string;
            created_at: Date;
            login: string;
            public_repos: number;
            followers: number;
            following: number;
            avatar_url: string;
     }
      let api = environment.apiUrl + '/' +username + '?access_token=' + environment.apiKey;
      

      
      let promise = new Promise((resolve ,  reject) => {
        this.http.get<ApiResponse>(api).toPromise().then(  (response:any) => {
          this.users.html_url = response.html_url;
          this.users.description = response.description;
          this.users.created_at = response.created_at;
          this.users.login = response.login;
          this.users.public_repos  = response.public_repos;
          this.users.followers = response.followers;
          this.users.following = response.following;
          this.users.avatar_url = response.avatar_url;
          this.users.bio = response.bio;
          this.users.name = response.name;

          resolve(this.users);
        },
        error => {
          
          reject(error);
        })
    })
    return promise;

}
   }

