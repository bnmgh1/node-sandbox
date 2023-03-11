globalMy.RTCPeerConnection_get_localDescription = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  // debugger;
  result = globalMy.value[foundName]['localDescription'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_get_localDescription,result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_get_currentLocalDescription = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['currentLocalDescription'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_get_currentLocalDescription,result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_get_pendingLocalDescription = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['pendingLocalDescription'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_get_pendingLocalDescription,result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_get_remoteDescription = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['remoteDescription'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_get_remoteDescription,result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_get_currentRemoteDescription = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['currentRemoteDescription'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_get_currentRemoteDescription,result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_get_pendingRemoteDescription = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['pendingRemoteDescription'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_get_pendingRemoteDescription,result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_get_signalingState = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['signalingState'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_get_signalingState,result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_get_iceGatheringState = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['iceGatheringState'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_get_iceGatheringState,result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_get_iceConnectionState = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['iceConnectionState'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_get_iceConnectionState,result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_get_connectionState = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['connectionState'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_get_connectionState,result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_get_canTrickleIceCandidates = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['canTrickleIceCandidates'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_get_canTrickleIceCandidates,result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_get_onnegotiationneeded = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onnegotiationneeded'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_get_onnegotiationneeded,result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_set_onnegotiationneeded = function (val) {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onnegotiationneeded'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_set_onnegotiationneeded, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.RTCPeerConnection_get_onicecandidate = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onicecandidate'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_get_onicecandidate,result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_set_onicecandidate = function (val) {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onicecandidate'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_set_onicecandidate, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.RTCPeerConnection_get_onsignalingstatechange = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onsignalingstatechange'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_get_onsignalingstatechange,result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_set_onsignalingstatechange = function (val) {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onsignalingstatechange'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_set_onsignalingstatechange, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.RTCPeerConnection_get_oniceconnectionstatechange = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['oniceconnectionstatechange'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_get_oniceconnectionstatechange,result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_set_oniceconnectionstatechange = function (val) {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['oniceconnectionstatechange'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_set_oniceconnectionstatechange, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.RTCPeerConnection_get_onconnectionstatechange = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onconnectionstatechange'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_get_onconnectionstatechange,result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_set_onconnectionstatechange = function (val) {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onconnectionstatechange'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_set_onconnectionstatechange, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.RTCPeerConnection_get_onicegatheringstatechange = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onicegatheringstatechange'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_get_onicegatheringstatechange,result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_set_onicegatheringstatechange = function (val) {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onicegatheringstatechange'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_set_onicegatheringstatechange, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.RTCPeerConnection_get_onicecandidateerror = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onicecandidateerror'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_get_onicecandidateerror,result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_set_onicecandidateerror = function (val) {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onicecandidateerror'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_set_onicecandidateerror, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.RTCPeerConnection_get_ontrack = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['ontrack'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_get_ontrack,result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_set_ontrack = function (val) {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['ontrack'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_set_ontrack, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.RTCPeerConnection_get_sctp = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['sctp'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_get_sctp,result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_get_ondatachannel = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['ondatachannel'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_get_ondatachannel,result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_set_ondatachannel = function (val) {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['ondatachannel'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_set_ondatachannel, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.RTCPeerConnection_get_onaddstream = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onaddstream'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_get_onaddstream,result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_set_onaddstream = function (val) {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onaddstream'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_set_onaddstream, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.RTCPeerConnection_get_onremovestream = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onremovestream'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_get_onremovestream,result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_set_onremovestream = function (val) {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onremovestream'] = val;
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_set_onremovestream, 传参val => ' + val + '  result => ', '' + result);
  }
};
globalMy.RTCPeerConnection_addIceCandidate = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_addIceCandidate, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_addStream = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_addStream, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_addTrack = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_addTrack, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_addTransceiver = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_addTransceiver, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_close = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_close, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_createAnswer = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_createAnswer, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_createDTMFSender = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_createDTMFSender, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_getConfiguration = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_getConfiguration, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_getLocalStreams = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_getLocalStreams, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_getReceivers = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_getReceivers, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_getRemoteStreams = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_getRemoteStreams, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_getSenders = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_getSenders, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_getStats = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_getStats, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_getTransceivers = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_getTransceivers, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_removeStream = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_removeStream, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_removeTrack = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_removeTrack, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_restartIce = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_restartIce, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_setConfiguration = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_setConfiguration, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_setLocalDescription = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体
  result = new Promise((resolve, reject) => {
    if (arguments.length > 0) {
      throw new TypeError(`Failed to execute 'setLocalDescription' on 'RTCPeerConnection': The provided value is not of type 'RTCSessionDescriptionInit'.`);
    }
    resolve();
  });
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_setLocalDescription, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};
globalMy.RTCPeerConnection_setRemoteDescription = function () {
  if (!(this instanceof RTCPeerConnection)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了RTCPeerConnection_setRemoteDescription, arguments => ', arguments, '  result => ', '' + result);
  }
  return result;
};