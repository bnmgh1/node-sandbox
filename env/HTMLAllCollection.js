// dom构造函数原型方法
// dom构造函数原型方法
globalMy.HTMLAllCollection_get_length = function () {
  if (!(this instanceof HTMLAllCollection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['length'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLAllCollection_get_length,result => ', '' + result);
  }
  return result;
};
globalMy.HTMLAllCollection_item = function () {
  if (!(this instanceof HTMLAllCollection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLAllCollection_item, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.HTMLAllCollection_namedItem = function () {
  if (!(this instanceof HTMLAllCollection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLAllCollection_namedItem, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};