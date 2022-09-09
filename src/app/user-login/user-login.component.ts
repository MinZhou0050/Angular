import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  // public loginForm !: FormGroup


  constructor() { }

  ngOnInit(): void {
    // this.loginForm = this.formBuilder.group({
    //   account:[''],
    //   password:['']
    // })
  }

  // login() {

  // }

}
