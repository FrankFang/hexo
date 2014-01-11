title: CSS相框
date: 2013-11-28 14:14:33
tags: 编程
keywords: css相框,铺满父元素
---

<a class="jsbin-embed" href="http://jsbin.com/AWogEFE/3/embed?output">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>

今天我试图用 CSS 做一个简单的相框，加一点外阴影，再加一点内阴影，就能做出的一个白色边框。但是我发现内阴影却不起作用。见上面框框里的第一个相框。它比下面的那个相框少了内阴影。

然后我发现实际上内阴影并非不起作用，而是被巨大的龙猫盖住了。于是我用 before 伪类做了下面一个相框，达到了我的效果。

同时我发现 before 伪类对 img 标签不起作用。这是一个 bug 还是一个 feature 呢？令人沉思。
同时，我还发现

```css
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
```

这种定位方法能让元素铺满整个父元素。

另外我要说的是，那些在博客里贴代码，而不知道用 jsbin/jsfiddle/codepen 的前端程序员，试试改变一下吧。
