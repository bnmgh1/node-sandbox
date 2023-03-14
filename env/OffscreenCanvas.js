globalMy.OffscreenCanvas_get_width = function () {
    if (!(this instanceof OffscreenCanvas)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['width'];
    if (globalMy.is_log) {
        console.log('[*]  调用了OffscreenCanvas_get_width,result => ', result)
    }
    return result;
}
globalMy.OffscreenCanvas_set_width = function (val) {
    if (!(this instanceof OffscreenCanvas)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['width'] = val;
    if (globalMy.is_log) {
        console.log('[*]  调用了OffscreenCanvas_set_width, 传参val => ' + val + '  result => ', result)
    }
}
globalMy.OffscreenCanvas_get_height = function () {
    if (!(this instanceof OffscreenCanvas)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['height'];
    if (globalMy.is_log) {
        console.log('[*]  调用了OffscreenCanvas_get_height,result => ', result)
    }
    return result;
}
globalMy.OffscreenCanvas_set_height = function (val) {
    if (!(this instanceof OffscreenCanvas)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['height'] = val;
    if (globalMy.is_log) {
        console.log('[*]  调用了OffscreenCanvas_set_height, 传参val => ' + val + '  result => ', result)
    }
}
globalMy.OffscreenCanvas_get_oncontextlost = function () {
    if (!(this instanceof OffscreenCanvas)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['oncontextlost'];
    if (globalMy.is_log) {
        console.log('[*]  调用了OffscreenCanvas_get_oncontextlost,result => ', result)
    }
    return result;
}
globalMy.OffscreenCanvas_set_oncontextlost = function (val) {
    if (!(this instanceof OffscreenCanvas)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['oncontextlost'] = val;
    if (globalMy.is_log) {
        console.log('[*]  调用了OffscreenCanvas_set_oncontextlost, 传参val => ' + val + '  result => ', result)
    }
}
globalMy.OffscreenCanvas_get_oncontextrestored = function () {
    if (!(this instanceof OffscreenCanvas)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['oncontextrestored'];
    if (globalMy.is_log) {
        console.log('[*]  调用了OffscreenCanvas_get_oncontextrestored,result => ', result)
    }
    return result;
}
globalMy.OffscreenCanvas_set_oncontextrestored = function (val) {
    if (!(this instanceof OffscreenCanvas)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['oncontextrestored'] = val;
    if (globalMy.is_log) {
        console.log('[*]  调用了OffscreenCanvas_set_oncontextrestored, 传参val => ' + val + '  result => ', result)
    }
}
globalMy.OffscreenCanvas_convertToBlob = function () {
    if (!(this instanceof OffscreenCanvas)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了OffscreenCanvas_convertToBlob, arguments => ', JSON.stringify(arguments), '  result => ', result)
    }
    return result;
}
globalMy.OffscreenCanvas_getContext = function () {
    if (!(this instanceof OffscreenCanvas)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了OffscreenCanvas_getContext, arguments => ', JSON.stringify(arguments), '  result => ', result)
    }
    return result;
}
globalMy.OffscreenCanvas_transferToImageBitmap = function () {
    if (!(this instanceof OffscreenCanvas)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了OffscreenCanvas_transferToImageBitmap, arguments => ', JSON.stringify(arguments), '  result => ', result)
    }
    return result;
}