(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{231:function(t,e,n){"use strict";e.__esModule=!0;var o=c(n(304)),i=c(n(305)),r=c(n(321)),s=c(n(327)),a=c(n(328)),u=c(n(1)),l=c(n(0));function c(t){return t&&t.__esModule?t:{default:t}}var f=function(t){var e=(0,a.default)({},t);return e.responsiveResolution&&(e.resolutions=e.responsiveResolution,delete e.responsiveResolution),e.responsiveSizes&&(e.sizes=e.responsiveSizes,delete e.responsiveSizes),e},d={},p=function(t){var e=f(t),n=e.sizes?e.sizes.src:e.resolutions.src;return!!d[n]||(d[n]=!0,!1)},y=void 0,h=[],v=null,b=function(){if(null!==v)return v;var t="undefined"!=typeof window?window.document.createElement("canvas"):{};return v=!(!t.getContext||!t.getContext("2d"))&&0===t.toDataURL("image/webp").indexOf("data:image/webp")},g=function(t){var e=t.src?'src="'+t.src+'" ':'src="" ',n=t.srcSet?'srcset="'+t.srcSet+'" ':"",o=t.sizes?'sizes="'+t.sizes+'" ':"",i=t.title?'title="'+t.title+'" ':"",r=t.alt?'alt="'+t.alt+'" ':'alt="" ',s=t.width?'width="'+t.width+'" ':"",a=t.height?'height="'+t.height+'" ':"",u=t.opacity?t.opacity:"1";return"<img "+s+a+e+n+r+i+o+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(t.transitionDelay?t.transitionDelay:"0.5s")+";opacity:"+u+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},m=function(t){var e=t.style,n=t.onLoad,o=(0,s.default)(t,["style","onLoad"]);return u.default.createElement("img",(0,a.default)({},o,{onLoad:n,style:(0,a.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},e)}))};m.propTypes={style:l.default.object,onLoad:l.default.func};var _=function(t){function e(n){(0,o.default)(this,e);var r=(0,i.default)(this,t.call(this,n)),s=!0,a=!0,u=!1;return!p(n)&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=!1,a=!1,u=!0),"undefined"==typeof window&&(s=!1,a=!1),r.state={isVisible:s,imgLoaded:a,IOSupported:u},r.handleRef=r.handleRef.bind(r),r}return(0,r.default)(e,t),e.prototype.handleRef=function(t){var e=this;this.state.IOSupported&&t&&function(t,e){(void 0===y&&"undefined"!=typeof window&&window.IntersectionObserver&&(y=new window.IntersectionObserver(function(t){t.forEach(function(t){h.forEach(function(e){e[0]===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(y.unobserve(e[0]),e[1]())})})},{rootMargin:"200px"})),y).observe(t),h.push([t,e])}(t,function(){e.setState({isVisible:!0,imgLoaded:!1})})},e.prototype.render=function(){var t,e=this,n=f(this.props),o=n.title,i=n.alt,r=n.className,s=n.outerWrapperClassName,l=n.style,c=void 0===l?{}:l,d=n.imgStyle,p=void 0===d?{}:d,y=n.placeholderStyle,h=void 0===y?{}:y,v=n.sizes,_=n.resolutions,w=n.backgroundColor,S=n.Tag;t="boolean"==typeof w?"lightgray":w;var L=(0,a.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},p,h),O=(0,a.default)({opacity:this.state.imgLoaded||!1===this.props.fadeIn?1:0},p);if(v){var j=v;return j.srcWebp&&j.srcSetWebp&&b()&&(j.src=j.srcWebp,j.srcSet=j.srcSetWebp),u.default.createElement(S,{className:(s||"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===c.position?"initial":"relative"}},u.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:(0,a.default)({position:"relative",overflow:"hidden"},c),ref:this.handleRef},u.default.createElement(S,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),j.base64&&u.default.createElement(m,{alt:i,title:o,src:j.base64,style:L}),j.tracedSVG&&u.default.createElement(m,{alt:i,title:o,src:j.tracedSVG,style:L}),t&&u.default.createElement(S,{title:o,style:{backgroundColor:t,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&u.default.createElement(m,{alt:i,title:o,srcSet:j.srcSet,src:j.src,sizes:j.sizes,style:O,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,a.default)({alt:i,title:o},j))}})))}if(_){var x=_,T=(0,a.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},c);return"inherit"===c.display&&delete T.display,x.srcWebp&&x.srcSetWebp&&b()&&(x.src=x.srcWebp,x.srcSet=x.srcSetWebp),u.default.createElement(S,{className:(s||"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===c.position?"initial":"relative"}},u.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef},x.base64&&u.default.createElement(m,{alt:i,title:o,src:x.base64,style:L}),x.tracedSVG&&u.default.createElement(m,{alt:i,title:o,src:x.tracedSVG,style:L}),t&&u.default.createElement(S,{title:o,style:{backgroundColor:t,width:x.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:x.height}}),this.state.isVisible&&u.default.createElement(m,{alt:i,title:o,width:x.width,height:x.height,srcSet:x.srcSet,src:x.src,style:O,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,a.default)({alt:i,title:o,width:x.width,height:x.height},x))}})))}return null},e}(u.default.Component);_.defaultProps={fadeIn:!0,alt:"",Tag:"div"},_.propTypes={responsiveResolution:l.default.object,responsiveSizes:l.default.object,resolutions:l.default.object,sizes:l.default.object,fadeIn:l.default.bool,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),outerWrapperClassName:l.default.oneOfType([l.default.string,l.default.object]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,position:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,Tag:l.default.string},e.default=_},253:function(t,e){t.exports={}},265:function(t,e,n){"use strict";e.__esModule=!0;var o=s(n(306)),i=s(n(316)),r="function"==typeof i.default&&"symbol"==typeof o.default?function(t){return typeof t}:function(t){return t&&"function"==typeof i.default&&t.constructor===i.default&&t!==i.default.prototype?"symbol":typeof t};function s(t){return t&&t.__esModule?t:{default:t}}e.default="function"==typeof i.default&&"symbol"===r(o.default)?function(t){return void 0===t?"undefined":r(t)}:function(t){return t&&"function"==typeof i.default&&t.constructor===i.default&&t!==i.default.prototype?"symbol":void 0===t?"undefined":r(t)}},266:function(t,e,n){"use strict";var o=n(111),i=n(62),r=n(262),s=n(108),a=n(253),u=n(310),l=n(250),c=n(311),f=n(230)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,y,h,v,b){u(n,e,y);var g,m,_,w=function(t){if(!d&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},S=e+" Iterator",L="values"==h,O=!1,j=t.prototype,x=j[f]||j["@@iterator"]||h&&j[h],T=x||w(h),M=h?L?w("entries"):T:void 0,E="Array"==e&&j.entries||x;if(E&&(_=c(E.call(new t)))!==Object.prototype&&_.next&&(l(_,S,!0),o||"function"==typeof _[f]||s(_,f,p)),L&&x&&"values"!==x.name&&(O=!0,T=function(){return x.call(this)}),o&&!b||!d&&!O&&j[f]||s(j,f,T),a[e]=T,a[S]=p,h)if(g={values:L?T:w("values"),keys:v?T:w("keys"),entries:M},b)for(m in g)m in j||r(j,m,g[m]);else i(i.P+i.F*(d||O),e,g);return g}},267:function(t,e,n){(function(e){var n=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,f=l||c||Function("return this")(),d=Object.prototype.toString,p=Math.max,y=Math.min,h=function(){return f.Date.now()};function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&d.call(t)==o}(t))return n;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var l=s.test(t);return l||a.test(t)?u(t.slice(2),l?2:8):r.test(t)?n:+t}t.exports=function(t,e,n){var o,i,r,s,a,u,l=0,c=!1,f=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,r=i;return o=i=void 0,l=e,s=t.apply(r,n)}function m(t){var n=t-u;return void 0===u||n>=e||n<0||f&&t-l>=r}function _(){var t=h();if(m(t))return w(t);a=setTimeout(_,function(t){var n=e-(t-u);return f?y(n,r-(t-l)):n}(t))}function w(t){return a=void 0,d&&o?g(t):(o=i=void 0,s)}function S(){var t=h(),n=m(t);if(o=arguments,i=this,u=t,n){if(void 0===a)return function(t){return l=t,a=setTimeout(_,e),c?g(t):s}(u);if(f)return a=setTimeout(_,e),g(u)}return void 0===a&&(a=setTimeout(_,e)),s}return e=b(e)||0,v(n)&&(c=!!n.leading,r=(f="maxWait"in n)?p(b(n.maxWait)||0,e):r,d="trailing"in n?!!n.trailing:d),S.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=u=i=a=void 0},S.flush=function(){return void 0===a?s:w(h())},S}}).call(this,n(234))},304:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},305:function(t,e,n){"use strict";e.__esModule=!0;var o,i=(o=n(265))&&o.__esModule?o:{default:o};e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,i.default)(e))&&"function"!=typeof e?t:e}},306:function(t,e,n){t.exports={default:n(307),__esModule:!0}},307:function(t,e,n){n(308),n(312),t.exports=n(251).f("iterator")},308:function(t,e,n){"use strict";var o=n(309)(!0);n(266)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1})})},309:function(t,e,n){var o=n(69),i=n(115);t.exports=function(t){return function(e,n){var r,s,a=String(i(e)),u=o(n),l=a.length;return u<0||u>=l?t?"":void 0:(r=a.charCodeAt(u))<55296||r>56319||u+1===l||(s=a.charCodeAt(u+1))<56320||s>57343?t?a.charAt(u):r:t?a.slice(u,u+2):s-56320+(r-55296<<10)+65536}}},310:function(t,e,n){"use strict";var o=n(114),i=n(110),r=n(250),s={};n(108)(s,n(230)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=o(s,{next:i(1,n)}),r(t,e+" Iterator")}},311:function(t,e,n){var o=n(63),i=n(249),r=n(70)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),o(t,r)?t[r]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},312:function(t,e,n){n(313);for(var o=n(33),i=n(108),r=n(253),s=n(230)("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<a.length;u++){var l=a[u],c=o[l],f=c&&c.prototype;f&&!f[s]&&i(f,s,l),r[l]=r.Array}},313:function(t,e,n){"use strict";var o=n(314),i=n(315),r=n(253),s=n(65);t.exports=n(266)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),r.Arguments=r.Array,o("keys"),o("values"),o("entries")},314:function(t,e){t.exports=function(){}},315:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},316:function(t,e,n){t.exports={default:n(317),__esModule:!0}},317:function(t,e,n){n(261),n(318),n(319),n(320),t.exports=n(24).Symbol},318:function(t,e){},319:function(t,e,n){n(252)("asyncIterator")},320:function(t,e,n){n(252)("observable")},321:function(t,e,n){"use strict";e.__esModule=!0;var o=s(n(322)),i=s(n(326)),r=s(n(265));function s(t){return t&&t.__esModule?t:{default:t}}e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,r.default)(e)));t.prototype=(0,i.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(o.default?(0,o.default)(t,e):t.__proto__=e)}},322:function(t,e,n){t.exports={default:n(323),__esModule:!0}},323:function(t,e,n){n(324),t.exports=n(24).Object.setPrototypeOf},324:function(t,e,n){var o=n(62);o(o.S,"Object",{setPrototypeOf:n(325).set})},325:function(t,e,n){var o=n(44),i=n(45),r=function(t,e){if(i(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{(o=n(120)(Function.call,n(264).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return r(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:r}},326:function(t,e,n){t.exports={default:n(119),__esModule:!0}},327:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}},328:function(t,e,n){"use strict";e.__esModule=!0;var o,i=(o=n(329))&&o.__esModule?o:{default:o};e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}},329:function(t,e,n){t.exports={default:n(259),__esModule:!0}}}]);
//# sourceMappingURL=2-2827b0149574457e933d.js.map