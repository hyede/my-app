import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-side',
  templateUrl: './nav-side.component.html',
  styleUrls: ['./nav-side.component.css']
})
export class NavSideComponent implements OnInit {


  navItemts: NavItemt [] = [
    new NavItemt('第1个商品', '描述1', 'www.baidu.com',true),
    new NavItemt("第2个商品", "描述2", "www.baidu.com",true),
    new NavItemt("第3个商品", "描述3", "www.baidu.com",true),
    new NavItemt("第4个商品", "描述4", "www.baidu.com",true),
    new NavItemt("第5个商品", "描述5", "www.baidu.com",true)
  ];

  constructor() {

  }

  ngOnInit() {
    console.log(this.navItemts.length);
  }


}

export class NavItemt {
  public name: string;
  public desc: string;
  public href: string;
  public isCheck: boolean;

  constructor( name: string,
               desc: string,
               href: string,  isCheck: boolean) {
    this.name = name;
    this.desc = desc;
    this .href = href;
    this .isCheck = isCheck;

  }
}
