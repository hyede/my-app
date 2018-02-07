import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-simple',
  templateUrl: './nav-simple.component.html',
  styleUrls: ['./nav-simple.component.css']
})
export class NavSimpleComponent implements OnInit {

  @Input()
  title : string='你好';

  constructor() { }

  ngOnInit() {

  }

}
