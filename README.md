# 魔改Node Js补环境框架

## 内置模块wanfeng
内置模块wanfeng, 模块里面存放的是构造函数, 是未初始化的, 也就是原型对象以及链都没有设置.

var undefined_obj = new wanfeng.xtd;
这样就可以得到一个type为undefined的对象了,感谢泰迪大佬提供的代码。

ps: 我实现的有bug,蓝瘦

## 内置对象Utils
1. Utils对象里的方法都是做初始化用的, 使用参考util目录下的init_env.js文件, 
这里就不赘述了,使用Utils对象初始化对象之前,先定义一个globalMy对象,否则会报错.

2. Error_get_stack: 报错堆栈获取的时候会在这里被拦截,然后再返回堆栈字符串出去。(感谢陈不不大佬给予的帮助)

3. newWindow newDocument newLocation 是返回一个对象,定义好属性的对象,不过原型以及链没设置,需要手动设置下.
实现可以看init_env.js  globalMy.newWindow, 初始化 window location document.

## node框架使用说明

1. 以window对象为例, window 获取 window对象时, 会走到 globalMy.window_get_window 这个方法里,我们在这里写方法逻辑。

2. 以document对象为例, document 调用 createElement方法时, 会走到 globalMy.Document_createElement 这个方法里,因为是原型链上的方法,所以是Document

3. 还是以document为例, document 获取 location对象时, 会走到 globalMy.document_get_location 这个方法里, 因为location是直接属于document对象下的。

ps : 核心就是在node底层定义了一层拦截器, 然后最终又走到我们定义的js方法里完成调用. 底层定义的方法不需要考虑toString检测. 而且node设置属性比js的defineProperty快很多.
 
## js框架简介

1. 因为之前自己写的沙箱太垃圾, 所以没有和node框架做结合. 不过node框架初始化也快, 干脆就直接用jsdom了, 偷懒了. 

2. 创建节点对象时, 我会定义一个壳对象来映射jsdom对象达到过检测的目的. 我实现的没有很优雅, 够用就行了

## 注意事项

1. 框架默认重写Promise, 如果需要用自带的, 请在初始化之前备份这个对象, 然后替换~

2. 不要代理任何对象,代理对象调用方法时会直接报错,和浏览器一样的机制。建议在方法调用时打印,像我的js框架一样。

3. node无法使用正常的vm2模块, 改用vm模块了(不建议用execjs调, 真的很蠢... 持续调用还是建议起服务接口)

4. 非构造函数的原型对象, 就实现了个别, 比如WindowProperties这种的原型对象。这种会存放在Utils中, 例如Utils.WindowProperties_ptototype。

5. 如果遇到方法没有定义的话, node会挂掉噢...

## 警告

此代码开源仅供学习使用,  如有影响请联系作者删除. 请勿用于非法用途, 否则法律后果自负. 最后请不要利用信息差用此框架去获利.

## 赞助
我、陈不不大佬、泰迪大佬一起合作的星球 : https://t.zsxq.com/06bIUvBEM