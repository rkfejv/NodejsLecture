/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojdatasource-common"],function(b){b.Ra=function(f,a){if(!(f instanceof Array)&&"function"!=typeof f&&"function"!=typeof f.gqa)throw Error("_ERR_DATA_INVALID_TYPE_SUMMARY\n_ERR_DATA_INVALID_TYPE_DETAIL");this.Cr=this.nea(a);null!=a&&(this.columns=a.columns,this.Di=a.initialSort);b.Ra.q.constructor.call(this,f)};o_("ArrayDataGridDataSource",b.Ra,b);b.b.ga(b.Ra,b.Um,"oj.ArrayDataGridDataSource");b.Ra.prototype.Init=function(){null==this.columns&&(this.columns=this.ida(this.Jj()));
this.Hga();"function"==typeof this.data&&this.data.subscribe(this.Cla.bind(this),null,"arrayChange");b.Ra.q.Init.call(this)};b.b.g("ArrayDataGridDataSource.prototype.Init",{Init:b.Ra.prototype.Init});b.Ra.prototype.nea=function(b){if(null!=b&&null!=b.rowHeader)if(b=b.rowHeader,"object"===typeof b){if(null!=b["default"]&&"none"==b["default"])return}else if(null!=b)return b;return"m_defaultIndex"};b.Ra.prototype.Hga=function(){var b;b=this.Jj();for(this.mr=0;this.mr<b.length;this.mr+=1)b[this.mr].ojKey=
this.mr.toString()};b.Ra.prototype.ida=function(b){var a,d;if("number"!==typeof b.length||0===b.length)return[];d=[];for(a in b[0])b[0].hasOwnProperty(a)&&(void 0!=this.Cr&&a==this.Cr||d.push(a));return d};b.Ra.prototype.R=function(b){return"row"===b?this.qo():"column"===b?this.columns.length:0};b.b.g("ArrayDataGridDataSource.prototype.getCount",{R:b.Ra.prototype.R});b.Ra.prototype.ug=function(){return"exact"};b.b.g("ArrayDataGridDataSource.prototype.getCountPrecision",{ug:b.Ra.prototype.ug});b.Ra.prototype.ZI=
function(b,a){var d;if("row"===b){if(void 0==this.Cr)return null;if("m_defaultIndex"==this.Cr)return this.TB(a);d=this.Jj();return d[a][this.Cr]}if("column"===b)return this.columns[a]};b.Ra.prototype.Eda=function(b,a){var d;if("row"===b)return{key:this.TB(a)};if("column"===b)return d=this.ZI(b,a),null!=this.Di&&this.Di.key===d?{key:this.ZI(b,a),sortDirection:this.Di.direction}:{key:d}};b.Ra.prototype.If=function(f,a,d){var c,e,g,h;c=f.axis;e=f.start;g=f.count;e=Math.max(0,e);"column"===c?g=Math.min(this.columns.length,
e+g):(h=this.Jj(),g=void 0===this.Cr?e:Math.min(h.length,e+g));c=new b.Fd(e,g,c,this);null!=a&&null!=a.success&&(null==d&&(d={}),a.success.call(d.success,c,f))};b.b.g("ArrayDataGridDataSource.prototype.fetchHeaders",{If:b.Ra.prototype.If});b.Ra.prototype.ada=function(b,a){var d=this.columns[a];return this.Jj()[b][d]};b.Ra.prototype.bda=function(b,a){return{keys:{row:this.TB(b),column:this.columns[a]}}};b.Ra.prototype.tg=function(f,a,d){var c,e,g,h,k,l;for(c=0;c<f.length;c+=1)e=f[c],"row"===e.axis?
(g=e.start,h=Math.min(this.qo(),g+e.count)):"column"===e.axis&&(k=e.start,l=Math.min(this.columns.length,k+e.count));void 0===h||void 0===l?null!=a&&null!=a.error&&(null==d&&(d={}),a.error.call(d.error)):(c=new b.Tf(g,h,k,l,this),null!=a&&null!=a.success&&(null==d&&(d={}),a.success.call(d.success,c,f)))};b.b.g("ArrayDataGridDataSource.prototype.fetchCells",{tg:b.Ra.prototype.tg});b.Ra.prototype.keys=function(b){var a=b.row,d=b.column;return new Promise(function(b){b({row:this.TB(a),column:this.columns[d]})}.bind(this))};
b.b.g("ArrayDataGridDataSource.prototype.keys",{keys:b.Ra.prototype.keys});b.Ra.prototype.zg=function(b){var a=b.row,d=b.column;return new Promise(function(b){b({row:this.SB(a),column:this.columns.indexOf(d)})}.bind(this))};b.b.g("ArrayDataGridDataSource.prototype.indexes",{zg:b.Ra.prototype.zg});b.Ra.prototype.sort=function(b,a,d){var c=[],e=[],g,h;null!=a&&null==d&&(d={});if(null==b)this.AL(a,d);else if(g=b.axis,h=b.key,b=b.direction,"column"===g)void 0==this.xr&&(this.oia=this.Di,this.xr=this.data.slice()),
this.Di={key:h,direction:b},this.Jj().sort(this.cZ(b,h)),null!=a&&null!=a.success&&a.success.call(d.success);else if("row"===g){h=this.SB(h);for(g=0;g<this.columns.length;g+=1)c[g]=this.Jj()[h][this.columns[g]];c.sort(this.cZ(b));for(g=0;g<this.columns.length;g+=1)e[g]=this.columns[c.indexOf(this.Jj()[h][this.columns[g]])];this.E4=this.columns;this.columns=e;null!=a&&null!=a.success&&a.success.call(d.success)}else null!==a&&null!=a.error&&a.error.call(d.error,"Invalid axis value")};b.b.g("ArrayDataGridDataSource.prototype.sort",
{sort:b.Ra.prototype.sort});b.Ra.prototype.AL=function(b,a){null!=this.xr&&(this.data=this.xr,this.Di=this.oia);null!=this.E4&&(this.columns=this.E4);null!=b&&null!=b.success&&b.success.call(a.success)};b.Ra.prototype.getCapability=function(b){return"sort"===b?"column":"move"===b?"row":null};b.b.g("ArrayDataGridDataSource.prototype.getCapability",{getCapability:b.Ra.prototype.getCapability});b.Ra.prototype.cZ=function(b,a){if("ascending"===b)return function(b,c){var e,f;void 0!=a&&(b instanceof Array?
(b=b[parseInt(a,10)],c=c[parseInt(a,10)]):(b=b[a],c=c[a]));e=isNaN(b);f=isNaN(c);b instanceof Date&&(b=b.toISOString(),e=!0);c instanceof Date&&(c=c.toISOString(),f=!0);return e&&f?b<c?-1:b===c?0:1:e?1:f?-1:b-c};if("descending"===b)return function(b,c){var e,f;void 0!=a&&(b instanceof Array?(b=b[parseInt(a,10)],c=c[parseInt(a,10)]):(b=b[a],c=c[a]));e=isNaN(b);f=isNaN(c);b instanceof Date&&(b=b.toISOString(),e=!0);c instanceof Date&&(c=c.toISOString(),f=!0);return e&&f?b>c?-1:b===c?0:1:e?-1:f?1:c-
b}};b.Ra.prototype.move=function(b,a){var d,c,e;d=this.SB(b);c=this.data.splice(d,1)[0];this.data instanceof Array&&(d=this.rk("delete",b,null,d,-1,!0),this.handleEvent("change",d));null===a?this.data.push(c):(e=this.SB(a),this.data.splice(e,0,c));this.data instanceof Array&&(d=this.rk("insert",b,null,e,-1),this.handleEvent("change",d));null!=this.xr&&(this.xr=this.data.slice())};b.b.g("ArrayDataGridDataSource.prototype.move",{move:b.Ra.prototype.move});b.Ra.prototype.od=function(){return"valid"};
b.b.g("ArrayDataGridDataSource.prototype.moveOK",{od:b.Ra.prototype.od});b.Ra.prototype.Jj=function(){return"function"===typeof this.data?this.data():this.data};b.Ra.prototype.SB=function(b){var a,d=this.Jj();for(a=0;a<d.length;a++)if(d[a].ojKey===b)return a;return-1};b.Ra.prototype.TB=function(b){var a=this.Jj();return a[b]?a[b].ojKey:null};b.Ra.prototype.rk=function(b,a,d,c,e,g){var h={source:this};h.operation=b;h.keys={row:a,column:d};h.indexes={row:c,column:e};h.silent=g;return h};b.Ra.prototype.Cla=
function(b){var a,d,c,e=!1;d=!1;var g=[],h=[];for(a=0;a<b.length;a++){c=b[a];if(void 0!==c.moved){d=!0;c=this.rk("refresh",null,null);this.handleEvent("change",c);break}"added"===c.status&&(e=!0)}if(!d){for(a=0;a<b.length;a++)c=b[a],"deleted"===c.status&&(d=c.value,c=c.index,d=d.ojKey,g.push({row:d,column:-1}),h.push({row:c,column:-1}));0<g.length&&(c={source:this,operation:"delete",keys:g,indexes:h,silent:e},this.handleEvent("change",c));for(a=0;a<b.length;a++)c=b[a],"added"===c.status&&(d=c.value,
c=c.index,null==d.ojKey&&(d.ojKey=this.mr.toString(),this.mr++),d=d.ojKey,c=this.rk("insert",d,null,c,-1),this.handleEvent("change",c))}null!=this.xr&&(this.xr=this.data.slice())};b.Ra.prototype.qo=function(){return this.Jj().length};b.Ra.prototype.e3=function(){return this.Cr};b.b.g("ArrayDataGridDataSource.prototype.getRowHeaderKey",{e3:b.Ra.prototype.e3});b.Ra.prototype.Io=function(){return this.columns};b.b.g("ArrayDataGridDataSource.prototype.getColumns",{Io:b.Ra.prototype.Io});b.Ra.prototype.getData=
function(){return this.data};b.b.g("ArrayDataGridDataSource.prototype.getData",{getData:b.Ra.prototype.getData});b.Fd=function(b,a,d,c){this.Zb=b;this.re=a;this.d4=d;this.Mj=c};o_("ArrayHeaderSet",b.Fd,b);b.Fd.prototype.getData=function(f,a){if(null==this.Mj)return null;b.l.assert(f<=this.re&&f>=this.Zb,"index out of bounds");b.l.assert(null==a||0==a,"level out of bounds");return this.Mj.ZI(this.d4,f)};b.b.g("ArrayHeaderSet.prototype.getData",{getData:b.Fd.prototype.getData});b.Fd.prototype.getMetadata=
function(f,a){if(null==this.Mj)return null;b.l.assert(f<=this.re&&f>=this.Zb,"index out of bounds");b.l.assert(null==a||0==a,"level out of bounds");return this.Mj.Eda(this.d4,f)};b.b.g("ArrayHeaderSet.prototype.getMetadata",{getMetadata:b.Fd.prototype.getMetadata});b.Fd.prototype.wg=function(){return 0<this.R()?1:0};b.b.g("ArrayHeaderSet.prototype.getLevelCount",{wg:b.Fd.prototype.wg});b.Fd.prototype.Ub=function(f,a){b.l.assert(f<=this.re&&f>=this.Zb,"index out of bounds");b.l.assert(null==a||0==
a,"level out of bounds");return{extent:1,more:{before:!1,after:!1}}};b.b.g("ArrayHeaderSet.prototype.getExtent",{Ub:b.Fd.prototype.Ub});b.Fd.prototype.le=function(f,a){b.l.assert(f<=this.re&&f>=this.Zb,"index out of bounds");b.l.assert(null==a||0==a,"level out of bounds");return 1};b.b.g("ArrayHeaderSet.prototype.getDepth",{le:b.Fd.prototype.le});b.Fd.prototype.R=function(){return null==this.Mj?0:Math.max(0,this.re-this.Zb)};b.b.g("ArrayHeaderSet.prototype.getCount",{R:b.Fd.prototype.R});b.Fd.prototype.ta=
function(){return this.Zb};b.b.g("ArrayHeaderSet.prototype.getStart",{ta:b.Fd.prototype.ta});b.Tf=function(b,a,d,c,e){this.Mi=b;this.pr=a;this.al=d;this.or=c;this.Mj=e};o_("ArrayCellSet",b.Tf,b);b.Tf.prototype.getData=function(b){return this.Mj.ada(b.row,b.column)};b.b.g("ArrayCellSet.prototype.getData",{getData:b.Tf.prototype.getData});b.Tf.prototype.getMetadata=function(b){return this.Mj.bda(b.row,b.column)};b.b.g("ArrayCellSet.prototype.getMetadata",{getMetadata:b.Tf.prototype.getMetadata});b.Tf.prototype.ta=
function(b){return"row"==b?this.Mi:"column"==b?this.al:-1};b.b.g("ArrayCellSet.prototype.getStart",{ta:b.Tf.prototype.ta});b.Tf.prototype.R=function(b){return"row"===b?Math.max(0,this.pr-this.Mi):"column"===b?Math.max(0,this.or-this.al):0};b.b.g("ArrayCellSet.prototype.getCount",{R:b.Tf.prototype.R});b.Tf.prototype.getStartRow=function(){return this.Mi};b.b.g("ArrayCellSet.prototype.getStartRow",{getStartRow:b.Tf.prototype.getStartRow});b.Tf.prototype.getStartColumn=function(){return this.al};b.b.g("ArrayCellSet.prototype.getStartColumn",
{getStartColumn:b.Tf.prototype.getStartColumn})});
