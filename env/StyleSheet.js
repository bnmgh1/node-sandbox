globalMy.StyleSheet_get_type = function () {
  if (!(this instanceof StyleSheet)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了StyleSheet_get_type');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['type'];
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
    globalMy.console.log('[*]  调用了StyleSheet_get_type, result => ', '' + result);
  }
  return result;
};
globalMy.StyleSheet_get_href = function () {
  if (!(this instanceof StyleSheet)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了StyleSheet_get_href');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['href'];
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
    globalMy.console.log('[*]  调用了StyleSheet_get_href, result => ', '' + result);
  }
  return result;
};
globalMy.StyleSheet_get_ownerNode = function () {
  if (!(this instanceof StyleSheet)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了StyleSheet_get_ownerNode');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ownerNode'];
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
    globalMy.console.log('[*]  调用了StyleSheet_get_ownerNode, result => ', '' + result);
  }
  return result;
};
globalMy.StyleSheet_get_parentStyleSheet = function () {
  if (!(this instanceof StyleSheet)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了StyleSheet_get_parentStyleSheet');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['parentStyleSheet'];
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
    globalMy.console.log('[*]  调用了StyleSheet_get_parentStyleSheet, result => ', '' + result);
  }
  return result;
};
globalMy.StyleSheet_get_title = function () {
  if (!(this instanceof StyleSheet)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了StyleSheet_get_title');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['title'];
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
    globalMy.console.log('[*]  调用了StyleSheet_get_title, result => ', '' + result);
  }
  return result;
};
globalMy.StyleSheet_get_media = function () {
  if (!(this instanceof StyleSheet)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了StyleSheet_get_media');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['media'];
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
    globalMy.console.log('[*]  调用了StyleSheet_get_media, result => ', '' + result);
  }
  return result;
};
globalMy.StyleSheet_set_media = function (val) {
  if (!(this instanceof StyleSheet)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了StyleSheet_set_media, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['media'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['media'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了StyleSheet_set_media' + '  result => ', '' + result);
  }
};
globalMy.StyleSheet_get_disabled = function () {
  if (!(this instanceof StyleSheet)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了StyleSheet_get_disabled');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['disabled'];
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
    globalMy.console.log('[*]  调用了StyleSheet_get_disabled, result => ', '' + result);
  }
  return result;
};
globalMy.StyleSheet_set_disabled = function (val) {
  if (!(this instanceof StyleSheet)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了StyleSheet_set_disabled, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['disabled'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['disabled'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了StyleSheet_set_disabled' + '  result => ', '' + result);
  }
};