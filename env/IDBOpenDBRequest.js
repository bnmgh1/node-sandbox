// DOMTokenList
// DOMTokenList
globalMy.IDBOpenDBRequest_get_onblocked = function () {
  if (!(this instanceof IDBOpenDBRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onblocked'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了IDBOpenDBRequest_get_onblocked,result => ', '' + result);
  }
  return result;
};
globalMy.IDBOpenDBRequest_set_onblocked = function (val) {
  if (!(this instanceof IDBOpenDBRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onblocked'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了IDBOpenDBRequest_set_onblocked, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.IDBOpenDBRequest_get_onupgradeneeded = function () {
  if (!(this instanceof IDBOpenDBRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onupgradeneeded'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了IDBOpenDBRequest_get_onupgradeneeded,result => ', '' + result);
  }
  return result;
};
globalMy.IDBOpenDBRequest_set_onupgradeneeded = function (val) {
  if (!(this instanceof IDBOpenDBRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onupgradeneeded'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了IDBOpenDBRequest_set_onupgradeneeded, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.IDBOpenDBRequest_get_onblocked = function () {
  if (!(this instanceof IDBOpenDBRequest)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onblocked'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBOpenDBRequest_get_onblocked,result => ', result);
  }
  return result;
};
globalMy.IDBOpenDBRequest_set_onblocked = function (val) {
  if (!(this instanceof IDBOpenDBRequest)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onblocked'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBOpenDBRequest_set_onblocked, 传参val => ' + val + '  result => ', result);
  }
};
globalMy.IDBOpenDBRequest_get_onupgradeneeded = function () {
  if (!(this instanceof IDBOpenDBRequest)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onupgradeneeded'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBOpenDBRequest_get_onupgradeneeded,result => ', result);
  }
  return result;
};
globalMy.IDBOpenDBRequest_set_onupgradeneeded = function (val) {
  if (!(this instanceof IDBOpenDBRequest)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onupgradeneeded'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBOpenDBRequest_set_onupgradeneeded, 传参val => ' + val + '  result => ', result);
  }
};