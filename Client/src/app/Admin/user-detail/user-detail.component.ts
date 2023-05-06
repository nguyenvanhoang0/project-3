import { Component } from '@angular/core';
import { UserService } from 'src/app/Service/user/user.service';
import { User } from 'src/app/Service/user/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: UserService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getUserById(id).subscribe((user) => {
      this.user = user;
    });
  }
}
