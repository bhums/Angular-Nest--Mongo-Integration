import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public getUsersUrl = 'http://localhost:3000/api/users';
  public users;

  constructor( private _http: HttpClient) { }

  // users : User[] = [{
  //   "id": 1,
  //   "firstName": "ramakrishna",
  //   "lastName": "Bhuma",
  //   "emailId": "bhuma@gmail.com"
  // },

  // {
  //   "id": 2,
  //   "firstName": "ramak",
  //   "lastName": "bhumak",
  //   "emailId": "ramk@gmail.com"
  // }]


  public getUsers(): any {

    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    return this._http.get<User>(this.getUsersUrl);
    // .subscribe(data => {
    //   console.log(data);
    //   this.users = data;
    // });

    // const employeesObservable = new Observable(observer => {
    //       setTimeout(() => {
    //         observer.next(this.users);
    //       }, 1000);
    //     });


    //return this.users;
  }

  public updateUser(id,data): any {
    return this._http.put<User>(`${this.getUsersUrl}/edit?userID=${id}`, JSON.stringify(data), {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    });

  }
  public saveUser(data): any {
    return this._http.post<User>(`${this.getUsersUrl}/post`, JSON.stringify(data), {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    });

  }
  public deleteUser(id): any {
    return this._http.delete<User>(`${this.getUsersUrl}/delete?userID=${id}`);
  }

}
