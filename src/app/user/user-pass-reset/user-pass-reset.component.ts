import {Component, OnInit} from '@angular/core';
import {validate} from "../../util/myutil";

@Component({
  selector: 'app-user-pass-reset',
  templateUrl: './user-pass-reset.component.html',
  styleUrls: ['./user-pass-reset.component.css']
})
export class UserPassResetComponent implements OnInit {


  errorText: string = "";
  question: string;
  correctAnswer: string;
  showError: boolean = false;
  showUserName: boolean = true;//
  showQuestion: boolean = false;
  showPassword: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  usernameNext(username: string) {
    let usernameValidate: boolean = validate(username, "require");
    if (!usernameValidate) {
      this.showError = true;
      this.errorText = '用户名不能为空';
    } else {
      this.showError = false;
      this.errorText = '';
      this.showUserName = false;
      this.showQuestion = true;
      //同时发生获取该用户的问题与答案
      this.question = "你的名字";
      this.correctAnswer = '我是我';
    }
  }

  answerNext(answer: string) {
    if (answer === this.correctAnswer) {
      this.showError = false;
      this.errorText = '';
      this.showQuestion = false;
      this.showPassword = true;
    } else {
      this.showError = true;
      this.errorText = '问题的答案不对';
    }
  }

  passwordNext(passResetForm: any) {
    let passwordValidate: boolean = validate(passResetForm.password, "require");
    if (passResetForm.password.length < 6) {
      passwordValidate = false;
    }
    if (passwordValidate) {
      this.showError = false;
      this.errorText = '';
      //发生修改密码的请求
      console.log('修改密码成功 ');
      console.log(passResetForm);
    } else {
      this.showError = true;
      this.errorText = '新密码不能为空或需要大于6位';
    }
  }

}
