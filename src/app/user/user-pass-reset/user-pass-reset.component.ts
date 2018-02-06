import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-pass-reset',
  templateUrl: './user-pass-reset.component.html',
  styleUrls: ['./user-pass-reset.component.css']
})
export class UserPassResetComponent implements OnInit {
  errorText:string = "";
  showError:boolean = false;
  showUserName:boolean = true;//
  showQuestion:boolean = false;
  showPassword:boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  usernameNext() {
    this.showUserName = false;
    


    this.showQuestion=true;

  }

}
