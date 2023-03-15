globalMy.URL_get_origin = function () {
    if (!(this instanceof URL)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['origin'];
    if (globalMy.is_log) {
        console.log('[*]  调用了URL_get_origin,result => ', result)
    }
    return result;
}
globalMy.URL_get_protocol = function () {
    if (!(this instanceof URL)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['protocol'];
    if (globalMy.is_log) {
        console.log('[*]  调用了URL_get_protocol,result => ', result)
    }
    return result;
}
globalMy.URL_set_protocol = function (val) {
    if (!(this instanceof URL)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['protocol'] = val;
    if (globalMy.is_log) {
        console.log('[*]  调用了URL_set_protocol, 传参val => ' + val + '  result => ', result)
    }
}
globalMy.URL_get_username = function () {
    if (!(this instanceof URL)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['username'];
    if (globalMy.is_log) {
        console.log('[*]  调用了URL_get_username,result => ', result)
    }
    return result;
}
globalMy.URL_set_username = function (val) {
    if (!(this instanceof URL)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['username'] = val;
    if (globalMy.is_log) {
        console.log('[*]  调用了URL_set_username, 传参val => ' + val + '  result => ', result)
    }
}
globalMy.URL_get_password = function () {
    if (!(this instanceof URL)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['password'];
    if (globalMy.is_log) {
        console.log('[*]  调用了URL_get_password,result => ', result)
    }
    return result;
}
globalMy.URL_set_password = function (val) {
    if (!(this instanceof URL)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['password'] = val;
    if (globalMy.is_log) {
        console.log('[*]  调用了URL_set_password, 传参val => ' + val + '  result => ', result)
    }
}
globalMy.URL_get_host = function () {
    if (!(this instanceof URL)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['host'];
    if (globalMy.is_log) {
        console.log('[*]  调用了URL_get_host,result => ', result)
    }
    return result;
}
globalMy.URL_set_host = function (val) {
    if (!(this instanceof URL)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['host'] = val;
    if (globalMy.is_log) {
        console.log('[*]  调用了URL_set_host, 传参val => ' + val + '  result => ', result)
    }
}
globalMy.URL_get_hostname = function () {
    if (!(this instanceof URL)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['hostname'];
    if (globalMy.is_log) {
        console.log('[*]  调用了URL_get_hostname,result => ', result)
    }
    return result;
}
globalMy.URL_set_hostname = function (val) {
    if (!(this instanceof URL)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['hostname'] = val;
    if (globalMy.is_log) {
        console.log('[*]  调用了URL_set_hostname, 传参val => ' + val + '  result => ', result)
    }
}
globalMy.URL_get_port = function () {
    if (!(this instanceof URL)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['port'];
    if (globalMy.is_log) {
        console.log('[*]  调用了URL_get_port,result => ', result)
    }
    return result;
}
globalMy.URL_set_port = function (val) {
    if (!(this instanceof URL)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['port'] = val;
    if (globalMy.is_log) {
        console.log('[*]  调用了URL_set_port, 传参val => ' + val + '  result => ', result)
    }
}
globalMy.URL_get_pathname = function () {
    if (!(this instanceof URL)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['pathname'];
    if (globalMy.is_log) {
        console.log('[*]  调用了URL_get_pathname,result => ', result)
    }
    return result;
}
globalMy.URL_set_pathname = function (val) {
    if (!(this instanceof URL)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['pathname'] = val;
    if (globalMy.is_log) {
        console.log('[*]  调用了URL_set_pathname, 传参val => ' + val + '  result => ', result)
    }
}
globalMy.URL_get_search = function () {
    if (!(this instanceof URL)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['search'];
    if (globalMy.is_log) {
        console.log('[*]  调用了URL_get_search,result => ', result)
    }
    return result;
}
globalMy.URL_set_search = function (val) {
    if (!(this instanceof URL)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['search'] = val;
    if (globalMy.is_log) {
        console.log('[*]  调用了URL_set_search, 传参val => ' + val + '  result => ', result)
    }
}
globalMy.URL_get_searchParams = function () {
    if (!(this instanceof URL)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['searchParams'];
    if (globalMy.is_log) {
        console.log('[*]  调用了URL_get_searchParams,result => ', result)
    }
    return result;
}
globalMy.URL_get_hash = function () {
    if (!(this instanceof URL)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['hash'];
    if (globalMy.is_log) {
        console.log('[*]  调用了URL_get_hash,result => ', result)
    }
    return result;
}
globalMy.URL_set_hash = function (val) {
    if (!(this instanceof URL)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['hash'] = val;
    if (globalMy.is_log) {
        console.log('[*]  调用了URL_set_hash, 传参val => ' + val + '  result => ', result)
    }
}
globalMy.URL_get_href = function () {
    if (!(this instanceof URL)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['href'];
    if (globalMy.is_log) {
        console.log('[*]  调用了URL_get_href,result => ', result)
    }
    return result;
}
globalMy.URL_set_href = function (val) {
    if (!(this instanceof URL)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['href'] = val;
    if (globalMy.is_log) {
        console.log('[*]  调用了URL_set_href, 传参val => ' + val + '  result => ', result)
    }
}
globalMy.URL_toJSON = function () {
    if (!(this instanceof URL)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了URL_toJSON, arguments => ', JSON.stringify(arguments), '  result => ', result)
    }
    return result;
}
globalMy.URL_toString = function () {
    if (!(this instanceof URL)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了URL_toString, arguments => ', JSON.stringify(arguments), '  result => ', result)
    }
    return result;
}
