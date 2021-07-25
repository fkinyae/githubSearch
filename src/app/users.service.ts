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
      console.log(api)

      
      const promise = new Promise((resolve) => {
        this.http.get<ApiResponse>(api).toPromise().then(getResponse =>  (response:any) => {
          this.users.html_url = response.html_url;
          this.users.description = response.description;
          this.users.created_at = response.created_at;
          this.users.login = response.login;
          this.users.public_repos  = response.public_repos;
          this.users.followers = response.followers;
          this.users.following = response.following;
          this.users.avatar_url = response.avatar_url;
        },);
    });
    return promise;

}
   }

