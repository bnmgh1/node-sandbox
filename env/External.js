globalMy.External_AddSearchProvider = function () {
  if (!(this instanceof External)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了External_AddSearchProvider, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.External_IsSearchProviderInstalled = function () {
  if (!(this instanceof External)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了External_IsSearchProviderInstalled, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
// History
// History