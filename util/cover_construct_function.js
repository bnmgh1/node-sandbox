
// 构造函数实现覆盖
globalMy.RTCPeerConnection = function () {
    var name = globalMy.setfoundName(this);
    globalMy.value[name] = {
        "localDescription": null,
        "currentLocalDescription": null,
        "pendingLocalDescription": null,
        "remoteDescription": null,
        "currentRemoteDescription": null,
        "pendingRemoteDescription": null,
        "signalingState": "stable",
        "iceGatheringState": "new",
        "iceConnectionState": "new",
        "connectionState": "new",
        "canTrickleIceCandidates": null,
        "onnegotiationneeded": null,
        "onicecandidate": null,
        "onsignalingstatechange": null,
        "oniceconnectionstatechange": null,
        "onconnectionstatechange": null,
        "onicegatheringstatechange": null,
        "onicecandidateerror": null,
        "ontrack": null,
        "sctp": null,
        "ondatachannel": null,
        "onaddstream": null,
        "onremovestream": null
    };
    return this;
}

globalMy.Image = function () {
    var name = globalMy.setfoundName(this);
    globalMy.jsdom_element[name] = document.createElement("img");
    return this;
};

globalMy.XMLHttpRequest = function XMLHttpRequest() {
    let xhr = {};
    Object.setPrototypeOf(xhr, XMLHttpRequest.prototype);
    let name = globalMy.setfoundName(xhr);
    globalMy.value[name]["readyState"] = 0;
    globalMy.value[name]["onreadystatechange"] = null;
    let upload = {};
    Object.setPrototypeOf(upload, XMLHttpRequestUpload.prototype);
    let upload_name = globalMy.setfoundName(upload);
    globalMy.value[name]["upload"] = upload;
    globalMy.value[upload_name]["onabort"] = null;
    globalMy.value[upload_name]["onerror"] = null;
    globalMy.value[upload_name]["onload"] = null;
    globalMy.value[upload_name]["onloadend"] = null;
    globalMy.value[upload_name]["onloadstart"] = null;
    globalMy.value[upload_name]["onprogress"] = null;
    globalMy.value[upload_name]["ontimeout"] = null;
    globalMy.value[upload_name]["onabort"] = null;
    globalMy.value[upload_name]["onabort"] = null;
    return xhr;
}

globalMy.WebSocket = function WebSocket(x) {
    if (x === 'Create\x20WebSocket' || x === "itsgonnafail") {
        var obj = { "stack": "DOMException: Failed to construct 'WebSocket': The URL 'itsgonnafail' is invalid.\n    at _$nA (eval at _$fV (http://epub.cnipa.gov.cn/DMkKrRq2vkXD/3lyVKWvJXsxS.ce3512e.js:3:4694), <anonymous>:3:127550)\n    at _$mx (eval at _$fV (http://epub.cnipa.gov.cn/DMkKrRq2vkXD/3lyVKWvJXsxS.ce3512e.js:3:4694), <anonymous>:3:135940)\n    at _$hU (eval at _$fV (http://epub.cnipa.gov.cn/DMkKrRq2vkXD/3lyVKWvJXsxS.ce3512e.js:3:4694), <anonymous>:3:138095)\n    at _$mx (eval at _$fV (http://epub.cnipa.gov.cn/DMkKrRq2vkXD/3lyVKWvJXsxS.ce3512e.js:3:4694), <anonymous>:3:132342)\n    at _$g$ (eval at _$fV (http://epub.cnipa.gov.cn/DMkKrRq2vkXD/3lyVKWvJXsxS.ce3512e.js:3:4694), <anonymous>:3:129637)\n    at _$mx (eval at _$fV (http://epub.cnipa.gov.cn/DMkKrRq2vkXD/3lyVKWvJXsxS.ce3512e.js:3:4694), <anonymous>:3:133563)\n    at _$g$ (eval at _$fV (http://epub.cnipa.gov.cn/DMkKrRq2vkXD/3lyVKWvJXsxS.ce3512e.js:3:4694), <anonymous>:3:129637)\n    at _$mx (eval at _$fV (http://epub.cnipa.gov.cn/DMkKrRq2vkXD/3lyVKWvJXsxS.ce3512e.js:3:4694), <anonymous>:3:133563)\n    at _$g$ (eval at _$fV (http://epub.cnipa.gov.cn/DMkKrRq2vkXD/3lyVKWvJXsxS.ce3512e.js:3:4694), <anonymous>:3:129637)" }
        var err = new Error;
        err.message = "DOMException: Failed to construct 'WebSocket': The URL 'itsgonnafail' is invalid.";
        err.stack = obj.stack;
        throw err;
    }
}

globalMy.MutationObserver = function MutationObserver() {
    if (arguments.length < 1){
        throw new TypeError(`Failed to construct 'MutationObserver': 1 argument required, but only 0 present.`)
    }
    var callback_function = arguments[0];
    var result = new globalMy.dom_window.MutationObserver(callback);
    var name = globalMy.setfoundName(this);
    globalMy.jsdom_element[name] = result;
    result = this;

    function callback() {
        var args = [];
        args[0] = [];
        var length = arguments[0].length;
        var name_;
        for (var i = 0; i < length; i++) {
            name_ = globalMy.foundJsdomName(arguments[0][i], "MutationRecord");
            args[0][i] = globalMy.element[name_];
        }
        args[1] = result;
        // debugger;
        // callback_function.apply(result, args);
    }

    return this;
}

globalMy.OfflineAudioContext = function OfflineAudioContext() {
    if (globalMy.is_log) {
        globalMy.console.log("[*]  new 构造函数 -> OfflineAudioContext, ", "arguments => ", arguments)
    }
    var offlineAudioContext = this;
    Object.setPrototypeOf(offlineAudioContext, OfflineAudioContext.prototype);
    var name = globalMy.setfoundName(offlineAudioContext);
    globalMy.value[name]["audioWorklet"] = {};
    Object.setPrototypeOf(globalMy.value[name]["audioWorklet"], AudioWorklet.prototype);
    globalMy.value[name]["currentTime"] = 0;
    globalMy.value[name]["length"] = arguments[1];
    globalMy.value[name]["sampleRate"] = arguments[2];
    globalMy.value[name]["state"] = "running";
    globalMy.value[name]["onstatechange"] = null;
    globalMy.value[name]["oncomplete"] = null;

    globalMy.value[name]["destination"] = {};
    Object.setPrototypeOf(globalMy.value[name]["destination"], AudioDestinationNode.prototype);
    var obj_name = globalMy.setfoundName(globalMy.value[name]["destination"]);
    globalMy.value[obj_name]["context"] = offlineAudioContext;
    globalMy.value[obj_name]["channelCount"] = 1;
    globalMy.value[obj_name]["channelCountMode"] = "explicit";
    globalMy.value[obj_name]["channelInterpretation"] = "speakers";
    globalMy.value[obj_name]["maxChannelCount"] = 1;
    globalMy.value[obj_name]["numberOfInputs"] = 1;
    globalMy.value[obj_name]["numberOfOutputs"] = 0;

    return offlineAudioContext;
}

globalMy.AudioContext = function AudioContext() {
    if (globalMy.is_log) {
        globalMy.console.log("[*]  new 构造函数 -> AudioContext, ", "arguments => ", arguments)
    }
    var audioContext = this;
    Object.setPrototypeOf(audioContext, AudioContext.prototype);
    var name = globalMy.setfoundName(audioContext);
    globalMy.value[name]["audioWorklet"] = {};
    Object.setPrototypeOf(globalMy.value[name]["audioWorklet"], AudioWorklet.prototype);
    globalMy.value[name]["currentTime"] = 1.4613333333333334;
    globalMy.value[name]["sampleRate"] = 48000;
    globalMy.value[name]["baseLatency"] = 0.01;
    globalMy.value[name]["state"] = "running";
    globalMy.value[name]["oncomplete"] = null;
    globalMy.value[name]["outputLatency"] = 0.04;

    globalMy.value[name]["destination"] = {};
    Object.setPrototypeOf(globalMy.value[name]["destination"], AudioDestinationNode.prototype);
    var obj_name = globalMy.setfoundName(globalMy.value[name]["destination"]);
    globalMy.value[obj_name]["context"] = audioContext;
    globalMy.value[obj_name]["channelCount"] = 2;
    globalMy.value[obj_name]["channelCountMode"] = "explicit";
    globalMy.value[obj_name]["channelInterpretation"] = "speakers";
    globalMy.value[obj_name]["maxChannelCount"] = 2;
    globalMy.value[obj_name]["numberOfInputs"] = 1;
    globalMy.value[obj_name]["numberOfOutputs"] = 0;

    return audioContext;
}


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
                const result = onResolved(that.data)
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
