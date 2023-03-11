globalMy.AudioParam_get_value = function () {
  if (!(this instanceof AudioParam)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['value'];
  if (globalMy.is_log) {
    console.log('[*]  调用了AudioParam_get_value,result => ', result);
  }
  return result;
};
globalMy.AudioParam_set_value = function (val) {
  if (!(this instanceof AudioParam)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['value'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了AudioParam_set_value, 传参val => ' + val + '  result => ', result);
  }
};
globalMy.AudioParam_get_automationRate = function () {
  if (!(this instanceof AudioParam)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['automationRate'];
  if (globalMy.is_log) {
    console.log('[*]  调用了AudioParam_get_automationRate,result => ', result);
  }
  return result;
};
globalMy.AudioParam_set_automationRate = function (val) {
  if (!(this instanceof AudioParam)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['automationRate'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了AudioParam_set_automationRate, 传参val => ' + val + '  result => ', result);
  }
};
globalMy.AudioParam_get_defaultValue = function () {
  if (!(this instanceof AudioParam)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['defaultValue'];
  if (globalMy.is_log) {
    console.log('[*]  调用了AudioParam_get_defaultValue,result => ', result);
  }
  return result;
};
globalMy.AudioParam_get_minValue = function () {
  if (!(this instanceof AudioParam)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['minValue'];
  if (globalMy.is_log) {
    console.log('[*]  调用了AudioParam_get_minValue,result => ', result);
  }
  return result;
};
globalMy.AudioParam_get_maxValue = function () {
  if (!(this instanceof AudioParam)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['maxValue'];
  if (globalMy.is_log) {
    console.log('[*]  调用了AudioParam_get_maxValue,result => ', result);
  }
  return result;
};
globalMy.AudioParam_cancelAndHoldAtTime = function () {
  if (!(this instanceof AudioParam)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了AudioParam_cancelAndHoldAtTime, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.AudioParam_cancelScheduledValues = function () {
  if (!(this instanceof AudioParam)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了AudioParam_cancelScheduledValues, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.AudioParam_exponentialRampToValueAtTime = function () {
  if (!(this instanceof AudioParam)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了AudioParam_exponentialRampToValueAtTime, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.AudioParam_linearRampToValueAtTime = function () {
  if (!(this instanceof AudioParam)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了AudioParam_linearRampToValueAtTime, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.AudioParam_setTargetAtTime = function () {
  if (!(this instanceof AudioParam)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了AudioParam_setTargetAtTime, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.AudioParam_setValueAtTime = function () {
  if (!(this instanceof AudioParam)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了AudioParam_setValueAtTime, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.AudioParam_setValueCurveAtTime = function () {
  if (!(this instanceof AudioParam)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了AudioParam_setValueCurveAtTime, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};