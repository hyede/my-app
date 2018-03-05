import {Component, OnInit} from '@angular/core';
import {NavItem} from '../model/navItem.model';

@Component({
  selector: 'app-nav-side',
  templateUrl: './nav-side.component.html',
  styleUrls: ['./nav-side.component.css']
})
export class NavSideComponent implements OnInit {


  navItems: NavItem [] = [
    new NavItem('第1个商品', '描述1', 'www.baidu.com',true),
    new NavItem('第2个商品', '描述2', 'www.baidu.com',true),
    new NavItem('第3个商品', '描述3', 'www.baidu.com',true),
    new NavItem('第4个商品', '描述4', 'www.baidu.com',true),
    new NavItem('第5个商品', '描述5', 'www.baidu.com',true)
  ];

  constructor() {

  }

  ngOnInit() {
    console.log(this.navItems.length);
  }


}

