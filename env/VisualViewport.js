globalMy.VisualViewport_get_offsetLeft = function () {
  if (!(this instanceof VisualViewport)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['offsetLeft'];
  if (globalMy.is_log) {
    console.log('[*]  调用了VisualViewport_get_offsetLeft,result => ', result);
  }
  return result;
};
globalMy.VisualViewport_get_offsetTop = function () {
  if (!(this instanceof VisualViewport)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['offsetTop'];
  if (globalMy.is_log) {
    console.log('[*]  调用了VisualViewport_get_offsetTop,result => ', result);
  }
  return result;
};
globalMy.VisualViewport_get_pageLeft = function () {
  if (!(this instanceof VisualViewport)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['pageLeft'];
  if (globalMy.is_log) {
    console.log('[*]  调用了VisualViewport_get_pageLeft,result => ', result);
  }
  return result;
};
globalMy.VisualViewport_get_pageTop = function () {
  if (!(this instanceof VisualViewport)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['pageTop'];
  if (globalMy.is_log) {
    console.log('[*]  调用了VisualViewport_get_pageTop,result => ', result);
  }
  return result;
};
globalMy.VisualViewport_get_width = function () {
  if (!(this instanceof VisualViewport)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['width'];
  if (globalMy.is_log) {
    console.log('[*]  调用了VisualViewport_get_width,result => ', result);
  }
  return result;
};
globalMy.VisualViewport_get_height = function () {
  if (!(this instanceof VisualViewport)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['height'];
  if (globalMy.is_log) {
    console.log('[*]  调用了VisualViewport_get_height,result => ', result);
  }
  return result;
};
globalMy.VisualViewport_get_scale = function () {
  if (!(this instanceof VisualViewport)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['scale'];
  if (globalMy.is_log) {
    console.log('[*]  调用了VisualViewport_get_scale,result => ', result);
  }
  return result;
};
globalMy.VisualViewport_get_onresize = function () {
  if (!(this instanceof VisualViewport)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onresize'];
  if (globalMy.is_log) {
    console.log('[*]  调用了VisualViewport_get_onresize,result => ', result);
  }
  return result;
};
globalMy.VisualViewport_set_onresize = function (val) {
  if (!(this instanceof VisualViewport)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onresize'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了VisualViewport_set_onresize, 传参val => ' + val + '  result => ', result);
  }
};
globalMy.VisualViewport_get_onscroll = function () {
  if (!(this instanceof VisualViewport)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onscroll'];
  if (globalMy.is_log) {
    console.log('[*]  调用了VisualViewport_get_onscroll,result => ', result);
  }
  return result;
};
globalMy.VisualViewport_set_onscroll = function (val) {
  if (!(this instanceof VisualViewport)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onscroll'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了VisualViewport_set_onscroll, 传参val => ' + val + '  result => ', result);
  }
};
globalMy.VisualViewport_get_segments = function () {
  if (!(this instanceof VisualViewport)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['segments'];
  if (globalMy.is_log) {
    console.log('[*]  调用了VisualViewport_get_segments,result => ', result);
  }
  return result;
};
// WebGLRenderingContext