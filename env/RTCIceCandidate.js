globalMy.RTCIceCandidate_get_candidate = function () {
  if (!(this instanceof RTCIceCandidate)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['candidate'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCIceCandidate_get_candidate,result => ', '' + result);
  }
  return result;
};
globalMy.RTCIceCandidate_get_sdpMid = function () {
  if (!(this instanceof RTCIceCandidate)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['sdpMid'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCIceCandidate_get_sdpMid,result => ', '' + result);
  }
  return result;
};
globalMy.RTCIceCandidate_get_sdpMLineIndex = function () {
  if (!(this instanceof RTCIceCandidate)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['sdpMLineIndex'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCIceCandidate_get_sdpMLineIndex,result => ', '' + result);
  }
  return result;
};
globalMy.RTCIceCandidate_get_foundation = function () {
  if (!(this instanceof RTCIceCandidate)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['foundation'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCIceCandidate_get_foundation,result => ', '' + result);
  }
  return result;
};
globalMy.RTCIceCandidate_get_component = function () {
  if (!(this instanceof RTCIceCandidate)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['component'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCIceCandidate_get_component,result => ', '' + result);
  }
  return result;
};
globalMy.RTCIceCandidate_get_priority = function () {
  if (!(this instanceof RTCIceCandidate)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['priority'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCIceCandidate_get_priority,result => ', '' + result);
  }
  return result;
};
globalMy.RTCIceCandidate_get_address = function () {
  if (!(this instanceof RTCIceCandidate)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['address'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCIceCandidate_get_address,result => ', '' + result);
  }
  return result;
};
globalMy.RTCIceCandidate_get_protocol = function () {
  if (!(this instanceof RTCIceCandidate)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['protocol'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCIceCandidate_get_protocol,result => ', '' + result);
  }
  return result;
};
globalMy.RTCIceCandidate_get_port = function () {
  if (!(this instanceof RTCIceCandidate)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['port'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCIceCandidate_get_port,result => ', '' + result);
  }
  return result;
};
globalMy.RTCIceCandidate_get_type = function () {
  if (!(this instanceof RTCIceCandidate)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['type'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCIceCandidate_get_type,result => ', '' + result);
  }
  return result;
};
globalMy.RTCIceCandidate_get_tcpType = function () {
  if (!(this instanceof RTCIceCandidate)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['tcpType'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCIceCandidate_get_tcpType,result => ', '' + result);
  }
  return result;
};
globalMy.RTCIceCandidate_get_relatedAddress = function () {
  if (!(this instanceof RTCIceCandidate)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['relatedAddress'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCIceCandidate_get_relatedAddress,result => ', '' + result);
  }
  return result;
};
globalMy.RTCIceCandidate_get_relatedPort = function () {
  if (!(this instanceof RTCIceCandidate)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['relatedPort'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCIceCandidate_get_relatedPort,result => ', '' + result);
  }
  return result;
};
globalMy.RTCIceCandidate_get_usernameFragment = function () {
  if (!(this instanceof RTCIceCandidate)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['usernameFragment'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCIceCandidate_get_usernameFragment,result => ', '' + result);
  }
  return result;
};
globalMy.RTCIceCandidate_toJSON = function () {
  if (!(this instanceof RTCIceCandidate)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCIceCandidate_toJSON, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};