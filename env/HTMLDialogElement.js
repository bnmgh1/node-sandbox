globalMy.HTMLDialogElement_get_open = function () {
  if (!(this instanceof HTMLDialogElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLDialogElement_get_open');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['open'];
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
    globalMy.console.log('[*]  调用了HTMLDialogElement_get_open, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLDialogElement_set_open = function (val) {
  if (!(this instanceof HTMLDialogElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLDialogElement_set_open, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['open'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['open'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLDialogElement_set_open' + '  result => ', '' + result);
  }
};
globalMy.HTMLDialogElement_get_returnValue = function () {
  if (!(this instanceof HTMLDialogElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLDialogElement_get_returnValue');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['returnValue'];
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
    globalMy.console.log('[*]  调用了HTMLDialogElement_get_returnValue, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLDialogElement_set_returnValue = function (val) {
  if (!(this instanceof HTMLDialogElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLDialogElement_set_returnValue, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['returnValue'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['returnValue'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLDialogElement_set_returnValue' + '  result => ', '' + result);
  }
};
globalMy.HTMLDialogElement_close = function () {
  if (!(this instanceof HTMLDialogElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLDialogElement_close, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.close.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了HTMLDialogElement_close ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.HTMLDialogElement_show = function () {
  if (!(this instanceof HTMLDialogElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLDialogElement_show, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.show.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了HTMLDialogElement_show ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.HTMLDialogElement_showModal = function () {
  if (!(this instanceof HTMLDialogElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLDialogElement_showModal, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.showModal.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了HTMLDialogElement_showModal ' + '  result => ', '' + result);
  }
  return result;
};