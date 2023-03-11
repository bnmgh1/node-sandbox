// MouseEvent
// MouseEvent
globalMy.MouseEvent_get_screenX = function () {
  if (!(this instanceof MouseEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['screenX'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MouseEvent_get_screenX,result => ', '' + result);
  }
  return result;
};
globalMy.MouseEvent_get_screenY = function () {
  if (!(this instanceof MouseEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['screenY'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MouseEvent_get_screenY,result => ', '' + result);
  }
  return result;
};
globalMy.MouseEvent_get_clientX = function () {
  if (!(this instanceof MouseEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['clientX'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MouseEvent_get_clientX,result => ', '' + result);
  }
  return result;
};
globalMy.MouseEvent_get_clientY = function () {
  if (!(this instanceof MouseEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['clientY'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MouseEvent_get_clientY,result => ', '' + result);
  }
  return result;
};
globalMy.MouseEvent_get_ctrlKey = function () {
  if (!(this instanceof MouseEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['ctrlKey'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MouseEvent_get_ctrlKey,result => ', '' + result);
  }
  return result;
};
globalMy.MouseEvent_get_shiftKey = function () {
  if (!(this instanceof MouseEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['shiftKey'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MouseEvent_get_shiftKey,result => ', '' + result);
  }
  return result;
};
globalMy.MouseEvent_get_altKey = function () {
  if (!(this instanceof MouseEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['altKey'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MouseEvent_get_altKey,result => ', '' + result);
  }
  return result;
};
globalMy.MouseEvent_get_metaKey = function () {
  if (!(this instanceof MouseEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['metaKey'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MouseEvent_get_metaKey,result => ', '' + result);
  }
  return result;
};
globalMy.MouseEvent_get_button = function () {
  if (!(this instanceof MouseEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['button'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MouseEvent_get_button,result => ', '' + result);
  }
  return result;
};
globalMy.MouseEvent_get_buttons = function () {
  if (!(this instanceof MouseEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['buttons'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MouseEvent_get_buttons,result => ', '' + result);
  }
  return result;
};
globalMy.MouseEvent_get_relatedTarget = function () {
  if (!(this instanceof MouseEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['relatedTarget'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MouseEvent_get_relatedTarget,result => ', '' + result);
  }
  return result;
};
globalMy.MouseEvent_get_pageX = function () {
  if (!(this instanceof MouseEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['pageX'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MouseEvent_get_pageX,result => ', '' + result);
  }
  return result;
};
globalMy.MouseEvent_get_pageY = function () {
  if (!(this instanceof MouseEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['pageY'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MouseEvent_get_pageY,result => ', '' + result);
  }
  return result;
};
globalMy.MouseEvent_get_x = function () {
  if (!(this instanceof MouseEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['x'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MouseEvent_get_x,result => ', '' + result);
  }
  return result;
};
globalMy.MouseEvent_get_y = function () {
  if (!(this instanceof MouseEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['y'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MouseEvent_get_y,result => ', '' + result);
  }
  return result;
};
globalMy.MouseEvent_get_offsetX = function () {
  if (!(this instanceof MouseEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['offsetX'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MouseEvent_get_offsetX,result => ', '' + result);
  }
  return result;
};
globalMy.MouseEvent_get_offsetY = function () {
  if (!(this instanceof MouseEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['offsetY'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MouseEvent_get_offsetY,result => ', '' + result);
  }
  return result;
};
globalMy.MouseEvent_get_movementX = function () {
  if (!(this instanceof MouseEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['movementX'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MouseEvent_get_movementX,result => ', '' + result);
  }
  return result;
};
globalMy.MouseEvent_get_movementY = function () {
  if (!(this instanceof MouseEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['movementY'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MouseEvent_get_movementY,result => ', '' + result);
  }
  return result;
};
globalMy.MouseEvent_get_fromElement = function () {
  if (!(this instanceof MouseEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['fromElement'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MouseEvent_get_fromElement,result => ', '' + result);
  }
  return result;
};
globalMy.MouseEvent_get_toElement = function () {
  if (!(this instanceof MouseEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['toElement'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MouseEvent_get_toElement,result => ', '' + result);
  }
  return result;
};
globalMy.MouseEvent_get_layerX = function () {
  if (!(this instanceof MouseEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['layerX'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MouseEvent_get_layerX,result => ', '' + result);
  }
  return result;
};
globalMy.MouseEvent_get_layerY = function () {
  if (!(this instanceof MouseEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['layerY'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MouseEvent_get_layerY,result => ', '' + result);
  }
  return result;
};
globalMy.MouseEvent_getModifierState = function () {
  if (!(this instanceof MouseEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MouseEvent_getModifierState, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.MouseEvent_initMouseEvent = function () {
  if (!(this instanceof MouseEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MouseEvent_initMouseEvent, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};

// Event
// Event