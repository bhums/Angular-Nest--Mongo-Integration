
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './../model/user';
import { UserService } from './../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  users: any[];
  userDetails: any[];
  constructor(private userService: UserService, private _route: Router) {}

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
   this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
  onDelClick(event: Event) {
    const itemId: any = event.currentTarget['id'];
  }
  onEditClick(event: Event) {
    const itemId: any = event.currentTarget['id'];

    this.userDetails = this.users.filter( (user) => {
      if (user._id === itemId) {
        return user;
      }
    });

    this._route.navigate(['register'],  { queryParams: { selDetails: JSON.stringify(this.userDetails) } });
  }
}
