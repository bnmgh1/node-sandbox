globalMy.PluginArray_get_length = function () {
  if (!(this instanceof PluginArray)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['length'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了PluginArray_get_length,result => ', '' + result);
  }
  return result;
};
globalMy.PluginArray_item = function () {
  if (!(this instanceof PluginArray)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了PluginArray_item, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.PluginArray_namedItem = function () {
  if (!(this instanceof PluginArray)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了PluginArray_namedItem, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.PluginArray_refresh = function () {
  if (!(this instanceof PluginArray)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了PluginArray_refresh, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
// PointerEvent
// PointerEvent