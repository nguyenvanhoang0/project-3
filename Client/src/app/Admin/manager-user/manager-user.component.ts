import { Component ,OnInit ,SimpleChanges , OnChanges ,Input } from '@angular/core';
import { UserService } from 'src/app/Service/user/user.service';
import { User } from 'src/app/Service/user/user';

@Component({
  selector: 'app-manager-user',
  templateUrl: './manager-user.component.html',
  styleUrls: ['./manager-user.component.css']
})
export class ManagerUserComponent {
  users: User[] | null = null;
  filteredUsers: User[] | null = null;
  currentPage = 1

  isIndexClass = false;


  constructor(private UserService: UserService) {
    this.UserService.getUsers()
      .subscribe((response: User[]) => {
        this.users = response;
      });
  }

}
