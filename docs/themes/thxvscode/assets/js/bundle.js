!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";(function(t){function i(){$("body").scrollspy({target:"#docs-subnavbar"}),$("#small-nav-dropdown").change((function(){localStorage.setItem("mobileNavChanged","true")})),"true"===localStorage.getItem("mobileNavChanged")&&($("#small-nav-dropdown").focus(),localStorage.removeItem("mobileNavChanged"));$("#docs-subnavbar").affix({offset:{top:function(){return $("#docs-subnavbar").parent().offset().top-70},bottom:400}}),t.add($(".docs-navbar-container")),$(".collapse").on("hidden.bs.collapse",(function(){$(this).parent().addClass("collapsed"),$(this).parent().removeClass("expanded")})).on("shown.bs.collapse",(function(){$(this).parent().addClass("expanded"),$(this).parent().removeClass("collapsed")})),$("#small-nav-dropdown").change((function(){window.location=this.value}));var e=navigator.userAgent,n=e.indexOf("Macintosh")>=0,i=e.indexOf("Linux")>=0,o=e.indexOf("Windows")>=0;!function(){function t(t){return function(){t.attributes.__interactionCount++,$(t).children(".hash-link").removeClass("transparent")}}function e(t){return function(){t.attributes.__interactionCount--,0===t.attributes.__interactionCount&&$(t).children(".hash-link").addClass("transparent")}}for(var n=$("h2[data-needslink], h3[data-needslink]"),i=0;i<n.length;i++){var o=n[i];o.attributes.__interactionCount=0,$(o).append($('<a class="hash-link" aria-label="'.concat(o.textContent,' permalink" href="#').concat(o.id,'">#</a>'))),$(o).children(".hash-link").on("focusin",t(o)),$(o).children(".hash-link").on("focusout",e(o)),$(o).on("mouseenter",t(o)),$(o).on("mouseleave",e(o)),$(o).children(".hash-link").addClass("transparent")}}()}n.d(e,"a",(function(){return i}))}).call(this,n(1))},function(t,e,n){!function(e,n){"use strict";var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();var o,r=!1,s=void 0!==e;s&&e.getComputedStyle?(o=n.createElement("div"),["","-webkit-","-moz-","-ms-"].some((function(t){try{o.style.position=t+"sticky"}catch(t){}return""!=o.style.position}))&&(r=!0)):r=!0;var a=!1,f="undefined"!=typeof ShadowRoot,l={top:null,left:null},c=[];function d(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])}function h(t){return parseFloat(t)||0}function u(t){for(var e=0;t;)e+=t.offsetTop,t=t.offsetParent;return e}var p=function(){function t(e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!(e instanceof HTMLElement))throw new Error("First argument must be HTMLElement");if(c.some((function(t){return t._node===e})))throw new Error("Stickyfill is already applied to this node");this._node=e,this._stickyMode=null,this._active=!1,c.push(this),this.refresh()}return i(t,[{key:"refresh",value:function(){if(!r&&!this._removed){this._active&&this._deactivate();var t=this._node,i=getComputedStyle(t),o={position:i.position,top:i.top,display:i.display,marginTop:i.marginTop,marginBottom:i.marginBottom,marginLeft:i.marginLeft,marginRight:i.marginRight,cssFloat:i.cssFloat};if(!isNaN(parseFloat(o.top))&&"table-cell"!=o.display&&"none"!=o.display){this._active=!0;var s=t.style.position;"sticky"!=i.position&&"-webkit-sticky"!=i.position||(t.style.position="static");var a=t.parentNode,l=f&&a instanceof ShadowRoot?a.host:a,c=t.getBoundingClientRect(),p=l.getBoundingClientRect(),m=getComputedStyle(l);this._parent={node:l,styles:{position:l.style.position},offsetHeight:l.offsetHeight},this._offsetToWindow={left:c.left,right:n.documentElement.clientWidth-c.right},this._offsetToParent={top:c.top-p.top-h(m.borderTopWidth),left:c.left-p.left-h(m.borderLeftWidth),right:-c.right+p.right-h(m.borderRightWidth)},this._styles={position:s,top:t.style.top,bottom:t.style.bottom,left:t.style.left,right:t.style.right,width:t.style.width,marginTop:t.style.marginTop,marginLeft:t.style.marginLeft,marginRight:t.style.marginRight};var g=h(o.top);this._limits={start:c.top+e.pageYOffset-g,end:p.top+e.pageYOffset+l.offsetHeight-h(m.borderBottomWidth)-t.offsetHeight-g-h(o.marginBottom)};var v=m.position;"absolute"!=v&&"relative"!=v&&(l.style.position="relative"),this._recalcPosition();var _=this._clone={};_.node=n.createElement("div"),d(_.node.style,{width:c.right-c.left+"px",height:c.bottom-c.top+"px",marginTop:o.marginTop,marginBottom:o.marginBottom,marginLeft:o.marginLeft,marginRight:o.marginRight,cssFloat:o.cssFloat,padding:0,border:0,borderSpacing:0,fontSize:"1em",position:"static"}),a.insertBefore(_.node,t),_.docOffsetTop=u(_.node)}}}},{key:"_recalcPosition",value:function(){if(this._active&&!this._removed){var t=l.top<=this._limits.start?"start":l.top>=this._limits.end?"end":"middle";if(this._stickyMode!=t){switch(t){case"start":d(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:this._offsetToParent.top+"px",bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"middle":d(this._node.style,{position:"fixed",left:this._offsetToWindow.left+"px",right:this._offsetToWindow.right+"px",top:this._styles.top,bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"end":d(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:"auto",bottom:0,width:"auto",marginLeft:0,marginRight:0})}this._stickyMode=t}}}},{key:"_fastCheck",value:function(){this._active&&!this._removed&&(Math.abs(u(this._clone.node)-this._clone.docOffsetTop)>1||Math.abs(this._parent.node.offsetHeight-this._parent.offsetHeight)>1)&&this.refresh()}},{key:"_deactivate",value:function(){var t=this;this._active&&!this._removed&&(this._clone.node.parentNode.removeChild(this._clone.node),delete this._clone,d(this._node.style,this._styles),delete this._styles,c.some((function(e){return e!==t&&e._parent&&e._parent.node===t._parent.node}))||d(this._parent.node.style,this._parent.styles),delete this._parent,this._stickyMode=null,this._active=!1,delete this._offsetToWindow,delete this._offsetToParent,delete this._limits)}},{key:"remove",value:function(){var t=this;this._deactivate(),c.some((function(e,n){if(e._node===t._node)return c.splice(n,1),!0})),this._removed=!0}}]),t}(),m={stickies:c,Sticky:p,forceSticky:function(){r=!1,g(),this.refreshAll()},addOne:function(t){if(!(t instanceof HTMLElement)){if(!t.length||!t[0])return;t=t[0]}for(var e=0;e<c.length;e++)if(c[e]._node===t)return c[e];return new p(t)},add:function(t){if(t instanceof HTMLElement&&(t=[t]),t.length){for(var e=[],n=function(n){var i=t[n];return i instanceof HTMLElement?c.some((function(t){if(t._node===i)return e.push(t),!0}))?"continue":void e.push(new p(i)):(e.push(void 0),"continue")},i=0;i<t.length;i++)n(i);return e}},refreshAll:function(){c.forEach((function(t){return t.refresh()}))},removeOne:function(t){if(!(t instanceof HTMLElement)){if(!t.length||!t[0])return;t=t[0]}c.some((function(e){if(e._node===t)return e.remove(),!0}))},remove:function(t){if(t instanceof HTMLElement&&(t=[t]),t.length)for(var e=function(e){var n=t[e];c.some((function(t){if(t._node===n)return t.remove(),!0}))},n=0;n<t.length;n++)e(n)},removeAll:function(){for(;c.length;)c[0].remove()}};function g(){if(!a){a=!0,r(),e.addEventListener("scroll",r),e.addEventListener("resize",m.refreshAll),e.addEventListener("orientationchange",m.refreshAll);var t=void 0,i=void 0,o=void 0;"hidden"in n?(i="hidden",o="visibilitychange"):"webkitHidden"in n&&(i="webkitHidden",o="webkitvisibilitychange"),o?(n[i]||s(),n.addEventListener(o,(function(){n[i]?clearInterval(t):s()}))):s()}function r(){e.pageXOffset!=l.left?(l.top=e.pageYOffset,l.left=e.pageXOffset,m.refreshAll()):e.pageYOffset!=l.top&&(l.top=e.pageYOffset,l.left=e.pageXOffset,c.forEach((function(t){return t._recalcPosition()})))}function s(){t=setInterval((function(){c.forEach((function(t){return t._fastCheck()}))}),500)}}r||g(),t.exports?t.exports=m:s&&(e.Stickyfill=m)}(window,document)},function(t,e,n){"use strict";n.r(e);var i=n(0);
/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */window.onload=function(){var t,e;t=$("#skip-to-content"),e=$("#main-content button, #main-content a:visible").first(),t.click((function(){setTimeout((function(){e.focus()}),1)})),Object(i.a)()}}]);