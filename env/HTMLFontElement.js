globalMy.HTMLFontElement_get_color = function () {
  if (!(this instanceof HTMLFontElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLFontElement_get_color');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['color'];
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
    globalMy.console.log('[*]  调用了HTMLFontElement_get_color, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLFontElement_set_color = function (val) {
  if (!(this instanceof HTMLFontElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLFontElement_set_color, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['color'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['color'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLFontElement_set_color' + '  result => ', '' + result);
  }
};
globalMy.HTMLFontElement_get_face = function () {
  if (!(this instanceof HTMLFontElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLFontElement_get_face');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['face'];
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
    globalMy.console.log('[*]  调用了HTMLFontElement_get_face, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLFontElement_set_face = function (val) {
  if (!(this instanceof HTMLFontElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLFontElement_set_face, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['face'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['face'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLFontElement_set_face' + '  result => ', '' + result);
  }
};
globalMy.HTMLFontElement_get_size = function () {
  if (!(this instanceof HTMLFontElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLFontElement_get_size');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['size'];
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
    globalMy.console.log('[*]  调用了HTMLFontElement_get_size, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLFontElement_set_size = function (val) {
  if (!(this instanceof HTMLFontElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLFontElement_set_size, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['size'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['size'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLFontElement_set_size' + '  result => ', '' + result);
  }
};