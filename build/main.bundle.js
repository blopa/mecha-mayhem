!function(t){function e(e){for(var o,c,a=e[0],u=e[1],s=e[2],l=0,p=[];l<a.length;l++)c=a[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);for(f&&f(e);p.length;)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(o=!1)}o&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={0:0},i=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="./build/";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var f=u;i.push([1448,1]),n()}({1448:
/*!**********************************!*\
  !*** ./src/main.js + 17 modules ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/phaser/src/phaser.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/webfontloader/webfontloader.js (<- Module is not an ECMAScript module) */function(t,e,n){"use strict";n.r(e);var o=n(4),r=n.n(o),i=n(264),c=n.n(i);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=p(t);if(e){var r=p(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return l(this,n)}}function l(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(i,t);var e,n,o,r=f(i);function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r.call(this,"BootScene")}return e=i,(n=[{key:"preload",value:function(){this.fontsReady=!1,this.fontsLoaded=this.fontsLoaded.bind(this),this.add.text(100,100,"loading fonts..."),c.a.load({google:{families:["Bangers"]},active:this.fontsLoaded})}},{key:"update",value:function(){this.fontsReady&&this.scene.start("LoadingScene")}},{key:"fontsLoaded",value:function(){this.fontsReady=!0}}])&&u(e.prototype,n),o&&u(e,o),i}(o.Scene);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=_(t);if(e){var r=_(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return g(this,n)}}function g(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(i,t);var e,n,o,r=d(i);function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r.call(this,"LoadingScene")}return e=i,(n=[{key:"preload",value:function(){this.load.image("background","assets/images/background.png"),this.load.image("background_buildings","assets/images/background_buildings.png"),this.load.image("background_clouds_01","assets/images/background_clouds_01.png"),this.load.image("background_clouds_02","assets/images/background_clouds_02.png"),this.load.image("control_room","assets/images/control_room.png"),this.load.image("robot","assets/images/robot.png"),this.load.image("room","assets/images/room.png"),this.load.image("missile","assets/images/missile.png"),this.load.image("jet","assets/images/jet.png"),this.load.image("building","assets/images/building.png"),this.load.image("tilesetImage","assets/images/tileset.png"),this.load.atlas("hero","assets/images/hero.png","assets/atlas/hero_atlas.json"),this.load.atlas("robot_sprite","assets/images/robot_sprite.png","assets/atlas/robot_sprite.json"),this.load.tilemapTiledJSON("stage_01","assets/images/stage_01.json")}},{key:"create",value:function(){this.scene.start("MainMenuScene")}},{key:"update",value:function(){}}])&&b(e.prototype,n),o&&b(e,o),i}(o.Scene);function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=x(t);if(e){var r=x(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return R(this,n)}}function R(t,e){return!e||"object"!==w(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}(i,t);var e,n,o,r=j(i);function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r.call(this,"MainMenuScene")}return e=i,(n=[{key:"preload",value:function(){}},{key:"create",value:function(){this.scene.start("ControlRoomScene")}},{key:"update",value:function(){}}])&&O(e.prototype,n),o&&O(e,o),i}(o.Scene),k=1,C=2,D=3;function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function T(t,e){return(T=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=G(t);if(e){var r=G(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return L(this,n)}}function L(t,e){return!e||"object"!==E(e)&&"function"!=typeof e?B(t):e}function B(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function G(t){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function K(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&T(t,e)}(n,t);var e=A(n);function n(t){var o,r=t.scene,i=t.x,c=t.y,a=t.asset,u=void 0===a?"robot":a,s=t.frame;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),K(B(o=e.call(this,r,i,c,u,s)),"createAnimations",(function(){var t=o.texture.key;o.scene.anims.exists("".concat(t,"_idle"))||o.scene.anims.create({key:"".concat(t,"_idle"),frames:o.scene.anims.generateFrameNames(t,{frames:["robot_idle_01","robot_idle_02","robot_idle_03","robot_idle_04","robot_idle_05","robot_idle_06"]}),frameRate:6,repeat:-1}),o.scene.anims.exists("".concat(t,"_walk"))||o.scene.anims.create({key:"".concat(t,"_walk"),frames:o.scene.anims.generateFrameNames(t,{frames:["robot_walking_01","robot_walking_02","robot_walking_03","robot_walking_04","robot_walking_05","robot_walking_06","robot_walking_07","robot_walking_08","robot_walking_09"]}),frameRate:10,repeat:-1}),o.scene.anims.exists("".concat(t,"_hit"))||o.scene.anims.create({key:"".concat(t,"_hit"),frames:o.scene.anims.generateFrameNames(t,{frames:["robot_hit_01","robot_hit_02","robot_hit_03","robot_hit_04"]}),frameRate:12,repeat:-1}),o.scene.anims.exists("".concat(t,"_shoot"))||o.scene.anims.create({key:"".concat(t,"_shoot"),frames:o.scene.anims.generateFrameNames(t,{frames:["robot_shooting_01","robot_shooting_02","robot_shooting_03","robot_shooting_04","robot_shooting_05","robot_shooting_06","robot_shooting_07","robot_shooting_08","robot_shooting_09","robot_shooting_10","robot_shooting_11"]}),frameRate:11,repeat:0})})),K(B(o),"setAnimation",(function(t){if(o.currentAnimationName!==t){var e=o.texture.key,n="".concat(e,"_").concat(t);o.currentAnimationName=t,o.currentAnimationKey=n,o.anims.play(n)}})),o.setDepth(30),o.setScale(2),o.createAnimations(),o}return n}(o.GameObjects.Sprite);function F(t){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function M(t,e){return(M=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function I(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=X(t);if(e){var r=X(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return V(this,n)}}function V(t,e){return!e||"object"!==F(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function X(t){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&M(t,e)}(n,t);var e=I(n);function n(t){var o,r=t.scene,i=t.x,c=t.y,a=t.asset,u=t.frame,s=t.depth,f=void 0===s?0:s;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(o=e.call(this,r,i,c,a,u)).setDepth(f),o}return n}(o.GameObjects.Image);function J(t){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function H(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function U(t,e){return(U=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Q(t);if(e){var r=Q(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return z(this,n)}}function z(t,e){return!e||"object"!==J(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Q(t){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var W=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&U(t,e)}(i,t);var e,n,o,r=q(i);function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r.call(this,"GameScene")}return e=i,(n=[{key:"init",value:function(){}},{key:"preload",value:function(){}},{key:"create",value:function(){this.background=new Y({scene:this,x:0,y:0,asset:"background"}).setOrigin(0,0),this.christmastree=new N({scene:this,x:400,y:200,asset:"robot"}).setScale(3),this.add.existing(this.background),this.add.existing(this.christmastree)}},{key:"update",value:function(t,e){}}])&&H(e.prototype,n),o&&H(e,o),i}(o.Scene);function Z(t){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function $(t,e){return($=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function tt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=nt(t);if(e){var r=nt(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return et(this,n)}}function et(t,e){return!e||"object"!==Z(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function nt(t){return(nt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var ot=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&$(t,e)}(n,t);var e=tt(n);function n(t){var o,r=t.scene,i=t.x,c=t.y,a=t.asset,u=t.frame;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(o=e.call(this,r,i,c,a,u)).setDepth(10),o}return n}(o.GameObjects.Sprite);function rt(t){return(rt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function it(t,e){return(it=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function ct(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=ut(t);if(e){var r=ut(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return at(this,n)}}function at(t,e){return!e||"object"!==rt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function ut(t){return(ut=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var st=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&it(t,e)}(n,t);var e=ct(n);function n(t){var o,r=t.scene,i=t.x,c=t.y,a=t.asset,u=void 0===a?"missile":a,s=t.frame;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(o=e.call(this,r,i,c,u,s)).setDepth(30),o}return n}(o.GameObjects.Sprite);function ft(t){return(ft="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function lt(t,e){return(lt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function pt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=ht(t);if(e){var r=ht(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return yt(this,n)}}function yt(t,e){return!e||"object"!==ft(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function ht(t){return(ht=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var bt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&lt(t,e)}(n,t);var e=pt(n);function n(t){var o,r=t.scene,i=t.x,c=t.y,a=t.asset,u=void 0===a?"jet":a,s=t.frame;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(o=e.call(this,r,i,c,u,s)).setDepth(30),o}return n}(o.GameObjects.Sprite);function mt(t){return(mt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function dt(t,e){return(dt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function gt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=vt(t);if(e){var r=vt(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return _t(this,n)}}function _t(t,e){return!e||"object"!==mt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function vt(t){return(vt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var wt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&dt(t,e)}(n,t);var e=gt(n);function n(t){var o,r=t.scene,i=t.x,c=t.y,a=t.asset,u=void 0===a?"building":a,s=t.frame;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(o=e.call(this,r,i,c,u,s)).setDepth(30),o}return n}(o.GameObjects.Sprite);function Ot(t){return(Ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var St=function(t){return null!==t&&"object"===Ot(t)&&0===Object.keys(t).length&&t.constructor===Object};function jt(){var t=this.scene.input.keyboard.createCursorKeys();t.left.isDown?(this.body.setVelocityX(-200),this.body.setVelocityY(0)):t.right.isDown?(this.body.setVelocityX(200),this.body.setVelocityY(0)):t.up.isDown?(this.body.setVelocityY(-200),this.body.setVelocityX(0)):t.down.isDown?(this.body.setVelocityY(200),this.body.setVelocityX(0)):this.body.setVelocity(0,0)}function Rt(t){var e=this.data.get("robotStateLayoutDataKey");return[k,C,D].includes(e[t])}function xt(t){var e=this;console.log("shooting"),this.robot.setAnimation("shoot"),this.time.delayedCall(1e3,(function(){var n=100,o=65,r=205,i=90,c=e.add.line(0,0,n,o,r,i,16711680).setOrigin(0,0).setDepth(100);e.time.delayedCall(500,(function(){c.destroy(),t.destroy(),kt.call(e)}))}))}function Pt(t){var e=!1,n=this.data.get("robotStateLayoutDataKey"),o=n[t],r=this.enemies[t],i=window.inGameActions,c=(i.willDuck,i.willShootLaser);i.willShield,i.willDestroyBuilding;return c&&o===k&&(xt.call(this,r),window.inGameActions.willShootLaser=!1,e=!0),!!e&&(n[t]=0,this.data.set("robotStateLayoutDataKey",n),!0)}function kt(){var t=this,e=this.data.get("robotStateCurrentPositionDataKey");this.robot.setAnimation("walk"),this.data.set("robotStateCurrentPositionDataKey",e+1),this.buildingsBackground.forEach((function(e,n){Ct.call(t,e,!0)})),this.enemies.forEach((function(e,n){e&&Ct.call(t,e)})),this.time.delayedCall(1e3,(function(){var n=!0,o=t.data.get("robotStateLayoutDataKey");if(t.robot.setAnimation("idle"),Rt.call(t,e+3))console.log("Game over...");else if(e>=o.length)console.log("You won yay");else{if(Rt.call(t,e+3+1))console.log("Incoming enemy..."),n=!Pt.call(t,e+3+1);n&&t.time.delayedCall(1e3,kt.bind(t))}}))}function Ct(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.tweens.add({x:t.x-64,y:t.y,targets:t,t:1,ease:"Linear",duration:1e3,repeat:0,yoyo:!1,onComplete:function(n){if(e){var o=t.getBounds().width;t.x+o<=0&&t.setX(o)}n.stop()}})}function Dt(){var t=this,e=this.data.get("robotStateLayoutDataKey"),n=64*this.data.get("robotStateCurrentPositionDataKey");e.forEach((function(e){var o=Et.call(t,e,n);t.enemies.push(o),o&&t.add.existing(o),n+=64}))}function Et(t,e){switch(t){case k:return new bt({scene:this,x:e,y:80}).setOrigin(0,0);case D:return new st({scene:this,x:e,y:50}).setOrigin(0,0);case C:return new wt({scene:this,x:e,y:10}).setOrigin(0,0);case 0:default:return null}}function Tt(t){return(Tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function At(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function Lt(t,e){return(Lt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Bt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Nt(t);if(e){var r=Nt(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Gt(this,n)}}function Gt(t,e){return!e||"object"!==Tt(e)&&"function"!=typeof e?Kt(t):e}function Kt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Nt(t){return(Nt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Ft(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Mt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Lt(t,e)}(i,t);var e,n,o,r=Bt(i);function i(t){var e,n=t.scene,o=t.x,c=t.y,a=t.asset,u=t.frame;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),Ft(Kt(e=r.call(this,n,o,c,a,u)),"createAnimations",(function(){var t=e.texture.key;e.scene.anims.exists("".concat(t,"_idle"))||e.scene.anims.create({key:"".concat(t,"_idle"),frames:e.scene.anims.generateFrameNames(t,{frames:["hero_idle_01","hero_idle_02","hero_idle_03"]}),frameRate:6,repeat:-1}),e.scene.anims.exists("".concat(t,"_walk"))||e.scene.anims.create({key:"".concat(t,"_walk"),frames:e.scene.anims.generateFrameNames(t,{frames:["hero_walking_01","hero_walking_02","hero_walking_03"]}),frameRate:7,repeat:-1}),e.scene.anims.exists("".concat(t,"_action"))||e.scene.anims.create({key:"".concat(t,"_action"),frames:e.scene.anims.generateFrameNames(t,{frames:["hero_action_01","hero_action_02","hero_action_03","hero_action_04","hero_action_05","hero_action_06"]}),frameRate:10,repeat:-1})})),Ft(Kt(e),"setAnimation",(function(t){if(e.currentAnimationName!==t){var n=e.texture.key,o="".concat(n,"_").concat(t);e.currentAnimationName=t,e.currentAnimationKey=o,e.anims.play(o)}})),Object.assign(Kt(e),{handleSpriteMovement:jt}),e.createAnimations(),e.setAnimation("walk"),e.setDepth(30),e}return e=i,(n=[{key:"update",value:function(t,e){this.handleSpriteMovement()}}])&&At(e.prototype,n),o&&At(e,o),i}(o.GameObjects.Sprite);function It(t){return(It="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Vt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function Xt(t,e){return(Xt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Yt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Ht(t);if(e){var r=Ht(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Jt(this,n)}}function Jt(t,e){return!e||"object"!==It(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Ht(t){return(Ht=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Ut=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Xt(t,e)}(c,t);var e,n,o,i=Yt(c);function c(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),i.call(this,"ControlRoomScene")}return e=c,(n=[{key:"preload",value:function(){}},{key:"create",value:function(){this.laserRoom=new ot({scene:this,x:700,y:200,asset:"room"}),this.punchRoom=new ot({scene:this,x:650,y:350,asset:"room"}),this.add.existing(this.laserRoom),this.add.existing(this.punchRoom),this.hero=new Mt({scene:this,x:400,y:300,asset:"hero"}),this.add.existing(this.hero),this.scene.launch("RobotStageScene"),this.chargeLaserButton=this.input.keyboard.addKey("A"),this.chargePunchButton=this.input.keyboard.addKey("S"),this.controlRoom=new r.a.Geom.Rectangle(0,0,1e3,1e3),this.controlRoomFill=this.add.graphics({fillStyle:{color:2891313}}),this.controlRoomFill.fillRectShape(this.controlRoom);var t=this.make.tilemap({key:"stage_01"}),e=t.addTilesetImage("tileset","tilesetImage"),n=t.createStaticLayer("background",e,0,160),o=t.createStaticLayer("details",e,0,160);n.setCollisionByProperty({collides:!0}),this.physics.add.collider(this.hero,n),o.setCollisionByProperty({collides:!0}),this.physics.add.collider(this.hero,o),this.physics.world.enable(this.hero),this.physics.world.enable(this.laserRoom),this.physics.world.enable(this.punchRoom),this.laserChargeCounter=0,this.laserChargeLimit=1,this.laserChargeBar=this.add.rectangle(this.laserRoom.x+25+5,this.laserRoom.y+25,10,0),this.laserChargeBar.setFillStyle(65280),this.punchChargeCounter=0,this.punchChargeLimit=1,this.punchChargeBar=this.add.rectangle(this.punchRoom.x+25+5,this.punchRoom.y+25,10,0),this.punchChargeBar.setFillStyle(65280),this.text=this.add.text(275,300,"")}},{key:"update",value:function(t,e){this.hero.update(t,e),this.text.text="",this.laserChargeCounter>=this.laserChargeLimit&&this.physics.overlap(this.hero,this.laserRoom)?(this.text.text="Laser ready!",window.inGameActions.willShootLaser||(window.inGameActions.willShootLaser=!0)):this.physics.overlap(this.hero,this.laserRoom)&&this.chargeLaserButton.isDown?(this.laserChargeCounter+=.01,this.laserChargeBar.height=this.laserRoom.height*(this.laserChargeCounter/this.laserChargeLimit)*-1,this.text.text="Charging..."):this.physics.overlap(this.hero,this.laserRoom)&&(this.text.text="Hold A to charge laser"),this.punchChargeCounter>=this.punchChargeLimit&&this.physics.overlap(this.hero,this.punchRoom)?this.text.text="Punch ready!":this.physics.overlap(this.hero,this.punchRoom)&&r.a.Input.Keyboard.JustDown(this.chargePunchButton)?(this.punchChargeCounter+=.1,this.punchChargeBar.height=this.punchRoom.height*(this.punchChargeCounter/this.punchChargeLimit)*-1,this.text.text="Charging..."):this.physics.overlap(this.hero,this.punchRoom)&&(this.text.text="Mash S to charge punch")}}])&&Vt(e.prototype,n),o&&Vt(e,o),c}(o.Scene);function qt(t){return(qt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function zt(t,e){return(zt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Qt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=$t(t);if(e){var r=$t(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Wt(this,n)}}function Wt(t,e){return!e||"object"!==qt(e)&&"function"!=typeof e?Zt(t):e}function Zt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function $t(t){return($t=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function te(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ee=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&zt(t,e)}(n,t);var e=Qt(n);function n(t){var r,i=t.scene,c=t.x,a=void 0===c?0:c,u=t.y,s=void 0===u?0:u,f=t.name,l=void 0===f?"parallax-background":f,p=t.assets,y=void 0===p?["background_clouds_01","background_clouds_02"]:p,h=t.speeds,b=void 0===h?[.02,.05]:h,m=t.depth,d=void 0===m?0:m;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),te(Zt(r=e.call(this,i,[],{name:l})),"update",(function(t,e){(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var o=0,r=e;o<r.length;o++){var i=r[o];if(St(i)||null==i||Array.isArray(i)&&!i.length)return!1}return!0})(r.speeds)&&r.getChildren().forEach((function(t,e){var n=t.getBounds().width;t.x+n<=0&&t.setX(n),t.setX(t.x-r.speeds[Math.floor(e/2)])}))})),te(Zt(r),"forEach",(function(t){return r.getChildren().forEach(t)})),y.forEach((function(t){var e=new o.GameObjects.Image(i,a,s,t).setOrigin(0,0),n=e.getBounds().width,c=new o.GameObjects.Image(i,a+n,s,t).setOrigin(0,0);r.add(e),r.add(c)})),r.setDepth(d),r.setOrigin(0,0),r.speeds=b,r}return n}(o.GameObjects.Group);function ne(t){return(ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function oe(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function re(t,e){return(re=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function ie(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=ue(t);if(e){var r=ue(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return ce(this,n)}}function ce(t,e){return!e||"object"!==ne(e)&&"function"!=typeof e?ae(t):e}function ae(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ue(t){return(ue=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var se=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&re(t,e)}(i,t);var e,n,o,r=ie(i);function i(){var t,e,n,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),t=r.call(this,"RobotStageScene"),e=ae(t),o=[],(n="enemies")in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,t}return e=i,(n=[{key:"init",value:function(){var t=[0,0,0,0,0,0,0,k,0,0,C,0,D,0];this.data.set("robotStateLayoutDataKey",t),this.data.set("robotStateCurrentPositionDataKey",0)}},{key:"preload",value:function(){}},{key:"create",value:function(){var t=this;this.background=new Y({scene:this,x:0,y:0,asset:"background",depth:0}).setOrigin(0,0),this.add.existing(this.background),this.buildingsBackground=new ee({scene:this,assets:["background_buildings"],depth:20}),this.buildingsBackground.forEach((function(e){t.add.existing(e)})),this.parallaxBackground=new ee({scene:this,depth:10}),this.parallaxBackground.forEach((function(e){t.add.existing(e)})),this.robot=new N({scene:this,x:0,y:30,asset:"robot_sprite"}).setOrigin(0,0),this.add.existing(this.robot),this.robot.setAnimation("idle"),Dt.call(this),kt.call(this)}},{key:"update",value:function(t,e){this.parallaxBackground.update(t,e)}}])&&oe(e.prototype,n),o&&oe(e,o),i}(o.Scene),fe={type:r.a.AUTO,parent:"content",width:768,height:432,scale:{mode:r.a.Scale.FIT,autoCenter:r.a.Scale.CENTER_BOTH},autoRound:!1,localStorageName:"puppet-master",pixelArt:!0,physics:{default:"arcade",arcade:{enableBody:!0,debug:!0}}};function le(t){return(le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function pe(t,e){return(pe=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function ye(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=be(t);if(e){var r=be(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return he(this,n)}}function he(t,e){return!e||"object"!==le(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function be(t){return(be=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var me=Object.assign(fe,{scene:[y,v,W,P,Ut,se]}),de=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&pe(t,e)}(n,t);var e=ye(n);function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),e.call(this,me)}return n}(o.Game);window.inGameActions={willDuck:!1,willShootLaser:!1,willShield:!1,willDestroyBuilding:!1},window.game=new de}});