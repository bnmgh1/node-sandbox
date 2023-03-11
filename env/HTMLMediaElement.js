globalMy.HTMLMediaElement_get_error = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_error');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['error'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_error, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_get_src = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_src');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['src'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_src, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_set_src = function (val) {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_src, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['src'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['src'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_src' + '  result => ', '' + result);
  }
};
globalMy.HTMLMediaElement_get_currentSrc = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_currentSrc');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['currentSrc'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_currentSrc, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_get_crossOrigin = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_crossOrigin');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['crossOrigin'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_crossOrigin, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_set_crossOrigin = function (val) {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_crossOrigin, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['crossOrigin'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['crossOrigin'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_crossOrigin' + '  result => ', '' + result);
  }
};
globalMy.HTMLMediaElement_get_networkState = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_networkState');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['networkState'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_networkState, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_get_preload = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_preload');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['preload'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_preload, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_set_preload = function (val) {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_preload, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['preload'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['preload'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_preload' + '  result => ', '' + result);
  }
};
globalMy.HTMLMediaElement_get_buffered = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_buffered');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['buffered'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_buffered, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_get_readyState = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_readyState');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['readyState'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_readyState, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_get_seeking = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_seeking');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['seeking'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_seeking, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_get_currentTime = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_currentTime');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['currentTime'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_currentTime, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_set_currentTime = function (val) {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_currentTime, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['currentTime'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['currentTime'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_currentTime' + '  result => ', '' + result);
  }
};
globalMy.HTMLMediaElement_get_duration = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_duration');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['duration'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_duration, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_get_paused = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_paused');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['paused'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_paused, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_get_defaultPlaybackRate = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_defaultPlaybackRate');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['defaultPlaybackRate'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_defaultPlaybackRate, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_set_defaultPlaybackRate = function (val) {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_defaultPlaybackRate, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['defaultPlaybackRate'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['defaultPlaybackRate'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_defaultPlaybackRate' + '  result => ', '' + result);
  }
};
globalMy.HTMLMediaElement_get_playbackRate = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_playbackRate');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['playbackRate'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_playbackRate, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_set_playbackRate = function (val) {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_playbackRate, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['playbackRate'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['playbackRate'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_playbackRate' + '  result => ', '' + result);
  }
};
globalMy.HTMLMediaElement_get_played = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_played');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['played'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_played, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_get_seekable = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_seekable');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['seekable'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_seekable, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_get_ended = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_ended');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['ended'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_ended, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_get_autoplay = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_autoplay');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['autoplay'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_autoplay, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_set_autoplay = function (val) {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_autoplay, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['autoplay'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['autoplay'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_autoplay' + '  result => ', '' + result);
  }
};
globalMy.HTMLMediaElement_get_loop = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_loop');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['loop'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_loop, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_set_loop = function (val) {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_loop, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['loop'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['loop'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_loop' + '  result => ', '' + result);
  }
};
globalMy.HTMLMediaElement_get_preservesPitch = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_preservesPitch');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['preservesPitch'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_preservesPitch, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_set_preservesPitch = function (val) {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_preservesPitch, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['preservesPitch'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['preservesPitch'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_preservesPitch' + '  result => ', '' + result);
  }
};
globalMy.HTMLMediaElement_get_controls = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_controls');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['controls'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_controls, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_set_controls = function (val) {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_controls, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['controls'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['controls'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_controls' + '  result => ', '' + result);
  }
};
globalMy.HTMLMediaElement_get_controlsList = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_controlsList');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['controlsList'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_controlsList, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_set_controlsList = function (val) {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_controlsList, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['controlsList'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['controlsList'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_controlsList' + '  result => ', '' + result);
  }
};
globalMy.HTMLMediaElement_get_volume = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_volume');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['volume'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_volume, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_set_volume = function (val) {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_volume, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['volume'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['volume'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_volume' + '  result => ', '' + result);
  }
};
globalMy.HTMLMediaElement_get_muted = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_muted');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['muted'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_muted, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_set_muted = function (val) {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_muted, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['muted'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['muted'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_muted' + '  result => ', '' + result);
  }
};
globalMy.HTMLMediaElement_get_defaultMuted = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_defaultMuted');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['defaultMuted'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_defaultMuted, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_set_defaultMuted = function (val) {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_defaultMuted, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['defaultMuted'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['defaultMuted'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_defaultMuted' + '  result => ', '' + result);
  }
};
globalMy.HTMLMediaElement_get_textTracks = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_textTracks');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['textTracks'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_textTracks, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_get_webkitAudioDecodedByteCount = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_webkitAudioDecodedByteCount');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['webkitAudioDecodedByteCount'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_webkitAudioDecodedByteCount, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_get_webkitVideoDecodedByteCount = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_webkitVideoDecodedByteCount');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['webkitVideoDecodedByteCount'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_webkitVideoDecodedByteCount, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_get_onencrypted = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_onencrypted');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onencrypted'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_onencrypted, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_set_onencrypted = function (val) {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_onencrypted, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onencrypted'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onencrypted'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_onencrypted' + '  result => ', '' + result);
  }
};
globalMy.HTMLMediaElement_get_onwaitingforkey = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_onwaitingforkey');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['onwaitingforkey'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_onwaitingforkey, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_set_onwaitingforkey = function (val) {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_onwaitingforkey, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['onwaitingforkey'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['onwaitingforkey'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_onwaitingforkey' + '  result => ', '' + result);
  }
};
globalMy.HTMLMediaElement_get_srcObject = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_srcObject');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['srcObject'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_srcObject, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_set_srcObject = function (val) {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_srcObject, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['srcObject'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['srcObject'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_srcObject' + '  result => ', '' + result);
  }
};
globalMy.HTMLMediaElement_addTextTrack = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_addTextTrack, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.addTextTrack.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了HTMLMediaElement_addTextTrack ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_canPlayType = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_canPlayType, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.canPlayType.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了HTMLMediaElement_canPlayType ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_captureStream = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_captureStream, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.captureStream.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了HTMLMediaElement_captureStream ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_load = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_load, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.load.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了HTMLMediaElement_load ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_pause = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_pause, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.pause.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了HTMLMediaElement_pause ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_play = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_play, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.play.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了HTMLMediaElement_play ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_get_sinkId = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_sinkId');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['sinkId'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_sinkId, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_get_remote = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_remote');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['remote'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_remote, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_get_disableRemotePlayback = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_disableRemotePlayback');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['disableRemotePlayback'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_disableRemotePlayback, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_set_disableRemotePlayback = function (val) {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_disableRemotePlayback, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['disableRemotePlayback'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['disableRemotePlayback'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_set_disableRemotePlayback' + '  result => ', '' + result);
  }
};
globalMy.HTMLMediaElement_setSinkId = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_setSinkId, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.setSinkId.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了HTMLMediaElement_setSinkId ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_get_mediaKeys = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_mediaKeys');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['mediaKeys'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_get_mediaKeys, result => ', '' + result);
  }
  return result;
};
globalMy.HTMLMediaElement_setMediaKeys = function () {
  if (!(this instanceof HTMLMediaElement)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了HTMLMediaElement_setMediaKeys, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.setMediaKeys.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了HTMLMediaElement_setMediaKeys ' + '  result => ', '' + result);
  }
  return result;
};