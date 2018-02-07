import { Component, OnInit } from '@angular/core';
import {NavItemt} from "../../model/navItemt.model";

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  navItemts: NavItemt [] = [
    new NavItemt('个人中心', '描述1', 'www.baidu.com',true),
    new NavItemt("我的订单", "描述2", "www.baidu.com",false),
    new NavItemt("修改密码", "描述3", "www.baidu.com",false),
    new NavItemt("我---", "描述4", "www.baidu.com",false),
    new NavItemt("你----", "描述5", "www.baidu.com",false)
  ];
  constructor() { }

  ngOnInit() {
  }

}
