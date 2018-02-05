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
import { UserLoginComponent } from './user/user-login/user-login.component';

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
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [{provide:'LocalStorage',useClass:LocalStorage},
    Config,
    ServerURLInterceptor,
    HttpUtil,
    {
      provide: InterceptorService,
      useFactory: interceptorFactory,
      deps: [XHRBackend, RequestOptions, ServerURLInterceptor]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
