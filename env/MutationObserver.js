// Event
// Event
globalMy.MutationObserver_disconnect = function () {
  if (!(this instanceof MutationObserver)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MutationObserver_disconnect, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.disconnect.apply(this_, arguments);
  if (result == undefined || result == null) {} else {
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
    globalMy.console.log('[*]  调用了MutationObserver_disconnect ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.MutationObserver_observe = function () {
  if (!(this instanceof MutationObserver)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MutationObserver_observe, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  var args = [];
  name = globalMy.foundName(arguments[0]);
  args[0] = globalMy.jsdom_element[name];
  args[1] = arguments[1];
  result = this_.observe.apply(this_, args);
  if (result == undefined || result == null) {} else {
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
    globalMy.console.log('[*]  调用了MutationObserver_observe ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.MutationObserver_takeRecords = function () {
  if (!(this instanceof MutationObserver)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了MutationObserver_takeRecords, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.takeRecords.apply(this_, arguments);
  if (result == undefined || result == null) {} else {
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
    globalMy.console.log('[*]  调用了MutationObserver_takeRecords ' + '  result => ', '' + result);
  }
  return result;
};