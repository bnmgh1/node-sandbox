globalMy.PerformanceEntry_get_name = function () {
  if (!(this instanceof PerformanceEntry)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['name'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了PerformanceEntry_get_name,result => ', '' + result);
  }
  return result;
};
globalMy.PerformanceEntry_get_entryType = function () {
  if (!(this instanceof PerformanceEntry)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['entryType'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了PerformanceEntry_get_entryType,result => ', '' + result);
  }
  return result;
};
globalMy.PerformanceEntry_get_startTime = function () {
  if (!(this instanceof PerformanceEntry)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['startTime'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了PerformanceEntry_get_startTime,result => ', '' + result);
  }
  return result;
};
globalMy.PerformanceEntry_get_duration = function () {
  if (!(this instanceof PerformanceEntry)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['duration'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了PerformanceEntry_get_duration,result => ', '' + result);
  }
  return result;
};
globalMy.PerformanceEntry_toJSON = function () {
  if (!(this instanceof PerformanceEntry)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了PerformanceEntry_toJSON, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};