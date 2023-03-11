globalMy.OffscreenCanvasRenderingContext2D_get_canvas = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['canvas'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_get_canvas,result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_get_globalAlpha = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['globalAlpha'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_get_globalAlpha,result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_set_globalAlpha = function (val) {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['globalAlpha'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_set_globalAlpha, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.OffscreenCanvasRenderingContext2D_get_globalCompositeOperation = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['globalCompositeOperation'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_get_globalCompositeOperation,result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_set_globalCompositeOperation = function (val) {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['globalCompositeOperation'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_set_globalCompositeOperation, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.OffscreenCanvasRenderingContext2D_get_filter = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['filter'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_get_filter,result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_set_filter = function (val) {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['filter'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_set_filter, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.OffscreenCanvasRenderingContext2D_get_imageSmoothingEnabled = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['imageSmoothingEnabled'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_get_imageSmoothingEnabled,result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_set_imageSmoothingEnabled = function (val) {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['imageSmoothingEnabled'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_set_imageSmoothingEnabled, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.OffscreenCanvasRenderingContext2D_get_imageSmoothingQuality = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['imageSmoothingQuality'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_get_imageSmoothingQuality,result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_set_imageSmoothingQuality = function (val) {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['imageSmoothingQuality'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_set_imageSmoothingQuality, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.OffscreenCanvasRenderingContext2D_get_strokeStyle = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['strokeStyle'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_get_strokeStyle,result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_set_strokeStyle = function (val) {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['strokeStyle'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_set_strokeStyle, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.OffscreenCanvasRenderingContext2D_get_fillStyle = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['fillStyle'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_get_fillStyle,result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_set_fillStyle = function (val) {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['fillStyle'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_set_fillStyle, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.OffscreenCanvasRenderingContext2D_get_shadowOffsetX = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['shadowOffsetX'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_get_shadowOffsetX,result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_set_shadowOffsetX = function (val) {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['shadowOffsetX'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_set_shadowOffsetX, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.OffscreenCanvasRenderingContext2D_get_shadowOffsetY = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['shadowOffsetY'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_get_shadowOffsetY,result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_set_shadowOffsetY = function (val) {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['shadowOffsetY'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_set_shadowOffsetY, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.OffscreenCanvasRenderingContext2D_get_shadowBlur = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['shadowBlur'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_get_shadowBlur,result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_set_shadowBlur = function (val) {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['shadowBlur'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_set_shadowBlur, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.OffscreenCanvasRenderingContext2D_get_shadowColor = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['shadowColor'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_get_shadowColor,result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_set_shadowColor = function (val) {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['shadowColor'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_set_shadowColor, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.OffscreenCanvasRenderingContext2D_get_lineWidth = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['lineWidth'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_get_lineWidth,result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_set_lineWidth = function (val) {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['lineWidth'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_set_lineWidth, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.OffscreenCanvasRenderingContext2D_get_lineCap = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['lineCap'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_get_lineCap,result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_set_lineCap = function (val) {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['lineCap'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_set_lineCap, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.OffscreenCanvasRenderingContext2D_get_lineJoin = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['lineJoin'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_get_lineJoin,result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_set_lineJoin = function (val) {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['lineJoin'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_set_lineJoin, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.OffscreenCanvasRenderingContext2D_get_miterLimit = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['miterLimit'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_get_miterLimit,result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_set_miterLimit = function (val) {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['miterLimit'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_set_miterLimit, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.OffscreenCanvasRenderingContext2D_get_lineDashOffset = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['lineDashOffset'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_get_lineDashOffset,result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_set_lineDashOffset = function (val) {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['lineDashOffset'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_set_lineDashOffset, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.OffscreenCanvasRenderingContext2D_get_font = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['font'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_get_font,result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_set_font = function (val) {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['font'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_set_font, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.OffscreenCanvasRenderingContext2D_get_textAlign = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['textAlign'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_get_textAlign,result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_set_textAlign = function (val) {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['textAlign'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_set_textAlign, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.OffscreenCanvasRenderingContext2D_get_textBaseline = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['textBaseline'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_get_textBaseline,result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_set_textBaseline = function (val) {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['textBaseline'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_set_textBaseline, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.OffscreenCanvasRenderingContext2D_get_direction = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['direction'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_get_direction,result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_set_direction = function (val) {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['direction'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_set_direction, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.OffscreenCanvasRenderingContext2D_get_fontKerning = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['fontKerning'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_get_fontKerning,result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_set_fontKerning = function (val) {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['fontKerning'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_set_fontKerning, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.OffscreenCanvasRenderingContext2D_get_fontStretch = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['fontStretch'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_get_fontStretch,result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_set_fontStretch = function (val) {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['fontStretch'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_set_fontStretch, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.OffscreenCanvasRenderingContext2D_get_fontVariantCaps = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['fontVariantCaps'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_get_fontVariantCaps,result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_set_fontVariantCaps = function (val) {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['fontVariantCaps'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_set_fontVariantCaps, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.OffscreenCanvasRenderingContext2D_get_letterSpacing = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['letterSpacing'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_get_letterSpacing,result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_set_letterSpacing = function (val) {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['letterSpacing'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_set_letterSpacing, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.OffscreenCanvasRenderingContext2D_get_textRendering = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['textRendering'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_get_textRendering,result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_set_textRendering = function (val) {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['textRendering'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_set_textRendering, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.OffscreenCanvasRenderingContext2D_get_wordSpacing = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['wordSpacing'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_get_wordSpacing,result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_set_wordSpacing = function (val) {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['wordSpacing'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_set_wordSpacing, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.OffscreenCanvasRenderingContext2D_clip = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_clip, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_createConicGradient = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_createConicGradient, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_createImageData = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_createImageData, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_createLinearGradient = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_createLinearGradient, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_createPattern = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_createPattern, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_createRadialGradient = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_createRadialGradient, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_drawImage = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_drawImage, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_fill = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_fill, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_fillText = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_fillText, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_getImageData = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_getImageData, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_getLineDash = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_getLineDash, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_getTransform = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_getTransform, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_isContextLost = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_isContextLost, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_isPointInPath = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_isPointInPath, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_isPointInStroke = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_isPointInStroke, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_measureText = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_measureText, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_putImageData = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_putImageData, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_reset = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_reset, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_roundRect = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_roundRect, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_save = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_save, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_scale = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_scale, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_setLineDash = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_setLineDash, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_setTransform = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_setTransform, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_stroke = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_stroke, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_strokeText = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_strokeText, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_transform = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_transform, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_translate = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_translate, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_arc = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_arc, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_arcTo = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_arcTo, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_beginPath = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_beginPath, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_bezierCurveTo = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_bezierCurveTo, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_clearRect = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_clearRect, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_closePath = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_closePath, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_ellipse = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_ellipse, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_fillRect = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_fillRect, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_lineTo = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_lineTo, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_moveTo = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_moveTo, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_quadraticCurveTo = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_quadraticCurveTo, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_rect = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_rect, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_resetTransform = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_resetTransform, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_restore = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_restore, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_rotate = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_rotate, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.OffscreenCanvasRenderingContext2D_strokeRect = function () {
  if (!(this instanceof OffscreenCanvasRenderingContext2D)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了OffscreenCanvasRenderingContext2D_strokeRect, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};