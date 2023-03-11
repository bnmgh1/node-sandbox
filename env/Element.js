globalMy.Element_get_namespaceURI = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_namespaceURI');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['namespaceURI'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_namespaceURI, result => ', '' + result);
  }
  return result;
};
globalMy.Element_get_prefix = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_prefix');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['prefix'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_prefix, result => ', '' + result);
  }
  return result;
};
globalMy.Element_get_localName = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_localName');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['localName'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_localName, result => ', '' + result);
  }
  return result;
};
globalMy.Element_get_tagName = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_tagName');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['tagName'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  result = result.toUpperCase();
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_tagName, result => ', '' + result);
  }
  return result;
};
globalMy.Element_get_id = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_id');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['id'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_id, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_id = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_id, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['id'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['id'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_id' + '  result => ', '' + result);
  }
};
globalMy.Element_get_className = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_className');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['className'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_className, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_className = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_className, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['className'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['className'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_className' + '  result => ', '' + result);
  }
};
globalMy.Element_get_classList = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_classList');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['classList'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_classList, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_classList = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_classList, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['classList'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['classList'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_classList' + '  result => ', '' + result);
  }
};
globalMy.Element_get_slot = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_slot');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['slot'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_slot, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_slot = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_slot, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['slot'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['slot'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_slot' + '  result => ', '' + result);
  }
};
globalMy.Element_get_attributes = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_attributes');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['attributes'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_attributes, result => ', '' + result);
  }
  return result;
};
globalMy.Element_get_shadowRoot = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_shadowRoot');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['shadowRoot'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_shadowRoot, result => ', '' + result);
  }
  return result;
};
globalMy.Element_get_part = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_part');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['part'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_part, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_part = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_part, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['part'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['part'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_part' + '  result => ', '' + result);
  }
};
globalMy.Element_get_assignedSlot = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_assignedSlot');
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
    globalMy.console.log('[*]  调用了Element_get_assignedSlot, result => ', '' + result);
  }
  return result;
};
globalMy.Element_get_innerHTML = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_innerHTML');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['innerHTML'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_innerHTML, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_innerHTML = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_innerHTML, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['innerHTML'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['innerHTML'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_innerHTML' + '  result => ', '' + result);
  }
};
globalMy.Element_get_outerHTML = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_outerHTML');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['outerHTML'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_outerHTML, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_outerHTML = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_outerHTML, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['outerHTML'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['outerHTML'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_outerHTML' + '  result => ', '' + result);
  }
};
globalMy.Element_get_scrollTop = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_scrollTop');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['scrollTop'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_scrollTop, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_scrollTop = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_scrollTop, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['scrollTop'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['scrollTop'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_scrollTop' + '  result => ', '' + result);
  }
};
globalMy.Element_get_scrollLeft = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_scrollLeft');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['scrollLeft'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_scrollLeft, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_scrollLeft = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_scrollLeft, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['scrollLeft'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['scrollLeft'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_scrollLeft' + '  result => ', '' + result);
  }
};
globalMy.Element_get_scrollWidth = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_scrollWidth');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['scrollWidth'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_scrollWidth, result => ', '' + result);
  }
  return result;
};
globalMy.Element_get_scrollHeight = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_scrollHeight');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['scrollHeight'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_scrollHeight, result => ', '' + result);
  }
  return result;
};
globalMy.Element_get_clientTop = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_clientTop');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['clientTop'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_clientTop, result => ', '' + result);
  }
  return result;
};
globalMy.Element_get_clientLeft = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_clientLeft');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['clientLeft'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_clientLeft, result => ', '' + result);
  }
  return result;
};
globalMy.Element_get_clientWidth = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_clientWidth');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['clientWidth'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_clientWidth, result => ', '' + result);
  }
  return result;
};
globalMy.Element_get_clientHeight = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_clientHeight');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['clientHeight'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_clientHeight, result => ', '' + result);
  }
  return result;
};
globalMy.Element_get_onbeforecopy = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_onbeforecopy');
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
    globalMy.console.log('[*]  调用了Element_get_onbeforecopy, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_onbeforecopy = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_onbeforecopy, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Element_set_onbeforecopy' + '  result => ', '' + result);
  }
};
globalMy.Element_get_onbeforecut = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_onbeforecut');
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
    globalMy.console.log('[*]  调用了Element_get_onbeforecut, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_onbeforecut = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_onbeforecut, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Element_set_onbeforecut' + '  result => ', '' + result);
  }
};
globalMy.Element_get_onbeforepaste = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_onbeforepaste');
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
    globalMy.console.log('[*]  调用了Element_get_onbeforepaste, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_onbeforepaste = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_onbeforepaste, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Element_set_onbeforepaste' + '  result => ', '' + result);
  }
};
globalMy.Element_get_onsearch = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_onsearch');
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
    globalMy.console.log('[*]  调用了Element_get_onsearch, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_onsearch = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_onsearch, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Element_set_onsearch' + '  result => ', '' + result);
  }
};
globalMy.Element_get_elementTiming = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_elementTiming');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['elementTiming'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_elementTiming, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_elementTiming = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_elementTiming, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['elementTiming'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['elementTiming'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_elementTiming' + '  result => ', '' + result);
  }
};
globalMy.Element_get_onfullscreenchange = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_onfullscreenchange');
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
    globalMy.console.log('[*]  调用了Element_get_onfullscreenchange, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_onfullscreenchange = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_onfullscreenchange, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Element_set_onfullscreenchange' + '  result => ', '' + result);
  }
};
globalMy.Element_get_onfullscreenerror = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_onfullscreenerror');
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
    globalMy.console.log('[*]  调用了Element_get_onfullscreenerror, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_onfullscreenerror = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_onfullscreenerror, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Element_set_onfullscreenerror' + '  result => ', '' + result);
  }
};
globalMy.Element_get_onwebkitfullscreenchange = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_onwebkitfullscreenchange');
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
    globalMy.console.log('[*]  调用了Element_get_onwebkitfullscreenchange, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_onwebkitfullscreenchange = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_onwebkitfullscreenchange, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Element_set_onwebkitfullscreenchange' + '  result => ', '' + result);
  }
};
globalMy.Element_get_onwebkitfullscreenerror = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_onwebkitfullscreenerror');
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
    globalMy.console.log('[*]  调用了Element_get_onwebkitfullscreenerror, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_onwebkitfullscreenerror = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_onwebkitfullscreenerror, 传参val => ' + val);
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
    globalMy.console.log('[*]  调用了Element_set_onwebkitfullscreenerror' + '  result => ', '' + result);
  }
};
globalMy.Element_get_role = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_role');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['role'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_role, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_role = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_role, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['role'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['role'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_role' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaAtomic = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaAtomic');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaAtomic'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaAtomic, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaAtomic = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaAtomic, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaAtomic'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaAtomic'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaAtomic' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaAutoComplete = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaAutoComplete');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaAutoComplete'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaAutoComplete, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaAutoComplete = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaAutoComplete, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaAutoComplete'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaAutoComplete'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaAutoComplete' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaBusy = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaBusy');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaBusy'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaBusy, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaBusy = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaBusy, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaBusy'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaBusy'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaBusy' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaBrailleLabel = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaBrailleLabel');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaBrailleLabel'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaBrailleLabel, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaBrailleLabel = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaBrailleLabel, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaBrailleLabel'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaBrailleLabel'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaBrailleLabel' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaBrailleRoleDescription = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaBrailleRoleDescription');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaBrailleRoleDescription'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaBrailleRoleDescription, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaBrailleRoleDescription = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaBrailleRoleDescription, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaBrailleRoleDescription'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaBrailleRoleDescription'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaBrailleRoleDescription' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaChecked = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaChecked');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaChecked'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaChecked, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaChecked = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaChecked, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaChecked'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaChecked'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaChecked' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaColCount = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaColCount');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaColCount'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaColCount, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaColCount = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaColCount, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaColCount'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaColCount'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaColCount' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaColIndex = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaColIndex');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaColIndex'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaColIndex, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaColIndex = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaColIndex, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaColIndex'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaColIndex'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaColIndex' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaColSpan = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaColSpan');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaColSpan'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaColSpan, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaColSpan = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaColSpan, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaColSpan'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaColSpan'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaColSpan' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaCurrent = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaCurrent');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaCurrent'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaCurrent, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaCurrent = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaCurrent, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaCurrent'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaCurrent'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaCurrent' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaDescription = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaDescription');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaDescription'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaDescription, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaDescription = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaDescription, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaDescription'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaDescription'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaDescription' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaDisabled = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaDisabled');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaDisabled'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaDisabled, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaDisabled = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaDisabled, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaDisabled'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaDisabled'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaDisabled' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaExpanded = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaExpanded');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaExpanded'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaExpanded, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaExpanded = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaExpanded, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaExpanded'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaExpanded'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaExpanded' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaHasPopup = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaHasPopup');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaHasPopup'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaHasPopup, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaHasPopup = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaHasPopup, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaHasPopup'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaHasPopup'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaHasPopup' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaHidden = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaHidden');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaHidden'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaHidden, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaHidden = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaHidden, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaHidden'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaHidden'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaHidden' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaInvalid = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaInvalid');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaInvalid'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaInvalid, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaInvalid = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaInvalid, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaInvalid'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaInvalid'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaInvalid' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaKeyShortcuts = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaKeyShortcuts');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaKeyShortcuts'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaKeyShortcuts, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaKeyShortcuts = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaKeyShortcuts, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaKeyShortcuts'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaKeyShortcuts'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaKeyShortcuts' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaLabel = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaLabel');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaLabel'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaLabel, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaLabel = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaLabel, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaLabel'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaLabel'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaLabel' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaLevel = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaLevel');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaLevel'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaLevel, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaLevel = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaLevel, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaLevel'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaLevel'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaLevel' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaLive = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaLive');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaLive'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaLive, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaLive = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaLive, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaLive'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaLive'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaLive' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaModal = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaModal');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaModal'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaModal, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaModal = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaModal, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaModal'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaModal'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaModal' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaMultiLine = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaMultiLine');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaMultiLine'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaMultiLine, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaMultiLine = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaMultiLine, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaMultiLine'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaMultiLine'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaMultiLine' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaMultiSelectable = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaMultiSelectable');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaMultiSelectable'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaMultiSelectable, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaMultiSelectable = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaMultiSelectable, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaMultiSelectable'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaMultiSelectable'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaMultiSelectable' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaOrientation = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaOrientation');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaOrientation'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaOrientation, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaOrientation = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaOrientation, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaOrientation'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaOrientation'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaOrientation' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaPlaceholder = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaPlaceholder');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaPlaceholder'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaPlaceholder, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaPlaceholder = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaPlaceholder, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaPlaceholder'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaPlaceholder'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaPlaceholder' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaPosInSet = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaPosInSet');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaPosInSet'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaPosInSet, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaPosInSet = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaPosInSet, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaPosInSet'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaPosInSet'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaPosInSet' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaPressed = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaPressed');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaPressed'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaPressed, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaPressed = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaPressed, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaPressed'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaPressed'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaPressed' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaReadOnly = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaReadOnly');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaReadOnly'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaReadOnly, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaReadOnly = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaReadOnly, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaReadOnly'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaReadOnly'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaReadOnly' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaRelevant = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaRelevant');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaRelevant'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaRelevant, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaRelevant = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaRelevant, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaRelevant'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaRelevant'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaRelevant' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaRequired = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaRequired');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaRequired'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaRequired, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaRequired = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaRequired, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaRequired'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaRequired'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaRequired' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaRoleDescription = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaRoleDescription');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaRoleDescription'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaRoleDescription, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaRoleDescription = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaRoleDescription, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaRoleDescription'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaRoleDescription'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaRoleDescription' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaRowCount = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaRowCount');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaRowCount'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaRowCount, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaRowCount = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaRowCount, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaRowCount'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaRowCount'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaRowCount' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaRowIndex = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaRowIndex');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaRowIndex'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaRowIndex, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaRowIndex = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaRowIndex, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaRowIndex'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaRowIndex'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaRowIndex' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaRowSpan = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaRowSpan');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaRowSpan'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaRowSpan, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaRowSpan = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaRowSpan, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaRowSpan'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaRowSpan'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaRowSpan' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaSelected = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaSelected');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaSelected'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaSelected, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaSelected = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaSelected, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaSelected'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaSelected'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaSelected' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaSetSize = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaSetSize');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaSetSize'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaSetSize, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaSetSize = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaSetSize, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaSetSize'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaSetSize'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaSetSize' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaSort = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaSort');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaSort'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaSort, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaSort = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaSort, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaSort'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaSort'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaSort' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaValueMax = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaValueMax');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaValueMax'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaValueMax, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaValueMax = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaValueMax, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaValueMax'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaValueMax'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaValueMax' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaValueMin = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaValueMin');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaValueMin'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaValueMin, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaValueMin = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaValueMin, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaValueMin'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaValueMin'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaValueMin' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaValueNow = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaValueNow');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaValueNow'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaValueNow, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaValueNow = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaValueNow, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaValueNow'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaValueNow'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaValueNow' + '  result => ', '' + result);
  }
};
globalMy.Element_get_ariaValueText = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaValueText');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ariaValueText'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_ariaValueText, result => ', '' + result);
  }
  return result;
};
globalMy.Element_set_ariaValueText = function (val) {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaValueText, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['ariaValueText'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['ariaValueText'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_set_ariaValueText' + '  result => ', '' + result);
  }
};
globalMy.Element_get_children = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_children');
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
    globalMy.console.log('[*]  调用了Element_get_children, result => ', '' + result);
  }
  return result;
};
globalMy.Element_get_firstElementChild = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_firstElementChild');
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
    globalMy.console.log('[*]  调用了Element_get_firstElementChild, result => ', '' + result);
  }
  return result;
};
globalMy.Element_get_lastElementChild = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_lastElementChild');
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
    globalMy.console.log('[*]  调用了Element_get_lastElementChild, result => ', '' + result);
  }
  return result;
};
globalMy.Element_get_childElementCount = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_childElementCount');
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
    globalMy.console.log('[*]  调用了Element_get_childElementCount, result => ', '' + result);
  }
  return result;
};
globalMy.Element_get_previousElementSibling = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_previousElementSibling');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['previousElementSibling'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_previousElementSibling, result => ', '' + result);
  }
  return result;
};
globalMy.Element_get_nextElementSibling = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_nextElementSibling');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['nextElementSibling'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_get_nextElementSibling, result => ', '' + result);
  }
  return result;
};
globalMy.Element_after = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_after, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.after.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_after ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_animate = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_animate, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.animate.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_animate ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_append = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_append, arguments => ', arguments);
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
    globalMy.console.log('[*]  调用了Element_append ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_attachShadow = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_attachShadow, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.attachShadow.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_attachShadow ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_before = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_before, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.before.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_before ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_closest = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_closest, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.closest.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_closest ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_computedStyleMap = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_computedStyleMap, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.computedStyleMap.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_computedStyleMap ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_getAttribute = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_getAttribute, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.getAttribute.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_getAttribute ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_getAttributeNS = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_getAttributeNS, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.getAttributeNS.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_getAttributeNS ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_getAttributeNames = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_getAttributeNames, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.getAttributeNames.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_getAttributeNames ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_getAttributeNode = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_getAttributeNode, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.getAttributeNode.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_getAttributeNode ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_getAttributeNodeNS = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_getAttributeNodeNS, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.getAttributeNodeNS.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_getAttributeNodeNS ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_getBoundingClientRect = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_getBoundingClientRect, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.getBoundingClientRect.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_getBoundingClientRect ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_getClientRects = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_getClientRects, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.getClientRects.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_getClientRects ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_getElementsByClassName = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_getElementsByClassName, arguments => ', arguments);
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
    globalMy.console.log('[*]  调用了Element_getElementsByClassName ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_getElementsByTagName = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_getElementsByTagName, arguments => ', arguments);
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
    globalMy.console.log('[*]  调用了Element_getElementsByTagName ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_getElementsByTagNameNS = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_getElementsByTagNameNS, arguments => ', arguments);
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
    globalMy.console.log('[*]  调用了Element_getElementsByTagNameNS ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_getInnerHTML = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_getInnerHTML, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.getInnerHTML.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_getInnerHTML ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_hasAttribute = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_hasAttribute, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.hasAttribute.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_hasAttribute ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_hasAttributeNS = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_hasAttributeNS, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.hasAttributeNS.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_hasAttributeNS ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_hasAttributes = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_hasAttributes, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.hasAttributes.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_hasAttributes ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_hasPointerCapture = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_hasPointerCapture, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.hasPointerCapture.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_hasPointerCapture ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_insertAdjacentElement = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_insertAdjacentElement, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.insertAdjacentElement.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_insertAdjacentElement ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_insertAdjacentHTML = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_insertAdjacentHTML, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.insertAdjacentHTML.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_insertAdjacentHTML ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_insertAdjacentText = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_insertAdjacentText, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.insertAdjacentText.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_insertAdjacentText ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_matches = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_matches, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.matches.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_matches ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_prepend = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_prepend, arguments => ', arguments);
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
    globalMy.console.log('[*]  调用了Element_prepend ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_querySelector = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_querySelector, arguments => ', arguments);
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
    globalMy.console.log('[*]  调用了Element_querySelector ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_querySelectorAll = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_querySelectorAll, arguments => ', arguments);
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
    globalMy.console.log('[*]  调用了Element_querySelectorAll ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_releasePointerCapture = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_releasePointerCapture, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.releasePointerCapture.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_releasePointerCapture ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_remove = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_remove, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.remove.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_remove ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_removeAttribute = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_removeAttribute, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.removeAttribute.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_removeAttribute ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_removeAttributeNS = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_removeAttributeNS, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.removeAttributeNS.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_removeAttributeNS ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_removeAttributeNode = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_removeAttributeNode, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.removeAttributeNode.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_removeAttributeNode ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_replaceChildren = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_replaceChildren, arguments => ', arguments);
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
    globalMy.console.log('[*]  调用了Element_replaceChildren ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_replaceWith = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_replaceWith, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.replaceWith.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_replaceWith ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_requestFullscreen = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_requestFullscreen, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.requestFullscreen.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_requestFullscreen ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_requestPointerLock = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_requestPointerLock, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.requestPointerLock.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_requestPointerLock ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_scroll = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_scroll, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.scroll.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_scroll ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_scrollBy = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_scrollBy, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.scrollBy.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_scrollBy ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_scrollIntoView = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_scrollIntoView, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.scrollIntoView.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_scrollIntoView ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_scrollIntoViewIfNeeded = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_scrollIntoViewIfNeeded, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.scrollIntoViewIfNeeded.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_scrollIntoViewIfNeeded ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_scrollTo = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_scrollTo, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.scrollTo.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_scrollTo ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_setAttribute = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_setAttribute, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.setAttribute.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_setAttribute ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_setAttributeNS = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_setAttributeNS, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.setAttributeNS.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_setAttributeNS ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_setAttributeNode = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_setAttributeNode, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.setAttributeNode.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_setAttributeNode ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_setAttributeNodeNS = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_setAttributeNodeNS, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.setAttributeNodeNS.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_setAttributeNodeNS ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_setPointerCapture = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_setPointerCapture, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.setPointerCapture.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_setPointerCapture ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_toggleAttribute = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_toggleAttribute, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.toggleAttribute.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_toggleAttribute ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_webkitMatchesSelector = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_webkitMatchesSelector, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.webkitMatchesSelector.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_webkitMatchesSelector ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_webkitRequestFullScreen = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_webkitRequestFullScreen, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.webkitRequestFullScreen.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_webkitRequestFullScreen ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_webkitRequestFullscreen = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_webkitRequestFullscreen, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.webkitRequestFullscreen.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_webkitRequestFullscreen ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_checkVisibility = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_checkVisibility, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.checkVisibility.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_checkVisibility ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_getAnimations = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_getAnimations, arguments => ', arguments);
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
    globalMy.console.log('[*]  调用了Element_getAnimations ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.Element_setHTML = function () {
  if (!(this instanceof Element)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Element_setHTML, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.setHTML.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了Element_setHTML ' + '  result => ', '' + result);
  }
  return result;
};
// Event
// Event