// Event
// Event
globalMy.Event_get_type = function () {
  if (!(this instanceof Event)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['type'];
  if (globalMy.is_log) {
    console.log('[*]  调用了Event_get_type,result => ', result);
  }
  return result;
};
globalMy.Event_get_target = function () {
  if (!(this instanceof Event)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['target'];
  if (globalMy.is_log) {
    console.log('[*]  调用了Event_get_target,result => ', result);
  }
  return result;
};
globalMy.Event_get_currentTarget = function () {
  if (!(this instanceof Event)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['currentTarget'];
  if (globalMy.is_log) {
    console.log('[*]  调用了Event_get_currentTarget,result => ', result);
  }
  return result;
};
globalMy.Event_get_eventPhase = function () {
  if (!(this instanceof Event)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['eventPhase'];
  if (globalMy.is_log) {
    console.log('[*]  调用了Event_get_eventPhase,result => ', result);
  }
  return result;
};
globalMy.Event_get_bubbles = function () {
  if (!(this instanceof Event)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['bubbles'];
  if (globalMy.is_log) {
    console.log('[*]  调用了Event_get_bubbles,result => ', result);
  }
  return result;
};
globalMy.Event_get_cancelable = function () {
  if (!(this instanceof Event)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['cancelable'];
  if (globalMy.is_log) {
    console.log('[*]  调用了Event_get_cancelable,result => ', result);
  }
  return result;
};
globalMy.Event_get_defaultPrevented = function () {
  if (!(this instanceof Event)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['defaultPrevented'];
  if (globalMy.is_log) {
    console.log('[*]  调用了Event_get_defaultPrevented,result => ', result);
  }
  return result;
};
globalMy.Event_get_composed = function () {
  if (!(this instanceof Event)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['composed'];
  if (globalMy.is_log) {
    console.log('[*]  调用了Event_get_composed,result => ', result);
  }
  return result;
};
globalMy.Event_get_timeStamp = function () {
  if (!(this instanceof Event)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['timeStamp'];
  if (globalMy.is_log) {
    console.log('[*]  调用了Event_get_timeStamp,result => ', result);
  }
  return result;
};
globalMy.Event_get_srcElement = function () {
  if (!(this instanceof Event)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['srcElement'];
  if (globalMy.is_log) {
    console.log('[*]  调用了Event_get_srcElement,result => ', result);
  }
  return result;
};
globalMy.Event_get_returnValue = function () {
  if (!(this instanceof Event)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['returnValue'];
  if (globalMy.is_log) {
    console.log('[*]  调用了Event_get_returnValue,result => ', result);
  }
  return result;
};
globalMy.Event_set_returnValue = function (val) {
  if (!(this instanceof Event)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundEventName(this);
  globalMy.event_value[foundName]['returnValue'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了Event_set_returnValue, 传参val => ' + val + '  result => ', result);
  }
};
globalMy.Event_get_cancelBubble = function () {
  if (!(this instanceof Event)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundEventName(this);
  result = globalMy.event_value[foundName]['cancelBubble'];
  if (globalMy.is_log) {
    console.log('[*]  调用了Event_get_cancelBubble,result => ', result);
  }
  return result;
};
globalMy.Event_set_cancelBubble = function (val) {
  if (!(this instanceof Event)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundEventName(this);
  globalMy.event_value[foundName]['cancelBubble'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了Event_set_cancelBubble, 传参val => ' + val + '  result => ', result);
  }
};
globalMy.Event_composedPath = function () {
  if (!(this instanceof Event)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了Event_composedPath, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.Event_initEvent = function () {
  if (!(this instanceof Event)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了Event_initEvent, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.Event_preventDefault = function () {
  if (!(this instanceof Event)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了Event_preventDefault, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.Event_stopImmediatePropagation = function () {
  if (!(this instanceof Event)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了Event_stopImmediatePropagation, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.Event_stopPropagation = function () {
  if (!(this instanceof Event)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了Event_stopPropagation, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};