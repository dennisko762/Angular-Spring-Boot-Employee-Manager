import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/User/UserService.service';
import { User } from '../Model/user';
import { MatCalendar } from '@angular/material/datepicker';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MatDateFormats,
} from '@angular/material/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  user$: Observable<User>;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((value) => {
      this.user$ = this.userService.findUserById(value.id);
    });
  }

  onSubmit(user: User) {
    this.userService.editUser(user).subscribe((result) => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
