globalMy.UIEvent_get_view = function () {
  if (!(this instanceof UIEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['view'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了UIEvent_get_view,result => ', '' + result);
  }
  return result;
};
globalMy.UIEvent_get_detail = function () {
  if (!(this instanceof UIEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['detail'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了UIEvent_get_detail,result => ', '' + result);
  }
  return result;
};
globalMy.UIEvent_get_sourceCapabilities = function () {
  if (!(this instanceof UIEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['sourceCapabilities'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了UIEvent_get_sourceCapabilities,result => ', '' + result);
  }
  return result;
};
globalMy.UIEvent_get_which = function () {
  if (!(this instanceof UIEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['which'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了UIEvent_get_which,result => ', '' + result);
  }
  return result;
};
globalMy.UIEvent_initUIEvent = function () {
  if (!(this instanceof UIEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了UIEvent_initUIEvent, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};