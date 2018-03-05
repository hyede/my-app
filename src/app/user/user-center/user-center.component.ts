import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user.model';

@Component({
  selector: 'app-user-center',
  templateUrl: './user-center.component.html',
  styleUrls: ['./user-center.component.css']
})
export class UserCenterComponent implements OnInit {

  user: User;
  edit: boolean = false;
  constructor() {
  }

  ngOnInit() {
    this.user = new User(1,'hyede','123456',15860124109,'123@qq.com','我的名字','我是我');
  }
  onEdit() {
    this.edit = true;
  }

}
