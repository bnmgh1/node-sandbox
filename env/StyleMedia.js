globalMy.StyleMedia_get_type = function () {
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['type'];
  if (globalMy.is_log) {
    console.log('[*]  调用了StyleMedia_get_type,result => ', result);
  }
  return result;
};
globalMy.StyleMedia_matchMedium = function () {
  let result;
  //这里写方法实体
  if (globalMy.is_log) {
    console.log('[*]  调用了StyleMedia_matchMedium, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
  }
  return result;
};