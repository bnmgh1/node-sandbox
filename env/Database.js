globalMy.Database_get_version = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['version'];
  if (globalMy.is_log) {
    console.log('[*]  调用了Database_get_version,result => ', result);
  }
  return result;
};
globalMy.Database_changeVersion = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了Database_changeVersion, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.Database_readTransaction = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了Database_readTransaction, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};
globalMy.Database_transaction = function () {
  let result;
  var name = globalMy.setfoundName({});
  Object.setPrototypeOf(globalMy.element[name], IDBTransaction.prototype);
  result = globalMy.element[name];
  if (globalMy.is_log) {
    console.log('[*]  调用了Database_transaction, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};