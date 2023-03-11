globalMy.CSSStyleRule_get_selectorText = function () {
  if (!(this instanceof CSSStyleRule)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleRule_get_selectorText');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['selectorText'];
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
    globalMy.console.log('[*]  调用了CSSStyleRule_get_selectorText, result => ', '' + result);
  }
  return result;
};
globalMy.CSSStyleRule_set_selectorText = function (val) {
  if (!(this instanceof CSSStyleRule)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleRule_set_selectorText, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['selectorText'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['selectorText'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleRule_set_selectorText' + '  result => ', '' + result);
  }
};
globalMy.CSSStyleRule_get_style = function () {
  if (!(this instanceof CSSStyleRule)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleRule_get_style');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['style'];
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
    globalMy.console.log('[*]  调用了CSSStyleRule_get_style, result => ', '' + result);
  }
  return result;
};
globalMy.CSSStyleRule_set_style = function (val) {
  if (!(this instanceof CSSStyleRule)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleRule_set_style, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['style'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['style'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleRule_set_style' + '  result => ', '' + result);
  }
};
globalMy.CSSStyleRule_get_styleMap = function () {
  if (!(this instanceof CSSStyleRule)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CSSStyleRule_get_styleMap');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['styleMap'];
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
    globalMy.console.log('[*]  调用了CSSStyleRule_get_styleMap, result => ', '' + result);
  }
  return result;
};