import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  {
    path: 'users',
    component: UserListComponent,
  },
  {
    path: 'adduser',
    component: AddUserComponent,
  },
  {
    path: 'edituser/:id',
    component: EditUserComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
