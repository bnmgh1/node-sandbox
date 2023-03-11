globalMy.HTMLElement_get_title = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_title');
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
    globalMy.console.log('[*]  调用了HTMLElement_get_title, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_title = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_title, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['title'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['title'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_title' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_lang = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_lang');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['lang'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_lang, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_lang = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_lang, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['lang'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['lang'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_lang' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_translate = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_translate');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['translate'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_translate, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_translate = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_translate, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['translate'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['translate'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_translate' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_dir = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_dir');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['dir'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_dir, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_dir = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_dir, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['dir'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['dir'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_dir' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_hidden = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_hidden');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['hidden'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_hidden, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_hidden = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_hidden, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['hidden'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['hidden'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_hidden' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_accessKey = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_accessKey');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['accessKey'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_accessKey, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_accessKey = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_accessKey, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['accessKey'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['accessKey'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_accessKey' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_draggable = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_draggable');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['draggable'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_draggable, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_draggable = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_draggable, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['draggable'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['draggable'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_draggable' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_spellcheck = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_spellcheck');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['spellcheck'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_spellcheck, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_spellcheck = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_spellcheck, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['spellcheck'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['spellcheck'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_spellcheck' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_textprediction = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_textprediction');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['textprediction'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_textprediction, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_textprediction = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_textprediction, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['textprediction'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['textprediction'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_textprediction' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_autocapitalize = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_autocapitalize');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['autocapitalize'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_autocapitalize, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_autocapitalize = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_autocapitalize, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['autocapitalize'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['autocapitalize'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_autocapitalize' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_contentEditable = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_contentEditable');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['contentEditable'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_contentEditable, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_contentEditable = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_contentEditable, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['contentEditable'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['contentEditable'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_contentEditable' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_enterKeyHint = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_enterKeyHint');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['enterKeyHint'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_enterKeyHint, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_enterKeyHint = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_enterKeyHint, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['enterKeyHint'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['enterKeyHint'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_enterKeyHint' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_isContentEditable = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_isContentEditable');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['isContentEditable'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_isContentEditable, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_get_inputMode = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_inputMode');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['inputMode'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_inputMode, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_inputMode = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_inputMode, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['inputMode'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['inputMode'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_inputMode' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_virtualKeyboardPolicy = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_virtualKeyboardPolicy');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['virtualKeyboardPolicy'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_virtualKeyboardPolicy, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_virtualKeyboardPolicy = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_virtualKeyboardPolicy, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['virtualKeyboardPolicy'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['virtualKeyboardPolicy'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_virtualKeyboardPolicy' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_offsetParent = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_offsetParent');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['offsetParent'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_offsetParent, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_get_offsetTop = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_offsetTop');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['offsetTop'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_offsetTop, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_get_offsetLeft = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_offsetLeft');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['offsetLeft'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_offsetLeft, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_get_offsetWidth = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_offsetWidth');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['offsetWidth'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_offsetWidth, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_get_offsetHeight = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_offsetHeight');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['offsetHeight'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_offsetHeight, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_get_innerText = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_innerText');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['innerText'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_innerText, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_innerText = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_innerText, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['innerText'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['innerText'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_innerText' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_outerText = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_outerText');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['outerText'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_outerText, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_outerText = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_outerText, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['outerText'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['outerText'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_outerText' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onbeforexrselect = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onbeforexrselect');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onbeforexrselect'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onbeforexrselect, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onbeforexrselect = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onbeforexrselect, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onbeforexrselect'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onbeforexrselect'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onbeforexrselect' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onabort = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onabort');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onabort'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onabort, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onabort = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onabort, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onabort'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onabort'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onabort' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onbeforeinput = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onbeforeinput');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onbeforeinput'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onbeforeinput, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onbeforeinput = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onbeforeinput, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onbeforeinput'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onbeforeinput'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onbeforeinput' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onblur = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onblur');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onblur'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onblur, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onblur = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onblur, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onblur'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onblur'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onblur' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_oncancel = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_oncancel');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['oncancel'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_oncancel, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_oncancel = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_oncancel, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['oncancel'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['oncancel'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_oncancel' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_oncanplay = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_oncanplay');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['oncanplay'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_oncanplay, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_oncanplay = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_oncanplay, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['oncanplay'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['oncanplay'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_oncanplay' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_oncanplaythrough = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_oncanplaythrough');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['oncanplaythrough'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_oncanplaythrough, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_oncanplaythrough = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_oncanplaythrough, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['oncanplaythrough'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['oncanplaythrough'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_oncanplaythrough' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onchange = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onchange');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onchange'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onchange, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onchange = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onchange, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onchange'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onchange'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onchange' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onclick = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onclick');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onclick'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onclick, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onclick = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onclick, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onclick'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onclick'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onclick' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onclose = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onclose');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onclose'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onclose, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onclose = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onclose, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onclose'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onclose'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onclose' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_oncontextlost = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_oncontextlost');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['oncontextlost'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_oncontextlost, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_oncontextlost = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_oncontextlost, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['oncontextlost'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['oncontextlost'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_oncontextlost' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_oncontextmenu = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_oncontextmenu');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['oncontextmenu'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_oncontextmenu, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_oncontextmenu = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_oncontextmenu, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['oncontextmenu'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['oncontextmenu'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_oncontextmenu' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_oncontextrestored = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_oncontextrestored');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['oncontextrestored'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_oncontextrestored, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_oncontextrestored = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_oncontextrestored, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['oncontextrestored'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['oncontextrestored'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_oncontextrestored' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_oncuechange = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_oncuechange');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['oncuechange'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_oncuechange, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_oncuechange = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_oncuechange, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['oncuechange'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['oncuechange'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_oncuechange' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_ondblclick = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_ondblclick');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ondblclick'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_ondblclick, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_ondblclick = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ondblclick, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ondblclick'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ondblclick'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ondblclick' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_ondrag = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_ondrag');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ondrag'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_ondrag, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_ondrag = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ondrag, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ondrag'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ondrag'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ondrag' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_ondragend = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_ondragend');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ondragend'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_ondragend, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_ondragend = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ondragend, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ondragend'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ondragend'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ondragend' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_ondragenter = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_ondragenter');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ondragenter'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_ondragenter, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_ondragenter = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ondragenter, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ondragenter'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ondragenter'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ondragenter' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_ondragleave = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_ondragleave');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ondragleave'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_ondragleave, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_ondragleave = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ondragleave, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ondragleave'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ondragleave'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ondragleave' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_ondragover = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_ondragover');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ondragover'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_ondragover, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_ondragover = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ondragover, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ondragover'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ondragover'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ondragover' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_ondragstart = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_ondragstart');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ondragstart'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_ondragstart, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_ondragstart = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ondragstart, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ondragstart'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ondragstart'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ondragstart' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_ondrop = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_ondrop');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ondrop'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_ondrop, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_ondrop = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ondrop, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ondrop'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ondrop'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ondrop' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_ondurationchange = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_ondurationchange');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ondurationchange'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_ondurationchange, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_ondurationchange = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ondurationchange, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ondurationchange'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ondurationchange'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ondurationchange' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onemptied = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onemptied');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onemptied'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onemptied, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onemptied = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onemptied, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onemptied'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onemptied'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onemptied' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onended = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onended');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onended'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onended, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onended = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onended, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onended'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onended'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onended' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onerror = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onerror');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onerror'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onerror, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onerror = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onerror, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onerror'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onerror'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onerror' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onfocus = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onfocus');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onfocus'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onfocus, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onfocus = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onfocus, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onfocus'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onfocus'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onfocus' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onformdata = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onformdata');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onformdata'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onformdata, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onformdata = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onformdata, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onformdata'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onformdata'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onformdata' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_oninput = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_oninput');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['oninput'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_oninput, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_oninput = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_oninput, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['oninput'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['oninput'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_oninput' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_oninvalid = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_oninvalid');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['oninvalid'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_oninvalid, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_oninvalid = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_oninvalid, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['oninvalid'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['oninvalid'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_oninvalid' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onkeydown = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onkeydown');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onkeydown'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onkeydown, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onkeydown = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onkeydown, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onkeydown'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onkeydown'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onkeydown' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onkeypress = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onkeypress');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onkeypress'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onkeypress, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onkeypress = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onkeypress, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onkeypress'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onkeypress'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onkeypress' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onkeyup = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onkeyup');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onkeyup'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onkeyup, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onkeyup = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onkeyup, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onkeyup'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onkeyup'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onkeyup' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onload = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onload');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onload'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onload, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onload = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onload, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onload'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onload'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onload' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onloadeddata = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onloadeddata');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onloadeddata'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onloadeddata, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onloadeddata = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onloadeddata, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onloadeddata'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onloadeddata'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onloadeddata' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onloadedmetadata = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onloadedmetadata');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onloadedmetadata'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onloadedmetadata, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onloadedmetadata = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onloadedmetadata, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onloadedmetadata'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onloadedmetadata'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onloadedmetadata' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onloadstart = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onloadstart');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onloadstart'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onloadstart, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onloadstart = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onloadstart, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onloadstart'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onloadstart'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onloadstart' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onmousedown = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onmousedown');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onmousedown'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onmousedown, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onmousedown = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onmousedown, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onmousedown'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onmousedown'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onmousedown' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onmouseenter = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onmouseenter');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onmouseenter'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onmouseenter, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onmouseenter = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onmouseenter, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onmouseenter'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onmouseenter'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onmouseenter' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onmouseleave = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onmouseleave');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onmouseleave'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onmouseleave, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onmouseleave = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onmouseleave, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onmouseleave'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onmouseleave'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onmouseleave' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onmousemove = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onmousemove');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onmousemove'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onmousemove, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onmousemove = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onmousemove, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onmousemove'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onmousemove'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onmousemove' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onmouseout = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onmouseout');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onmouseout'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onmouseout, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onmouseout = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onmouseout, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onmouseout'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onmouseout'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onmouseout' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onmouseover = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onmouseover');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onmouseover'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onmouseover, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onmouseover = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onmouseover, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onmouseover'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onmouseover'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onmouseover' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onmouseup = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onmouseup');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onmouseup'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onmouseup, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onmouseup = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onmouseup, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onmouseup'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onmouseup'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onmouseup' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onmousewheel = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onmousewheel');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onmousewheel'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onmousewheel, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onmousewheel = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onmousewheel, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onmousewheel'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onmousewheel'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onmousewheel' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onpause = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onpause');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onpause'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onpause, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onpause = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onpause, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onpause'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onpause'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onpause' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onplay = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onplay');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onplay'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onplay, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onplay = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onplay, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onplay'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onplay'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onplay' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onplaying = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onplaying');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onplaying'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onplaying, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onplaying = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onplaying, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onplaying'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onplaying'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onplaying' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onprogress = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onprogress');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onprogress'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onprogress, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onprogress = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onprogress, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onprogress'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onprogress'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onprogress' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onratechange = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onratechange');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onratechange'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onratechange, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onratechange = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onratechange, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onratechange'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onratechange'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onratechange' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onreset = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onreset');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onreset'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onreset, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onreset = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onreset, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onreset'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onreset'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onreset' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onresize = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onresize');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onresize'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onresize, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onresize = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onresize, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onresize'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onresize'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onresize' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onscroll = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onscroll');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onscroll'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onscroll, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onscroll = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onscroll, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onscroll'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onscroll'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onscroll' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onsecuritypolicyviolation = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onsecuritypolicyviolation');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onsecuritypolicyviolation'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onsecuritypolicyviolation, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onsecuritypolicyviolation = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onsecuritypolicyviolation, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onsecuritypolicyviolation'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onsecuritypolicyviolation'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onsecuritypolicyviolation' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onseeked = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onseeked');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onseeked'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onseeked, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onseeked = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onseeked, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onseeked'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onseeked'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onseeked' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onseeking = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onseeking');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onseeking'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onseeking, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onseeking = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onseeking, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onseeking'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onseeking'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onseeking' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onselect = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onselect');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onselect'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onselect, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onselect = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onselect, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onselect'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onselect'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onselect' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onslotchange = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onslotchange');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onslotchange'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onslotchange, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onslotchange = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onslotchange, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onslotchange'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onslotchange'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onslotchange' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onstalled = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onstalled');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onstalled'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onstalled, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onstalled = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onstalled, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onstalled'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onstalled'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onstalled' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onsubmit = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onsubmit');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onsubmit'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onsubmit, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onsubmit = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onsubmit, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onsubmit'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onsubmit'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onsubmit' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onsuspend = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onsuspend');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onsuspend'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onsuspend, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onsuspend = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onsuspend, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onsuspend'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onsuspend'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onsuspend' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_ontimeupdate = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_ontimeupdate');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ontimeupdate'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_ontimeupdate, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_ontimeupdate = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ontimeupdate, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ontimeupdate'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ontimeupdate'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ontimeupdate' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_ontoggle = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_ontoggle');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ontoggle'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_ontoggle, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_ontoggle = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ontoggle, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ontoggle'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ontoggle'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ontoggle' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onvolumechange = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onvolumechange');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onvolumechange'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onvolumechange, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onvolumechange = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onvolumechange, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onvolumechange'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onvolumechange'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onvolumechange' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onwaiting = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onwaiting');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onwaiting'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onwaiting, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onwaiting = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onwaiting, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onwaiting'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onwaiting'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onwaiting' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onwebkitanimationend = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onwebkitanimationend');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onwebkitanimationend'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onwebkitanimationend, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onwebkitanimationend = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onwebkitanimationend, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onwebkitanimationend'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onwebkitanimationend'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onwebkitanimationend' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onwebkitanimationiteration = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onwebkitanimationiteration');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onwebkitanimationiteration'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onwebkitanimationiteration, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onwebkitanimationiteration = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onwebkitanimationiteration, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onwebkitanimationiteration'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onwebkitanimationiteration'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onwebkitanimationiteration' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onwebkitanimationstart = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onwebkitanimationstart');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onwebkitanimationstart'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onwebkitanimationstart, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onwebkitanimationstart = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onwebkitanimationstart, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onwebkitanimationstart'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onwebkitanimationstart'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onwebkitanimationstart' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onwebkittransitionend = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onwebkittransitionend');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onwebkittransitionend'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onwebkittransitionend, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onwebkittransitionend = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onwebkittransitionend, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onwebkittransitionend'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onwebkittransitionend'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onwebkittransitionend' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onwheel = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onwheel');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onwheel'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onwheel, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onwheel = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onwheel, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onwheel'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onwheel'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onwheel' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onauxclick = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onauxclick');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onauxclick'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onauxclick, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onauxclick = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onauxclick, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onauxclick'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onauxclick'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onauxclick' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_ongotpointercapture = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_ongotpointercapture');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ongotpointercapture'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_ongotpointercapture, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_ongotpointercapture = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ongotpointercapture, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ongotpointercapture'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ongotpointercapture'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ongotpointercapture' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onlostpointercapture = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onlostpointercapture');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onlostpointercapture'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onlostpointercapture, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onlostpointercapture = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onlostpointercapture, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onlostpointercapture'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onlostpointercapture'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onlostpointercapture' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onpointerdown = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onpointerdown');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onpointerdown'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onpointerdown, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onpointerdown = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onpointerdown, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onpointerdown'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onpointerdown'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onpointerdown' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onpointermove = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onpointermove');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onpointermove'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onpointermove, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onpointermove = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onpointermove, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onpointermove'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onpointermove'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onpointermove' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onpointerrawupdate = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onpointerrawupdate');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onpointerrawupdate'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onpointerrawupdate, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onpointerrawupdate = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onpointerrawupdate, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onpointerrawupdate'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onpointerrawupdate'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onpointerrawupdate' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onpointerup = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onpointerup');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onpointerup'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onpointerup, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onpointerup = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onpointerup, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onpointerup'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onpointerup'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onpointerup' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onpointercancel = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onpointercancel');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onpointercancel'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onpointercancel, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onpointercancel = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onpointercancel, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onpointercancel'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onpointercancel'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onpointercancel' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onpointerover = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onpointerover');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onpointerover'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onpointerover, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onpointerover = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onpointerover, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onpointerover'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onpointerover'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onpointerover' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onpointerout = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onpointerout');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onpointerout'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onpointerout, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onpointerout = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onpointerout, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onpointerout'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onpointerout'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onpointerout' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onpointerenter = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onpointerenter');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onpointerenter'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onpointerenter, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onpointerenter = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onpointerenter, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onpointerenter'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onpointerenter'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onpointerenter' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onpointerleave = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onpointerleave');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onpointerleave'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onpointerleave, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onpointerleave = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onpointerleave, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onpointerleave'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onpointerleave'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onpointerleave' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onselectstart = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onselectstart');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onselectstart'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onselectstart, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onselectstart = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onselectstart, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onselectstart'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onselectstart'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onselectstart' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onselectionchange = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onselectionchange');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onselectionchange'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onselectionchange, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onselectionchange = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onselectionchange, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onselectionchange'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onselectionchange'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onselectionchange' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onanimationend = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onanimationend');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onanimationend'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onanimationend, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onanimationend = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onanimationend, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onanimationend'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onanimationend'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onanimationend' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onanimationiteration = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onanimationiteration');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onanimationiteration'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onanimationiteration, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onanimationiteration = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onanimationiteration, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onanimationiteration'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onanimationiteration'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onanimationiteration' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onanimationstart = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onanimationstart');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onanimationstart'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onanimationstart, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onanimationstart = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onanimationstart, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onanimationstart'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onanimationstart'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onanimationstart' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_ontransitionrun = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_ontransitionrun');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ontransitionrun'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_ontransitionrun, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_ontransitionrun = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ontransitionrun, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ontransitionrun'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ontransitionrun'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ontransitionrun' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_ontransitionstart = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_ontransitionstart');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ontransitionstart'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_ontransitionstart, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_ontransitionstart = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ontransitionstart, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ontransitionstart'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ontransitionstart'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ontransitionstart' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_ontransitionend = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_ontransitionend');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ontransitionend'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_ontransitionend, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_ontransitionend = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ontransitionend, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ontransitionend'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ontransitionend'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ontransitionend' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_ontransitioncancel = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_ontransitioncancel');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ontransitioncancel'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_ontransitioncancel, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_ontransitioncancel = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ontransitioncancel, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ontransitioncancel'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ontransitioncancel'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_ontransitioncancel' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_oncopy = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_oncopy');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['oncopy'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_oncopy, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_oncopy = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_oncopy, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['oncopy'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['oncopy'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_oncopy' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_oncut = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_oncut');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['oncut'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_oncut, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_oncut = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_oncut, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['oncut'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['oncut'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_oncut' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onpaste = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onpaste');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onpaste'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onpaste, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onpaste = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onpaste, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onpaste'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onpaste'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onpaste' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_dataset = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_dataset');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['dataset'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_dataset, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_get_nonce = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_nonce');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['nonce'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_nonce, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_nonce = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_nonce, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['nonce'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['nonce'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_nonce' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_autofocus = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_autofocus');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['autofocus'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_autofocus, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_autofocus = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_autofocus, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['autofocus'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['autofocus'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_autofocus' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_tabIndex = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_tabIndex');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['tabIndex'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_tabIndex, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_tabIndex = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_tabIndex, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['tabIndex'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['tabIndex'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_tabIndex' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_style = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_style');
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
    globalMy.console.log('[*]  调用了HTMLElement_get_style, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_style = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_style, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了HTMLElement_set_style' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_attributeStyleMap = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_attributeStyleMap');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['attributeStyleMap'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_attributeStyleMap, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_attachInternals = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_attachInternals, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.attachInternals.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了HTMLElement_attachInternals ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_blur = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_blur, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.blur.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了HTMLElement_blur ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_click = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_click, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.click.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了HTMLElement_click ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_focus = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_focus, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.focus.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了HTMLElement_focus ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_get_inert = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_inert');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['inert'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_inert, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_inert = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_inert, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['inert'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['inert'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_inert' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_oncontentvisibilityautostatechange = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_oncontentvisibilityautostatechange');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['oncontentvisibilityautostatechange'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_oncontentvisibilityautostatechange, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_oncontentvisibilityautostatechange = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_oncontentvisibilityautostatechange, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['oncontentvisibilityautostatechange'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['oncontentvisibilityautostatechange'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_oncontentvisibilityautostatechange' + '  result => ', '' + result);
  }
};
globalMy.HTMLElement_get_onbeforematch = function () {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_get_onbeforematch');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onbeforematch'];
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
    globalMy.console.log('[*]  调用了HTMLElement_get_onbeforematch, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLElement_set_onbeforematch = function (val) {
  if (!(this instanceof HTMLElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onbeforematch, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onbeforematch'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onbeforematch'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLElement_set_onbeforematch' + '  result => ', '' + result);
  }
};