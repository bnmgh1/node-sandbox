globalMy.Storage_clear = function () {
  if (!(this instanceof Storage)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Storage_clear, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.Storage_getItem = function () {
  if (!(this instanceof Storage)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  let tagName = arguments[0];
  //这里写方法实体
  result = this[tagName + ''];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Storage_getItem, arguments => ' + tagName + '  result => ', '' + result);
  }
  if (result == undefined) result = null;
  return result;
};
globalMy.Storage_key = function () {
  if (!(this instanceof Storage)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Storage_key, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.Storage_removeItem = function () {
  if (!(this instanceof Storage)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Storage_removeItem, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.Storage_setItem = function () {
  if (!(this instanceof Storage)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Storage_setItem, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};