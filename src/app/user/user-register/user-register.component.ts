import {Component, OnInit} from '@angular/core';
import { FormControl  } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  private userName: FormControl = new FormControl();

  constructor() {
    this.userName.valueChanges.debounceTime(500).subscribe(value => {
      console.log(value);
    });
  }

  ngOnInit() {
  }


}
