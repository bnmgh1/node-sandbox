var a = +new Date;
const {VM, VMScript} = require('cyvm2');
// const {VM, VMScript} = require('vm2');
const fs = require("fs");
const vm = require("vm");
const crypto = require('crypto');
const jsdom = require("jsdom");
const {JSDOM} = jsdom;
let wanfeng = require("wanfeng");
console.log("导包耗时:", +new Date - a, "毫秒");
a = +new Date;


// html = `<div id="baxia-password" style="display: block;"><div class=" custom-dialog-wrapper" style="display: block;"><iframe id="baxia-dialog-content" frameborder="none" src="https://login.taobao.com//newlogin/login.do/_____tmd_____/punish?x5secdata=xbb285061a9d6d6ae38b7729e5a610cd201678606637a-717315356a-1443198347abczc2dl15398888102a__bx__login.taobao.com%3A443%2Fnewlogin%2Flogin.do&amp;x5step=2&amp;ncLanguage=zh_CN" style="height: 34px; position: static;"></iframe></div></div>`;

html = fs.readFileSync(`./ret.html`);
// html = fs.readFileSync(`./tj140.html`);
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


globalMy.newWindow = function (ifr) {
    let wf = {
        xtd: wanfeng.xtd,
        SetNative: wanfeng.SetNative,
        DeleteProperty: wanfeng.DeleteProperty,
    };
    const sandbox = {
        wanfeng: wf,
        globalMy: {
            crypto: crypto,
            node_Blob: Blob,
            node_DOMException: DOMException,
            dom_window: ifr.contentWindow,
            window_frameElement: ifr,
        },
        console: console,
    }

    var code = globalMy_js + init_env + envCode + "\r\n" + ``;
    vm.runInNewContext(code.replace("debugger;", ""), sandbox);
    return sandbox.zzz_mark_key;
}

// rsvmp
function runRsVmp() {
    // 个别rs第一个次获取body为null, 所以第一次返回null给他
    globalMy.first_get_body = true;
    // let wf = {
    //     xtd: wanfeng.xtd,
    //     SetNative: wanfeng.SetNative,
    //     DeleteProperty: wanfeng.DeleteProperty,
    // };
    const sandbox = {
        wanfeng: wanfeng,
        globalMy: globalMy,
        console: console,
    }
    let workCode = fs.readFileSync("./work/rsvmp.js");
    a = +new Date;
    let code = "debugger;\r\n" + globalMy_js + init_env + envCode + "\r\n" + workCode + "\r\n" + `globalMy.console.log(document.cookie);\n` +
        `window.dispatchEvent(globalMy.createEvent("load"));` + endCode;
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

runRsVmp();
// runBoss();
// runZhihu();
// runX81();
// runAcSign();