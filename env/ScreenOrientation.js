globalMy.ScreenOrientation_get_angle = function () {
  if (!(this instanceof ScreenOrientation)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['angle'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了ScreenOrientation_get_angle,result => ', '' + result);
  }
  return result;
};
globalMy.ScreenOrientation_get_type = function () {
  if (!(this instanceof ScreenOrientation)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['type'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了ScreenOrientation_get_type,result => ', '' + result);
  }
  return result;
};
globalMy.ScreenOrientation_get_onchange = function () {
  if (!(this instanceof ScreenOrientation)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onchange'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了ScreenOrientation_get_onchange,result => ', '' + result);
  }
  return result;
};
globalMy.ScreenOrientation_set_onchange = function (val) {
  if (!(this instanceof ScreenOrientation)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onchange'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了ScreenOrientation_set_onchange, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.ScreenOrientation_lock = function () {
  if (!(this instanceof ScreenOrientation)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了ScreenOrientation_lock, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.ScreenOrientation_unlock = function () {
  if (!(this instanceof ScreenOrientation)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了ScreenOrientation_unlock, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
// 函数实现
// SpeechSynthesis
// IDBRequest