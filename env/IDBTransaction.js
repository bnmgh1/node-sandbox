globalMy.IDBTransaction_get_objectStoreNames = function () {
  if (!(this instanceof IDBTransaction)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['objectStoreNames'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_get_objectStoreNames,result => ', result);
  }
  return result;
};
globalMy.IDBTransaction_get_mode = function () {
  if (!(this instanceof IDBTransaction)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['mode'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_get_mode,result => ', result);
  }
  return result;
};
globalMy.IDBTransaction_get_durability = function () {
  if (!(this instanceof IDBTransaction)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['durability'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_get_durability,result => ', result);
  }
  return result;
};
globalMy.IDBTransaction_get_db = function () {
  if (!(this instanceof IDBTransaction)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['db'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_get_db,result => ', result);
  }
  return result;
};
globalMy.IDBTransaction_get_error = function () {
  if (!(this instanceof IDBTransaction)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['error'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_get_error,result => ', result);
  }
  return result;
};
globalMy.IDBTransaction_get_onabort = function () {
  if (!(this instanceof IDBTransaction)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onabort'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_get_onabort,result => ', result);
  }
  return result;
};
globalMy.IDBTransaction_set_onabort = function (val) {
  if (!(this instanceof IDBTransaction)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onabort'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_set_onabort, 传参val => ' + val + '  result => ', result);
  }
};
globalMy.IDBTransaction_get_oncomplete = function () {
  if (!(this instanceof IDBTransaction)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['oncomplete'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_get_oncomplete,result => ', result);
  }
  return result;
};
globalMy.IDBTransaction_set_oncomplete = function (val) {
  if (!(this instanceof IDBTransaction)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['oncomplete'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_set_oncomplete, 传参val => ' + val + '  result => ', result);
  }
};
globalMy.IDBTransaction_get_onerror = function () {
  if (!(this instanceof IDBTransaction)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onerror'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_get_onerror,result => ', result);
  }
  return result;
};
globalMy.IDBTransaction_set_onerror = function (val) {
  if (!(this instanceof IDBTransaction)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onerror'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_set_onerror, 传参val => ' + val + '  result => ', result);
  }
};
globalMy.IDBTransaction_abort = function () {
  if (!(this instanceof IDBTransaction)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_abort, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.IDBTransaction_commit = function () {
  if (!(this instanceof IDBTransaction)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_commit, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.IDBTransaction_objectStore = function () {
  if (!(this instanceof IDBTransaction)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_objectStore, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
// IDBTransaction
// IDBTransaction
// IDBTransaction
// IDBTransaction
globalMy.IDBTransaction_objectStore = function () {
  if (!(this instanceof IDBTransaction)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var name = globalMy.setfoundName({});
  Object.setPrototypeOf(globalMy.element[name], IDBObjectStore.prototype);
  result = globalMy.element[name];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_objectStore, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.IDBTransaction_get_objectStoreNames = function () {
  if (!(this instanceof IDBTransaction)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['objectStoreNames'];
  if (globalMy.is_log) {
    console.log('[*]  调用了IDBTransaction_get_objectStoreNames,result => ', result);
  }
  return result;
};

// IDBObjectStore
// IDBObjectStore