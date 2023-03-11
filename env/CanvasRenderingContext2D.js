globalMy.CanvasRenderingContext2D_get_canvas = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_canvas');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['canvas'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_canvas, result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_get_globalAlpha = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_globalAlpha');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['globalAlpha'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_globalAlpha, result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_set_globalAlpha = function (val) {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_globalAlpha, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['globalAlpha'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['globalAlpha'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_globalAlpha' + '  result => ', '' + result);
  }
};
globalMy.CanvasRenderingContext2D_get_globalCompositeOperation = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_globalCompositeOperation');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['globalCompositeOperation'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_globalCompositeOperation, result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_set_globalCompositeOperation = function (val) {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_globalCompositeOperation, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['globalCompositeOperation'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['globalCompositeOperation'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_globalCompositeOperation' + '  result => ', '' + result);
  }
};
globalMy.CanvasRenderingContext2D_get_filter = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_filter');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['filter'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_filter, result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_set_filter = function (val) {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_filter, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['filter'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['filter'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_filter' + '  result => ', '' + result);
  }
};
globalMy.CanvasRenderingContext2D_get_imageSmoothingEnabled = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_imageSmoothingEnabled');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['imageSmoothingEnabled'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_imageSmoothingEnabled, result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_set_imageSmoothingEnabled = function (val) {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_imageSmoothingEnabled, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['imageSmoothingEnabled'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['imageSmoothingEnabled'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_imageSmoothingEnabled' + '  result => ', '' + result);
  }
};
globalMy.CanvasRenderingContext2D_get_imageSmoothingQuality = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_imageSmoothingQuality');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['imageSmoothingQuality'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_imageSmoothingQuality, result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_set_imageSmoothingQuality = function (val) {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_imageSmoothingQuality, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['imageSmoothingQuality'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['imageSmoothingQuality'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_imageSmoothingQuality' + '  result => ', '' + result);
  }
};
globalMy.CanvasRenderingContext2D_get_strokeStyle = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_strokeStyle');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['strokeStyle'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_strokeStyle, result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_set_strokeStyle = function (val) {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_strokeStyle, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['strokeStyle'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['strokeStyle'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_strokeStyle' + '  result => ', '' + result);
  }
};
globalMy.CanvasRenderingContext2D_get_fillStyle = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_fillStyle');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['fillStyle'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_fillStyle, result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_set_fillStyle = function (val) {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_fillStyle, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['fillStyle'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['fillStyle'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_fillStyle' + '  result => ', '' + result);
  }
};
globalMy.CanvasRenderingContext2D_get_shadowOffsetX = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_shadowOffsetX');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['shadowOffsetX'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_shadowOffsetX, result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_set_shadowOffsetX = function (val) {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_shadowOffsetX, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['shadowOffsetX'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['shadowOffsetX'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_shadowOffsetX' + '  result => ', '' + result);
  }
};
globalMy.CanvasRenderingContext2D_get_shadowOffsetY = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_shadowOffsetY');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['shadowOffsetY'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_shadowOffsetY, result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_set_shadowOffsetY = function (val) {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_shadowOffsetY, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['shadowOffsetY'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['shadowOffsetY'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_shadowOffsetY' + '  result => ', '' + result);
  }
};
globalMy.CanvasRenderingContext2D_get_shadowBlur = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_shadowBlur');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['shadowBlur'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_shadowBlur, result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_set_shadowBlur = function (val) {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_shadowBlur, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['shadowBlur'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['shadowBlur'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_shadowBlur' + '  result => ', '' + result);
  }
};
globalMy.CanvasRenderingContext2D_get_shadowColor = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_shadowColor');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['shadowColor'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_shadowColor, result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_set_shadowColor = function (val) {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_shadowColor, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['shadowColor'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['shadowColor'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_shadowColor' + '  result => ', '' + result);
  }
};
globalMy.CanvasRenderingContext2D_get_lineWidth = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_lineWidth');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['lineWidth'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_lineWidth, result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_set_lineWidth = function (val) {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_lineWidth, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['lineWidth'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['lineWidth'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_lineWidth' + '  result => ', '' + result);
  }
};
globalMy.CanvasRenderingContext2D_get_lineCap = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_lineCap');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['lineCap'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_lineCap, result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_set_lineCap = function (val) {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_lineCap, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['lineCap'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['lineCap'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_lineCap' + '  result => ', '' + result);
  }
};
globalMy.CanvasRenderingContext2D_get_lineJoin = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_lineJoin');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['lineJoin'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_lineJoin, result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_set_lineJoin = function (val) {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_lineJoin, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['lineJoin'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['lineJoin'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_lineJoin' + '  result => ', '' + result);
  }
};
globalMy.CanvasRenderingContext2D_get_miterLimit = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_miterLimit');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['miterLimit'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_miterLimit, result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_set_miterLimit = function (val) {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_miterLimit, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['miterLimit'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['miterLimit'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_miterLimit' + '  result => ', '' + result);
  }
};
globalMy.CanvasRenderingContext2D_get_lineDashOffset = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_lineDashOffset');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['lineDashOffset'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_lineDashOffset, result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_set_lineDashOffset = function (val) {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_lineDashOffset, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['lineDashOffset'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['lineDashOffset'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_lineDashOffset' + '  result => ', '' + result);
  }
};
globalMy.CanvasRenderingContext2D_get_font = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_font');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['font'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_font, result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_set_font = function (val) {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_font, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['font'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['font'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_font' + '  result => ', '' + result);
  }
};
globalMy.CanvasRenderingContext2D_get_textAlign = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_textAlign');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['textAlign'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_textAlign, result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_set_textAlign = function (val) {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_textAlign, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['textAlign'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['textAlign'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_textAlign' + '  result => ', '' + result);
  }
};
globalMy.CanvasRenderingContext2D_get_textBaseline = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_textBaseline');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['textBaseline'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_textBaseline, result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_set_textBaseline = function (val) {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_textBaseline, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['textBaseline'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['textBaseline'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_textBaseline' + '  result => ', '' + result);
  }
};
globalMy.CanvasRenderingContext2D_get_direction = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_direction');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['direction'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_direction, result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_set_direction = function (val) {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_direction, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['direction'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['direction'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_direction' + '  result => ', '' + result);
  }
};
globalMy.CanvasRenderingContext2D_get_fontKerning = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_fontKerning');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['fontKerning'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_fontKerning, result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_set_fontKerning = function (val) {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_fontKerning, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['fontKerning'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['fontKerning'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_fontKerning' + '  result => ', '' + result);
  }
};
globalMy.CanvasRenderingContext2D_get_fontStretch = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_fontStretch');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['fontStretch'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_fontStretch, result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_set_fontStretch = function (val) {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_fontStretch, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['fontStretch'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['fontStretch'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_fontStretch' + '  result => ', '' + result);
  }
};
globalMy.CanvasRenderingContext2D_get_fontVariantCaps = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_fontVariantCaps');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['fontVariantCaps'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_fontVariantCaps, result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_set_fontVariantCaps = function (val) {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_fontVariantCaps, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['fontVariantCaps'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['fontVariantCaps'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_fontVariantCaps' + '  result => ', '' + result);
  }
};
globalMy.CanvasRenderingContext2D_get_letterSpacing = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_letterSpacing');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['letterSpacing'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_letterSpacing, result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_set_letterSpacing = function (val) {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_letterSpacing, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['letterSpacing'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['letterSpacing'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_letterSpacing' + '  result => ', '' + result);
  }
};
globalMy.CanvasRenderingContext2D_get_textRendering = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_textRendering');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['textRendering'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_textRendering, result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_set_textRendering = function (val) {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_textRendering, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['textRendering'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['textRendering'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_textRendering' + '  result => ', '' + result);
  }
};
globalMy.CanvasRenderingContext2D_get_wordSpacing = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_wordSpacing');
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.jsdom_element[foundName]['wordSpacing'];
  if (result != null && result != undefined) {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_get_wordSpacing, result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_set_wordSpacing = function (val) {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_wordSpacing, 传参val => ' + val);
  }
  var result;
  var foundName = globalMy.foundName(this);
  if (val == undefined || val == null) {
    globalMy.jsdom_element[foundName]['wordSpacing'] = val;
  } else {
    switch (typeof val) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        globalMy.jsdom_element[foundName]['wordSpacing'] = val;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_wordSpacing' + '  result => ', '' + result);
  }
};
globalMy.CanvasRenderingContext2D_clip = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_clip, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.clip.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_clip ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_createConicGradient = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_createConicGradient, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.createConicGradient.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_createConicGradient ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_createImageData = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_createImageData, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.createImageData.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_createImageData ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_createLinearGradient = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_createLinearGradient, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.createLinearGradient.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_createLinearGradient ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_createPattern = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_createPattern, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.createPattern.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_createPattern ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_createRadialGradient = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_createRadialGradient, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.createRadialGradient.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_createRadialGradient ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_drawFocusIfNeeded = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_drawFocusIfNeeded, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.drawFocusIfNeeded.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_drawFocusIfNeeded ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_drawImage = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_drawImage, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.drawImage.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_drawImage ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_fill = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_fill, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.fill.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_fill ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_fillText = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_fillText, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.fillText.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_fillText ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_getContextAttributes = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_getContextAttributes, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.getContextAttributes.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_getContextAttributes ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_getImageData = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_getImageData, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.getImageData.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_getImageData ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_getLineDash = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_getLineDash, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.getLineDash.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_getLineDash ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_getTransform = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_getTransform, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.getTransform.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_getTransform ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_isContextLost = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_isContextLost, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.isContextLost.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_isContextLost ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_isPointInPath = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_isPointInPath, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.isPointInPath.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_isPointInPath ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_isPointInStroke = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_isPointInStroke, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.isPointInStroke.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_isPointInStroke ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_measureText = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_measureText, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.measureText.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_measureText ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_putImageData = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_putImageData, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.putImageData.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_putImageData ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_reset = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_reset, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.reset.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_reset ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_roundRect = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_roundRect, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.roundRect.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_roundRect ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_save = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_save, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.save.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_save ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_scale = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_scale, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.scale.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_scale ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_setLineDash = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_setLineDash, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.setLineDash.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_setLineDash ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_setTransform = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_setTransform, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.setTransform.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_setTransform ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_stroke = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_stroke, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.stroke.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_stroke ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_strokeText = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_strokeText, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.strokeText.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_strokeText ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_transform = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_transform, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.transform.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_transform ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_translate = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_translate, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.translate.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_translate ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_arc = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_arc, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.arc.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_arc ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_arcTo = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_arcTo, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.arcTo.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_arcTo ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_beginPath = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_beginPath, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.beginPath.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_beginPath ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_bezierCurveTo = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_bezierCurveTo, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.bezierCurveTo.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_bezierCurveTo ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_clearRect = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_clearRect, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.clearRect.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_clearRect ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_closePath = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_closePath, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.closePath.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_closePath ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_ellipse = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_ellipse, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.ellipse.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_ellipse ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_fillRect = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_fillRect, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.fillRect.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_fillRect ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_lineTo = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_lineTo, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.lineTo.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_lineTo ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_moveTo = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_moveTo, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.moveTo.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_moveTo ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_quadraticCurveTo = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_quadraticCurveTo, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.quadraticCurveTo.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_quadraticCurveTo ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_rect = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_rect, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.rect.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_rect ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_resetTransform = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_resetTransform, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.resetTransform.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_resetTransform ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_restore = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_restore, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.restore.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_restore ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_rotate = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_rotate, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.rotate.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_rotate ' + '  result => ', '' + result);
  }
  return result;
};
globalMy.CanvasRenderingContext2D_strokeRect = function () {
  if (!(this instanceof CanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_strokeRect, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.strokeRect.apply(this_, arguments);
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
    globalMy.console.log('[*]  调用了CanvasRenderingContext2D_strokeRect ' + '  result => ', '' + result);
  }
  return result;
};