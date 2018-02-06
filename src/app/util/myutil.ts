declare var $:any;
export function getUrlParam(name){
  let reg     = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  let result  = window.location.search.substr(1).match(reg);
  return result ? decodeURIComponent(result[2]) : null;
}

export function validate(value, type){
  var value = $.trim(value);
  // 非空验证
  if('require' === type){
    return !!value;
  }
  // 手机号验证
  if('phone' === type){
    return /^1\d{10}$/.test(value);
  }
  // 邮箱格式验证
  if('email' === type){
    return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
  }
}
