/**********************
   Velocity UI Pack Extra
   animation.css + magic.css
   require velocity.js velocity.ui.js
**********************/

;(function (factory) {
    /* CommonJS module. */
    if (typeof require === "function" && typeof exports === "object" ) {
        module.exports = factory();
    /* AMD module. */
    } else if (typeof define === "function" && define.amd) {
        define([ "velocity" ], factory);
    /* Browser globals. */
    } else {
        factory();
    }
}(function() {
return function (global, window, document, undefined) {

    /*************
        Checks
    *************/

    if (!global.Velocity || !global.Velocity.Utilities) {
        window.console && console.log("Velocity animation: Velocity must be loaded first. Aborting.");
        return;
    } else {
        var Velocity = global.Velocity,
            $ = Velocity.Utilities;
    }

	/**
	 {
		defaultDuration: 825,
		calls: [
			[properties, percent, options]
		]
	 }
	 */
    var packagedEffects = {
		/**无动画**/
		"noeffect": {
			defaultDuration: 825,
			calls: [
				[ { opacity: 1}, 1]
			],
			desc: '无动画',
			type: 'none'
		},
		"none": {
			defaultDuration: 825,
			calls: [
				[ { opacity: 1}, 1]
			],
			desc: '无动画',
			type: 'none'
		},
		/**特效动画-开始**/
		//转圈
		"circleRotate": {
			defaultDuration: 825,
			calls: [
				[ { rotateZ: [360, 0], opacity: 1}, 1]
			],
			desc: '转圈',
			type: 'special'
		},
		//弹跳
		"bounce": {
			defaultDuration: 550,
			calls: [
				[ { translateY: -30 , opacity: 1}, 0.25 ],
				[ { translateY: 0 }, 0.125 ],
				[ { translateY: -15 }, 0.125 ],
				[ { translateY: 0 }, 0.25 ]
			],
			desc: '弹跳',
			type: 'special'
		},
		//闪烁
		"flash": {
			defaultDuration: 1100,
			calls: [
				[ { opacity: [ 0, "linear", 1 ] }, 0.25 ],
				[ { opacity: [ 1, "linear" ] }, 0.25 ],
				[ { opacity: [ 0, "linear" ] }, 0.25 ],
				[ { opacity: [ 1, "linear" ] }, 0.25 ]
			],
			desc: '闪烁',
			type: 'special'
		},
		//心跳
		"pulse": {
			defaultDuration: 825,
			calls: [
				[ { scale: 1.1, opacity: 1}, 0.50],
				[ { scale:  1 }, 0.50 ]
			],
			desc: '心跳',
			type: 'special'
		},
		//震动
		"shake": {
			defaultDuration: 800,
			calls: [
				[ { translateX: -11, opacity: 1}, 0.125 ],
				[ { translateX: 11 }, 0.125 ],
				[ { translateX: -11 }, 0.125 ],
				[ { translateX: 11 }, 0.125 ],
				[ { translateX: -11 }, 0.125 ],
				[ { translateX: 11 }, 0.125 ],
				[ { translateX: -11 }, 0.125 ],
				[ { translateX: 0 }, 0.125 ]
			],
			desc: '震动',
			type: 'special'
		},
		//摇摆
		"swing": {
			defaultDuration: 950,
			calls: [
				[ { rotateZ: 15 , opacity: 1}, 0.20 ],
				[ { rotateZ: -10 }, 0.20 ],
				[ { rotateZ: 5 }, 0.20 ],
				[ { rotateZ: -5 }, 0.20 ],
				[ { rotateZ: 0 }, 0.20 ]
			],
			desc: '摇摆',
			type: 'special'
		},
		//橡皮筋
		'rubberBand': {
			defaultDuration: 800,
			calls: [
				[ { scaleX: 1, scaleY: 1, opacity: 1}, 1/7],
				[ { scaleX: 1.25, scaleY: 0.75 }, 1/7],
				[ { scaleX: 0.75, scaleY: 1.25 }, 1/7],
				[ { scaleX: 1.15, scaleY: 0.85 }, 1/7],
				[ { scaleX: 0.95, scaleY: 1.05 }, 1/7],
				[ { scaleX: 1.05, scaleY: 0.95 }, 1/7],
				[ { scaleX: 1, scaleY: 1 }, 1/7],
			],
			desc: '橡皮筋',
			type: 'special'
		},
		//翻转
		'flip': {
			defaultDuration: 800,
			calls: [
				[ {transformPerspective: 400, rotateY: -180, scale: 1.5, opacity: 1} , 0.5, {easing: 'ease-out'}],
				[ {transformPerspective: 400, rotateY: -360, scale: 1} , 0.5, {easing: 'ease-in'}]
			],
			desc: '翻转',
			type: 'special'
		},
		//摇晃
		'wobble': {
			defaultDuration: 800,
			calls: [
				[ {translateX: '-35%', rotateZ: -5, opacity: 1} , 1/6],
				[ {translateX: '20%', rotateZ: 3} , 1/6],
				[ {translateX: '-15%', rotateZ: -3} , 1/6],
				[ {translateX: '10%', rotateZ: 2} , 1/6],
				[ {translateX: '-5%', rotateZ: -1} , 1/6],
				[ {translateX: 0, rotateZ: 0} , 1/6]
			],
			desc: '摇晃',
			type: 'special'
		},
		//摇摇欲坠
		'hinge': {
			defaultDuration: 800,
			calls: [
				[ { transformOriginX: 'top',  transformOriginY: 'left', opacity: 1} , 1/6, {easing: 'ease-in-out'}],
				[ { transformOriginX: 'top',  transformOriginY: 'left', rotateZ: 80 }, 1/6, {easing: 'ease-in-out'}],
				[ { transformOriginX: 'top',  transformOriginY: 'left', rotateZ: 60, opacity: 1 } , 1/6, {easing: 'ease-in-out'}],
				[ { transformOriginX: 'top',  transformOriginY: 'left', rotateZ: 80 } , 1/6, {easing: 'ease-in-out'}],
				[ { transformOriginX: 'top',  transformOriginY: 'left', rotateZ: [0, 60], opacity: 1} , 1/6, {easing: 'ease-in-out'}],
				[ { translateY: 700,  opacity: 0, rotateZ: 0} , 1/6]
			],
			desc: '摇摇欲坠',
			type: 'special'
		},
		//左右移动
		'moveAround': {
			defaultDuration: 800,
			calls: [
				[ { translateX: ['-100px', 0], opacity: 1 } , 0.25],
				[ { translateX: [0, '-100px'] } , 0.25],
				[ { translateX: ['100px', 0] } , 0.25],
				[ { translateX: [0, '100px'] } , 0.25],
			],
			desc: '左右移动',
			type: 'special'
		},
		//左右抖动
		"tada": {
			defaultDuration: 1000,
			calls: [
				[ { scaleX: 0.9, scaleY: 0.9, rotateZ: -3 , opacity: 1}, 0.10 ],
				[ { scaleX: 1.1, scaleY: 1.1, rotateZ: 3 }, 0.10 ],
				[ { scaleX: 1.1, scaleY: 1.1, rotateZ: -3 }, 0.10 ],
				[ "reverse", 0.125 ],
				[ "reverse", 0.125 ],
				[ "reverse", 0.125 ],
				[ "reverse", 0.125 ],
				[ "reverse", 0.125 ],
				[ { scaleX: 1, scaleY: 1, rotateZ: 0 }, 0.20 ]
			],
			desc: '左右抖动',
			type: 'special'
		},
		//吹风效果
		"boingInUp": {
			defaultDuration: 800,
			calls: [
				[ {opacity: 1, perspectiveOrigin: '800px', rotateX: -50, transformOriginX: '50%', transformOriginY: 0}, 1/3],
				[ {opacity: 1, perspectiveOrigin: '800px', rotateX: 50, transformOriginX: '50%', transformOriginY: 0}, 1/3],
				[ {opacity: 1, perspectiveOrigin: '800px', rotateX: 0, transformOriginX: '50%', transformOriginY: 0}, 1/3],
			],
			desc: '吹风效果',
			type: 'special'
		},
		//左下打开
		"openDownLeft": {
			defaultDuration: 800,
			calls: [
				[ {opacity: 1, transformOriginX: ['0%', '0%'], transformOriginY: ['100%', '100%'], rotateZ: [-110, 0]}, 1, {easing: 'ease-in-out'}]
			],
			desc: '左下打开',
			type: 'special'
		},
		//右下打开
		"openDownRight": {
			defaultDuration: 800,
			calls: [
				[ {opacity: 1, transformOriginX: ['100%', '100%'], transformOriginY: ['100%', '100%'], rotateZ: [110, 0]}, 1, {easing: 'ease-in-out'}]
			],
			desc: '右下打开',
			type: 'special'
		},
		//左上打开
		"openUpLeft": {
			defaultDuration: 800,
			calls: [
				[ {opacity: 1, transformOriginX: ['0%', '0%'], transformOriginY: ['0%', '0%'], rotateZ: [110, 0]}, 1, {easing: 'ease-in-out'}]
			],
			desc: '左上打开',
			type: 'special'
		},
		//右上打开
		"openUpRight": {
			defaultDuration: 800,
			calls: [
				[ {opacity: 1, transformOriginX: ['100%', '100%'], transformOriginY: ['0%', '0%'], rotateZ: [-110, 0]}, 1, {easing: 'ease-in-out'}]
			],
			desc: '右上打开',
			type: 'special'
		},
		//向下翻转
		"perspectiveDown": {
			defaultDuration: 800,
			calls: [
				[ {opacity: 1, transformOriginX: ['0%', '0%'], transformOriginY: ['100%', '100%'], rotateX: [-180, 0], transformPerspective: [800, 800]}, 1]
			],
			desc: '向下翻转',
			type: 'special'
		},
		//向上翻转
		"perspectiveUp": {
			defaultDuration: 800,
			calls: [
				[ {opacity: 1, transformOriginX: ['0%', '0%'], transformOriginY: ['0%', '0%'], rotateX: [180, 0], transformPerspective: [800, 800]}, 1]
			],
			desc: '向上翻转',
			type: 'special'
		},
		//向右翻转
		"perspectiveRight": {
			defaultDuration: 800,
			calls: [
				[ {opacity: 1, transformOriginX: ['100%', '100%'], transformOriginY: ['0%', '0%'], rotateY: [180, 0], transformPerspective: [800, 800]}, 1]
			],
			desc: '向右翻转',
			type: 'special'
		},
		//向左翻转
		"perspectiveLeft": {
			defaultDuration: 800,
			calls: [
				[ {opacity: 1, transformOriginX: ['0%', '0%'], transformOriginY: ['0%', '0%'], rotateY: [-180, 0], transformPerspective: [800, 800]}, 1]
			],
			desc: '向左翻转',
			type: 'special'
		},
		/**特效动画-结束**/
		/**出现动画-开始**/
		//放大进入
		'zoomIn': {
			defaultDuration: 800,
			calls: [
				[ {opacity: 0, scale:  0.3}, 0.5],
				[ {opacity: 1, scale: 1}, 0.5],
			],
			desc: '放大进入',
			type: 'in'
		},
		//从下放大
		"zoomInUp": {
			defaultDuration: 800,
			calls: [
				[ {opacity: 0, scale: 0.1}, 1/3, {easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'}],
				[ {opacity: 1, scale: 0.475, translateY: '-60px'}, 1/3, {easing: 'cubic-bezier(0.175, 0.885, 0.320, 1)'}],
				[ {opacity: 1, scale: 1, translateY: 0}, 1/3],
			],
			desc: '从下放大',
			type: 'in'
		},
		//向下放大
		"zoomInDown": {
			defaultDuration: 800,
			calls: [
				[ {opacity: 0, scale:  0.1, translateY: '-1000px'}, 1/3, {easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'}],
				[ {opacity: 1, scale: 0.475, translateY: '60px'}, 1/3, {easing: 'cubic-bezier(0.175, 0.885, 0.320, 1)'}],
				[ {opacity: 1, scale: 1, translateY: 0}, 1/3, {easing: 'cubic-bezier(0.175, 0.885, 0.320, 1)'}],
			],
			desc: '向下放大',
			type: 'in'
		},
		//从左放大
		"zoomInLeft": {
			defaultDuration: 800,
			calls: [
				[ {opacity: 0, scale: 0.1, translateX: '-1000px'}, 1/3, {easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'}],
				[ {opacity: 1, scale: 0.475, translateX: '10px'}, 1/3, {easing: 'cubic-bezier(0.175, 0.885, 0.320, 1)'}],
				[ {opacity: 1, scale: 1, translateX: 0}, 1/3, {easing: 'cubic-bezier(0.175, 0.885, 0.320, 1)'}],
			],
			desc: '从左放大',
			type: 'in'
		},
		//从右放大
		"zoomInRight": {
			defaultDuration: 800,
			calls: [
				[ {opacity: 0, scale:  0.1, translateX: '1000px'}, 1/3, {easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'}],
				[ {opacity: 1, scale: 0.475, translateX: '-10px'}, 1/3, {easing: 'cubic-bezier(0.175, 0.885, 0.320, 1)'}],
				[ {opacity: 1, scale: 1, translateX: 0}, 1/3, {easing: 'cubic-bezier(0.175, 0.885, 0.320, 1)'}],
			],
			desc: '从右放大',
			type: 'in'
		},
		//放大震入
		'swashIn': {
			defaultDuration: 800,
			calls: [
				[ {opacity: 0, scale:0, transformOrigin: '50%'}, 1/3],
				[ {opacity: 1, scale:0.9, transformOrigin: '50%'}, 1/3],
				[ {opacity: 1, scale:1, transformOrigin: '50%'}, 1/3]
			],
			desc: '放大震入',
			type: 'in'
		},
		//模糊进入
		'vanishIn': {
			defaultDuration: 800,
			calls: [
				[ {opacity: 0, scale:2, transformOrigin: '50%', blur: 90}, 0.5],
				[ {opacity: 1, scale:1, transformOrigin: '50%', blur: 0}, 0.5]
			],
			desc: '模糊进入',
			type: 'in'
		},
		//由远及近
		'swap': {
			defaultDuration: 850,
			calls: [
				[ { opacity: [ 1, 0 ], transformOriginX: [ "50%", "0" ], transformOriginY: [ "50%", "0" ], scaleX: [ 1, 0 ], scaleY: [ 1, 0 ], translateX: [ 0, -700 ], translateZ: 0 } ]
			],
			reset: { transformOriginX: "50%", transformOriginY: "50%" },
			desc: '由远及近',
			type: 'in'
		},
		//弹入
		'bounceIn': {
			defaultDuration: 800,
			calls: [
				[ { opacity: 1, scale: 0.3 }, 1/6, {easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'} ],
				[ { opacity: 1, scale: 1.1 }, 1/6, {easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'} ],
				[ { opacity: 1, scale: 0.9 }, 1/6, {easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'} ],
				[ { opacity: 1, scale: 1.03 }, 1/6, {easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'} ],
				[ { opacity: 1, scale: 0.97 }, 1/6, {easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'} ],
				[ { opacity: 1, scale: 1 }, 1/6, {easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'} ],
			],
			desc: '弹入',
			type: 'in'
		},
		//从下弹入
		"bounceInUp": {
			defaultDuration: 800,
			calls: [
				[ { opacity: [ 1, 0 ], translateY: [ -30, 1000 ] }, 0.60, { easing: "easeOutCirc" } ],
				[ { translateY: 10 }, 0.20 ],
				[ { translateY: 0 }, 0.20 ]
			],
			desc: '从下弹入',
			type: 'in'
		},
		//从上弹入
		"bounceInDown": {
			defaultDuration: 800,
			calls: [
				[ { opacity: [ 1, 0 ], translateY: [ 30, -1000 ] }, 0.60, { easing: "easeOutCirc" } ],
				[ { translateY: -10 }, 0.20 ],
				[ { translateY: 0 }, 0.20 ]
			],
			desc: '从上弹入',
			type: 'in'
		},
		//从右弹入
		"bounceInRight": {
			defaultDuration: 750,
			calls: [
				[ { opacity: [ 1, 0 ], translateX: [ -30, 1250 ] }, 0.60, { easing: "easeOutCirc" } ],
				[ { translateX: 10 }, 0.20 ],
				[ { translateX: 0 }, 0.20 ]
			],
			desc: '从右弹入',
			type: 'in'
		},
		//从左弹入
		"bounceInLeft": {
			defaultDuration: 750,
			calls: [
				[ { opacity: [ 1, 0 ], translateX: [ 30, -1250 ] }, 0.60, { easing: "easeOutCirc" } ],
				[ { translateX: -10 }, 0.20 ],
				[ { translateX: 0 }, 0.20 ]
			],
			desc: '从左弹入',
			type: 'in'
		},
		//淡入
		"fadeIn": {
			defaultDuration: 500,
			calls: [
				[ { opacity: [ 1, 0 ] } ]
			],
			desc: '淡入',
			type: 'in'
		},
		//从下淡入
		"fadeInUp": {
			defaultDuration: 500,
			calls: [
				[ { opacity: [1, 0], translateY: [0, '100%']}],
			],
			desc: '从下淡入',
			type: 'in'
		},
		//从上淡入
		"fadeInDown": {
			defaultDuration: 500,
			calls: [
				[ { opacity: [1, 0], translateY: [0, '-100%']}],
			],
			desc: '从上淡入',
			type: 'in'
		},
		//从左淡入
		"fadeInLeft": {
			defaultDuration: 500,
			calls: [
				[ { opacity: [1, 0], translateX: [0, '-100%']}],
			],
			desc: '从左淡入',
			type: 'in'
		},
		//从右淡入
		"fadeInRight": {
			defaultDuration: 500,
			calls: [
				[ { opacity: [1, 0], translateX: [0, '100%']}],
			],
			desc: '从右淡入',
			type: 'in'
		},
		//从下进入
		"fadeInUpBig": {
			defaultDuration: 500,
			calls: [
				[ { opacity: [1, 0], translateY: [0, '2000px']}],
			],
			desc: '从下进入',
			type: 'in'
		},
		//从上进入
		"fadeInDownBig": {
			defaultDuration: 500,
			calls: [
				[ { opacity: [1, 0], translateY: [0, '-2000px']}],
			],
			desc: '从上进入',
			type: 'in'
		},
		//从左进入
		"fadeInLeftBig": {
			defaultDuration: 500,
			calls: [
				[ { opacity: [1, 0], translateX: [0, '-2000px']}],
			],
			desc: '从左进入',
			type: 'in'
		},
		//从右进入
		"fadeInRightBig": {
			defaultDuration: 500,
			calls: [
				[ { opacity: [1, 0], translateX: [0, '2000px']}],
			],
			desc: '从右进入',
			type: 'in'
		},
		//Y轴转入
		"flipInY": {
			defaultDuration: 700,
			calls: [
				[ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], rotateY: [ 0, -90 ] } ]
			],
			reset: { transformPerspective: 0 },
			desc: 'Y轴转入',
			type: 'in'
		},
		//X轴转入
		"flipInX": {
			defaultDuration: 800,
			calls: [
				[ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], rotateX: [ 0, -90 ] } ]
			],
			reset: { transformPerspective: 0 },
			desc: 'X轴转入',
			type: 'in'
		},
		//光速进入
		'lightSpeedIn': {
			defaultDuration: 800,
			calls: [
				[ { translateX: [0, '100%'], skewX: -30, opacity: [1, 0]}, 0.25 ],
				[ { skewX: 20}, 0.25 ],
				[ { skewX: -5}, 0.25 ],
				[ { translateX: 0, skewX: 0}, 0.25 ],
			],
			desc: '光速进入',
			type: 'in'
		},
		//旋转进入
		'rotateIn': {
			defaultDuration: 800,
			calls: [
				[ { transformOriginX: ['50%', '50%'], transformOriginY: ['50%', '50%'], rotateZ: [0, -360], opacity: [1, 0]}]
			],
			desc: '旋转进入',
			type: 'in'
		},
		//左向下转
		'rotateInDownLeft': {
			defaultDuration: 800,
			calls: [
				[ {transformOriginX: ['0', '0'], transformOriginY: ['100%', '100%'], rotateZ: [0, -90], opacity: [1, 0]} ]
			],
			desc: '左向下转',
			type: 'in'
		},
		//右向下转
		'rotateInDownRight': {
			defaultDuration: 800,
			calls: [
				[ {transformOriginX: ['100%', '100%'], transformOriginY: ['100%', '100%'], rotateZ: [0, 90], opacity: [1, 0]} ]
			],
			desc: '右向下转',
			type: 'in'
		},
		//左向上转
		'rotateInUpLeft': {
			defaultDuration: 800,
			calls: [
				[ {transformOriginX: ['0', '0'], transformOriginY: ['100%', '100%'], rotateZ: [0, 90], opacity: [1, 0]} ]
			],
			desc: '左向上转',
			type: 'in'
		},
		//右向上转
		'rotateInUpRight': {
			defaultDuration: 800,
			calls: [
				[ {transformOriginX: ['100%', '100%'], transformOriginY: ['100%', '100%'], rotateZ: [0, -90], opacity: [1, 0]} ]
			],
			desc: '右向上转',
			type: 'in'
		},
		//滚入
		'rollIn': {
			defaultDuration: 800,
			calls: [
				[ {translateX: [0, '-100%'], rotateZ: [0, -120], opacity: [1, 0]} ]
			],
			desc: '滚入',
			type: 'in'
		},
		//从下滑入
		"slideInUp": {
			defaultDuration: 900,
			calls: [
				[ { opacity: [ 1, 0 ], translateY: [ 0, 100 ], translateZ: 0 } ]
			],
			desc: '从下滑入',
			type: 'in'
		},
		//从上滑入
		"slideInDown": {
			defaultDuration: 900,
			calls: [
				[ { opacity: [ 1, 0 ], translateY: [ 0, -100 ], translateZ: 0 } ]
			],
			desc: '从上滑入',
			type: 'in'
		},
		//从左滑入
		"slideInLeft": {
			defaultDuration: 1000,
			calls: [
				[ { opacity: [ 1, 0 ], translateX: [ 0, -100 ], translateZ: 0 } ]
			],
			desc: '从左滑入',
			type: 'in'
		},
		//从右滑入
		"slideInRight": {
			defaultDuration: 1000,
			calls: [
				[ { opacity: [ 1, 0 ], translateX: [ 0, 100 ], translateZ: 0 } ]
			],
			desc: '从右滑入',
			type: 'in'
		},
		//空间右入
		"spaceInRight": {
			defaultDuration: 1000,
			calls: [
				[ { opacity: [ 1, 0 ], translateX: [ '200%', 0 ], scale: 0.2, transformOriginX: '100%', transformOriginY: '50%' }, 0.5 ],
				[ { translateX: 0, scale: 1, transformOriginX: '100%', transformOriginY: '50%' }, 0.5 ]
			],
			desc: '空间右入',
			type: 'in'
		},
		//空间左入
		"spaceInLeft": {
			defaultDuration: 1000,
			calls: [
				[ { opacity: [ 1, 0 ], translateX: [ '-200%', 0 ], scale: 0.2, transformOriginX: 0, transformOriginY: '50%' }, 0.5 ],
				[ { translateX: 0, scale: 1, transformOriginX: 0, transformOriginY: '50%' }, 0.5 ]
			],
			desc: '空间左入',
			type: 'in'
		},
		//空间上入
		"spaceInDown": {
			defaultDuration: 1000,
			calls: [
				[ { opacity: [ 1, 0 ], translateY: [ '200%', 0], scale: 0.2, transformOriginX: '50%', transformOriginY: '100%' }, 0.5 ],
				[ { translateY: 0, scale: 1, transformOriginX: '50%', transformOriginY: '100%' }, 0.5 ]
			],
			desc: '空间上入',
			type: 'in'
		},
		//空间下入
		"spaceInUp": {
			defaultDuration: 1000,
			calls: [
				[ { opacity: [ 1, 0 ], translateY: [ 0, '-200%'], scale: 0.2, transformOriginX: '50%', transformOriginY: 0 }, 0.5 ],
				[ { translateY: 0, scale: 1, transformOriginX: '50%', transformOriginY: 0 }, 0.5 ]
			],
			desc: '空间下入',
			type: 'in'
		},
		//爆炸效果
		"boomIn": {
			defaultDuration: 1000,
			calls: [
				[ { opacity: 0, scale: 2 }, 0.25 ],
				[ { opacity: 0.5, scale: 3 }, 0.25 ],
				[ { opacity: 0.8, scale:0.7 }, 0.25 ],
				[ { opacity: 1, scale:1 }, 0.25 ]
			],
			desc: '爆炸效果',
			type: 'in'
		},
		//铃声上入
		"tinUpIn": {
			defaultDuration: 1000,
			calls: [
				[ {translateY: '-900%', scale: 1}, 1/7],
				[ {translateY: 0, scale: 1.1}, 1/7],
				[ {translateY: 0, scale: 1}, 1/7],
				[ {translateY: 0, scale: 1.1}, 1/7],
				[ {translateY: 0, scale: 1}, 1/7],
				[ {translateY: 0, scale: 1.1}, 1/7],
				[ {translateY: 0, scale: 1}, 1/7],
			],
			desc: '铃声上入',
			type: 'in'
		},
		//铃声下入
		"tinDownIn": {
			defaultDuration: 1000,
			calls: [
				[ {translateY: '900%', scale: 1}, 1/7],
				[ {translateY: 0, scale: 1.1}, 1/7],
				[ {translateY: 0, scale: 1}, 1/7],
				[ {translateY: 0, scale: 1.1}, 1/7],
				[ {translateY: 0, scale: 1}, 1/7],
				[ {translateY: 0, scale: 1.1}, 1/7],
				[ {translateY: 0, scale: 1}, 1/7],
			],
			desc: '铃声下入',
			type: 'in'
		},
		//乱入
		"foolishIn": {
			defaultDuration: 1000,
			calls: [
				[ {scale: 0, rotate: 360, transformOrigin: '50%'}, 0.25],
				[ {opacity: 1, scale: 0.5, rotate: 0, transformOriginX: 0, transformOriginY: '100%'}, 0.25],
				[ {opacity: 1, scale: 0.5, rotate: 0, transformOriginX: '100%'}, 0.25],
				[ {opacity: 1, scale: 0.5, rotate: 0, transformOrigin: 0}, 0.25],
				[ {opacity: 1, scale: 1, rotate: 0, transformOrigin: '50%'}, 0.25],
			],
			desc: '乱入',
			type: 'in'
		},
		//闪入
		"puffIn": {
			defaultDuration: 1000,
			calls: [
				[ {scale: 2, opacity: 0, transformOrigin: '50%', blur: 2}, 0.5],
				[ {scale: 1, opacity: 1, transformOrigin: '50%', blur: 0}, 0.5]
			],
			desc: '闪入',
			type: 'in'
		},
		//右移动
		"slideRight": {
			defaultDuration: 1000,
			calls: [
				[ {transformOrigin:0, translateX: ['100%', 0]}]
			],
			desc: '右移动',
			type: 'in'
		},
		//上旋转入
		"twisterInUp": {
			defaultDuration: 1000,
			calls: [
				[ { opacity: 0, scale: 0, rotateZ: 360, translateY: '100%', transformOriginX: '100%', transformOriginY: 0}, 1/3],
				[ { opacity: 1, scale: 0, rotateZ: 360, translateY: '100%', transformOriginX: '100%', transformOriginY: 0},  1/3],
				[ { opacity: 1, scale: 1, rotateZ: 0, translateY: 0, transformOriginX: 0, transformOriginY: 0},  1/3],
			],
			desc: '上旋转入',
			type: 'in'
		},
		//左下转入
		"openDownLeftRetourn": {
			defaultDuration: 1000,
			calls: [
				[ { opacity: [1, 0], transformOriginX: [0, 0], transformOriginY: ['100%', '100%'], rotateZ: [0, -110] }, 1, {easing: 'ease-in-out'}]
			],
			desc: '左下转入',
			type: 'in'
		},
		//右下转入
		"openDownRightRetourn": {
			defaultDuration: 1000,
			calls: [
				[ { opacity: [1, 0], transformOriginX: ['100%', '100%'], transformOriginY: ['100%', '100%'], rotateZ: [0, 110] }, 1, {easing: 'ease-in-out'}]
			],
			desc: '右下转入',
			type: 'in'
		},
		//左上转入
		"openUpLeftRetourn": {
			defaultDuration: 1000,
			calls: [
				[ { opacity: [1, 0], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateZ: [0, 110] }, 1, {easing: 'ease-in-out'}]
			],
			desc: '左上转入',
			type: 'in'
		},
		//右上转入
		"openUpRightRetourn": {
			defaultDuration: 1000,
			calls: [
				[ { opacity: [1, 0], transformOriginX: ['100%', '100%'], transformOriginY: [0, 0], rotateZ: [0, -110] }, 1, {easing: 'ease-in-out'}]
			],
			desc: '右上转入',
			type: 'in'
		},
		//向上转入
		"perspectiveDownRetourn": {
			defaultDuration: 1000,
			calls: [
				[ { opacity: [1, 0], transformOriginX: ['0%', '0%'], transformOriginY: ['100%', '100%'], rotateX: [0, -180] }, 1]
			],
			desc: '向上转入',
			type: 'in'
		},
		//向右转入
		"perspectiveLeftRetourn": {
			defaultDuration: 1000,
			calls: [
				[ { opacity: [1, 0], transformOriginX: ['0%', '0%'], transformOriginY: ['0%', '0%'], rotateY: [0, -180] }, 1]
			],
			desc: '向上转入',
			type: 'in'
		},
		//向左转入
		"perspectiveRightRetourn": {
			defaultDuration: 1000,
			calls: [
				[ { opacity: [1, 0], transformOriginX: ['100%', '100%'], transformOriginY: ['0%', '0%'], rotateY: [0, 180] }, 1]
			],
			desc: '向上转入',
			type: 'in'
		},
		//向上转入
		"perspectiveUpRetourn": {
			defaultDuration: 1000,
			calls: [
				[ { opacity: [1, 0], transformOriginX: ['0%', '0%'], transformOriginY: ['0%', '0%'], rotateX: [0, 180] }, 1]
			],
			desc: '向上转入',
			type: 'in'
		},
		/**出现动画-结束**/
		/**消失动画-开始**/
		//魔力退场
		"magic": {
			defaultDuration: 800,
			calls: [
				[ { opacity: [0, 1], transformOriginX: ['200%', '100%'], transformOriginY: ['500%', '200%'], rotateZ: [270, 0], scale: [0, 1] }]
			],
			reset: {scale: 1},
			desc: '魔力退场',
			type: 'out'
		},
		//缩小退出
		'zoomOut': {
			defaultDuration: 800,
			calls: [
				[ {opacity: 1, scale: 1}, 0.5],
				[ {opacity: 0, scale: 0.3}, 0.5]
			],
			reset: {scale: 1},
			desc: '缩小退出',
			type: 'out'
		},
		//向下缩小
		"zoomOutDown": {
			defaultDuration: 800,
			calls: [
				[ {opacity: 1, scale: 0.45, translateY: '-60px'}, 0.5, {easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'}],
				[ {opacity: 0, scale: 0.1, translateY: '2000px'}, 0.5, {easing: 'cubic-bezier(0.175, 0.885, 0.320, 1)'}]
			],
			reset: {scale: 1, translateY: 0},
			desc: '向下缩小',
			type: 'out'
		},
		//向左缩小
		"zoomOutLeft": {
			defaultDuration: 800,
			calls: [
				[ {opacity: 1, scale: 0.45, translateX: '42px'}, 0.5, {easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'}],
				[ {opacity: 0, scale: 0.1, translateX: '-2000px'}, 0.5, {easing: 'cubic-bezier(0.175, 0.885, 0.320, 1)'}]
			],
			reset: {scale: 1, translateX: 0},
			desc: '向左缩小',
			type: 'out'
		},
		//向右缩小
		"zoomOutRight": {
			defaultDuration: 800,
			calls: [
				[ {opacity: 1, scale: 0.45, translateX: '-42px'}, 0.5, {easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'}],
				[ {opacity: 0, scale: 0.1, translateX: '2000px'}, 0.5, {easing: 'cubic-bezier(0.175, 0.885, 0.320, 1)'}]
			],
			reset: {scale: 1, translateX: 0},
			desc: '向右缩小',
			type: 'out'
		},
		//向上缩小
		"zoomOutUp": {
			defaultDuration: 800,
			calls: [
				[ {opacity: 1, scale: 0.45, translateY: '60px'}, 0.5, {easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'}],
				[ {opacity: 0, scale: 0.1, translateY: '-2000px'}, 0.5, {easing: 'cubic-bezier(0.175, 0.885, 0.320, 1)'}]
			],
			reset: {scale: 1, translateY: 0},
			desc: '向上缩小',
			type: 'out'
		},
		//弹出
		'bounceOut': {
			defaultDuration: 800,
			calls: [
				[ { opacity: 1, scale: 1 }, 1/6, {easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'} ],
				[ { opacity: 1, scale: 0.97 }, 1/6, {easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'} ],
				[ { opacity: 1, scale: 1.03 }, 1/6, {easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'} ],
				[ { opacity: 1, scale: 0.9 }, 1/6, {easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'} ],
				[ { opacity: 1, scale: 1.1 }, 1/6, {easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'} ],
				[ { opacity: 1, scale: 0 }, 1/6, {easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'} ],
			],
			reset: {scale: 1},
			desc: '弹出',
			type: 'out'
		},
		//向上弹出
		"bounceOutUp": {
			defaultDuration: 1000,
			calls: [
				[ { translateY: 20 }, 0.20 ],
				[ { opacity: [ 0, "easeInCirc", 1 ], translateY: -1000 }, 0.80 ]
			],
			reset: { translateY: 0 },
			desc: '向上弹出',
			type: 'out'
		},
		//向下弹出
		"bounceOutDown": {
			defaultDuration: 1000,
			calls: [
				[ { translateY: -20 }, 0.20 ],
				[ { opacity: [ 0, "easeInCirc", 1 ], translateY: 1000 }, 0.80 ]
			],
			reset: { translateY: 0 },
			desc: '向下弹出',
			type: 'out'
		},
		//从右弹出
		"bounceOutRight": {
			defaultDuration: 750,
			calls: [
				[ { translateX: -30 }, 0.20 ],
				[ { opacity: [ 0, "easeInCirc", 1 ], translateX: 1250 }, 0.80 ]
			],
			reset: { translateX: 0 },
			desc: '从右弹出',
			type: 'out'
		},
		//从左弹出
		"bounceOutLeft": {
			defaultDuration: 750,
			calls: [
				[ { translateX: 30 }, 0.20 ],
				[ { opacity: [ 0, "easeInCirc", 1 ], translateX: -1250 }, 0.80 ]
			],
			reset: { translateX: 0 },
			desc: '从左弹出',
			type: 'out'
		},
		//旋转退出
		"rotateOut": {
			defaultDuration: 750,
			calls: [
				[ { opacity: [0, 1], transitionOrigin: 'center', rotateZ: 200} ]
			],
			reset: { rotateZ: 0 },
			desc: '旋转退出',
			type: 'out'
		},
		//左下转出
		"rotateOutDownLeft": {
			defaultDuration: 750,
			calls: [
				[ {transformOriginX: ['0', '0'], transformOriginY: ['100%', '100%'], rotateZ: [90, 0], opacity: [0, 1]} ]
			],
			reset: { rotateZ: 0 , transformOriginX: 'center', transitionOriginY: 'center'},
			desc: '左下转出',
			type: 'out'
		},
		//右下转出
		"rotateOutDownRight": {
			defaultDuration: 750,
			calls: [
				[ {transformOriginX: ['100%', '100%'], transformOriginY: ['100%', '100%'], rotateZ: [-90, 0], opacity: [0, 1]} ]
			],
			reset: { rotateZ: 0, transformOriginX: 'center', transitionOriginY: 'center' },
			desc: '右下转出',
			type: 'out'
		},
		//左上转出
		"rotateOutUpLeft": {
			defaultDuration: 750,
			calls: [
				[ {transformOriginX: ['0', '0'], transformOriginY: ['100%', '100%'], rotateZ: [-90, 0], opacity: [0, 1]} ]
			],
			reset: { rotateZ: 0 , transformOriginX: 'center', transitionOriginY: 'center'},
			desc: '左上转出',
			type: 'out'
		},
		//右上转出
		"rotateOutUpRight": {
			defaultDuration: 750,
			calls: [
				[ {transformOriginX: ['100%', '100%'], transformOriginY: ['100%', '100%'], rotateZ: [90, 0], opacity: [0, 1]} ]
			],
			reset: { rotateZ: 0 ,transformOriginX: 'center', transitionOriginY: 'center'},
			desc: '右上转出',
			type: 'out'
		},
		//淡出
		"fadeOut": {
			defaultDuration: 500,
			calls: [
				[ { opacity: [ 0, 1 ] } ]
			],
			desc: '淡出',
			type: 'out'
		},
		//向上淡出
		"fadeOutUp": {
			defaultDuration: 500,
			calls: [
				[ { opacity: [0, 1], translateY: ['-100%', 0]}],
			],
			reset: { translateY: 0 },
			desc: '向上淡出',
			type: 'out'
		},
		//向下淡出
		"fadeOutDown": {
			defaultDuration: 500,
			calls: [
				[ { opacity: [0, 1], translateY: ['100%', 0]}],
			],
			reset: { translateY: 0 },
			desc: '向下淡出',
			type: 'out'
		},
		//从左淡出
		"fadeOutLeft": {
			defaultDuration: 500,
			calls: [
				[ { opacity: [0, 1], translateX: ['-100%', 0]}],
			],
			reset: { translateX: 0 },
			desc: '从左淡出',
			type: 'out'
		},
		//从右淡出
		"fadeOutRight": {
			defaultDuration: 500,
			calls: [
				[ { opacity: [0, 1], translateX: ['100%', 0]}],
			],
			reset: { translateX: 0 },
			desc: '从右淡出',
			type: 'out'
		},
		//从左退出
		"fadeOutLeftBig": {
			defaultDuration: 500,
			calls: [
				[ { opacity: [0, 1], translateX: ['-2000px', 0]}],
			],
			reset: { translateX: 0 },
			desc: '从左淡出',
			type: 'out'
		},
		//从右退出
		"fadeOutRightBig": {
			defaultDuration: 500,
			calls: [
				[ { opacity: [0, 1], translateX: ['2000px', 0]}],
			],
			reset: { translateX: 0 },
			desc: '从右淡出',
			type: 'out'
		},
		//向上退出
		"fadeOutUpBig": {
			defaultDuration: 500,
			calls: [
				[ { opacity: [0, 1], translateY: ['-2000px', 0]}],
			],
			reset: { translateY: 0 },
			desc: '向上淡出',
			type: 'out'
		},
		//向下退出
		"fadeOutDownBig": {
			defaultDuration: 500,
			calls: [
				[ { opacity: [0, 1], translateY: ['2000px', 0]}],
			],
			reset: { translateY: 0 },
			desc: '向下淡出',
			type: 'out'
		},
		//Y轴转出
		"flipOutY": {
			defaultDuration: 800,
			calls: [
				[ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], rotateX: 90 } ]
			],
			reset: { transformPerspective: 0, rotateX: 0 },
			desc: 'Y轴转出',
			type: 'out'
		},
		//X轴转出
		"flipOutX": {
			defaultDuration: 700,
			calls: [
				[ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], rotateY: 90 } ]
			],
			reset: { transformPerspective: 0, rotateY: 0 },
			desc: 'X轴转出',
			type: 'out'
		},
		//光速进出
		'lightSpeedOut': {
			defaultDuration: 800,
			calls: [
				[ { translateX: ['100%', 0], skewX: [30, 0], opacity: [0, 1]}]
			],
			reset: { skewX: 0 , translateX: 0},
			desc: '光速进出',
			type: 'out'
		},
		//滚出
		'rollOut': {
			defaultDuration: 800,
			calls: [
				[ {translateX: ['100%', 0], rotateZ: [120, 0], opacity: [0, 1]} ]
			],
			reset: { rotateZ: 0 , translateX: 0},
			desc: '滚出',
			type: 'out'
		},
		//从上滑出
		"slideOutUp": {
			defaultDuration: 900,
			calls: [
				[ { opacity: [ 0, 1 ], translateY: -100, translateZ: 0 } ]
			],
			reset: { translateY: 0 , translateZ: 0 },
			desc: '从上滑出',
			type: 'out'
		},
		//从下滑出
		"slideOutDown": {
			defaultDuration: 900,
			calls: [
				[ { opacity: [ 0, 1 ], translateY: 100, translateZ: 0 } ]
			],
			reset: { translateY: 0 , translateZ: 0},
			desc: '从下滑出',
			type: 'out'
		},
		//从左滑出
		"slideOutLeft": {
			defaultDuration: 1050,
			calls: [
				[ { opacity: [ 0, 1 ], translateX: -100, translateZ: 0 } ]
			],
			reset: { translateX: 0, translateZ: 0},
			desc: '从左滑出',
			type: 'out'
		},
		//从右滑出
		"slideOutRight": {
			defaultDuration: 1050,
			calls: [
				[ { opacity: [ 0, 1 ], translateX: 100, translateZ: 0 } ]
			],
			reset: { translateX: 0, translateZ: 0},
			desc: '从右滑出',
			type: 'out'
		},
		//左下转出
		"openDownLeftOut": {
			defaultDuration: 800,
			calls: [
				[ {opacity: [0, 1], transformOriginX: ['0%', '0%'], transformOriginY: ['100%', '100%'], rotateZ: [-110, 0]}, 1, {easing: 'ease-in-out'}]
			],
			reset: { transformOriginX: 0, transformOriginY: 0, rotateZ: 0},
			desc: '左下转出',
			type: 'out'
		},
		//右下转出
		"openDownRightOut": {
			defaultDuration: 800,
			calls: [
				[ {opacity: [0, 1], transformOriginX: ['100%', '100%'], transformOriginY: ['100%', '100%'], rotateZ: [110, 0]}, 1, {easing: 'ease-in-out'}]
			],
			reset: { transformOriginX: 0, transformOriginY: 0, rotateZ: 0},
			desc: '右下转出',
			type: 'out'
		},
		//左上转出
		"openUpLeftOut": {
			defaultDuration: 800,
			calls: [
				[ {opacity: [0, 1], transformOriginX: ['0%', '0%'], transformOriginY: ['0%', '0%'], rotateZ: [110, 0]}, 1, {easing: 'ease-in-out'}]
			],
			reset: { transformOriginX: 0, transformOriginY: 0, rotateZ: 0},
			desc: '左上转出',
			type: 'out'
		},
		//右上转出
		"openUpRightOut": {
			defaultDuration: 800,
			calls: [
				[ {opacity: [0, 1], transformOriginX: ['100%', '100%'], transformOriginY: ['0%', '0%'], rotateZ: [-110, 0]}, 1, {easing: 'ease-in-out'}]
			],
			reset: { transformOriginX: 0, transformOriginY: 0, rotateZ: 0},
			desc: '右上转出',
			type: 'out'
		},
		//闪出
		"puffOut": {
			defaultDuration: 800,
			calls: [
				[ {opacity: [0, 1], transformOriginX: ['50%', '50%'], transformOriginY: ['50%', '50%'], scale: [2, 1], blur: [2, 1], transformPerspective: 800}, 1]
			],
			reset: { transformOriginX: 0, transformOriginY: 0, blur: 0, scale: 1, transformPerspective: 0},
			desc: '闪出',
			type: 'out'
		},
		//向下转出
		"rotateDown": {
			defaultDuration: 800,
			calls: [
				[ {opacity: [0, 1], transformOriginX: ['50%', '0%'], transformOriginY: ['100%', '0%'], transformPerspective: 800, rotateX: [-180, 0], translateZ: [300, 0] }, 1]
			],
			reset: { transformOriginX: 0, transformOriginY: 0, transformPerspective: 0, rotateX: 0, translateZ: 0},
			desc: '向下转出',
			type: 'out'
		},
		//向上转出
		"rotateUp": {
			defaultDuration: 800,
			calls: [
				[ {opacity: [0, 1], transformOriginX: ['50%', '0%'], transformOriginY: ['0%', '0%'], transformPerspective: 800, rotateX: [180, 0], translateZ: [150, 0] }, 1]
			],
			reset: { transformOriginX: 0, transformOriginY: 0, transformPerspective: 0, rotateX: 0, translateZ: 0},
			desc: '向上转出',
			type: 'out'
		},
		//向右转出
		"rotateRight": {
			defaultDuration: 800,
			calls: [
				[ {opacity: [0, 1], transformOriginX: ['50%', '0%'], transformOriginY: ['0%', '0%'], transformPerspective: 800, rotateY: [-180, 0], translateZ: [300, 0] }, 1]
			],
			reset: { transformOriginX: 0, transformOriginY: 0, transformPerspective: 0, rotateX: 0, translateZ: 0},
			desc: '向右转出',
			type: 'out'
		},
		//向左转出
		"rotateLeft": {
			defaultDuration: 800,
			calls: [
				[ {opacity: [0, 1], transformOriginX: ['50%', '0%'], transformOriginY: ['0%', '0%'], transformPerspective: 800, rotateY: [180, 0], translateZ: [300, 0] }, 1]
			],
			reset: { transformOriginX: 0, transformOriginY: 0, transformPerspective: 0, rotateX: 0, translateZ: 0},
			desc: '向左转出',
			type: 'out'
		}
		/**消失动画-结束**/
	};

	for (var effectName in packagedEffects) {
        Velocity.RegisterEffect(effectName, packagedEffects[effectName]);
    }
    
}((window.jQuery || window.Zepto || window), window, document);
}));