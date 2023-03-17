globalMy.DOMTokenList_entries = function () {
    if (!(this instanceof DOMTokenList)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了DOMTokenList_entries, arguments => ', arguments);
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
        globalMy.console.log('[*]  调用了DOMTokenList_entries ' + '  result => ', '' + result)
    }
    return result;
}
globalMy.DOMTokenList_keys = function () {
    if (!(this instanceof DOMTokenList)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了DOMTokenList_keys, arguments => ', arguments);
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
        globalMy.console.log('[*]  调用了DOMTokenList_keys ' + '  result => ', '' + result)
    }
    return result;
}
globalMy.DOMTokenList_values = function () {
    if (!(this instanceof DOMTokenList)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了DOMTokenList_values, arguments => ', arguments);
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
        globalMy.console.log('[*]  调用了DOMTokenList_values ' + '  result => ', '' + result)
    }
    return result;
}
globalMy.DOMTokenList_forEach = function () {
    if (!(this instanceof DOMTokenList)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了DOMTokenList_forEach, arguments => ', arguments);
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
        globalMy.console.log('[*]  调用了DOMTokenList_forEach ' + '  result => ', '' + result)
    }
    return result;
}
globalMy.DOMTokenList_get_length = function () {
    if (!(this instanceof DOMTokenList)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了DOMTokenList_get_length');
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
        globalMy.console.log('[*]  调用了DOMTokenList_get_length, result => ', '' + result)
    }
    return result;
}
globalMy.DOMTokenList_get_value = function () {
    if (!(this instanceof DOMTokenList)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了DOMTokenList_get_value');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['value'];
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
        globalMy.console.log('[*]  调用了DOMTokenList_get_value, result => ', '' + result)
    }
    return result;
}
globalMy.DOMTokenList_set_value = function (val) {
    if (!(this instanceof DOMTokenList)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了DOMTokenList_set_value, 传参val => ' + val);
    }
    var result;
    var foundName = globalMy.foundName(this);
    if (val == undefined || val == null) {
        globalMy.jsdom_element[foundName]['value'] = val;
    } else {
        switch (typeof val) {
            case "object":
                debugger;
                break
            case "function":
                debugger;
                break
            default:
                globalMy.jsdom_element[foundName]['value'] = val;

        }
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了DOMTokenList_set_value' + '  result => ', '' + result)
    }
}
globalMy.DOMTokenList_add = function () {
    if (!(this instanceof DOMTokenList)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了DOMTokenList_add, arguments => ', arguments);
    }
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    result = this_.add.apply(this_, arguments);
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
        globalMy.console.log('[*]  调用了DOMTokenList_add ' + '  result => ', '' + result)
    }
    return result;
}
globalMy.DOMTokenList_contains = function () {
    if (!(this instanceof DOMTokenList)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了DOMTokenList_contains, arguments => ', arguments);
    }
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    result = this_.contains.apply(this_, arguments);
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
        globalMy.console.log('[*]  调用了DOMTokenList_contains ' + '  result => ', '' + result)
    }
    return result;
}
globalMy.DOMTokenList_item = function () {
    if (!(this instanceof DOMTokenList)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了DOMTokenList_item, arguments => ', arguments);
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
        globalMy.console.log('[*]  调用了DOMTokenList_item ' + '  result => ', '' + result)
    }
    return result;
}
globalMy.DOMTokenList_remove = function () {
    if (!(this instanceof DOMTokenList)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了DOMTokenList_remove, arguments => ', arguments);
    }
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    result = this_.remove.apply(this_, arguments);
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
        globalMy.console.log('[*]  调用了DOMTokenList_remove ' + '  result => ', '' + result)
    }
    return result;
}
globalMy.DOMTokenList_replace = function () {
    if (!(this instanceof DOMTokenList)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了DOMTokenList_replace, arguments => ', arguments);
    }
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    result = this_.replace.apply(this_, arguments);
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
        globalMy.console.log('[*]  调用了DOMTokenList_replace ' + '  result => ', '' + result)
    }
    return result;
}
globalMy.DOMTokenList_supports = function () {
    if (!(this instanceof DOMTokenList)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了DOMTokenList_supports, arguments => ', arguments);
    }
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    result = this_.supports.apply(this_, arguments);
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
        globalMy.console.log('[*]  调用了DOMTokenList_supports ' + '  result => ', '' + result)
    }
    return result;
}
globalMy.DOMTokenList_toggle = function () {
    if (!(this instanceof DOMTokenList)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了DOMTokenList_toggle, arguments => ', arguments);
    }
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    result = this_.toggle.apply(this_, arguments);
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
        globalMy.console.log('[*]  调用了DOMTokenList_toggle ' + '  result => ', '' + result)
    }
    return result;
}
globalMy.DOMTokenList_toString = function () {
    if (!(this instanceof DOMTokenList)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了DOMTokenList_toString, arguments => ', arguments);
    }
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    result = this_.toString.apply(this_, arguments);
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
        globalMy.console.log('[*]  调用了DOMTokenList_toString ' + '  result => ', '' + result)
    }
    return result;
}
