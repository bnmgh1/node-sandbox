// 构造函数原型方法
// 构造函数原型方法
globalMy.Notification_get_onclick = function () {
  if (!(this instanceof Notification)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onclick'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Notification_get_onclick,result => ', '' + result);
  }
  return result;
};
globalMy.Notification_set_onclick = function (val) {
  if (!(this instanceof Notification)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onclick'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Notification_set_onclick, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.Notification_get_onshow = function () {
  if (!(this instanceof Notification)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onshow'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Notification_get_onshow,result => ', '' + result);
  }
  return result;
};
globalMy.Notification_set_onshow = function (val) {
  if (!(this instanceof Notification)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onshow'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Notification_set_onshow, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.Notification_get_onerror = function () {
  if (!(this instanceof Notification)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onerror'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Notification_get_onerror,result => ', '' + result);
  }
  return result;
};
globalMy.Notification_set_onerror = function (val) {
  if (!(this instanceof Notification)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onerror'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Notification_set_onerror, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.Notification_get_onclose = function () {
  if (!(this instanceof Notification)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onclose'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Notification_get_onclose,result => ', '' + result);
  }
  return result;
};
globalMy.Notification_set_onclose = function (val) {
  if (!(this instanceof Notification)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onclose'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Notification_set_onclose, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.Notification_get_title = function () {
  if (!(this instanceof Notification)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['title'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Notification_get_title,result => ', '' + result);
  }
  return result;
};
globalMy.Notification_get_dir = function () {
  if (!(this instanceof Notification)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['dir'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Notification_get_dir,result => ', '' + result);
  }
  return result;
};
globalMy.Notification_get_lang = function () {
  if (!(this instanceof Notification)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['lang'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Notification_get_lang,result => ', '' + result);
  }
  return result;
};
globalMy.Notification_get_body = function () {
  if (!(this instanceof Notification)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['body'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Notification_get_body,result => ', '' + result);
  }
  return result;
};
globalMy.Notification_get_tag = function () {
  if (!(this instanceof Notification)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['tag'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Notification_get_tag,result => ', '' + result);
  }
  return result;
};
globalMy.Notification_get_icon = function () {
  if (!(this instanceof Notification)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['icon'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Notification_get_icon,result => ', '' + result);
  }
  return result;
};
globalMy.Notification_get_badge = function () {
  if (!(this instanceof Notification)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['badge'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Notification_get_badge,result => ', '' + result);
  }
  return result;
};
globalMy.Notification_get_vibrate = function () {
  if (!(this instanceof Notification)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['vibrate'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Notification_get_vibrate,result => ', '' + result);
  }
  return result;
};
globalMy.Notification_get_timestamp = function () {
  if (!(this instanceof Notification)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['timestamp'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Notification_get_timestamp,result => ', '' + result);
  }
  return result;
};
globalMy.Notification_get_renotify = function () {
  if (!(this instanceof Notification)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['renotify'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Notification_get_renotify,result => ', '' + result);
  }
  return result;
};
globalMy.Notification_get_silent = function () {
  if (!(this instanceof Notification)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['silent'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Notification_get_silent,result => ', '' + result);
  }
  return result;
};
globalMy.Notification_get_requireInteraction = function () {
  if (!(this instanceof Notification)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['requireInteraction'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Notification_get_requireInteraction,result => ', '' + result);
  }
  return result;
};
globalMy.Notification_get_data = function () {
  if (!(this instanceof Notification)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['data'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Notification_get_data,result => ', '' + result);
  }
  return result;
};
globalMy.Notification_get_actions = function () {
  if (!(this instanceof Notification)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['actions'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Notification_get_actions,result => ', '' + result);
  }
  return result;
};
globalMy.Notification_close = function () {
  if (!(this instanceof Notification)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体

  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Notification_close, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.Notification_get_image = function () {
  if (!(this instanceof Notification)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['image'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了Notification_get_image,result => ', '' + result);
  }
  return result;
};