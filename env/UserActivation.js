globalMy.UserActivation_get_hasBeenActive = function () {
  if (!(this instanceof UserActivation)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['hasBeenActive'];
  if (globalMy.is_log) {
    console.log('[*]  调用了UserActivation_get_hasBeenActive,result => ', '' + result);
  }
  return result;
};
globalMy.UserActivation_get_isActive = function () {
  if (!(this instanceof UserActivation)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['isActive'];
  if (globalMy.is_log) {
    console.log('[*]  调用了UserActivation_get_isActive,result => ', '' + result);
  }
  return result;
};