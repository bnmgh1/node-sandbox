// 函数实现, 对dump下来的函数进行覆盖. 怕到时候框架固定的写法会变, 所以实现的方法单独放在这个js里. 到时候好实现迁移

// isTrusted
globalMy.event_get_isTrusted = function () {
    if (!(this instanceof Event)) {
        throw new TypeError("Illegal invocation");
    }
    var result;
    var foundName = globalMy.foundEventName(this);
    result = globalMy.event_value[foundName]['isTrusted'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了event_get_isTrusted, result => ', '' + result);
    }
    return result;
}

// IDBRequest
globalMy.IDBRequest_get_result = function () {
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['result'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了IDBRequest_get_result,result => ', '' + result);
    }
    return result;
};

// IDBFactory
globalMy.IDBFactory_open = function () {
    var result;
    //这里写方法实体
    var name = globalMy.setfoundName({});
    Object.setPrototypeOf(globalMy.element[name], IDBOpenDBRequest.prototype);
    result = globalMy.element[name];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了IDBFactory_open, arguments => ', arguments, '  result => ', '' + result);
    }
    return result;
};

// IDBTransaction
globalMy.IDBTransaction_objectStore = function () {
    let result;
    var name = globalMy.setfoundName({});
    Object.setPrototypeOf(globalMy.element[name], IDBObjectStore.prototype);
    result = globalMy.element[name];
    if (globalMy.is_log) {
        console.log('[*]  调用了IDBTransaction_objectStore, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
    }
    return result;
};
globalMy.IDBTransaction_get_objectStoreNames = function () {
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['objectStoreNames'];
    if (globalMy.is_log) {
        console.log('[*]  调用了IDBTransaction_get_objectStoreNames,result => ', result);
    }
    return result;
};

// IDBObjectStore
globalMy.IDBObjectStore_put = function () {
    let result;
    var name = globalMy.setfoundName({});
    Object.setPrototypeOf(globalMy.element[name], IDBRequest.prototype);
    result = globalMy.element[name];
    if (globalMy.is_log) {
        console.log('[*]  调用了IDBObjectStore_put, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
    }
    return result;
};

// DOMTokenList
// globalMy.DOMTokenList_contains = function () {
//     let result;
//     //这里写方法实体
//     if (arguments[0] == "EkcP") result = true;
//
//     if (globalMy.is_log) {
//         console.log('[*]  调用了DOMTokenList_contains, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
//     }
//     return result;
// };


// Database
globalMy.Database_transaction = function () {
    let result;
    var name = globalMy.setfoundName({});
    Object.setPrototypeOf(globalMy.element[name], IDBTransaction.prototype);
    result = globalMy.element[name];
    if (globalMy.is_log) {
        console.log('[*]  调用了Database_transaction, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
    }
    return result;
};

// WebGLRenderingContext
globalMy.WebGLRenderingContext_getExtension = function (tagName) {
    var result;
    //这里写方法实体
    var o = {
        "ANGLE_instanced_arrays": "ANGLEInstancedArrays",
        "EXT_blend_minmax": "EXTBlendMinMax",
        "EXT_color_buffer_half_float": "EXTColorBufferHalfFloat",
        "EXT_disjoint_timer_query": "EXTDisjointTimerQuery",
        "EXT_float_blend": "EXTFloatBlend",
        "EXT_frag_depth": "EXTFragDepth",
        "EXT_shader_texture_lod": "EXTShaderTextureLOD",
        "EXT_texture_compression_bptc": "EXTTextureCompressionBPTC",
        "EXT_texture_compression_rgtc": "EXTTextureCompressionRGTC",
        "EXT_texture_filter_anisotropic": "EXTTextureFilterAnisotropic",
        "EXT_sRGB": "EXTsRGB",
        "KHR_parallel_shader_compile": "KHRParallelShaderCompile",
        "OES_element_index_uint": "OESElementIndexUint",
        "OES_fbo_render_mipmap": "OESFboRenderMipmap",
        "OES_standard_derivatives": "OESStandardDerivatives",
        "OES_texture_float": "OESTextureFloat",
        "OES_texture_float_linear": "OESTextureFloatLinear",
        "OES_texture_half_float": "OESTextureHalfFloat",
        "OES_texture_half_float_linear": "OESTextureHalfFloatLinear",
        "OES_vertex_array_object": "OESVertexArrayObject",
        "WEBGL_color_buffer_float": "WebGLColorBufferFloat",
        "WEBGL_compressed_texture_s3tc": "WebGLCompressedTextureS3TC",
        "WEBGL_compressed_texture_s3tc_srgb": "WebGLCompressedTextureS3TCsRGB",
        "WEBGL_debug_renderer_info": "WebGLDebugRendererInfo",
        "WEBGL_debug_shaders": "WebGLDebugShaders",
        "WEBGL_depth_texture": "WebGLDepthTexture",
        "WEBGL_draw_buffers": "WebGLDrawBuffers",
        "WEBGL_lose_context": "WebGLLoseContext",
        "WEBGL_multi_draw": "WebGLMultiDraw"
    };
    var prototype_name = o[tagName];
    if (!prototype_name) {
        result = null;
    } else {
        var name = globalMy.setfoundName({});
        result = globalMy.element[name];
        Object.setPrototypeOf(result, Utils[`${prototype_name}_prototype`]);
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了WebGLRenderingContext_getExtension, arguments => ', arguments, '  result => ', '' + result);
    }
    return result;
};
globalMy.WebGLRenderingContext_getSupportedExtensions = function () {
    var result;
    //这里写方法实体
    result = globalMy.memory.supportedExtensions;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了WebGLRenderingContext_getSupportedExtensions, arguments => ', arguments, '  result => ', '' + result);
    }
    return result;
};
globalMy.WebGLRenderingContext_getShaderPrecisionFormat = function (a, b) {
    var result;
    var name = globalMy.setfoundName({});
    Object.setPrototypeOf(globalMy.element[name], WebGLShaderPrecisionFormat.prototype);
    var r1 = {
        precision: 23,
        rangeMax: 127,
        rangeMin: 127
    };
    var r2 = {
        precision: 0,
        rangeMax: 30,
        rangeMin: 31
    };
    result = globalMy.element[name];
    // if (number2 === 36338 || number2 === 36337 || number2 === 36336) {
    //     webGLShaderPrecisionFormat = {
    //         precision: 23,
    //         rangeMax: 127,
    //         rangeMin: 127
    //     };
    // } else if (number2 === 36341 || number2 === 36340 || number2 === 36339) {
    //     webGLShaderPrecisionFormat = {
    //         precision: 0,
    //         rangeMax: 30,
    //         rangeMin: 31
    //     };
    // }
    if (a == 35633 && b == 36338) {
        globalMy.value[name] = r1;
        return result;
    }
    if (a == 35633 && b == 36337) {
        globalMy.value[name] = r1;
        return result;
    }
    if (a == 35633 && b == 36336) {
        globalMy.value[name] = r1;
        return result;
    }
    if (a == 35633 && b == 36341) {
        globalMy.value[name] = r2;
        return result;
    }
    if (a == 35633 && b == 36340) {
        globalMy.value[name] = r2;
        return result;
    }
    if (a == 35633 && b == 36339) {
        globalMy.value[name] = r2;
        return result;
    }
    if (a == 35632 && b == 36338) {
        globalMy.value[name] = r1;
        return result;
    }
    if (a == 35632 && b == 36337) {
        globalMy.value[name] = r1;
        return result;
    }
    if (a == 35632 && b == 36336) {
        globalMy.value[name] = r1;
        return result;
    }
    if (a == 35632 && b == 36341) {
        globalMy.value[name] = r2;
        return result;
    }
    if (a == 35632 && b == 36340) {
        globalMy.value[name] = r2;
        return result;
    }
    if (a == 35632 && b == 36339) {
        globalMy.value[name] = r2;
        return result;
    }
    debugger;
    //这里写方法实体
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了WebGLRenderingContext_getShaderPrecisionFormat, arguments => ', arguments, '  result => ' + webGLShaderPrecisionFormat);
    }
    return result;
};
globalMy.WebGLRenderingContext_getParameter = function () {
    let key = arguments[0];
    var result;
    //这里写方法实体
    if (key == 37445) {
        result = "Google Inc. (NVIDIA)";
    }
    if (key == 37446) {
        result = "ANGLE (NVIDIA, NVIDIA GeForce GTX 1050 Ti Direct3D11 vs_5_0 ps_5_0, D3D11-27.21.14.5671)";
    }
    if (key == 33902) {
        result = new Float32Array([1, 1]);
    }
    if (key == 33901) {
        result = new Float32Array([1, 1024]);
    }
    if (key == 35661) {
        result = 32;
    }
    if (key == 34047) {
        result = 16;
    }
    if (key == 34076) {
        result = 16384;
    }
    if (key == 36349) {
        result = 1024;
    }
    if (key == 34024) {
        result = 16384;
    }
    if (key == 34930) {
        result = 16;
    }
    if (key == 3379) {
        result = 16384;
    }
    if (key == 36348) {
        result = 30;
    }
    if (key == 34921) {
        result = 16;
    }
    if (key == 35660) {
        result = 16;
    }
    if (key == 36347) {
        result = 4095;
    }
    if (key == 3386) {
        result = new Int32Array([32767, 32767]);
    }
    if (key == 3410) {
        result = 8;
    }
    if (key == 7937) {
        result = "WebKit WebGL";
    }
    if (key == 35724) {
        result = "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)";
    }
    if (key == 3415) {
        result = 0;
    }
    if (key == 7936) {
        result = "WebKit";
    }
    if (key == 7938) {
        result = "WebGL 1.0 (OpenGL ES 2.0 Chromium)";
    }
    if (key == 3411) {
        result = 8;
    }
    if (key == 3412) {
        result = 8;
    }
    if (key == 3413) {
        result = 8;
    }
    if (key == 3414) {
        result = 24;
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了WebGLRenderingContext_getParameter, arguments => ', arguments, '  result => ', '' + result);
    }
    return result;
};
globalMy.WebGLRenderingContext_createBuffer = function () {
    var result;
    //这里写方法实体
    var name = globalMy.setfoundName({});
    Object.setPrototypeOf(globalMy.element[name], WebGLBuffer.prototype);
    result = globalMy.element[name];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了WebGLRenderingContext_createBuffer, arguments => ', arguments, '  result => ', '' + result);
    }
    return result;
};
globalMy.WebGLRenderingContext_createProgram = function () {
    var result;
    //这里写方法实体
    var name = globalMy.setfoundName({});
    Object.setPrototypeOf(globalMy.element[name], WebGLProgram.prototype);
    result = globalMy.element[name];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了WebGLRenderingContext_createProgram, arguments => ', arguments, '  result => ', '' + result);
    }
    return result;
};
globalMy.WebGLRenderingContext_createShader = function () {
    var result;
    //这里写方法实体
    var name = globalMy.setfoundName({});
    Object.setPrototypeOf(globalMy.element[name], WebGLShader.prototype);
    result = globalMy.element[name];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了WebGLRenderingContext_createShader, arguments => ', arguments, '  result => ', '' + result);
    }
    return result;
};
globalMy.WebGLRenderingContext_getAttribLocation = function () {
    var result;
    //这里写方法实体
    result = 0;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了WebGLRenderingContext_getAttribLocation, arguments => ', arguments, '  result => ', '' + result);
    }
    return result;
};
globalMy.WebGLRenderingContext_getUniformLocation = function () {
    var result;
    //这里写方法实体
    var name = globalMy.setfoundName({});
    Object.setPrototypeOf(globalMy.element[name], WebGLUniformLocation.prototype);
    result = globalMy.element[name];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了WebGLRenderingContext_getUniformLocation, arguments => ', arguments, '  result => ', '' + result);
    }
    return result;
};
globalMy.WebGLRenderingContext_getContextAttributes = function () {
    if (!(this instanceof WebGLRenderingContext)) {
        throw new TypeError("Illegal invocation");
    }
    var result;
    //这里写方法实体
    result = {
        "alpha": true,
        "antialias": true,
        "depth": true,
        "desynchronized": false,
        "failIfMajorPerformanceCaveat": false,
        "powerPreference": "default",
        "premultipliedAlpha": true,
        "preserveDrawingBuffer": false,
        "stencil": false,
        "xrCompatible": false
    };
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了WebGLRenderingContext_getContextAttributes, arguments => ', arguments, '  result => ', '' + result);
    }
    return result;
};

// WebGL2RenderingContext
globalMy.WebGL2RenderingContext_createShader = function () {
    if (!(this instanceof WebGL2RenderingContext)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    //这里写方法实体
    var name = globalMy.setfoundName({});
    Object.setPrototypeOf(globalMy.element[name], WebGLShader.prototype);
    result = globalMy.element[name];
    if (globalMy.is_log) {
        console.log('[*]  调用了WebGL2RenderingContext_createShader, arguments => ', JSON.stringify(arguments), '  result => ', result)
    }
    return result;
}
// Navigator
globalMy.Navigator_getBattery = function () {
    if (!(this instanceof Navigator)) {
        throw new TypeError("Illegal invocation");
    }
    //这里写方法实体
    delete Navigator.prototype.getBattery;
    let result = new Promise((resolve, reject) => {
        var arg = {};
        Object.setPrototypeOf(arg, BatteryManager.prototype);
        var name = globalMy.setfoundName(arg);
        globalMy.value[name]['charging'] = true;
        globalMy.value[name]['chargingTime'] = 0;
        globalMy.value[name]['dischargingTime'] = Infinity;
        globalMy.value[name]['level'] = 1;
        resolve(arg);
    });
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Navigator_getBattery, arguments => ', arguments, '  result => ', '' + result);
    }
    return result;
};

// EventTarget
globalMy.EventTarget_addEventListener = function () {
    if (!(this instanceof EventTarget)) {
        throw new TypeError("Illegal invocation");
    }
    var result;
    let type = arguments[0];
    let callback = arguments[1];
    //这里写方法实体
    if (!(type in globalMy.memory.listeners)) {
        globalMy.memory.listeners[type] = [];
    }
    globalMy.memory.listeners[type].push(callback);
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了EventTarget_addEventListener, arguments => ', arguments, ", 调用者 ->", this + '');
    }
    return result;
};
globalMy.EventTarget_dispatchEvent = function () {
    if (!(this instanceof EventTarget)) {
        throw new TypeError("Illegal invocation");
    }
    var result = true;
    //这里写方法实体
    let event = arguments[0];
    let type = event.type;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了EventTarget_dispatchEvent, arguments => ', arguments, ", type =>", type);
    }
    if (!(type in globalMy.memory.listeners)) {

    } else {
        var stack = globalMy.memory.listeners[type];
        for (var i = 0, l = stack.length; i < l; i++) {
            stack[i].call(this, event);
        }
    }

    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了EventTarget_dispatchEvent, result => ', result);
    }
    return result;
};
globalMy.EventTarget_removeEventListener = function () {
    if (!(this instanceof EventTarget)) {
        throw new TypeError("Illegal invocation");
    }
    var result;
    let type = arguments[0];
    let callback = arguments[1];
    //这里写方法实体
    if (!(type in globalMy.memory.listeners)) {
        return;
    }
    var stack = globalMy.memory.listeners[type];
    for (var i = 0, l = stack.length; i < l; i++) {
        if (stack[i] === callback) {
            stack.splice(i, 1);
            return this.removeEventListener(type, callback);
        }
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了EventTarget_removeEventListener, arguments => ', arguments, '  result => ', '' + result);
    }
    return result;
};

// HTMLCanvasElement
globalMy.HTMLCanvasElement_getContext = function (tag_name) {
    // debugger;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLCanvasElement_getContext, arguments => ', arguments);
    }
    var result;
    //这里写方法实体
    tag_name = tag_name.toLowerCase();
    var name = globalMy.foundName(this);
    if (tag_name == "webgl" || tag_name == "experimental-webgl") {
        globalMy.value[name]['toDataURL'] = globalMy.memory.canvas_webgl_fingerprint;
        var webGLRenderingContext = {};
        Object.setPrototypeOf(webGLRenderingContext, WebGLRenderingContext.prototype);
        name = globalMy.setfoundName(webGLRenderingContext);
        globalMy.value[name]['drawingBufferColorSpace'] = 'srgb';
        globalMy.value[name]['unpackColorSpace'] = 'srgb';
        globalMy.value[name]["canvas"] = this;
        globalMy.value[name]["drawingBufferHeight"] = 150;
        globalMy.value[name]["drawingBufferWidth"] = 300;
        result = webGLRenderingContext;
    } else if (tag_name == "2d") {
        var this_ = globalMy.jsdom_element[name];
        result = this_.getContext.apply(this_, arguments);
        name = globalMy.setfoundName({});
        globalMy.jsdom_element[name] = result;
        Object.setPrototypeOf(globalMy.element[name], CanvasRenderingContext2D.prototype);
        result = globalMy.element[name];
    } else if (tag_name == "webgl2") {
        var webGL2RenderingContext = {};
        Object.setPrototypeOf(webGL2RenderingContext, WebGL2RenderingContext.prototype);
        name = globalMy.setfoundName(webGL2RenderingContext);
        globalMy.value[name]['drawingBufferColorSpace'] = 'srgb';
        globalMy.value[name]['unpackColorSpace'] = 'srgb';
        globalMy.value[name]["canvas"] = this;
        globalMy.value[name]["drawingBufferHeight"] = 150;
        globalMy.value[name]["drawingBufferWidth"] = 300;
        result = webGL2RenderingContext;
    } else {
        debugger;
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLCanvasElement_getContext', ' result => ', '' + result);
    }
    return result;
};
globalMy.HTMLCanvasElement_toDataURL = function () {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLCanvasElement_toDataURL, arguments => ', arguments);
    }
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    // 判断是不是webgl的canvas获取图片
    result = globalMy.value[name]["toDataURL"];
    if (!result) {
        var this_ = globalMy.jsdom_element[name];
        result = this_.toDataURL.apply(this_, arguments);
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLCanvasElement_toDataURL ' + '  result => ', '' + result);
    }
    return result;
};

// CanvasRenderingContext2D
globalMy.CanvasRenderingContext2D_set_fillStyle = function (val) {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_fillStyle, 传参val => ' + val);
    }
    var result;
    var foundName = globalMy.foundName(this);
    if (val == undefined || val == null) {
        globalMy.jsdom_element[foundName]['fillStyle'] = val;
    } else {
        switch (typeof val) {
            case "string":
                globalMy.jsdom_element[foundName]['fillStyle'] = val;
                break;
            case "object":
                var name = globalMy.foundName(val);
                globalMy.jsdom_element[foundName]['fillStyle'] = globalMy.jsdom_element[name];
                break;
        }
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_fillStyle' + '  result => ', '' + result);
    }
};
globalMy.CanvasRenderingContext2D_createRadialGradient = function () {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了CanvasRenderingContext2D_createRadialGradient, arguments => ', arguments);
    }
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    result = this_.createRadialGradient.apply(this_, arguments);
    if (result == undefined || result == null) {
    } else {
        name = globalMy.foundJsdomName(result, "CanvasGradient");
        Object.setPrototypeOf(globalMy.element[name], CanvasGradient.prototype);
        result = globalMy.element[name];
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了CanvasRenderingContext2D_createRadialGradient ' + '  result => ', '' + result);
    }
    return result;
};
globalMy.CanvasRenderingContext2D_measureText = function () {
    if (!(this instanceof CanvasRenderingContext2D)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了CanvasRenderingContext2D_measureText, arguments => ', arguments);
    }
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    result = this_.measureText.apply(this_, arguments);
    if (result == undefined || result == null) {
    } else {
        var textMetrics = {};
        Object.setPrototypeOf(textMetrics, TextMetrics.prototype);
        var result_name = globalMy.setfoundName(textMetrics);
        for (var i in result) {
            globalMy.value[result_name][i] = result[i];
        }
        result = textMetrics;
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了CanvasRenderingContext2D_measureText ' + '  result => ', '' + result);
    }
    return result;
};
globalMy.CanvasRenderingContext2D_createLinearGradient = function () {
    if (!(this instanceof CanvasRenderingContext2D)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了CanvasRenderingContext2D_createLinearGradient, arguments => ', arguments);
    }
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    result = this_.createLinearGradient.apply(this_, arguments);
    if (result == undefined || result == null) {
    } else {
        var result_name = globalMy.foundJsdomName(result, "CanvasGradient");
        result = globalMy.element[result_name];
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了CanvasRenderingContext2D_createLinearGradient ' + '  result => ', '' + result);
    }
    return result;
};
globalMy.CanvasRenderingContext2D_set_strokeStyle = function (val) {
    if (!(this instanceof CanvasRenderingContext2D)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_strokeStyle, 传参val => ' + val);
    }
    var result;
    var foundName = globalMy.foundName(this);
    if (val == undefined || val == null || typeof val == "string") {
        globalMy.jsdom_element[foundName]['strokeStyle'] = val;
    } else {
        var name = globalMy.foundName(val);
        globalMy.jsdom_element[foundName]['strokeStyle'] = globalMy.jsdom_element[name];
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了CanvasRenderingContext2D_set_strokeStyle' + '  result => ', '' + result);
    }
};
globalMy.CanvasRenderingContext2D_getImageData = function () {
    if (!(this instanceof CanvasRenderingContext2D)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了CanvasRenderingContext2D_getImageData, arguments => ', arguments);
    }
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    result = this_.getImageData.apply(this_, arguments);
    if (result == undefined || result == null) {
    } else {
        var result_name = globalMy.foundJsdomName(result, "ImageData");
        result = globalMy.element[result_name];
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了CanvasRenderingContext2D_getImageData ' + '  result => ', '' + result);
    }
    return result;
};
globalMy.CanvasRenderingContext2D_fillText = function () {
    if (!(this instanceof CanvasRenderingContext2D)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了CanvasRenderingContext2D_fillText, arguments => ', arguments);
    }
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    if (arguments[0] == '🏴󠁧󠁢󠁥󠁮󠁧󠁿') {
        debugger;
        arguments[0] = '';
    }
    result = this_.fillText.apply(this_, arguments);
    if (result == undefined || result == null) {
    } else {
        switch (typeof result) {
            case "object":
                debugger;
                break;
            case "function":
                debugger;
                break;
            default:
                break;
        }
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了CanvasRenderingContext2D_fillText ' + '  result => ', '' + result);
    }
    return result;
};

// CharacterData 感觉有问题
globalMy.CharacterData_get_previousElementSibling = function () {
    var result;
    result = globalMy.Element_get_previousElementSibling.apply(this, arguments);
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了CharacterData_get_previousElementSibling,result => ', '' + result);
    }
    return result;
};
globalMy.CharacterData_get_nextElementSibling = function () {
    var result;
    result = globalMy.Element_get_nextElementSibling.apply(this, arguments);
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了CharacterData_get_nextElementSibling,result => ', '' + result);
    }
    return result;
};

// NavigatorUAData
globalMy.NavigatorUAData_getHighEntropyValues = function () {
    var result;
    result = new Promise((resolve, reject) => {
        let arg = {
            "architecture": "x86",
            "bitness": "64",
            "brands": [{
                "brand": "Chromium",
                "version": "106"
            }, {
                "brand": "Google Chrome",
                "version": "106"
            }, {
                "brand": "Not;A=Brand",
                "version": "99"
            }],
            "mobile": false,
            "model": "",
            "platform": "Windows",
            "platformVersion": "10.0.0",
            "uaFullVersion": "106.0.5249.91"
        };
        resolve(arg);
    });
    //这里写方法实体
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了NavigatorUAData_getHighEntropyValues, arguments => ', arguments, '  result => ', '' + result);
    }
    return result;
};

// XMLHttpRequest
globalMy.XMLHttpRequest_open = function () {
    var result;
    //这里写方法实体
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['readyState'] = 1;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了XMLHttpRequest_open, arguments => ' + arguments[0] + " , " + arguments[1] + '  result => ', '' + result);
    }
    return result;
};
globalMy.XMLHttpRequest_send = function () {
    var result;
    //这里写方法实体
    var foundName = globalMy.foundName(this);
    var this_ = this;

    setTimeout(function () {
        globalMy.value[foundName]['readyState'] = 2;
        this_.onreadystatechange();
    }, 0);
    setTimeout(function () {
        globalMy.value[foundName]['readyState'] = 3;
        this_.onreadystatechange();
    }, 0);
    setTimeout(function () {
        globalMy.value[foundName]['responseText'] = "{\"tn\":\"T2gAUWfFYei6qQeIehIPRVtmA7yUjyIA12vsB0muboEYBq1vwf9I0-wQYCuBSGiEtPA=\",\"id\":\"GD0203180ACE20CCE2FB62694D91B73E3A58F0B026588623A1D\"}";
        globalMy.value[foundName]['response'] = "{\"tn\":\"T2gAUWfFYei6qQeIehIPRVtmA7yUjyIA12vsB0muboEYBq1vwf9I0-wQYCuBSGiEtPA=\",\"id\":\"GD0203180ACE20CCE2FB62694D91B73E3A58F0B026588623A1D\"}";
        globalMy.value[foundName]['readyState'] = 4;
        this_.onreadystatechange();
    }, 0);
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了XMLHttpRequest_send, arguments => ' + arguments[0] + " , " + arguments[1] + '  result => ', '' + result);
    }
    return result;
};


// Storage
globalMy.Storage_getItem = function () {
    var result;
    var tagName = arguments[0];
    //这里写方法实体
    result = this[tagName + ''];
    if (result == undefined) {
        result = null;
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Storage_getItem, arguments => ' + tagName + '  result => ', '' + result);
    }
    return result;
};
globalMy.Storage_key = function (index) {
    var result = Object.keys(this)[index];
    //这里写方法实体
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Storage_key, arguments => ', arguments, '  result => ', '' + result);
    }
    return result;
};
globalMy.Storage_removeItem = function () {
    var result;
    //这里写方法实体
    let tagName = arguments[0] + '';
    delete this[tagName];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Storage_removeItem, arguments => ' + tagName + '  result => ', '' + result);
    }
    return result;
};
globalMy.Storage_setItem = function () {
    var result;
    //这里写方法实体
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName].length += 1;
    let tagName = arguments[0];
    let val = arguments[1];
    this[tagName + ''] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Storage_setItem, arguments => ' + tagName + " , " + val + '  result => ', '' + result);
    }
    return result;
};
globalMy.Storage_get_length = function () {
    var result;
    var foundName = globalMy.foundName(this);
    var keys = Object.keys(this);
    result = keys.length;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Storage_get_length,result => ', '' + result);
    }
    return result;
};

// SpeechSynthesis
globalMy.SpeechSynthesis_getVoices = function () {
    var result;
    //这里写方法实体
    let track = [];
    let p = {};
    let obj_name;
    Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
    obj_name = globalMy.setfoundName(p);
    globalMy.value[obj_name].voiceURI = 'Microsoft Huihui - Chinese (Simplified, PRC)';
    globalMy.value[obj_name].name = 'Microsoft Huihui - Chinese (Simplified, PRC)';
    globalMy.value[obj_name].lang = 'zh-CN';
    globalMy.value[obj_name].localService = true;
    globalMy.value[obj_name].default = true;
    track.push(p);
    p = {};
    Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
    obj_name = globalMy.setfoundName(p);
    globalMy.value[obj_name].voiceURI = 'Microsoft Kangkang - Chinese (Simplified, PRC)';
    globalMy.value[obj_name].name = 'Microsoft Kangkang - Chinese (Simplified, PRC)';
    globalMy.value[obj_name].lang = 'zh-CN';
    globalMy.value[obj_name].localService = true;
    globalMy.value[obj_name].default = false;
    track.push(p);
    p = {};
    Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
    obj_name = globalMy.setfoundName(p);
    globalMy.value[obj_name].voiceURI = 'Microsoft Yaoyao - Chinese (Simplified, PRC)';
    globalMy.value[obj_name].name = 'Microsoft Yaoyao - Chinese (Simplified, PRC)';
    globalMy.value[obj_name].lang = 'zh-CN';
    globalMy.value[obj_name].localService = true;
    globalMy.value[obj_name].default = false;
    track.push(p);
    p = {};
    Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
    obj_name = globalMy.setfoundName(p);
    globalMy.value[obj_name].voiceURI = 'Google Deutsch';
    globalMy.value[obj_name].name = 'Google Deutsch';
    globalMy.value[obj_name].lang = 'de-DE';
    globalMy.value[obj_name].localService = false;
    globalMy.value[obj_name].default = false;
    track.push(p);
    p = {};
    Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
    obj_name = globalMy.setfoundName(p);
    globalMy.value[obj_name].voiceURI = 'Google US English';
    globalMy.value[obj_name].name = 'Google US English';
    globalMy.value[obj_name].lang = 'en-US';
    globalMy.value[obj_name].localService = false;
    globalMy.value[obj_name].default = false;
    track.push(p);
    p = {};
    Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
    obj_name = globalMy.setfoundName(p);
    globalMy.value[obj_name].voiceURI = 'Google UK English Female';
    globalMy.value[obj_name].name = 'Google UK English Female';
    globalMy.value[obj_name].lang = 'en-GB';
    globalMy.value[obj_name].localService = false;
    globalMy.value[obj_name].default = false;
    track.push(p);
    p = {};
    Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
    obj_name = globalMy.setfoundName(p);
    globalMy.value[obj_name].voiceURI = 'Google UK English Male';
    globalMy.value[obj_name].name = 'Google UK English Male';
    globalMy.value[obj_name].lang = 'en-GB';
    globalMy.value[obj_name].localService = false;
    globalMy.value[obj_name].default = false;
    track.push(p);
    p = {};
    Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
    obj_name = globalMy.setfoundName(p);
    globalMy.value[obj_name].voiceURI = 'Google español';
    globalMy.value[obj_name].name = 'Google español';
    globalMy.value[obj_name].lang = 'es-ES';
    globalMy.value[obj_name].localService = false;
    globalMy.value[obj_name].default = false;
    track.push(p);
    p = {};
    Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
    obj_name = globalMy.setfoundName(p);
    globalMy.value[obj_name].voiceURI = 'Google español de Estados Unidos';
    globalMy.value[obj_name].name = 'Google español de Estados Unidos';
    globalMy.value[obj_name].lang = 'es-US';
    globalMy.value[obj_name].localService = false;
    globalMy.value[obj_name].default = false;
    track.push(p);
    p = {};
    Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
    obj_name = globalMy.setfoundName(p);
    globalMy.value[obj_name].voiceURI = 'Google français';
    globalMy.value[obj_name].name = 'Google français';
    globalMy.value[obj_name].lang = 'fr-FR';
    globalMy.value[obj_name].localService = false;
    globalMy.value[obj_name].default = false;
    track.push(p);
    p = {};
    Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
    obj_name = globalMy.setfoundName(p);
    globalMy.value[obj_name].voiceURI = 'Google हिन्दी';
    globalMy.value[obj_name].name = 'Google हिन्दी';
    globalMy.value[obj_name].lang = 'hi-IN';
    globalMy.value[obj_name].localService = false;
    globalMy.value[obj_name].default = false;
    track.push(p);
    p = {};
    Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
    obj_name = globalMy.setfoundName(p);
    globalMy.value[obj_name].voiceURI = 'Google Bahasa Indonesia';
    globalMy.value[obj_name].name = 'Google Bahasa Indonesia';
    globalMy.value[obj_name].lang = 'id-ID';
    globalMy.value[obj_name].localService = false;
    globalMy.value[obj_name].default = false;
    track.push(p);
    p = {};
    Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
    obj_name = globalMy.setfoundName(p);
    globalMy.value[obj_name].voiceURI = 'Google italiano';
    globalMy.value[obj_name].name = 'Google italiano';
    globalMy.value[obj_name].lang = 'it-IT';
    globalMy.value[obj_name].localService = false;
    globalMy.value[obj_name].default = false;
    track.push(p);
    p = {};
    Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
    obj_name = globalMy.setfoundName(p);
    globalMy.value[obj_name].voiceURI = 'Google 日本語';
    globalMy.value[obj_name].name = 'Google 日本語';
    globalMy.value[obj_name].lang = 'ja-JP';
    globalMy.value[obj_name].localService = false;
    globalMy.value[obj_name].default = false;
    track.push(p);
    p = {};
    Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
    obj_name = globalMy.setfoundName(p);
    globalMy.value[obj_name].voiceURI = 'Google 한국의';
    globalMy.value[obj_name].name = 'Google 한국의';
    globalMy.value[obj_name].lang = 'ko-KR';
    globalMy.value[obj_name].localService = false;
    globalMy.value[obj_name].default = false;
    track.push(p);
    p = {};
    Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
    obj_name = globalMy.setfoundName(p);
    globalMy.value[obj_name].voiceURI = 'Google Nederlands';
    globalMy.value[obj_name].name = 'Google Nederlands';
    globalMy.value[obj_name].lang = 'nl-NL';
    globalMy.value[obj_name].localService = false;
    globalMy.value[obj_name].default = false;
    track.push(p);
    p = {};
    Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
    obj_name = globalMy.setfoundName(p);
    globalMy.value[obj_name].voiceURI = 'Google polski';
    globalMy.value[obj_name].name = 'Google polski';
    globalMy.value[obj_name].lang = 'pl-PL';
    globalMy.value[obj_name].localService = false;
    globalMy.value[obj_name].default = false;
    track.push(p);
    p = {};
    Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
    obj_name = globalMy.setfoundName(p);
    globalMy.value[obj_name].voiceURI = 'Google português do Brasil';
    globalMy.value[obj_name].name = 'Google português do Brasil';
    globalMy.value[obj_name].lang = 'pt-BR';
    globalMy.value[obj_name].localService = false;
    globalMy.value[obj_name].default = false;
    track.push(p);
    p = {};
    Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
    obj_name = globalMy.setfoundName(p);
    globalMy.value[obj_name].voiceURI = 'Google русский';
    globalMy.value[obj_name].name = 'Google русский';
    globalMy.value[obj_name].lang = 'ru-RU';
    globalMy.value[obj_name].localService = false;
    globalMy.value[obj_name].default = false;
    track.push(p);
    p = {};
    Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
    obj_name = globalMy.setfoundName(p);
    globalMy.value[obj_name].voiceURI = 'Google 普通话（中国大陆）';
    globalMy.value[obj_name].name = 'Google 普通话（中国大陆）';
    globalMy.value[obj_name].lang = 'zh-CN';
    globalMy.value[obj_name].localService = false;
    globalMy.value[obj_name].default = false;
    track.push(p);
    p = {};
    Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
    obj_name = globalMy.setfoundName(p);
    globalMy.value[obj_name].voiceURI = 'Google 粤語（香港）';
    globalMy.value[obj_name].name = 'Google 粤語（香港）';
    globalMy.value[obj_name].lang = 'zh-HK';
    globalMy.value[obj_name].localService = false;
    globalMy.value[obj_name].default = false;
    track.push(p);
    p = {};
    Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
    obj_name = globalMy.setfoundName(p);
    globalMy.value[obj_name].voiceURI = 'Google 國語（臺灣）';
    globalMy.value[obj_name].name = 'Google 國語（臺灣）';
    globalMy.value[obj_name].lang = 'zh-TW';
    globalMy.value[obj_name].localService = false;
    globalMy.value[obj_name].default = false;
    track.push(p);
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了globalMy.SpeechSynthesis_getVoices, arguments => ', arguments, '  result => ' + track);
    }
    return track;
};

// PluginArray
globalMy.PluginArray_item = function () {
    var result;
    //这里写方法实体
    let i = arguments[0] % 4294967296;
    result = this[i];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了PluginArray_item, arguments => ' + i + '  result => ', '' + result);
    }
    return result;
};
globalMy.PluginArray_namedItem = function (key) {
    var result;
    //这里写方法实体
    result = this[key];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了PluginArray_namedItem, arguments => ', arguments, '  result => ', '' + result);
    }
    return result;
};
globalMy.PluginArray_get_length = function () {
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['length'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了PluginArray_get_length,result => ', '' + result);
    }
    // return 3;
    return result;
};

// Plugin
globalMy.Plugin_item = function () {
    var result;
    //这里写方法实体
    result = this[arguments[0]];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Plugin_item, arguments => ', arguments, '  result => ', '' + result);
    }
    return result;
};

// Element
globalMy.Element_get_children = function () {
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    result = this_.children;
    name = globalMy.foundJsdomName(result);
    var children = globalMy.element[name];
    var old_length = !globalMy.value[name].length ? 0 : globalMy.value[name].length;
    var length = result.length;
    globalMy.value[name].length = length;
    if (result == undefined || result == null) {
    } else {
        for (var i = 0; i < length; i++) {
            name = globalMy.foundJsdomName(result[i]);
            children[i] = globalMy.element[name];
        }
        for (; old_length > length; old_length--) {
            delete children[old_length - 1];
        }
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Element_get_children,result => ', '' + children);
    }
    return children;
};
globalMy.Element_get_firstElementChild = function () {
    var result;
    var foundName = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[foundName];
    result = this_.firstElementChild;
    if (result == null || result == undefined) {
    } else {
        var name = globalMy.foundJsdomName(result);
        var construct = result.__proto__[Symbol.toStringTag];
        Object.setPrototypeOf(globalMy.element[name], window[construct].prototype);
        result = globalMy.element[name];
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Element_get_firstElementChild,result => ', '' + result);
    }
    return result;
};
globalMy.Element_get_lastElementChild = function () {
    var result;
    var foundName = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[foundName];
    result = this_.lastElementChild;
    if (result == null || result == undefined) {
    } else {
        var name = globalMy.foundJsdomName(result);
        var construct = result.__proto__[Symbol.toStringTag];
        Object.setPrototypeOf(globalMy.element[name], window[construct].prototype);
        result = globalMy.element[name];
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Element_get_lastElementChild ,result => ', '' + result);
    }
    return result;
};
globalMy.Element_get_previousElementSibling = function () {
    var result;
    var foundName = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[foundName];
    result = this_.previousElementSibling;
    if (result == null || result == undefined) {
    } else {
        var name = globalMy.foundJsdomName(result);
        var construct = result.__proto__[Symbol.toStringTag];
        Object.setPrototypeOf(globalMy.element[name], window[construct].prototype);
        result = globalMy.element[name];
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Element_get_previousElementSibling,result => ', '' + result);
    }
    return result;
};
globalMy.Element_get_nextElementSibling = function () {
    var result;
    var foundName = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[foundName];
    result = this_.nextElementSibling;
    if (result == null || result == undefined) {
    } else {
        var name = globalMy.foundJsdomName(result);
        var construct = result.__proto__[Symbol.toStringTag];
        Object.setPrototypeOf(globalMy.element[name], window[construct].prototype);
        result = globalMy.element[name];
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Element_get_nextElementSibling,result => ', '' + result);
    }
    return result;
};
globalMy.Element_getBoundingClientRect = function () {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Element_getBoundingClientRect, arguments => ', arguments);
    }
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    result = this_.getBoundingClientRect.apply(this_, arguments);
    if (result == undefined || result == null) {
    } else {
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Element_getBoundingClientRect ' + '  result => ', result);
    }
    return result;
};
globalMy.Element_set_innerHTML = function (val) {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Element_set_innerHTML, 传参val => ' + val);
    }
    var result;
    var foundName = globalMy.foundName(this);
    globalMy.jsdom_element[foundName]['innerHTML'] = val;

    // var jsdom_tree = globalMy.getJsdomTree(globalMy.jsdom_element[foundName]);
    // var length = jsdom_tree.length;
    // for (var i = 1; i < length; i++) {
    //     var construct = jsdom_tree[i].__proto__[Symbol.toStringTag];
    //     var name = globalMy.setfoundName({});
    //     Object.setPrototypeOf(globalMy.element[name], window[construct].prototype);
    //     globalMy.jsdom_element[name] = jsdom_tree[i];
    // }

    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Element_set_innerHTML' + '  result => ', '' + result);
    }
};
globalMy.Element_getElementsByTagName = function () {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Element_getElementsByTagName, arguments => ', arguments);
    }
    //这里写方法实体
    let tagName = arguments[0];
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    result = this_.getElementsByTagName.apply(this_, arguments);
    var htmlCollection = {};
    Object.setPrototypeOf(htmlCollection, HTMLCollection.prototype);
    var result_name = globalMy.setfoundName(htmlCollection);
    globalMy.value[result_name].length = result.length;
    if (result == undefined || result == null) {
    } else {
        for (var i = 0; i < globalMy.value[result_name].length; i++) {
            name = globalMy.foundJsdomName(result[i]);
            htmlCollection[i] = globalMy.element[name];
        }
        result = htmlCollection;
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Element_getElementsByTagName ' + '  result => ', '' + result);
    }
    return result;
};
globalMy.Element_get_classList = function () {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Element_get_classList');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['classList'];
    if (result != null && result != undefined) {
        var name = globalMy.foundJsdomName(result);
        Object.setPrototypeOf(globalMy.element[name], DOMTokenList.prototype);
        result = globalMy.element[name];
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Element_get_classList, result => ', '' + result);
    }
    return result;
};

// Node
globalMy.Node_get_firstChild = function () {
    var result;
    var foundName = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[foundName];
    result = this_.firstChild;
    if (result == null || result == undefined) {
    } else {
        var name = globalMy.foundJsdomName(result);
        var construct = result.__proto__[Symbol.toStringTag];
        Object.setPrototypeOf(globalMy.element[name], window[construct].prototype);
        result = globalMy.element[name];
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Node_get_firstChild,result => ', '' + result);
    }
    return result;
};
globalMy.Node_get_lastChild = function () {
    var result;
    var foundName = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[foundName];
    result = this_.lastChild;
    if (result == null || result == undefined) {
    } else {
        var name = globalMy.foundJsdomName(result);
        var construct = result.__proto__[Symbol.toStringTag];
        Object.setPrototypeOf(globalMy.element[name], window[construct].prototype);
        result = globalMy.element[name];
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Node_get_lastChild,result => ', '' + result);
    }
    return result;
};
globalMy.Node_get_previousSibling = function () {
    var result;
    var foundName = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[foundName];
    result = this_.previousSibling;
    if (result == null || result == undefined) {
    } else {
        var name = globalMy.foundJsdomName(result);
        var construct = result.__proto__[Symbol.toStringTag];
        Object.setPrototypeOf(globalMy.element[name], window[construct].prototype);
        result = globalMy.element[name];
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Node_get_previousSibling,result => ', '' + result);
    }
    return result;
};
globalMy.Node_get_nextSibling = function () {
    var result;
    var foundName = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[foundName];
    result = this_.nextSibling;
    if (result == null || result == undefined) {
    } else {
        var name = globalMy.foundJsdomName(result);
        var construct = result.__proto__[Symbol.toStringTag];
        Object.setPrototypeOf(globalMy.element[name], window[construct].prototype);
        result = globalMy.element[name];
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Node_get_nextSibling,result => ', '' + result);
    }
    return result;
};
globalMy.Node_appendChild = function () {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Node_appendChild, arguments => ', arguments);
    }
    globalMy.tree_is_change = true;
    var result;
    var parent_foundName = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[parent_foundName];
    var child_foundName = globalMy.foundName(arguments[0]);
    var child_ = globalMy.jsdom_element[child_foundName];
    result = this_.appendChild(child_);
    //这里写方法实体

    var construct = result.__proto__[Symbol.toStringTag];
    var name = globalMy.foundJsdomName(result);
    Object.setPrototypeOf(globalMy.element[name], window[construct].prototype);
    result = globalMy.element[name];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Node_appendChild  ', '  result => ', '' + result);
    }
    return result;
};
globalMy.Node_removeChild = function () {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Node_removeChild, arguments => ', arguments);
    }
    globalMy.tree_is_change = true;
    var result;
    var parent_foundName = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[parent_foundName];
    var child_foundName = globalMy.foundName(arguments[0]);
    var child_ = globalMy.jsdom_element[child_foundName];
    result = this_.removeChild(child_);
    var construct = result.__proto__[Symbol.toStringTag];
    var name = globalMy.foundJsdomName(result);
    Object.setPrototypeOf(globalMy.element[name], window[construct].prototype);
    result = globalMy.element[name];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Node_removeChild  ', '  result => ', '' + result);
    }
    return result;
};
globalMy.Node_get_childNodes = function () {
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var children = globalMy.value[name].childNodes;
    var this_ = globalMy.jsdom_element[name];
    result = this_.childNodes;
    var old_length;
    var length = result.length;
    if (!children) {
        children = globalMy.value[name]["childNodes"] = {};
        Object.setPrototypeOf(children, NodeList.prototype);
        var obj_name = globalMy.setfoundName(children);
        globalMy.value[obj_name].length = length;
        old_length = length;
        globalMy.jsdom_element[obj_name] = result;
    } else {
        var childNodes_name = globalMy.foundName(children)
        old_length = globalMy.value[childNodes_name].length;
        globalMy.value[childNodes_name].length = length;
    }
    if (result == undefined || result == null) {
    } else {
        for (var i = 0; i < length; i++) {
            name = globalMy.foundJsdomName(result[i]);
            children[i] = globalMy.element[name];
        }
        for (; old_length > length; old_length--) {
            delete children[old_length - 1];
        }
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Node_get_childNodes,result => ', '' + children);
    }
    return children;
};
globalMy.Node_cloneNode = function () {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Node_cloneNode, arguments => ', arguments);
    }
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    result = this_.cloneNode.apply(this_, arguments);
    if (result == undefined || result == null) {
    } else {
        var construct = result.__proto__[Symbol.toStringTag];
        var name = globalMy.foundJsdomName(result);
        Object.setPrototypeOf(globalMy.element[name], window[construct].prototype);
        result = globalMy.element[name];
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Node_cloneNode ' + '  result => ', '' + result);
    }
    return result;
};
globalMy.Node_insertBefore = function () {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Node_insertBefore, arguments => ', arguments);
    }
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    var args = [];
    var length = arguments.length;
    for (var i = 0; i < length; i++) {
        if (arguments[i] == null || arguments[i] == undefined) {
            continue;
        }
        name = globalMy.foundName(arguments[i]);
        args.push(globalMy.jsdom_element[name]);
    }
    result = this_.insertBefore.apply(this_, args);
    if (result == undefined || result == null) {
    } else {
        var construct = result.__proto__[Symbol.toStringTag];
        var name = globalMy.foundJsdomName(result);
        Object.setPrototypeOf(globalMy.element[name], window[construct].prototype);
        result = globalMy.element[name];
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Node_insertBefore ' + '  result => ', '' + result);
    }
    return result;
};
globalMy.Node_get_parentNode = function () {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Node_get_parentNode');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['parentNode'];
    if (result == undefined || result == null) {
    } else {
        var construct = result.__proto__[Symbol.toStringTag];
        var name = globalMy.foundJsdomName(result);
        Object.setPrototypeOf(globalMy.element[name], window[construct].prototype);
        result = globalMy.element[name];
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Node_get_parentNode, result => ', '' + result);
    }
    return result;
};
globalMy.Node_get_parentElement = function () {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Node_get_parentElement');
    }
    var result;
    var foundName = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[foundName];
    result = this_.parentElement;
    if (result == null || result == undefined) {
    } else {
        var name = globalMy.foundJsdomName(result);
        var construct = result.__proto__[Symbol.toStringTag];
        Object.setPrototypeOf(globalMy.element[name], window[construct].prototype);
        result = globalMy.element[name];
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Node_get_parentElement, result => ', '' + result);
    }
    return result;
};

// Document
globalMy.Document_get_hidden = function () {
    var result;
    result = false;
    // var foundName = globalMy.foundName(this);
    // result = globalMy.jsdom_element[foundName]['hidden'];
    // if (result != null && result != undefined) {
    //     switch (typeof result) {
    //         case "object":
    //             debugger;
    //             break
    //         case "function":
    //             debugger;
    //             break
    //         default:
    //             break
    //     }
    // }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_get_hidden, result => ', '' + result);
    }
    return result;
};
globalMy.Document_get_all = function () {
    var result;
    var foundName = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[foundName];
    // 遍历根节点
    // if (!globalMy.tree_is_change) return globalMy.value[foundName].all;
    var name = globalMy.foundName(globalMy.value[foundName].all);
    var old_length = globalMy.value[name].length;
    var dom_tree = globalMy.getJsdomTree(this_.documentElement);
    var length = dom_tree.length;
    for (var i = 0; i < length; i++) {
        globalMy.value[foundName].all[i] = globalMy.element[globalMy.foundJsdomName(dom_tree[i])];
    }
    for (; old_length > length; old_length--) {
        delete globalMy.value[foundName].all[old_length - 1];
    }
    result = globalMy.value[foundName].all;
    globalMy.value[name].length = length;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_get_all, arguments => ', arguments);
    }
    return result;
};
globalMy.Document_createEvent = function (type) {
    var result;
    //这里写方法实体
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_createEvent, arguments => ', arguments);
    }
    switch (type) {
        case "TouchEvent":
            // globalMy.call_error("Failed to execute 'createEvent' on 'Document': The provided event type ('TouchEvent') is invalid.", "DOMException: ");
            throw new DOMException("DOMException: Failed to execute 'createEvent' on 'Document': The provided event type ('TouchEvent') is invalid.")
        case "CustomEvent":
            result = globalMy.createEvent(type);
            break
        case "UIEvent":
            result = globalMy.createEvent(type);
            break
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_createEvent, result => ', result + '');
    }
    return result;
};
globalMy.Document_createElement = function () {
    var result;
    //这里写方法实体
    var tag_name = arguments[0].toLowerCase() + '';
    var type;
    switch (tag_name) {
        case "abbr":
            type = HTMLElement;
            break;
        case "address":
            type = HTMLElement;
            break;
        case "article":
            type = HTMLElement;
            break;
        case "aside":
            type = HTMLElement;
            break;
        case "b":
            type = HTMLElement;
            break;
        case "bdi":
            type = HTMLElement;
            break;
        case "bdo":
            type = HTMLElement;
            break;
        case "cite":
            type = HTMLElement;
            break;
        case "code":
            type = HTMLElement;
            break;
        case "dd":
            type = HTMLElement;
            break;
        case "dfn":
            type = HTMLElement;
            break;
        case "dt":
            type = HTMLElement;
            break;
        case "em":
            type = HTMLElement;
            break;
        case "figcaption":
            type = HTMLElement;
            break;
        case "figure":
            type = HTMLElement;
            break;
        case "footer":
            type = HTMLElement;
            break;
        case "header":
            type = HTMLElement;
            break;
        case "hgroup":
            type = HTMLElement;
            break;
        case "i":
            type = HTMLElement;
            break;
        case "kbd":
            type = HTMLElement;
            break;
        case "main":
            type = HTMLElement;
            break;
        case "mark":
            type = HTMLElement;
            break;
        case "nav":
            type = HTMLElement;
            break;
        case "noscript":
            type = HTMLElement;
            break;
        case "rp":
            type = HTMLElement;
            break;
        case "rt":
            type = HTMLElement;
            break;
        case "ruby":
            type = HTMLElement;
            break;
        case "s":
            type = HTMLElement;
            break;
        case "samp":
            type = HTMLElement;
            break;
        case "section":
            type = HTMLElement;
            break;
        case "small":
            type = HTMLElement;
            break;
        case "strong":
            type = HTMLElement;
            break;
        case "sub":
            type = HTMLElement;
            break;
        case "summary":
            type = HTMLElement;
            break;
        case "sup":
            type = HTMLElement;
            break;
        case "u":
            type = HTMLElement;
            break;
        case "var":
            type = HTMLElement;
            break;
        case "wbr":
            type = HTMLElement;
            break;
        case "a":
            type = HTMLAnchorElement;
            break;
        case "img":
            type = HTMLImageElement;
            break;
        case "font":
            type = HTMLFontElement;
            break;
        case "output":
            type = HTMLOutputElement;
            break;
        case "area":
            type = HTMLAreaElement;
            break;
        case "input":
            type = HTMLInputElement;
            break;
        case "form":
            type = HTMLFormElement;
            break;
        case "p":
            type = HTMLParagraphElement;
            break;
        case "audio":
            type = HTMLAudioElement;
            break;
        case "label":
            type = HTMLLabelElement;
            break;
        case "frame":
            type = HTMLFrameElement;
            break;
        case "param":
            type = HTMLParamElement;
            break;
        case "base":
            type = HTMLBaseElement;
            break;
        case "legend":
            type = HTMLLegendElement;
            break;
        case "frameset":
            type = HTMLFrameSetElement;
            break;
        case "picture":
            type = HTMLPictureElement;
            break;
        case "body":
            type = HTMLBodyElement;
            break;
        case "li":
            type = HTMLLIElement;
            break;
        case "h1":
            type = HTMLHeadingElement;
            break;
        case "h2":
            type = HTMLHeadingElement;
            break;
        case "h3":
            type = HTMLHeadingElement;
            break;
        case "h4":
            type = HTMLHeadingElement;
            break;
        case "h5":
            type = HTMLHeadingElement;
            break;
        case "h6":
            type = HTMLHeadingElement;
            break;
        case "listing":
            type = HTMLPreElement;
            break;
        case "pre":
            type = HTMLPreElement;
            break;
        case "xmp":
            type = HTMLPreElement;
            break;
        case "br":
            type = HTMLBRElement;
            break;
        case "link":
            type = HTMLLinkElement;
            break;
        case "head":
            type = HTMLHeadElement;
            break;
        case "progress":
            type = HTMLProgressElement;
            break;
        case "button":
            type = HTMLButtonElement;
            break;
        case "map":
            type = HTMLMapElement;
            break;
        case "hr":
            type = HTMLHRElement;
            break;
        case "blockquote":
            type = HTMLQuoteElement;
            break;
        case "q":
            type = HTMLQuoteElement;
            break;
        case "canvas":
            type = HTMLCanvasElement;
            break;
        case "marquee":
            type = HTMLMarqueeElement;
            break;
        case "html":
            type = HTMLHtmlElement;
            break;
        case "script":
            type = HTMLScriptElement;
            break;
        case "data":
            type = HTMLDataElement;
            break;
        case "iframe":
            type = HTMLIFrameElement;
            break;
        case "time":
            type = HTMLTimeElement;
            break;
        case "datalist":
            type = HTMLDataListElement;
            break;
        case "menu":
            type = HTMLMenuElement;
            break;
        case "select":
            type = HTMLSelectElement;
            break;
        case "title":
            type = HTMLTitleElement;
            break;
        case "details":
            type = HTMLDetailsElement;
            break;
        case "meta":
            type = HTMLMetaElement;
            break;
        case "slot":
            type = HTMLSlotElement;
            break;
        case "tr":
            type = HTMLTableRowElement;
            break;
        case "dialog":
            type = HTMLDialogElement;
            break;
        case "meter":
            type = HTMLMeterElement;
            break;
        case "source":
            type = HTMLSourceElement;
            break;
        case "thead":
            type = HTMLTableSectionElement;
            break;
        case "tbody":
            type = HTMLTableSectionElement;
            break;
        case "tfoot":
            type = HTMLTableSectionElement;
            break;
        case "dir":
            type = HTMLDirectoryElement;
            break;
        case "del":
            type = HTMLModElement;
            break;
        case "ins":
            type = HTMLModElement;
            break;
        case "span":
            type = HTMLSpanElement;
            break;
        case "template":
            type = HTMLTemplateElement;
            break;
        case "div":
            type = HTMLDivElement;
            break;
        case "object":
            type = HTMLObjectElement;
            break;
        case "style":
            type = HTMLStyleElement;
            break;
        case "textarea":
            type = HTMLTextAreaElement;
            break;
        case "dl":
            type = HTMLDListElement;
            break;
        case "ol":
            type = HTMLOListElement;
            break;
        case "caption":
            type = HTMLTableCaptionElement;
            break;
        case "track":
            type = HTMLTrackElement;
            break;
        case "embed":
            type = HTMLEmbedElement;
            break;
        case "optgroup":
            type = HTMLOptGroupElement;
            break;
        case "th":
            type = HTMLTableCellElement;
            break;
        case "td":
            type = HTMLTableCellElement;
            break;
        case "ul":
            type = HTMLUListElement;
            break;
        case "fieldset":
            type = HTMLFieldSetElement;
            break;
        case "option":
            type = HTMLOptionElement;
            break;
        case "col":
            type = HTMLTableColElement;
            break;
        case "colgroup":
            type = HTMLTableColElement;
            break;
        case "table":
            type = HTMLTableElement;
            break;
        case "video":
            type = HTMLVideoElement;
            break;
        default:
        //出错直接debugger,提醒又要补环境了操
        // debugger;
    }

    var foundName = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[foundName];
    var call_result = this_.createElement(tag_name);
    var name = globalMy.setfoundName({});
    Object.setPrototypeOf(globalMy.element[name], type.prototype);
    globalMy.jsdom_element[name] = call_result;
    result = globalMy.element[name];

    // 初始化一些重要的对象
    globalMy.value[foundName]["childNodes"] = {};
    Object.setPrototypeOf(globalMy.value[foundName]["childNodes"], NodeList.prototype);
    name = globalMy.setfoundName(globalMy.value[foundName]["childNodes"]);
    globalMy.value[name].length = 0;
    globalMy.jsdom_element[name] = call_result.childNodes;

    globalMy.value[foundName]["children"] = {};
    Object.setPrototypeOf(globalMy.value[foundName]["children"], HTMLCollection.prototype);
    name = globalMy.setfoundName(globalMy.value[foundName]["children"]);
    globalMy.value[name].length = 0;
    globalMy.jsdom_element[name] = call_result.children;

    globalMy.value[foundName]["style"] = {};
    Object.setPrototypeOf(globalMy.value[foundName]["style"], CSSStyleDeclaration.prototype);
    name = globalMy.setfoundName(globalMy.value[foundName]["style"]);
    globalMy.jsdom_element[name] = call_result.style;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_createElement, arguments => ', arguments, '  result => ', 'object ' + type.prototype[Symbol.toStringTag]);
    }
    return result;
};
globalMy.Document_write = function () {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_write, arguments => ', arguments);
    }
    var result;
    if (this !== document) {
        throw new TypeError("DOMException: Failed to execute 'write' on 'Document': Only HTML documents support write().");
    }
    globalMy.tree_is_change = true;
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    result = this_.write.apply(this_, arguments);
    //这里写方法实体
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_write, arguments ->', arguments, '  result => ', '' + result);
    }
};
globalMy.Document_get_head = function () {
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['head'];
    if (result == undefined || result == null) {
    } else {
        var name = globalMy.foundJsdomName(result);
        result = globalMy.element[name];
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_get_head,result => ', '' + result);
    }
    return result;
};
globalMy.Document_get_body = function () {
    var result;
    var foundName = globalMy.foundName(this);
    if (globalMy.first_get_body) {
        result = null;
        globalMy.first_get_body = false;
    } else {
        result = globalMy.jsdom_element[foundName]['body'];
        if (result == undefined || result == null) {
        } else {
            var name = globalMy.foundJsdomName(result);
            result = globalMy.element[name];
        }
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_get_body,result => ', '' + result);
    }
    return result;
};
globalMy.Document_get_doctype = function () {
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['doctype'];
    if (result == undefined || result == null) {
    } else {
        var name = globalMy.foundJsdomName(result);
        result = globalMy.element[name];
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_get_doctype,result => ', '' + result);
    }
    return result;
};
globalMy.Document_get_documentElement = function () {
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['documentElement'];
    if (result == undefined || result == null) {
    } else {
        var name = globalMy.foundJsdomName(result);
        result = globalMy.element[name];
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_get_documentElement,result => ', '' + result);
    }
    return result;
};
globalMy.Document_getElementById = function () {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_getElementById, arguments => ', arguments);
    }
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    result = this_.getElementById.apply(this_, arguments);
    // if (arguments[0] === "__onload__"){ debugger; }
    if (result == undefined || result == null) {
    } else {
        name = globalMy.foundJsdomName(result);
        result = globalMy.element[name];
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_getElementById ', '  result => ', '' + result);
    }
    return result;
};
globalMy.Document_getElementsByTagName = function () {
    //这里写方法实体
    let tagName = arguments[0];
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    result = this_.getElementsByTagName.apply(this_, arguments);
    var htmlCollection = {};
    Object.setPrototypeOf(htmlCollection, HTMLCollection.prototype);
    var result_name = globalMy.setfoundName(htmlCollection);
    globalMy.value[result_name].length = result.length;
    if (result == undefined || result == null) {
    } else {
        for (var i = 0; i < globalMy.value[result_name].length; i++) {
            name = globalMy.foundJsdomName(result[i]);
            htmlCollection[i] = globalMy.element[name];
        }
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_getElementsByTagName, arguments => ', arguments, '  result => ' + htmlCollection);
    }
    return htmlCollection;
};
globalMy.Document_get_scripts = function () {
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    result = this_.scripts;
    var htmlCollection = {};
    Object.setPrototypeOf(htmlCollection, HTMLCollection.prototype);
    var result_name = globalMy.setfoundName(htmlCollection);
    globalMy.value[result_name].length = result.length;
    if (result == undefined || result == null) {
    } else {
        for (var i = 0; i < globalMy.value[result_name].length; i++) {
            name = globalMy.foundJsdomName(result[i]);
            htmlCollection[i] = globalMy.element[name];
        }
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_get_scripts,result => ', '' + result);
    }
    return htmlCollection;
};
globalMy.Document_get_currentScript = function () {
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    result = this_.currentScript;
    if (result == undefined || result == null) {
        result = globalMy.value[name].currentScript;
        if (!result) result = null;
    } else {
        var name = globalMy.foundJsdomName(result);
        result = globalMy.element[name];
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_get_currentScript,result => ', '' + result);
    }
    return result;
};
globalMy.Document_set_cookie = function (val) {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_set_cookie, 传参val => ' + val);
    }
    var foundName = globalMy.foundName(this);
    if (val == undefined || val == null || typeof val != "string") {
        debugger;
    } else {
        globalMy.jsdom_element[foundName]['cookie'] = val;
    }
};
globalMy.Document_createExpression = function () {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_createExpression, arguments => ', arguments);
    }
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    result = this_.createExpression.apply(this_, arguments);
    if (result == undefined || result == null) {
    } else {
        name = globalMy.foundJsdomName(result, "XPathExpression");
        result = globalMy.element[name];
        // switch (typeof result) {
        //     case "object":
        //         debugger;
        //         break
        //     case "function":
        //         debugger;
        //         break
        //     default:
        //         break
        // }
    }

    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_createExpression ' + '  result => ', 'object ' + result.__proto__[Symbol.toStringTag]);
    }
    return result;
};
globalMy.Document_get_scrollingElement = function () {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_get_scrollingElement');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['documentElement'];
    if (result != null && result != undefined) {
        var name = globalMy.foundJsdomName(result);
        result = globalMy.element[name];
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_get_scrollingElement, result => ', '' + result);
    }
    return result;
};
globalMy.Document_get_activeElement = function () {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_get_activeElement');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['activeElement'];
    if (result != null && result != undefined) {
        var name = globalMy.foundJsdomName(result);
        result = globalMy.element[name];
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_get_activeElement, result => ', '' + result);
    }
    return result;
};
globalMy.Document_get_anchors = function () {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_get_anchors');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['anchors'];
    if (result != null && result != undefined) {
        var htmlCollection = {};
        Object.setPrototypeOf(htmlCollection, HTMLCollection.prototype);
        var result_name = globalMy.setfoundName(htmlCollection);
        globalMy.value[result_name].length = result.length;
        for (var i = 0; i < globalMy.value[result_name].length; i++) {
            name = globalMy.foundJsdomName(result[i]);
            htmlCollection[i] = globalMy.element[name];
        }
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_get_anchors, result => ', '' + result);
    }
    return result;
};
globalMy.Document_get_applets = function () {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_get_applets');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['applets'];
    if (result != null && result != undefined) {
        var htmlCollection = {};
        Object.setPrototypeOf(htmlCollection, HTMLCollection.prototype);
        var result_name = globalMy.setfoundName(htmlCollection);
        globalMy.value[result_name].length = result.length;
        for (var i = 0; i < globalMy.value[result_name].length; i++) {
            name = globalMy.foundJsdomName(result[i]);
            htmlCollection[i] = globalMy.element[name];
        }
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_get_applets, result => ', '' + result);
    }
    return result;
};
globalMy.Document_get_children = function () {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_get_children');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['children'];
    if (result != null && result != undefined) {
        var length = result.length;
        var children = globalMy.value[foundName]['children'];
        var result_name, old_length;
        if (!children) {
            children = {};
            Object.setPrototypeOf(children, HTMLCollection.prototype);
            result_name = globalMy.setfoundName(children);
            globalMy.value[foundName]['children'] = children;
            old_length = length;
        } else {
            result_name = globalMy.foundName(children);
            old_length = globalMy.value[result_name].length;
        }
        globalMy.value[result_name].length = length;
        for (var i = 0; i < length; i++) {
            var name = globalMy.foundJsdomName(result[i]);
            children[i] = globalMy.element[name];
        }
        for (; old_length > length; old_length--) {
            delete children[old_length - 1];
        }
        result = children;
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_get_children, result => ', '' + result);
    }
    return result;
};
globalMy.Document_get_defaultView = function () {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_get_defaultView');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['defaultView'];
    if (result != null && result != undefined) {
        result = window;
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_get_defaultView, result => ', '' + result);
    }
    return result;
};
globalMy.Document_get_wasDiscarded = function () {
    if (!(this instanceof Document)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_get_wasDiscarded');
    }
    var result = false;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_get_wasDiscarded, result => ', '' + result);
    }
    return result;
};
globalMy.Document_get_readyState = function () {
    if (!(this instanceof Document)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_get_readyState');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['readyState'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_get_readyState, result => ', '' + result);
    }
    return result;
};
globalMy.Document_querySelector = function () {
    if (!(this instanceof Document)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_querySelector, arguments => ', arguments);
    }
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    result = this_.querySelector.apply(this_, arguments);
    if (result == undefined || result == null) {
    } else {
        var result_name = globalMy.foundJsdomName(result);
        result = globalMy.element[result_name];
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_querySelector ' + '  result => ', '' + result);
    }
    return result;
};
globalMy.Document_querySelectorAll = function () {
    if (!(this instanceof Document)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_querySelectorAll, arguments => ', arguments);
    }
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    var this_ = globalMy.jsdom_element[name];
    result = this_.querySelectorAll.apply(this_, arguments);
    if (result == undefined || result == null) {
    } else {
        var length = result.length;
        var nodeList = {};
        Object.setPrototypeOf(nodeList, NodeList.prototype);
        var result_name = globalMy.setfoundName(nodeList);
        globalMy.jsdom_element[result_name] = result;
        globalMy.value[result_name].length = length;
        for (var i = 0; i < length; i++) {
            name = globalMy.foundJsdomName(result[i]);
            nodeList[i] = globalMy.element[name];
        }
        result = nodeList;
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_querySelectorAll ' + '  result => ', '' + result);
    }
    return result;
};
globalMy.Document_get_onselectionchange = function () {
    if (!(this instanceof Document)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_get_onselectionchange');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['onselectionchange'];
    if (result != null && result != undefined) {
        switch (typeof result) {
            case "object":
                debugger;
                break;
            case "function":
                debugger;
                break;
            default:
                break;
        }
    } else result = null;

    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_get_onselectionchange, result => ', '' + result);
    }
    return result;
};
globalMy.Document_get_visibilityState = function () {
    if (!(this instanceof Document)) {
        throw new TypeError("Illegal invocation");
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['visibilityState'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Document_get_visibilityState, result => ', '' + result);
    }
    return result;
};

// MutationRecord
globalMy.MutationRecord_get_addedNodes = function () {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了MutationRecord_get_addedNodes');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['addedNodes'];
    if (result != null && result != undefined) {
        debugger;
        var name = globalMy.foundJsdomName(result, "NodeList");
        var length = result.length;
        var addedNodes = globalMy.element[name];
        for (var i = 0; i < length; i++) {
            name = globalMy.foundJsdomName(result[i]);
            addedNodes[i] = globalMy.element[name];
        }
        result = addedNodes;
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了MutationRecord_get_addedNodes, result => ', '' + result);
    }
    return result;
};

// HTMLElement
globalMy.HTMLElement_get_style = function () {
    var result;
    var name = globalMy.foundName(this);
    // result = this_.style;
    result = globalMy.value[name]["style"];
    if (!result) {
        var this_ = globalMy.jsdom_element[name];

        result = {};
        Object.setPrototypeOf(result, CSSStyleDeclaration.prototype);
        for (var i in globalMy.style) {
            result[i] = globalMy.style[i];
        }
        result["fontFamily"] = this_.style.fontFamily;
        globalMy.value[name]["style"] = result;
    }
    if (globalMy.is_log) {
        // globalMy.console.log('[*]  调用了HTMLElement_get_style,result => ', '' + result)
    }
    return result;
};
globalMy.HTMLElement_get_offsetWidth = function () {
    // if (globalMy.is_log) { globalMy.console.log('[*]  调用了HTMLElement_get_offsetWidth'); }
    var result;
    // var name = globalMy.foundName(this);
    var style = this.style;
    var fontFamily = style.fontFamily;
    if (globalMy.memory.fontFamily_1.indexOf(fontFamily) > -1) {
        result = 1327;
    } else if (globalMy.memory.fontFamily_2.indexOf(fontFamily) > -1) {
        result = 912;
    } else result = 0;

    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_get_offsetWidth, result => ', '' + result, ", fontFamily => ", fontFamily);
    }
    return result;
};
globalMy.HTMLElement_get_offsetHeight = function () {
    // if (globalMy.is_log) { globalMy.console.log('[*]  调用了HTMLElement_get_offsetHeight'); }
    var result;
    // var name = globalMy.foundName(this);
    var style = this.style;
    var fontFamily = style.fontFamily;
    if (globalMy.memory.fontFamily_1.indexOf(fontFamily) > -1) {
        result = 151;
    } else if (globalMy.memory.fontFamily_2.indexOf(fontFamily) > -1) {
        result = 114;
    } else result = 0;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_get_offsetHeight, result => ', '' + result, ", fontFamily => ", fontFamily);
    }
    return result;
};
globalMy.HTMLElement_set_onload = function (val) {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_set_onload, 传参val => ' + val);
    }
    var result;
    var foundName = globalMy.foundName(this);
    if (val == undefined || val == null) {
        globalMy.value[foundName]['onload'] = val;
    } else {
        switch (typeof val) {
            case "object":
                debugger;
                break;
            case "function":
                var callback = function () {
                    debugger;
                    var foundName = globalMy.foundJsdomName(this);
                    val.apply(globalMy.element[foundName], []);
                }
                globalMy.jsdom_element[foundName]['onload'] = callback;
                globalMy.value[foundName]['onload'] = val;
                break;
            default:
                debugger;
        }
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_set_onload' + '  result => ', '' + result);
    }
};
globalMy.HTMLElement_get_onload = function () {
    if (!(this instanceof HTMLElement)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_get_onload');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['onload'];
    if (result == null && result == undefined) {
        result = null;
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_get_onload, result => ', '' + result);
    }
    return result;
};
globalMy.HTMLElement_set_onerror = function (val) {
    if (!(this instanceof HTMLElement)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_set_onerror, 传参val => ' + val);
    }
    var result;
    var foundName = globalMy.foundName(this);
    if (val == undefined || val == null) {
        globalMy.value[foundName]['onerror'] = val;
    } else {
        switch (typeof val) {
            case "object":
                debugger;
                break;
            case "function":
                var callback = function () {
                    debugger;
                    var foundName = globalMy.foundJsdomName(this);
                    val.apply(globalMy.element[foundName], []);
                }
                globalMy.jsdom_element[foundName]['onerror'] = callback;
                globalMy.value[foundName]['onerror'] = val;
                break;
            default:
            // globalMy.value[foundName]['onerror'] = val;
        }
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_set_onerror' + '  result => ', '' + result);
    }
};
globalMy.HTMLElement_get_onerror = function () {
    if (!(this instanceof HTMLElement)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_get_onerror');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['onerror'];
    if (result == null && result == undefined) {
        result = null;
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_get_onerror, result => ', '' + result);
    }
    return result;
};
globalMy.HTMLElement_set_onclick = function (val) {
    if (!(this instanceof HTMLElement)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_set_onclick, 传参val => ' + val);
    }
    var result;
    var foundName = globalMy.foundName(this);
    if (val == undefined || val == null) {
        globalMy.value[foundName]['onclick'] = val;
    } else {
        switch (typeof val) {
            case "object":
                debugger;
                break;
            case "function":
                var callback = function () {
                    debugger;
                    var foundName = globalMy.foundJsdomName(this);
                    val.apply(globalMy.element[foundName], []);
                }
                globalMy.jsdom_element[foundName]['onclick'] = callback;
                globalMy.value[foundName]['onclick'] = val;
                break;
            default:
                globalMy.value[foundName]['onclick'] = val;
        }
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_set_onclick' + '  result => ', '' + result);
    }
};
globalMy.HTMLElement_get_onclick = function () {
    if (!(this instanceof HTMLElement)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_get_onclick');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['onclick'];
    if (result == null && result == undefined) {
        result = null;
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_get_onclick, result => ', '' + result);
    }
    return result;
};
globalMy.HTMLElement_set_onmousedown = function (val) {
    if (!(this instanceof HTMLElement)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_set_onmousedown, 传参val => ' + val);
    }
    var result;
    var foundName = globalMy.foundName(this);
    if (val == undefined || val == null) {
        globalMy.value[foundName]['onmousedown'] = val;
    } else {
        switch (typeof val) {
            case "object":
                debugger;
                break;
            case "function":
                var callback = function () {
                    debugger;
                    var foundName = globalMy.foundJsdomName(this);
                    val.apply(globalMy.element[foundName], []);
                }
                globalMy.jsdom_element[foundName]['onclick'] = callback;
                globalMy.value[foundName]['onclick'] = val;
                break;
            default:
                globalMy.value[foundName]['onmousedown'] = val;
        }
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_set_onmousedown' + '  result => ', '' + result);
    }
};
globalMy.HTMLElement_get_onmousedown = function () {
    if (!(this instanceof HTMLElement)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_get_onmousedown');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['onmousedown'];
    if (result == null && result == undefined) {
        result = null;
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_get_onmousedown, result => ', '' + result);
    }
    return result;
};
globalMy.HTMLElement_get_onmouseenter = function () {
    if (!(this instanceof HTMLElement)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_get_onmouseenter');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['onmouseenter'];
    if (result == undefined || result == null) {
        result = null;
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_get_onmouseenter, result => ', '' + result);
    }
    return result;
};
globalMy.HTMLElement_set_onmouseenter = function (val) {
    if (!(this instanceof HTMLElement)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_set_onmouseenter, 传参val => ' + val);
    }
    var result;
    var foundName = globalMy.foundName(this);
    if (val == undefined || val == null) {
        globalMy.value[foundName]['onmouseenter'] = val;
    } else {
        switch (typeof val) {
            case "object":
                debugger;
                break;
            case "function":
                var callback = function () {
                    debugger;
                    var foundName = globalMy.foundJsdomName(this);
                    val.apply(globalMy.element[foundName], []);
                }
                globalMy.jsdom_element[foundName]['onmouseenter'] = callback;
                globalMy.value[foundName]['onmouseenter'] = val;
                break;
            default:
                globalMy.value[foundName]['onmouseenter'] = val;
        }
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_set_onmouseenter' + '  result => ', '' + result);
    }
};
globalMy.HTMLElement_get_onmouseleave = function () {
    if (!(this instanceof HTMLElement)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_get_onmouseleave');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['onmouseleave'];
    if (result == undefined || result == null) {
        result = null;
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_get_onmouseleave, result => ', '' + result);
    }
    return result;
};
globalMy.HTMLElement_set_onmouseleave = function (val) {
    if (!(this instanceof HTMLElement)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_set_onmouseleave, 传参val => ' + val);
    }
    var result;
    var foundName = globalMy.foundName(this);
    if (val == undefined || val == null) {
        globalMy.jsdom_element[foundName]['onmouseleave'] = val;
    } else {
        switch (typeof val) {
            case "object":
                debugger;
                break;
            case "function":
                var callback = function () {
                    debugger;
                    var foundName = globalMy.foundJsdomName(this);
                    val.apply(globalMy.element[foundName], []);
                }
                globalMy.jsdom_element[foundName]['onmouseleave'] = callback;
                globalMy.value[foundName]['onmouseleave'] = val;
                break;
            default:
                globalMy.jsdom_element[foundName]['onmouseleave'] = val;
        }
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_set_onmouseleave' + '  result => ', '' + result);
    }
};
globalMy.HTMLElement_get_onmousemove = function () {
    if (!(this instanceof HTMLElement)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_get_onmousemove');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['onmousemove'];
    if (result == null && result == undefined) {
        result = null;
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_get_onmousemove, result => ', '' + result);
    }
    return result;
};
globalMy.HTMLElement_set_onmousemove = function (val) {
    if (!(this instanceof HTMLElement)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_set_onmousemove, 传参val => ' + val);
    }
    var result;
    var foundName = globalMy.foundName(this);
    if (val == undefined || val == null) {
        globalMy.jsdom_element[foundName]['onmousemove'] = val;
    } else {
        switch (typeof val) {
            case "object":
                debugger;
                break;
            case "function":
                var callback = function () {
                    debugger;
                    var foundName = globalMy.foundJsdomName(this);
                    val.apply(globalMy.element[foundName], []);
                }
                globalMy.jsdom_element[foundName]['onmousemove'] = callback;
                globalMy.value[foundName]['onmousemove'] = val;
                break;
            default:
                globalMy.jsdom_element[foundName]['onmousemove'] = val;
        }
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_set_onmousemove' + '  result => ', '' + result);
    }
};
globalMy.HTMLElement_get_onmouseout = function () {
    if (!(this instanceof HTMLElement)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_get_onmouseout');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['onmouseout'];
    if (result == null && result == undefined) {
        result = null;
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_get_onmouseout, result => ', '' + result);
    }
    return result;
};
globalMy.HTMLElement_set_onmouseout = function (val) {
    if (!(this instanceof HTMLElement)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_set_onmouseout, 传参val => ' + val);
    }
    var result;
    var foundName = globalMy.foundName(this);
    if (val == undefined || val == null) {
        globalMy.value[foundName]['onmouseout'] = val;
    } else {
        switch (typeof val) {
            case "object":
                debugger;
                break;
            case "function":
                var callback = function () {
                    debugger;
                    var foundName = globalMy.foundJsdomName(this);
                    val.apply(globalMy.element[foundName], []);
                }
                globalMy.jsdom_element[foundName]['onmouseout'] = callback;
                globalMy.value[foundName]['onmouseout'] = val;
                break;
            default:
                globalMy.value[foundName]['onmouseout'] = val;
        }
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_set_onmouseout' + '  result => ', '' + result);
    }
};
globalMy.HTMLElement_get_onmouseover = function () {
    if (!(this instanceof HTMLElement)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_get_onmouseover');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['onmouseover'];
    if (result == null && result == undefined) {
        result = null;
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_get_onmouseover, result => ', '' + result);
    }
    return result;
};
globalMy.HTMLElement_set_onmouseover = function (val) {
    if (!(this instanceof HTMLElement)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_set_onmouseover, 传参val => ' + val);
    }
    var result;
    var foundName = globalMy.foundName(this);
    if (val == undefined || val == null) {
        globalMy.value[foundName]['onmouseover'] = val;
    } else {
        switch (typeof val) {
            case "object":
                debugger;
                break;
            case "function":
                var callback = function () {
                    debugger;
                    var foundName = globalMy.foundJsdomName(this);
                    val.apply(globalMy.element[foundName], []);
                }
                globalMy.jsdom_element[foundName]['onmouseover'] = callback;
                globalMy.value[foundName]['onmouseover'] = val;
                break;
            default:
                globalMy.value[foundName]['onmouseover'] = val;
        }
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_set_onmouseover' + '  result => ', '' + result);
    }
};
globalMy.HTMLElement_get_onmouseup = function () {
    if (!(this instanceof HTMLElement)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_get_onmouseup');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['onmouseup'];
    if (result == null && result == undefined) {
        result = null;
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_get_onmouseup, result => ', '' + result);
    }
    return result;
};
globalMy.HTMLElement_set_onmouseup = function (val) {
    if (!(this instanceof HTMLElement)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_set_onmouseup, 传参val => ' + val);
    }
    var result;
    var foundName = globalMy.foundName(this);
    if (val == undefined || val == null) {
        globalMy.value[foundName]['onmouseup'] = val;
    } else {
        switch (typeof val) {
            case "object":
                debugger;
                break;
            case "function":
                var callback = function () {
                    debugger;
                    var foundName = globalMy.foundJsdomName(this);
                    val.apply(globalMy.element[foundName], []);
                }
                globalMy.jsdom_element[foundName]['onmouseup'] = callback;
                globalMy.value[foundName]['onmouseup'] = val;
                break;
            default:
                globalMy.value[foundName]['onmouseup'] = val;
        }
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_set_onmouseup' + '  result => ', '' + result);
    }
};
globalMy.HTMLElement_get_onmousewheel = function () {
    if (!(this instanceof HTMLElement)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_get_onmousewheel');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['onmousewheel'];
    if (result == null && result == undefined) {
        result = null;
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_get_onmousewheel, result => ', '' + result);
    }
    return result;
};
globalMy.HTMLElement_set_onmousewheel = function (val) {
    if (!(this instanceof HTMLElement)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_set_onmousewheel, 传参val => ' + val);
    }
    var result;
    var foundName = globalMy.foundName(this);
    if (val == undefined || val == null) {
        globalMy.value[foundName]['onmousewheel'] = val;
    } else {
        switch (typeof val) {
            case "object":
                debugger;
                break;
            case "function":
                var callback = function () {
                    debugger;
                    var foundName = globalMy.foundJsdomName(this);
                    val.apply(globalMy.element[foundName], []);
                }
                globalMy.jsdom_element[foundName]['onmousewheel'] = callback;
                globalMy.value[foundName]['onmousewheel'] = val;
                break;
            default:
                globalMy.value[foundName]['onmousewheel'] = val;
        }
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_set_onmousewheel' + '  result => ', '' + result);
    }
};
globalMy.HTMLElement_get_onselectstart = function () {
    if (!(this instanceof HTMLElement)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_get_onselectstart');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['onselectstart'];
    if (result == null && result == undefined) {
        result = null;
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_get_onselectstart, result => ', '' + result);
    }
    return result;
};
globalMy.HTMLElement_set_onselectstart = function (val) {
    if (!(this instanceof HTMLElement)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_set_onselectstart, 传参val => ' + val);
    }
    var result;
    var foundName = globalMy.foundName(this);
    if (val == undefined || val == null) {
        globalMy.jsdom_element[foundName]['onselectstart'] = val;
    } else {
        switch (typeof val) {
            case "object":
                debugger;
                break;
            case "function":
                var callback = function () {
                    debugger;
                    var foundName = globalMy.foundJsdomName(this);
                    val.apply(globalMy.element[foundName], []);
                }
                globalMy.jsdom_element[foundName]['onselectstart'] = callback;
                globalMy.value[foundName]['onselectstart'] = val;
                break;
            default:
                globalMy.jsdom_element[foundName]['onselectstart'] = val;
        }
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLElement_set_onselectstart' + '  result => ', '' + result);
    }
};

// HTMLScriptElement
globalMy.HTMLScriptElement_set_src = function (val) {
    if (!(this instanceof HTMLScriptElement)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLScriptElement_set_src, 传参val => ' + val);
    }
    var result;
    var foundName = globalMy.foundName(this);
    if (val == undefined || val == null) {
        globalMy.jsdom_element[foundName]['src'] = val;
    } else {
        switch (typeof val) {
            case "object":
                debugger;
                break;
            case "function":
                debugger;
                break;
            default:
                globalMy.jsdom_element[foundName]['src'] = val;

                // 针对某滑块的
                if (val.indexOf("initializeJsonp") != -1) {
                    var func_callback = val.split("callback=")[1];
                    setTimeout(function () {
                        eval(`debugger;` + func_callback + `({"result":{"msg":"success","success":true},"success":true});`)
                    }, 0);
                    setTimeout(() => {
                        var onload = this.onload;
                        if (onload) {
                            onload.apply(this, [globalMy.createEvent("load", this)]);
                        }
                    }, 0);
                } else if (val === "https://ynuf.aliapp.org/w/wu.json") {
                    setTimeout(function () {
                        eval(`try{umx.wu('GBE5B6E2D8D44843ED13276FF9649C0AD2F771001A65C4AE1EF');}catch(e){}
try{__fycb('GBE5B6E2D8D44843ED13276FF9649C0AD2F771001A65C4AE1EF');}catch(e){}`)
                    }, 0);
                    setTimeout(() => {
                        var onload = this.onload;
                        if (onload) {
                            onload.apply(this, [globalMy.createEvent("load", this)]);
                        }
                    }, 0);
                }

        }
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLScriptElement_set_src' + '  result => ', '' + result);
    }
};

// HTMLImageElement
globalMy.HTMLImageElement_set_src = function (val) {
    if (!(this instanceof HTMLImageElement)) {
        throw new TypeError("Illegal invocation");
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLImageElement_set_src, 传参val => ' + val);
    }
    var result;
    var foundName = globalMy.foundName(this);
    if (val == undefined || val == null) {
        globalMy.jsdom_element[foundName]['src'] = val;
    } else {
        switch (typeof val) {
            case "object":
                debugger;
                break;
            case "function":
                debugger;
                break;
            default:
                globalMy.jsdom_element[foundName]['src'] = val;
                setTimeout(() => {
                    var onload = this.onload;
                    if (onload) {
                        onload.apply(this, [globalMy.createEvent("load", this)]);
                    }
                }, 0);

        }
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLImageElement_set_src' + '  result => ', '' + result);
    }
};

// HTMLStyleElement
globalMy.HTMLStyleElement_get_sheet = function () {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLStyleElement_get_sheet');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['sheet'];
    var name = globalMy.foundJsdomName(result);
    Object.setPrototypeOf(globalMy.element[name], CSSStyleSheet.prototype);
    result = globalMy.element[name];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLStyleElement_get_sheet, result => ', '' + result);
    }
    return result;
};

// HTMLMediaElement
globalMy.HTMLMediaElement_canPlayType = function () {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLMediaElement_canPlayType, arguments => ', arguments);
    }
    var result;
    //这里写方法实体
    var probably = ['audio/flac', 'audio/mpeg; codecs="mp3"', 'video/mp4; codecs="avc1.42E034"', 'video/mp4; codecs="avc1.42F01E"', 'video/mp4; codecs="avc1.4D001E"',
        'video/mp4; codecs="avc3.42001E"', 'video/mp4; codecs="avc3.42E01E, mp4a.40.29"', 'video/mp4; codecs="flac"', 'video/mp4; codecs="mp4a.40.02"',
        'video/mp4; codecs="mp4a.40.5"', 'video/mp4; codecs="mp4a.67"', 'video/mp4; codecs="opus"', 'video/ogg; codecs="flac"', 'video/ogg; codecs="opus"',
        'video/ogg; codecs="vp8"', 'video/webm; codecs="av01.0.04M.08"', 'video/webm; codecs="vp09.02.10.08"',
        'video/ogg; codecs="theora"', 'video/mp4; codecs="avc1.42E01E"', 'video/webm; codecs="vp8, vorbis"', 'audio/ogg; codecs="vorbis"', 'audio/wav; codecs="1"', "audio/mpeg;"];
    var maybe = ['video/mp4; codecs="avc1.42E009"', 'audio/x-m4a;audio/aac;', 'video/webm', 'video/x-m4v; codecs="avc1.42AC23"',];
    if (probably.indexOf(arguments[0]) > -1) {
        result = "probably";
    } else if (maybe.indexOf(arguments[0]) > -1) {
        result = "maybe";
    } else {
        result = "";
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLMediaElement_canPlayType ' + '  result => ', '' + result);
    }
    return result;
};

// CSSStyleSheet
globalMy.CSSStyleSheet_get_cssRules = function () {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了CSSStyleSheet_get_cssRules');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['cssRules'];
    var css_rules = [];
    var length = result.length;
    var name;
    for (var i = 0; i < length; i++) {
        name = globalMy.setfoundName({});
        Object.setPrototypeOf(globalMy.element[name], CSSStyleRule.prototype);
        // globalMy.element[name].__starts = result[i].__starts;
        // globalMy.element[name].__ends = result[i].__ends;
        globalMy.jsdom_element[name] = result[i];
        css_rules[i] = globalMy.element[name];
    }
    result = css_rules;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了CSSStyleSheet_get_cssRules, result => ', '' + result);
    }
    return result;
};

// StyleSheet
globalMy.StyleSheet_get_parentStyleSheet = function () {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了StyleSheet_get_parentStyleSheet');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['parentStyleSheet'];
    if (result != null && result != undefined) {
        switch (typeof result) {
            case "object":
                debugger;
                break;
            case "function":
                debugger;
                break;
            default:
                break;
        }
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了StyleSheet_get_parentStyleSheet, result => ', '' + result);
    }
    return result;
};

// HTMLFrameElement
globalMy.HTMLFrameElement_get_contentWindow = function () {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLFrameElement_get_contentWindow');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['contentWindow'];
    if (result != null && result != undefined) {
        var contentWindow = globalMy.value[foundName]['contentWindow'];
        if (!contentWindow) {
            result = globalMy.newWindow(globalMy.jsdom_element[foundName]);
            globalMy.value[foundName]['contentWindow'] = result;
        } else result = contentWindow;
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLFrameElement_get_contentWindow, result => ', '' + result);
    }
    return result;
};

// HTMLIFrame
globalMy.HTMLIFrameElement_get_contentDocument = function () {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLIFrameElement_get_contentDocument');
    }
    var result;
    result = this.contentWindow['document'];
    if (result != null && result != undefined) {
        var foundName = globalMy.foundName(result);
        result = globalMy.element[foundName];
    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLIFrameElement_get_contentDocument, result => ', '' + result);
    }
    return result;
};
globalMy.HTMLIFrameElement_get_contentWindow = function () {
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLIFrameElement_get_contentWindow');
    }
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.jsdom_element[foundName]['contentWindow'];
    if (result != null && result != undefined) {
        var contentWindow = globalMy.value[foundName]['contentWindow'];
        if (!contentWindow) {
            result = globalMy.newWindow(globalMy.jsdom_element[foundName]);
            globalMy.value[foundName]['contentWindow'] = result;
        } else result = contentWindow;

    }
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了HTMLIFrameElement_get_contentWindow, result => ', '' + result);
    }
    return result;
};

// RTCPeerConnection
globalMy.RTCPeerConnection_createDataChannel = function () {
    var result;
    //这里写方法实体
    result = {};
    result.__proto__ = RTCDataChannel.prototype;
    var name = globalMy.setfoundName(result);
    globalMy.value[name]['label'] = arguments[0] + '';
    globalMy.value[name]['ordered'] = true;
    globalMy.value[name]['maxPacketLifeTime'] = null;
    globalMy.value[name]['maxRetransmits'] = null;
    globalMy.value[name]['protocol'] = '';
    globalMy.value[name]['negotiated'] = false;
    globalMy.value[name]['id'] = null;
    globalMy.value[name]['readyState'] = 'connecting';
    globalMy.value[name]['bufferedAmount'] = 0;
    globalMy.value[name]['bufferedAmountLowThreshold'] = 0;
    globalMy.value[name]['onopen'] = null;
    globalMy.value[name]['onbufferedamountlow'] = null;
    globalMy.value[name]['onerror'] = null;
    globalMy.value[name]['onclosing'] = null;
    globalMy.value[name]['onclose'] = null;
    globalMy.value[name]['onmessage'] = null;
    globalMy.value[name]['binaryType'] = 'arraybuffer';
    globalMy.value[name]['reliable'] = true;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了RTCPeerConnection_createDataChannel, arguments => ', arguments, '  result => ', '' + result);
    }
    return result;
};
globalMy.RTCPeerConnection_createOffer = function () {
    var result;
    if (this == RTCPeerConnection.prototype || Utils.isProxy(this)) {
        throw "RTCPeerConnection_createOffer";
    }
    //这里写方法实体
    result = new Promise((resolve, reject) => {
        var arg = {};
        Object.setPrototypeOf(arg, RTCSessionDescription.prototype);
        var name = globalMy.setfoundName(arg);
        globalMy.value[name]['type'] = "offer";
        globalMy.value[name]['sdp'] = 'v=0\r\no=- 5964155708349641443 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:vpF/\r\na=ice-pwd:w1OgduOui35s/9WqWzkv7k2x\r\na=ice-options:trickle\r\na=fingerprint:sha-256 27:76:87:A1:C6:18:AF:57:69:F1:E6:5C:1D:7A:6B:48:D8:23:F1:B6:90:10:3D:89:B3:A2:27:B3:5C:0F:8E:11\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n';
        // debugger;
        var foundName = globalMy.foundName(this);
        globalMy.value[foundName].localDescription = arg;
        globalMy.value[foundName].pendingLocalDescription = arg;
        globalMy.value[foundName].iceGatheringState = "gathering";
        globalMy.value[foundName].signalingState = "have-local-offer";
        resolve(arg);
    });
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了RTCPeerConnection_createOffer, arguments => ', arguments, '  result => ', '' + result);
    }
    return result;
};
globalMy.RTCPeerConnection_setLocalDescription = function () {
    if (!(this instanceof RTCPeerConnection)) {
        throw new TypeError("Illegal invocation");
    }
    var result;
    //这里写方法实体
    result = new Promise((resolve, reject) => {
        resolve();
    });
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了RTCPeerConnection_setLocalDescription, arguments => ', arguments, '  result => ', '' + result);
    }
    return result;
};

// Performance
globalMy.Performance_now = function () {
    var result;
    //这里写方法实体
    result = (Date.now() - globalMy.memory.begin_time) * 10;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Performance_now, arguments => ', arguments, '  result => ', '' + result);
    }
    return result;
};
globalMy.Performance_getEntries = function () {
    if (!(this instanceof Performance)) {
        throw new TypeError("Illegal invocation");
    }
    var name, result = [];
    result[0] = {};
    Object.setPrototypeOf(result[0], PerformanceMeasure.prototype);
    name = globalMy.setfoundName(result[0]);
    globalMy.value[name] = {
        "detail": null,
        "name": "theme-set",
        "entryType": "measure",
        "startTime": 0,
        "duration": 68.39999999850988
    };
    result[1] = {};
    Object.setPrototypeOf(result[1], PerformanceNavigationTiming.prototype);
    name = globalMy.setfoundName(result[1]);
    globalMy.value[name] = {
        "unloadEventStart": 0,
        "unloadEventEnd": 0,
        "domInteractive": 32.399999998509884,
        "domContentLoadedEventStart": 64.80000000447035,
        "domContentLoadedEventEnd": 64.80000000447035,
        "domComplete": 70.80000000447035,
        "loadEventStart": 70.80000000447035,
        "loadEventEnd": 70.80000000447035,
        "type": "reload",
        "redirectCount": 0,
        "activationStart": 0,
        "initiatorType": "navigation",
        "nextHopProtocol": "",
        "workerStart": 0,
        "redirectStart": 0,
        "redirectEnd": 0,
        "fetchStart": 0.5,
        "domainLookupStart": 0.5,
        "domainLookupEnd": 0.5,
        "connectStart": 0.5,
        "connectEnd": 0.5,
        "secureConnectionStart": 0.5,
        "requestStart": 0.5,
        "responseStart": 0.5,
        "responseEnd": 1.6000000014901161,
        "transferSize": 0,
        "encodedBodySize": 0,
        "decodedBodySize": 0,
        "serverTiming": [],
        "renderBlockingStatus": "blocking",
        "responseStatus": 0,
        "name": "",
        "entryType": "navigation",
        "startTime": 0,
        "duration": 70.80000000447035
    };
    result[2] = {};
    Object.setPrototypeOf(result[2], PerformanceMeasure.prototype);
    name = globalMy.setfoundName(result[2]);
    globalMy.value[name] = {
        "detail": null,
        "name": "most-visited-rendered",
        "entryType": "measure",
        "startTime": 0,
        "duration": 125.70000000298023
    };
    result[3] = {};
    Object.setPrototypeOf(result[3], PerformanceMark.prototype);
    name = globalMy.setfoundName(result[3]);
    globalMy.value[name] = {
        "detail": null,
        "name": "app-creation-start",
        "entryType": "mark",
        "startTime": 51,
        "duration": 0
    };
    result[4] = {};
    Object.setPrototypeOf(result[4], PerformanceMeasure.prototype);
    name = globalMy.setfoundName(result[4]);
    globalMy.value[name] = {
        "detail": null,
        "name": "app-creation",
        "entryType": "measure",
        "startTime": 51,
        "duration": 13.5
    };
    result[5] = {};
    Object.setPrototypeOf(result[5], PerformanceMark.prototype);
    name = globalMy.setfoundName(result[5]);
    globalMy.value[name] = {
        "detail": null,
        "name": "logo-creation-start",
        "entryType": "mark",
        "startTime": 54.399999998509884,
        "duration": 0
    };
    result[6] = {};
    Object.setPrototypeOf(result[6], PerformanceMeasure.prototype);
    name = globalMy.setfoundName(result[6]);
    globalMy.value[name] = {
        "detail": null,
        "name": "logo-creation",
        "entryType": "measure",
        "startTime": 54.399999998509884,
        "duration": 4
    };
    result[7] = {};
    Object.setPrototypeOf(result[7], PerformanceMark.prototype);
    name = globalMy.setfoundName(result[7]);
    globalMy.value[name] = {
        "detail": null,
        "name": "realbox-creation-start",
        "entryType": "mark",
        "startTime": 56.20000000298023,
        "duration": 0
    };
    result[8] = {};
    Object.setPrototypeOf(result[8], PerformanceMeasure.prototype);
    name = globalMy.setfoundName(result[8]);
    globalMy.value[name] = {
        "detail": null,
        "name": "realbox-creation",
        "entryType": "measure",
        "startTime": 56.20000000298023,
        "duration": 8.100000001490116
    };
    result[9] = {};
    Object.setPrototypeOf(result[9], PerformancePaintTiming.prototype);
    name = globalMy.setfoundName(result[9]);
    globalMy.value[name] = {"name": "first-paint", "entryType": "paint", "startTime": 84.60000000149012, "duration": 0};
    result[10] = {};
    Object.setPrototypeOf(result[10], PerformancePaintTiming.prototype);
    name = globalMy.setfoundName(result[10]);
    globalMy.value[name] = {"name": "first-contentful-paint", "entryType": "paint", "startTime": 91.5, "duration": 0};
    result[11] = {};
    Object.setPrototypeOf(result[11], PerformanceMark.prototype);
    name = globalMy.setfoundName(result[11]);
    globalMy.value[name] = {
        "detail": null,
        "name": "most-visited-creation-start",
        "entryType": "mark",
        "startTime": 110.89999999850988,
        "duration": 0
    };
    result[12] = {};
    Object.setPrototypeOf(result[12], PerformanceMeasure.prototype);
    name = globalMy.setfoundName(result[12]);
    globalMy.value[name] = {
        "detail": null,
        "name": "most-visited-creation",
        "entryType": "measure",
        "startTime": 110.89999999850988,
        "duration": 6.9000000059604645
    };
    result[13] = {};
    Object.setPrototypeOf(result[13], PerformanceMark.prototype);
    name = globalMy.setfoundName(result[13]);
    globalMy.value[name] = {
        "detail": null,
        "name": "most-visited-mojo-start",
        "entryType": "mark",
        "startTime": 118.30000000447035,
        "duration": 0
    };
    result[14] = {};
    Object.setPrototypeOf(result[14], PerformanceMeasure.prototype);
    name = globalMy.setfoundName(result[14]);
    globalMy.value[name] = {
        "detail": null,
        "name": "most-visited-mojo",
        "entryType": "measure",
        "startTime": 118.30000000447035,
        "duration": 3.5
    };
    result[15] = {};
    Object.setPrototypeOf(result[15], PerformanceMeasure.prototype);
    name = globalMy.setfoundName(result[15]);
    globalMy.value[name] = {
        "detail": null,
        "name": "most-visited-mojo",
        "entryType": "measure",
        "startTime": 118.30000000447035,
        "duration": 4
    };

    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Performance_getEntries, arguments => ', arguments, '  result => ', '' + result);
    }
    return result;
};
globalMy.Performance_getEntriesByType = function () {
    if (!(this instanceof Performance)) {
        throw new TypeError("Illegal invocation");
    }
    var result;
    //这里写方法实体
    if (arguments[0] == "resource") {
        // 针对阿里滑块225的 跟script节点有关系, 这个resource
        var name;
        result = [];
        result[0] = {};
        Object.setPrototypeOf(result[0], PerformanceResourceTiming.prototype);
        name = globalMy.setfoundName(result[0]);
        globalMy.value[name]["name"] = "https://15x0or.tdum.alibaba.com/dss.js";

        result[1] = {};
        Object.setPrototypeOf(result[1], PerformanceResourceTiming.prototype);
        name = globalMy.setfoundName(result[1]);
        globalMy.value[name]["name"] = "https://ynuf.aliapp.org/w/wu.json";
    }

    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了Performance_getEntriesByType, arguments => ', arguments, '  result => ', '' + result);
    }
    return result;
};

// AudioParam
globalMy.AudioParam_setValueAtTime = function () {
    let result;
    //这里写方法实体
    result = this;
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioParam_setValueAtTime, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
    }
    return result;
};

// BaseAudioContext
globalMy.BaseAudioContext_createOscillator = function () {
    var oscillatorNode = {};
    Object.setPrototypeOf(oscillatorNode, OscillatorNode.prototype);
    var obj_name = globalMy.setfoundName(oscillatorNode);
    globalMy.value[obj_name]['type'] = 'sine';
    globalMy.value[obj_name]['numberOfInputs'] = 0;
    globalMy.value[obj_name]['numberOfOutputs'] = 1;
    globalMy.value[obj_name]['channelCount'] = 2;
    globalMy.value[obj_name]['channelCountMode'] = "max";
    globalMy.value[obj_name]['channelInterpretation'] = "speakers";
    globalMy.value[obj_name]['frequency'] = {};
    globalMy.value[obj_name]['detune'] = {};
    Object.setPrototypeOf(globalMy.value[obj_name]['frequency'], AudioParam.prototype);
    Object.setPrototypeOf(globalMy.value[obj_name]['detune'], AudioParam.prototype);
    var foundName = globalMy.setfoundName(globalMy.value[obj_name]['frequency']);
    globalMy.value[foundName]['value'] = 440;
    globalMy.value[foundName]['automationRate'] = 'a-rate';
    globalMy.value[foundName]['defaultValue'] = 440;
    globalMy.value[foundName]['minValue'] = -22050;
    globalMy.value[foundName]['maxValue'] = 22050;
    foundName = globalMy.setfoundName(globalMy.value[obj_name]['detune']);
    globalMy.value[foundName]['value'] = 0;
    globalMy.value[foundName]['automationRate'] = 'a-rate';
    globalMy.value[foundName]['defaultValue'] = 0;
    globalMy.value[foundName]['minValue'] = -153600;
    globalMy.value[foundName]['maxValue'] = 153600;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了BaseAudioContext_createOscillator, arguments => ', arguments, '  result => ' + oscillatorNode);
    }
    return oscillatorNode;
};
globalMy.BaseAudioContext_createDynamicsCompressor = function () {
    let result;
    //这里写方法实体
    result = {};
    Object.setPrototypeOf(result, DynamicsCompressorNode.prototype);
    var name = globalMy.setfoundName(result);
    globalMy.value[name]["channelCount"] = 2;
    globalMy.value[name]["channelCountMode"] = "clamped-max";
    globalMy.value[name]["channelInterpretation"] = "speakers";
    globalMy.value[name]["reduction"] = 0;
    globalMy.value[name]["numberOfInputs"] = 1;
    globalMy.value[name]["numberOfOutputs"] = 1;
    globalMy.value[name]["context"] = this;
    globalMy.value[name]["knee"] = {};
    Object.setPrototypeOf(globalMy.value[name]["knee"], AudioParam.prototype);
    var obj_name = globalMy.setfoundName(globalMy.value[name]["knee"]);
    globalMy.value[obj_name]['value'] = 40;
    globalMy.value[obj_name]['automationRate'] = 'k-rate';
    globalMy.value[obj_name]['defaultValue'] = 30;
    globalMy.value[obj_name]['minValue'] = 0;
    globalMy.value[obj_name]['maxValue'] = 40;
    globalMy.value[name]["ratio"] = {};
    Object.setPrototypeOf(globalMy.value[name]["ratio"], AudioParam.prototype);
    obj_name = globalMy.setfoundName(globalMy.value[name]["ratio"]);
    globalMy.value[obj_name]['value'] = 12;
    globalMy.value[obj_name]['automationRate'] = 'k-rate';
    globalMy.value[obj_name]['defaultValue'] = 12;
    globalMy.value[obj_name]['minValue'] = 1;
    globalMy.value[obj_name]['maxValue'] = 20;
    globalMy.value[name]["release"] = {};
    Object.setPrototypeOf(globalMy.value[name]["release"], AudioParam.prototype);
    obj_name = globalMy.setfoundName(globalMy.value[name]["release"]);
    globalMy.value[obj_name]['value'] = 0.25;
    globalMy.value[obj_name]['automationRate'] = 'k-rate';
    globalMy.value[obj_name]['defaultValue'] = 0.25;
    globalMy.value[obj_name]['minValue'] = 0;
    globalMy.value[obj_name]['maxValue'] = 1;
    globalMy.value[name]["attack"] = {};
    Object.setPrototypeOf(globalMy.value[name]["attack"], AudioParam.prototype);
    obj_name = globalMy.setfoundName(globalMy.value[name]["attack"]);
    globalMy.value[obj_name]['value'] = 0;
    globalMy.value[obj_name]['automationRate'] = 'k-rate';
    globalMy.value[obj_name]['defaultValue'] = 0.003000000026077032;
    globalMy.value[obj_name]['minValue'] = 0;
    globalMy.value[obj_name]['maxValue'] = 1;
    globalMy.value[name]["threshold"] = {};
    Object.setPrototypeOf(globalMy.value[name]["threshold"], AudioParam.prototype);
    obj_name = globalMy.setfoundName(globalMy.value[name]["threshold"]);
    globalMy.value[obj_name]['value'] = -50;
    globalMy.value[obj_name]['automationRate'] = 'k-rate';
    globalMy.value[obj_name]['defaultValue'] = -24;
    globalMy.value[obj_name]['minValue'] = -100;
    globalMy.value[obj_name]['maxValue'] = 0;
    if (globalMy.is_log) {
        console.log('[*]  调用了BaseAudioContext_createDynamicsCompressor, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
    }
    return result;
};
globalMy.BaseAudioContext_createAnalyser = function () {
    if (!(this instanceof BaseAudioContext)) {
        throw new TypeError("Illegal invocation");
    }
    let result = {};
    //这里写方法实体
    var name = globalMy.setfoundName(result);
    Object.setPrototypeOf(globalMy.element[name], AnalyserNode.prototype);
    globalMy.value[name] = {
        "fftSize": 2048,
        "frequencyBinCount": 1024,
        "minDecibels": -100,
        "maxDecibels": -30,
        "smoothingTimeConstant": 0.8,
        "context": this,
        "numberOfInputs": 1,
        "numberOfOutputs": 1,
        "channelCount": 2,
        "channelCountMode": "max",
        "channelInterpretation": "speakers"
    };

    if (globalMy.is_log) {
        console.log('[*]  调用了BaseAudioContext_createAnalyser, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
    }
    return result;
};
globalMy.BaseAudioContext_createGain = function () {
    if (!(this instanceof BaseAudioContext)) {
        throw new TypeError("Illegal invocation");
    }
    let result = {};
    //这里写方法实体
    var name = globalMy.setfoundName(result);
    Object.setPrototypeOf(globalMy.element[name], GainNode.prototype);
    globalMy.value[name] = {
        "gain": {},
        "context": this,
        "numberOfInputs": 1,
        "numberOfOutputs": 1,
        "channelCount": 2,
        "channelCountMode": "max",
        "channelInterpretation": "speakers"
    }
    Object.setPrototypeOf(globalMy.value[name].gain, AudioParam.prototype);
    name = globalMy.setfoundName(globalMy.value[name].gain);
    globalMy.value[name] = {
        "value": 1,
        "automationRate": "a-rate",
        "defaultValue": 1,
        "minValue": -3.4028234663852886e+38,
        "maxValue": 3.4028234663852886e+38
    }
    if (globalMy.is_log) {
        console.log('[*]  调用了BaseAudioContext_createGain, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
    }
    return result;
};

// StorageManager
globalMy.StorageManager_estimate = function () {
    if (!(this instanceof StorageManager)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    result = new Promise((resolve => {
        resolve({
            quota: 1764674537,
            usage: 0,
            usageDetails: {},
        })
    }))
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了StorageManager_estimate, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
    }
    return result;
};


// OfflineAudioContext
globalMy.OfflineAudioContext_startRendering = function () {
    let result;
    //这里写方法实体
    result = new Promise(resolve => {
        resolve(this);
    });
    if (globalMy.is_log) {
        console.log('[*]  调用了OfflineAudioContext_startRendering, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
    }
    return result;
};

// AudioNode
globalMy.AudioNode_connect = function () {
    let result;
    //这里写方法实体
    result = {};
    Object.setPrototypeOf(result, DynamicsCompressorNode.prototype);
    var name = globalMy.setfoundName(result);
    globalMy.value[name]["channelCount"] = 2;
    globalMy.value[name]["channelCountMode"] = "clamped-max";
    globalMy.value[name]["channelInterpretation"] = "speakers";
    globalMy.value[name]["reduction"] = 0;
    globalMy.value[name]["numberOfInputs"] = 1;
    globalMy.value[name]["numberOfOutputs"] = 1;
    globalMy.value[name]["context"] = this;
    globalMy.value[name]["knee"] = {};
    Object.setPrototypeOf(globalMy.value[name]["knee"], AudioParam.prototype);
    var obj_name = globalMy.setfoundName(globalMy.value[name]["knee"]);
    globalMy.value[obj_name]['value'] = 40;
    globalMy.value[obj_name]['automationRate'] = 'k-rate';
    globalMy.value[obj_name]['defaultValue'] = 30;
    globalMy.value[obj_name]['minValue'] = 0;
    globalMy.value[obj_name]['maxValue'] = 40;
    globalMy.value[name]["ratio"] = {};
    Object.setPrototypeOf(globalMy.value[name]["ratio"], AudioParam.prototype);
    obj_name = globalMy.setfoundName(globalMy.value[name]["ratio"]);
    globalMy.value[obj_name]['value'] = 12;
    globalMy.value[obj_name]['automationRate'] = 'k-rate';
    globalMy.value[obj_name]['defaultValue'] = 12;
    globalMy.value[obj_name]['minValue'] = 1;
    globalMy.value[obj_name]['maxValue'] = 20;
    globalMy.value[name]["release"] = {};
    Object.setPrototypeOf(globalMy.value[name]["release"], AudioParam.prototype);
    obj_name = globalMy.setfoundName(globalMy.value[name]["release"]);
    globalMy.value[obj_name]['value'] = 0.25;
    globalMy.value[obj_name]['automationRate'] = 'k-rate';
    globalMy.value[obj_name]['defaultValue'] = 0.25;
    globalMy.value[obj_name]['minValue'] = 0;
    globalMy.value[obj_name]['maxValue'] = 1;
    globalMy.value[name]["attack"] = {};
    Object.setPrototypeOf(globalMy.value[name]["attack"], AudioParam.prototype);
    obj_name = globalMy.setfoundName(globalMy.value[name]["attack"]);
    globalMy.value[obj_name]['value'] = 0;
    globalMy.value[obj_name]['automationRate'] = 'k-rate';
    globalMy.value[obj_name]['defaultValue'] = 0.003000000026077032;
    globalMy.value[obj_name]['minValue'] = 0;
    globalMy.value[obj_name]['maxValue'] = 1;
    globalMy.value[name]["threshold"] = {};
    Object.setPrototypeOf(globalMy.value[name]["threshold"], AudioParam.prototype);
    obj_name = globalMy.setfoundName(globalMy.value[name]["threshold"]);
    globalMy.value[obj_name]['value'] = -50;
    globalMy.value[obj_name]['automationRate'] = 'k-rate';
    globalMy.value[obj_name]['defaultValue'] = -24;
    globalMy.value[obj_name]['minValue'] = -100;
    globalMy.value[obj_name]['maxValue'] = 0;
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioNode_connect, arguments => ' + JSON.stringify(arguments) + '  result => ', result);
    }
    return result;
};

// AudioDestinationNode
globalMy.AudioDestinationNode_get_maxChannelCount = function () {
    let result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['maxChannelCount'];
    if (globalMy.is_log) {
        console.log('[*]  调用了AudioDestinationNode_get_maxChannelCount,result => ', result);
    }
    return result;
};

// CustomEvent
globalMy.CustomEvent_initCustomEvent = function () {
    if (!(this instanceof CustomEvent)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    var type = arguments[0];
    if (typeof type !== "string") {
        debugger;
    }
    var foundName = globalMy.foundEventName(this);
    globalMy.event_value[foundName].type = type;
    if (arguments[3] && typeof arguments[3] == 'object') {
        globalMy.event_value[foundName].detail = arguments[3];
    }
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了CustomEvent_initCustomEvent, arguments => ', arguments, '  result => ', result)
    }
    return result;
}

// Crypto
globalMy.Crypto_getRandomValues = function (typedArray) {
    if (!(this instanceof Crypto)) {
        throw new TypeError("Illegal invocation");
    }
    if (!(typedArray instanceof Uint16Array.__proto__)) {
        throw new TypeError(`Failed to execute 'getRandomValues' on 'Crypto': parameter 1 is not of type 'ArrayBufferView'.`);
    }
    globalMy.crypto.randomBytes(typedArray.length).forEach((v, i) => {
        typedArray[i] = v;
    });
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了Crypto_getRandomValues, arguments => ', JSON.stringify(arguments), '  result => ', typedArray)
    }
    return typedArray;
}

// OffscreenCanvas
globalMy.OffscreenCanvas_getContext = function (type) {
    if (!(this instanceof OffscreenCanvas)) {
        throw new TypeError("Illegal invocation");
    }
    let result;
    switch (type) {
        case "2d":
            result = {};
            Object.setPrototypeOf(result, OffscreenCanvasRenderingContext2D.prototype);
            var name = globalMy.setfoundName(result);
            globalMy.value[name] = {
                "canvas": this,
                "globalAlpha": 1,
                "globalCompositeOperation": "source-over",
                "filter": "none",
                "imageSmoothingEnabled": true,
                "imageSmoothingQuality": "low",
                "strokeStyle": "#000000",
                "fillStyle": "#000000",
                "shadowOffsetX": 0,
                "shadowOffsetY": 0,
                "shadowBlur": 0,
                "shadowColor": "rgba(0, 0, 0, 0)",
                "lineWidth": 1,
                "lineCap": "butt",
                "lineJoin": "miter",
                "miterLimit": 10,
                "lineDashOffset": 0,
                "font": "10px sans-serif",
                "textAlign": "start",
                "textBaseline": "alphabetic",
                "direction": "ltr",
                "fontKerning": "auto",
                "fontStretch": "normal",
                "fontVariantCaps": "normal",
                "letterSpacing": "0px",
                "textRendering": "auto",
                "wordSpacing": "0px"
            }
            break
    }
    //这里写方法实体
    if (globalMy.is_log) {
        console.log('[*]  调用了OffscreenCanvas_getContext, arguments => ', JSON.stringify(arguments), '  result => ', result)
    }
    return result;
}

// ImageData
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

    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了ImageData_get_data, result => ', result)
    }
    return result;
}

// URL
globalMy.URL_createObjectURL = function () {
    if (this !== URL) {
        throw new TypeError("Illegal invocation");
    }
    var result;
    var uuid = globalMy.generateUUID();
    result = `blob:${location.href}/${uuid}`;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了URL_createObjectURL arguments => ', arguments, ' ,result => ', result)
    }
    return result;
}
globalMy.URL_revokeObjectURL = function () {
    if (this !== URL) {
        throw new TypeError("Illegal invocation");
    }
    var result;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了URL_revokeObjectURL arguments => ', arguments, ' ,result => ', result)
    }
    return result;
}

globalMy.matchMedia_ = [];
// window function
globalMy.window_matchMedia = function () {
    var result = {};
    var name = globalMy.setfoundName(result);
    Object.setPrototypeOf(result, MediaQueryList.prototype);
    globalMy.matchMedia_.push(arguments[0]);
    var true_track = ['(any-pointer: fine )', '(any-pointer )', '(any-hover: hover )', '(any-hover )', '(color-gamut: srgb )', '(color-gamut )'];
    globalMy.value[name] = {
        matches: false,
        media: arguments[0] + '',
        onchange: null
    };
    if (true_track.indexOf(arguments[0]) > -1) {
        globalMy.value[name].matches = true;
    }
    if (globalMy.is_log) {
        globalMy.console.log("[*]  调用了matchMedia方法, arguments ->", arguments, " result ->", '' + result);
    }
    return result;
};
globalMy.window_getComputedStyle = function () {
    var name = globalMy.foundName(arguments[0]);
    var result = globalMy.dom_window.getComputedStyle(globalMy.jsdom_element[name]);
    name = globalMy.foundJsdomName(result, "CSSStyleDeclaration");
    for (var i in globalMy.style) {
        globalMy.element[name][i] = globalMy.style[i];
    }
    Object.setPrototypeOf(globalMy.element[name], CSSStyleDeclaration.prototype);
    result = globalMy.element[name];
    if (globalMy.is_log) {
        globalMy.console.log("[*]  调用了getComputedStyle方法, arguments ->", arguments, " result ->", '' + result);
    }
    return result;
};
globalMy.window_webkitRequestFileSystem = function () {
    if (globalMy.is_log) {
        globalMy.console.log("[*]  调用了webkitRequestFileSystem方法 arguments -> ", arguments);
    }
};
globalMy.window_openDatabase = function () {
    var result;
    var name = globalMy.setfoundName({});
    globalMy.element[name].version = "";
    Object.setPrototypeOf(globalMy.element[name], Utils.Database_prototype);
    result = globalMy.element[name];
    if (globalMy.is_log) {
        globalMy.console.log("[*]  调用了webkitRequestFileSystem方法 arguments -> ", arguments, " result ->", '' + result);
    }
    return result;
};
globalMy.window_structuredClone = function (obj) {
    if (globalMy.is_log) {
        globalMy.console.log("[*]  调用了window_structuredClone方法 arguments -> ", arguments,);
    }
    var result;
    if (obj == undefined || obj == null) {
        result = obj;
    } else if (Array.isArray(obj)) {
        result = obj.map((item) => item);
    } else if (obj.__proto__ == Object.prototype) {
        result = {}
        globalMy.is_log = false;
        for (var i in obj) {
            result[i] = window.structuredClone(obj[i]);
        }
        globalMy.is_log = true;
    } else {
        var prototype_name = obj.__proto__[Symbol.toStringTag];
        if (prototype_name in window) {
            globalMy.call_error(`Failed to execute 'structuredClone' on 'Window': ${prototype_name} object could not be cloned.`
                , "Error: ")
        } else {
            debugger;
        }
    }
    if (globalMy.is_log) {
        globalMy.console.log("[*]  调用了webkitRequestFileSystem方法", " result ->", '' + result);
    }
    return result;
}
globalMy.window_btoa = globalMy.base64.base64encode;
globalMy.window_atob = globalMy.base64.base64decode;