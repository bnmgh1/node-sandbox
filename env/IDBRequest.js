globalMy.IDBRequest_get_result = function () {
  if (!(this instanceof IDBRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['result'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了IDBRequest_get_result,result => ', '' + result);
  }
  return result;
};
globalMy.IDBRequest_get_error = function () {
  if (!(this instanceof IDBRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['error'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了IDBRequest_get_error,result => ', '' + result);
  }
  return result;
};
globalMy.IDBRequest_get_source = function () {
  if (!(this instanceof IDBRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['source'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了IDBRequest_get_source,result => ', '' + result);
  }
  return result;
};
globalMy.IDBRequest_get_transaction = function () {
  if (!(this instanceof IDBRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['transaction'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了IDBRequest_get_transaction,result => ', '' + result);
  }
  return result;
};
globalMy.IDBRequest_get_readyState = function () {
  if (!(this instanceof IDBRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['readyState'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了IDBRequest_get_readyState,result => ', '' + result);
  }
  return result;
};
globalMy.IDBRequest_get_onsuccess = function () {
  if (!(this instanceof IDBRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onsuccess'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了IDBRequest_get_onsuccess,result => ', '' + result);
  }
  return result;
};
globalMy.IDBRequest_set_onsuccess = function (val) {
  if (!(this instanceof IDBRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onsuccess'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了IDBRequest_set_onsuccess, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.IDBRequest_get_onerror = function () {
  if (!(this instanceof IDBRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onerror'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了IDBRequest_get_onerror,result => ', '' + result);
  }
  return result;
};
globalMy.IDBRequest_set_onerror = function (val) {
  if (!(this instanceof IDBRequest)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onerror'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了IDBRequest_set_onerror, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.IDBRequest_get_result = function () {
  if (!(this instanceof IDBRequest)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['result'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBRequest_get_result,result => ', result);
  }
  return result;
};
globalMy.IDBRequest_get_error = function () {
  if (!(this instanceof IDBRequest)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['error'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBRequest_get_error,result => ', result);
  }
  return result;
};
globalMy.IDBRequest_get_source = function () {
  if (!(this instanceof IDBRequest)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['source'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBRequest_get_source,result => ', result);
  }
  return result;
};
globalMy.IDBRequest_get_transaction = function () {
  if (!(this instanceof IDBRequest)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['transaction'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBRequest_get_transaction,result => ', result);
  }
  return result;
};
globalMy.IDBRequest_get_readyState = function () {
  if (!(this instanceof IDBRequest)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['readyState'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBRequest_get_readyState,result => ', result);
  }
  return result;
};
globalMy.IDBRequest_get_onsuccess = function () {
  if (!(this instanceof IDBRequest)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onsuccess'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBRequest_get_onsuccess,result => ', result);
  }
  return result;
};
globalMy.IDBRequest_set_onsuccess = function (val) {
  if (!(this instanceof IDBRequest)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onsuccess'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBRequest_set_onsuccess, 传参val => ' + val + '  result => ', result);
  }
};
globalMy.IDBRequest_get_onerror = function () {
  if (!(this instanceof IDBRequest)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onerror'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBRequest_get_onerror,result => ', result);
  }
  return result;
};
globalMy.IDBRequest_set_onerror = function (val) {
  if (!(this instanceof IDBRequest)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onerror'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBRequest_set_onerror, 传参val => ' + val + '  result => ', result);
  }
};