globalMy.Screen_get_availWidth = function () {
  if (!(this instanceof Screen)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['availWidth'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Screen_get_availWidth,result => ', '' + result);
  }
  return result;
};
globalMy.Screen_get_availHeight = function () {
  if (!(this instanceof Screen)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['availHeight'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Screen_get_availHeight,result => ', '' + result);
  }
  return result;
};
globalMy.Screen_get_width = function () {
  if (!(this instanceof Screen)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['width'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Screen_get_width,result => ', '' + result);
  }
  return result;
};
globalMy.Screen_get_height = function () {
  if (!(this instanceof Screen)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['height'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Screen_get_height,result => ', '' + result);
  }
  return result;
};
globalMy.Screen_get_colorDepth = function () {
  if (!(this instanceof Screen)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['colorDepth'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Screen_get_colorDepth,result => ', '' + result);
  }
  return result;
};
globalMy.Screen_get_pixelDepth = function () {
  if (!(this instanceof Screen)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['pixelDepth'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Screen_get_pixelDepth,result => ', '' + result);
  }
  return result;
};
globalMy.Screen_get_availLeft = function () {
  if (!(this instanceof Screen)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['availLeft'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Screen_get_availLeft,result => ', '' + result);
  }
  return result;
};
globalMy.Screen_get_availTop = function () {
  if (!(this instanceof Screen)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['availTop'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Screen_get_availTop,result => ', '' + result);
  }
  return result;
};
globalMy.Screen_get_orientation = function () {
  if (!(this instanceof Screen)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['orientation'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Screen_get_orientation,result => ', '' + result);
  }
  return result;
};
globalMy.Screen_get_onchange = function () {
  if (!(this instanceof Screen)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onchange'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Screen_get_onchange,result => ', '' + result);
  }
  return result;
};
globalMy.Screen_set_onchange = function (val) {
  if (!(this instanceof Screen)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onchange'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Screen_set_onchange, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.Screen_get_isExtended = function () {
  if (!(this instanceof Screen)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['isExtended'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Screen_get_isExtended,result => ', '' + result);
  }
  return result;
};