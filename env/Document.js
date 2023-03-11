// 函数实现
// SpeechSynthesis
globalMy.Document_get_implementation = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_implementation');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['implementation'];
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
    globalMy.console.log('[*]  调用了Document_get_implementation, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_URL = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_URL');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['URL'];
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
    globalMy.console.log('[*]  调用了Document_get_URL, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_documentURI = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_documentURI');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['documentURI'];
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
    globalMy.console.log('[*]  调用了Document_get_documentURI, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_compatMode = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_compatMode');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['compatMode'];
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
    globalMy.console.log('[*]  调用了Document_get_compatMode, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_characterSet = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_characterSet');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['characterSet'];
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
    globalMy.console.log('[*]  调用了Document_get_characterSet, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_charset = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_charset');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['charset'];
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
    globalMy.console.log('[*]  调用了Document_get_charset, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_inputEncoding = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_inputEncoding');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['inputEncoding'];
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
    globalMy.console.log('[*]  调用了Document_get_inputEncoding, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_contentType = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_contentType');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['contentType'];
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
    globalMy.console.log('[*]  调用了Document_get_contentType, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_doctype = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_doctype');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['doctype'];
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
    globalMy.console.log('[*]  调用了Document_get_doctype, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_documentElement = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_documentElement');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['documentElement'];
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
    globalMy.console.log('[*]  调用了Document_get_documentElement, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_xmlEncoding = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_xmlEncoding');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['xmlEncoding'];
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
    globalMy.console.log('[*]  调用了Document_get_xmlEncoding, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_xmlVersion = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_xmlVersion');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['xmlVersion'];
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
    globalMy.console.log('[*]  调用了Document_get_xmlVersion, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_xmlVersion = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_xmlVersion, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['xmlVersion'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['xmlVersion'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_xmlVersion' + '  result => ', '' + result);
  }
};
globalMy.Document_get_xmlStandalone = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_xmlStandalone');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['xmlStandalone'];
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
    globalMy.console.log('[*]  调用了Document_get_xmlStandalone, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_xmlStandalone = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_xmlStandalone, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['xmlStandalone'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['xmlStandalone'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_xmlStandalone' + '  result => ', '' + result);
  }
};
globalMy.Document_get_domain = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_domain');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['domain'];
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
    globalMy.console.log('[*]  调用了Document_get_domain, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_domain = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_domain, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['domain'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['domain'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_domain' + '  result => ', '' + result);
  }
};
globalMy.Document_get_referrer = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_referrer');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['referrer'];
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
    globalMy.console.log('[*]  调用了Document_get_referrer, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_cookie = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_cookie');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['cookie'];
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
    globalMy.console.log('[*]  调用了Document_get_cookie, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_cookie = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_cookie, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    debugger;
    globalMy.jsdom_element[foundName]['cookie'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['cookie'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_cookie' + '  result => ', '' + result);
  }
};
globalMy.Document_get_lastModified = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_lastModified');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['lastModified'];
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
    globalMy.console.log('[*]  调用了Document_get_lastModified, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_readyState = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_readyState');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['readyState'];
  result = "interactive";
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
    globalMy.console.log('[*]  调用了Document_get_readyState, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_title = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_title');
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
    globalMy.console.log('[*]  调用了Document_get_title, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_title = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_title, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_title' + '  result => ', '' + result);
  }
};
globalMy.Document_get_dir = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_dir');
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
    globalMy.console.log('[*]  调用了Document_get_dir, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_dir = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_dir, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_dir' + '  result => ', '' + result);
  }
};
globalMy.Document_get_body = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_body');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['body'];
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
    globalMy.console.log('[*]  调用了Document_get_body, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_body = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_body, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['body'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['body'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_body' + '  result => ', '' + result);
  }
};
globalMy.Document_get_head = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_head');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['head'];
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
    globalMy.console.log('[*]  调用了Document_get_head, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_images = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_images');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['images'];
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
    globalMy.console.log('[*]  调用了Document_get_images, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_embeds = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_embeds');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['embeds'];
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
    globalMy.console.log('[*]  调用了Document_get_embeds, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_plugins = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_plugins');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['plugins'];
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
    globalMy.console.log('[*]  调用了Document_get_plugins, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_links = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_links');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['links'];
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
    globalMy.console.log('[*]  调用了Document_get_links, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_forms = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_forms');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['forms'];
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
    globalMy.console.log('[*]  调用了Document_get_forms, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_scripts = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_scripts');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['scripts'];
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
    globalMy.console.log('[*]  调用了Document_get_scripts, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_currentScript = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_currentScript');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['currentScript'];
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
    globalMy.console.log('[*]  调用了Document_get_currentScript, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_defaultView = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_defaultView');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['defaultView'];
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
    globalMy.console.log('[*]  调用了Document_get_defaultView, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_designMode = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_designMode');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['designMode'];
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
    globalMy.console.log('[*]  调用了Document_get_designMode, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_designMode = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_designMode, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['designMode'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['designMode'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_designMode' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onreadystatechange = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onreadystatechange');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onreadystatechange'];
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
    globalMy.console.log('[*]  调用了Document_get_onreadystatechange, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onreadystatechange = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onreadystatechange, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onreadystatechange'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onreadystatechange'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onreadystatechange' + '  result => ', '' + result);
  }
};
globalMy.Document_get_anchors = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_anchors');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['anchors'];
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
    globalMy.console.log('[*]  调用了Document_get_anchors, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_applets = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_applets');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['applets'];
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
    globalMy.console.log('[*]  调用了Document_get_applets, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_fgColor = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_fgColor');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['fgColor'];
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
    globalMy.console.log('[*]  调用了Document_get_fgColor, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_fgColor = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_fgColor, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['fgColor'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['fgColor'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_fgColor' + '  result => ', '' + result);
  }
};
globalMy.Document_get_linkColor = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_linkColor');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['linkColor'];
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
    globalMy.console.log('[*]  调用了Document_get_linkColor, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_linkColor = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_linkColor, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['linkColor'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['linkColor'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_linkColor' + '  result => ', '' + result);
  }
};
globalMy.Document_get_vlinkColor = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_vlinkColor');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['vlinkColor'];
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
    globalMy.console.log('[*]  调用了Document_get_vlinkColor, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_vlinkColor = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_vlinkColor, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['vlinkColor'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['vlinkColor'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_vlinkColor' + '  result => ', '' + result);
  }
};
globalMy.Document_get_alinkColor = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_alinkColor');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['alinkColor'];
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
    globalMy.console.log('[*]  调用了Document_get_alinkColor, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_alinkColor = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_alinkColor, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['alinkColor'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['alinkColor'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_alinkColor' + '  result => ', '' + result);
  }
};
globalMy.Document_get_bgColor = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_bgColor');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['bgColor'];
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
    globalMy.console.log('[*]  调用了Document_get_bgColor, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_bgColor = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_bgColor, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['bgColor'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['bgColor'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_bgColor' + '  result => ', '' + result);
  }
};
globalMy.Document_get_all = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_all');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['all'];
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
    globalMy.console.log('[*]  调用了Document_get_all, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_scrollingElement = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_scrollingElement');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['scrollingElement'];
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
    globalMy.console.log('[*]  调用了Document_get_scrollingElement, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_onpointerlockchange = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onpointerlockchange');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onpointerlockchange'];
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
    globalMy.console.log('[*]  调用了Document_get_onpointerlockchange, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onpointerlockchange = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onpointerlockchange, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onpointerlockchange'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onpointerlockchange'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onpointerlockchange' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onpointerlockerror = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onpointerlockerror');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onpointerlockerror'];
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
    globalMy.console.log('[*]  调用了Document_get_onpointerlockerror, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onpointerlockerror = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onpointerlockerror, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onpointerlockerror'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onpointerlockerror'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onpointerlockerror' + '  result => ', '' + result);
  }
};
globalMy.Document_get_hidden = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_hidden');
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
    globalMy.console.log('[*]  调用了Document_get_hidden, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_visibilityState = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_visibilityState');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['visibilityState'];
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
    globalMy.console.log('[*]  调用了Document_get_visibilityState, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_wasDiscarded = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_wasDiscarded');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['wasDiscarded'];
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
    globalMy.console.log('[*]  调用了Document_get_wasDiscarded, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_featurePolicy = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_featurePolicy');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['featurePolicy'];
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
    globalMy.console.log('[*]  调用了Document_get_featurePolicy, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_webkitVisibilityState = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_webkitVisibilityState');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['webkitVisibilityState'];
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
    globalMy.console.log('[*]  调用了Document_get_webkitVisibilityState, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_webkitHidden = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_webkitHidden');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['webkitHidden'];
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
    globalMy.console.log('[*]  调用了Document_get_webkitHidden, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_onbeforecopy = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onbeforecopy');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onbeforecopy'];
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
    globalMy.console.log('[*]  调用了Document_get_onbeforecopy, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onbeforecopy = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onbeforecopy, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onbeforecopy'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onbeforecopy'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onbeforecopy' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onbeforecut = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onbeforecut');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onbeforecut'];
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
    globalMy.console.log('[*]  调用了Document_get_onbeforecut, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onbeforecut = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onbeforecut, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onbeforecut'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onbeforecut'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onbeforecut' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onbeforepaste = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onbeforepaste');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onbeforepaste'];
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
    globalMy.console.log('[*]  调用了Document_get_onbeforepaste, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onbeforepaste = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onbeforepaste, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onbeforepaste'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onbeforepaste'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onbeforepaste' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onfreeze = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onfreeze');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onfreeze'];
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
    globalMy.console.log('[*]  调用了Document_get_onfreeze, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onfreeze = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onfreeze, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onfreeze'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onfreeze'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onfreeze' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onresume = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onresume');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onresume'];
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
    globalMy.console.log('[*]  调用了Document_get_onresume, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onresume = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onresume, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onresume'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onresume'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onresume' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onsearch = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onsearch');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onsearch'];
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
    globalMy.console.log('[*]  调用了Document_get_onsearch, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onsearch = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onsearch, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onsearch'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onsearch'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onsearch' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onvisibilitychange = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onvisibilitychange');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onvisibilitychange'];
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
    globalMy.console.log('[*]  调用了Document_get_onvisibilitychange, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onvisibilitychange = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onvisibilitychange, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onvisibilitychange'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onvisibilitychange'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onvisibilitychange' + '  result => ', '' + result);
  }
};
globalMy.Document_get_fullscreenEnabled = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_fullscreenEnabled');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['fullscreenEnabled'];
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
    globalMy.console.log('[*]  调用了Document_get_fullscreenEnabled, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_fullscreenEnabled = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_fullscreenEnabled, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['fullscreenEnabled'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['fullscreenEnabled'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_fullscreenEnabled' + '  result => ', '' + result);
  }
};
globalMy.Document_get_fullscreen = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_fullscreen');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['fullscreen'];
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
    globalMy.console.log('[*]  调用了Document_get_fullscreen, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_fullscreen = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_fullscreen, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['fullscreen'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['fullscreen'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_fullscreen' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onfullscreenchange = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onfullscreenchange');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onfullscreenchange'];
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
    globalMy.console.log('[*]  调用了Document_get_onfullscreenchange, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onfullscreenchange = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onfullscreenchange, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onfullscreenchange'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onfullscreenchange'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onfullscreenchange' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onfullscreenerror = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onfullscreenerror');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onfullscreenerror'];
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
    globalMy.console.log('[*]  调用了Document_get_onfullscreenerror, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onfullscreenerror = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onfullscreenerror, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onfullscreenerror'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onfullscreenerror'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onfullscreenerror' + '  result => ', '' + result);
  }
};
globalMy.Document_get_webkitIsFullScreen = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_webkitIsFullScreen');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['webkitIsFullScreen'];
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
    globalMy.console.log('[*]  调用了Document_get_webkitIsFullScreen, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_webkitCurrentFullScreenElement = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_webkitCurrentFullScreenElement');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['webkitCurrentFullScreenElement'];
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
    globalMy.console.log('[*]  调用了Document_get_webkitCurrentFullScreenElement, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_webkitFullscreenEnabled = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_webkitFullscreenEnabled');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['webkitFullscreenEnabled'];
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
    globalMy.console.log('[*]  调用了Document_get_webkitFullscreenEnabled, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_webkitFullscreenElement = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_webkitFullscreenElement');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['webkitFullscreenElement'];
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
    globalMy.console.log('[*]  调用了Document_get_webkitFullscreenElement, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_onwebkitfullscreenchange = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onwebkitfullscreenchange');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onwebkitfullscreenchange'];
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
    globalMy.console.log('[*]  调用了Document_get_onwebkitfullscreenchange, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onwebkitfullscreenchange = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onwebkitfullscreenchange, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onwebkitfullscreenchange'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onwebkitfullscreenchange'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onwebkitfullscreenchange' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onwebkitfullscreenerror = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onwebkitfullscreenerror');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onwebkitfullscreenerror'];
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
    globalMy.console.log('[*]  调用了Document_get_onwebkitfullscreenerror, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onwebkitfullscreenerror = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onwebkitfullscreenerror, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onwebkitfullscreenerror'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onwebkitfullscreenerror'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onwebkitfullscreenerror' + '  result => ', '' + result);
  }
};
globalMy.Document_get_rootElement = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_rootElement');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['rootElement'];
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
    globalMy.console.log('[*]  调用了Document_get_rootElement, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_pictureInPictureEnabled = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_pictureInPictureEnabled');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['pictureInPictureEnabled'];
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
    globalMy.console.log('[*]  调用了Document_get_pictureInPictureEnabled, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_pictureInPictureElement = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_pictureInPictureElement');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['pictureInPictureElement'];
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
    globalMy.console.log('[*]  调用了Document_get_pictureInPictureElement, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_onbeforexrselect = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onbeforexrselect');
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
    globalMy.console.log('[*]  调用了Document_get_onbeforexrselect, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onbeforexrselect = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onbeforexrselect, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onbeforexrselect' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onabort = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onabort');
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
    globalMy.console.log('[*]  调用了Document_get_onabort, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onabort = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onabort, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onabort' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onbeforeinput = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onbeforeinput');
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
    globalMy.console.log('[*]  调用了Document_get_onbeforeinput, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onbeforeinput = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onbeforeinput, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onbeforeinput' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onblur = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onblur');
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
    globalMy.console.log('[*]  调用了Document_get_onblur, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onblur = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onblur, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onblur' + '  result => ', '' + result);
  }
};
globalMy.Document_get_oncancel = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_oncancel');
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
    globalMy.console.log('[*]  调用了Document_get_oncancel, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_oncancel = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_oncancel, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_oncancel' + '  result => ', '' + result);
  }
};
globalMy.Document_get_oncanplay = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_oncanplay');
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
    globalMy.console.log('[*]  调用了Document_get_oncanplay, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_oncanplay = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_oncanplay, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_oncanplay' + '  result => ', '' + result);
  }
};
globalMy.Document_get_oncanplaythrough = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_oncanplaythrough');
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
    globalMy.console.log('[*]  调用了Document_get_oncanplaythrough, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_oncanplaythrough = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_oncanplaythrough, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_oncanplaythrough' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onchange = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onchange');
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
    globalMy.console.log('[*]  调用了Document_get_onchange, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onchange = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onchange, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onchange' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onclick = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onclick');
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
    globalMy.console.log('[*]  调用了Document_get_onclick, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onclick = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onclick, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onclick' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onclose = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onclose');
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
    globalMy.console.log('[*]  调用了Document_get_onclose, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onclose = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onclose, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onclose' + '  result => ', '' + result);
  }
};
globalMy.Document_get_oncontextlost = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_oncontextlost');
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
    globalMy.console.log('[*]  调用了Document_get_oncontextlost, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_oncontextlost = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_oncontextlost, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_oncontextlost' + '  result => ', '' + result);
  }
};
globalMy.Document_get_oncontextmenu = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_oncontextmenu');
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
    globalMy.console.log('[*]  调用了Document_get_oncontextmenu, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_oncontextmenu = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_oncontextmenu, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_oncontextmenu' + '  result => ', '' + result);
  }
};
globalMy.Document_get_oncontextrestored = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_oncontextrestored');
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
    globalMy.console.log('[*]  调用了Document_get_oncontextrestored, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_oncontextrestored = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_oncontextrestored, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_oncontextrestored' + '  result => ', '' + result);
  }
};
globalMy.Document_get_oncuechange = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_oncuechange');
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
    globalMy.console.log('[*]  调用了Document_get_oncuechange, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_oncuechange = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_oncuechange, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_oncuechange' + '  result => ', '' + result);
  }
};
globalMy.Document_get_ondblclick = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_ondblclick');
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
    globalMy.console.log('[*]  调用了Document_get_ondblclick, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_ondblclick = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_ondblclick, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_ondblclick' + '  result => ', '' + result);
  }
};
globalMy.Document_get_ondrag = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_ondrag');
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
    globalMy.console.log('[*]  调用了Document_get_ondrag, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_ondrag = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_ondrag, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_ondrag' + '  result => ', '' + result);
  }
};
globalMy.Document_get_ondragend = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_ondragend');
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
    globalMy.console.log('[*]  调用了Document_get_ondragend, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_ondragend = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_ondragend, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_ondragend' + '  result => ', '' + result);
  }
};
globalMy.Document_get_ondragenter = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_ondragenter');
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
    globalMy.console.log('[*]  调用了Document_get_ondragenter, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_ondragenter = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_ondragenter, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_ondragenter' + '  result => ', '' + result);
  }
};
globalMy.Document_get_ondragleave = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_ondragleave');
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
    globalMy.console.log('[*]  调用了Document_get_ondragleave, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_ondragleave = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_ondragleave, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_ondragleave' + '  result => ', '' + result);
  }
};
globalMy.Document_get_ondragover = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_ondragover');
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
    globalMy.console.log('[*]  调用了Document_get_ondragover, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_ondragover = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_ondragover, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_ondragover' + '  result => ', '' + result);
  }
};
globalMy.Document_get_ondragstart = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_ondragstart');
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
    globalMy.console.log('[*]  调用了Document_get_ondragstart, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_ondragstart = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_ondragstart, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_ondragstart' + '  result => ', '' + result);
  }
};
globalMy.Document_get_ondrop = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_ondrop');
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
    globalMy.console.log('[*]  调用了Document_get_ondrop, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_ondrop = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_ondrop, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_ondrop' + '  result => ', '' + result);
  }
};
globalMy.Document_get_ondurationchange = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_ondurationchange');
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
    globalMy.console.log('[*]  调用了Document_get_ondurationchange, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_ondurationchange = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_ondurationchange, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_ondurationchange' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onemptied = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onemptied');
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
    globalMy.console.log('[*]  调用了Document_get_onemptied, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onemptied = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onemptied, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onemptied' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onended = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onended');
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
    globalMy.console.log('[*]  调用了Document_get_onended, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onended = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onended, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onended' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onerror = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onerror');
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
    globalMy.console.log('[*]  调用了Document_get_onerror, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onerror = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onerror, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onerror' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onfocus = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onfocus');
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
    globalMy.console.log('[*]  调用了Document_get_onfocus, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onfocus = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onfocus, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onfocus' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onformdata = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onformdata');
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
    globalMy.console.log('[*]  调用了Document_get_onformdata, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onformdata = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onformdata, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onformdata' + '  result => ', '' + result);
  }
};
globalMy.Document_get_oninput = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_oninput');
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
    globalMy.console.log('[*]  调用了Document_get_oninput, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_oninput = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_oninput, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_oninput' + '  result => ', '' + result);
  }
};
globalMy.Document_get_oninvalid = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_oninvalid');
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
    globalMy.console.log('[*]  调用了Document_get_oninvalid, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_oninvalid = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_oninvalid, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_oninvalid' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onkeydown = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onkeydown');
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
    globalMy.console.log('[*]  调用了Document_get_onkeydown, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onkeydown = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onkeydown, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onkeydown' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onkeypress = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onkeypress');
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
    globalMy.console.log('[*]  调用了Document_get_onkeypress, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onkeypress = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onkeypress, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onkeypress' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onkeyup = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onkeyup');
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
    globalMy.console.log('[*]  调用了Document_get_onkeyup, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onkeyup = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onkeyup, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onkeyup' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onload = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onload');
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
    globalMy.console.log('[*]  调用了Document_get_onload, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onload = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onload, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onload' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onloadeddata = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onloadeddata');
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
    globalMy.console.log('[*]  调用了Document_get_onloadeddata, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onloadeddata = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onloadeddata, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onloadeddata' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onloadedmetadata = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onloadedmetadata');
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
    globalMy.console.log('[*]  调用了Document_get_onloadedmetadata, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onloadedmetadata = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onloadedmetadata, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onloadedmetadata' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onloadstart = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onloadstart');
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
    globalMy.console.log('[*]  调用了Document_get_onloadstart, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onloadstart = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onloadstart, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onloadstart' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onmousedown = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onmousedown');
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
    globalMy.console.log('[*]  调用了Document_get_onmousedown, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onmousedown = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onmousedown, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onmousedown' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onmouseenter = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onmouseenter');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onmouseenter'];
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
    globalMy.console.log('[*]  调用了Document_get_onmouseenter, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onmouseenter = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onmouseenter, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onmouseenter' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onmouseleave = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onmouseleave');
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
    globalMy.console.log('[*]  调用了Document_get_onmouseleave, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onmouseleave = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onmouseleave, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onmouseleave' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onmousemove = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onmousemove');
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
    globalMy.console.log('[*]  调用了Document_get_onmousemove, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onmousemove = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onmousemove, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onmousemove' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onmouseout = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onmouseout');
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
    globalMy.console.log('[*]  调用了Document_get_onmouseout, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onmouseout = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onmouseout, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onmouseout' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onmouseover = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onmouseover');
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
    globalMy.console.log('[*]  调用了Document_get_onmouseover, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onmouseover = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onmouseover, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onmouseover' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onmouseup = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onmouseup');
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
    globalMy.console.log('[*]  调用了Document_get_onmouseup, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onmouseup = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onmouseup, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onmouseup' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onmousewheel = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onmousewheel');
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
    globalMy.console.log('[*]  调用了Document_get_onmousewheel, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onmousewheel = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onmousewheel, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onmousewheel' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onpause = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onpause');
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
    globalMy.console.log('[*]  调用了Document_get_onpause, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onpause = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onpause, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onpause' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onplay = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onplay');
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
    globalMy.console.log('[*]  调用了Document_get_onplay, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onplay = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onplay, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onplay' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onplaying = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onplaying');
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
    globalMy.console.log('[*]  调用了Document_get_onplaying, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onplaying = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onplaying, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onplaying' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onprogress = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onprogress');
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
    globalMy.console.log('[*]  调用了Document_get_onprogress, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onprogress = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onprogress, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onprogress' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onratechange = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onratechange');
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
    globalMy.console.log('[*]  调用了Document_get_onratechange, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onratechange = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onratechange, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onratechange' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onreset = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onreset');
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
    globalMy.console.log('[*]  调用了Document_get_onreset, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onreset = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onreset, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onreset' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onresize = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onresize');
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
    globalMy.console.log('[*]  调用了Document_get_onresize, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onresize = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onresize, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onresize' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onscroll = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onscroll');
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
    globalMy.console.log('[*]  调用了Document_get_onscroll, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onscroll = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onscroll, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onscroll' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onsecuritypolicyviolation = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onsecuritypolicyviolation');
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
    globalMy.console.log('[*]  调用了Document_get_onsecuritypolicyviolation, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onsecuritypolicyviolation = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onsecuritypolicyviolation, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onsecuritypolicyviolation' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onseeked = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onseeked');
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
    globalMy.console.log('[*]  调用了Document_get_onseeked, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onseeked = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onseeked, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onseeked' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onseeking = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onseeking');
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
    globalMy.console.log('[*]  调用了Document_get_onseeking, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onseeking = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onseeking, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onseeking' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onselect = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onselect');
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
    globalMy.console.log('[*]  调用了Document_get_onselect, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onselect = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onselect, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onselect' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onslotchange = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onslotchange');
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
    globalMy.console.log('[*]  调用了Document_get_onslotchange, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onslotchange = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onslotchange, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onslotchange' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onstalled = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onstalled');
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
    globalMy.console.log('[*]  调用了Document_get_onstalled, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onstalled = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onstalled, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onstalled' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onsubmit = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onsubmit');
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
    globalMy.console.log('[*]  调用了Document_get_onsubmit, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onsubmit = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onsubmit, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onsubmit' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onsuspend = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onsuspend');
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
    globalMy.console.log('[*]  调用了Document_get_onsuspend, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onsuspend = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onsuspend, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onsuspend' + '  result => ', '' + result);
  }
};
globalMy.Document_get_ontimeupdate = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_ontimeupdate');
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
    globalMy.console.log('[*]  调用了Document_get_ontimeupdate, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_ontimeupdate = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_ontimeupdate, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_ontimeupdate' + '  result => ', '' + result);
  }
};
globalMy.Document_get_ontoggle = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_ontoggle');
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
    globalMy.console.log('[*]  调用了Document_get_ontoggle, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_ontoggle = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_ontoggle, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_ontoggle' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onvolumechange = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onvolumechange');
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
    globalMy.console.log('[*]  调用了Document_get_onvolumechange, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onvolumechange = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onvolumechange, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onvolumechange' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onwaiting = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onwaiting');
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
    globalMy.console.log('[*]  调用了Document_get_onwaiting, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onwaiting = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onwaiting, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onwaiting' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onwebkitanimationend = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onwebkitanimationend');
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
    globalMy.console.log('[*]  调用了Document_get_onwebkitanimationend, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onwebkitanimationend = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onwebkitanimationend, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onwebkitanimationend' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onwebkitanimationiteration = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onwebkitanimationiteration');
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
    globalMy.console.log('[*]  调用了Document_get_onwebkitanimationiteration, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onwebkitanimationiteration = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onwebkitanimationiteration, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onwebkitanimationiteration' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onwebkitanimationstart = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onwebkitanimationstart');
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
    globalMy.console.log('[*]  调用了Document_get_onwebkitanimationstart, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onwebkitanimationstart = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onwebkitanimationstart, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onwebkitanimationstart' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onwebkittransitionend = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onwebkittransitionend');
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
    globalMy.console.log('[*]  调用了Document_get_onwebkittransitionend, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onwebkittransitionend = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onwebkittransitionend, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onwebkittransitionend' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onwheel = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onwheel');
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
    globalMy.console.log('[*]  调用了Document_get_onwheel, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onwheel = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onwheel, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onwheel' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onauxclick = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onauxclick');
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
    globalMy.console.log('[*]  调用了Document_get_onauxclick, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onauxclick = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onauxclick, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onauxclick' + '  result => ', '' + result);
  }
};
globalMy.Document_get_ongotpointercapture = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_ongotpointercapture');
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
    globalMy.console.log('[*]  调用了Document_get_ongotpointercapture, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_ongotpointercapture = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_ongotpointercapture, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_ongotpointercapture' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onlostpointercapture = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onlostpointercapture');
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
    globalMy.console.log('[*]  调用了Document_get_onlostpointercapture, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onlostpointercapture = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onlostpointercapture, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onlostpointercapture' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onpointerdown = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onpointerdown');
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
    globalMy.console.log('[*]  调用了Document_get_onpointerdown, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onpointerdown = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onpointerdown, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onpointerdown' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onpointermove = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onpointermove');
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
    globalMy.console.log('[*]  调用了Document_get_onpointermove, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onpointermove = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onpointermove, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onpointermove' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onpointerrawupdate = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onpointerrawupdate');
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
    globalMy.console.log('[*]  调用了Document_get_onpointerrawupdate, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onpointerrawupdate = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onpointerrawupdate, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onpointerrawupdate' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onpointerup = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onpointerup');
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
    globalMy.console.log('[*]  调用了Document_get_onpointerup, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onpointerup = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onpointerup, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onpointerup' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onpointercancel = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onpointercancel');
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
    globalMy.console.log('[*]  调用了Document_get_onpointercancel, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onpointercancel = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onpointercancel, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onpointercancel' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onpointerover = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onpointerover');
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
    globalMy.console.log('[*]  调用了Document_get_onpointerover, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onpointerover = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onpointerover, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onpointerover' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onpointerout = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onpointerout');
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
    globalMy.console.log('[*]  调用了Document_get_onpointerout, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onpointerout = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onpointerout, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onpointerout' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onpointerenter = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onpointerenter');
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
    globalMy.console.log('[*]  调用了Document_get_onpointerenter, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onpointerenter = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onpointerenter, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onpointerenter' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onpointerleave = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onpointerleave');
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
    globalMy.console.log('[*]  调用了Document_get_onpointerleave, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onpointerleave = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onpointerleave, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onpointerleave' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onselectstart = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onselectstart');
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
    globalMy.console.log('[*]  调用了Document_get_onselectstart, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onselectstart = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onselectstart, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onselectstart' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onselectionchange = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onselectionchange');
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
    globalMy.console.log('[*]  调用了Document_get_onselectionchange, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onselectionchange = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onselectionchange, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onselectionchange' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onanimationend = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onanimationend');
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
    globalMy.console.log('[*]  调用了Document_get_onanimationend, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onanimationend = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onanimationend, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onanimationend' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onanimationiteration = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onanimationiteration');
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
    globalMy.console.log('[*]  调用了Document_get_onanimationiteration, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onanimationiteration = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onanimationiteration, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onanimationiteration' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onanimationstart = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onanimationstart');
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
    globalMy.console.log('[*]  调用了Document_get_onanimationstart, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onanimationstart = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onanimationstart, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onanimationstart' + '  result => ', '' + result);
  }
};
globalMy.Document_get_ontransitionrun = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_ontransitionrun');
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
    globalMy.console.log('[*]  调用了Document_get_ontransitionrun, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_ontransitionrun = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_ontransitionrun, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_ontransitionrun' + '  result => ', '' + result);
  }
};
globalMy.Document_get_ontransitionstart = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_ontransitionstart');
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
    globalMy.console.log('[*]  调用了Document_get_ontransitionstart, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_ontransitionstart = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_ontransitionstart, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_ontransitionstart' + '  result => ', '' + result);
  }
};
globalMy.Document_get_ontransitionend = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_ontransitionend');
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
    globalMy.console.log('[*]  调用了Document_get_ontransitionend, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_ontransitionend = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_ontransitionend, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_ontransitionend' + '  result => ', '' + result);
  }
};
globalMy.Document_get_ontransitioncancel = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_ontransitioncancel');
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
    globalMy.console.log('[*]  调用了Document_get_ontransitioncancel, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_ontransitioncancel = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_ontransitioncancel, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_ontransitioncancel' + '  result => ', '' + result);
  }
};
globalMy.Document_get_oncopy = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_oncopy');
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
    globalMy.console.log('[*]  调用了Document_get_oncopy, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_oncopy = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_oncopy, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_oncopy' + '  result => ', '' + result);
  }
};
globalMy.Document_get_oncut = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_oncut');
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
    globalMy.console.log('[*]  调用了Document_get_oncut, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_oncut = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_oncut, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_oncut' + '  result => ', '' + result);
  }
};
globalMy.Document_get_onpaste = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onpaste');
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
    globalMy.console.log('[*]  调用了Document_get_onpaste, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onpaste = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onpaste, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onpaste' + '  result => ', '' + result);
  }
};
globalMy.Document_get_children = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_children');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['children'];
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
    globalMy.console.log('[*]  调用了Document_get_children, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_firstElementChild = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_firstElementChild');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['firstElementChild'];
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
    globalMy.console.log('[*]  调用了Document_get_firstElementChild, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_lastElementChild = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_lastElementChild');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['lastElementChild'];
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
    globalMy.console.log('[*]  调用了Document_get_lastElementChild, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_childElementCount = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_childElementCount');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['childElementCount'];
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
    globalMy.console.log('[*]  调用了Document_get_childElementCount, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_activeElement = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_activeElement');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['activeElement'];
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
    globalMy.console.log('[*]  调用了Document_get_activeElement, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_styleSheets = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_styleSheets');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['styleSheets'];
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
    globalMy.console.log('[*]  调用了Document_get_styleSheets, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_pointerLockElement = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_pointerLockElement');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['pointerLockElement'];
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
    globalMy.console.log('[*]  调用了Document_get_pointerLockElement, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_fullscreenElement = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_fullscreenElement');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['fullscreenElement'];
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
    globalMy.console.log('[*]  调用了Document_get_fullscreenElement, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_fullscreenElement = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_fullscreenElement, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['fullscreenElement'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['fullscreenElement'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_fullscreenElement' + '  result => ', '' + result);
  }
};
globalMy.Document_get_adoptedStyleSheets = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_adoptedStyleSheets');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['adoptedStyleSheets'];
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
    globalMy.console.log('[*]  调用了Document_get_adoptedStyleSheets, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_adoptedStyleSheets = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_adoptedStyleSheets, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['adoptedStyleSheets'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['adoptedStyleSheets'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_adoptedStyleSheets' + '  result => ', '' + result);
  }
};
globalMy.Document_get_fonts = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_fonts');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['fonts'];
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
    globalMy.console.log('[*]  调用了Document_get_fonts, result => ', '' + result);
  }
  return result;
};
globalMy.Document_adoptNode = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_adoptNode, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.adoptNode.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_adoptNode ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_append = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_append, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.append.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_append ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_captureEvents = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_captureEvents, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.captureEvents.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_captureEvents ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_caretRangeFromPoint = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_caretRangeFromPoint, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.caretRangeFromPoint.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_caretRangeFromPoint ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_clear = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_clear, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.clear.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_clear ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_close = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_close, arguments => ', arguments);
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
    globalMy.console.log('[*]  调用了Document_close ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_createAttribute = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_createAttribute, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.createAttribute.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_createAttribute ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_createAttributeNS = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_createAttributeNS, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.createAttributeNS.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_createAttributeNS ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_createCDATASection = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_createCDATASection, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.createCDATASection.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_createCDATASection ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_createComment = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_createComment, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.createComment.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_createComment ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_createDocumentFragment = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_createDocumentFragment, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.createDocumentFragment.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_createDocumentFragment ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_createElement = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_createElement, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.createElement.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_createElement ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_createElementNS = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_createElementNS, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.createElementNS.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_createElementNS ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_createEvent = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_createEvent, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.createEvent.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_createEvent ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_createExpression = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_createExpression, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.createExpression.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_createExpression ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_createNSResolver = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_createNSResolver, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.createNSResolver.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_createNSResolver ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_createNodeIterator = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_createNodeIterator, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.createNodeIterator.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_createNodeIterator ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_createProcessingInstruction = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_createProcessingInstruction, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.createProcessingInstruction.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_createProcessingInstruction ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_createRange = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_createRange, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.createRange.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_createRange ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_createTextNode = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_createTextNode, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.createTextNode.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_createTextNode ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_createTreeWalker = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_createTreeWalker, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.createTreeWalker.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_createTreeWalker ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_elementFromPoint = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_elementFromPoint, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.elementFromPoint.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_elementFromPoint ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_elementsFromPoint = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_elementsFromPoint, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.elementsFromPoint.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_elementsFromPoint ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_evaluate = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_evaluate, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.evaluate.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_evaluate ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_execCommand = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_execCommand, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.execCommand.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_execCommand ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_exitFullscreen = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_exitFullscreen, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.exitFullscreen.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_exitFullscreen ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_exitPictureInPicture = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_exitPictureInPicture, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.exitPictureInPicture.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_exitPictureInPicture ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_exitPointerLock = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_exitPointerLock, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.exitPointerLock.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_exitPointerLock ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_getElementById = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_getElementById, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.getElementById.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_getElementById ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_getElementsByClassName = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_getElementsByClassName, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.getElementsByClassName.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_getElementsByClassName ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_getElementsByName = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_getElementsByName, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.getElementsByName.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_getElementsByName ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_getElementsByTagName = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_getElementsByTagName, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.getElementsByTagName.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_getElementsByTagName ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_getElementsByTagNameNS = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_getElementsByTagNameNS, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.getElementsByTagNameNS.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_getElementsByTagNameNS ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_getSelection = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_getSelection, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.getSelection.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_getSelection ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_hasFocus = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_hasFocus, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.hasFocus.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_hasFocus ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_importNode = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_importNode, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.importNode.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_importNode ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_open = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_open, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.open.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_open ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_prepend = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_prepend, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.prepend.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_prepend ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_queryCommandEnabled = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_queryCommandEnabled, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.queryCommandEnabled.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_queryCommandEnabled ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_queryCommandIndeterm = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_queryCommandIndeterm, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.queryCommandIndeterm.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_queryCommandIndeterm ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_queryCommandState = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_queryCommandState, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.queryCommandState.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_queryCommandState ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_queryCommandSupported = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_queryCommandSupported, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.queryCommandSupported.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_queryCommandSupported ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_queryCommandValue = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_queryCommandValue, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.queryCommandValue.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_queryCommandValue ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_querySelector = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_querySelector, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.querySelector.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_querySelector ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_querySelectorAll = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_querySelectorAll, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.querySelectorAll.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_querySelectorAll ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_releaseEvents = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_releaseEvents, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.releaseEvents.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_releaseEvents ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_replaceChildren = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_replaceChildren, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.replaceChildren.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_replaceChildren ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_webkitCancelFullScreen = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_webkitCancelFullScreen, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.webkitCancelFullScreen.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_webkitCancelFullScreen ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_webkitExitFullscreen = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_webkitExitFullscreen, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.webkitExitFullscreen.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_webkitExitFullscreen ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_write = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_write, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.write.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_write ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_writeln = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_writeln, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.writeln.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_writeln ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_prerendering = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_prerendering');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['prerendering'];
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
    globalMy.console.log('[*]  调用了Document_get_prerendering, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_onprerenderingchange = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onprerenderingchange');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onprerenderingchange'];
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
    globalMy.console.log('[*]  调用了Document_get_onprerenderingchange, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onprerenderingchange = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onprerenderingchange, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onprerenderingchange'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onprerenderingchange'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onprerenderingchange' + '  result => ', '' + result);
  }
};
globalMy.Document_get_fragmentDirective = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_fragmentDirective');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['fragmentDirective'];
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
    globalMy.console.log('[*]  调用了Document_get_fragmentDirective, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_onbeforematch = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_onbeforematch');
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
    globalMy.console.log('[*]  调用了Document_get_onbeforematch, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_onbeforematch = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_onbeforematch, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_onbeforematch' + '  result => ', '' + result);
  }
};
globalMy.Document_get_timeline = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_timeline');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['timeline'];
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
    globalMy.console.log('[*]  调用了Document_get_timeline, result => ', '' + result);
  }
  return result;
};
globalMy.Document_get_oncontentvisibilityautostatechange = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_get_oncontentvisibilityautostatechange');
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
    globalMy.console.log('[*]  调用了Document_get_oncontentvisibilityautostatechange, result => ', '' + result);
  }
  return result;
};
globalMy.Document_set_oncontentvisibilityautostatechange = function (val) {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_set_oncontentvisibilityautostatechange, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Document_set_oncontentvisibilityautostatechange' + '  result => ', '' + result);
  }
};
globalMy.Document_getAnimations = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_getAnimations, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.getAnimations.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_getAnimations ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_hasStorageAccess = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_hasStorageAccess, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.hasStorageAccess.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_hasStorageAccess ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Document_requestStorageAccess = function () {
  if (!(this instanceof Document)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Document_requestStorageAccess, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.requestStorageAccess.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Document_requestStorageAccess ' + '  result => ', '' + result);
  }
  return result;
};