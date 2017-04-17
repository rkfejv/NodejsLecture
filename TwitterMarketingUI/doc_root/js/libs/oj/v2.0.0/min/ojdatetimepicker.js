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
define(["ojs/ojcore","jquery","ojs/ojeditablevalue","ojs/ojinputtext","ojs/ojvalidation","ojs/ojpopup","ojs/ojbutton"],function(b,f){function a(a){return this.options.converter.parse(a)}function d(a,c){var d=a.translations.dateTimeRange||{},e=[{category:"hint",entries:["min","max","inRange"]},{category:"messageDetail",entries:["rangeUnderflow","rangeOverflow"]},{category:"messageSummary",entries:["rangeUnderflow","rangeOverflow"]}],g={min:a.min,max:a.max,converter:c};if(!f.isEmptyObject(d))for(var h=
0,k=e.length;h<k;h++){var l=d[e[h].category];if(l){for(var x={},u=e[h].entries,v=0,y=u.length;v<y;v++)x[u[v]]=l[u[v]];g[e[h].category]=x}}return b.pa.Jr(b.cd.VALIDATOR_TYPE_DATETIMERANGE).createValidator(g)}function c(a,b){var c=a.filter("span");b?c.addClass("oj-disabled").removeClass("oj-enabled oj-default"):c.removeClass("oj-disabled").addClass("oj-enabled oj-default")}function e(a,b,c){if(!a||b===c.length)return a;var d=b+1;return e(a[c[b]],d,c)||e(a["*"],d,c)}function g(a,b){b.setHours(a.getHours());
b.setMinutes(a.getMinutes());b.setSeconds(a.getSeconds());b.setMilliseconds(a.getMilliseconds());return b}function h(a){return a.delegate(".oj-datepicker-prev-icon, .oj-datepicker-prev-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-next-icon, .oj-datepicker-next-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-calendar td a","mouseout",function(){f(this).removeClass("oj-hover")}).delegate(".oj-datepicker-prev-icon, .oj-datepicker-prev-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-next-icon, .oj-datepicker-next-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-calendar td a",
"mouseover",function(){f(this).addClass("oj-hover")}).delegate(".oj-datepicker-prev-icon, .oj-datepicker-prev-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-next-icon, .oj-datepicker-next-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-calendar td a","focus",function(){f(this).addClass("oj-focus")}).delegate(".oj-datepicker-prev-icon, .oj-datepicker-prev-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-next-icon, .oj-datepicker-next-icon .oj-clickable-icon-nocontext.oj-component-icon, .oj-datepicker-calendar td a",
"blur",function(){f(this).removeClass("oj-focus")})}function k(a){var b=f(a.element[0]).parent().parent();a.Op(b)}var l=b.pa.hm(b.Tj.CONVERTER_TYPE_DATETIME).createConverter({year:"numeric"});b.ya("oj.ojInputDate",f.oj.inputBase,{version:"1.0.0",widgetEventPrefix:"oj",_CLASS_NAMES:"oj-inputdatetime-input",_WIDGET_CLASS_NAMES:"oj-inputdatetime-date-only oj-component oj-inputdatetime",_ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES:"",_INPUT_HELPER_KEY:"inputHelp",_ATTR_CHECK:[{attr:"type",setMandatory:"text"}],
_GET_INIT_OPTIONS_PROPS:[{V:"disabled",xc:!0},{V:"pattern"},{V:"title"},{V:"placeholder"},{V:"value",Ze:a},{V:"required",Ze:!0,xc:!0},{V:"readonly",option:"readOnly",xc:!0},{V:"min",Ze:a},{V:"max",Ze:a}],OG:"oj-inputdatetime-input-trigger",NG:"oj-inputdatetime-calendar-icon",RQ:"oj-datepicker-current-day",XQ:"oj-datepicker-days-cell-over",HS:"oj-datepicker-unselectable",WQ:"oj-datepicker-desc",UF:"oj-datepicker-calendar",q8:"oj-datepicker-div",Y7:"oj-datepicker-inline",dG:" oj-inputdatetime-input-container",
Z7:" oj-inputdatetime-inline",options:{datePicker:{footerLayout:"",changeMonth:"select",changeYear:"select",currentMonthPos:0,daysOutsideMonth:"hidden",numberOfMonths:1,showOn:"image",stepMonths:"numberOfMonths",stepBigMonths:12,weekDisplay:"none",yearRange:"c-10:c+10"},converter:b.pa.hm(b.Tj.CONVERTER_TYPE_DATETIME).createConverter({day:"2-digit",month:"2-digit",year:"2-digit"}),max:void 0,min:void 0,dayFormatter:null},Sz:function(){this.ld=null;this.jK=!1;this.hx=4;this.Kn=this.ok=this.Fl=this.gj=
this.nk=0;this.uw={};var a=this.element[0].nodeName.toLowerCase();this.be="div"===a||"span"===a;this.Ld=h(f("\x3cdiv id\x3d'"+this.hn(this.q8)+"' role\x3d'region' aria-describedby\x3d'"+this.hn(this.WQ)+"' class\x3d'oj-datepicker-content'\x3e\x3c/div\x3e"));f("body").append(this.Ld);if(this.be)this._WIDGET_CLASS_NAMES+=this.Z7,this._CLASS_NAMES="";else{this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES+=this.dG;var b=this;this.VK=this.Ld.ojPopup({initialFocus:"none",modality:"modeless",open:function(){b.Ld.find(".oj-datepicker-calendar").focus()},
rootAttributes:{"class":"oj-datepicker-popup"}})}},_ComponentCreate:function(){this.Sz();var a=this._super();this.options.dayMetaData&&(this.options.dayFormatter=function(a){return function(b){return e(a,0,[b.fullYear,b.month,b.date])}}(this.options.dayMetaData));this.WC(this.DB());this.be?(this.element.append(this.Ld),this.element.addClass(this.Y7),this.Ld.css("display","block")):this.aH();k(this);return a},lf:function(){var a=this._superApply(arguments);this.UU(this.options.disabled);return a},
_setOption:function(a,c,d){var g=null;if("value"===a)return c||(c=null),g=this._super(a,c,d),this.WC(c),this.Dl()&&this.vo(!0),g;if("dayMetaData"===a)this._setOption("dayFormatter",function(a){return e(c,0,[a.fullYear,a.month,a.date])},d);else return g=this._super(a,c,d),"disabled"===a?this.UU(c):"max"===a||"min"===a?(this.uw[b.cd.VALIDATOR_TYPE_DATETIMERANGE]=this.ZB("min"),this.as()):"readOnly"===a&&c?this.hide():"dayFormatter"===a&&(this.uw[b.cd.VALIDATOR_TYPE_DATERESTRICTION]=this.ZB("dayFormatter"),
this.as()),"datePicker"===a&&"currentMonthPos"===d.subkey&&this.WC(this.options.value),d={max:!0,min:!0,dayFormatter:!0,datePicker:!0,translations:!0},this.Dl()&&a in d&&this.vo(),g},QF:function(){return this.ld},_destroy:function(){var a=this._super();this.element.off("focus");this.ld&&this.ld.remove();this.be&&(this.element.removeProp("disabled"),this.element.removeProp("readonly"));this.Ld.remove();return a},Dl:function(){return this.be||this.VK.ojPopup("isOpen")},aH:function(){var a=this.options.datePicker.showOn,
b=f("\x3cspan\x3e").addClass(this.OG);if("focus"===a)this.element.on("focus",f.proxy(this.show,this));a=f("\x3cspan title\x3d'"+this.NI()+"'/\x3e").addClass(this.NG+" oj-clickable-icon-nocontext oj-component-icon");b.append(a);var c=this;a.on("click",function(){c.Dl()?c.hide():c.show();return!1});this.Op(a);this._hoverable(a);this.zM=a;this.ld=b;this.element.after(b)},aca:function(a){var b;b=!1;var c=f.ui.keyCode,d=this.yj;if(this.Dl())switch(a.keyCode){case 84:a.altKey&&a.ctrlKey&&(this.Ld.find(".oj-datepicker-current").focus(),
b=!0);break;case c.TAB:this.hide();break;case c.ENTER:return b=f("td."+this.XQ+":not(."+this.RQ+")",this.Ld),b[0]&&this.N_(this.gj,this.ok,b[0],a),a.preventDefault(),a.stopPropagation(),!1;case c.ESCAPE:this.hide();this.element.focus();b=!0;break;case c.PAGE_UP:a.ctrlKey&&a.altKey?this.uf(-this.options.datePicker.stepBigMonths,"M",!0):a.altKey?this.uf(-1,"Y",!0):this.uf(-this.Nw(),"M",!0);b=!0;break;case c.PAGE_DOWN:a.ctrlKey&&a.altKey?this.uf(+this.options.datePicker.stepBigMonths,"M",!0):a.altKey?
this.uf(1,"Y",!0):this.uf(+this.Nw(),"M",!0);b=!0;break;case c.END:this.nk=this.Dw(this.ok,this.gj);this.vo(!0);b=!0;break;case c.HOME:this.nk=1;this.vo(!0);b=!0;break;case c.LEFT:this.uf(d?1:-1,"D",!0);a.originalEvent.altKey&&this.uf(a.ctrlKey?-this.options.datePicker.stepBigMonths:-this.Nw(),"M",!0);b=!0;break;case c.UP:this.uf(-7,"D",!0);b=!0;break;case c.RIGHT:this.uf(d?-1:1,"D",!0);a.originalEvent.altKey&&this.uf(a.ctrlKey?+this.options.datePicker.stepBigMonths:+this.Nw(),"M",!0);b=!0;break;
case c.DOWN:this.uf(7,"D",!0),b=!0}else a.keyCode===c.HOME&&a.ctrlKey&&(this.show(),b=!0);b&&(a.preventDefault(),a.stopPropagation())},vo:function(a){this.hx=4;var b=this.Tca();this.Ld.empty().append(b.html);var c=f("button",this.Ld);0<c.length&&(1===c.length&&f(c[0]).addClass("oj-datepicker-single-button"),f.each(c,function(a,b){f(b).ojButton()}));this.B$();b.m2&&this.Ld.find(".oj-datepicker-calendar").attr("aria-activedescendant",b.m2);b=this.nJ();c=b[1];this.Ld.removeClass("oj-datepicker-multi-2 oj-datepicker-multi-3 oj-datepicker-multi-4").width("");
1<c&&this.Ld.addClass("oj-datepicker-multi-"+c).css("width",17*c+"em");this.Ld[(1!==b[0]||1!==b[1]?"add":"remove")+"Class"]("oj-datepicker-multi");this.Dl()&&this.element.is(":visible")&&!this.element.is(":disabled")&&(a?(a=this.Ld.find(".oj-datepicker-calendar"),a[0]!==document.activeElement&&a.focus()):this.be||this.element[0]===document.activeElement||this.element.focus())},uf:function(a,b,c){this.options.disabled||(this.WS(a+("M"===b?this.options.datePicker.currentMonthPos:0),b),this.vo(c))},
Dea:function(){var a=new Date;this.nk=a.getDate();this.Fl=this.gj=a.getMonth();this.Kn=this.ok=a.getFullYear();this.uf()},O_:function(a,c){var d=parseInt(a.options[a.selectedIndex].value,10);"M"===c?this.gj=this.Fl=d:this.ok=this.Kn=d;f("#"+this.hn(this.UF)).html(this.$j(this.options.monthWide[this.Fl])+" "+l.format(b.qb.dateToLocalIso(new Date(this.Kn,this.Fl,1))));this.uf(0,0,!0)},N_:function(a,c,d,e){f(d).hasClass(this.HS)||this.options.disabled||(this.nk=f("a",d).html(),this.gj=a,this.ok=c,a=
b.qb,(c=this.options.value?a.isoToLocalDate(this.options.value):null)?(d=new Date(this.ok,this.gj,this.nk),g(c,d),c=d):c=new Date(this.ok,this.gj,this.nk),a=a.dateToLocalIso(c),c=this.Tc().format(a),this.ni(c),this.fc(a,e),this.hide())},iI:function(a,c){return a?"string"===typeof a?b.qb.isoToLocalDate(a):new Date(a.getTime()):c},WC:function(a){a=this.iI(a,this.$W());this.nk=a.getDate();this.Fl=this.gj=a.getMonth();this.Kn=this.ok=a.getFullYear();this.WS()},Nw:function(){var a=this.options.datePicker.stepMonths;
return f.isNumeric(a)?a:this.options.datePicker.numberOfMonths},B$:function(){var a=this.Nw(),b=this;this.Ld.find("[data-handler]").map(function(){f(this).bind(this.getAttribute("data-event"),{prev:function(c){b.uf(-a,"M",!0);c.preventDefault()},next:function(c){b.uf(+a,"M",!0);c.preventDefault()},today:function(a){if("keyup"===a.type&&13===a.keyCode||"click"===a.type)b.Dea(),a.preventDefault(),a.stopPropagation()},selectDay:function(a){b.N_(+this.getAttribute("data-month"),+this.getAttribute("data-year"),
this,a);return!1},selectMonth:function(){b.O_(this,"M");return!1},selectYear:function(){b.O_(this,"Y");return!1},calendarKey:function(a){b.aca(a)}}[this.getAttribute("data-handler")])})},pia:function(a,b,c){b=b?new Date(b.getFullYear(),b.getMonth(),b.getDate()):null;c=c?new Date(c.getFullYear(),c.getMonth(),c.getDate()):null;return null!==b&&a<b||null!==c&&a>c},Tca:function(){var a,c,d,e,g,f,h=this.options.dayWide,k=this.options.dayNarrow,l=this.options.monthWide,u=this.options.monthAbbreviated,v=
this.options.firstDayOfWeek,y,B,M,I,F,D,A,z="",E,J,C,N,Q,H,L,G,O=new Date,O=new Date(O.getFullYear(),O.getMonth(),O.getDate()),P=this.yj;f=this.options.datePicker.footerLayout;var W=this.nJ(),K=this.options.datePicker.currentMonthPos,V=this.options.dayFormatter;G=null;var Z=1!==W[0]||1!==W[1],X=this.MB("min"),R=this.MB("max"),K=this.Fl-K,U=this.Kn,ha=new Date(this.ok,this.gj,this.nk),Y=new Date(this.DB()),T=Y.getDate(),aa=Y.getMonth(),fa=Y.getFullYear(),ba=this.options.disabled,S=this.$j(this.A("weekText")),
ca=b.qb;Y.setHours(0);Y.setMinutes(0);Y.setSeconds(0);Y.setMilliseconds(0);0>K&&(K+=12,U--);if(X)for(a=new Date(X.getFullYear(),X.getMonth(),X.getDate()),a=R&&R<a?R:a;new Date(U,K,this.Dw(U,K))<a;)K++,11<K&&(K=0,U++);if(R)for(a=new Date(R.getFullYear(),R.getMonth()-W[0]*W[1]+1,R.getDate()),a=X&&a<X?X:a;new Date(U,K,1)>a;)K--,0>K&&(K=11,U--);this.Fl=K;this.Kn=U;a=this.$j(this.A("prevText"));a=this.DT(-1,U,K)&&!ba?"\x3ca href\x3d'#' class\x3d'oj-datepicker-prev-icon oj-enabled oj-default oj-component-icon oj-clickable-icon-nocontext' data-handler\x3d'prev' data-event\x3d'click' title\x3d'"+
a+"'\x3e\x3c/a\x3e":"\x3ca class\x3d'oj-datepicker-prev-icon oj-disabled oj-component-icon oj-clickable-icon-nocontext' title\x3d'"+a+"'\x3e\x3c/a\x3e";c=this.$j(this.A("nextText"));c=this.DT(1,U,K)&&!ba?"\x3ca href\x3d'#' class\x3d'oj-datepicker-next-icon oj-enabled oj-default oj-component-icon oj-clickable-icon-nocontext' data-handler\x3d'next' data-event\x3d'click' title\x3d'"+c+"'\x3e\x3c/a\x3e":"\x3ca class\x3d'oj-datepicker-next-icon oj-disabled oj-component-icon oj-clickable-icon-nocontext' title\x3d'"+
c+"'\x3e\x3c/a\x3e";d=this.$j(this.A("currentText"));g="";e="\x3cbutton type\x3d'button' class\x3d'oj-datepicker-current oj-priority-secondary' data-handler\x3d'today' data-event\x3d'click keyup'\x3e"+d+"\x3c/button\x3e";if(1<f.length){d=0;f=[{index:f.indexOf("today"),content:this.lY(O)?e:""}];for(f.sort(function(a,b){return a.index-b.index});d<f.length&&0>f[d].index;)d++;for(;d<f.length;)g+=f[d++].content;0<g.length&&(g="\x3cdiv class\x3d'oj-datepicker-buttonpane'\x3e"+g+"\x3c/div\x3e")}f=this.options.datePicker.weekDisplay;
d=this.options.datePicker.daysOutsideMonth;e="";y="all";for(B=0;B<W[0];B++){M="";this.hx=4;for(I=0;I<W[1];I++){y="all";E="";if(Z){E+="\x3cdiv class\x3d'oj-datepicker-group";if(1<W[1])switch(I){case 0:E+=" oj-datepicker-group-first";y=P?"right":"left";break;case W[1]-1:E+=" oj-datepicker-group-last";y=P?"left":"right";break;default:E+=" oj-datepicker-group-middle",y=""}E+="'\x3e"}E+="\x3cdiv class\x3d'oj-datepicker-header"+(ba?" oj-disabled ":" oj-enabled oj-default ")+"'\x3e"+(/all|left/.test(y)&&
0===B?P?c:a:"")+(/all|right/.test(y)&&0===B?P?a:c:"")+this.Uca(K,U,X,R,0<B||0<I,l,u,Z)+"\x3c/div\x3e\x3ctable class\x3d'oj-datepicker-calendar"+(ba?" oj-disabled ":" oj-enabled oj-default ")+"' tabindex\x3d-1 data-handler\x3d'calendarKey' data-event\x3d'keydown' aria-readonly\x3d'true' role\x3d'grid' aria-labelledby\x3d'"+this.hn(this.UF)+"'\x3e\x3cthead role\x3d'presentation'\x3e\x3ctr role\x3d'row'\x3e";J="number"===f?"\x3cth class\x3d'oj-datepicker-week-col'\x3e"+this.$j(this.A("weekHeader"))+
"\x3c/th\x3e":"";for(y=0;7>y;y++)C=(y+parseInt(v,10))%7,J+="\x3cth role\x3d'columnheader' aria-label\x3d'"+h[C]+"'"+(5<=(y+v+6)%7?" class\x3d'oj-datepicker-week-end'":"")+"\x3e\x3cspan title\x3d'"+h[C]+"'\x3e"+k[C]+"\x3c/span\x3e\x3c/th\x3e";E+=J+"\x3c/tr\x3e\x3c/thead\x3e\x3ctbody role\x3d'presentation'\x3e";J=this.Dw(U,K);U===fa&&K===aa&&(T=Math.min(T,J));y=(this.yda(U,K)-v+7)%7;J=Math.ceil((y+J)/7);this.hx=J=Z?this.hx>J?this.hx:J:J;C=new Date(U,K,1-y);for(N=0;N<J;N++){E+="\x3ctr role\x3d'row'\x3e";
y=this.Tc().Co(ca.dateToLocalIso(C));Q="none"===f?"":"\x3ctd class\x3d'oj-datepicker-week-col' role\x3d'rowheader' aria-label\x3d'"+S+" "+y+"'\x3e"+y+"\x3c/td\x3e";for(y=0;7>y;y++){L=C.getMonth()!==K;F=C.getTime()===Y.getTime();D="oj-dp-"+this.uuid+"-"+N+"-"+y+"-"+B+"-"+I;(A=C.getTime()===ha.getTime()&&K===this.gj)&&(z=D);H=[!0,""];G=C.getFullYear();var da=C.getMonth(),ga=C.getDate();V&&(G=V({fullYear:G,month:da+1,date:ga}))&&(H=[!G.disabled,G.className||""],G.tooltip&&H.push(G.tooltip));da=C.getTime()===
Y.getTime();G=L&&"selectable"!==d||!H[0]||this.pia(C,X,R);Q+="\x3ctd role\x3d'gridcell' aria-disabled\x3d'"+!!G+"' aria-selected\x3d'"+F+"' id\x3d'"+D+"' class\x3d'"+(5<=(y+v+6)%7?" oj-datepicker-week-end":"")+(L?" oj-datepicker-other-month":"")+(A?" "+this.XQ:"")+(G||ba?" "+this.HS+" oj-disabled":" oj-enabled ")+(L&&"hidden"===d?"":" "+H[1]+(F?" "+this.RQ:"")+(C.getTime()===O.getTime()?" oj-datepicker-today":""))+"'"+(L&&"hidden"===d||!H[2]?"":" title\x3d'"+H[2].replace(/'/g,"\x26#39;")+"'")+(G?
"":" data-handler\x3d'selectDay' data-event\x3d'click' data-month\x3d'"+C.getMonth()+"' data-year\x3d'"+C.getFullYear()+"'")+"\x3e"+(L&&"hidden"===d?"\x26#xa0;":G||ba?"\x3cspan class\x3d'oj-disabled'\x3e"+C.getDate()+"\x3c/span\x3e":"\x3ca class\x3d'oj-enabled"+(da?" oj-selected":"")+(L?" oj-priority-secondary":"")+"' "+(da||A?"":"tabindex\x3d'-1' ")+" href\x3d'#'\x3e"+C.getDate()+"\x3c/a\x3e")+"\x3c/td\x3e";C.setDate(C.getDate()+1)}E+=Q+"\x3c/tr\x3e"}K++;11<K&&(K=0,U++);E+="\x3c/tbody\x3e\x3c/table\x3e"+
(Z?"\x3c/div\x3e"+(0<W[0]&&I===W[1]-1?"\x3cdiv class\x3d'oj-datepicker-row-break'\x3e\x3c/div\x3e":""):"");M+=E}e+=M}return{html:e+g,m2:z}},Uca:function(a,c,d,e,g,f,h,k){var x,u,v,y,B=this.options.datePicker.changeMonth,M=this.options.datePicker.changeYear,I=b.Ja.S3()?"before":"after",F="\x3cdiv class\x3d'oj-datepicker-title' role\x3d'header'\x3e",D="",A=this.options.disabled,z=b.qb;if(g||"none"===B)D+="\x3cspan class\x3d'oj-datepicker-month'\x3e"+f[a]+"\x3c/span\x3e";else{x=d&&d.getFullYear()===
c;u=e&&e.getFullYear()===c;D+="\x3cselect tabindex\x3d'-1' class\x3d'oj-datepicker-month "+(A?"oj-disabled' disabled":"oj-enabled'")+" data-handler\x3d'selectMonth' data-event\x3d'change' role\x3d'listbox'\x3e";for(v=0;12>v;v++)(!x||v>=d.getMonth())&&(!u||v<=e.getMonth())&&(D+="\x3coption role\x3d'option' value\x3d'"+v+"' aria-selected\x3d'"+(v===a?"true' selected\x3d'selected'":"false'")+"\x3e"+h[v]+"\x3c/option\x3e");D+="\x3c/select\x3e"}"before"===I&&(F+=D+(g||"select"!==B||"select"!==M?"\x26#xa0;":
""));if(!this.Qm)if(this.Qm="",g||"none"===M)F+="\x3cspan class\x3d'oj-datepicker-year'\x3e"+l.format(z.dateToLocalIso(new Date(c,a,1)))+"\x3c/span\x3e";else{x=this.options.datePicker.yearRange.split(":");y=(new Date).getFullYear();u=function(a){a=a.match(/c[+\-].*/)?c+parseInt(a.substring(1),10):a.match(/[+\-].*/)?y+parseInt(a,10):parseInt(a,10);return isNaN(a)?y:a};h=u(x[0]);x=Math.max(h,u(x[1]||""));h=d?Math.max(h,d.getFullYear()):h;x=e?Math.min(x,e.getFullYear()):x;for(this.Qm+="\x3cselect tabindex\x3d'-1' class\x3d'oj-datepicker-year "+
(A?"oj-disabled' disabled":"oj-enabled'")+" data-handler\x3d'selectYear' data-event\x3d'change' role\x3d'listbox'\x3e";h<=x;h++)this.Qm+="\x3coption role\x3d'option' value\x3d'"+h+"' aria-selected\x3d'"+(h===c?"true' selected\x3d'selected'":"false'")+"\x3e"+l.format(z.dateToLocalIso(new Date(h,a,1)))+"\x3c/option\x3e";this.Qm+="\x3c/select\x3e";F+=this.Qm;this.Qm=null}"after"===I&&(F+=(g||"select"!==B||"select"!==M?"\x26#xa0;":"")+D);k&&g||(F+="\x3cspan class\x3d'oj-helper-hidden-accessible' id\x3d'"+
this.hn(this.UF)+"'\x3e"+f[a]+" "+l.format(z.dateToLocalIso(new Date(c,a,1)))+"\x3c/span\x3e",F+="\x3cspan class\x3d'oj-helper-hidden-accessible' id\x3d'"+this.hn(this.WQ)+"'\x3e"+this.$j(this.A("datePicker"))+"\x3c/span\x3e");return F+"\x3c/div\x3e"},WS:function(a,b){var c=this.Kn+("Y"===b?a:0),d=this.Fl+("M"===b?a:0),e=Math.min(this.nk,this.Dw(c,d))+("D"===b?a:0),c=new Date(c,d,e);this.nk=c.getDate();this.Fl=this.gj=c.getMonth();this.Kn=this.ok=c.getFullYear()},nJ:function(){var a=this.options.datePicker.numberOfMonths,
a="string"===typeof a?parseInt(a,10):a;return null==a?[1,1]:"number"===typeof a?[1,a]:a},MB:function(a){return this.iI(this.options[a],null)},Dw:function(a,b){return 32-(new Date(a,b,32)).getDate()},yda:function(a,b){return(new Date(a,b,1)).getDay()},DT:function(a,b,c){var d=this.nJ();b=new Date(b,c+(0>a?a:d[0]*d[1]),1);0>a&&b.setDate(this.Dw(b.getFullYear(),b.getMonth()));return this.lY(b)},lY:function(a){var b,c,d=this.MB("min"),e=this.MB("max"),g=null,f=null;if(b=this.options.datePicker.yearRange)b=
b.split(":"),c=(new Date).getFullYear(),g=parseInt(b[0],10),f=parseInt(b[1],10),b[0].match(/[+\-].*/)&&(g+=c),b[1].match(/[+\-].*/)&&(f+=c);return(!d||a.getTime()>=d.getTime())&&(!e||a.getTime()<=e.getTime())&&(!g||a.getFullYear()>=g)&&(!f||a.getFullYear()<=f)},NI:function(){return this.$j(this.A("tooltipCalendar"+(this.options.disabled?"Disabled":"")))},UU:function(a){this.ld&&(c(this.ld.children(),a),this.ld.find("."+this.NG).attr("title",this.NI()));a&&this.hide();this.be&&this.vo()},PF:function(){this.be||
this._superApply(arguments)},QK:function(a){this.be||this._superApply(arguments)},EC:function(a){if(!this.be){this._superApply(arguments);var b=f.ui.keyCode,c=!1;if(this.Dl())switch(a.keyCode){case b.TAB:this.hide();break;case b.ESCAPE:this.hide();c=!0;break;case b.UP:case b.DOWN:this.Ld.find(".oj-datepicker-calendar").focus(),c=!0}else switch(a.keyCode){case b.UP:case b.DOWN:this.fc(this.eg(),a),this.show(),c=!0}if(c)return a.preventDefault(),a.stopPropagation(),!1}},ni:function(a){this.be||this._superApply(arguments);
this.WC(this.DB());this.Dl()&&this.vo(!0)},Tc:function(){return this.options.converter?this._superApply(arguments):f.oj.ojInputDate.prototype.options.converter},ms:function(){return this.options.value||""},_GetDefaultStyleClass:function(){return"oj-inputdate"},Dv:function(){var a=this._superApply(arguments);if(null!=this.options.min||null!=this.options.max)this.uw[b.cd.VALIDATOR_TYPE_DATETIMERANGE]=this.ZB("min");null!=this.options.dayFormatter&&(this.uw[b.cd.VALIDATOR_TYPE_DATERESTRICTION]=this.ZB("dayFormatter"));
return f.extend(this.uw,a)},li:function(){this.hide()},sl:function(){this.hide()},ZB:function(a){var c=null;"min"===a||"max"===a?c=d(this.options,this.Tc()):"dayFormatter"===a&&(a={dayFormatter:this.options.dayFormatter,converter:this.Tc()},f.extend(a,this.options.translations.dateRestriction||{}),c=b.pa.Jr(b.cd.VALIDATOR_TYPE_DATERESTRICTION).createValidator(a));return c},$W:function(){var a=new Date;a.setHours(0);a.setMinutes(0);a.setSeconds(0);a.setMilliseconds(0);return a},DB:function(){return this.iI(this.options.value,
this.$W())},getNodeBySubId:function(a){var b=null,c=a&&a.subId,d=this.Ld;if(c)switch(c){case "oj-datepicker-content":b=d[0];break;case "oj-inputdatetime-calendar-icon":b=f(".oj-inputdatetime-calendar-icon",this.ld)[0];break;case "oj-datepicker-prev-icon":b=f(".oj-datepicker-prev-icon",d)[0];break;case "oj-datepicker-next-icon":b=f(".oj-datepicker-next-icon",d)[0];break;case "oj-datepicker-month":b=f(".oj-datepicker-month",d)[0];break;case "oj-datepicker-year":b=f(".oj-datepicker-year",d)[0];break;
case "oj-datepicker-current":b=f(".oj-datepicker-current",d)[0];break;case "oj-inputdatetime-date-input":b=this.be?null:this.element[0];break;default:b=null}return b||this._superApply(arguments)},getSubIdByNode:function(a){var b=this.Ld,c=null,d=[{selector:".oj-inputdatetime-calendar-icon",ele:this.ld},{selector:".oj-datepicker-prev-icon",ele:b},{selector:".oj-datepicker-next-icon",ele:b},{selector:".oj-datepicker-month",ele:b},{selector:".oj-datepicker-year",ele:b},{selector:".oj-datepicker-current",
ele:b}];if(a===b[0])return"oj-datepicker-content";if(!this.be&&a===this.element[0])return"oj-inputdatetime-date-input";for(var b=0,e=d.length;b<e;b++){var g=d[b],h=f(g.selector,g.ele);if(1===h.length&&h[0]===a){c=g.selector.substr(1);break}}return c||this._superApply(arguments)},hide:function(){this.Dl()&&!this.be&&(this.VK.ojPopup("close"),"focus"===this.options.datePicker.showOn&&(this.jK=!0),this.element.focus());return this},refresh:function(){this.ld&&this.ld.find("."+this.NG).attr("title",this.NI());
return this._superApply(arguments)||this},show:function(){if(!(this.Dl()||this.options.disabled||this.options.readOnly))if(this.jK)this.jK=!1;else{var a=this.yj;this.Ld.empty();this.vo();a=b.oc.Dg({my:"start top",at:"start bottom",of:this.element,collision:"flipfit flipfit"},a);this.VK.ojPopup("open",this.zM,a);return this}}});b.Components.Km({ojInputDate:{firstDayOfWeek:b.Components.kh(function(){return b.Ja.R2()}),dayWide:b.Components.kh(function(){return b.Ja.Ay("wide")}),dayNarrow:b.Components.kh(function(){return b.Ja.Ay("narrow")}),
monthWide:b.Components.kh(function(){return b.Ja.Cy("wide")}),monthAbbreviated:b.Components.kh(function(){return b.Ja.Cy("abbreviated")}),datePicker:b.Components.kh(function(){return b.ze.Sk("inputDate").datePicker})}});b.ya("oj.ojInputTime",f.oj.inputBase,{version:"1.0.0",widgetEventPrefix:"oj",_CLASS_NAMES:"oj-inputdatetime-input",_WIDGET_CLASS_NAMES:"oj-inputdatetime-time-only oj-component oj-inputdatetime",dG:"oj-inputdatetime-input-container",_ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES:"",_INPUT_HELPER_KEY:"inputHelp",
_ATTR_CHECK:[{attr:"type",setMandatory:"text"}],_GET_INIT_OPTIONS_PROPS:[{V:"disabled",xc:!0},{V:"pattern"},{V:"title"},{V:"placeholder"},{V:"value",Ze:a},{V:"required",Ze:!0,xc:!0},{V:"readonly",option:"readOnly",xc:!0},{V:"min",Ze:a},{V:"max",Ze:a}],F9:"ojInputTime",OG:"oj-inputdatetime-input-trigger",PG:"oj-inputdatetime-time-icon",options:{converter:b.pa.hm(b.Tj.CONVERTER_TYPE_DATETIME).createConverter({hour:"2-digit",hour12:!0,minute:"2-digit"}),max:void 0,min:void 0,datePickerComp:null,timePicker:{timeIncrement:"00:30:00:00"}},
Xd:function(a,c){this._super(a,c);null===this.options.datePickerComp&&b.ve.Vk(this._GET_INIT_OPTIONS_PROPS,c,this)},Sz:function(){this.hM={};this.Cl=this.options.datePickerComp;this.qg=f("\x3cdiv id\x3d'"+this.hn(this.F9)+"' class\x3d'oj-listbox-drop' style\x3d'display:none'\x3e\x3c/div\x3e");f("body").append(this.qg);var a=this;this.WK=this.qg.ojPopup({initialFocus:"none",rootAttributes:{"class":"datetimepicker-dropdown"},chrome:"none",modality:"modeless",open:function(){var b=f("[aria-selected]",
a.qg);1===b.length&&a.HT(b.parent(),!0);f("ul",a.qg).focus()},beforeClose:function(){a.a1=f("ul",a.qg).scrollTop()}});this.Yn()&&(this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES+=this.dG)},$x:function(){return this.WK.ojPopup("isOpen")},_ComponentCreate:function(){this.Sz();var a=this._superApply(arguments);this.Sl()&&!this.fY()?this._CLASS_NAMES="":k(this);this.aH();return a},lf:function(){var a=this._superApply(arguments);c(this.ld.children(),this.options.disabled);return a},_setOption:function(a,e,g){var f=
null;if("value"===a)return e||(e=null),f=this._super(a,e,g),this.vB(),f;f=this._superApply(arguments);"disabled"===a?(e&&this.hide(),this.ld.find("."+this.PG).attr("title",this.DJ()),c(this.ld.children(),e)):"max"!==a&&"min"!==a||this.Sl()?"readOnly"===a&&e&&this.hide():(this.hM[b.cd.VALIDATOR_TYPE_DATETIMERANGE]=d(this.options,this.Tc()),this.as());a in{max:!0,min:!0,converter:!0,timePicker:!0}&&this.vB();return f},_destroy:function(){var a=this._super();this.ld&&this.ld.remove();this.qg.remove();
return a},PF:function(){this.Yn()&&this._superApply(arguments)},QF:function(){return this.ld},EC:function(a){if(this.Yn()){this._superApply(arguments);var b=f.ui.keyCode,c=!1;if(this.$x())switch(a.keyCode){case b.TAB:this.hide();break;case b.ESCAPE:this.hide();c=!0;break;case b.UP:case b.DOWN:f("ul",this.qg).focus(),c=!0}else switch(a.keyCode){case b.UP:case b.DOWN:this.fc(this.eg(),a),this.show(),c=!0}if(c||a.keyCode===b.ENTER)return a.preventDefault(),a.stopPropagation(),!1}},DJ:function(){return this.$j(this.A("tooltipTime"+
(this.options.disabled?"Disabled":"")))},aH:function(){var a=this.Yn(),b=a?f("\x3cspan\x3e").addClass(this.OG):f("+ span",this.element),c=f("\x3cspan title\x3d'"+this.DJ()+"'/\x3e").addClass(this.PG+" oj-clickable-icon-nocontext oj-component-icon");b.append(c);var d=this;c.on("click",function(){d.$x()?d.hide():d.show()});this.Op(c);this._hoverable(c);this.zM=c;this.ld=b;a&&this.element.after(b)},hga:function(a,b,c){return null!==b&&a<b||null!==c&&a>c},pq:function(){return this.Sl()?this.Cl.widget.v3():
this.options.value},vB:function(){var a=this.pq(),c=this.Tc(),d=f("\x3cul class\x3d'oj-listbox-results' tabindex\x3d'-1' role\x3d'listbox'\x3e\x3c/ul\x3e"),c=a?c.format(a):"",e=[],g,a=a?b.qb.isoToLocalDate(a):new Date;a.setHours(0);a.setMinutes(0);a.setSeconds(0);a.setMilliseconds(0);e=this.vea(a);c=c||e[0].value;this.qg.empty();a=0;for(g=e.length;a<g;a++){var h=e[a].value,k=e[a].minMaxRange,l=f("\x3cli class\x3d'oj-listbox-result "+(k?"oj-disabled":"")+"' role\x3d'presentation'\x3e"),x=this.uuid+
"_sel"+a,k=f("\x3cdiv class\x3d'oj-listbox-result-label' "+(k?"aria-disabled ":"")+"data-value\x3d'"+h+"' role\x3d'option' id\x3d'"+x+"'\x3e"+e[a].label+"\x3c/li\x3e");c===h&&(k.attr("aria-selected","true"),l.addClass("oj-hover"),d.attr("aria-activedescendant",x));l.append(k);d.append(l)}this.qg.append(d);f(".oj-listbox-result",d).on("mousemove",function(){var a=f(this);a.hasClass("oj-disabled")||(f(".oj-hover",d).removeClass("oj-hover"),a.addClass("oj-hover"),d.attr("aria-activedescendant",a.children()[0].id))});
var u=this;d.on("click",function(a){var b=f(a.target);b.hasClass("oj-disabled")||void 0!==b.attr("aria-disabled")||(u.EZ(a),u.hide())}).on("keydown",function(a){u.Rla(a)})},vea:function(a){var c=[],d=this.Tc();if(a){var e=this.options.timePicker.timeIncrement.split(":"),g=b.qb,f=this.Sl(),h=g.dateToLocalIso(a),k=f?this.Cl.widget.options.min:this.options.min,f=f?this.Cl.widget.options.max:this.options.max,k=k?g.isoToLocalDate(g._minMaxIsoString(k,h)):null,f=f?g.isoToLocalDate(g._minMaxIsoString(f,
h)):null;if(4===e.length){var h=parseInt(e[0].substring(0),10),l=parseInt(e[1],10),u=parseInt(e[2],10),e=parseInt(e[3],10),v=new Date(a),y="";do y=d.format(g.dateToLocalIso(v)),c.push({label:y,value:y,minMaxRange:this.hga(v,k,f)}),v.setHours(v.getHours()+h),v.setMinutes(v.getMinutes()+l),v.setSeconds(v.getSeconds()+u),v.setMilliseconds(v.getMilliseconds()+e);while(v.getDate()===a.getDate())}else throw Error("timeIncrement value should be in the format of hh:mm:ss:SS");}return c},Rla:function(a){if(this.$x()){var b=
f.ui.keyCode,c=!1;switch(a.keyCode){case b.TAB:this.hide();break;case b.ESCAPE:this.hide();this.element.focus();c=!0;break;case b.UP:this.zZ(a,"prev");c=!0;break;case b.DOWN:this.zZ(a,"next");c=!0;break;case b.ENTER:this.EZ(a),c=!0}if(c)return a.preventDefault(),a.stopPropagation(),!1}},zZ:function(a,b){var c=f(".oj-hover",this.qg),d=f("ul",this.qg),e=null;1===c.length?(e=c[b](),1===e.length&&c.removeClass("oj-hover")):e=f(d.children()[0]);e&&1===e.length&&(e.addClass("oj-hover"),d.attr("aria-activedescendant",
e.children()[0].id),this.HT(e))},EZ:function(a){var b=this.qg,c=f("[aria-selected]",b),d=f("ul",b),b=f(".oj-hover div",b);1===b.length&&(1===c.length&&(c.removeAttr("aria-selected"),c.parent().removeClass("oj-hover")),b.attr("aria-selected","true"),b.parent().addClass("oj-hover"),this.hide(),this.ni(b.attr("data-value")),this.fc(b.attr("data-value"),a),d.attr("aria-activedescendant",b[0].id),this.element.focus(),this.Sl()&&this.Cl.widget.hide())},QK:function(a){this.Yn()&&this._superApply(arguments)},
show:function(){if(!this.options.disabled&&!this.options.readOnly){this.Sl()&&this.Cl.widget.hide();this.vB();var a=this.qg,c=this.WK;a.width(this.element.parent().width());a.css({position:"relative"});var d=b.oc.Dg({my:"start top",at:"start bottom",of:this.element,collision:"flipfit flipfit"},this.yj);c.ojPopup("open",this.zM,d);a.find("[aria-selected]").parent().addClass("oj-hover")}},hide:function(){this.$x()&&(this.WK.ojPopup("close"),this.element.focus())},refresh:function(){this.ld&&this.ld.find("."+
this.PG).attr("title",this.DJ());return this._superApply(arguments)||this},ni:function(a){this.Yn()&&this._superApply(arguments);this.$x()&&this.vB()},fc:function(a,c,d){if(this.Sl()){this._super(a,null,d);try{var e=this.Tc().parse(a),f=b.qb,h=this.Cl.widget,k=h.v3(),l=k?f.isoToLocalDate(k):new Date,x=g(e?f.isoToLocalDate(e):new Date,new Date(l)),u=f.dateToLocalIso(x);l.getTime()!=x.getTime()&&h.pqa(u,c)}catch(v){}}else this._superApply(arguments)},Bv:function(){return this.Yn()},Yn:function(){return!this.Sl()||
this.fY()},_GetDefaultStyleClass:function(){return"oj-inputtime"},ms:function(){return this.options.value||""},Dv:function(){var a=this._superApply(arguments);null==this.options.min&&null==this.options.max||this.Sl()||(this.hM[b.cd.VALIDATOR_TYPE_DATETIMERANGE]=d(this.options,this.Tc()));return f.extend(this.hM,a)},Tc:function(){return this.options.converter?this._superApply(arguments):f.oj.ojInputTime.prototype.options.converter},HT:function(a,b){var c=a.parent();b&&this.a1&&f(c).scrollTop(this.a1);
var d=f(c).scrollTop(),e=d+f(c).height(),g=a[0].offsetTop,h=g+f(a).height();g<d?f(c).scrollTop(g):h>e&&f(c).scrollTop(h-f(c).height())},Sl:function(){return null!==this.Cl},fY:function(){return this.Cl.inline},li:function(){this.hide()},sl:function(){this.hide()},getNodeBySubId:function(a){var b=null,c=a&&a.subId;if(c)switch(c){case "oj-listbox-drop":b=this.qg[0];break;case "oj-inputdatetime-time-icon":b=f(".oj-inputdatetime-time-icon",this.ld)[0];break;case "oj-inputdatetime-time-input":b=this.element[0];
break;default:b=null}return b||this._superApply(arguments)},getSubIdByNode:function(a){var b=f(".oj-inputdatetime-time-icon",this.ld),c=null;a===this.qg[0]?c="oj-listbox-drop":a===b[0]?c="oj-inputdatetime-time-icon":a===this.element[0]&&(c="oj-inputdatetime-time-input");return c||this._superApply(arguments)},widget:function(){return this.Yn()?this._super():this.Cl.widget.widget()}});b.ya("oj.ojInputDateTime",f.oj.ojInputDate,{version:"1.0.0",widgetEventPrefix:"oj",_WIDGET_CLASS_NAMES:"oj-inputdatetime-date-time oj-component oj-inputdatetime",
_INPUT_HELPER_KEY:"inputHelpBoth",options:{converter:b.pa.hm(b.Tj.CONVERTER_TYPE_DATETIME).createConverter({day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",hour12:!0,minute:"2-digit"}),timePicker:{timeIncrement:"00:30:00:00"}},Sz:function(){this._super();this.fu=this.element;this.IC=this.lD=this.pg=null},_ComponentCreate:function(){var a=this._super(),c=this.ZW(this.Tc());if(null===c)throw Error("Please use ojInputDate if you do not have time portion");if(this.be){var d=f("\x3cinput type\x3d'text'\x3e");
d.insertAfter(this.element);this.fu=d}for(var d=["title","placeholder","disabled","required","readOnly"],e={},g=0,h=d.length;g<h;g++)e[d[g]]=this.options[d[g]];this.pg=this.fu.ojInputTime(f.extend(e,{converter:c,displayOptions:{converterHint:"none",title:"none",messages:this.options.displayOptions.messages},value:b.qb.dateToLocalIso(this.DB()),timePicker:this.options.timePicker,datePickerComp:{widget:this,inline:this.be}}));return a},_setOption:function(a,b,c){var d=this._superApply(arguments);"value"===
a&&(this.IC=b);this.pg&&(a in{disabled:!0,readOnly:!0}?this.pg.ojInputTime("option",a,b):"timePicker"===a?this.pg.ojInputTime("option","timePicker.timeIncrement",b.timeIncrement):"converter"===a&&(this.lD=null,this.pg.ojInputTime("option",a,this.ZW(this.Tc()))));return d},_destroy:function(){var a=this._super();this.pg.ojInputTime("destroy");this.be&&this.fu.remove();return a},ZW:function(a){if(null!==this.lD)return this.lD;a=a.resolvedOptions();var c={},d="hour hour12 minute second millisecond timeFormat".split(" "),
e,g;e=0;for(g=d.length;e<g;e++)d[e]in a&&("timeFormat"===d[e]&&(c.formatType="time"),c[d[e]]=a[d[e]]);if(f.isEmptyObject(c))throw Error("Plase use ojInputDateTime's converter is lacking the time portion");return this.lD=a=b.pa.hm(b.Tj.CONVERTER_TYPE_DATETIME).createConverter(c)},pqa:function(a,b){this.ni(this.Tc().format(a));this.fc(a,b)},v3:function(){if(this.isValid())return this.options.value;if(this.IC)try{return this.Tc().parse(this.IC)}catch(a){return this.options.value}else return null},fc:function(a,
b,c){this._superApply(arguments);this.IC=a},EC:function(a){var b=f.ui.keyCode,c=!1;switch(a.keyCode){case b.UP:case b.DOWN:a.shiftKey&&(this.fc(this.eg(),a),this.pg.ojInputTime("show"),c=!0)}return c?(a.preventDefault(),a.stopPropagation(),!1):this._superApply(arguments)},show:function(){this.pg.ojInputTime("hide");return this._super()},showTimePicker:function(){this.hide();return this.pg.ojInputTime("show")},hideTimePicker:function(){return this.pg.ojInputTime("hide")},refresh:function(){var a=this._superApply(arguments)||
this;this.pg.ojInputTime("refresh");return a},getNodeBySubId:function(a){var b=a&&a.subId,c=null;b&&("oj-listbox-drop"===b||"oj-inputdatetime-time-icon"===b?c=this.pg.ojInputTime("getNodeBySubId",a):"oj-inputdatetime-date-input"===b&&(c=this.be?this.fu[0]:this.element[0]));return c||this._superApply(arguments)},getSubIdByNode:function(a){var b=null;this.be?a===this.fu[0]&&(b="oj-inputdatetime-date-input"):a===this.element[0]&&(b="oj-inputdatetime-date-input");return b||this.pg.ojInputTime("getSubIdByNode",
a)||this._superApply(arguments)},Tc:function(){return this.options.converter?this._superApply(arguments):f.oj.ojInputDateTime.prototype.options.converter},li:function(){this._superApply(arguments);this.pg&&this.hideTimePicker()},sl:function(){this._superApply(arguments);this.pg&&this.hideTimePicker()},_GetMessagingLauncherElement:function(){return this.be?this.fu:this._super()},_GetDefaultStyleClass:function(){return"oj-inputdatetime"},Oz:function(){return"oj-ojInputDate"}})});
