var a = +new Date;
const {VM, VMScript} = require('cyvm2');
// const {VM, VMScript} = require('vm2');
const fs = require("fs");
const vm = require("vm");
const crypto = require('crypto');
const jsdom = require("jsdom");
const {JSDOM} = jsdom;
var wanfeng = require("wanfeng");

console.log("导包耗时:", +new Date - a, "毫秒");
a = +new Date;


var html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta content="J5.C6RUO6R6.JpOp3sX4viKQWl3FgRex" r="m"><script type="text/javascript" r='m'>$_ts=window['$_ts'];if(!$_ts)$_ts={};$_ts.nsd=23850;$_ts.cd="qEAZrrAlDaaqtcgEkqqUrfQoirgWqrQmmaEOofQqmal6xAGlopQciq0kmaqUqrQrirgUrkGJrAaqmS9UquG8maq2cAAImaV5cqaMmaWUqkG8kqqUrfQoirgUDsGJqSQqmal6xALloaaqmSgUqOG8kqqUqrQrirgUrug8maEgkAWUqrQrJnVPbGlTWqEmWsKFE5XzZ288j8hxchPyLwisvMsg059ivwHkfO2sDA52LrdMqaVuraQrbnak_Y2ZxsHzQCNDVsm2KtfoFsV4skJoZYlCRVV2HY.0wbeLhb2nMI3BMUmXFnzB4CeBtDSnFCCCMURLM2L.E_ehM99SU0xc.YrCVlpAsmMIFuVaib32iZmzwbfXtC20ebZBFvw.Fn60wbeLhb2nMI3BMUmXFTLzXlxpAbT0YToN8vzxwoybJwrWWoySWo3OLmfzQKy.tCdBMCZLMox.MMRzwbfXtC20ebZBFvw.FTnCEU2nJ0YzRHS4KKTaI0eCnVryVYYcJCcgiYfjwCz.hIpCMCGXFUxzePezQKy.tCdBMCZLMox.MQw5hCN6FCzQ9qiN3u7dQlsjAY7dw2JXKQfvV9VywOmRdoxqW9WZ1YI11UxORslZJITYYYyf3VW_4VNBQTJYJsv4YKpbiVJtFzmSVUVaQKSR6OGaIOY11lvnsCxmpsqZWBR_YVeYQVTR_UzAtbmPJk1.WK3jFoAZJ7Scw0zUF2JlZkwLtbmPJk1.WK3jFoAZABylQbJLJ9N2_oxNH0zlYms53Ux.WYyd8Fl4FoqaU9fKuYz1p93oraDMWaWmWaQKF8y6QugSWOVn.kqaWOqeHuDFrKrfWsECWyLqJsWCra0ajO7aJsV5JuKjqaQaWOgSq3jC1FUMaCvfxkWqTVpwClCAqSHZQPL_EvOSfGK3rqAmbqAlrchJxTrdw7NL394tn47ahOW2GxzNnmJ5fV807.sgNIcqiqQJWtZaWOQuJkl6.GWcJAEJJO8zJs7ZiuZuJyLLVCTVQCRRdCRi30a5Q9UW1DwThD003Bx7JvRSVkJOT0VzYVN5IvMws0rPpaQoqR76qaVnra3CbdA0IPybRbtC3byChbR0MhRPwK0XRKRjzbmPQcy2FvDC3KNjhbA.3BzfhCwSwczP_UVBRCTjtChjQneG36W.RIRBhCrzRcz2eUQB3DT9In6d8C3LRCfuhISB3Pf9FCAzdDSztDpLQn6ZMDTahbrO34R9FbEX3o0zdKz7tDN.wn6nQ6WLFvJ9hIJGMcf.FKgzZCT2tDzNwc6uQDaLFoA.FdzShCyn3cz._bR9tDf0FD5CFKxn3nz.FHGBMCz2tCNLdPeXwk3.Fvo4hCga3nzjQF9BMvp2tCNj4ceXFC3.Fb47hCyzMnzjQ8LBMvw.tCNSdCABFCrztC4y8ne.RKq.MBRfhCzX3PzX4bVBwo7.w6Oyh6J2Q1z6RBQBQ6pBt6wS_1euwo3.wCUZh6J0wvZ.QIp9h6p.RczSebLBwomOt6kuR1eTwvZ.Qd7BQK9XwKR7zvmXQbq.wKseh6mfQ1zTwIaBQKYat6pXzvrfFcy03UbCQop2hvpaR4RawKWXwoynzvwPwPyuRvXCwCNPhvJXRdaBwCzawKxB4Pe6Io3.Q6UZh6Y6RPzSQX9BwUwTt6mydPe0FCpft6MTRKVChvrjw4R0MbVXQDR6zvpuwnydRKnC86JNhve.Q.R4M6w_t6enePe4FKg.I16GFvWL36w7h8NBFvwCtCyS5aWkrqR3ECUaqawMxbS5qRyQxTzuraJ8Bbe.rqquWaD3WO3";if($_ts.lcd)$_ts.lcd();</script><script type="text/javascript" charset="utf-8" src="/DMkKrRq2vkXD/3lyVKWvJXsxS.ce3512e.js" r='m'></script></head>
<body>
</body>
</html>`
// html = `<div id="baxia-password" style="display: block;"><div class=" custom-dialog-wrapper" style="display: block;"><iframe id="baxia-dialog-content" frameborder="none" src="https://login.taobao.com//newlogin/login.do/_____tmd_____/punish?x5secdata=xbb285061a9d6d6ae38b7729e5a610cd201678606637a-717315356a-1443198347abczc2dl15398888102a__bx__login.taobao.com%3A443%2Fnewlogin%2Flogin.do&amp;x5step=2&amp;ncLanguage=zh_CN" style="height: 34px; position: static;"></iframe></div></div>`;
html = fs.readFileSync(`./ret.html`);
let configure = {
    // url: "http://epub.cnipa.gov.cn/SW/",
    // url: 'https://www.zhihu.com/search?q=%E8%A2%AB%E6%89%93%E8%BF%98%E6%89%8B%E4%B8%8D%E5%86%8D%E8%AE%A4%E5%AE%9A%E4%B8%BA%E4%BA%92%E6%AE%B4&utm_content=search_hot&type=content',
    // url: 'https://www.zhipin.com/web/geek/job?query=%E7%88%AC%E8%99%AB&city=101190100&page=2',
    // url: 'https://www.toutiao.com/',
    // url: 'https://login.taobao.com/member/login.jhtml?spm=a21bo.jianhua.754894437.1.5af911d9ha3rTs&f=top&redirectURL=https%3A%2F%2Fwww.taobao.com%2F',
    url: 'http://zxgk.court.gov.cn/shixin/',
}
const dom = new JSDOM(html, configure);

let filePath = fs.readdirSync('./env');
let envCode = '';
filePath.map((item) => {
    envCode += fs.readFileSync(`./env/${item}`) + '\r\n';
});

let init_env = fs.readFileSync("./util/init_env.js");
let cover_construct_function = fs.readFileSync("./util/cover_construct_function.js");
let cover_function = fs.readFileSync("./util/cover_function.js");
let pass_check = fs.readFileSync("./util/pass_check.js");
let globalMy_js = fs.readFileSync("./util/globalMy.js");
let endCode = fs.readFileSync("./util/end.js");

init_env = cover_construct_function + init_env;
envCode += cover_function + pass_check;

globalMy = {
    dom_window: dom.window,
    crypto: crypto,
    node_Blob: Blob,
    node_DOMException: DOMException,
};


globalMy.newWindow = function (dom_window) {
    const sandbox = vm.createContext({
        wanfeng: wanfeng,
        globalMy: {
            dom_window: dom_window
        },
        console: console,
    })

    var code = "debugger;\r\n" + globalMy_js + init_env + envCode + "\r\n" + ``;
    vm.runInNewContext(code, sandbox);
    return sandbox.zzz_mark_key;
}

// rsvmp
function runRsVmp() {
    const sandbox = {
        wanfeng: wanfeng,
        globalMy: globalMy,
        console: console,
    }
    let workCode = fs.readFileSync("./work/rsvmp.js");
    a = +new Date;
    var code = "debugger;\r\n" + globalMy_js + init_env + envCode + "\r\n" + workCode + "\r\n" + `globalMy.console.log(document.cookie);` +
        `new Promise((resolve, reject) => {
    var event = globalMy.createEvent("load")
    resolve(event);
}).then((event) => {
    window.dispatchEvent(event);
});` + endCode + `
globalMy.console.log(localStorage._$rc);
`;
    // var vm2 = new VM({sandbox: sandbox});
    // var script = new VMScript(code, './zcj.js');
    // vm2.run(script);
    vm.runInNewContext(code, sandbox);
    console.log("运行环境Js + 工作Js 耗时:", +new Date - a, "毫秒");
}

// boss
function runBoss() {
    const sandbox = {
        wanfeng: wanfeng,
        globalMy: globalMy,
        console: console,
    }
    let workCode = fs.readFileSync("./work/boss.js");
    // jsdom iframe document.cookie 和 top window document cookie 值是一样的, jsdom没有实现, 是空值

    // globalMy.cookies = "__g=-; wd_guid=4b0af4e0-f861-438f-97b2-aac8c458bafa; historyState=state; _bl_uid=jjlsbeI9syF1zzgjyv5va0dcRysI; Hm_lvt_194df3105ad7148dcf2b98a91b5e727a=1677817919; Hm_lpvt_194df3105ad7148dcf2b98a91b5e727a=1677818563; __zp_stoken__=d84deEDF3EBx6fgA0f25LVToiURoXewkoNnMYSGZDFCZLVSYQPFUOBVp4UTdKHWxFGm41FmcXV0c6VhcYLTFfZR1jNRQ3UXJKASl1VxQcFWw6CVFCHBVqIgovKFkNKjAuWFcHd31sfD9yZUU%3D; __zp_sseed__=et6DuZOBezkCoI40DI0QqRe+cUEpgPIeSPrKnU6P45Q=; __zp_sname__=85a97204; __zp_sts__=1677818564123; __c=1677817918; __l=l=%2Fwww.zhipin.com%2Fweb%2Fgeek%2Fjob%3Fquery%3D%25E7%2588%25AC%25E8%2599%25AB%26city%3D101190100%26page%3D3&r=&g=&s=3&friend_source=0&s=3&friend_source=0; __a=87646262.1677817918..1677817918.6.1.6.6"
    //     .split("; ");
    //
    // globalMy.cookies.map((item) => {
    //     dom.window.document.cookie = item + "; "
    // });

    a = +new Date;
    var code = "debugger;\r\n" + globalMy_js + init_env + envCode + "\r\n" + ``;
    vm.runInNewContext(code, sandbox);

    var ifr = dom.window.document.createElement("iframe");
    dom.window.document.body.appendChild(ifr);

    // globalMy.dom_window = ifr.contentWindow;
    // globalMy.window_frameElement = ifr;
    // globalMy.window_parent = sandbox.zzz_mark_key;

    const sandbox_ = {
        wanfeng: wanfeng,
        globalMy: {
            dom_window: ifr.contentWindow,
            window_frameElement: ifr,
            window_parent: sandbox.zzz_mark_key
        },
        // globalMy: globalMy,
        console: console,
    }
    code = "debugger;\r\n" + globalMy_js + init_env + envCode + "\r\n" + workCode + "\r\n" + endCode + `
console.log(encodeURIComponent((new window.ABC).z("et6DuZOBezkCoI40DI0QqQ9bHByFPpZ2VUGLwTAeK8g=", parseInt("1677987995819") + 60 * (480 + (new Date).getTimezoneOffset()) * 1e3)));
`;
    vm.runInNewContext(code, sandbox_);
    console.log("运行环境Js + 工作Js 耗时:", +new Date - a, "毫秒");
}

// 知乎 x96
function runZhihu() {
    const sandbox = {
        wanfeng: wanfeng,
        globalMy: globalMy,
        console: console,
    }
    let workCode = fs.readFileSync("./work/zhihu/zhihu.js");
    a = +new Date;
    var code = "debugger;\r\n" + globalMy_js + init_env + envCode + "\r\n" + workCode + "\r\n" + endCode;
    vm.runInNewContext(code, sandbox);
    console.log("运行环境Js + 工作Js 耗时:", +new Date - a, "毫秒");
    const WebSocket = require('ws');
    var wss = new WebSocket.Server({port: 8181});
    wss.on('connection', function (ws) {
        console.log('client connected');

        ws.on('message', function (data, isBinary) {
            console.log('Message from client ', isBinary ? data : data.toString());
            ws.send("2.0_" + sandbox.D(data.toString()));
        });
    });
}

// 知乎 x81 没仔细扣,不一定能用
function runX81() {
    const sandbox = {
        wanfeng: wanfeng,
        globalMy: globalMy,
        console: console,
    }
    let workCode = fs.readFileSync("./work/zhihu/x81.js");
    a = +new Date;
    var code = "debugger;\r\n" + globalMy_js + init_env + envCode + "\r\n" + workCode + "\r\n" + endCode;
    vm.runInNewContext(code, sandbox);
    console.log("运行环境Js + 工作Js 耗时:", +new Date - a, "毫秒");
}

// ac_signature
function runAcSign() {
    const sandbox = {
        wanfeng: wanfeng,
        globalMy: globalMy,
        console: console,
    }
    let workCode = fs.readFileSync("./work/jrtt/ac_sign.js");
    a = +new Date;
    var code = "debugger;\r\n" + globalMy_js + init_env + envCode + "\r\n" + workCode + "\r\n" + endCode;
    vm.runInNewContext(code, sandbox);
    console.log("运行环境Js + 工作Js 耗时:", +new Date - a, "毫秒");
}

function run225() {
    const sandbox = {
        wanfeng: wanfeng,
        globalMy: globalMy,
        console: console,
    }
    let workCode = fs.readFileSync("./work/ali225.js");
    a = +new Date;
    var code = "debugger;\r\n" + globalMy_js + init_env + envCode + "\r\n" + workCode + "\r\n" + endCode;
    vm.runInNewContext(code, sandbox);
    console.log("运行环境Js + 工作Js 耗时:", +new Date - a, "毫秒");
}

// 没初始化应该, 跟浏览器跑出来的调用不一样。。。
function run140() {
    const sandbox = {
        wanfeng: wanfeng,
        globalMy: globalMy,
        console: console,
    }
    let workCode = fs.readFileSync("./work/ali140.js");
    a = +new Date;
    var code = "debugger;\r\n" + globalMy_js + init_env + envCode + "\r\n" + workCode + "\r\n" + endCode;
    vm.runInNewContext(code, sandbox);
    console.log("运行环境Js + 工作Js 耗时:", +new Date - a, "毫秒");
}

function runShape() {
    const sandbox = {
        wanfeng: wanfeng,
        globalMy: globalMy,
        console: console,
    }
    let workCode = fs.readFileSync("./work/shape.js");
    a = +new Date;
    var code = "debugger;\r\n" + globalMy_js + init_env + envCode + "\r\n" + workCode + "\r\n" + endCode + `globalMy.console.log(get_bmobdb());\ndebugger;`;
    vm.runInNewContext(code, sandbox);
    console.log("运行环境Js + 工作Js 耗时:", +new Date - a, "毫秒");
}

runRsVmp();
// runBoss();
// runZhihu();
// runX81();
// runAcSign();
// run225();
// run140();
// runShape();

//// vm2
// const sandbox = {
//     wanfeng: wanfeng,
//     globalMy: globalMy,
//     console: console,
// }
// var vm2 = new VM({ sandbox: sandbox });
// let workCode = fs.readFileSync("./work/rsvmp.js");
// var script = new VMScript("debugger;\r\n" + globalMy_js + init_env + envCode + "\r\n" + workCode + "\r\n" + endCode, './zcj.js');
// console.log("jsdom初始化 + new VMScript 耗时:", +new Date - a, "毫秒");
// a = +new Date;
// vm2.run(script);
// console.log("运行环境Js + 工作Js 耗时:", +new Date - a, "毫秒");
