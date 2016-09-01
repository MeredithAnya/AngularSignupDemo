import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable()
export class UserService {

  constructor(
    private _router: Router) {}

  signup(user) {
    this._router.navigate(['/thankyou'])
    return true;
  }

}
