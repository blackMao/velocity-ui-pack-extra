介绍
======
1. 提供[velocity.js](http://julian.com/research/velocity/)动画增强包。
2. 支持anition.css和magic.css两个动画库的所有动画（持续更新）

使用说明
======
依赖velocity.js和 valocity.ui.js
直接按照velocity.js的语法进行使用

```js
$elements.velocity("callout.bounce"); //参数就是动画名称
//采用与animation.css和magic.css同类名的形式
$elements.velocity("slideInUp");
```

动画序列
======
```js
	//支持animation.css和magic.css中的所有动画，具体名称可以参考两个动画库的类名
	var quene = [
		{
			name: 'fadeInUp',
			duration: 2,
			delay: 0,
			loop: 1
		},
		{
			name: 'bounce',
			duration: 1,
			delay: 1,
			loop: true
		},
	];

	MsAnimation.runAnimation('.square', quene, function() {
		alert('结束');
	});
```

目前支持的动画
======
animation.css所有动画名称
magic.css几乎所有动画（一部分与animation.css相同的未实现）

例子
======
[PC例子](http://maoshuai.sinaapp.com/ttgcw.html)
[移动端例子](http://h5.baomitu.com/app/f5349.html)--建议使用手机模式访问
