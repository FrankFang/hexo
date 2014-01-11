title: 享受 Grunt
date: 2013-12-29 22:10:25
tags: 编程
keywords: grunt,awesome,grunt awesome
---

在生产环境中使用 Grunt 已经有两个多月了，是时候写一些体会了。目前能在网上搜到不少入门教程，我这篇就不再赘述 使用 Grunt 的目的、安装过程和配置方法等了，主要讲一些实际工作时的思考。另外还涉及到 bower 和 Yeoman。

<!-- more -->

Build Automation
----------------
Build Automation 就是「构建自动化」，[Wiki 上的解释][ba]是

> 构建自动化是将软件开发人员日常工作中的一系列任务自动执行。这些任务包括但不限于
>
> * 将源代码编译为二进制文件
> * 打包二进制文件
> * 运行测试用例
> * 发布到线上环境
> * 添加文档或发行注释

为什么 BA 很重要呢，因为它能节省程序员的时间。重复性、可执行的任务，本应交给机器来完成。省时省力，多好。

P.S. 其实 BA 不一定总是好的，见下图

![](http://www.1stwebdesigner.com/wp-content/uploads/2011/10/compiling2.png)


用 Grunt 之前
---------
BA 具体到前端开发，就包括但不限于以下任务

* 将 LESS/SCSS 和 CoffeeScript 编译为 CSS 和 JS
* 将源代码（JS、CSS、HTML）和图片压缩（以节省用户带宽）
* 打包或合并资源文件
* 对资源文件做版本控制
* 运行测试用例
* 发布到线上环境

在 Grunt 之前，我们一般是怎么完成这些任务的呢？我们用了类似的自动构建工具，如 Ant 或 Make。说实话，Grunt 跟这些工具的区别可能仅仅是语言的选择不同，但这正是吸引我们前端开发者的一点——使用 JS 作为开发语言。

Ant 我真是从没用过， 因为我真的看不懂 XML（其实我是忠实的 Java 黑你应该知道吧）。Makefile，总感觉是 C/C++ 程序员用的东西，也无爱。

感谢 Grunt，我不用去学习 Ant 和 Make，就可以按我的想法来做自动构建了。

Yeoman 和 Bower
------------

一般来说，用 Grunt 的同时都会配合着 Yeoman 和 Bower 来用。我先吐槽下这俩货。

Bower 很好用，能节省我们宝贵的人生。不过 `bower list --path` 有时候不能把文件的路径打印完整，每次都要我费劲去翻目录，因为这些组件的开发者没有在 `.bower.json` 里添加 main 文件的配置，差评。

Yeoman 一般，能帮你写好初始模板、Gruntfile 和 Bower，但是有两个缺点

一、臃肿

流行的 generator 添加了过多的任务而显得十分臃肿！以 [generator-backbone][gb] 为例，它添加了 [25 项 Grunt 任务][p]，其中 9 项我不怎么想用，最气人的是它还有一个 compass 任务，要运行这个任务我需要事先安装 ruby！你敢再多依赖点儿别的东西吗！？

二、可定制化差

我想改变一下 generator-backbone 里面的目录结构，废老大力气了。牵一发而动全身，而且有些任务插件又没有文档，改起来提心吊胆的。

所以目前我还是没有直接使用 Yeoman，只是借鉴了里面的 Gruntfile 的写法。并且在尝试写自己的 generator。

用 Grunt 之后
-------------

我用 Grunt 做了哪些事呢？其实主要是两方面：加快开发和自动构建。

### 加快开发

主要使用了 `watch` 任务。

由于我们在项目里采用了 LESS，所以我使用 Grunt 对其进行实时编译。

Live Reload 功能我并没有使用，它很烦，经常在我不想刷新页面的时候帮我刷新了。而且速度也不够快。

另外我让 Grunt 实时运行单元测试。

### 自动构建

这个过程主要交给 `usemin` 任务来完成。

它会合并文件、压缩文件, 以及加版本信息。

我们的 `git commit` 即可触发 CI 来执行 Grunt 命令，然后将其发布到线上环境。

Workflow
--------

这就是传说中的 Workflow 啊，将我从繁杂的琐事中解救出来了哇，有一种「世界如此美妙」的感觉！

简单来说，只要在工作中遇到了 over and over again 的任务，我就会考虑把它放入 Grunt 中，作为 Workflow 的一个步骤。

这样做的好处是什么呢？只有一个：把本该让机器去做的事交给机器去做。

![Useless Box](http://dudelol.com/DO-NOT-HOTLINK-IMAGES/Useless-box.gif)







[ba]: http://en.wikipedia.org/wiki/Build_automation "Build Automation"
[gb]: https://github.com/yeoman/generator-backbone
[p]: https://github.com/yeoman/generator-backbone/blob/master/app/templates/_package.json "package.json"