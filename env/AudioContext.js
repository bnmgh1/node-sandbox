globalMy.AudioContext_get_baseLatency = function () {
    if (!(this instanceof AudioContext)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['baseLatency'];
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioContext_get_baseLatency,result => ', result)
    }
    return result;
}
globalMy.AudioContext_get_outputLatency = function () {
    if (!(this instanceof AudioContext)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['outputLatency'];
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioContext_get_outputLatency,result => ', result)
    }
    return result;
}
globalMy.AudioContext_close = function () {
    if (!(this instanceof AudioContext)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioContext_close, arguments => ' + JSON.stringify(arguments) + '  result => ', result)
    }
    return result;
}
globalMy.AudioContext_createMediaElementSource = function () {
    if (!(this instanceof AudioContext)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioContext_createMediaElementSource, arguments => ' + JSON.stringify(arguments) + '  result => ', result)
    }
    return result;
}
globalMy.AudioContext_createMediaStreamDestination = function () {
    if (!(this instanceof AudioContext)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioContext_createMediaStreamDestination, arguments => ' + JSON.stringify(arguments) + '  result => ', result)
    }
    return result;
}
globalMy.AudioContext_createMediaStreamSource = function () {
    if (!(this instanceof AudioContext)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioContext_createMediaStreamSource, arguments => ' + JSON.stringify(arguments) + '  result => ', result)
    }
    return result;
}
globalMy.AudioContext_getOutputTimestamp = function () {
    if (!(this instanceof AudioContext)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioContext_getOutputTimestamp, arguments => ' + JSON.stringify(arguments) + '  result => ', result)
    }
    return result;
}
globalMy.AudioContext_resume = function () {
    if (!(this instanceof AudioContext)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioContext_resume, arguments => ' + JSON.stringify(arguments) + '  result => ', result)
    }
    return result;
}
globalMy.AudioContext_suspend = function () {
    if (!(this instanceof AudioContext)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioContext_suspend, arguments => ' + JSON.stringify(arguments) + '  result => ', result)
    }
    return result;
}
globalMy.AudioContext_get_sinkId = function () {
    if (!(this instanceof AudioContext)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['sinkId'];
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioContext_get_sinkId,result => ', result)
    }
    return result;
}
globalMy.AudioContext_get_onsinkchange = function () {
    if (!(this instanceof AudioContext)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['onsinkchange'];
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioContext_get_onsinkchange,result => ', result)
    }
    return result;
}
globalMy.AudioContext_set_onsinkchange = function (val) {
    if (!(this instanceof AudioContext)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['onsinkchange'] = val;
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioContext_set_onsinkchange, 传参val => ' + val + '  result => ', result)
    }
}
globalMy.AudioContext_setSinkId = function () {
    if (!(this instanceof AudioContext)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioContext_setSinkId, arguments => ' + JSON.stringify(arguments) + '  result => ', result)
    }
    return result;
}

