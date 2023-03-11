globalMy.OscillatorNode_get_type = function () {
  if (!(this instanceof OscillatorNode)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['type'];
  if (globalMy.is_log) {
    console.log('[*]  调用了OscillatorNode_get_type,result => ', result);
  }
  return result;
};
globalMy.OscillatorNode_set_type = function (val) {
  if (!(this instanceof OscillatorNode)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['type'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了OscillatorNode_set_type, 传参val => ' + val + '  result => ', result);
  }
};
globalMy.OscillatorNode_get_frequency = function () {
  if (!(this instanceof OscillatorNode)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['frequency'];
  if (globalMy.is_log) {
    console.log('[*]  调用了OscillatorNode_get_frequency,result => ', result);
  }
  return result;
};
globalMy.OscillatorNode_get_detune = function () {
  if (!(this instanceof OscillatorNode)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['detune'];
  if (globalMy.is_log) {
    console.log('[*]  调用了OscillatorNode_get_detune,result => ', result);
  }
  return result;
};
globalMy.OscillatorNode_setPeriodicWave = function () {
  if (!(this instanceof OscillatorNode)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了OscillatorNode_setPeriodicWave, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};