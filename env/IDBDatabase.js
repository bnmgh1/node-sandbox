globalMy.IDBDatabase_get_name = function () {
  if (!(this instanceof IDBDatabase)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['name'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBDatabase_get_name,result => ', result);
  }
  return result;
};
globalMy.IDBDatabase_get_version = function () {
  if (!(this instanceof IDBDatabase)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['version'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBDatabase_get_version,result => ', result);
  }
  return result;
};
globalMy.IDBDatabase_get_objectStoreNames = function () {
  if (!(this instanceof IDBDatabase)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['objectStoreNames'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBDatabase_get_objectStoreNames,result => ', result);
  }
  return result;
};
globalMy.IDBDatabase_get_onabort = function () {
  if (!(this instanceof IDBDatabase)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onabort'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBDatabase_get_onabort,result => ', result);
  }
  return result;
};
globalMy.IDBDatabase_set_onabort = function (val) {
  if (!(this instanceof IDBDatabase)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onabort'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBDatabase_set_onabort, 传参val => ' + val + '  result => ', result);
  }
};
globalMy.IDBDatabase_get_onclose = function () {
  if (!(this instanceof IDBDatabase)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onclose'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBDatabase_get_onclose,result => ', result);
  }
  return result;
};
globalMy.IDBDatabase_set_onclose = function (val) {
  if (!(this instanceof IDBDatabase)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onclose'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBDatabase_set_onclose, 传参val => ' + val + '  result => ', result);
  }
};
globalMy.IDBDatabase_get_onerror = function () {
  if (!(this instanceof IDBDatabase)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onerror'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBDatabase_get_onerror,result => ', result);
  }
  return result;
};
globalMy.IDBDatabase_set_onerror = function (val) {
  if (!(this instanceof IDBDatabase)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onerror'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBDatabase_set_onerror, 传参val => ' + val + '  result => ', result);
  }
};
globalMy.IDBDatabase_get_onversionchange = function () {
  if (!(this instanceof IDBDatabase)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onversionchange'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBDatabase_get_onversionchange,result => ', result);
  }
  return result;
};
globalMy.IDBDatabase_set_onversionchange = function (val) {
  if (!(this instanceof IDBDatabase)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onversionchange'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBDatabase_set_onversionchange, 传参val => ' + val + '  result => ', result);
  }
};
globalMy.IDBDatabase_close = function () {
  if (!(this instanceof IDBDatabase)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBDatabase_close, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.IDBDatabase_createObjectStore = function () {
  if (!(this instanceof IDBDatabase)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBDatabase_createObjectStore, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.IDBDatabase_deleteObjectStore = function () {
  if (!(this instanceof IDBDatabase)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBDatabase_deleteObjectStore, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.IDBDatabase_transaction = function () {
  if (!(this instanceof IDBDatabase)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBDatabase_transaction, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};