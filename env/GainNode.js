globalMy.GainNode_get_gain = function () {
    if (!(this instanceof GainNode)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['gain'];
    if (globalMy.is_log) {
        console.log('[*]  调用了GainNode_get_gain,result => ', result)
    }
    return result;
}