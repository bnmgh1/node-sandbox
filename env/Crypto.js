globalMy.Crypto_getRandomValues = function () {
    if (!(this instanceof Crypto)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了Crypto_getRandomValues, arguments => ', JSON.stringify(arguments), '  result => ', result)
    }
    return result;
}
globalMy.Crypto_get_subtle = function () {
    if (!(this instanceof Crypto)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['subtle'];
    if (globalMy.is_log) {
        console.log('[*]  调用了Crypto_get_subtle,result => ', result)
    }
    return result;
}
globalMy.Crypto_randomUUID = function () {
    if (!(this instanceof Crypto)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了Crypto_randomUUID, arguments => ', JSON.stringify(arguments), '  result => ', result)
    }
    return result;
}