!function(t){function e(e){for(var r,c,u=e[0],a=e[1],f=e[2],l=0,p=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);for(s&&s(e);p.length;)p.shift()();return i.push.apply(i,f||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,u=1;u<n.length;u++){var a=n[u];0!==o[a]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={0:0},i=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="./build/";var u=window.webpackJsonp=window.webpackJsonp||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var s=a;i.push([1448,1]),n()}({1448:
/*!**********************************!*\
  !*** ./src/main.js + 14 modules ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/phaser/src/phaser.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/webfontloader/webfontloader.js (<- Module is not an ECMAScript module) */function(t,e,n){"use strict";n.r(e);var r=n(9),o=n.n(r),i=n(264),c=n.n(i);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function l(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(i,t);var e,n,r,o=s(i);function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,"BootScene")}return e=i,(n=[{key:"preload",value:function(){this.fontsReady=!1,this.fontsLoaded=this.fontsLoaded.bind(this),this.add.text(100,100,"loading fonts..."),c.a.load({google:{families:["Bangers"]},active:this.fontsLoaded})}},{key:"update",value:function(){this.fontsReady&&this.scene.start("LoadingScene")}},{key:"fontsLoaded",value:function(){this.fontsReady=!0}}])&&a(e.prototype,n),r&&a(e,r),i}(r.Scene);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v(t);if(e){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(i,t);var e,n,r,o=d(i);function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,"LoadingScene")}return e=i,(n=[{key:"preload",value:function(){this.load.image("background","assets/images/background.png"),this.load.image("background_buildings","assets/images/background_buildings.png"),this.load.image("background_clouds","assets/images/background_clouds.png"),this.load.image("control_room","assets/images/control_room.png"),this.load.image("robot","assets/images/robot.png"),this.load.atlas("hero","assets/images/hero.png","assets/atlas/hero_atlas.json"),this.load.image("room","assets/images/room.png","assets/atlas/hero_atlas.json")}},{key:"create",value:function(){this.scene.start("MainMenuScene")}},{key:"update",value:function(){}}])&&b(e.prototype,n),r&&b(e,r),i}(r.Scene);function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=P(t);if(e){var o=P(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return R(this,n)}}function R(t,e){return!e||"object"!==w(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}(i,t);var e,n,r,o=j(i);function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,"MainMenuScene")}return e=i,(n=[{key:"preload",value:function(){}},{key:"create",value:function(){this.scene.start("ControlRoomScene")}},{key:"update",value:function(){}}])&&_(e.prototype,n),r&&_(e,r),i}(r.Scene);function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=T(t);if(e){var o=T(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return D(this,n)}}function D(t,e){return!e||"object"!==x(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(n,t);var e=C(n);function n(t){var r,o=t.scene,i=t.x,c=t.y,u=t.asset,a=t.frame;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(r=e.call(this,o,i,c,u,a)).setDepth(30),r}return n}(r.GameObjects.Sprite);function L(t){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function A(t,e){return(A=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function G(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=F(t);if(e){var o=F(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return M(this,n)}}function M(t,e){return!e||"object"!==L(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function F(t){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&A(t,e)}(n,t);var e=G(n);function n(t){var r,o=t.scene,i=t.x,c=t.y,u=t.asset,a=t.frame,f=t.depth,s=void 0===f?0:f;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(r=e.call(this,o,i,c,u,a)).setDepth(s),r}return n}(r.GameObjects.Image);function X(t){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function K(t,e){return(K=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function J(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=H(t);if(e){var o=H(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Y(this,n)}}function Y(t,e){return!e||"object"!==X(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function H(t){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&K(t,e)}(i,t);var e,n,r,o=J(i);function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,"GameScene")}return e=i,(n=[{key:"init",value:function(){}},{key:"preload",value:function(){}},{key:"create",value:function(){this.background=new N({scene:this,x:0,y:0,asset:"background"}).setOrigin(0,0),this.christmastree=new B({scene:this,x:400,y:200,asset:"christmas_tree"}).setScale(3),this.add.existing(this.background),this.add.existing(this.christmastree)}},{key:"update",value:function(t,e){}}])&&I(e.prototype,n),r&&I(e,r),i}(r.Scene);function q(t){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function z(t,e){return(z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=W(t);if(e){var o=W(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return V(this,n)}}function V(t,e){return!e||"object"!==q(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function W(t){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Z=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&z(t,e)}(n,t);var e=Q(n);function n(t){var r,o=t.scene,i=t.x,c=t.y,u=t.asset,a=t.frame;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(r=e.call(this,o,i,c,u,a)).setDepth(10),r}return n}(r.GameObjects.Sprite);function $(t){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var tt=function(t){return null!==t&&"object"===$(t)&&0===Object.keys(t).length&&t.constructor===Object};function et(){var t=this.scene.input.keyboard.createCursorKeys();t.left.isDown?this.setX(this.x-3):t.right.isDown?this.setX(this.x+3):t.up.isDown?this.setY(this.y-3):t.down.isDown&&this.setY(this.y+3)}function nt(){var t=this;this.buildingsBackground.forEach((function(e,n){rt.call(t,e)}))}function rt(t){var e=this;this.tweens.add({x:t.x-64,y:0,targets:t,t:1,ease:"Linear",duration:1e3,repeat:0,yoyo:!1,onComplete:function(n){var r=t.getBounds().width;t.x+r<=0&&t.setX(r),n.stop(),e.time.delayedCall(1e3,(function(){rt.call(e,t)}))}})}function ot(t){return(ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function it(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ct(t,e){return(ct=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function ut(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=st(t);if(e){var o=st(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return at(this,n)}}function at(t,e){return!e||"object"!==ot(e)&&"function"!=typeof e?ft(t):e}function ft(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function st(t){return(st=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function lt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var pt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ct(t,e)}(i,t);var e,n,r,o=ut(i);function i(t){var e,n=t.scene,r=t.x,c=t.y,u=t.asset,a=t.frame;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),lt(ft(e=o.call(this,n,r,c,u,a)),"createAnimations",(function(){var t=e.texture.key;e.scene.anims.exists("".concat(t,"_idle"))||e.scene.anims.create({key:"".concat(t,"_idle"),frames:e.scene.anims.generateFrameNames(t,{frames:["idle_01","idle_02","idle_03","idle_04"]}),frameRate:6,repeat:-1}),e.scene.anims.exists("".concat(t,"_walk"))||e.scene.anims.create({key:"".concat(t,"_walk"),frames:e.scene.anims.generateFrameNames(t,{frames:["walking_01","walking_02","walking_03","walking_04"]}),frameRate:10,repeat:-1}),e.scene.anims.exists("".concat(t,"_jump"))||e.scene.anims.create({key:"".concat(t,"_jump"),frames:e.scene.anims.generateFrameNames(t,{frames:["jumping_01","jumping_02","jumping_03","jumping_04","jumping_05","jumping_06","jumping_07"]}),frameRate:12,repeat:-1})})),lt(ft(e),"setAnimation",(function(t){if(e.currentAnimationName!==t){var n=e.texture.key,r="".concat(n,"_").concat(t);e.currentAnimationName=t,e.currentAnimationKey=r,e.anims.play(r)}})),Object.assign(ft(e),{handleSpriteMovement:et}),e.createAnimations(),e.setAnimation("walk"),e.setDepth(30),e}return e=i,(n=[{key:"update",value:function(t,e){this.handleSpriteMovement()}}])&&it(e.prototype,n),r&&it(e,r),i}(r.GameObjects.Sprite);function yt(t){return(yt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ht(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function bt(t,e){return(bt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function mt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=gt(t);if(e){var o=gt(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return dt(this,n)}}function dt(t,e){return!e||"object"!==yt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function gt(t){return(gt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var vt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&bt(t,e)}(c,t);var e,n,r,i=mt(c);function c(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),i.call(this,"ControlRoomScene")}return e=c,(n=[{key:"preload",value:function(){}},{key:"create",value:function(){this.laserRoom=new Z({scene:this,x:250,y:200,asset:"room"}),this.add.existing(this.laserRoom),this.hero=new pt({scene:this,x:200,y:200,asset:"hero"}),this.add.existing(this.hero),this.scene.launch("RobotStageScene"),this.chargeLaserButton=this.input.keyboard.addKey("A"),this.controlRoom=new o.a.Geom.Rectangle(0,0,1e3,1e3),this.controlRoomFill=this.add.graphics({fillStyle:{color:7609159}}),this.controlRoomFill.fillRectShape(this.controlRoom),this.physics.world.enable(this.hero),this.physics.world.enable(this.laserRoom),this.laserChargeCounter=0,this.laserChargeLimit=1,this.laserChargeBar=this.add.rectangle(this.laserRoom.x+25+5,this.laserRoom.y+25,10,0),this.laserChargeBar.setFillStyle(65280)}},{key:"update",value:function(t,e){this.hero.update(t,e),this.laserChargeCounter>=this.laserChargeLimit?console.log("Laser ready!"):this.physics.overlap(this.hero,this.laserRoom)&&this.chargeLaserButton.isDown&&(this.laserChargeCounter+=.01,this.laserChargeBar.height=this.laserRoom.height*(this.laserChargeCounter/this.laserChargeLimit)*-1,console.log("Charging..."))}},{key:"foobar",value:function(){return this.laserChargeCounter}}])&&ht(e.prototype,n),r&&ht(e,r),c}(r.Scene);function Ot(t){return(Ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function wt(t,e){return(wt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _t(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Rt(t);if(e){var o=Rt(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return St(this,n)}}function St(t,e){return!e||"object"!==Ot(e)&&"function"!=typeof e?jt(t):e}function jt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Rt(t){return(Rt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Pt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var kt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&wt(t,e)}(n,t);var e=_t(n);function n(t){var o,i=t.scene,c=t.x,u=void 0===c?0:c,a=t.y,f=void 0===a?0:a,s=t.name,l=void 0===s?"parallax-background":s,p=t.assets,y=void 0===p?["background_clouds"]:p,h=t.speeds,b=void 0===h?[.02,.1]:h,m=t.depth,d=void 0===m?0:m;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),Pt(jt(o=e.call(this,i,[],{name:l})),"update",(function(t,e){(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var r=0,o=e;r<o.length;r++){var i=o[r];if(tt(i)||null==i||Array.isArray(i)&&!i.length)return!1}return!0})(o.speeds)&&o.getChildren().forEach((function(t,e){var n=t.getBounds().width;t.x+n<=0&&t.setX(n),t.setX(t.x-o.speeds[Math.floor(e/2)])}))})),Pt(jt(o),"forEach",(function(t){return o.getChildren().forEach(t)})),y.forEach((function(t){var e=new r.GameObjects.Image(i,u,f,t).setOrigin(0,0),n=e.getBounds().width,c=new r.GameObjects.Image(i,u+n,f,t).setOrigin(0,0);o.add(e),o.add(c)})),o.setDepth(d),o.setOrigin(0,0),o.speeds=b,o}return n}(r.GameObjects.Group);function xt(t){return(xt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Et(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Ct(t,e){return(Ct=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Dt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Bt(t);if(e){var o=Bt(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Tt(this,n)}}function Tt(t,e){return!e||"object"!==xt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Bt(t){return(Bt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Lt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ct(t,e)}(i,t);var e,n,r,o=Dt(i);function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,"RobotStageScene")}return e=i,(n=[{key:"init",value:function(){var t=[0,0,0,1,0,0,2,0,3,0];this.data.set("robotStateLayoutDataKey",t)}},{key:"preload",value:function(){}},{key:"create",value:function(){var t=this;this.background=new N({scene:this,x:0,y:0,asset:"background",depth:0}).setOrigin(0,0),this.add.existing(this.background),this.buildingsBackground=new kt({scene:this,assets:["background_buildings"],depth:20}),this.buildingsBackground.forEach((function(e){t.add.existing(e)})),this.parallaxBackground=new kt({scene:this,depth:10}),this.parallaxBackground.forEach((function(e){t.add.existing(e)})),this.robot=new B({scene:this,x:0,y:6,asset:"robot"}).setOrigin(0,0),this.add.existing(this.robot),nt.call(this)}},{key:"update",value:function(t,e){this.parallaxBackground.update(t,e)}}])&&Et(e.prototype,n),r&&Et(e,r),i}(r.Scene),At={type:o.a.AUTO,parent:"content",width:768,height:432,scale:{mode:o.a.Scale.FIT,autoCenter:o.a.Scale.CENTER_BOTH},autoRound:!1,localStorageName:"puppet-master",pixelArt:!0,physics:{default:"arcade",arcade:{enableBody:!0,debug:!0}}};function Gt(t){return(Gt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Mt(t,e){return(Mt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Ft(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Xt(t);if(e){var o=Xt(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Nt(this,n)}}function Nt(t,e){return!e||"object"!==Gt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Xt(t){return(Xt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var It=Object.assign(At,{scene:[y,O,U,k,vt,Lt]}),Kt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Mt(t,e)}(n,t);var e=Ft(n);function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),e.call(this,It)}return n}(r.Game);window.inGameActions={willDuck:!1,willShootLaser:!1,willShield:!1,willDestroyBuilding:!1},window.game=new Kt}});