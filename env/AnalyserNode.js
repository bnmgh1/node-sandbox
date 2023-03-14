globalMy.AnalyserNode_get_fftSize = function () {
    if (!(this instanceof AnalyserNode)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['fftSize'];
    if (globalMy.is_log) {
        console.log('[*]  调用了AnalyserNode_get_fftSize,result => ', result)
    }
    return result;
}
globalMy.AnalyserNode_set_fftSize = function (val) {
    if (!(this instanceof AnalyserNode)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['fftSize'] = val;
    if (globalMy.is_log) {
        console.log('[*]  调用了AnalyserNode_set_fftSize, 传参val => ' + val + '  result => ', result)
    }
}
globalMy.AnalyserNode_get_frequencyBinCount = function () {
    if (!(this instanceof AnalyserNode)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['frequencyBinCount'];
    if (globalMy.is_log) {
        console.log('[*]  调用了AnalyserNode_get_frequencyBinCount,result => ', result)
    }
    return result;
}
globalMy.AnalyserNode_get_minDecibels = function () {
    if (!(this instanceof AnalyserNode)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['minDecibels'];
    if (globalMy.is_log) {
        console.log('[*]  调用了AnalyserNode_get_minDecibels,result => ', result)
    }
    return result;
}
globalMy.AnalyserNode_set_minDecibels = function (val) {
    if (!(this instanceof AnalyserNode)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['minDecibels'] = val;
    if (globalMy.is_log) {
        console.log('[*]  调用了AnalyserNode_set_minDecibels, 传参val => ' + val + '  result => ', result)
    }
}
globalMy.AnalyserNode_get_maxDecibels = function () {
    if (!(this instanceof AnalyserNode)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['maxDecibels'];
    if (globalMy.is_log) {
        console.log('[*]  调用了AnalyserNode_get_maxDecibels,result => ', result)
    }
    return result;
}
globalMy.AnalyserNode_set_maxDecibels = function (val) {
    if (!(this instanceof AnalyserNode)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['maxDecibels'] = val;
    if (globalMy.is_log) {
        console.log('[*]  调用了AnalyserNode_set_maxDecibels, 传参val => ' + val + '  result => ', result)
    }
}
globalMy.AnalyserNode_get_smoothingTimeConstant = function () {
    if (!(this instanceof AnalyserNode)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['smoothingTimeConstant'];
    if (globalMy.is_log) {
        console.log('[*]  调用了AnalyserNode_get_smoothingTimeConstant,result => ', result)
    }
    return result;
}
globalMy.AnalyserNode_set_smoothingTimeConstant = function (val) {
    if (!(this instanceof AnalyserNode)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['smoothingTimeConstant'] = val;
    if (globalMy.is_log) {
        console.log('[*]  调用了AnalyserNode_set_smoothingTimeConstant, 传参val => ' + val + '  result => ', result)
    }
}
globalMy.AnalyserNode_getByteFrequencyData = function () {
    if (!(this instanceof AnalyserNode)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了AnalyserNode_getByteFrequencyData, arguments => ' + JSON.stringify(arguments) + '  result => ', result)
    }
    return result;
}
globalMy.AnalyserNode_getByteTimeDomainData = function () {
    if (!(this instanceof AnalyserNode)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了AnalyserNode_getByteTimeDomainData, arguments => ' + JSON.stringify(arguments) + '  result => ', result)
    }
    return result;
}
globalMy.AnalyserNode_getFloatFrequencyData = function () {
    if (!(this instanceof AnalyserNode)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了AnalyserNode_getFloatFrequencyData, arguments => ' + JSON.stringify(arguments) + '  result => ', result)
    }
    return result;
}
globalMy.AnalyserNode_getFloatTimeDomainData = function () {
    if (!(this instanceof AnalyserNode)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了AnalyserNode_getFloatTimeDomainData, arguments => ' + JSON.stringify(arguments) + '  result => ', result)
    }
    return result;
}

