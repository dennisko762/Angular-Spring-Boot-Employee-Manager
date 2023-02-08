import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/user/Model/user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  private usersUrl: string;
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

  public deleteUser(id: number) {
    return this.http.delete(`${this.usersUrl}/${id}`)
  }

  public findUserById(id: number) {
    return this.http.get<User>(`${this.usersUrl}/${id}`)
  }

  public editUser(user: User) {
    return this.http.put<User>(`${this.usersUrl}/${user.id}`, user)
  }
}