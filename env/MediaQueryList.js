globalMy.MediaQueryList_get_media = function () {
  if (!(this instanceof MediaQueryList)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['media'];
  if (globalMy.is_log) {
    console.log('[*]  调用了MediaQueryList_get_media,result => ', result);
  }
  return result;
};
globalMy.MediaQueryList_get_matches = function () {
  if (!(this instanceof MediaQueryList)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['matches'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MediaQueryList_get_matches,result => ', result);
  }
  return result;
};
globalMy.MediaQueryList_get_onchange = function () {
  if (!(this instanceof MediaQueryList)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onchange'];
  if (globalMy.is_log) {
    console.log('[*]  调用了MediaQueryList_get_onchange,result => ', result);
  }
  return result;
};
globalMy.MediaQueryList_set_onchange = function (val) {
  if (!(this instanceof MediaQueryList)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onchange'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了MediaQueryList_set_onchange, 传参val => ' + val + '  result => ', result);
  }
};
globalMy.MediaQueryList_addListener = function () {
  if (!(this instanceof MediaQueryList)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了MediaQueryList_addListener, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.MediaQueryList_removeListener = function () {
  if (!(this instanceof MediaQueryList)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了MediaQueryList_removeListener, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};