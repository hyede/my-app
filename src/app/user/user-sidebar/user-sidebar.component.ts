import { Component, OnInit } from '@angular/core';
import {NavItem} from '../../model/navItem.model';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  navItemts: NavItem [] = [
    new NavItem('个人中心', '描述1', 'userCenter',true),
    new NavItem('我的订单', '描述2', 'userCenter',false),
    new NavItem('修改密码', '描述3', 'userPassUpdate/2',false),
    new NavItem('我---', '描述4', 'userCenter',false),
    new NavItem('你----', '描述5',  'userCenter',false)
  ];
  constructor() { }

  ngOnInit() {
  }

}
