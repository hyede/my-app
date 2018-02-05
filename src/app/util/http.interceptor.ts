import { Interceptor, InterceptedRequest, InterceptedResponse } from 'ng2-interceptors';

import {Inject} from '@angular/core';

export class ServerURLInterceptor implements Interceptor {

  constructor(@Inject('LocalStorage') public localStorage) { }

  public interceptBefore(request: InterceptedRequest): InterceptedRequest {

    // 修改请求
    console.log( this.localStorage.getObject('config').csptToken);
    if(this.localStorage.getObject('config') && this.localStorage.getObject('config').csptToken){

        request.options.headers.set("CTTS-Token" ,this.localStorage.getObject('config').csptToken);

    }
    return request;
  }
  public interceptAfter(response: InterceptedResponse): InterceptedResponse {
    if(response.response.headers.toJSON()["Set-CTTS-Token"]){
      var config = this.localStorage.getObject('config');
      config.csptToken = response.response.headers.toJSON()["Set-CTTS-Token"];
      this.localStorage.setObject('config',config);
    }
    if(response.response.headers.toJSON()["set-ctts-token"]){
      var config = this.localStorage.getObject('config');
      config.csptToken = response.response.headers.toJSON()["set-ctts-token"];
      this.localStorage.setObject('config',config);
    }
    return response;
  }

}
