import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  keyWord: string;

  constructor(private  router:Router) {
  }

  ngOnInit() {
  }

  search() {
    this.router.navigate(['/productList',this.keyWord]);
  }

}
