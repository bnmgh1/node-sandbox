globalMy.Text_get_wholeText = function () {
  if (!(this instanceof Text)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Text_get_wholeText');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['wholeText'];
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
    globalMy.console.log('[*]  调用了Text_get_wholeText, result => ', '' + result);
  }
  return result;
};
globalMy.Text_get_assignedSlot = function () {
  if (!(this instanceof Text)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Text_get_assignedSlot');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['assignedSlot'];
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
    globalMy.console.log('[*]  调用了Text_get_assignedSlot, result => ', '' + result);
  }
  return result;
};
globalMy.Text_splitText = function () {
  if (!(this instanceof Text)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Text_splitText, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.splitText.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Text_splitText ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Text_get_wholeText = function () {
  if (!(this instanceof Text)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['wholeText'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Text_get_wholeText,result => ', '' + result);
  }
  return result;
};
globalMy.Text_get_assignedSlot = function () {
  if (!(this instanceof Text)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['assignedSlot'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Text_get_assignedSlot,result => ', '' + result);
  }
  return result;
};
globalMy.Text_splitText = function () {
  if (!(this instanceof Text)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Text_splitText, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};