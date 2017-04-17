/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","knockout","ojs/ojknockout","ojs/ojmessaging"],function(b,f,a){b.Bb=function(){};b.Bb.wv="invalidComponentTracker";b.Bb.iR="ojoptionchange";b.Bb.ul="messagesShown";b.Bb.tn="messagesHidden";b.Bb.sn="disabled";b.Bb.Fv="readOnly";b.Bb.uo=function(d,c,e,g,f){e={};f=f.call()[b.Bb.wv];var k;if(d===b.Bb.sn||d===b.Bb.Fv)return k=f&&f.peek()||null,null!==k&&a.isWriteableObservable(f)&&k.uo.call(k,g,d,c)&&f.valueHasMutated(),e[d]=c,e};b.Bb._init=function(a,b){var e={};e[a]=b;return e};
b.Bb.m$=function(a,c,e,g){g=g.call();var f;a===b.Bb.wv&&(f=g[a]?!0:!1)&&b.Bb.sja(a,g,c,e);return{}};b.Bb.M$=function(d,c,e,g){c=f(c);g=g.call()[d];d===b.Bb.wv&&c&&(c.off(b.Bb.iR,b.Bb.l1),g&&a.isWriteableObservable(g)&&(d=g.peek(),d.nL.call(d,e)&&g.valueHasMutated()))};b.Bb.l1=function(d,c){var e=d.data.lP,g,f=d.data.O,k=c.option,l=c.value;(k===b.Bb.ul||k===b.Bb.tn)&&e&&a.isWriteableObservable(e)&&(g=e.peek())&&g.uo.call(g,f,k,l)&&e.valueHasMutated()};b.Bb.sja=function(d,c,e,g){d=c[d];var h,k;e=f(e);
if(a.isObservable(d))k=d.peek(),null==k&&(k=new b.Ib,d(k));else throw Error("Binding attribute "+b.Bb.wv+" should be bound to a ko observable.");null!==k&&(a.isWriteableObservable(d)&&(c=g.call(g,"option",b.Bb.ul),h=g.call(g,"option",b.Bb.tn),k.uo.call(k,g,b.Bb.ul,c),k.uo.call(k,g,b.Bb.tn,h),d.valueHasMutated()),g={lP:d,O:g},e.on(b.Bb.iR,g,b.Bb.l1))};b.ia.lh().qh({"for":"editableValue",attributes:[b.Bb.wv,b.Bb.sn,b.Bb.Fv],init:b.Bb._init,update:b.Bb.uo,afterCreate:b.Bb.m$,beforeDestroy:b.Bb.M$});
b.Ib=function(){this.Init()};o_("InvalidComponentTracker",b.Ib,b);b.b.ga(b.Ib,b.b,"oj.InvalidComponentTracker");b.Ib.ul="messagesShown";b.Ib.tn="messagesHidden";b.Ib.sn="disabled";b.Ib.Fv="readOnly";b.Ib.prototype.Init=function(){b.Ib.q.Init.call(this);this.gu=[];this.Xn=[];this.At=[];this.invalidHidden=this.invalidShown=!1};b.Ib.prototype.w2=function(){var a=null,b=this,e=this.wD;this.invalidShown&&(a=this.XI());setTimeout(function(){(a=e===b.wD?a||b.XI():b.XI())&&a.call(a,"Focus")},1);return a?
!0:!1};b.b.g("InvalidComponentTracker.prototype.focusOnFirstInvalid",{w2:b.Ib.prototype.w2});b.Ib.prototype.showMessages=function(){var a,b,e;if(this.invalidHidden)for(b=this.At.length,e=0;e<b;e++)this.At[e]&&(a=this.gu[e].call(a,"showMessages"))};b.b.g("InvalidComponentTracker.prototype.showMessages",{showMessages:b.Ib.prototype.showMessages});b.Ib.prototype.XI=function(){for(var a,b=0,e=this.Xn.length,b=0;b<e;b++)if(a=this.Xn[b])return this.gu[b];return null};b.Ib.prototype.nL=function(a){var b=
-1,e=!1;f.each(this.gu,function(e,f){0>b&&f===a&&(b=e)});0<=b&&(this.gu.splice(b,1),this.Xn.splice(b,1),this.At.splice(b,1),this.LM(),e=!0);return e};b.Ib.prototype.uo=function(a,c,e){var g=a.call(a,"isValid"),h=-1,k=!0,l;f.each(this.gu,function(b,c){0>h&&c===a&&(h=b)});switch(c){case b.Ib.ul:case b.Ib.tn:l=!1;e&&(0>h&&(h=this.gu.push(a)-1,this.Fga(h,l)),!g&&b.Ib.cK(e)&&(l=!0,c===b.Ib.ul&&(e=a.call(a,"option",b.Ib.sn),g=a.call(a,"option",b.Ib.Fv),l=e||g?!1:!0)),k=this.ey(c,h||0,l),this.LM(),k&&(void 0===
this.wD&&(this.wD=0),this.wD++));break;case b.Ib.sn:case b.Ib.Fv:k=!1,e&&(k=this.ey(b.Ib.ul,h||0,!1),k=this.ey(b.Ib.tn,h||0,!1)||k,this.LM())}return k};b.Ib.prototype.Fga=function(a,c){void 0===this.Xn[a]&&this.ey(b.Ib.ul,a,c);void 0===this.At[a]&&this.ey(b.Ib.tn,a,c)};b.Ib.prototype.LM=function(){this.invalidShown=0<=this.Xn.indexOf(!0);this.invalidHidden=0<=this.At.indexOf(!0)};b.Ib.prototype.ey=function(a,c,e){var g=!1;a=a===b.Ib.ul?this.Xn:a===b.Ib.tn?this.At:[];0<=c&&void 0!==a[c]?(g=a[c]!==
e?!0:!1)&&a.splice(c,1,e):(a.push(e),g=!0);return g};b.Ib.cK=function(a){return!b.X.isValid(a)}});
