globalMy.HTMLDataElement_get_value = function () {
  if (!(this instanceof HTMLDataElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLDataElement_get_value');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['value'];
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
    globalMy.console.log('[*]  调用了HTMLDataElement_get_value, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLDataElement_set_value = function (val) {
  if (!(this instanceof HTMLDataElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLDataElement_set_value, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['value'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['value'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLDataElement_set_value' + '  result => ', '' + result);
  }
};