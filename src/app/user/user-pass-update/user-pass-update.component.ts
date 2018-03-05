import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-user-pass-update',
  templateUrl: './user-pass-update.component.html',
  styleUrls: ['./user-pass-update.component.css']
})
export class UserPassUpdateComponent implements OnInit {

  userName: string;
  password: string;
  passwordNew: string;
  passwordConfirm: string;

  constructor(private routeInfo: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.routeInfo.params.subscribe((params: Params) => {
      console.log(params);
      this.userName = params['id'];
    });

  }
  submit(){
    console.log(this.userName);
    console.log(this.password);
    console.log(this.passwordNew);
    console.log(this.passwordConfirm);
  }
}
