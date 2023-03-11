globalMy.CustomElementRegistry_define = function () {
  if (!(this instanceof CustomElementRegistry)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了CustomElementRegistry_define, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.CustomElementRegistry_get = function () {
  if (!(this instanceof CustomElementRegistry)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了CustomElementRegistry_get, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.CustomElementRegistry_upgrade = function () {
  if (!(this instanceof CustomElementRegistry)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了CustomElementRegistry_upgrade, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.CustomElementRegistry_whenDefined = function () {
  if (!(this instanceof CustomElementRegistry)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了CustomElementRegistry_whenDefined, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
// 函数实现
// SpeechSynthesis