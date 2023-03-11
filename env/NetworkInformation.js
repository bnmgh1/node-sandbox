globalMy.NetworkInformation_get_onchange = function () {
  if (!(this instanceof NetworkInformation)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['onchange'];
  if (globalMy.is_log) {
    console.log('[*]  调用了NetworkInformation_get_onchange,result => ', result);
  }
  return result;
};
globalMy.NetworkInformation_set_onchange = function (val) {
  if (!(this instanceof NetworkInformation)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  globalMy.value[foundName]['onchange'] = val;
  if (globalMy.is_log) {
    console.log('[*]  调用了NetworkInformation_set_onchange, 传参val => ' + val + '  result => ', result);
  }
};
globalMy.NetworkInformation_get_effectiveType = function () {
  if (!(this instanceof NetworkInformation)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['effectiveType'];
  if (globalMy.is_log) {
    console.log('[*]  调用了NetworkInformation_get_effectiveType,result => ', result);
  }
  return result;
};
globalMy.NetworkInformation_get_rtt = function () {
  if (!(this instanceof NetworkInformation)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['rtt'];
  if (globalMy.is_log) {
    console.log('[*]  调用了NetworkInformation_get_rtt,result => ', result);
  }
  return result;
};
globalMy.NetworkInformation_get_downlink = function () {
  if (!(this instanceof NetworkInformation)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['downlink'];
  if (globalMy.is_log) {
    console.log('[*]  调用了NetworkInformation_get_downlink,result => ', result);
  }
  return result;
};
globalMy.NetworkInformation_get_saveData = function () {
  if (!(this instanceof NetworkInformation)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['saveData'];
  if (globalMy.is_log) {
    console.log('[*]  调用了NetworkInformation_get_saveData,result => ', result);
  }
  return result;
};