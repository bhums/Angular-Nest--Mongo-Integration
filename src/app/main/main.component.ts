
import { Component, OnInit, OnChanges  } from '@angular/core';
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
  deleteId: string;
  constructor(private userService: UserService, private _route: Router) {}

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
   this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
  onGetId(event: Event) {
    this.deleteId = event.currentTarget['id'];
  }

  onDelClick(event: Event) {
    this.userService.deleteUser(this.deleteId).subscribe( data => {
      alert('User deleted successfully');
    });

    setTimeout(() => {
      this.getUserDetails();
    }, 2000);
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
