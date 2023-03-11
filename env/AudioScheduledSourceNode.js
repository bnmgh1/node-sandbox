globalMy.AudioScheduledSourceNode_get_onended = function () {
  if (!(this instanceof AudioScheduledSourceNode)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onended'];
  if (globalMy.is_log) {
    console.log('[*]  调用了AudioScheduledSourceNode_get_onended,result => ', result);
  }
  return result;
};
globalMy.AudioScheduledSourceNode_set_onended = function (val) {
  if (!(this instanceof AudioScheduledSourceNode)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onended'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了AudioScheduledSourceNode_set_onended, 传参val => ' + val + '  result => ', result);
  }
};
globalMy.AudioScheduledSourceNode_start = function () {
  if (!(this instanceof AudioScheduledSourceNode)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了AudioScheduledSourceNode_start, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.AudioScheduledSourceNode_stop = function () {
  if (!(this instanceof AudioScheduledSourceNode)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了AudioScheduledSourceNode_stop, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};