/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtTagCloud"],function(b,f,a,d,c){b.ya("oj.ojTagCloud",f.oj.dvtBaseComponent,{widgetEventPrefix:"oj",options:{optionChange:null},mf:function(a,b,d){return c.DvtTagCloud.newInstance(a,b,d)},di:function(a){var b=a.subId;"oj-tagcloud-item"==b?b="item["+a.index+"]":"oj-tagcloud-tooltip"==b&&(b="tooltip");return b},dg:function(a){var b={};0==a.indexOf("item")?(b.subId="oj-tagcloud-item",b.index=this.Sg(a)):"tooltip"==
a&&(b.subId="oj-tagcloud-tooltip");return b},Be:function(){var a=this._super();a.push("oj-tagcloud");return a},ei:function(){var a=this._super();a["oj-tagcloud"]={path:"styleDefaults/style",property:"CSS_TEXT_PROPERTIES"};return a},hi:function(){return["optionChange"]},ii:function(){var a=this.options.translations,b=this._super();b["DvtUtilBundle.TAG_CLOUD"]=a.componentName;return b},ki:function(a){(a&&a.getType?a.getType():null)===c.DvtSelectionEvent.TYPE?this.hc("selection",a.getSelection()):this._super(a)},
getItem:function(a){return this.la.getAutomation().getItem(a)},getItemCount:function(){return this.la.getAutomation().getItemCount()},getContextByNode:function(a){return(a=this.getSubIdByNode(a))&&"oj-tagcloud-tooltip"!==a.subId?a:null},gi:function(){return{root:["items"]}}})});
