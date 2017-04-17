/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojdatasource-common","ojs/ojmodel"],function(b){b.Lc=function(f,a,d,c,e){b.l.oy(d);this.Zb=f;this.re=a;this.vE=d;this.Cg=c;this.m4=e};o_("CollectionHeaderSet",b.Lc,b);b.Lc.prototype.i5=function(f){b.l.LD(f);null!=f&&f.length===this.R()&&(this.sr=f)};b.Lc.prototype.getData=function(f,a){var d;b.l.assert(f<=this.re&&f>=this.Zb,"index out of bounds");b.l.assert(null==a||0==a,"level out of bounds");if(null!=this.Cg){if(null==this.sr)return null;d=this.sr[f-this.Zb];
return d.get(this.Cg)}return this.vE[f]};b.b.g("CollectionHeaderSet.prototype.getData",{getData:b.Lc.prototype.getData});b.Lc.prototype.getMetadata=function(f,a){var d;b.l.assert(f<=this.re&&f>=this.Zb,"index out of bounds");b.l.assert(null==a||0==a,"level out of bounds");if(null!=this.Cg){if(null==this.sr)return null;d=this.sr[f-this.Zb];return{key:b.jp.kt(d)}}d=this.getData(f,a);return this.m4.key===d?{key:d,sortDirection:this.m4.direction}:{key:d}};b.b.g("CollectionHeaderSet.prototype.getMetadata",
{getMetadata:b.Lc.prototype.getMetadata});b.Lc.prototype.wg=function(){return 0<this.R()?1:0};b.b.g("CollectionHeaderSet.prototype.getLevelCount",{wg:b.Lc.prototype.wg});b.Lc.prototype.Ub=function(f,a){b.l.assert(f<=this.re&&f>=this.Zb,"index out of bounds");b.l.assert(null==a||0==a,"level out of bounds");return{extent:1,more:{before:!1,after:!1}}};b.b.g("CollectionHeaderSet.prototype.getExtent",{Ub:b.Lc.prototype.Ub});b.Lc.prototype.le=function(f,a){b.l.assert(f<=this.re&&f>=this.Zb,"index out of bounds");
b.l.assert(null==a||0==a,"level out of bounds");return 1};b.b.g("CollectionHeaderSet.prototype.getDepth",{le:b.Lc.prototype.le});b.Lc.prototype.R=function(){return Math.max(0,this.re-this.Zb)};b.b.g("CollectionHeaderSet.prototype.getCount",{R:b.Lc.prototype.R});b.Lc.prototype.ta=function(){return this.Zb};b.b.g("CollectionHeaderSet.prototype.getStart",{ta:b.Lc.prototype.ta});b.Lc.prototype.N2=function(){return this.re};b.b.g("CollectionHeaderSet.prototype.getEnd",{N2:b.Lc.prototype.N2});b.Lc.prototype.V2=
function(){return this.vE};b.b.g("CollectionHeaderSet.prototype.getHeaders",{V2:b.Lc.prototype.V2});b.Lc.prototype.Ey=function(){return this.Cg};b.b.g("CollectionHeaderSet.prototype.getRowHeader",{Ey:b.Lc.prototype.Ey});b.Gd=function(f,a,d,c,e){b.l.oy(e);this.Mi=f;this.pr=a;this.al=d;this.or=c;this.Sd=e};o_("CollectionCellSet",b.Gd,b);b.Gd.prototype.i5=function(f){b.l.LD(f);null!=f&&f.length===this.R("row")&&(this.sr=f)};b.Gd.prototype.getData=function(b){var a;a=this.Ob(b);return null==a?null:a.get(this.Sd[b.column])};
b.b.g("CollectionCellSet.prototype.getData",{getData:b.Gd.prototype.getData});b.Gd.prototype.getMetadata=function(f){var a;a=this.Ob(f);return null==a?null:{keys:{row:b.jp.kt(a),column:this.Sd[f.column]}}};b.b.g("CollectionCellSet.prototype.getMetadata",{getMetadata:b.Gd.prototype.getMetadata});b.Gd.prototype.Ob=function(f){var a;if(null==this.sr)return null;b.l.Ff(f);a=f.row;f=f.column;b.l.assert(a>=this.Mi&&a<=this.pr&&f>=this.al&&f<=this.or);return this.sr[a-this.Mi]};b.Gd.prototype.R=function(b){return"row"===
b?Math.max(0,this.pr-this.Mi):"column"===b?Math.max(0,this.or-this.al):0};b.b.g("CollectionCellSet.prototype.getCount",{R:b.Gd.prototype.R});b.Gd.prototype.getStartRow=function(){return this.Mi};b.b.g("CollectionCellSet.prototype.getStartRow",{getStartRow:b.Gd.prototype.getStartRow});b.Gd.prototype.P2=function(){return this.pr};b.b.g("CollectionCellSet.prototype.getEndRow",{P2:b.Gd.prototype.P2});b.Gd.prototype.getStartColumn=function(){return this.al};b.b.g("CollectionCellSet.prototype.getStartColumn",
{getStartColumn:b.Gd.prototype.getStartColumn});b.Gd.prototype.O2=function(){return this.or};b.b.g("CollectionCellSet.prototype.getEndColumn",{O2:b.Gd.prototype.O2});b.Gd.prototype.Io=function(){return this.Sd};b.b.g("CollectionCellSet.prototype.getColumns",{Io:b.Gd.prototype.Io});b.jp=function(){};b.jp.kt=function(b){var a;a=b.Zf();null==a&&(a=b.np());return a};b.wa=function(f,a){this.Fa=f;null!=a&&(this.gz=a.rowHeader,this.columns=a.columns);this.l0();b.wa.q.constructor.call(this)};o_("CollectionDataGridDataSource",
b.wa,b);b.b.ga(b.wa,b.Um,"oj.CollectionDataGridDataSource");b.wa.prototype.Init=function(){b.wa.q.Init.call(this);this.Gm={};this.Kx()};b.b.g("CollectionDataGridDataSource.prototype.Init",{Init:b.wa.prototype.Init});b.wa.prototype.Kx=function(){this.Fa.on("add",this.yfa.bind(this));this.Fa.on("remove",this.Afa.bind(this));this.Fa.on("change",this.zfa.bind(this));this.Fa.on("refresh",this.Rea.bind(this));this.Fa.on("reset",this.Sea.bind(this))};b.wa.prototype.Sga=function(){return null!=this.data};
b.wa.prototype.R=function(b){var a;void 0==this.precision&&(this.precision={});if("row"==b){a=this.ke();if(-1===a||0===a&&(!this.Sga()||0<this.qo()))return this.precision[b]="estimate",-1;this.precision[b]="exact";return this.qo()}if("column"==b){if(null!=this.columns)return this.precision[b]="exact",this.columns.length;this.precision[b]="estimate";return-1}return 0};b.b.g("CollectionDataGridDataSource.prototype.getCount",{R:b.wa.prototype.R});b.wa.prototype.ug=function(b){null!=this.precision&&null!=
this.precision[b]||this.R(b);return this.precision[b]};b.b.g("CollectionDataGridDataSource.prototype.getCountPrecision",{ug:b.wa.prototype.ug});b.wa.prototype.If=function(b,a,d){var c,e;null!=a&&(c=b.axis,e={},e.E3=b,e.callbacks=a,e.py=d,this.Gm[c]=e)};b.b.g("CollectionDataGridDataSource.prototype.fetchHeaders",{If:b.wa.prototype.If});b.wa.prototype.mfa=function(f,a,d,c){var e,g,h,k;e=f.axis;g=f.start;h=f.count;if("column"===e)null!=this.columns?(c=Math.min(this.columns.length,g+h),k=new b.Lc(g,c,
this.columns,void 0,this.Di)):k=new b.Fd(g,g,e,null);else if("row"===e){if(null!=this.gz){null!=c&&(h=c.count);c=Math.min(this.qo(),g+h);k=new b.Lc(g,c,this.columns,this.gz);this.B_(g,c,k,f,a,d);return}k=new b.Fd(g,g,e,null)}null!=a&&a.success&&a.success.call(d.success,k,f)};b.wa.prototype.FW=function(b){var a,d,c,e,g,h;for(a=0;a<b.length;a+=1)d=b[a],"row"===d.axis?(c=d.start,e=d.count):"column"===d.axis&&(g=d.start,h=d.count);return{rowStart:c,rowCount:e,colStart:g,colCount:h}};b.wa.prototype.Jea=
function(f,a,d,c){var e,g,h;e=this.FW(f);g=e.rowStart;c=null!=c?Math.min(this.qo(),g+c.count):Math.min(this.qo(),g+e.rowCount);h=e.colStart;e=Math.min(null==this.columns?0:this.columns.length,h+e.colCount);e=new b.Gd(g,c,h,e,this.columns);this.B_(g,c,e,f,a,d)};b.wa.prototype.B_=function(b,a,d,c,e,g){var h;for(h=[];b<a;b++)h.push(this.Fa.at(b,{deferred:!0}));Promise.all(h).then(function(a){d.i5(a);e.success.call(g.success,d,c)})};b.wa.prototype.tg=function(b,a,d){null!=a&&(this.Eg={},this.Eg.N1=b,
this.Eg.callbacks=a,this.Eg.py=d);this.Dca(b)};b.b.g("CollectionDataGridDataSource.prototype.fetchCells",{tg:b.wa.prototype.tg});b.wa.prototype.BZ=function(b){var a,d,c,e,g;a=this.Gm[b];null!=a&&(d=a.E3,c=a.callbacks,e=a.py,"row"===b&&(g=a.RM),this.mfa(d,c,e,g),this.Gm[b]=null)};b.wa.prototype.Pia=function(){this.Jea(this.Eg.N1,this.Eg.callbacks,this.Eg.py,this.Eg.RM)};b.wa.prototype.Dca=function(b){var a;b=this.FW(b);a=b.rowStart;this.Fa.hz(a,b.rowCount).then(function(b){this.data=!0;this.vka(b.start,
b.count);void 0===this.columns?this.Fa.at(a,{deferred:!0}).then(function(a){null!=a&&this.SL(a);this.pV()}.bind(this)):this.pV()}.bind(this),function(a){this.Eca(a)}.bind(this))};b.wa.prototype.Eca=function(f){b.r.error(f);null!=this.Gm&&(this.CZ("column",f),this.CZ("row",f));null!=this.Eg&&this.Qia(f)};b.wa.prototype.CZ=function(b,a){var d,c,e;d=this.Gm[b];null!=d&&(c=d.callbacks,e=d.py,d=d.E3,c.error&&c.error.call(e.error,a,d),this.Gm[b]=null)};b.wa.prototype.Qia=function(b){var a,d,c;a=this.Eg.callbacks;
d=this.Eg.py;c=this.Eg.N1;a.error&&a.error.call(d.error,b,c);this.Eg=null};b.wa.prototype.pV=function(){null!=this.Gm&&(this.BZ("column"),this.BZ("row"));null!=this.Eg&&this.Pia()};b.wa.prototype.vka=function(b,a){var d={start:b,count:a};null!=this.Gm.row&&(this.Gm.row.RM=d);null!=this.Eg&&(this.Eg.RM=d)};b.wa.prototype.SL=function(b){this.columns=b.keys();-1!=this.columns.indexOf(this.gz)&&this.columns.splice(this.columns.indexOf(this.gz),1)};b.wa.prototype.keys=function(f){var a,d,c,e,g;a=f.row;
d=f.column;g=this;return new Promise(function(f){g.Fa.at(a,{deferred:!0}).then(function(a){null==a?f({row:null,column:null}):(c=b.jp.kt(a),null==g.columns&&g.SL(a),e=g.columns[d],f({row:c,column:e}))}.bind(g))})};b.b.g("CollectionDataGridDataSource.prototype.keys",{keys:b.wa.prototype.keys});b.wa.prototype.zg=function(b){var a,d,c,e;a=b.row;d=b.column;e=this;return new Promise(function(b){e.Fa.indexOf(a,{deferred:!0}).then(function(a){-1===a?b({row:-1,column:-1}):null==e.columns?e.Fa.at(a,{deferred:!0}).then(function(f){e.SL(f);
c=e.columns.indexOf(d);-1===c&&(a=-1);b({row:a,column:c})}.bind(e)):(c=e.columns.indexOf(d),-1===c&&(a=-1),b({row:a,column:c}))}.bind(e))})};b.b.g("CollectionDataGridDataSource.prototype.indexes",{zg:b.wa.prototype.zg});b.wa.prototype.getCapability=function(b){return"sort"===b?"column":"move"===b?"row":null};b.b.g("CollectionDataGridDataSource.prototype.getCapability",{getCapability:b.wa.prototype.getCapability});b.wa.prototype.sort=function(b,a,d){var c,e,g;null==d&&(d={});null==b?this.AL(a,d):(e=
b.direction,g=b.key,b=b.axis,"column"===b?(this.Fa.Xa()?(this.Fa.comparator=g,this.Fa.sortDirection="ascending"===e?1:-1):("ascending"===e&&(c=function(a,b){var c,d;a=a.get(g);b=b.get(g);c=isNaN(a);d=isNaN(b);a instanceof Date&&(a=a.toISOString(),c=!0);b instanceof Date&&(b=b.toISOString(),d=!0);return c&&d?a<b?-1:a===b?0:1:c?1:d?-1:a-b}),"descending"===e&&(c=function(a,b){var c,d;a=a.get(g);b=b.get(g);c=isNaN(a);d=isNaN(b);a instanceof Date&&(a=a.toISOString());b instanceof Date&&(b=b.toISOString());
return c&&d?a>b?-1:a===b?0:1:c?-1:d?1:b-a}),this.Fa.comparator=c),this.Fa.sort(),this.l0(g),null!=a&&null!=a.success&&a.success.call(d.success)):null!=a&&null!=a.error&&a.error.call(d.error,"Axis value not supported"))};b.b.g("CollectionDataGridDataSource.prototype.sort",{sort:b.wa.prototype.sort});b.wa.prototype.AL=function(b,a){this.Fa.comparator=null;this.Fa.reset();null!=b&&null!=b.success&&b.success.call(a.success)};b.wa.prototype.l0=function(b){var a,d;a=this.Fa.comparator;d=-1===this.Fa.sortDirection?
"descending":"ascending";null==b&&"function"===typeof a?this.Di={}:(this.Di={},this.Di.axis="column",this.Di.direction=d,this.Di.key=null==b?a:null)};b.wa.prototype.move=function(b,a,d,c,e){var g;this.Fa.get(b,{deferred:!0}).then(function(d){null==a?(this.Fa.remove(d),this.Fa.add(d),null!=c&&null!=c.success&&c.success.call(e.success)):(b===a?(g=this.Fa.indexOf(a,{deferred:!0}),this.Fa.remove(d)):(this.Fa.remove(d),g=this.Fa.indexOf(a,{deferred:!0})),g.then(function(a){this.Fa.add(d,{at:a,Vra:!0});
null!=c&&null!=c.success&&c.success.call(e.success)}.bind(this)))}.bind(this))};b.b.g("CollectionDataGridDataSource.prototype.move",{move:b.wa.prototype.move});b.wa.prototype.od=function(){return"valid"};b.b.g("CollectionDataGridDataSource.prototype.moveOK",{od:b.wa.prototype.od});b.wa.prototype.rk=function(b,a,d,c,e){var g={source:this};g.operation=b;g.keys={row:a,column:d};g.indexes={row:c,column:e};return g};b.wa.prototype.yfa=function(f){this.handleEvent("change",this.rk("insert",b.jp.kt(f),null,
f.index,-1))};b.wa.prototype.Afa=function(f,a,d){this.handleEvent("change",this.rk("delete",b.jp.kt(f),null,d.index,-1))};b.wa.prototype.zfa=function(f){this.handleEvent("change",this.rk("update",b.jp.kt(f),null,f.index,-1))};b.wa.prototype.Rea=function(){this.data=null;this.handleEvent("change",this.rk("refresh",null,null))};b.wa.prototype.Sea=function(){this.data=null;this.handleEvent("change",this.rk("reset",null,null))};b.wa.prototype.qo=function(){return this.Fa.size()};b.wa.prototype.ke=function(){return void 0===
this.Fa.totalResults?-1:this.Fa.totalResults};b.wa.prototype.I2=function(){return this.Fa};b.b.g("CollectionDataGridDataSource.prototype.getCollection",{I2:b.wa.prototype.I2});b.wa.prototype.Io=function(){return this.columns};b.b.g("CollectionDataGridDataSource.prototype.getColumns",{Io:b.wa.prototype.Io});b.wa.prototype.Ey=function(){return this.gz};b.b.g("CollectionDataGridDataSource.prototype.getRowHeader",{Ey:b.wa.prototype.Ey});b.wa.prototype.getData=function(){return this.data};b.b.g("CollectionDataGridDataSource.prototype.getData",
{getData:b.wa.prototype.getData})});
