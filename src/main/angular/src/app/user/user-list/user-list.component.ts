import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../../services/User/UserService.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
    console.log(this.users)
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(res => this.userService.findAll().subscribe(data => this.users = data));
  }
}