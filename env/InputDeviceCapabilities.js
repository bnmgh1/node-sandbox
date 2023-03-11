globalMy.InputDeviceCapabilities_get_firesTouchEvents = function () {
  if (!(this instanceof InputDeviceCapabilities)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['firesTouchEvents'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了InputDeviceCapabilities_get_firesTouchEvents,result => ', '' + result);
  }
  return result;
};