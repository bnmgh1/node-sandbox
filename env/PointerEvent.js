// PointerEvent
// PointerEvent
globalMy.PointerEvent_get_pointerId = function () {
  if (!(this instanceof PointerEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['pointerId'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了PointerEvent_get_pointerId,result => ', '' + result);
  }
  return result;
};
globalMy.PointerEvent_get_width = function () {
  if (!(this instanceof PointerEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['width'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了PointerEvent_get_width,result => ', '' + result);
  }
  return result;
};
globalMy.PointerEvent_get_height = function () {
  if (!(this instanceof PointerEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['height'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了PointerEvent_get_height,result => ', '' + result);
  }
  return result;
};
globalMy.PointerEvent_get_pressure = function () {
  if (!(this instanceof PointerEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['pressure'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了PointerEvent_get_pressure,result => ', '' + result);
  }
  return result;
};
globalMy.PointerEvent_get_tiltX = function () {
  if (!(this instanceof PointerEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['tiltX'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了PointerEvent_get_tiltX,result => ', '' + result);
  }
  return result;
};
globalMy.PointerEvent_get_tiltY = function () {
  if (!(this instanceof PointerEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['tiltY'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了PointerEvent_get_tiltY,result => ', '' + result);
  }
  return result;
};
globalMy.PointerEvent_get_azimuthAngle = function () {
  if (!(this instanceof PointerEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['azimuthAngle'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了PointerEvent_get_azimuthAngle,result => ', '' + result);
  }
  return result;
};
globalMy.PointerEvent_get_altitudeAngle = function () {
  if (!(this instanceof PointerEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['altitudeAngle'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了PointerEvent_get_altitudeAngle,result => ', '' + result);
  }
  return result;
};
globalMy.PointerEvent_get_tangentialPressure = function () {
  if (!(this instanceof PointerEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['tangentialPressure'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了PointerEvent_get_tangentialPressure,result => ', '' + result);
  }
  return result;
};
globalMy.PointerEvent_get_twist = function () {
  if (!(this instanceof PointerEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['twist'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了PointerEvent_get_twist,result => ', '' + result);
  }
  return result;
};
globalMy.PointerEvent_get_pointerType = function () {
  if (!(this instanceof PointerEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['pointerType'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了PointerEvent_get_pointerType,result => ', '' + result);
  }
  return result;
};
globalMy.PointerEvent_get_isPrimary = function () {
  if (!(this instanceof PointerEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['isPrimary'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了PointerEvent_get_isPrimary,result => ', '' + result);
  }
  return result;
};
globalMy.PointerEvent_getCoalescedEvents = function () {
  if (!(this instanceof PointerEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了PointerEvent_getCoalescedEvents, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.PointerEvent_getPredictedEvents = function () {
  if (!(this instanceof PointerEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了PointerEvent_getPredictedEvents, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};

// MouseEvent
// MouseEvent