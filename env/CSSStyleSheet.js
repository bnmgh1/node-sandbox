globalMy.CSSStyleSheet_get_ownerRule = function () {
  if (!(this instanceof CSSStyleSheet)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleSheet_get_ownerRule');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ownerRule'];
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
    globalMy.console.log('[*]  调用了CSSStyleSheet_get_ownerRule, result => ', '' + result);
  }
  return result;
};
globalMy.CSSStyleSheet_get_cssRules = function () {
  if (!(this instanceof CSSStyleSheet)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleSheet_get_cssRules');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['cssRules'];
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
    globalMy.console.log('[*]  调用了CSSStyleSheet_get_cssRules, result => ', '' + result);
  }
  return result;
};
globalMy.CSSStyleSheet_get_rules = function () {
  if (!(this instanceof CSSStyleSheet)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleSheet_get_rules');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['rules'];
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
    globalMy.console.log('[*]  调用了CSSStyleSheet_get_rules, result => ', '' + result);
  }
  return result;
};
globalMy.CSSStyleSheet_addRule = function () {
  if (!(this instanceof CSSStyleSheet)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleSheet_addRule, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.addRule.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CSSStyleSheet_addRule ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CSSStyleSheet_deleteRule = function () {
  if (!(this instanceof CSSStyleSheet)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleSheet_deleteRule, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.deleteRule.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CSSStyleSheet_deleteRule ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CSSStyleSheet_insertRule = function () {
  if (!(this instanceof CSSStyleSheet)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleSheet_insertRule, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.insertRule.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CSSStyleSheet_insertRule ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CSSStyleSheet_removeRule = function () {
  if (!(this instanceof CSSStyleSheet)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleSheet_removeRule, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.removeRule.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CSSStyleSheet_removeRule ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CSSStyleSheet_replace = function () {
  if (!(this instanceof CSSStyleSheet)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleSheet_replace, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.replace.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CSSStyleSheet_replace ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CSSStyleSheet_replaceSync = function () {
  if (!(this instanceof CSSStyleSheet)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleSheet_replaceSync, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.replaceSync.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CSSStyleSheet_replaceSync ' + '  result => ', '' + result);
  }
  return result;
};