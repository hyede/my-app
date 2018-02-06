import {Component, OnInit} from '@angular/core';
import { FormControl  } from '@angular/forms';
import {validate} from "../../util/myutil";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  private userName:FormControl = new FormControl();
  showError:boolean =false;
  errorText:string='';
  constructor() {
    this.userName.valueChanges.debounceTime(500).subscribe(value => {
      if (value && value!=''){
        console.log("异步校验名字 "+value);
      }

    });
  }

  ngOnInit() {
  }

  onSubmit(registerForm:any) {
    registerForm.userName=this.userName.value;
    let result = this.formValidate(registerForm);
    if(!result.status){
      this.showError=true;
      this.errorText=result.msg;
    }else {
      console.log("发送注册请求 "+registerForm);
    }
  }

  private formValidate(registerForm:any):any{

    var result = {
      status  : false,
      msg     : ''
    };

    // 验证用户名是否为空
    if(!validate(registerForm.userName, 'require')){
      result.msg = '用户名不能为空';
      return result;
    }
    // 验证密码是否为空
    if(!validate(registerForm.userPwd, 'require')){
      result.msg = '密码不能为空';
      return result;
    }
    // 验证密码长度
    if(registerForm.userPwd.length < 6){
      result.msg = '密码长度不能少于6位';
      return result;
    }
    // 验证两次输入的密码是否一致
    if(registerForm.userPwd !== registerForm["userPwd-confirm"]){
      result.msg = '两次输入的密码不一致';
      return result;
    }
    // 验证手机号
    if(!validate(registerForm.phone, 'phone')){
      result.msg = '手机号格式不正确';
      return result;
    }
    // 验证邮箱格式
    if(!validate(registerForm.email, 'email')){
      result.msg = '邮箱格式不正确';
      return result;
    }
    // 验证密码提示问题是否为空
    if(!validate(registerForm.question, 'require')){
      result.msg = '密码提示问题不能为空';
      return result;
    }
    // 验证密码提示问题答案是否为空
    if(!validate(registerForm.answer, 'require')){
      result.msg = '密码提示问题答案不能为空';
      return result;
    }
    // 通过验证，返回正确提示
    result.status   = true;
    result.msg      = '验证通过';
    return result;
  }
}
