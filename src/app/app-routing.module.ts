import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserLoginComponent} from "./user/user-login/user-login.component";
import {AppComponent} from "./app.component";
import {UserCenterComponent} from "./user/user-center/user-center.component";
import {HomeComponent} from "./home/home.component";
import {UserSidebarComponent} from "./user/user-sidebar/user-sidebar.component";
import {UserRegisterComponent} from "./user/user-register/user-register.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'user',
    component: UserSidebarComponent,
    children: [
      {path: '', component: UserCenterComponent},
      {path: 'login', component: UserLoginComponent},
      {path: 'register', component: UserRegisterComponent}
    ]
  }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule {}
