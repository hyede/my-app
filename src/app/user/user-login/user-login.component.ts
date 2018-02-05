import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpUtil} from '../../util/http.util';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {



  loginFormModel:FormGroup;

  constructor(fb:FormBuilder, private httpUtil:HttpUtil) {
    this.loginFormModel = fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      userPwd: ['', [Validators.required, Validators.minLength(6)]],
      organizationCode: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loginFormModel.valueChanges.subscribe(data=> {
      console.log(data);
      console.log(this.loginFormModel);
    });

  }


  onSubmit() {
    if (this.loginFormModel.valid) {
      console.log(this.loginFormModel.value);
      this.httpUtil.post("/accounts/login", this.loginFormModel.value).subscribe(data => {
        console.log(data);
      });
    }

  }

}
