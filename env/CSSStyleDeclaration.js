globalMy.CSSStyleDeclaration_get_cssText = function () {
  if (!(this instanceof CSSStyleDeclaration)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleDeclaration_get_cssText');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['cssText'];
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
    globalMy.console.log('[*]  调用了CSSStyleDeclaration_get_cssText, result => ', '' + result);
  }
  return result;
};
globalMy.CSSStyleDeclaration_set_cssText = function (val) {
  if (!(this instanceof CSSStyleDeclaration)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleDeclaration_set_cssText, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['cssText'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['cssText'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleDeclaration_set_cssText' + '  result => ', '' + result);
  }
};
globalMy.CSSStyleDeclaration_get_length = function () {
  if (!(this instanceof CSSStyleDeclaration)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleDeclaration_get_length');
  }
  var result;
  // var foundName = globalMy.foundName(this);
  // result = globalMy.jsdom_element[foundName]['length'];
  // if (result != null && result != undefined) {
  //   switch (typeof result) {
  //     case "object":
  //       debugger;
  //       break;
  //     case "function":
  //       debugger;
  //       break;
  //     default:
  //       break;
  //   }
  // }
  result = 346;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleDeclaration_get_length, result => ', '' + result);
  }
  return result;
};
globalMy.CSSStyleDeclaration_get_parentRule = function () {
  if (!(this instanceof CSSStyleDeclaration)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleDeclaration_get_parentRule');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['parentRule'];
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
    globalMy.console.log('[*]  调用了CSSStyleDeclaration_get_parentRule, result => ', '' + result);
  }
  return result;
};
globalMy.CSSStyleDeclaration_get_cssFloat = function () {
  if (!(this instanceof CSSStyleDeclaration)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleDeclaration_get_cssFloat');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['cssFloat'];
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
    globalMy.console.log('[*]  调用了CSSStyleDeclaration_get_cssFloat, result => ', '' + result);
  }
  return result;
};
globalMy.CSSStyleDeclaration_set_cssFloat = function (val) {
  if (!(this instanceof CSSStyleDeclaration)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleDeclaration_set_cssFloat, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['cssFloat'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['cssFloat'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleDeclaration_set_cssFloat' + '  result => ', '' + result);
  }
};
globalMy.CSSStyleDeclaration_getPropertyPriority = function () {
  if (!(this instanceof CSSStyleDeclaration)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleDeclaration_getPropertyPriority, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.getPropertyPriority.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CSSStyleDeclaration_getPropertyPriority ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CSSStyleDeclaration_getPropertyValue = function () {
  if (!(this instanceof CSSStyleDeclaration)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleDeclaration_getPropertyValue, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.getPropertyValue.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CSSStyleDeclaration_getPropertyValue ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CSSStyleDeclaration_item = function () {
  if (!(this instanceof CSSStyleDeclaration)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleDeclaration_item, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.item.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CSSStyleDeclaration_item ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CSSStyleDeclaration_removeProperty = function () {
  if (!(this instanceof CSSStyleDeclaration)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleDeclaration_removeProperty, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.removeProperty.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CSSStyleDeclaration_removeProperty ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CSSStyleDeclaration_setProperty = function () {
  if (!(this instanceof CSSStyleDeclaration)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleDeclaration_setProperty, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.setProperty.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CSSStyleDeclaration_setProperty ' + '  result => ', '' + result);
  }
  return result;
};