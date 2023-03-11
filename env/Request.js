// MouseEvent
// MouseEvent
globalMy.Request_get_method = function () {
  if (!(this instanceof Request)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['method'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Request_get_method,result => ', '' + result);
  }
  return result;
};
globalMy.Request_get_url = function () {
  if (!(this instanceof Request)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['url'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Request_get_url,result => ', '' + result);
  }
  return result;
};
globalMy.Request_get_headers = function () {
  if (!(this instanceof Request)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['headers'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Request_get_headers,result => ', '' + result);
  }
  return result;
};
globalMy.Request_get_destination = function () {
  if (!(this instanceof Request)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['destination'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Request_get_destination,result => ', '' + result);
  }
  return result;
};
globalMy.Request_get_referrer = function () {
  if (!(this instanceof Request)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['referrer'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Request_get_referrer,result => ', '' + result);
  }
  return result;
};
globalMy.Request_get_referrerPolicy = function () {
  if (!(this instanceof Request)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['referrerPolicy'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Request_get_referrerPolicy,result => ', '' + result);
  }
  return result;
};
globalMy.Request_get_mode = function () {
  if (!(this instanceof Request)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['mode'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Request_get_mode,result => ', '' + result);
  }
  return result;
};
globalMy.Request_get_credentials = function () {
  if (!(this instanceof Request)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['credentials'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Request_get_credentials,result => ', '' + result);
  }
  return result;
};
globalMy.Request_get_cache = function () {
  if (!(this instanceof Request)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['cache'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Request_get_cache,result => ', '' + result);
  }
  return result;
};
globalMy.Request_get_redirect = function () {
  if (!(this instanceof Request)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['redirect'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Request_get_redirect,result => ', '' + result);
  }
  return result;
};
globalMy.Request_get_integrity = function () {
  if (!(this instanceof Request)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['integrity'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Request_get_integrity,result => ', '' + result);
  }
  return result;
};
globalMy.Request_get_keepalive = function () {
  if (!(this instanceof Request)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['keepalive'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Request_get_keepalive,result => ', '' + result);
  }
  return result;
};
globalMy.Request_get_signal = function () {
  if (!(this instanceof Request)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['signal'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Request_get_signal,result => ', '' + result);
  }
  return result;
};
globalMy.Request_get_isHistoryNavigation = function () {
  if (!(this instanceof Request)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['isHistoryNavigation'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Request_get_isHistoryNavigation,result => ', '' + result);
  }
  return result;
};
globalMy.Request_get_bodyUsed = function () {
  if (!(this instanceof Request)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['bodyUsed'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Request_get_bodyUsed,result => ', '' + result);
  }
  return result;
};
globalMy.Request_arrayBuffer = function () {
  if (!(this instanceof Request)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Request_arrayBuffer, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.Request_blob = function () {
  if (!(this instanceof Request)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Request_blob, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.Request_clone = function () {
  if (!(this instanceof Request)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Request_clone, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.Request_formData = function () {
  if (!(this instanceof Request)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Request_formData, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.Request_json = function () {
  if (!(this instanceof Request)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Request_json, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.Request_text = function () {
  if (!(this instanceof Request)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Request_text, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};