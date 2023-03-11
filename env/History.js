// History
// History
globalMy.History_get_length = function () {
  if (!(this instanceof History)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['length'];
  if (globalMy.is_log) {
    console.log('[*]  调用了History_get_length,result => ', result);
  }
  return result;
};
globalMy.History_get_scrollRestoration = function () {
  if (!(this instanceof History)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['scrollRestoration'];
  if (globalMy.is_log) {
    console.log('[*]  调用了History_get_scrollRestoration,result => ', result);
  }
  return result;
};
globalMy.History_set_scrollRestoration = function (val) {
  if (!(this instanceof History)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['scrollRestoration'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了History_set_scrollRestoration, 传参val => ' + val + '  result => ', result);
  }
};
globalMy.History_get_state = function () {
  if (!(this instanceof History)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['state'];
  if (globalMy.is_log) {
    console.log('[*]  调用了History_get_state,result => ', result);
  }
  return result;
};
globalMy.History_back = function () {
  if (!(this instanceof History)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了History_back, arguments => ', arguments, '  result => ', result);
  }
  return result;
};
globalMy.History_forward = function () {
  if (!(this instanceof History)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了History_forward, arguments => ', arguments, '  result => ', result);
  }
  return result;
};
globalMy.History_go = function () {
  if (!(this instanceof History)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了History_go, arguments => ', arguments, '  result => ', result);
  }
  return result;
};
globalMy.History_pushState = function () {
  if (!(this instanceof History)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了History_pushState, arguments => ', arguments, '  result => ', result);
  }
  return result;
};
globalMy.History_replaceState = function () {
  if (!(this instanceof History)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了History_replaceState, arguments => ', arguments, '  result => ', result);
  }
  return result;
};

// dom构造函数原型方法
// dom构造函数原型方法