export function getUrlParam(name){
  let reg     = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  let result  = window.location.search.substr(1).match(reg);
  return result ? decodeURIComponent(result[2]) : null;
}
