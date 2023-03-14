globalMy.CustomEvent_get_detail = function () {
    if (!(this instanceof CustomEvent)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundEventName(this);
    result = globalMy.event_value[foundName]['detail'];
    if (globalMy.is_log) {
        console.log('[*]  调用了CustomEvent_get_detail,result => ', result)
    }
    return result;
}
globalMy.CustomEvent_initCustomEvent = function () {
    if (!(this instanceof CustomEvent)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundEventName(this);
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了CustomEvent_initCustomEvent, arguments => ', arguments, '  result => ', result)
    }
    return result;
}