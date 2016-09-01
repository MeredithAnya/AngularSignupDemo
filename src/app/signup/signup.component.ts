import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { User } from '../user'

@Component({
  moduleId: module.id,
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css'],
  providers: [ UserService]
})
export class SignupComponent implements OnInit {
  user = new User("","","");
  constructor(
    private _service: UserService) {}

  ngOnInit() {
  }
  signup() {
    console.log(this.user.name);
    this._service.signup(this.user);
  }

}
