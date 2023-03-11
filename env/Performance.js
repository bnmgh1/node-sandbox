globalMy.Performance_get_timeOrigin = function () {
  if (!(this instanceof Performance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['timeOrigin'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Performance_get_timeOrigin,result => ', '' + result);
  }
  return result;
};
globalMy.Performance_get_onresourcetimingbufferfull = function () {
  if (!(this instanceof Performance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onresourcetimingbufferfull'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Performance_get_onresourcetimingbufferfull,result => ', '' + result);
  }
  return result;
};
globalMy.Performance_set_onresourcetimingbufferfull = function (val) {
  if (!(this instanceof Performance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onresourcetimingbufferfull'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Performance_set_onresourcetimingbufferfull, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.Performance_clearMarks = function () {
  if (!(this instanceof Performance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Performance_clearMarks, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.Performance_clearMeasures = function () {
  if (!(this instanceof Performance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Performance_clearMeasures, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.Performance_clearResourceTimings = function () {
  if (!(this instanceof Performance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Performance_clearResourceTimings, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.Performance_getEntries = function () {
  if (!(this instanceof Performance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Performance_getEntries, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.Performance_getEntriesByName = function () {
  if (!(this instanceof Performance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Performance_getEntriesByName, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.Performance_getEntriesByType = function () {
  if (!(this instanceof Performance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Performance_getEntriesByType, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.Performance_mark = function () {
  if (!(this instanceof Performance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Performance_mark, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.Performance_measure = function () {
  if (!(this instanceof Performance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Performance_measure, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.Performance_now = function () {
  if (!(this instanceof Performance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Performance_now, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.Performance_setResourceTimingBufferSize = function () {
  if (!(this instanceof Performance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Performance_setResourceTimingBufferSize, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.Performance_toJSON = function () {
  if (!(this instanceof Performance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Performance_toJSON, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.Performance_get_timing = function () {
  if (!(this instanceof Performance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['timing'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Performance_get_timing,result => ', '' + result);
  }
  return result;
};
globalMy.Performance_get_navigation = function () {
  if (!(this instanceof Performance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['navigation'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Performance_get_navigation,result => ', '' + result);
  }
  return result;
};
globalMy.Performance_get_memory = function () {
  if (!(this instanceof Performance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['memory'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Performance_get_memory,result => ', '' + result);
  }
  return result;
};
globalMy.Performance_get_eventCounts = function () {
  if (!(this instanceof Performance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['eventCounts'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Performance_get_eventCounts,result => ', '' + result);
  }
  return result;
};