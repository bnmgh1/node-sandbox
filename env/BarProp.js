globalMy.BarProp_get_visible = function () {
  if (!(this instanceof BarProp)) {
    throw new TypeError("Illegal invocation");
  }
  let result;
  var foundName = globalMy.foundName(this);
  result = globalMy.value[foundName]['visible'];
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了BarProp_get_visible,result => ', result);
  }
  return result;
};

// prototype(无构造函数)的原型方法
// prototype(无构造函数)的原型方法