globalMy.HTMLMapElement_get_name = function () {
  if (!(this instanceof HTMLMapElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMapElement_get_name');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['name'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMapElement_get_name, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMapElement_set_name = function (val) {
  if (!(this instanceof HTMLMapElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMapElement_set_name, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['name'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['name'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMapElement_set_name' + '  result => ', '' + result);
  }
};
globalMy.HTMLMapElement_get_areas = function () {
  if (!(this instanceof HTMLMapElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMapElement_get_areas');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['areas'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMapElement_get_areas, result => ', '' + result);
  }
  return result;
};