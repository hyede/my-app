import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Input()
  user: User;

  constructor() { }

  ngOnInit() {
  }
  submit(){
    //校验  如果通过 则发送修改请求
  }
}
