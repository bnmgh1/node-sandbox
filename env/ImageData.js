globalMy.ImageData_get_width = function () {
    if (!(this instanceof ImageData)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了ImageData_get_width');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['width'];
    switch (typeof result) {
        case "object":
            debugger;
            break
        case "function":
            debugger;
            break
        default:
            break

    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了ImageData_get_width, result => ', '' + result)
    }
    return result;
}
globalMy.ImageData_get_height = function () {
    if (!(this instanceof ImageData)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了ImageData_get_height');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['height'];
    switch (typeof result) {
        case "object":
            debugger;
            break
        case "function":
            debugger;
            break
        default:
            break

    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了ImageData_get_height, result => ', '' + result)
    }
    return result;
}
globalMy.ImageData_get_colorSpace = function () {
    if (!(this instanceof ImageData)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了ImageData_get_colorSpace');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['colorSpace'];
    switch (typeof result) {
        case "object":
            debugger;
            break
        case "function":
            debugger;
            break
        default:
            break

    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了ImageData_get_colorSpace, result => ', '' + result)
    }
    return result;
}
globalMy.ImageData_get_data = function () {
    if (!(this instanceof ImageData)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了ImageData_get_data');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['data'];
    switch (typeof result) {
        case "object":
            debugger;
            break
        case "function":
            debugger;
            break
        default:
            break

    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了ImageData_get_data, result => ', '' + result)
    }
    return result;
}
