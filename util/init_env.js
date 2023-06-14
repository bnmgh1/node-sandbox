// 堆栈拦截处
Utils.Error_get_stack = function () {
    /* 改堆栈真的会有不少奇奇怪怪的bug, 尤其是在debug的时候, 容易崩溃 */
    let stack = arguments[0].split("\n");
    let length = stack.length;
    for (let i = 1; i < length;) {
        if (stack[i].indexOf("    at new globalMy.") === 0 || stack[i].indexOf("    at globalMy.") === 0 || stack[i].indexOf("    at new ") === 0 || stack[i].indexOf(":") < 0 || stack[i].indexOf("./test.js") > -1) {
            stack.splice(i, 1);
            length -= 1;
            continue;
        } else if (stack[i].indexOf(`.runInContext (node:`) > -1) {
            stack.splice(i, length - i + 1);
            break;
        }
        i++;
    }
    stack = stack.join('\n');
    // vm堆栈改写
    stack = stack.replace(/evalmachine.<anonymous>/g, globalMy.memory.script_name || "dsadczxf.js").replace(/\(eval at globalMy\.initSource \((.*?)\)/g, '($1');

    // vm2
    // stack = stack.replace(/([\w\d:\\-]+\/setup-sandbox\.js)/g, globalMy.memory.script_name || "dsadczxf.js");
    console.log("报错堆栈 -> ", stack);
    return stack;
}


this.cost_time = +new Date;

globalMy.rePromise = function () {
    "use strict";
    delete this.Promise;
    /*
自定义Promise函数模块：IIFE
 */
    globalMy.PENDING = 'pending';
    globalMy.RESOVLED = 'resolved';
    globalMy.REJECTED = 'rejected';
    //Promise构造函数
//executor执行器函数
    globalMy.Promise = function Promise(executor) {
        let that = this;
        this.status = globalMy.PENDING;   //状态未变之前都是pending
        this.data = undefined;     //未定义的数据
        this.callbacks = [];       //每个元素的结构：onResolved(){},onRejected(){}
        //执行器函数，会立即执行
        //两个改变promise状态的函数
        function resolve(value) {
            if (that.status !== globalMy.PENDING) return
            //调用resolve后，需要将状态改变成为resolved
            that.status = globalMy.RESOVLED;
            //保存data数据
            that.data = value;
            //如果有未执行的callback，则立即异步执行onResolved,是包含两个回调的对象
            if (that.callbacks.length > 0) {
                globalMy.setPromise(() => {
                    that.callbacks.forEach(element => {
                        element.onResolved(value)
                    });
                });
            }
        }

        function reject(reason) {
            if (that.status !== globalMy.PENDING) return
            //调用reject后，需要将状态改变成为rejected
            that.status = globalMy.REJECTED;
            //保存data数据
            that.data = reason;
            //如果有未执行的callback，则立即异步执行onRejected,是包含两个回调的对象
            if (that.callbacks.length > 0) {
                globalMy.setPromise(() => {
                    that.callbacks.forEach(element => {
                        element.onResolved(reason)
                    });
                });
            }
        }

        //传入的参数为两个函数
        //除了resolve和reject,还有可能自己抛出异常，会失败，此时需要一个try catch
        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error);
        }
    }
    /*

    返回新的Promise
     */
    globalMy.Promise_then = function (onResolved, onRejected) {
        const that = this;
        // 指定回调函数的默认值(必须是函数)
        onResolved = typeof onResolved === 'function' ? onResolved : value => value  //继续向下传递
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {
            throw reason
        }  //抛出异常
        return new Promise((resolve, reject) => {
            function handle(callback) {
                try {
                    const result = callback(that.data)
                    if (result instanceof Promise) {
                        result.then(resolve, reject
                            // value =>{
                            //     resolve(value)
                            // },
                            // reason=>{
                            //     reject(reason)
                            // }
                        )
                    }
                } catch (error) {
                    reject(error);
                }
            }

            if (this.status === globalMy.PENDING) {
                //假设当前状态还是pending,将回调保存下来
                this.callbacks.push({
                    onResolved(value) {
                        handle(onResolved)
                    },
                    onRejected(reason) {
                        handle(onRejected)
                    }
                })
            } else if (this.status === globalMy.RESOVLED) {
                globalMy.setPromise(() => {
                    //  如果回调是promise,return的promise结果就是这个promise结果
                    handle(onResolved)
                });
            } else {
                //如果前面的promise返回的是失败的回调
                globalMy.setPromise(() => {
                    handle(onRejected)
                });
            }
        })
    }
    /*
    接收失败的回调
    返回新的promise
     */
    globalMy.Promise_catch = function (onRejected) {
        return this.then(undefined, onRejected)
    }
    /*
    promise函数对象的resolve方法
     */
    globalMy.Promise_resolve = function (value) {
        return new Promise((resolve, reject) => {
            if (value instanceof Promise) {
                value.then(resolve, reject)
            } else {
                resolve(value);
            }
        })
    }
    /*
    promise函数对象的reject方法
     */
    globalMy.Promise_reject = function (reason) {
        return new Promise((resolve, reject) => {
            reject(reason)
        })
    }
    //all接收数组
    globalMy.Promise_all = function (promises) {
        const values = [];
        const resolvedCount = 0;
        return new Promise((resolve, reject) => {
            //遍历promise获取每个promise的结果
            promises.forEach((p, index) => {
                Promise.resolve(p).then(
                    //成功的时候需要放入数组中
                    value => {
                        resolvedCount++;
                        values[index] = value;
                        if (resolvedCount == promises.length) {
                            resolve(values);
                        }
                    },
                    reason => {
                        //只要一个失败了，return的promise就失败
                        reject(reason)
                    }
                )
            })
        })
    }
    //race接收数组
    globalMy.Promise_race = function (promise) {
        //返回一个pomise
        return new Promise((resolve, reject) => {
            Promise.resolve(p).then(
                //一旦有成功，return成功
                value => {
                    resolve(value);
                },
                //一旦有失败，return失败
                reason => {
                    reject(reason)
                }
            )
        })
    }
    // promise的resolveDelay，rejectDelay
    /* promise函数对象的resolveDelay方法
    */
    globalMy.Promise_resolveDelay = function (value, time) {
        return new Promise((resolve, reject) => {
            globalMy.setPromise(() => {
                if (value instanceof Promise) {
                    value.then(resolve, reject)
                } else {
                    resolve(value);
                }
            }, time);
        })
    }
    /*
    promise函数对象的rejectDelay方法
    */
    globalMy.Promise_rejectDelay = function (reason, time) {
        return new Promise((resolve, reject) => {
            globalMy.setPromise(() => {
                reject(reason)
            }, time);
        })
    }

    Object.defineProperty(globalMy["Promise"], Symbol.species, {
        configurable: true,
        enumerable: false,
        get: function () {
            return globalMy["Promise"];
        },
        set: undefined,
    });
    Utils.setNative(globalMy["Promise"]);
    Utils.setNative(Object.getOwnPropertyDescriptor(globalMy["Promise"], Symbol.species).get);
    //  "get [Symbol.species]"
    Utils.defineProperty(globalMy["Promise"], "caller", 0);
    Utils.defineProperty(globalMy["Promise"], "arguments", 0);
    delete globalMy["Promise"].caller;
    delete globalMy["Promise"].arguments;

}
globalMy.initEnv = function () {
    for (let i in globalMy.memory.throw_err) {
        // 删除重复对象,否则会导致我们注册函数到global下时失败
        if (i in this) {
            delete this[i];
        }
        let err = globalMy.memory.throw_err[i];
        // 自定义的构造函数 比如Document. 这里只是随便生成了一个函数
        if (!(i in globalMy)) {
            if (err.length === 2 && err[1] !== "") {
                // 如果new 传参少于某长度就会报错.
                let len = err[1];
                let less_code = globalMy.arg_less_code.replace('replace', i).replace("1", len.toString());
                let err_code = globalMy.err_code.replace("replace", err[0]);
                // 基本是1
                globalMy[i] = new Function(`return function ${i}() {
                    if (!new.target) {
                        throw new TypeError("${err_code}");
                    }
                    if (arguments.length < ${len}) {
                        throw new TypeError("${less_code}");
                    }
                    globalMy.console.log("[*]  new 构造函数 ->", this[Symbol.toStringTag], ", arguments =>", arguments);
                }`)();
            } else if (err.length === 0 || err[1] === "") {
                globalMy[i] =  new Function(`return function ${i}() {
                    throw new TypeError("Illegal constructor");
                }`)();
            } else {
                // 说明可以直接new
                let err_code = globalMy.err_code.replace("replace", err[0]);
                globalMy[i] = new Function(`return function ${i}() {
                    if (!new.target) {
                        throw new TypeError("${err_code}");
                    }
                    globalMy.console.log("[*]  new 构造函数 ->", this[Symbol.toStringTag], ", arguments =>", arguments);
                }`)();
            }
        }
        Utils.setNative(globalMy[i]);
    }
    // 重写Promise
    globalMy.rePromise.call(this);
    Utils.initEnv();
    Utils.initWindow();

}
globalMy.initEnv.call(this);
globalMy.console.log("node环境框架初始化耗时:", +new Date - cost_time, "毫秒");

cost_time = +new Date;

// 初始化window对象赋值
globalMy.initWindow = function (dom_window, is_init) {
    if (!is_init) {
        // 本来要new一份 iframe标签的window, 现在换一种思路了. 直接new一份vm环境, 导出里面初始化好的this当做contentWindow
        // var window_name = globalMy.setfoundName(Utils.newWindow());
        // globalMy.jsdom_element[window_name] = dom_window;
    } else {
        var window_name = globalMy.setfoundName(this);
        globalMy.jsdom_element[window_name] = dom_window;
        var m = +new Date;
        this.zzz_mark_key = this;
        // vm vm2的bug
        var desp = Object.getOwnPropertyDescriptors(this);
        for (var i in desp) {
            if ("set" in desp[i]) {
                Object.defineProperty(this, i, desp[i]);
            }
        }
        console.log("重定义window get set 耗时 ", +new Date - m, " 毫秒");
        delete this[Symbol.toStringTag];
    }

    globalMy.element[window_name].__proto__ = Window.prototype;
    Object.setPrototypeOf(globalMy.element[window_name], Window.prototype);

    globalMy.value[window_name].location = Utils.newLocation();
    globalMy.value[window_name].document = Utils.newDocument();

    var console_name = globalMy.setfoundName(console);
    globalMy.value[console_name].memory = {};
    Object.setPrototypeOf(globalMy.value[console_name].memory, Utils.MemoryInfo_prototype);
    globalMy.obj_name = globalMy.setfoundName(globalMy.value[console_name].memory);
    globalMy.value[globalMy.obj_name] = {
        jsHeapSizeLimit: 3760000000,
        totalJSHeapSize: 13400000,
        usedJSHeapSize: 11900000,
    }

    var document_name = globalMy.setfoundName(globalMy.value[window_name].document);
    globalMy.value[document_name].location = globalMy.value[window_name].location;
    globalMy.jsdom_element[document_name] = dom_window.document;
    Object.setPrototypeOf(globalMy.element[document_name], HTMLDocument.prototype);
    globalMy.value[document_name].readyState = "complete";

    globalMy.value[document_name].visibilityState = "visible";

    // document.all
    globalMy.value[document_name].all = new wanfeng.xtd;
    globalMy.obj_name = globalMy.setfoundName(globalMy.value[document_name].all);
    globalMy.value[document_name].all.__proto__ = HTMLAllCollection.prototype;
    globalMy.value[globalMy.obj_name].length = 0;

    globalMy.initDomTree(dom_window.document);

    var location_name = globalMy.setfoundName(globalMy.value[window_name].location);
    Object.setPrototypeOf(globalMy.value[window_name].location, Location.prototype);

    globalMy.value[location_name]['ancestorOrigins'] = {};
    globalMy.obj_name = globalMy.setfoundName(globalMy.value[location_name]['ancestorOrigins']);
    Object.setPrototypeOf(globalMy.value[location_name]['ancestorOrigins'], DOMStringList.prototype);
    globalMy.value[globalMy.obj_name]['length'] = 0;
    globalMy.value[location_name]['href'] = dom_window.location.href;
    globalMy.value[location_name]['origin'] = dom_window.location.origin;
    globalMy.value[location_name]['protocol'] = dom_window.location.protocol;
    globalMy.value[location_name]['host'] = dom_window.location.host;
    globalMy.value[location_name]['hostname'] = dom_window.location.hostname;
    globalMy.value[location_name]['port'] = dom_window.location.port;
    globalMy.value[location_name]['pathname'] = dom_window.location.pathname;
    globalMy.value[location_name]['search'] = dom_window.location.search;
    globalMy.value[location_name]['hash'] = dom_window.location.hash;

    delete this.oncontentvisibilityautostatechange;
    // window初始化赋值
    globalMy.value[window_name]['name'] = '';
    globalMy.value[window_name]['status'] = '';
    globalMy.value[window_name]['closed'] = false;
    globalMy.value[window_name]['length'] = 0;
    globalMy.value[window_name]['origin'] = dom_window.origin;
    globalMy.value[window_name]['innerWidth'] = 1920;
    globalMy.value[window_name]['innerHeight'] = 937;
    globalMy.value[window_name]['scrollX'] = 0;
    globalMy.value[window_name]['pageXOffset'] = 0;
    globalMy.value[window_name]['scrollY'] = 0;
    globalMy.value[window_name]['pageYOffset'] = 0;
    globalMy.value[window_name]['screenX'] = 0;
    globalMy.value[window_name]['screenY'] = 0;
    globalMy.value[window_name]['outerWidth'] = 1920;
    globalMy.value[window_name]['outerHeight'] = 1040;
    globalMy.value[window_name]['devicePixelRatio'] = 1;
    globalMy.value[window_name]['screenLeft'] = 0;
    globalMy.value[window_name]['screenTop'] = 0;
    globalMy.value[window_name]['defaultStatus'] = '';
    globalMy.value[window_name]['isSecureContext'] = true;
    globalMy.value[window_name]['crossOriginIsolated'] = false;
    globalMy.value[window_name]['originAgentCluster'] = false;
    globalMy.value[window_name]['status'] = '';
    globalMy.value[window_name]['closed'] = false;
    globalMy.value[window_name]['length'] = 0;
    globalMy.value[window_name]['self'] = this;
    globalMy.value[window_name]['parent'] = !globalMy.window_parent ? this : globalMy.window_parent;
    globalMy.value[window_name]['top'] = globalMy.value[window_name]['parent'];
    globalMy.value[window_name]['frames'] = this;
    globalMy.value[window_name]['webkitStorageInfo'] = {};
    Object.setPrototypeOf(globalMy.value[window_name]['webkitStorageInfo'], Utils.DeprecatedStorageInfo_prototype);

    globalMy.value[window_name]['scheduler'] = {};
    Object.setPrototypeOf(globalMy.value[window_name]['scheduler'], Scheduler.prototype);

    globalMy.value[window_name]['cookieStore'] = {};
    Object.setPrototypeOf(globalMy.value[window_name]['cookieStore'], CookieStore.prototype);

    globalMy.value[window_name]['caches'] = {};
    Object.setPrototypeOf(globalMy.value[window_name]['caches'], CacheStorage.prototype);

    globalMy.value[window_name]['speechSynthesis'] = {};
    Object.setPrototypeOf(globalMy.value[window_name]['speechSynthesis'], Utils.SpeechSynthesis_prototype);
    globalMy.obj_name = globalMy.setfoundName(globalMy.value[window_name]['speechSynthesis']);
    globalMy.value[globalMy.obj_name] = {
        "pending": false,
        "speaking": false,
        "paused": false,
        "onvoiceschanged": null
    }

    globalMy.value[window_name]['navigation'] = {};
    Object.setPrototypeOf(globalMy.value[window_name]['navigation'], Navigation.prototype);
    globalMy.obj_name = globalMy.setfoundName(globalMy.value[window_name]['Navigation']);
    globalMy.value[globalMy.obj_name] = {
        "currentEntry": {},
        "transition": null,
        "canGoBack": false,
        "canGoForward": false,
        "onnavigate": null,
        "onnavigatesuccess": null,
        "onnavigateerror": null,
        "oncurrententrychange": null
    }
    Object.setPrototypeOf(globalMy.value[globalMy.obj_name].currentEntry, NavigationHistoryEntry.prototype);
    globalMy.obj_name_1 = globalMy.setfoundName(globalMy.value[globalMy.obj_name].currentEntry);
    globalMy.value[globalMy.obj_name_1] = {
        "key": "1c6b5989-c663-4eb9-9def-498df5b7aaae",
        "id": "b9ff2f7d-fc31-40d0-876d-46d80e11e52f",
        "url": "https://bitbucket.org/letsgogo/letsgogo_14/src/master/README.md",
        "index": 0,
        "sameDocument": true,
        "ondispose": null
    }


    globalMy.value[window_name]['external'] = {};
    Object.setPrototypeOf(globalMy.value[window_name]['external'], External.prototype);

    globalMy.value[window_name]['visualViewport'] = {};
    Object.setPrototypeOf(globalMy.value[window_name]['visualViewport'], VisualViewport.prototype);

    globalMy.value[window_name]['styleMedia'] = {};
    Object.setPrototypeOf(globalMy.value[window_name]['styleMedia'], Utils.StyleMedia_prototype);
    globalMy.obj_name = globalMy.setfoundName(globalMy.value[window_name]['styleMedia']);
    globalMy.value[globalMy.obj_name]['type'] = "screen";

    globalMy.value[window_name]['trustedTypes'] = {};
    Object.setPrototypeOf(globalMy.value[window_name]['trustedTypes'], TrustedTypePolicyFactory.prototype);
    globalMy.value[window_name]['performance'] = {};
    Object.setPrototypeOf(globalMy.value[window_name]['performance'], Performance.prototype);
    globalMy.obj_name = globalMy.setfoundName(globalMy.value[window_name]['performance']);
    globalMy.value[globalMy.obj_name]['eventCounts'] = {};
    Object.setPrototypeOf(globalMy.value[globalMy.obj_name]['eventCounts'], EventCounts.prototype);
    globalMy.obj_name_1 = globalMy.setfoundName(globalMy.value[globalMy.obj_name]['eventCounts']);
    globalMy.value[globalMy.obj_name_1]['size'] = 36;

    globalMy.value[globalMy.obj_name]['memory'] = {};
    Object.setPrototypeOf(globalMy.value[globalMy.obj_name]['eventCounts'], Utils.MemoryInfo_prototype);
    globalMy.obj_name_1 = globalMy.setfoundName(globalMy.value[globalMy.obj_name]['memory']);

    globalMy.value[globalMy.obj_name]['navigation'] = {};
    Object.setPrototypeOf(globalMy.value[globalMy.obj_name]['navigation'], PerformanceNavigation.prototype);
    globalMy.obj_name_1 = globalMy.setfoundName(globalMy.value[globalMy.obj_name]['navigation']);

    globalMy.value[globalMy.obj_name]['timeOrigin'] = Date.now() + 0.8;

    globalMy.value[globalMy.obj_name_1] = {
        redirectCount: 0,
        type: 0
    };

    globalMy.value[globalMy.obj_name]['onresourcetimingbufferfull'] = null;

    globalMy.value[globalMy.obj_name_1] = {
        jsHeapSizeLimit: 4294705152,
        totalJSHeapSize: 10156931,
        usedJSHeapSize: 6103087,
    }

    globalMy.value[window_name]['locationbar'] = {};
    globalMy.value[window_name]['menubar'] = {};
    globalMy.value[window_name]['personalbar'] = {};
    globalMy.value[window_name]['scrollbars'] = {};
    globalMy.value[window_name]['statusbar'] = {};
    globalMy.value[window_name]['toolbar'] = {};

    globalMy.obj_name = globalMy.setfoundName(globalMy.value[window_name]['locationbar']);
    Object.setPrototypeOf(globalMy.value[window_name]['locationbar'], BarProp.prototype);
    globalMy.value[globalMy.obj_name].visible = true;
    globalMy.obj_name = globalMy.setfoundName(globalMy.value[window_name]['menubar']);
    Object.setPrototypeOf(globalMy.value[window_name]['menubar'], BarProp.prototype);
    globalMy.value[globalMy.obj_name].visible = true;
    globalMy.obj_name = globalMy.setfoundName(globalMy.value[window_name]['personalbar']);
    Object.setPrototypeOf(globalMy.value[window_name]['personalbar'], BarProp.prototype);
    globalMy.value[globalMy.obj_name].visible = true;
    globalMy.obj_name = globalMy.setfoundName(globalMy.value[window_name]['scrollbars']);
    Object.setPrototypeOf(globalMy.value[window_name]['scrollbars'], BarProp.prototype);
    globalMy.value[globalMy.obj_name].visible = true;
    globalMy.obj_name = globalMy.setfoundName(globalMy.value[window_name]['statusbar']);
    Object.setPrototypeOf(globalMy.value[window_name]['statusbar'], BarProp.prototype);
    globalMy.value[globalMy.obj_name].visible = true;
    globalMy.obj_name = globalMy.setfoundName(globalMy.value[window_name]['toolbar']);
    Object.setPrototypeOf(globalMy.value[window_name]['toolbar'], BarProp.prototype);
    globalMy.value[globalMy.obj_name].visible = true;

    globalMy.value[window_name]['launchQueue'] = {};
    Object.setPrototypeOf(globalMy.value[window_name]['launchQueue'], LaunchQueue.prototype);
    globalMy.value[window_name]['crypto'] = {};
    Object.setPrototypeOf(globalMy.value[window_name]['crypto'], Crypto.prototype);

    // null
    globalMy.value[window_name]['onbeforeinput'] = null;
    globalMy.value[window_name]['oncontentvisibilityautostatechange'] = null;
    globalMy.value[window_name]['opener'] = null;
    globalMy.value[window_name]['frameElement'] = !globalMy.window_frameElement ? null : globalMy.window_frameElement;
    globalMy.value[window_name]['onsearch'] = null;
    globalMy.value[window_name]['onappinstalled'] = null;
    globalMy.value[window_name]['onbeforeinstallprompt'] = null;
    globalMy.value[window_name]['onbeforexrselect'] = null;
    globalMy.value[window_name]['onabort'] = null;
    globalMy.value[window_name]['onblur'] = null;
    globalMy.value[window_name]['oncancel'] = null;
    globalMy.value[window_name]['oncanplay'] = null;
    globalMy.value[window_name]['oncanplaythrough'] = null;
    globalMy.value[window_name]['onchange'] = null;
    globalMy.value[window_name]['onclick'] = null;
    globalMy.value[window_name]['onclose'] = null;
    globalMy.value[window_name]['oncontextlost'] = null;
    globalMy.value[window_name]['oncontextmenu'] = null;
    globalMy.value[window_name]['oncontextrestored'] = null;
    globalMy.value[window_name]['oncuechange'] = null;
    globalMy.value[window_name]['ondblclick'] = null;
    globalMy.value[window_name]['ondrag'] = null;
    globalMy.value[window_name]['ondragend'] = null;
    globalMy.value[window_name]['ondragenter'] = null;
    globalMy.value[window_name]['ondragleave'] = null;
    globalMy.value[window_name]['ondragover'] = null;
    globalMy.value[window_name]['ondragstart'] = null;
    globalMy.value[window_name]['ondrop'] = null;
    globalMy.value[window_name]['ondurationchange'] = null;
    globalMy.value[window_name]['onemptied'] = null;
    globalMy.value[window_name]['onended'] = null;
    globalMy.value[window_name]['onerror'] = null;
    globalMy.value[window_name]['onfocus'] = null;
    globalMy.value[window_name]['onformdata'] = null;
    globalMy.value[window_name]['oninput'] = null;
    globalMy.value[window_name]['oninvalid'] = null;
    globalMy.value[window_name]['onkeydown'] = null;
    globalMy.value[window_name]['onkeypress'] = null;
    globalMy.value[window_name]['onkeyup'] = null;
    globalMy.value[window_name]['onload'] = null;
    globalMy.value[window_name]['onloadeddata'] = null;
    globalMy.value[window_name]['onloadedmetadata'] = null;
    globalMy.value[window_name]['onloadstart'] = null;
    globalMy.value[window_name]['onmousedown'] = null;
    globalMy.value[window_name]['onmouseenter'] = null;
    globalMy.value[window_name]['onmouseleave'] = null;
    globalMy.value[window_name]['onmousemove'] = null;
    globalMy.value[window_name]['onmouseout'] = null;
    globalMy.value[window_name]['onmouseover'] = null;
    globalMy.value[window_name]['onmouseup'] = null;
    globalMy.value[window_name]['onmousewheel'] = null;
    globalMy.value[window_name]['onpause'] = null;
    globalMy.value[window_name]['onplay'] = null;
    globalMy.value[window_name]['onplaying'] = null;
    globalMy.value[window_name]['onprogress'] = null;
    globalMy.value[window_name]['onratechange'] = null;
    globalMy.value[window_name]['onreset'] = null;
    globalMy.value[window_name]['onresize'] = null;
    globalMy.value[window_name]['onscroll'] = null;
    globalMy.value[window_name]['onsecuritypolicyviolation'] = null;
    globalMy.value[window_name]['onseeked'] = null;
    globalMy.value[window_name]['onseeking'] = null;
    globalMy.value[window_name]['onselect'] = null;
    globalMy.value[window_name]['onslotchange'] = null;
    globalMy.value[window_name]['onstalled'] = null;
    globalMy.value[window_name]['onsubmit'] = null;
    globalMy.value[window_name]['onsuspend'] = null;
    globalMy.value[window_name]['ontimeupdate'] = null;
    globalMy.value[window_name]['ontoggle'] = null;
    globalMy.value[window_name]['onvolumechange'] = null;
    globalMy.value[window_name]['onwaiting'] = null;
    globalMy.value[window_name]['onwebkitanimationend'] = null;
    globalMy.value[window_name]['onwebkitanimationiteration'] = null;
    globalMy.value[window_name]['onwebkitanimationstart'] = null;
    globalMy.value[window_name]['onwebkittransitionend'] = null;
    globalMy.value[window_name]['onwheel'] = null;
    globalMy.value[window_name]['onauxclick'] = null;
    globalMy.value[window_name]['ongotpointercapture'] = null;
    globalMy.value[window_name]['onlostpointercapture'] = null;
    globalMy.value[window_name]['onpointerdown'] = null;
    globalMy.value[window_name]['onpointermove'] = null;
    globalMy.value[window_name]['onpointerup'] = null;
    globalMy.value[window_name]['onpointercancel'] = null;
    globalMy.value[window_name]['onpointerover'] = null;
    globalMy.value[window_name]['onpointerout'] = null;
    globalMy.value[window_name]['onpointerenter'] = null;
    globalMy.value[window_name]['onpointerleave'] = null;
    globalMy.value[window_name]['onselectstart'] = null;
    globalMy.value[window_name]['onselectionchange'] = null;
    globalMy.value[window_name]['onanimationend'] = null;
    globalMy.value[window_name]['onanimationiteration'] = null;
    globalMy.value[window_name]['onanimationstart'] = null;
    globalMy.value[window_name]['ontransitionrun'] = null;
    globalMy.value[window_name]['ontransitionstart'] = null;
    globalMy.value[window_name]['ontransitionend'] = null;
    globalMy.value[window_name]['ontransitioncancel'] = null;
    globalMy.value[window_name]['onafterprint'] = null;
    globalMy.value[window_name]['onbeforeprint'] = null;
    globalMy.value[window_name]['onbeforeunload'] = null;
    globalMy.value[window_name]['onhashchange'] = null;
    globalMy.value[window_name]['onlanguagechange'] = null;
    globalMy.value[window_name]['onmessage'] = null;
    globalMy.value[window_name]['onmessageerror'] = null;
    globalMy.value[window_name]['onoffline'] = null;
    globalMy.value[window_name]['ononline'] = null;
    globalMy.value[window_name]['onpagehide'] = null;
    globalMy.value[window_name]['onpageshow'] = null;
    globalMy.value[window_name]['onpopstate'] = null;
    globalMy.value[window_name]['onrejectionhandled'] = null;
    globalMy.value[window_name]['onstorage'] = null;
    globalMy.value[window_name]['onunhandledrejection'] = null;
    globalMy.value[window_name]['onunload'] = null;
    globalMy.value[window_name]['ondevicemotion'] = null;
    globalMy.value[window_name]['ondeviceorientation'] = null;
    globalMy.value[window_name]['ondeviceorientationabsolute'] = null;
    globalMy.value[window_name]['onbeforematch'] = null;
    globalMy.value[window_name]['onpointerrawupdate'] = null;


    globalMy.value[window_name]['customElements'] = {};
    Object.setPrototypeOf(globalMy.value[window_name]['customElements'], CustomElementRegistry.prototype);

    // navigator
    globalMy.value[window_name]['navigator'] = {};
    globalMy.value[window_name]['clientInformation'] = globalMy.value[window_name].navigator;
    var navigator_name = globalMy.setfoundName(globalMy.value[window_name]['navigator']);
    Object.setPrototypeOf(globalMy.value[window_name]['navigator'], Navigator.prototype);
    globalMy.value[navigator_name]['vendorSub'] = '';
    globalMy.value[navigator_name]['productSub'] = '20030107';
    globalMy.value[navigator_name]['vendor'] = 'Google Inc.';
    globalMy.value[navigator_name]['maxTouchPoints'] = 0;
    globalMy.value[navigator_name]['pdfViewerEnabled'] = true;
    globalMy.value[navigator_name]['hardwareConcurrency'] = 16;
    globalMy.value[navigator_name]['cookieEnabled'] = true;
    globalMy.value[navigator_name]['appCodeName'] = 'Mozilla';
    globalMy.value[navigator_name]['appName'] = 'Netscape';
    globalMy.value[navigator_name]['deviceMemory'] = 8;


    globalMy.value[navigator_name]['platform'] = 'Win32';
    globalMy.value[navigator_name]['product'] = 'Gecko';
    globalMy.value[navigator_name]['appVersion'] = '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36';
    globalMy.value[navigator_name]['userAgent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36';

    // globalMy.value[navigator_name]['userAgent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.63';
    // globalMy.value[navigator_name]['appVersion'] = "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.63"

    globalMy.value[navigator_name]['language'] = 'zh-CN';
    globalMy.value[navigator_name]['languages'] = ['zh-CN', 'zh'];
    globalMy.value[navigator_name]['onLine'] = true;
    globalMy.value[navigator_name]['webdriver'] = false;
    globalMy.value[navigator_name]['doNotTrack'] = null;
    globalMy.value[navigator_name]['locks'] = {};
    Object.setPrototypeOf(globalMy.value[navigator_name]['locks'], LockManager.prototype);


    globalMy.value[navigator_name]['scheduling'] = {};
    globalMy.obj_name = globalMy.setfoundName(globalMy.value[navigator_name]['scheduling']);
    globalMy.value[navigator_name]['scheduling'].__proto__ = Scheduling.prototype;

    globalMy.value[navigator_name]['userActivation'] = {};
    globalMy.obj_name = globalMy.setfoundName(globalMy.value[navigator_name]['userActivation']);
    globalMy.value[globalMy.obj_name] = {
        hasBeenActive: true
        , isActive: true
    }

    globalMy.value[navigator_name]['userActivation'].__proto__ = UserActivation.prototype;

    globalMy.value[navigator_name]['storage'] = {};
    globalMy.obj_name = globalMy.setfoundName(globalMy.value[navigator_name]['storage']);
    Object.setPrototypeOf(globalMy.value[navigator_name]['storage'], StorageManager.prototype);

    globalMy.value[navigator_name]['webkitTemporaryStorage'] = {};
    globalMy.value[navigator_name]['webkitPersistentStorage'] = {};
    globalMy.value[navigator_name]['webkitTemporaryStorage'].__proto__ = Utils.DeprecatedStorageQuota_prototype;
    globalMy.value[navigator_name]['webkitPersistentStorage'].__proto__ = Utils.DeprecatedStorageQuota_prototype;
    globalMy.setfoundName(globalMy.value[navigator_name]['webkitPersistentStorage']);
    globalMy.setfoundName(globalMy.value[navigator_name]['webkitTemporaryStorage']);

    globalMy.value[navigator_name]['connection'] = {};

    globalMy.value[navigator_name]['connection'].__proto__ = NetworkInformation.prototype;

    globalMy.obj_name = globalMy.setfoundName(globalMy.value[navigator_name]['connection'])
    globalMy.value[globalMy.obj_name] = {
        "onchange": null,
        "effectiveType": "4g",
        "rtt": 50,
        "downlink": 10,
        "saveData": false
    };

    globalMy.value[navigator_name]['plugins'] = {};
    globalMy.obj_name = globalMy.setfoundName(globalMy.value[navigator_name]['plugins']);
    Object.setPrototypeOf(globalMy.value[navigator_name]['plugins'], PluginArray.prototype);
    globalMy.value[globalMy.obj_name].length = 5;

    globalMy.value[navigator_name]['plugins'][0] = {};
    globalMy.obj_name = globalMy.setfoundName(globalMy.value[navigator_name]['plugins'][0]);
    Object.setPrototypeOf(globalMy.value[navigator_name]['plugins'][0], Plugin.prototype);
    globalMy.value[globalMy.obj_name].length = 2;
    globalMy.value[globalMy.obj_name].description = "Portable Document Format";
    globalMy.value[globalMy.obj_name].filename = "internal-pdf-viewer";
    globalMy.value[globalMy.obj_name].name = "PDF Viewer";


    globalMy.value[navigator_name]['mimeTypes'] = {};
    Object.setPrototypeOf(globalMy.value[navigator_name]['mimeTypes'], MimeTypeArray.prototype);
    globalMy.obj_name_2 = globalMy.setfoundName(globalMy.value[navigator_name]['mimeTypes']);
    globalMy.value[globalMy.obj_name_2].length = 2;

    globalMy.value[navigator_name]['mimeTypes'][0] = {};
    globalMy.obj_name_1 = globalMy.setfoundName(globalMy.value[navigator_name]['mimeTypes'][0]);
    Object.setPrototypeOf(globalMy.value[navigator_name]['mimeTypes'][0], MimeType.prototype);
    globalMy.value[globalMy.obj_name_1].description = "Portable Document Format";
    globalMy.value[globalMy.obj_name_1].suffixes = "pdf";
    globalMy.value[globalMy.obj_name_1].type = "application/pdf";
    globalMy.value[globalMy.obj_name_1].enabledPlugin = globalMy.value[navigator_name]['plugins'][0];
    globalMy.value[navigator_name]['mimeTypes']["application/pdf"] = globalMy.value[navigator_name]['mimeTypes'][0];

    globalMy.value[navigator_name]['mimeTypes'][1] = {};
    globalMy.obj_name_1 = globalMy.setfoundName(globalMy.value[navigator_name]['mimeTypes'][1]);
    Object.setPrototypeOf(globalMy.value[navigator_name]['mimeTypes'][1], MimeType.prototype);
    globalMy.value[globalMy.obj_name_1].description = "Portable Document Format";
    globalMy.value[globalMy.obj_name_1].suffixes = "pdf";
    globalMy.value[globalMy.obj_name_1].type = "text/pdf";
    globalMy.value[globalMy.obj_name_1].enabledPlugin = globalMy.value[navigator_name]['plugins'][0];
    globalMy.value[navigator_name]['mimeTypes']["text/pdf"] = globalMy.value[navigator_name]['mimeTypes'][1];


    globalMy.value[navigator_name]['plugins'][0][0] = {};
    globalMy.obj_name_1 = globalMy.setfoundName(globalMy.value[navigator_name]['plugins'][0][0]);
    Object.setPrototypeOf(globalMy.value[navigator_name]['plugins'][0][0], MimeType.prototype);
    globalMy.value[globalMy.obj_name_1].description = "Portable Document Format";
    globalMy.value[globalMy.obj_name_1].suffixes = "pdf";
    globalMy.value[globalMy.obj_name_1].type = "application/pdf";
    globalMy.value[globalMy.obj_name_1].enabledPlugin = globalMy.value[navigator_name]['plugins'][0];
    globalMy.value[navigator_name]['plugins'][0]["application/pdf"] = globalMy.value[navigator_name]['plugins'][0][0];

    globalMy.value[navigator_name]['plugins'][0][1] = {};
    globalMy.obj_name_1 = globalMy.setfoundName(globalMy.value[navigator_name]['plugins'][0][1]);
    Object.setPrototypeOf(globalMy.value[navigator_name]['plugins'][0][1], MimeType.prototype);
    globalMy.value[globalMy.obj_name_1].description = "Portable Document Format";
    globalMy.value[globalMy.obj_name_1].suffixes = "pdf";
    globalMy.value[globalMy.obj_name_1].type = "text/pdf";
    globalMy.value[globalMy.obj_name_1].enabledPlugin = globalMy.value[navigator_name]['plugins'][0];
    globalMy.value[navigator_name]['plugins'][0]["text/pdf"] = globalMy.value[navigator_name]['plugins'][0][1];

    globalMy.value[navigator_name]['plugins'][1] = {};
    globalMy.obj_name = globalMy.setfoundName(globalMy.value[navigator_name]['plugins'][1]);
    Object.setPrototypeOf(globalMy.value[navigator_name]['plugins'][1], Plugin.prototype);
    globalMy.value[globalMy.obj_name].length = 2;
    globalMy.value[globalMy.obj_name].description = "Portable Document Format";
    globalMy.value[globalMy.obj_name].filename = "internal-pdf-viewer";
    globalMy.value[globalMy.obj_name].name = "Chrome PDF Viewer";


    globalMy.value[navigator_name]['plugins'][1][0] = {};
    globalMy.obj_name_1 = globalMy.setfoundName(globalMy.value[navigator_name]['plugins'][1][0]);
    Object.setPrototypeOf(globalMy.value[navigator_name]['plugins'][1][0], MimeType.prototype);
    globalMy.value[globalMy.obj_name_1].description = "Portable Document Format";
    globalMy.value[globalMy.obj_name_1].suffixes = "pdf";
    globalMy.value[globalMy.obj_name_1].type = "application/pdf";
    globalMy.value[globalMy.obj_name_1].enabledPlugin = globalMy.value[navigator_name]['plugins'][1];
    globalMy.value[navigator_name]['plugins'][1]["application/pdf"] = globalMy.value[navigator_name]['plugins'][1][0];

    globalMy.value[navigator_name]['plugins'][1][1] = {};
    globalMy.obj_name_1 = globalMy.setfoundName(globalMy.value[navigator_name]['plugins'][1][1]);
    Object.setPrototypeOf(globalMy.value[navigator_name]['plugins'][1][1], MimeType.prototype);
    globalMy.value[globalMy.obj_name_1].description = "Portable Document Format";
    globalMy.value[globalMy.obj_name_1].suffixes = "pdf";
    globalMy.value[globalMy.obj_name_1].type = "text/pdf";
    globalMy.value[globalMy.obj_name_1].enabledPlugin = globalMy.value[navigator_name]['plugins'][1];
    globalMy.value[navigator_name]['plugins'][1]["text/pdf"] = globalMy.value[navigator_name]['plugins'][1][1];

    globalMy.value[navigator_name]['plugins'][2] = {};
    globalMy.obj_name = globalMy.setfoundName(globalMy.value[navigator_name]['plugins'][2]);
    Object.setPrototypeOf(globalMy.value[navigator_name]['plugins'][2], Plugin.prototype);
    globalMy.value[globalMy.obj_name].length = 2;
    globalMy.value[globalMy.obj_name].description = "Portable Document Format";
    globalMy.value[globalMy.obj_name].filename = "Chromium PDF Viewer";
    globalMy.value[globalMy.obj_name].name = "Chrome PDF Viewer";


    globalMy.value[navigator_name]['plugins'][2][0] = {};
    globalMy.obj_name_1 = globalMy.setfoundName(globalMy.value[navigator_name]['plugins'][2][0]);
    Object.setPrototypeOf(globalMy.value[navigator_name]['plugins'][2][0], MimeType.prototype);
    globalMy.value[globalMy.obj_name_1].description = "Portable Document Format";
    globalMy.value[globalMy.obj_name_1].suffixes = "pdf";
    globalMy.value[globalMy.obj_name_1].type = "application/pdf";
    globalMy.value[globalMy.obj_name_1].enabledPlugin = globalMy.value[navigator_name]['plugins'][2];
    globalMy.value[navigator_name]['plugins'][2]["application/pdf"] = globalMy.value[navigator_name]['plugins'][2][0];

    globalMy.value[navigator_name]['plugins'][2][1] = {};
    globalMy.obj_name_1 = globalMy.setfoundName(globalMy.value[navigator_name]['plugins'][2][1]);
    Object.setPrototypeOf(globalMy.value[navigator_name]['plugins'][2][1], MimeType.prototype);
    globalMy.value[globalMy.obj_name_1].description = "Portable Document Format";
    globalMy.value[globalMy.obj_name_1].suffixes = "pdf";
    globalMy.value[globalMy.obj_name_1].type = "text/pdf";
    globalMy.value[globalMy.obj_name_1].enabledPlugin = globalMy.value[navigator_name]['plugins'][2];
    globalMy.value[navigator_name]['plugins'][2]["text/pdf"] = globalMy.value[navigator_name]['plugins'][2][1];

    globalMy.value[navigator_name]['plugins'][3] = {};
    globalMy.obj_name = globalMy.setfoundName(globalMy.value[navigator_name]['plugins'][3]);
    Object.setPrototypeOf(globalMy.value[navigator_name]['plugins'][3], Plugin.prototype);
    globalMy.value[globalMy.obj_name].length = 2;
    globalMy.value[globalMy.obj_name].description = "Portable Document Format";
    globalMy.value[globalMy.obj_name].filename = "internal-pdf-viewer";
    globalMy.value[globalMy.obj_name].name = "Microsoft Edge PDF Viewer";


    globalMy.value[navigator_name]['plugins'][3][0] = {};
    globalMy.obj_name_1 = globalMy.setfoundName(globalMy.value[navigator_name]['plugins'][3][0]);
    Object.setPrototypeOf(globalMy.value[navigator_name]['plugins'][3][0], MimeType.prototype);
    globalMy.value[globalMy.obj_name_1].description = "Portable Document Format";
    globalMy.value[globalMy.obj_name_1].suffixes = "pdf";
    globalMy.value[globalMy.obj_name_1].type = "application/pdf";
    globalMy.value[globalMy.obj_name_1].enabledPlugin = globalMy.value[navigator_name]['plugins'][3];
    globalMy.value[navigator_name]['plugins'][3]["application/pdf"] = globalMy.value[navigator_name]['plugins'][3][0];

    globalMy.value[navigator_name]['plugins'][3][1] = {};
    globalMy.obj_name_1 = globalMy.setfoundName(globalMy.value[navigator_name]['plugins'][3][1]);
    Object.setPrototypeOf(globalMy.value[navigator_name]['plugins'][3][1], MimeType.prototype);
    globalMy.value[globalMy.obj_name_1].description = "Portable Document Format";
    globalMy.value[globalMy.obj_name_1].suffixes = "pdf";
    globalMy.value[globalMy.obj_name_1].type = "text/pdf";
    globalMy.value[globalMy.obj_name_1].enabledPlugin = globalMy.value[navigator_name]['plugins'][3];
    globalMy.value[navigator_name]['plugins'][3]["text/pdf"] = globalMy.value[navigator_name]['plugins'][3][1];


    globalMy.value[navigator_name]['plugins'][4] = {};
    globalMy.obj_name = globalMy.setfoundName(globalMy.value[navigator_name]['plugins'][4]);
    Object.setPrototypeOf(globalMy.value[navigator_name]['plugins'][4], Plugin.prototype);
    globalMy.value[globalMy.obj_name].length = 2;
    globalMy.value[globalMy.obj_name].description = "Portable Document Format";
    globalMy.value[globalMy.obj_name].filename = "internal-pdf-viewer";
    globalMy.value[globalMy.obj_name].name = "WebKit built-in PDF";


    globalMy.value[navigator_name]['plugins'][4][0] = {};
    globalMy.obj_name_1 = globalMy.setfoundName(globalMy.value[navigator_name]['plugins'][4][0]);
    Object.setPrototypeOf(globalMy.value[navigator_name]['plugins'][4][0], MimeType.prototype);
    globalMy.value[globalMy.obj_name_1].description = "Portable Document Format";
    globalMy.value[globalMy.obj_name_1].suffixes = "pdf";
    globalMy.value[globalMy.obj_name_1].type = "application/pdf";
    globalMy.value[globalMy.obj_name_1].enabledPlugin = globalMy.value[navigator_name]['plugins'][4];
    globalMy.value[navigator_name]['plugins'][4]["application/pdf"] = globalMy.value[navigator_name]['plugins'][4][0];

    globalMy.value[navigator_name]['plugins'][4][1] = {};
    globalMy.obj_name_1 = globalMy.setfoundName(globalMy.value[navigator_name]['plugins'][4][1]);
    Object.setPrototypeOf(globalMy.value[navigator_name]['plugins'][4][1], MimeType.prototype);
    globalMy.value[globalMy.obj_name_1].description = "Portable Document Format";
    globalMy.value[globalMy.obj_name_1].suffixes = "pdf";
    globalMy.value[globalMy.obj_name_1].type = "text/pdf";
    globalMy.value[globalMy.obj_name_1].enabledPlugin = globalMy.value[navigator_name]['plugins'][4];
    globalMy.value[navigator_name]['plugins'][4]["text/pdf"] = globalMy.value[navigator_name]['plugins'][4][1];

    // localStorage
    globalMy.value[window_name]['localStorage'] = {};
    var localStorage_name = globalMy.setfoundName(globalMy.value[window_name]['localStorage']);
    globalMy.value[window_name]['localStorage'].__proto__ = Storage.prototype;

    // sessionStorage
    globalMy.value[window_name]['sessionStorage'] = {};
    var sessionStorage_name = globalMy.setfoundName(globalMy.value[window_name]['sessionStorage']);
    Object.setPrototypeOf(globalMy.value[window_name]['sessionStorage'], Storage.prototype);

    // history
    globalMy.value[window_name]['history'] = {};
    var history_name = globalMy.setfoundName(globalMy.value[window_name]['history']);
    Object.setPrototypeOf(globalMy.value[window_name]['history'], History.prototype);
    globalMy.value[history_name].length = 1;


    // indexedDB
    globalMy.value[window_name]['indexedDB'] = {};
    var indexedDB_name = globalMy.setfoundName(globalMy.value[window_name]['indexedDB']);
    Object.setPrototypeOf(globalMy.value[window_name]['indexedDB'], IDBFactory.prototype);

    // screen
    globalMy.value[window_name]['screen'] = {};
    var screen_name = globalMy.setfoundName(globalMy.value[window_name]['screen']);
    Object.setPrototypeOf(globalMy.value[window_name]['screen'], Screen.prototype);
    globalMy.value[screen_name] = {
        "availWidth": 1920,
        "availHeight": 1040,
        "width": 1920,
        "height": 1080,
        "colorDepth": 24,
        "pixelDepth": 24,
        "availLeft": 0,
        "availTop": 0,
        "orientation": {},
        "onchange": null,
        "isExtended": false
    }

    Utils.setImmutableProto(location);
    Utils.setImmutableProto(Location.prototype);
    Utils.setImmutableProto(Window.prototype);
    Utils.setImmutableProto(Window.prototype.__proto__);
    Utils.setImmutableProto(EventTarget.prototype);

    return globalMy.element[window_name];
}

// 特殊对象存放在Utils对象下
globalMy.window_get_window = function () {

    if (globalMy.element.indexOf(this) > -1) {
        return this;
    } else {
        debugger;
        // var result = this.zzz_mark_key;
        // if (!result) throw new TypeError("Illegal invocation");
        // return result;
        // return window;
    }
}
globalMy.window_get_location = function () {
    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['location'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_location,result => ', toString.apply(result, []))
    }
    return result;
}
globalMy.window_get_document = function () {
    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['document'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_document,result => ', result + '')
    }
    return result;
}
globalMy.document_get_location = function () {
    var result;
    //这里写方法实体
    var name = globalMy.foundName(this);
    result = globalMy.value[name].location;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了document_get_location,result => ', toString.apply(result, []))
    }
    return result;
}
globalMy.document_set_location = function () {
    globalMy.console.log("document set location");
}

globalMy.console_get_memory = function () {
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['memory'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_self,result => ', '' + result)
    }
    return result;
}
globalMy.console_set_memory = function (val) {
    var result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['memory'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_screenY, 传参val => ' + val + '  result => ', '' + result)
    }
}


// window下的方法
globalMy.window_setTimeout = function setTimeout(func, delay, ...args) {
    if (globalMy.is_log) {
        globalMy.console.log("setTimeout func =>", func.toString());
        globalMy.console.log("setTimeout delay =>", delay);

        // globalMy.console.log("setTimeout args=>", args);
    }

    globalMy.IntervalId += 1;
    globalMy.Id.push(globalMy.IntervalId);
    // if (delay == 0) {
    //     globalMy.func.push([func, args]);
    // }
    globalMy.func.push([func, args]);
    //返回一个id
    return globalMy.IntervalId;

}
globalMy.window_setInterval = function setInterval(func, delay, ...args) {
    // debugger;
    if (globalMy.is_log) {
        globalMy.console.log("setInterval func=>", func + '');
        globalMy.console.log("setInterval args=>", args);
    }
    globalMy.IntervalId += 1;
    globalMy.Id.push(globalMy.IntervalId);
    globalMy.func_interval.push([func, args]);
    //返回一个id
    return globalMy.IntervalId;

}
globalMy.window_clearInterval = function clearInterval(id) {
    var index = globalMy.Id.indexOf(id);
    if (index < 0) return;
    globalMy.Id.splice(index, 1);
    globalMy.func.splice(index, 1);
    return;
}
globalMy.window_clearTimeout = function clearTimeout(id) {
    var index = globalMy.Id.indexOf(id);
    if (index < 0) return;
    globalMy.Id.splice(index, 1);
    globalMy.func.splice(index, 1);
    return;
}

globalMy.window_get_self = function () {
    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['self'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_self,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_self = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['self'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_self, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_name = function () {
    // debugger;
    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['name'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_name,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_name = function (val) {
    debugger;
    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    val = '' + val;
    globalMy.value[foundName]['name'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_name, 传参val => ' + val + '  result => ', '' + result)
    }
    return result;
}

globalMy.window_set_location = function (val) {
    var result;
    location.href = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_location, 传参val => ' + val + '  result => ', '' + result)
    }
}

globalMy.window_get_customElements = function () {
    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['customElements'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_customElements,result => ', '' + result)
    }
    return result;
}
globalMy.window_get_history = function () {
    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['history'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_history,result => ', '' + result)
    }
    return result;
}
globalMy.window_get_locationbar = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['locationbar'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_locationbar,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_locationbar = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['locationbar'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_locationbar, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_menubar = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['menubar'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_menubar,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_menubar = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['menubar'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_menubar, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_personalbar = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['personalbar'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_personalbar,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_personalbar = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['personalbar'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_personalbar, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_scrollbars = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['scrollbars'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_scrollbars,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_scrollbars = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['scrollbars'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_scrollbars, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_statusbar = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['statusbar'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_statusbar,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_statusbar = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['statusbar'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_statusbar, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_toolbar = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['toolbar'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_toolbar,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_toolbar = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['toolbar'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_toolbar, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_status = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['status'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_status,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_status = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['status'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_status, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_closed = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['closed'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_closed,result => ', '' + result)
    }
    return result;
}
globalMy.window_get_frames = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['frames'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_frames,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_frames = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['frames'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_frames, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_length = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['length'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_length,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_length = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['length'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_set_length, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_top = function () {
    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['top'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_top,result => ', '' + result)
    }
    return result;
}
globalMy.window_get_opener = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['opener'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_opener,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_opener = function (val) {
    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['opener'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_opener, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_parent = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['parent'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_parent,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_parent = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['parent'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_set_parent, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_frameElement = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['frameElement'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_frameElement,result => ', '' + result)
    }
    return result;
}
globalMy.window_get_navigator = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['navigator'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_navigator,result => ', '' + result)
    }
    return result;
}
globalMy.window_get_origin = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['origin'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_origin,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_origin = function (val) {
    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['origin'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_set_origin, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_external = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['external'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_external,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_external = function (val) {
    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['external'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_set_external, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_screen = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['screen'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_screen,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_screen = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['screen'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_screen, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_innerWidth = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['innerWidth'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_innerWidth,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_innerWidth = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['innerWidth'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_innerWidth, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_innerHeight = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['innerHeight'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_innerHeight,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_innerHeight = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['innerHeight'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_innerHeight, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_scrollX = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['scrollX'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_scrollX,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_scrollX = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['scrollX'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_scrollX, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_pageXOffset = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['pageXOffset'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_pageXOffset,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_pageXOffset = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['pageXOffset'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_pageXOffset, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_scrollY = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['scrollY'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_scrollY,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_scrollY = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['scrollY'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_scrollY, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_pageYOffset = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['pageYOffset'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_pageYOffset,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_pageYOffset = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['pageYOffset'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_pageYOffset, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_visualViewport = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['visualViewport'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_visualViewport,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_visualViewport = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['visualViewport'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_visualViewport, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_screenX = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['screenX'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_screenX,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_screenX = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['screenX'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_screenX, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_screenY = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['screenY'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_screenY,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_screenY = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['screenY'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_screenY, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_outerWidth = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['outerWidth'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_outerWidth,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_outerWidth = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['outerWidth'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_outerWidth, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_outerHeight = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['outerHeight'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_outerHeight,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_outerHeight = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['outerHeight'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_outerHeight, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_devicePixelRatio = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['devicePixelRatio'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_devicePixelRatio,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_devicePixelRatio = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['devicePixelRatio'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_devicePixelRatio, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_event = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['event'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_event,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_event = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['event'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_event, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_clientInformation = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['clientInformation'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_clientInformation,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_clientInformation = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['clientInformation'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_clientInformation, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_offscreenBuffering = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['offscreenBuffering'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_offscreenBuffering,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_offscreenBuffering = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['offscreenBuffering'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_offscreenBuffering, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_screenLeft = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['screenLeft'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_screenLeft,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_screenLeft = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['screenLeft'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_screenLeft, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_screenTop = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['screenTop'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_screenTop,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_screenTop = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['screenTop'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_screenTop, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_defaultStatus = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['defaultStatus'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_defaultStatus,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_defaultStatus = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['defaultStatus'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_defaultStatus, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_defaultstatus = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['defaultstatus'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_defaultstatus,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_defaultstatus = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['defaultstatus'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_defaultstatus, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_styleMedia = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['styleMedia'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_styleMedia,result => ', '' + result)
    }
    return result;
}
globalMy.window_get_onsearch = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onsearch'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onsearch,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onsearch = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onsearch'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onsearch, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_isSecureContext = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['isSecureContext'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_isSecureContext,result => ', '' + result)
    }
    return result;
}
globalMy.window_get_trustedTypes = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['trustedTypes'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_trustedTypes,result => ', '' + result)
    }
    return result;
}
globalMy.window_get_performance = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['performance'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_performance,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_performance = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['performance'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_performance, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onappinstalled = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onappinstalled'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onappinstalled,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onappinstalled = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onappinstalled'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onappinstalled, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onbeforeinstallprompt = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onbeforeinstallprompt'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onbeforeinstallprompt,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onbeforeinstallprompt = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onbeforeinstallprompt'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onbeforeinstallprompt, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_crypto = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['crypto'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_crypto,result => ', '' + result)
    }
    return result;
}
globalMy.window_get_indexedDB = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['indexedDB'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_indexedDB,result => ', '' + result)
    }
    return result;
}
globalMy.window_get_sessionStorage = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['sessionStorage'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_sessionStorage,result => ', '' + result)
    }
    return result;
}
globalMy.window_get_localStorage = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['localStorage'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_localStorage,result => ', '' + result)
    }
    return result;
}
globalMy.window_get_onbeforexrselect = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onbeforexrselect'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onbeforexrselect,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onbeforexrselect = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onbeforexrselect'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onbeforexrselect, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onabort = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onabort'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onabort,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onabort = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onabort'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onabort, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onbeforeinput = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onbeforeinput'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onbeforeinput,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onbeforeinput = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onbeforeinput'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onbeforeinput, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onblur = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onblur'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onblur,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onblur = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onblur'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onblur, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_oncancel = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['oncancel'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_oncancel,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_oncancel = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['oncancel'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_oncancel, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_oncanplay = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['oncanplay'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_oncanplay,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_oncanplay = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['oncanplay'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_oncanplay, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_oncanplaythrough = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['oncanplaythrough'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_oncanplaythrough,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_oncanplaythrough = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['oncanplaythrough'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_oncanplaythrough, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onchange = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onchange'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onchange,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onchange = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onchange'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onchange, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onclick = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onclick'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onclick,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onclick = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onclick'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onclick, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onclose = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onclose'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onclose,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onclose = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onclose'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onclose, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_oncontextlost = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['oncontextlost'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_oncontextlost,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_oncontextlost = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['oncontextlost'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_oncontextlost, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_oncontextmenu = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['oncontextmenu'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_oncontextmenu,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_oncontextmenu = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['oncontextmenu'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_oncontextmenu, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_oncontextrestored = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['oncontextrestored'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_oncontextrestored,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_oncontextrestored = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['oncontextrestored'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_oncontextrestored, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_oncuechange = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['oncuechange'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_oncuechange,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_oncuechange = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['oncuechange'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_oncuechange, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_ondblclick = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['ondblclick'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ondblclick,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_ondblclick = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['ondblclick'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ondblclick, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_ondrag = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['ondrag'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ondrag,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_ondrag = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['ondrag'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ondrag, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_ondragend = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['ondragend'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ondragend,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_ondragend = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['ondragend'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ondragend, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_ondragenter = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['ondragenter'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ondragenter,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_ondragenter = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['ondragenter'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ondragenter, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_ondragleave = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['ondragleave'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ondragleave,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_ondragleave = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['ondragleave'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ondragleave, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_ondragover = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['ondragover'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ondragover,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_ondragover = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['ondragover'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ondragover, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_ondragstart = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['ondragstart'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ondragstart,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_ondragstart = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['ondragstart'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ondragstart, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_ondrop = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['ondrop'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ondrop,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_ondrop = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['ondrop'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ondrop, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_ondurationchange = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['ondurationchange'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ondurationchange,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_ondurationchange = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['ondurationchange'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ondurationchange, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onemptied = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onemptied'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onemptied,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onemptied = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onemptied'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onemptied, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onended = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onended'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onended,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onended = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onended'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onended, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onerror = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onerror'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onerror,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onerror = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onerror'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onerror, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onfocus = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onfocus'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onfocus,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onfocus = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onfocus'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onfocus, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onformdata = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onformdata'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onformdata,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onformdata = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onformdata'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onformdata, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_oninput = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['oninput'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_oninput,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_oninput = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['oninput'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_oninput, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_oninvalid = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['oninvalid'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_oninvalid,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_oninvalid = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['oninvalid'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_oninvalid, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onkeydown = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onkeydown'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onkeydown,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onkeydown = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onkeydown'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onkeydown, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_oncontentvisibilityautostatechange = function () {

    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['oncontentvisibilityautostatechange'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_oncontentvisibilityautostatechange, result ->', result)
    }
    return result;
}
globalMy.window_set_oncontentvisibilityautostatechange = function (val) {

    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['oncontentvisibilityautostatechange'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_oncontentvisibilityautostatechange, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onkeypress = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onkeypress'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onkeypress,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onkeypress = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onkeypress'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onkeypress, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onkeyup = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onkeyup'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onkeyup,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onkeyup = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onkeyup'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onkeyup, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onload = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onload'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onload,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onload = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onload'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onload, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onloadeddata = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onloadeddata'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onloadeddata,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onloadeddata = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onloadeddata'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onloadeddata, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onloadedmetadata = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onloadedmetadata'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onloadedmetadata,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onloadedmetadata = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onloadedmetadata'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onloadedmetadata, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onloadstart = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onloadstart'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onloadstart,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onloadstart = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onloadstart'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onloadstart, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onmousedown = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onmousedown'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onmousedown,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onmousedown = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onmousedown'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onmousedown, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onmouseenter = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onmouseenter'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onmouseenter,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onmouseenter = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onmouseenter'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onmouseenter, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onmouseleave = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onmouseleave'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onmouseleave,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onmouseleave = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onmouseleave'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onmouseleave, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onmousemove = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onmousemove'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onmousemove,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onmousemove = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onmousemove'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onmousemove, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onmouseout = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onmouseout'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onmouseout,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onmouseout = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onmouseout'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onmouseout, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onmouseover = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onmouseover'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onmouseover,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onmouseover = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onmouseover'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onmouseover, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onmouseup = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onmouseup'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onmouseup,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onmouseup = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onmouseup'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onmouseup, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onmousewheel = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onmousewheel'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onmousewheel,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onmousewheel = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onmousewheel'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onmousewheel, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onpause = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onpause'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onpause,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onpause = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onpause'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onpause, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onplay = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onplay'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onplay,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onplay = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onplay'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onplay, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onplaying = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onplaying'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onplaying,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onplaying = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onplaying'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onplaying, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onprogress = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onprogress'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onprogress,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onprogress = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onprogress'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onprogress, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onratechange = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onratechange'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onratechange,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onratechange = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onratechange'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onratechange, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onreset = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onreset'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onreset,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onreset = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onreset'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onreset, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onresize = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onresize'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onresize,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onresize = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onresize'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onresize, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onscroll = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onscroll'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onscroll,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onscroll = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onscroll'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onscroll, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onsecuritypolicyviolation = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onsecuritypolicyviolation'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onsecuritypolicyviolation,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onsecuritypolicyviolation = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onsecuritypolicyviolation'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onsecuritypolicyviolation, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onseeked = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onseeked'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onseeked,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onseeked = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onseeked'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onseeked, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onseeking = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onseeking'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onseeking,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onseeking = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onseeking'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onseeking, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onselect = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onselect'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onselect,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onselect = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onselect'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onselect, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onslotchange = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onslotchange'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onslotchange,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onslotchange = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onslotchange'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onslotchange, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onstalled = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onstalled'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onstalled,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onstalled = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onstalled'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onstalled, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onsubmit = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onsubmit'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onsubmit,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onsubmit = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onsubmit'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onsubmit, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onsuspend = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onsuspend'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onsuspend,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onsuspend = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onsuspend'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onsuspend, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_ontimeupdate = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['ontimeupdate'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ontimeupdate,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_ontimeupdate = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['ontimeupdate'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ontimeupdate, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_ontoggle = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['ontoggle'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ontoggle,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_ontoggle = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['ontoggle'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ontoggle, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onvolumechange = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onvolumechange'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onvolumechange,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onvolumechange = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onvolumechange'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onvolumechange, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onwaiting = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onwaiting'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onwaiting,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onwaiting = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onwaiting'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onwaiting, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onwebkitanimationend = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onwebkitanimationend'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onwebkitanimationend,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onwebkitanimationend = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onwebkitanimationend'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onwebkitanimationend, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onwebkitanimationiteration = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onwebkitanimationiteration'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onwebkitanimationiteration,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onwebkitanimationiteration = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onwebkitanimationiteration'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onwebkitanimationiteration, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onwebkitanimationstart = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onwebkitanimationstart'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onwebkitanimationstart,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onwebkitanimationstart = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onwebkitanimationstart'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onwebkitanimationstart, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onwebkittransitionend = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onwebkittransitionend'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onwebkittransitionend,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onwebkittransitionend = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onwebkittransitionend'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onwebkittransitionend, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onwheel = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onwheel'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onwheel,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onwheel = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onwheel'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onwheel, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onauxclick = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onauxclick'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onauxclick,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onauxclick = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onauxclick'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onauxclick, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_ongotpointercapture = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['ongotpointercapture'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ongotpointercapture,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_ongotpointercapture = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['ongotpointercapture'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ongotpointercapture, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onlostpointercapture = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onlostpointercapture'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onlostpointercapture,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onlostpointercapture = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onlostpointercapture'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onlostpointercapture, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onpointerdown = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onpointerdown'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onpointerdown,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onpointerdown = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onpointerdown'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onpointerdown, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onpointermove = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onpointermove'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onpointermove,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onpointermove = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onpointermove'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onpointermove, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onpointerrawupdate = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onpointerrawupdate'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onpointerrawupdate,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onpointerrawupdate = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onpointerrawupdate'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onpointerrawupdate, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onpointerup = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onpointerup'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onpointerup,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onpointerup = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onpointerup'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onpointerup, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onpointercancel = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onpointercancel'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onpointercancel,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onpointercancel = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onpointercancel'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onpointercancel, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onpointerover = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onpointerover'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onpointerover,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onpointerover = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onpointerover'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onpointerover, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onpointerout = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onpointerout'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onpointerout,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onpointerout = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onpointerout'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onpointerout, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onpointerenter = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onpointerenter'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onpointerenter,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onpointerenter = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onpointerenter'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onpointerenter, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onpointerleave = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onpointerleave'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onpointerleave,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onpointerleave = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onpointerleave'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onpointerleave, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onselectstart = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onselectstart'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onselectstart,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onselectstart = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onselectstart'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onselectstart, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onselectionchange = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onselectionchange'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onselectionchange,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onselectionchange = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onselectionchange'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onselectionchange, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onanimationend = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onanimationend'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onanimationend,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onanimationend = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onanimationend'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onanimationend, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onanimationiteration = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onanimationiteration'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onanimationiteration,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onanimationiteration = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onanimationiteration'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onanimationiteration, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onanimationstart = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onanimationstart'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onanimationstart,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onanimationstart = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onanimationstart'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onanimationstart, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_ontransitionrun = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['ontransitionrun'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ontransitionrun,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_ontransitionrun = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['ontransitionrun'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ontransitionrun, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_ontransitionstart = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['ontransitionstart'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ontransitionstart,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_ontransitionstart = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['ontransitionstart'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ontransitionstart, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_ontransitionend = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['ontransitionend'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ontransitionend,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_ontransitionend = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['ontransitionend'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ontransitionend, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_ontransitioncancel = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['ontransitioncancel'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ontransitioncancel,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_ontransitioncancel = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['ontransitioncancel'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ontransitioncancel, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onafterprint = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onafterprint'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onafterprint,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onafterprint = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onafterprint'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onafterprint, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onbeforeprint = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onbeforeprint'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onbeforeprint,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onbeforeprint = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onbeforeprint'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onbeforeprint, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onbeforeunload = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onbeforeunload'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onbeforeunload,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onbeforeunload = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onbeforeunload'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onbeforeunload, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onhashchange = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onhashchange'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onhashchange,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onhashchange = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onhashchange'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onhashchange, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onlanguagechange = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onlanguagechange'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onlanguagechange,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onlanguagechange = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onlanguagechange'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onlanguagechange, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onmessage = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onmessage'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onmessage,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onmessage = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onmessage'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onmessage, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onmessageerror = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onmessageerror'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onmessageerror,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onmessageerror = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onmessageerror'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onmessageerror, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onoffline = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onoffline'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onoffline,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onoffline = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onoffline'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onoffline, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_ononline = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['ononline'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ononline,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_ononline = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['ononline'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ononline, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onpagehide = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onpagehide'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onpagehide,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onpagehide = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onpagehide'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onpagehide, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onpageshow = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onpageshow'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onpageshow,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onpageshow = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onpageshow'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onpageshow, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onpopstate = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onpopstate'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onpopstate,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onpopstate = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onpopstate'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onpopstate, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onrejectionhandled = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onrejectionhandled'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onrejectionhandled,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onrejectionhandled = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onrejectionhandled'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onrejectionhandled, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onstorage = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onstorage'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onstorage,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onstorage = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onstorage'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onstorage, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onunhandledrejection = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onunhandledrejection'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onunhandledrejection,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onunhandledrejection = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onunhandledrejection'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onunhandledrejection, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_onunload = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onunload'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onunload,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onunload = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onunload'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onunload, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_crossOriginIsolated = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['crossOriginIsolated'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_crossOriginIsolated,result => ', '' + result)
    }
    return result;
}
globalMy.window_get_scheduler = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['scheduler'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_scheduler,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_scheduler = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['scheduler'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_scheduler, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_caches = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['caches'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_caches,result => ', '' + result)
    }
    return result;
}
globalMy.window_get_cookieStore = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['cookieStore'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_cookieStore,result => ', '' + result)
    }
    return result;
}
globalMy.window_get_ondevicemotion = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['ondevicemotion'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ondevicemotion,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_ondevicemotion = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['ondevicemotion'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ondevicemotion, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_ondeviceorientation = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['ondeviceorientation'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ondeviceorientation,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_ondeviceorientation = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['ondeviceorientation'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ondeviceorientation, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_ondeviceorientationabsolute = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['ondeviceorientationabsolute'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ondeviceorientationabsolute,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_ondeviceorientationabsolute = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['ondeviceorientationabsolute'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_ondeviceorientationabsolute, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_launchQueue = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['launchQueue'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_launchQueue,result => ', '' + result)
    }
    return result;
}
globalMy.window_get_onbeforematch = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['onbeforematch'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onbeforematch,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_onbeforematch = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['onbeforematch'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_onbeforematch, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_originAgentCluster = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['originAgentCluster'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_originAgentCluster,result => ', '' + result)
    }
    return result;
}
globalMy.window_get_navigation = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['navigation'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_navigation,result => ', '' + result)
    }
    return result;
}
globalMy.window_set_navigation = function (val) {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    globalMy.value[foundName]['navigation'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_navigation, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.window_get_webkitStorageInfo = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['webkitStorageInfo'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_webkitStorageInfo,result => ', '' + result)
    }
    return result;
}
globalMy.window_get_speechSynthesis = function () {


    var result;
    if (globalMy.element.indexOf(this) > -1) {
        var foundName = globalMy.foundName(this);
    } else {
        var _window = this.zzz_mark_key;
        if (!_window) throw new TypeError("Illegal invocation");
        var foundName = globalMy.foundName(_window);
    }
    result = globalMy.value[foundName]['speechSynthesis'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了window_get_speechSynthesis,result => ', '' + result)
    }
    return result;
}

// location
globalMy.location_valueOf = function () {
    return this;
}
globalMy.location_toString = function () {
    return this.href;
}
globalMy.location_get_ancestorOrigins = function () {
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['ancestorOrigins'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了globalMy.location_get_ancestorOrigins,result => ', '' + result)
    }
    return result;
}
globalMy.location_get_href = function () {
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['href'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了globalMy.location_get_href,result => ', '' + result)
    }
    return result;
}
globalMy.location_set_href = function (val) {


    var result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['href'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了globalMy.location_get_href, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.location_get_origin = function () {


    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['origin'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了globalMy.location_get_origin,result => ', '' + result)
    }
    return result;
}
globalMy.location_get_protocol = function () {
    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['protocol'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了globalMy.location_get_protocol,result => ', '' + result)
    }
    return result;
}
globalMy.location_set_protocol = function (val) {


    var result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['protocol'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了globalMy.location_get_protocol, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.location_get_host = function () {


    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['host'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了globalMy.location_get_host,result => ', '' + result)
    }
    return result;
}
globalMy.location_set_host = function (val) {


    var result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['host'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了globalMy.location_get_host, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.location_get_hostname = function () {


    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['hostname'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了globalMy.location_get_hostname,result => ', '' + result)
    }
    return result;
}
globalMy.location_set_hostname = function (val) {


    var result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['hostname'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了globalMy.location_get_hostname, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.location_get_port = function () {


    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['port'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了globalMy.location_get_port,result => ', '' + result)
    }
    return result;
}
globalMy.location_set_port = function (val) {


    var result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['port'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了globalMy.location_get_port, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.location_get_pathname = function () {


    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['pathname'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了globalMy.location_get_pathname,result => ', '' + result)
    }
    return result;
}
globalMy.location_set_pathname = function (val) {
    var result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['pathname'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了globalMy.location_get_pathname, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.location_get_search = function () {


    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['search'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了globalMy.location_get_search,result => ', '' + result)
    }
    return result;
}
globalMy.location_set_search = function (val) {


    var result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['search'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了globalMy.location_get_search, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.location_get_hash = function () {


    var result;
    var foundName = globalMy.foundName(this);
    result = globalMy.value[foundName]['hash'];
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了globalMy.location_get_hash,result => ', '' + result)
    }
    return result;
}
globalMy.location_set_hash = function (val) {


    var result;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['hash'] = val;
    if (globalMy.is_log) {
        globalMy.console.log('[*]  调用了globalMy.location_get_hash, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.location_replace = function (val) {
    var result;
    var foundName = globalMy.foundName(this);
    if (globalMy.is_log) {
        // globalMy.console.log(localStorage._$rc);
        globalMy.console.log('[*]  调用了globalMy.location_replace, 传参val => ' + val + '  result => ', '' + result)
    }
}
globalMy.location_reload = function (val) {
    var result;
    var foundName = globalMy.foundName(this);
    if (globalMy.is_log) {
        // globalMy.console.log(localStorage._$rc);
        globalMy.console.log('[*]  调用了globalMy.location_reload, 传参val => ' + val + '  result => ', '' + result)
    }
}

// 初始化window
globalMy.initWindow.apply(this, [globalMy.dom_window, true]);

// 用node的Blob
if (globalMy.node_Blob) {
    window.Blob = globalMy.node_Blob;
    Object.setPrototypeOf(Blob, Function.prototype);
    Object.setPrototypeOf(Blob.prototype, Object.prototype);
}

// DOMException
if (globalMy.node_DOMException) {
    window.DOMException = globalMy.node_DOMException;
    Object.setPrototypeOf(DOMException, Function.prototype);
    Object.setPrototypeOf(DOMException.prototype, Object.prototype);
}

// 谷歌浏览器没有这个方法
delete External.prototype.getHostEnvironmentValue;
