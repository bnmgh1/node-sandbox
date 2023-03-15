globalMy.NodeList_entries = function () {
    if (!(this instanceof NodeList)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了NodeList_entries, arguments => ', arguments);
    }
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    result = this_.entries.apply(this_, arguments);
    if (result == undefined || result == null) {
    } else {
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
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了NodeList_entries ' + '  result => ', '' + result)
    }
    return result;
}
globalMy.NodeList_keys = function () {
    if (!(this instanceof NodeList)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了NodeList_keys, arguments => ', arguments);
    }
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    result = this_.keys.apply(this_, arguments);
    if (result == undefined || result == null) {
    } else {
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
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了NodeList_keys ' + '  result => ', '' + result)
    }
    return result;
}
globalMy.NodeList_values = function () {
    if (!(this instanceof NodeList)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了NodeList_values, arguments => ', arguments);
    }
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    result = this_.values.apply(this_, arguments);
    if (result == undefined || result == null) {
    } else {
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
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了NodeList_values ' + '  result => ', '' + result)
    }
    return result;
}
globalMy.NodeList_forEach = function () {
    if (!(this instanceof NodeList)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了NodeList_forEach, arguments => ', arguments);
    }
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    result = this_.forEach.apply(this_, arguments);
    if (result == undefined || result == null) {
    } else {
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
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了NodeList_forEach ' + '  result => ', '' + result)
    }
    return result;
}
globalMy.NodeList_get_length = function () {
    if (!(this instanceof NodeList)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了NodeList_get_length');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['length'];
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
        globalMy.console.log('[*]  调用了NodeList_get_length, result => ', '' + result)
    }
    return result;
}
globalMy.NodeList_item = function () {
    if (!(this instanceof NodeList)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了NodeList_item, arguments => ', arguments);
    }
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    result = this_.item.apply(this_, arguments);
    if (result == undefined || result == null) {
    } else {
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
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了NodeList_item ' + '  result => ', '' + result)
    }
    return result;
}