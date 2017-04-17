/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojpopupcore"],function(b,f){(function(){b.ya("oj.ojMenu",f.oj.baseComponent,{defaultElement:"\x3cul\x3e",delay:300,role:"menu",widgetEventPrefix:"oj",options:{menuSelector:"ul",openOptions:{initialFocus:"menu",launcher:null,position:{my:"start top",at:"start bottom",collision:"flipfit"}},submenuOpenOptions:{position:{my:"start top",at:"end top",collision:"flipfit"}},beforeOpen:null,close:null,open:null,select:null},_ComponentCreate:function(){this._super();
this._focusForTesting=this.jg;this._nextForTesting=this.fZ;this._selectForTesting=this.zj;this.Wq=this.element;this.DO=!1;this.element.uniqueId().addClass("oj-menu oj-component").hide().attr({role:this.role,tabIndex:"0"});this._on(!0,{"mousedown .oj-menu-item":function(a){this.options.disabled&&a.preventDefault()},click:function(a){this.options.disabled&&a.preventDefault()},keydown:function(a){!this.options.disabled||a.keyCode!==f.ui.keyCode.ESCAPE&&a.keyCode!==f.ui.keyCode.TAB||(a.keyCode===f.ui.keyCode.TAB&&
a.preventDefault(),this.jc&&this.sB(a))}});this.options.disabled&&this.element.addClass("oj-disabled").attr("aria-disabled","true");var a=function(a){if(!this.yN){this.yN=!0;var b=f(a.currentTarget);b.siblings().removeClass("oj-focus-ancestor");this.jg(a,b)}}.bind(this);this._on({"mousedown .oj-menu-item \x3e a":function(a){a.preventDefault()},"click .oj-disabled \x3e a":function(a){a.preventDefault()},click:function(){this.DO=!1},touchstart:function(){this.yN=!1},mouseover:function(){this.yN=!1},
"click .oj-menu-item:has(a)":function(a){var b=f(a.target).closest(".oj-menu-item");!this.DO&&b.not(".oj-disabled").length&&(this.DO=!0,a.preventDefault(),this.Ca&&this.Ca.closest(b).length&&this.Ca.get(0)!=b.get(0)||(b.has(".oj-menu").length?this.$d(a):(this.zj(a),this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.Ca&&1===this.Ca.parents(".oj-menu").length&&clearTimeout(this.$c)))))},"mouseenter .oj-menu-item":a,"touchstart .oj-menu-item":a,mouseleave:function(a){this.lk(a,"eventSubtree")},
"mouseleave .oj-menu":function(a){this.lk(a,"eventSubtree")},focus:function(a,b){if(!b){var c=this.Ca||this.element.children(".oj-menu-item").eq(0);this.jg(a,c)}},keydown:this.Aq,keyup:function(a){if(a.keyCode==f.ui.keyCode.ENTER||a.keyCode==f.ui.keyCode.SPACE)this.sA=!1}});this.hy=f.proxy(this.iy,this);this.Aa()},Fs:function(a){if(arguments.length)d=a;else return d},KH:function(b){if(("focus"===b.type||"mousedown"===b.type||"touchstart"===b.type||93==b.which||121==b.which&&b.shiftKey||93==b.keyCode)&&
("mousedown"!==b.type||!d)){var e=a.slice(0,a.length);f.each(e,function(a,d){!f(b.target).closest(d.element).length&&("keydown"===b.type||"mousedown"===b.type&&3===b.which||!f(b.target).closest(d.jc).length||d.qha&&("mousedown"===b.type&&3!==b.which||"touchstart"===b.type))&&(d.lk(b,"eventSubtree"),d.jc&&d.Mp(b))})}},_setOption:function(a,d){this._superApply(arguments);this.jc||("submenuOpenOptions"===a?this.iD=b.oc.Dg(d.position,this.Of):"submenuOpenOptions.position"===a&&(this.iD=b.oc.Dg(d,this.Of)))},
_destroy:function(){this.element.is(":visible")&&this.Mp();clearTimeout(this.$c);delete this.$c;this.element.removeAttr("aria-activedescendant").removeClass("oj-component").find(".oj-menu").addBack().removeClass("oj-menu oj-menu-submenu oj-menu-icons oj-menu-text-only").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();this.element.find(".oj-menu-item").removeClass("oj-menu-item").removeAttr("role").children("a").removeAttr("aria-disabled").removeUniqueId().removeClass("oj-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var a=
f(this);a.data("oj-ojMenu-submenu-icon")&&a.remove()});this.element.find("a").removeAttr("aria-expanded");this.element.find(".oj-menu-divider").removeClass("oj-menu-divider").removeAttr("role");0<=a.indexOf(this)&&a.splice(a.indexOf(this),1);delete this.wj;delete this.hy;var b=this.Cn;isNaN(b)||(delete this.Cn,window.clearTimeout(b));this._super()},Aq:function(a){function b(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$\x26")}var d,h,k,l,m=!0;switch(a.keyCode){case f.ui.keyCode.HOME:this.AC("first",
"first",a);break;case f.ui.keyCode.END:this.AC("last","last",a);break;case f.ui.keyCode.UP:this.Kia(a);break;case f.ui.keyCode.DOWN:this.fZ(a);break;case f.ui.keyCode.LEFT:case f.ui.keyCode.RIGHT:a.keyCode===f.ui.keyCode.RIGHT^this.Of?this.Ca&&!this.Ca.is(".oj-disabled")&&this.$d(a):this.lk(a,"active");break;case f.ui.keyCode.ENTER:case f.ui.keyCode.SPACE:this.gfa(a);this.sA=!0;var n=this;setTimeout(function(){n.sA=!1},100);break;case f.ui.keyCode.TAB:a.preventDefault();this.jc&&this.sB(a);break;
case f.ui.keyCode.ESCAPE:this.jc?(h=this.element.attr("aria-activedescendant"),k="#"+this.element.attr("id")+"\x3e*\x3ea",h&&!f("#"+h).is(k)?this.lk(a,"active"):this.sB(a)):this.lk(a,"active");break;default:m=!1,d=this.GE||"",h=String.fromCharCode(a.keyCode),k=!1,clearTimeout(this.Qna),h===d?k=!0:h=d+h,l=new RegExp("^"+b(h),"i"),d=this.Wq.children(".oj-menu-item").filter(function(){return l.test(f(this).children("a").text())}),d=k&&-1!==d.index(this.Ca.next())?this.Ca.nextAll(".oj-menu-item"):d,d.length||
(h=String.fromCharCode(a.keyCode),l=new RegExp("^"+b(h),"i"),d=this.Wq.children(".oj-menu-item").filter(function(){return l.test(f(this).children("a").text())})),d.length?(this.jg(a,d),1<d.length?(this.GE=h,this.Qna=this._delay(function(){delete this.GE},1E3)):delete this.GE):delete this.GE}m&&a.preventDefault()},gfa:function(a){this.Ca&&!this.Ca.is(".oj-disabled")&&(this.Ca.children("a[aria-haspopup\x3d'true']").length?this.$d(a):this.zj(a))},refresh:function(){this._super();this.Aa();var a=this.element;
if(a.is(":visible")){var b=a.data("oj-menu-position");b&&a.position(b);a.find(".oj-menu").each(function(){var a=f(this);a.is(":visible")&&(b=a.data("oj-menu-position"))&&a.position(b)})}},Aa:function(){this.Of="rtl"===this.bc();this.iD=b.oc.Dg(this.options.submenuOpenOptions.position,this.Of);var a=this,d=this.element.find(this.options.menuSelector),g=d.add(this.element),h=g.children();h.filter(".oj-menu-divider").has("a").removeClass("oj-menu-divider oj-menu-item").removeAttr("role");h.filter(":not(.oj-menu-item):has(a)").addClass("oj-menu-item").attr("role",
"presentation").children("a").uniqueId().attr({tabIndex:"-1",role:"menuitem"});h.filter(":not(.oj-menu-item)").each(function(){var a=f(this);/[^\-\u2014\u2013\s]/.test(a.text())||a.addClass("oj-menu-divider").attr("role","separator")});h.filter(".oj-disabled").children("a").attr("aria-disabled","true");h.filter(":not(.oj-disabled)").children("a").removeAttr("aria-disabled");d.filter(":not(.oj-menu)").addClass("oj-menu oj-menu-submenu").hide().attr({role:this.role,"aria-hidden":"true"}).each(function(){var b=
f(this),d=a.xJ(b),e=f("\x3cspan\x3e");e.addClass("oj-menu-submenu-icon oj-component-icon").data("oj-ojMenu-submenu-icon",!0);d.attr("aria-haspopup","true").attr("aria-expanded","false").append(e);d=d.attr("id");b.attr("aria-labelledby",d)});g.each(function(){var a=f(this),b=a.children().children().children(".oj-menu-item-icon").length;a.toggleClass("oj-menu-icons",!!b).toggleClass("oj-menu-text-only",!b)});this.Ca&&!f.contains(this.element[0],this.Ca[0])&&this.gH()},xJ:function(a){return a.prev("a")},
Dra:function(){return"menuitem"},uA:function(a){return a.add(a.prev(".oj-menu-divider")).add(a.next(".oj-menu-divider"))},jg:function(a,b){a&&"focus"===a.type||clearTimeout(this.$c);b=b.first();this.RY(b,a);var d=b.parent().closest(".oj-menu-item");this.uA(d).addClass("oj-focus-ancestor");a&&"keydown"===a.type?this.Al():this.$c=this._delay(function(){delete this.$c;this.Al()},this.delay);d=b.children(".oj-menu");d.length&&a&&/^mouse/.test(a.type)&&!this.Ca.hasClass("oj-disabled")&&this.yla(d);this.Wq=
b.parent()},RY:function(a,b){if(!a.is(this.Ca)){var d=this.Ca?this.Ca:f(),h=a.children("a");this.Ca=a;this.element.attr("aria-activedescendant",h.attr("id"));this.uA(d).removeClass("oj-focus");this.uA(a).addClass("oj-focus");this._trigger("_activeItem",b,{previousItem:d,item:a,privateNotice:"The _activeItem event is private.  Do not use."})}},wja:function(a){if(this.Ca){var b=this.Ca;this.Ca=null;this.element.removeAttr("aria-activedescendant");this.uA(b).removeClass("oj-focus");this._trigger("_activeItem",
a,{previousItem:b,item:f(),privateNotice:"The _activeItem event is private.  Do not use."})}},gH:function(a){clearTimeout(this.$c);this.wja(a)},sB:function(a,b){this.jc.focus();this.Mp(a,b)},Mp:function(c,d){var f=this.element.is(":visible"),h={};h[b.N.Qa.ff]=this.element;b.N.pe().close(h);this.element.removeData("oj-menu-position");this.jc=void 0;d&&(c=this.yM("select",c,d).event);f&&this._trigger("close",c,{});this.Hn=null;0<=a.indexOf(this)&&a.splice(a.indexOf(this),1)},getCurrentOpenOptions:function(){return f.extend(!0,
{},this.Hn||this.options.openOptions)},open:function(c,d,g){d=f.extend({},this.options.openOptions,d);d.position=f.extend({},d.position);g=f.extend({},this.options.submenuOpenOptions,g);var h=this.Hn;this.Hn=d;b.oc.iia(c);this.qha=this.rA;var k=!this.yM("beforeOpen",c,{openOptions:d});if(k.proceed)this.Hn=h;else if(this.element.is(":visible")&&(this.Hn=h,this.Mp(k.event),this.Hn=d),h=d.launcher,(h="string"===f.type(h)?f(h):h)&&h.length)if(k=b.oc.Dg(d.position,this.Of),k.of=b.oc.qpa(k.of,h,c),null==
k.of)b.r.warn("position.of passed to Menu.open() is 'event', but the event is null.  Ignoring the call."),this.Hn=null;else{var l=this.element[0],m=a.slice(0,a.length);f.each(m,function(a,b){b.element[0]!==l&&(b.lk(c,"eventSubtree"),b.jc&&b.Mp(c))});this.iD=b.oc.Dg(g.position,this.Of);g=this.hy;f.isFunction(k.using)&&k.using!==g&&(k.origUsing=k.using);k.using=g;g={};g[b.N.Qa.ff]=this.element;g[b.N.Qa.gv]=h;g[b.N.Qa.kv]=k;g[b.N.Qa.kp]=this.nt();g[b.N.Qa.Ym]="oj-menu-layer";b.N.pe().open(g);this.element.data("oj-menu-position",
k);d=d.initialFocus;((g="firstItem"===d)||"menu"===d)&&this.element.focus();g?this.jg(c,this.element.children().first()):this.gH(c);this.jc=h;a.push(this);this._trigger("open",c,{})}else b.r.warn("When calling Menu.open(), must specify openOptions.launcher via the component option, method param, or beforeOpen listener.  Ignoring the call."),this.Hn=null},yla:function(a){clearTimeout(this.$c);"true"===a.attr("aria-hidden")&&(this.$c&&clearTimeout(this.$c),this.$c=this._delay(function(){delete this.$c;
this.Al();this.mZ(a)},this.delay))},mZ:function(b){var d=f.extend({of:this.Ca},this.iD);clearTimeout(this.$c);this.element.find(".oj-menu").not(b.parents(".oj-menu")).hide().attr("aria-hidden","true").removeData("oj-menu-position");b.show().removeAttr("aria-hidden").position(d).data("oj-menu-position",d);this.xJ(b).attr("aria-expanded","true");!this.jc&&0>a.indexOf(this)&&a.push(this)},RG:function(a,b,d){function h(){delete k.$c;var d=b?k.element:f(a&&a.target).closest(k.element.find(".oj-menu"));
d.length||(d=k.element);k.Al(d);k.gH(a);k.Wq=d}clearTimeout(this.$c);var k=this;d?this.$c=this._delay(h,d):h()},Al:function(b){b||(b=this.Ca?this.Ca.parent():this.element);var d=b.find(".oj-menu");d.hide().attr("aria-hidden","true").removeData("oj-menu-position");this.xJ(d).attr("aria-expanded","false");b.find("oj-focus-ancestor").removeClass("oj-focus-ancestor");this.jc||0<=a.indexOf(this)&&b===this.element&&a.splice(a.indexOf(this),1)},lk:function(a,d){if(null==d||"active"===d){var f=this.Wq&&this.Wq.closest(".oj-menu-item",
this.element);f&&f.length&&(this.Al(),this.jg(a,f))}else"all"===d||"eventSubtree"===d?this.RG(a,"all"===d,this.delay):b.r.warn("Invalid param "+d+" passed to Menu._collapse().  Ignoring the call.")},$d:function(a){var b=this.Ca&&this.Ca.children(".oj-menu ").children(".oj-menu-item").first();b&&b.length&&(this.mZ(b.parent()),this.$c&&clearTimeout(this.$c),this.$c=this._delay(function(){delete this.$c;this.jg(a,b)}))},fZ:function(a){this.AC("next","first",a)},Kia:function(a){this.AC("prev","last",
a)},zra:function(){return this.Ca&&!this.Ca.prevAll(".oj-menu-item").length},Ara:function(){return this.Ca&&!this.Ca.nextAll(".oj-menu-item").length},AC:function(a,b,d){var f;this.Ca&&(f="first"===a||"last"===a?this.Ca["first"===a?"prevAll":"nextAll"](".oj-menu-item").eq(-1):this.Ca[a+"All"](".oj-menu-item").eq(0));f&&f.length&&this.Ca||(f=this.Wq.children(".oj-menu-item")[b]());this.jg(d,f)},zj:function(a){if(!this.Ca&&a&&a.target){var d=f(a.target).closest(".oj-menu-item");d.closest(this.element).length&&
this.RY(d,a)}this.Ca?this.Ca.has(".oj-menu").length||this.Ca.is(".oj-disabled")?b.r.warn("Selecting a disabled menu item or parent menu item is not allowed."):(d={item:this.Ca},this.RG(a,!0),this.jc&&this.sB(a,d)):b.r.warn("Menu._select() called when no menu item is focused and no menu item can be inferred from event param.")},Rq:function(){this.element.remove()},nt:function(){if(!this.wj){var a=this.wj={};a[b.N.Ac.Wr]=f.proxy(this.WT,this);a[b.N.Ac.Xr]=f.proxy(this.Rq,this);a[b.N.Ac.$m]=f.proxy(this.refresh,
this);a[b.N.Ac.Vr]=f.proxy(this.KH,this)}return this.wj},WT:function(){this.Al(this.element);this.Mp(null)},iy:function(a,d){var g=d.element.element;g.css(a);(g=g.data("oj-menu-position"))&&(g=g.origUsing)&&g(a,d);b.oc.ZN(d)&&(this.Cn=this._delay(f.proxy(this.WT,this),1))}});var a=[],d=!1})()});
