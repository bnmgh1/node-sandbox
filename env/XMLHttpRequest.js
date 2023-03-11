globalMy.XMLHttpRequest_get_onreadystatechange = function () {
  if (!(this instanceof XMLHttpRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onreadystatechange'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了XMLHttpRequest_get_onreadystatechange,result => ', '' + result);
  }
  return result;
};
globalMy.XMLHttpRequest_set_onreadystatechange = function (val) {
  if (!(this instanceof XMLHttpRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onreadystatechange'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了XMLHttpRequest_set_onreadystatechange, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.XMLHttpRequest_get_readyState = function () {
  if (!(this instanceof XMLHttpRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['readyState'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了XMLHttpRequest_get_readyState,result => ', '' + result);
  }
  return result;
};
globalMy.XMLHttpRequest_get_timeout = function () {
  if (!(this instanceof XMLHttpRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['timeout'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了XMLHttpRequest_get_timeout,result => ', '' + result);
  }
  return result;
};
globalMy.XMLHttpRequest_set_timeout = function (val) {
  if (!(this instanceof XMLHttpRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['timeout'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了XMLHttpRequest_set_timeout, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.XMLHttpRequest_get_withCredentials = function () {
  if (!(this instanceof XMLHttpRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['withCredentials'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了XMLHttpRequest_get_withCredentials,result => ', '' + result);
  }
  return result;
};
globalMy.XMLHttpRequest_set_withCredentials = function (val) {
  if (!(this instanceof XMLHttpRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['withCredentials'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了XMLHttpRequest_set_withCredentials, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.XMLHttpRequest_get_upload = function () {
  if (!(this instanceof XMLHttpRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['upload'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了XMLHttpRequest_get_upload,result => ', '' + result);
  }
  return result;
};
globalMy.XMLHttpRequest_get_responseURL = function () {
  if (!(this instanceof XMLHttpRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['responseURL'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了XMLHttpRequest_get_responseURL,result => ', '' + result);
  }
  return result;
};
globalMy.XMLHttpRequest_get_status = function () {
  if (!(this instanceof XMLHttpRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['status'];
  result = 200;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了XMLHttpRequest_get_status,result => ', '' + result);
  }
  return result;
};
globalMy.XMLHttpRequest_get_statusText = function () {
  if (!(this instanceof XMLHttpRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['statusText'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了XMLHttpRequest_get_statusText,result => ', '' + result);
  }
  return result;
};
globalMy.XMLHttpRequest_get_responseType = function () {
  if (!(this instanceof XMLHttpRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['responseType'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了XMLHttpRequest_get_responseType,result => ', '' + result);
  }
  return result;
};
globalMy.XMLHttpRequest_set_responseType = function (val) {
  if (!(this instanceof XMLHttpRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['responseType'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了XMLHttpRequest_set_responseType, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.XMLHttpRequest_get_response = function () {
  if (!(this instanceof XMLHttpRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['response'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了XMLHttpRequest_get_response,result => ', '' + result);
  }
  return result;
};
globalMy.XMLHttpRequest_get_responseText = function () {
  if (!(this instanceof XMLHttpRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['responseText'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了XMLHttpRequest_get_responseText,result => ', '' + result);
  }
  return result;
};
globalMy.XMLHttpRequest_get_responseXML = function () {
  if (!(this instanceof XMLHttpRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['responseXML'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了XMLHttpRequest_get_responseXML,result => ', '' + result);
  }
  return result;
};
globalMy.XMLHttpRequest_abort = function () {
  if (!(this instanceof XMLHttpRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了XMLHttpRequest_abort, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.XMLHttpRequest_getAllResponseHeaders = function () {
  if (!(this instanceof XMLHttpRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了XMLHttpRequest_getAllResponseHeaders, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.XMLHttpRequest_getResponseHeader = function () {
  if (!(this instanceof XMLHttpRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了XMLHttpRequest_getResponseHeader, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.XMLHttpRequest_open = function () {
  if (!(this instanceof XMLHttpRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了XMLHttpRequest_open, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.XMLHttpRequest_overrideMimeType = function () {
  if (!(this instanceof XMLHttpRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了XMLHttpRequest_overrideMimeType, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.XMLHttpRequest_send = function () {
  if (!(this instanceof XMLHttpRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了XMLHttpRequest_send, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.XMLHttpRequest_setRequestHeader = function () {
  if (!(this instanceof XMLHttpRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了XMLHttpRequest_setRequestHeader, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};