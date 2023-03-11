globalMy.Plugin_get_name = function () {
  if (!(this instanceof Plugin)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['name'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Plugin_get_name,result => ', '' + result);
  }
  return result;
};
globalMy.Plugin_get_filename = function () {
  if (!(this instanceof Plugin)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['filename'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Plugin_get_filename,result => ', '' + result);
  }
  return result;
};
globalMy.Plugin_get_description = function () {
  if (!(this instanceof Plugin)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['description'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Plugin_get_description,result => ', '' + result);
  }
  return result;
};
globalMy.Plugin_get_length = function () {
  if (!(this instanceof Plugin)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['length'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Plugin_get_length,result => ', '' + result);
  }
  return result;
};
globalMy.Plugin_namedItem = function () {
  if (!(this instanceof Plugin)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Plugin_namedItem, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};