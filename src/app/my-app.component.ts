import { Component } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { RequestAccessCopyComponent} from './request-access-copy/request-access-copy.component'
import { Router, Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'my-app.component.html',
  styleUrls: ['my-app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

@Routes([
  {path: '/signup', component: SignupComponent},
  {path: '/thankyou', component: RequestAccessCopyComponent}
])
export class MyAppComponent {
  constructor(private router: Router) {}
  title = 'my-app works!';
}
