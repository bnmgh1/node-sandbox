// 函数实现
// SpeechSynthesis
// IDBRequest
globalMy.SpeechSynthesisUtterance_get_text = function () {
  if (!(this instanceof SpeechSynthesisUtterance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['text'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了SpeechSynthesisUtterance_get_text,result => ', '' + result);
  }
  return result;
};
globalMy.SpeechSynthesisUtterance_set_text = function (val) {
  if (!(this instanceof SpeechSynthesisUtterance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['text'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了SpeechSynthesisUtterance_set_text, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.SpeechSynthesisUtterance_get_lang = function () {
  if (!(this instanceof SpeechSynthesisUtterance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['lang'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了SpeechSynthesisUtterance_get_lang,result => ', '' + result);
  }
  return result;
};
globalMy.SpeechSynthesisUtterance_set_lang = function (val) {
  if (!(this instanceof SpeechSynthesisUtterance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['lang'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了SpeechSynthesisUtterance_set_lang, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.SpeechSynthesisUtterance_get_voice = function () {
  if (!(this instanceof SpeechSynthesisUtterance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['voice'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了SpeechSynthesisUtterance_get_voice,result => ', '' + result);
  }
  return result;
};
globalMy.SpeechSynthesisUtterance_set_voice = function (val) {
  if (!(this instanceof SpeechSynthesisUtterance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['voice'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了SpeechSynthesisUtterance_set_voice, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.SpeechSynthesisUtterance_get_volume = function () {
  if (!(this instanceof SpeechSynthesisUtterance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['volume'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了SpeechSynthesisUtterance_get_volume,result => ', '' + result);
  }
  return result;
};
globalMy.SpeechSynthesisUtterance_set_volume = function (val) {
  if (!(this instanceof SpeechSynthesisUtterance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['volume'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了SpeechSynthesisUtterance_set_volume, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.SpeechSynthesisUtterance_get_rate = function () {
  if (!(this instanceof SpeechSynthesisUtterance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['rate'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了SpeechSynthesisUtterance_get_rate,result => ', '' + result);
  }
  return result;
};
globalMy.SpeechSynthesisUtterance_set_rate = function (val) {
  if (!(this instanceof SpeechSynthesisUtterance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['rate'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了SpeechSynthesisUtterance_set_rate, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.SpeechSynthesisUtterance_get_pitch = function () {
  if (!(this instanceof SpeechSynthesisUtterance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['pitch'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了SpeechSynthesisUtterance_get_pitch,result => ', '' + result);
  }
  return result;
};
globalMy.SpeechSynthesisUtterance_set_pitch = function (val) {
  if (!(this instanceof SpeechSynthesisUtterance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['pitch'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了SpeechSynthesisUtterance_set_pitch, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.SpeechSynthesisUtterance_get_onstart = function () {
  if (!(this instanceof SpeechSynthesisUtterance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onstart'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了SpeechSynthesisUtterance_get_onstart,result => ', '' + result);
  }
  return result;
};
globalMy.SpeechSynthesisUtterance_set_onstart = function (val) {
  if (!(this instanceof SpeechSynthesisUtterance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onstart'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了SpeechSynthesisUtterance_set_onstart, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.SpeechSynthesisUtterance_get_onend = function () {
  if (!(this instanceof SpeechSynthesisUtterance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onend'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了SpeechSynthesisUtterance_get_onend,result => ', '' + result);
  }
  return result;
};
globalMy.SpeechSynthesisUtterance_set_onend = function (val) {
  if (!(this instanceof SpeechSynthesisUtterance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onend'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了SpeechSynthesisUtterance_set_onend, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.SpeechSynthesisUtterance_get_onerror = function () {
  if (!(this instanceof SpeechSynthesisUtterance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onerror'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了SpeechSynthesisUtterance_get_onerror,result => ', '' + result);
  }
  return result;
};
globalMy.SpeechSynthesisUtterance_set_onerror = function (val) {
  if (!(this instanceof SpeechSynthesisUtterance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onerror'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了SpeechSynthesisUtterance_set_onerror, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.SpeechSynthesisUtterance_get_onpause = function () {
  if (!(this instanceof SpeechSynthesisUtterance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onpause'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了SpeechSynthesisUtterance_get_onpause,result => ', '' + result);
  }
  return result;
};
globalMy.SpeechSynthesisUtterance_set_onpause = function (val) {
  if (!(this instanceof SpeechSynthesisUtterance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onpause'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了SpeechSynthesisUtterance_set_onpause, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.SpeechSynthesisUtterance_get_onresume = function () {
  if (!(this instanceof SpeechSynthesisUtterance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onresume'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了SpeechSynthesisUtterance_get_onresume,result => ', '' + result);
  }
  return result;
};
globalMy.SpeechSynthesisUtterance_set_onresume = function (val) {
  if (!(this instanceof SpeechSynthesisUtterance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onresume'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了SpeechSynthesisUtterance_set_onresume, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.SpeechSynthesisUtterance_get_onmark = function () {
  if (!(this instanceof SpeechSynthesisUtterance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onmark'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了SpeechSynthesisUtterance_get_onmark,result => ', '' + result);
  }
  return result;
};
globalMy.SpeechSynthesisUtterance_set_onmark = function (val) {
  if (!(this instanceof SpeechSynthesisUtterance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onmark'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了SpeechSynthesisUtterance_set_onmark, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.SpeechSynthesisUtterance_get_onboundary = function () {
  if (!(this instanceof SpeechSynthesisUtterance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onboundary'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了SpeechSynthesisUtterance_get_onboundary,result => ', '' + result);
  }
  return result;
};
globalMy.SpeechSynthesisUtterance_set_onboundary = function (val) {
  if (!(this instanceof SpeechSynthesisUtterance)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onboundary'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了SpeechSynthesisUtterance_set_onboundary, 传参val => ' + val + '  result => ', '' + result);
  }
};