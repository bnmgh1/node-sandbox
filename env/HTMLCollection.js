globalMy.HTMLCollection_get_length = function () {
  if (!(this instanceof HTMLCollection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['length'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLCollection_get_length,result => ', '' + result);
  }
  return result;
};
globalMy.HTMLCollection_item = function () {
  if (!(this instanceof HTMLCollection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLCollection_item, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.HTMLCollection_namedItem = function () {
  if (!(this instanceof HTMLCollection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLCollection_namedItem, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};