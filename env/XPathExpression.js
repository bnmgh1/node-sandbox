// dom构造函数原型方法
// dom构造函数原型方法
globalMy.XPathExpression_evaluate = function () {
  if (!(this instanceof XPathExpression)) {
    throw new TypeError("Illegal invocation");
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了XPathExpression_evaluate, arguments => ', arguments);
  }
  var result;
  //这里写方法实体
  var name = globalMy.foundName(this);
  var this_ = globalMy.jsdom_element[name];
  result = this_.evaluate.apply(this_, arguments);
  if (result == undefined || result == null) {} else {
    switch (typeof result) {
      case "object":
        debugger;
        break;
      case "function":
        debugger;
        break;
      default:
        break;
    }
  }
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了XPathExpression_evaluate ' + '  result => ', '' + result);
  }
  return result;
};