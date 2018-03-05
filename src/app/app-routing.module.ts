import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserLoginComponent} from './user/user-login/user-login.component';
import {UserCenterComponent} from './user/user-center/user-center.component';
import {HomeComponent} from './home/home.component';
import {UserSidebarComponent} from './user/user-sidebar/user-sidebar.component';
import {UserRegisterComponent} from './user/user-register/user-register.component';
import {UserPassResetComponent} from './user/user-pass-reset/user-pass-reset.component';
import {UserEditComponent} from './user/user-edit/user-edit.component';
import {UserPassUpdateComponent} from './user/user-pass-update/user-pass-update.component';
import {ProductListComponent} from "./product/product-list/product-list.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'productList', component: ProductListComponent},
  {
    path: 'user',
    component: UserSidebarComponent,
    children: [
      {path: '', component: UserCenterComponent},
      {path: 'login', component: UserLoginComponent},
      {path: 'register', component: UserRegisterComponent},
      {path: 'userCenter', component: UserCenterComponent},
      {path: 'userPassReset', component: UserPassResetComponent},
      {path: 'userPassUpdate/:id', component: UserPassUpdateComponent},
      {path: 'userEdit', component: UserEditComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
