globalMy.RTCSessionDescription_get_type = function () {
  if (!(this instanceof RTCSessionDescription)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['type'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCSessionDescription_get_type,result => ', '' + result);
  }
  return result;
};
globalMy.RTCSessionDescription_set_type = function (val) {
  if (!(this instanceof RTCSessionDescription)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['type'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCSessionDescription_set_type, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.RTCSessionDescription_get_sdp = function () {
  if (!(this instanceof RTCSessionDescription)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['sdp'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCSessionDescription_get_sdp,result => ', '' + result);
  }
  return result;
};
globalMy.RTCSessionDescription_set_sdp = function (val) {
  if (!(this instanceof RTCSessionDescription)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['sdp'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCSessionDescription_set_sdp, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.RTCSessionDescription_toJSON = function () {
  if (!(this instanceof RTCSessionDescription)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体
  result = {
    type: this.type,
    sdp: this.sdp
  };
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCSessionDescription_toJSON, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};