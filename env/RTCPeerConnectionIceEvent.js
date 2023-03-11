globalMy.RTCPeerConnectionIceEvent_get_candidate = function () {
  if (!(this instanceof RTCPeerConnectionIceEvent)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['candidate'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnectionIceEvent_get_candidate,result => ', '' + result);
  }
  return result;
};