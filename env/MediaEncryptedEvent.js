globalMy.MediaEncryptedEvent_get_initDataType = function () {
  if (!(this instanceof MediaEncryptedEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['initDataType'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MediaEncryptedEvent_get_initDataType,result => ', '' + result);
  }
  return result;
};
globalMy.MediaEncryptedEvent_get_initData = function () {
  if (!(this instanceof MediaEncryptedEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['initData'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MediaEncryptedEvent_get_initData,result => ', '' + result);
  }
  return result;
};