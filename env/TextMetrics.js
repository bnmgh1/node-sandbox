globalMy.TextMetrics_get_width = function () {
    if (!(this instanceof TextMetrics)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['width'];
    if (globalMy.is_log) {
        console.log('[*]  调用了TextMetrics_get_width,result => ', result)
    }
    return result;
}
globalMy.TextMetrics_get_actualBoundingBoxLeft = function () {
    if (!(this instanceof TextMetrics)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['actualBoundingBoxLeft'];
    if (globalMy.is_log) {
        console.log('[*]  调用了TextMetrics_get_actualBoundingBoxLeft,result => ', result)
    }
    return result;
}
globalMy.TextMetrics_get_actualBoundingBoxRight = function () {
    if (!(this instanceof TextMetrics)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['actualBoundingBoxRight'];
    if (globalMy.is_log) {
        console.log('[*]  调用了TextMetrics_get_actualBoundingBoxRight,result => ', result)
    }
    return result;
}
globalMy.TextMetrics_get_fontBoundingBoxAscent = function () {
    if (!(this instanceof TextMetrics)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['fontBoundingBoxAscent'];
    if (globalMy.is_log) {
        console.log('[*]  调用了TextMetrics_get_fontBoundingBoxAscent,result => ', result)
    }
    return result;
}
globalMy.TextMetrics_get_fontBoundingBoxDescent = function () {
    if (!(this instanceof TextMetrics)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['fontBoundingBoxDescent'];
    if (globalMy.is_log) {
        console.log('[*]  调用了TextMetrics_get_fontBoundingBoxDescent,result => ', result)
    }
    return result;
}
globalMy.TextMetrics_get_actualBoundingBoxAscent = function () {
    if (!(this instanceof TextMetrics)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['actualBoundingBoxAscent'];
    if (globalMy.is_log) {
        console.log('[*]  调用了TextMetrics_get_actualBoundingBoxAscent,result => ', result)
    }
    return result;
}
globalMy.TextMetrics_get_actualBoundingBoxDescent = function () {
    if (!(this instanceof TextMetrics)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['actualBoundingBoxDescent'];
    if (globalMy.is_log) {
        console.log('[*]  调用了TextMetrics_get_actualBoundingBoxDescent,result => ', result)
    }
    return result;
}
