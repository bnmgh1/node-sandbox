globalMy.HTMLDirectoryElement_get_compact = function () {
  if (!(this instanceof HTMLDirectoryElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLDirectoryElement_get_compact');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['compact'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLDirectoryElement_get_compact, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLDirectoryElement_set_compact = function (val) {
  if (!(this instanceof HTMLDirectoryElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLDirectoryElement_set_compact, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['compact'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['compact'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLDirectoryElement_set_compact' + '  result => ', '' + result);
  }
};