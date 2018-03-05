import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, RequestOptions, XHRBackend} from '@angular/http';

import { AppComponent } from './app.component';
import {Config} from './service/config/config.service';
import {HttpUtil} from './util/http.util';
import { NavSimpleComponent } from './nav-simple/nav-simple.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavSideComponent } from './nav-side/nav-side.component';
import { ResultComponent } from './result/result.component';
import {ServerURLInterceptor} from './util/http.interceptor';
import {InterceptorService} from 'ng2-interceptors';
import {LocalStorage} from './util/local.storage';
import {AppRoutingModule} from './app-routing.module';

import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { HomeComponent } from './home/home.component';
import {UserLoginComponent} from 'app/user/user-login/user-login.component';
import {UserCenterComponent} from 'app/user/user-center/user-center.component';
import {UserRegisterComponent} from 'app/user/user-register/user-register.component';
import {UserPassResetComponent} from './user/user-pass-reset/user-pass-reset.component';
import {UserSidebarComponent} from './user/user-sidebar/user-sidebar.component';

import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserPassUpdateComponent } from './user/user-pass-update/user-pass-update.component';
import { ProductListComponent } from './product/product-list/product-list.component';


export function interceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions,serverURLInterceptor : ServerURLInterceptor) {
  let service = new InterceptorService(xhrBackend, requestOptions);
  service.addInterceptor(serverURLInterceptor);
  return service;
}

@NgModule({
  declarations: [
    AppComponent,
    NavSimpleComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    NavSideComponent,
    ResultComponent,
    HomeComponent,
    UserCenterComponent,
    UserLoginComponent,
    UserPassResetComponent,
    UserRegisterComponent,
    UserSidebarComponent,
    UserEditComponent,
    UserEditComponent,
    UserPassUpdateComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [{provide:'LocalStorage',useClass:LocalStorage},
    Config,
    ServerURLInterceptor,
    HttpUtil,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: InterceptorService,
      useFactory: interceptorFactory,
      deps: [XHRBackend, RequestOptions, ServerURLInterceptor]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
