globalMy.MimeType_get_type = function () {
  if (!(this instanceof MimeType)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['type'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MimeType_get_type,result => ', '' + result);
  }
  return result;
};
globalMy.MimeType_get_suffixes = function () {
  if (!(this instanceof MimeType)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['suffixes'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MimeType_get_suffixes,result => ', '' + result);
  }
  return result;
};
globalMy.MimeType_get_description = function () {
  if (!(this instanceof MimeType)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['description'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MimeType_get_description,result => ', '' + result);
  }
  return result;
};
globalMy.MimeType_get_enabledPlugin = function () {
  if (!(this instanceof MimeType)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['enabledPlugin'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MimeType_get_enabledPlugin,result => ', '' + result);
  }
  return result;
};