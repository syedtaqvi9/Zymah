(window.webpackJsonp_nextgen=window.webpackJsonp_nextgen||[]).push([[10],{70:function(e,t,n){}}]),this.nextgen=this.nextgen||{},this.nextgen["block-editor"]=function(e){function t(t){for(var r,c,s=t[0],a=t[1],u=t[2],l=0,p=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(d&&d(t);p.length;)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var a=n[s];0!==o[a]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={0:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var s=window.webpackJsonp_nextgen=window.webpackJsonp_nextgen||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=a;return i.push([69,10]),n()}({0:function(e,t){e.exports=window.wp.element},12:function(e,t){e.exports=window.wp.plugins},31:function(e,t){e.exports=window.wp.domReady},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r="nextgen-site-design",o="site-design-sidebar"},39:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r="nextgen-site-content",o="site-content-sidebar"},4:function(e,t){e.exports=window.wp.data},40:function(e,t){e.exports=window.wp.url},69:function(e,t,n){e.exports=n(92)},92:function(e,t,n){"use strict";n.r(t);var r=n(4),o=n(0),i=n(12),c=n(31),s=n.n(c),a=n(40),u=n(38),d=n(39);n(70),s()((function(){var e=Object(a.getQueryArg)(window.location.href,"focus");if(e){var t=wp.data.dispatch("core/edit-post").openGeneralSidebar;switch(e){case"site-design":t("".concat(u.a,"/").concat(u.b));break;case"site-content":t("".concat(d.a,"/").concat(d.b))}}})),s()((function(){wp.data.select("core/edit-post").isEditorPanelEnabled("meta-box-wpseo_meta")&&wp.data.dispatch("core/edit-post").toggleEditorPanelEnabled("meta-box-wpseo_meta")})),Object(i.registerPlugin)("nextgen-block-editor-behavior",{render:function(){var e=Object(r.useDispatch)("core/edit-post"),t=e.openGeneralSidebar,n=e.closeGeneralSidebar,i=e.setIsInserterOpened,c=Object(r.useDispatch)("core/block-editor").clearSelectedBlock,s=Object(r.useDispatch)("core/editor").disablePublishSidebar,a=Object(r.useSelect)((function(e){return{sidebarIsOpened:e("core/interface").getActiveComplementaryArea("core/edit-post"),isInserterOpened:e("core/edit-post").isInserterOpened(),hasSelectedBlock:e("core/block-editor").hasSelectedBlock(),isPublishSidebarEnabled:e("core/editor").isPublishSidebarEnabled()}}),[]),u=a.sidebarIsOpened,d=a.isInserterOpened,l=a.hasSelectedBlock,p=a.isPublishSidebarEnabled;return Object(o.useEffect)((function(){u&&(i(!1),"edit-post/block"!==u&&c())}),[u]),Object(o.useEffect)((function(){d&&n()}),[d]),Object(o.useEffect)((function(){p&&s()}),[p]),Object(o.useEffect)((function(){l&&u&&"edit-post/block"!==u&&t("edit-post/block")}),[l]),null}})}});