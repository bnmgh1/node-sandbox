globalMy.External_AddSearchProvider = function () {
    if (!(this instanceof External)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了External_AddSearchProvider, arguments => ', JSON.stringify(arguments), '  result => ', result)
    }
    return result;
}
globalMy.External_IsSearchProviderInstalled = function () {
    if (!(this instanceof External)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了External_IsSearchProviderInstalled, arguments => ', JSON.stringify(arguments), '  result => ', result)
    }
    return result;
}
globalMy.External_getHostEnvironmentValue = function () {
    if (!(this instanceof External)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了External_getHostEnvironmentValue, arguments => ', JSON.stringify(arguments), '  result => ', result)
    }
    return result;
}

// 谷歌没有最后那个方法