# 魔改Node Js补环境框架

## 内置对象Utils

Utils是v8对象, 内置了几个重要函数.

1. defineProperty
作用: 重写属性描述符, 即使是configurable为false 也能强行修改然后delete掉. 暂时不支持传入get set, 只能修改成value. mode我详细解释下,
在v8底层READ_ONLY(writable)是1, DONT_ENUM(enumerable)是2, DONT_DELETE(configurable)是4, 
所以1|2|4 = 7, mode即7, 也就是所有描述符为false. 0就代表所有描述符都为true.

2. initEnv
作用: 给~~wanfeng~~globalMy下的构造函数设置原型对象.

3. initWindow
作用: 将~~wanfeng~~globalMy下的构造函数定义到window里, 因为构造函数在window里的enumerable描述符为false, 所以不能直接用赋值形式定义在window下. 而用Object.defineProperty耗时太慢了, 所以单独写个方法初始化window.

4. initWorker
作用: 和initWindow同理

5. Error_get_stack
作用: 堆栈拦截, 单js获取报错的stack时, 会先走到这里. 这个不算api~ 不重写则默认不处理.

6. defineIsTrusted
作用: 给事件对象设置isTrusted属性, get事件回调将会走到globalMy.event_get_isTrusted.

7. setImmutableProto
作用: 修改对象的__proto__将会报错

8. setUndetectable
作用: 直接将对象的type设置为undefined, 可能存在bug.
解释下我为什么又用回这个api, 是因为我需要代理document.all对象, 但是这样typeof解决不掉, 所以又用底层api去标记对象, 而不是新建一个对象的时候标记对象为undetectable. 可能存在bug, 谨慎使用, 我暂时没问题. 没需求的直接用new一个xtd对象即可.

9. setNative
作用: 就是将模块下的SetNative移植到了v8层面

10. api例子
```javascript
Utils.definePropery({}, "a", {value: 1, mode: 7});
```
```javascript
Utils.Error_get_stack = function(stack){
    console.log(stack)
};
```
```javascript
Utils.defineIsTrusted(event);
```
```javascript
Utils.setImmutableProto(this);
```

## wanfeng
接下来是内置模块, 我将其命名为wanfeng. 
所以使用的时候需要require("wanfeng")

1. setNative
作用: ~~给函数套壳, 这样的话就不用考虑函数toString检测问题了.
~~第一个参数是函数, 第二个参数是函数名称, 第三个是否是构造函数. 非构造函数则传false, new 函数将会报错.
第四个参数的函数的length. 返回壳函数.~~
之前保护这样得到的函数会导致无法被回收, 内存一直增加, 所以换了写法...现在只对函数toString进行保护, 其他需要的自行封装, 比如判断是否是new关键字调用, 以及函数长度等... (感谢零点大佬提供的代码) 

~~2. DeleteProperty
作用: 强行移除属性, 即使configurable为false也能直接删除. (感谢零点大佬提供的代码)
缺点: 目前我只用在了Promise构造函数删除caller以及arguments属性(底层自带的没有这2个属性), 强制删除可能引发bug, 所以大多时候我用v8底层函数
强制修改描述符之后再用delete关键字进行安全的删除.~~ 有bug, 还是修改描述符delete吧~

3. xtd
作用: 生成一个type为undefined的对象. (感谢泰迪大佬提供的代码)

4. ClearMemory
作用: 通知引擎进行垃圾回收.这将使 V8 尝试执行一次完整的垃圾回收, 并尝试释放未使用的内存. 这样无限创建vm虚拟机也能保持内存占用处在稳定的区间.


4. api例子
```javascript
function a(){}
/* 现在只传函数进去, 然后的话函数的name如果是a ,那么toString就会得到 function a(){ [native code] } */
wanfeng.SetNative(a);
```
```javascript
let undefined_obj = new wanfeng.xtd;
```
```javascript
wanfeng.ClearMemory();
```

## node框架使用说明

1. 以window对象为例, window 获取 window对象时, 会走到 globalMy.window_get_window 这个方法里,我们在这里写方法逻辑。

2. 以document对象为例, document 调用 createElement方法时, 会走到 globalMy.Document_createElement 这个方法里,因为是原型链上的方法,所以是Document

3. 还是以document为例, document 获取 location对象时, 会走到 globalMy.document_get_location 这个方法里, 因为location是直接属于document对象下的。

ps : 核心就是在node底层定义了一层拦截器, 然后最终又走到我们定义的js方法里完成调用. 底层定义的方法不需要考虑toString检测. 而且node设置属性比js的defineProperty快很多.
 
## js框架简介

1. 因为之前自己写的沙箱太垃圾, 所以没有和node框架做结合. 不过node框架初始化也快, 干脆就直接用jsdom了, 偷懒了. 

2. 创建节点对象时, 我会定义一个壳对象来映射jsdom对象达到过检测的目的. 我实现的没有很优雅, 够用就行了

## 注意事项

1. 框架默认重写Promise, 用原生的Promise就不要调用globalMy. rePromise函数即可 (原生的会更好用, 有个库可以直接将异步转同步, 注意node的setTimeout的一些检测就好了...)

2. ~~不要代理任何对象,代理对象调用方法时会直接报错,和浏览器一样的机制。建议在方法调用时打印,像我的js框架一样。~~ 现在可以代理了, 可以自己判断代理对象调用方法时要不要报错.

3. node无法使用正常的vm2模块, 改用vm模块了(不建议用execjs调, 真的很蠢... 持续调用还是建议起服务接口), vm小小的魔改了下, 去掉了一些检测点...

4. 非构造函数的原型对象, 就实现了个别, 比如WindowProperties这种的原型对象。这种会存放在Utils中, 例如Utils.WindowProperties_ptototype。

5. 如果遇到方法没有定义的话, node会挂掉噢...


## 更新说明

2023-03-15

node和js框架代码更新了些许东西, 最新的node处理了一些细节问题, 还有些小bug也解决了. 
所以要用新编译的node!! 

2023-03-29

后续js框架不更新了, 因为js框架是去年写的, 很多实现的很有问题. setTimeout以及添加事件触发事件都有问题(我现在也用原生的了~). 如果大佬们有关于node框架的一些想法或者思路可以一起探讨~

2023-05-01

增加了node的一些api, 以及去除掉模块自带的构造函数, ~~改用wanfeng.SetNative来生成壳构造函数~~改用wanfeng.SetNative保护函数toString. 这样new一份虚拟机的话, 这些构造函数就不相等了, 相互独立.

修改了vm的源码, 过了一些有问题的检测点. 比如this.hasOwnProperty("hasOwnProperty") === true, vm的this只要继承谁, 就会直接拥有这个属性. 能遍历到这个key, 但是用getOwnProperty又获取到undefined. 所以修改了点东西.

初始化这块, ~~就是将保护后的构造函数放到wanfeng这个对象里(每个vm传一个wanfeng对象进去, 不要直接传wanfeng模块, 看main.js的rsvmp函数)~~, 看init_env.js. 生成构造函数放在globalMy下, 然后wanfeng.SetNative保护一下.再调用Utils.initEnv(), Utils.initWindow()就行了.

2023-05-08

修改了wanfeng.SetNative的底层源码, 所以使用方式也改变了... wanfeng新增ClearMemory api, ~~消耗内存现在稳定了呜呜~~~ (jsdom有些内存清不掉~)

2023-05-17

将nodejs修改v8源码, 以及注册壳函数源码都放到星球里了. 后续会开源出来给大家看看, 基本都是用的v8 API在做操作. 更新了一个api setUndetectable V8对象Utils下的.

现在已经将很多模块的功能都砍掉或者移植到v8层面去做了. 主要是让wanfeng模块只在node层面做事情, 而不用传入虚拟机里.

另外这次版本升级到了19.6, 18.8版本以上提供方便的生成快照命令, 所以升级了... 

我的nodejs v8源码已经上传到星球里了, 可以学习下用v8的这些api来过一些补环境的检测~ (星球随缘更新, 只要50, 饿不死你富不了我...)

## 警告

此代码开源仅供学习使用, 如有影响请联系作者删除. 请勿用于非法用途, 否则法律后果自负.


## 赞助

By: 挽风  q/v: 1491025307. 

有好的补环境思路或者遇到了bug联系我~

ps: 和陈不不大佬的cynode不是一个框架...

我、陈不不大佬、泰迪大佬一起合作的星球 : https://t.zsxq.com/06bIUvBEM. 星球里有更轻量级的框架, 只提供api的框架, 没有固定初始化的那种.
