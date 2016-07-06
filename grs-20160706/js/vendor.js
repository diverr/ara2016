/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});
;

/* HTML5 Placeholder jQuery Plugin - v2.1.2
 * Copyright (c)2015 Mathias Bynens
 * 2015-06-09
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof module&&module.exports?require("jquery"):jQuery)}(function(a){function b(b){var c={},d=/^jQuery\d+$/;return a.each(b.attributes,function(a,b){b.specified&&!d.test(b.name)&&(c[b.name]=b.value)}),c}function c(b,c){var d=this,f=a(d);if(d.value==f.attr("placeholder")&&f.hasClass(m.customClass))if(f.data("placeholder-password")){if(f=f.hide().nextAll('input[type="password"]:first').show().attr("id",f.removeAttr("id").data("placeholder-id")),b===!0)return f[0].value=c;f.focus()}else d.value="",f.removeClass(m.customClass),d==e()&&d.select()}function d(){var d,e=this,f=a(e),g=this.id;if(""===e.value){if("password"===e.type){if(!f.data("placeholder-textinput")){try{d=f.clone().prop({type:"text"})}catch(h){d=a("<input>").attr(a.extend(b(this),{type:"text"}))}d.removeAttr("name").data({"placeholder-password":f,"placeholder-id":g}).bind("focus.placeholder",c),f.data({"placeholder-textinput":d,"placeholder-id":g}).before(d)}f=f.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id",g).show()}f.addClass(m.customClass),f[0].value=f.attr("placeholder")}else f.removeClass(m.customClass)}function e(){try{return document.activeElement}catch(a){}}var f,g,h="[object OperaMini]"==Object.prototype.toString.call(window.operamini),i="placeholder"in document.createElement("input")&&!h,j="placeholder"in document.createElement("textarea")&&!h,k=a.valHooks,l=a.propHooks;if(i&&j)g=a.fn.placeholder=function(){return this},g.input=g.textarea=!0;else{var m={};g=a.fn.placeholder=function(b){var e={customClass:"placeholder"};m=a.extend({},e,b);var f=this;return f.filter((i?"textarea":":input")+"[placeholder]").not("."+m.customClass).bind({"focus.placeholder":c,"blur.placeholder":d}).data("placeholder-enabled",!0).trigger("blur.placeholder"),f},g.input=i,g.textarea=j,f={get:function(b){var c=a(b),d=c.data("placeholder-password");return d?d[0].value:c.data("placeholder-enabled")&&c.hasClass(m.customClass)?"":b.value},set:function(b,f){var g=a(b),h=g.data("placeholder-password");return h?h[0].value=f:g.data("placeholder-enabled")?(""===f?(b.value=f,b!=e()&&d.call(b)):g.hasClass(m.customClass)?c.call(b,!0,f)||(b.value=f):b.value=f,g):b.value=f}},i||(k.input=f,l.value=f),j||(k.textarea=f,l.value=f),a(function(){a(document).delegate("form","submit.placeholder",function(){var b=a("."+m.customClass,this).each(c);setTimeout(function(){b.each(d)},10)})}),a(window).bind("beforeunload.placeholder",function(){a("."+m.customClass).each(function(){this.value=""})})}});;

/*! device.js 0.2.7 */
(function(){var a,b,c,d,e,f,g,h,i,j;b=window.device,a={},window.device=a,d=window.document.documentElement,j=window.navigator.userAgent.toLowerCase(),a.ios=function(){return a.iphone()||a.ipod()||a.ipad()},a.iphone=function(){return!a.windows()&&e("iphone")},a.ipod=function(){return e("ipod")},a.ipad=function(){return e("ipad")},a.android=function(){return!a.windows()&&e("android")},a.androidPhone=function(){return a.android()&&e("mobile")},a.androidTablet=function(){return a.android()&&!e("mobile")},a.blackberry=function(){return e("blackberry")||e("bb10")||e("rim")},a.blackberryPhone=function(){return a.blackberry()&&!e("tablet")},a.blackberryTablet=function(){return a.blackberry()&&e("tablet")},a.windows=function(){return e("windows")},a.windowsPhone=function(){return a.windows()&&e("phone")},a.windowsTablet=function(){return a.windows()&&e("touch")&&!a.windowsPhone()},a.fxos=function(){return(e("(mobile;")||e("(tablet;"))&&e("; rv:")},a.fxosPhone=function(){return a.fxos()&&e("mobile")},a.fxosTablet=function(){return a.fxos()&&e("tablet")},a.meego=function(){return e("meego")},a.cordova=function(){return window.cordova&&"file:"===location.protocol},a.nodeWebkit=function(){return"object"==typeof window.process},a.mobile=function(){return a.androidPhone()||a.iphone()||a.ipod()||a.windowsPhone()||a.blackberryPhone()||a.fxosPhone()||a.meego()},a.tablet=function(){return a.ipad()||a.androidTablet()||a.blackberryTablet()||a.windowsTablet()||a.fxosTablet()},a.desktop=function(){return!a.tablet()&&!a.mobile()},a.television=function(){var a;for(television=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","roku","pov_tv","hbbtv","ce-html"],a=0;a<television.length;){if(e(television[a]))return!0;a++}return!1},a.portrait=function(){return window.innerHeight/window.innerWidth>1},a.landscape=function(){return window.innerHeight/window.innerWidth<1},a.noConflict=function(){return window.device=b,this},e=function(a){return-1!==j.indexOf(a)},g=function(a){var b;return b=new RegExp(a,"i"),d.className.match(b)},c=function(a){var b=null;g(a)||(b=d.className.replace(/^\s+|\s+$/g,""),d.className=b+" "+a)},i=function(a){g(a)&&(d.className=d.className.replace(" "+a,""))},a.ios()?a.ipad()?c("ios ipad tablet"):a.iphone()?c("ios iphone mobile"):a.ipod()&&c("ios ipod mobile"):a.android()?c(a.androidTablet()?"android tablet":"android mobile"):a.blackberry()?c(a.blackberryTablet()?"blackberry tablet":"blackberry mobile"):a.windows()?c(a.windowsTablet()?"windows tablet":a.windowsPhone()?"windows mobile":"desktop"):a.fxos()?c(a.fxosTablet()?"fxos tablet":"fxos mobile"):a.meego()?c("meego mobile"):a.nodeWebkit()?c("node-webkit"):a.television()?c("television"):a.desktop()&&c("desktop"),a.cordova()&&c("cordova"),f=function(){a.landscape()?(i("portrait"),c("landscape")):(i("landscape"),c("portrait"))},h=Object.prototype.hasOwnProperty.call(window,"onorientationchange")?"orientationchange":"resize",window.addEventListener?window.addEventListener(h,f,!1):window.attachEvent?window.attachEvent(h,f):window[h]=f,f(),"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return a}):"undefined"!=typeof module&&module.exports?module.exports=a:window.device=a}).call(this);;

/*
 * Datepicker for Bootstrap v1.4.0 (https://github.com/eternicode/bootstrap-datepicker)
 *
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */
!function(a,b){function c(){return new Date(Date.UTC.apply(Date,arguments))}function d(){var a=new Date;return c(a.getFullYear(),a.getMonth(),a.getDate())}function e(a,b){return a.getUTCFullYear()===b.getUTCFullYear()&&a.getUTCMonth()===b.getUTCMonth()&&a.getUTCDate()===b.getUTCDate()}function f(a){return function(){return this[a].apply(this,arguments)}}function g(b,c){function d(a,b){return b.toLowerCase()}var e,f=a(b).data(),g={},h=new RegExp("^"+c.toLowerCase()+"([A-Z])");c=new RegExp("^"+c.toLowerCase());for(var i in f)c.test(i)&&(e=i.replace(h,d),g[e]=f[i]);return g}function h(b){var c={};if(p[b]||(b=b.split("-")[0],p[b])){var d=p[b];return a.each(o,function(a,b){b in d&&(c[b]=d[b])}),c}}var i=function(){var b={get:function(a){return this.slice(a)[0]},contains:function(a){for(var b=a&&a.valueOf(),c=0,d=this.length;d>c;c++)if(this[c].valueOf()===b)return c;return-1},remove:function(a){this.splice(a,1)},replace:function(b){b&&(a.isArray(b)||(b=[b]),this.clear(),this.push.apply(this,b))},clear:function(){this.length=0},copy:function(){var a=new i;return a.replace(this),a}};return function(){var c=[];return c.push.apply(c,arguments),a.extend(c,b),c}}(),j=function(b,c){this._process_options(c),this.dates=new i,this.viewDate=this.o.defaultViewDate,this.focusDate=null,this.element=a(b),this.isInline=!1,this.isInput=this.element.is("input"),this.component=this.element.hasClass("date")?this.element.find(".add-on, .input-group-addon, .btn"):!1,this.hasInput=this.component&&this.element.find("input").length,this.component&&0===this.component.length&&(this.component=!1),this.picker=a(q.template),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&this.picker.addClass("datepicker-rtl"),this.viewMode=this.o.startView,this.o.calendarWeeks&&this.picker.find("tfoot .today, tfoot .clear").attr("colspan",function(a,b){return parseInt(b)+1}),this._allow_update=!1,this.setStartDate(this._o.startDate),this.setEndDate(this._o.endDate),this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled),this.setDatesDisabled(this.o.datesDisabled),this.fillDow(),this.fillMonths(),this._allow_update=!0,this.update(),this.showMode(),this.isInline&&this.show()};j.prototype={constructor:j,_process_options:function(e){this._o=a.extend({},this._o,e);var f=this.o=a.extend({},this._o),g=f.language;switch(p[g]||(g=g.split("-")[0],p[g]||(g=n.language)),f.language=g,f.startView){case 2:case"decade":f.startView=2;break;case 1:case"year":f.startView=1;break;default:f.startView=0}switch(f.minViewMode){case 1:case"months":f.minViewMode=1;break;case 2:case"years":f.minViewMode=2;break;default:f.minViewMode=0}f.startView=Math.max(f.startView,f.minViewMode),f.multidate!==!0&&(f.multidate=Number(f.multidate)||!1,f.multidate!==!1&&(f.multidate=Math.max(0,f.multidate))),f.multidateSeparator=String(f.multidateSeparator),f.weekStart%=7,f.weekEnd=(f.weekStart+6)%7;var h=q.parseFormat(f.format);if(f.startDate!==-1/0&&(f.startDate=f.startDate?f.startDate instanceof Date?this._local_to_utc(this._zero_time(f.startDate)):q.parseDate(f.startDate,h,f.language):-1/0),1/0!==f.endDate&&(f.endDate=f.endDate?f.endDate instanceof Date?this._local_to_utc(this._zero_time(f.endDate)):q.parseDate(f.endDate,h,f.language):1/0),f.daysOfWeekDisabled=f.daysOfWeekDisabled||[],a.isArray(f.daysOfWeekDisabled)||(f.daysOfWeekDisabled=f.daysOfWeekDisabled.split(/[,\s]*/)),f.daysOfWeekDisabled=a.map(f.daysOfWeekDisabled,function(a){return parseInt(a,10)}),f.datesDisabled=f.datesDisabled||[],!a.isArray(f.datesDisabled)){var i=[];i.push(q.parseDate(f.datesDisabled,h,f.language)),f.datesDisabled=i}f.datesDisabled=a.map(f.datesDisabled,function(a){return q.parseDate(a,h,f.language)});var j=String(f.orientation).toLowerCase().split(/\s+/g),k=f.orientation.toLowerCase();if(j=a.grep(j,function(a){return/^auto|left|right|top|bottom$/.test(a)}),f.orientation={x:"auto",y:"auto"},k&&"auto"!==k)if(1===j.length)switch(j[0]){case"top":case"bottom":f.orientation.y=j[0];break;case"left":case"right":f.orientation.x=j[0]}else k=a.grep(j,function(a){return/^left|right$/.test(a)}),f.orientation.x=k[0]||"auto",k=a.grep(j,function(a){return/^top|bottom$/.test(a)}),f.orientation.y=k[0]||"auto";else;if(f.defaultViewDate){var l=f.defaultViewDate.year||(new Date).getFullYear(),m=f.defaultViewDate.month||0,o=f.defaultViewDate.day||1;f.defaultViewDate=c(l,m,o)}else f.defaultViewDate=d();f.showOnFocus=f.showOnFocus!==b?f.showOnFocus:!0},_events:[],_secondaryEvents:[],_applyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(d=b,e=a[f][1]):3===a[f].length&&(d=a[f][1],e=a[f][2]),c.on(e,d)},_unapplyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(e=b,d=a[f][1]):3===a[f].length&&(e=a[f][1],d=a[f][2]),c.off(d,e)},_buildEvents:function(){var b={keyup:a.proxy(function(b){-1===a.inArray(b.keyCode,[27,37,39,38,40,32,13,9])&&this.update()},this),keydown:a.proxy(this.keydown,this)};this.o.showOnFocus===!0&&(b.focus=a.proxy(this.show,this)),this.isInput?this._events=[[this.element,b]]:this.component&&this.hasInput?this._events=[[this.element.find("input"),b],[this.component,{click:a.proxy(this.show,this)}]]:this.element.is("div")?this.isInline=!0:this._events=[[this.element,{click:a.proxy(this.show,this)}]],this._events.push([this.element,"*",{blur:a.proxy(function(a){this._focused_from=a.target},this)}],[this.element,{blur:a.proxy(function(a){this._focused_from=a.target},this)}]),this._secondaryEvents=[[this.picker,{click:a.proxy(this.click,this)}],[a(window),{resize:a.proxy(this.place,this)}],[a(document),{"mousedown touchstart":a.proxy(function(a){this.element.is(a.target)||this.element.find(a.target).length||this.picker.is(a.target)||this.picker.find(a.target).length||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(b,c){var d=c||this.dates.get(-1),e=this._utc_to_local(d);this.element.trigger({type:b,date:e,dates:a.map(this.dates,this._utc_to_local),format:a.proxy(function(a,b){0===arguments.length?(a=this.dates.length-1,b=this.o.format):"string"==typeof a&&(b=a,a=this.dates.length-1),b=b||this.o.format;var c=this.dates.get(a);return q.formatDate(c,b,this.o.language)},this)})},show:function(){return this.element.attr("readonly")&&this.o.enableOnReadonly===!1?void 0:(this.isInline||this.picker.appendTo(this.o.container),this.place(),this.picker.show(),this._attachSecondaryEvents(),this._trigger("show"),(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&this.o.disableTouchKeyboard&&a(this.element).blur(),this)},hide:function(){return this.isInline?this:this.picker.is(":visible")?(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.viewMode=this.o.startView,this.showMode(),this.o.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())&&this.setValue(),this._trigger("hide"),this):this},remove:function(){return this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date,this},_utc_to_local:function(a){return a&&new Date(a.getTime()+6e4*a.getTimezoneOffset())},_local_to_utc:function(a){return a&&new Date(a.getTime()-6e4*a.getTimezoneOffset())},_zero_time:function(a){return a&&new Date(a.getFullYear(),a.getMonth(),a.getDate())},_zero_utc_time:function(a){return a&&new Date(Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()))},getDates:function(){return a.map(this.dates,this._utc_to_local)},getUTCDates:function(){return a.map(this.dates,function(a){return new Date(a)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){var a=this.dates.get(-1);return"undefined"!=typeof a?new Date(a):null},clearDates:function(){var a;this.isInput?a=this.element:this.component&&(a=this.element.find("input")),a&&a.val("").change(),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()},setDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,b),this._trigger("changeDate"),this.setValue(),this},setUTCDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,a.map(b,this._utc_to_local)),this._trigger("changeDate"),this.setValue(),this},setDate:f("setDates"),setUTCDate:f("setUTCDates"),setValue:function(){var a=this.getFormattedDate();return this.isInput?this.element.val(a).change():this.component&&this.element.find("input").val(a).change(),this},getFormattedDate:function(c){c===b&&(c=this.o.format);var d=this.o.language;return a.map(this.dates,function(a){return q.formatDate(a,c,d)}).join(this.o.multidateSeparator)},setStartDate:function(a){return this._process_options({startDate:a}),this.update(),this.updateNavArrows(),this},setEndDate:function(a){return this._process_options({endDate:a}),this.update(),this.updateNavArrows(),this},setDaysOfWeekDisabled:function(a){return this._process_options({daysOfWeekDisabled:a}),this.update(),this.updateNavArrows(),this},setDatesDisabled:function(a){this._process_options({datesDisabled:a}),this.update(),this.updateNavArrows()},place:function(){if(this.isInline)return this;var b=this.picker.outerWidth(),c=this.picker.outerHeight(),d=10,e=a(this.o.container).width(),f=a(this.o.container).height(),g=a(this.o.container).scrollTop(),h=a(this.o.container).offset(),i=[];this.element.parents().each(function(){var b=a(this).css("z-index");"auto"!==b&&0!==b&&i.push(parseInt(b))});var j=Math.max.apply(Math,i)+10,k=this.component?this.component.parent().offset():this.element.offset(),l=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),m=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),n=k.left-h.left,o=k.top-h.top;this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(n-=b-m)):k.left<0?(this.picker.addClass("datepicker-orient-left"),n-=k.left-d):n+b>e?(this.picker.addClass("datepicker-orient-right"),n=k.left+m-b):this.picker.addClass("datepicker-orient-left");var p,q,r=this.o.orientation.y;if("auto"===r&&(p=-g+o-c,q=g+f-(o+l+c),r=Math.max(p,q)===q?"top":"bottom"),this.picker.addClass("datepicker-orient-"+r),"top"===r?o+=l:o-=c+parseInt(this.picker.css("padding-top")),this.o.rtl){var s=e-(n+m);this.picker.css({top:o,right:s,zIndex:j})}else this.picker.css({top:o,left:n,zIndex:j});return this},_allow_update:!0,update:function(){if(!this._allow_update)return this;var b=this.dates.copy(),c=[],d=!1;return arguments.length?(a.each(arguments,a.proxy(function(a,b){b instanceof Date&&(b=this._local_to_utc(b)),c.push(b)},this)),d=!0):(c=this.isInput?this.element.val():this.element.data("date")||this.element.find("input").val(),c=c&&this.o.multidate?c.split(this.o.multidateSeparator):[c],delete this.element.data().date),c=a.map(c,a.proxy(function(a){return q.parseDate(a,this.o.format,this.o.language)},this)),c=a.grep(c,a.proxy(function(a){return a<this.o.startDate||a>this.o.endDate||!a},this),!0),this.dates.replace(c),this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate&&(this.viewDate=new Date(this.o.endDate)),d?this.setValue():c.length&&String(b)!==String(this.dates)&&this._trigger("changeDate"),!this.dates.length&&b.length&&this._trigger("clearDate"),this.fill(),this},fillDow:function(){var a=this.o.weekStart,b="<tr>";if(this.o.calendarWeeks){this.picker.find(".datepicker-days thead tr:first-child .datepicker-switch").attr("colspan",function(a,b){return parseInt(b)+1});var c='<th class="cw">&#160;</th>';b+=c}for(;a<this.o.weekStart+7;)b+='<th class="dow">'+p[this.o.language].daysMin[a++%7]+"</th>";b+="</tr>",this.picker.find(".datepicker-days thead").append(b)},fillMonths:function(){for(var a="",b=0;12>b;)a+='<span class="month">'+p[this.o.language].monthsShort[b++]+"</span>";this.picker.find(".datepicker-months td").html(a)},setRange:function(b){b&&b.length?this.range=a.map(b,function(a){return a.valueOf()}):delete this.range,this.fill()},getClassNames:function(b){var c=[],d=this.viewDate.getUTCFullYear(),f=this.viewDate.getUTCMonth(),g=new Date;return b.getUTCFullYear()<d||b.getUTCFullYear()===d&&b.getUTCMonth()<f?c.push("old"):(b.getUTCFullYear()>d||b.getUTCFullYear()===d&&b.getUTCMonth()>f)&&c.push("new"),this.focusDate&&b.valueOf()===this.focusDate.valueOf()&&c.push("focused"),this.o.todayHighlight&&b.getUTCFullYear()===g.getFullYear()&&b.getUTCMonth()===g.getMonth()&&b.getUTCDate()===g.getDate()&&c.push("today"),-1!==this.dates.contains(b)&&c.push("active"),(b.valueOf()<this.o.startDate||b.valueOf()>this.o.endDate||-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekDisabled))&&c.push("disabled"),this.o.datesDisabled.length>0&&a.grep(this.o.datesDisabled,function(a){return e(b,a)}).length>0&&c.push("disabled","disabled-date"),this.range&&(b>this.range[0]&&b<this.range[this.range.length-1]&&c.push("range"),-1!==a.inArray(b.valueOf(),this.range)&&c.push("selected")),c},fill:function(){var d,e=new Date(this.viewDate),f=e.getUTCFullYear(),g=e.getUTCMonth(),h=this.o.startDate!==-1/0?this.o.startDate.getUTCFullYear():-1/0,i=this.o.startDate!==-1/0?this.o.startDate.getUTCMonth():-1/0,j=1/0!==this.o.endDate?this.o.endDate.getUTCFullYear():1/0,k=1/0!==this.o.endDate?this.o.endDate.getUTCMonth():1/0,l=p[this.o.language].today||p.en.today||"",m=p[this.o.language].clear||p.en.clear||"";if(!isNaN(f)&&!isNaN(g)){this.picker.find(".datepicker-days thead .datepicker-switch").text(p[this.o.language].months[g]+" "+f),this.picker.find("tfoot .today").text(l).toggle(this.o.todayBtn!==!1),this.picker.find("tfoot .clear").text(m).toggle(this.o.clearBtn!==!1),this.updateNavArrows(),this.fillMonths();var n=c(f,g-1,28),o=q.getDaysInMonth(n.getUTCFullYear(),n.getUTCMonth());n.setUTCDate(o),n.setUTCDate(o-(n.getUTCDay()-this.o.weekStart+7)%7);var r=new Date(n);r.setUTCDate(r.getUTCDate()+42),r=r.valueOf();for(var s,t=[];n.valueOf()<r;){if(n.getUTCDay()===this.o.weekStart&&(t.push("<tr>"),this.o.calendarWeeks)){var u=new Date(+n+(this.o.weekStart-n.getUTCDay()-7)%7*864e5),v=new Date(Number(u)+(11-u.getUTCDay())%7*864e5),w=new Date(Number(w=c(v.getUTCFullYear(),0,1))+(11-w.getUTCDay())%7*864e5),x=(v-w)/864e5/7+1;t.push('<td class="cw">'+x+"</td>")}if(s=this.getClassNames(n),s.push("day"),this.o.beforeShowDay!==a.noop){var y=this.o.beforeShowDay(this._utc_to_local(n));y===b?y={}:"boolean"==typeof y?y={enabled:y}:"string"==typeof y&&(y={classes:y}),y.enabled===!1&&s.push("disabled"),y.classes&&(s=s.concat(y.classes.split(/\s+/))),y.tooltip&&(d=y.tooltip)}s=a.unique(s),t.push('<td class="'+s.join(" ")+'"'+(d?' title="'+d+'"':"")+">"+n.getUTCDate()+"</td>"),d=null,n.getUTCDay()===this.o.weekEnd&&t.push("</tr>"),n.setUTCDate(n.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(t.join(""));var z=this.picker.find(".datepicker-months").find("th:eq(1)").text(f).end().find("span").removeClass("active");if(a.each(this.dates,function(a,b){b.getUTCFullYear()===f&&z.eq(b.getUTCMonth()).addClass("active")}),(h>f||f>j)&&z.addClass("disabled"),f===h&&z.slice(0,i).addClass("disabled"),f===j&&z.slice(k+1).addClass("disabled"),this.o.beforeShowMonth!==a.noop){var A=this;a.each(z,function(b,c){if(!a(c).hasClass("disabled")){var d=new Date(f,b,1),e=A.o.beforeShowMonth(d);e===!1&&a(c).addClass("disabled")}})}t="",f=10*parseInt(f/10,10);var B=this.picker.find(".datepicker-years").find("th:eq(1)").text(f+"-"+(f+9)).end().find("td");f-=1;for(var C,D=a.map(this.dates,function(a){return a.getUTCFullYear()}),E=-1;11>E;E++)C=["year"],-1===E?C.push("old"):10===E&&C.push("new"),-1!==a.inArray(f,D)&&C.push("active"),(h>f||f>j)&&C.push("disabled"),t+='<span class="'+C.join(" ")+'">'+f+"</span>",f+=1;B.html(t)}},updateNavArrows:function(){if(this._allow_update){var a=new Date(this.viewDate),b=a.getUTCFullYear(),c=a.getUTCMonth();switch(this.viewMode){case 0:this.picker.find(".prev").css(this.o.startDate!==-1/0&&b<=this.o.startDate.getUTCFullYear()&&c<=this.o.startDate.getUTCMonth()?{visibility:"hidden"}:{visibility:"visible"}),this.picker.find(".next").css(1/0!==this.o.endDate&&b>=this.o.endDate.getUTCFullYear()&&c>=this.o.endDate.getUTCMonth()?{visibility:"hidden"}:{visibility:"visible"});break;case 1:case 2:this.picker.find(".prev").css(this.o.startDate!==-1/0&&b<=this.o.startDate.getUTCFullYear()?{visibility:"hidden"}:{visibility:"visible"}),this.picker.find(".next").css(1/0!==this.o.endDate&&b>=this.o.endDate.getUTCFullYear()?{visibility:"hidden"}:{visibility:"visible"})}}},click:function(b){b.preventDefault();var d,e,f,g=a(b.target).closest("span, td, th");if(1===g.length)switch(g[0].nodeName.toLowerCase()){case"th":switch(g[0].className){case"datepicker-switch":this.showMode(1);break;case"prev":case"next":var h=q.modes[this.viewMode].navStep*("prev"===g[0].className?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,h),this._trigger("changeMonth",this.viewDate);break;case 1:case 2:this.viewDate=this.moveYear(this.viewDate,h),1===this.viewMode&&this._trigger("changeYear",this.viewDate)}this.fill();break;case"today":var i=new Date;i=c(i.getFullYear(),i.getMonth(),i.getDate(),0,0,0),this.showMode(-2);var j="linked"===this.o.todayBtn?null:"view";this._setDate(i,j);break;case"clear":this.clearDates()}break;case"span":g.hasClass("disabled")||(this.viewDate.setUTCDate(1),g.hasClass("month")?(f=1,e=g.parent().find("span").index(g),d=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(e),this._trigger("changeMonth",this.viewDate),1===this.o.minViewMode&&this._setDate(c(d,e,f))):(f=1,e=0,d=parseInt(g.text(),10)||0,this.viewDate.setUTCFullYear(d),this._trigger("changeYear",this.viewDate),2===this.o.minViewMode&&this._setDate(c(d,e,f))),this.showMode(-1),this.fill());break;case"td":g.hasClass("day")&&!g.hasClass("disabled")&&(f=parseInt(g.text(),10)||1,d=this.viewDate.getUTCFullYear(),e=this.viewDate.getUTCMonth(),g.hasClass("old")?0===e?(e=11,d-=1):e-=1:g.hasClass("new")&&(11===e?(e=0,d+=1):e+=1),this._setDate(c(d,e,f)))}this.picker.is(":visible")&&this._focused_from&&a(this._focused_from).focus(),delete this._focused_from},_toggle_multidate:function(a){var b=this.dates.contains(a);if(a||this.dates.clear(),-1!==b?(this.o.multidate===!0||this.o.multidate>1||this.o.toggleActive)&&this.dates.remove(b):this.o.multidate===!1?(this.dates.clear(),this.dates.push(a)):this.dates.push(a),"number"==typeof this.o.multidate)for(;this.dates.length>this.o.multidate;)this.dates.remove(0)},_setDate:function(a,b){b&&"date"!==b||this._toggle_multidate(a&&new Date(a)),b&&"view"!==b||(this.viewDate=a&&new Date(a)),this.fill(),this.setValue(),b&&"view"===b||this._trigger("changeDate");var c;this.isInput?c=this.element:this.component&&(c=this.element.find("input")),c&&c.change(),!this.o.autoclose||b&&"date"!==b||this.hide()},moveMonth:function(a,c){if(!a)return b;if(!c)return a;var d,e,f=new Date(a.valueOf()),g=f.getUTCDate(),h=f.getUTCMonth(),i=Math.abs(c);if(c=c>0?1:-1,1===i)e=-1===c?function(){return f.getUTCMonth()===h}:function(){return f.getUTCMonth()!==d},d=h+c,f.setUTCMonth(d),(0>d||d>11)&&(d=(d+12)%12);else{for(var j=0;i>j;j++)f=this.moveMonth(f,c);d=f.getUTCMonth(),f.setUTCDate(g),e=function(){return d!==f.getUTCMonth()}}for(;e();)f.setUTCDate(--g),f.setUTCMonth(d);return f},moveYear:function(a,b){return this.moveMonth(a,12*b)},dateWithinRange:function(a){return a>=this.o.startDate&&a<=this.o.endDate},keydown:function(a){if(!this.picker.is(":visible"))return void(27===a.keyCode&&this.show());var b,c,e,f=!1,g=this.focusDate||this.viewDate;switch(a.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide(),a.preventDefault();break;case 37:case 39:if(!this.o.keyboardNavigation)break;b=37===a.keyCode?-1:1,a.ctrlKey?(c=this.moveYear(this.dates.get(-1)||d(),b),e=this.moveYear(g,b),this._trigger("changeYear",this.viewDate)):a.shiftKey?(c=this.moveMonth(this.dates.get(-1)||d(),b),e=this.moveMonth(g,b),this._trigger("changeMonth",this.viewDate)):(c=new Date(this.dates.get(-1)||d()),c.setUTCDate(c.getUTCDate()+b),e=new Date(g),e.setUTCDate(g.getUTCDate()+b)),this.dateWithinRange(e)&&(this.focusDate=this.viewDate=e,this.setValue(),this.fill(),a.preventDefault());break;case 38:case 40:if(!this.o.keyboardNavigation)break;b=38===a.keyCode?-1:1,a.ctrlKey?(c=this.moveYear(this.dates.get(-1)||d(),b),e=this.moveYear(g,b),this._trigger("changeYear",this.viewDate)):a.shiftKey?(c=this.moveMonth(this.dates.get(-1)||d(),b),e=this.moveMonth(g,b),this._trigger("changeMonth",this.viewDate)):(c=new Date(this.dates.get(-1)||d()),c.setUTCDate(c.getUTCDate()+7*b),e=new Date(g),e.setUTCDate(g.getUTCDate()+7*b)),this.dateWithinRange(e)&&(this.focusDate=this.viewDate=e,this.setValue(),this.fill(),a.preventDefault());break;case 32:break;case 13:g=this.focusDate||this.dates.get(-1)||this.viewDate,this.o.keyboardNavigation&&(this._toggle_multidate(g),f=!0),this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.setValue(),this.fill(),this.picker.is(":visible")&&(a.preventDefault(),"function"==typeof a.stopPropagation?a.stopPropagation():a.cancelBubble=!0,this.o.autoclose&&this.hide());break;case 9:this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill(),this.hide()}if(f){this._trigger(this.dates.length?"changeDate":"clearDate");var h;this.isInput?h=this.element:this.component&&(h=this.element.find("input")),h&&h.change()}},showMode:function(a){a&&(this.viewMode=Math.max(this.o.minViewMode,Math.min(2,this.viewMode+a))),this.picker.children("div").hide().filter(".datepicker-"+q.modes[this.viewMode].clsName).css("display","block"),this.updateNavArrows()}};var k=function(b,c){this.element=a(b),this.inputs=a.map(c.inputs,function(a){return a.jquery?a[0]:a}),delete c.inputs,m.call(a(this.inputs),c).bind("changeDate",a.proxy(this.dateUpdated,this)),this.pickers=a.map(this.inputs,function(b){return a(b).data("datepicker")}),this.updateDates()};k.prototype={updateDates:function(){this.dates=a.map(this.pickers,function(a){return a.getUTCDate()}),this.updateRanges()},updateRanges:function(){var b=a.map(this.dates,function(a){return a.valueOf()});a.each(this.pickers,function(a,c){c.setRange(b)})},dateUpdated:function(b){if(!this.updating){this.updating=!0;var c=a(b.target).data("datepicker"),d=c.getUTCDate(),e=a.inArray(b.target,this.inputs),f=e-1,g=e+1,h=this.inputs.length;if(-1!==e){if(a.each(this.pickers,function(a,b){b.getUTCDate()||b.setUTCDate(d)}),d<this.dates[f])for(;f>=0&&d<this.dates[f];)this.pickers[f--].setUTCDate(d);else if(d>this.dates[g])for(;h>g&&d>this.dates[g];)this.pickers[g++].setUTCDate(d);this.updateDates(),delete this.updating}}},remove:function(){a.map(this.pickers,function(a){a.remove()}),delete this.element.data().datepicker}};var l=a.fn.datepicker,m=function(c){var d=Array.apply(null,arguments);d.shift();var e;return this.each(function(){var f=a(this),i=f.data("datepicker"),l="object"==typeof c&&c;if(!i){var m=g(this,"date"),o=a.extend({},n,m,l),p=h(o.language),q=a.extend({},n,p,m,l);if(f.hasClass("input-daterange")||q.inputs){var r={inputs:q.inputs||f.find("input").toArray()};f.data("datepicker",i=new k(this,a.extend(q,r)))}else f.data("datepicker",i=new j(this,q))}return"string"==typeof c&&"function"==typeof i[c]&&(e=i[c].apply(i,d),e!==b)?!1:void 0}),e!==b?e:this};a.fn.datepicker=m;var n=a.fn.datepicker.defaults={autoclose:!1,beforeShowDay:a.noop,beforeShowMonth:a.noop,calendarWeeks:!1,clearBtn:!1,toggleActive:!1,daysOfWeekDisabled:[],datesDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keyboardNavigation:!0,language:"en",minViewMode:0,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-1/0,startView:0,todayBtn:!1,todayHighlight:!1,weekStart:0,disableTouchKeyboard:!1,enableOnReadonly:!0,container:"body"},o=a.fn.datepicker.locale_opts=["format","rtl","weekStart"];a.fn.datepicker.Constructor=j;var p=a.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear"}},q={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(a){return a%4===0&&a%100!==0||a%400===0},getDaysInMonth:function(a,b){return[31,q.isLeapYear(a)?29:28,31,30,31,30,31,31,30,31,30,31][b]},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,parseFormat:function(a){var b=a.replace(this.validParts,"\x00").split("\x00"),c=a.match(this.validParts);if(!b||!b.length||!c||0===c.length)throw new Error("Invalid date format.");return{separators:b,parts:c}},parseDate:function(d,e,f){function g(){var a=this.slice(0,m[k].length),b=m[k].slice(0,a.length);return a.toLowerCase()===b.toLowerCase()}if(!d)return b;if(d instanceof Date)return d;"string"==typeof e&&(e=q.parseFormat(e));var h,i,k,l=/([\-+]\d+)([dmwy])/,m=d.match(/([\-+]\d+)([dmwy])/g);if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(d)){for(d=new Date,k=0;k<m.length;k++)switch(h=l.exec(m[k]),i=parseInt(h[1]),h[2]){case"d":d.setUTCDate(d.getUTCDate()+i);break;case"m":d=j.prototype.moveMonth.call(j.prototype,d,i);break;case"w":d.setUTCDate(d.getUTCDate()+7*i);break;case"y":d=j.prototype.moveYear.call(j.prototype,d,i)}return c(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate(),0,0,0)}m=d&&d.match(this.nonpunctuation)||[],d=new Date;var n,o,r={},s=["yyyy","yy","M","MM","m","mm","d","dd"],t={yyyy:function(a,b){return a.setUTCFullYear(b)},yy:function(a,b){return a.setUTCFullYear(2e3+b)},m:function(a,b){if(isNaN(a))return a;for(b-=1;0>b;)b+=12;for(b%=12,a.setUTCMonth(b);a.getUTCMonth()!==b;)a.setUTCDate(a.getUTCDate()-1);return a},d:function(a,b){return a.setUTCDate(b)}};t.M=t.MM=t.mm=t.m,t.dd=t.d,d=c(d.getFullYear(),d.getMonth(),d.getDate(),0,0,0);var u=e.parts.slice();if(m.length!==u.length&&(u=a(u).filter(function(b,c){return-1!==a.inArray(c,s)}).toArray()),m.length===u.length){var v;for(k=0,v=u.length;v>k;k++){if(n=parseInt(m[k],10),h=u[k],isNaN(n))switch(h){case"MM":o=a(p[f].months).filter(g),n=a.inArray(o[0],p[f].months)+1;break;case"M":o=a(p[f].monthsShort).filter(g),n=a.inArray(o[0],p[f].monthsShort)+1}r[h]=n}var w,x;for(k=0;k<s.length;k++)x=s[k],x in r&&!isNaN(r[x])&&(w=new Date(d),t[x](w,r[x]),isNaN(w)||(d=w))}return d},formatDate:function(b,c,d){if(!b)return"";"string"==typeof c&&(c=q.parseFormat(c));var e={d:b.getUTCDate(),D:p[d].daysShort[b.getUTCDay()],DD:p[d].days[b.getUTCDay()],m:b.getUTCMonth()+1,M:p[d].monthsShort[b.getUTCMonth()],MM:p[d].months[b.getUTCMonth()],yy:b.getUTCFullYear().toString().substring(2),yyyy:b.getUTCFullYear()};e.dd=(e.d<10?"0":"")+e.d,e.mm=(e.m<10?"0":"")+e.m,b=[];for(var f=a.extend([],c.separators),g=0,h=c.parts.length;h>=g;g++)f.length&&b.push(f.shift()),b.push(e[c.parts[g]]);return b.join("")},headTemplate:'<thead><tr><th class="prev">&#171;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&#187;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};q.template='<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">'+q.headTemplate+"<tbody></tbody>"+q.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+q.headTemplate+q.contTemplate+q.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+q.headTemplate+q.contTemplate+q.footTemplate+"</table></div></div>",a.fn.datepicker.DPGlobal=q,a.fn.datepicker.noConflict=function(){return a.fn.datepicker=l,this},a.fn.datepicker.version="1.4.0",a(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(b){var c=a(this);c.data("datepicker")||(b.preventDefault(),m.call(c,"show"))}),a(function(){m.call(a('[data-provide="datepicker-inline"]'))})}(window.jQuery);

(function($){
	$.fn.datepicker.dates['ca'] = {
		days: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"],
		daysShort: ["Diu",  "Dil", "Dmt", "Dmc", "Dij", "Div", "Dis"],
		daysMin: ["dg", "dl", "dt", "dc", "dj", "dv", "ds"],
		months: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
		monthsShort: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Des"],
		today: "Avui",
		clear: "Esborrar",
		weekStart: 1,
		format: "dd/mm/yyyy"
	};
}(jQuery));

(function($){
	$.fn.datepicker.dates['fr'] = {
		days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
		daysShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
		daysMin: ["d", "l", "ma", "me", "j", "v", "s"],
		months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
		monthsShort: ["janv.", "févr.", "mars", "avril", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
		today: "Aujourd'hui",
		clear: "Effacer",
		weekStart: 1,
		format: "dd/mm/yyyy"
	};
}(jQuery));

(function($){
	$.fn.datepicker.dates['es'] = {
		days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
		daysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
		daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
		months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
		monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
		today: "Hoy",
		clear: "Borrar",
		weekStart: 1,
		format: "dd/mm/yyyy"
	};
}(jQuery));;

// Slidebars 0.10.3 (http://plugins.adchsm.me/slidebars/) written by Adam Smith (http://www.adchsm.com/) released under MIT License (http://plugins.adchsm.me/slidebars/license.txt)
!function(t){t.slidebars=function(s){function e(){!c.disableOver||"number"==typeof c.disableOver&&c.disableOver>=k?(w=!0,t("html").addClass("sb-init"),c.hideControlClasses&&T.removeClass("sb-hide"),i()):"number"==typeof c.disableOver&&c.disableOver<k&&(w=!1,t("html").removeClass("sb-init"),c.hideControlClasses&&T.addClass("sb-hide"),g.css("minHeight",""),(p||y)&&o())}function i(){g.css("minHeight","");var s=parseInt(g.css("height"),10),e=parseInt(t("html").css("height"),10);e>s&&g.css("minHeight",t("html").css("height")),m&&m.hasClass("sb-width-custom")&&m.css("width",m.attr("data-sb-width")),C&&C.hasClass("sb-width-custom")&&C.css("width",C.attr("data-sb-width")),m&&(m.hasClass("sb-style-push")||m.hasClass("sb-style-overlay"))&&m.css("marginLeft","-"+m.css("width")),C&&(C.hasClass("sb-style-push")||C.hasClass("sb-style-overlay"))&&C.css("marginRight","-"+C.css("width")),c.scrollLock&&t("html").addClass("sb-scroll-lock")}function n(t,s,e){function n(){a.removeAttr("style"),i()}var a;if(a=t.hasClass("sb-style-push")?g.add(t).add(O):t.hasClass("sb-style-overlay")?t:g.add(O),"translate"===x)"0px"===s?n():a.css("transform","translate( "+s+" )");else if("side"===x)"0px"===s?n():("-"===s[0]&&(s=s.substr(1)),a.css(e,"0px"),setTimeout(function(){a.css(e,s)},1));else if("jQuery"===x){"-"===s[0]&&(s=s.substr(1));var o={};o[e]=s,a.stop().animate(o,400)}}function a(s){function e(){w&&"left"===s&&m?(t("html").addClass("sb-active sb-active-left"),m.addClass("sb-active"),n(m,m.css("width"),"left"),setTimeout(function(){p=!0},400)):w&&"right"===s&&C&&(t("html").addClass("sb-active sb-active-right"),C.addClass("sb-active"),n(C,"-"+C.css("width"),"right"),setTimeout(function(){y=!0},400))}"left"===s&&m&&y||"right"===s&&C&&p?(o(),setTimeout(e,400)):e()}function o(s,e){(p||y)&&(p&&(n(m,"0px","left"),p=!1),y&&(n(C,"0px","right"),y=!1),setTimeout(function(){t("html").removeClass("sb-active sb-active-left sb-active-right"),m&&m.removeClass("sb-active"),C&&C.removeClass("sb-active"),"undefined"!=typeof s&&(void 0===typeof e&&(e="_self"),window.open(s,e))},400))}function l(t){"left"===t&&m&&(p?o():a("left")),"right"===t&&C&&(y?o():a("right"))}function r(t,s){t.stopPropagation(),t.preventDefault(),"touchend"===t.type&&s.off("click")}var c=t.extend({siteClose:!0,scrollLock:!1,disableOver:!1,hideControlClasses:!1},s),h=document.createElement("div").style,d=!1,f=!1;(""===h.MozTransition||""===h.WebkitTransition||""===h.OTransition||""===h.transition)&&(d=!0),(""===h.MozTransform||""===h.WebkitTransform||""===h.OTransform||""===h.transform)&&(f=!0);var u=navigator.userAgent,b=!1,v=!1;/Android/.test(u)?b=u.substr(u.indexOf("Android")+8,3):/(iPhone|iPod|iPad)/.test(u)&&(v=u.substr(u.indexOf("OS ")+3,3).replace("_",".")),(b&&3>b||v&&5>v)&&t("html").addClass("sb-static");var g=t("#sb-site, .sb-site-container");if(t(".sb-left").length)var m=t(".sb-left"),p=!1;if(t(".sb-right").length)var C=t(".sb-right"),y=!1;var w=!1,k=t(window).width(),T=t(".sb-toggle-left, .sb-toggle-right, .sb-open-left, .sb-open-right, .sb-close"),O=t(".sb-slide");e(),t(window).resize(function(){var s=t(window).width();k!==s&&(k=s,e(),p&&a("left"),y&&a("right"))});var x;d&&f?(x="translate",b&&4.4>b&&(x="side")):x="jQuery",this.slidebars={open:a,close:o,toggle:l,init:function(){return w},active:function(t){return"left"===t&&m?p:"right"===t&&C?y:void 0},destroy:function(t){"left"===t&&m&&(p&&o(),setTimeout(function(){m.remove(),m=!1},400)),"right"===t&&C&&(y&&o(),setTimeout(function(){C.remove(),C=!1},400))}},t(".sb-toggle-left").on("touchend click",function(s){r(s,t(this)),l("left")}),t(".sb-toggle-right").on("touchend click",function(s){r(s,t(this)),l("right")}),t(".sb-open-left").on("touchend click",function(s){r(s,t(this)),a("left")}),t(".sb-open-right").on("touchend click",function(s){r(s,t(this)),a("right")}),t(".sb-close").on("touchend click",function(s){if(t(this).is("a")||t(this).children().is("a")){if("click"===s.type){s.stopPropagation(),s.preventDefault();var e=t(this).is("a")?t(this):t(this).find("a"),i=e.attr("href"),n=e.attr("target")?e.attr("target"):"_self";o(i,n)}}else r(s,t(this)),o()}),g.on("touchend click",function(s){c.siteClose&&(p||y)&&(r(s,t(this)),o())})}}(jQuery);;

// SVGPathSeg API polyfill
// https://github.com/progers/pathseg
//
// This is a drop-in replacement for the SVGPathSeg and SVGPathSegList APIs that were removed from
// SVG2 (https://lists.w3.org/Archives/Public/www-svg/2015Jun/0044.html), including the latest spec
// changes which were implemented in Firefox 43 and Chrome 46.

(function() { "use strict";
    if (!("SVGPathSeg" in window)) {
        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGPathSeg
        window.SVGPathSeg = function(type, typeAsLetter, owningPathSegList) {
            this.pathSegType = type;
            this.pathSegTypeAsLetter = typeAsLetter;
            this._owningPathSegList = owningPathSegList;
        }

        SVGPathSeg.prototype.classname = "SVGPathSeg";

        SVGPathSeg.PATHSEG_UNKNOWN = 0;
        SVGPathSeg.PATHSEG_CLOSEPATH = 1;
        SVGPathSeg.PATHSEG_MOVETO_ABS = 2;
        SVGPathSeg.PATHSEG_MOVETO_REL = 3;
        SVGPathSeg.PATHSEG_LINETO_ABS = 4;
        SVGPathSeg.PATHSEG_LINETO_REL = 5;
        SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6;
        SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7;
        SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8;
        SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9;
        SVGPathSeg.PATHSEG_ARC_ABS = 10;
        SVGPathSeg.PATHSEG_ARC_REL = 11;
        SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12;
        SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13;
        SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14;
        SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15;
        SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16;
        SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17;
        SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18;
        SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19;

        // Notify owning PathSegList on any changes so they can be synchronized back to the path element.
        SVGPathSeg.prototype._segmentChanged = function() {
            if (this._owningPathSegList)
                this._owningPathSegList.segmentChanged(this);
        }

        window.SVGPathSegClosePath = function(owningPathSegList) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CLOSEPATH, "z", owningPathSegList);
        }
        SVGPathSegClosePath.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegClosePath.prototype.toString = function() { return "[object SVGPathSegClosePath]"; }
        SVGPathSegClosePath.prototype._asPathString = function() { return this.pathSegTypeAsLetter; }
        SVGPathSegClosePath.prototype.clone = function() { return new SVGPathSegClosePath(undefined); }

        window.SVGPathSegMovetoAbs = function(owningPathSegList, x, y) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_MOVETO_ABS, "M", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        SVGPathSegMovetoAbs.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegMovetoAbs.prototype.toString = function() { return "[object SVGPathSegMovetoAbs]"; }
        SVGPathSegMovetoAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        SVGPathSegMovetoAbs.prototype.clone = function() { return new SVGPathSegMovetoAbs(undefined, this._x, this._y); }
        Object.defineProperty(SVGPathSegMovetoAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegMovetoAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegMovetoRel = function(owningPathSegList, x, y) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_MOVETO_REL, "m", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        SVGPathSegMovetoRel.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegMovetoRel.prototype.toString = function() { return "[object SVGPathSegMovetoRel]"; }
        SVGPathSegMovetoRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        SVGPathSegMovetoRel.prototype.clone = function() { return new SVGPathSegMovetoRel(undefined, this._x, this._y); }
        Object.defineProperty(SVGPathSegMovetoRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegMovetoRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoAbs = function(owningPathSegList, x, y) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_LINETO_ABS, "L", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        SVGPathSegLinetoAbs.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegLinetoAbs.prototype.toString = function() { return "[object SVGPathSegLinetoAbs]"; }
        SVGPathSegLinetoAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        SVGPathSegLinetoAbs.prototype.clone = function() { return new SVGPathSegLinetoAbs(undefined, this._x, this._y); }
        Object.defineProperty(SVGPathSegLinetoAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegLinetoAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoRel = function(owningPathSegList, x, y) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_LINETO_REL, "l", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        SVGPathSegLinetoRel.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegLinetoRel.prototype.toString = function() { return "[object SVGPathSegLinetoRel]"; }
        SVGPathSegLinetoRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        SVGPathSegLinetoRel.prototype.clone = function() { return new SVGPathSegLinetoRel(undefined, this._x, this._y); }
        Object.defineProperty(SVGPathSegLinetoRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegLinetoRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoCubicAbs = function(owningPathSegList, x, y, x1, y1, x2, y2) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "C", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
            this._x2 = x2;
            this._y2 = y2;
        }
        SVGPathSegCurvetoCubicAbs.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegCurvetoCubicAbs.prototype.toString = function() { return "[object SVGPathSegCurvetoCubicAbs]"; }
        SVGPathSegCurvetoCubicAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y; }
        SVGPathSegCurvetoCubicAbs.prototype.clone = function() { return new SVGPathSegCurvetoCubicAbs(undefined, this._x, this._y, this._x1, this._y1, this._x2, this._y2); }
        Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype, "x1", { get: function() { return this._x1; }, set: function(x1) { this._x1 = x1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype, "y1", { get: function() { return this._y1; }, set: function(y1) { this._y1 = y1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype, "x2", { get: function() { return this._x2; }, set: function(x2) { this._x2 = x2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype, "y2", { get: function() { return this._y2; }, set: function(y2) { this._y2 = y2; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoCubicRel = function(owningPathSegList, x, y, x1, y1, x2, y2) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "c", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
            this._x2 = x2;
            this._y2 = y2;
        }
        SVGPathSegCurvetoCubicRel.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegCurvetoCubicRel.prototype.toString = function() { return "[object SVGPathSegCurvetoCubicRel]"; }
        SVGPathSegCurvetoCubicRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y; }
        SVGPathSegCurvetoCubicRel.prototype.clone = function() { return new SVGPathSegCurvetoCubicRel(undefined, this._x, this._y, this._x1, this._y1, this._x2, this._y2); }
        Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype, "x1", { get: function() { return this._x1; }, set: function(x1) { this._x1 = x1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype, "y1", { get: function() { return this._y1; }, set: function(y1) { this._y1 = y1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype, "x2", { get: function() { return this._x2; }, set: function(x2) { this._x2 = x2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype, "y2", { get: function() { return this._y2; }, set: function(y2) { this._y2 = y2; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoQuadraticAbs = function(owningPathSegList, x, y, x1, y1) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "Q", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
        }
        SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegCurvetoQuadraticAbs.prototype.toString = function() { return "[object SVGPathSegCurvetoQuadraticAbs]"; }
        SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y; }
        SVGPathSegCurvetoQuadraticAbs.prototype.clone = function() { return new SVGPathSegCurvetoQuadraticAbs(undefined, this._x, this._y, this._x1, this._y1); }
        Object.defineProperty(SVGPathSegCurvetoQuadraticAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegCurvetoQuadraticAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegCurvetoQuadraticAbs.prototype, "x1", { get: function() { return this._x1; }, set: function(x1) { this._x1 = x1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegCurvetoQuadraticAbs.prototype, "y1", { get: function() { return this._y1; }, set: function(y1) { this._y1 = y1; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoQuadraticRel = function(owningPathSegList, x, y, x1, y1) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "q", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
        }
        SVGPathSegCurvetoQuadraticRel.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegCurvetoQuadraticRel.prototype.toString = function() { return "[object SVGPathSegCurvetoQuadraticRel]"; }
        SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y; }
        SVGPathSegCurvetoQuadraticRel.prototype.clone = function() { return new SVGPathSegCurvetoQuadraticRel(undefined, this._x, this._y, this._x1, this._y1); }
        Object.defineProperty(SVGPathSegCurvetoQuadraticRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegCurvetoQuadraticRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegCurvetoQuadraticRel.prototype, "x1", { get: function() { return this._x1; }, set: function(x1) { this._x1 = x1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegCurvetoQuadraticRel.prototype, "y1", { get: function() { return this._y1; }, set: function(y1) { this._y1 = y1; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegArcAbs = function(owningPathSegList, x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_ARC_ABS, "A", owningPathSegList);
            this._x = x;
            this._y = y;
            this._r1 = r1;
            this._r2 = r2;
            this._angle = angle;
            this._largeArcFlag = largeArcFlag;
            this._sweepFlag = sweepFlag;
        }
        SVGPathSegArcAbs.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegArcAbs.prototype.toString = function() { return "[object SVGPathSegArcAbs]"; }
        SVGPathSegArcAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y; }
        SVGPathSegArcAbs.prototype.clone = function() { return new SVGPathSegArcAbs(undefined, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag); }
        Object.defineProperty(SVGPathSegArcAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegArcAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegArcAbs.prototype, "r1", { get: function() { return this._r1; }, set: function(r1) { this._r1 = r1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegArcAbs.prototype, "r2", { get: function() { return this._r2; }, set: function(r2) { this._r2 = r2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegArcAbs.prototype, "angle", { get: function() { return this._angle; }, set: function(angle) { this._angle = angle; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegArcAbs.prototype, "largeArcFlag", { get: function() { return this._largeArcFlag; }, set: function(largeArcFlag) { this._largeArcFlag = largeArcFlag; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegArcAbs.prototype, "sweepFlag", { get: function() { return this._sweepFlag; }, set: function(sweepFlag) { this._sweepFlag = sweepFlag; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegArcRel = function(owningPathSegList, x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_ARC_REL, "a", owningPathSegList);
            this._x = x;
            this._y = y;
            this._r1 = r1;
            this._r2 = r2;
            this._angle = angle;
            this._largeArcFlag = largeArcFlag;
            this._sweepFlag = sweepFlag;
        }
        SVGPathSegArcRel.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegArcRel.prototype.toString = function() { return "[object SVGPathSegArcRel]"; }
        SVGPathSegArcRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y; }
        SVGPathSegArcRel.prototype.clone = function() { return new SVGPathSegArcRel(undefined, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag); }
        Object.defineProperty(SVGPathSegArcRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegArcRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegArcRel.prototype, "r1", { get: function() { return this._r1; }, set: function(r1) { this._r1 = r1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegArcRel.prototype, "r2", { get: function() { return this._r2; }, set: function(r2) { this._r2 = r2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegArcRel.prototype, "angle", { get: function() { return this._angle; }, set: function(angle) { this._angle = angle; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegArcRel.prototype, "largeArcFlag", { get: function() { return this._largeArcFlag; }, set: function(largeArcFlag) { this._largeArcFlag = largeArcFlag; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegArcRel.prototype, "sweepFlag", { get: function() { return this._sweepFlag; }, set: function(sweepFlag) { this._sweepFlag = sweepFlag; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoHorizontalAbs = function(owningPathSegList, x) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, "H", owningPathSegList);
            this._x = x;
        }
        SVGPathSegLinetoHorizontalAbs.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegLinetoHorizontalAbs.prototype.toString = function() { return "[object SVGPathSegLinetoHorizontalAbs]"; }
        SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x; }
        SVGPathSegLinetoHorizontalAbs.prototype.clone = function() { return new SVGPathSegLinetoHorizontalAbs(undefined, this._x); }
        Object.defineProperty(SVGPathSegLinetoHorizontalAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoHorizontalRel = function(owningPathSegList, x) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "h", owningPathSegList);
            this._x = x;
        }
        SVGPathSegLinetoHorizontalRel.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegLinetoHorizontalRel.prototype.toString = function() { return "[object SVGPathSegLinetoHorizontalRel]"; }
        SVGPathSegLinetoHorizontalRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x; }
        SVGPathSegLinetoHorizontalRel.prototype.clone = function() { return new SVGPathSegLinetoHorizontalRel(undefined, this._x); }
        Object.defineProperty(SVGPathSegLinetoHorizontalRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoVerticalAbs = function(owningPathSegList, y) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "V", owningPathSegList);
            this._y = y;
        }
        SVGPathSegLinetoVerticalAbs.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegLinetoVerticalAbs.prototype.toString = function() { return "[object SVGPathSegLinetoVerticalAbs]"; }
        SVGPathSegLinetoVerticalAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._y; }
        SVGPathSegLinetoVerticalAbs.prototype.clone = function() { return new SVGPathSegLinetoVerticalAbs(undefined, this._y); }
        Object.defineProperty(SVGPathSegLinetoVerticalAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoVerticalRel = function(owningPathSegList, y) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "v", owningPathSegList);
            this._y = y;
        }
        SVGPathSegLinetoVerticalRel.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegLinetoVerticalRel.prototype.toString = function() { return "[object SVGPathSegLinetoVerticalRel]"; }
        SVGPathSegLinetoVerticalRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._y; }
        SVGPathSegLinetoVerticalRel.prototype.clone = function() { return new SVGPathSegLinetoVerticalRel(undefined, this._y); }
        Object.defineProperty(SVGPathSegLinetoVerticalRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoCubicSmoothAbs = function(owningPathSegList, x, y, x2, y2) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, "S", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x2 = x2;
            this._y2 = y2;
        }
        SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function() { return "[object SVGPathSegCurvetoCubicSmoothAbs]"; }
        SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y; }
        SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function() { return new SVGPathSegCurvetoCubicSmoothAbs(undefined, this._x, this._y, this._x2, this._y2); }
        Object.defineProperty(SVGPathSegCurvetoCubicSmoothAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegCurvetoCubicSmoothAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegCurvetoCubicSmoothAbs.prototype, "x2", { get: function() { return this._x2; }, set: function(x2) { this._x2 = x2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegCurvetoCubicSmoothAbs.prototype, "y2", { get: function() { return this._y2; }, set: function(y2) { this._y2 = y2; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoCubicSmoothRel = function(owningPathSegList, x, y, x2, y2) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, "s", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x2 = x2;
            this._y2 = y2;
        }
        SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function() { return "[object SVGPathSegCurvetoCubicSmoothRel]"; }
        SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y; }
        SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function() { return new SVGPathSegCurvetoCubicSmoothRel(undefined, this._x, this._y, this._x2, this._y2); }
        Object.defineProperty(SVGPathSegCurvetoCubicSmoothRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegCurvetoCubicSmoothRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegCurvetoCubicSmoothRel.prototype, "x2", { get: function() { return this._x2; }, set: function(x2) { this._x2 = x2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegCurvetoCubicSmoothRel.prototype, "y2", { get: function() { return this._y2; }, set: function(y2) { this._y2 = y2; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoQuadraticSmoothAbs = function(owningPathSegList, x, y) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, "T", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function() { return "[object SVGPathSegCurvetoQuadraticSmoothAbs]"; }
        SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function() { return new SVGPathSegCurvetoQuadraticSmoothAbs(undefined, this._x, this._y); }
        Object.defineProperty(SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoQuadraticSmoothRel = function(owningPathSegList, x, y) {
            SVGPathSeg.call(this, SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, "t", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(SVGPathSeg.prototype);
        SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function() { return "[object SVGPathSegCurvetoQuadraticSmoothRel]"; }
        SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function() { return new SVGPathSegCurvetoQuadraticSmoothRel(undefined, this._x, this._y); }
        Object.defineProperty(SVGPathSegCurvetoQuadraticSmoothRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(SVGPathSegCurvetoQuadraticSmoothRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        // Add createSVGPathSeg* functions to SVGPathElement.
        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGPathElement.
        SVGPathElement.prototype.createSVGPathSegClosePath = function() { return new SVGPathSegClosePath(undefined); }
        SVGPathElement.prototype.createSVGPathSegMovetoAbs = function(x, y) { return new SVGPathSegMovetoAbs(undefined, x, y); }
        SVGPathElement.prototype.createSVGPathSegMovetoRel = function(x, y) { return new SVGPathSegMovetoRel(undefined, x, y); }
        SVGPathElement.prototype.createSVGPathSegLinetoAbs = function(x, y) { return new SVGPathSegLinetoAbs(undefined, x, y); }
        SVGPathElement.prototype.createSVGPathSegLinetoRel = function(x, y) { return new SVGPathSegLinetoRel(undefined, x, y); }
        SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function(x, y, x1, y1, x2, y2) { return new SVGPathSegCurvetoCubicAbs(undefined, x, y, x1, y1, x2, y2); }
        SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function(x, y, x1, y1, x2, y2) { return new SVGPathSegCurvetoCubicRel(undefined, x, y, x1, y1, x2, y2); }
        SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function(x, y, x1, y1) { return new SVGPathSegCurvetoQuadraticAbs(undefined, x, y, x1, y1); }
        SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function(x, y, x1, y1) { return new SVGPathSegCurvetoQuadraticRel(undefined, x, y, x1, y1); }
        SVGPathElement.prototype.createSVGPathSegArcAbs = function(x, y, r1, r2, angle, largeArcFlag, sweepFlag) { return new SVGPathSegArcAbs(undefined, x, y, r1, r2, angle, largeArcFlag, sweepFlag); }
        SVGPathElement.prototype.createSVGPathSegArcRel = function(x, y, r1, r2, angle, largeArcFlag, sweepFlag) { return new SVGPathSegArcRel(undefined, x, y, r1, r2, angle, largeArcFlag, sweepFlag); }
        SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function(x) { return new SVGPathSegLinetoHorizontalAbs(undefined, x); }
        SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function(x) { return new SVGPathSegLinetoHorizontalRel(undefined, x); }
        SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function(y) { return new SVGPathSegLinetoVerticalAbs(undefined, y); }
        SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function(y) { return new SVGPathSegLinetoVerticalRel(undefined, y); }
        SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function(x, y, x2, y2) { return new SVGPathSegCurvetoCubicSmoothAbs(undefined, x, y, x2, y2); }
        SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function(x, y, x2, y2) { return new SVGPathSegCurvetoCubicSmoothRel(undefined, x, y, x2, y2); }
        SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function(x, y) { return new SVGPathSegCurvetoQuadraticSmoothAbs(undefined, x, y); }
        SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function(x, y) { return new SVGPathSegCurvetoQuadraticSmoothRel(undefined, x, y); }
    }

    if (!("SVGPathSegList" in window)) {
        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGPathSegList
        window.SVGPathSegList = function(pathElement) {
            this._pathElement = pathElement;
            this._list = this._parsePath(this._pathElement.getAttribute("d"));

            // Use a MutationObserver to catch changes to the path's "d" attribute.
            this._mutationObserverConfig = { "attributes": true, "attributeFilter": ["d"] };
            this._pathElementMutationObserver = new MutationObserver(this._updateListFromPathMutations.bind(this));
            this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
        }

        SVGPathSegList.prototype.classname = "SVGPathSegList";

        Object.defineProperty(SVGPathSegList.prototype, "numberOfItems", {
            get: function() {
                this._checkPathSynchronizedToList();
                return this._list.length;
            },
            enumerable: true
        });

        // Add the pathSegList accessors to SVGPathElement.
        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGAnimatedPathData
        Object.defineProperty(SVGPathElement.prototype, "pathSegList", {
            get: function() {
                if (!this._pathSegList)
                    this._pathSegList = new SVGPathSegList(this);
                return this._pathSegList;
            },
            enumerable: true
        });
        // FIXME: The following are not implemented and simply return SVGPathElement.pathSegList.
        Object.defineProperty(SVGPathElement.prototype, "normalizedPathSegList", { get: function() { return this.pathSegList; }, enumerable: true });
        Object.defineProperty(SVGPathElement.prototype, "animatedPathSegList", { get: function() { return this.pathSegList; }, enumerable: true });
        Object.defineProperty(SVGPathElement.prototype, "animatedNormalizedPathSegList", { get: function() { return this.pathSegList; }, enumerable: true });

        // Process any pending mutations to the path element and update the list as needed.
        // This should be the first call of all public functions and is needed because
        // MutationObservers are not synchronous so we can have pending asynchronous mutations.
        SVGPathSegList.prototype._checkPathSynchronizedToList = function() {
            this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords());
        }

        SVGPathSegList.prototype._updateListFromPathMutations = function(mutationRecords) {
            if (!this._pathElement)
                return;
            var hasPathMutations = false;
            mutationRecords.forEach(function(record) {
                if (record.attributeName == "d")
                    hasPathMutations = true;
            });
            if (hasPathMutations)
                this._list = this._parsePath(this._pathElement.getAttribute("d"));
        }

        // Serialize the list and update the path's 'd' attribute.
        SVGPathSegList.prototype._writeListToPath = function() {
            this._pathElementMutationObserver.disconnect();
            this._pathElement.setAttribute("d", SVGPathSegList._pathSegArrayAsString(this._list));
            this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
        }

        // When a path segment changes the list needs to be synchronized back to the path element.
        SVGPathSegList.prototype.segmentChanged = function(pathSeg) {
            this._writeListToPath();
        }

        SVGPathSegList.prototype.clear = function() {
            this._checkPathSynchronizedToList();

            this._list.forEach(function(pathSeg) {
                pathSeg._owningPathSegList = null;
            });
            this._list = [];
            this._writeListToPath();
        }

        SVGPathSegList.prototype.initialize = function(newItem) {
            this._checkPathSynchronizedToList();

            this._list = [newItem];
            newItem._owningPathSegList = this;
            this._writeListToPath();
            return newItem;
        }

        SVGPathSegList.prototype._checkValidIndex = function(index) {
            if (isNaN(index) || index < 0 || index >= this.numberOfItems)
                throw "INDEX_SIZE_ERR";
        }

        SVGPathSegList.prototype.getItem = function(index) {
            this._checkPathSynchronizedToList();

            this._checkValidIndex(index);
            return this._list[index];
        }

        SVGPathSegList.prototype.insertItemBefore = function(newItem, index) {
            this._checkPathSynchronizedToList();

            // Spec: If the index is greater than or equal to numberOfItems, then the new item is appended to the end of the list.
            if (index > this.numberOfItems)
                index = this.numberOfItems;
            if (newItem._owningPathSegList) {
                // SVG2 spec says to make a copy.
                newItem = newItem.clone();
            }
            this._list.splice(index, 0, newItem);
            newItem._owningPathSegList = this;
            this._writeListToPath();
            return newItem;
        }

        SVGPathSegList.prototype.replaceItem = function(newItem, index) {
            this._checkPathSynchronizedToList();

            if (newItem._owningPathSegList) {
                // SVG2 spec says to make a copy.
                newItem = newItem.clone();
            }
            this._checkValidIndex(index);
            this._list[index] = newItem;
            newItem._owningPathSegList = this;
            this._writeListToPath();
            return newItem;
        }

        SVGPathSegList.prototype.removeItem = function(index) {
            this._checkPathSynchronizedToList();

            this._checkValidIndex(index);
            var item = this._list[index];
            this._list.splice(index, 1);
            this._writeListToPath();
            return item;
        }

        SVGPathSegList.prototype.appendItem = function(newItem) {
            this._checkPathSynchronizedToList();

            if (newItem._owningPathSegList) {
                // SVG2 spec says to make a copy.
                newItem = newItem.clone();
            }
            this._list.push(newItem);
            newItem._owningPathSegList = this;
            // TODO: Optimize this to just append to the existing attribute.
            this._writeListToPath();
            return newItem;
        }

        SVGPathSegList._pathSegArrayAsString = function(pathSegArray) {
            var string = "";
            var first = true;
            pathSegArray.forEach(function(pathSeg) {
                if (first) {
                    first = false;
                    string += pathSeg._asPathString();
                } else {
                    string += " " + pathSeg._asPathString();
                }
            });
            return string;
        }

        // This closely follows SVGPathParser::parsePath from Source/core/svg/SVGPathParser.cpp.
        SVGPathSegList.prototype._parsePath = function(string) {
            if (!string || string.length == 0)
                return [];

            var owningPathSegList = this;

            var Builder = function() {
                this.pathSegList = [];
            }

            Builder.prototype.appendSegment = function(pathSeg) {
                this.pathSegList.push(pathSeg);
            }

            var Source = function(string) {
                this._string = string;
                this._currentIndex = 0;
                this._endIndex = this._string.length;
                this._previousCommand = SVGPathSeg.PATHSEG_UNKNOWN;

                this._skipOptionalSpaces();
            }

            Source.prototype._isCurrentSpace = function() {
                var character = this._string[this._currentIndex];
                return character <= " " && (character == " " || character == "\n" || character == "\t" || character == "\r" || character == "\f");
            }

            Source.prototype._skipOptionalSpaces = function() {
                while (this._currentIndex < this._endIndex && this._isCurrentSpace())
                    this._currentIndex++;
                return this._currentIndex < this._endIndex;
            }

            Source.prototype._skipOptionalSpacesOrDelimiter = function() {
                if (this._currentIndex < this._endIndex && !this._isCurrentSpace() && this._string.charAt(this._currentIndex) != ",")
                    return false;
                if (this._skipOptionalSpaces()) {
                    if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ",") {
                        this._currentIndex++;
                        this._skipOptionalSpaces();
                    }
                }
                return this._currentIndex < this._endIndex;
            }

            Source.prototype.hasMoreData = function() {
                return this._currentIndex < this._endIndex;
            }

            Source.prototype.peekSegmentType = function() {
                var lookahead = this._string[this._currentIndex];
                return this._pathSegTypeFromChar(lookahead);
            }

            Source.prototype._pathSegTypeFromChar = function(lookahead) {
                switch (lookahead) {
                case "Z":
                case "z":
                    return SVGPathSeg.PATHSEG_CLOSEPATH;
                case "M":
                    return SVGPathSeg.PATHSEG_MOVETO_ABS;
                case "m":
                    return SVGPathSeg.PATHSEG_MOVETO_REL;
                case "L":
                    return SVGPathSeg.PATHSEG_LINETO_ABS;
                case "l":
                    return SVGPathSeg.PATHSEG_LINETO_REL;
                case "C":
                    return SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
                case "c":
                    return SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
                case "Q":
                    return SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
                case "q":
                    return SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
                case "A":
                    return SVGPathSeg.PATHSEG_ARC_ABS;
                case "a":
                    return SVGPathSeg.PATHSEG_ARC_REL;
                case "H":
                    return SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
                case "h":
                    return SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
                case "V":
                    return SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
                case "v":
                    return SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
                case "S":
                    return SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
                case "s":
                    return SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
                case "T":
                    return SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
                case "t":
                    return SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
                default:
                    return SVGPathSeg.PATHSEG_UNKNOWN;
                }
            }

            Source.prototype._nextCommandHelper = function(lookahead, previousCommand) {
                // Check for remaining coordinates in the current command.
                if ((lookahead == "+" || lookahead == "-" || lookahead == "." || (lookahead >= "0" && lookahead <= "9")) && previousCommand != SVGPathSeg.PATHSEG_CLOSEPATH) {
                    if (previousCommand == SVGPathSeg.PATHSEG_MOVETO_ABS)
                        return SVGPathSeg.PATHSEG_LINETO_ABS;
                    if (previousCommand == SVGPathSeg.PATHSEG_MOVETO_REL)
                        return SVGPathSeg.PATHSEG_LINETO_REL;
                    return previousCommand;
                }
                return SVGPathSeg.PATHSEG_UNKNOWN;
            }

            Source.prototype.initialCommandIsMoveTo = function() {
                // If the path is empty it is still valid, so return true.
                if (!this.hasMoreData())
                    return true;
                var command = this.peekSegmentType();
                // Path must start with moveTo.
                return command == SVGPathSeg.PATHSEG_MOVETO_ABS || command == SVGPathSeg.PATHSEG_MOVETO_REL;
            }

            // Parse a number from an SVG path. This very closely follows genericParseNumber(...) from Source/core/svg/SVGParserUtilities.cpp.
            // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-PathDataBNF
            Source.prototype._parseNumber = function() {
                var exponent = 0;
                var integer = 0;
                var frac = 1;
                var decimal = 0;
                var sign = 1;
                var expsign = 1;

                var startIndex = this._currentIndex;

                this._skipOptionalSpaces();

                // Read the sign.
                if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "+")
                    this._currentIndex++;
                else if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "-") {
                    this._currentIndex++;
                    sign = -1;
                }

                if (this._currentIndex == this._endIndex || ((this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") && this._string.charAt(this._currentIndex) != "."))
                    // The first character of a number must be one of [0-9+-.].
                    return undefined;

                // Read the integer part, build right-to-left.
                var startIntPartIndex = this._currentIndex;
                while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9")
                    this._currentIndex++; // Advance to first non-digit.

                if (this._currentIndex != startIntPartIndex) {
                    var scanIntPartIndex = this._currentIndex - 1;
                    var multiplier = 1;
                    while (scanIntPartIndex >= startIntPartIndex) {
                        integer += multiplier * (this._string.charAt(scanIntPartIndex--) - "0");
                        multiplier *= 10;
                    }
                }

                // Read the decimals.
                if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ".") {
                    this._currentIndex++;

                    // There must be a least one digit following the .
                    if (this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9")
                        return undefined;
                    while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9")
                        decimal += (this._string.charAt(this._currentIndex++) - "0") * (frac *= 0.1);
                }

                // Read the exponent part.
                if (this._currentIndex != startIndex && this._currentIndex + 1 < this._endIndex && (this._string.charAt(this._currentIndex) == "e" || this._string.charAt(this._currentIndex) == "E") && (this._string.charAt(this._currentIndex + 1) != "x" && this._string.charAt(this._currentIndex + 1) != "m")) {
                    this._currentIndex++;

                    // Read the sign of the exponent.
                    if (this._string.charAt(this._currentIndex) == "+") {
                        this._currentIndex++;
                    } else if (this._string.charAt(this._currentIndex) == "-") {
                        this._currentIndex++;
                        expsign = -1;
                    }

                    // There must be an exponent.
                    if (this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9")
                        return undefined;

                    while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9") {
                        exponent *= 10;
                        exponent += (this._string.charAt(this._currentIndex) - "0");
                        this._currentIndex++;
                    }
                }

                var number = integer + decimal;
                number *= sign;

                if (exponent)
                    number *= Math.pow(10, expsign * exponent);

                if (startIndex == this._currentIndex)
                    return undefined;

                this._skipOptionalSpacesOrDelimiter();

                return number;
            }

            Source.prototype._parseArcFlag = function() {
                if (this._currentIndex >= this._endIndex)
                    return undefined;
                var flag = false;
                var flagChar = this._string.charAt(this._currentIndex++);
                if (flagChar == "0")
                    flag = false;
                else if (flagChar == "1")
                    flag = true;
                else
                    return undefined;

                this._skipOptionalSpacesOrDelimiter();
                return flag;
            }

            Source.prototype.parseSegment = function() {
                var lookahead = this._string[this._currentIndex];
                var command = this._pathSegTypeFromChar(lookahead);
                if (command == SVGPathSeg.PATHSEG_UNKNOWN) {
                    // Possibly an implicit command. Not allowed if this is the first command.
                    if (this._previousCommand == SVGPathSeg.PATHSEG_UNKNOWN)
                        return null;
                    command = this._nextCommandHelper(lookahead, this._previousCommand);
                    if (command == SVGPathSeg.PATHSEG_UNKNOWN)
                        return null;
                } else {
                    this._currentIndex++;
                }

                this._previousCommand = command;

                switch (command) {
                case SVGPathSeg.PATHSEG_MOVETO_REL:
                    return new SVGPathSegMovetoRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                case SVGPathSeg.PATHSEG_MOVETO_ABS:
                    return new SVGPathSegMovetoAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                case SVGPathSeg.PATHSEG_LINETO_REL:
                    return new SVGPathSegLinetoRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                case SVGPathSeg.PATHSEG_LINETO_ABS:
                    return new SVGPathSegLinetoAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                case SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                    return new SVGPathSegLinetoHorizontalRel(owningPathSegList, this._parseNumber());
                case SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                    return new SVGPathSegLinetoHorizontalAbs(owningPathSegList, this._parseNumber());
                case SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                    return new SVGPathSegLinetoVerticalRel(owningPathSegList, this._parseNumber());
                case SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                    return new SVGPathSegLinetoVerticalAbs(owningPathSegList, this._parseNumber());
                case SVGPathSeg.PATHSEG_CLOSEPATH:
                    this._skipOptionalSpaces();
                    return new SVGPathSegClosePath(owningPathSegList);
                case SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new SVGPathSegCurvetoCubicRel(owningPathSegList, points.x, points.y, points.x1, points.y1, points.x2, points.y2);
                case SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new SVGPathSegCurvetoCubicAbs(owningPathSegList, points.x, points.y, points.x1, points.y1, points.x2, points.y2);
                case SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                    var points = {x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new SVGPathSegCurvetoCubicSmoothRel(owningPathSegList, points.x, points.y, points.x2, points.y2);
                case SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                    var points = {x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new SVGPathSegCurvetoCubicSmoothAbs(owningPathSegList, points.x, points.y, points.x2, points.y2);
                case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new SVGPathSegCurvetoQuadraticRel(owningPathSegList, points.x, points.y, points.x1, points.y1);
                case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new SVGPathSegCurvetoQuadraticAbs(owningPathSegList, points.x, points.y, points.x1, points.y1);
                case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                    return new SVGPathSegCurvetoQuadraticSmoothRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                    return new SVGPathSegCurvetoQuadraticSmoothAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                case SVGPathSeg.PATHSEG_ARC_REL:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), arcAngle: this._parseNumber(), arcLarge: this._parseArcFlag(), arcSweep: this._parseArcFlag(), x: this._parseNumber(), y: this._parseNumber()};
                    return new SVGPathSegArcRel(owningPathSegList, points.x, points.y, points.x1, points.y1, points.arcAngle, points.arcLarge, points.arcSweep);
                case SVGPathSeg.PATHSEG_ARC_ABS:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), arcAngle: this._parseNumber(), arcLarge: this._parseArcFlag(), arcSweep: this._parseArcFlag(), x: this._parseNumber(), y: this._parseNumber()};
                    return new SVGPathSegArcAbs(owningPathSegList, points.x, points.y, points.x1, points.y1, points.arcAngle, points.arcLarge, points.arcSweep);
                default:
                    throw "Unknown path seg type."
                }
            }

            var builder = new Builder();
            var source = new Source(string);

            if (!source.initialCommandIsMoveTo())
                return [];
            while (source.hasMoreData()) {
                var pathSeg = source.parseSegment();
                if (!pathSeg)
                    return [];
                builder.appendSegment(pathSeg);
            }

            return builder.pathSegList;
        }
    }
}());;

/*!
 * jQuery Validation Plugin v1.14.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2015 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery"], factory );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

$.extend($.fn, {
	// http://jqueryvalidation.org/validate/
	validate: function( options ) {

		// if nothing is selected, return nothing; can't chain anyway
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			}
			return;
		}

		// check if a validator for this form was already created
		var validator = $.data( this[ 0 ], "validator" );
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[ 0 ] );
		$.data( this[ 0 ], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.on( "click.validate", ":submit", function( event ) {
				if ( validator.settings.submitHandler ) {
					validator.submitButton = event.target;
				}

				// allow suppressing validation by adding a cancel class to the submit button
				if ( $( this ).hasClass( "cancel" ) ) {
					validator.cancelSubmit = true;
				}

				// allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
				if ( $( this ).attr( "formnovalidate" ) !== undefined ) {
					validator.cancelSubmit = true;
				}
			});

			// validate the form on submit
			this.on( "submit.validate", function( event ) {
				if ( validator.settings.debug ) {
					// prevent form submit to be able to see console output
					event.preventDefault();
				}
				function handle() {
					var hidden, result;
					if ( validator.settings.submitHandler ) {
						if ( validator.submitButton ) {
							// insert a hidden input as a replacement for the missing submit button
							hidden = $( "<input type='hidden'/>" )
								.attr( "name", validator.submitButton.name )
								.val( $( validator.submitButton ).val() )
								.appendTo( validator.currentForm );
						}
						result = validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( validator.submitButton ) {
							// and clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						if ( result !== undefined ) {
							return result;
						}
						return false;
					}
					return true;
				}

				// prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			});
		}

		return validator;
	},
	// http://jqueryvalidation.org/valid/
	valid: function() {
		var valid, validator, errorList;

		if ( $( this[ 0 ] ).is( "form" ) ) {
			valid = this.validate().form();
		} else {
			errorList = [];
			valid = true;
			validator = $( this[ 0 ].form ).validate();
			this.each( function() {
				valid = validator.element( this ) && valid;
				errorList = errorList.concat( validator.errorList );
			});
			validator.errorList = errorList;
		}
		return valid;
	},

	// http://jqueryvalidation.org/rules/
	rules: function( command, argument ) {
		var element = this[ 0 ],
			settings, staticRules, existingRules, data, param, filtered;

		if ( command ) {
			settings = $.data( element.form, "validator" ).settings;
			staticRules = settings.rules;
			existingRules = $.validator.staticRules( element );
			switch ( command ) {
			case "add":
				$.extend( existingRules, $.validator.normalizeRule( argument ) );
				// remove messages from rules, but allow them to be set separately
				delete existingRules.messages;
				staticRules[ element.name ] = existingRules;
				if ( argument.messages ) {
					settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
				}
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[ element.name ];
					return existingRules;
				}
				filtered = {};
				$.each( argument.split( /\s/ ), function( index, method ) {
					filtered[ method ] = existingRules[ method ];
					delete existingRules[ method ];
					if ( method === "required" ) {
						$( element ).removeAttr( "aria-required" );
					}
				});
				return filtered;
			}
		}

		data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.classRules( element ),
			$.validator.attributeRules( element ),
			$.validator.dataRules( element ),
			$.validator.staticRules( element )
		), element );

		// make sure required is at front
		if ( data.required ) {
			param = data.required;
			delete data.required;
			data = $.extend( { required: param }, data );
			$( element ).attr( "aria-required", "true" );
		}

		// make sure remote is at back
		if ( data.remote ) {
			param = data.remote;
			delete data.remote;
			data = $.extend( data, { remote: param });
		}

		return data;
	}
});

// Custom selectors
$.extend( $.expr[ ":" ], {
	// http://jqueryvalidation.org/blank-selector/
	blank: function( a ) {
		return !$.trim( "" + $( a ).val() );
	},
	// http://jqueryvalidation.org/filled-selector/
	filled: function( a ) {
		return !!$.trim( "" + $( a ).val() );
	},
	// http://jqueryvalidation.org/unchecked-selector/
	unchecked: function( a ) {
		return !$( a ).prop( "checked" );
	}
});

// constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

// http://jqueryvalidation.org/jQuery.validator.format/
$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray( arguments );
			args.unshift( source );
			return $.validator.format.apply( this, args );
		};
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray( arguments ).slice( 1 );
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each( params, function( i, n ) {
		source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
			return n;
		});
	});
	return source;
};

$.extend( $.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		validClass: "valid",
		errorElement: "label",
		focusCleanup: false,
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element ) {
			this.lastActive = element;

			// Hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.hideThese( this.errorsFor( element ) );
			}
		},
		onfocusout: function( element ) {
			if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
				this.element( element );
			}
		},
		onkeyup: function( element, event ) {
			// Avoid revalidate the field when pressing one of the following keys
			// Shift       => 16
			// Ctrl        => 17
			// Alt         => 18
			// Caps lock   => 20
			// End         => 35
			// Home        => 36
			// Left arrow  => 37
			// Up arrow    => 38
			// Right arrow => 39
			// Down arrow  => 40
			// Insert      => 45
			// Num lock    => 144
			// AltGr key   => 225
			var excludedKeys = [
				16, 17, 18, 20, 35, 36, 37,
				38, 39, 40, 45, 144, 225
			];

			if ( event.which === 9 && this.elementValue( element ) === "" || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
				return;
			} else if ( element.name in this.submitted || element === this.lastElement ) {
				this.element( element );
			}
		},
		onclick: function( element ) {
			// click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element( element );

			// or option elements, check parent select in that case
			} else if ( element.parentNode.name in this.submitted ) {
				this.element( element.parentNode );
			}
		},
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
			} else {
				$( element ).addClass( errorClass ).removeClass( validClass );
			}
		},
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
			} else {
				$( element ).removeClass( errorClass ).addClass( validClass );
			}
		}
	},

	// http://jqueryvalidation.org/jQuery.validator.setDefaults/
	setDefaults: function( settings ) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date ( ISO ).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		creditcard: "Please enter a valid credit card number.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format( "Please enter no more than {0} characters." ),
		minlength: $.validator.format( "Please enter at least {0} characters." ),
		rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
		range: $.validator.format( "Please enter a value between {0} and {1}." ),
		max: $.validator.format( "Please enter a value less than or equal to {0}." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0}." )
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $( this.settings.errorLabelContainer );
			this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
			this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var groups = ( this.groups = {} ),
				rules;
			$.each( this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split( /\s/ );
				}
				$.each( value, function( index, name ) {
					groups[ name ] = key;
				});
			});
			rules = this.settings.rules;
			$.each( rules, function( key, value ) {
				rules[ key ] = $.validator.normalizeRule( value );
			});

			function delegate( event ) {
				var validator = $.data( this.form, "validator" ),
					eventType = "on" + event.type.replace( /^validate/, "" ),
					settings = validator.settings;
				if ( settings[ eventType ] && !$( this ).is( settings.ignore ) ) {
					settings[ eventType ].call( validator, this, event );
				}
			}

			$( this.currentForm )
				.on( "focusin.validate focusout.validate keyup.validate",
					":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
					"[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
					"[type='radio'], [type='checkbox']", delegate)
				// Support: Chrome, oldIE
				// "select" is provided as event.target when clicking a option
				.on("click.validate", "select, option, [type='radio'], [type='checkbox']", delegate);

			if ( this.settings.invalidHandler ) {
				$( this.currentForm ).on( "invalid-form.validate", this.settings.invalidHandler );
			}

			// Add aria-required to any Static/Data/Class required fields before first validation
			// Screen readers require this attribute to be present before the initial submission http://www.w3.org/TR/WCAG-TECHS/ARIA2.html
			$( this.currentForm ).find( "[required], [data-rule-required], .required" ).attr( "aria-required", "true" );
		},

		// http://jqueryvalidation.org/Validator.form/
		form: function() {
			this.checkForm();
			$.extend( this.submitted, this.errorMap );
			this.invalid = $.extend({}, this.errorMap );
			if ( !this.valid() ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ]);
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {
				this.check( elements[ i ] );
			}
			return this.valid();
		},

		// http://jqueryvalidation.org/Validator.element/
		element: function( element ) {
			var cleanElement = this.clean( element ),
				checkElement = this.validationTargetFor( cleanElement ),
				result = true;

			this.lastElement = checkElement;

			if ( checkElement === undefined ) {
				delete this.invalid[ cleanElement.name ];
			} else {
				this.prepareElement( checkElement );
				this.currentElements = $( checkElement );

				result = this.check( checkElement ) !== false;
				if ( result ) {
					delete this.invalid[ checkElement.name ];
				} else {
					this.invalid[ checkElement.name ] = true;
				}
			}
			// Add aria-invalid status for screen readers
			$( element ).attr( "aria-invalid", !result );

			if ( !this.numberOfInvalids() ) {
				// Hide error containers on last error
				this.toHide = this.toHide.add( this.containers );
			}
			this.showErrors();
			return result;
		},

		// http://jqueryvalidation.org/Validator.showErrors/
		showErrors: function( errors ) {
			if ( errors ) {
				// add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = [];
				for ( var name in errors ) {
					this.errorList.push({
						message: errors[ name ],
						element: this.findByName( name )[ 0 ]
					});
				}
				// remove items from success list
				this.successList = $.grep( this.successList, function( element ) {
					return !( element.name in errors );
				});
			}
			if ( this.settings.showErrors ) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

		// http://jqueryvalidation.org/Validator.resetForm/
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$( this.currentForm ).resetForm();
			}
			this.submitted = {};
			this.lastElement = null;
			this.prepareForm();
			this.hideErrors();
			var i, elements = this.elements()
				.removeData( "previousValue" )
				.removeAttr( "aria-invalid" );

			if ( this.settings.unhighlight ) {
				for ( i = 0; elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ],
						this.settings.errorClass, "" );
				}
			} else {
				elements.removeClass( this.settings.errorClass );
			}
		},

		numberOfInvalids: function() {
			return this.objectLength( this.invalid );
		},

		objectLength: function( obj ) {
			/* jshint unused: false */
			var count = 0,
				i;
			for ( i in obj ) {
				count++;
			}
			return count;
		},

		hideErrors: function() {
			this.hideThese( this.toHide );
		},

		hideThese: function( errors ) {
			errors.not( this.containers ).text( "" );
			this.addWrapper( errors ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if ( this.settings.focusInvalid ) {
				try {
					$( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [])
					.filter( ":visible" )
					.focus()
					// manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger( "focusin" );
				} catch ( e ) {
					// ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep( this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			}).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// select all valid inputs inside the form (no submit or reset buttons)
			return $( this.currentForm )
			.find( "input, select, textarea" )
			.not( ":submit, :reset, :image, :disabled" )
			.not( this.settings.ignore )
			.filter( function() {
				if ( !this.name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this );
				}

				// select only the first element for each name, and only those with rules specified
				if ( this.name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
					return false;
				}

				rulesCache[ this.name ] = true;
				return true;
			});
		},

		clean: function( selector ) {
			return $( selector )[ 0 ];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.split( " " ).join( "." );
			return $( this.settings.errorElement + "." + errorClass, this.errorContext );
		},

		reset: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $( [] );
			this.toHide = $( [] );
			this.currentElements = $( [] );
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor( element );
		},

		elementValue: function( element ) {
			var val,
				$element = $( element ),
				type = element.type;

			if ( type === "radio" || type === "checkbox" ) {
				return this.findByName( element.name ).filter(":checked").val();
			} else if ( type === "number" && typeof element.validity !== "undefined" ) {
				return element.validity.badInput ? false : $element.val();
			}

			val = $element.val();
			if ( typeof val === "string" ) {
				return val.replace(/\r/g, "" );
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $( element ).rules(),
				rulesCount = $.map( rules, function( n, i ) {
					return i;
				}).length,
				dependencyMismatch = false,
				val = this.elementValue( element ),
				result, method, rule;

			for ( method in rules ) {
				rule = { method: method, parameters: rules[ method ] };
				try {

					result = $.validator.methods[ method ].call( this, val, element, rule.parameters );

					// if a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" && rulesCount === 1 ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor( element ) );
						return;
					}

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch ( e ) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					}
					if ( e instanceof TypeError ) {
						e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
					}

					throw e;
				}
			}
			if ( dependencyMismatch ) {
				return;
			}
			if ( this.objectLength( rules ) ) {
				this.successList.push( element );
			}
			return true;
		},

		// return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		// return the generic message if present and no method specific message is present
		customDataMessage: function( element, method ) {
			return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
				method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
		},

		// return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[ name ];
			return m && ( m.constructor === String ? m : m[ method ]);
		},

		// return the first defined argument, allowing empty strings
		findDefined: function() {
			for ( var i = 0; i < arguments.length; i++) {
				if ( arguments[ i ] !== undefined ) {
					return arguments[ i ];
				}
			}
			return undefined;
		},

		defaultMessage: function( element, method ) {
			return this.findDefined(
				this.customMessage( element.name, method ),
				this.customDataMessage( element, method ),
				// title is never undefined, so handle empty string as undefined
				!this.settings.ignoreTitle && element.title || undefined,
				$.validator.messages[ method ],
				"<strong>Warning: No message defined for " + element.name + "</strong>"
			);
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule.method ),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call( this, rule.parameters, element );
			} else if ( theregex.test( message ) ) {
				message = $.validator.format( message.replace( theregex, "{$1}" ), rule.parameters );
			}
			this.errorList.push({
				message: message,
				element: element,
				method: rule.method
			});

			this.errorMap[ element.name ] = message;
			this.submitted[ element.name ] = message;
		},

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements, error;
			for ( i = 0; this.errorList[ i ]; i++ ) {
				error = this.errorList[ i ];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if ( this.settings.success ) {
				for ( i = 0; this.successList[ i ]; i++ ) {
					this.showLabel( this.successList[ i ] );
				}
			}
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not( this.invalidElements() );
		},

		invalidElements: function() {
			return $( this.errorList ).map(function() {
				return this.element;
			});
		},

		showLabel: function( element, message ) {
			var place, group, errorID,
				error = this.errorsFor( element ),
				elementID = this.idOrName( element ),
				describedBy = $( element ).attr( "aria-describedby" );
			if ( error.length ) {
				// refresh error/success class
				error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );
				// replace message on existing label
				error.html( message );
			} else {
				// create error element
				error = $( "<" + this.settings.errorElement + ">" )
					.attr( "id", elementID + "-error" )
					.addClass( this.settings.errorClass )
					.html( message || "" );

				// Maintain reference to the element to be placed into the DOM
				place = error;
				if ( this.settings.wrapper ) {
					// make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
				}
				if ( this.labelContainer.length ) {
					this.labelContainer.append( place );
				} else if ( this.settings.errorPlacement ) {
					this.settings.errorPlacement( place, $( element ) );
				} else {
					place.insertAfter( element );
				}

				// Link error back to the element
				if ( error.is( "label" ) ) {
					// If the error is a label, then associate using 'for'
					error.attr( "for", elementID );
				} else if ( error.parents( "label[for='" + elementID + "']" ).length === 0 ) {
					// If the element is not a child of an associated label, then it's necessary
					// to explicitly apply aria-describedby

					errorID = error.attr( "id" ).replace( /(:|\.|\[|\]|\$)/g, "\\$1");
					// Respect existing non-error aria-describedby
					if ( !describedBy ) {
						describedBy = errorID;
					} else if ( !describedBy.match( new RegExp( "\\b" + errorID + "\\b" ) ) ) {
						// Add to end of list if not already present
						describedBy += " " + errorID;
					}
					$( element ).attr( "aria-describedby", describedBy );

					// If this element is grouped, then assign to all elements in the same group
					group = this.groups[ element.name ];
					if ( group ) {
						$.each( this.groups, function( name, testgroup ) {
							if ( testgroup === group ) {
								$( "[name='" + name + "']", this.currentForm )
									.attr( "aria-describedby", error.attr( "id" ) );
							}
						});
					}
				}
			}
			if ( !message && this.settings.success ) {
				error.text( "" );
				if ( typeof this.settings.success === "string" ) {
					error.addClass( this.settings.success );
				} else {
					this.settings.success( error, element );
				}
			}
			this.toShow = this.toShow.add( error );
		},

		errorsFor: function( element ) {
			var name = this.idOrName( element ),
				describer = $( element ).attr( "aria-describedby" ),
				selector = "label[for='" + name + "'], label[for='" + name + "'] *";

			// aria-describedby should directly reference the error element
			if ( describer ) {
				selector = selector + ", #" + describer.replace( /\s+/g, ", #" );
			}
			return this
				.errors()
				.filter( selector );
		},

		idOrName: function( element ) {
			return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
		},

		validationTargetFor: function( element ) {

			// If radio/checkbox, validate first element in group instead
			if ( this.checkable( element ) ) {
				element = this.findByName( element.name );
			}

			// Always apply ignore filter
			return $( element ).not( this.settings.ignore )[ 0 ];
		},

		checkable: function( element ) {
			return ( /radio|checkbox/i ).test( element.type );
		},

		findByName: function( name ) {
			return $( this.currentForm ).find( "[name='" + name + "']" );
		},

		getLength: function( value, element ) {
			switch ( element.nodeName.toLowerCase() ) {
			case "select":
				return $( "option:selected", element ).length;
			case "input":
				if ( this.checkable( element ) ) {
					return this.findByName( element.name ).filter( ":checked" ).length;
				}
			}
			return value.length;
		},

		depend: function( param, element ) {
			return this.dependTypes[typeof param] ? this.dependTypes[typeof param]( param, element ) : true;
		},

		dependTypes: {
			"boolean": function( param ) {
				return param;
			},
			"string": function( param, element ) {
				return !!$( param, element.form ).length;
			},
			"function": function( param, element ) {
				return param( element );
			}
		},

		optional: function( element ) {
			var val = this.elementValue( element );
			return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";
		},

		startRequest: function( element ) {
			if ( !this.pending[ element.name ] ) {
				this.pendingRequest++;
				this.pending[ element.name ] = true;
			}
		},

		stopRequest: function( element, valid ) {
			this.pendingRequest--;
			// sometimes synchronization fails, make sure pendingRequest is never < 0
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			}
			delete this.pending[ element.name ];
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
				$( this.currentForm ).submit();
				this.formSubmitted = false;
			} else if (!valid && this.pendingRequest === 0 && this.formSubmitted ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ]);
				this.formSubmitted = false;
			}
		},

		previousValue: function( element ) {
			return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, "remote" )
			});
		},

		// cleans up all forms and elements, removes validator-specific events
		destroy: function() {
			this.resetForm();

			$( this.currentForm )
				.off( ".validate" )
				.removeData( "validator" );
		}

	},

	classRuleSettings: {
		required: { required: true },
		email: { email: true },
		url: { url: true },
		date: { date: true },
		dateISO: { dateISO: true },
		number: { number: true },
		digits: { digits: true },
		creditcard: { creditcard: true }
	},

	addClassRules: function( className, rules ) {
		if ( className.constructor === String ) {
			this.classRuleSettings[ className ] = rules;
		} else {
			$.extend( this.classRuleSettings, className );
		}
	},

	classRules: function( element ) {
		var rules = {},
			classes = $( element ).attr( "class" );

		if ( classes ) {
			$.each( classes.split( " " ), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend( rules, $.validator.classRuleSettings[ this ]);
				}
			});
		}
		return rules;
	},

	normalizeAttributeRule: function( rules, type, method, value ) {

		// convert the value to a number for number inputs, and for text for backwards compability
		// allows type="date" and others to be compared as strings
		if ( /min|max/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
			value = Number( value );

			// Support Opera Mini, which returns NaN for undefined minlength
			if ( isNaN( value ) ) {
				value = undefined;
			}
		}

		if ( value || value === 0 ) {
			rules[ method ] = value;
		} else if ( type === method && type !== "range" ) {

			// exception: the jquery validate 'range' method
			// does not test for the html5 'range' type
			rules[ method ] = true;
		}
	},

	attributeRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {

			// support for <input required> in both html5 and older browsers
			if ( method === "required" ) {
				value = element.getAttribute( method );

				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if ( value === "" ) {
					value = true;
				}

				// force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr( method );
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}

		// maxlength may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
		if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
			delete rules.maxlength;
		}

		return rules;
	},

	dataRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {
			value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );
			this.normalizeAttributeRule( rules, type, method, value );
		}
		return rules;
	},

	staticRules: function( element ) {
		var rules = {},
			validator = $.data( element.form, "validator" );

		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};
		}
		return rules;
	},

	normalizeRules: function( rules, element ) {
		// handle dependency check
		$.each( rules, function( prop, val ) {
			// ignore rule when param is explicitly false, eg. required:false
			if ( val === false ) {
				delete rules[ prop ];
				return;
			}
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch ( typeof val.depends ) {
				case "string":
					keepRule = !!$( val.depends, element.form ).length;
					break;
				case "function":
					keepRule = val.depends.call( element, element );
					break;
				}
				if ( keepRule ) {
					rules[ prop ] = val.param !== undefined ? val.param : true;
				} else {
					delete rules[ prop ];
				}
			}
		});

		// evaluate parameters
		$.each( rules, function( rule, parameter ) {
			rules[ rule ] = $.isFunction( parameter ) ? parameter( element ) : parameter;
		});

		// clean number parameters
		$.each([ "minlength", "maxlength" ], function() {
			if ( rules[ this ] ) {
				rules[ this ] = Number( rules[ this ] );
			}
		});
		$.each([ "rangelength", "range" ], function() {
			var parts;
			if ( rules[ this ] ) {
				if ( $.isArray( rules[ this ] ) ) {
					rules[ this ] = [ Number( rules[ this ][ 0 ]), Number( rules[ this ][ 1 ] ) ];
				} else if ( typeof rules[ this ] === "string" ) {
					parts = rules[ this ].replace(/[\[\]]/g, "" ).split( /[\s,]+/ );
					rules[ this ] = [ Number( parts[ 0 ]), Number( parts[ 1 ] ) ];
				}
			}
		});

		if ( $.validator.autoCreateRanges ) {
			// auto-create ranges
			if ( rules.min != null && rules.max != null ) {
				rules.range = [ rules.min, rules.max ];
				delete rules.min;
				delete rules.max;
			}
			if ( rules.minlength != null && rules.maxlength != null ) {
				rules.rangelength = [ rules.minlength, rules.maxlength ];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function( data ) {
		if ( typeof data === "string" ) {
			var transformed = {};
			$.each( data.split( /\s/ ), function() {
				transformed[ this ] = true;
			});
			data = transformed;
		}
		return data;
	},

	// http://jqueryvalidation.org/jQuery.validator.addMethod/
	addMethod: function( name, method, message ) {
		$.validator.methods[ name ] = method;
		$.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];
		if ( method.length < 3 ) {
			$.validator.addClassRules( name, $.validator.normalizeRule( name ) );
		}
	},

	methods: {

		// http://jqueryvalidation.org/required-method/
		required: function( value, element, param ) {
			// check if dependency is met
			if ( !this.depend( param, element ) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {
				// could be an array for select-multiple or a string, both are fine this way
				var val = $( element ).val();
				return val && val.length > 0;
			}
			if ( this.checkable( element ) ) {
				return this.getLength( value, element ) > 0;
			}
			return value.length > 0;
		},

		// http://jqueryvalidation.org/email-method/
		email: function( value, element ) {
			// From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
			// Retrieved 2014-01-14
			// If you have a problem with this implementation, report a bug against the above spec
			// Or use custom methods to implement your own email validation
			return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
		},

		// http://jqueryvalidation.org/url-method/
		url: function( value, element ) {

			// Copyright (c) 2010-2013 Diego Perini, MIT licensed
			// https://gist.github.com/dperini/729294
			// see also https://mathiasbynens.be/demo/url-regex
			// modified to allow protocol-relative URLs
			return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
		},

		// http://jqueryvalidation.org/date-method/
		date: function( value, element ) {
			return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
		},

		// http://jqueryvalidation.org/dateISO-method/
		dateISO: function( value, element ) {
			return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
		},

		// http://jqueryvalidation.org/number-method/
		number: function( value, element ) {
			return this.optional( element ) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
		},

		// http://jqueryvalidation.org/digits-method/
		digits: function( value, element ) {
			return this.optional( element ) || /^\d+$/.test( value );
		},

		// http://jqueryvalidation.org/creditcard-method/
		// based on http://en.wikipedia.org/wiki/Luhn_algorithm
		creditcard: function( value, element ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}
			// accept only spaces, digits and dashes
			if ( /[^0-9 \-]+/.test( value ) ) {
				return false;
			}
			var nCheck = 0,
				nDigit = 0,
				bEven = false,
				n, cDigit;

			value = value.replace( /\D/g, "" );

			// Basing min and max length on
			// http://developer.ean.com/general_info/Valid_Credit_Card_Types
			if ( value.length < 13 || value.length > 19 ) {
				return false;
			}

			for ( n = value.length - 1; n >= 0; n--) {
				cDigit = value.charAt( n );
				nDigit = parseInt( cDigit, 10 );
				if ( bEven ) {
					if ( ( nDigit *= 2 ) > 9 ) {
						nDigit -= 9;
					}
				}
				nCheck += nDigit;
				bEven = !bEven;
			}

			return ( nCheck % 10 ) === 0;
		},

		// http://jqueryvalidation.org/minlength-method/
		minlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length >= param;
		},

		// http://jqueryvalidation.org/maxlength-method/
		maxlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length <= param;
		},

		// http://jqueryvalidation.org/rangelength-method/
		rangelength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
		},

		// http://jqueryvalidation.org/min-method/
		min: function( value, element, param ) {
			return this.optional( element ) || value >= param;
		},

		// http://jqueryvalidation.org/max-method/
		max: function( value, element, param ) {
			return this.optional( element ) || value <= param;
		},

		// http://jqueryvalidation.org/range-method/
		range: function( value, element, param ) {
			return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
		},

		// http://jqueryvalidation.org/equalTo-method/
		equalTo: function( value, element, param ) {
			// bind to the blur event of the target in order to revalidate whenever the target field is updated
			// TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
			var target = $( param );
			if ( this.settings.onfocusout ) {
				target.off( ".validate-equalTo" ).on( "blur.validate-equalTo", function() {
					$( element ).valid();
				});
			}
			return value === target.val();
		},

		// http://jqueryvalidation.org/remote-method/
		remote: function( value, element, param ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}

			var previous = this.previousValue( element ),
				validator, data;

			if (!this.settings.messages[ element.name ] ) {
				this.settings.messages[ element.name ] = {};
			}
			previous.originalMessage = this.settings.messages[ element.name ].remote;
			this.settings.messages[ element.name ].remote = previous.message;

			param = typeof param === "string" && { url: param } || param;

			if ( previous.old === value ) {
				return previous.valid;
			}

			previous.old = value;
			validator = this;
			this.startRequest( element );
			data = {};
			data[ element.name ] = value;
			$.ajax( $.extend( true, {
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				context: validator.currentForm,
				success: function( response ) {
					var valid = response === true || response === "true",
						errors, message, submitted;

					validator.settings.messages[ element.name ].remote = previous.originalMessage;
					if ( valid ) {
						submitted = validator.formSubmitted;
						validator.prepareElement( element );
						validator.formSubmitted = submitted;
						validator.successList.push( element );
						delete validator.invalid[ element.name ];
						validator.showErrors();
					} else {
						errors = {};
						message = response || validator.defaultMessage( element, "remote" );
						errors[ element.name ] = previous.message = $.isFunction( message ) ? message( value ) : message;
						validator.invalid[ element.name ] = true;
						validator.showErrors( errors );
					}
					previous.valid = valid;
					validator.stopRequest( element, valid );
				}
			}, param ) );
			return "pending";
		}
	}

});

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

var pendingRequests = {},
	ajax;
// Use a prefilter if available (1.5+)
if ( $.ajaxPrefilter ) {
	$.ajaxPrefilter(function( settings, _, xhr ) {
		var port = settings.port;
		if ( settings.mode === "abort" ) {
			if ( pendingRequests[port] ) {
				pendingRequests[port].abort();
			}
			pendingRequests[port] = xhr;
		}
	});
} else {
	// Proxy ajax
	ajax = $.ajax;
	$.ajax = function( settings ) {
		var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
			port = ( "port" in settings ? settings : $.ajaxSettings ).port;
		if ( mode === "abort" ) {
			if ( pendingRequests[port] ) {
				pendingRequests[port].abort();
			}
			pendingRequests[port] = ajax.apply(this, arguments);
			return pendingRequests[port];
		}
		return ajax.apply(this, arguments);
	};
}

}));;

/* == jquery mousewheel plugin == Version: 3.1.13, License: MIT License (MIT) */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
/* == malihu jquery custom scrollbar plugin == Version: 3.1.2, License: MIT License (MIT) */
!function(e){"undefined"!=typeof module&&module.exports?module.exports=e:e(jQuery,window,document)}(function(e){!function(t){var o="function"==typeof define&&define.amd,a="undefined"!=typeof module&&module.exports,n="https:"==document.location.protocol?"https:":"http:",i="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";o||(a?require("jquery-mousewheel")(e):e.event.special.mousewheel||e("head").append(decodeURI("%3Cscript src="+n+"//"+i+"%3E%3C/script%3E"))),t()}(function(){var t,o="mCustomScrollbar",a="mCS",n=".mCustomScrollbar",i={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,documentTouchScroll:!0,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:"auto",autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},r=0,l={},s=window.attachEvent&&!window.addEventListener?1:0,c=!1,d=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],u={init:function(t){var t=e.extend(!0,{},i,t),o=f.call(this);if(t.live){var s=t.liveSelector||this.selector||n,c=e(s);if("off"===t.live)return void m(s);l[s]=setTimeout(function(){c.mCustomScrollbar(t),"once"===t.live&&c.length&&m(s)},500)}else m(s);return t.setWidth=t.set_width?t.set_width:t.setWidth,t.setHeight=t.set_height?t.set_height:t.setHeight,t.axis=t.horizontalScroll?"x":p(t.axis),t.scrollInertia=t.scrollInertia>0&&t.scrollInertia<17?17:t.scrollInertia,"object"!=typeof t.mouseWheel&&1==t.mouseWheel&&(t.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),t.mouseWheel.scrollAmount=t.mouseWheelPixels?t.mouseWheelPixels:t.mouseWheel.scrollAmount,t.mouseWheel.normalizeDelta=t.advanced.normalizeMouseWheelDelta?t.advanced.normalizeMouseWheelDelta:t.mouseWheel.normalizeDelta,t.scrollButtons.scrollType=g(t.scrollButtons.scrollType),h(t),e(o).each(function(){var o=e(this);if(!o.data(a)){o.data(a,{idx:++r,opt:t,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:o.css("direction"),cbOffsets:null,trigger:null,poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}});var n=o.data(a),i=n.opt,l=o.data("mcs-axis"),s=o.data("mcs-scrollbar-position"),c=o.data("mcs-theme");l&&(i.axis=l),s&&(i.scrollbarPosition=s),c&&(i.theme=c,h(i)),v.call(this),n&&i.callbacks.onCreate&&"function"==typeof i.callbacks.onCreate&&i.callbacks.onCreate.call(this),e("#mCSB_"+n.idx+"_container img:not(."+d[2]+")").addClass(d[2]),u.update.call(null,o)}})},update:function(t,o){var n=t||f.call(this);return e(n).each(function(){var t=e(this);if(t.data(a)){var n=t.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container"),l=e("#mCSB_"+n.idx),s=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];if(!r.length)return;n.tweenRunning&&N(t),o&&n&&i.callbacks.onBeforeUpdate&&"function"==typeof i.callbacks.onBeforeUpdate&&i.callbacks.onBeforeUpdate.call(this),t.hasClass(d[3])&&t.removeClass(d[3]),t.hasClass(d[4])&&t.removeClass(d[4]),l.css("max-height","none"),l.height()!==t.height()&&l.css("max-height",t.height()),_.call(this),"y"===i.axis||i.advanced.autoExpandHorizontalScroll||r.css("width",x(r)),n.overflowed=y.call(this),M.call(this),i.autoDraggerLength&&S.call(this),b.call(this),T.call(this);var c=[Math.abs(r[0].offsetTop),Math.abs(r[0].offsetLeft)];"x"!==i.axis&&(n.overflowed[0]?s[0].height()>s[0].parent().height()?B.call(this):(V(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}),n.contentReset.y=null):(B.call(this),"y"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[1]&&V(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==i.axis&&(n.overflowed[1]?s[1].width()>s[1].parent().width()?B.call(this):(V(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}),n.contentReset.x=null):(B.call(this),"x"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[0]&&V(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),o&&n&&(2===o&&i.callbacks.onImageLoad&&"function"==typeof i.callbacks.onImageLoad?i.callbacks.onImageLoad.call(this):3===o&&i.callbacks.onSelectorChange&&"function"==typeof i.callbacks.onSelectorChange?i.callbacks.onSelectorChange.call(this):i.callbacks.onUpdate&&"function"==typeof i.callbacks.onUpdate&&i.callbacks.onUpdate.call(this)),X.call(this)}})},scrollTo:function(t,o){if("undefined"!=typeof t&&null!=t){var n=f.call(this);return e(n).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l={trigger:"external",scrollInertia:r.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},s=e.extend(!0,{},l,o),c=q.call(this,t),d=s.scrollInertia>0&&s.scrollInertia<17?17:s.scrollInertia;c[0]=Y.call(this,c[0],"y"),c[1]=Y.call(this,c[1],"x"),s.moveDragger&&(c[0]*=i.scrollRatio.y,c[1]*=i.scrollRatio.x),s.dur=oe()?0:d,setTimeout(function(){null!==c[0]&&"undefined"!=typeof c[0]&&"x"!==r.axis&&i.overflowed[0]&&(s.dir="y",s.overwrite="all",V(n,c[0].toString(),s)),null!==c[1]&&"undefined"!=typeof c[1]&&"y"!==r.axis&&i.overflowed[1]&&(s.dir="x",s.overwrite="none",V(n,c[1].toString(),s))},s.timeout)}})}},stop:function(){var t=f.call(this);return e(t).each(function(){var t=e(this);t.data(a)&&N(t)})},disable:function(t){var o=f.call(this);return e(o).each(function(){var o=e(this);if(o.data(a)){{o.data(a)}X.call(this,"remove"),k.call(this),t&&B.call(this),M.call(this,!0),o.addClass(d[3])}})},destroy:function(){var t=f.call(this);return e(t).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx),s=e("#mCSB_"+i.idx+"_container"),c=e(".mCSB_"+i.idx+"_scrollbar");r.live&&m(r.liveSelector||e(t).selector),X.call(this,"remove"),k.call(this),B.call(this),n.removeData(a),K(this,"mcs"),c.remove(),s.find("img."+d[2]).removeClass(d[2]),l.replaceWith(s.contents()),n.removeClass(o+" _"+a+"_"+i.idx+" "+d[6]+" "+d[7]+" "+d[5]+" "+d[3]).addClass(d[4])}})}},f=function(){return"object"!=typeof e(this)||e(this).length<1?n:this},h=function(t){var o=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],a=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],n=["minimal","minimal-dark"],i=["minimal","minimal-dark"],r=["minimal","minimal-dark"];t.autoDraggerLength=e.inArray(t.theme,o)>-1?!1:t.autoDraggerLength,t.autoExpandScrollbar=e.inArray(t.theme,a)>-1?!1:t.autoExpandScrollbar,t.scrollButtons.enable=e.inArray(t.theme,n)>-1?!1:t.scrollButtons.enable,t.autoHideScrollbar=e.inArray(t.theme,i)>-1?!0:t.autoHideScrollbar,t.scrollbarPosition=e.inArray(t.theme,r)>-1?"outside":t.scrollbarPosition},m=function(e){l[e]&&(clearTimeout(l[e]),K(l,e))},p=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},g=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},v=function(){var t=e(this),n=t.data(a),i=n.opt,r=i.autoExpandScrollbar?" "+d[1]+"_expand":"",l=["<div id='mCSB_"+n.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_vertical"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+n.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_horizontal"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],s="yx"===i.axis?"mCSB_vertical_horizontal":"x"===i.axis?"mCSB_horizontal":"mCSB_vertical",c="yx"===i.axis?l[0]+l[1]:"x"===i.axis?l[1]:l[0],u="yx"===i.axis?"<div id='mCSB_"+n.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",f=i.autoHideScrollbar?" "+d[6]:"",h="x"!==i.axis&&"rtl"===n.langDir?" "+d[7]:"";i.setWidth&&t.css("width",i.setWidth),i.setHeight&&t.css("height",i.setHeight),i.setLeft="y"!==i.axis&&"rtl"===n.langDir?"989999px":i.setLeft,t.addClass(o+" _"+a+"_"+n.idx+f+h).wrapInner("<div id='mCSB_"+n.idx+"' class='mCustomScrollBox mCS-"+i.theme+" "+s+"'><div id='mCSB_"+n.idx+"_container' class='mCSB_container' style='position:relative; top:"+i.setTop+"; left:"+i.setLeft+";' dir="+n.langDir+" /></div>");var m=e("#mCSB_"+n.idx),p=e("#mCSB_"+n.idx+"_container");"y"===i.axis||i.advanced.autoExpandHorizontalScroll||p.css("width",x(p)),"outside"===i.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),m.addClass("mCSB_outside").after(c)):(m.addClass("mCSB_inside").append(c),p.wrap(u)),w.call(this);var g=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];g[0].css("min-height",g[0].height()),g[1].css("min-width",g[1].width())},x=function(t){var o=[t[0].scrollWidth,Math.max.apply(Math,t.children().map(function(){return e(this).outerWidth(!0)}).get())],a=t.parent().width();return o[0]>a?o[0]:o[1]>a?o[1]:"100%"},_=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx+"_container");if(n.advanced.autoExpandHorizontalScroll&&"y"!==n.axis){i.css({width:"auto","min-width":0,"overflow-x":"scroll"});var r=Math.ceil(i[0].scrollWidth);3===n.advanced.autoExpandHorizontalScroll||2!==n.advanced.autoExpandHorizontalScroll&&r>i.parent().width()?i.css({width:r,"min-width":"100%","overflow-x":"inherit"}):i.css({"overflow-x":"inherit",position:"absolute"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(i[0].getBoundingClientRect().right+.4)-Math.floor(i[0].getBoundingClientRect().left),"min-width":"100%",position:"relative"}).unwrap()}},w=function(){var t=e(this),o=t.data(a),n=o.opt,i=e(".mCSB_"+o.idx+"_scrollbar:first"),r=ee(n.scrollButtons.tabindex)?"tabindex='"+n.scrollButtons.tabindex+"'":"",l=["<a href='#' class='"+d[13]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+d[14]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+d[15]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+d[16]+"' oncontextmenu='return false;' "+r+" />"],s=["x"===n.axis?l[2]:l[0],"x"===n.axis?l[3]:l[1],l[2],l[3]];n.scrollButtons.enable&&i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])},S=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[n.height()/i.outerHeight(!1),n.width()/i.outerWidth(!1)],c=[parseInt(r[0].css("min-height")),Math.round(l[0]*r[0].parent().height()),parseInt(r[1].css("min-width")),Math.round(l[1]*r[1].parent().width())],d=s&&c[1]<c[0]?c[0]:c[1],u=s&&c[3]<c[2]?c[2]:c[3];r[0].css({height:d,"max-height":r[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":c[0]+"px"}),r[1].css({width:u,"max-width":r[1].parent().width()-10})},b=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[i.outerHeight(!1)-n.height(),i.outerWidth(!1)-n.width()],s=[l[0]/(r[0].parent().height()-r[0].height()),l[1]/(r[1].parent().width()-r[1].width())];o.scrollRatio={y:s[0],x:s[1]}},C=function(e,t,o){var a=o?d[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(d[0]+" "+a),n.toggleClass(d[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(d[0]),n.removeClass(d[1])):(e.addClass(d[0]),n.addClass(d[1])))},y=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=null==o.overflowed?i.height():i.outerHeight(!1),l=null==o.overflowed?i.width():i.outerWidth(!1),s=i[0].scrollHeight,c=i[0].scrollWidth;return s>r&&(r=s),c>l&&(l=c),[r>n.height(),l>n.width()]},B=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx),r=e("#mCSB_"+o.idx+"_container"),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(N(t),("x"!==n.axis&&!o.overflowed[0]||"y"===n.axis&&o.overflowed[0])&&(l[0].add(r).css("top",0),V(t,"_resetY")),"y"!==n.axis&&!o.overflowed[1]||"x"===n.axis&&o.overflowed[1]){var s=dx=0;"rtl"===o.langDir&&(s=i.width()-r.outerWidth(!1),dx=Math.abs(s/o.scrollRatio.x)),r.css("left",s),l[1].css("left",dx),V(t,"_resetX")}},T=function(){function t(){r=setTimeout(function(){e.event.special.mousewheel?(clearTimeout(r),R.call(o[0])):t()},100)}var o=e(this),n=o.data(a),i=n.opt;if(!n.bindEvents){if(I.call(this),i.contentTouchScroll&&D.call(this),E.call(this),i.mouseWheel.enable){var r;t()}L.call(this),P.call(this),i.advanced.autoScrollOnFocus&&z.call(this),i.scrollButtons.enable&&H.call(this),i.keyboard.enable&&U.call(this),n.bindEvents=!0}},k=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=".mCSB_"+o.idx+"_scrollbar",l=e("#mCSB_"+o.idx+",#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,"+r+" ."+d[12]+",#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal,"+r+">a"),s=e("#mCSB_"+o.idx+"_container");n.advanced.releaseDraggableSelectors&&l.add(e(n.advanced.releaseDraggableSelectors)),n.advanced.extraDraggableSelectors&&l.add(e(n.advanced.extraDraggableSelectors)),o.bindEvents&&(e(document).add(e(top.document)).unbind("."+i),l.each(function(){e(this).unbind("."+i)}),clearTimeout(t[0]._focusTimeout),K(t[0],"_focusTimeout"),clearTimeout(o.sequential.step),K(o.sequential,"step"),clearTimeout(s[0].onCompleteTimeout),K(s[0],"onCompleteTimeout"),o.bindEvents=!1)},M=function(t){var o=e(this),n=o.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container_wrapper"),l=r.length?r:e("#mCSB_"+n.idx+"_container"),s=[e("#mCSB_"+n.idx+"_scrollbar_vertical"),e("#mCSB_"+n.idx+"_scrollbar_horizontal")],c=[s[0].find(".mCSB_dragger"),s[1].find(".mCSB_dragger")];"x"!==i.axis&&(n.overflowed[0]&&!t?(s[0].add(c[0]).add(s[0].children("a")).css("display","block"),l.removeClass(d[8]+" "+d[10])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[0].css("display","none"),l.removeClass(d[10])):(s[0].css("display","none"),l.addClass(d[10])),l.addClass(d[8]))),"y"!==i.axis&&(n.overflowed[1]&&!t?(s[1].add(c[1]).add(s[1].children("a")).css("display","block"),l.removeClass(d[9]+" "+d[11])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[1].css("display","none"),l.removeClass(d[11])):(s[1].css("display","none"),l.addClass(d[11])),l.addClass(d[9]))),n.overflowed[0]||n.overflowed[1]?o.removeClass(d[5]):o.addClass(d[5])},O=function(t){var o=t.type,a=t.target.ownerDocument!==document?[e(frameElement).offset().top,e(frameElement).offset().left]:null,n=t.target.ownerDocument!==top.document?[e(t.view.frameElement).offset().top,e(t.view.frameElement).offset().left]:[0,0];switch(o){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return a?[t.originalEvent.pageY-a[0]+n[0],t.originalEvent.pageX-a[1]+n[1],!1]:[t.originalEvent.pageY,t.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var i=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0],r=t.originalEvent.touches.length||t.originalEvent.changedTouches.length;return t.target.ownerDocument!==document?[i.screenY,i.screenX,r>1]:[i.pageY,i.pageX,r>1];default:return a?[t.pageY-a[0]+n[0],t.pageX-a[1]+n[1],!1]:[t.pageY,t.pageX,!1]}},I=function(){function t(e){var t=m.find("iframe");if(t.length){var o=e?"auto":"none";t.css("pointer-events",o)}}function o(e,t,o,a){if(m[0].idleTimer=u.scrollInertia<233?250:0,n.attr("id")===h[1])var i="x",r=(n[0].offsetLeft-t+a)*d.scrollRatio.x;else var i="y",r=(n[0].offsetTop-e+o)*d.scrollRatio.y;V(l,r.toString(),{dir:i,drag:!0})}var n,i,r,l=e(this),d=l.data(a),u=d.opt,f=a+"_"+d.idx,h=["mCSB_"+d.idx+"_dragger_vertical","mCSB_"+d.idx+"_dragger_horizontal"],m=e("#mCSB_"+d.idx+"_container"),p=e("#"+h[0]+",#"+h[1]),g=u.advanced.releaseDraggableSelectors?p.add(e(u.advanced.releaseDraggableSelectors)):p,v=u.advanced.extraDraggableSelectors?e(top.document).add(e(u.advanced.extraDraggableSelectors)):e(top.document);p.bind("mousedown."+f+" touchstart."+f+" pointerdown."+f+" MSPointerDown."+f,function(o){if(o.stopImmediatePropagation(),o.preventDefault(),Z(o)){c=!0,s&&(document.onselectstart=function(){return!1}),t(!1),N(l),n=e(this);var a=n.offset(),d=O(o)[0]-a.top,f=O(o)[1]-a.left,h=n.height()+a.top,m=n.width()+a.left;h>d&&d>0&&m>f&&f>0&&(i=d,r=f),C(n,"active",u.autoExpandScrollbar)}}).bind("touchmove."+f,function(e){e.stopImmediatePropagation(),e.preventDefault();var t=n.offset(),a=O(e)[0]-t.top,l=O(e)[1]-t.left;o(i,r,a,l)}),e(document).add(v).bind("mousemove."+f+" pointermove."+f+" MSPointerMove."+f,function(e){if(n){var t=n.offset(),a=O(e)[0]-t.top,l=O(e)[1]-t.left;if(i===a&&r===l)return;o(i,r,a,l)}}).add(g).bind("mouseup."+f+" touchend."+f+" pointerup."+f+" MSPointerUp."+f,function(e){n&&(C(n,"active",u.autoExpandScrollbar),n=null),c=!1,s&&(document.onselectstart=null),t(!0)})},D=function(){function o(e){if(!$(e)||c||O(e)[2])return void(t=0);t=1,b=0,C=0,d=1,y.removeClass("mCS_touch_action");var o=I.offset();u=O(e)[0]-o.top,f=O(e)[1]-o.left,z=[O(e)[0],O(e)[1]]}function n(e){if($(e)&&!c&&!O(e)[2]&&(T.documentTouchScroll||e.preventDefault(),e.stopImmediatePropagation(),(!C||b)&&d)){g=G();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left,n="mcsLinearOut";if(E.push(o),R.push(a),z[2]=Math.abs(O(e)[0]-z[0]),z[3]=Math.abs(O(e)[1]-z[1]),B.overflowed[0])var i=D[0].parent().height()-D[0].height(),r=u-o>0&&o-u>-(i*B.scrollRatio.y)&&(2*z[3]<z[2]||"yx"===T.axis);if(B.overflowed[1])var l=D[1].parent().width()-D[1].width(),h=f-a>0&&a-f>-(l*B.scrollRatio.x)&&(2*z[2]<z[3]||"yx"===T.axis);r||h?(U||e.preventDefault(),b=1):(C=1,y.addClass("mCS_touch_action")),U&&e.preventDefault(),w="yx"===T.axis?[u-o,f-a]:"x"===T.axis?[null,f-a]:[u-o,null],I[0].idleTimer=250,B.overflowed[0]&&s(w[0],A,n,"y","all",!0),B.overflowed[1]&&s(w[1],A,n,"x",L,!0)}}function i(e){if(!$(e)||c||O(e)[2])return void(t=0);t=1,e.stopImmediatePropagation(),N(y),p=G();var o=M.offset();h=O(e)[0]-o.top,m=O(e)[1]-o.left,E=[],R=[]}function r(e){if($(e)&&!c&&!O(e)[2]){d=0,e.stopImmediatePropagation(),b=0,C=0,v=G();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left;if(!(v-g>30)){_=1e3/(v-p);var n="mcsEaseOut",i=2.5>_,r=i?[E[E.length-2],R[R.length-2]]:[0,0];x=i?[o-r[0],a-r[1]]:[o-h,a-m];var u=[Math.abs(x[0]),Math.abs(x[1])];_=i?[Math.abs(x[0]/4),Math.abs(x[1]/4)]:[_,_];var f=[Math.abs(I[0].offsetTop)-x[0]*l(u[0]/_[0],_[0]),Math.abs(I[0].offsetLeft)-x[1]*l(u[1]/_[1],_[1])];w="yx"===T.axis?[f[0],f[1]]:"x"===T.axis?[null,f[1]]:[f[0],null],S=[4*u[0]+T.scrollInertia,4*u[1]+T.scrollInertia];var y=parseInt(T.contentTouchScroll)||0;w[0]=u[0]>y?w[0]:0,w[1]=u[1]>y?w[1]:0,B.overflowed[0]&&s(w[0],S[0],n,"y",L,!1),B.overflowed[1]&&s(w[1],S[1],n,"x",L,!1)}}}function l(e,t){var o=[1.5*t,2*t,t/1.5,t/2];return e>90?t>4?o[0]:o[3]:e>60?t>3?o[3]:o[2]:e>30?t>8?o[1]:t>6?o[0]:t>4?t:o[2]:t>8?t:o[3]}function s(e,t,o,a,n,i){e&&V(y,e.toString(),{dur:t,scrollEasing:o,dir:a,overwrite:n,drag:i})}var d,u,f,h,m,p,g,v,x,_,w,S,b,C,y=e(this),B=y.data(a),T=B.opt,k=a+"_"+B.idx,M=e("#mCSB_"+B.idx),I=e("#mCSB_"+B.idx+"_container"),D=[e("#mCSB_"+B.idx+"_dragger_vertical"),e("#mCSB_"+B.idx+"_dragger_horizontal")],E=[],R=[],A=0,L="yx"===T.axis?"none":"all",z=[],P=I.find("iframe"),H=["touchstart."+k+" pointerdown."+k+" MSPointerDown."+k,"touchmove."+k+" pointermove."+k+" MSPointerMove."+k,"touchend."+k+" pointerup."+k+" MSPointerUp."+k],U=void 0!==document.body.style.touchAction;I.bind(H[0],function(e){o(e)}).bind(H[1],function(e){n(e)}),M.bind(H[0],function(e){i(e)}).bind(H[2],function(e){r(e)}),P.length&&P.each(function(){e(this).load(function(){W(this)&&e(this.contentDocument||this.contentWindow.document).bind(H[0],function(e){o(e),i(e)}).bind(H[1],function(e){n(e)}).bind(H[2],function(e){r(e)})})})},E=function(){function o(){return window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type?document.selection.createRange().text:0}function n(e,t,o){d.type=o&&i?"stepped":"stepless",d.scrollAmount=10,F(r,e,t,"mcsLinearOut",o?60:null)}var i,r=e(this),l=r.data(a),s=l.opt,d=l.sequential,u=a+"_"+l.idx,f=e("#mCSB_"+l.idx+"_container"),h=f.parent();f.bind("mousedown."+u,function(e){t||i||(i=1,c=!0)}).add(document).bind("mousemove."+u,function(e){if(!t&&i&&o()){var a=f.offset(),r=O(e)[0]-a.top+f[0].offsetTop,c=O(e)[1]-a.left+f[0].offsetLeft;r>0&&r<h.height()&&c>0&&c<h.width()?d.step&&n("off",null,"stepped"):("x"!==s.axis&&l.overflowed[0]&&(0>r?n("on",38):r>h.height()&&n("on",40)),"y"!==s.axis&&l.overflowed[1]&&(0>c?n("on",37):c>h.width()&&n("on",39)))}}).bind("mouseup."+u+" dragend."+u,function(e){t||(i&&(i=0,n("off",null)),c=!1)})},R=function(){function t(t,a){if(N(o),!A(o,t.target)){var r="auto"!==i.mouseWheel.deltaFactor?parseInt(i.mouseWheel.deltaFactor):s&&t.deltaFactor<100?100:t.deltaFactor||100,d=i.scrollInertia;if("x"===i.axis||"x"===i.mouseWheel.axis)var u="x",f=[Math.round(r*n.scrollRatio.x),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.width()?.9*l.width():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetLeft),p=c[1][0].offsetLeft,g=c[1].parent().width()-c[1].width(),v=t.deltaX||t.deltaY||a;else var u="y",f=[Math.round(r*n.scrollRatio.y),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.height()?.9*l.height():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetTop),p=c[0][0].offsetTop,g=c[0].parent().height()-c[0].height(),v=t.deltaY||a;"y"===u&&!n.overflowed[0]||"x"===u&&!n.overflowed[1]||((i.mouseWheel.invert||t.webkitDirectionInvertedFromDevice)&&(v=-v),i.mouseWheel.normalizeDelta&&(v=0>v?-1:1),(v>0&&0!==p||0>v&&p!==g||i.mouseWheel.preventDefault)&&(t.stopImmediatePropagation(),t.preventDefault()),t.deltaFactor<2&&!i.mouseWheel.normalizeDelta&&(h=t.deltaFactor,d=17),V(o,(m-v*h).toString(),{dir:u,dur:d}))}}if(e(this).data(a)){var o=e(this),n=o.data(a),i=n.opt,r=a+"_"+n.idx,l=e("#mCSB_"+n.idx),c=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")],d=e("#mCSB_"+n.idx+"_container").find("iframe");d.length&&d.each(function(){e(this).load(function(){W(this)&&e(this.contentDocument||this.contentWindow.document).bind("mousewheel."+r,function(e,o){t(e,o)})})}),l.bind("mousewheel."+r,function(e,o){t(e,o)})}},W=function(e){var t=null;try{var o=e.contentDocument||e.contentWindow.document;t=o.body.innerHTML}catch(a){}return null!==t},A=function(t,o){var n=o.nodeName.toLowerCase(),i=t.data(a).opt.mouseWheel.disableOver,r=["select","textarea"];return e.inArray(n,i)>-1&&!(e.inArray(n,r)>-1&&!e(o).is(":focus"))},L=function(){var t,o=e(this),n=o.data(a),i=a+"_"+n.idx,r=e("#mCSB_"+n.idx+"_container"),l=r.parent(),s=e(".mCSB_"+n.idx+"_scrollbar ."+d[12]);s.bind("mousedown."+i+" touchstart."+i+" pointerdown."+i+" MSPointerDown."+i,function(o){c=!0,e(o.target).hasClass("mCSB_dragger")||(t=1)}).bind("touchend."+i+" pointerup."+i+" MSPointerUp."+i,function(e){c=!1}).bind("click."+i,function(a){if(t&&(t=0,e(a.target).hasClass(d[12])||e(a.target).hasClass("mCSB_draggerRail"))){N(o);var i=e(this),s=i.find(".mCSB_dragger");if(i.parent(".mCSB_scrollTools_horizontal").length>0){if(!n.overflowed[1])return;var c="x",u=a.pageX>s.offset().left?-1:1,f=Math.abs(r[0].offsetLeft)-.9*u*l.width()}else{if(!n.overflowed[0])return;var c="y",u=a.pageY>s.offset().top?-1:1,f=Math.abs(r[0].offsetTop)-.9*u*l.height()}V(o,f.toString(),{dir:c,scrollEasing:"mcsEaseInOut"})}})},z=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=e("#mCSB_"+o.idx+"_container"),l=r.parent();r.bind("focusin."+i,function(o){var a=e(document.activeElement),i=r.find(".mCustomScrollBox").length,s=0;a.is(n.advanced.autoScrollOnFocus)&&(N(t),clearTimeout(t[0]._focusTimeout),t[0]._focusTimer=i?(s+17)*i:0,t[0]._focusTimeout=setTimeout(function(){var e=[te(a)[0],te(a)[1]],o=[r[0].offsetTop,r[0].offsetLeft],i=[o[0]+e[0]>=0&&o[0]+e[0]<l.height()-a.outerHeight(!1),o[1]+e[1]>=0&&o[0]+e[1]<l.width()-a.outerWidth(!1)],c="yx"!==n.axis||i[0]||i[1]?"all":"none";"x"===n.axis||i[0]||V(t,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:c,dur:s}),"y"===n.axis||i[1]||V(t,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:c,dur:s})},t[0]._focusTimer))})},P=function(){var t=e(this),o=t.data(a),n=a+"_"+o.idx,i=e("#mCSB_"+o.idx+"_container").parent();i.bind("scroll."+n,function(t){(0!==i.scrollTop()||0!==i.scrollLeft())&&e(".mCSB_"+o.idx+"_scrollbar").css("visibility","hidden")})},H=function(){var t=e(this),o=t.data(a),n=o.opt,i=o.sequential,r=a+"_"+o.idx,l=".mCSB_"+o.idx+"_scrollbar",s=e(l+">a");s.bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r+" mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r+" mouseout."+r+" pointerout."+r+" MSPointerOut."+r+" click."+r,function(a){function r(e,o){i.scrollAmount=n.scrollButtons.scrollAmount,F(t,e,o)}if(a.preventDefault(),Z(a)){var l=e(this).attr("class");switch(i.type=n.scrollButtons.scrollType,a.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===i.type)return;c=!0,o.tweenRunning=!1,r("on",l);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===i.type)return;c=!1,i.dir&&r("off",l);break;case"click":if("stepped"!==i.type||o.tweenRunning)return;r("on",l)}}})},U=function(){function t(t){function a(e,t){r.type=i.keyboard.scrollType,r.scrollAmount=i.keyboard.scrollAmount,"stepped"===r.type&&n.tweenRunning||F(o,e,t)}switch(t.type){case"blur":n.tweenRunning&&r.dir&&a("off",null);break;case"keydown":case"keyup":var l=t.keyCode?t.keyCode:t.which,s="on";if("x"!==i.axis&&(38===l||40===l)||"y"!==i.axis&&(37===l||39===l)){if((38===l||40===l)&&!n.overflowed[0]||(37===l||39===l)&&!n.overflowed[1])return;"keyup"===t.type&&(s="off"),e(document.activeElement).is(u)||(t.preventDefault(),t.stopImmediatePropagation(),a(s,l))}else if(33===l||34===l){if((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type){N(o);var f=34===l?-1:1;if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=Math.abs(c[0].offsetLeft)-.9*f*d.width();else var h="y",m=Math.abs(c[0].offsetTop)-.9*f*d.height();V(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}else if((35===l||36===l)&&!e(document.activeElement).is(u)&&((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type)){if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=35===l?Math.abs(d.width()-c.outerWidth(!1)):0;else var h="y",m=35===l?Math.abs(d.height()-c.outerHeight(!1)):0;V(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}}var o=e(this),n=o.data(a),i=n.opt,r=n.sequential,l=a+"_"+n.idx,s=e("#mCSB_"+n.idx),c=e("#mCSB_"+n.idx+"_container"),d=c.parent(),u="input,textarea,select,datalist,keygen,[contenteditable='true']",f=c.find("iframe"),h=["blur."+l+" keydown."+l+" keyup."+l];f.length&&f.each(function(){e(this).load(function(){W(this)&&e(this.contentDocument||this.contentWindow.document).bind(h[0],function(e){t(e)})})}),s.attr("tabindex","0").bind(h[0],function(e){t(e)})},F=function(t,o,n,i,r){function l(e){u.snapAmount&&(f.scrollAmount=u.snapAmount instanceof Array?"x"===f.dir[0]?u.snapAmount[1]:u.snapAmount[0]:u.snapAmount);var o="stepped"!==f.type,a=r?r:e?o?p/1.5:g:1e3/60,n=e?o?7.5:40:2.5,s=[Math.abs(h[0].offsetTop),Math.abs(h[0].offsetLeft)],d=[c.scrollRatio.y>10?10:c.scrollRatio.y,c.scrollRatio.x>10?10:c.scrollRatio.x],m="x"===f.dir[0]?s[1]+f.dir[1]*d[1]*n:s[0]+f.dir[1]*d[0]*n,v="x"===f.dir[0]?s[1]+f.dir[1]*parseInt(f.scrollAmount):s[0]+f.dir[1]*parseInt(f.scrollAmount),x="auto"!==f.scrollAmount?v:m,_=i?i:e?o?"mcsLinearOut":"mcsEaseInOut":"mcsLinear",w=e?!0:!1;return e&&17>a&&(x="x"===f.dir[0]?s[1]:s[0]),V(t,x.toString(),{dir:f.dir[0],scrollEasing:_,dur:a,onComplete:w}),e?void(f.dir=!1):(clearTimeout(f.step),void(f.step=setTimeout(function(){l()},a)))}function s(){clearTimeout(f.step),K(f,"step"),N(t)}var c=t.data(a),u=c.opt,f=c.sequential,h=e("#mCSB_"+c.idx+"_container"),m="stepped"===f.type?!0:!1,p=u.scrollInertia<26?26:u.scrollInertia,g=u.scrollInertia<1?17:u.scrollInertia;switch(o){case"on":if(f.dir=[n===d[16]||n===d[15]||39===n||37===n?"x":"y",n===d[13]||n===d[15]||38===n||37===n?-1:1],N(t),ee(n)&&"stepped"===f.type)return;l(m);break;case"off":s(),(m||c.tweenRunning&&f.dir)&&l(!0)}},q=function(t){var o=e(this).data(a).opt,n=[];return"function"==typeof t&&(t=t()),t instanceof Array?n=t.length>1?[t[0],t[1]]:"x"===o.axis?[null,t[0]]:[t[0],null]:(n[0]=t.y?t.y:t.x||"x"===o.axis?null:t,n[1]=t.x?t.x:t.y||"y"===o.axis?null:t),"function"==typeof n[0]&&(n[0]=n[0]()),"function"==typeof n[1]&&(n[1]=n[1]()),n},Y=function(t,o){if(null!=t&&"undefined"!=typeof t){var n=e(this),i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx+"_container"),s=l.parent(),c=typeof t;o||(o="x"===r.axis?"x":"y");var d="x"===o?l.outerWidth(!1):l.outerHeight(!1),f="x"===o?l[0].offsetLeft:l[0].offsetTop,h="x"===o?"left":"top";switch(c){case"function":return t();case"object":var m=t.jquery?t:e(t);if(!m.length)return;return"x"===o?te(m)[1]:te(m)[0];case"string":case"number":if(ee(t))return Math.abs(t);if(-1!==t.indexOf("%"))return Math.abs(d*parseInt(t)/100);if(-1!==t.indexOf("-="))return Math.abs(f-parseInt(t.split("-=")[1]));if(-1!==t.indexOf("+=")){var p=f+parseInt(t.split("+=")[1]);return p>=0?0:Math.abs(p)}if(-1!==t.indexOf("px")&&ee(t.split("px")[0]))return Math.abs(t.split("px")[0]);if("top"===t||"left"===t)return 0;if("bottom"===t)return Math.abs(s.height()-l.outerHeight(!1));if("right"===t)return Math.abs(s.width()-l.outerWidth(!1));if("first"===t||"last"===t){var m=l.find(":"+t);return"x"===o?te(m)[1]:te(m)[0]}return e(t).length?"x"===o?te(e(t))[1]:te(e(t))[0]:(l.css(h,t),void u.update.call(null,n[0]))}}},X=function(t){function o(){return clearTimeout(f[0].autoUpdate),0===l.parents("html").length?void(l=null):void(f[0].autoUpdate=setTimeout(function(){return c.advanced.updateOnSelectorChange&&(s.poll.change.n=i(),s.poll.change.n!==s.poll.change.o)?(s.poll.change.o=s.poll.change.n,void r(3)):c.advanced.updateOnContentResize&&(s.poll.size.n=l[0].scrollHeight+l[0].scrollWidth+f[0].offsetHeight+l[0].offsetHeight+l[0].offsetWidth,s.poll.size.n!==s.poll.size.o)?(s.poll.size.o=s.poll.size.n,void r(1)):!c.advanced.updateOnImageLoad||"auto"===c.advanced.updateOnImageLoad&&"y"===c.axis||(s.poll.img.n=f.find("img").length,s.poll.img.n===s.poll.img.o)?void((c.advanced.updateOnSelectorChange||c.advanced.updateOnContentResize||c.advanced.updateOnImageLoad)&&o()):(s.poll.img.o=s.poll.img.n,void f.find("img").each(function(){n(this)}))},c.advanced.autoUpdateTimeout))}function n(t){function o(e,t){return function(){return t.apply(e,arguments)}}function a(){this.onload=null,e(t).addClass(d[2]),r(2)}if(e(t).hasClass(d[2]))return void r();var n=new Image;n.onload=o(n,a),n.src=t.src}function i(){c.advanced.updateOnSelectorChange===!0&&(c.advanced.updateOnSelectorChange="*");var e=0,t=f.find(c.advanced.updateOnSelectorChange);return c.advanced.updateOnSelectorChange&&t.length>0&&t.each(function(){e+=this.offsetHeight+this.offsetWidth;

}),e}function r(e){clearTimeout(f[0].autoUpdate),u.update.call(null,l[0],e)}var l=e(this),s=l.data(a),c=s.opt,f=e("#mCSB_"+s.idx+"_container");return t?(clearTimeout(f[0].autoUpdate),void K(f[0],"autoUpdate")):void o()},j=function(e,t,o){return Math.round(e/t)*t-o},N=function(t){var o=t.data(a),n=e("#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal");n.each(function(){J.call(this)})},V=function(t,o,n){function i(e){return s&&c.callbacks[e]&&"function"==typeof c.callbacks[e]}function r(){return[c.callbacks.alwaysTriggerOffsets||w>=S[0]+y,c.callbacks.alwaysTriggerOffsets||-B>=w]}function l(){var e=[h[0].offsetTop,h[0].offsetLeft],o=[x[0].offsetTop,x[0].offsetLeft],a=[h.outerHeight(!1),h.outerWidth(!1)],i=[f.height(),f.width()];t[0].mcs={content:h,top:e[0],left:e[1],draggerTop:o[0],draggerLeft:o[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(a[0])-i[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(a[1])-i[1])),direction:n.dir}}var s=t.data(a),c=s.opt,d={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:c.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},n=e.extend(d,n),u=[n.dur,n.drag?0:n.dur],f=e("#mCSB_"+s.idx),h=e("#mCSB_"+s.idx+"_container"),m=h.parent(),p=c.callbacks.onTotalScrollOffset?q.call(t,c.callbacks.onTotalScrollOffset):[0,0],g=c.callbacks.onTotalScrollBackOffset?q.call(t,c.callbacks.onTotalScrollBackOffset):[0,0];if(s.trigger=n.trigger,(0!==m.scrollTop()||0!==m.scrollLeft())&&(e(".mCSB_"+s.idx+"_scrollbar").css("visibility","visible"),m.scrollTop(0).scrollLeft(0)),"_resetY"!==o||s.contentReset.y||(i("onOverflowYNone")&&c.callbacks.onOverflowYNone.call(t[0]),s.contentReset.y=1),"_resetX"!==o||s.contentReset.x||(i("onOverflowXNone")&&c.callbacks.onOverflowXNone.call(t[0]),s.contentReset.x=1),"_resetY"!==o&&"_resetX"!==o){if(!s.contentReset.y&&t[0].mcs||!s.overflowed[0]||(i("onOverflowY")&&c.callbacks.onOverflowY.call(t[0]),s.contentReset.x=null),!s.contentReset.x&&t[0].mcs||!s.overflowed[1]||(i("onOverflowX")&&c.callbacks.onOverflowX.call(t[0]),s.contentReset.x=null),c.snapAmount){var v=c.snapAmount instanceof Array?"x"===n.dir?c.snapAmount[1]:c.snapAmount[0]:c.snapAmount;o=j(o,v,c.snapOffset)}switch(n.dir){case"x":var x=e("#mCSB_"+s.idx+"_dragger_horizontal"),_="left",w=h[0].offsetLeft,S=[f.width()-h.outerWidth(!1),x.parent().width()-x.width()],b=[o,0===o?0:o/s.scrollRatio.x],y=p[1],B=g[1],T=y>0?y/s.scrollRatio.x:0,k=B>0?B/s.scrollRatio.x:0;break;case"y":var x=e("#mCSB_"+s.idx+"_dragger_vertical"),_="top",w=h[0].offsetTop,S=[f.height()-h.outerHeight(!1),x.parent().height()-x.height()],b=[o,0===o?0:o/s.scrollRatio.y],y=p[0],B=g[0],T=y>0?y/s.scrollRatio.y:0,k=B>0?B/s.scrollRatio.y:0}b[1]<0||0===b[0]&&0===b[1]?b=[0,0]:b[1]>=S[1]?b=[S[0],S[1]]:b[0]=-b[0],t[0].mcs||(l(),i("onInit")&&c.callbacks.onInit.call(t[0])),clearTimeout(h[0].onCompleteTimeout),Q(x[0],_,Math.round(b[1]),u[1],n.scrollEasing),(s.tweenRunning||!(0===w&&b[0]>=0||w===S[0]&&b[0]<=S[0]))&&Q(h[0],_,Math.round(b[0]),u[0],n.scrollEasing,n.overwrite,{onStart:function(){n.callbacks&&n.onStart&&!s.tweenRunning&&(i("onScrollStart")&&(l(),c.callbacks.onScrollStart.call(t[0])),s.tweenRunning=!0,C(x),s.cbOffsets=r())},onUpdate:function(){n.callbacks&&n.onUpdate&&i("whileScrolling")&&(l(),c.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(n.callbacks&&n.onComplete){"yx"===c.axis&&clearTimeout(h[0].onCompleteTimeout);var e=h[0].idleTimer||0;h[0].onCompleteTimeout=setTimeout(function(){i("onScroll")&&(l(),c.callbacks.onScroll.call(t[0])),i("onTotalScroll")&&b[1]>=S[1]-T&&s.cbOffsets[0]&&(l(),c.callbacks.onTotalScroll.call(t[0])),i("onTotalScrollBack")&&b[1]<=k&&s.cbOffsets[1]&&(l(),c.callbacks.onTotalScrollBack.call(t[0])),s.tweenRunning=!1,h[0].idleTimer=0,C(x,"hide")},e)}}})}},Q=function(e,t,o,a,n,i,r){function l(){S.stop||(x||m.call(),x=G()-v,s(),x>=S.time&&(S.time=x>S.time?x+f-(x-S.time):x+f-1,S.time<x+1&&(S.time=x+1)),S.time<a?S.id=h(l):g.call())}function s(){a>0?(S.currVal=u(S.time,_,b,a,n),w[t]=Math.round(S.currVal)+"px"):w[t]=o+"px",p.call()}function c(){f=1e3/60,S.time=x+f,h=window.requestAnimationFrame?window.requestAnimationFrame:function(e){return s(),setTimeout(e,.01)},S.id=h(l)}function d(){null!=S.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(S.id):clearTimeout(S.id),S.id=null)}function u(e,t,o,a,n){switch(n){case"linear":case"mcsLinear":return o*e/a+t;case"mcsLinearOut":return e/=a,e--,o*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return e/=a/2,1>e?o/2*e*e+t:(e--,-o/2*(e*(e-2)-1)+t);case"easeInOutStrong":return e/=a/2,1>e?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(-Math.pow(2,-10*e)+2)+t);case"easeInOut":case"mcsEaseInOut":return e/=a/2,1>e?o/2*e*e*e+t:(e-=2,o/2*(e*e*e+2)+t);case"easeOutSmooth":return e/=a,e--,-o*(e*e*e*e-1)+t;case"easeOutStrong":return o*(-Math.pow(2,-10*e/a)+1)+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=a)*e,r=i*e;return t+o*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}e._mTween||(e._mTween={top:{},left:{}});var f,h,r=r||{},m=r.onStart||function(){},p=r.onUpdate||function(){},g=r.onComplete||function(){},v=G(),x=0,_=e.offsetTop,w=e.style,S=e._mTween[t];"left"===t&&(_=e.offsetLeft);var b=o-_;S.stop=0,"none"!==i&&d(),c()},G=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},J=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var t=["top","left"],o=0;o<t.length;o++){var a=t[o];e._mTween[a].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(e._mTween[a].id):clearTimeout(e._mTween[a].id),e._mTween[a].id=null,e._mTween[a].stop=1)}},K=function(e,t){try{delete e[t]}catch(o){e[t]=null}},Z=function(e){return!(e.which&&1!==e.which)},$=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},ee=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},te=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]},oe=function(){function e(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}var t=e();return t?document[t]:!1};e.fn[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o].defaults=i,window[o]=!0,e(window).load(function(){e(n)[o](),e.extend(e.expr[":"],{mcsInView:e.expr[":"].mcsInView||function(t){var o,a,n=e(t),i=n.parents(".mCSB_container");if(i.length)return o=i.parent(),a=[i[0].offsetTop,i[0].offsetLeft],a[0]+te(n)[0]>=0&&a[0]+te(n)[0]<o.height()-n.outerHeight(!1)&&a[1]+te(n)[1]>=0&&a[1]+te(n)[1]<o.width()-n.outerWidth(!1)},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var o=e(t).data(a);if(o)return o.overflowed[0]||o.overflowed[1]}})})})});;

/*!
 * jQuery Validation Plugin v1.14.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2015 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "./jquery.validate"], factory );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

(function() {

	function stripHtml(value) {
		// remove html tags and space chars
		return value.replace(/<.[^<>]*?>/g, " ").replace(/&nbsp;|&#160;/gi, " ")
		// remove punctuation
		.replace(/[.(),;:!?%#$'\"_+=\/\-“”’]*/g, "");
	}

	$.validator.addMethod("maxWords", function(value, element, params) {
		return this.optional(element) || stripHtml(value).match(/\b\w+\b/g).length <= params;
	}, $.validator.format("Please enter {0} words or less."));

	$.validator.addMethod("minWords", function(value, element, params) {
		return this.optional(element) || stripHtml(value).match(/\b\w+\b/g).length >= params;
	}, $.validator.format("Please enter at least {0} words."));

	$.validator.addMethod("rangeWords", function(value, element, params) {
		var valueStripped = stripHtml(value),
			regex = /\b\w+\b/g;
		return this.optional(element) || valueStripped.match(regex).length >= params[0] && valueStripped.match(regex).length <= params[1];
	}, $.validator.format("Please enter between {0} and {1} words."));

}());

// Accept a value from a file input based on a required mimetype
$.validator.addMethod("accept", function(value, element, param) {
	// Split mime on commas in case we have multiple types we can accept
	var typeParam = typeof param === "string" ? param.replace(/\s/g, "").replace(/,/g, "|") : "image/*",
	optionalValue = this.optional(element),
	i, file;

	// Element is optional
	if (optionalValue) {
		return optionalValue;
	}

	if ($(element).attr("type") === "file") {
		// If we are using a wildcard, make it regex friendly
		typeParam = typeParam.replace(/\*/g, ".*");

		// Check if the element has a FileList before checking each file
		if (element.files && element.files.length) {
			for (i = 0; i < element.files.length; i++) {
				file = element.files[i];

				// Grab the mimetype from the loaded file, verify it matches
				if (!file.type.match(new RegExp( "\\.?(" + typeParam + ")$", "i"))) {
					return false;
				}
			}
		}
	}

	// Either return true because we've validated each file, or because the
	// browser does not support element.files and the FileList feature
	return true;
}, $.validator.format("Please enter a value with a valid mimetype."));

$.validator.addMethod("alphanumeric", function(value, element) {
	return this.optional(element) || /^\w+$/i.test(value);
}, "Letters, numbers, and underscores only please");

/*
 * Dutch bank account numbers (not 'giro' numbers) have 9 digits
 * and pass the '11 check'.
 * We accept the notation with spaces, as that is common.
 * acceptable: 123456789 or 12 34 56 789
 */
$.validator.addMethod("bankaccountNL", function(value, element) {
	if (this.optional(element)) {
		return true;
	}
	if (!(/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(value))) {
		return false;
	}
	// now '11 check'
	var account = value.replace(/ /g, ""), // remove spaces
		sum = 0,
		len = account.length,
		pos, factor, digit;
	for ( pos = 0; pos < len; pos++ ) {
		factor = len - pos;
		digit = account.substring(pos, pos + 1);
		sum = sum + factor * digit;
	}
	return sum % 11 === 0;
}, "Please specify a valid bank account number");

$.validator.addMethod("bankorgiroaccountNL", function(value, element) {
	return this.optional(element) ||
			($.validator.methods.bankaccountNL.call(this, value, element)) ||
			($.validator.methods.giroaccountNL.call(this, value, element));
}, "Please specify a valid bank or giro account number");

/**
 * BIC is the business identifier code (ISO 9362). This BIC check is not a guarantee for authenticity.
 *
 * BIC pattern: BBBBCCLLbbb (8 or 11 characters long; bbb is optional)
 *
 * BIC definition in detail:
 * - First 4 characters - bank code (only letters)
 * - Next 2 characters - ISO 3166-1 alpha-2 country code (only letters)
 * - Next 2 characters - location code (letters and digits)
 *   a. shall not start with '0' or '1'
 *   b. second character must be a letter ('O' is not allowed) or one of the following digits ('0' for test (therefore not allowed), '1' for passive participant and '2' for active participant)
 * - Last 3 characters - branch code, optional (shall not start with 'X' except in case of 'XXX' for primary office) (letters and digits)
 */
$.validator.addMethod("bic", function(value, element) {
    return this.optional( element ) || /^([A-Z]{6}[A-Z2-9][A-NP-Z1-2])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test( value );
}, "Please specify a valid BIC code");

/*
 * Código de identificación fiscal ( CIF ) is the tax identification code for Spanish legal entities
 * Further rules can be found in Spanish on http://es.wikipedia.org/wiki/C%C3%B3digo_de_identificaci%C3%B3n_fiscal
 */
$.validator.addMethod( "cifES", function( value ) {
	"use strict";

	var num = [],
		controlDigit, sum, i, count, tmp, secondDigit;

	value = value.toUpperCase();

	// Quick format test
	if ( !value.match( "((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)" ) ) {
		return false;
	}

	for ( i = 0; i < 9; i++ ) {
		num[ i ] = parseInt( value.charAt( i ), 10 );
	}

	// Algorithm for checking CIF codes
	sum = num[ 2 ] + num[ 4 ] + num[ 6 ];
	for ( count = 1; count < 8; count += 2 ) {
		tmp = ( 2 * num[ count ] ).toString();
		secondDigit = tmp.charAt( 1 );

		sum += parseInt( tmp.charAt( 0 ), 10 ) + ( secondDigit === "" ? 0 : parseInt( secondDigit, 10 ) );
	}

	/* The first (position 1) is a letter following the following criteria:
	 *	A. Corporations
	 *	B. LLCs
	 *	C. General partnerships
	 *	D. Companies limited partnerships
	 *	E. Communities of goods
	 *	F. Cooperative Societies
	 *	G. Associations
	 *	H. Communities of homeowners in horizontal property regime
	 *	J. Civil Societies
	 *	K. Old format
	 *	L. Old format
	 *	M. Old format
	 *	N. Nonresident entities
	 *	P. Local authorities
	 *	Q. Autonomous bodies, state or not, and the like, and congregations and religious institutions
	 *	R. Congregations and religious institutions (since 2008 ORDER EHA/451/2008)
	 *	S. Organs of State Administration and regions
	 *	V. Agrarian Transformation
	 *	W. Permanent establishments of non-resident in Spain
	 */
	if ( /^[ABCDEFGHJNPQRSUVW]{1}/.test( value ) ) {
		sum += "";
		controlDigit = 10 - parseInt( sum.charAt( sum.length - 1 ), 10 );
		value += controlDigit;
		return ( num[ 8 ].toString() === String.fromCharCode( 64 + controlDigit ) || num[ 8 ].toString() === value.charAt( value.length - 1 ) );
	}

	return false;

}, "Please specify a valid CIF number." );

/*
 * Brazillian CPF number (Cadastrado de Pessoas Físicas) is the equivalent of a Brazilian tax registration number.
 * CPF numbers have 11 digits in total: 9 numbers followed by 2 check numbers that are being used for validation.
 */
$.validator.addMethod("cpfBR", function(value) {
	// Removing special characters from value
	value = value.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, "");

	// Checking value to have 11 digits only
	if (value.length !== 11) {
		return false;
	}

	var sum = 0,
		firstCN, secondCN, checkResult, i;

	firstCN = parseInt(value.substring(9, 10), 10);
	secondCN = parseInt(value.substring(10, 11), 10);

	checkResult = function(sum, cn) {
		var result = (sum * 10) % 11;
		if ((result === 10) || (result === 11)) {result = 0;}
		return (result === cn);
	};

	// Checking for dump data
	if (value === "" ||
		value === "00000000000" ||
		value === "11111111111" ||
		value === "22222222222" ||
		value === "33333333333" ||
		value === "44444444444" ||
		value === "55555555555" ||
		value === "66666666666" ||
		value === "77777777777" ||
		value === "88888888888" ||
		value === "99999999999"
	) {
		return false;
	}

	// Step 1 - using first Check Number:
	for ( i = 1; i <= 9; i++ ) {
		sum = sum + parseInt(value.substring(i - 1, i), 10) * (11 - i);
	}

	// If first Check Number (CN) is valid, move to Step 2 - using second Check Number:
	if ( checkResult(sum, firstCN) ) {
		sum = 0;
		for ( i = 1; i <= 10; i++ ) {
			sum = sum + parseInt(value.substring(i - 1, i), 10) * (12 - i);
		}
		return checkResult(sum, secondCN);
	}
	return false;

}, "Please specify a valid CPF number");

/* NOTICE: Modified version of Castle.Components.Validator.CreditCardValidator
 * Redistributed under the the Apache License 2.0 at http://www.apache.org/licenses/LICENSE-2.0
 * Valid Types: mastercard, visa, amex, dinersclub, enroute, discover, jcb, unknown, all (overrides all other settings)
 */
$.validator.addMethod("creditcardtypes", function(value, element, param) {
	if (/[^0-9\-]+/.test(value)) {
		return false;
	}

	value = value.replace(/\D/g, "");

	var validTypes = 0x0000;

	if (param.mastercard) {
		validTypes |= 0x0001;
	}
	if (param.visa) {
		validTypes |= 0x0002;
	}
	if (param.amex) {
		validTypes |= 0x0004;
	}
	if (param.dinersclub) {
		validTypes |= 0x0008;
	}
	if (param.enroute) {
		validTypes |= 0x0010;
	}
	if (param.discover) {
		validTypes |= 0x0020;
	}
	if (param.jcb) {
		validTypes |= 0x0040;
	}
	if (param.unknown) {
		validTypes |= 0x0080;
	}
	if (param.all) {
		validTypes = 0x0001 | 0x0002 | 0x0004 | 0x0008 | 0x0010 | 0x0020 | 0x0040 | 0x0080;
	}
	if (validTypes & 0x0001 && /^(5[12345])/.test(value)) { //mastercard
		return value.length === 16;
	}
	if (validTypes & 0x0002 && /^(4)/.test(value)) { //visa
		return value.length === 16;
	}
	if (validTypes & 0x0004 && /^(3[47])/.test(value)) { //amex
		return value.length === 15;
	}
	if (validTypes & 0x0008 && /^(3(0[012345]|[68]))/.test(value)) { //dinersclub
		return value.length === 14;
	}
	if (validTypes & 0x0010 && /^(2(014|149))/.test(value)) { //enroute
		return value.length === 15;
	}
	if (validTypes & 0x0020 && /^(6011)/.test(value)) { //discover
		return value.length === 16;
	}
	if (validTypes & 0x0040 && /^(3)/.test(value)) { //jcb
		return value.length === 16;
	}
	if (validTypes & 0x0040 && /^(2131|1800)/.test(value)) { //jcb
		return value.length === 15;
	}
	if (validTypes & 0x0080) { //unknown
		return true;
	}
	return false;
}, "Please enter a valid credit card number.");

/**
 * Validates currencies with any given symbols by @jameslouiz
 * Symbols can be optional or required. Symbols required by default
 *
 * Usage examples:
 *  currency: ["£", false] - Use false for soft currency validation
 *  currency: ["$", false]
 *  currency: ["RM", false] - also works with text based symbols such as "RM" - Malaysia Ringgit etc
 *
 *  <input class="currencyInput" name="currencyInput">
 *
 * Soft symbol checking
 *  currencyInput: {
 *     currency: ["$", false]
 *  }
 *
 * Strict symbol checking (default)
 *  currencyInput: {
 *     currency: "$"
 *     //OR
 *     currency: ["$", true]
 *  }
 *
 * Multiple Symbols
 *  currencyInput: {
 *     currency: "$,£,¢"
 *  }
 */
$.validator.addMethod("currency", function(value, element, param) {
    var isParamString = typeof param === "string",
        symbol = isParamString ? param : param[0],
        soft = isParamString ? true : param[1],
        regex;

    symbol = symbol.replace(/,/g, "");
    symbol = soft ? symbol + "]" : symbol + "]?";
    regex = "^[" + symbol + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$";
    regex = new RegExp(regex);
    return this.optional(element) || regex.test(value);

}, "Please specify a valid currency");

$.validator.addMethod("dateFA", function(value, element) {
	return this.optional(element) || /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(value);
}, $.validator.messages.date);

/**
 * Return true, if the value is a valid date, also making this formal check dd/mm/yyyy.
 *
 * @example $.validator.methods.date("01/01/1900")
 * @result true
 *
 * @example $.validator.methods.date("01/13/1990")
 * @result false
 *
 * @example $.validator.methods.date("01.01.1900")
 * @result false
 *
 * @example <input name="pippo" class="{dateITA:true}" />
 * @desc Declares an optional input element whose value must be a valid date.
 *
 * @name $.validator.methods.dateITA
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod("dateITA", function(value, element) {
	var check = false,
		re = /^\d{1,2}\/\d{1,2}\/\d{4}$/,
		adata, gg, mm, aaaa, xdata;
	if ( re.test(value)) {
		adata = value.split("/");
		gg = parseInt(adata[0], 10);
		mm = parseInt(adata[1], 10);
		aaaa = parseInt(adata[2], 10);
		xdata = new Date(Date.UTC(aaaa, mm - 1, gg, 12, 0, 0, 0));
		if ( ( xdata.getUTCFullYear() === aaaa ) && ( xdata.getUTCMonth () === mm - 1 ) && ( xdata.getUTCDate() === gg ) ) {
			check = true;
		} else {
			check = false;
		}
	} else {
		check = false;
	}
	return this.optional(element) || check;
}, $.validator.messages.date);

$.validator.addMethod("dateNL", function(value, element) {
	return this.optional(element) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(value);
}, $.validator.messages.date);

// Older "accept" file extension method. Old docs: http://docs.jquery.com/Plugins/Validation/Methods/accept
$.validator.addMethod("extension", function(value, element, param) {
	param = typeof param === "string" ? param.replace(/,/g, "|") : "png|jpe?g|gif";
	return this.optional(element) || value.match(new RegExp("\\.(" + param + ")$", "i"));
}, $.validator.format("Please enter a value with a valid extension."));

/**
 * Dutch giro account numbers (not bank numbers) have max 7 digits
 */
$.validator.addMethod("giroaccountNL", function(value, element) {
	return this.optional(element) || /^[0-9]{1,7}$/.test(value);
}, "Please specify a valid giro account number");

/**
 * IBAN is the international bank account number.
 * It has a country - specific format, that is checked here too
 */
$.validator.addMethod("iban", function(value, element) {
	// some quick simple tests to prevent needless work
	if (this.optional(element)) {
		return true;
	}

	// remove spaces and to upper case
	var iban = value.replace(/ /g, "").toUpperCase(),
		ibancheckdigits = "",
		leadingZeroes = true,
		cRest = "",
		cOperator = "",
		countrycode, ibancheck, charAt, cChar, bbanpattern, bbancountrypatterns, ibanregexp, i, p;

	// check the country code and find the country specific format
	countrycode = iban.substring(0, 2);
	bbancountrypatterns = {
		"AL": "\\d{8}[\\dA-Z]{16}",
		"AD": "\\d{8}[\\dA-Z]{12}",
		"AT": "\\d{16}",
		"AZ": "[\\dA-Z]{4}\\d{20}",
		"BE": "\\d{12}",
		"BH": "[A-Z]{4}[\\dA-Z]{14}",
		"BA": "\\d{16}",
		"BR": "\\d{23}[A-Z][\\dA-Z]",
		"BG": "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
		"CR": "\\d{17}",
		"HR": "\\d{17}",
		"CY": "\\d{8}[\\dA-Z]{16}",
		"CZ": "\\d{20}",
		"DK": "\\d{14}",
		"DO": "[A-Z]{4}\\d{20}",
		"EE": "\\d{16}",
		"FO": "\\d{14}",
		"FI": "\\d{14}",
		"FR": "\\d{10}[\\dA-Z]{11}\\d{2}",
		"GE": "[\\dA-Z]{2}\\d{16}",
		"DE": "\\d{18}",
		"GI": "[A-Z]{4}[\\dA-Z]{15}",
		"GR": "\\d{7}[\\dA-Z]{16}",
		"GL": "\\d{14}",
		"GT": "[\\dA-Z]{4}[\\dA-Z]{20}",
		"HU": "\\d{24}",
		"IS": "\\d{22}",
		"IE": "[\\dA-Z]{4}\\d{14}",
		"IL": "\\d{19}",
		"IT": "[A-Z]\\d{10}[\\dA-Z]{12}",
		"KZ": "\\d{3}[\\dA-Z]{13}",
		"KW": "[A-Z]{4}[\\dA-Z]{22}",
		"LV": "[A-Z]{4}[\\dA-Z]{13}",
		"LB": "\\d{4}[\\dA-Z]{20}",
		"LI": "\\d{5}[\\dA-Z]{12}",
		"LT": "\\d{16}",
		"LU": "\\d{3}[\\dA-Z]{13}",
		"MK": "\\d{3}[\\dA-Z]{10}\\d{2}",
		"MT": "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
		"MR": "\\d{23}",
		"MU": "[A-Z]{4}\\d{19}[A-Z]{3}",
		"MC": "\\d{10}[\\dA-Z]{11}\\d{2}",
		"MD": "[\\dA-Z]{2}\\d{18}",
		"ME": "\\d{18}",
		"NL": "[A-Z]{4}\\d{10}",
		"NO": "\\d{11}",
		"PK": "[\\dA-Z]{4}\\d{16}",
		"PS": "[\\dA-Z]{4}\\d{21}",
		"PL": "\\d{24}",
		"PT": "\\d{21}",
		"RO": "[A-Z]{4}[\\dA-Z]{16}",
		"SM": "[A-Z]\\d{10}[\\dA-Z]{12}",
		"SA": "\\d{2}[\\dA-Z]{18}",
		"RS": "\\d{18}",
		"SK": "\\d{20}",
		"SI": "\\d{15}",
		"ES": "\\d{20}",
		"SE": "\\d{20}",
		"CH": "\\d{5}[\\dA-Z]{12}",
		"TN": "\\d{20}",
		"TR": "\\d{5}[\\dA-Z]{17}",
		"AE": "\\d{3}\\d{16}",
		"GB": "[A-Z]{4}\\d{14}",
		"VG": "[\\dA-Z]{4}\\d{16}"
	};

	bbanpattern = bbancountrypatterns[countrycode];
	// As new countries will start using IBAN in the
	// future, we only check if the countrycode is known.
	// This prevents false negatives, while almost all
	// false positives introduced by this, will be caught
	// by the checksum validation below anyway.
	// Strict checking should return FALSE for unknown
	// countries.
	if (typeof bbanpattern !== "undefined") {
		ibanregexp = new RegExp("^[A-Z]{2}\\d{2}" + bbanpattern + "$", "");
		if (!(ibanregexp.test(iban))) {
			return false; // invalid country specific format
		}
	}

	// now check the checksum, first convert to digits
	ibancheck = iban.substring(4, iban.length) + iban.substring(0, 4);
	for (i = 0; i < ibancheck.length; i++) {
		charAt = ibancheck.charAt(i);
		if (charAt !== "0") {
			leadingZeroes = false;
		}
		if (!leadingZeroes) {
			ibancheckdigits += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(charAt);
		}
	}

	// calculate the result of: ibancheckdigits % 97
	for (p = 0; p < ibancheckdigits.length; p++) {
		cChar = ibancheckdigits.charAt(p);
		cOperator = "" + cRest + "" + cChar;
		cRest = cOperator % 97;
	}
	return cRest === 1;
}, "Please specify a valid IBAN");

$.validator.addMethod("integer", function(value, element) {
	return this.optional(element) || /^-?\d+$/.test(value);
}, "A positive or negative non-decimal number please");

$.validator.addMethod("ipv4", function(value, element) {
	return this.optional(element) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(value);
}, "Please enter a valid IP v4 address.");

$.validator.addMethod("ipv6", function(value, element) {
	return this.optional(element) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(value);
}, "Please enter a valid IP v6 address.");

$.validator.addMethod("lettersonly", function(value, element) {
	return this.optional(element) || /^[a-z]+$/i.test(value);
}, "Letters only please");

$.validator.addMethod("letterswithbasicpunc", function(value, element) {
	return this.optional(element) || /^[a-z\-.,()'"\s]+$/i.test(value);
}, "Letters or punctuation only please");

$.validator.addMethod("mobileNL", function(value, element) {
	return this.optional(element) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(value);
}, "Please specify a valid mobile number");

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */
$.validator.addMethod("mobileUK", function(phone_number, element) {
	phone_number = phone_number.replace(/\(|\)|\s+|-/g, "");
	return this.optional(element) || phone_number.length > 9 &&
		phone_number.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/);
}, "Please specify a valid mobile number");

/*
 * The número de identidad de extranjero ( NIE )is a code used to identify the non-nationals in Spain
 */
$.validator.addMethod( "nieES", function( value ) {
	"use strict";

	value = value.toUpperCase();

	// Basic format test
	if ( !value.match( "((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)" ) ) {
		return false;
	}

	// Test NIE
	//T
	if ( /^[T]{1}/.test( value ) ) {
		return ( value[ 8 ] === /^[T]{1}[A-Z0-9]{8}$/.test( value ) );
	}

	//XYZ
	if ( /^[XYZ]{1}/.test( value ) ) {
		return (
			value[ 8 ] === "TRWAGMYFPDXBNJZSQVHLCKE".charAt(
				value.replace( "X", "0" )
					.replace( "Y", "1" )
					.replace( "Z", "2" )
					.substring( 0, 8 ) % 23
			)
		);
	}

	return false;

}, "Please specify a valid NIE number." );

/*
 * The Número de Identificación Fiscal ( NIF ) is the way tax identification used in Spain for individuals
 */
$.validator.addMethod( "nifES", function( value ) {
	"use strict";

	value = value.toUpperCase();

	// Basic format test
	if ( !value.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)") ) {
		return false;
	}

	// Test NIF
	if ( /^[0-9]{8}[A-Z]{1}$/.test( value ) ) {
		return ( "TRWAGMYFPDXBNJZSQVHLCKE".charAt( value.substring( 8, 0 ) % 23 ) === value.charAt( 8 ) );
	}
	// Test specials NIF (starts with K, L or M)
	if ( /^[KLM]{1}/.test( value ) ) {
		return ( value[ 8 ] === String.fromCharCode( 64 ) );
	}

	return false;

}, "Please specify a valid NIF number." );

jQuery.validator.addMethod( "notEqualTo", function( value, element, param ) {
	return this.optional(element) || !$.validator.methods.equalTo.call( this, value, element, param );
}, "Please enter a different value, values must not be the same." );

$.validator.addMethod("nowhitespace", function(value, element) {
	return this.optional(element) || /^\S+$/i.test(value);
}, "No white space please");

/**
* Return true if the field value matches the given format RegExp
*
* @example $.validator.methods.pattern("AR1004",element,/^AR\d{4}$/)
* @result true
*
* @example $.validator.methods.pattern("BR1004",element,/^AR\d{4}$/)
* @result false
*
* @name $.validator.methods.pattern
* @type Boolean
* @cat Plugins/Validate/Methods
*/
$.validator.addMethod("pattern", function(value, element, param) {
	if (this.optional(element)) {
		return true;
	}
	if (typeof param === "string") {
		param = new RegExp("^(?:" + param + ")$");
	}
	return param.test(value);
}, "Invalid format.");

/**
 * Dutch phone numbers have 10 digits (or 11 and start with +31).
 */
$.validator.addMethod("phoneNL", function(value, element) {
	return this.optional(element) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(value);
}, "Please specify a valid phone number.");

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */
$.validator.addMethod("phoneUK", function(phone_number, element) {
	phone_number = phone_number.replace(/\(|\)|\s+|-/g, "");
	return this.optional(element) || phone_number.length > 9 &&
		phone_number.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/);
}, "Please specify a valid phone number");

/**
 * matches US phone number format
 *
 * where the area code may not start with 1 and the prefix may not start with 1
 * allows '-' or ' ' as a separator and allows parens around area code
 * some people may want to put a '1' in front of their number
 *
 * 1(212)-999-2345 or
 * 212 999 2344 or
 * 212-999-0983
 *
 * but not
 * 111-123-5434
 * and not
 * 212 123 4567
 */
$.validator.addMethod("phoneUS", function(phone_number, element) {
	phone_number = phone_number.replace(/\s+/g, "");
	return this.optional(element) || phone_number.length > 9 &&
		phone_number.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/);
}, "Please specify a valid phone number");

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */
//Matches UK landline + mobile, accepting only 01-3 for landline or 07 for mobile to exclude many premium numbers
$.validator.addMethod("phonesUK", function(phone_number, element) {
	phone_number = phone_number.replace(/\(|\)|\s+|-/g, "");
	return this.optional(element) || phone_number.length > 9 &&
		phone_number.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/);
}, "Please specify a valid uk phone number");

/**
 * Matches a valid Canadian Postal Code
 *
 * @example jQuery.validator.methods.postalCodeCA( "H0H 0H0", element )
 * @result true
 *
 * @example jQuery.validator.methods.postalCodeCA( "H0H0H0", element )
 * @result false
 *
 * @name jQuery.validator.methods.postalCodeCA
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod( "postalCodeCA", function( value, element ) {
	return this.optional( element ) || /^[ABCEGHJKLMNPRSTVXY]\d[A-Z] \d[A-Z]\d$/.test( value );
}, "Please specify a valid postal code" );

/*
* Valida CEPs do brasileiros:
*
* Formatos aceitos:
* 99999-999
* 99.999-999
* 99999999
*/
$.validator.addMethod("postalcodeBR", function(cep_value, element) {
	return this.optional(element) || /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test( cep_value );
}, "Informe um CEP válido.");

/* Matches Italian postcode (CAP) */
$.validator.addMethod("postalcodeIT", function(value, element) {
	return this.optional(element) || /^\d{5}$/.test(value);
}, "Please specify a valid postal code");

$.validator.addMethod("postalcodeNL", function(value, element) {
	return this.optional(element) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(value);
}, "Please specify a valid postal code");

// Matches UK postcode. Does not match to UK Channel Islands that have their own postcodes (non standard UK)
$.validator.addMethod("postcodeUK", function(value, element) {
	return this.optional(element) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(value);
}, "Please specify a valid UK postcode");

/*
 * Lets you say "at least X inputs that match selector Y must be filled."
 *
 * The end result is that neither of these inputs:
 *
 *	<input class="productinfo" name="partnumber">
 *	<input class="productinfo" name="description">
 *
 *	...will validate unless at least one of them is filled.
 *
 * partnumber:	{require_from_group: [1,".productinfo"]},
 * description: {require_from_group: [1,".productinfo"]}
 *
 * options[0]: number of fields that must be filled in the group
 * options[1]: CSS selector that defines the group of conditionally required fields
 */
$.validator.addMethod("require_from_group", function(value, element, options) {
	var $fields = $(options[1], element.form),
		$fieldsFirst = $fields.eq(0),
		validator = $fieldsFirst.data("valid_req_grp") ? $fieldsFirst.data("valid_req_grp") : $.extend({}, this),
		isValid = $fields.filter(function() {
			return validator.elementValue(this);
		}).length >= options[0];

	// Store the cloned validator for future validation
	$fieldsFirst.data("valid_req_grp", validator);

	// If element isn't being validated, run each require_from_group field's validation rules
	if (!$(element).data("being_validated")) {
		$fields.data("being_validated", true);
		$fields.each(function() {
			validator.element(this);
		});
		$fields.data("being_validated", false);
	}
	return isValid;
}, $.validator.format("Please fill at least {0} of these fields."));

/*
 * Lets you say "either at least X inputs that match selector Y must be filled,
 * OR they must all be skipped (left blank)."
 *
 * The end result, is that none of these inputs:
 *
 *	<input class="productinfo" name="partnumber">
 *	<input class="productinfo" name="description">
 *	<input class="productinfo" name="color">
 *
 *	...will validate unless either at least two of them are filled,
 *	OR none of them are.
 *
 * partnumber:	{skip_or_fill_minimum: [2,".productinfo"]},
 * description: {skip_or_fill_minimum: [2,".productinfo"]},
 * color:		{skip_or_fill_minimum: [2,".productinfo"]}
 *
 * options[0]: number of fields that must be filled in the group
 * options[1]: CSS selector that defines the group of conditionally required fields
 *
 */
$.validator.addMethod("skip_or_fill_minimum", function(value, element, options) {
	var $fields = $(options[1], element.form),
		$fieldsFirst = $fields.eq(0),
		validator = $fieldsFirst.data("valid_skip") ? $fieldsFirst.data("valid_skip") : $.extend({}, this),
		numberFilled = $fields.filter(function() {
			return validator.elementValue(this);
		}).length,
		isValid = numberFilled === 0 || numberFilled >= options[0];

	// Store the cloned validator for future validation
	$fieldsFirst.data("valid_skip", validator);

	// If element isn't being validated, run each skip_or_fill_minimum field's validation rules
	if (!$(element).data("being_validated")) {
		$fields.data("being_validated", true);
		$fields.each(function() {
			validator.element(this);
		});
		$fields.data("being_validated", false);
	}
	return isValid;
}, $.validator.format("Please either skip these fields or fill at least {0} of them."));

/* Validates US States and/or Territories by @jdforsythe
 * Can be case insensitive or require capitalization - default is case insensitive
 * Can include US Territories or not - default does not
 * Can include US Military postal abbreviations (AA, AE, AP) - default does not
 *
 * Note: "States" always includes DC (District of Colombia)
 *
 * Usage examples:
 *
 *  This is the default - case insensitive, no territories, no military zones
 *  stateInput: {
 *     caseSensitive: false,
 *     includeTerritories: false,
 *     includeMilitary: false
 *  }
 *
 *  Only allow capital letters, no territories, no military zones
 *  stateInput: {
 *     caseSensitive: false
 *  }
 *
 *  Case insensitive, include territories but not military zones
 *  stateInput: {
 *     includeTerritories: true
 *  }
 *
 *  Only allow capital letters, include territories and military zones
 *  stateInput: {
 *     caseSensitive: true,
 *     includeTerritories: true,
 *     includeMilitary: true
 *  }
 *
 *
 *
 */

$.validator.addMethod("stateUS", function(value, element, options) {
	var isDefault = typeof options === "undefined",
		caseSensitive = ( isDefault || typeof options.caseSensitive === "undefined" ) ? false : options.caseSensitive,
		includeTerritories = ( isDefault || typeof options.includeTerritories === "undefined" ) ? false : options.includeTerritories,
		includeMilitary = ( isDefault || typeof options.includeMilitary === "undefined" ) ? false : options.includeMilitary,
		regex;

	if (!includeTerritories && !includeMilitary) {
		regex = "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$";
	} else if (includeTerritories && includeMilitary) {
		regex = "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$";
	} else if (includeTerritories) {
		regex = "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$";
	} else {
		regex = "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$";
	}

	regex = caseSensitive ? new RegExp(regex) : new RegExp(regex, "i");
	return this.optional(element) || regex.test(value);
},
"Please specify a valid state");

// TODO check if value starts with <, otherwise don't try stripping anything
$.validator.addMethod("strippedminlength", function(value, element, param) {
	return $(value).text().length >= param;
}, $.validator.format("Please enter at least {0} characters"));

$.validator.addMethod("time", function(value, element) {
	return this.optional(element) || /^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test(value);
}, "Please enter a valid time, between 00:00 and 23:59");

$.validator.addMethod("time12h", function(value, element) {
	return this.optional(element) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(value);
}, "Please enter a valid time in 12-hour am/pm format");

// same as url, but TLD is optional
$.validator.addMethod("url2", function(value, element) {
	return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
}, $.validator.messages.url);

/**
 * Return true, if the value is a valid vehicle identification number (VIN).
 *
 * Works with all kind of text inputs.
 *
 * @example <input type="text" size="20" name="VehicleID" class="{required:true,vinUS:true}" />
 * @desc Declares a required input element whose value must be a valid vehicle identification number.
 *
 * @name $.validator.methods.vinUS
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod("vinUS", function(v) {
	if (v.length !== 17) {
		return false;
	}

	var LL = [ "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ],
		VL = [ 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9 ],
		FL = [ 8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2 ],
		rs = 0,
		i, n, d, f, cd, cdv;

	for (i = 0; i < 17; i++) {
		f = FL[i];
		d = v.slice(i, i + 1);
		if (i === 8) {
			cdv = d;
		}
		if (!isNaN(d)) {
			d *= f;
		} else {
			for (n = 0; n < LL.length; n++) {
				if (d.toUpperCase() === LL[n]) {
					d = VL[n];
					d *= f;
					if (isNaN(cdv) && n === 8) {
						cdv = LL[n];
					}
					break;
				}
			}
		}
		rs += d;
	}
	cd = rs % 11;
	if (cd === 10) {
		cd = "X";
	}
	if (cd === cdv) {
		return true;
	}
	return false;
}, "The specified vehicle identification number (VIN) is invalid.");

$.validator.addMethod("zipcodeUS", function(value, element) {
	return this.optional(element) || /^\d{5}(-\d{4})?$/.test(value);
}, "The specified US ZIP Code is invalid");

$.validator.addMethod("ziprange", function(value, element) {
	return this.optional(element) || /^90[2-5]\d\{2\}-\d{4}$/.test(value);
}, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx");

}));;

/*! jQuery UI - v1.11.4 - 2015-11-09
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, draggable.js, droppable.js, sortable.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/^(input|select|textarea|button|object)$/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var s=0,n=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,a=n.call(arguments,1),o=0,r=a.length;r>o;o++)for(i in a[o])s=a[o][i],a[o].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(a){var o="string"==typeof a,r=n.call(arguments,1),h=this;return o?this.each(function(){var i,n=e.data(this,s);return"instance"===a?(h=n,!1):n?e.isFunction(n[a])&&"_"!==a.charAt(0)?(i=n[a].apply(n,r),i!==n&&void 0!==i?(h=i&&i.jquery?h.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+a+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+a+"'")}):(r.length&&(a=e.widget.extend.apply(null,[a].concat(r))),this.each(function(){var t=e.data(this,s);t?(t.option(a||{}),t._init&&t._init()):e.data(this,s,new i(a,this))})),h}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=s++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget;var a=!1;e(document).mouseup(function(){a=!1}),e.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!a){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var i=this,s=1===t.which,n="string"==typeof this.options.cancel&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(t)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(t)!==!1,!this._mouseStarted)?(t.preventDefault(),!0):(!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),a=!0,!0)):!0}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),a=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),e.widget("ui.draggable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(e,t){this._super(e,t),"handle"===e&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(t){var i=this.options;return this._blurActiveElement(t),this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=e(this);return e("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var i=this.document[0];if(this.handleElement.is(t.target))try{i.activeElement&&"body"!==i.activeElement.nodeName.toLowerCase()&&e(i.activeElement).blur()}catch(s){}},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===e(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._normalizeRightBottom(),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(e){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:e.pageX-this.offset.left,top:e.pageY-this.offset.top}},_mouseDrag:function(t,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,s=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.focus(),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper),n=s?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(e){return/(html|body)/i.test(e.tagName)||e===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var e=this.element.position(),t=this._isRootNode(this.scrollParent[0]);return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+(t?0:this.scrollParent.scrollTop()),left:e.left-(parseInt(this.helper.css("left"),10)||0)+(t?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options,a=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,e(a).width()-this.helperProportions.width-this.margins.left,(e(a).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=e(n.containment),s=i[0],s&&(t=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)},_convertPositionTo:function(e,t){t||(t=this.position);var i="absolute"===e?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:t.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:t.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(e,t){var i,s,n,a,o=this.options,r=this._isRootNode(this.scrollParent[0]),h=e.pageX,l=e.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),t&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a),"y"===o.axis&&(h=this.originalPageX),"x"===o.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i,s){var n=e.extend({},i,{item:s.element});s.sortables=[],e(s.options.connectToSortable).each(function(){var i=e(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",t,n))})},stop:function(t,i,s){var n=e.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,e.each(s.sortables,function(){var e=this;e.isOver?(e.isOver=0,s.cancelHelperRemoval=!0,e.cancelHelperRemoval=!1,e._storedCSS={position:e.placeholder.css("position"),top:e.placeholder.css("top"),left:e.placeholder.css("left")},e._mouseStop(t),e.options.helper=e.options._helper):(e.cancelHelperRemoval=!0,e._trigger("deactivate",t,n))})},drag:function(t,i,s){e.each(s.sortables,function(){var n=!1,a=this;a.positionAbs=s.positionAbs,a.helperProportions=s.helperProportions,a.offset.click=s.offset.click,a._intersectsWith(a.containerCache)&&(n=!0,e.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==a&&this._intersectsWith(this.containerCache)&&e.contains(a.element[0],this.element[0])&&(n=!1),n})),n?(a.isOver||(a.isOver=1,s._parent=i.helper.parent(),a.currentItem=i.helper.appendTo(a.element).data("ui-sortable-item",!0),a.options._helper=a.options.helper,a.options.helper=function(){return i.helper[0]},t.target=a.currentItem[0],a._mouseCapture(t,!0),a._mouseStart(t,!0,!0),a.offset.click.top=s.offset.click.top,a.offset.click.left=s.offset.click.left,a.offset.parent.left-=s.offset.parent.left-a.offset.parent.left,a.offset.parent.top-=s.offset.parent.top-a.offset.parent.top,s._trigger("toSortable",t),s.dropped=a.element,e.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,a.fromOutside=s),a.currentItem&&(a._mouseDrag(t),i.position=a.position)):a.isOver&&(a.isOver=0,a.cancelHelperRemoval=!0,a.options._revert=a.options.revert,a.options.revert=!1,a._trigger("out",t,a._uiHash(a)),a._mouseStop(t,!0),a.options.revert=a.options._revert,a.options.helper=a.options._helper,a.placeholder&&a.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(t),i.position=s._generatePosition(t,!0),s._trigger("fromSortable",t),s.dropped=!1,e.each(s.sortables,function(){this.refreshPositions()}))})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,i,s){var n=e("body"),a=s.options;n.css("cursor")&&(a._cursor=n.css("cursor")),n.css("cursor",a.cursor)},stop:function(t,i,s){var n=s.options;n._cursor&&e("body").css("cursor",n._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("opacity")&&(a._opacity=n.css("opacity")),n.css("opacity",a.opacity)},stop:function(t,i,s){var n=s.options;n._opacity&&e(i.helper).css("opacity",n._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(e,t,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(t,i,s){var n=s.options,a=!1,o=s.scrollParentNotHidden[0],r=s.document[0];o!==r&&"HTML"!==o.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+o.offsetHeight-t.pageY<n.scrollSensitivity?o.scrollTop=a=o.scrollTop+n.scrollSpeed:t.pageY-s.overflowOffset.top<n.scrollSensitivity&&(o.scrollTop=a=o.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+o.offsetWidth-t.pageX<n.scrollSensitivity?o.scrollLeft=a=o.scrollLeft+n.scrollSpeed:t.pageX-s.overflowOffset.left<n.scrollSensitivity&&(o.scrollLeft=a=o.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(t.pageY-e(r).scrollTop()<n.scrollSensitivity?a=e(r).scrollTop(e(r).scrollTop()-n.scrollSpeed):e(window).height()-(t.pageY-e(r).scrollTop())<n.scrollSensitivity&&(a=e(r).scrollTop(e(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(t.pageX-e(r).scrollLeft()<n.scrollSensitivity?a=e(r).scrollLeft(e(r).scrollLeft()-n.scrollSpeed):e(window).width()-(t.pageX-e(r).scrollLeft())<n.scrollSensitivity&&(a=e(r).scrollLeft(e(r).scrollLeft()+n.scrollSpeed)))),a!==!1&&e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(s,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,i,s){var n=s.options;s.snapElements=[],e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var t=e(this),i=t.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:i.top,left:i.left})})},drag:function(t,i,s){var n,a,o,r,h,l,u,d,c,p,f=s.options,m=f.snapTolerance,g=i.offset.left,v=g+s.helperProportions.width,y=i.offset.top,b=y+s.helperProportions.height;for(c=s.snapElements.length-1;c>=0;c--)h=s.snapElements[c].left-s.margins.left,l=h+s.snapElements[c].width,u=s.snapElements[c].top-s.margins.top,d=u+s.snapElements[c].height,h-m>v||g>l+m||u-m>b||y>d+m||!e.contains(s.snapElements[c].item.ownerDocument,s.snapElements[c].item)?(s.snapElements[c].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=!1):("inner"!==f.snapMode&&(n=m>=Math.abs(u-b),a=m>=Math.abs(d-y),o=m>=Math.abs(h-v),r=m>=Math.abs(l-g),n&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),p=n||a||o||r,"outer"!==f.snapMode&&(n=m>=Math.abs(u-y),a=m>=Math.abs(d-b),o=m>=Math.abs(h-g),r=m>=Math.abs(l-v),n&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d-s.helperProportions.height,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[c].snapping&&(n||a||o||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=n||a||o||r||p)}}),e.ui.plugin.add("draggable","stack",{start:function(t,i,s){var n,a=s.options,o=e.makeArray(e(a.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});o.length&&(n=parseInt(e(o[0]).css("zIndex"),10)||0,e(o).each(function(t){e(this).css("zIndex",n+t)}),this.css("zIndex",n+o.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("zIndex")&&(a._zIndex=n.css("zIndex")),n.css("zIndex",a.zIndex)},stop:function(t,i,s){var n=s.options;n._zIndex&&e(i.helper).css("zIndex",n._zIndex)}}),e.ui.draggable,e.widget("ui.droppable",{version:"1.11.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t,i=this.options,s=i.accept;
this.isover=!1,this.isout=!0,this.accept=e.isFunction(s)?s:function(e){return e.is(s)},this.proportions=function(){return arguments.length?(t=arguments[0],void 0):t?t:t={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this.element.addClass("ui-droppable")},_addToManager:function(t){e.ui.ddmanager.droppables[t]=e.ui.ddmanager.droppables[t]||[],e.ui.ddmanager.droppables[t].push(this)},_splice:function(e){for(var t=0;e.length>t;t++)e[t]===this&&e.splice(t,1)},_destroy:function(){var t=e.ui.ddmanager.droppables[this.options.scope];this._splice(t),this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,i){if("accept"===t)this.accept=e.isFunction(i)?i:function(e){return e.is(i)};else if("scope"===t){var s=e.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(t,i)},_activate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var s=i||e.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=e(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&e.ui.intersect(s,e.extend(i,{offset:i.element.offset()}),i.options.tolerance,t)?(n=!0,!1):void 0}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(s)),this.element):!1):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(){function e(e,t,i){return e>=t&&t+i>e}return function(t,i,s,n){if(!i.offset)return!1;var a=(t.positionAbs||t.position.absolute).left+t.margins.left,o=(t.positionAbs||t.position.absolute).top+t.margins.top,r=a+t.helperProportions.width,h=o+t.helperProportions.height,l=i.offset.left,u=i.offset.top,d=l+i.proportions().width,c=u+i.proportions().height;switch(s){case"fit":return a>=l&&d>=r&&o>=u&&c>=h;case"intersect":return a+t.helperProportions.width/2>l&&d>r-t.helperProportions.width/2&&o+t.helperProportions.height/2>u&&c>h-t.helperProportions.height/2;case"pointer":return e(n.pageY,u,i.proportions().height)&&e(n.pageX,l,i.proportions().width);case"touch":return(o>=u&&c>=o||h>=u&&c>=h||u>o&&h>c)&&(a>=l&&d>=a||r>=l&&d>=r||l>a&&r>d);default:return!1}}}(),e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,i){var s,n,a=e.ui.ddmanager.droppables[t.options.scope]||[],o=i?i.type:null,r=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(s=0;a.length>s;s++)if(!(a[s].options.disabled||t&&!a[s].accept.call(a[s].element[0],t.currentItem||t.element))){for(n=0;r.length>n;n++)if(r[n]===a[s].element[0]){a[s].proportions().height=0;continue e}a[s].visible="none"!==a[s].element.css("display"),a[s].visible&&("mousedown"===o&&a[s]._activate.call(a[s],i),a[s].offset=a[s].element.offset(),a[s].proportions({width:a[s].element[0].offsetWidth,height:a[s].element[0].offsetHeight}))}},drop:function(t,i){var s=!1;return e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(t,i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,a,o=e.ui.intersect(t,this,this.options.tolerance,i),r=!o&&this.isover?"isout":o&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,a=this.element.parents(":data(ui-droppable)").filter(function(){return e(this).droppable("instance").options.scope===n}),a.length&&(s=e(a[0]).droppable("instance"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(t,i){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}},e.ui.droppable,e.widget("ui.sortable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(e,t,i){return e>=t&&t+i>e},_isFloating:function(e){return/left|right/.test(e.css("float"))||/inline|table-cell/.test(e.css("display"))},_create:function(){this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(e,t){this._super(e,t),"handle"===e&&this._setHandleClassName()},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),e.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(t,i){var s=null,n=!1,a=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(t),e(t.target).parents().each(function(){return e.data(this,a.widgetName+"-item")===a?(s=e(this),!1):void 0}),e.data(t.target,a.widgetName+"-item")===a&&(s=e(t.target)),s?!this.options.handle||i||(e(this.options.handle,s).find("*").addBack().each(function(){this===t.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(t,i,s){var n,a,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(a=this.document.find("body"),this.storedCursor=a.css("cursor"),a.css("cursor",o.cursor),this.storedStylesheet=e("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(a)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",t,this._uiHash(this));return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var i,s,n,a,o=this.options,r=!1;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+o.scrollSpeed:t.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+o.scrollSpeed:t.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(t.pageY-this.document.scrollTop()<o.scrollSensitivity?r=this.document.scrollTop(this.document.scrollTop()-o.scrollSpeed):this.window.height()-(t.pageY-this.document.scrollTop())<o.scrollSensitivity&&(r=this.document.scrollTop(this.document.scrollTop()+o.scrollSpeed)),t.pageX-this.document.scrollLeft()<o.scrollSensitivity?r=this.document.scrollLeft(this.document.scrollLeft()-o.scrollSpeed):this.window.width()-(t.pageX-this.document.scrollLeft())<o.scrollSensitivity&&(r=this.document.scrollLeft(this.document.scrollLeft()+o.scrollSpeed))),r!==!1&&e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],a=this._intersectsWithPointer(s),a&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===a?"next":"prev"]()[0]!==n&&!e.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!e.contains(this.element[0],n):!0)){if(this.direction=1===a?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(t,s),this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,i){if(t){if(e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t),this.options.revert){var s=this,n=this.placeholder.offset(),a=this.options.axis,o={};a&&"x"!==a||(o.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),a&&"y"!==a||(o.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,e(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){s._clear(t)})}else this._clear(t,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},e(i).each(function(){var i=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);i&&s.push((t.key||i[1]+"[]")+"="+(t.key&&t.expression?i[1]:i[2]))}),!s.length&&t.key&&s.push(t.key+"="),s.join("&")},toArray:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},i.each(function(){s.push(e(t.item||this).attr(t.attribute||"id")||"")}),s},_intersectsWith:function(e){var t=this.positionAbs.left,i=t+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,a=e.left,o=a+e.width,r=e.top,h=r+e.height,l=this.offset.click.top,u=this.offset.click.left,d="x"===this.options.axis||s+l>r&&h>s+l,c="y"===this.options.axis||t+u>a&&o>t+u,p=d&&c;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?p:t+this.helperProportions.width/2>a&&o>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(e){var t="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),i="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),s=t&&i,n=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return s?this.floating?a&&"right"===a||"down"===n?2:1:n&&("down"===n?2:1):!1},_intersectsWithSides:function(e){var t=this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&t||"up"===s&&!t)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return 0!==e&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return 0!==e&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){function i(){r.push(this)}var s,n,a,o,r=[],h=[],l=this._connectWith();if(l&&t)for(s=l.length-1;s>=0;s--)for(a=e(l[s],this.document[0]),n=a.length-1;n>=0;n--)o=e.data(a[n],this.widgetFullName),o&&o!==this&&!o.options.disabled&&h.push([e.isFunction(o.options.items)?o.options.items.call(o.element):e(o.options.items,o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),o]);for(h.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return e(r)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var i=0;t.length>i;i++)if(t[i]===e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var i,s,n,a,o,r,h,l,u=this.items,d=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],c=this._connectWith();if(c&&this.ready)for(i=c.length-1;i>=0;i--)for(n=e(c[i],this.document[0]),s=n.length-1;s>=0;s--)a=e.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&(d.push([e.isFunction(a.options.items)?a.options.items.call(a.element[0],t,{item:this.currentItem}):e(a.options.items,a.element),a]),this.containers.push(a));for(i=d.length-1;i>=0;i--)for(o=d[i][1],r=d[i][0],s=0,l=r.length;l>s;s++)h=e(r[s]),h.data(this.widgetName+"-item",o),u.push({item:h,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(t){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,a;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?e(this.options.toleranceElement,s.item):s.item,t||(s.width=n.outerWidth(),s.height=n.outerHeight()),a=n.offset(),s.left=a.left,s.top=a.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)a=this.containers[i].element.offset(),this.containers[i].containerCache.left=a.left,this.containers[i].containerCache.top=a.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var i,s=t.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=t.currentItem[0].nodeName.toLowerCase(),n=e("<"+s+">",t.document[0]).addClass(i||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tbody"===s?t._createTrPlaceholder(t.currentItem.find("tr").eq(0),e("<tr>",t.document[0]).appendTo(n)):"tr"===s?t._createTrPlaceholder(t.currentItem,n):"img"===s&&n.attr("src",t.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(e,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10)))}}),t.placeholder=e(s.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),s.placeholder.update(t,t.placeholder)},_createTrPlaceholder:function(t,i){var s=this;t.children().each(function(){e("<td>&#160;</td>",s.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(i)})},_contactContainers:function(t){var i,s,n,a,o,r,h,l,u,d,c=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!e.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(c&&e.contains(this.containers[i].element[0],c.element[0]))continue;c=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",t,this._uiHash(this)),this.containers[i].containerCache.over=0);if(c)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,a=null,u=c.floating||this._isFloating(this.currentItem),o=u?"left":"top",r=u?"width":"height",d=u?"clientX":"clientY",s=this.items.length-1;s>=0;s--)e.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(h=this.items[s].item.offset()[o],l=!1,t[d]-h>this.items[s][r]/2&&(l=!0),n>Math.abs(t[d]-h)&&(n=Math.abs(t[d]-h),a=this.items[s],this.direction=l?"up":"down"));if(!a&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;a?this._rearrange(t,a,null,!0):this._rearrange(t,null,this.containers[p].element,!0),this._trigger("change",t,this._uiHash()),this.containers[p]._trigger("change",t,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||e("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===n.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===n.containment?this.document.width():this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(t=e(n.containment)[0],i=e(n.containment).offset(),s="hidden"!==e(t).css("overflow"),this.containment=[i.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(t){var i,s,n=this.options,a=t.pageX,o=t.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(a=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(a=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1],o=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((a-this.originalPageX)/n.grid[0])*n.grid[0],a=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(e,t,i,s){i?i[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(e,t){function i(e,t,i){return function(s){i._trigger(e,s,t._uiHash(t))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!t&&n.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||t||n.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(t||(n.push(function(e){this._trigger("remove",e,this._uiHash())}),n.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)t||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,t||this._trigger("beforeStop",e,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!t){for(s=0;n.length>s;s++)n[s].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var i=t||this;return{helper:i.helper,placeholder:i.placeholder||e([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:t?t.element:null}}})});;

/* QuickBlox JavaScript SDK - v2.0.4 - 2016-02-01 */
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.QB=a()}}(function(){var a;return function b(a,c,d){function e(g,h){if(!c[g]){if(!a[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};a[g][0].call(k.exports,function(b){var c=a[g][1][b];return e(c?c:b)},k,k.exports,b,a,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){function d(a){this.service=a}function e(a){var b={application_id:g.creds.appId,auth_key:g.creds.authKey,nonce:h.randomNonce(),timestamp:h.unixTime()};return a.login&&a.password?b.user={login:a.login,password:a.password}:a.email&&a.password?b.user={email:a.email,password:a.password}:a.provider&&(b.provider=a.provider,a.scope&&(b.scope=a.scope),a.keys&&a.keys.token&&(b.keys={token:a.keys.token}),a.keys&&a.keys.secret&&(b.keys.secret=a.keys.secret)),b}function f(a,b){var c=Object.keys(a).map(function(b){return"object"==typeof a[b]?Object.keys(a[b]).map(function(c){return b+"["+c+"]="+a[b][c]}).sort().join("&"):b+"="+a[b]}).sort().join("&");return i(c,b).toString()}var g=a("../qbConfig"),h=a("../qbUtils"),i=a("crypto-js/hmac-sha1");d.prototype={getSession:function(a){h.QBLog("[AuthProxy]","getSession"),this.service.ajax({url:h.getUrl(g.urls.session)},function(b,c){b?a(b,null):a(b,c)})},createSession:function(a,b){if(""===g.creds.appId||""===g.creds.authKey||""===g.creds.authSecret)throw new Error("Cannot create a new session without app credentials (app ID, auth key and auth secret)");var c,d=this;"function"==typeof a&&"undefined"==typeof b&&(b=a,a={}),c=e(a),c.signature=f(c,g.creds.authSecret),h.QBLog("[AuthProxy]","createSession",c),this.service.ajax({url:h.getUrl(g.urls.session),type:"POST",data:c},function(a,c){a?b(a,null):(d.service.setSession(c.session),b(null,c.session))})},destroySession:function(a){var b=this;h.QBLog("[AuthProxy]","destroySession"),this.service.ajax({url:h.getUrl(g.urls.session),type:"DELETE",dataType:"text"},function(c,d){c?a(c,null):(b.service.setSession(null),a(null,d))})},login:function(a,b){h.QBLog("[AuthProxy]","login",a),this.service.ajax({url:h.getUrl(g.urls.login),type:"POST",data:a},function(a,c){a?b(a,null):b(null,c.user)})},logout:function(a){h.QBLog("[AuthProxy]","logout"),this.service.ajax({url:h.getUrl(g.urls.login),type:"DELETE",dataType:"text"},a)}},b.exports=d},{"../qbConfig":15,"../qbUtils":19,"crypto-js/hmac-sha1":21}],2:[function(a,b,c){function d(a,b,c){var d=this;r=b,q=c,this.service=a,o&&(this.roster=new e(a),this.muc=new f(a),this.privacylist=new g(a),this._isLogout=!1,this._isDisconnected=!1),this.dialog=new h(a),this.message=new i(a),this.helpers=new j,this._onMessage=function(a){var b=a.getAttribute("from"),c=(a.getAttribute("to"),a.getAttribute("type")),e=a.querySelector("body"),f=a.querySelector("markable"),g=a.querySelector("received"),h=a.querySelector("displayed"),i=a.querySelector("composing"),j=a.querySelector("paused"),k=a.querySelector("invite"),l=a.querySelector("extraParams"),m=a.querySelector("delay"),o=a.getAttribute("id"),p="groupchat"===c?d.helpers.getDialogIdFromNode(b):null,r="groupchat"===c?d.helpers.getIdFromResource(b):d.helpers.getIdFromNode(b),s=g||h||null;if(k)return!0;var t;if(l&&(t=d._parseExtraParams(l),t.dialogId&&(p=t.dialogId)),i||j)return"function"!=typeof d.onMessageTypingListener||"chat"!==c&&"groupchat"!==c&&m||n.safeCallbackCall(d.onMessageTypingListener,null!=i,r,p),!0;if(s)return g?"function"==typeof d.onDeliveredStatusListener&&"chat"===c&&n.safeCallbackCall(d.onDeliveredStatusListener,g.getAttribute("id"),p,r):"function"==typeof d.onReadStatusListener&&"chat"===c&&n.safeCallbackCall(d.onReadStatusListener,h.getAttribute("id"),p,r),!0;if(f&&r!=d.helpers.getIdFromNode(q.jid)){var u={messageId:o,userId:r,dialogId:p};d.sendDeliveredStatus(u)}var v={id:o,dialog_id:p,type:c,body:e&&e.textContent||null,extension:t?t.extension:null,delay:m};return f&&(v.markable=1),"function"!=typeof d.onMessageListener||"chat"!==c&&"groupchat"!==c||n.safeCallbackCall(d.onMessageListener,r,v),!0},this._onPresence=function(a){var b=a.getAttribute("from"),c=a.getAttribute("type"),e=d.helpers.getIdFromNode(b);if(c)switch(c){case"subscribe":u[e]&&"to"===u[e].subscription?(u[e]={subscription:"both",ask:null},d.roster._sendSubscriptionPresence({jid:b,type:"subscribed"})):"function"==typeof d.onSubscribeListener&&n.safeCallbackCall(d.onSubscribeListener,e);break;case"subscribed":u[e]&&"from"===u[e].subscription?u[e]={subscription:"both",ask:null}:(u[e]={subscription:"to",ask:null},"function"==typeof d.onConfirmSubscribeListener&&n.safeCallbackCall(d.onConfirmSubscribeListener,e));break;case"unsubscribed":u[e]={subscription:"none",ask:null},"function"==typeof d.onRejectSubscribeListener&&n.safeCallbackCall(d.onRejectSubscribeListener,e);break;case"unsubscribe":u[e]={subscription:"to",ask:null};break;case"unavailable":"function"==typeof d.onContactListListener&&u[e]&&"none"!==u[e].subscription&&n.safeCallbackCall(d.onContactListListener,e,c)}else"function"==typeof d.onContactListListener&&u[e]&&"none"!==u[e].subscription&&n.safeCallbackCall(d.onContactListListener,e);return!0},this._onIQ=function(a){return!0},this._onSystemMessageListener=function(a){var b,c=a.getAttribute("from"),e=(a.getAttribute("to"),a.querySelector("extraParams")),f=e.querySelector("moduleIdentifier").textContent,g=(a.querySelector("delay"),a.getAttribute("id"));if("SystemNotifications"===f&&"function"==typeof d.onSystemMessageListener){var h=d._parseExtraParams(e);b={id:g,userId:d.helpers.getIdFromNode(c),extension:h.extension},n.safeCallbackCall(d.onSystemMessageListener,b)}return!0},this._onMessageErrorListener=function(a){var b=a.getAttribute("id"),c=k(a);return"function"==typeof d.onMessageErrorListener&&n.safeCallbackCall(d.onMessageErrorListener,b,c),!0}}function e(a){this.service=a,this.helpers=new j}function f(a){this.service=a,this.helpers=new j}function g(a){this.service=a,this.helpers=new j}function h(a){this.service=a,this.helpers=new j}function i(a){this.service=a,this.helpers=new j}function j(){}function k(a){var b=a.getElementsByTagName("error")[0],c=parseInt(b.getAttribute("code")),d=b.getElementsByTagName("text")[0].textContent;return getError(c,d)}function l(){return(new Date).toTimeString().split(" ")[0]}var m=a("../qbConfig"),n=a("../qbUtils"),o="undefined"!=typeof window,p="This function isn't supported outside of the browser (...yet)";o&&(a("strophe"),Strophe.addNamespace("CARBONS","urn:xmpp:carbons:2"),Strophe.addNamespace("CHAT_MARKERS","urn:xmpp:chat-markers:0"),Strophe.addNamespace("PRIVACY_LIST","jabber:iq:privacy"),Strophe.addNamespace("CHAT_STATES","http://jabber.org/protocol/chatstates"));var q,r,s=m.urls.chat+"/Dialog",t=m.urls.chat+"/Message",u={},v={};d.prototype={connect:function(a,b){if(!o)throw p;n.QBLog("[ChatProxy]","connect",a);var c,d,e,f=this;"userId"in a?(e=a.userId+"-"+m.creds.appId+"@"+m.endpoints.chat,"resource"in a&&(e=e+"/"+a.resource)):"jid"in a&&(e=a.jid),q.connect(e,a.password,function(e){switch(e){case Strophe.Status.ERROR:c=getError(422,"Status.ERROR - An error has occurred"),"function"==typeof b&&b(c,null);break;case Strophe.Status.CONNECTING:n.QBLog("[ChatProxy]","Status.CONNECTING"),n.QBLog("[ChatProxy]","Chat Protocol - "+(1===m.chatProtocol.active?"BOSH":"WebSocket"));break;case Strophe.Status.CONNFAIL:c=getError(422,"Status.CONNFAIL - The connection attempt failed"),"function"==typeof b&&b(c,null);break;case Strophe.Status.AUTHENTICATING:n.QBLog("[ChatProxy]","Status.AUTHENTICATING");break;case Strophe.Status.AUTHFAIL:c=getError(401,"Status.AUTHFAIL - The authentication attempt failed"),"function"==typeof b&&b(c,null);break;case Strophe.Status.CONNECTED:n.QBLog("[ChatProxy]","Status.CONNECTED at "+l()),f._isDisconnected=!1,q.addHandler(f._onMessage,null,"message","chat"),q.addHandler(f._onMessage,null,"message","groupchat"),q.addHandler(f._onPresence,null,"presence"),q.addHandler(f._onIQ,null,"iq"),q.addHandler(f._onSystemMessageListener,null,"message","headline"),q.addHandler(f._onMessageErrorListener,null,"message","error"),r&&q.addHandler(r._onMessage,null,"message","headline"),f._enableCarbons(function(){f.roster.get(function(a){if(u=a,q.send($pres().tree()),q.addTimedHandler(55e3,f._autoSendPresence),"function"==typeof b)b(null,u);else{f._isLogout=!1,d=Object.keys(v);for(var c=0,e=d.length;e>c;c++)f.muc.join(d[c]);"function"==typeof f.onReconnectListener&&n.safeCallbackCall(f.onReconnectListener)}})});break;case Strophe.Status.DISCONNECTING:n.QBLog("[ChatProxy]","Status.DISCONNECTING");break;case Strophe.Status.DISCONNECTED:n.QBLog("[ChatProxy]","Status.DISCONNECTED at "+l()),q.reset(),f._isDisconnected||"function"!=typeof f.onDisconnectedListener||n.safeCallbackCall(f.onDisconnectedListener),f._isDisconnected=!0,f._isLogout||f.connect(a);break;case Strophe.Status.ATTACHED:n.QBLog("[ChatProxy]","Status.ATTACHED")}})},send:function(a,b){if(!o)throw p;b.id||(b.id=n.getBsonObjectId());var c=this,d=$msg({from:q.jid,to:this.helpers.jidOrUserId(a),type:b.type,id:b.id});b.body&&d.c("body",{xmlns:Strophe.NS.CLIENT}).t(b.body).up(),b.extension&&(d.c("extraParams",{xmlns:Strophe.NS.CLIENT}),Object.keys(b.extension).forEach(function(a){"attachments"===a?b.extension[a].forEach(function(a){d.c("attachment",a).up()}):"object"==typeof b.extension[a]?c._JStoXML(a,b.extension[a],d):d.c(a).t(b.extension[a]).up()}),d.up()),b.markable&&d.c("markable",{xmlns:Strophe.NS.CHAT_MARKERS}),q.send(d)},sendSystemMessage:function(a,b){if(!o)throw p;b.id||(b.id=n.getBsonObjectId());var c=this,d=$msg({id:b.id,type:"headline",to:this.helpers.jidOrUserId(a)});b.extension&&(d.c("extraParams",{xmlns:Strophe.NS.CLIENT}).c("moduleIdentifier").t("SystemNotifications").up(),Object.keys(b.extension).forEach(function(a){"object"==typeof b.extension[a]?c._JStoXML(a,b.extension[a],d):d.c(a).t(b.extension[a]).up()}),d.up()),q.send(d)},sendIsTypingStatus:function(a){if(!o)throw p;var b=$msg({from:q.jid,to:this.helpers.jidOrUserId(a),type:this.helpers.typeChat(a)});b.c("composing",{xmlns:Strophe.NS.CHAT_STATES}),q.send(b)},sendIsStopTypingStatus:function(a){if(!o)throw p;var b=$msg({from:q.jid,to:this.helpers.jidOrUserId(a),type:this.helpers.typeChat(a)});b.c("paused",{xmlns:Strophe.NS.CHAT_STATES}),q.send(b)},sendPres:function(a){if(!o)throw p;q.send($pres({from:q.jid,type:a}))},sendDeliveredStatus:function(a){if(!o)throw p;var b=$msg({from:q.jid,to:this.helpers.jidOrUserId(a.userId),type:"chat",id:n.getBsonObjectId()});b.c("received",{xmlns:Strophe.NS.CHAT_MARKERS,id:a.messageId}).up(),b.c("extraParams",{xmlns:Strophe.NS.CLIENT}).c("dialog_id").t(a.dialogId),q.send(b)},sendReadStatus:function(a){if(!o)throw p;var b=$msg({from:q.jid,to:this.helpers.jidOrUserId(a.userId),type:"chat",id:n.getBsonObjectId()});b.c("displayed",{xmlns:Strophe.NS.CHAT_MARKERS,id:a.messageId}).up(),b.c("extraParams",{xmlns:Strophe.NS.CLIENT}).c("dialog_id").t(a.dialogId),q.send(b)},disconnect:function(){if(!o)throw p;v={},this._isLogout=!0,q.flush(),q.disconnect()},addListener:function(a,b){function c(){return b(),a.live!==!1}if(!o)throw p;return q.addHandler(c,null,a.name||null,a.type||null,a.id||null,a.from||null)},deleteListener:function(a){if(!o)throw p;q.deleteHandler(a)},_JStoXML:function(a,b,c){var d=this;c.c(a),Object.keys(b).forEach(function(a){"object"==typeof b[a]?d._JStoXML(a,b[a],c):c.c(a).t(b[a]).up()}),c.up()},_XMLtoJS:function(a,b,c){var d=this;a[b]={};for(var e=0,f=c.childNodes.length;f>e;e++)c.childNodes[e].childNodes.length>1?a[b]=d._XMLtoJS(a[b],c.childNodes[e].tagName,c.childNodes[e]):a[b][c.childNodes[e].tagName]=c.childNodes[e].textContent;return a},_parseExtraParams:function(a){if(!a)return null;for(var b,c={},d=[],e=0,f=a.childNodes.length;f>e;e++)if("attachment"===a.childNodes[e].tagName){for(var g={},h=a.childNodes[e].attributes,i=0,j=h.length;j>i;i++)"id"===h[i].name||"size"===h[i].name?g[h[i].name]=parseInt(h[i].value):g[h[i].name]=h[i].value;d.push(g)}else if("dialog_id"===a.childNodes[e].tagName)b=a.childNodes[e].textContent,c.dialog_id=b;else if(a.childNodes[e].childNodes.length>1){var k=a.childNodes[e].textContent.length;if(k>4096){for(var l="",i=0;i<a.childNodes[e].childNodes.length;++i)l+=a.childNodes[e].childNodes[i].textContent;c[a.childNodes[e].tagName]=l}else c=self._XMLtoJS(c,a.childNodes[e].tagName,a.childNodes[e])}else c[a.childNodes[e].tagName]=a.childNodes[e].textContent;return d.length>0&&(c.attachments=d),c.moduleIdentifier&&delete c.moduleIdentifier,{extension:c,dialogId:b}},_autoSendPresence:function(){if(!o)throw p;return q.send($pres().tree()),!0},_enableCarbons:function(a){if(!o)throw p;var b;b=$iq({from:q.jid,type:"set",id:q.getUniqueId("enableCarbons")}).c("enable",{xmlns:Strophe.NS.CARBONS}),q.sendIQ(b,function(b){a()})}},e.prototype={get:function(a){var b,c,d,e=this,f={};b=$iq({from:q.jid,type:"get",id:q.getUniqueId("getRoster")}).c("query",{xmlns:Strophe.NS.ROSTER}),q.sendIQ(b,function(b){c=b.getElementsByTagName("item");for(var g=0,h=c.length;h>g;g++)d=e.helpers.getIdFromNode(c[g].getAttribute("jid")).toString(),f[d]={subscription:c[g].getAttribute("subscription"),ask:c[g].getAttribute("ask")||null};a(f)})},add:function(a,b){var c=this,d=this.helpers.jidOrUserId(a),e=this.helpers.getIdFromNode(d).toString();u[e]={subscription:"none",ask:"subscribe"},c._sendSubscriptionPresence({jid:d,type:"subscribe"}),"function"==typeof b&&b()},confirm:function(a,b){var c=this,d=this.helpers.jidOrUserId(a),e=this.helpers.getIdFromNode(d).toString();u[e]={subscription:"from",ask:"subscribe"},c._sendSubscriptionPresence({jid:d,type:"subscribed"}),c._sendSubscriptionPresence({jid:d,type:"subscribe"}),"function"==typeof b&&b()},reject:function(a,b){var c=this,d=this.helpers.jidOrUserId(a),e=this.helpers.getIdFromNode(d).toString();u[e]={subscription:"none",ask:null},c._sendSubscriptionPresence({jid:d,type:"unsubscribed"}),"function"==typeof b&&b()},remove:function(a,b){var c,d=this.helpers.jidOrUserId(a),e=this.helpers.getIdFromNode(d).toString();c=$iq({from:q.jid,type:"set",id:q.getUniqueId("removeRosterItem")}).c("query",{xmlns:Strophe.NS.ROSTER}).c("item",{jid:d,subscription:"remove"}),q.sendIQ(c,function(){delete u[e],"function"==typeof b&&b()})},_sendSubscriptionPresence:function(a){var b;b=$pres({to:a.jid,type:a.type}),q.send(b)}},f.prototype={join:function(a,b){var c,d=this,e=q.getUniqueId("join");v[a]=!0,c=$pres({from:q.jid,to:d.helpers.getRoomJid(a),id:e}).c("x",{xmlns:Strophe.NS.MUC}).c("history",{maxstanzas:0}),"function"==typeof b&&q.addHandler(b,null,"presence",null,e),q.send(c)},leave:function(a,b){var c,d=this,e=d.helpers.getRoomJid(a);delete v[a],c=$pres({from:q.jid,to:e,type:"unavailable"}),"function"==typeof b&&q.addHandler(b,null,"presence","unavailable",null,e),q.send(c)},listOnlineUsers:function(a,b){var c,d=this,e=[];c=$iq({from:q.jid,id:q.getUniqueId("muc_disco_items"),to:a,type:"get"}).c("query",{xmlns:"http://jabber.org/protocol/disco#items"}),q.sendIQ(c,function(a){for(var c,f=a.getElementsByTagName("item"),g=0,h=f.length;h>g;g++)c=d.helpers.getUserIdFromRoomJid(f[g].getAttribute("jid")),e.push(c);b(e)})}},g.prototype={getNames:function(a){var b=$iq({from:q.jid,type:"get",id:q.getUniqueId("getNames")}).c("query",{xmlns:Strophe.NS.PRIVACY_LIST});q.sendIQ(b,function(b){for(var c=[],d={},e=b.getElementsByTagName("default"),f=b.getElementsByTagName("active"),g=b.getElementsByTagName("list"),h=e[0].getAttribute("name"),i=f[0].getAttribute("name"),j=0,k=g.length;k>j;j++)c.push(g[j].getAttribute("name"));d={"default":h,active:i,names:c},a(null,d)},function(b){if(b){var c=k(b);a(c,null)}else a(getError(408),null)})},getList:function(a,b){var c,d,e,f,g=this,h=[],i={};c=$iq({from:q.jid,type:"get",id:q.getUniqueId("getlist")}).c("query",{xmlns:Strophe.NS.PRIVACY_LIST}).c("list",{name:a}),q.sendIQ(c,function(c){d=c.getElementsByTagName("item");for(var j=0,k=d.length;k>j;j+=2)e=d[j].getAttribute("value"),f=g.helpers.getIdFromNode(e),h.push({user_id:f,action:d[j].getAttribute("action")});i={name:a,items:h},b(null,i)},function(a){if(a){var c=k(a);b(c,null)}else b(getError(408),null)})},create:function(a,b){var c,d,e,f,g,h=this,i={},j=[];c=$iq({from:q.jid,type:"set",id:q.getUniqueId("edit")}).c("query",{xmlns:Strophe.NS.PRIVACY_LIST}).c("list",{name:a.name}),$(a.items).each(function(a,b){i[b.user_id]=b.action}),j=Object.keys(i);for(var l=0,m=0,n=j.length;n>l;l++,m+=2)d=j[l],f=i[d],e=h.helpers.jidOrUserId(parseInt(d,10)),g=h.helpers.getUserNickWithMucDomain(d),c.c("item",{type:"jid",value:e,action:f,order:m+1}).c("message",{}).up().c("presence-in",{}).up().c("presence-out",{}).up().c("iq",{}).up().up(),c.c("item",{type:"jid",value:g,action:f,order:m+2}).c("message",{}).up().c("presence-in",{}).up().c("presence-out",{}).up().c("iq",{}).up().up();q.sendIQ(c,function(a){b(null)},function(a){if(a){var c=k(a);b(c)}else b(getError(408))})},update:function(a,b){var c=this;c.getList(a.name,function(d,e){if(d)b(d,null);else{var f=JSON.parse(JSON.stringify(a)),g=e.items,h=f.items,i={};f.items=$.merge(g,h),i=f,c.create(i,function(a,c){d?b(a,null):b(null,c)})}})},"delete":function(a,b){var c=$iq({from:q.jid,type:"set",id:q.getUniqueId("remove")}).c("query",{xmlns:Strophe.NS.PRIVACY_LIST}).c("list",{name:a?a:""});q.sendIQ(c,function(a){b(null)},function(a){if(a){var c=k(a);b(c)}else b(getError(408))})},setAsDefault:function(a,b){var c=$iq({from:q.jid,type:"set",id:q.getUniqueId("default")}).c("query",{xmlns:Strophe.NS.PRIVACY_LIST}).c("default",{name:a?a:""});q.sendIQ(c,function(a){b(null)},function(a){if(a){var c=k(a);b(c)}else b(getError(408))})},setAsActive:function(a,b){var c=$iq({from:q.jid,type:"set",id:q.getUniqueId("active")}).c("query",{xmlns:Strophe.NS.PRIVACY_LIST}).c("active",{name:a?a:""});q.sendIQ(c,function(a){b(null)},function(a){if(a){var c=k(a);b(c)}else b(getError(408))})}},h.prototype={list:function(a,b){"function"==typeof a&&"undefined"==typeof b&&(b=a,a={}),n.QBLog("[DialogProxy]","list",a),this.service.ajax({url:n.getUrl(s),data:a},b)},create:function(a,b){a.occupants_ids instanceof Array&&(a.occupants_ids=a.occupants_ids.join(", ")),n.QBLog("[DialogProxy]","create",a),this.service.ajax({url:n.getUrl(s),type:"POST",data:a},b)},update:function(a,b,c){n.QBLog("[DialogProxy]","update",b),this.service.ajax({url:n.getUrl(s,a),type:"PUT",data:b},c)},"delete":function(a,b,c){n.QBLog("[DialogProxy]","delete",a),2==arguments.length?this.service.ajax({url:n.getUrl(s,a),type:"DELETE"},b):3==arguments.length&&this.service.ajax({url:n.getUrl(s,a),type:"DELETE",data:b},c)}},i.prototype={list:function(a,b){n.QBLog("[MessageProxy]","list",a),this.service.ajax({url:n.getUrl(t),data:a},b)},create:function(a,b){n.QBLog("[MessageProxy]","create",a),this.service.ajax({url:n.getUrl(t),type:"POST",data:a},b)},update:function(a,b,c){n.QBLog("[MessageProxy]","update",a,b),this.service.ajax({url:n.getUrl(t,a),type:"PUT",data:b},c)},"delete":function(a,b,c){n.QBLog("[DialogProxy]","delete",a),2==arguments.length?this.service.ajax({url:n.getUrl(t,a),type:"DELETE",dataType:"text"},b):3==arguments.length&&this.service.ajax({url:n.getUrl(t,a),type:"DELETE",data:b,dataType:"text"},c)},unreadCount:function(a,b){n.QBLog("[MessageProxy]","unreadCount",a),this.service.ajax({url:n.getUrl(t+"/unread"),data:a},b)}},j.prototype={jidOrUserId:function(a){var b;if("string"==typeof a)b=a;else{if("number"!=typeof a)throw p;b=a+"-"+m.creds.appId+"@"+m.endpoints.chat}return b},typeChat:function(a){var b;if("string"==typeof a)b=a.indexOf("muc")>-1?"groupchat":"chat";else{if("number"!=typeof a)throw p;b="chat"}return b},getRecipientId:function(a,b){var c=null;return a.forEach(function(a,d,e){a!=b&&(c=a)}),c},getUserJid:function(a,b){return b?a+"-"+b+"@"+m.endpoints.chat:a+"-"+m.creds.appId+"@"+m.endpoints.chat},getUserNickWithMucDomain:function(a){return m.endpoints.muc+"/"+a},getIdFromNode:function(a){return a.indexOf("@")<0?null:parseInt(a.split("@")[0].split("-")[0])},getDialogIdFromNode:function(a){return a.indexOf("@")<0?null:a.split("@")[0].split("_")[1]},getRoomJidFromDialogId:function(a){return m.creds.appId+"_"+a+"@"+m.endpoints.muc},getRoomJid:function(a){if(!o)throw p;return a+"/"+this.getIdFromNode(q.jid)},getIdFromResource:function(a){var b=a.split("/");return b.length<2?null:(b.splice(0,1),parseInt(b.join("/")))},getUniqueId:function(a){if(!o)throw p;return q.getUniqueId(a)},getBsonObjectId:function(){return n.getBsonObjectId()},getUserIdFromRoomJid:function(a){var b=a.toString().split("/");return 0==b.length?null:b[b.length-1]}},b.exports=d},{"../qbConfig":15,"../qbUtils":19,strophe:51}],3:[function(a,b,c){function d(a){this.service=a}function e(a){for(var b=e.options,c=b.parser[b.strictMode?"strict":"loose"].exec(a),d={},f=14;f--;)d[b.key[f]]=c[f]||"";return d[b.q.name]={},d[b.key[12]].replace(b.q.parser,function(a,c,e){c&&(d[b.q.name][c]=e)}),d}var f=a("../qbConfig"),g=a("../qbUtils"),h="undefined"!=typeof window;if(!h)var i=a("xml2js");var j=f.urls.blobs+"/tagged";d.prototype={create:function(a,b){g.QBLog("[ContentProxy]","create",a),this.service.ajax({url:g.getUrl(f.urls.blobs),data:{blob:a},type:"POST"},function(a,c){a?b(a,null):b(a,c.blob)})},list:function(a,b){"function"==typeof a&&"undefined"==typeof b&&(b=a,a=null),g.QBLog("[ContentProxy]","list",a),this.service.ajax({url:g.getUrl(f.urls.blobs),data:a,type:"GET"},function(a,c){a?b(a,null):b(a,c)})},"delete":function(a,b){g.QBLog("[ContentProxy]","delete"),this.service.ajax({url:g.getUrl(f.urls.blobs,a),type:"DELETE",dataType:"text"},function(a,c){a?b(a,null):b(null,!0)})},createAndUpload:function(a,b){var c,d,f,i,j,k={},l=this,m=JSON.parse(JSON.stringify(a));m.file.data="...",g.QBLog("[ContentProxy]","createAndUpload",m),c=a.file,d=a.name||c.name,f=a.type||c.type,i=a.size||c.size,k.name=d,k.content_type=f,a["public"]&&(k["public"]=a["public"]),a.tag_list&&(k.tag_list=a.tag_list),this.create(k,function(a,d){if(a)b(a,null);else{var f,g=e(d.blob_object_access.params),k={url:"https://"+g.host};f=h?new FormData:{},j=d.id,Object.keys(g.queryKey).forEach(function(a){h?f.append(a,decodeURIComponent(g.queryKey[a])):f[a]=decodeURIComponent(g.queryKey[a])}),h?f.append("file",c,d.name):f.file=c,k.data=f,l.upload(k,function(a,c){a?b(a,null):(h?d.path=c.Location.replace("http://","https://"):d.path=c.PostResponse.Location,l.markUploaded({id:j,size:i},function(a,c){a?b(a,null):b(null,d)}))})}})},upload:function(a,b){g.QBLog("[ContentProxy]","upload"),this.service.ajax({url:a.url,data:a.data,dataType:"xml",contentType:!1,processData:!1,type:"POST"},function(a,c){if(a)b(a,null);else if(h){var d,e,f={},g=c.documentElement,j=g.childNodes;for(d=0,e=j.length;e>d;d++)f[j[d].nodeName]=j[d].childNodes[0].nodeValue;b(null,f)}else{var k=i.parseString;k(c,function(a,c){c&&b(null,c)})}})},taggedForCurrentUser:function(a){g.QBLog("[ContentProxy]","taggedForCurrentUser"),this.service.ajax({url:g.getUrl(j)},function(b,c){b?a(b,null):a(null,c)})},markUploaded:function(a,b){g.QBLog("[ContentProxy]","markUploaded",a),this.service.ajax({url:g.getUrl(f.urls.blobs,a.id+"/complete"),type:"PUT",data:{size:a.size},dataType:"text"},function(a,c){a?b(a,null):b(null,c)})},getInfo:function(a,b){g.QBLog("[ContentProxy]","getInfo",a),this.service.ajax({url:g.getUrl(f.urls.blobs,a)},function(a,c){a?b(a,null):b(null,c)})},getFile:function(a,b){g.QBLog("[ContentProxy]","getFile",a),this.service.ajax({url:g.getUrl(f.urls.blobs,a)},function(a,c){a?b(a,null):b(null,c)})},getFileUrl:function(a,b){g.QBLog("[ContentProxy]","getFileUrl",a),this.service.ajax({url:g.getUrl(f.urls.blobs,a+"/getblobobjectbyid"),type:"POST"},function(a,c){a?b(a,null):b(null,c.blob_object_access.params)})},update:function(a,b){g.QBLog("[ContentProxy]","update",a);var c={};c.blob={},"undefined"!=typeof a.name&&(c.blob.name=a.name),this.service.ajax({url:g.getUrl(f.urls.blobs,a.id),data:c},function(a,c){a?b(a,null):b(null,c)})},privateUrl:function(a){return"https://"+f.endpoints.api+"/blobs/"+a+"?token="+this.service.getSession().token},publicUrl:function(a){return"https://"+f.endpoints.api+"/blobs/"+a}},b.exports=d,e.options={strictMode:!1,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}}},{"../qbConfig":15,"../qbUtils":19,xml2js:54}],4:[function(a,b,c){function d(a){this.service=a}var e=a("../qbConfig"),f=a("../qbUtils"),g="undefined"!=typeof window;d.prototype={create:function(a,b,c){f.QBLog("[DataProxy]","create",a,b),this.service.ajax({url:f.getUrl(e.urls.data,a),data:b,type:"POST"},function(a,b){a?c(a,null):c(a,b)})},list:function(a,b,c){"undefined"==typeof c&&"function"==typeof b&&(c=b,b=null),f.QBLog("[DataProxy]","list",a,b),this.service.ajax({url:f.getUrl(e.urls.data,a),data:b},function(a,b){a?c(a,null):c(a,b)})},update:function(a,b,c){f.QBLog("[DataProxy]","update",a,b),this.service.ajax({url:f.getUrl(e.urls.data,a+"/"+b._id),data:b,type:"PUT"},function(a,b){a?c(a,null):c(a,b)})},"delete":function(a,b,c){f.QBLog("[DataProxy]","delete",a,b),this.service.ajax({url:f.getUrl(e.urls.data,a+"/"+b),type:"DELETE",dataType:"text"},function(a,b){a?c(a,null):c(a,!0)})},uploadFile:function(a,b,c){f.QBLog("[DataProxy]","uploadFile",a,b);var d;g?(d=new FormData,d.append("field_name",b.field_name),d.append("file",b.file)):(d={},d.field_name=b.field_name,d.file=b.file),this.service.ajax({url:f.getUrl(e.urls.data,a+"/"+b.id+"/file"),data:d,contentType:!1,processData:!1,type:"POST"},function(a,b){a?c(a,null):c(a,b)})},downloadFile:function(a,b,c){f.QBLog("[DataProxy]","downloadFile",a,b);var d=f.getUrl(e.urls.data,a+"/"+b.id+"/file");d+="?field_name="+b.field_name+"&token="+this.service.getSession().token,c(null,d)},deleteFile:function(a,b,c){f.QBLog("[DataProxy]","deleteFile",a,b),this.service.ajax({url:f.getUrl(e.urls.data,a+"/"+b.id+"/file"),data:{field_name:b.field_name},dataType:"text",type:"DELETE"},function(a,b){a?c(a,null):c(a,!0)})}},b.exports=d},{"../qbConfig":15,"../qbUtils":19}],5:[function(a,b,c){function d(a){this.service=a,this.geodata=new e(a)}function e(a){this.service=a}var f=a("../qbConfig"),g=a("../qbUtils"),h=f.urls.geodata+"/find";e.prototype={create:function(a,b){g.QBLog("[GeoProxy]","create",a),this.service.ajax({url:g.getUrl(f.urls.geodata),data:{geo_data:a},type:"POST"},function(a,c){a?b(a,null):b(a,c.geo_datum)})},update:function(a,b){var c,d=["longitude","latitude","status"],e={};for(c in a)a.hasOwnProperty(c)&&d.indexOf(c)>0&&(e[c]=a[c]);g.QBLog("[GeoProxy]","update",a),this.service.ajax({url:g.getUrl(f.urls.geodata,a.id),data:{geo_data:e},type:"PUT"},function(a,c){a?b(a,null):b(a,c.geo_datum)})},get:function(a,b){g.QBLog("[GeoProxy]","get",a),this.service.ajax({url:g.getUrl(f.urls.geodata,a)},function(a,c){a?b(a,null):b(null,c.geo_datum)})},list:function(a,b){"function"==typeof a&&(b=a,a=void 0),g.QBLog("[GeoProxy]","find",a),this.service.ajax({url:g.getUrl(h),data:a},b)},"delete":function(a,b){g.QBLog("[GeoProxy]","delete",a),this.service.ajax({url:g.getUrl(f.urls.geodata,a),type:"DELETE",dataType:"text"},function(a,c){a?b(a,null):b(null,!0)})},purge:function(a,b){g.QBLog("[GeoProxy]","purge",a),this.service.ajax({url:g.getUrl(f.urls.geodata),data:{days:a},type:"DELETE",dataType:"text"},function(a,c){a?b(a,null):b(null,!0)})}},b.exports=d},{"../qbConfig":15,"../qbUtils":19}],6:[function(a,b,c){(function(c){function d(a){this.service=a,this.subscriptions=new e(a),this.events=new f(a),this.base64Encode=function(a){return i?btoa(encodeURIComponent(a).replace(/%([0-9A-F]{2})/g,function(a,b){return String.fromCharCode("0x"+b)})):new c(a).toString("base64")}}function e(a){this.service=a}function f(a){this.service=a}var g=a("../qbConfig"),h=a("../qbUtils"),i="undefined"!=typeof window;e.prototype={create:function(a,b){h.QBLog("[SubscriptionsProxy]","create",a),this.service.ajax({url:h.getUrl(g.urls.subscriptions),type:"POST",data:a},b)},list:function(a){h.QBLog("[SubscriptionsProxy]","list"),this.service.ajax({url:h.getUrl(g.urls.subscriptions)},a)},"delete":function(a,b){h.QBLog("[SubscriptionsProxy]","delete",a),this.service.ajax({url:h.getUrl(g.urls.subscriptions,a),type:"DELETE",dataType:"text"},function(a,c){a?b(a,null):b(null,!0)})}},f.prototype={create:function(a,b){h.QBLog("[EventsProxy]","create",a);var c={event:a};this.service.ajax({url:h.getUrl(g.urls.events),type:"POST",data:c},b)},list:function(a,b){"function"==typeof a&&"undefined"==typeof b&&(b=a,a=null),h.QBLog("[EventsProxy]","list",a),this.service.ajax({url:h.getUrl(g.urls.events),data:a},b)},get:function(a,b){h.QBLog("[EventsProxy]","get",a),this.service.ajax({url:h.getUrl(g.urls.events,a)},b)},status:function(a,b){h.QBLog("[EventsProxy]","status",a),this.service.ajax({url:h.getUrl(g.urls.events,a+"/status")},b)},"delete":function(a,b){h.QBLog("[EventsProxy]","delete",a),this.service.ajax({url:h.getUrl(g.urls.events,a),type:"DELETE"},b)}},b.exports=d}).call(this,a("buffer").Buffer)},{"../qbConfig":15,"../qbUtils":19,buffer:26}],7:[function(a,b,c){function d(a){this.service=a}function e(a){var b=a.field in j?"date":typeof a.value;return(a.value instanceof Array||i.isArray(a.value))&&("object"==b&&(b=typeof a.value[0]),a.value=a.value.toString()),[b,a.field,a.param,a.value].join(" ")}function f(a){var b=a.field in j?"date":a.field in k?"number":"string";return[a.sort,b,a.field].join(" ")}var g=a("../qbConfig"),h=a("../qbUtils"),i=a("util"),j=["created_at","updated_at","last_request_at"],k=["id","external_user_id"],l=g.urls.users+"/password/reset";d.prototype={listUsers:function(a,b){h.QBLog("[UsersProxy]","listUsers",arguments.length>1?a:"");var c,d={},i=[];"function"==typeof a&&"undefined"==typeof b&&(b=a,a={}),a.filter&&(a.filter instanceof Array?a.filter.forEach(function(a){c=e(a),i.push(c)}):(c=e(a.filter),i.push(c)),d.filter=i),a.order&&(d.order=f(a.order)),a.page&&(d.page=a.page),a.per_page&&(d.per_page=a.per_page),this.service.ajax({url:h.getUrl(g.urls.users),data:d},b)},get:function(a,b){h.QBLog("[UsersProxy]","get",a);var c;"number"==typeof a?(c=a,a={}):a.login?c="by_login":a.full_name?c="by_full_name":a.facebook_id?c="by_facebook_id":a.twitter_id?c="by_twitter_id":a.email?c="by_email":a.tags?c="by_tags":a.external&&(c="external/"+a.external,a={}),this.service.ajax({url:h.getUrl(g.urls.users,c),data:a},function(a,c){a?b(a,null):b(null,c.user||c)})},create:function(a,b){h.QBLog("[UsersProxy]","create",a),this.service.ajax({url:h.getUrl(g.urls.users),type:"POST",data:{user:a}},function(a,c){a?b(a,null):b(null,c.user)})},update:function(a,b,c){h.QBLog("[UsersProxy]","update",a,b),this.service.ajax({url:h.getUrl(g.urls.users,a),type:"PUT",data:{user:b}},function(a,b){a?c(a,null):c(null,b.user)})},"delete":function(a,b){h.QBLog("[UsersProxy]","delete",a);var c;"number"==typeof a?c=a:a.external&&(c="external/"+a.external),this.service.ajax({url:h.getUrl(g.urls.users,c),type:"DELETE",dataType:"text"},b)},resetPassword:function(a,b){h.QBLog("[UsersProxy]","resetPassword",a),this.service.ajax({url:h.getUrl(l),data:{email:a}},b)}},b.exports=d},{"../qbConfig":15,"../qbUtils":19,util:50}],8:[function(a,b,c){var d=a("../../qbConfig"),e=a("./qbWebRTCHelpers"),f=window.RTCPeerConnection||window.webkitRTCPeerConnection||window.mozRTCPeerConnection,g=window.RTCSessionDescription||window.mozRTCSessionDescription,h=window.RTCIceCandidate||window.mozRTCIceCandidate;
f.State={NEW:1,CONNECTING:2,CHECKING:3,CONNECTED:4,DISCONNECTED:5,FAILED:6,CLOSED:7,COMPLETED:8},f.prototype.init=function(a,b,c,d){e.trace("RTCPeerConnection init. userID: "+b+", sessionID: "+c+", type: "+d),this.delegate=a,this.sessionID=c,this.userID=b,this.type=d,this.remoteSDP=null,this.state=f.State.NEW,this.onicecandidate=this.onIceCandidateCallback,this.onaddstream=this.onAddRemoteStreamCallback,this.onsignalingstatechange=this.onSignalingStateCallback,this.oniceconnectionstatechange=this.onIceConnectionStateCallback,this.dialingTimer=null,this.answerTimeInterval=0,this.reconnectTimer=0,this.iceCandidates=[]},f.prototype.release=function(){this._clearDialingTimer(),"closed"!==this.signalingState&&this.close()},f.prototype.updateRemoteSDP=function(a){if(!a)throw new Error("sdp string can't be empty.");this.remoteSDP=a},f.prototype.getRemoteSDP=function(){return this.remoteSDP},f.prototype.setRemoteSessionDescription=function(a,b,c){function d(){c(null)}function e(a){c(a)}var f=new g({sdp:b,type:a});this.setRemoteDescription(f,d,e)},f.prototype.addLocalStream=function(a){if(!a)throw new Error("'RTCPeerConnection.addStream' error: stream is 'null'.");this.addStream(a)},f.prototype.getAndSetLocalSessionDescription=function(a){function b(b){d.setLocalDescription(b,function(){a(null)},c)}function c(b){a(b)}var d=this;d.state=f.State.CONNECTING,"offer"===d.type?d.createOffer(b,c):d.createAnswer(b,c)},f.prototype.addCandidates=function(a){for(var b,c=0,d=a.length;d>c;c++)b={sdpMLineIndex:a[c].sdpMLineIndex,sdpMid:a[c].sdpMid,candidate:a[c].candidate},this.addIceCandidate(new h(b),function(){},function(a){e.traceError("Error on 'addIceCandidate': "+a)})},f.prototype.toString=function(){return"sessionID: "+this.sessionID+", userID:  "+this.userID+", type: "+this.type+", state: "+this.state},f.prototype.onSignalingStateCallback=function(){"stable"===this.signalingState&&this.iceCandidates.length>0&&(this.delegate.processIceCandidates(this,this.iceCandidates),this.iceCandidates.length=0)},f.prototype.onIceCandidateCallback=function(a){var b=a.candidate;if(b){var c={sdpMLineIndex:b.sdpMLineIndex,sdpMid:b.sdpMid,candidate:b.candidate};"stable"===this.signalingState?this.delegate.processIceCandidates(this,[c]):this.iceCandidates.push(c)}},f.prototype.onAddRemoteStreamCallback=function(a){"function"==typeof this.delegate._onRemoteStreamListener&&this.delegate._onRemoteStreamListener(this.userID,a.stream)},f.prototype.onIceConnectionStateCallback=function(){var a=this.iceConnectionState;if(e.trace("onIceConnectionStateCallback: "+this.iceConnectionState),"function"==typeof this.delegate._onSessionConnectionStateChangedListener){var b=null;"checking"===a?(this.state=f.State.CHECKING,b=e.SessionConnectionState.CONNECTING):"connected"===a?(this._clearWaitingReconnectTimer(),this.state=f.State.CONNECTED,b=e.SessionConnectionState.CONNECTED):"completed"===a?(this._clearWaitingReconnectTimer(),this.state=f.State.COMPLETED,b=e.SessionConnectionState.COMPLETED):"failed"===a?(this.state=f.State.FAILED,b=e.SessionConnectionState.FAILED):"disconnected"===a?(this._startWaitingReconnectTimer(),this.state=f.State.DISCONNECTED,b=e.SessionConnectionState.DISCONNECTED):"closed"===a&&(this.state=f.State.CLOSED,b=e.SessionConnectionState.CLOSED),b&&this.delegate._onSessionConnectionStateChangedListener(this.userID,b)}},f.prototype._clearWaitingReconnectTimer=function(){this.waitingReconnectTimeoutCallback&&(e.trace("_clearWaitingReconnectTimer"),clearTimeout(this.waitingReconnectTimeoutCallback),this.waitingReconnectTimeoutCallback=null)},f.prototype._startWaitingReconnectTimer=function(){var a=this,b=1e3*d.webrtc.disconnectTimeInterval,c=function(){e.trace("waitingReconnectTimeoutCallback"),clearTimeout(a.waitingReconnectTimeoutCallback),a.release(),a.delegate._closeSessionIfAllConnectionsClosed()};e.trace("_startWaitingReconnectTimer, timeout: "+b),a.waitingReconnectTimeoutCallback=setTimeout(c,b)},f.prototype._clearDialingTimer=function(){this.dialingTimer&&(e.trace("_clearDialingTimer"),clearInterval(this.dialingTimer),this.dialingTimer=null,this.answerTimeInterval=0)},f.prototype._startDialingTimer=function(a,b){var c=this,f=1e3*d.webrtc.dialingTimeInterval;e.trace("_startDialingTimer, dialingTimeInterval: "+f);var g=function(a,b,f){f||(c.answerTimeInterval+=1e3*d.webrtc.dialingTimeInterval),e.trace("_dialingCallback, answerTimeInterval: "+c.answerTimeInterval),c.answerTimeInterval>=1e3*d.webrtc.answerTimeInterval?(c._clearDialingTimer(),b&&c.delegate.processOnNotAnswer(c)):c.delegate.processCall(c,a)};c.dialingTimer=setInterval(g,f,a,b,!1),g(a,b,!0)},b.exports=f},{"../../qbConfig":15,"./qbWebRTCHelpers":10}],9:[function(a,b,c){function d(a,b){return d.__instance?d.__instance:this===window?new d:(d.__instance=this,this.connection=b,this.signalingProcessor=new h(a,this,b),this.signalingProvider=new i(a,b),this.SessionConnectionState=j.SessionConnectionState,this.CallType=j.CallType,this.PeerConnectionState=k.State,void(this.sessions={}))}function e(a,b){var c=!1,d=b.sort();return a.length&&a.forEach(function(a){var b=a.sort();c=b.length==d.length&&b.every(function(a,b){return a===d[b]})}),c}function f(a){var b=[];return Object.keys(a).length>0&&Object.keys(a).forEach(function(c,d,e){var f=a[c];(f.state===g.State.NEW||f.state===g.State.ACTIVE)&&b.push(f.opponentsIDs)}),b}var g=a("./qbWebRTCSession"),h=a("./qbWebRTCSignalingProcessor"),i=a("./qbWebRTCSignalingProvider"),j=a("./qbWebRTCHelpers"),k=a("./qbRTCPeerConnection"),l=a("./qbWebRTCSignalingConstants"),m=a("../../qbUtils");d.prototype.sessions={},d.prototype.createNewSession=function(a,b,c){var d=f(this.sessions),g=c||j.getIdFromNode(this.connection.jid),h=!1,i=b||2;if(!a)throw new Error("Can't create a session without the opponentsIDs.");if(h=e(d,a))throw new Error("Can't create a session with the same opponentsIDs. There is a session already in NEW or ACTIVE state.");return this._createAndStoreSession(null,g,a,i)},d.prototype._createAndStoreSession=function(a,b,c,d){var e=new g(a,b,c,d,this.signalingProvider,j.getIdFromNode(this.connection.jid));return e.onUserNotAnswerListener=this.onUserNotAnswerListener,e.onRemoteStreamListener=this.onRemoteStreamListener,e.onSessionConnectionStateChangedListener=this.onSessionConnectionStateChangedListener,e.onSessionCloseListener=this.onSessionCloseListener,this.sessions[e.ID]=e,e},d.prototype.clearSession=function(a){delete d.sessions[a]},d.prototype.isExistNewOrActiveSessionExceptSessionID=function(a){var b=this,c=!1;return Object.keys(b.sessions).length>0&&Object.keys(b.sessions).forEach(function(d,e,f){var h=b.sessions[d];(h.state===g.State.NEW||h.state===g.State.ACTIVE)&&h.ID!==a&&(c=!0)}),c},d.prototype._onCallListener=function(a,b,c){if(j.trace("onCall. UserID:"+a+". SessionID: "+b),this.isExistNewOrActiveSessionExceptSessionID(b))j.trace("User with id "+a+" is busy at the moment."),delete c.sdp,delete c.platform,c.sessionID=b,this.signalingProvider.sendMessage(a,c,l.SignalingType.REJECT);else{var d=this.sessions[b];if(!d){d=this._createAndStoreSession(b,c.callerID,c.opponentsIDs,c.callType);var e=JSON.parse(JSON.stringify(c));this._cleanupExtension(e),"function"==typeof this.onCallListener&&m.safeCallbackCall(this.onCallListener,d,e)}d.processOnCall(a,c)}},d.prototype._onAcceptListener=function(a,b,c){var d=this.sessions[b];if(j.trace("onAccept. UserID:"+a+". SessionID: "+b),d)if(d.state===g.State.ACTIVE){var e=JSON.parse(JSON.stringify(c));this._cleanupExtension(e),"function"==typeof this.onAcceptCallListener&&m.safeCallbackCall(this.onAcceptCallListener,d,a,e),d.processOnAccept(a,c)}else j.traceWarning("Ignore 'onAccept', the session( "+b+" ) has invalid state.");else j.traceError("Ignore 'onAccept', there is no information about session "+b+" by some reason.")},d.prototype._onRejectListener=function(a,b,c){var d=this,e=d.sessions[b];if(j.trace("onReject. UserID:"+a+". SessionID: "+b),e){var f=JSON.parse(JSON.stringify(c));d._cleanupExtension(f),"function"==typeof this.onRejectCallListener&&m.safeCallbackCall(d.onRejectCallListener,e,a,f),e.processOnReject(a,c)}else j.traceError("Ignore 'onReject', there is no information about session "+b+" by some reason.")},d.prototype._onStopListener=function(a,b,c){j.trace("onStop. UserID:"+a+". SessionID: "+b);var d=this.sessions[b],e=JSON.parse(JSON.stringify(c));!d||d.state!==g.State.ACTIVE&&d.state!==g.State.NEW?j.traceError("Ignore 'onStop', there is no information about session "+b+" by some reason."):(this._cleanupExtension(e),"function"==typeof this.onStopCallListener&&m.safeCallbackCall(this.onStopCallListener,d,a,e),d.processOnStop(a,c))},d.prototype._onIceCandidatesListener=function(a,b,c){var d=this.sessions[b];j.trace("onIceCandidates. UserID:"+a+". SessionID: "+b+". ICE candidates count: "+c.iceCandidates.length),d?d.state===g.State.ACTIVE?d.processOnIceCandidates(a,c):j.traceWarning("Ignore 'OnIceCandidates', the session ( "+b+" ) has invalid state."):j.traceError("Ignore 'OnIceCandidates', there is no information about session "+b+" by some reason.")},d.prototype._onUpdateListener=function(a,b,c){var d=this.sessions[b];j.trace("onUpdate. UserID:"+a+". SessionID: "+b+". Extension: "+JSON.stringify(c)),"function"==typeof this.onUpdateCallListener&&m.safeCallbackCall(this.onUpdateCallListener,d,a,c)},d.prototype._cleanupExtension=function(a){delete a.platform,delete a.sdp,delete a.opponentsIDs,delete a.callerID,delete a.callType},b.exports=d},{"../../qbUtils":19,"./qbRTCPeerConnection":8,"./qbWebRTCHelpers":10,"./qbWebRTCSession":11,"./qbWebRTCSignalingConstants":12,"./qbWebRTCSignalingProcessor":13,"./qbWebRTCSignalingProvider":14}],10:[function(a,b,c){var d=a("../../qbConfig"),e={};e={getUserJid:function(a,b){return a+"-"+b+"@"+d.endpoints.chat},getIdFromNode:function(a){return a.indexOf("@")<0?null:parseInt(a.split("@")[0].split("-")[0])},trace:function(a){d.debug&&console.log("[QBWebRTC]:",a)},traceWarning:function(a){d.debug&&console.warn("[QBWebRTC]:",a)},traceError:function(a){d.debug&&console.error("[QBWebRTC]:",a)},getLocalTime:function(){var a=(new Date).toString().split(" ");return a.slice(1,5).join("-")},dataURItoBlob:function(a,b){for(var c=[],d=window.atob(a.split(",")[1]),e=0,f=d.length;f>e;e++)c.push(d.charCodeAt(e));return new Blob([new Uint8Array(c)],{type:b})}},e.SessionConnectionState={UNDEFINED:0,CONNECTING:1,CONNECTED:2,FAILED:3,DISCONNECTED:4,CLOSED:5,COMPLETED:6},e.CallType={VIDEO:1,AUDIO:2},b.exports=e},{"../../qbConfig":15}],11:[function(a,b,c){function d(a,b,c,f,g,h){this.ID=a?a:e(),this.state=d.State.NEW,this.initiatorID=parseInt(b),this.opponentsIDs=c,this.callType=parseInt(f),this.peerConnections={},this.localStream=null,this.signalingProvider=g,this.currentUserID=h,this.answerTimer=null,this.startCallTime=0,this.acceptCallTime=0}function e(){var a=(new Date).getTime(),b="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(b){var c=(a+16*Math.random())%16|0;return a=Math.floor(a/16),("x"==b?c:3&c|8).toString(16)});return b}function f(a){try{return JSON.parse(JSON.stringify(a).replace(/null/g,'""'))}catch(b){return{}}}function g(a){var b=JSON.parse(JSON.stringify(a));return Object.keys(b).forEach(function(a,c,d){b[c].hasOwnProperty("url")?b[c].urls=b[c].url:b[c].url=b[c].urls}),b}var h=a("../../qbConfig"),i=a("./qbRTCPeerConnection"),j=a("../../qbUtils"),k=a("./qbWebRTCHelpers"),l=a("./qbWebRTCSignalingConstants");d.State={NEW:1,ACTIVE:2,HUNGUP:3,REJECTED:4,CLOSED:5},d.prototype.getUserMedia=function(a,b){var c=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia;if(!c)throw new Error("getUserMedia() is not supported in your browser");c=c.bind(navigator);var d=this;c({audio:a.audio||!1,video:a.video||!1},function(c){d.localStream=c,a.elemId&&d.attachMediaStream(a.elemId,c,a.options),b(null,c)},function(a){b(a,null)})},d.prototype.attachMediaStream=function(a,b,c){var d=document.getElementById(a);if(!d)throw new Error("Unable to attach media stream, element "+a+" is undefined");var e=window.URL||window.webkitURL;d.src=e.createObjectURL(b),c&&c.muted&&(d.muted=!0),c&&c.mirror&&(d.style.webkitTransform="scaleX(-1)",d.style.transform="scaleX(-1)"),d.play()},d.prototype.connectionStateForUser=function(a){var b=this.peerConnections[a];return b?b.state:null},d.prototype.detachMediaStream=function(a){var b=document.getElementById(a);b&&(b.pause(),b.src="")},d.prototype.call=function(a,b){var c=this,e=f(a),g=window.navigator.onLine,h=null;k.trace("Call, extension: "+JSON.stringify(e)),g?(c.state=d.State.ACTIVE,c.opponentsIDs.forEach(function(a,b,d){c._callInternal(a,e,!0)})):(c.state=d.State.CLOSED,h=j.getError(408,"Call.ERROR - ERR_INTERNET_DISCONNECTED")),"function"==typeof b&&b(h)},d.prototype._callInternal=function(a,b,c){var d=this._createPeer(a,"offer");d.addLocalStream(this.localStream),this.peerConnections[a]=d,d.getAndSetLocalSessionDescription(function(a){a?k.trace("getAndSetLocalSessionDescription error: "+a):(k.trace("getAndSetLocalSessionDescription success"),d._startDialingTimer(b,c))})},d.prototype.accept=function(a){var b=this,c=f(a);if(k.trace("Accept, extension: "+JSON.stringify(c)),b.state===d.State.ACTIVE)return void k.traceError("Can't accept, the session is already active, return.");if(b.state===d.State.CLOSED)return k.traceError("Can't accept, the session is already closed, return."),void b.stop({});b.state=d.State.ACTIVE,b.acceptCallTime=new Date,b._clearAnswerTimer(),b._acceptInternal(b.initiatorID,c);var e=b._uniqueOpponentsIDsWithoutInitiator();if(e.length>0){var g=(b.acceptCallTime-b.startCallTime)/1e3;b._startWaitingOfferOrAnswerTimer(g),e.forEach(function(a,c,d){b.currentUserID>a&&b._callInternal(a,{},!0)})}},d.prototype._acceptInternal=function(a,b){var c=this,d=this.peerConnections[a];d?(d.addLocalStream(this.localStream),d.setRemoteSessionDescription("offer",d.getRemoteSDP(),function(e){e?k.traceError("'setRemoteSessionDescription' error: "+e):(k.trace("'setRemoteSessionDescription' success"),d.getAndSetLocalSessionDescription(function(e){e?k.trace("getAndSetLocalSessionDescription error: "+e):(b.sessionID=c.ID,b.callType=c.callType,b.callerID=c.initiatorID,b.opponentsIDs=c.opponentsIDs,b.sdp=d.localDescription.sdp,c.signalingProvider.sendMessage(a,b,l.SignalingType.ACCEPT))}))})):k.traceError("Can't accept the call, there is no information about peer connection by some reason.")},d.prototype.reject=function(a){var b=this,c=f(a),e=Object.keys(b.peerConnections).length;if(k.trace("Reject, extension: "+JSON.stringify(c)),b.state=d.State.REJECTED,b._clearAnswerTimer(),c.sessionID=b.ID,c.callType=b.callType,c.callerID=b.initiatorID,c.opponentsIDs=b.opponentsIDs,e>0)for(var g in b.peerConnections){var h=b.peerConnections[g];b.signalingProvider.sendMessage(h.userID,c,l.SignalingType.REJECT)}b._close()},d.prototype.stop=function(a){var b=this,c=f(a),e=Object.keys(b.peerConnections).length;if(k.trace("Stop, extension: "+JSON.stringify(c)),b.state=d.State.HUNGUP,b._clearAnswerTimer(),c.sessionID=b.ID,c.callType=b.callType,c.callerID=b.initiatorID,c.opponentsIDs=b.opponentsIDs,e>0)for(var g in b.peerConnections){var h=b.peerConnections[g];b.signalingProvider.sendMessage(h.userID,c,l.SignalingType.STOP)}b._close()},d.prototype.update=function(a){var b=this,c={};if(k.trace("Update, extension: "+JSON.stringify(a)),null==a)return void k.trace("extension is null, no parameters to update");c=f(a),c.sessionID=this.ID;for(var d in b.peerConnections){var e=b.peerConnections[d];b.signalingProvider.sendMessage(e.userID,c,l.SignalingType.PARAMETERS_CHANGED)}},d.prototype.mute=function(a){this._muteStream(0,a)},d.prototype.unmute=function(a){this._muteStream(1,a)},d.snapshot=function(a){var b,c,d=document.getElementById(a),e=document.createElement("canvas"),f=e.getContext("2d");return d?(e.width=d.clientWidth,e.height=d.clientHeight,"scaleX(-1)"===d.style.transform&&(f.translate(e.width,0),f.scale(-1,1)),f.drawImage(d,0,0,d.clientWidth,d.clientHeight),b=e.toDataURL(),c=k.dataURItoBlob(b,"image/png"),c.name="snapshot_"+getLocalTime()+".png",c.url=b,c):void 0},d.filter=function(a,b){var c=document.getElementById(a);c&&(c.style.webkitFilter=b,c.style.filter=b)},d.prototype.processOnCall=function(a,b){var c=this,e=c._uniqueOpponentsIDs();e.forEach(function(e,f,g){var h=c.peerConnections[e];if(h)e==a&&(h.updateRemoteSDP(b.sdp),a!=c.initiatorID&&c.state===d.State.ACTIVE&&c._acceptInternal(a,{}));else{var i;i=e!=a&&c.currentUserID>e?c._createPeer(e,"offer"):c._createPeer(e,"answer"),c.peerConnections[e]=i,e==a&&(i.updateRemoteSDP(b.sdp),c._startAnswerTimer())}})},d.prototype.processOnAccept=function(a,b){var c=this.peerConnections[a];c?(c._clearDialingTimer(),c.setRemoteSessionDescription("answer",b.sdp,function(a){a?k.traceError("'setRemoteSessionDescription' error: "+a):k.trace("'setRemoteSessionDescription' success")})):k.traceError("Ignore 'OnAccept', there is no information about peer connection by some reason.")},d.prototype.processOnReject=function(a,b){var c=this.peerConnections[a];this._clearWaitingOfferOrAnswerTimer(),c?c.release():k.traceError("Ignore 'OnReject', there is no information about peer connection by some reason."),this._closeSessionIfAllConnectionsClosed()},d.prototype.processOnStop=function(a,b){var c=this;if(this._clearAnswerTimer(),a===c.initiatorID)Object.keys(c.peerConnections).length?Object.keys(c.peerConnections).forEach(function(a){c.peerConnections[a].release()}):k.traceError("Ignore 'OnStop', there is no information about peer connections by some reason.");else{var d=c.peerConnections[a];d?d.release():k.traceError("Ignore 'OnStop', there is no information about peer connection by some reason.")}this._closeSessionIfAllConnectionsClosed()},d.prototype.processOnIceCandidates=function(a,b){var c=this.peerConnections[a];c?c.addCandidates(b.iceCandidates):k.traceError("Ignore 'OnIceCandidates', there is no information about peer connection by some reason.")},d.prototype.processCall=function(a,b){var b=b||{};b.sessionID=this.ID,b.callType=this.callType,b.callerID=this.initiatorID,b.opponentsIDs=this.opponentsIDs,b.sdp=a.localDescription.sdp,this.signalingProvider.sendMessage(a.userID,b,l.SignalingType.CALL)},d.prototype.processIceCandidates=function(a,b){var c={};c.sessionID=this.ID,c.callType=this.callType,c.callerID=this.initiatorID,c.opponentsIDs=this.opponentsIDs,this.signalingProvider.sendCandidate(a.userID,b,c)},d.prototype.processOnNotAnswer=function(a){k.trace("Answer timeout callback for session "+this.ID+" for user "+a.userID),this._clearWaitingOfferOrAnswerTimer(),a.release(),"function"==typeof this.onUserNotAnswerListener&&j.safeCallbackCall(this.onUserNotAnswerListener,this,a.userID),this._closeSessionIfAllConnectionsClosed()},d.prototype._onRemoteStreamListener=function(a,b){"function"==typeof this.onRemoteStreamListener&&j.safeCallbackCall(this.onRemoteStreamListener,this,a,b)},d.prototype._onSessionConnectionStateChangedListener=function(a,b){var c=this;"function"==typeof c.onSessionConnectionStateChangedListener&&j.safeCallbackCall(c.onSessionConnectionStateChangedListener,c,a,b)},d.prototype._createPeer=function(a,b){if(!i)throw new Error("_createPeer error: RTCPeerConnection() is not supported in your browser");this.startCallTime=new Date;var c={iceServers:g(h.webrtc.iceServers)};k.trace("_createPeer, iceServers: "+JSON.stringify(c));var d=new i(c);return d.init(this,a,this.ID,b),d},d.prototype._close=function(){k.trace("_close");for(var a in this.peerConnections){var b=this.peerConnections[a];b.release()}this._closeLocalMediaStream(),this.state=d.State.CLOSED,"function"==typeof this.onSessionCloseListener&&j.safeCallbackCall(this.onSessionCloseListener,this)},d.prototype._closeSessionIfAllConnectionsClosed=function(){var a=!0;for(var b in this.peerConnections){var c=this.peerConnections[b];if("closed"!==c.signalingState){a=!1;break}}k.trace("All peer connections closed: "+a),a&&(this._closeLocalMediaStream(),"function"==typeof this.onSessionCloseListener&&this.onSessionCloseListener(this),this.state=d.State.CLOSED)},d.prototype._closeLocalMediaStream=function(){this.localStream&&(this.localStream.getAudioTracks().forEach(function(a){a.stop()}),this.localStream.getVideoTracks().forEach(function(a){a.stop()}),this.localStream=null)},d.prototype._muteStream=function(a,b){return"audio"===b&&this.localStream.getAudioTracks().length>0?void this.localStream.getAudioTracks().forEach(function(b){b.enabled=!!a}):"video"===b&&this.localStream.getVideoTracks().length>0?void this.localStream.getVideoTracks().forEach(function(b){b.enabled=!!a}):void 0},d.prototype._clearAnswerTimer=function(){this.answerTimer&&(k.trace("_clearAnswerTimer"),clearTimeout(this.answerTimer),this.answerTimer=null)},d.prototype._startAnswerTimer=function(){k.trace("_startAnswerTimer");var a=this,b=function(){k.trace("_answerTimeoutCallback"),"function"==typeof a.onSessionCloseListener&&a._close(),a.answerTimer=null},c=1e3*h.webrtc.answerTimeInterval;this.answerTimer=setTimeout(b,c)},d.prototype._clearWaitingOfferOrAnswerTimer=function(){this.waitingOfferOrAnswerTimer&&(k.trace("_clearWaitingOfferOrAnswerTimer"),clearTimeout(this.waitingOfferOrAnswerTimer),this.waitingOfferOrAnswerTimer=null)},d.prototype._startWaitingOfferOrAnswerTimer=function(a){var b=this,c=h.webrtc.answerTimeInterval-a<0?1:h.webrtc.answerTimeInterval-a,d=function(){k.trace("waitingOfferOrAnswerTimeoutCallback"),Object.keys(b.peerConnections).length>0&&Object.keys(b.peerConnections).forEach(function(a){var c=b.peerConnections[a];(c.state===i.State.CONNECTING||c.state===i.State.NEW)&&b.processOnNotAnswer(c)}),b.waitingOfferOrAnswerTimer=null};k.trace("_startWaitingOfferOrAnswerTimer, timeout: "+c),this.waitingOfferOrAnswerTimer=setTimeout(d,1e3*c)},d.prototype._uniqueOpponentsIDs=function(){var a=this,b=[];return this.initiatorID!==this.currentUserID&&b.push(this.initiatorID),this.opponentsIDs.forEach(function(c,d,e){c!=a.currentUserID&&b.push(parseInt(c))}),b},d.prototype._uniqueOpponentsIDsWithoutInitiator=function(){var a=this,b=[];return this.opponentsIDs.forEach(function(c,d,e){c!=a.currentUserID&&b.push(parseInt(c))}),b},d.prototype.toString=function(){return"ID: "+this.ID+", initiatorID:  "+this.initiatorID+", opponentsIDs: "+this.opponentsIDs+", state: "+this.state+", callType: "+this.callType},b.exports=d},{"../../qbConfig":15,"../../qbUtils":19,"./qbRTCPeerConnection":8,"./qbWebRTCHelpers":10,"./qbWebRTCSignalingConstants":12}],12:[function(a,b,c){function d(){}d.MODULE_ID="WebRTCVideoChat",d.SignalingType={CALL:"call",ACCEPT:"accept",REJECT:"reject",STOP:"hangUp",CANDIDATE:"iceCandidates",PARAMETERS_CHANGED:"update"},b.exports=d},{}],13:[function(a,b,c){function d(a,b,c){var d=this;d.service=a,d.delegate=b,d.connection=c,this._onMessage=function(a){var b=a.getAttribute("from"),c=a.querySelector("extraParams"),g=a.querySelector("delay"),h=e.getIdFromNode(b),i=d._getExtension(c);if(g||i.moduleIdentifier!==f.MODULE_ID)return!0;var j=i.sessionID,k=i.signalType;switch(delete i.moduleIdentifier,delete i.sessionID,delete i.signalType,k){case f.SignalingType.CALL:"function"==typeof d.delegate._onCallListener&&d.delegate._onCallListener(h,j,i);break;case f.SignalingType.ACCEPT:"function"==typeof d.delegate._onAcceptListener&&d.delegate._onAcceptListener(h,j,i);break;case f.SignalingType.REJECT:"function"==typeof d.delegate._onRejectListener&&d.delegate._onRejectListener(h,j,i);break;case f.SignalingType.STOP:"function"==typeof d.delegate._onStopListener&&d.delegate._onStopListener(h,j,i);break;case f.SignalingType.CANDIDATE:"function"==typeof d.delegate._onIceCandidatesListener&&d.delegate._onIceCandidatesListener(h,j,i);break;case f.SignalingType.PARAMETERS_CHANGED:"function"==typeof d.delegate._onUpdateListener&&d.delegate._onUpdateListener(h,j,i)}return!0},this._getExtension=function(a){if(!a)return null;for(var b,c,e,f,g={},h=[],i=[],j=0,k=a.childNodes.length;k>j;j++)if("iceCandidates"===a.childNodes[j].tagName){e=a.childNodes[j].childNodes;for(var l=0,m=e.length;m>l;l++){b={},f=e[l].childNodes;for(var n=0,o=f.length;o>n;n++)b[f[n].tagName]=f[n].textContent;h.push(b)}}else if("opponentsIDs"===a.childNodes[j].tagName){e=a.childNodes[j].childNodes;for(var p=0,q=e.length;q>p;p++)c=e[p].textContent,i.push(parseInt(c))}else if(a.childNodes[j].childNodes.length>1){var r=a.childNodes[j].textContent.length;if(r>4096){for(var s="",t=0;t<a.childNodes[j].childNodes.length;++t)s+=a.childNodes[j].childNodes[t].textContent;g[a.childNodes[j].tagName]=s}else g=d._XMLtoJS(g,a.childNodes[j].tagName,a.childNodes[j])}else g[a.childNodes[j].tagName]=a.childNodes[j].textContent;return h.length>0&&(g.iceCandidates=h),i.length>0&&(g.opponentsIDs=i),g},this._XMLtoJS=function(a,b,c){var d=this;a[b]={};for(var e=0,f=c.childNodes.length;f>e;e++)c.childNodes[e].childNodes.length>1?a[b]=d._XMLtoJS(a[b],c.childNodes[e].tagName,c.childNodes[e]):a[b][c.childNodes[e].tagName]=c.childNodes[e].textContent;return a}}a("strophe");var e=a("./qbWebRTCHelpers"),f=a("./qbWebRTCSignalingConstants");b.exports=d},{"./qbWebRTCHelpers":10,"./qbWebRTCSignalingConstants":12,strophe:51}],14:[function(a,b,c){function d(a,b){this.service=a,this.connection=b}a("strophe");var e=a("./qbWebRTCHelpers"),f=a("./qbWebRTCSignalingConstants"),g=a("../../qbUtils"),h=a("../../qbConfig");d.prototype.sendCandidate=function(a,b,c){var d=c||{};d.iceCandidates=b,this.sendMessage(a,d,f.SignalingType.CANDIDATE)},d.prototype.sendMessage=function(a,b,c){var d,i,j=b||{},k=this;j.moduleIdentifier=f.MODULE_ID,j.signalType=c,j.platform="web",i={to:e.getUserJid(a,h.creds.appId),type:"headline",id:g.getBsonObjectId()},d=$msg(i).c("extraParams",{xmlns:Strophe.NS.CLIENT}),Object.keys(j).forEach(function(a){"iceCandidates"===a?(d=d.c("iceCandidates"),j[a].forEach(function(a){d=d.c("iceCandidate"),Object.keys(a).forEach(function(b){d.c(b).t(a[b]).up()}),d.up()}),d.up()):"opponentsIDs"===a?(d=d.c("opponentsIDs"),j[a].forEach(function(a){d=d.c("opponentID").t(a).up()}),d.up()):"object"==typeof j[a]?k._JStoXML(a,j[a],d):d.c(a).t(j[a]).up()}),this.connection.send(d)},d.prototype._JStoXML=function(a,b,c){var d=this;c.c(a),Object.keys(b).forEach(function(a){"object"==typeof b[a]?d._JStoXML(a,b[a],c):c.c(a).t(b[a]).up()}),c.up()},b.exports=d},{"../../qbConfig":15,"../../qbUtils":19,"./qbWebRTCHelpers":10,"./qbWebRTCSignalingConstants":12,strophe:51}],15:[function(a,b,c){var d={version:"2.0.4",creds:{appId:"",authKey:"",authSecret:""},endpoints:{api:"api.quickblox.com",chat:"chat.quickblox.com",muc:"muc.chat.quickblox.com"},chatProtocol:{bosh:"https://chat.quickblox.com:5281",websocket:"wss://chat.quickblox.com:5291",active:2},webrtc:{answerTimeInterval:60,dialingTimeInterval:5,disconnectTimeInterval:30,iceServers:[{url:"stun:stun.l.google.com:19302"},{url:"stun:turn.quickblox.com",username:"quickblox",credential:"baccb97ba2d92d71e26eb9886da5f1e0"},{url:"turn:turn.quickblox.com:3478?transport=udp",username:"quickblox",credential:"baccb97ba2d92d71e26eb9886da5f1e0"},{url:"turn:turn.quickblox.com:3478?transport=tcp",username:"quickblox",credential:"baccb97ba2d92d71e26eb9886da5f1e0"},{url:"turn:turnsingapor.quickblox.com:3478?transport=udp",username:"quickblox",credential:"baccb97ba2d92d71e26eb9886da5f1e0"},{url:"turn:turnsingapore.quickblox.com:3478?transport=tcp",username:"quickblox",credential:"baccb97ba2d92d71e26eb9886da5f1e0"},{url:"turn:turnireland.quickblox.com:3478?transport=udp",username:"quickblox",credential:"baccb97ba2d92d71e26eb9886da5f1e0"},{url:"turn:turnireland.quickblox.com:3478?transport=tcp",username:"quickblox",credential:"baccb97ba2d92d71e26eb9886da5f1e0"}]},urls:{session:"session",login:"login",users:"users",chat:"chat",blobs:"blobs",geodata:"geodata",pushtokens:"push_tokens",subscriptions:"subscriptions",events:"events",data:"data",type:".json"},on:{sessionExpired:null},timeout:null,debug:{mode:0,file:null},addISOTime:!1};d.set=function(a){"object"==typeof a.endpoints&&a.endpoints.chat&&(d.endpoints.muc="muc."+a.endpoints.chat,d.chatProtocol.bosh="https://"+a.endpoints.chat+":5281",d.chatProtocol.websocket="wss://"+a.endpoints.chat+":5291"),Object.keys(a).forEach(function(b){"set"!==b&&d.hasOwnProperty(b)&&("object"!=typeof a[b]?d[b]=a[b]:Object.keys(a[b]).forEach(function(c){d[b].hasOwnProperty(c)&&(d[b][c]=a[b][c])})),"iceServers"===b&&(d.webrtc.iceServers=a[b])})},b.exports=d},{}],16:[function(a,b,c){function d(){}var e=a("./qbConfig"),f=a("./qbUtils"),g="undefined"!=typeof window;d.prototype={init:function(b,c,d,h){h&&"object"==typeof h&&e.set(h);var i=a("./qbProxy");this.service=new i;var j,k=a("./modules/qbAuth"),l=a("./modules/qbUsers"),m=a("./modules/qbChat"),n=a("./modules/qbContent"),o=a("./modules/qbLocation"),p=a("./modules/qbPushNotifications"),q=a("./modules/qbData");if(g){var r=a("./qbStrophe");if(j=new r,f.isWebRTCAvailble()){var s=a("./modules/webrtc/qbWebRTCClient");this.webrtc=new s(this.service,j||null)}else this.webrtc=!1}else this.webrtc=!1;this.auth=new k(this.service),this.users=new l(this.service),this.chat=new m(this.service,this.webrtc?this.webrtc.signalingProcessor:null,j||null),this.content=new n(this.service),this.location=new o(this.service),this.pushnotifications=new p(this.service),this.data=new q(this.service),"string"!=typeof b||c&&"number"!=typeof c||d?(e.creds.appId=b,e.creds.authKey=c,e.creds.authSecret=d):("number"==typeof c&&(e.creds.appId=c),this.service.setSession({token:b}))},getSession:function(a){this.auth.getSession(a)},createSession:function(a,b){this.auth.createSession(a,b)},destroySession:function(a){this.auth.destroySession(a)},login:function(a,b){this.auth.login(a,b)},logout:function(a){this.auth.logout(a)}};var h=new d;h.QuickBlox=d,b.exports=h},{"./modules/qbAuth":1,"./modules/qbChat":2,"./modules/qbContent":3,"./modules/qbData":4,"./modules/qbLocation":5,"./modules/qbPushNotifications":6,"./modules/qbUsers":7,"./modules/webrtc/qbWebRTCClient":9,"./qbConfig":15,"./qbProxy":17,"./qbStrophe":18,"./qbUtils":19}],17:[function(a,b,c){function d(){this.qbInst={config:e,session:null}}var e=a("./qbConfig"),f=a("./qbUtils"),g=e.version,h="undefined"!=typeof window;if(!h)var i=a("request");var j=h&&window.jQuery&&window.jQuery.ajax||h&&window.Zepto&&window.Zepto.ajax;if(h&&!j)throw new Error("Quickblox requires jQuery or Zepto");d.prototype={setSession:function(a){this.qbInst.session=a},getSession:function(){return this.qbInst.session},handleResponse:function(a,b,c,d){!a||"function"!=typeof e.on.sessionExpired||"Unauthorized"!==a.message&&"401 Unauthorized"!==a.status?a?c(a,null):(e.addISOTime&&(b=f.injectISOTimes(b)),c(null,b)):e.on.sessionExpired(function(){c(a,b)},d)},ajax:function(a,b){var c;a.data&&a.data.file?(c=JSON.parse(JSON.stringify(a)),c.data.file="..."):c=a,f.QBLog("[ServiceProxy]","Request: ",a.type||"GET",{data:JSON.stringify(c)});var d=this,k=function(c){c&&d.setSession(c),d.ajax(a,b)},l={url:a.url,type:a.type||"GET",dataType:a.dataType||"json",data:a.data||" ",timeout:e.timeout,beforeSend:function(a,b){-1===b.url.indexOf("s3.amazonaws.com")&&d.qbInst.session&&d.qbInst.session.token&&(a.setRequestHeader("QB-Token",d.qbInst.session.token),a.setRequestHeader("QB-SDK","JS "+g+" - Client"))},success:function(c,g,h){f.QBLog("[ServiceProxy]","Response: ",{data:JSON.stringify(c)}),-1===a.url.indexOf(e.urls.session)?d.handleResponse(null,c,b,k):b(null,c)},error:function(c,g,h){f.QBLog("[ServiceProxy]","ajax error",c.status,h,c.responseText);var i={code:c.status,status:g,message:h,detail:c.responseText};-1===a.url.indexOf(e.urls.session)?d.handleResponse(i,null,b,k):b(i,null)}};if(!h)var m="json"===l.dataType,n=-1===a.url.indexOf("s3.amazonaws.com")&&d.qbInst&&d.qbInst.session&&d.qbInst.session.token||!1,o={url:l.url,method:l.type,timeout:e.timeout,json:m?l.data:null,headers:n?{"QB-Token":d.qbInst.session.token,"QB-SDK":"JS "+g+" - Server"}:null},p=function(a,c,f){if(a||200!==c.statusCode&&201!==c.statusCode&&202!==c.statusCode){var g;try{g={code:c&&c.statusCode||a&&a.code,status:c&&c.headers&&c.headers.status||"error",message:f||a&&a.errno,
detail:f&&f.errors||a&&a.syscall}}catch(h){g=a}-1===o.url.indexOf(e.urls.session)?d.handleResponse(g,null,b,k):b(g,null)}else-1===o.url.indexOf(e.urls.session)?d.handleResponse(null,f,b,k):b(null,f)};if(("boolean"==typeof a.contentType||"string"==typeof a.contentType)&&(l.contentType=a.contentType),"boolean"==typeof a.processData&&(l.processData=a.processData),h)j(l);else{var q=i(o,p);if(!m){var r=q.form();Object.keys(l.data).forEach(function(a,b,c){r.append(a,l.data[a])})}}}},b.exports=d},{"./qbConfig":15,"./qbUtils":19,request:24}],18:[function(a,b,c){function d(){var a=1===e.chatProtocol.active?e.chatProtocol.bosh:e.chatProtocol.websocket,b=new Strophe.Connection(a);return 1===e.chatProtocol.active?(b.xmlInput=function(a){if(a.childNodes[0])for(var b=0,c=a.childNodes.length;c>b;b++)f.QBLog("[QBChat]","RECV:",a.childNodes[b])},b.xmlOutput=function(a){if(a.childNodes[0])for(var b=0,c=a.childNodes.length;c>b;b++)f.QBLog("[QBChat]","SENT:",a.childNodes[b])}):(b.xmlInput=function(a){f.QBLog("[QBChat]","RECV:",a)},b.xmlOutput=function(a){f.QBLog("[QBChat]","SENT:",a)}),b}a("strophe");var e=a("./qbConfig"),f=a("./qbUtils");b.exports=d},{"./qbConfig":15,"./qbUtils":19,strophe:51}],19:[function(a,b,c){var d=a("./qbConfig"),e="undefined"!=typeof window,f="This function isn't supported outside of the browser (...yet)";if(!e)var g=a("fs");var h={machine:Math.floor(16777216*Math.random()).toString(16),pid:Math.floor(32767*Math.random()).toString(16),increment:0},i={safeCallbackCall:function(){if(!e)throw f;for(var a,b=arguments[0].toString(),c=b.split("(")[0].split(" ")[1],d=[],g=0;g<arguments.length;g++)d.push(arguments[g]);a=d.shift();try{a.apply(null,d)}catch(h){""===c?console.error("Error: "+h):console.error("Error in listener "+c+": "+h)}},randomNonce:function(){return Math.floor(1e4*Math.random())},unixTime:function(){return Math.floor(Date.now()/1e3)},getUrl:function(a,b){var c=b?"/"+b:"";return"https://"+d.endpoints.api+"/"+a+c+d.urls.type},getBsonObjectId:function(){var a=this.unixTime().toString(16),b=(h.increment++).toString(16);return b>16777215&&(h.increment=0),"00000000".substr(0,8-a.length)+a+"000000".substr(0,6-h.machine.length)+h.machine+"0000".substr(0,4-h.pid.length)+h.pid+"000000".substr(0,6-b.length)+b},injectISOTimes:function(a){if(a.created_at)"number"==typeof a.created_at&&(a.iso_created_at=new Date(1e3*a.created_at).toISOString()),"number"==typeof a.updated_at&&(a.iso_updated_at=new Date(1e3*a.updated_at).toISOString());else if(a.items)for(var b=0,c=a.items.length;c>b;++b)"number"==typeof a.items[b].created_at&&(a.items[b].iso_created_at=new Date(1e3*a.items[b].created_at).toISOString()),"number"==typeof a.items[b].updated_at&&(a.items[b].iso_updated_at=new Date(1e3*a.items[b].updated_at).toISOString());return a},QBLog:function(){if(this.loggers)for(var a=0;a<this.loggers.length;++a)this.loggers[a](arguments);else{this.loggers=[];var b=function(){var a=function(a){console.log.apply(console,Array.prototype.slice.call(a))};return a},c=function(){var a=function(a){if(e)throw f;for(var b=[],c=0;c<a.length;c++)b.push(JSON.stringify(a[c]));b=b.join(" ");var h="\n"+new Date+". "+b;g.appendFile(d.debug.file,h,function(a){return a?console.error("Error while writing log to file. Error: "+a):void 0})};return a};if("object"==typeof d.debug){if("number"==typeof d.debug.mode){if(1==d.debug.mode){var h=b();this.loggers.push(h)}else if(2==d.debug.mode){var h=c();this.loggers.push(h)}}else if("object"==typeof d.debug.mode){var i=this;d.debug.mode.forEach(function(a,d,e){if(1===a){var f=b();i.loggers.push(f)}else if(2===a){var f=c();i.loggers.push(f)}})}}else if("boolean"==typeof d.debug&&d.debug){var h=b();this.loggers.push(h)}if(this.loggers)for(var a=0;a<this.loggers.length;++a)this.loggers[a](arguments)}},isWebRTCAvailble:function(){var a=window.mozRTCPeerConnection||window.webkitRTCPeerConnection,b=window.mozRTCIceCandidate||window.RTCIceCandidate,c=window.mozRTCSessionDescription||window.RTCSessionDescription,d=!0;return a&&b&&c||(d=!1),d},getError:function(a,b,c){var d={code:a,status:"error",detail:b};switch(a){case 401:d.message="Unauthorized";break;case 403:d.message="Forbidden";break;case 408:d.message="Request Timeout";break;case 422:d.message="Unprocessable Entity";break;case 502:d.message="Bad Gateway";break;default:d.message="Unknown error"}return this.QBLog("["+c+"]","error: ",b),d}};b.exports=i},{"./qbConfig":15,fs:24}],20:[function(b,c,d){!function(b,e){"object"==typeof d?c.exports=d=e():"function"==typeof a&&a.amd?a([],e):b.CryptoJS=e()}(this,function(){var a=a||function(a,b){var c={},d=c.lib={},e=d.Base=function(){function a(){}return{extend:function(b){a.prototype=this;var c=new a;return b&&c.mixIn(b),c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)}),c.init.prototype=c,c.$super=this,c},create:function(){var a=this.extend();return a.init.apply(a,arguments),a},init:function(){},mixIn:function(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),f=d.WordArray=e.extend({init:function(a,c){a=this.words=a||[],this.sigBytes=c!=b?c:4*a.length},toString:function(a){return(a||h).stringify(this)},concat:function(a){var b=this.words,c=a.words,d=this.sigBytes,e=a.sigBytes;if(this.clamp(),d%4)for(var f=0;e>f;f++){var g=255&c[f>>>2]>>>24-8*(f%4);b[d+f>>>2]|=g<<24-8*((d+f)%4)}else if(c.length>65535)for(var f=0;e>f;f+=4)b[d+f>>>2]=c[f>>>2];else b.push.apply(b,c);return this.sigBytes+=e,this},clamp:function(){var b=this.words,c=this.sigBytes;b[c>>>2]&=4294967295<<32-8*(c%4),b.length=a.ceil(c/4)},clone:function(){var a=e.clone.call(this);return a.words=this.words.slice(0),a},random:function(b){for(var c=[],d=0;b>d;d+=4)c.push(0|4294967296*a.random());return new f.init(c,b)}}),g=c.enc={},h=g.Hex={stringify:function(a){for(var b=a.words,c=a.sigBytes,d=[],e=0;c>e;e++){var f=255&b[e>>>2]>>>24-8*(e%4);d.push((f>>>4).toString(16)),d.push((15&f).toString(16))}return d.join("")},parse:function(a){for(var b=a.length,c=[],d=0;b>d;d+=2)c[d>>>3]|=parseInt(a.substr(d,2),16)<<24-4*(d%8);return new f.init(c,b/2)}},i=g.Latin1={stringify:function(a){for(var b=a.words,c=a.sigBytes,d=[],e=0;c>e;e++){var f=255&b[e>>>2]>>>24-8*(e%4);d.push(String.fromCharCode(f))}return d.join("")},parse:function(a){for(var b=a.length,c=[],d=0;b>d;d++)c[d>>>2]|=(255&a.charCodeAt(d))<<24-8*(d%4);return new f.init(c,b)}},j=g.Utf8={stringify:function(a){try{return decodeURIComponent(escape(i.stringify(a)))}catch(b){throw Error("Malformed UTF-8 data")}},parse:function(a){return i.parse(unescape(encodeURIComponent(a)))}},k=d.BufferedBlockAlgorithm=e.extend({reset:function(){this._data=new f.init,this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=j.parse(a)),this._data.concat(a),this._nDataBytes+=a.sigBytes},_process:function(b){var c=this._data,d=c.words,e=c.sigBytes,g=this.blockSize,h=4*g,i=e/h;i=b?a.ceil(i):a.max((0|i)-this._minBufferSize,0);var j=i*g,k=a.min(4*j,e);if(j){for(var l=0;j>l;l+=g)this._doProcessBlock(d,l);var m=d.splice(0,j);c.sigBytes-=k}return new f.init(m,k)},clone:function(){var a=e.clone.call(this);return a._data=this._data.clone(),a},_minBufferSize:0});d.Hasher=k.extend({cfg:e.extend(),init:function(a){this.cfg=this.cfg.extend(a),this.reset()},reset:function(){k.reset.call(this),this._doReset()},update:function(a){return this._append(a),this._process(),this},finalize:function(a){a&&this._append(a);var b=this._doFinalize();return b},blockSize:16,_createHelper:function(a){return function(b,c){return new a.init(c).finalize(b)}},_createHmacHelper:function(a){return function(b,c){return new l.HMAC.init(a,c).finalize(b)}}});var l=c.algo={};return c}(Math);return a})},{}],21:[function(b,c,d){!function(e,f){"object"==typeof d?c.exports=d=f(b("./core"),b("./sha1"),b("./hmac")):"function"==typeof a&&a.amd?a(["./core","./sha1","./hmac"],f):f(e.CryptoJS)}(this,function(a){return a.HmacSHA1})},{"./core":20,"./hmac":22,"./sha1":23}],22:[function(b,c,d){!function(e,f){"object"==typeof d?c.exports=d=f(b("./core")):"function"==typeof a&&a.amd?a(["./core"],f):f(e.CryptoJS)}(this,function(a){!function(){var b=a,c=b.lib,d=c.Base,e=b.enc,f=e.Utf8,g=b.algo;g.HMAC=d.extend({init:function(a,b){a=this._hasher=new a.init,"string"==typeof b&&(b=f.parse(b));var c=a.blockSize,d=4*c;b.sigBytes>d&&(b=a.finalize(b)),b.clamp();for(var e=this._oKey=b.clone(),g=this._iKey=b.clone(),h=e.words,i=g.words,j=0;c>j;j++)h[j]^=1549556828,i[j]^=909522486;e.sigBytes=g.sigBytes=d,this.reset()},reset:function(){var a=this._hasher;a.reset(),a.update(this._iKey)},update:function(a){return this._hasher.update(a),this},finalize:function(a){var b=this._hasher,c=b.finalize(a);b.reset();var d=b.finalize(this._oKey.clone().concat(c));return d}})}()})},{"./core":20}],23:[function(b,c,d){!function(e,f){"object"==typeof d?c.exports=d=f(b("./core")):"function"==typeof a&&a.amd?a(["./core"],f):f(e.CryptoJS)}(this,function(a){return function(){var b=a,c=b.lib,d=c.WordArray,e=c.Hasher,f=b.algo,g=[],h=f.SHA1=e.extend({_doReset:function(){this._hash=new d.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(a,b){for(var c=this._hash.words,d=c[0],e=c[1],f=c[2],h=c[3],i=c[4],j=0;80>j;j++){if(16>j)g[j]=0|a[b+j];else{var k=g[j-3]^g[j-8]^g[j-14]^g[j-16];g[j]=k<<1|k>>>31}var l=(d<<5|d>>>27)+i+g[j];l+=20>j?(e&f|~e&h)+1518500249:40>j?(e^f^h)+1859775393:60>j?(e&f|e&h|f&h)-1894007588:(e^f^h)-899497514,i=h,h=f,f=e<<30|e>>>2,e=d,d=l}c[0]=0|c[0]+d,c[1]=0|c[1]+e,c[2]=0|c[2]+f,c[3]=0|c[3]+h,c[4]=0|c[4]+i},_doFinalize:function(){var a=this._data,b=a.words,c=8*this._nDataBytes,d=8*a.sigBytes;return b[d>>>5]|=128<<24-d%32,b[(d+64>>>9<<4)+14]=Math.floor(c/4294967296),b[(d+64>>>9<<4)+15]=c,a.sigBytes=4*b.length,this._process(),this._hash},clone:function(){var a=e.clone.call(this);return a._hash=this._hash.clone(),a}});b.SHA1=e._createHelper(h),b.HmacSHA1=e._createHmacHelper(h)}(),a.SHA1})},{"./core":20}],24:[function(a,b,c){},{}],25:[function(a,b,c){arguments[4][24][0].apply(c,arguments)},{dup:24}],26:[function(a,b,c){(function(b){"use strict";function d(){function a(){}try{var b=new Uint8Array(1);return b.foo=function(){return 42},b.constructor=a,42===b.foo()&&b.constructor===a&&"function"==typeof b.subarray&&0===b.subarray(1,1).byteLength}catch(c){return!1}}function e(){return f.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function f(a){return this instanceof f?(f.TYPED_ARRAY_SUPPORT||(this.length=0,this.parent=void 0),"number"==typeof a?g(this,a):"string"==typeof a?h(this,a,arguments.length>1?arguments[1]:"utf8"):i(this,a)):arguments.length>1?new f(a,arguments[1]):new f(a)}function g(a,b){if(a=p(a,0>b?0:0|q(b)),!f.TYPED_ARRAY_SUPPORT)for(var c=0;b>c;c++)a[c]=0;return a}function h(a,b,c){("string"!=typeof c||""===c)&&(c="utf8");var d=0|s(b,c);return a=p(a,d),a.write(b,c),a}function i(a,b){if(f.isBuffer(b))return j(a,b);if(Y(b))return k(a,b);if(null==b)throw new TypeError("must start with number, buffer, array or string");if("undefined"!=typeof ArrayBuffer){if(b.buffer instanceof ArrayBuffer)return l(a,b);if(b instanceof ArrayBuffer)return m(a,b)}return b.length?n(a,b):o(a,b)}function j(a,b){var c=0|q(b.length);return a=p(a,c),b.copy(a,0,0,c),a}function k(a,b){var c=0|q(b.length);a=p(a,c);for(var d=0;c>d;d+=1)a[d]=255&b[d];return a}function l(a,b){var c=0|q(b.length);a=p(a,c);for(var d=0;c>d;d+=1)a[d]=255&b[d];return a}function m(a,b){return f.TYPED_ARRAY_SUPPORT?(b.byteLength,a=f._augment(new Uint8Array(b))):a=l(a,new Uint8Array(b)),a}function n(a,b){var c=0|q(b.length);a=p(a,c);for(var d=0;c>d;d+=1)a[d]=255&b[d];return a}function o(a,b){var c,d=0;"Buffer"===b.type&&Y(b.data)&&(c=b.data,d=0|q(c.length)),a=p(a,d);for(var e=0;d>e;e+=1)a[e]=255&c[e];return a}function p(a,b){f.TYPED_ARRAY_SUPPORT?(a=f._augment(new Uint8Array(b)),a.__proto__=f.prototype):(a.length=b,a._isBuffer=!0);var c=0!==b&&b<=f.poolSize>>>1;return c&&(a.parent=Z),a}function q(a){if(a>=e())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+e().toString(16)+" bytes");return 0|a}function r(a,b){if(!(this instanceof r))return new r(a,b);var c=new f(a,b);return delete c.parent,c}function s(a,b){"string"!=typeof a&&(a=""+a);var c=a.length;if(0===c)return 0;for(var d=!1;;)switch(b){case"ascii":case"binary":case"raw":case"raws":return c;case"utf8":case"utf-8":return R(a).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*c;case"hex":return c>>>1;case"base64":return U(a).length;default:if(d)return R(a).length;b=(""+b).toLowerCase(),d=!0}}function t(a,b,c){var d=!1;if(b=0|b,c=void 0===c||c===1/0?this.length:0|c,a||(a="utf8"),0>b&&(b=0),c>this.length&&(c=this.length),b>=c)return"";for(;;)switch(a){case"hex":return F(this,b,c);case"utf8":case"utf-8":return B(this,b,c);case"ascii":return D(this,b,c);case"binary":return E(this,b,c);case"base64":return A(this,b,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return G(this,b,c);default:if(d)throw new TypeError("Unknown encoding: "+a);a=(a+"").toLowerCase(),d=!0}}function u(a,b,c,d){c=Number(c)||0;var e=a.length-c;d?(d=Number(d),d>e&&(d=e)):d=e;var f=b.length;if(f%2!==0)throw new Error("Invalid hex string");d>f/2&&(d=f/2);for(var g=0;d>g;g++){var h=parseInt(b.substr(2*g,2),16);if(isNaN(h))throw new Error("Invalid hex string");a[c+g]=h}return g}function v(a,b,c,d){return V(R(b,a.length-c),a,c,d)}function w(a,b,c,d){return V(S(b),a,c,d)}function x(a,b,c,d){return w(a,b,c,d)}function y(a,b,c,d){return V(U(b),a,c,d)}function z(a,b,c,d){return V(T(b,a.length-c),a,c,d)}function A(a,b,c){return 0===b&&c===a.length?W.fromByteArray(a):W.fromByteArray(a.slice(b,c))}function B(a,b,c){c=Math.min(a.length,c);for(var d=[],e=b;c>e;){var f=a[e],g=null,h=f>239?4:f>223?3:f>191?2:1;if(c>=e+h){var i,j,k,l;switch(h){case 1:128>f&&(g=f);break;case 2:i=a[e+1],128===(192&i)&&(l=(31&f)<<6|63&i,l>127&&(g=l));break;case 3:i=a[e+1],j=a[e+2],128===(192&i)&&128===(192&j)&&(l=(15&f)<<12|(63&i)<<6|63&j,l>2047&&(55296>l||l>57343)&&(g=l));break;case 4:i=a[e+1],j=a[e+2],k=a[e+3],128===(192&i)&&128===(192&j)&&128===(192&k)&&(l=(15&f)<<18|(63&i)<<12|(63&j)<<6|63&k,l>65535&&1114112>l&&(g=l))}}null===g?(g=65533,h=1):g>65535&&(g-=65536,d.push(g>>>10&1023|55296),g=56320|1023&g),d.push(g),e+=h}return C(d)}function C(a){var b=a.length;if($>=b)return String.fromCharCode.apply(String,a);for(var c="",d=0;b>d;)c+=String.fromCharCode.apply(String,a.slice(d,d+=$));return c}function D(a,b,c){var d="";c=Math.min(a.length,c);for(var e=b;c>e;e++)d+=String.fromCharCode(127&a[e]);return d}function E(a,b,c){var d="";c=Math.min(a.length,c);for(var e=b;c>e;e++)d+=String.fromCharCode(a[e]);return d}function F(a,b,c){var d=a.length;(!b||0>b)&&(b=0),(!c||0>c||c>d)&&(c=d);for(var e="",f=b;c>f;f++)e+=Q(a[f]);return e}function G(a,b,c){for(var d=a.slice(b,c),e="",f=0;f<d.length;f+=2)e+=String.fromCharCode(d[f]+256*d[f+1]);return e}function H(a,b,c){if(a%1!==0||0>a)throw new RangeError("offset is not uint");if(a+b>c)throw new RangeError("Trying to access beyond buffer length")}function I(a,b,c,d,e,g){if(!f.isBuffer(a))throw new TypeError("buffer must be a Buffer instance");if(b>e||g>b)throw new RangeError("value is out of bounds");if(c+d>a.length)throw new RangeError("index out of range")}function J(a,b,c,d){0>b&&(b=65535+b+1);for(var e=0,f=Math.min(a.length-c,2);f>e;e++)a[c+e]=(b&255<<8*(d?e:1-e))>>>8*(d?e:1-e)}function K(a,b,c,d){0>b&&(b=4294967295+b+1);for(var e=0,f=Math.min(a.length-c,4);f>e;e++)a[c+e]=b>>>8*(d?e:3-e)&255}function L(a,b,c,d,e,f){if(b>e||f>b)throw new RangeError("value is out of bounds");if(c+d>a.length)throw new RangeError("index out of range");if(0>c)throw new RangeError("index out of range")}function M(a,b,c,d,e){return e||L(a,b,c,4,3.4028234663852886e38,-3.4028234663852886e38),X.write(a,b,c,d,23,4),c+4}function N(a,b,c,d,e){return e||L(a,b,c,8,1.7976931348623157e308,-1.7976931348623157e308),X.write(a,b,c,d,52,8),c+8}function O(a){if(a=P(a).replace(aa,""),a.length<2)return"";for(;a.length%4!==0;)a+="=";return a}function P(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")}function Q(a){return 16>a?"0"+a.toString(16):a.toString(16)}function R(a,b){b=b||1/0;for(var c,d=a.length,e=null,f=[],g=0;d>g;g++){if(c=a.charCodeAt(g),c>55295&&57344>c){if(!e){if(c>56319){(b-=3)>-1&&f.push(239,191,189);continue}if(g+1===d){(b-=3)>-1&&f.push(239,191,189);continue}e=c;continue}if(56320>c){(b-=3)>-1&&f.push(239,191,189),e=c;continue}c=(e-55296<<10|c-56320)+65536}else e&&(b-=3)>-1&&f.push(239,191,189);if(e=null,128>c){if((b-=1)<0)break;f.push(c)}else if(2048>c){if((b-=2)<0)break;f.push(c>>6|192,63&c|128)}else if(65536>c){if((b-=3)<0)break;f.push(c>>12|224,c>>6&63|128,63&c|128)}else{if(!(1114112>c))throw new Error("Invalid code point");if((b-=4)<0)break;f.push(c>>18|240,c>>12&63|128,c>>6&63|128,63&c|128)}}return f}function S(a){for(var b=[],c=0;c<a.length;c++)b.push(255&a.charCodeAt(c));return b}function T(a,b){for(var c,d,e,f=[],g=0;g<a.length&&!((b-=2)<0);g++)c=a.charCodeAt(g),d=c>>8,e=c%256,f.push(e),f.push(d);return f}function U(a){return W.toByteArray(O(a))}function V(a,b,c,d){for(var e=0;d>e&&!(e+c>=b.length||e>=a.length);e++)b[e+c]=a[e];return e}var W=a("base64-js"),X=a("ieee754"),Y=a("isarray");c.Buffer=f,c.SlowBuffer=r,c.INSPECT_MAX_BYTES=50,f.poolSize=8192;var Z={};f.TYPED_ARRAY_SUPPORT=void 0!==b.TYPED_ARRAY_SUPPORT?b.TYPED_ARRAY_SUPPORT:d(),f.TYPED_ARRAY_SUPPORT?(f.prototype.__proto__=Uint8Array.prototype,f.__proto__=Uint8Array):(f.prototype.length=void 0,f.prototype.parent=void 0),f.isBuffer=function(a){return!(null==a||!a._isBuffer)},f.compare=function(a,b){if(!f.isBuffer(a)||!f.isBuffer(b))throw new TypeError("Arguments must be Buffers");if(a===b)return 0;for(var c=a.length,d=b.length,e=0,g=Math.min(c,d);g>e&&a[e]===b[e];)++e;return e!==g&&(c=a[e],d=b[e]),d>c?-1:c>d?1:0},f.isEncoding=function(a){switch(String(a).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(a,b){if(!Y(a))throw new TypeError("list argument must be an Array of Buffers.");if(0===a.length)return new f(0);var c;if(void 0===b)for(b=0,c=0;c<a.length;c++)b+=a[c].length;var d=new f(b),e=0;for(c=0;c<a.length;c++){var g=a[c];g.copy(d,e),e+=g.length}return d},f.byteLength=s,f.prototype.toString=function(){var a=0|this.length;return 0===a?"":0===arguments.length?B(this,0,a):t.apply(this,arguments)},f.prototype.equals=function(a){if(!f.isBuffer(a))throw new TypeError("Argument must be a Buffer");return this===a?!0:0===f.compare(this,a)},f.prototype.inspect=function(){var a="",b=c.INSPECT_MAX_BYTES;return this.length>0&&(a=this.toString("hex",0,b).match(/.{2}/g).join(" "),this.length>b&&(a+=" ... ")),"<Buffer "+a+">"},f.prototype.compare=function(a){if(!f.isBuffer(a))throw new TypeError("Argument must be a Buffer");return this===a?0:f.compare(this,a)},f.prototype.indexOf=function(a,b){function c(a,b,c){for(var d=-1,e=0;c+e<a.length;e++)if(a[c+e]===b[-1===d?0:e-d]){if(-1===d&&(d=e),e-d+1===b.length)return c+d}else d=-1;return-1}if(b>2147483647?b=2147483647:-2147483648>b&&(b=-2147483648),b>>=0,0===this.length)return-1;if(b>=this.length)return-1;if(0>b&&(b=Math.max(this.length+b,0)),"string"==typeof a)return 0===a.length?-1:String.prototype.indexOf.call(this,a,b);if(f.isBuffer(a))return c(this,a,b);if("number"==typeof a)return f.TYPED_ARRAY_SUPPORT&&"function"===Uint8Array.prototype.indexOf?Uint8Array.prototype.indexOf.call(this,a,b):c(this,[a],b);throw new TypeError("val must be string, number or Buffer")},f.prototype.get=function(a){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(a)},f.prototype.set=function(a,b){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(a,b)},f.prototype.write=function(a,b,c,d){if(void 0===b)d="utf8",c=this.length,b=0;else if(void 0===c&&"string"==typeof b)d=b,c=this.length,b=0;else if(isFinite(b))b=0|b,isFinite(c)?(c=0|c,void 0===d&&(d="utf8")):(d=c,c=void 0);else{var e=d;d=b,b=0|c,c=e}var f=this.length-b;if((void 0===c||c>f)&&(c=f),a.length>0&&(0>c||0>b)||b>this.length)throw new RangeError("attempt to write outside buffer bounds");d||(d="utf8");for(var g=!1;;)switch(d){case"hex":return u(this,a,b,c);case"utf8":case"utf-8":return v(this,a,b,c);case"ascii":return w(this,a,b,c);case"binary":return x(this,a,b,c);case"base64":return y(this,a,b,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return z(this,a,b,c);default:if(g)throw new TypeError("Unknown encoding: "+d);d=(""+d).toLowerCase(),g=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var $=4096;f.prototype.slice=function(a,b){var c=this.length;a=~~a,b=void 0===b?c:~~b,0>a?(a+=c,0>a&&(a=0)):a>c&&(a=c),0>b?(b+=c,0>b&&(b=0)):b>c&&(b=c),a>b&&(b=a);var d;if(f.TYPED_ARRAY_SUPPORT)d=f._augment(this.subarray(a,b));else{var e=b-a;d=new f(e,void 0);for(var g=0;e>g;g++)d[g]=this[g+a]}return d.length&&(d.parent=this.parent||this),d},f.prototype.readUIntLE=function(a,b,c){a=0|a,b=0|b,c||H(a,b,this.length);for(var d=this[a],e=1,f=0;++f<b&&(e*=256);)d+=this[a+f]*e;return d},f.prototype.readUIntBE=function(a,b,c){a=0|a,b=0|b,c||H(a,b,this.length);for(var d=this[a+--b],e=1;b>0&&(e*=256);)d+=this[a+--b]*e;return d},f.prototype.readUInt8=function(a,b){return b||H(a,1,this.length),this[a]},f.prototype.readUInt16LE=function(a,b){return b||H(a,2,this.length),this[a]|this[a+1]<<8},f.prototype.readUInt16BE=function(a,b){return b||H(a,2,this.length),this[a]<<8|this[a+1]},f.prototype.readUInt32LE=function(a,b){return b||H(a,4,this.length),(this[a]|this[a+1]<<8|this[a+2]<<16)+16777216*this[a+3]},f.prototype.readUInt32BE=function(a,b){return b||H(a,4,this.length),16777216*this[a]+(this[a+1]<<16|this[a+2]<<8|this[a+3])},f.prototype.readIntLE=function(a,b,c){a=0|a,b=0|b,c||H(a,b,this.length);for(var d=this[a],e=1,f=0;++f<b&&(e*=256);)d+=this[a+f]*e;return e*=128,d>=e&&(d-=Math.pow(2,8*b)),d},f.prototype.readIntBE=function(a,b,c){a=0|a,b=0|b,c||H(a,b,this.length);for(var d=b,e=1,f=this[a+--d];d>0&&(e*=256);)f+=this[a+--d]*e;return e*=128,f>=e&&(f-=Math.pow(2,8*b)),f},f.prototype.readInt8=function(a,b){return b||H(a,1,this.length),128&this[a]?-1*(255-this[a]+1):this[a]},f.prototype.readInt16LE=function(a,b){b||H(a,2,this.length);var c=this[a]|this[a+1]<<8;return 32768&c?4294901760|c:c},f.prototype.readInt16BE=function(a,b){b||H(a,2,this.length);var c=this[a+1]|this[a]<<8;return 32768&c?4294901760|c:c},f.prototype.readInt32LE=function(a,b){return b||H(a,4,this.length),this[a]|this[a+1]<<8|this[a+2]<<16|this[a+3]<<24},f.prototype.readInt32BE=function(a,b){return b||H(a,4,this.length),this[a]<<24|this[a+1]<<16|this[a+2]<<8|this[a+3]},f.prototype.readFloatLE=function(a,b){return b||H(a,4,this.length),X.read(this,a,!0,23,4)},f.prototype.readFloatBE=function(a,b){return b||H(a,4,this.length),X.read(this,a,!1,23,4)},f.prototype.readDoubleLE=function(a,b){return b||H(a,8,this.length),X.read(this,a,!0,52,8)},f.prototype.readDoubleBE=function(a,b){return b||H(a,8,this.length),X.read(this,a,!1,52,8)},f.prototype.writeUIntLE=function(a,b,c,d){a=+a,b=0|b,c=0|c,d||I(this,a,b,c,Math.pow(2,8*c),0);var e=1,f=0;for(this[b]=255&a;++f<c&&(e*=256);)this[b+f]=a/e&255;return b+c},f.prototype.writeUIntBE=function(a,b,c,d){a=+a,b=0|b,c=0|c,d||I(this,a,b,c,Math.pow(2,8*c),0);var e=c-1,f=1;for(this[b+e]=255&a;--e>=0&&(f*=256);)this[b+e]=a/f&255;return b+c},f.prototype.writeUInt8=function(a,b,c){return a=+a,b=0|b,c||I(this,a,b,1,255,0),f.TYPED_ARRAY_SUPPORT||(a=Math.floor(a)),this[b]=255&a,b+1},f.prototype.writeUInt16LE=function(a,b,c){return a=+a,b=0|b,c||I(this,a,b,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[b]=255&a,this[b+1]=a>>>8):J(this,a,b,!0),b+2},f.prototype.writeUInt16BE=function(a,b,c){return a=+a,b=0|b,c||I(this,a,b,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[b]=a>>>8,this[b+1]=255&a):J(this,a,b,!1),b+2},f.prototype.writeUInt32LE=function(a,b,c){return a=+a,b=0|b,c||I(this,a,b,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[b+3]=a>>>24,this[b+2]=a>>>16,this[b+1]=a>>>8,this[b]=255&a):K(this,a,b,!0),b+4},f.prototype.writeUInt32BE=function(a,b,c){return a=+a,b=0|b,c||I(this,a,b,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[b]=a>>>24,this[b+1]=a>>>16,this[b+2]=a>>>8,this[b+3]=255&a):K(this,a,b,!1),b+4},f.prototype.writeIntLE=function(a,b,c,d){if(a=+a,b=0|b,!d){var e=Math.pow(2,8*c-1);I(this,a,b,c,e-1,-e)}var f=0,g=1,h=0>a?1:0;for(this[b]=255&a;++f<c&&(g*=256);)this[b+f]=(a/g>>0)-h&255;return b+c},f.prototype.writeIntBE=function(a,b,c,d){if(a=+a,b=0|b,!d){var e=Math.pow(2,8*c-1);I(this,a,b,c,e-1,-e)}var f=c-1,g=1,h=0>a?1:0;for(this[b+f]=255&a;--f>=0&&(g*=256);)this[b+f]=(a/g>>0)-h&255;return b+c},f.prototype.writeInt8=function(a,b,c){return a=+a,b=0|b,c||I(this,a,b,1,127,-128),f.TYPED_ARRAY_SUPPORT||(a=Math.floor(a)),0>a&&(a=255+a+1),this[b]=255&a,b+1},f.prototype.writeInt16LE=function(a,b,c){return a=+a,b=0|b,c||I(this,a,b,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[b]=255&a,this[b+1]=a>>>8):J(this,a,b,!0),b+2},f.prototype.writeInt16BE=function(a,b,c){return a=+a,b=0|b,c||I(this,a,b,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[b]=a>>>8,this[b+1]=255&a):J(this,a,b,!1),b+2},f.prototype.writeInt32LE=function(a,b,c){return a=+a,b=0|b,c||I(this,a,b,4,2147483647,-2147483648),f.TYPED_ARRAY_SUPPORT?(this[b]=255&a,this[b+1]=a>>>8,this[b+2]=a>>>16,this[b+3]=a>>>24):K(this,a,b,!0),b+4},f.prototype.writeInt32BE=function(a,b,c){return a=+a,b=0|b,c||I(this,a,b,4,2147483647,-2147483648),0>a&&(a=4294967295+a+1),f.TYPED_ARRAY_SUPPORT?(this[b]=a>>>24,this[b+1]=a>>>16,this[b+2]=a>>>8,this[b+3]=255&a):K(this,a,b,!1),b+4},f.prototype.writeFloatLE=function(a,b,c){return M(this,a,b,!0,c)},f.prototype.writeFloatBE=function(a,b,c){return M(this,a,b,!1,c)},f.prototype.writeDoubleLE=function(a,b,c){return N(this,a,b,!0,c)},f.prototype.writeDoubleBE=function(a,b,c){return N(this,a,b,!1,c)},f.prototype.copy=function(a,b,c,d){if(c||(c=0),d||0===d||(d=this.length),b>=a.length&&(b=a.length),b||(b=0),d>0&&c>d&&(d=c),d===c)return 0;if(0===a.length||0===this.length)return 0;if(0>b)throw new RangeError("targetStart out of bounds");if(0>c||c>=this.length)throw new RangeError("sourceStart out of bounds");if(0>d)throw new RangeError("sourceEnd out of bounds");d>this.length&&(d=this.length),a.length-b<d-c&&(d=a.length-b+c);var e,g=d-c;if(this===a&&b>c&&d>b)for(e=g-1;e>=0;e--)a[e+b]=this[e+c];else if(1e3>g||!f.TYPED_ARRAY_SUPPORT)for(e=0;g>e;e++)a[e+b]=this[e+c];else a._set(this.subarray(c,c+g),b);return g},f.prototype.fill=function(a,b,c){if(a||(a=0),b||(b=0),c||(c=this.length),b>c)throw new RangeError("end < start");if(c!==b&&0!==this.length){if(0>b||b>=this.length)throw new RangeError("start out of bounds");if(0>c||c>this.length)throw new RangeError("end out of bounds");var d;if("number"==typeof a)for(d=b;c>d;d++)this[d]=a;else{var e=R(a.toString()),f=e.length;for(d=b;c>d;d++)this[d]=e[d%f]}return this}},f.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(f.TYPED_ARRAY_SUPPORT)return new f(this).buffer;for(var a=new Uint8Array(this.length),b=0,c=a.length;c>b;b+=1)a[b]=this[b];return a.buffer}throw new TypeError("Buffer.toArrayBuffer not supported in this browser")};var _=f.prototype;f._augment=function(a){return a.constructor=f,a._isBuffer=!0,a._set=a.set,a.get=_.get,a.set=_.set,a.write=_.write,a.toString=_.toString,a.toLocaleString=_.toString,a.toJSON=_.toJSON,a.equals=_.equals,a.compare=_.compare,a.indexOf=_.indexOf,a.copy=_.copy,a.slice=_.slice,a.readUIntLE=_.readUIntLE,a.readUIntBE=_.readUIntBE,a.readUInt8=_.readUInt8,a.readUInt16LE=_.readUInt16LE,a.readUInt16BE=_.readUInt16BE,a.readUInt32LE=_.readUInt32LE,a.readUInt32BE=_.readUInt32BE,a.readIntLE=_.readIntLE,a.readIntBE=_.readIntBE,a.readInt8=_.readInt8,a.readInt16LE=_.readInt16LE,a.readInt16BE=_.readInt16BE,a.readInt32LE=_.readInt32LE,a.readInt32BE=_.readInt32BE,a.readFloatLE=_.readFloatLE,a.readFloatBE=_.readFloatBE,a.readDoubleLE=_.readDoubleLE,a.readDoubleBE=_.readDoubleBE,a.writeUInt8=_.writeUInt8,a.writeUIntLE=_.writeUIntLE,a.writeUIntBE=_.writeUIntBE,a.writeUInt16LE=_.writeUInt16LE,a.writeUInt16BE=_.writeUInt16BE,a.writeUInt32LE=_.writeUInt32LE,a.writeUInt32BE=_.writeUInt32BE,a.writeIntLE=_.writeIntLE,a.writeIntBE=_.writeIntBE,a.writeInt8=_.writeInt8,a.writeInt16LE=_.writeInt16LE,a.writeInt16BE=_.writeInt16BE,a.writeInt32LE=_.writeInt32LE,a.writeInt32BE=_.writeInt32BE,a.writeFloatLE=_.writeFloatLE,a.writeFloatBE=_.writeFloatBE,a.writeDoubleLE=_.writeDoubleLE,a.writeDoubleBE=_.writeDoubleBE,a.fill=_.fill,a.inspect=_.inspect,a.toArrayBuffer=_.toArrayBuffer,a};var aa=/[^+\/0-9A-Za-z-_]/g}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"base64-js":27,ieee754:28,isarray:29}],27:[function(a,b,c){var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(a){"use strict";function b(a){var b=a.charCodeAt(0);return b===g||b===l?62:b===h||b===m?63:i>b?-1:i+10>b?b-i+26+26:k+26>b?b-k:j+26>b?b-j+26:void 0}function c(a){function c(a){j[l++]=a}var d,e,g,h,i,j;if(a.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var k=a.length;i="="===a.charAt(k-2)?2:"="===a.charAt(k-1)?1:0,j=new f(3*a.length/4-i),g=i>0?a.length-4:a.length;var l=0;for(d=0,e=0;g>d;d+=4,e+=3)h=b(a.charAt(d))<<18|b(a.charAt(d+1))<<12|b(a.charAt(d+2))<<6|b(a.charAt(d+3)),c((16711680&h)>>16),c((65280&h)>>8),c(255&h);return 2===i?(h=b(a.charAt(d))<<2|b(a.charAt(d+1))>>4,c(255&h)):1===i&&(h=b(a.charAt(d))<<10|b(a.charAt(d+1))<<4|b(a.charAt(d+2))>>2,c(h>>8&255),c(255&h)),j}function e(a){function b(a){return d.charAt(a)}function c(a){return b(a>>18&63)+b(a>>12&63)+b(a>>6&63)+b(63&a)}var e,f,g,h=a.length%3,i="";for(e=0,g=a.length-h;g>e;e+=3)f=(a[e]<<16)+(a[e+1]<<8)+a[e+2],i+=c(f);switch(h){case 1:f=a[a.length-1],i+=b(f>>2),i+=b(f<<4&63),i+="==";break;case 2:f=(a[a.length-2]<<8)+a[a.length-1],i+=b(f>>10),i+=b(f>>4&63),i+=b(f<<2&63),i+="="}return i}var f="undefined"!=typeof Uint8Array?Uint8Array:Array,g="+".charCodeAt(0),h="/".charCodeAt(0),i="0".charCodeAt(0),j="a".charCodeAt(0),k="A".charCodeAt(0),l="-".charCodeAt(0),m="_".charCodeAt(0);a.toByteArray=c,a.fromByteArray=e}("undefined"==typeof c?this.base64js={}:c)},{}],28:[function(a,b,c){c.read=function(a,b,c,d,e){var f,g,h=8*e-d-1,i=(1<<h)-1,j=i>>1,k=-7,l=c?e-1:0,m=c?-1:1,n=a[b+l];for(l+=m,f=n&(1<<-k)-1,n>>=-k,k+=h;k>0;f=256*f+a[b+l],l+=m,k-=8);for(g=f&(1<<-k)-1,f>>=-k,k+=d;k>0;g=256*g+a[b+l],l+=m,k-=8);if(0===f)f=1-j;else{if(f===i)return g?NaN:(n?-1:1)*(1/0);g+=Math.pow(2,d),f-=j}return(n?-1:1)*g*Math.pow(2,f-d)},c.write=function(a,b,c,d,e,f){var g,h,i,j=8*f-e-1,k=(1<<j)-1,l=k>>1,m=23===e?Math.pow(2,-24)-Math.pow(2,-77):0,n=d?0:f-1,o=d?1:-1,p=0>b||0===b&&0>1/b?1:0;for(b=Math.abs(b),isNaN(b)||b===1/0?(h=isNaN(b)?1:0,g=k):(g=Math.floor(Math.log(b)/Math.LN2),b*(i=Math.pow(2,-g))<1&&(g--,i*=2),b+=g+l>=1?m/i:m*Math.pow(2,1-l),b*i>=2&&(g++,i/=2),g+l>=k?(h=0,g=k):g+l>=1?(h=(b*i-1)*Math.pow(2,e),g+=l):(h=b*Math.pow(2,l-1)*Math.pow(2,e),g=0));e>=8;a[c+n]=255&h,n+=o,h/=256,e-=8);for(g=g<<e|h,j+=e;j>0;a[c+n]=255&g,n+=o,g/=256,j-=8);a[c+n-o]|=128*p}},{}],29:[function(a,b,c){var d={}.toString;b.exports=Array.isArray||function(a){return"[object Array]"==d.call(a)}},{}],30:[function(a,b,c){function d(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function e(a){return"function"==typeof a}function f(a){return"number"==typeof a}function g(a){return"object"==typeof a&&null!==a}function h(a){return void 0===a}b.exports=d,d.EventEmitter=d,d.prototype._events=void 0,d.prototype._maxListeners=void 0,d.defaultMaxListeners=10,d.prototype.setMaxListeners=function(a){if(!f(a)||0>a||isNaN(a))throw TypeError("n must be a positive number");return this._maxListeners=a,this},d.prototype.emit=function(a){var b,c,d,f,i,j;if(this._events||(this._events={}),"error"===a&&(!this._events.error||g(this._events.error)&&!this._events.error.length)){if(b=arguments[1],b instanceof Error)throw b;
throw TypeError('Uncaught, unspecified "error" event.')}if(c=this._events[a],h(c))return!1;if(e(c))switch(arguments.length){case 1:c.call(this);break;case 2:c.call(this,arguments[1]);break;case 3:c.call(this,arguments[1],arguments[2]);break;default:for(d=arguments.length,f=new Array(d-1),i=1;d>i;i++)f[i-1]=arguments[i];c.apply(this,f)}else if(g(c)){for(d=arguments.length,f=new Array(d-1),i=1;d>i;i++)f[i-1]=arguments[i];for(j=c.slice(),d=j.length,i=0;d>i;i++)j[i].apply(this,f)}return!0},d.prototype.addListener=function(a,b){var c;if(!e(b))throw TypeError("listener must be a function");if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",a,e(b.listener)?b.listener:b),this._events[a]?g(this._events[a])?this._events[a].push(b):this._events[a]=[this._events[a],b]:this._events[a]=b,g(this._events[a])&&!this._events[a].warned){var c;c=h(this._maxListeners)?d.defaultMaxListeners:this._maxListeners,c&&c>0&&this._events[a].length>c&&(this._events[a].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[a].length),"function"==typeof console.trace&&console.trace())}return this},d.prototype.on=d.prototype.addListener,d.prototype.once=function(a,b){function c(){this.removeListener(a,c),d||(d=!0,b.apply(this,arguments))}if(!e(b))throw TypeError("listener must be a function");var d=!1;return c.listener=b,this.on(a,c),this},d.prototype.removeListener=function(a,b){var c,d,f,h;if(!e(b))throw TypeError("listener must be a function");if(!this._events||!this._events[a])return this;if(c=this._events[a],f=c.length,d=-1,c===b||e(c.listener)&&c.listener===b)delete this._events[a],this._events.removeListener&&this.emit("removeListener",a,b);else if(g(c)){for(h=f;h-- >0;)if(c[h]===b||c[h].listener&&c[h].listener===b){d=h;break}if(0>d)return this;1===c.length?(c.length=0,delete this._events[a]):c.splice(d,1),this._events.removeListener&&this.emit("removeListener",a,b)}return this},d.prototype.removeAllListeners=function(a){var b,c;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[a]&&delete this._events[a],this;if(0===arguments.length){for(b in this._events)"removeListener"!==b&&this.removeAllListeners(b);return this.removeAllListeners("removeListener"),this._events={},this}if(c=this._events[a],e(c))this.removeListener(a,c);else for(;c.length;)this.removeListener(a,c[c.length-1]);return delete this._events[a],this},d.prototype.listeners=function(a){var b;return b=this._events&&this._events[a]?e(this._events[a])?[this._events[a]]:this._events[a].slice():[]},d.listenerCount=function(a,b){var c;return c=a._events&&a._events[b]?e(a._events[b])?1:a._events[b].length:0}},{}],31:[function(a,b,c){"function"==typeof Object.create?b.exports=function(a,b){a.super_=b,a.prototype=Object.create(b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}})}:b.exports=function(a,b){a.super_=b;var c=function(){};c.prototype=b.prototype,a.prototype=new c,a.prototype.constructor=a}},{}],32:[function(a,b,c){b.exports=function(a){return!(null==a||!(a._isBuffer||a.constructor&&"function"==typeof a.constructor.isBuffer&&a.constructor.isBuffer(a)))}},{}],33:[function(a,b,c){b.exports=Array.isArray||function(a){return"[object Array]"==Object.prototype.toString.call(a)}},{}],34:[function(a,b,c){function d(){k=!1,h.length?j=h.concat(j):l=-1,j.length&&e()}function e(){if(!k){var a=setTimeout(d);k=!0;for(var b=j.length;b;){for(h=j,j=[];++l<b;)h&&h[l].run();l=-1,b=j.length}h=null,k=!1,clearTimeout(a)}}function f(a,b){this.fun=a,this.array=b}function g(){}var h,i=b.exports={},j=[],k=!1,l=-1;i.nextTick=function(a){var b=new Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];j.push(new f(a,b)),1!==j.length||k||setTimeout(e,0)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.binding=function(a){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(a){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}],35:[function(a,b,c){b.exports=a("./lib/_stream_duplex.js")},{"./lib/_stream_duplex.js":36}],36:[function(a,b,c){(function(c){function d(a){return this instanceof d?(i.call(this,a),j.call(this,a),a&&a.readable===!1&&(this.readable=!1),a&&a.writable===!1&&(this.writable=!1),this.allowHalfOpen=!0,a&&a.allowHalfOpen===!1&&(this.allowHalfOpen=!1),void this.once("end",e)):new d(a)}function e(){this.allowHalfOpen||this._writableState.ended||c.nextTick(this.end.bind(this))}function f(a,b){for(var c=0,d=a.length;d>c;c++)b(a[c],c)}b.exports=d;var g=Object.keys||function(a){var b=[];for(var c in a)b.push(c);return b},h=a("core-util-is");h.inherits=a("inherits");var i=a("./_stream_readable"),j=a("./_stream_writable");h.inherits(d,i),f(g(j.prototype),function(a){d.prototype[a]||(d.prototype[a]=j.prototype[a])})}).call(this,a("_process"))},{"./_stream_readable":38,"./_stream_writable":40,_process:34,"core-util-is":41,inherits:31}],37:[function(a,b,c){function d(a){return this instanceof d?void e.call(this,a):new d(a)}b.exports=d;var e=a("./_stream_transform"),f=a("core-util-is");f.inherits=a("inherits"),f.inherits(d,e),d.prototype._transform=function(a,b,c){c(null,a)}},{"./_stream_transform":39,"core-util-is":41,inherits:31}],38:[function(a,b,c){(function(c){function d(b,c){var d=a("./_stream_duplex");b=b||{};var e=b.highWaterMark,f=b.objectMode?16:16384;this.highWaterMark=e||0===e?e:f,this.highWaterMark=~~this.highWaterMark,this.buffer=[],this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.objectMode=!!b.objectMode,c instanceof d&&(this.objectMode=this.objectMode||!!b.readableObjectMode),this.defaultEncoding=b.defaultEncoding||"utf8",this.ranOut=!1,this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,b.encoding&&(C||(C=a("string_decoder/").StringDecoder),this.decoder=new C(b.encoding),this.encoding=b.encoding)}function e(b){a("./_stream_duplex");return this instanceof e?(this._readableState=new d(b,this),this.readable=!0,void A.call(this)):new e(b)}function f(a,b,c,d,e){var f=j(b,c);if(f)a.emit("error",f);else if(B.isNullOrUndefined(c))b.reading=!1,b.ended||k(a,b);else if(b.objectMode||c&&c.length>0)if(b.ended&&!e){var h=new Error("stream.push() after EOF");a.emit("error",h)}else if(b.endEmitted&&e){var h=new Error("stream.unshift() after end event");a.emit("error",h)}else!b.decoder||e||d||(c=b.decoder.write(c)),e||(b.reading=!1),b.flowing&&0===b.length&&!b.sync?(a.emit("data",c),a.read(0)):(b.length+=b.objectMode?1:c.length,e?b.buffer.unshift(c):b.buffer.push(c),b.needReadable&&l(a)),n(a,b);else e||(b.reading=!1);return g(b)}function g(a){return!a.ended&&(a.needReadable||a.length<a.highWaterMark||0===a.length)}function h(a){if(a>=E)a=E;else{a--;for(var b=1;32>b;b<<=1)a|=a>>b;a++}return a}function i(a,b){return 0===b.length&&b.ended?0:b.objectMode?0===a?0:1:isNaN(a)||B.isNull(a)?b.flowing&&b.buffer.length?b.buffer[0].length:b.length:0>=a?0:(a>b.highWaterMark&&(b.highWaterMark=h(a)),a>b.length?b.ended?b.length:(b.needReadable=!0,0):a)}function j(a,b){var c=null;return B.isBuffer(b)||B.isString(b)||B.isNullOrUndefined(b)||a.objectMode||(c=new TypeError("Invalid non-string/buffer chunk")),c}function k(a,b){if(b.decoder&&!b.ended){var c=b.decoder.end();c&&c.length&&(b.buffer.push(c),b.length+=b.objectMode?1:c.length)}b.ended=!0,l(a)}function l(a){var b=a._readableState;b.needReadable=!1,b.emittedReadable||(D("emitReadable",b.flowing),b.emittedReadable=!0,b.sync?c.nextTick(function(){m(a)}):m(a))}function m(a){D("emit readable"),a.emit("readable"),s(a)}function n(a,b){b.readingMore||(b.readingMore=!0,c.nextTick(function(){o(a,b)}))}function o(a,b){for(var c=b.length;!b.reading&&!b.flowing&&!b.ended&&b.length<b.highWaterMark&&(D("maybeReadMore read 0"),a.read(0),c!==b.length);)c=b.length;b.readingMore=!1}function p(a){return function(){var b=a._readableState;D("pipeOnDrain",b.awaitDrain),b.awaitDrain&&b.awaitDrain--,0===b.awaitDrain&&z.listenerCount(a,"data")&&(b.flowing=!0,s(a))}}function q(a,b){b.resumeScheduled||(b.resumeScheduled=!0,c.nextTick(function(){r(a,b)}))}function r(a,b){b.resumeScheduled=!1,a.emit("resume"),s(a),b.flowing&&!b.reading&&a.read(0)}function s(a){var b=a._readableState;if(D("flow",b.flowing),b.flowing)do var c=a.read();while(null!==c&&b.flowing)}function t(a,b){var c,d=b.buffer,e=b.length,f=!!b.decoder,g=!!b.objectMode;if(0===d.length)return null;if(0===e)c=null;else if(g)c=d.shift();else if(!a||a>=e)c=f?d.join(""):y.concat(d,e),d.length=0;else if(a<d[0].length){var h=d[0];c=h.slice(0,a),d[0]=h.slice(a)}else if(a===d[0].length)c=d.shift();else{c=f?"":new y(a);for(var i=0,j=0,k=d.length;k>j&&a>i;j++){var h=d[0],l=Math.min(a-i,h.length);f?c+=h.slice(0,l):h.copy(c,i,0,l),l<h.length?d[0]=h.slice(l):d.shift(),i+=l}}return c}function u(a){var b=a._readableState;if(b.length>0)throw new Error("endReadable called on non-empty stream");b.endEmitted||(b.ended=!0,c.nextTick(function(){b.endEmitted||0!==b.length||(b.endEmitted=!0,a.readable=!1,a.emit("end"))}))}function v(a,b){for(var c=0,d=a.length;d>c;c++)b(a[c],c)}function w(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1}b.exports=e;var x=a("isarray"),y=a("buffer").Buffer;e.ReadableState=d;var z=a("events").EventEmitter;z.listenerCount||(z.listenerCount=function(a,b){return a.listeners(b).length});var A=a("stream"),B=a("core-util-is");B.inherits=a("inherits");var C,D=a("util");D=D&&D.debuglog?D.debuglog("stream"):function(){},B.inherits(e,A),e.prototype.push=function(a,b){var c=this._readableState;return B.isString(a)&&!c.objectMode&&(b=b||c.defaultEncoding,b!==c.encoding&&(a=new y(a,b),b="")),f(this,c,a,b,!1)},e.prototype.unshift=function(a){var b=this._readableState;return f(this,b,a,"",!0)},e.prototype.setEncoding=function(b){return C||(C=a("string_decoder/").StringDecoder),this._readableState.decoder=new C(b),this._readableState.encoding=b,this};var E=8388608;e.prototype.read=function(a){D("read",a);var b=this._readableState,c=a;if((!B.isNumber(a)||a>0)&&(b.emittedReadable=!1),0===a&&b.needReadable&&(b.length>=b.highWaterMark||b.ended))return D("read: emitReadable",b.length,b.ended),0===b.length&&b.ended?u(this):l(this),null;if(a=i(a,b),0===a&&b.ended)return 0===b.length&&u(this),null;var d=b.needReadable;D("need readable",d),(0===b.length||b.length-a<b.highWaterMark)&&(d=!0,D("length less than watermark",d)),(b.ended||b.reading)&&(d=!1,D("reading or ended",d)),d&&(D("do read"),b.reading=!0,b.sync=!0,0===b.length&&(b.needReadable=!0),this._read(b.highWaterMark),b.sync=!1),d&&!b.reading&&(a=i(c,b));var e;return e=a>0?t(a,b):null,B.isNull(e)&&(b.needReadable=!0,a=0),b.length-=a,0!==b.length||b.ended||(b.needReadable=!0),c!==a&&b.ended&&0===b.length&&u(this),B.isNull(e)||this.emit("data",e),e},e.prototype._read=function(a){this.emit("error",new Error("not implemented"))},e.prototype.pipe=function(a,b){function d(a){D("onunpipe"),a===l&&f()}function e(){D("onend"),a.end()}function f(){D("cleanup"),a.removeListener("close",i),a.removeListener("finish",j),a.removeListener("drain",q),a.removeListener("error",h),a.removeListener("unpipe",d),l.removeListener("end",e),l.removeListener("end",f),l.removeListener("data",g),!m.awaitDrain||a._writableState&&!a._writableState.needDrain||q()}function g(b){D("ondata");var c=a.write(b);!1===c&&(D("false write response, pause",l._readableState.awaitDrain),l._readableState.awaitDrain++,l.pause())}function h(b){D("onerror",b),k(),a.removeListener("error",h),0===z.listenerCount(a,"error")&&a.emit("error",b)}function i(){a.removeListener("finish",j),k()}function j(){D("onfinish"),a.removeListener("close",i),k()}function k(){D("unpipe"),l.unpipe(a)}var l=this,m=this._readableState;switch(m.pipesCount){case 0:m.pipes=a;break;case 1:m.pipes=[m.pipes,a];break;default:m.pipes.push(a)}m.pipesCount+=1,D("pipe count=%d opts=%j",m.pipesCount,b);var n=(!b||b.end!==!1)&&a!==c.stdout&&a!==c.stderr,o=n?e:f;m.endEmitted?c.nextTick(o):l.once("end",o),a.on("unpipe",d);var q=p(l);return a.on("drain",q),l.on("data",g),a._events&&a._events.error?x(a._events.error)?a._events.error.unshift(h):a._events.error=[h,a._events.error]:a.on("error",h),a.once("close",i),a.once("finish",j),a.emit("pipe",l),m.flowing||(D("pipe resume"),l.resume()),a},e.prototype.unpipe=function(a){var b=this._readableState;if(0===b.pipesCount)return this;if(1===b.pipesCount)return a&&a!==b.pipes?this:(a||(a=b.pipes),b.pipes=null,b.pipesCount=0,b.flowing=!1,a&&a.emit("unpipe",this),this);if(!a){var c=b.pipes,d=b.pipesCount;b.pipes=null,b.pipesCount=0,b.flowing=!1;for(var e=0;d>e;e++)c[e].emit("unpipe",this);return this}var e=w(b.pipes,a);return-1===e?this:(b.pipes.splice(e,1),b.pipesCount-=1,1===b.pipesCount&&(b.pipes=b.pipes[0]),a.emit("unpipe",this),this)},e.prototype.on=function(a,b){var d=A.prototype.on.call(this,a,b);if("data"===a&&!1!==this._readableState.flowing&&this.resume(),"readable"===a&&this.readable){var e=this._readableState;if(!e.readableListening)if(e.readableListening=!0,e.emittedReadable=!1,e.needReadable=!0,e.reading)e.length&&l(this,e);else{var f=this;c.nextTick(function(){D("readable nexttick read 0"),f.read(0)})}}return d},e.prototype.addListener=e.prototype.on,e.prototype.resume=function(){var a=this._readableState;return a.flowing||(D("resume"),a.flowing=!0,a.reading||(D("resume read 0"),this.read(0)),q(this,a)),this},e.prototype.pause=function(){return D("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(D("pause"),this._readableState.flowing=!1,this.emit("pause")),this},e.prototype.wrap=function(a){var b=this._readableState,c=!1,d=this;a.on("end",function(){if(D("wrapped end"),b.decoder&&!b.ended){var a=b.decoder.end();a&&a.length&&d.push(a)}d.push(null)}),a.on("data",function(e){if(D("wrapped data"),b.decoder&&(e=b.decoder.write(e)),e&&(b.objectMode||e.length)){var f=d.push(e);f||(c=!0,a.pause())}});for(var e in a)B.isFunction(a[e])&&B.isUndefined(this[e])&&(this[e]=function(b){return function(){return a[b].apply(a,arguments)}}(e));var f=["error","close","destroy","pause","resume"];return v(f,function(b){a.on(b,d.emit.bind(d,b))}),d._read=function(b){D("wrapped _read",b),c&&(c=!1,a.resume())},d},e._fromList=t}).call(this,a("_process"))},{"./_stream_duplex":36,_process:34,buffer:26,"core-util-is":41,events:30,inherits:31,isarray:33,stream:46,"string_decoder/":47,util:25}],39:[function(a,b,c){function d(a,b){this.afterTransform=function(a,c){return e(b,a,c)},this.needTransform=!1,this.transforming=!1,this.writecb=null,this.writechunk=null}function e(a,b,c){var d=a._transformState;d.transforming=!1;var e=d.writecb;if(!e)return a.emit("error",new Error("no writecb in Transform class"));d.writechunk=null,d.writecb=null,i.isNullOrUndefined(c)||a.push(c),e&&e(b);var f=a._readableState;f.reading=!1,(f.needReadable||f.length<f.highWaterMark)&&a._read(f.highWaterMark)}function f(a){if(!(this instanceof f))return new f(a);h.call(this,a),this._transformState=new d(a,this);var b=this;this._readableState.needReadable=!0,this._readableState.sync=!1,this.once("prefinish",function(){i.isFunction(this._flush)?this._flush(function(a){g(b,a)}):g(b)})}function g(a,b){if(b)return a.emit("error",b);var c=a._writableState,d=a._transformState;if(c.length)throw new Error("calling transform done when ws.length != 0");if(d.transforming)throw new Error("calling transform done when still transforming");return a.push(null)}b.exports=f;var h=a("./_stream_duplex"),i=a("core-util-is");i.inherits=a("inherits"),i.inherits(f,h),f.prototype.push=function(a,b){return this._transformState.needTransform=!1,h.prototype.push.call(this,a,b)},f.prototype._transform=function(a,b,c){throw new Error("not implemented")},f.prototype._write=function(a,b,c){var d=this._transformState;if(d.writecb=c,d.writechunk=a,d.writeencoding=b,!d.transforming){var e=this._readableState;(d.needTransform||e.needReadable||e.length<e.highWaterMark)&&this._read(e.highWaterMark)}},f.prototype._read=function(a){var b=this._transformState;i.isNull(b.writechunk)||!b.writecb||b.transforming?b.needTransform=!0:(b.transforming=!0,this._transform(b.writechunk,b.writeencoding,b.afterTransform))}},{"./_stream_duplex":36,"core-util-is":41,inherits:31}],40:[function(a,b,c){(function(c){function d(a,b,c){this.chunk=a,this.encoding=b,this.callback=c}function e(b,c){var d=a("./_stream_duplex");b=b||{};var e=b.highWaterMark,f=b.objectMode?16:16384;this.highWaterMark=e||0===e?e:f,this.objectMode=!!b.objectMode,c instanceof d&&(this.objectMode=this.objectMode||!!b.writableObjectMode),this.highWaterMark=~~this.highWaterMark,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1;var g=b.decodeStrings===!1;this.decodeStrings=!g,this.defaultEncoding=b.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(a){n(c,a)},this.writecb=null,this.writelen=0,this.buffer=[],this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1}function f(b){var c=a("./_stream_duplex");return this instanceof f||this instanceof c?(this._writableState=new e(b,this),this.writable=!0,void x.call(this)):new f(b)}function g(a,b,d){var e=new Error("write after end");a.emit("error",e),c.nextTick(function(){d(e)})}function h(a,b,d,e){var f=!0;if(!(w.isBuffer(d)||w.isString(d)||w.isNullOrUndefined(d)||b.objectMode)){var g=new TypeError("Invalid non-string/buffer chunk");a.emit("error",g),c.nextTick(function(){e(g)}),f=!1}return f}function i(a,b,c){return!a.objectMode&&a.decodeStrings!==!1&&w.isString(b)&&(b=new v(b,c)),b}function j(a,b,c,e,f){c=i(b,c,e),w.isBuffer(c)&&(e="buffer");var g=b.objectMode?1:c.length;b.length+=g;var h=b.length<b.highWaterMark;return h||(b.needDrain=!0),b.writing||b.corked?b.buffer.push(new d(c,e,f)):k(a,b,!1,g,c,e,f),h}function k(a,b,c,d,e,f,g){b.writelen=d,b.writecb=g,b.writing=!0,b.sync=!0,c?a._writev(e,b.onwrite):a._write(e,f,b.onwrite),b.sync=!1}function l(a,b,d,e,f){d?c.nextTick(function(){b.pendingcb--,f(e)}):(b.pendingcb--,f(e)),a._writableState.errorEmitted=!0,a.emit("error",e)}function m(a){a.writing=!1,a.writecb=null,a.length-=a.writelen,a.writelen=0}function n(a,b){var d=a._writableState,e=d.sync,f=d.writecb;if(m(d),b)l(a,d,e,b,f);else{var g=r(a,d);g||d.corked||d.bufferProcessing||!d.buffer.length||q(a,d),e?c.nextTick(function(){o(a,d,g,f)}):o(a,d,g,f)}}function o(a,b,c,d){c||p(a,b),b.pendingcb--,d(),t(a,b)}function p(a,b){0===b.length&&b.needDrain&&(b.needDrain=!1,a.emit("drain"))}function q(a,b){if(b.bufferProcessing=!0,a._writev&&b.buffer.length>1){for(var c=[],d=0;d<b.buffer.length;d++)c.push(b.buffer[d].callback);b.pendingcb++,k(a,b,!0,b.length,b.buffer,"",function(a){for(var d=0;d<c.length;d++)b.pendingcb--,c[d](a)}),b.buffer=[]}else{for(var d=0;d<b.buffer.length;d++){var e=b.buffer[d],f=e.chunk,g=e.encoding,h=e.callback,i=b.objectMode?1:f.length;if(k(a,b,!1,i,f,g,h),b.writing){d++;break}}d<b.buffer.length?b.buffer=b.buffer.slice(d):b.buffer.length=0}b.bufferProcessing=!1}function r(a,b){return b.ending&&0===b.length&&!b.finished&&!b.writing}function s(a,b){b.prefinished||(b.prefinished=!0,a.emit("prefinish"))}function t(a,b){var c=r(a,b);return c&&(0===b.pendingcb?(s(a,b),b.finished=!0,a.emit("finish")):s(a,b)),c}function u(a,b,d){b.ending=!0,t(a,b),d&&(b.finished?c.nextTick(d):a.once("finish",d)),b.ended=!0}b.exports=f;var v=a("buffer").Buffer;f.WritableState=e;var w=a("core-util-is");w.inherits=a("inherits");var x=a("stream");w.inherits(f,x),f.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe. Not readable."))},f.prototype.write=function(a,b,c){var d=this._writableState,e=!1;return w.isFunction(b)&&(c=b,b=null),w.isBuffer(a)?b="buffer":b||(b=d.defaultEncoding),w.isFunction(c)||(c=function(){}),d.ended?g(this,d,c):h(this,d,a,c)&&(d.pendingcb++,e=j(this,d,a,b,c)),e},f.prototype.cork=function(){var a=this._writableState;a.corked++},f.prototype.uncork=function(){var a=this._writableState;a.corked&&(a.corked--,a.writing||a.corked||a.finished||a.bufferProcessing||!a.buffer.length||q(this,a))},f.prototype._write=function(a,b,c){c(new Error("not implemented"))},f.prototype._writev=null,f.prototype.end=function(a,b,c){var d=this._writableState;w.isFunction(a)?(c=a,a=null,b=null):w.isFunction(b)&&(c=b,b=null),w.isNullOrUndefined(a)||this.write(a,b),d.corked&&(d.corked=1,this.uncork()),d.ending||d.finished||u(this,d,c)}}).call(this,a("_process"))},{"./_stream_duplex":36,_process:34,buffer:26,"core-util-is":41,inherits:31,stream:46}],41:[function(a,b,c){(function(a){function b(a){return Array.isArray?Array.isArray(a):"[object Array]"===q(a)}function d(a){return"boolean"==typeof a}function e(a){return null===a}function f(a){return null==a}function g(a){return"number"==typeof a}function h(a){return"string"==typeof a}function i(a){return"symbol"==typeof a}function j(a){return void 0===a}function k(a){return"[object RegExp]"===q(a)}function l(a){return"object"==typeof a&&null!==a}function m(a){return"[object Date]"===q(a)}function n(a){return"[object Error]"===q(a)||a instanceof Error}function o(a){return"function"==typeof a}function p(a){return null===a||"boolean"==typeof a||"number"==typeof a||"string"==typeof a||"symbol"==typeof a||"undefined"==typeof a}function q(a){return Object.prototype.toString.call(a)}c.isArray=b,c.isBoolean=d,c.isNull=e,c.isNullOrUndefined=f,c.isNumber=g,c.isString=h,c.isSymbol=i,c.isUndefined=j,c.isRegExp=k,c.isObject=l,c.isDate=m,c.isError=n,c.isFunction=o,c.isPrimitive=p,c.isBuffer=a.isBuffer}).call(this,{isBuffer:a("../../../../insert-module-globals/node_modules/is-buffer/index.js")})},{"../../../../insert-module-globals/node_modules/is-buffer/index.js":32}],42:[function(a,b,c){b.exports=a("./lib/_stream_passthrough.js")},{"./lib/_stream_passthrough.js":37}],43:[function(a,b,c){c=b.exports=a("./lib/_stream_readable.js"),c.Stream=a("stream"),c.Readable=c,c.Writable=a("./lib/_stream_writable.js"),c.Duplex=a("./lib/_stream_duplex.js"),c.Transform=a("./lib/_stream_transform.js"),c.PassThrough=a("./lib/_stream_passthrough.js")},{"./lib/_stream_duplex.js":36,"./lib/_stream_passthrough.js":37,"./lib/_stream_readable.js":38,"./lib/_stream_transform.js":39,"./lib/_stream_writable.js":40,stream:46}],44:[function(a,b,c){b.exports=a("./lib/_stream_transform.js")},{"./lib/_stream_transform.js":39}],45:[function(a,b,c){b.exports=a("./lib/_stream_writable.js")},{"./lib/_stream_writable.js":40}],46:[function(a,b,c){function d(){e.call(this)}b.exports=d;var e=a("events").EventEmitter,f=a("inherits");f(d,e),d.Readable=a("readable-stream/readable.js"),d.Writable=a("readable-stream/writable.js"),d.Duplex=a("readable-stream/duplex.js"),d.Transform=a("readable-stream/transform.js"),d.PassThrough=a("readable-stream/passthrough.js"),d.Stream=d,d.prototype.pipe=function(a,b){function c(b){a.writable&&!1===a.write(b)&&j.pause&&j.pause()}function d(){j.readable&&j.resume&&j.resume()}function f(){k||(k=!0,a.end())}function g(){k||(k=!0,"function"==typeof a.destroy&&a.destroy())}function h(a){if(i(),0===e.listenerCount(this,"error"))throw a}function i(){j.removeListener("data",c),a.removeListener("drain",d),j.removeListener("end",f),j.removeListener("close",g),j.removeListener("error",h),a.removeListener("error",h),j.removeListener("end",i),j.removeListener("close",i),a.removeListener("close",i)}var j=this;j.on("data",c),a.on("drain",d),a._isStdio||b&&b.end===!1||(j.on("end",f),j.on("close",g));var k=!1;return j.on("error",h),a.on("error",h),j.on("end",i),j.on("close",i),a.on("close",i),a.emit("pipe",j),a}},{events:30,inherits:31,"readable-stream/duplex.js":35,"readable-stream/passthrough.js":42,"readable-stream/readable.js":43,"readable-stream/transform.js":44,"readable-stream/writable.js":45}],47:[function(a,b,c){function d(a){if(a&&!i(a))throw new Error("Unknown encoding: "+a)}function e(a){return a.toString(this.encoding)}function f(a){this.charReceived=a.length%2,this.charLength=this.charReceived?2:0}function g(a){this.charReceived=a.length%3,this.charLength=this.charReceived?3:0}var h=a("buffer").Buffer,i=h.isEncoding||function(a){switch(a&&a.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}},j=c.StringDecoder=function(a){switch(this.encoding=(a||"utf8").toLowerCase().replace(/[-_]/,""),d(a),this.encoding){case"utf8":this.surrogateSize=3;break;case"ucs2":case"utf16le":this.surrogateSize=2,this.detectIncompleteChar=f;break;case"base64":this.surrogateSize=3,this.detectIncompleteChar=g;break;default:return void(this.write=e)}this.charBuffer=new h(6),this.charReceived=0,this.charLength=0};j.prototype.write=function(a){for(var b="";this.charLength;){var c=a.length>=this.charLength-this.charReceived?this.charLength-this.charReceived:a.length;if(a.copy(this.charBuffer,this.charReceived,0,c),this.charReceived+=c,this.charReceived<this.charLength)return"";a=a.slice(c,a.length),b=this.charBuffer.slice(0,this.charLength).toString(this.encoding);var d=b.charCodeAt(b.length-1);if(!(d>=55296&&56319>=d)){if(this.charReceived=this.charLength=0,0===a.length)return b;break}this.charLength+=this.surrogateSize,b=""}this.detectIncompleteChar(a);var e=a.length;this.charLength&&(a.copy(this.charBuffer,0,a.length-this.charReceived,e),e-=this.charReceived),b+=a.toString(this.encoding,0,e);var e=b.length-1,d=b.charCodeAt(e);if(d>=55296&&56319>=d){var f=this.surrogateSize;return this.charLength+=f,this.charReceived+=f,this.charBuffer.copy(this.charBuffer,f,0,f),a.copy(this.charBuffer,0,0,f),b.substring(0,e)}return b},j.prototype.detectIncompleteChar=function(a){for(var b=a.length>=3?3:a.length;b>0;b--){var c=a[a.length-b];if(1==b&&c>>5==6){this.charLength=2;break}if(2>=b&&c>>4==14){this.charLength=3;break}if(3>=b&&c>>3==30){this.charLength=4;break}}this.charReceived=b},j.prototype.end=function(a){var b="";if(a&&a.length&&(b=this.write(a)),this.charReceived){var c=this.charReceived,d=this.charBuffer,e=this.encoding;b+=d.slice(0,c).toString(e)}return b}},{buffer:26}],48:[function(a,b,c){function d(a,b){this._id=a,this._clearFn=b}var e=a("process/browser.js").nextTick,f=Function.prototype.apply,g=Array.prototype.slice,h={},i=0;c.setTimeout=function(){return new d(f.call(setTimeout,window,arguments),clearTimeout)},c.setInterval=function(){return new d(f.call(setInterval,window,arguments),clearInterval)},c.clearTimeout=c.clearInterval=function(a){a.close()},d.prototype.unref=d.prototype.ref=function(){},d.prototype.close=function(){this._clearFn.call(window,this._id)},c.enroll=function(a,b){clearTimeout(a._idleTimeoutId),a._idleTimeout=b},c.unenroll=function(a){clearTimeout(a._idleTimeoutId),a._idleTimeout=-1},c._unrefActive=c.active=function(a){clearTimeout(a._idleTimeoutId);var b=a._idleTimeout;b>=0&&(a._idleTimeoutId=setTimeout(function(){a._onTimeout&&a._onTimeout()},b))},c.setImmediate="function"==typeof setImmediate?setImmediate:function(a){var b=i++,d=arguments.length<2?!1:g.call(arguments,1);return h[b]=!0,e(function(){h[b]&&(d?a.apply(null,d):a.call(null),c.clearImmediate(b))}),b},c.clearImmediate="function"==typeof clearImmediate?clearImmediate:function(a){delete h[a]}},{"process/browser.js":34}],49:[function(a,b,c){b.exports=function(a){return a&&"object"==typeof a&&"function"==typeof a.copy&&"function"==typeof a.fill&&"function"==typeof a.readUInt8}},{}],50:[function(a,b,c){(function(b,d){function e(a,b){var d={seen:[],stylize:g};return arguments.length>=3&&(d.depth=arguments[2]),arguments.length>=4&&(d.colors=arguments[3]),p(b)?d.showHidden=b:b&&c._extend(d,b),v(d.showHidden)&&(d.showHidden=!1),v(d.depth)&&(d.depth=2),v(d.colors)&&(d.colors=!1),v(d.customInspect)&&(d.customInspect=!0),d.colors&&(d.stylize=f),i(d,a,d.depth)}function f(a,b){var c=e.styles[b];return c?"["+e.colors[c][0]+"m"+a+"["+e.colors[c][1]+"m":a}function g(a,b){return a}function h(a){var b={};return a.forEach(function(a,c){b[a]=!0}),b}function i(a,b,d){if(a.customInspect&&b&&A(b.inspect)&&b.inspect!==c.inspect&&(!b.constructor||b.constructor.prototype!==b)){var e=b.inspect(d,a);return t(e)||(e=i(a,e,d)),e}var f=j(a,b);if(f)return f;var g=Object.keys(b),p=h(g);if(a.showHidden&&(g=Object.getOwnPropertyNames(b)),z(b)&&(g.indexOf("message")>=0||g.indexOf("description")>=0))return k(b);if(0===g.length){if(A(b)){var q=b.name?": "+b.name:"";return a.stylize("[Function"+q+"]","special")}if(w(b))return a.stylize(RegExp.prototype.toString.call(b),"regexp");if(y(b))return a.stylize(Date.prototype.toString.call(b),"date");if(z(b))return k(b)}var r="",s=!1,u=["{","}"];if(o(b)&&(s=!0,u=["[","]"]),A(b)){var v=b.name?": "+b.name:"";r=" [Function"+v+"]"}if(w(b)&&(r=" "+RegExp.prototype.toString.call(b)),y(b)&&(r=" "+Date.prototype.toUTCString.call(b)),z(b)&&(r=" "+k(b)),0===g.length&&(!s||0==b.length))return u[0]+r+u[1];if(0>d)return w(b)?a.stylize(RegExp.prototype.toString.call(b),"regexp"):a.stylize("[Object]","special");a.seen.push(b);var x;return x=s?l(a,b,d,p,g):g.map(function(c){return m(a,b,d,p,c,s)}),a.seen.pop(),n(x,r,u)}function j(a,b){if(v(b))return a.stylize("undefined","undefined");if(t(b)){var c="'"+JSON.stringify(b).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return a.stylize(c,"string")}return s(b)?a.stylize(""+b,"number"):p(b)?a.stylize(""+b,"boolean"):q(b)?a.stylize("null","null"):void 0}function k(a){return"["+Error.prototype.toString.call(a)+"]"}function l(a,b,c,d,e){for(var f=[],g=0,h=b.length;h>g;++g)F(b,String(g))?f.push(m(a,b,c,d,String(g),!0)):f.push("");return e.forEach(function(e){e.match(/^\d+$/)||f.push(m(a,b,c,d,e,!0))}),f}function m(a,b,c,d,e,f){var g,h,j;if(j=Object.getOwnPropertyDescriptor(b,e)||{value:b[e]},j.get?h=j.set?a.stylize("[Getter/Setter]","special"):a.stylize("[Getter]","special"):j.set&&(h=a.stylize("[Setter]","special")),F(d,e)||(g="["+e+"]"),h||(a.seen.indexOf(j.value)<0?(h=q(c)?i(a,j.value,null):i(a,j.value,c-1),h.indexOf("\n")>-1&&(h=f?h.split("\n").map(function(a){return"  "+a}).join("\n").substr(2):"\n"+h.split("\n").map(function(a){return"   "+a}).join("\n"))):h=a.stylize("[Circular]","special")),v(g)){if(f&&e.match(/^\d+$/))return h;g=JSON.stringify(""+e),g.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(g=g.substr(1,g.length-2),g=a.stylize(g,"name")):(g=g.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),g=a.stylize(g,"string"))}return g+": "+h}function n(a,b,c){var d=0,e=a.reduce(function(a,b){return d++,b.indexOf("\n")>=0&&d++,a+b.replace(/\u001b\[\d\d?m/g,"").length+1},0);return e>60?c[0]+(""===b?"":b+"\n ")+" "+a.join(",\n  ")+" "+c[1]:c[0]+b+" "+a.join(", ")+" "+c[1]}function o(a){return Array.isArray(a)}function p(a){return"boolean"==typeof a}function q(a){return null===a}function r(a){return null==a}function s(a){return"number"==typeof a}function t(a){return"string"==typeof a}function u(a){return"symbol"==typeof a}function v(a){return void 0===a}function w(a){return x(a)&&"[object RegExp]"===C(a)}function x(a){return"object"==typeof a&&null!==a}function y(a){return x(a)&&"[object Date]"===C(a)}function z(a){return x(a)&&("[object Error]"===C(a)||a instanceof Error)}function A(a){return"function"==typeof a}function B(a){return null===a||"boolean"==typeof a||"number"==typeof a||"string"==typeof a||"symbol"==typeof a||"undefined"==typeof a}function C(a){return Object.prototype.toString.call(a)}function D(a){return 10>a?"0"+a.toString(10):a.toString(10)}function E(){var a=new Date,b=[D(a.getHours()),D(a.getMinutes()),D(a.getSeconds())].join(":");return[a.getDate(),J[a.getMonth()],b].join(" ")}function F(a,b){return Object.prototype.hasOwnProperty.call(a,b)}var G=/%[sdj%]/g;c.format=function(a){
if(!t(a)){for(var b=[],c=0;c<arguments.length;c++)b.push(e(arguments[c]));return b.join(" ")}for(var c=1,d=arguments,f=d.length,g=String(a).replace(G,function(a){if("%%"===a)return"%";if(c>=f)return a;switch(a){case"%s":return String(d[c++]);case"%d":return Number(d[c++]);case"%j":try{return JSON.stringify(d[c++])}catch(b){return"[Circular]"}default:return a}}),h=d[c];f>c;h=d[++c])g+=q(h)||!x(h)?" "+h:" "+e(h);return g},c.deprecate=function(a,e){function f(){if(!g){if(b.throwDeprecation)throw new Error(e);b.traceDeprecation?console.trace(e):console.error(e),g=!0}return a.apply(this,arguments)}if(v(d.process))return function(){return c.deprecate(a,e).apply(this,arguments)};if(b.noDeprecation===!0)return a;var g=!1;return f};var H,I={};c.debuglog=function(a){if(v(H)&&(H=b.env.NODE_DEBUG||""),a=a.toUpperCase(),!I[a])if(new RegExp("\\b"+a+"\\b","i").test(H)){var d=b.pid;I[a]=function(){var b=c.format.apply(c,arguments);console.error("%s %d: %s",a,d,b)}}else I[a]=function(){};return I[a]},c.inspect=e,e.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},e.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},c.isArray=o,c.isBoolean=p,c.isNull=q,c.isNullOrUndefined=r,c.isNumber=s,c.isString=t,c.isSymbol=u,c.isUndefined=v,c.isRegExp=w,c.isObject=x,c.isDate=y,c.isError=z,c.isFunction=A,c.isPrimitive=B,c.isBuffer=a("./support/isBuffer");var J=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];c.log=function(){console.log("%s - %s",E(),c.format.apply(c,arguments))},c.inherits=a("inherits"),c._extend=function(a,b){if(!b||!x(b))return a;for(var c=Object.keys(b),d=c.length;d--;)a[c[d]]=b[c[d]];return a}}).call(this,a("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./support/isBuffer":49,_process:34,inherits:31}],51:[function(b,c,d){!function(b){return function(b,c){"function"==typeof a&&a.amd?a("strophe-base64",function(){return c()}):b.Base64=c()}(this,function(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",b={encode:function(b){var c,d,e,f,g,h,i,j="",k=0;do c=b.charCodeAt(k++),d=b.charCodeAt(k++),e=b.charCodeAt(k++),f=c>>2,g=(3&c)<<4|d>>4,h=(15&d)<<2|e>>6,i=63&e,isNaN(d)?(g=(3&c)<<4,h=i=64):isNaN(e)&&(i=64),j=j+a.charAt(f)+a.charAt(g)+a.charAt(h)+a.charAt(i);while(k<b.length);return j},decode:function(b){var c,d,e,f,g,h,i,j="",k=0;b=b.replace(/[^A-Za-z0-9\+\/\=]/g,"");do f=a.indexOf(b.charAt(k++)),g=a.indexOf(b.charAt(k++)),h=a.indexOf(b.charAt(k++)),i=a.indexOf(b.charAt(k++)),c=f<<2|g>>4,d=(15&g)<<4|h>>2,e=(3&h)<<6|i,j+=String.fromCharCode(c),64!=h&&(j+=String.fromCharCode(d)),64!=i&&(j+=String.fromCharCode(e));while(k<b.length);return j}};return b}),function(b,c){"function"==typeof a&&a.amd?a("strophe-sha1",function(){return c()}):b.SHA1=c()}(this,function(){function a(a,d){a[d>>5]|=128<<24-d%32,a[(d+64>>9<<4)+15]=d;var g,h,i,j,k,l,m,n,o=new Array(80),p=1732584193,q=-271733879,r=-1732584194,s=271733878,t=-1009589776;for(g=0;g<a.length;g+=16){for(j=p,k=q,l=r,m=s,n=t,h=0;80>h;h++)16>h?o[h]=a[g+h]:o[h]=f(o[h-3]^o[h-8]^o[h-14]^o[h-16],1),i=e(e(f(p,5),b(h,q,r,s)),e(e(t,o[h]),c(h))),t=s,s=r,r=f(q,30),q=p,p=i;p=e(p,j),q=e(q,k),r=e(r,l),s=e(s,m),t=e(t,n)}return[p,q,r,s,t]}function b(a,b,c,d){return 20>a?b&c|~b&d:40>a?b^c^d:60>a?b&c|b&d|c&d:b^c^d}function c(a){return 20>a?1518500249:40>a?1859775393:60>a?-1894007588:-899497514}function d(b,c){var d=g(b);d.length>16&&(d=a(d,8*b.length));for(var e=new Array(16),f=new Array(16),h=0;16>h;h++)e[h]=909522486^d[h],f[h]=1549556828^d[h];var i=a(e.concat(g(c)),512+8*c.length);return a(f.concat(i),672)}function e(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}function f(a,b){return a<<b|a>>>32-b}function g(a){for(var b=[],c=255,d=0;d<8*a.length;d+=8)b[d>>5]|=(a.charCodeAt(d/8)&c)<<24-d%32;return b}function h(a){for(var b="",c=255,d=0;d<32*a.length;d+=8)b+=String.fromCharCode(a[d>>5]>>>24-d%32&c);return b}function i(a){for(var b,c,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e="",f=0;f<4*a.length;f+=3)for(b=(a[f>>2]>>8*(3-f%4)&255)<<16|(a[f+1>>2]>>8*(3-(f+1)%4)&255)<<8|a[f+2>>2]>>8*(3-(f+2)%4)&255,c=0;4>c;c++)e+=8*f+6*c>32*a.length?"=":d.charAt(b>>6*(3-c)&63);return e}return{b64_hmac_sha1:function(a,b){return i(d(a,b))},b64_sha1:function(b){return i(a(g(b),8*b.length))},binb2str:h,core_hmac_sha1:d,str_hmac_sha1:function(a,b){return h(d(a,b))},str_sha1:function(b){return h(a(g(b),8*b.length))}}}),function(b,c){"function"==typeof a&&a.amd?a("strophe-md5",function(){return c()}):b.MD5=c()}(this,function(a){var b=function(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c},c=function(a,b){return a<<b|a>>>32-b},d=function(a){for(var b=[],c=0;c<8*a.length;c+=8)b[c>>5]|=(255&a.charCodeAt(c/8))<<c%32;return b},e=function(a){for(var b="",c=0;c<32*a.length;c+=8)b+=String.fromCharCode(a[c>>5]>>>c%32&255);return b},f=function(a){for(var b="0123456789abcdef",c="",d=0;d<4*a.length;d++)c+=b.charAt(a[d>>2]>>d%4*8+4&15)+b.charAt(a[d>>2]>>d%4*8&15);return c},g=function(a,d,e,f,g,h){return b(c(b(b(d,a),b(f,h)),g),e)},h=function(a,b,c,d,e,f,h){return g(b&c|~b&d,a,b,e,f,h)},i=function(a,b,c,d,e,f,h){return g(b&d|c&~d,a,b,e,f,h)},j=function(a,b,c,d,e,f,h){return g(b^c^d,a,b,e,f,h)},k=function(a,b,c,d,e,f,h){return g(c^(b|~d),a,b,e,f,h)},l=function(a,c){a[c>>5]|=128<<c%32,a[(c+64>>>9<<4)+14]=c;for(var d,e,f,g,l=1732584193,m=-271733879,n=-1732584194,o=271733878,p=0;p<a.length;p+=16)d=l,e=m,f=n,g=o,l=h(l,m,n,o,a[p+0],7,-680876936),o=h(o,l,m,n,a[p+1],12,-389564586),n=h(n,o,l,m,a[p+2],17,606105819),m=h(m,n,o,l,a[p+3],22,-1044525330),l=h(l,m,n,o,a[p+4],7,-176418897),o=h(o,l,m,n,a[p+5],12,1200080426),n=h(n,o,l,m,a[p+6],17,-1473231341),m=h(m,n,o,l,a[p+7],22,-45705983),l=h(l,m,n,o,a[p+8],7,1770035416),o=h(o,l,m,n,a[p+9],12,-1958414417),n=h(n,o,l,m,a[p+10],17,-42063),m=h(m,n,o,l,a[p+11],22,-1990404162),l=h(l,m,n,o,a[p+12],7,1804603682),o=h(o,l,m,n,a[p+13],12,-40341101),n=h(n,o,l,m,a[p+14],17,-1502002290),m=h(m,n,o,l,a[p+15],22,1236535329),l=i(l,m,n,o,a[p+1],5,-165796510),o=i(o,l,m,n,a[p+6],9,-1069501632),n=i(n,o,l,m,a[p+11],14,643717713),m=i(m,n,o,l,a[p+0],20,-373897302),l=i(l,m,n,o,a[p+5],5,-701558691),o=i(o,l,m,n,a[p+10],9,38016083),n=i(n,o,l,m,a[p+15],14,-660478335),m=i(m,n,o,l,a[p+4],20,-405537848),l=i(l,m,n,o,a[p+9],5,568446438),o=i(o,l,m,n,a[p+14],9,-1019803690),n=i(n,o,l,m,a[p+3],14,-187363961),m=i(m,n,o,l,a[p+8],20,1163531501),l=i(l,m,n,o,a[p+13],5,-1444681467),o=i(o,l,m,n,a[p+2],9,-51403784),n=i(n,o,l,m,a[p+7],14,1735328473),m=i(m,n,o,l,a[p+12],20,-1926607734),l=j(l,m,n,o,a[p+5],4,-378558),o=j(o,l,m,n,a[p+8],11,-2022574463),n=j(n,o,l,m,a[p+11],16,1839030562),m=j(m,n,o,l,a[p+14],23,-35309556),l=j(l,m,n,o,a[p+1],4,-1530992060),o=j(o,l,m,n,a[p+4],11,1272893353),n=j(n,o,l,m,a[p+7],16,-155497632),m=j(m,n,o,l,a[p+10],23,-1094730640),l=j(l,m,n,o,a[p+13],4,681279174),o=j(o,l,m,n,a[p+0],11,-358537222),n=j(n,o,l,m,a[p+3],16,-722521979),m=j(m,n,o,l,a[p+6],23,76029189),l=j(l,m,n,o,a[p+9],4,-640364487),o=j(o,l,m,n,a[p+12],11,-421815835),n=j(n,o,l,m,a[p+15],16,530742520),m=j(m,n,o,l,a[p+2],23,-995338651),l=k(l,m,n,o,a[p+0],6,-198630844),o=k(o,l,m,n,a[p+7],10,1126891415),n=k(n,o,l,m,a[p+14],15,-1416354905),m=k(m,n,o,l,a[p+5],21,-57434055),l=k(l,m,n,o,a[p+12],6,1700485571),o=k(o,l,m,n,a[p+3],10,-1894986606),n=k(n,o,l,m,a[p+10],15,-1051523),m=k(m,n,o,l,a[p+1],21,-2054922799),l=k(l,m,n,o,a[p+8],6,1873313359),o=k(o,l,m,n,a[p+15],10,-30611744),n=k(n,o,l,m,a[p+6],15,-1560198380),m=k(m,n,o,l,a[p+13],21,1309151649),l=k(l,m,n,o,a[p+4],6,-145523070),o=k(o,l,m,n,a[p+11],10,-1120210379),n=k(n,o,l,m,a[p+2],15,718787259),m=k(m,n,o,l,a[p+9],21,-343485551),l=b(l,d),m=b(m,e),n=b(n,f),o=b(o,g);return[l,m,n,o]},m={hexdigest:function(a){return f(l(d(a),8*a.length))},hash:function(a){return e(l(d(a),8*a.length))}};return m}),Function.prototype.bind||(Function.prototype.bind=function(a){var b=this,c=Array.prototype.slice,d=Array.prototype.concat,e=c.call(arguments,1);return function(){return b.apply(a?a:this,d.call(e,c.call(arguments,0)))}}),Array.isArray||(Array.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)}),Array.prototype.indexOf||(Array.prototype.indexOf=function(a){var b=this.length,c=Number(arguments[1])||0;for(c=0>c?Math.ceil(c):Math.floor(c),0>c&&(c+=b);b>c;c++)if(c in this&&this[c]===a)return c;return-1}),function(b,c){if("function"==typeof a&&a.amd)a("strophe-core",["strophe-sha1","strophe-base64","strophe-md5","strophe-polyfill"],function(){return c.apply(this,arguments)});else{var d=c(b.SHA1,b.Base64,b.MD5);window.Strophe=d.Strophe,window.$build=d.$build,window.$iq=d.$iq,window.$msg=d.$msg,window.$pres=d.$pres,window.SHA1=d.SHA1,window.Base64=d.Base64,window.MD5=d.MD5,window.b64_hmac_sha1=d.SHA1.b64_hmac_sha1,window.b64_sha1=d.SHA1.b64_sha1,window.str_hmac_sha1=d.SHA1.str_hmac_sha1,window.str_sha1=d.SHA1.str_sha1}}(this,function(a,b,c){function d(a,b){return new h.Builder(a,b)}function e(a){return new h.Builder("message",a)}function f(a){return new h.Builder("iq",a)}function g(a){return new h.Builder("presence",a)}var h;return h={VERSION:"1.2.2",NS:{HTTPBIND:"http://jabber.org/protocol/httpbind",BOSH:"urn:xmpp:xbosh",CLIENT:"jabber:client",AUTH:"jabber:iq:auth",ROSTER:"jabber:iq:roster",PROFILE:"jabber:iq:profile",DISCO_INFO:"http://jabber.org/protocol/disco#info",DISCO_ITEMS:"http://jabber.org/protocol/disco#items",MUC:"http://jabber.org/protocol/muc",SASL:"urn:ietf:params:xml:ns:xmpp-sasl",STREAM:"http://etherx.jabber.org/streams",FRAMING:"urn:ietf:params:xml:ns:xmpp-framing",BIND:"urn:ietf:params:xml:ns:xmpp-bind",SESSION:"urn:ietf:params:xml:ns:xmpp-session",VERSION:"jabber:iq:version",STANZAS:"urn:ietf:params:xml:ns:xmpp-stanzas",XHTML_IM:"http://jabber.org/protocol/xhtml-im",XHTML:"http://www.w3.org/1999/xhtml"},XHTML:{tags:["a","blockquote","br","cite","em","img","li","ol","p","span","strong","ul","body"],attributes:{a:["href"],blockquote:["style"],br:[],cite:["style"],em:[],img:["src","alt","style","height","width"],li:["style"],ol:["style"],p:["style"],span:["style"],strong:[],ul:["style"],body:[]},css:["background-color","color","font-family","font-size","font-style","font-weight","margin-left","margin-right","text-align","text-decoration"],validTag:function(a){for(var b=0;b<h.XHTML.tags.length;b++)if(a==h.XHTML.tags[b])return!0;return!1},validAttribute:function(a,b){if("undefined"!=typeof h.XHTML.attributes[a]&&h.XHTML.attributes[a].length>0)for(var c=0;c<h.XHTML.attributes[a].length;c++)if(b==h.XHTML.attributes[a][c])return!0;return!1},validCSS:function(a){for(var b=0;b<h.XHTML.css.length;b++)if(a==h.XHTML.css[b])return!0;return!1}},Status:{ERROR:0,CONNECTING:1,CONNFAIL:2,AUTHENTICATING:3,AUTHFAIL:4,CONNECTED:5,DISCONNECTED:6,DISCONNECTING:7,ATTACHED:8,REDIRECT:9},LogLevel:{DEBUG:0,INFO:1,WARN:2,ERROR:3,FATAL:4},ElementType:{NORMAL:1,TEXT:3,CDATA:4,FRAGMENT:11},TIMEOUT:1.1,SECONDARY_TIMEOUT:.1,addNamespace:function(a,b){h.NS[a]=b},forEachChild:function(a,b,c){var d,e;for(d=0;d<a.childNodes.length;d++)e=a.childNodes[d],e.nodeType!=h.ElementType.NORMAL||b&&!this.isTagEqual(e,b)||c(e)},isTagEqual:function(a,b){return a.tagName==b},_xmlGenerator:null,_makeGenerator:function(){var a;return void 0===document.implementation.createDocument||document.implementation.createDocument&&document.documentMode&&document.documentMode<10?(a=this._getIEXmlDom(),a.appendChild(a.createElement("strophe"))):a=document.implementation.createDocument("jabber:client","strophe",null),a},xmlGenerator:function(){return h._xmlGenerator||(h._xmlGenerator=h._makeGenerator()),h._xmlGenerator},_getIEXmlDom:function(){for(var a=null,b=["Msxml2.DOMDocument.6.0","Msxml2.DOMDocument.5.0","Msxml2.DOMDocument.4.0","MSXML2.DOMDocument.3.0","MSXML2.DOMDocument","MSXML.DOMDocument","Microsoft.XMLDOM"],c=0;c<b.length&&null===a;c++)try{a=new ActiveXObject(b[c])}catch(d){a=null}return a},xmlElement:function(a){if(!a)return null;var b,c,d,e=h.xmlGenerator().createElement(a);for(b=1;b<arguments.length;b++){var f=arguments[b];if(f)if("string"==typeof f||"number"==typeof f)e.appendChild(h.xmlTextNode(f));else if("object"==typeof f&&"function"==typeof f.sort)for(c=0;c<f.length;c++){var g=f[c];"object"==typeof g&&"function"==typeof g.sort&&void 0!==g[1]&&e.setAttribute(g[0],g[1])}else if("object"==typeof f)for(d in f)f.hasOwnProperty(d)&&void 0!==f[d]&&e.setAttribute(d,f[d])}return e},xmlescape:function(a){return a=a.replace(/\&/g,"&amp;"),a=a.replace(/</g,"&lt;"),a=a.replace(/>/g,"&gt;"),a=a.replace(/'/g,"&apos;"),a=a.replace(/"/g,"&quot;")},xmlunescape:function(a){return a=a.replace(/\&amp;/g,"&"),a=a.replace(/&lt;/g,"<"),a=a.replace(/&gt;/g,">"),a=a.replace(/&apos;/g,"'"),a=a.replace(/&quot;/g,'"')},xmlTextNode:function(a){return h.xmlGenerator().createTextNode(a)},xmlHtmlNode:function(a){var b;if(window.DOMParser){var c=new DOMParser;b=c.parseFromString(a,"text/xml")}else b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a);return b},getText:function(a){if(!a)return null;var b="";0===a.childNodes.length&&a.nodeType==h.ElementType.TEXT&&(b+=a.nodeValue);for(var c=0;c<a.childNodes.length;c++)a.childNodes[c].nodeType==h.ElementType.TEXT&&(b+=a.childNodes[c].nodeValue);return h.xmlescape(b)},copyElement:function(a){var b,c;if(a.nodeType==h.ElementType.NORMAL){for(c=h.xmlElement(a.tagName),b=0;b<a.attributes.length;b++)c.setAttribute(a.attributes[b].nodeName,a.attributes[b].value);for(b=0;b<a.childNodes.length;b++)c.appendChild(h.copyElement(a.childNodes[b]))}else a.nodeType==h.ElementType.TEXT&&(c=h.xmlGenerator().createTextNode(a.nodeValue));return c},createHtml:function(a){var b,c,d,e,f,g,i,j,k,l,m;if(a.nodeType==h.ElementType.NORMAL)if(e=a.nodeName.toLowerCase(),h.XHTML.validTag(e))try{for(c=h.xmlElement(e),b=0;b<h.XHTML.attributes[e].length;b++)if(f=h.XHTML.attributes[e][b],g=a.getAttribute(f),"undefined"!=typeof g&&null!==g&&""!==g&&g!==!1&&0!==g)if("style"==f&&"object"==typeof g&&"undefined"!=typeof g.cssText&&(g=g.cssText),"style"==f){for(i=[],j=g.split(";"),d=0;d<j.length;d++)k=j[d].split(":"),l=k[0].replace(/^\s*/,"").replace(/\s*$/,"").toLowerCase(),h.XHTML.validCSS(l)&&(m=k[1].replace(/^\s*/,"").replace(/\s*$/,""),i.push(l+": "+m));i.length>0&&(g=i.join("; "),c.setAttribute(f,g))}else c.setAttribute(f,g);for(b=0;b<a.childNodes.length;b++)c.appendChild(h.createHtml(a.childNodes[b]))}catch(n){c=h.xmlTextNode("")}else for(c=h.xmlGenerator().createDocumentFragment(),b=0;b<a.childNodes.length;b++)c.appendChild(h.createHtml(a.childNodes[b]));else if(a.nodeType==h.ElementType.FRAGMENT)for(c=h.xmlGenerator().createDocumentFragment(),b=0;b<a.childNodes.length;b++)c.appendChild(h.createHtml(a.childNodes[b]));else a.nodeType==h.ElementType.TEXT&&(c=h.xmlTextNode(a.nodeValue));return c},escapeNode:function(a){return"string"!=typeof a?a:a.replace(/^\s+|\s+$/g,"").replace(/\\/g,"\\5c").replace(/ /g,"\\20").replace(/\"/g,"\\22").replace(/\&/g,"\\26").replace(/\'/g,"\\27").replace(/\//g,"\\2f").replace(/:/g,"\\3a").replace(/</g,"\\3c").replace(/>/g,"\\3e").replace(/@/g,"\\40")},unescapeNode:function(a){return"string"!=typeof a?a:a.replace(/\\20/g," ").replace(/\\22/g,'"').replace(/\\26/g,"&").replace(/\\27/g,"'").replace(/\\2f/g,"/").replace(/\\3a/g,":").replace(/\\3c/g,"<").replace(/\\3e/g,">").replace(/\\40/g,"@").replace(/\\5c/g,"\\")},getNodeFromJid:function(a){return a.indexOf("@")<0?null:a.split("@")[0]},getDomainFromJid:function(a){var b=h.getBareJidFromJid(a);if(b.indexOf("@")<0)return b;var c=b.split("@");return c.splice(0,1),c.join("@")},getResourceFromJid:function(a){var b=a.split("/");return b.length<2?null:(b.splice(0,1),b.join("/"))},getBareJidFromJid:function(a){return a?a.split("/")[0]:null},log:function(a,b){},debug:function(a){this.log(this.LogLevel.DEBUG,a)},info:function(a){this.log(this.LogLevel.INFO,a)},warn:function(a){this.log(this.LogLevel.WARN,a)},error:function(a){this.log(this.LogLevel.ERROR,a)},fatal:function(a){this.log(this.LogLevel.FATAL,a)},serialize:function(a){var b;if(!a)return null;"function"==typeof a.tree&&(a=a.tree());var c,d,e=a.nodeName;for(a.getAttribute("_realname")&&(e=a.getAttribute("_realname")),b="<"+e,c=0;c<a.attributes.length;c++)"_realname"!=a.attributes[c].nodeName&&(b+=" "+a.attributes[c].nodeName+"='"+a.attributes[c].value.replace(/&/g,"&amp;").replace(/\'/g,"&apos;").replace(/>/g,"&gt;").replace(/</g,"&lt;")+"'");if(a.childNodes.length>0){for(b+=">",c=0;c<a.childNodes.length;c++)switch(d=a.childNodes[c],d.nodeType){case h.ElementType.NORMAL:b+=h.serialize(d);break;case h.ElementType.TEXT:b+=h.xmlescape(d.nodeValue);break;case h.ElementType.CDATA:b+="<![CDATA["+d.nodeValue+"]]>"}b+="</"+e+">"}else b+="/>";return b},_requestId:0,_connectionPlugins:{},addConnectionPlugin:function(a,b){h._connectionPlugins[a]=b}},h.Builder=function(a,b){("presence"==a||"message"==a||"iq"==a)&&(b&&!b.xmlns?b.xmlns=h.NS.CLIENT:b||(b={xmlns:h.NS.CLIENT})),this.nodeTree=h.xmlElement(a,b),this.node=this.nodeTree},h.Builder.prototype={tree:function(){return this.nodeTree},toString:function(){return h.serialize(this.nodeTree)},up:function(){return this.node=this.node.parentNode,this},attrs:function(a){for(var b in a)a.hasOwnProperty(b)&&(void 0===a[b]?this.node.removeAttribute(b):this.node.setAttribute(b,a[b]));return this},c:function(a,b,c){var d=h.xmlElement(a,b,c);return this.node.appendChild(d),"string"!=typeof c&&(this.node=d),this},cnode:function(a){var b,c=h.xmlGenerator();try{b=void 0!==c.importNode}catch(d){b=!1}var e=b?c.importNode(a,!0):h.copyElement(a);return this.node.appendChild(e),this.node=e,this},t:function(a){var b=h.xmlTextNode(a);return this.node.appendChild(b),this},h:function(a){var b=document.createElement("body");b.innerHTML=a;for(var c=h.createHtml(b);c.childNodes.length>0;)this.node.appendChild(c.childNodes[0]);return this}},h.Handler=function(a,b,c,d,e,f,g){this.handler=a,this.ns=b,this.name=c,this.type=d,this.id=e,this.options=g||{matchBare:!1},this.options.matchBare||(this.options.matchBare=!1),this.options.matchBare?this.from=f?h.getBareJidFromJid(f):null:this.from=f,this.user=!0},h.Handler.prototype={isMatch:function(a){var b,c=null;if(c=this.options.matchBare?h.getBareJidFromJid(a.getAttribute("from")):a.getAttribute("from"),b=!1,this.ns){var d=this;h.forEachChild(a,null,function(a){a.getAttribute("xmlns")==d.ns&&(b=!0)}),b=b||a.getAttribute("xmlns")==this.ns}else b=!0;var e=a.getAttribute("type");return!b||this.name&&!h.isTagEqual(a,this.name)||this.type&&(Array.isArray(this.type)?-1==this.type.indexOf(e):e!=this.type)||this.id&&a.getAttribute("id")!=this.id||this.from&&c!=this.from?!1:!0},run:function(a){var b=null;try{b=this.handler(a)}catch(c){throw c.sourceURL?h.fatal("error: "+this.handler+" "+c.sourceURL+":"+c.line+" - "+c.name+": "+c.message):c.fileName?("undefined"!=typeof console&&(console.trace(),console.error(this.handler," - error - ",c,c.message)),h.fatal("error: "+this.handler+" "+c.fileName+":"+c.lineNumber+" - "+c.name+": "+c.message)):h.fatal("error: "+c.message+"\n"+c.stack),c}return b},toString:function(){return"{Handler: "+this.handler+"("+this.name+","+this.id+","+this.ns+")}"}},h.TimedHandler=function(a,b){this.period=a,this.handler=b,this.lastCalled=(new Date).getTime(),this.user=!0},h.TimedHandler.prototype={run:function(){return this.lastCalled=(new Date).getTime(),this.handler()},reset:function(){this.lastCalled=(new Date).getTime()},toString:function(){return"{TimedHandler: "+this.handler+"("+this.period+")}"}},h.Connection=function(a,b){this.service=a,this.options=b||{};var c=this.options.protocol||"";0===a.indexOf("ws:")||0===a.indexOf("wss:")||0===c.indexOf("ws")?this._proto=new h.Websocket(this):this._proto=new h.Bosh(this),this.jid="",this.domain=null,this.features=null,this._sasl_data={},this.do_session=!1,this.do_bind=!1,this.timedHandlers=[],this.handlers=[],this.removeTimeds=[],this.removeHandlers=[],this.addTimeds=[],this.addHandlers=[],this._authentication={},this._idleTimeout=null,this._disconnectTimeout=null,this.authenticated=!1,this.connected=!1,this.disconnecting=!1,this.do_authentication=!0,this.paused=!1,this.restored=!1,this._data=[],this._uniqueId=0,this._sasl_success_handler=null,this._sasl_failure_handler=null,this._sasl_challenge_handler=null,this.maxRetries=5,this._idleTimeout=setTimeout(this._onIdle.bind(this),100);for(var d in h._connectionPlugins)if(h._connectionPlugins.hasOwnProperty(d)){var e=h._connectionPlugins[d],f=function(){};f.prototype=e,this[d]=new f,this[d].init(this)}},h.Connection.prototype={reset:function(){this._proto._reset(),this.do_session=!1,this.do_bind=!1,this.timedHandlers=[],this.handlers=[],this.removeTimeds=[],this.removeHandlers=[],this.addTimeds=[],this.addHandlers=[],this._authentication={},this.authenticated=!1,this.connected=!1,this.disconnecting=!1,this.restored=!1,this._data=[],this._requests=[],this._uniqueId=0},pause:function(){this.paused=!0},resume:function(){this.paused=!1},getUniqueId:function(a){return"string"==typeof a||"number"==typeof a?++this._uniqueId+":"+a:++this._uniqueId+""},connect:function(a,b,c,d,e,f,g){this.jid=a,this.authzid=h.getBareJidFromJid(this.jid),this.authcid=g||h.getNodeFromJid(this.jid),this.pass=b,this.servtype="xmpp",this.connect_callback=c,this.disconnecting=!1,this.connected=!1,this.authenticated=!1,this.restored=!1,this.domain=h.getDomainFromJid(this.jid),this._changeConnectStatus(h.Status.CONNECTING,null),this._proto._connect(d,e,f)},attach:function(a,b,c,d,e,f,g){if(!(this._proto instanceof h.Bosh))throw{name:"StropheSessionError",message:'The "attach" method can only be used with a BOSH connection.'};this._proto._attach(a,b,c,d,e,f,g)},restore:function(a,b,c,d,e){if(!this._sessionCachingSupported())throw{name:"StropheSessionError",message:'The "restore" method can only be used with a BOSH connection.'};this._proto._restore(a,b,c,d,e)},_sessionCachingSupported:function(){if(this._proto instanceof h.Bosh){if(!JSON)return!1;try{window.sessionStorage.setItem("_strophe_","_strophe_"),window.sessionStorage.removeItem("_strophe_")}catch(a){return!1}return!0}return!1},xmlInput:function(a){},xmlOutput:function(a){},rawInput:function(a){},rawOutput:function(a){},send:function(a){if(null!==a){if("function"==typeof a.sort)for(var b=0;b<a.length;b++)this._queueData(a[b]);else"function"==typeof a.tree?this._queueData(a.tree()):this._queueData(a);this._proto._send()}},flush:function(){clearTimeout(this._idleTimeout),this._onIdle()},sendIQ:function(a,b,c,d){var e=null,f=this;"function"==typeof a.tree&&(a=a.tree());var g=a.getAttribute("id");g||(g=this.getUniqueId("sendIQ"),a.setAttribute("id",g));var i=a.getAttribute("to"),j=this.jid,k=this.addHandler(function(a){e&&f.deleteTimedHandler(e);var d=!1,g=a.getAttribute("from");if((g===i||null===i&&(g===h.getBareJidFromJid(j)||g===h.getDomainFromJid(j)||g===j))&&(d=!0),!d)throw{name:"StropheError",message:"Got answer to IQ from wrong jid:"+g+"\nExpected jid: "+i};var k=a.getAttribute("type");if("result"==k)b&&b(a);else{if("error"!=k)throw{name:"StropheError",message:"Got bad IQ type of "+k};c&&c(a)}},null,"iq",["error","result"],g);return d&&(e=this.addTimedHandler(d,function(){return f.deleteHandler(k),c&&c(null),!1})),this.send(a),g},_queueData:function(a){if(null===a||!a.tagName||!a.childNodes)throw{name:"StropheError",message:"Cannot queue non-DOMElement."};this._data.push(a)},_sendRestart:function(){this._data.push("restart"),this._proto._sendRestart(),this._idleTimeout=setTimeout(this._onIdle.bind(this),100)},addTimedHandler:function(a,b){var c=new h.TimedHandler(a,b);return this.addTimeds.push(c),c},deleteTimedHandler:function(a){this.removeTimeds.push(a)},addHandler:function(a,b,c,d,e,f,g){var i=new h.Handler(a,b,c,d,e,f,g);return this.addHandlers.push(i),i},deleteHandler:function(a){this.removeHandlers.push(a);var b=this.addHandlers.indexOf(a);b>=0&&this.addHandlers.splice(b,1)},disconnect:function(a){if(this._changeConnectStatus(h.Status.DISCONNECTING,a),h.info("Disconnect was called because: "+a),this.connected){var b=!1;this.disconnecting=!0,this.authenticated&&(b=g({xmlns:h.NS.CLIENT,type:"unavailable"})),this._disconnectTimeout=this._addSysTimedHandler(3e3,this._onDisconnectTimeout.bind(this)),this._proto._disconnect(b)}else h.info("Disconnect was called before Strophe connected to the server"),this._proto._abortAllRequests()},_changeConnectStatus:function(a,b){for(var c in h._connectionPlugins)if(h._connectionPlugins.hasOwnProperty(c)){var d=this[c];if(d.statusChanged)try{d.statusChanged(a,b)}catch(e){h.error(""+c+" plugin caused an exception changing status: "+e)}}if(this.connect_callback)try{this.connect_callback(a,b)}catch(f){h.error("User connection callback caused an exception: "+f)}},_doDisconnect:function(a){"number"==typeof this._idleTimeout&&clearTimeout(this._idleTimeout),null!==this._disconnectTimeout&&(this.deleteTimedHandler(this._disconnectTimeout),this._disconnectTimeout=null),h.info("_doDisconnect was called"),this._proto._doDisconnect(),this.authenticated=!1,this.disconnecting=!1,this.restored=!1,this.handlers=[],this.timedHandlers=[],this.removeTimeds=[],this.removeHandlers=[],this.addTimeds=[],this.addHandlers=[],this._changeConnectStatus(h.Status.DISCONNECTED,a),this.connected=!1},_dataRecv:function(a,b){h.info("_dataRecv called");var c=this._proto._reqToData(a);if(null!==c){this.xmlInput!==h.Connection.prototype.xmlInput&&(c.nodeName===this._proto.strip&&c.childNodes.length?this.xmlInput(c.childNodes[0]):this.xmlInput(c)),this.rawInput!==h.Connection.prototype.rawInput&&(b?this.rawInput(b):this.rawInput(h.serialize(c)));for(var d,e;this.removeHandlers.length>0;)e=this.removeHandlers.pop(),d=this.handlers.indexOf(e),d>=0&&this.handlers.splice(d,1);for(;this.addHandlers.length>0;)this.handlers.push(this.addHandlers.pop());if(this.disconnecting&&this._proto._emptyQueue())return void this._doDisconnect();var f,g,i=c.getAttribute("type");if(null!==i&&"terminate"==i){if(this.disconnecting)return;return f=c.getAttribute("condition"),g=c.getElementsByTagName("conflict"),null!==f?("remote-stream-error"==f&&g.length>0&&(f="conflict"),this._changeConnectStatus(h.Status.CONNFAIL,f)):this._changeConnectStatus(h.Status.CONNFAIL,"unknown"),void this._doDisconnect(f)}var j=this;h.forEachChild(c,null,function(a){var b,c;for(c=j.handlers,j.handlers=[],b=0;b<c.length;b++){var d=c[b];try{!d.isMatch(a)||!j.authenticated&&d.user?j.handlers.push(d):d.run(a)&&j.handlers.push(d)}catch(e){h.warn("Removing Strophe handlers due to uncaught exception: "+e.message)}}})}},mechanisms:{},_connect_cb:function(a,b,c){h.info("_connect_cb was called"),this.connected=!0;var d=this._proto._reqToData(a);if(d){this.xmlInput!==h.Connection.prototype.xmlInput&&(d.nodeName===this._proto.strip&&d.childNodes.length?this.xmlInput(d.childNodes[0]):this.xmlInput(d)),this.rawInput!==h.Connection.prototype.rawInput&&(c?this.rawInput(c):this.rawInput(h.serialize(d)));var e=this._proto._connect_cb(d);if(e!==h.Status.CONNFAIL){this._authentication.sasl_scram_sha1=!1,this._authentication.sasl_plain=!1,this._authentication.sasl_digest_md5=!1,this._authentication.sasl_anonymous=!1,this._authentication.legacy_auth=!1;var f;f=d.getElementsByTagNameNS?d.getElementsByTagNameNS(h.NS.STREAM,"features").length>0:d.getElementsByTagName("stream:features").length>0||d.getElementsByTagName("features").length>0;var g,i,j=d.getElementsByTagName("mechanism"),k=[],l=!1;if(!f)return void this._proto._no_auth_received(b);if(j.length>0)for(g=0;g<j.length;g++)i=h.getText(j[g]),this.mechanisms[i]&&k.push(this.mechanisms[i]);return this._authentication.legacy_auth=d.getElementsByTagName("auth").length>0,(l=this._authentication.legacy_auth||k.length>0)?void(this.do_authentication!==!1&&this.authenticate(k)):void this._proto._no_auth_received(b)}}},authenticate:function(a){var c;for(c=0;c<a.length-1;++c){for(var e=c,g=c+1;g<a.length;++g)a[g].prototype.priority>a[e].prototype.priority&&(e=g);if(e!=c){var i=a[c];a[c]=a[e],a[e]=i}}var j=!1;for(c=0;c<a.length;++c)if(a[c].test(this)){this._sasl_success_handler=this._addSysHandler(this._sasl_success_cb.bind(this),null,"success",null,null),this._sasl_failure_handler=this._addSysHandler(this._sasl_failure_cb.bind(this),null,"failure",null,null),this._sasl_challenge_handler=this._addSysHandler(this._sasl_challenge_cb.bind(this),null,"challenge",null,null),this._sasl_mechanism=new a[c],this._sasl_mechanism.onStart(this);var k=d("auth",{xmlns:h.NS.SASL,mechanism:this._sasl_mechanism.name});if(this._sasl_mechanism.isClientFirst){var l=this._sasl_mechanism.onChallenge(this,null);k.t(b.encode(l))}this.send(k.tree()),j=!0;break}j||(null===h.getNodeFromJid(this.jid)?(this._changeConnectStatus(h.Status.CONNFAIL,"x-strophe-bad-non-anon-jid"),this.disconnect("x-strophe-bad-non-anon-jid")):(this._changeConnectStatus(h.Status.AUTHENTICATING,null),this._addSysHandler(this._auth1_cb.bind(this),null,null,null,"_auth_1"),this.send(f({type:"get",to:this.domain,id:"_auth_1"}).c("query",{xmlns:h.NS.AUTH}).c("username",{}).t(h.getNodeFromJid(this.jid)).tree())))},_sasl_challenge_cb:function(a){var c=b.decode(h.getText(a)),e=this._sasl_mechanism.onChallenge(this,c),f=d("response",{xmlns:h.NS.SASL});return""!==e&&f.t(b.encode(e)),this.send(f.tree()),!0},_auth1_cb:function(a){var b=f({type:"set",id:"_auth_2"}).c("query",{xmlns:h.NS.AUTH}).c("username",{}).t(h.getNodeFromJid(this.jid)).up().c("password").t(this.pass);return h.getResourceFromJid(this.jid)||(this.jid=h.getBareJidFromJid(this.jid)+"/strophe"),b.up().c("resource",{}).t(h.getResourceFromJid(this.jid)),this._addSysHandler(this._auth2_cb.bind(this),null,null,null,"_auth_2"),this.send(b.tree()),!1},_sasl_success_cb:function(a){if(this._sasl_data["server-signature"]){var c,d=b.decode(h.getText(a)),e=/([a-z]+)=([^,]+)(,|$)/,f=d.match(e);if("v"==f[1]&&(c=f[2]),c!=this._sasl_data["server-signature"])return this.deleteHandler(this._sasl_failure_handler),this._sasl_failure_handler=null,this._sasl_challenge_handler&&(this.deleteHandler(this._sasl_challenge_handler),this._sasl_challenge_handler=null),this._sasl_data={},this._sasl_failure_cb(null)}h.info("SASL authentication succeeded."),this._sasl_mechanism&&this._sasl_mechanism.onSuccess(),this.deleteHandler(this._sasl_failure_handler),this._sasl_failure_handler=null,this._sasl_challenge_handler&&(this.deleteHandler(this._sasl_challenge_handler),this._sasl_challenge_handler=null);var g=[],i=function(a,b){for(;a.length;)this.deleteHandler(a.pop());return this._sasl_auth1_cb.bind(this)(b),!1};return g.push(this._addSysHandler(function(a){i.bind(this)(g,a)}.bind(this),null,"stream:features",null,null)),g.push(this._addSysHandler(function(a){i.bind(this)(g,a)}.bind(this),h.NS.STREAM,"features",null,null)),this._sendRestart(),!1},_sasl_auth1_cb:function(a){this.features=a;var b,c;for(b=0;b<a.childNodes.length;b++)c=a.childNodes[b],"bind"==c.nodeName&&(this.do_bind=!0),"session"==c.nodeName&&(this.do_session=!0);if(!this.do_bind)return this._changeConnectStatus(h.Status.AUTHFAIL,null),!1;this._addSysHandler(this._sasl_bind_cb.bind(this),null,null,null,"_bind_auth_2");var d=h.getResourceFromJid(this.jid);return d?this.send(f({type:"set",id:"_bind_auth_2"}).c("bind",{xmlns:h.NS.BIND}).c("resource",{}).t(d).tree()):this.send(f({type:"set",id:"_bind_auth_2"}).c("bind",{xmlns:h.NS.BIND}).tree()),!1},_sasl_bind_cb:function(a){if("error"==a.getAttribute("type")){h.info("SASL binding failed.");var b,c=a.getElementsByTagName("conflict");return c.length>0&&(b="conflict"),this._changeConnectStatus(h.Status.AUTHFAIL,b),!1}var d,e=a.getElementsByTagName("bind");return e.length>0?(d=e[0].getElementsByTagName("jid"),void(d.length>0&&(this.jid=h.getText(d[0]),this.do_session?(this._addSysHandler(this._sasl_session_cb.bind(this),null,null,null,"_session_auth_2"),this.send(f({type:"set",id:"_session_auth_2"}).c("session",{xmlns:h.NS.SESSION
}).tree())):(this.authenticated=!0,this._changeConnectStatus(h.Status.CONNECTED,null))))):(h.info("SASL binding failed."),this._changeConnectStatus(h.Status.AUTHFAIL,null),!1)},_sasl_session_cb:function(a){if("result"==a.getAttribute("type"))this.authenticated=!0,this._changeConnectStatus(h.Status.CONNECTED,null);else if("error"==a.getAttribute("type"))return h.info("Session creation failed."),this._changeConnectStatus(h.Status.AUTHFAIL,null),!1;return!1},_sasl_failure_cb:function(a){return this._sasl_success_handler&&(this.deleteHandler(this._sasl_success_handler),this._sasl_success_handler=null),this._sasl_challenge_handler&&(this.deleteHandler(this._sasl_challenge_handler),this._sasl_challenge_handler=null),this._sasl_mechanism&&this._sasl_mechanism.onFailure(),this._changeConnectStatus(h.Status.AUTHFAIL,null),!1},_auth2_cb:function(a){return"result"==a.getAttribute("type")?(this.authenticated=!0,this._changeConnectStatus(h.Status.CONNECTED,null)):"error"==a.getAttribute("type")&&(this._changeConnectStatus(h.Status.AUTHFAIL,null),this.disconnect("authentication failed")),!1},_addSysTimedHandler:function(a,b){var c=new h.TimedHandler(a,b);return c.user=!1,this.addTimeds.push(c),c},_addSysHandler:function(a,b,c,d,e){var f=new h.Handler(a,b,c,d,e);return f.user=!1,this.addHandlers.push(f),f},_onDisconnectTimeout:function(){return h.info("_onDisconnectTimeout was called"),this._proto._onDisconnectTimeout(),this._doDisconnect(),!1},_onIdle:function(){for(var a,b,c,d;this.addTimeds.length>0;)this.timedHandlers.push(this.addTimeds.pop());for(;this.removeTimeds.length>0;)b=this.removeTimeds.pop(),a=this.timedHandlers.indexOf(b),a>=0&&this.timedHandlers.splice(a,1);var e=(new Date).getTime();for(d=[],a=0;a<this.timedHandlers.length;a++)b=this.timedHandlers[a],(this.authenticated||!b.user)&&(c=b.lastCalled+b.period,0>=c-e?b.run()&&d.push(b):d.push(b));this.timedHandlers=d,clearTimeout(this._idleTimeout),this._proto._onIdle(),this.connected&&(this._idleTimeout=setTimeout(this._onIdle.bind(this),100))}},h.SASLMechanism=function(a,b,c){this.name=a,this.isClientFirst=b,this.priority=c},h.SASLMechanism.prototype={test:function(a){return!0},onStart:function(a){this._connection=a},onChallenge:function(a,b){throw new Error("You should implement challenge handling!")},onFailure:function(){this._connection=null},onSuccess:function(){this._connection=null}},h.SASLAnonymous=function(){},h.SASLAnonymous.prototype=new h.SASLMechanism("ANONYMOUS",!1,10),h.SASLAnonymous.test=function(a){return null===a.authcid},h.Connection.prototype.mechanisms[h.SASLAnonymous.prototype.name]=h.SASLAnonymous,h.SASLPlain=function(){},h.SASLPlain.prototype=new h.SASLMechanism("PLAIN",!0,20),h.SASLPlain.test=function(a){return null!==a.authcid},h.SASLPlain.prototype.onChallenge=function(a){var b=a.authzid;return b+="\x00",b+=a.authcid,b+="\x00",b+=a.pass},h.Connection.prototype.mechanisms[h.SASLPlain.prototype.name]=h.SASLPlain,h.SASLSHA1=function(){},h.SASLSHA1.prototype=new h.SASLMechanism("SCRAM-SHA-1",!0,40),h.SASLSHA1.test=function(a){return null!==a.authcid},h.SASLSHA1.prototype.onChallenge=function(d,e,f){var g=f||c.hexdigest(1234567890*Math.random()),h="n="+d.authcid;return h+=",r=",h+=g,d._sasl_data.cnonce=g,d._sasl_data["client-first-message-bare"]=h,h="n,,"+h,this.onChallenge=function(c,d){for(var e,f,g,h,i,j,k,l,m,n,o,p="c=biws,",q=c._sasl_data["client-first-message-bare"]+","+d+",",r=c._sasl_data.cnonce,s=/([a-z]+)=([^,]+)(,|$)/;d.match(s);){var t=d.match(s);switch(d=d.replace(t[0],""),t[1]){case"r":e=t[2];break;case"s":f=t[2];break;case"i":g=t[2]}}if(e.substr(0,r.length)!==r)return c._sasl_data={},c._sasl_failure_cb();for(p+="r="+e,q+=p,f=b.decode(f),f+="\x00\x00\x00",h=j=a.core_hmac_sha1(c.pass,f),k=1;g>k;k++){for(i=a.core_hmac_sha1(c.pass,a.binb2str(j)),l=0;5>l;l++)h[l]^=i[l];j=i}for(h=a.binb2str(h),m=a.core_hmac_sha1(h,"Client Key"),n=a.str_hmac_sha1(h,"Server Key"),o=a.core_hmac_sha1(a.str_sha1(a.binb2str(m)),q),c._sasl_data["server-signature"]=a.b64_hmac_sha1(n,q),l=0;5>l;l++)m[l]^=o[l];return p+=",p="+b.encode(a.binb2str(m))}.bind(this),h},h.Connection.prototype.mechanisms[h.SASLSHA1.prototype.name]=h.SASLSHA1,h.SASLMD5=function(){},h.SASLMD5.prototype=new h.SASLMechanism("DIGEST-MD5",!1,30),h.SASLMD5.test=function(a){return null!==a.authcid},h.SASLMD5.prototype._quote=function(a){return'"'+a.replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'},h.SASLMD5.prototype.onChallenge=function(a,b,d){for(var e,f=/([a-z]+)=("[^"]+"|[^,"]+)(?:,|$)/,g=d||c.hexdigest(""+1234567890*Math.random()),h="",i=null,j="",k="";b.match(f);)switch(e=b.match(f),b=b.replace(e[0],""),e[2]=e[2].replace(/^"(.+)"$/,"$1"),e[1]){case"realm":h=e[2];break;case"nonce":j=e[2];break;case"qop":k=e[2];break;case"host":i=e[2]}var l=a.servtype+"/"+a.domain;null!==i&&(l=l+"/"+i);var m=c.hash(a.authcid+":"+h+":"+this._connection.pass)+":"+j+":"+g,n="AUTHENTICATE:"+l,o="";return o+="charset=utf-8,",o+="username="+this._quote(a.authcid)+",",o+="realm="+this._quote(h)+",",o+="nonce="+this._quote(j)+",",o+="nc=00000001,",o+="cnonce="+this._quote(g)+",",o+="digest-uri="+this._quote(l)+",",o+="response="+c.hexdigest(c.hexdigest(m)+":"+j+":00000001:"+g+":auth:"+c.hexdigest(n))+",",o+="qop=auth",this.onChallenge=function(){return""}.bind(this),o},h.Connection.prototype.mechanisms[h.SASLMD5.prototype.name]=h.SASLMD5,{Strophe:h,$build:d,$msg:e,$iq:f,$pres:g,SHA1:a,Base64:b,MD5:c}}),function(b,c){return"function"==typeof a&&a.amd?void a("strophe-bosh",["strophe-core"],function(a){return c(a.Strophe,a.$build)}):c(Strophe,$build)}(this,function(a,b){return a.Request=function(b,c,d,e){this.id=++a._requestId,this.xmlData=b,this.data=a.serialize(b),this.origFunc=c,this.func=c,this.rid=d,this.date=NaN,this.sends=e||0,this.abort=!1,this.dead=null,this.age=function(){if(!this.date)return 0;var a=new Date;return(a-this.date)/1e3},this.timeDead=function(){if(!this.dead)return 0;var a=new Date;return(a-this.dead)/1e3},this.xhr=this._newXHR()},a.Request.prototype={getResponse:function(){var b=null;if(this.xhr.responseXML&&this.xhr.responseXML.documentElement){if(b=this.xhr.responseXML.documentElement,"parsererror"==b.tagName)throw a.error("invalid response received"),a.error("responseText: "+this.xhr.responseText),a.error("responseXML: "+a.serialize(this.xhr.responseXML)),"parsererror"}else this.xhr.responseText&&(a.error("invalid response received"),a.error("responseText: "+this.xhr.responseText),a.error("responseXML: "+a.serialize(this.xhr.responseXML)));return b},_newXHR:function(){var a=null;return window.XMLHttpRequest?(a=new XMLHttpRequest,a.overrideMimeType&&a.overrideMimeType("text/xml; charset=utf-8")):window.ActiveXObject&&(a=new ActiveXObject("Microsoft.XMLHTTP")),a.onreadystatechange=this.func.bind(null,this),a}},a.Bosh=function(a){this._conn=a,this.rid=Math.floor(4294967295*Math.random()),this.sid=null,this.hold=1,this.wait=60,this.window=5,this.errors=0,this._requests=[]},a.Bosh.prototype={strip:null,_buildBody:function(){var c=b("body",{rid:this.rid++,xmlns:a.NS.HTTPBIND});return null!==this.sid&&c.attrs({sid:this.sid}),this._conn.options.keepalive&&this._cacheSession(),c},_reset:function(){this.rid=Math.floor(4294967295*Math.random()),this.sid=null,this.errors=0,window.sessionStorage.removeItem("strophe-bosh-session")},_connect:function(b,c,d){this.wait=b||this.wait,this.hold=c||this.hold,this.errors=0;var e=this._buildBody().attrs({to:this._conn.domain,"xml:lang":"en",wait:this.wait,hold:this.hold,content:"text/xml; charset=utf-8",ver:"1.6","xmpp:version":"1.0","xmlns:xmpp":a.NS.BOSH});d&&e.attrs({route:d});var f=this._conn._connect_cb;this._requests.push(new a.Request(e.tree(),this._onRequestStateChange.bind(this,f.bind(this._conn)),e.tree().getAttribute("rid"))),this._throttledRequestHandler()},_attach:function(b,c,d,e,f,g,h){this._conn.jid=b,this.sid=c,this.rid=d,this._conn.connect_callback=e,this._conn.domain=a.getDomainFromJid(this._conn.jid),this._conn.authenticated=!0,this._conn.connected=!0,this.wait=f||this.wait,this.hold=g||this.hold,this.window=h||this.window,this._conn._changeConnectStatus(a.Status.ATTACHED,null)},_restore:function(b,c,d,e,f){var g=JSON.parse(window.sessionStorage.getItem("strophe-bosh-session"));if(!("undefined"!=typeof g&&null!==g&&g.rid&&g.sid&&g.jid)||"undefined"!=typeof b&&a.getBareJidFromJid(g.jid)!=a.getBareJidFromJid(b))throw{name:"StropheSessionError",message:"_restore: no restoreable session."};this._conn.restored=!0,this._attach(g.jid,g.sid,g.rid,c,d,e,f)},_cacheSession:function(){this._conn.authenticated?this._conn.jid&&this.rid&&this.sid&&window.sessionStorage.setItem("strophe-bosh-session",JSON.stringify({jid:this._conn.jid,rid:this.rid,sid:this.sid})):window.sessionStorage.removeItem("strophe-bosh-session")},_connect_cb:function(b){var c,d,e=b.getAttribute("type");if(null!==e&&"terminate"==e)return c=b.getAttribute("condition"),a.error("BOSH-Connection failed: "+c),d=b.getElementsByTagName("conflict"),null!==c?("remote-stream-error"==c&&d.length>0&&(c="conflict"),this._conn._changeConnectStatus(a.Status.CONNFAIL,c)):this._conn._changeConnectStatus(a.Status.CONNFAIL,"unknown"),this._conn._doDisconnect(c),a.Status.CONNFAIL;this.sid||(this.sid=b.getAttribute("sid"));var f=b.getAttribute("requests");f&&(this.window=parseInt(f,10));var g=b.getAttribute("hold");g&&(this.hold=parseInt(g,10));var h=b.getAttribute("wait");h&&(this.wait=parseInt(h,10))},_disconnect:function(a){this._sendTerminate(a)},_doDisconnect:function(){this.sid=null,this.rid=Math.floor(4294967295*Math.random()),window.sessionStorage.removeItem("strophe-bosh-session")},_emptyQueue:function(){return 0===this._requests.length},_hitError:function(b){this.errors++,a.warn("request errored, status: "+b+", number of errors: "+this.errors),this.errors>4&&this._conn._onDisconnectTimeout()},_no_auth_received:function(b){b=b?b.bind(this._conn):this._conn._connect_cb.bind(this._conn);var c=this._buildBody();this._requests.push(new a.Request(c.tree(),this._onRequestStateChange.bind(this,b.bind(this._conn)),c.tree().getAttribute("rid"))),this._throttledRequestHandler()},_onDisconnectTimeout:function(){this._abortAllRequests()},_abortAllRequests:function(){for(var a;this._requests.length>0;)a=this._requests.pop(),a.abort=!0,a.xhr.abort(),a.xhr.onreadystatechange=function(){}},_onIdle:function(){var b=this._conn._data;if(this._conn.authenticated&&0===this._requests.length&&0===b.length&&!this._conn.disconnecting&&(a.info("no requests during idle cycle, sending blank request"),b.push(null)),!this._conn.paused){if(this._requests.length<2&&b.length>0){for(var c=this._buildBody(),d=0;d<b.length;d++)null!==b[d]&&("restart"===b[d]?c.attrs({to:this._conn.domain,"xml:lang":"en","xmpp:restart":"true","xmlns:xmpp":a.NS.BOSH}):c.cnode(b[d]).up());delete this._conn._data,this._conn._data=[],this._requests.push(new a.Request(c.tree(),this._onRequestStateChange.bind(this,this._conn._dataRecv.bind(this._conn)),c.tree().getAttribute("rid"))),this._throttledRequestHandler()}if(this._requests.length>0){var e=this._requests[0].age();null!==this._requests[0].dead&&this._requests[0].timeDead()>Math.floor(a.SECONDARY_TIMEOUT*this.wait)&&this._throttledRequestHandler(),e>Math.floor(a.TIMEOUT*this.wait)&&(a.warn("Request "+this._requests[0].id+" timed out, over "+Math.floor(a.TIMEOUT*this.wait)+" seconds since last activity"),this._throttledRequestHandler())}}},_onRequestStateChange:function(b,c){if(a.debug("request id "+c.id+"."+c.sends+" state changed to "+c.xhr.readyState),c.abort)return void(c.abort=!1);var d;if(4==c.xhr.readyState){d=0;try{d=c.xhr.status}catch(e){}if("undefined"==typeof d&&(d=0),this.disconnecting&&d>=400)return void this._hitError(d);var f=this._requests[0]==c,g=this._requests[1]==c;(d>0&&500>d||c.sends>5)&&(this._removeRequest(c),a.debug("request id "+c.id+" should now be removed")),200==d?((g||f&&this._requests.length>0&&this._requests[0].age()>Math.floor(a.SECONDARY_TIMEOUT*this.wait))&&this._restartRequest(0),a.debug("request id "+c.id+"."+c.sends+" got 200"),b(c),this.errors=0):(a.error("request id "+c.id+"."+c.sends+" error "+d+" happened"),(0===d||d>=400&&600>d||d>=12e3)&&(this._hitError(d),d>=400&&500>d&&(this._conn._changeConnectStatus(a.Status.DISCONNECTING,null),this._conn._doDisconnect()))),d>0&&500>d||c.sends>5||this._throttledRequestHandler()}},_processRequest:function(b){var c=this,d=this._requests[b],e=-1;try{4==d.xhr.readyState&&(e=d.xhr.status)}catch(f){a.error("caught an error in _requests["+b+"], reqStatus: "+e)}if("undefined"==typeof e&&(e=-1),d.sends>this._conn.maxRetries)return void this._conn._onDisconnectTimeout();var g=d.age(),h=!isNaN(g)&&g>Math.floor(a.TIMEOUT*this.wait),i=null!==d.dead&&d.timeDead()>Math.floor(a.SECONDARY_TIMEOUT*this.wait),j=4==d.xhr.readyState&&(1>e||e>=500);if((h||i||j)&&(i&&a.error("Request "+this._requests[b].id+" timed out (secondary), restarting"),d.abort=!0,d.xhr.abort(),d.xhr.onreadystatechange=function(){},this._requests[b]=new a.Request(d.xmlData,d.origFunc,d.rid,d.sends),d=this._requests[b]),0===d.xhr.readyState){a.debug("request id "+d.id+"."+d.sends+" posting");try{d.xhr.open("POST",this._conn.service,this._conn.options.sync?!1:!0),d.xhr.setRequestHeader("Content-Type","text/xml; charset=utf-8")}catch(k){return a.error("XHR open failed."),this._conn.connected||this._conn._changeConnectStatus(a.Status.CONNFAIL,"bad-service"),void this._conn.disconnect()}var l=function(){if(d.date=new Date,c._conn.options.customHeaders){var a=c._conn.options.customHeaders;for(var b in a)a.hasOwnProperty(b)&&d.xhr.setRequestHeader(b,a[b])}d.xhr.send(d.data)};if(d.sends>1){var m=1e3*Math.min(Math.floor(a.TIMEOUT*this.wait),Math.pow(d.sends,3));setTimeout(l,m)}else l();d.sends++,this._conn.xmlOutput!==a.Connection.prototype.xmlOutput&&(d.xmlData.nodeName===this.strip&&d.xmlData.childNodes.length?this._conn.xmlOutput(d.xmlData.childNodes[0]):this._conn.xmlOutput(d.xmlData)),this._conn.rawOutput!==a.Connection.prototype.rawOutput&&this._conn.rawOutput(d.data)}else a.debug("_processRequest: "+(0===b?"first":"second")+" request has readyState of "+d.xhr.readyState)},_removeRequest:function(b){a.debug("removing request");var c;for(c=this._requests.length-1;c>=0;c--)b==this._requests[c]&&this._requests.splice(c,1);b.xhr.onreadystatechange=function(){},this._throttledRequestHandler()},_restartRequest:function(a){var b=this._requests[a];null===b.dead&&(b.dead=new Date),this._processRequest(a)},_reqToData:function(a){try{return a.getResponse()}catch(b){if("parsererror"!=b)throw b;this._conn.disconnect("strophe-parsererror")}},_sendTerminate:function(b){a.info("_sendTerminate was called");var c=this._buildBody().attrs({type:"terminate"});b&&c.cnode(b.tree());var d=new a.Request(c.tree(),this._onRequestStateChange.bind(this,this._conn._dataRecv.bind(this._conn)),c.tree().getAttribute("rid"));this._requests.push(d),this._throttledRequestHandler()},_send:function(){clearTimeout(this._conn._idleTimeout),this._throttledRequestHandler(),this._conn._idleTimeout=setTimeout(this._conn._onIdle.bind(this._conn),100)},_sendRestart:function(){this._throttledRequestHandler(),clearTimeout(this._conn._idleTimeout)},_throttledRequestHandler:function(){this._requests?a.debug("_throttledRequestHandler called with "+this._requests.length+" requests"):a.debug("_throttledRequestHandler called with undefined requests"),this._requests&&0!==this._requests.length&&(this._requests.length>0&&this._processRequest(0),this._requests.length>1&&Math.abs(this._requests[0].rid-this._requests[1].rid)<this.window&&this._processRequest(1))}},a}),function(b,c){return"function"==typeof a&&a.amd?void a("strophe-websocket",["strophe-core"],function(a){return c(a.Strophe,a.$build)}):c(Strophe,$build)}(this,function(a,b){return a.Websocket=function(a){this._conn=a,this.strip="wrapper";var b=a.service;if(0!==b.indexOf("ws:")&&0!==b.indexOf("wss:")){var c="";c+="ws"===a.options.protocol&&"https:"!==window.location.protocol?"ws":"wss",c+="://"+window.location.host,c+=0!==b.indexOf("/")?window.location.pathname+b:b,a.service=c}},a.Websocket.prototype={_buildStream:function(){return b("open",{xmlns:a.NS.FRAMING,to:this._conn.domain,version:"1.0"})},_check_streamerror:function(b,c){var d;if(d=b.getElementsByTagNameNS?b.getElementsByTagNameNS(a.NS.STREAM,"error"):b.getElementsByTagName("stream:error"),0===d.length)return!1;for(var e=d[0],f="",g="",h="urn:ietf:params:xml:ns:xmpp-streams",i=0;i<e.childNodes.length;i++){var j=e.childNodes[i];if(j.getAttribute("xmlns")!==h)break;"text"===j.nodeName?g=j.textContent:f=j.nodeName}var k="WebSocket stream error: ";return k+=f?f:"unknown",g&&(k+=" - "+f),a.error(k),this._conn._changeConnectStatus(c,f),this._conn._doDisconnect(),!0},_reset:function(){},_connect:function(){this._closeSocket(),this.socket=new WebSocket(this._conn.service,"xmpp"),this.socket.onopen=this._onOpen.bind(this),this.socket.onerror=this._onError.bind(this),this.socket.onclose=this._onClose.bind(this),this.socket.onmessage=this._connect_cb_wrapper.bind(this)},_connect_cb:function(b){var c=this._check_streamerror(b,a.Status.CONNFAIL);return c?a.Status.CONNFAIL:void 0},_handleStreamStart:function(b){var c=!1,d=b.getAttribute("xmlns");"string"!=typeof d?c="Missing xmlns in <open />":d!==a.NS.FRAMING&&(c="Wrong xmlns in <open />: "+d);var e=b.getAttribute("version");return"string"!=typeof e?c="Missing version in <open />":"1.0"!==e&&(c="Wrong version in <open />: "+e),c?(this._conn._changeConnectStatus(a.Status.CONNFAIL,c),this._conn._doDisconnect(),!1):!0},_connect_cb_wrapper:function(b){if(0===b.data.indexOf("<open ")||0===b.data.indexOf("<?xml")){var c=b.data.replace(/^(<\?.*?\?>\s*)*/,"");if(""===c)return;var d=(new DOMParser).parseFromString(c,"text/xml").documentElement;this._conn.xmlInput(d),this._conn.rawInput(b.data),this._handleStreamStart(d)&&this._connect_cb(d)}else if(0===b.data.indexOf("<close ")){this._conn.rawInput(b.data),this._conn.xmlInput(b);var e=b.getAttribute("see-other-uri");e?(this._conn._changeConnectStatus(a.Status.REDIRECT,"Received see-other-uri, resetting connection"),this._conn.reset(),this._conn.service=e,this._connect()):(this._conn._changeConnectStatus(a.Status.CONNFAIL,"Received closing stream"),this._conn._doDisconnect())}else{var f=this._streamWrap(b.data),g=(new DOMParser).parseFromString(f,"text/xml").documentElement;this.socket.onmessage=this._onMessage.bind(this),this._conn._connect_cb(g,null,b.data)}},_disconnect:function(c){if(this.socket&&this.socket.readyState!==WebSocket.CLOSED){c&&this._conn.send(c);var d=b("close",{xmlns:a.NS.FRAMING});this._conn.xmlOutput(d);var e=a.serialize(d);this._conn.rawOutput(e);try{this.socket.send(e)}catch(f){a.info("Couldn't send <close /> tag.")}}this._conn._doDisconnect()},_doDisconnect:function(){a.info("WebSockets _doDisconnect was called"),this._closeSocket()},_streamWrap:function(a){return"<wrapper>"+a+"</wrapper>"},_closeSocket:function(){if(this.socket)try{this.socket.close()}catch(a){}this.socket=null},_emptyQueue:function(){return!0},_onClose:function(){this._conn.connected&&!this._conn.disconnecting?(a.error("Websocket closed unexcectedly"),this._conn._doDisconnect()):a.info("Websocket closed")},_no_auth_received:function(b){a.error("Server did not send any auth methods"),this._conn._changeConnectStatus(a.Status.CONNFAIL,"Server did not send any auth methods"),b&&(b=b.bind(this._conn))(),this._conn._doDisconnect()},_onDisconnectTimeout:function(){},_abortAllRequests:function(){},_onError:function(b){a.error("Websocket error "+b),this._conn._changeConnectStatus(a.Status.CONNFAIL,"The WebSocket connection could not be established was disconnected."),this._disconnect()},_onIdle:function(){var b=this._conn._data;if(b.length>0&&!this._conn.paused){for(var c=0;c<b.length;c++)if(null!==b[c]){var d,e;d="restart"===b[c]?this._buildStream().tree():b[c],e=a.serialize(d),this._conn.xmlOutput(d),this._conn.rawOutput(e),this.socket.send(e)}this._conn._data=[]}},_onMessage:function(b){var c,d,e='<close xmlns="urn:ietf:params:xml:ns:xmpp-framing" />';if(b.data===e)return this._conn.rawInput(e),this._conn.xmlInput(b),void(this._conn.disconnecting||this._conn._doDisconnect());if(0===b.data.search("<open ")){if(c=(new DOMParser).parseFromString(b.data,"text/xml").documentElement,!this._handleStreamStart(c))return}else d=this._streamWrap(b.data),c=(new DOMParser).parseFromString(d,"text/xml").documentElement;return this._check_streamerror(c,a.Status.ERROR)?void 0:this._conn.disconnecting&&"presence"===c.firstChild.nodeName&&"unavailable"===c.firstChild.getAttribute("type")?(this._conn.xmlInput(c),void this._conn.rawInput(a.serialize(c))):void this._conn._dataRecv(c,b.data)},_onOpen:function(){a.info("Websocket open");var b=this._buildStream();this._conn.xmlOutput(b.tree());var c=a.serialize(b);this._conn.rawOutput(c),this.socket.send(c)},_reqToData:function(a){return a},_send:function(){this._conn.flush()},_sendRestart:function(){clearTimeout(this._conn._idleTimeout),this._conn._onIdle.bind(this._conn)()}},a}),b?b(Strophe,$build,$msg,$iq,$pres):void 0}(function(a,b,c,d,e){window.Strophe=a,window.$build=b,window.$msg=c,window.$iq=d,window.$pres=e})},{}],52:[function(a,b,c){(function(){"use strict";var b;b=a("../lib/xml2js"),c.stripBOM=function(a){return"\ufeff"===a[0]?a.substring(1):a}}).call(this)},{"../lib/xml2js":54}],53:[function(a,b,c){(function(){"use strict";var a;a=new RegExp(/(?!xmlns)^.*:/),c.normalize=function(a){return a.toLowerCase()},c.firstCharLowerCase=function(a){return a.charAt(0).toLowerCase()+a.slice(1)},c.stripPrefix=function(b){return b.replace(a,"")},c.parseNumbers=function(a){return isNaN(a)||(a=a%1===0?parseInt(a,10):parseFloat(a)),a},c.parseBooleans=function(a){return/^(?:true|false)$/i.test(a)&&(a="true"===a.toLowerCase()),a}}).call(this)},{}],54:[function(a,b,c){(function(){"use strict";var b,d,e,f,g,h,i,j,k,l,m,n=function(a,b){function c(){this.constructor=a}for(var d in b)o.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},o={}.hasOwnProperty,p=function(a,b){return function(){return a.apply(b,arguments)}};k=a("sax"),f=a("events"),d=a("xmlbuilder"),b=a("./bom"),i=a("./processors"),l=a("timers").setImmediate,g=function(a){return"object"==typeof a&&null!=a&&0===Object.keys(a).length},h=function(a,b){var c,d,e;for(c=0,d=a.length;d>c;c++)e=a[c],b=e(b);return b},j=function(a){return a.indexOf("&")>=0||a.indexOf(">")>=0||a.indexOf("<")>=0},m=function(a){return"<![CDATA["+e(a)+"]]>"},e=function(a){return a.replace("]]>","]]]]><![CDATA[>")},c.processors=i,c.defaults={.1:{explicitCharkey:!1,trim:!0,normalize:!0,normalizeTags:!1,attrkey:"@",charkey:"#",explicitArray:!1,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!1,validator:null,xmlns:!1,explicitChildren:!1,childkey:"@@",charsAsChildren:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,emptyTag:""},.2:{explicitCharkey:!1,trim:!1,normalize:!1,normalizeTags:!1,attrkey:"$",charkey:"_",explicitArray:!0,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!0,validator:null,xmlns:!1,explicitChildren:!1,preserveChildrenOrder:!1,childkey:"$$",charsAsChildren:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,rootName:"root",xmldec:{version:"1.0",encoding:"UTF-8",standalone:!0},doctype:null,renderOpts:{pretty:!0,indent:"  ",newline:"\n"},headless:!1,chunkSize:1e4,emptyTag:"",cdata:!1}},c.ValidationError=function(a){function b(a){this.message=a}return n(b,a),b}(Error),c.Builder=function(){function a(a){var b,d,e;this.options={},d=c.defaults[.2];for(b in d)o.call(d,b)&&(e=d[b],this.options[b]=e);for(b in a)o.call(a,b)&&(e=a[b],this.options[b]=e)}return a.prototype.buildObject=function(a){var b,e,f,g,h;return b=this.options.attrkey,e=this.options.charkey,1===Object.keys(a).length&&this.options.rootName===c.defaults[.2].rootName?(h=Object.keys(a)[0],a=a[h]):h=this.options.rootName,f=function(a){return function(c,d){var g,h,i,k,l,n;if("object"!=typeof d)a.options.cdata&&j(d)?c.raw(m(d)):c.txt(d);else for(l in d)if(o.call(d,l))if(h=d[l],l===b){if("object"==typeof h)for(g in h)n=h[g],c=c.att(g,n)}else if(l===e)c=a.options.cdata&&j(h)?c.raw(m(h)):c.txt(h);else if(Array.isArray(h))for(k in h)o.call(h,k)&&(i=h[k],c="string"==typeof i?a.options.cdata&&j(i)?c.ele(l).raw(m(i)).up():c.ele(l,i).up():f(c.ele(l),i).up());else"object"==typeof h?c=f(c.ele(l),h).up():"string"==typeof h&&a.options.cdata&&j(h)?c=c.ele(l).raw(m(h)).up():(null==h&&(h=""),c=c.ele(l,h.toString()).up());return c}}(this),g=d.create(h,this.options.xmldec,this.options.doctype,{headless:this.options.headless,allowSurrogateChars:this.options.allowSurrogateChars}),f(g,a).end(this.options.renderOpts)},a}(),c.Parser=function(a){function d(a){this.parseString=p(this.parseString,this),this.reset=p(this.reset,this),this.assignOrPush=p(this.assignOrPush,this),this.processAsync=p(this.processAsync,this);var b,d,e;if(!(this instanceof c.Parser))return new c.Parser(a);this.options={},d=c.defaults[.2];for(b in d)o.call(d,b)&&(e=d[b],this.options[b]=e);for(b in a)o.call(a,b)&&(e=a[b],this.options[b]=e);this.options.xmlns&&(this.options.xmlnskey=this.options.attrkey+"ns"),this.options.normalizeTags&&(this.options.tagNameProcessors||(this.options.tagNameProcessors=[]),this.options.tagNameProcessors.unshift(i.normalize)),this.reset()}return n(d,a),d.prototype.processAsync=function(){var a,b,c;try{return this.remaining.length<=this.options.chunkSize?(a=this.remaining,this.remaining="",this.saxParser=this.saxParser.write(a),this.saxParser.close()):(a=this.remaining.substr(0,this.options.chunkSize),this.remaining=this.remaining.substr(this.options.chunkSize,this.remaining.length),this.saxParser=this.saxParser.write(a),l(this.processAsync))}catch(c){if(b=c,!this.saxParser.errThrown)return this.saxParser.errThrown=!0,this.emit(b)}},d.prototype.assignOrPush=function(a,b,c){return b in a?(a[b]instanceof Array||(a[b]=[a[b]]),a[b].push(c)):this.options.explicitArray?a[b]=[c]:a[b]=c},d.prototype.reset=function(){var a,b,c,d;return this.removeAllListeners(),this.saxParser=k.parser(this.options.strict,{trim:!1,normalize:!1,xmlns:this.options.xmlns}),this.saxParser.errThrown=!1,this.saxParser.onerror=function(a){return function(b){return a.saxParser.resume(),a.saxParser.errThrown?void 0:(a.saxParser.errThrown=!0,a.emit("error",b))}}(this),this.saxParser.onend=function(a){return function(){return a.saxParser.ended?void 0:(a.saxParser.ended=!0,a.emit("end",a.resultObject))}}(this),this.saxParser.ended=!1,this.EXPLICIT_CHARKEY=this.options.explicitCharkey,this.resultObject=null,d=[],a=this.options.attrkey,b=this.options.charkey,this.saxParser.onopentag=function(c){return function(e){var f,g,i,j,k;if(i={},i[b]="",!c.options.ignoreAttrs){k=e.attributes;for(f in k)o.call(k,f)&&(a in i||c.options.mergeAttrs||(i[a]={}),g=c.options.attrValueProcessors?h(c.options.attrValueProcessors,e.attributes[f]):e.attributes[f],j=c.options.attrNameProcessors?h(c.options.attrNameProcessors,f):f,c.options.mergeAttrs?c.assignOrPush(i,j,g):i[a][j]=g)}return i["#name"]=c.options.tagNameProcessors?h(c.options.tagNameProcessors,e.name):e.name,c.options.xmlns&&(i[c.options.xmlnskey]={uri:e.uri,local:e.local}),d.push(i)}}(this),this.saxParser.onclosetag=function(a){return function(){var c,e,f,i,j,k,l,m,n,p,q,r;if(m=d.pop(),l=m["#name"],a.options.explicitChildren&&a.options.preserveChildrenOrder||delete m["#name"],m.cdata===!0&&(c=m.cdata,delete m.cdata),q=d[d.length-1],m[b].match(/^\s*$/)&&!c?(e=m[b],delete m[b]):(a.options.trim&&(m[b]=m[b].trim()),a.options.normalize&&(m[b]=m[b].replace(/\s{2,}/g," ").trim()),m[b]=a.options.valueProcessors?h(a.options.valueProcessors,m[b]):m[b],1===Object.keys(m).length&&b in m&&!a.EXPLICIT_CHARKEY&&(m=m[b])),g(m)&&(m=""!==a.options.emptyTag?a.options.emptyTag:e),null!=a.options.validator){r="/"+function(){var a,b,c;for(c=[],a=0,b=d.length;b>a;a++)k=d[a],c.push(k["#name"]);return c}().concat(l).join("/");try{m=a.options.validator(r,q&&q[l],m)}catch(i){f=i,a.emit("error",f)}}if(a.options.explicitChildren&&!a.options.mergeAttrs&&"object"==typeof m)if(a.options.preserveChildrenOrder){if(q){q[a.options.childkey]=q[a.options.childkey]||[],n={};for(j in m)o.call(m,j)&&(n[j]=m[j]);q[a.options.childkey].push(n),delete m["#name"],1===Object.keys(m).length&&b in m&&!a.EXPLICIT_CHARKEY&&(m=m[b])}}else k={},a.options.attrkey in m&&(k[a.options.attrkey]=m[a.options.attrkey],delete m[a.options.attrkey]),!a.options.charsAsChildren&&a.options.charkey in m&&(k[a.options.charkey]=m[a.options.charkey],delete m[a.options.charkey]),Object.getOwnPropertyNames(m).length>0&&(k[a.options.childkey]=m),m=k;return d.length>0?a.assignOrPush(q,l,m):(a.options.explicitRoot&&(p=m,m={},m[l]=p),a.resultObject=m,a.saxParser.ended=!0,a.emit("end",a.resultObject))}}(this),c=function(a){return function(c){var e,f;return f=d[d.length-1],f?(f[b]+=c,a.options.explicitChildren&&a.options.preserveChildrenOrder&&a.options.charsAsChildren&&""!==c.replace(/\\n/g,"").trim()&&(f[a.options.childkey]=f[a.options.childkey]||[],e={"#name":"__text__"},e[b]=c,f[a.options.childkey].push(e)),f):void 0}}(this),this.saxParser.ontext=c,this.saxParser.oncdata=function(a){return function(a){var b;return b=c(a),b?b.cdata=!0:void 0}}(this)},d.prototype.parseString=function(a,c){var d,e;null!=c&&"function"==typeof c&&(this.on("end",function(a){return this.reset(),c(null,a)}),this.on("error",function(a){return this.reset(),c(a)}));try{return a=a.toString(),""===a.trim()?(this.emit("end",null),!0):(a=b.stripBOM(a),this.options.async?(this.remaining=a,l(this.processAsync),this.saxParser):this.saxParser.write(a).close())}catch(e){if(d=e,!this.saxParser.errThrown&&!this.saxParser.ended)return this.emit("error",d),this.saxParser.errThrown=!0;if(this.saxParser.ended)throw d}},d}(f.EventEmitter),c.parseString=function(a,b,d){var e,f,g;return null!=d?("function"==typeof d&&(e=d),"object"==typeof b&&(f=b)):("function"==typeof b&&(e=b),f={}),g=new c.Parser(f),g.parseString(a,e)}}).call(this)},{"./bom":52,"./processors":53,events:30,sax:55,timers:48,xmlbuilder:72}],55:[function(a,b,c){(function(b){!function(c){function d(a,b){if(!(this instanceof d))return new d(a,b);var e=this;f(e),e.q=e.c="",e.bufferCheckPosition=c.MAX_BUFFER_LENGTH,e.opt=b||{},e.opt.lowercase=e.opt.lowercase||e.opt.lowercasetags,e.looseCase=e.opt.lowercase?"toLowerCase":"toUpperCase",e.tags=[],e.closed=e.closedRoot=e.sawRoot=!1,e.tag=e.error=null,e.strict=!!a,e.noscript=!(!a&&!e.opt.noscript),e.state=U.BEGIN,e.strictEntities=e.opt.strictEntities,e.ENTITIES=e.strictEntities?Object.create(c.XML_ENTITIES):Object.create(c.ENTITIES),e.attribList=[],e.opt.xmlns&&(e.ns=Object.create(P)),e.trackPosition=e.opt.position!==!1,e.trackPosition&&(e.position=e.line=e.column=0),n(e,"onready")}function e(a){for(var b=Math.max(c.MAX_BUFFER_LENGTH,10),d=0,e=0,f=C.length;f>e;e++){var g=a[C[e]].length;if(g>b)switch(C[e]){case"textNode":p(a);break;case"cdata":o(a,"oncdata",a.cdata),a.cdata="";break;case"script":o(a,"onscript",a.script),a.script="";break;default:r(a,"Max buffer length exceeded: "+C[e])}d=Math.max(d,g)}var h=c.MAX_BUFFER_LENGTH-d;a.bufferCheckPosition=h+a.position}function f(a){for(var b=0,c=C.length;c>b;b++)a[C[b]]=""}function g(a){p(a),""!==a.cdata&&(o(a,"oncdata",a.cdata),a.cdata=""),""!==a.script&&(o(a,"onscript",a.script),a.script="")}function h(a,b){return new i(a,b)}function i(a,b){if(!(this instanceof i))return new i(a,b);D.apply(this),this._parser=new d(a,b),this.writable=!0,this.readable=!0;var c=this;this._parser.onend=function(){c.emit("end")},this._parser.onerror=function(a){c.emit("error",a),c._parser.error=null},this._decoder=null,F.forEach(function(a){Object.defineProperty(c,"on"+a,{get:function(){return c._parser["on"+a]},set:function(b){return b?void c.on(a,b):(c.removeAllListeners(a),c._parser["on"+a]=b,b)},enumerable:!0,configurable:!1})})}function j(a){return a.split("").reduce(function(a,b){return a[b]=!0,a},{})}function k(a){return"[object RegExp]"===Object.prototype.toString.call(a);
}function l(a,b){return k(a)?!!b.match(a):a[b]}function m(a,b){return!l(a,b)}function n(a,b,c){a[b]&&a[b](c)}function o(a,b,c){a.textNode&&p(a),n(a,b,c)}function p(a){a.textNode=q(a.opt,a.textNode),a.textNode&&n(a,"ontext",a.textNode),a.textNode=""}function q(a,b){return a.trim&&(b=b.trim()),a.normalize&&(b=b.replace(/\s+/g," ")),b}function r(a,b){return p(a),a.trackPosition&&(b+="\nLine: "+a.line+"\nColumn: "+a.column+"\nChar: "+a.c),b=new Error(b),a.error=b,n(a,"onerror",b),a}function s(a){return a.sawRoot&&!a.closedRoot&&t(a,"Unclosed root tag"),a.state!==U.BEGIN&&a.state!==U.BEGIN_WHITESPACE&&a.state!==U.TEXT&&r(a,"Unexpected end"),p(a),a.c="",a.closed=!0,n(a,"onend"),d.call(a,a.strict,a.opt),a}function t(a,b){if("object"!=typeof a||!(a instanceof d))throw new Error("bad call to strictFail");a.strict&&r(a,b)}function u(a){a.strict||(a.tagName=a.tagName[a.looseCase]());var b=a.tags[a.tags.length-1]||a,c=a.tag={name:a.tagName,attributes:{}};a.opt.xmlns&&(c.ns=b.ns),a.attribList.length=0}function v(a,b){var c=a.indexOf(":"),d=0>c?["",a]:a.split(":"),e=d[0],f=d[1];return b&&"xmlns"===a&&(e="xmlns",f=""),{prefix:e,local:f}}function w(a){if(a.strict||(a.attribName=a.attribName[a.looseCase]()),-1!==a.attribList.indexOf(a.attribName)||a.tag.attributes.hasOwnProperty(a.attribName))return void(a.attribName=a.attribValue="");if(a.opt.xmlns){var b=v(a.attribName,!0),c=b.prefix,d=b.local;if("xmlns"===c)if("xml"===d&&a.attribValue!==N)t(a,"xml: prefix must be bound to "+N+"\nActual: "+a.attribValue);else if("xmlns"===d&&a.attribValue!==O)t(a,"xmlns: prefix must be bound to "+O+"\nActual: "+a.attribValue);else{var e=a.tag,f=a.tags[a.tags.length-1]||a;e.ns===f.ns&&(e.ns=Object.create(f.ns)),e.ns[d]=a.attribValue}a.attribList.push([a.attribName,a.attribValue])}else a.tag.attributes[a.attribName]=a.attribValue,o(a,"onattribute",{name:a.attribName,value:a.attribValue});a.attribName=a.attribValue=""}function x(a,b){if(a.opt.xmlns){var c=a.tag,d=v(a.tagName);c.prefix=d.prefix,c.local=d.local,c.uri=c.ns[d.prefix]||"",c.prefix&&!c.uri&&(t(a,"Unbound namespace prefix: "+JSON.stringify(a.tagName)),c.uri=d.prefix);var e=a.tags[a.tags.length-1]||a;c.ns&&e.ns!==c.ns&&Object.keys(c.ns).forEach(function(b){o(a,"onopennamespace",{prefix:b,uri:c.ns[b]})});for(var f=0,g=a.attribList.length;g>f;f++){var h=a.attribList[f],i=h[0],j=h[1],k=v(i,!0),l=k.prefix,m=k.local,n=""===l?"":c.ns[l]||"",p={name:i,value:j,prefix:l,local:m,uri:n};l&&"xmlns"!==l&&!n&&(t(a,"Unbound namespace prefix: "+JSON.stringify(l)),p.uri=l),a.tag.attributes[i]=p,o(a,"onattribute",p)}a.attribList.length=0}a.tag.isSelfClosing=!!b,a.sawRoot=!0,a.tags.push(a.tag),o(a,"onopentag",a.tag),b||(a.noscript||"script"!==a.tagName.toLowerCase()?a.state=U.TEXT:a.state=U.SCRIPT,a.tag=null,a.tagName=""),a.attribName=a.attribValue="",a.attribList.length=0}function y(a){if(!a.tagName)return t(a,"Weird empty close tag."),a.textNode+="</>",void(a.state=U.TEXT);if(a.script){if("script"!==a.tagName)return a.script+="</"+a.tagName+">",a.tagName="",void(a.state=U.SCRIPT);o(a,"onscript",a.script),a.script=""}var b=a.tags.length,c=a.tagName;a.strict||(c=c[a.looseCase]());for(var d=c;b--;){var e=a.tags[b];if(e.name===d)break;t(a,"Unexpected close tag")}if(0>b)return t(a,"Unmatched closing tag: "+a.tagName),a.textNode+="</"+a.tagName+">",void(a.state=U.TEXT);a.tagName=c;for(var f=a.tags.length;f-- >b;){var g=a.tag=a.tags.pop();a.tagName=a.tag.name,o(a,"onclosetag",a.tagName);var h={};for(var i in g.ns)h[i]=g.ns[i];var j=a.tags[a.tags.length-1]||a;a.opt.xmlns&&g.ns!==j.ns&&Object.keys(g.ns).forEach(function(b){var c=g.ns[b];o(a,"onclosenamespace",{prefix:b,uri:c})})}0===b&&(a.closedRoot=!0),a.tagName=a.attribValue=a.attribName="",a.attribList.length=0,a.state=U.TEXT}function z(a){var b,c=a.entity,d=c.toLowerCase(),e="";return a.ENTITIES[c]?a.ENTITIES[c]:a.ENTITIES[d]?a.ENTITIES[d]:(c=d,"#"===c.charAt(0)&&("x"===c.charAt(1)?(c=c.slice(2),b=parseInt(c,16),e=b.toString(16)):(c=c.slice(1),b=parseInt(c,10),e=b.toString(10))),c=c.replace(/^0+/,""),e.toLowerCase()!==c?(t(a,"Invalid character entity"),"&"+a.entity+";"):String.fromCodePoint(b))}function A(a,b){"<"===b?(a.state=U.OPEN_WAKA,a.startTagPosition=a.position):m(G,b)&&(t(a,"Non-whitespace before first tag."),a.textNode=b,a.state=U.TEXT)}function B(a){var b=this;if(this.error)throw this.error;if(b.closed)return r(b,"Cannot write after close. Assign an onready handler.");if(null===a)return s(b);for(var c=0,d="";;){if(d=a.charAt(c++),b.c=d,!d)break;switch(b.trackPosition&&(b.position++,"\n"===d?(b.line++,b.column=0):b.column++),b.state){case U.BEGIN:if(b.state=U.BEGIN_WHITESPACE,"\ufeff"===d)continue;A(b,d);continue;case U.BEGIN_WHITESPACE:A(b,d);continue;case U.TEXT:if(b.sawRoot&&!b.closedRoot){for(var f=c-1;d&&"<"!==d&&"&"!==d;)d=a.charAt(c++),d&&b.trackPosition&&(b.position++,"\n"===d?(b.line++,b.column=0):b.column++);b.textNode+=a.substring(f,c-1)}"<"!==d||b.sawRoot&&b.closedRoot&&!b.strict?(!m(G,d)||b.sawRoot&&!b.closedRoot||t(b,"Text data outside of root node."),"&"===d?b.state=U.TEXT_ENTITY:b.textNode+=d):(b.state=U.OPEN_WAKA,b.startTagPosition=b.position);continue;case U.SCRIPT:"<"===d?b.state=U.SCRIPT_ENDING:b.script+=d;continue;case U.SCRIPT_ENDING:"/"===d?b.state=U.CLOSE_TAG:(b.script+="<"+d,b.state=U.SCRIPT);continue;case U.OPEN_WAKA:if("!"===d)b.state=U.SGML_DECL,b.sgmlDecl="";else if(l(G,d));else if(l(Q,d))b.state=U.OPEN_TAG,b.tagName=d;else if("/"===d)b.state=U.CLOSE_TAG,b.tagName="";else if("?"===d)b.state=U.PROC_INST,b.procInstName=b.procInstBody="";else{if(t(b,"Unencoded <"),b.startTagPosition+1<b.position){var g=b.position-b.startTagPosition;d=new Array(g).join(" ")+d}b.textNode+="<"+d,b.state=U.TEXT}continue;case U.SGML_DECL:(b.sgmlDecl+d).toUpperCase()===L?(o(b,"onopencdata"),b.state=U.CDATA,b.sgmlDecl="",b.cdata=""):b.sgmlDecl+d==="--"?(b.state=U.COMMENT,b.comment="",b.sgmlDecl=""):(b.sgmlDecl+d).toUpperCase()===M?(b.state=U.DOCTYPE,(b.doctype||b.sawRoot)&&t(b,"Inappropriately located doctype declaration"),b.doctype="",b.sgmlDecl=""):">"===d?(o(b,"onsgmldeclaration",b.sgmlDecl),b.sgmlDecl="",b.state=U.TEXT):l(J,d)?(b.state=U.SGML_DECL_QUOTED,b.sgmlDecl+=d):b.sgmlDecl+=d;continue;case U.SGML_DECL_QUOTED:d===b.q&&(b.state=U.SGML_DECL,b.q=""),b.sgmlDecl+=d;continue;case U.DOCTYPE:">"===d?(b.state=U.TEXT,o(b,"ondoctype",b.doctype),b.doctype=!0):(b.doctype+=d,"["===d?b.state=U.DOCTYPE_DTD:l(J,d)&&(b.state=U.DOCTYPE_QUOTED,b.q=d));continue;case U.DOCTYPE_QUOTED:b.doctype+=d,d===b.q&&(b.q="",b.state=U.DOCTYPE);continue;case U.DOCTYPE_DTD:b.doctype+=d,"]"===d?b.state=U.DOCTYPE:l(J,d)&&(b.state=U.DOCTYPE_DTD_QUOTED,b.q=d);continue;case U.DOCTYPE_DTD_QUOTED:b.doctype+=d,d===b.q&&(b.state=U.DOCTYPE_DTD,b.q="");continue;case U.COMMENT:"-"===d?b.state=U.COMMENT_ENDING:b.comment+=d;continue;case U.COMMENT_ENDING:"-"===d?(b.state=U.COMMENT_ENDED,b.comment=q(b.opt,b.comment),b.comment&&o(b,"oncomment",b.comment),b.comment=""):(b.comment+="-"+d,b.state=U.COMMENT);continue;case U.COMMENT_ENDED:">"!==d?(t(b,"Malformed comment"),b.comment+="--"+d,b.state=U.COMMENT):b.state=U.TEXT;continue;case U.CDATA:"]"===d?b.state=U.CDATA_ENDING:b.cdata+=d;continue;case U.CDATA_ENDING:"]"===d?b.state=U.CDATA_ENDING_2:(b.cdata+="]"+d,b.state=U.CDATA);continue;case U.CDATA_ENDING_2:">"===d?(b.cdata&&o(b,"oncdata",b.cdata),o(b,"onclosecdata"),b.cdata="",b.state=U.TEXT):"]"===d?b.cdata+="]":(b.cdata+="]]"+d,b.state=U.CDATA);continue;case U.PROC_INST:"?"===d?b.state=U.PROC_INST_ENDING:l(G,d)?b.state=U.PROC_INST_BODY:b.procInstName+=d;continue;case U.PROC_INST_BODY:if(!b.procInstBody&&l(G,d))continue;"?"===d?b.state=U.PROC_INST_ENDING:b.procInstBody+=d;continue;case U.PROC_INST_ENDING:">"===d?(o(b,"onprocessinginstruction",{name:b.procInstName,body:b.procInstBody}),b.procInstName=b.procInstBody="",b.state=U.TEXT):(b.procInstBody+="?"+d,b.state=U.PROC_INST_BODY);continue;case U.OPEN_TAG:l(R,d)?b.tagName+=d:(u(b),">"===d?x(b):"/"===d?b.state=U.OPEN_TAG_SLASH:(m(G,d)&&t(b,"Invalid character in tag name"),b.state=U.ATTRIB));continue;case U.OPEN_TAG_SLASH:">"===d?(x(b,!0),y(b)):(t(b,"Forward-slash in opening tag not followed by >"),b.state=U.ATTRIB);continue;case U.ATTRIB:if(l(G,d))continue;">"===d?x(b):"/"===d?b.state=U.OPEN_TAG_SLASH:l(Q,d)?(b.attribName=d,b.attribValue="",b.state=U.ATTRIB_NAME):t(b,"Invalid attribute name");continue;case U.ATTRIB_NAME:"="===d?b.state=U.ATTRIB_VALUE:">"===d?(t(b,"Attribute without value"),b.attribValue=b.attribName,w(b),x(b)):l(G,d)?b.state=U.ATTRIB_NAME_SAW_WHITE:l(R,d)?b.attribName+=d:t(b,"Invalid attribute name");continue;case U.ATTRIB_NAME_SAW_WHITE:if("="===d)b.state=U.ATTRIB_VALUE;else{if(l(G,d))continue;t(b,"Attribute without value"),b.tag.attributes[b.attribName]="",b.attribValue="",o(b,"onattribute",{name:b.attribName,value:""}),b.attribName="",">"===d?x(b):l(Q,d)?(b.attribName=d,b.state=U.ATTRIB_NAME):(t(b,"Invalid attribute name"),b.state=U.ATTRIB)}continue;case U.ATTRIB_VALUE:if(l(G,d))continue;l(J,d)?(b.q=d,b.state=U.ATTRIB_VALUE_QUOTED):(t(b,"Unquoted attribute value"),b.state=U.ATTRIB_VALUE_UNQUOTED,b.attribValue=d);continue;case U.ATTRIB_VALUE_QUOTED:if(d!==b.q){"&"===d?b.state=U.ATTRIB_VALUE_ENTITY_Q:b.attribValue+=d;continue}w(b),b.q="",b.state=U.ATTRIB_VALUE_CLOSED;continue;case U.ATTRIB_VALUE_CLOSED:l(G,d)?b.state=U.ATTRIB:">"===d?x(b):"/"===d?b.state=U.OPEN_TAG_SLASH:l(Q,d)?(t(b,"No whitespace between attributes"),b.attribName=d,b.attribValue="",b.state=U.ATTRIB_NAME):t(b,"Invalid attribute name");continue;case U.ATTRIB_VALUE_UNQUOTED:if(m(K,d)){"&"===d?b.state=U.ATTRIB_VALUE_ENTITY_U:b.attribValue+=d;continue}w(b),">"===d?x(b):b.state=U.ATTRIB;continue;case U.CLOSE_TAG:if(b.tagName)">"===d?y(b):l(R,d)?b.tagName+=d:b.script?(b.script+="</"+b.tagName,b.tagName="",b.state=U.SCRIPT):(m(G,d)&&t(b,"Invalid tagname in closing tag"),b.state=U.CLOSE_TAG_SAW_WHITE);else{if(l(G,d))continue;m(Q,d)?b.script?(b.script+="</"+d,b.state=U.SCRIPT):t(b,"Invalid tagname in closing tag."):b.tagName=d}continue;case U.CLOSE_TAG_SAW_WHITE:if(l(G,d))continue;">"===d?y(b):t(b,"Invalid characters in closing tag");continue;case U.TEXT_ENTITY:case U.ATTRIB_VALUE_ENTITY_Q:case U.ATTRIB_VALUE_ENTITY_U:var h,i;switch(b.state){case U.TEXT_ENTITY:h=U.TEXT,i="textNode";break;case U.ATTRIB_VALUE_ENTITY_Q:h=U.ATTRIB_VALUE_QUOTED,i="attribValue";break;case U.ATTRIB_VALUE_ENTITY_U:h=U.ATTRIB_VALUE_UNQUOTED,i="attribValue"}";"===d?(b[i]+=z(b),b.entity="",b.state=h):l(b.entity.length?T:S,d)?b.entity+=d:(t(b,"Invalid character in entity name"),b[i]+="&"+b.entity+d,b.entity="",b.state=h);continue;default:throw new Error(b,"Unknown state: "+b.state)}}return b.position>=b.bufferCheckPosition&&e(b),b}c.parser=function(a,b){return new d(a,b)},c.SAXParser=d,c.SAXStream=i,c.createStream=h,c.MAX_BUFFER_LENGTH=65536;var C=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];c.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"],Object.create||(Object.create=function(a){function b(){}b.prototype=a;var c=new b;return c}),Object.keys||(Object.keys=function(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b}),d.prototype={end:function(){s(this)},write:B,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){g(this)}};var D;try{D=a("stream").Stream}catch(E){D=function(){}}var F=c.EVENTS.filter(function(a){return"error"!==a&&"end"!==a});i.prototype=Object.create(D.prototype,{constructor:{value:i}}),i.prototype.write=function(c){if("function"==typeof b&&"function"==typeof b.isBuffer&&b.isBuffer(c)){if(!this._decoder){var d=a("string_decoder").StringDecoder;this._decoder=new d("utf8")}c=this._decoder.write(c)}return this._parser.write(c.toString()),this.emit("data",c),!0},i.prototype.end=function(a){return a&&a.length&&this.write(a),this._parser.end(),!0},i.prototype.on=function(a,b){var c=this;return c._parser["on"+a]||-1===F.indexOf(a)||(c._parser["on"+a]=function(){var b=1===arguments.length?[arguments[0]]:Array.apply(null,arguments);b.splice(0,0,a),c.emit.apply(c,b)}),D.prototype.on.call(c,a,b)};var G="\r\n	 ",H="0124356789",I="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",J="'\"",K=G+">",L="[CDATA[",M="DOCTYPE",N="http://www.w3.org/XML/1998/namespace",O="http://www.w3.org/2000/xmlns/",P={xml:N,xmlns:O};G=j(G),H=j(H),I=j(I);var Q=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,R=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040\.\d-]/,S=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,T=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040\.\d-]/;J=j(J),K=j(K);var U=0;c.STATE={BEGIN:U++,BEGIN_WHITESPACE:U++,TEXT:U++,TEXT_ENTITY:U++,OPEN_WAKA:U++,SGML_DECL:U++,SGML_DECL_QUOTED:U++,DOCTYPE:U++,DOCTYPE_QUOTED:U++,DOCTYPE_DTD:U++,DOCTYPE_DTD_QUOTED:U++,COMMENT_STARTING:U++,COMMENT:U++,COMMENT_ENDING:U++,COMMENT_ENDED:U++,CDATA:U++,CDATA_ENDING:U++,CDATA_ENDING_2:U++,PROC_INST:U++,PROC_INST_BODY:U++,PROC_INST_ENDING:U++,OPEN_TAG:U++,OPEN_TAG_SLASH:U++,ATTRIB:U++,ATTRIB_NAME:U++,ATTRIB_NAME_SAW_WHITE:U++,ATTRIB_VALUE:U++,ATTRIB_VALUE_QUOTED:U++,ATTRIB_VALUE_CLOSED:U++,ATTRIB_VALUE_UNQUOTED:U++,ATTRIB_VALUE_ENTITY_Q:U++,ATTRIB_VALUE_ENTITY_U:U++,CLOSE_TAG:U++,CLOSE_TAG_SAW_WHITE:U++,SCRIPT:U++,SCRIPT_ENDING:U++},c.XML_ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'"},c.ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,"int":8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},Object.keys(c.ENTITIES).forEach(function(a){var b=c.ENTITIES[a],d="number"==typeof b?String.fromCharCode(b):b;c.ENTITIES[a]=d});for(var V in c.STATE)c.STATE[c.STATE[V]]=V;U=c.STATE,String.fromCodePoint||!function(){var a=String.fromCharCode,b=Math.floor,c=function(){var c,d,e=16384,f=[],g=-1,h=arguments.length;if(!h)return"";for(var i="";++g<h;){var j=Number(arguments[g]);if(!isFinite(j)||0>j||j>1114111||b(j)!==j)throw RangeError("Invalid code point: "+j);65535>=j?f.push(j):(j-=65536,c=(j>>10)+55296,d=j%1024+56320,f.push(c,d)),(g+1===h||f.length>e)&&(i+=a.apply(null,f),f.length=0)}return i};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:c,configurable:!0,writable:!0}):String.fromCodePoint=c}()}("undefined"==typeof c?this.sax={}:c)}).call(this,a("buffer").Buffer)},{buffer:26,stream:46,string_decoder:47}],56:[function(a,b,c){(function(){var c,d;d=a("lodash/create"),b.exports=c=function(){function a(a,b,c){if(this.stringify=a.stringify,null==b)throw new Error("Missing attribute name of element "+a.name);if(null==c)throw new Error("Missing attribute value for attribute "+b+" of element "+a.name);this.name=this.stringify.attName(b),this.value=this.stringify.attValue(c)}return a.prototype.clone=function(){return d(a.prototype,this)},a.prototype.toString=function(a,b){return" "+this.name+'="'+this.value+'"'},a}()}).call(this)},{"lodash/create":74}],57:[function(a,b,c){(function(){var c,d,e,f,g;g=a("./XMLStringifier"),d=a("./XMLDeclaration"),e=a("./XMLDocType"),f=a("./XMLElement"),b.exports=c=function(){function a(a,b){var c,d;if(null==a)throw new Error("Root element needs a name");null==b&&(b={}),this.options=b,this.stringify=new g(b),d=new f(this,"doc"),c=d.element(a),c.isRoot=!0,c.documentObject=this,this.rootObject=c,b.headless||(c.declaration(b),(null!=b.pubID||null!=b.sysID)&&c.doctype(b))}return a.prototype.root=function(){return this.rootObject},a.prototype.end=function(a){return this.toString(a)},a.prototype.toString=function(a){var b,c,d,e,f,g,h,i;return e=(null!=a?a.pretty:void 0)||!1,b=null!=(g=null!=a?a.indent:void 0)?g:"  ",d=null!=(h=null!=a?a.offset:void 0)?h:0,c=null!=(i=null!=a?a.newline:void 0)?i:"\n",f="",null!=this.xmldec&&(f+=this.xmldec.toString(a)),null!=this.doctype&&(f+=this.doctype.toString(a)),f+=this.rootObject.toString(a),e&&f.slice(-c.length)===c&&(f=f.slice(0,-c.length)),f},a}()}).call(this)},{"./XMLDeclaration":64,"./XMLDocType":65,"./XMLElement":66,"./XMLStringifier":70}],58:[function(a,b,c){(function(){var c,d,e,f=function(a,b){function c(){this.constructor=a}for(var d in b)g.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},g={}.hasOwnProperty;e=a("lodash/create"),d=a("./XMLNode"),b.exports=c=function(a){function b(a,c){if(b.__super__.constructor.call(this,a),null==c)throw new Error("Missing CDATA text");this.text=this.stringify.cdata(c)}return f(b,a),b.prototype.clone=function(){return e(b.prototype,this)},b.prototype.toString=function(a,b){var c,d,e,f,g,h,i,j,k;return f=(null!=a?a.pretty:void 0)||!1,c=null!=(h=null!=a?a.indent:void 0)?h:"  ",e=null!=(i=null!=a?a.offset:void 0)?i:0,d=null!=(j=null!=a?a.newline:void 0)?j:"\n",b||(b=0),k=new Array(b+e+1).join(c),g="",f&&(g+=k),g+="<![CDATA["+this.text+"]]>",f&&(g+=d),g},b}(d)}).call(this)},{"./XMLNode":67,"lodash/create":74}],59:[function(a,b,c){(function(){var c,d,e,f=function(a,b){function c(){this.constructor=a}for(var d in b)g.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},g={}.hasOwnProperty;e=a("lodash/create"),d=a("./XMLNode"),b.exports=c=function(a){function b(a,c){if(b.__super__.constructor.call(this,a),null==c)throw new Error("Missing comment text");this.text=this.stringify.comment(c)}return f(b,a),b.prototype.clone=function(){return e(b.prototype,this)},b.prototype.toString=function(a,b){var c,d,e,f,g,h,i,j,k;return f=(null!=a?a.pretty:void 0)||!1,c=null!=(h=null!=a?a.indent:void 0)?h:"  ",e=null!=(i=null!=a?a.offset:void 0)?i:0,d=null!=(j=null!=a?a.newline:void 0)?j:"\n",b||(b=0),k=new Array(b+e+1).join(c),g="",f&&(g+=k),g+="<!-- "+this.text+" -->",f&&(g+=d),g},b}(d)}).call(this)},{"./XMLNode":67,"lodash/create":74}],60:[function(a,b,c){(function(){var c,d;d=a("lodash/create"),b.exports=c=function(){function a(a,b,c,d,e,f){if(this.stringify=a.stringify,null==b)throw new Error("Missing DTD element name");if(null==c)throw new Error("Missing DTD attribute name");if(!d)throw new Error("Missing DTD attribute type");if(!e)throw new Error("Missing DTD attribute default");if(0!==e.indexOf("#")&&(e="#"+e),!e.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/))throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT");if(f&&!e.match(/^(#FIXED|#DEFAULT)$/))throw new Error("Default value only applies to #FIXED or #DEFAULT");this.elementName=this.stringify.eleName(b),this.attributeName=this.stringify.attName(c),this.attributeType=this.stringify.dtdAttType(d),this.defaultValue=this.stringify.dtdAttDefault(f),this.defaultValueType=e}return a.prototype.toString=function(a,b){var c,d,e,f,g,h,i,j,k;return f=(null!=a?a.pretty:void 0)||!1,c=null!=(h=null!=a?a.indent:void 0)?h:"  ",e=null!=(i=null!=a?a.offset:void 0)?i:0,d=null!=(j=null!=a?a.newline:void 0)?j:"\n",b||(b=0),k=new Array(b+e+1).join(c),g="",f&&(g+=k),g+="<!ATTLIST "+this.elementName+" "+this.attributeName+" "+this.attributeType,"#DEFAULT"!==this.defaultValueType&&(g+=" "+this.defaultValueType),this.defaultValue&&(g+=' "'+this.defaultValue+'"'),g+=">",f&&(g+=d),g},a}()}).call(this)},{"lodash/create":74}],61:[function(a,b,c){(function(){var c,d;d=a("lodash/create"),b.exports=c=function(){function a(a,b,c){if(this.stringify=a.stringify,null==b)throw new Error("Missing DTD element name");c||(c="(#PCDATA)"),Array.isArray(c)&&(c="("+c.join(",")+")"),this.name=this.stringify.eleName(b),this.value=this.stringify.dtdElementValue(c)}return a.prototype.toString=function(a,b){var c,d,e,f,g,h,i,j,k;return f=(null!=a?a.pretty:void 0)||!1,c=null!=(h=null!=a?a.indent:void 0)?h:"  ",e=null!=(i=null!=a?a.offset:void 0)?i:0,d=null!=(j=null!=a?a.newline:void 0)?j:"\n",b||(b=0),k=new Array(b+e+1).join(c),g="",f&&(g+=k),g+="<!ELEMENT "+this.name+" "+this.value+">",f&&(g+=d),g},a}()}).call(this)},{"lodash/create":74}],62:[function(a,b,c){(function(){var c,d,e;d=a("lodash/create"),e=a("lodash/isObject"),b.exports=c=function(){function a(a,b,c,d){if(this.stringify=a.stringify,null==c)throw new Error("Missing entity name");if(null==d)throw new Error("Missing entity value");if(this.pe=!!b,this.name=this.stringify.eleName(c),e(d)){if(!d.pubID&&!d.sysID)throw new Error("Public and/or system identifiers are required for an external entity");if(d.pubID&&!d.sysID)throw new Error("System identifier is required for a public external entity");if(null!=d.pubID&&(this.pubID=this.stringify.dtdPubID(d.pubID)),null!=d.sysID&&(this.sysID=this.stringify.dtdSysID(d.sysID)),null!=d.nData&&(this.nData=this.stringify.dtdNData(d.nData)),this.pe&&this.nData)throw new Error("Notation declaration is not allowed in a parameter entity")}else this.value=this.stringify.dtdEntityValue(d)}return a.prototype.toString=function(a,b){var c,d,e,f,g,h,i,j,k;return f=(null!=a?a.pretty:void 0)||!1,c=null!=(h=null!=a?a.indent:void 0)?h:"  ",e=null!=(i=null!=a?a.offset:void 0)?i:0,d=null!=(j=null!=a?a.newline:void 0)?j:"\n",b||(b=0),k=new Array(b+e+1).join(c),g="",f&&(g+=k),g+="<!ENTITY",this.pe&&(g+=" %"),g+=" "+this.name,this.value?g+=' "'+this.value+'"':(this.pubID&&this.sysID?g+=' PUBLIC "'+this.pubID+'" "'+this.sysID+'"':this.sysID&&(g+=' SYSTEM "'+this.sysID+'"'),this.nData&&(g+=" NDATA "+this.nData)),g+=">",f&&(g+=d),g},a}()}).call(this)},{"lodash/create":74,"lodash/isObject":168}],63:[function(a,b,c){(function(){var c,d;d=a("lodash/create"),b.exports=c=function(){function a(a,b,c){if(this.stringify=a.stringify,null==b)throw new Error("Missing notation name");if(!c.pubID&&!c.sysID)throw new Error("Public or system identifiers are required for an external entity");this.name=this.stringify.eleName(b),null!=c.pubID&&(this.pubID=this.stringify.dtdPubID(c.pubID)),null!=c.sysID&&(this.sysID=this.stringify.dtdSysID(c.sysID))}return a.prototype.toString=function(a,b){var c,d,e,f,g,h,i,j,k;return f=(null!=a?a.pretty:void 0)||!1,c=null!=(h=null!=a?a.indent:void 0)?h:"  ",e=null!=(i=null!=a?a.offset:void 0)?i:0,d=null!=(j=null!=a?a.newline:void 0)?j:"\n",b||(b=0),k=new Array(b+e+1).join(c),g="",f&&(g+=k),g+="<!NOTATION "+this.name,this.pubID&&this.sysID?g+=' PUBLIC "'+this.pubID+'" "'+this.sysID+'"':this.pubID?g+=' PUBLIC "'+this.pubID+'"':this.sysID&&(g+=' SYSTEM "'+this.sysID+'"'),g+=">",f&&(g+=d),g},a}()}).call(this)},{"lodash/create":74}],64:[function(a,b,c){(function(){var c,d,e,f,g=function(a,b){function c(){this.constructor=a}for(var d in b)h.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},h={}.hasOwnProperty;e=a("lodash/create"),f=a("lodash/isObject"),d=a("./XMLNode"),b.exports=c=function(a){function b(a,c,d,e){var g;b.__super__.constructor.call(this,a),f(c)&&(g=c,c=g.version,d=g.encoding,e=g.standalone),c||(c="1.0"),this.version=this.stringify.xmlVersion(c),null!=d&&(this.encoding=this.stringify.xmlEncoding(d)),null!=e&&(this.standalone=this.stringify.xmlStandalone(e))}return g(b,a),b.prototype.toString=function(a,b){var c,d,e,f,g,h,i,j,k;return f=(null!=a?a.pretty:void 0)||!1,c=null!=(h=null!=a?a.indent:void 0)?h:"  ",e=null!=(i=null!=a?a.offset:void 0)?i:0,d=null!=(j=null!=a?a.newline:void 0)?j:"\n",b||(b=0),k=new Array(b+e+1).join(c),g="",f&&(g+=k),g+="<?xml",g+=' version="'+this.version+'"',null!=this.encoding&&(g+=' encoding="'+this.encoding+'"'),null!=this.standalone&&(g+=' standalone="'+this.standalone+'"'),g+="?>",f&&(g+=d),g},b}(d)}).call(this)},{"./XMLNode":67,"lodash/create":74,"lodash/isObject":168}],65:[function(a,b,c){(function(){var c,d,e,f,g,h,i,j,k,l;k=a("lodash/create"),l=a("lodash/isObject"),c=a("./XMLCData"),d=a("./XMLComment"),e=a("./XMLDTDAttList"),g=a("./XMLDTDEntity"),f=a("./XMLDTDElement"),h=a("./XMLDTDNotation"),j=a("./XMLProcessingInstruction"),b.exports=i=function(){function a(a,b,c){var d,e;this.documentObject=a,this.stringify=this.documentObject.stringify,this.children=[],l(b)&&(d=b,b=d.pubID,c=d.sysID),null==c&&(e=[b,c],c=e[0],b=e[1]),null!=b&&(this.pubID=this.stringify.dtdPubID(b)),null!=c&&(this.sysID=this.stringify.dtdSysID(c))}return a.prototype.element=function(a,b){var c;return c=new f(this,a,b),this.children.push(c),this},a.prototype.attList=function(a,b,c,d,f){var g;return g=new e(this,a,b,c,d,f),this.children.push(g),this},a.prototype.entity=function(a,b){var c;return c=new g(this,!1,a,b),this.children.push(c),this},a.prototype.pEntity=function(a,b){var c;return c=new g(this,!0,a,b),this.children.push(c),this},a.prototype.notation=function(a,b){var c;return c=new h(this,a,b),this.children.push(c),this},a.prototype.cdata=function(a){var b;return b=new c(this,a),this.children.push(b),this},a.prototype.comment=function(a){var b;return b=new d(this,a),this.children.push(b),this},a.prototype.instruction=function(a,b){var c;return c=new j(this,a,b),this.children.push(c),this},a.prototype.root=function(){return this.documentObject.root()},a.prototype.document=function(){return this.documentObject},a.prototype.toString=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;if(i=(null!=a?a.pretty:void 0)||!1,e=null!=(k=null!=a?a.indent:void 0)?k:"  ",h=null!=(l=null!=a?a.offset:void 0)?l:0,g=null!=(m=null!=a?a.newline:void 0)?m:"\n",b||(b=0),o=new Array(b+h+1).join(e),j="",i&&(j+=o),j+="<!DOCTYPE "+this.root().name,this.pubID&&this.sysID?j+=' PUBLIC "'+this.pubID+'" "'+this.sysID+'"':this.sysID&&(j+=' SYSTEM "'+this.sysID+'"'),this.children.length>0){for(j+=" [",i&&(j+=g),n=this.children,d=0,f=n.length;f>d;d++)c=n[d],j+=c.toString(a,b+1);j+="]"}return j+=">",i&&(j+=g),j},a.prototype.ele=function(a,b){return this.element(a,b)},a.prototype.att=function(a,b,c,d,e){return this.attList(a,b,c,d,e)},a.prototype.ent=function(a,b){return this.entity(a,b)},a.prototype.pent=function(a,b){return this.pEntity(a,b)},a.prototype.not=function(a,b){return this.notation(a,b)},a.prototype.dat=function(a){return this.cdata(a)},a.prototype.com=function(a){return this.comment(a)},a.prototype.ins=function(a,b){return this.instruction(a,b)},a.prototype.up=function(){return this.root()},a.prototype.doc=function(){return this.document()},a}()}).call(this)},{"./XMLCData":58,"./XMLComment":59,"./XMLDTDAttList":60,"./XMLDTDElement":61,"./XMLDTDEntity":62,"./XMLDTDNotation":63,"./XMLProcessingInstruction":68,"lodash/create":74,"lodash/isObject":168}],66:[function(a,b,c){(function(){var c,d,e,f,g,h,i,j,k=function(a,b){function c(){this.constructor=a}for(var d in b)l.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},l={}.hasOwnProperty;g=a("lodash/create"),j=a("lodash/isObject"),i=a("lodash/isFunction"),h=a("lodash/every"),e=a("./XMLNode"),c=a("./XMLAttribute"),f=a("./XMLProcessingInstruction"),b.exports=d=function(a){function b(a,c,d){if(b.__super__.constructor.call(this,a),null==c)throw new Error("Missing element name");this.name=this.stringify.eleName(c),this.children=[],this.instructions=[],this.attributes={},null!=d&&this.attribute(d)}return k(b,a),b.prototype.clone=function(){var a,c,d,e,f,h,i,j;d=g(b.prototype,this),d.isRoot&&(d.documentObject=null),d.attributes={},i=this.attributes;for(c in i)l.call(i,c)&&(a=i[c],d.attributes[c]=a.clone());for(d.instructions=[],j=this.instructions,e=0,f=j.length;f>e;e++)h=j[e],d.instructions.push(h.clone());return d.children=[],this.children.forEach(function(a){var b;return b=a.clone(),b.parent=d,d.children.push(b)}),d},b.prototype.attribute=function(a,b){var d,e;if(null!=a&&(a=a.valueOf()),j(a))for(d in a)l.call(a,d)&&(e=a[d],this.attribute(d,e));else i(b)&&(b=b.apply()),this.options.skipNullAttributes&&null==b||(this.attributes[a]=new c(this,a,b));return this},b.prototype.removeAttribute=function(a){var b,c,d;if(null==a)throw new Error("Missing attribute name");if(a=a.valueOf(),Array.isArray(a))for(c=0,d=a.length;d>c;c++)b=a[c],delete this.attributes[b];else delete this.attributes[a];return this},b.prototype.instruction=function(a,b){var c,d,e,g,h;if(null!=a&&(a=a.valueOf()),null!=b&&(b=b.valueOf()),Array.isArray(a))for(c=0,h=a.length;h>c;c++)d=a[c],this.instruction(d);else if(j(a))for(d in a)l.call(a,d)&&(e=a[d],this.instruction(d,e));else i(b)&&(b=b.apply()),g=new f(this,a,b),this.instructions.push(g);return this},b.prototype.toString=function(a,b){var c,d,e,f,g,i,j,k,m,n,o,p,q,r,s,t,u,v,w,x;for(p=(null!=a?a.pretty:void 0)||!1,f=null!=(r=null!=a?a.indent:void 0)?r:"  ",o=null!=(s=null!=a?a.offset:void 0)?s:0,n=null!=(t=null!=a?a.newline:void 0)?t:"\n",b||(b=0),x=new Array(b+o+1).join(f),q="",u=this.instructions,e=0,j=u.length;j>e;e++)g=u[e],q+=g.toString(a,b);p&&(q+=x),q+="<"+this.name,v=this.attributes;for(m in v)l.call(v,m)&&(c=v[m],q+=c.toString(a));if(0===this.children.length||h(this.children,function(a){return""===a.value}))q+="/>",p&&(q+=n);else if(p&&1===this.children.length&&null!=this.children[0].value)q+=">",q+=this.children[0].value,q+="</"+this.name+">",q+=n;else{for(q+=">",p&&(q+=n),w=this.children,i=0,k=w.length;k>i;i++)d=w[i],q+=d.toString(a,b+1);p&&(q+=x),q+="</"+this.name+">",p&&(q+=n)}return q},b.prototype.att=function(a,b){return this.attribute(a,b)},b.prototype.ins=function(a,b){return this.instruction(a,b)},b.prototype.a=function(a,b){
return this.attribute(a,b)},b.prototype.i=function(a,b){return this.instruction(a,b)},b}(e)}).call(this)},{"./XMLAttribute":56,"./XMLNode":67,"./XMLProcessingInstruction":68,"lodash/create":74,"lodash/every":76,"lodash/isFunction":165,"lodash/isObject":168}],67:[function(a,b,c){(function(){var c,d,e,f,g,h,i,j,k,l,m,n={}.hasOwnProperty;m=a("lodash/isObject"),l=a("lodash/isFunction"),k=a("lodash/isEmpty"),g=null,c=null,d=null,e=null,f=null,i=null,j=null,b.exports=h=function(){function b(b){this.parent=b,this.options=this.parent.options,this.stringify=this.parent.stringify,null===g&&(g=a("./XMLElement"),c=a("./XMLCData"),d=a("./XMLComment"),e=a("./XMLDeclaration"),f=a("./XMLDocType"),i=a("./XMLRaw"),j=a("./XMLText"))}return b.prototype.element=function(a,b,c){var d,e,f,g,h,i,j,o,p,q;if(i=null,null==b&&(b={}),b=b.valueOf(),m(b)||(p=[b,c],c=p[0],b=p[1]),null!=a&&(a=a.valueOf()),Array.isArray(a))for(f=0,j=a.length;j>f;f++)e=a[f],i=this.element(e);else if(l(a))i=this.element(a.apply());else if(m(a)){for(h in a)if(n.call(a,h))if(q=a[h],l(q)&&(q=q.apply()),m(q)&&k(q)&&(q=null),!this.options.ignoreDecorators&&this.stringify.convertAttKey&&0===h.indexOf(this.stringify.convertAttKey))i=this.attribute(h.substr(this.stringify.convertAttKey.length),q);else if(!this.options.ignoreDecorators&&this.stringify.convertPIKey&&0===h.indexOf(this.stringify.convertPIKey))i=this.instruction(h.substr(this.stringify.convertPIKey.length),q);else if(!this.options.separateArrayItems&&Array.isArray(q))for(g=0,o=q.length;o>g;g++)e=q[g],d={},d[h]=e,i=this.element(d);else m(q)?(i=this.element(h),i.element(q)):i=this.element(h,q)}else i=!this.options.ignoreDecorators&&this.stringify.convertTextKey&&0===a.indexOf(this.stringify.convertTextKey)?this.text(c):!this.options.ignoreDecorators&&this.stringify.convertCDataKey&&0===a.indexOf(this.stringify.convertCDataKey)?this.cdata(c):!this.options.ignoreDecorators&&this.stringify.convertCommentKey&&0===a.indexOf(this.stringify.convertCommentKey)?this.comment(c):!this.options.ignoreDecorators&&this.stringify.convertRawKey&&0===a.indexOf(this.stringify.convertRawKey)?this.raw(c):this.node(a,b,c);if(null==i)throw new Error("Could not create any elements with: "+a);return i},b.prototype.insertBefore=function(a,b,c){var d,e,f;if(this.isRoot)throw new Error("Cannot insert elements at root level");return e=this.parent.children.indexOf(this),f=this.parent.children.splice(e),d=this.parent.element(a,b,c),Array.prototype.push.apply(this.parent.children,f),d},b.prototype.insertAfter=function(a,b,c){var d,e,f;if(this.isRoot)throw new Error("Cannot insert elements at root level");return e=this.parent.children.indexOf(this),f=this.parent.children.splice(e+1),d=this.parent.element(a,b,c),Array.prototype.push.apply(this.parent.children,f),d},b.prototype.remove=function(){var a,b;if(this.isRoot)throw new Error("Cannot remove the root element");return a=this.parent.children.indexOf(this),[].splice.apply(this.parent.children,[a,a-a+1].concat(b=[])),b,this.parent},b.prototype.node=function(a,b,c){var d,e;return null!=a&&(a=a.valueOf()),null==b&&(b={}),b=b.valueOf(),m(b)||(e=[b,c],c=e[0],b=e[1]),d=new g(this,a,b),null!=c&&d.text(c),this.children.push(d),d},b.prototype.text=function(a){var b;return b=new j(this,a),this.children.push(b),this},b.prototype.cdata=function(a){var b;return b=new c(this,a),this.children.push(b),this},b.prototype.comment=function(a){var b;return b=new d(this,a),this.children.push(b),this},b.prototype.raw=function(a){var b;return b=new i(this,a),this.children.push(b),this},b.prototype.declaration=function(a,b,c){var d,f;return d=this.document(),f=new e(d,a,b,c),d.xmldec=f,d.root()},b.prototype.doctype=function(a,b){var c,d;return c=this.document(),d=new f(c,a,b),c.doctype=d,d},b.prototype.up=function(){if(this.isRoot)throw new Error("The root node has no parent. Use doc() if you need to get the document object.");return this.parent},b.prototype.root=function(){var a;if(this.isRoot)return this;for(a=this.parent;!a.isRoot;)a=a.parent;return a},b.prototype.document=function(){return this.root().documentObject},b.prototype.end=function(a){return this.document().toString(a)},b.prototype.prev=function(){var a;if(this.isRoot)throw new Error("Root node has no siblings");if(a=this.parent.children.indexOf(this),1>a)throw new Error("Already at the first node");return this.parent.children[a-1]},b.prototype.next=function(){var a;if(this.isRoot)throw new Error("Root node has no siblings");if(a=this.parent.children.indexOf(this),-1===a||a===this.parent.children.length-1)throw new Error("Already at the last node");return this.parent.children[a+1]},b.prototype.importXMLBuilder=function(a){var b;return b=a.root().clone(),b.parent=this,b.isRoot=!1,this.children.push(b),this},b.prototype.ele=function(a,b,c){return this.element(a,b,c)},b.prototype.nod=function(a,b,c){return this.node(a,b,c)},b.prototype.txt=function(a){return this.text(a)},b.prototype.dat=function(a){return this.cdata(a)},b.prototype.com=function(a){return this.comment(a)},b.prototype.doc=function(){return this.document()},b.prototype.dec=function(a,b,c){return this.declaration(a,b,c)},b.prototype.dtd=function(a,b){return this.doctype(a,b)},b.prototype.e=function(a,b,c){return this.element(a,b,c)},b.prototype.n=function(a,b,c){return this.node(a,b,c)},b.prototype.t=function(a){return this.text(a)},b.prototype.d=function(a){return this.cdata(a)},b.prototype.c=function(a){return this.comment(a)},b.prototype.r=function(a){return this.raw(a)},b.prototype.u=function(){return this.up()},b}()}).call(this)},{"./XMLCData":58,"./XMLComment":59,"./XMLDeclaration":64,"./XMLDocType":65,"./XMLElement":66,"./XMLRaw":69,"./XMLText":71,"lodash/isEmpty":164,"lodash/isFunction":165,"lodash/isObject":168}],68:[function(a,b,c){(function(){var c,d;d=a("lodash/create"),b.exports=c=function(){function a(a,b,c){if(this.stringify=a.stringify,null==b)throw new Error("Missing instruction target");this.target=this.stringify.insTarget(b),c&&(this.value=this.stringify.insValue(c))}return a.prototype.clone=function(){return d(a.prototype,this)},a.prototype.toString=function(a,b){var c,d,e,f,g,h,i,j,k;return f=(null!=a?a.pretty:void 0)||!1,c=null!=(h=null!=a?a.indent:void 0)?h:"  ",e=null!=(i=null!=a?a.offset:void 0)?i:0,d=null!=(j=null!=a?a.newline:void 0)?j:"\n",b||(b=0),k=new Array(b+e+1).join(c),g="",f&&(g+=k),g+="<?",g+=this.target,this.value&&(g+=" "+this.value),g+="?>",f&&(g+=d),g},a}()}).call(this)},{"lodash/create":74}],69:[function(a,b,c){(function(){var c,d,e,f=function(a,b){function c(){this.constructor=a}for(var d in b)g.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},g={}.hasOwnProperty;e=a("lodash/create"),c=a("./XMLNode"),b.exports=d=function(a){function b(a,c){if(b.__super__.constructor.call(this,a),null==c)throw new Error("Missing raw text");this.value=this.stringify.raw(c)}return f(b,a),b.prototype.clone=function(){return e(b.prototype,this)},b.prototype.toString=function(a,b){var c,d,e,f,g,h,i,j,k;return f=(null!=a?a.pretty:void 0)||!1,c=null!=(h=null!=a?a.indent:void 0)?h:"  ",e=null!=(i=null!=a?a.offset:void 0)?i:0,d=null!=(j=null!=a?a.newline:void 0)?j:"\n",b||(b=0),k=new Array(b+e+1).join(c),g="",f&&(g+=k),g+=this.value,f&&(g+=d),g},b}(c)}).call(this)},{"./XMLNode":67,"lodash/create":74}],70:[function(a,b,c){(function(){var a,c=function(a,b){return function(){return a.apply(b,arguments)}},d={}.hasOwnProperty;b.exports=a=function(){function a(a){this.assertLegalChar=c(this.assertLegalChar,this);var b,e,f;this.allowSurrogateChars=null!=a?a.allowSurrogateChars:void 0,this.noDoubleEncoding=null!=a?a.noDoubleEncoding:void 0,e=(null!=a?a.stringify:void 0)||{};for(b in e)d.call(e,b)&&(f=e[b],this[b]=f)}return a.prototype.eleName=function(a){return a=""+a||"",this.assertLegalChar(a)},a.prototype.eleText=function(a){return a=""+a||"",this.assertLegalChar(this.elEscape(a))},a.prototype.cdata=function(a){if(a=""+a||"",a.match(/]]>/))throw new Error("Invalid CDATA text: "+a);return this.assertLegalChar(a)},a.prototype.comment=function(a){if(a=""+a||"",a.match(/--/))throw new Error("Comment text cannot contain double-hypen: "+a);return this.assertLegalChar(a)},a.prototype.raw=function(a){return""+a||""},a.prototype.attName=function(a){return""+a||""},a.prototype.attValue=function(a){return a=""+a||"",this.attEscape(a)},a.prototype.insTarget=function(a){return""+a||""},a.prototype.insValue=function(a){if(a=""+a||"",a.match(/\?>/))throw new Error("Invalid processing instruction value: "+a);return a},a.prototype.xmlVersion=function(a){if(a=""+a||"",!a.match(/1\.[0-9]+/))throw new Error("Invalid version number: "+a);return a},a.prototype.xmlEncoding=function(a){if(a=""+a||"",!a.match(/^[A-Za-z](?:[A-Za-z0-9._-]|-)*$/))throw new Error("Invalid encoding: "+a);return a},a.prototype.xmlStandalone=function(a){return a?"yes":"no"},a.prototype.dtdPubID=function(a){return""+a||""},a.prototype.dtdSysID=function(a){return""+a||""},a.prototype.dtdElementValue=function(a){return""+a||""},a.prototype.dtdAttType=function(a){return""+a||""},a.prototype.dtdAttDefault=function(a){return null!=a?""+a||"":a},a.prototype.dtdEntityValue=function(a){return""+a||""},a.prototype.dtdNData=function(a){return""+a||""},a.prototype.convertAttKey="@",a.prototype.convertPIKey="?",a.prototype.convertTextKey="#text",a.prototype.convertCDataKey="#cdata",a.prototype.convertCommentKey="#comment",a.prototype.convertRawKey="#raw",a.prototype.assertLegalChar=function(a){var b,c;if(b=this.allowSurrogateChars?/[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uFFFE-\uFFFF]/:/[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uD800-\uDFFF\uFFFE-\uFFFF]/,c=a.match(b))throw new Error("Invalid character ("+c+") in string: "+a+" at index "+c.index);return a},a.prototype.elEscape=function(a){var b;return b=this.noDoubleEncoding?/(?!&\S+;)&/g:/&/g,a.replace(b,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r/g,"&#xD;")},a.prototype.attEscape=function(a){var b;return b=this.noDoubleEncoding?/(?!&\S+;)&/g:/&/g,a.replace(b,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")},a}()}).call(this)},{}],71:[function(a,b,c){(function(){var c,d,e,f=function(a,b){function c(){this.constructor=a}for(var d in b)g.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},g={}.hasOwnProperty;e=a("lodash/create"),c=a("./XMLNode"),b.exports=d=function(a){function b(a,c){if(b.__super__.constructor.call(this,a),null==c)throw new Error("Missing element text");this.value=this.stringify.eleText(c)}return f(b,a),b.prototype.clone=function(){return e(b.prototype,this)},b.prototype.toString=function(a,b){var c,d,e,f,g,h,i,j,k;return f=(null!=a?a.pretty:void 0)||!1,c=null!=(h=null!=a?a.indent:void 0)?h:"  ",e=null!=(i=null!=a?a.offset:void 0)?i:0,d=null!=(j=null!=a?a.newline:void 0)?j:"\n",b||(b=0),k=new Array(b+e+1).join(c),g="",f&&(g+=k),g+=this.value,f&&(g+=d),g},b}(c)}).call(this)},{"./XMLNode":67,"lodash/create":74}],72:[function(a,b,c){(function(){var c,d;d=a("lodash/assign"),c=a("./XMLBuilder"),b.exports.create=function(a,b,e,f){return f=d({},b,e,f),new c(a,f).root()}}).call(this)},{"./XMLBuilder":57,"lodash/assign":73}],73:[function(a,b,c){var d=a("./internal/copyObject"),e=a("./internal/createAssigner"),f=a("./keys"),g=e(function(a,b){d(b,f(b),a)});b.exports=g},{"./internal/copyObject":119,"./internal/createAssigner":121,"./keys":173}],74:[function(a,b,c){function d(a,b){var c=f(a);return b?e(c,b):c}var e=a("./internal/baseAssign"),f=a("./internal/baseCreate");b.exports=d},{"./internal/baseAssign":97,"./internal/baseCreate":98}],75:[function(a,b,c){function d(a,b){return a===b||a!==a&&b!==b}b.exports=d},{}],76:[function(a,b,c){function d(a,b,c){var d=h(a)?e:f;return c&&i(a,b,c)&&(b=void 0),d(a,g(b,3))}var e=a("./internal/arrayEvery"),f=a("./internal/baseEvery"),g=a("./internal/baseIteratee"),h=a("./isArray"),i=a("./internal/isIterateeCall");b.exports=d},{"./internal/arrayEvery":88,"./internal/baseEvery":100,"./internal/baseIteratee":109,"./internal/isIterateeCall":139,"./isArray":161}],77:[function(a,b,c){function d(a,b,c){var d=null==a?void 0:e(a,b);return void 0===d?c:d}var e=a("./internal/baseGet");b.exports=d},{"./internal/baseGet":103}],78:[function(a,b,c){function d(a,b){return f(a,b,e)}var e=a("./internal/baseHasIn"),f=a("./internal/hasPath");b.exports=d},{"./internal/baseHasIn":105,"./internal/hasPath":131}],79:[function(a,b,c){function d(a){return a}b.exports=d},{}],80:[function(a,b,c){(function(c){function d(){}var e=a("./nativeCreate"),f=c.Object.prototype;d.prototype=e?e(null):f,b.exports=d}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./nativeCreate":150}],81:[function(a,b,c){(function(c){var d=a("./getNative"),e=d(c,"Map");b.exports=e}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./getNative":129}],82:[function(a,b,c){function d(a){var b=-1,c=a?a.length:0;for(this.clear();++b<c;){var d=a[b];this.set(d[0],d[1])}}var e=a("./mapClear"),f=a("./mapDelete"),g=a("./mapGet"),h=a("./mapHas"),i=a("./mapSet");d.prototype.clear=e,d.prototype["delete"]=f,d.prototype.get=g,d.prototype.has=h,d.prototype.set=i,b.exports=d},{"./mapClear":144,"./mapDelete":145,"./mapGet":146,"./mapHas":147,"./mapSet":148}],83:[function(a,b,c){(function(c){var d=a("./getNative"),e=d(c,"Set");b.exports=e}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./getNative":129}],84:[function(a,b,c){function d(a){var b=-1,c=a?a.length:0;for(this.clear();++b<c;){var d=a[b];this.set(d[0],d[1])}}var e=a("./stackClear"),f=a("./stackDelete"),g=a("./stackGet"),h=a("./stackHas"),i=a("./stackSet");d.prototype.clear=e,d.prototype["delete"]=f,d.prototype.get=g,d.prototype.has=h,d.prototype.set=i,b.exports=d},{"./stackClear":153,"./stackDelete":154,"./stackGet":155,"./stackHas":156,"./stackSet":157}],85:[function(a,b,c){(function(a){var c=a.Symbol;b.exports=c}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],86:[function(a,b,c){(function(a){var c=a.Uint8Array;b.exports=c}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],87:[function(a,b,c){function d(a,b,c){var d=c?c.length:0;switch(d){case 0:return a.call(b);case 1:return a.call(b,c[0]);case 2:return a.call(b,c[0],c[1]);case 3:return a.call(b,c[0],c[1],c[2])}return a.apply(b,c)}b.exports=d},{}],88:[function(a,b,c){function d(a,b){for(var c=-1,d=a.length;++c<d;)if(!b(a[c],c,a))return!1;return!0}b.exports=d},{}],89:[function(a,b,c){function d(a,b){for(var c=-1,d=a.length,e=Array(d);++c<d;)e[c]=b(a[c],c,a);return e}b.exports=d},{}],90:[function(a,b,c){function d(a,b){for(var c=-1,d=a.length;++c<d;)if(b(a[c],c,a))return!0;return!1}b.exports=d},{}],91:[function(a,b,c){(function(c){function d(a,b,c){var d=a[b];(!e(d,c)||e(d,f[b])&&!g.call(a,b)||void 0===c&&!(b in a))&&(a[b]=c)}var e=a("../eq"),f=c.Object.prototype,g=f.hasOwnProperty;b.exports=d}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../eq":75}],92:[function(a,b,c){(function(c){function d(a,b){var c=e(a,b);if(0>c)return!1;var d=a.length-1;return c==d?a.pop():g.call(a,c,1),!0}var e=a("./assocIndexOf"),f=c.Array.prototype,g=f.splice;b.exports=d}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./assocIndexOf":95}],93:[function(a,b,c){function d(a,b){var c=e(a,b);return 0>c?void 0:a[c][1]}var e=a("./assocIndexOf");b.exports=d},{"./assocIndexOf":95}],94:[function(a,b,c){function d(a,b){return e(a,b)>-1}var e=a("./assocIndexOf");b.exports=d},{"./assocIndexOf":95}],95:[function(a,b,c){function d(a,b){for(var c=a.length;c--;)if(e(a[c][0],b))return c;return-1}var e=a("../eq");b.exports=d},{"../eq":75}],96:[function(a,b,c){function d(a,b,c){var d=e(a,b);0>d?a.push([b,c]):a[d][1]=c}var e=a("./assocIndexOf");b.exports=d},{"./assocIndexOf":95}],97:[function(a,b,c){function d(a,b){return a&&e(b,f(b),a)}var e=a("./copyObject"),f=a("../keys");b.exports=d},{"../keys":173,"./copyObject":119}],98:[function(a,b,c){var d=a("../isObject"),e=function(){function a(){}return function(b){if(d(b)){a.prototype=b;var c=new a;a.prototype=void 0}return c||{}}}();b.exports=e},{"../isObject":168}],99:[function(a,b,c){var d=a("./baseForOwn"),e=a("./createBaseEach"),f=e(d);b.exports=f},{"./baseForOwn":102,"./createBaseEach":122}],100:[function(a,b,c){function d(a,b){var c=!0;return e(a,function(a,d,e){return c=!!b(a,d,e)}),c}var e=a("./baseEach");b.exports=d},{"./baseEach":99}],101:[function(a,b,c){var d=a("./createBaseFor"),e=d();b.exports=e},{"./createBaseFor":123}],102:[function(a,b,c){function d(a,b){return a&&e(a,b,f)}var e=a("./baseFor"),f=a("../keys");b.exports=d},{"../keys":173,"./baseFor":101}],103:[function(a,b,c){function d(a,b){b=f(b,a)?[b+""]:e(b);for(var c=0,d=b.length;null!=a&&d>c;)a=a[b[c++]];return c&&c==d?a:void 0}var e=a("./baseToPath"),f=a("./isKey");b.exports=d},{"./baseToPath":118,"./isKey":140}],104:[function(a,b,c){(function(a){function c(a,b){return e.call(a,b)||"object"==typeof a&&b in a&&null===f(a)}var d=a.Object.prototype,e=d.hasOwnProperty,f=Object.getPrototypeOf;b.exports=c}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],105:[function(a,b,c){function d(a,b){return b in Object(a)}b.exports=d},{}],106:[function(a,b,c){function d(a,b,c,h,i){return a===b?!0:null==a||null==b||!f(a)&&!g(b)?a!==a&&b!==b:e(a,b,d,c,h,i)}var e=a("./baseIsEqualDeep"),f=a("../isObject"),g=a("../isObjectLike");b.exports=d},{"../isObject":168,"../isObjectLike":169,"./baseIsEqualDeep":107}],107:[function(a,b,c){(function(c){function d(a,b,c,d,q,s){var t=j(a),u=j(b),v=o,w=o;t||(v=i(a),v==n?v=p:v!=p&&(t=l(a))),u||(w=i(b),w==n?w=p:w!=p&&(u=l(b)));var x=v==p&&!k(a),y=w==p&&!k(b),z=v==w;if(z&&!t&&!x)return g(a,b,v,c,d,q);var A=q&m;if(!A){var B=x&&r.call(a,"__wrapped__"),C=y&&r.call(b,"__wrapped__");if(B||C)return c(B?a.value():a,C?b.value():b,d,q,s)}return z?(s||(s=new e),(t?f:h)(a,b,c,d,q,s)):!1}var e=a("./Stack"),f=a("./equalArrays"),g=a("./equalByTag"),h=a("./equalObjects"),i=a("./getTag"),j=a("../isArray"),k=a("./isHostObject"),l=a("../isTypedArray"),m=2,n="[object Arguments]",o="[object Array]",p="[object Object]",q=c.Object.prototype,r=q.hasOwnProperty;b.exports=d}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../isArray":161,"../isTypedArray":172,"./Stack":84,"./equalArrays":124,"./equalByTag":125,"./equalObjects":126,"./getTag":130,"./isHostObject":137}],108:[function(a,b,c){function d(a,b,c,d){var i=c.length,j=i,k=!d;if(null==a)return!j;for(a=Object(a);i--;){var l=c[i];if(k&&l[2]?l[1]!==a[l[0]]:!(l[0]in a))return!1}for(;++i<j;){l=c[i];var m=l[0],n=a[m],o=l[1];if(k&&l[2]){if(void 0===n&&!(m in a))return!1}else{var p=new e,q=d?d(n,o,m,a,b,p):void 0;if(!(void 0===q?f(o,n,d,g|h,p):q))return!1}}return!0}var e=a("./Stack"),f=a("./baseIsEqual"),g=1,h=2;b.exports=d},{"./Stack":84,"./baseIsEqual":106}],109:[function(a,b,c){function d(a){var b=typeof a;return"function"==b?a:null==a?g:"object"==b?h(a)?f(a[0],a[1]):e(a):i(a)}var e=a("./baseMatches"),f=a("./baseMatchesProperty"),g=a("../identity"),h=a("../isArray"),i=a("../property");b.exports=d},{"../identity":79,"../isArray":161,"../property":175,"./baseMatches":111,"./baseMatchesProperty":112}],110:[function(a,b,c){function d(a){return e(Object(a))}var e=Object.keys;b.exports=d},{}],111:[function(a,b,c){function d(a){var b=f(a);if(1==b.length&&b[0][2]){var c=b[0][0],d=b[0][1];return function(a){return null==a?!1:a[c]===d&&(void 0!==d||c in Object(a))}}return function(c){return c===a||e(c,a,b)}}var e=a("./baseIsMatch"),f=a("./getMatchData");b.exports=d},{"./baseIsMatch":108,"./getMatchData":128}],112:[function(a,b,c){function d(a,b){return function(c){var d=f(c,a);return void 0===d&&d===b?g(c,a):e(b,d,void 0,h|i)}}var e=a("./baseIsEqual"),f=a("../get"),g=a("../hasIn"),h=1,i=2;b.exports=d},{"../get":77,"../hasIn":78,"./baseIsEqual":106}],113:[function(a,b,c){function d(a){return function(b){return null==b?void 0:b[a]}}b.exports=d},{}],114:[function(a,b,c){function d(a){return function(b){return e(b,a)}}var e=a("./baseGet");b.exports=d},{"./baseGet":103}],115:[function(a,b,c){function d(a,b,c){var d=-1,e=a.length;0>b&&(b=-b>e?0:e+b),c=c>e?e:c,0>c&&(c+=e),e=b>c?0:c-b>>>0,b>>>=0;for(var f=Array(e);++d<e;)f[d]=a[d+b];return f}b.exports=d},{}],116:[function(a,b,c){function d(a,b){for(var c=-1,d=Array(a);++c<a;)d[c]=b(c);return d}b.exports=d},{}],117:[function(a,b,c){function d(a,b){return e(b,function(b){return[b,a[b]]})}var e=a("./arrayMap");b.exports=d},{"./arrayMap":89}],118:[function(a,b,c){function d(a){return e(a)?a:f(a)}var e=a("../isArray"),f=a("./stringToPath");b.exports=d},{"../isArray":161,"./stringToPath":159}],119:[function(a,b,c){function d(a,b,c){return e(a,b,c)}var e=a("./copyObjectWith");b.exports=d},{"./copyObjectWith":120}],120:[function(a,b,c){function d(a,b,c,d){c||(c={});for(var f=-1,g=b.length;++f<g;){var h=b[f],i=d?d(c[h],a[h],h,c,a):a[h];e(c,h,i)}return c}var e=a("./assignValue");b.exports=d},{"./assignValue":91}],121:[function(a,b,c){function d(a){return f(function(b,c){var d=-1,f=c.length,g=f>1?c[f-1]:void 0,h=f>2?c[2]:void 0;for(g="function"==typeof g?(f--,g):void 0,h&&e(c[0],c[1],h)&&(g=3>f?void 0:g,f=1),b=Object(b);++d<f;){var i=c[d];i&&a(b,i,d,g)}return b})}var e=a("./isIterateeCall"),f=a("../rest");b.exports=d},{"../rest":176,"./isIterateeCall":139}],122:[function(a,b,c){function d(a,b){return function(c,d){if(null==c)return c;if(!e(c))return a(c,d);for(var f=c.length,g=b?f:-1,h=Object(c);(b?g--:++g<f)&&d(h[g],g,h)!==!1;);return c}}var e=a("../isArrayLike");b.exports=d},{"../isArrayLike":162}],123:[function(a,b,c){function d(a){return function(b,c,d){for(var e=-1,f=Object(b),g=d(b),h=g.length;h--;){var i=g[a?h:++e];if(c(f[i],i,f)===!1)break}return b}}b.exports=d},{}],124:[function(a,b,c){function d(a,b,c,d,h,i){var j=-1,k=h&g,l=h&f,m=a.length,n=b.length;if(m!=n&&!(k&&n>m))return!1;var o=i.get(a);if(o)return o==b;var p=!0;for(i.set(a,b);++j<m;){var q=a[j],r=b[j];if(d)var s=k?d(r,q,j,b,a,i):d(q,r,j,a,b,i);if(void 0!==s){if(s)continue;p=!1;break}if(l){if(!e(b,function(a){return q===a||c(q,a,d,h,i)})){p=!1;break}}else if(q!==r&&!c(q,r,d,h,i)){p=!1;break}}return i["delete"](a),p}var e=a("./arraySome"),f=1,g=2;b.exports=d},{"./arraySome":90}],125:[function(a,b,c){function d(a,b,c,d,u,w){switch(c){case t:return a.byteLength==b.byteLength&&d(new f(a),new f(b))?!0:!1;case k:case l:return+a==+b;case m:return a.name==b.name&&a.message==b.message;case o:return a!=+a?b!=+b:a==+b;case p:case r:return a==b+"";case n:var x=g;case q:var y=w&j;return x||(x=h),(y||a.size==b.size)&&d(x(a),x(b),u,w|i);case s:return!!e&&v.call(a)==v.call(b)}return!1}var e=a("./Symbol"),f=a("./Uint8Array"),g=a("./mapToArray"),h=a("./setToArray"),i=1,j=2,k="[object Boolean]",l="[object Date]",m="[object Error]",n="[object Map]",o="[object Number]",p="[object RegExp]",q="[object Set]",r="[object String]",s="[object Symbol]",t="[object ArrayBuffer]",u=e?e.prototype:void 0,v=e?u.valueOf:void 0;b.exports=d},{"./Symbol":85,"./Uint8Array":86,"./mapToArray":149,"./setToArray":152}],126:[function(a,b,c){function d(a,b,c,d,h,i){var j=h&g,k=f(a),l=k.length,m=f(b),n=m.length;if(l!=n&&!j)return!1;for(var o=l;o--;){var p=k[o];if(!(j?p in b:e(b,p)))return!1}var q=i.get(a);if(q)return q==b;var r=!0;i.set(a,b);for(var s=j;++o<l;){p=k[o];var t=a[p],u=b[p];if(d)var v=j?d(u,t,p,b,a,i):d(t,u,p,a,b,i);if(!(void 0===v?t===u||c(t,u,d,h,i):v)){r=!1;break}s||(s="constructor"==p)}if(r&&!s){var w=a.constructor,x=b.constructor;w!=x&&"constructor"in a&&"constructor"in b&&!("function"==typeof w&&w instanceof w&&"function"==typeof x&&x instanceof x)&&(r=!1)}return i["delete"](a),r}var e=a("./baseHas"),f=a("../keys"),g=2;b.exports=d},{"../keys":173,"./baseHas":104}],127:[function(a,b,c){var d=a("./baseProperty"),e=d("length");b.exports=e},{"./baseProperty":113}],128:[function(a,b,c){function d(a){for(var b=f(a),c=b.length;c--;)b[c][2]=e(b[c][1]);return b}var e=a("./isStrictComparable"),f=a("../toPairs");b.exports=d},{"../toPairs":180,"./isStrictComparable":143}],129:[function(a,b,c){function d(a,b){var c=null==a?void 0:a[b];return e(c)?c:void 0}var e=a("../isNative");b.exports=d},{"../isNative":167}],130:[function(a,b,c){(function(c){function d(a){return l.call(a)}var e=a("./Map"),f=a("./Set"),g="[object Map]",h="[object Object]",i="[object Set]",j=c.Object.prototype,k=c.Function.prototype.toString,l=j.toString,m=e?k.call(e):"",n=f?k.call(f):"";(e&&d(new e)!=g||f&&d(new f)!=i)&&(d=function(a){var b=l.call(a),c=b==h?a.constructor:null,d="function"==typeof c?k.call(c):"";if(d){if(d==m)return g;if(d==n)return i}return b}),b.exports=d}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./Map":81,"./Set":83}],131:[function(a,b,c){function d(a,b,c){if(null==a)return!1;var d=c(a,b);return d||i(b)||(b=e(b),a=m(a,b),null!=a&&(b=l(b),d=c(a,b))),d||j(a&&a.length)&&h(b,a.length)&&(g(a)||k(a)||f(a))}var e=a("./baseToPath"),f=a("../isArguments"),g=a("../isArray"),h=a("./isIndex"),i=a("./isKey"),j=a("../isLength"),k=a("../isString"),l=a("../last"),m=a("./parent");b.exports=d},{"../isArguments":160,"../isArray":161,"../isLength":166,"../isString":170,"../last":174,"./baseToPath":118,"./isIndex":138,"./isKey":140,"./parent":151}],132:[function(a,b,c){function d(a,b){return e(a,b)&&delete a[b]}var e=a("./hashHas");b.exports=d},{"./hashHas":134}],133:[function(a,b,c){(function(c){function d(a,b){if(e){var c=a[b];return c===f?void 0:c}return h.call(a,b)?a[b]:void 0}var e=a("./nativeCreate"),f="__lodash_hash_undefined__",g=c.Object.prototype,h=g.hasOwnProperty;b.exports=d}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./nativeCreate":150}],134:[function(a,b,c){(function(c){function d(a,b){return e?void 0!==a[b]:g.call(a,b)}var e=a("./nativeCreate"),f=c.Object.prototype,g=f.hasOwnProperty;b.exports=d}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./nativeCreate":150}],135:[function(a,b,c){function d(a,b,c){a[b]=e&&void 0===c?f:c}var e=a("./nativeCreate"),f="__lodash_hash_undefined__";b.exports=d},{"./nativeCreate":150}],136:[function(a,b,c){function d(a){var b=a?a.length:void 0;return h(b)&&(g(a)||i(a)||f(a))?e(b,String):null}var e=a("./baseTimes"),f=a("../isArguments"),g=a("../isArray"),h=a("../isLength"),i=a("../isString");b.exports=d},{"../isArguments":160,"../isArray":161,"../isLength":166,"../isString":170,"./baseTimes":116}],137:[function(a,b,c){function d(a){var b=!1;if(null!=a&&"function"!=typeof a.toString)try{b=!!(a+"")}catch(c){}return b}b.exports=d},{}],138:[function(a,b,c){function d(a,b){return a="number"==typeof a||f.test(a)?+a:-1,b=null==b?e:b,a>-1&&a%1==0&&b>a}var e=9007199254740991,f=/^(?:0|[1-9]\d*)$/;b.exports=d},{}],139:[function(a,b,c){function d(a,b,c){if(!h(c))return!1;var d=typeof b;return("number"==d?f(c)&&g(b,c.length):"string"==d&&b in c)?e(c[b],a):!1}var e=a("../eq"),f=a("../isArrayLike"),g=a("./isIndex"),h=a("../isObject");b.exports=d},{"../eq":75,"../isArrayLike":162,"../isObject":168,"./isIndex":138}],140:[function(a,b,c){function d(a,b){return"number"==typeof a?!0:!e(a)&&(g.test(a)||!f.test(a)||null!=b&&a in Object(b))}var e=a("../isArray"),f=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,g=/^\w*$/;b.exports=d},{"../isArray":161}],141:[function(a,b,c){function d(a){var b=typeof a;return"number"==b||"boolean"==b||"string"==b&&"__proto__"!==a||null==a}b.exports=d},{}],142:[function(a,b,c){(function(a){function c(a){var b=a&&a.constructor,c="function"==typeof b&&b.prototype||d;return a===c}var d=a.Object.prototype;b.exports=c}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],143:[function(a,b,c){function d(a){return a===a&&!e(a)}var e=a("../isObject");b.exports=d},{"../isObject":168}],144:[function(a,b,c){function d(){this.__data__={hash:new e,map:f?new f:[],string:new e}}var e=a("./Hash"),f=a("./Map");b.exports=d},{"./Hash":80,"./Map":81}],145:[function(a,b,c){function d(a){var b=this.__data__;return h(a)?g("string"==typeof a?b.string:b.hash,a):e?b.map["delete"](a):f(b.map,a)}var e=a("./Map"),f=a("./assocDelete"),g=a("./hashDelete"),h=a("./isKeyable");b.exports=d},{"./Map":81,"./assocDelete":92,"./hashDelete":132,"./isKeyable":141}],146:[function(a,b,c){function d(a){var b=this.__data__;return h(a)?g("string"==typeof a?b.string:b.hash,a):e?b.map.get(a):f(b.map,a)}var e=a("./Map"),f=a("./assocGet"),g=a("./hashGet"),h=a("./isKeyable");b.exports=d},{"./Map":81,"./assocGet":93,"./hashGet":133,"./isKeyable":141}],147:[function(a,b,c){function d(a){var b=this.__data__;return h(a)?g("string"==typeof a?b.string:b.hash,a):e?b.map.has(a):f(b.map,a)}var e=a("./Map"),f=a("./assocHas"),g=a("./hashHas"),h=a("./isKeyable");b.exports=d},{"./Map":81,"./assocHas":94,"./hashHas":134,"./isKeyable":141}],148:[function(a,b,c){function d(a,b){var c=this.__data__;return h(a)?g("string"==typeof a?c.string:c.hash,a,b):e?c.map.set(a,b):f(c.map,a,b),this}var e=a("./Map"),f=a("./assocSet"),g=a("./hashSet"),h=a("./isKeyable");b.exports=d},{"./Map":81,"./assocSet":96,"./hashSet":135,"./isKeyable":141}],149:[function(a,b,c){function d(a){var b=-1,c=Array(a.size);return a.forEach(function(a,d){c[++b]=[d,a]}),c}b.exports=d},{}],150:[function(a,b,c){var d=a("./getNative"),e=d(Object,"create");b.exports=e},{"./getNative":129}],151:[function(a,b,c){function d(a,b){return 1==b.length?a:f(a,e(b,0,-1))}var e=a("./baseSlice"),f=a("../get");b.exports=d},{"../get":77,"./baseSlice":115}],152:[function(a,b,c){function d(a){var b=-1,c=Array(a.size);return a.forEach(function(a){c[++b]=a}),c}b.exports=d},{}],153:[function(a,b,c){function d(){this.__data__={array:[],map:null}}b.exports=d},{}],154:[function(a,b,c){function d(a){var b=this.__data__,c=b.array;return c?e(c,a):b.map["delete"](a)}var e=a("./assocDelete");b.exports=d},{"./assocDelete":92}],155:[function(a,b,c){function d(a){var b=this.__data__,c=b.array;return c?e(c,a):b.map.get(a)}var e=a("./assocGet");b.exports=d},{"./assocGet":93}],156:[function(a,b,c){function d(a){var b=this.__data__,c=b.array;return c?e(c,a):b.map.has(a)}var e=a("./assocHas");b.exports=d},{"./assocHas":94}],157:[function(a,b,c){function d(a,b){var c=this.__data__,d=c.array;d&&(d.length<g-1?f(d,a,b):(c.array=null,c.map=new e(d)));var h=c.map;return h&&h.set(a,b),this}var e=a("./MapCache"),f=a("./assocSet"),g=200;b.exports=d},{"./MapCache":82,"./assocSet":96}],158:[function(a,b,c){function d(a){if(!a||!w.test(a))return a.length;for(var b=v.lastIndex=0;v.test(a);)b++;return b}var e="\\ud800-\\udfff",f="\\u0300-\\u036f\\ufe20-\\ufe23",g="\\u20d0-\\u20f0",h="\\ufe0e\\ufe0f",i="["+e+"]",j="["+f+g+"]",k="\\ud83c[\\udffb-\\udfff]",l="(?:"+j+"|"+k+")",m="[^"+e+"]",n="(?:\\ud83c[\\udde6-\\uddff]){2}",o="[\\ud800-\\udbff][\\udc00-\\udfff]",p="\\u200d",q=l+"?",r="["+h+"]?",s="(?:"+p+"(?:"+[m,n,o].join("|")+")"+r+q+")*",t=r+q+s,u="(?:"+[m+j+"?",j,n,o,i].join("|")+")",v=RegExp(k+"(?="+k+")|"+u+t,"g"),w=RegExp("["+p+e+f+g+h+"]");b.exports=d},{}],159:[function(a,b,c){function d(a){var b=[];return e(a).replace(f,function(a,c,d,e){b.push(d?e.replace(g,"$1"):c||a)}),b}var e=a("../toString"),f=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g,g=/\\(\\)?/g;b.exports=d},{"../toString":181}],160:[function(a,b,c){(function(c){function d(a){return e(a)&&h.call(a,"callee")&&(!j.call(a,"callee")||i.call(a)==f)}var e=a("./isArrayLikeObject"),f="[object Arguments]",g=c.Object.prototype,h=g.hasOwnProperty,i=g.toString,j=g.propertyIsEnumerable;
b.exports=d}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./isArrayLikeObject":163}],161:[function(a,b,c){var d=Array.isArray;b.exports=d},{}],162:[function(a,b,c){function d(a){return null!=a&&!("function"==typeof a&&f(a))&&g(e(a))}var e=a("./internal/getLength"),f=a("./isFunction"),g=a("./isLength");b.exports=d},{"./internal/getLength":127,"./isFunction":165,"./isLength":166}],163:[function(a,b,c){function d(a){return f(a)&&e(a)}var e=a("./isArrayLike"),f=a("./isObjectLike");b.exports=d},{"./isArrayLike":162,"./isObjectLike":169}],164:[function(a,b,c){function d(a){return!f(a)||e(a.splice)?!h(a):!g(a).length}var e=a("./isFunction"),f=a("./isObjectLike"),g=a("./keys"),h=a("./size");b.exports=d},{"./isFunction":165,"./isObjectLike":169,"./keys":173,"./size":177}],165:[function(a,b,c){(function(c){function d(a){var b=e(a)?i.call(a):"";return b==f||b==g}var e=a("./isObject"),f="[object Function]",g="[object GeneratorFunction]",h=c.Object.prototype,i=h.toString;b.exports=d}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./isObject":168}],166:[function(a,b,c){function d(a){return"number"==typeof a&&a>-1&&a%1==0&&e>=a}var e=9007199254740991;b.exports=d},{}],167:[function(a,b,c){(function(c){function d(a){return null==a?!1:e(a)?m.test(k.call(a)):g(a)&&(f(a)?m:i).test(a)}var e=a("./isFunction"),f=a("./internal/isHostObject"),g=a("./isObjectLike"),h=/[\\^$.*+?()[\]{}|]/g,i=/^\[object .+?Constructor\]$/,j=c.Object.prototype,k=c.Function.prototype.toString,l=j.hasOwnProperty,m=RegExp("^"+k.call(l).replace(h,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");b.exports=d}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./internal/isHostObject":137,"./isFunction":165,"./isObjectLike":169}],168:[function(a,b,c){function d(a){var b=typeof a;return!!a&&("object"==b||"function"==b)}b.exports=d},{}],169:[function(a,b,c){function d(a){return!!a&&"object"==typeof a}b.exports=d},{}],170:[function(a,b,c){(function(c){function d(a){return"string"==typeof a||!e(a)&&f(a)&&i.call(a)==g}var e=a("./isArray"),f=a("./isObjectLike"),g="[object String]",h=c.Object.prototype,i=h.toString;b.exports=d}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./isArray":161,"./isObjectLike":169}],171:[function(a,b,c){(function(c){function d(a){return"symbol"==typeof a||e(a)&&h.call(a)==f}var e=a("./isObjectLike"),f="[object Symbol]",g=c.Object.prototype,h=g.toString;b.exports=d}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./isObjectLike":169}],172:[function(a,b,c){(function(c){function d(a){return f(a)&&e(a.length)&&!!D[F.call(a)]}var e=a("./isLength"),f=a("./isObjectLike"),g="[object Arguments]",h="[object Array]",i="[object Boolean]",j="[object Date]",k="[object Error]",l="[object Function]",m="[object Map]",n="[object Number]",o="[object Object]",p="[object RegExp]",q="[object Set]",r="[object String]",s="[object WeakMap]",t="[object ArrayBuffer]",u="[object Float32Array]",v="[object Float64Array]",w="[object Int8Array]",x="[object Int16Array]",y="[object Int32Array]",z="[object Uint8Array]",A="[object Uint8ClampedArray]",B="[object Uint16Array]",C="[object Uint32Array]",D={};D[u]=D[v]=D[w]=D[x]=D[y]=D[z]=D[A]=D[B]=D[C]=!0,D[g]=D[h]=D[t]=D[i]=D[j]=D[k]=D[l]=D[m]=D[n]=D[o]=D[p]=D[q]=D[r]=D[s]=!1;var E=c.Object.prototype,F=E.toString;b.exports=d}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./isLength":166,"./isObjectLike":169}],173:[function(a,b,c){function d(a){var b=j(a);if(!b&&!h(a))return f(a);var c=g(a),d=!!c,k=c||[],l=k.length;for(var m in a)!e(a,m)||d&&("length"==m||i(m,l))||b&&"constructor"==m||k.push(m);return k}var e=a("./internal/baseHas"),f=a("./internal/baseKeys"),g=a("./internal/indexKeys"),h=a("./isArrayLike"),i=a("./internal/isIndex"),j=a("./internal/isPrototype");b.exports=d},{"./internal/baseHas":104,"./internal/baseKeys":110,"./internal/indexKeys":136,"./internal/isIndex":138,"./internal/isPrototype":142,"./isArrayLike":162}],174:[function(a,b,c){function d(a){var b=a?a.length:0;return b?a[b-1]:void 0}b.exports=d},{}],175:[function(a,b,c){function d(a){return g(a)?e(a):f(a)}var e=a("./internal/baseProperty"),f=a("./internal/basePropertyDeep"),g=a("./internal/isKey");b.exports=d},{"./internal/baseProperty":113,"./internal/basePropertyDeep":114,"./internal/isKey":140}],176:[function(a,b,c){function d(a,b){if("function"!=typeof a)throw new TypeError(g);return b=h(void 0===b?a.length-1:f(b),0),function(){for(var c=arguments,d=-1,f=h(c.length-b,0),g=Array(f);++d<f;)g[d]=c[b+d];switch(b){case 0:return a.call(this,g);case 1:return a.call(this,c[0],g);case 2:return a.call(this,c[0],c[1],g)}var i=Array(b+1);for(d=-1;++d<b;)i[d]=c[d];return i[b]=g,e(a,this,i)}}var e=a("./internal/apply"),f=a("./toInteger"),g="Expected a function",h=Math.max;b.exports=d},{"./internal/apply":87,"./toInteger":178}],177:[function(a,b,c){function d(a){if(null==a)return 0;if(e(a)){var b=a.length;return b&&f(a)?h(a):b}return g(a).length}var e=a("./isArrayLike"),f=a("./isString"),g=a("./keys"),h=a("./internal/stringSize");b.exports=d},{"./internal/stringSize":158,"./isArrayLike":162,"./isString":170,"./keys":173}],178:[function(a,b,c){function d(a){if(!a)return 0===a?a:0;if(a=e(a),a===f||a===-f){var b=0>a?-1:1;return b*g}var c=a%1;return a===a?c?a-c:a:0}var e=a("./toNumber"),f=1/0,g=1.7976931348623157e308;b.exports=d},{"./toNumber":179}],179:[function(a,b,c){function d(a){if(f(a)){var b=e(a.valueOf)?a.valueOf():a;a=f(b)?b+"":b}if("string"!=typeof a)return 0===a?a:+a;a=a.replace(h,"");var c=j.test(a);return c||k.test(a)?l(a.slice(2),c?2:8):i.test(a)?g:+a}var e=a("./isFunction"),f=a("./isObject"),g=NaN,h=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,k=/^0o[0-7]+$/i,l=parseInt;b.exports=d},{"./isFunction":165,"./isObject":168}],180:[function(a,b,c){function d(a){return e(a,f(a))}var e=a("./internal/baseToPairs"),f=a("./keys");b.exports=d},{"./internal/baseToPairs":117,"./keys":173}],181:[function(a,b,c){function d(a){if("string"==typeof a)return a;if(null==a)return"";if(f(a))return e?i.call(a):"";var b=a+"";return"0"==b&&1/a==-g?"-0":b}var e=a("./internal/Symbol"),f=a("./isSymbol"),g=1/0,h=e?e.prototype:void 0,i=e?h.toString:void 0;b.exports=d},{"./internal/Symbol":85,"./isSymbol":171}]},{},[16])(16)});;

/*! nanoScrollerJS - v0.8.7 - (c) 2015 James Florentino; Licensed MIT */

!function(a){return"function"==typeof define&&define.amd?define(["jquery"],function(b){return a(b,window,document)}):"object"==typeof exports?module.exports=a(require("jquery"),window,document):a(jQuery,window,document)}(function(a,b,c){"use strict";var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H;z={paneClass:"nano-pane",sliderClass:"nano-slider",contentClass:"nano-content",enabledClass:"has-scrollbar",flashedClass:"flashed",activeClass:"active",iOSNativeScrolling:!1,preventPageScrolling:!1,disableResize:!1,alwaysVisible:!1,flashDelay:1500,sliderMinHeight:20,sliderMaxHeight:null,documentContext:null,windowContext:null},u="scrollbar",t="scroll",l="mousedown",m="mouseenter",n="mousemove",p="mousewheel",o="mouseup",s="resize",h="drag",i="enter",w="up",r="panedown",f="DOMMouseScroll",g="down",x="wheel",j="keydown",k="keyup",v="touchmove",d="Microsoft Internet Explorer"===b.navigator.appName&&/msie 7./i.test(b.navigator.appVersion)&&b.ActiveXObject,e=null,D=b.requestAnimationFrame,y=b.cancelAnimationFrame,F=c.createElement("div").style,H=function(){var a,b,c,d,e,f;for(d=["t","webkitT","MozT","msT","OT"],a=e=0,f=d.length;f>e;a=++e)if(c=d[a],b=d[a]+"ransform",b in F)return d[a].substr(0,d[a].length-1);return!1}(),G=function(a){return H===!1?!1:""===H?a:H+a.charAt(0).toUpperCase()+a.substr(1)},E=G("transform"),B=E!==!1,A=function(){var a,b,d;return a=c.createElement("div"),b=a.style,b.position="absolute",b.width="100px",b.height="100px",b.overflow=t,b.top="-9999px",c.body.appendChild(a),d=a.offsetWidth-a.clientWidth,c.body.removeChild(a),d},C=function(){var a,c,d;return c=b.navigator.userAgent,(a=/(?=.+Mac OS X)(?=.+Firefox)/.test(c))?(d=/Firefox\/\d{2}\./.exec(c),d&&(d=d[0].replace(/\D+/g,"")),a&&+d>23):!1},q=function(){function j(d,f){this.el=d,this.options=f,e||(e=A()),this.$el=a(this.el),this.doc=a(this.options.documentContext||c),this.win=a(this.options.windowContext||b),this.body=this.doc.find("body"),this.$content=this.$el.children("."+this.options.contentClass),this.$content.attr("tabindex",this.options.tabIndex||0),this.content=this.$content[0],this.previousPosition=0,this.options.iOSNativeScrolling&&null!=this.el.style.WebkitOverflowScrolling?this.nativeScrolling():this.generate(),this.createEvents(),this.addEvents(),this.reset()}return j.prototype.preventScrolling=function(a,b){if(this.isActive)if(a.type===f)(b===g&&a.originalEvent.detail>0||b===w&&a.originalEvent.detail<0)&&a.preventDefault();else if(a.type===p){if(!a.originalEvent||!a.originalEvent.wheelDelta)return;(b===g&&a.originalEvent.wheelDelta<0||b===w&&a.originalEvent.wheelDelta>0)&&a.preventDefault()}},j.prototype.nativeScrolling=function(){this.$content.css({WebkitOverflowScrolling:"touch"}),this.iOSNativeScrolling=!0,this.isActive=!0},j.prototype.updateScrollValues=function(){var a,b;a=this.content,this.maxScrollTop=a.scrollHeight-a.clientHeight,this.prevScrollTop=this.contentScrollTop||0,this.contentScrollTop=a.scrollTop,b=this.contentScrollTop>this.previousPosition?"down":this.contentScrollTop<this.previousPosition?"up":"same",this.previousPosition=this.contentScrollTop,"same"!==b&&this.$el.trigger("update",{position:this.contentScrollTop,maximum:this.maxScrollTop,direction:b}),this.iOSNativeScrolling||(this.maxSliderTop=this.paneHeight-this.sliderHeight,this.sliderTop=0===this.maxScrollTop?0:this.contentScrollTop*this.maxSliderTop/this.maxScrollTop)},j.prototype.setOnScrollStyles=function(){var a;B?(a={},a[E]="translate(0, "+this.sliderTop+"px)"):a={top:this.sliderTop},D?(y&&this.scrollRAF&&y(this.scrollRAF),this.scrollRAF=D(function(b){return function(){return b.scrollRAF=null,b.slider.css(a)}}(this))):this.slider.css(a)},j.prototype.createEvents=function(){this.events={down:function(a){return function(b){return a.isBeingDragged=!0,a.offsetY=b.pageY-a.slider.offset().top,a.slider.is(b.target)||(a.offsetY=0),a.pane.addClass(a.options.activeClass),a.doc.bind(n,a.events[h]).bind(o,a.events[w]),a.body.bind(m,a.events[i]),!1}}(this),drag:function(a){return function(b){return a.sliderY=b.pageY-a.$el.offset().top-a.paneTop-(a.offsetY||.5*a.sliderHeight),a.scroll(),a.contentScrollTop>=a.maxScrollTop&&a.prevScrollTop!==a.maxScrollTop?a.$el.trigger("scrollend"):0===a.contentScrollTop&&0!==a.prevScrollTop&&a.$el.trigger("scrolltop"),!1}}(this),up:function(a){return function(b){return a.isBeingDragged=!1,a.pane.removeClass(a.options.activeClass),a.doc.unbind(n,a.events[h]).unbind(o,a.events[w]),a.body.unbind(m,a.events[i]),!1}}(this),resize:function(a){return function(b){a.reset()}}(this),panedown:function(a){return function(b){return a.sliderY=(b.offsetY||b.originalEvent.layerY)-.5*a.sliderHeight,a.scroll(),a.events.down(b),!1}}(this),scroll:function(a){return function(b){a.updateScrollValues(),a.isBeingDragged||(a.iOSNativeScrolling||(a.sliderY=a.sliderTop,a.setOnScrollStyles()),null!=b&&(a.contentScrollTop>=a.maxScrollTop?(a.options.preventPageScrolling&&a.preventScrolling(b,g),a.prevScrollTop!==a.maxScrollTop&&a.$el.trigger("scrollend")):0===a.contentScrollTop&&(a.options.preventPageScrolling&&a.preventScrolling(b,w),0!==a.prevScrollTop&&a.$el.trigger("scrolltop"))))}}(this),wheel:function(a){return function(b){var c;if(null!=b)return c=b.delta||b.wheelDelta||b.originalEvent&&b.originalEvent.wheelDelta||-b.detail||b.originalEvent&&-b.originalEvent.detail,c&&(a.sliderY+=-c/3),a.scroll(),!1}}(this),enter:function(a){return function(b){var c;if(a.isBeingDragged)return 1!==(b.buttons||b.which)?(c=a.events)[w].apply(c,arguments):void 0}}(this)}},j.prototype.addEvents=function(){var a;this.removeEvents(),a=this.events,this.options.disableResize||this.win.bind(s,a[s]),this.iOSNativeScrolling||(this.slider.bind(l,a[g]),this.pane.bind(l,a[r]).bind(""+p+" "+f,a[x])),this.$content.bind(""+t+" "+p+" "+f+" "+v,a[t])},j.prototype.removeEvents=function(){var a;a=this.events,this.win.unbind(s,a[s]),this.iOSNativeScrolling||(this.slider.unbind(),this.pane.unbind()),this.$content.unbind(""+t+" "+p+" "+f+" "+v,a[t])},j.prototype.generate=function(){var a,c,d,f,g,h,i;return f=this.options,h=f.paneClass,i=f.sliderClass,a=f.contentClass,(g=this.$el.children("."+h)).length||g.children("."+i).length||this.$el.append('<div class="'+h+'"><div class="'+i+'" /></div>'),this.pane=this.$el.children("."+h),this.slider=this.pane.find("."+i),0===e&&C()?(d=b.getComputedStyle(this.content,null).getPropertyValue("padding-right").replace(/[^0-9.]+/g,""),c={right:-14,paddingRight:+d+14}):e&&(c={right:-e},this.$el.addClass(f.enabledClass)),null!=c&&this.$content.css(c),this},j.prototype.restore=function(){this.stopped=!1,this.iOSNativeScrolling||this.pane.show(),this.addEvents()},j.prototype.reset=function(){var a,b,c,f,g,h,i,j,k,l,m,n;return this.iOSNativeScrolling?void(this.contentHeight=this.content.scrollHeight):(this.$el.find("."+this.options.paneClass).length||this.generate().stop(),this.stopped&&this.restore(),a=this.content,f=a.style,g=f.overflowY,d&&this.$content.css({height:this.$content.height()}),b=a.scrollHeight+e,l=parseInt(this.$el.css("max-height"),10),l>0&&(this.$el.height(""),this.$el.height(a.scrollHeight>l?l:a.scrollHeight)),i=this.pane.outerHeight(!1),k=parseInt(this.pane.css("top"),10),h=parseInt(this.pane.css("bottom"),10),j=i+k+h,n=Math.round(j/b*i),n<this.options.sliderMinHeight?n=this.options.sliderMinHeight:null!=this.options.sliderMaxHeight&&n>this.options.sliderMaxHeight&&(n=this.options.sliderMaxHeight),g===t&&f.overflowX!==t&&(n+=e),this.maxSliderTop=j-n,this.contentHeight=b,this.paneHeight=i,this.paneOuterHeight=j,this.sliderHeight=n,this.paneTop=k,this.slider.height(n),this.events.scroll(),this.pane.show(),this.isActive=!0,a.scrollHeight===a.clientHeight||this.pane.outerHeight(!0)>=a.scrollHeight&&g!==t?(this.pane.hide(),this.isActive=!1):this.el.clientHeight===a.scrollHeight&&g===t?this.slider.hide():this.slider.show(),this.pane.css({opacity:this.options.alwaysVisible?1:"",visibility:this.options.alwaysVisible?"visible":""}),c=this.$content.css("position"),("static"===c||"relative"===c)&&(m=parseInt(this.$content.css("right"),10),m&&this.$content.css({right:"",marginRight:m})),this)},j.prototype.scroll=function(){return this.isActive?(this.sliderY=Math.max(0,this.sliderY),this.sliderY=Math.min(this.maxSliderTop,this.sliderY),this.$content.scrollTop(this.maxScrollTop*this.sliderY/this.maxSliderTop),this.iOSNativeScrolling||(this.updateScrollValues(),this.setOnScrollStyles()),this):void 0},j.prototype.scrollBottom=function(a){return this.isActive?(this.$content.scrollTop(this.contentHeight-this.$content.height()-a).trigger(p),this.stop().restore(),this):void 0},j.prototype.scrollTop=function(a){return this.isActive?(this.$content.scrollTop(+a).trigger(p),this.stop().restore(),this):void 0},j.prototype.scrollTo=function(a){return this.isActive?(this.scrollTop(this.$el.find(a).get(0).offsetTop),this):void 0},j.prototype.stop=function(){return y&&this.scrollRAF&&(y(this.scrollRAF),this.scrollRAF=null),this.stopped=!0,this.removeEvents(),this.iOSNativeScrolling||this.pane.hide(),this},j.prototype.destroy=function(){return this.stopped||this.stop(),!this.iOSNativeScrolling&&this.pane.length&&this.pane.remove(),d&&this.$content.height(""),this.$content.removeAttr("tabindex"),this.$el.hasClass(this.options.enabledClass)&&(this.$el.removeClass(this.options.enabledClass),this.$content.css({right:""})),this},j.prototype.flash=function(){return!this.iOSNativeScrolling&&this.isActive?(this.reset(),this.pane.addClass(this.options.flashedClass),setTimeout(function(a){return function(){a.pane.removeClass(a.options.flashedClass)}}(this),this.options.flashDelay),this):void 0},j}(),a.fn.nanoScroller=function(b){return this.each(function(){var c,d;if((d=this.nanoscroller)||(c=a.extend({},z,b),this.nanoscroller=d=new q(this,c)),b&&"object"==typeof b){if(a.extend(d.options,b),null!=b.scrollBottom)return d.scrollBottom(b.scrollBottom);if(null!=b.scrollTop)return d.scrollTop(b.scrollTop);if(b.scrollTo)return d.scrollTo(b.scrollTo);if("bottom"===b.scroll)return d.scrollBottom(0);if("top"===b.scroll)return d.scrollTop(0);if(b.scroll&&b.scroll instanceof a)return d.scrollTo(b.scroll);if(b.stop)return d.stop();if(b.destroy)return d.destroy();if(b.flash)return d.flash()}return d.reset()})},a.fn.nanoScroller.Constructor=q});;

!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e(require,exports,module):t.Tether=e()}(this,function(t,e,o){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t){var e=getComputedStyle(t),o=e.position;if("fixed"===o)return t;for(var i=t;i=i.parentNode;){var n=void 0;try{n=getComputedStyle(i)}catch(r){}if("undefined"==typeof n||null===n)return i;var s=n.overflow,a=n.overflowX,f=n.overflowY;if(/(auto|scroll)/.test(s+f+a)&&("absolute"!==o||["relative","absolute","fixed"].indexOf(n.position)>=0))return i}return document.body}function r(t){var e=void 0;t===document?(e=document,t=document.documentElement):e=t.ownerDocument;var o=e.documentElement,i={},n=t.getBoundingClientRect();for(var r in n)i[r]=n[r];var s=x(e);return i.top-=s.top,i.left-=s.left,"undefined"==typeof i.width&&(i.width=document.body.scrollWidth-i.left-i.right),"undefined"==typeof i.height&&(i.height=document.body.scrollHeight-i.top-i.bottom),i.top=i.top-o.clientTop,i.left=i.left-o.clientLeft,i.right=e.body.clientWidth-i.width-i.left,i.bottom=e.body.clientHeight-i.height-i.top,i}function s(t){return t.offsetParent||document.documentElement}function a(){var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var e=document.createElement("div");f(e.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);var o=t.offsetWidth;e.style.overflow="scroll";var i=t.offsetWidth;o===i&&(i=e.clientWidth),document.body.removeChild(e);var n=o-i;return{width:n,height:n}}function f(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=[];return Array.prototype.push.apply(e,arguments),e.slice(1).forEach(function(e){if(e)for(var o in e)({}).hasOwnProperty.call(e,o)&&(t[o]=e[o])}),t}function h(t,e){if("undefined"!=typeof t.classList)e.split(" ").forEach(function(e){e.trim()&&t.classList.remove(e)});else{var o=new RegExp("(^| )"+e.split(" ").join("|")+"( |$)","gi"),i=u(t).replace(o," ");p(t,i)}}function l(t,e){if("undefined"!=typeof t.classList)e.split(" ").forEach(function(e){e.trim()&&t.classList.add(e)});else{h(t,e);var o=u(t)+(" "+e);p(t,o)}}function d(t,e){if("undefined"!=typeof t.classList)return t.classList.contains(e);var o=u(t);return new RegExp("(^| )"+e+"( |$)","gi").test(o)}function u(t){return t.className instanceof SVGAnimatedString?t.className.baseVal:t.className}function p(t,e){t.setAttribute("class",e)}function c(t,e,o){o.forEach(function(o){-1===e.indexOf(o)&&d(t,o)&&h(t,o)}),e.forEach(function(e){d(t,e)||l(t,e)})}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){var o=arguments.length<=2||void 0===arguments[2]?1:arguments[2];return t+o>=e&&e>=t-o}function m(){return"undefined"!=typeof performance&&"undefined"!=typeof performance.now?performance.now():+new Date}function v(){for(var t={top:0,left:0},e=arguments.length,o=Array(e),i=0;e>i;i++)o[i]=arguments[i];return o.forEach(function(e){var o=e.top,i=e.left;"string"==typeof o&&(o=parseFloat(o,10)),"string"==typeof i&&(i=parseFloat(i,10)),t.top+=o,t.left+=i}),t}function y(t,e){return"string"==typeof t.left&&-1!==t.left.indexOf("%")&&(t.left=parseFloat(t.left,10)/100*e.width),"string"==typeof t.top&&-1!==t.top.indexOf("%")&&(t.top=parseFloat(t.top,10)/100*e.height),t}function b(t,e){return"scrollParent"===e?e=t.scrollParent:"window"===e&&(e=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]),e===document&&(e=e.documentElement),"undefined"!=typeof e.nodeType&&!function(){var t=r(e),o=t,i=getComputedStyle(e);e=[o.left,o.top,t.width+o.left,t.height+o.top],U.forEach(function(t,o){t=t[0].toUpperCase()+t.substr(1),"Top"===t||"Left"===t?e[o]+=parseFloat(i["border"+t+"Width"]):e[o]-=parseFloat(i["border"+t+"Width"])})}(),e}var w=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),C=void 0;"undefined"==typeof C&&(C={modules:[]});var O=function(){var t=0;return function(){return++t}}(),E={},x=function(t){var e=t._tetherZeroElement;"undefined"==typeof e&&(e=t.createElement("div"),e.setAttribute("data-tether-id",O()),f(e.style,{top:0,left:0,position:"absolute"}),t.body.appendChild(e),t._tetherZeroElement=e);var o=e.getAttribute("data-tether-id");if("undefined"==typeof E[o]){E[o]={};var i=e.getBoundingClientRect();for(var n in i)E[o][n]=i[n];T(function(){delete E[o]})}return E[o]},A=[],T=function(t){A.push(t)},S=function(){for(var t=void 0;t=A.pop();)t()},W=function(){function t(){i(this,t)}return w(t,[{key:"on",value:function(t,e,o){var i=arguments.length<=3||void 0===arguments[3]?!1:arguments[3];"undefined"==typeof this.bindings&&(this.bindings={}),"undefined"==typeof this.bindings[t]&&(this.bindings[t]=[]),this.bindings[t].push({handler:e,ctx:o,once:i})}},{key:"once",value:function(t,e,o){this.on(t,e,o,!0)}},{key:"off",value:function(t,e){if("undefined"==typeof this.bindings||"undefined"==typeof this.bindings[t])if("undefined"==typeof e)delete this.bindings[t];else for(var o=0;o<this.bindings[t].length;)this.bindings[t][o].handler===e?this.bindings[t].splice(o,1):++o}},{key:"trigger",value:function(t){if("undefined"!=typeof this.bindings&&this.bindings[t])for(var e=0;e<this.bindings[t].length;){var o=this.bindings[t][e],i=o.handler,n=o.ctx,r=o.once,s=n;"undefined"==typeof s&&(s=this);for(var a=arguments.length,f=Array(a>1?a-1:0),h=1;a>h;h++)f[h-1]=arguments[h];i.apply(s,f),r?this.bindings[t].splice(e,1):++e}}}]),t}();C.Utils={getScrollParent:n,getBounds:r,getOffsetParent:s,extend:f,addClass:l,removeClass:h,hasClass:d,updateClasses:c,defer:T,flush:S,uniqueId:O,Evented:W,getScrollBarSize:a};var M=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),w=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}();if("undefined"==typeof C)throw new Error("You must include the utils.js file before tether.js");var P=C.Utils,n=P.getScrollParent,r=P.getBounds,s=P.getOffsetParent,f=P.extend,l=P.addClass,h=P.removeClass,c=P.updateClasses,T=P.defer,S=P.flush,a=P.getScrollBarSize,k=function(){for(var t=document.createElement("div"),e=["transform","webkitTransform","OTransform","MozTransform","msTransform"],o=0;o<e.length;++o){var i=e[o];if(void 0!==t.style[i])return i}}(),B=[],_=function(){B.forEach(function(t){t.position(!1)}),S()};!function(){var t=null,e=null,o=null,i=function n(){return"undefined"!=typeof e&&e>16?(e=Math.min(e-16,250),void(o=setTimeout(n,250))):void("undefined"!=typeof t&&m()-t<10||("undefined"!=typeof o&&(clearTimeout(o),o=null),t=m(),_(),e=m()-t))};["resize","scroll","touchmove"].forEach(function(t){window.addEventListener(t,i)})}();var z={center:"center",left:"right",right:"left"},F={middle:"middle",top:"bottom",bottom:"top"},L={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"},Y=function(t,e){var o=t.left,i=t.top;return"auto"===o&&(o=z[e.left]),"auto"===i&&(i=F[e.top]),{left:o,top:i}},H=function(t){var e=t.left,o=t.top;return"undefined"!=typeof L[t.left]&&(e=L[t.left]),"undefined"!=typeof L[t.top]&&(o=L[t.top]),{left:e,top:o}},X=function(t){var e=t.split(" "),o=M(e,2),i=o[0],n=o[1];return{top:i,left:n}},j=X,N=function(){function t(e){var o=this;i(this,t),this.position=this.position.bind(this),B.push(this),this.history=[],this.setOptions(e,!1),C.modules.forEach(function(t){"undefined"!=typeof t.initialize&&t.initialize.call(o)}),this.position()}return w(t,[{key:"getClass",value:function(){var t=arguments.length<=0||void 0===arguments[0]?"":arguments[0],e=this.options.classes;return"undefined"!=typeof e&&e[t]?this.options.classes[t]:this.options.classPrefix?this.options.classPrefix+"-"+t:t}},{key:"setOptions",value:function(t){var e=this,o=arguments.length<=1||void 0===arguments[1]?!0:arguments[1],i={offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"};this.options=f(i,t);var r=this.options,s=r.element,a=r.target,h=r.targetModifier;if(this.element=s,this.target=a,this.targetModifier=h,"viewport"===this.target?(this.target=document.body,this.targetModifier="visible"):"scroll-handle"===this.target&&(this.target=document.body,this.targetModifier="scroll-handle"),["element","target"].forEach(function(t){if("undefined"==typeof e[t])throw new Error("Tether Error: Both element and target must be defined");"undefined"!=typeof e[t].jquery?e[t]=e[t][0]:"string"==typeof e[t]&&(e[t]=document.querySelector(e[t]))}),l(this.element,this.getClass("element")),this.options.addTargetClasses!==!1&&l(this.target,this.getClass("target")),!this.options.attachment)throw new Error("Tether Error: You must provide an attachment");this.targetAttachment=j(this.options.targetAttachment),this.attachment=j(this.options.attachment),this.offset=X(this.options.offset),this.targetOffset=X(this.options.targetOffset),"undefined"!=typeof this.scrollParent&&this.disable(),this.scrollParent="scroll-handle"===this.targetModifier?this.target:n(this.target),this.options.enabled!==!1&&this.enable(o)}},{key:"getTargetBounds",value:function(){if("undefined"==typeof this.targetModifier)return r(this.target);if("visible"===this.targetModifier){if(this.target===document.body)return{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth};var t=r(this.target),e={height:t.height,width:t.width,top:t.top,left:t.left};return e.height=Math.min(e.height,t.height-(pageYOffset-t.top)),e.height=Math.min(e.height,t.height-(t.top+t.height-(pageYOffset+innerHeight))),e.height=Math.min(innerHeight,e.height),e.height-=2,e.width=Math.min(e.width,t.width-(pageXOffset-t.left)),e.width=Math.min(e.width,t.width-(t.left+t.width-(pageXOffset+innerWidth))),e.width=Math.min(innerWidth,e.width),e.width-=2,e.top<pageYOffset&&(e.top=pageYOffset),e.left<pageXOffset&&(e.left=pageXOffset),e}if("scroll-handle"===this.targetModifier){var t=void 0,o=this.target;o===document.body?(o=document.documentElement,t={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}):t=r(o);var i=getComputedStyle(o),n=o.scrollWidth>o.clientWidth||[i.overflow,i.overflowX].indexOf("scroll")>=0||this.target!==document.body,s=0;n&&(s=15);var a=t.height-parseFloat(i.borderTopWidth)-parseFloat(i.borderBottomWidth)-s,e={width:15,height:.975*a*(a/o.scrollHeight),left:t.left+t.width-parseFloat(i.borderLeftWidth)-15},f=0;408>a&&this.target===document.body&&(f=-11e-5*Math.pow(a,2)-.00727*a+22.58),this.target!==document.body&&(e.height=Math.max(e.height,24));var h=this.target.scrollTop/(o.scrollHeight-a);return e.top=h*(a-e.height-f)+t.top+parseFloat(i.borderTopWidth),this.target===document.body&&(e.height=Math.max(e.height,24)),e}}},{key:"clearCache",value:function(){this._cache={}}},{key:"cache",value:function(t,e){return"undefined"==typeof this._cache&&(this._cache={}),"undefined"==typeof this._cache[t]&&(this._cache[t]=e.call(this)),this._cache[t]}},{key:"enable",value:function(){var t=arguments.length<=0||void 0===arguments[0]?!0:arguments[0];this.options.addTargetClasses!==!1&&l(this.target,this.getClass("enabled")),l(this.element,this.getClass("enabled")),this.enabled=!0,this.scrollParent!==document&&this.scrollParent.addEventListener("scroll",this.position),t&&this.position()}},{key:"disable",value:function(){h(this.target,this.getClass("enabled")),h(this.element,this.getClass("enabled")),this.enabled=!1,"undefined"!=typeof this.scrollParent&&this.scrollParent.removeEventListener("scroll",this.position)}},{key:"destroy",value:function(){var t=this;this.disable(),B.forEach(function(e,o){return e===t?void B.splice(o,1):void 0})}},{key:"updateAttachClasses",value:function(t,e){var o=this;t=t||this.attachment,e=e||this.targetAttachment;var i=["left","top","bottom","right","middle","center"];"undefined"!=typeof this._addAttachClasses&&this._addAttachClasses.length&&this._addAttachClasses.splice(0,this._addAttachClasses.length),"undefined"==typeof this._addAttachClasses&&(this._addAttachClasses=[]);var n=this._addAttachClasses;t.top&&n.push(this.getClass("element-attached")+"-"+t.top),t.left&&n.push(this.getClass("element-attached")+"-"+t.left),e.top&&n.push(this.getClass("target-attached")+"-"+e.top),e.left&&n.push(this.getClass("target-attached")+"-"+e.left);var r=[];i.forEach(function(t){r.push(o.getClass("element-attached")+"-"+t),r.push(o.getClass("target-attached")+"-"+t)}),T(function(){"undefined"!=typeof o._addAttachClasses&&(c(o.element,o._addAttachClasses,r),o.options.addTargetClasses!==!1&&c(o.target,o._addAttachClasses,r),delete o._addAttachClasses)})}},{key:"position",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?!0:arguments[0];if(this.enabled){this.clearCache();var o=Y(this.targetAttachment,this.attachment);this.updateAttachClasses(this.attachment,o);var i=this.cache("element-bounds",function(){return r(t.element)}),n=i.width,f=i.height;if(0===n&&0===f&&"undefined"!=typeof this.lastSize){var h=this.lastSize;n=h.width,f=h.height}else this.lastSize={width:n,height:f};var l=this.cache("target-bounds",function(){return t.getTargetBounds()}),d=l,u=y(H(this.attachment),{width:n,height:f}),p=y(H(o),d),c=y(this.offset,{width:n,height:f}),g=y(this.targetOffset,d);u=v(u,c),p=v(p,g);for(var m=l.left+p.left-u.left,b=l.top+p.top-u.top,w=0;w<C.modules.length;++w){var O=C.modules[w],E=O.position.call(this,{left:m,top:b,targetAttachment:o,targetPos:l,elementPos:i,offset:u,targetOffset:p,manualOffset:c,manualTargetOffset:g,scrollbarSize:A,attachment:this.attachment});if(E===!1)return!1;"undefined"!=typeof E&&"object"==typeof E&&(b=E.top,m=E.left)}var x={page:{top:b,left:m},viewport:{top:b-pageYOffset,bottom:pageYOffset-b-f+innerHeight,left:m-pageXOffset,right:pageXOffset-m-n+innerWidth}},A=void 0;return document.body.scrollWidth>window.innerWidth&&(A=this.cache("scrollbar-size",a),x.viewport.bottom-=A.height),document.body.scrollHeight>window.innerHeight&&(A=this.cache("scrollbar-size",a),x.viewport.right-=A.width),(-1===["","static"].indexOf(document.body.style.position)||-1===["","static"].indexOf(document.body.parentElement.style.position))&&(x.page.bottom=document.body.scrollHeight-b-f,x.page.right=document.body.scrollWidth-m-n),"undefined"!=typeof this.options.optimizations&&this.options.optimizations.moveElement!==!1&&"undefined"==typeof this.targetModifier&&!function(){var e=t.cache("target-offsetparent",function(){return s(t.target)}),o=t.cache("target-offsetparent-bounds",function(){return r(e)}),i=getComputedStyle(e),n=o,a={};if(["Top","Left","Bottom","Right"].forEach(function(t){a[t.toLowerCase()]=parseFloat(i["border"+t+"Width"])}),o.right=document.body.scrollWidth-o.left-n.width+a.right,o.bottom=document.body.scrollHeight-o.top-n.height+a.bottom,x.page.top>=o.top+a.top&&x.page.bottom>=o.bottom&&x.page.left>=o.left+a.left&&x.page.right>=o.right){var f=e.scrollTop,h=e.scrollLeft;x.offset={top:x.page.top-o.top+f-a.top,left:x.page.left-o.left+h-a.left}}}(),this.move(x),this.history.unshift(x),this.history.length>3&&this.history.pop(),e&&S(),!0}}},{key:"move",value:function(t){var e=this;if("undefined"!=typeof this.element.parentNode){var o={};for(var i in t){o[i]={};for(var n in t[i]){for(var r=!1,a=0;a<this.history.length;++a){var h=this.history[a];if("undefined"!=typeof h[i]&&!g(h[i][n],t[i][n])){r=!0;break}}r||(o[i][n]=!0)}}var l={top:"",left:"",right:"",bottom:""},d=function(t,o){var i="undefined"!=typeof e.options.optimizations,n=i?e.options.optimizations.gpu:null;if(n!==!1){var r=void 0,s=void 0;t.top?(l.top=0,r=o.top):(l.bottom=0,r=-o.bottom),t.left?(l.left=0,s=o.left):(l.right=0,s=-o.right),l[k]="translateX("+Math.round(s)+"px) translateY("+Math.round(r)+"px)","msTransform"!==k&&(l[k]+=" translateZ(0)")}else t.top?l.top=o.top+"px":l.bottom=o.bottom+"px",t.left?l.left=o.left+"px":l.right=o.right+"px"},u=!1;if((o.page.top||o.page.bottom)&&(o.page.left||o.page.right)?(l.position="absolute",d(o.page,t.page)):(o.viewport.top||o.viewport.bottom)&&(o.viewport.left||o.viewport.right)?(l.position="fixed",d(o.viewport,t.viewport)):"undefined"!=typeof o.offset&&o.offset.top&&o.offset.left?!function(){l.position="absolute";var i=e.cache("target-offsetparent",function(){return s(e.target)});s(e.element)!==i&&T(function(){e.element.parentNode.removeChild(e.element),i.appendChild(e.element)}),d(o.offset,t.offset),u=!0}():(l.position="absolute",d({top:!0,left:!0},t.page)),!u){for(var p=!0,c=this.element.parentNode;c&&"BODY"!==c.tagName;){if("static"!==getComputedStyle(c).position){p=!1;break}c=c.parentNode}p||(this.element.parentNode.removeChild(this.element),document.body.appendChild(this.element))}var m={},v=!1;for(var n in l){var y=l[n],b=this.element.style[n];""!==b&&""!==y&&["top","left","bottom","right"].indexOf(n)>=0&&(b=parseFloat(b),y=parseFloat(y)),b!==y&&(v=!0,m[n]=y)}v&&T(function(){f(e.element.style,m)})}}}]),t}();N.modules=[],C.position=_;var R=f(N,C),M=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),P=C.Utils,r=P.getBounds,f=P.extend,c=P.updateClasses,T=P.defer,U=["left","top","right","bottom"];C.modules.push({position:function(t){var e=this,o=t.top,i=t.left,n=t.targetAttachment;if(!this.options.constraints)return!0;var s=this.cache("element-bounds",function(){return r(e.element)}),a=s.height,h=s.width;if(0===h&&0===a&&"undefined"!=typeof this.lastSize){var l=this.lastSize;h=l.width,a=l.height}var d=this.cache("target-bounds",function(){return e.getTargetBounds()}),u=d.height,p=d.width,g=[this.getClass("pinned"),this.getClass("out-of-bounds")];this.options.constraints.forEach(function(t){var e=t.outOfBoundsClass,o=t.pinnedClass;e&&g.push(e),o&&g.push(o)}),g.forEach(function(t){["left","top","right","bottom"].forEach(function(e){g.push(t+"-"+e)})});var m=[],v=f({},n),y=f({},this.attachment);return this.options.constraints.forEach(function(t){var r=t.to,s=t.attachment,f=t.pin;"undefined"==typeof s&&(s="");var l=void 0,d=void 0;if(s.indexOf(" ")>=0){var c=s.split(" "),g=M(c,2);d=g[0],l=g[1]}else l=d=s;var w=b(e,r);("target"===d||"both"===d)&&(o<w[1]&&"top"===v.top&&(o+=u,v.top="bottom"),o+a>w[3]&&"bottom"===v.top&&(o-=u,v.top="top")),"together"===d&&(o<w[1]&&"top"===v.top&&("bottom"===y.top?(o+=u,v.top="bottom",o+=a,y.top="top"):"top"===y.top&&(o+=u,v.top="bottom",o-=a,y.top="bottom")),o+a>w[3]&&"bottom"===v.top&&("top"===y.top?(o-=u,v.top="top",o-=a,y.top="bottom"):"bottom"===y.top&&(o-=u,v.top="top",o+=a,y.top="top")),"middle"===v.top&&(o+a>w[3]&&"top"===y.top?(o-=a,y.top="bottom"):o<w[1]&&"bottom"===y.top&&(o+=a,y.top="top"))),("target"===l||"both"===l)&&(i<w[0]&&"left"===v.left&&(i+=p,v.left="right"),i+h>w[2]&&"right"===v.left&&(i-=p,v.left="left")),"together"===l&&(i<w[0]&&"left"===v.left?"right"===y.left?(i+=p,v.left="right",i+=h,y.left="left"):"left"===y.left&&(i+=p,v.left="right",i-=h,y.left="right"):i+h>w[2]&&"right"===v.left?"left"===y.left?(i-=p,v.left="left",i-=h,y.left="right"):"right"===y.left&&(i-=p,v.left="left",i+=h,y.left="left"):"center"===v.left&&(i+h>w[2]&&"left"===y.left?(i-=h,y.left="right"):i<w[0]&&"right"===y.left&&(i+=h,y.left="left"))),("element"===d||"both"===d)&&(o<w[1]&&"bottom"===y.top&&(o+=a,y.top="top"),o+a>w[3]&&"top"===y.top&&(o-=a,y.top="bottom")),("element"===l||"both"===l)&&(i<w[0]&&"right"===y.left&&(i+=h,y.left="left"),i+h>w[2]&&"left"===y.left&&(i-=h,y.left="right")),"string"==typeof f?f=f.split(",").map(function(t){return t.trim()}):f===!0&&(f=["top","left","right","bottom"]),f=f||[];var C=[],O=[];o<w[1]&&(f.indexOf("top")>=0?(o=w[1],C.push("top")):O.push("top")),o+a>w[3]&&(f.indexOf("bottom")>=0?(o=w[3]-a,C.push("bottom")):O.push("bottom")),i<w[0]&&(f.indexOf("left")>=0?(i=w[0],C.push("left")):O.push("left")),i+h>w[2]&&(f.indexOf("right")>=0?(i=w[2]-h,C.push("right")):O.push("right")),C.length&&!function(){var t=void 0;t="undefined"!=typeof e.options.pinnedClass?e.options.pinnedClass:e.getClass("pinned"),m.push(t),C.forEach(function(e){m.push(t+"-"+e)})}(),O.length&&!function(){var t=void 0;t="undefined"!=typeof e.options.outOfBoundsClass?e.options.outOfBoundsClass:e.getClass("out-of-bounds"),m.push(t),O.forEach(function(e){m.push(t+"-"+e)})}(),(C.indexOf("left")>=0||C.indexOf("right")>=0)&&(y.left=v.left=!1),(C.indexOf("top")>=0||C.indexOf("bottom")>=0)&&(y.top=v.top=!1),(v.top!==n.top||v.left!==n.left||y.top!==e.attachment.top||y.left!==e.attachment.left)&&e.updateAttachClasses(y,v)}),T(function(){e.options.addTargetClasses!==!1&&c(e.target,m,g),c(e.element,m,g)}),{top:o,left:i}}});var P=C.Utils,r=P.getBounds,c=P.updateClasses,T=P.defer;C.modules.push({position:function(t){var e=this,o=t.top,i=t.left,n=this.cache("element-bounds",function(){return r(e.element)}),s=n.height,a=n.width,f=this.getTargetBounds(),h=o+s,l=i+a,d=[];o<=f.bottom&&h>=f.top&&["left","right"].forEach(function(t){var e=f[t];(e===i||e===l)&&d.push(t)}),i<=f.right&&l>=f.left&&["top","bottom"].forEach(function(t){var e=f[t];(e===o||e===h)&&d.push(t)});var u=[],p=[],g=["left","top","right","bottom"];return u.push(this.getClass("abutted")),g.forEach(function(t){u.push(e.getClass("abutted")+"-"+t)}),d.length&&p.push(this.getClass("abutted")),d.forEach(function(t){p.push(e.getClass("abutted")+"-"+t)}),T(function(){e.options.addTargetClasses!==!1&&c(e.target,p,u),c(e.element,p,u)}),!0}});var M=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();return C.modules.push({position:function(t){var e=t.top,o=t.left;if(this.options.shift){var i=this.options.shift;"function"==typeof this.options.shift&&(i=this.options.shift.call(this,{top:e,left:o}));var n=void 0,r=void 0;if("string"==typeof i){i=i.split(" "),i[1]=i[1]||i[0];var s=M(i,2);n=s[0],r=s[1],n=parseFloat(n,10),r=parseFloat(r,10)}else n=i.top,r=i.left;return e+=n,o+=r,{top:e,left:o}}}}),R});;

'use strict';
var Config = {};
Config.Emoji = {
    "00a9": ["\u00A9", ["copyright"]],
    "00ae": ["\u00AE", ["registered"]],
    "203c": ["\u203C", ["bangbang"]],
    "2049": ["\u2049", ["interrobang"]],
    "2122": ["\u2122", ["tm"]],
    "2139": ["\u2139", ["information_source"]],
    "2194": ["\u2194", ["left_right_arrow"]],
    "2195": ["\u2195", ["arrow_up_down"]],
    "2196": ["\u2196", ["arrow_upper_left"]],
    "2197": ["\u2197", ["arrow_upper_right"]],
    "2198": ["\u2198", ["arrow_lower_right"]],
    "2199": ["\u2199", ["arrow_lower_left"]],
    "21a9": ["\u21A9", ["leftwards_arrow_with_hook"]],
    "21aa": ["\u21AA", ["arrow_right_hook"]],
    "231a": ["\u231A", ["watch"]],
    "231b": ["\u231B", ["hourglass"]],
    "23e9": ["\u23E9", ["fast_forward"]],
    "23ea": ["\u23EA", ["rewind"]],
    "23eb": ["\u23EB", ["arrow_double_up"]],
    "23ec": ["\u23EC", ["arrow_double_down"]],
    "23f0": ["\u23F0", ["alarm_clock"]],
    "23f3": ["\u23F3", ["hourglass_flowing_sand"]],
    "24c2": ["\u24C2", ["m"]],
    "25aa": ["\u25AA", ["black_small_square"]],
    "25ab": ["\u25AB", ["white_small_square"]],
    "25b6": ["\u25B6", ["arrow_forward"]],
    "25c0": ["\u25C0", ["arrow_backward"]],
    "25fb": ["\u25FB", ["white_medium_square"]],
    "25fc": ["\u25FC", ["black_medium_square"]],
    "25fd": ["\u25FD", ["white_medium_small_square"]],
    "25fe": ["\u25FE", ["black_medium_small_square"]],
    "2600": ["\u2600", ["sunny"]],
    "2601": ["\u2601", ["cloud"]],
    "260e": ["\u260E", ["phone", "telephone"]],
    "2611": ["\u2611", ["ballot_box_with_check"]],
    "2614": ["\u2614", ["umbrella"]],
    "2615": ["\u2615", ["coffee"]],
    "261d": ["\u261D", ["point_up"]],
    "263a": ["\u263A", ["relaxed"]],
    "2648": ["\u2648", ["aries"]],
    "2649": ["\u2649", ["taurus"]],
    "264a": ["\u264A", ["gemini"]],
    "264b": ["\u264B", ["cancer"]],
    "264c": ["\u264C", ["leo"]],
    "264d": ["\u264D", ["virgo"]],
    "264e": ["\u264E", ["libra"]],
    "264f": ["\u264F", ["scorpius"]],
    "2650": ["\u2650", ["sagittarius"]],
    "2651": ["\u2651", ["capricorn"]],
    "2652": ["\u2652", ["aquarius"]],
    "2653": ["\u2653", ["pisces"]],
    "2660": ["\u2660", ["spades"]],
    "2663": ["\u2663", ["clubs"]],
    "2665": ["\u2665", ["hearts"]],
    "2666": ["\u2666", ["diamonds"]],
    "2668": ["\u2668", ["hotsprings"]],
    "267b": ["\u267B", ["recycle"]],
    "267f": ["\u267F", ["wheelchair"]],
    "2693": ["\u2693", ["anchor"]],
    "26a0": ["\u26A0", ["warning"]],
    "26a1": ["\u26A1", ["zap"]],
    "26aa": ["\u26AA", ["white_circle"]],
    "26ab": ["\u26AB", ["black_circle"]],
    "26bd": ["\u26BD", ["soccer"]],
    "26be": ["\u26BE", ["baseball"]],
    "26c4": ["\u26C4", ["snowman"]],
    "26c5": ["\u26C5", ["partly_sunny"]],
    "26ce": ["\u26CE", ["ophiuchus"]],
    "26d4": ["\u26D4", ["no_entry"]],
    "26ea": ["\u26EA", ["church"]],
    "26f2": ["\u26F2", ["fountain"]],
    "26f3": ["\u26F3", ["golf"]],
    "26f5": ["\u26F5", ["boat", "sailboat"]],
    "26fa": ["\u26FA", ["tent"]],
    "26fd": ["\u26FD", ["fuelpump"]],
    "2702": ["\u2702", ["scissors"]],
    "2705": ["\u2705", ["white_check_mark"]],
    "2708": ["\u2708", ["airplane"]],
    "2709": ["\u2709", ["email", "envelope"]],
    "270a": ["\u270A", ["fist"]],
    "270b": ["\u270B", ["hand", "raised_hand"]],
    "270c": ["\u270C", ["v"]],
    "270f": ["\u270F", ["pencil2"]],
    "2712": ["\u2712", ["black_nib"]],
    "2714": ["\u2714", ["heavy_check_mark"]],
    "2716": ["\u2716", ["heavy_multiplication_x"]],
    "2728": ["\u2728", ["sparkles"]],
    "2733": ["\u2733", ["eight_spoked_asterisk"]],
    "2734": ["\u2734", ["eight_pointed_black_star"]],
    "2744": ["\u2744", ["snowflake"]],
    "2747": ["\u2747", ["sparkle"]],
    "274c": ["\u274C", ["x"]],
    "274e": ["\u274E", ["negative_squared_cross_mark"]],
    "2753": ["\u2753", ["question"]],
    "2754": ["\u2754", ["grey_question"]],
    "2755": ["\u2755", ["grey_exclamation"]],
    "2757": ["\u2757", ["exclamation", "heavy_exclamation_mark"]],
    "2764": ["\u2764", ["heart"], "<3"],
    "2795": ["\u2795", ["heavy_plus_sign"]],
    "2796": ["\u2796", ["heavy_minus_sign"]],
    "2797": ["\u2797", ["heavy_division_sign"]],
    "27a1": ["\u27A1", ["arrow_right"]],
    "27b0": ["\u27B0", ["curly_loop"]],
    "27bf": ["\u27BF", ["loop"]],
    "2934": ["\u2934", ["arrow_heading_up"]],
    "2935": ["\u2935", ["arrow_heading_down"]],
    "2b05": ["\u2B05", ["arrow_left"]],
    "2b06": ["\u2B06", ["arrow_up"]],
    "2b07": ["\u2B07", ["arrow_down"]],
    "2b1b": ["\u2B1B", ["black_large_square"]],
    "2b1c": ["\u2B1C", ["white_large_square"]],
    "2b50": ["\u2B50", ["star"]],
    "2b55": ["\u2B55", ["o"]],
    "3030": ["\u3030", ["wavy_dash"]],
    "303d": ["\u303D", ["part_alternation_mark"]],
    "3297": ["\u3297", ["congratulations"]],
    "3299": ["\u3299", ["secret"]],
    "1f004": ["\uD83C\uDC04", ["mahjong"]],
    "1f0cf": ["\uD83C\uDCCF", ["black_joker"]],
    "1f170": ["\uD83C\uDD70", ["a"]],
    "1f171": ["\uD83C\uDD71", ["b"]],
    "1f17e": ["\uD83C\uDD7E", ["o2"]],
    "1f17f": ["\uD83C\uDD7F", ["parking"]],
    "1f18e": ["\uD83C\uDD8E", ["ab"]],
    "1f191": ["\uD83C\uDD91", ["cl"]],
    "1f192": ["\uD83C\uDD92", ["cool"]],
    "1f193": ["\uD83C\uDD93", ["free"]],
    "1f194": ["\uD83C\uDD94", ["id"]],
    "1f195": ["\uD83C\uDD95", ["new"]],
    "1f196": ["\uD83C\uDD96", ["ng"]],
    "1f197": ["\uD83C\uDD97", ["ok"]],
    "1f198": ["\uD83C\uDD98", ["sos"]],
    "1f199": ["\uD83C\uDD99", ["up"]],
    "1f19a": ["\uD83C\uDD9A", ["vs"]],
    "1f201": ["\uD83C\uDE01", ["koko"]],
    "1f202": ["\uD83C\uDE02", ["sa"]],
    "1f21a": ["\uD83C\uDE1A", ["u7121"]],
    "1f22f": ["\uD83C\uDE2F", ["u6307"]],
    "1f232": ["\uD83C\uDE32", ["u7981"]],
    "1f233": ["\uD83C\uDE33", ["u7a7a"]],
    "1f234": ["\uD83C\uDE34", ["u5408"]],
    "1f235": ["\uD83C\uDE35", ["u6e80"]],
    "1f236": ["\uD83C\uDE36", ["u6709"]],
    "1f237": ["\uD83C\uDE37", ["u6708"]],
    "1f238": ["\uD83C\uDE38", ["u7533"]],
    "1f239": ["\uD83C\uDE39", ["u5272"]],
    "1f23a": ["\uD83C\uDE3A", ["u55b6"]],
    "1f250": ["\uD83C\uDE50", ["ideograph_advantage"]],
    "1f251": ["\uD83C\uDE51", ["accept"]],
    "1f300": ["\uD83C\uDF00", ["cyclone"]],
    "1f301": ["\uD83C\uDF01", ["foggy"]],
    "1f302": ["\uD83C\uDF02", ["closed_umbrella"]],
    "1f303": ["\uD83C\uDF03", ["night_with_stars"]],
    "1f304": ["\uD83C\uDF04", ["sunrise_over_mountains"]],
    "1f305": ["\uD83C\uDF05", ["sunrise"]],
    "1f306": ["\uD83C\uDF06", ["city_sunset"]],
    "1f307": ["\uD83C\uDF07", ["city_sunrise"]],
    "1f308": ["\uD83C\uDF08", ["rainbow"]],
    "1f309": ["\uD83C\uDF09", ["bridge_at_night"]],
    "1f30a": ["\uD83C\uDF0A", ["ocean"]],
    "1f30b": ["\uD83C\uDF0B", ["volcano"]],
    "1f30c": ["\uD83C\uDF0C", ["milky_way"]],
    "1f30d": ["\uD83C\uDF0D", ["earth_africa"]],
    "1f30e": ["\uD83C\uDF0E", ["earth_americas"]],
    "1f30f": ["\uD83C\uDF0F", ["earth_asia"]],
    "1f310": ["\uD83C\uDF10", ["globe_with_meridians"]],
    "1f311": ["\uD83C\uDF11", ["new_moon"]],
    "1f312": ["\uD83C\uDF12", ["waxing_crescent_moon"]],
    "1f313": ["\uD83C\uDF13", ["first_quarter_moon"]],
    "1f314": ["\uD83C\uDF14", ["moon", "waxing_gibbous_moon"]],
    "1f315": ["\uD83C\uDF15", ["full_moon"]],
    "1f316": ["\uD83C\uDF16", ["waning_gibbous_moon"]],
    "1f317": ["\uD83C\uDF17", ["last_quarter_moon"]],
    "1f318": ["\uD83C\uDF18", ["waning_crescent_moon"]],
    "1f319": ["\uD83C\uDF19", ["crescent_moon"]],
    "1f320": ["\uD83C\uDF20", ["stars"]],
    "1f31a": ["\uD83C\uDF1A", ["new_moon_with_face"]],
    "1f31b": ["\uD83C\uDF1B", ["first_quarter_moon_with_face"]],
    "1f31c": ["\uD83C\uDF1C", ["last_quarter_moon_with_face"]],
    "1f31d": ["\uD83C\uDF1D", ["full_moon_with_face"]],
    "1f31e": ["\uD83C\uDF1E", ["sun_with_face"]],
    "1f31f": ["\uD83C\uDF1F", ["star2"]],
    "1f330": ["\uD83C\uDF30", ["chestnut"]],
    "1f331": ["\uD83C\uDF31", ["seedling"]],
    "1f332": ["\uD83C\uDF32", ["evergreen_tree"]],
    "1f333": ["\uD83C\uDF33", ["deciduous_tree"]],
    "1f334": ["\uD83C\uDF34", ["palm_tree"]],
    "1f335": ["\uD83C\uDF35", ["cactus"]],
    "1f337": ["\uD83C\uDF37", ["tulip"]],
    "1f338": ["\uD83C\uDF38", ["cherry_blossom"]],
    "1f339": ["\uD83C\uDF39", ["rose"]],
    "1f33a": ["\uD83C\uDF3A", ["hibiscus"]],
    "1f33b": ["\uD83C\uDF3B", ["sunflower"]],
    "1f33c": ["\uD83C\uDF3C", ["blossom"]],
    "1f33d": ["\uD83C\uDF3D", ["corn"]],
    "1f33e": ["\uD83C\uDF3E", ["ear_of_rice"]],
    "1f33f": ["\uD83C\uDF3F", ["herb"]],
    "1f340": ["\uD83C\uDF40", ["four_leaf_clover"]],
    "1f341": ["\uD83C\uDF41", ["maple_leaf"]],
    "1f342": ["\uD83C\uDF42", ["fallen_leaf"]],
    "1f343": ["\uD83C\uDF43", ["leaves"]],
    "1f344": ["\uD83C\uDF44", ["mushroom"]],
    "1f345": ["\uD83C\uDF45", ["tomato"]],
    "1f346": ["\uD83C\uDF46", ["eggplant"]],
    "1f347": ["\uD83C\uDF47", ["grapes"]],
    "1f348": ["\uD83C\uDF48", ["melon"]],
    "1f349": ["\uD83C\uDF49", ["watermelon"]],
    "1f34a": ["\uD83C\uDF4A", ["tangerine"]],
    "1f34b": ["\uD83C\uDF4B", ["lemon"]],
    "1f34c": ["\uD83C\uDF4C", ["banana"]],
    "1f34d": ["\uD83C\uDF4D", ["pineapple"]],
    "1f34e": ["\uD83C\uDF4E", ["apple"]],
    "1f34f": ["\uD83C\uDF4F", ["green_apple"]],
    "1f350": ["\uD83C\uDF50", ["pear"]],
    "1f351": ["\uD83C\uDF51", ["peach"]],
    "1f352": ["\uD83C\uDF52", ["cherries"]],
    "1f353": ["\uD83C\uDF53", ["strawberry"]],
    "1f354": ["\uD83C\uDF54", ["hamburger"]],
    "1f355": ["\uD83C\uDF55", ["pizza"]],
    "1f356": ["\uD83C\uDF56", ["meat_on_bone"]],
    "1f357": ["\uD83C\uDF57", ["poultry_leg"]],
    "1f358": ["\uD83C\uDF58", ["rice_cracker"]],
    "1f359": ["\uD83C\uDF59", ["rice_ball"]],
    "1f35a": ["\uD83C\uDF5A", ["rice"]],
    "1f35b": ["\uD83C\uDF5B", ["curry"]],
    "1f35c": ["\uD83C\uDF5C", ["ramen"]],
    "1f35d": ["\uD83C\uDF5D", ["spaghetti"]],
    "1f35e": ["\uD83C\uDF5E", ["bread"]],
    "1f35f": ["\uD83C\uDF5F", ["fries"]],
    "1f360": ["\uD83C\uDF60", ["sweet_potato"]],
    "1f361": ["\uD83C\uDF61", ["dango"]],
    "1f362": ["\uD83C\uDF62", ["oden"]],
    "1f363": ["\uD83C\uDF63", ["sushi"]],
    "1f364": ["\uD83C\uDF64", ["fried_shrimp"]],
    "1f365": ["\uD83C\uDF65", ["fish_cake"]],
    "1f366": ["\uD83C\uDF66", ["icecream"]],
    "1f367": ["\uD83C\uDF67", ["shaved_ice"]],
    "1f368": ["\uD83C\uDF68", ["ice_cream"]],
    "1f369": ["\uD83C\uDF69", ["doughnut"]],
    "1f36a": ["\uD83C\uDF6A", ["cookie"]],
    "1f36b": ["\uD83C\uDF6B", ["chocolate_bar"]],
    "1f36c": ["\uD83C\uDF6C", ["candy"]],
    "1f36d": ["\uD83C\uDF6D", ["lollipop"]],
    "1f36e": ["\uD83C\uDF6E", ["custard"]],
    "1f36f": ["\uD83C\uDF6F", ["honey_pot"]],
    "1f370": ["\uD83C\uDF70", ["cake"]],
    "1f371": ["\uD83C\uDF71", ["bento"]],
    "1f372": ["\uD83C\uDF72", ["stew"]],
    "1f373": ["\uD83C\uDF73", ["egg"]],
    "1f374": ["\uD83C\uDF74", ["fork_and_knife"]],
    "1f375": ["\uD83C\uDF75", ["tea"]],
    "1f376": ["\uD83C\uDF76", ["sake"]],
    "1f377": ["\uD83C\uDF77", ["wine_glass"]],
    "1f378": ["\uD83C\uDF78", ["cocktail"]],
    "1f379": ["\uD83C\uDF79", ["tropical_drink"]],
    "1f37a": ["\uD83C\uDF7A", ["beer"]],
    "1f37b": ["\uD83C\uDF7B", ["beers"]],
    "1f37c": ["\uD83C\uDF7C", ["baby_bottle"]],
    "1f380": ["\uD83C\uDF80", ["ribbon"]],
    "1f381": ["\uD83C\uDF81", ["gift"]],
    "1f382": ["\uD83C\uDF82", ["birthday"]],
    "1f383": ["\uD83C\uDF83", ["jack_o_lantern"]],
    "1f384": ["\uD83C\uDF84", ["christmas_tree"]],
    "1f385": ["\uD83C\uDF85", ["santa"]],
    "1f386": ["\uD83C\uDF86", ["fireworks"]],
    "1f387": ["\uD83C\uDF87", ["sparkler"]],
    "1f388": ["\uD83C\uDF88", ["balloon"]],
    "1f389": ["\uD83C\uDF89", ["tada"]],
    "1f38a": ["\uD83C\uDF8A", ["confetti_ball"]],
    "1f38b": ["\uD83C\uDF8B", ["tanabata_tree"]],
    "1f38c": ["\uD83C\uDF8C", ["crossed_flags"]],
    "1f38d": ["\uD83C\uDF8D", ["bamboo"]],
    "1f38e": ["\uD83C\uDF8E", ["dolls"]],
    "1f38f": ["\uD83C\uDF8F", ["flags"]],
    "1f390": ["\uD83C\uDF90", ["wind_chime"]],
    "1f391": ["\uD83C\uDF91", ["rice_scene"]],
    "1f392": ["\uD83C\uDF92", ["school_satchel"]],
    "1f393": ["\uD83C\uDF93", ["mortar_board"]],
    "1f3a0": ["\uD83C\uDFA0", ["carousel_horse"]],
    "1f3a1": ["\uD83C\uDFA1", ["ferris_wheel"]],
    "1f3a2": ["\uD83C\uDFA2", ["roller_coaster"]],
    "1f3a3": ["\uD83C\uDFA3", ["fishing_pole_and_fish"]],
    "1f3a4": ["\uD83C\uDFA4", ["microphone"]],
    "1f3a5": ["\uD83C\uDFA5", ["movie_camera"]],
    "1f3a6": ["\uD83C\uDFA6", ["cinema"]],
    "1f3a7": ["\uD83C\uDFA7", ["headphones"]],
    "1f3a8": ["\uD83C\uDFA8", ["art"]],
    "1f3a9": ["\uD83C\uDFA9", ["tophat"]],
    "1f3aa": ["\uD83C\uDFAA", ["circus_tent"]],
    "1f3ab": ["\uD83C\uDFAB", ["ticket"]],
    "1f3ac": ["\uD83C\uDFAC", ["clapper"]],
    "1f3ad": ["\uD83C\uDFAD", ["performing_arts"]],
    "1f3ae": ["\uD83C\uDFAE", ["video_game"]],
    "1f3af": ["\uD83C\uDFAF", ["dart"]],
    "1f3b0": ["\uD83C\uDFB0", ["slot_machine"]],
    "1f3b1": ["\uD83C\uDFB1", ["8ball"]],
    "1f3b2": ["\uD83C\uDFB2", ["game_die"]],
    "1f3b3": ["\uD83C\uDFB3", ["bowling"]],
    "1f3b4": ["\uD83C\uDFB4", ["flower_playing_cards"]],
    "1f3b5": ["\uD83C\uDFB5", ["musical_note"]],
    "1f3b6": ["\uD83C\uDFB6", ["notes"]],
    "1f3b7": ["\uD83C\uDFB7", ["saxophone"]],
    "1f3b8": ["\uD83C\uDFB8", ["guitar"]],
    "1f3b9": ["\uD83C\uDFB9", ["musical_keyboard"]],
    "1f3ba": ["\uD83C\uDFBA", ["trumpet"]],
    "1f3bb": ["\uD83C\uDFBB", ["violin"]],
    "1f3bc": ["\uD83C\uDFBC", ["musical_score"]],
    "1f3bd": ["\uD83C\uDFBD", ["running_shirt_with_sash"]],
    "1f3be": ["\uD83C\uDFBE", ["tennis"]],
    "1f3bf": ["\uD83C\uDFBF", ["ski"]],
    "1f3c0": ["\uD83C\uDFC0", ["basketball"]],
    "1f3c1": ["\uD83C\uDFC1", ["checkered_flag"]],
    "1f3c2": ["\uD83C\uDFC2", ["snowboarder"]],
    "1f3c3": ["\uD83C\uDFC3", ["runner", "running"]],
    "1f3c4": ["\uD83C\uDFC4", ["surfer"]],
    "1f3c6": ["\uD83C\uDFC6", ["trophy"]],
    "1f3c7": ["\uD83C\uDFC7", ["horse_racing"]],
    "1f3c8": ["\uD83C\uDFC8", ["football"]],
    "1f3c9": ["\uD83C\uDFC9", ["rugby_football"]],
    "1f3ca": ["\uD83C\uDFCA", ["swimmer"]],
    "1f3e0": ["\uD83C\uDFE0", ["house"]],
    "1f3e1": ["\uD83C\uDFE1", ["house_with_garden"]],
    "1f3e2": ["\uD83C\uDFE2", ["office"]],
    "1f3e3": ["\uD83C\uDFE3", ["post_office"]],
    "1f3e4": ["\uD83C\uDFE4", ["european_post_office"]],
    "1f3e5": ["\uD83C\uDFE5", ["hospital"]],
    "1f3e6": ["\uD83C\uDFE6", ["bank"]],
    "1f3e7": ["\uD83C\uDFE7", ["atm"]],
    "1f3e8": ["\uD83C\uDFE8", ["hotel"]],
    "1f3e9": ["\uD83C\uDFE9", ["love_hotel"]],
    "1f3ea": ["\uD83C\uDFEA", ["convenience_store"]],
    "1f3eb": ["\uD83C\uDFEB", ["school"]],
    "1f3ec": ["\uD83C\uDFEC", ["department_store"]],
    "1f3ed": ["\uD83C\uDFED", ["factory"]],
    "1f3ee": ["\uD83C\uDFEE", ["izakaya_lantern", "lantern"]],
    "1f3ef": ["\uD83C\uDFEF", ["japanese_castle"]],
    "1f3f0": ["\uD83C\uDFF0", ["european_castle"]],
    "1f400": ["\uD83D\uDC00", ["rat"]],
    "1f401": ["\uD83D\uDC01", ["mouse2"]],
    "1f402": ["\uD83D\uDC02", ["ox"]],
    "1f403": ["\uD83D\uDC03", ["water_buffalo"]],
    "1f404": ["\uD83D\uDC04", ["cow2"]],
    "1f405": ["\uD83D\uDC05", ["tiger2"]],
    "1f406": ["\uD83D\uDC06", ["leopard"]],
    "1f407": ["\uD83D\uDC07", ["rabbit2"]],
    "1f408": ["\uD83D\uDC08", ["cat2"]],
    "1f409": ["\uD83D\uDC09", ["dragon"]],
    "1f40a": ["\uD83D\uDC0A", ["crocodile"]],
    "1f40b": ["\uD83D\uDC0B", ["whale2"]],
    "1f40c": ["\uD83D\uDC0C", ["snail"]],
    "1f40d": ["\uD83D\uDC0D", ["snake"]],
    "1f40e": ["\uD83D\uDC0E", ["racehorse"]],
    "1f40f": ["\uD83D\uDC0F", ["ram"]],
    "1f410": ["\uD83D\uDC10", ["goat"]],
    "1f411": ["\uD83D\uDC11", ["sheep"]],
    "1f412": ["\uD83D\uDC12", ["monkey"]],
    "1f413": ["\uD83D\uDC13", ["rooster"]],
    "1f414": ["\uD83D\uDC14", ["chicken"]],
    "1f415": ["\uD83D\uDC15", ["dog2"]],
    "1f416": ["\uD83D\uDC16", ["pig2"]],
    "1f417": ["\uD83D\uDC17", ["boar"]],
    "1f418": ["\uD83D\uDC18", ["elephant"]],
    "1f419": ["\uD83D\uDC19", ["octopus"]],
    "1f41a": ["\uD83D\uDC1A", ["shell"]],
    "1f41b": ["\uD83D\uDC1B", ["bug"]],
    "1f41c": ["\uD83D\uDC1C", ["ant"]],
    "1f41d": ["\uD83D\uDC1D", ["bee", "honeybee"]],
    "1f41e": ["\uD83D\uDC1E", ["beetle"]],
    "1f41f": ["\uD83D\uDC1F", ["fish"]],
    "1f420": ["\uD83D\uDC20", ["tropical_fish"]],
    "1f421": ["\uD83D\uDC21", ["blowfish"]],
    "1f422": ["\uD83D\uDC22", ["turtle"]],
    "1f423": ["\uD83D\uDC23", ["hatching_chick"]],
    "1f424": ["\uD83D\uDC24", ["baby_chick"]],
    "1f425": ["\uD83D\uDC25", ["hatched_chick"]],
    "1f426": ["\uD83D\uDC26", ["bird"]],
    "1f427": ["\uD83D\uDC27", ["penguin"]],
    "1f428": ["\uD83D\uDC28", ["koala"]],
    "1f429": ["\uD83D\uDC29", ["poodle"]],
    "1f42a": ["\uD83D\uDC2A", ["dromedary_camel"]],
    "1f42b": ["\uD83D\uDC2B", ["camel"]],
    "1f42c": ["\uD83D\uDC2C", ["dolphin", "flipper"]],
    "1f42d": ["\uD83D\uDC2D", ["mouse"]],
    "1f42e": ["\uD83D\uDC2E", ["cow"]],
    "1f42f": ["\uD83D\uDC2F", ["tiger"]],
    "1f430": ["\uD83D\uDC30", ["rabbit"]],
    "1f431": ["\uD83D\uDC31", ["cat"]],
    "1f432": ["\uD83D\uDC32", ["dragon_face"]],
    "1f433": ["\uD83D\uDC33", ["whale"]],
    "1f434": ["\uD83D\uDC34", ["horse"]],
    "1f435": ["\uD83D\uDC35", ["monkey_face"]],
    "1f436": ["\uD83D\uDC36", ["dog"]],
    "1f437": ["\uD83D\uDC37", ["pig"]],
    "1f438": ["\uD83D\uDC38", ["frog"]],
    "1f439": ["\uD83D\uDC39", ["hamster"]],
    "1f43a": ["\uD83D\uDC3A", ["wolf"]],
    "1f43b": ["\uD83D\uDC3B", ["bear"]],
    "1f43c": ["\uD83D\uDC3C", ["panda_face"]],
    "1f43d": ["\uD83D\uDC3D", ["pig_nose"]],
    "1f43e": ["\uD83D\uDC3E", ["feet", "paw_prints"]],
    "1f440": ["\uD83D\uDC40", ["eyes"]],
    "1f442": ["\uD83D\uDC42", ["ear"]],
    "1f443": ["\uD83D\uDC43", ["nose"]],
    "1f444": ["\uD83D\uDC44", ["lips"]],
    "1f445": ["\uD83D\uDC45", ["tongue"]],
    "1f446": ["\uD83D\uDC46", ["point_up_2"]],
    "1f447": ["\uD83D\uDC47", ["point_down"]],
    "1f448": ["\uD83D\uDC48", ["point_left"]],
    "1f449": ["\uD83D\uDC49", ["point_right"]],
    "1f44a": ["\uD83D\uDC4A", ["facepunch", "punch"]],
    "1f44b": ["\uD83D\uDC4B", ["wave"]],
    "1f44c": ["\uD83D\uDC4C", ["ok_hand"]],
    "1f44d": ["\uD83D\uDC4D", ["+1", "thumbsup"]],
    "1f44e": ["\uD83D\uDC4E", ["-1", "thumbsdown"]],
    "1f44f": ["\uD83D\uDC4F", ["clap"]],
    "1f450": ["\uD83D\uDC50", ["open_hands"]],
    "1f451": ["\uD83D\uDC51", ["crown"]],
    "1f452": ["\uD83D\uDC52", ["womans_hat"]],
    "1f453": ["\uD83D\uDC53", ["eyeglasses"]],
    "1f454": ["\uD83D\uDC54", ["necktie"]],
    "1f455": ["\uD83D\uDC55", ["shirt", "tshirt"]],
    "1f456": ["\uD83D\uDC56", ["jeans"]],
    "1f457": ["\uD83D\uDC57", ["dress"]],
    "1f458": ["\uD83D\uDC58", ["kimono"]],
    "1f459": ["\uD83D\uDC59", ["bikini"]],
    "1f45a": ["\uD83D\uDC5A", ["womans_clothes"]],
    "1f45b": ["\uD83D\uDC5B", ["purse"]],
    "1f45c": ["\uD83D\uDC5C", ["handbag"]],
    "1f45d": ["\uD83D\uDC5D", ["pouch"]],
    "1f45e": ["\uD83D\uDC5E", ["mans_shoe", "shoe"]],
    "1f45f": ["\uD83D\uDC5F", ["athletic_shoe"]],
    "1f460": ["\uD83D\uDC60", ["high_heel"]],
    "1f461": ["\uD83D\uDC61", ["sandal"]],
    "1f462": ["\uD83D\uDC62", ["boot"]],
    "1f463": ["\uD83D\uDC63", ["footprints"]],
    "1f464": ["\uD83D\uDC64", ["bust_in_silhouette"]],
    "1f465": ["\uD83D\uDC65", ["busts_in_silhouette"]],
    "1f466": ["\uD83D\uDC66", ["boy"]],
    "1f467": ["\uD83D\uDC67", ["girl"]],
    "1f468": ["\uD83D\uDC68", ["man"]],
    "1f469": ["\uD83D\uDC69", ["woman"]],
    "1f46a": ["\uD83D\uDC6A", ["family"]],
    "1f46b": ["\uD83D\uDC6B", ["couple"]],
    "1f46c": ["\uD83D\uDC6C", ["two_men_holding_hands"]],
    "1f46d": ["\uD83D\uDC6D", ["two_women_holding_hands"]],
    "1f46e": ["\uD83D\uDC6E", ["cop"]],
    "1f46f": ["\uD83D\uDC6F", ["dancers"]],
    "1f470": ["\uD83D\uDC70", ["bride_with_veil"]],
    "1f471": ["\uD83D\uDC71", ["person_with_blond_hair"]],
    "1f472": ["\uD83D\uDC72", ["man_with_gua_pi_mao"]],
    "1f473": ["\uD83D\uDC73", ["man_with_turban"]],
    "1f474": ["\uD83D\uDC74", ["older_man"]],
    "1f475": ["\uD83D\uDC75", ["older_woman"]],
    "1f476": ["\uD83D\uDC76", ["baby"]],
    "1f477": ["\uD83D\uDC77", ["construction_worker"]],
    "1f478": ["\uD83D\uDC78", ["princess"]],
    "1f479": ["\uD83D\uDC79", ["japanese_ogre"]],
    "1f47a": ["\uD83D\uDC7A", ["japanese_goblin"]],
    "1f47b": ["\uD83D\uDC7B", ["ghost"]],
    "1f47c": ["\uD83D\uDC7C", ["angel"]],
    "1f47d": ["\uD83D\uDC7D", ["alien"]],
    "1f47e": ["\uD83D\uDC7E", ["space_invader"]],
    "1f47f": ["\uD83D\uDC7F", ["imp"]],
    "1f480": ["\uD83D\uDC80", ["skull"]],
    "1f481": ["\uD83D\uDC81", ["information_desk_person"]],
    "1f482": ["\uD83D\uDC82", ["guardsman"]],
    "1f483": ["\uD83D\uDC83", ["dancer"]],
    "1f484": ["\uD83D\uDC84", ["lipstick"]],
    "1f485": ["\uD83D\uDC85", ["nail_care"]],
    "1f486": ["\uD83D\uDC86", ["massage"]],
    "1f487": ["\uD83D\uDC87", ["haircut"]],
    "1f488": ["\uD83D\uDC88", ["barber"]],
    "1f489": ["\uD83D\uDC89", ["syringe"]],
    "1f48a": ["\uD83D\uDC8A", ["pill"]],
    "1f48b": ["\uD83D\uDC8B", ["kiss"]],
    "1f48c": ["\uD83D\uDC8C", ["love_letter"]],
    "1f48d": ["\uD83D\uDC8D", ["ring"]],
    "1f48e": ["\uD83D\uDC8E", ["gem"]],
    "1f48f": ["\uD83D\uDC8F", ["couplekiss"]],
    "1f490": ["\uD83D\uDC90", ["bouquet"]],
    "1f491": ["\uD83D\uDC91", ["couple_with_heart"]],
    "1f492": ["\uD83D\uDC92", ["wedding"]],
    "1f493": ["\uD83D\uDC93", ["heartbeat"]],
    "1f494": ["\uD83D\uDC94", ["broken_heart"], "<\/3"],
    "1f495": ["\uD83D\uDC95", ["two_hearts"]],
    "1f496": ["\uD83D\uDC96", ["sparkling_heart"]],
    "1f497": ["\uD83D\uDC97", ["heartpulse"]],
    "1f498": ["\uD83D\uDC98", ["cupid"]],
    "1f499": ["\uD83D\uDC99", ["blue_heart"], "<3"],
    "1f49a": ["\uD83D\uDC9A", ["green_heart"], "<3"],
    "1f49b": ["\uD83D\uDC9B", ["yellow_heart"], "<3"],
    "1f49c": ["\uD83D\uDC9C", ["purple_heart"], "<3"],
    "1f49d": ["\uD83D\uDC9D", ["gift_heart"]],
    "1f49e": ["\uD83D\uDC9E", ["revolving_hearts"]],
    "1f49f": ["\uD83D\uDC9F", ["heart_decoration"]],
    "1f4a0": ["\uD83D\uDCA0", ["diamond_shape_with_a_dot_inside"]],
    "1f4a1": ["\uD83D\uDCA1", ["bulb"]],
    "1f4a2": ["\uD83D\uDCA2", ["anger"]],
    "1f4a3": ["\uD83D\uDCA3", ["bomb"]],
    "1f4a4": ["\uD83D\uDCA4", ["zzz"]],
    "1f4a5": ["\uD83D\uDCA5", ["boom", "collision"]],
    "1f4a6": ["\uD83D\uDCA6", ["sweat_drops"]],
    "1f4a7": ["\uD83D\uDCA7", ["droplet"]],
    "1f4a8": ["\uD83D\uDCA8", ["dash"]],
    "1f4a9": ["\uD83D\uDCA9", ["hankey", "poop", "shit"]],
    "1f4aa": ["\uD83D\uDCAA", ["muscle"]],
    "1f4ab": ["\uD83D\uDCAB", ["dizzy"]],
    "1f4ac": ["\uD83D\uDCAC", ["speech_balloon"]],
    "1f4ad": ["\uD83D\uDCAD", ["thought_balloon"]],
    "1f4ae": ["\uD83D\uDCAE", ["white_flower"]],
    "1f4af": ["\uD83D\uDCAF", ["100"]],
    "1f4b0": ["\uD83D\uDCB0", ["moneybag"]],
    "1f4b1": ["\uD83D\uDCB1", ["currency_exchange"]],
    "1f4b2": ["\uD83D\uDCB2", ["heavy_dollar_sign"]],
    "1f4b3": ["\uD83D\uDCB3", ["credit_card"]],
    "1f4b4": ["\uD83D\uDCB4", ["yen"]],
    "1f4b5": ["\uD83D\uDCB5", ["dollar"]],
    "1f4b6": ["\uD83D\uDCB6", ["euro"]],
    "1f4b7": ["\uD83D\uDCB7", ["pound"]],
    "1f4b8": ["\uD83D\uDCB8", ["money_with_wings"]],
    "1f4b9": ["\uD83D\uDCB9", ["chart"]],
    "1f4ba": ["\uD83D\uDCBA", ["seat"]],
    "1f4bb": ["\uD83D\uDCBB", ["computer"]],
    "1f4bc": ["\uD83D\uDCBC", ["briefcase"]],
    "1f4bd": ["\uD83D\uDCBD", ["minidisc"]],
    "1f4be": ["\uD83D\uDCBE", ["floppy_disk"]],
    "1f4bf": ["\uD83D\uDCBF", ["cd"]],
    "1f4c0": ["\uD83D\uDCC0", ["dvd"]],
    "1f4c1": ["\uD83D\uDCC1", ["file_folder"]],
    "1f4c2": ["\uD83D\uDCC2", ["open_file_folder"]],
    "1f4c3": ["\uD83D\uDCC3", ["page_with_curl"]],
    "1f4c4": ["\uD83D\uDCC4", ["page_facing_up"]],
    "1f4c5": ["\uD83D\uDCC5", ["date"]],
    "1f4c6": ["\uD83D\uDCC6", ["calendar"]],
    "1f4c7": ["\uD83D\uDCC7", ["card_index"]],
    "1f4c8": ["\uD83D\uDCC8", ["chart_with_upwards_trend"]],
    "1f4c9": ["\uD83D\uDCC9", ["chart_with_downwards_trend"]],
    "1f4ca": ["\uD83D\uDCCA", ["bar_chart"]],
    "1f4cb": ["\uD83D\uDCCB", ["clipboard"]],
    "1f4cc": ["\uD83D\uDCCC", ["pushpin"]],
    "1f4cd": ["\uD83D\uDCCD", ["round_pushpin"]],
    "1f4ce": ["\uD83D\uDCCE", ["paperclip"]],
    "1f4cf": ["\uD83D\uDCCF", ["straight_ruler"]],
    "1f4d0": ["\uD83D\uDCD0", ["triangular_ruler"]],
    "1f4d1": ["\uD83D\uDCD1", ["bookmark_tabs"]],
    "1f4d2": ["\uD83D\uDCD2", ["ledger"]],
    "1f4d3": ["\uD83D\uDCD3", ["notebook"]],
    "1f4d4": ["\uD83D\uDCD4", ["notebook_with_decorative_cover"]],
    "1f4d5": ["\uD83D\uDCD5", ["closed_book"]],
    "1f4d6": ["\uD83D\uDCD6", ["book", "open_book"]],
    "1f4d7": ["\uD83D\uDCD7", ["green_book"]],
    "1f4d8": ["\uD83D\uDCD8", ["blue_book"]],
    "1f4d9": ["\uD83D\uDCD9", ["orange_book"]],
    "1f4da": ["\uD83D\uDCDA", ["books"]],
    "1f4db": ["\uD83D\uDCDB", ["name_badge"]],
    "1f4dc": ["\uD83D\uDCDC", ["scroll"]],
    "1f4dd": ["\uD83D\uDCDD", ["memo", "pencil"]],
    "1f4de": ["\uD83D\uDCDE", ["telephone_receiver"]],
    "1f4df": ["\uD83D\uDCDF", ["pager"]],
    "1f4e0": ["\uD83D\uDCE0", ["fax"]],
    "1f4e1": ["\uD83D\uDCE1", ["satellite"]],
    "1f4e2": ["\uD83D\uDCE2", ["loudspeaker"]],
    "1f4e3": ["\uD83D\uDCE3", ["mega"]],
    "1f4e4": ["\uD83D\uDCE4", ["outbox_tray"]],
    "1f4e5": ["\uD83D\uDCE5", ["inbox_tray"]],
    "1f4e6": ["\uD83D\uDCE6", ["package"]],
    "1f4e7": ["\uD83D\uDCE7", ["e-mail"]],
    "1f4e8": ["\uD83D\uDCE8", ["incoming_envelope"]],
    "1f4e9": ["\uD83D\uDCE9", ["envelope_with_arrow"]],
    "1f4ea": ["\uD83D\uDCEA", ["mailbox_closed"]],
    "1f4eb": ["\uD83D\uDCEB", ["mailbox"]],
    "1f4ec": ["\uD83D\uDCEC", ["mailbox_with_mail"]],
    "1f4ed": ["\uD83D\uDCED", ["mailbox_with_no_mail"]],
    "1f4ee": ["\uD83D\uDCEE", ["postbox"]],
    "1f4ef": ["\uD83D\uDCEF", ["postal_horn"]],
    "1f4f0": ["\uD83D\uDCF0", ["newspaper"]],
    "1f4f1": ["\uD83D\uDCF1", ["iphone"]],
    "1f4f2": ["\uD83D\uDCF2", ["calling"]],
    "1f4f3": ["\uD83D\uDCF3", ["vibration_mode"]],
    "1f4f4": ["\uD83D\uDCF4", ["mobile_phone_off"]],
    "1f4f5": ["\uD83D\uDCF5", ["no_mobile_phones"]],
    "1f4f6": ["\uD83D\uDCF6", ["signal_strength"]],
    "1f4f7": ["\uD83D\uDCF7", ["camera"]],
    "1f4f9": ["\uD83D\uDCF9", ["video_camera"]],
    "1f4fa": ["\uD83D\uDCFA", ["tv"]],
    "1f4fb": ["\uD83D\uDCFB", ["radio"]],
    "1f4fc": ["\uD83D\uDCFC", ["vhs"]],
    "1f500": ["\uD83D\uDD00", ["twisted_rightwards_arrows"]],
    "1f501": ["\uD83D\uDD01", ["repeat"]],
    "1f502": ["\uD83D\uDD02", ["repeat_one"]],
    "1f503": ["\uD83D\uDD03", ["arrows_clockwise"]],
    "1f504": ["\uD83D\uDD04", ["arrows_counterclockwise"]],
    "1f505": ["\uD83D\uDD05", ["low_brightness"]],
    "1f506": ["\uD83D\uDD06", ["high_brightness"]],
    "1f507": ["\uD83D\uDD07", ["mute"]],
    "1f508": ["\uD83D\uDD09", ["speaker"]],
    "1f509": ["\uD83D\uDD09", ["sound"]],
    "1f50a": ["\uD83D\uDD0A", ["loud_sound"]],
    "1f50b": ["\uD83D\uDD0B", ["battery"]],
    "1f50c": ["\uD83D\uDD0C", ["electric_plug"]],
    "1f50d": ["\uD83D\uDD0D", ["mag"]],
    "1f50e": ["\uD83D\uDD0E", ["mag_right"]],
    "1f50f": ["\uD83D\uDD0F", ["lock_with_ink_pen"]],
    "1f510": ["\uD83D\uDD10", ["closed_lock_with_key"]],
    "1f511": ["\uD83D\uDD11", ["key"]],
    "1f512": ["\uD83D\uDD12", ["lock"]],
    "1f513": ["\uD83D\uDD13", ["unlock"]],
    "1f514": ["\uD83D\uDD14", ["bell"]],
    "1f515": ["\uD83D\uDD15", ["no_bell"]],
    "1f516": ["\uD83D\uDD16", ["bookmark"]],
    "1f517": ["\uD83D\uDD17", ["link"]],
    "1f518": ["\uD83D\uDD18", ["radio_button"]],
    "1f519": ["\uD83D\uDD19", ["back"]],
    "1f51a": ["\uD83D\uDD1A", ["end"]],
    "1f51b": ["\uD83D\uDD1B", ["on"]],
    "1f51c": ["\uD83D\uDD1C", ["soon"]],
    "1f51d": ["\uD83D\uDD1D", ["top"]],
    "1f51e": ["\uD83D\uDD1E", ["underage"]],
    "1f51f": ["\uD83D\uDD1F", ["keycap_ten"]],
    "1f520": ["\uD83D\uDD20", ["capital_abcd"]],
    "1f521": ["\uD83D\uDD21", ["abcd"]],
    "1f522": ["\uD83D\uDD22", ["1234"]],
    "1f523": ["\uD83D\uDD23", ["symbols"]],
    "1f524": ["\uD83D\uDD24", ["abc"]],
    "1f525": ["\uD83D\uDD25", ["fire"]],
    "1f526": ["\uD83D\uDD26", ["flashlight"]],
    "1f527": ["\uD83D\uDD27", ["wrench"]],
    "1f528": ["\uD83D\uDD28", ["hammer"]],
    "1f529": ["\uD83D\uDD29", ["nut_and_bolt"]],
    "1f52a": ["\uD83D\uDD2A", ["hocho"]],
    "1f52b": ["\uD83D\uDD2B", ["gun"]],
    "1f52c": ["\uD83D\uDD2C", ["microscope"]],
    "1f52d": ["\uD83D\uDD2D", ["telescope"]],
    "1f52e": ["\uD83D\uDD2E", ["crystal_ball"]],
    "1f52f": ["\uD83D\uDD2F", ["six_pointed_star"]],
    "1f530": ["\uD83D\uDD30", ["beginner"]],
    "1f531": ["\uD83D\uDD31", ["trident"]],
    "1f532": ["\uD83D\uDD32", ["black_square_button"]],
    "1f533": ["\uD83D\uDD33", ["white_square_button"]],
    "1f534": ["\uD83D\uDD34", ["red_circle"]],
    "1f535": ["\uD83D\uDD35", ["large_blue_circle"]],
    "1f536": ["\uD83D\uDD36", ["large_orange_diamond"]],
    "1f537": ["\uD83D\uDD37", ["large_blue_diamond"]],
    "1f538": ["\uD83D\uDD38", ["small_orange_diamond"]],
    "1f539": ["\uD83D\uDD39", ["small_blue_diamond"]],
    "1f53a": ["\uD83D\uDD3A", ["small_red_triangle"]],
    "1f53b": ["\uD83D\uDD3B", ["small_red_triangle_down"]],
    "1f53c": ["\uD83D\uDD3C", ["arrow_up_small"]],
    "1f53d": ["\uD83D\uDD3D", ["arrow_down_small"]],
    "1f550": ["\uD83D\uDD50", ["clock1"]],
    "1f551": ["\uD83D\uDD51", ["clock2"]],
    "1f552": ["\uD83D\uDD52", ["clock3"]],
    "1f553": ["\uD83D\uDD53", ["clock4"]],
    "1f554": ["\uD83D\uDD54", ["clock5"]],
    "1f555": ["\uD83D\uDD55", ["clock6"]],
    "1f556": ["\uD83D\uDD56", ["clock7"]],
    "1f557": ["\uD83D\uDD57", ["clock8"]],
    "1f558": ["\uD83D\uDD58", ["clock9"]],
    "1f559": ["\uD83D\uDD59", ["clock10"]],
    "1f55a": ["\uD83D\uDD5A", ["clock11"]],
    "1f55b": ["\uD83D\uDD5B", ["clock12"]],
    "1f55c": ["\uD83D\uDD5C", ["clock130"]],
    "1f55d": ["\uD83D\uDD5D", ["clock230"]],
    "1f55e": ["\uD83D\uDD5E", ["clock330"]],
    "1f55f": ["\uD83D\uDD5F", ["clock430"]],
    "1f560": ["\uD83D\uDD60", ["clock530"]],
    "1f561": ["\uD83D\uDD61", ["clock630"]],
    "1f562": ["\uD83D\uDD62", ["clock730"]],
    "1f563": ["\uD83D\uDD63", ["clock830"]],
    "1f564": ["\uD83D\uDD64", ["clock930"]],
    "1f565": ["\uD83D\uDD65", ["clock1030"]],
    "1f566": ["\uD83D\uDD66", ["clock1130"]],
    "1f567": ["\uD83D\uDD67", ["clock1230"]],
    "1f5fb": ["\uD83D\uDDFB", ["mount_fuji"]],
    "1f5fc": ["\uD83D\uDDFC", ["tokyo_tower"]],
    "1f5fd": ["\uD83D\uDDFD", ["statue_of_liberty"]],
    "1f5fe": ["\uD83D\uDDFE", ["japan"]],
    "1f5ff": ["\uD83D\uDDFF", ["moyai"]],
    "1f600": ["\uD83D\uDE00", ["grinning"]],
    "1f601": ["\uD83D\uDE01", ["grin"]],
    "1f602": ["\uD83D\uDE02", ["joy"]],
    "1f603": ["\uD83D\uDE03", ["smiley"], ":)"],
    "1f604": ["\uD83D\uDE04", ["smile"], ":)"],
    "1f605": ["\uD83D\uDE05", ["sweat_smile"]],
    "1f606": ["\uD83D\uDE06", ["satisfied"]],
    "1f607": ["\uD83D\uDE07", ["innocent"]],
    "1f608": ["\uD83D\uDE08", ["smiling_imp"]],
    "1f609": ["\uD83D\uDE09", ["wink"], ";)"],
    "1f60a": ["\uD83D\uDE0A", ["blush"]],
    "1f60b": ["\uD83D\uDE0B", ["yum"]],
    "1f60c": ["\uD83D\uDE0C", ["relieved"]],
    "1f60d": ["\uD83D\uDE0D", ["heart_eyes"]],
    "1f60e": ["\uD83D\uDE0E", ["sunglasses"]],
    "1f60f": ["\uD83D\uDE0F", ["smirk"]],
    "1f610": ["\uD83D\uDE10", ["neutral_face"]],
    "1f611": ["\uD83D\uDE11", ["expressionless"]],
    "1f612": ["\uD83D\uDE12", ["unamused"]],
    "1f613": ["\uD83D\uDE13", ["sweat"]],
    "1f614": ["\uD83D\uDE14", ["pensive"]],
    "1f615": ["\uD83D\uDE15", ["confused"]],
    "1f616": ["\uD83D\uDE16", ["confounded"]],
    "1f617": ["\uD83D\uDE17", ["kissing"]],
    "1f618": ["\uD83D\uDE18", ["kissing_heart"]],
    "1f619": ["\uD83D\uDE19", ["kissing_smiling_eyes"]],
    "1f61a": ["\uD83D\uDE1A", ["kissing_closed_eyes"]],
    "1f61b": ["\uD83D\uDE1B", ["stuck_out_tongue"]],
    "1f61c": ["\uD83D\uDE1C", ["stuck_out_tongue_winking_eye"], ";p"],
    "1f61d": ["\uD83D\uDE1D", ["stuck_out_tongue_closed_eyes"]],
    "1f61e": ["\uD83D\uDE1E", ["disappointed"], ":("],
    "1f61f": ["\uD83D\uDE1F", ["worried"]],
    "1f620": ["\uD83D\uDE20", ["angry"]],
    "1f621": ["\uD83D\uDE21", ["rage"]],
    "1f622": ["\uD83D\uDE22", ["cry"], ":'("],
    "1f623": ["\uD83D\uDE23", ["persevere"]],
    "1f624": ["\uD83D\uDE24", ["triumph"]],
    "1f625": ["\uD83D\uDE25", ["disappointed_relieved"]],
    "1f626": ["\uD83D\uDE26", ["frowning"]],
    "1f627": ["\uD83D\uDE27", ["anguished"]],
    "1f628": ["\uD83D\uDE28", ["fearful"]],
    "1f629": ["\uD83D\uDE29", ["weary"]],
    "1f62a": ["\uD83D\uDE2A", ["sleepy"]],
    "1f62b": ["\uD83D\uDE2B", ["tired_face"]],
    "1f62c": ["\uD83D\uDE2C", ["grimacing"]],
    "1f62d": ["\uD83D\uDE2D", ["sob"], ":'("],
    "1f62e": ["\uD83D\uDE2E", ["open_mouth"]],
    "1f62f": ["\uD83D\uDE2F", ["hushed"]],
    "1f630": ["\uD83D\uDE30", ["cold_sweat"]],
    "1f631": ["\uD83D\uDE31", ["scream"]],
    "1f632": ["\uD83D\uDE32", ["astonished"]],
    "1f633": ["\uD83D\uDE33", ["flushed"]],
    "1f634": ["\uD83D\uDE34", ["sleeping"]],
    "1f635": ["\uD83D\uDE35", ["dizzy_face"]],
    "1f636": ["\uD83D\uDE36", ["no_mouth"]],
    "1f637": ["\uD83D\uDE37", ["mask"]],
    "1f638": ["\uD83D\uDE38", ["smile_cat"]],
    "1f639": ["\uD83D\uDE39", ["joy_cat"]],
    "1f63a": ["\uD83D\uDE3A", ["smiley_cat"]],
    "1f63b": ["\uD83D\uDE3B", ["heart_eyes_cat"]],
    "1f63c": ["\uD83D\uDE3C", ["smirk_cat"]],
    "1f63d": ["\uD83D\uDE3D", ["kissing_cat"]],
    "1f63e": ["\uD83D\uDE3E", ["pouting_cat"]],
    "1f63f": ["\uD83D\uDE3F", ["crying_cat_face"]],
    "1f640": ["\uD83D\uDE40", ["scream_cat"]],
    "1f645": ["\uD83D\uDE45", ["no_good"]],
    "1f646": ["\uD83D\uDE46", ["ok_woman"]],
    "1f647": ["\uD83D\uDE47", ["bow"]],
    "1f648": ["\uD83D\uDE48", ["see_no_evil"]],
    "1f649": ["\uD83D\uDE49", ["hear_no_evil"]],
    "1f64a": ["\uD83D\uDE4A", ["speak_no_evil"]],
    "1f64b": ["\uD83D\uDE4B", ["raising_hand"]],
    "1f64c": ["\uD83D\uDE4C", ["raised_hands"]],
    "1f64d": ["\uD83D\uDE4D", ["person_frowning"]],
    "1f64e": ["\uD83D\uDE4E", ["person_with_pouting_face"]],
    "1f64f": ["\uD83D\uDE4F", ["pray"]],
    "1f680": ["\uD83D\uDE80", ["rocket"]],
    "1f681": ["\uD83D\uDE81", ["helicopter"]],
    "1f682": ["\uD83D\uDE82", ["steam_locomotive"]],
    "1f683": ["\uD83D\uDE83", ["railway_car"]],
    "1f68b": ["\uD83D\uDE8B", ["train"]],
    "1f684": ["\uD83D\uDE84", ["bullettrain_side"]],
    "1f685": ["\uD83D\uDE85", ["bullettrain_front"]],
    "1f686": ["\uD83D\uDE86", ["train2"]],
    "1f687": ["\uD83D\uDE87", ["metro"]],
    "1f688": ["\uD83D\uDE88", ["light_rail"]],
    "1f689": ["\uD83D\uDE89", ["station"]],
    "1f68a": ["\uD83D\uDE8A", ["tram"]],
    "1f68c": ["\uD83D\uDE8C", ["bus"]],
    "1f68d": ["\uD83D\uDE8D", ["oncoming_bus"]],
    "1f68e": ["\uD83D\uDE8E", ["trolleybus"]],
    "1f68f": ["\uD83D\uDE8F", ["busstop"]],
    "1f690": ["\uD83D\uDE90", ["minibus"]],
    "1f691": ["\uD83D\uDE91", ["ambulance"]],
    "1f692": ["\uD83D\uDE92", ["fire_engine"]],
    "1f693": ["\uD83D\uDE93", ["police_car"]],
    "1f694": ["\uD83D\uDE94", ["oncoming_police_car"]],
    "1f695": ["\uD83D\uDE95", ["taxi"]],
    "1f696": ["\uD83D\uDE96", ["oncoming_taxi"]],
    "1f697": ["\uD83D\uDE97", ["car", "red_car"]],
    "1f698": ["\uD83D\uDE98", ["oncoming_automobile"]],
    "1f699": ["\uD83D\uDE99", ["blue_car"]],
    "1f69a": ["\uD83D\uDE9A", ["truck"]],
    "1f69b": ["\uD83D\uDE9B", ["articulated_lorry"]],
    "1f69c": ["\uD83D\uDE9C", ["tractor"]],
    "1f69d": ["\uD83D\uDE9D", ["monorail"]],
    "1f69e": ["\uD83D\uDE9E", ["mountain_railway"]],
    "1f69f": ["\uD83D\uDE9F", ["suspension_railway"]],
    "1f6a0": ["\uD83D\uDEA0", ["mountain_cableway"]],
    "1f6a1": ["\uD83D\uDEA1", ["aerial_tramway"]],
    "1f6a2": ["\uD83D\uDEA2", ["ship"]],
    "1f6a3": ["\uD83D\uDEA3", ["rowboat"]],
    "1f6a4": ["\uD83D\uDEA4", ["speedboat"]],
    "1f6a5": ["\uD83D\uDEA5", ["traffic_light"]],
    "1f6a6": ["\uD83D\uDEA6", ["vertical_traffic_light"]],
    "1f6a7": ["\uD83D\uDEA7", ["construction"]],
    "1f6a8": ["\uD83D\uDEA8", ["rotating_light"]],
    "1f6a9": ["\uD83D\uDEA9", ["triangular_flag_on_post"]],
    "1f6aa": ["\uD83D\uDEAA", ["door"]],
    "1f6ab": ["\uD83D\uDEAB", ["no_entry_sign"]],
    "1f6ac": ["\uD83D\uDEAC", ["smoking"]],
    "1f6ad": ["\uD83D\uDEAD", ["no_smoking"]],
    "1f6ae": ["\uD83D\uDEAE", ["put_litter_in_its_place"]],
    "1f6af": ["\uD83D\uDEAF", ["do_not_litter"]],
    "1f6b0": ["\uD83D\uDEB0", ["potable_water"]],
    "1f6b1": ["\uD83D\uDEB1", ["non-potable_water"]],
    "1f6b2": ["\uD83D\uDEB2", ["bike"]],
    "1f6b3": ["\uD83D\uDEB3", ["no_bicycles"]],
    "1f6b4": ["\uD83D\uDEB4", ["bicyclist"]],
    "1f6b5": ["\uD83D\uDEB5", ["mountain_bicyclist"]],
    "1f6b6": ["\uD83D\uDEB6", ["walking"]],
    "1f6b7": ["\uD83D\uDEB7", ["no_pedestrians"]],
    "1f6b8": ["\uD83D\uDEB8", ["children_crossing"]],
    "1f6b9": ["\uD83D\uDEB9", ["mens"]],
    "1f6ba": ["\uD83D\uDEBA", ["womens"]],
    "1f6bb": ["\uD83D\uDEBB", ["restroom"]],
    "1f6bc": ["\uD83D\uDEBC", ["baby_symbol"]],
    "1f6bd": ["\uD83D\uDEBD", ["toilet"]],
    "1f6be": ["\uD83D\uDEBE", ["wc"]],
    "1f6bf": ["\uD83D\uDEBF", ["shower"]],
    "1f6c0": ["\uD83D\uDEC0", ["bath"]],
    "1f6c1": ["\uD83D\uDEC1", ["bathtub"]],
    "1f6c2": ["\uD83D\uDEC2", ["passport_control"]],
    "1f6c3": ["\uD83D\uDEC3", ["customs"]],
    "1f6c4": ["\uD83D\uDEC4", ["baggage_claim"]],
    "1f6c5": ["\uD83D\uDEC5", ["left_luggage"]],
    "0023": ["\u0023\u20E3", ["hash"]],
    "0030": ["\u0030\u20E3", ["zero"]],
    "0031": ["\u0031\u20E3", ["one"]],
    "0032": ["\u0032\u20E3", ["two"]],
    "0033": ["\u0033\u20E3", ["three"]],
    "0034": ["\u0034\u20E3", ["four"]],
    "0035": ["\u0035\u20E3", ["five"]],
    "0036": ["\u0036\u20E3", ["six"]],
    "0037": ["\u0037\u20E3", ["seven"]],
    "0038": ["\u0038\u20E3", ["eight"]],
    "0039": ["\u0039\u20E3", ["nine"]],
    "1f1e8-1f1f3": ["\uD83C\uDDE8\uD83C\uDDF3", ["cn"]],
    "1f1e9-1f1ea": ["\uD83C\uDDE9\uD83C\uDDEA", ["de"]],
    "1f1ea-1f1f8": ["\uD83C\uDDEA\uD83C\uDDF8", ["es"]],
    "1f1eb-1f1f7": ["\uD83C\uDDEB\uD83C\uDDF7", ["fr"]],
    "1f1ec-1f1e7": ["\uD83C\uDDEC\uD83C\uDDE7", ["gb", "uk"]],
    "1f1ee-1f1f9": ["\uD83C\uDDEE\uD83C\uDDF9", ["it"]],
    "1f1ef-1f1f5": ["\uD83C\uDDEF\uD83C\uDDF5", ["jp"]],
    "1f1f0-1f1f7": ["\uD83C\uDDF0\uD83C\uDDF7", ["kr"]],
    "1f1f7-1f1fa": ["\uD83C\uDDF7\uD83C\uDDFA", ["ru"]],
    "1f1fa-1f1f8": ["\uD83C\uDDFA\uD83C\uDDF8", ["us"]]
}

Config.EmojiCategories = [
    ["1f604", "1f603", "1f600", "1f60a", "263a", "1f609", "1f60d", "1f618", "1f61a", "1f617", "1f619", "1f61c", "1f61d", "1f61b", "1f633", "1f601", "1f614", "1f60c", "1f612", "1f61e", "1f623", "1f622", "1f602", "1f62d", "1f62a", "1f625", "1f630", "1f605", "1f613", "1f629", "1f62b", "1f628", "1f631", "1f620", "1f621", "1f624", "1f616", "1f606", "1f60b", "1f637", "1f60e", "1f634", "1f635", "1f632", "1f61f", "1f626", "1f627", "1f608", "1f47f", "1f62e", "1f62c", "1f610", "1f615", "1f62f", "1f636", "1f607", "1f60f", "1f611", "1f472", "1f473", "1f46e", "1f477", "1f482", "1f476", "1f466", "1f467", "1f468", "1f469", "1f474", "1f475", "1f471", "1f47c", "1f478", "1f63a", "1f638", "1f63b", "1f63d", "1f63c", "1f640", "1f63f", "1f639", "1f63e", "1f479", "1f47a", "1f648", "1f649", "1f64a", "1f480", "1f47d", "1f4a9", "1f525", "2728", "1f31f", "1f4ab", "1f4a5", "1f4a2", "1f4a6", "1f4a7", "1f4a4", "1f4a8", "1f442", "1f440", "1f443", "1f445", "1f444", "1f44d", "1f44e", "1f44c", "1f44a", "270a", "270c", "1f44b", "270b", "1f450", "1f446", "1f447", "1f449", "1f448", "1f64c", "1f64f", "261d", "1f44f", "1f4aa", "1f6b6", "1f3c3", "1f483", "1f46b", "1f46a", "1f46c", "1f46d", "1f48f", "1f491", "1f46f", "1f646", "1f645", "1f481", "1f64b", "1f486", "1f487", "1f485", "1f470", "1f64e", "1f64d", "1f647", "1f3a9", "1f451", "1f452", "1f45f", "1f45e", "1f461", "1f460", "1f462", "1f455", "1f454", "1f45a", "1f457", "1f3bd", "1f456", "1f458", "1f459", "1f4bc", "1f45c", "1f45d", "1f45b", "1f453", "1f380", "1f302", "1f484", "1f49b", "1f499", "1f49c", "1f49a", "2764", "1f494", "1f497", "1f493", "1f495", "1f496", "1f49e", "1f498", "1f48c", "1f48b", "1f48d", "1f48e", "1f464", "1f465", "1f4ac", "1f463", "1f4ad"],
    ["1f436", "1f43a", "1f431", "1f42d", "1f439", "1f430", "1f438", "1f42f", "1f428", "1f43b", "1f437", "1f43d", "1f42e", "1f417", "1f435", "1f412", "1f434", "1f411", "1f418", "1f43c", "1f427", "1f426", "1f424", "1f425", "1f423", "1f414", "1f40d", "1f422", "1f41b", "1f41d", "1f41c", "1f41e", "1f40c", "1f419", "1f41a", "1f420", "1f41f", "1f42c", "1f433", "1f40b", "1f404", "1f40f", "1f400", "1f403", "1f405", "1f407", "1f409", "1f40e", "1f410", "1f413", "1f415", "1f416", "1f401", "1f402", "1f432", "1f421", "1f40a", "1f42b", "1f42a", "1f406", "1f408", "1f429", "1f43e", "1f490", "1f338", "1f337", "1f340", "1f339", "1f33b", "1f33a", "1f341", "1f343", "1f342", "1f33f", "1f33e", "1f344", "1f335", "1f334", "1f332", "1f333", "1f330", "1f331", "1f33c", "1f310", "1f31e", "1f31d", "1f31a", "1f311", "1f312", "1f313", "1f314", "1f315", "1f316", "1f317", "1f318", "1f31c", "1f31b", "1f319", "1f30d", "1f30e", "1f30f", "1f30b", "1f30c", "1f320", "2b50", "2600", "26c5", "2601", "26a1", "2614", "2744", "26c4", "1f300", "1f301", "1f308", "1f30a"],
    ["1f38d", "1f49d", "1f38e", "1f392", "1f393", "1f38f", "1f386", "1f387", "1f390", "1f391", "1f383", "1f47b", "1f385", "1f384", "1f381", "1f38b", "1f389", "1f38a", "1f388", "1f38c", "1f52e", "1f3a5", "1f4f7", "1f4f9", "1f4fc", "1f4bf", "1f4c0", "1f4bd", "1f4be", "1f4bb", "1f4f1", "260e", "1f4de", "1f4df", "1f4e0", "1f4e1", "1f4fa", "1f4fb", "1f50a", "1f509", "1f508", "1f507", "1f514", "1f515", "1f4e3", "1f4e2", "23f3", "231b", "23f0", "231a", "1f513", "1f512", "1f50f", "1f510", "1f511", "1f50e", "1f4a1", "1f526", "1f506", "1f505", "1f50c", "1f50b", "1f50d", "1f6c0", "1f6c1", "1f6bf", "1f6bd", "1f527", "1f529", "1f528", "1f6aa", "1f6ac", "1f4a3", "1f52b", "1f52a", "1f48a", "1f489", "1f4b0", "1f4b4", "1f4b5", "1f4b7", "1f4b6", "1f4b3", "1f4b8", "1f4f2", "1f4e7", "1f4e5", "1f4e4", "2709", "1f4e9", "1f4e8", "1f4ef", "1f4eb", "1f4ea", "1f4ec", "1f4ed", "1f4ee", "1f4e6", "1f4dd", "1f4c4", "1f4c3", "1f4d1", "1f4ca", "1f4c8", "1f4c9", "1f4dc", "1f4cb", "1f4c5", "1f4c6", "1f4c7", "1f4c1", "1f4c2", "2702", "1f4cc", "1f4ce", "2712", "270f", "1f4cf", "1f4d0", "1f4d5", "1f4d7", "1f4d8", "1f4d9", "1f4d3", "1f4d4", "1f4d2", "1f4da", "1f4d6", "1f516", "1f4db", "1f52c", "1f52d", "1f4f0", "1f3a8", "1f3ac", "1f3a4", "1f3a7", "1f3bc", "1f3b5", "1f3b6", "1f3b9", "1f3bb", "1f3ba", "1f3b7", "1f3b8", "1f47e", "1f3ae", "1f0cf", "1f3b4", "1f004", "1f3b2", "1f3af", "1f3c8", "1f3c0", "26bd", "26be", "1f3be", "1f3b1", "1f3c9", "1f3b3", "26f3", "1f6b5", "1f6b4", "1f3c1", "1f3c7", "1f3c6", "1f3bf", "1f3c2", "1f3ca", "1f3c4", "1f3a3", "2615", "1f375", "1f376", "1f37c", "1f37a", "1f37b", "1f378", "1f379", "1f377", "1f374", "1f355", "1f354", "1f35f", "1f357", "1f356", "1f35d", "1f35b", "1f364", "1f371", "1f363", "1f365", "1f359", "1f358", "1f35a", "1f35c", "1f372", "1f362", "1f361", "1f373", "1f35e", "1f369", "1f36e", "1f366", "1f368", "1f367", "1f382", "1f370", "1f36a", "1f36b", "1f36c", "1f36d", "1f36f", "1f34e", "1f34f", "1f34a", "1f34b", "1f352", "1f347", "1f349", "1f353", "1f351", "1f348", "1f34c", "1f350", "1f34d", "1f360", "1f346", "1f345", "1f33d"],
    ["1f3e0", "1f3e1", "1f3eb", "1f3e2", "1f3e3", "1f3e5", "1f3e6", "1f3ea", "1f3e9", "1f3e8", "1f492", "26ea", "1f3ec", "1f3e4", "1f307", "1f306", "1f3ef", "1f3f0", "26fa", "1f3ed", "1f5fc", "1f5fe", "1f5fb", "1f304", "1f305", "1f303", "1f5fd", "1f309", "1f3a0", "1f3a1", "26f2", "1f3a2", "1f6a2", "26f5", "1f6a4", "1f6a3", "2693", "1f680", "2708", "1f4ba", "1f681", "1f682", "1f68a", "1f689", "1f69e", "1f686", "1f684", "1f685", "1f688", "1f687", "1f69d", "1f683", "1f68b", "1f68e", "1f68c", "1f68d", "1f699", "1f698", "1f697", "1f695", "1f696", "1f69b", "1f69a", "1f6a8", "1f693", "1f694", "1f692", "1f691", "1f690", "1f6b2", "1f6a1", "1f69f", "1f6a0", "1f69c", "1f488", "1f68f", "1f3ab", "1f6a6", "1f6a5", "26a0", "1f6a7", "1f530", "26fd", "1f3ee", "1f3b0", "2668", "1f5ff", "1f3aa", "1f3ad", "1f4cd", "1f6a9", "1f1ef-1f1f5", "1f1f0-1f1f7", "1f1e9-1f1ea", "1f1e8-1f1f3", "1f1fa-1f1f8", "1f1eb-1f1f7", "1f1ea-1f1f8", "1f1ee-1f1f9", "1f1f7-1f1fa", "1f1ec-1f1e7"],
    ["0031", "0032", "0033", "0034", "0035", "0036", "0037", "0038", "0039", "0030", "1f51f", "1f522", "0023", "1f523", "2b06", "2b07", "2b05", "27a1", "1f520", "1f521", "1f524", "2197", "2196", "2198", "2199", "2194", "2195", "1f504", "25c0", "25b6", "1f53c", "1f53d", "21a9", "21aa", "2139", "23ea", "23e9", "23eb", "23ec", "2935", "2934", "1f197", "1f500", "1f501", "1f502", "1f195", "1f199", "1f192", "1f193", "1f196", "1f4f6", "1f3a6", "1f201", "1f22f", "1f233", "1f235", "1f234", "1f232", "1f250", "1f239", "1f23a", "1f236", "1f21a", "1f6bb", "1f6b9", "1f6ba", "1f6bc", "1f6be", "1f6b0", "1f6ae", "1f17f", "267f", "1f6ad", "1f237", "1f238", "1f202", "24c2", "1f6c2", "1f6c4", "1f6c5", "1f6c3", "1f251", "3299", "3297", "1f191", "1f198", "1f194", "1f6ab", "1f51e", "1f4f5", "1f6af", "1f6b1", "1f6b3", "1f6b7", "1f6b8", "26d4", "2733", "2747", "274e", "2705", "2734", "1f49f", "1f19a", "1f4f3", "1f4f4", "1f170", "1f171", "1f18e", "1f17e", "1f4a0", "27bf", "267b", "2648", "2649", "264a", "264b", "264c", "264d", "264e", "264f", "2650", "2651", "2652", "2653", "26ce", "1f52f", "1f3e7", "1f4b9", "1f4b2", "1f4b1", "00a9", "00ae", "2122", "274c", "203c", "2049", "2757", "2753", "2755", "2754", "2b55", "1f51d", "1f51a", "1f519", "1f51b", "1f51c", "1f503", "1f55b", "1f567", "1f550", "1f55c", "1f551", "1f55d", "1f552", "1f55e", "1f553", "1f55f", "1f554", "1f560", "1f555", "1f556", "1f557", "1f558", "1f559", "1f55a", "1f561", "1f562", "1f563", "1f564", "1f565", "1f566", "2716", "2795", "2796", "2797", "2660", "2665", "2663", "2666", "1f4ae", "1f4af", "2714", "2611", "1f518", "1f517", "27b0", "3030", "303d", "1f531", "25fc", "25fb", "25fe", "25fd", "25aa", "25ab", "1f53a", "1f532", "1f533", "26ab", "26aa", "1f534", "1f535", "1f53b", "2b1c", "2b1b", "1f536", "1f537", "1f538", "1f539"]
];



Config.EmojiCategorySpritesheetDimens = [
    [7, 27],
    [4, 29],
    [7, 33],
    [3, 34],
    [7, 34]
];


Config.emoji_data = {
    "00a9": [
        ["\u00A9"], "\uE24E", "\uDBBA\uDF29", ["copyright"], 0, 0
    ],
    "00ae": [
        ["\u00AE"], "\uE24F", "\uDBBA\uDF2D", ["registered"], 0, 1
    ],
    "203c": [
        ["\u203C\uFE0F", "\u203C"], "", "\uDBBA\uDF06", ["bangbang"], 0, 2
    ],
    "2049": [
        ["\u2049\uFE0F", "\u2049"], "", "\uDBBA\uDF05", ["interrobang"], 0, 3
    ],
    "2122": [
        ["\u2122"], "\uE537", "\uDBBA\uDF2A", ["tm"], 0, 4
    ],
    "2139": [
        ["\u2139\uFE0F", "\u2139"], "", "\uDBBA\uDF47", ["information_source"], 0, 5
    ],
    "2194": [
        ["\u2194\uFE0F", "\u2194"], "", "\uDBBA\uDEF6", ["left_right_arrow"], 0, 6
    ],
    "2195": [
        ["\u2195\uFE0F", "\u2195"], "", "\uDBBA\uDEF7", ["arrow_up_down"], 0, 7
    ],
    "2196": [
        ["\u2196\uFE0F", "\u2196"], "\uE237", "\uDBBA\uDEF2", ["arrow_upper_left"], 0, 8
    ],
    "2197": [
        ["\u2197\uFE0F", "\u2197"], "\uE236", "\uDBBA\uDEF0", ["arrow_upper_right"], 0, 9
    ],
    "2198": [
        ["\u2198\uFE0F", "\u2198"], "\uE238", "\uDBBA\uDEF1", ["arrow_lower_right"], 0, 10
    ],
    "2199": [
        ["\u2199\uFE0F", "\u2199"], "\uE239", "\uDBBA\uDEF3", ["arrow_lower_left"], 0, 11
    ],
    "21a9": [
        ["\u21A9\uFE0F", "\u21A9"], "", "\uDBBA\uDF83", ["leftwards_arrow_with_hook"], 0, 12
    ],
    "21aa": [
        ["\u21AA\uFE0F", "\u21AA"], "", "\uDBBA\uDF88", ["arrow_right_hook"], 0, 13
    ],
    "231a": [
        ["\u231A\uFE0F", "\u231A"], "", "\uDBB8\uDC1D", ["watch"], 0, 14
    ],
    "231b": [
        ["\u231B\uFE0F", "\u231B"], "", "\uDBB8\uDC1C", ["hourglass"], 0, 15
    ],
    "23e9": [
        ["\u23E9"], "\uE23C", "\uDBBA\uDEFE", ["fast_forward"], 0, 16
    ],
    "23ea": [
        ["\u23EA"], "\uE23D", "\uDBBA\uDEFF", ["rewind"], 0, 17
    ],
    "23eb": [
        ["\u23EB"], "", "\uDBBA\uDF03", ["arrow_double_up"], 0, 18
    ],
    "23ec": [
        ["\u23EC"], "", "\uDBBA\uDF02", ["arrow_double_down"], 0, 19
    ],
    "23f0": [
        ["\u23F0"], "\uE02D", "\uDBB8\uDC2A", ["alarm_clock"], 0, 20
    ],
    "23f3": [
        ["\u23F3"], "", "\uDBB8\uDC1B", ["hourglass_flowing_sand"], 0, 21
    ],
    "24c2": [
        ["\u24C2\uFE0F", "\u24C2"], "\uE434", "\uDBB9\uDFE1", ["m"], 0, 22
    ],
    "25aa": [
        ["\u25AA\uFE0F", "\u25AA"], "\uE21A", "\uDBBA\uDF6E", ["black_small_square"], 0, 23
    ],
    "25ab": [
        ["\u25AB\uFE0F", "\u25AB"], "\uE21B", "\uDBBA\uDF6D", ["white_small_square"], 0, 24
    ],
    "25b6": [
        ["\u25B6\uFE0F", "\u25B6"], "\uE23A", "\uDBBA\uDEFC", ["arrow_forward"], 0, 25
    ],
    "25c0": [
        ["\u25C0\uFE0F", "\u25C0"], "\uE23B", "\uDBBA\uDEFD", ["arrow_backward"], 0, 26
    ],
    "25fb": [
        ["\u25FB\uFE0F", "\u25FB"], "\uE21B", "\uDBBA\uDF71", ["white_medium_square"], 0, 27
    ],
    "25fc": [
        ["\u25FC\uFE0F", "\u25FC"], "\uE21A", "\uDBBA\uDF72", ["black_medium_square"], 0, 28
    ],
    "25fd": [
        ["\u25FD\uFE0F", "\u25FD"], "\uE21B", "\uDBBA\uDF6F", ["white_medium_small_square"], 0, 29
    ],
    "25fe": [
        ["\u25FE\uFE0F", "\u25FE"], "\uE21A", "\uDBBA\uDF70", ["black_medium_small_square"], 1, 0
    ],
    "2600": [
        ["\u2600\uFE0F", "\u2600"], "\uE04A", "\uDBB8\uDC00", ["sunny"], 1, 1
    ],
    "2601": [
        ["\u2601\uFE0F", "\u2601"], "\uE049", "\uDBB8\uDC01", ["cloud"], 1, 2
    ],
    "260e": [
        ["\u260E\uFE0F", "\u260E"], "\uE009", "\uDBB9\uDD23", ["phone", "telephone"], 1, 3
    ],
    "2611": [
        ["\u2611\uFE0F", "\u2611"], "", "\uDBBA\uDF8B", ["ballot_box_with_check"], 1, 4
    ],
    "2614": [
        ["\u2614\uFE0F", "\u2614"], "\uE04B", "\uDBB8\uDC02", ["umbrella"], 1, 5
    ],
    "2615": [
        ["\u2615\uFE0F", "\u2615"], "\uE045", "\uDBBA\uDD81", ["coffee"], 1, 6
    ],
    "261d": [
        ["\u261D\uFE0F", "\u261D"], "\uE00F", "\uDBBA\uDF98", ["point_up"], 1, 7
    ],
    "263a": [
        ["\u263A\uFE0F", "\u263A"], "\uE414", "\uDBB8\uDF36", ["relaxed"], 1, 8
    ],
    "2648": [
        ["\u2648\uFE0F", "\u2648"], "\uE23F", "\uDBB8\uDC2B", ["aries"], 1, 9
    ],
    "2649": [
        ["\u2649\uFE0F", "\u2649"], "\uE240", "\uDBB8\uDC2C", ["taurus"], 1, 10
    ],
    "264a": [
        ["\u264A\uFE0F", "\u264A"], "\uE241", "\uDBB8\uDC2D", ["gemini"], 1, 11
    ],
    "264b": [
        ["\u264B\uFE0F", "\u264B"], "\uE242", "\uDBB8\uDC2E", ["cancer"], 1, 12
    ],
    "264c": [
        ["\u264C\uFE0F", "\u264C"], "\uE243", "\uDBB8\uDC2F", ["leo"], 1, 13
    ],
    "264d": [
        ["\u264D\uFE0F", "\u264D"], "\uE244", "\uDBB8\uDC30", ["virgo"], 1, 14
    ],
    "264e": [
        ["\u264E\uFE0F", "\u264E"], "\uE245", "\uDBB8\uDC31", ["libra"], 1, 15
    ],
    "264f": [
        ["\u264F\uFE0F", "\u264F"], "\uE246", "\uDBB8\uDC32", ["scorpius"], 1, 16
    ],
    "2650": [
        ["\u2650\uFE0F", "\u2650"], "\uE247", "\uDBB8\uDC33", ["sagittarius"], 1, 17
    ],
    "2651": [
        ["\u2651\uFE0F", "\u2651"], "\uE248", "\uDBB8\uDC34", ["capricorn"], 1, 18
    ],
    "2652": [
        ["\u2652\uFE0F", "\u2652"], "\uE249", "\uDBB8\uDC35", ["aquarius"], 1, 19
    ],
    "2653": [
        ["\u2653\uFE0F", "\u2653"], "\uE24A", "\uDBB8\uDC36", ["pisces"], 1, 20
    ],
    "2660": [
        ["\u2660\uFE0F", "\u2660"], "\uE20E", "\uDBBA\uDF1B", ["spades"], 1, 21
    ],
    "2663": [
        ["\u2663\uFE0F", "\u2663"], "\uE20F", "\uDBBA\uDF1D", ["clubs"], 1, 22
    ],
    "2665": [
        ["\u2665\uFE0F", "\u2665"], "\uE20C", "\uDBBA\uDF1A", ["hearts"], 1, 23
    ],
    "2666": [
        ["\u2666\uFE0F", "\u2666"], "\uE20D", "\uDBBA\uDF1C", ["diamonds"], 1, 24
    ],
    "2668": [
        ["\u2668\uFE0F", "\u2668"], "\uE123", "\uDBB9\uDFFA", ["hotsprings"], 1, 25
    ],
    "267b": [
        ["\u267B\uFE0F", "\u267B"], "", "\uDBBA\uDF2C", ["recycle"], 1, 26
    ],
    "267f": [
        ["\u267F\uFE0F", "\u267F"], "\uE20A", "\uDBBA\uDF20", ["wheelchair"], 1, 27
    ],
    "2693": [
        ["\u2693\uFE0F", "\u2693"], "\uE202", "\uDBB9\uDCC1", ["anchor"], 1, 28
    ],
    "26a0": [
        ["\u26A0\uFE0F", "\u26A0"], "\uE252", "\uDBBA\uDF23", ["warning"], 1, 29
    ],
    "26a1": [
        ["\u26A1\uFE0F", "\u26A1"], "\uE13D", "\uDBB8\uDC04", ["zap"], 2, 0
    ],
    "26aa": [
        ["\u26AA\uFE0F", "\u26AA"], "\uE219", "\uDBBA\uDF65", ["white_circle"], 2, 1
    ],
    "26ab": [
        ["\u26AB\uFE0F", "\u26AB"], "\uE219", "\uDBBA\uDF66", ["black_circle"], 2, 2
    ],
    "26bd": [
        ["\u26BD\uFE0F", "\u26BD"], "\uE018", "\uDBB9\uDFD4", ["soccer"], 2, 3
    ],
    "26be": [
        ["\u26BE\uFE0F", "\u26BE"], "\uE016", "\uDBB9\uDFD1", ["baseball"], 2, 4
    ],
    "26c4": [
        ["\u26C4\uFE0F", "\u26C4"], "\uE048", "\uDBB8\uDC03", ["snowman"], 2, 5
    ],
    "26c5": [
        ["\u26C5\uFE0F", "\u26C5"], "\uE04A\uE049", "\uDBB8\uDC0F", ["partly_sunny"], 2, 6
    ],
    "26ce": [
        ["\u26CE"], "\uE24B", "\uDBB8\uDC37", ["ophiuchus"], 2, 7
    ],
    "26d4": [
        ["\u26D4\uFE0F", "\u26D4"], "\uE137", "\uDBBA\uDF26", ["no_entry"], 2, 8
    ],
    "26ea": [
        ["\u26EA\uFE0F", "\u26EA"], "\uE037", "\uDBB9\uDCBB", ["church"], 2, 9
    ],
    "26f2": [
        ["\u26F2\uFE0F", "\u26F2"], "\uE121", "\uDBB9\uDCBC", ["fountain"], 2, 10
    ],
    "26f3": [
        ["\u26F3\uFE0F", "\u26F3"], "\uE014", "\uDBB9\uDFD2", ["golf"], 2, 11
    ],
    "26f5": [
        ["\u26F5\uFE0F", "\u26F5"], "\uE01C", "\uDBB9\uDFEA", ["boat", "sailboat"], 2, 12
    ],
    "26fa": [
        ["\u26FA\uFE0F", "\u26FA"], "\uE122", "\uDBB9\uDFFB", ["tent"], 2, 13
    ],
    "26fd": [
        ["\u26FD\uFE0F", "\u26FD"], "\uE03A", "\uDBB9\uDFF5", ["fuelpump"], 2, 14
    ],
    "2702": [
        ["\u2702\uFE0F", "\u2702"], "\uE313", "\uDBB9\uDD3E", ["scissors"], 2, 15
    ],
    "2705": [
        ["\u2705"], "", "\uDBBA\uDF4A", ["white_check_mark"], 2, 16
    ],
    "2708": [
        ["\u2708\uFE0F", "\u2708"], "\uE01D", "\uDBB9\uDFE9", ["airplane"], 2, 17
    ],
    "2709": [
        ["\u2709\uFE0F", "\u2709"], "\uE103", "\uDBB9\uDD29", ["email", "envelope"], 2, 18
    ],
    "270a": [
        ["\u270A"], "\uE010", "\uDBBA\uDF93", ["fist"], 2, 19
    ],
    "270b": [
        ["\u270B"], "\uE012", "\uDBBA\uDF95", ["hand", "raised_hand"], 2, 20
    ],
    "270c": [
        ["\u270C\uFE0F", "\u270C"], "\uE011", "\uDBBA\uDF94", ["v"], 2, 21
    ],
    "270f": [
        ["\u270F\uFE0F", "\u270F"], "\uE301", "\uDBB9\uDD39", ["pencil2"], 2, 22
    ],
    "2712": [
        ["\u2712\uFE0F", "\u2712"], "", "\uDBB9\uDD36", ["black_nib"], 2, 23
    ],
    "2714": [
        ["\u2714\uFE0F", "\u2714"], "", "\uDBBA\uDF49", ["heavy_check_mark"], 2, 24
    ],
    "2716": [
        ["\u2716\uFE0F", "\u2716"], "\uE333", "\uDBBA\uDF53", ["heavy_multiplication_x"], 2, 25
    ],
    "2728": [
        ["\u2728"], "\uE32E", "\uDBBA\uDF60", ["sparkles"], 2, 26
    ],
    "2733": [
        ["\u2733\uFE0F", "\u2733"], "\uE206", "\uDBBA\uDF62", ["eight_spoked_asterisk"], 2, 27
    ],
    "2734": [
        ["\u2734\uFE0F", "\u2734"], "\uE205", "\uDBBA\uDF61", ["eight_pointed_black_star"], 2, 28
    ],
    "2744": [
        ["\u2744\uFE0F", "\u2744"], "", "\uDBB8\uDC0E", ["snowflake"], 2, 29
    ],
    "2747": [
        ["\u2747\uFE0F", "\u2747"], "\uE32E", "\uDBBA\uDF77", ["sparkle"], 3, 0
    ],
    "274c": [
        ["\u274C"], "\uE333", "\uDBBA\uDF45", ["x"], 3, 1
    ],
    "274e": [
        ["\u274E"], "\uE333", "\uDBBA\uDF46", ["negative_squared_cross_mark"], 3, 2
    ],
    "2753": [
        ["\u2753"], "\uE020", "\uDBBA\uDF09", ["question"], 3, 3
    ],
    "2754": [
        ["\u2754"], "\uE336", "\uDBBA\uDF0A", ["grey_question"], 3, 4
    ],
    "2755": [
        ["\u2755"], "\uE337", "\uDBBA\uDF0B", ["grey_exclamation"], 3, 5
    ],
    "2757": [
        ["\u2757\uFE0F", "\u2757"], "\uE021", "\uDBBA\uDF04", ["exclamation", "heavy_exclamation_mark"], 3, 6
    ],
    "2764": [
        ["\u2764\uFE0F", "\u2764"], "\uE022", "\uDBBA\uDF0C", ["heart"], 3, 7, "<3"
    ],
    "2795": [
        ["\u2795"], "", "\uDBBA\uDF51", ["heavy_plus_sign"], 3, 8
    ],
    "2796": [
        ["\u2796"], "", "\uDBBA\uDF52", ["heavy_minus_sign"], 3, 9
    ],
    "2797": [
        ["\u2797"], "", "\uDBBA\uDF54", ["heavy_division_sign"], 3, 10
    ],
    "27a1": [
        ["\u27A1\uFE0F", "\u27A1"], "\uE234", "\uDBBA\uDEFA", ["arrow_right"], 3, 11
    ],
    "27b0": [
        ["\u27B0"], "", "\uDBBA\uDF08", ["curly_loop"], 3, 12
    ],
    "27bf": [
        ["\u27BF"], "\uE211", "\uDBBA\uDC2B", ["loop"], 3, 13
    ],
    "2934": [
        ["\u2934\uFE0F", "\u2934"], "\uE236", "\uDBBA\uDEF4", ["arrow_heading_up"], 3, 14
    ],
    "2935": [
        ["\u2935\uFE0F", "\u2935"], "\uE238", "\uDBBA\uDEF5", ["arrow_heading_down"], 3, 15
    ],
    "2b05": [
        ["\u2B05\uFE0F", "\u2B05"], "\uE235", "\uDBBA\uDEFB", ["arrow_left"], 3, 16
    ],
    "2b06": [
        ["\u2B06\uFE0F", "\u2B06"], "\uE232", "\uDBBA\uDEF8", ["arrow_up"], 3, 17
    ],
    "2b07": [
        ["\u2B07\uFE0F", "\u2B07"], "\uE233", "\uDBBA\uDEF9", ["arrow_down"], 3, 18
    ],
    "2b1b": [
        ["\u2B1B\uFE0F", "\u2B1B"], "\uE21A", "\uDBBA\uDF6C", ["black_large_square"], 3, 19
    ],
    "2b1c": [
        ["\u2B1C\uFE0F", "\u2B1C"], "\uE21B", "\uDBBA\uDF6B", ["white_large_square"], 3, 20
    ],
    "2b50": [
        ["\u2B50\uFE0F", "\u2B50"], "\uE32F", "\uDBBA\uDF68", ["star"], 3, 21
    ],
    "2b55": [
        ["\u2B55\uFE0F", "\u2B55"], "\uE332", "\uDBBA\uDF44", ["o"], 3, 22
    ],
    "3030": [
        ["\u3030"], "", "\uDBBA\uDF07", ["wavy_dash"], 3, 23
    ],
    "303d": [
        ["\u303D\uFE0F", "\u303D"], "\uE12C", "\uDBBA\uDC1B", ["part_alternation_mark"], 3, 24
    ],
    "3297": [
        ["\u3297\uFE0F", "\u3297"], "\uE30D", "\uDBBA\uDF43", ["congratulations"], 3, 25
    ],
    "3299": [
        ["\u3299\uFE0F", "\u3299"], "\uE315", "\uDBBA\uDF2B", ["secret"], 3, 26
    ],
    "1f004": [
        ["\uD83C\uDC04\uFE0F", "\uD83C\uDC04"], "\uE12D", "\uDBBA\uDC0B", ["mahjong"], 3, 27
    ],
    "1f0cf": [
        ["\uD83C\uDCCF"], "", "\uDBBA\uDC12", ["black_joker"], 3, 28
    ],
    "1f170": [
        ["\uD83C\uDD70"], "\uE532", "\uDBB9\uDD0B", ["a"], 3, 29
    ],
    "1f171": [
        ["\uD83C\uDD71"], "\uE533", "\uDBB9\uDD0C", ["b"], 4, 0
    ],
    "1f17e": [
        ["\uD83C\uDD7E"], "\uE535", "\uDBB9\uDD0E", ["o2"], 4, 1
    ],
    "1f17f": [
        ["\uD83C\uDD7F\uFE0F", "\uD83C\uDD7F"], "\uE14F", "\uDBB9\uDFF6", ["parking"], 4, 2
    ],
    "1f18e": [
        ["\uD83C\uDD8E"], "\uE534", "\uDBB9\uDD0D", ["ab"], 4, 3
    ],
    "1f191": [
        ["\uD83C\uDD91"], "", "\uDBBA\uDF84", ["cl"], 4, 4
    ],
    "1f192": [
        ["\uD83C\uDD92"], "\uE214", "\uDBBA\uDF38", ["cool"], 4, 5
    ],
    "1f193": [
        ["\uD83C\uDD93"], "", "\uDBBA\uDF21", ["free"], 4, 6
    ],
    "1f194": [
        ["\uD83C\uDD94"], "\uE229", "\uDBBA\uDF81", ["id"], 4, 7
    ],
    "1f195": [
        ["\uD83C\uDD95"], "\uE212", "\uDBBA\uDF36", ["new"], 4, 8
    ],
    "1f196": [
        ["\uD83C\uDD96"], "", "\uDBBA\uDF28", ["ng"], 4, 9
    ],
    "1f197": [
        ["\uD83C\uDD97"], "\uE24D", "\uDBBA\uDF27", ["ok"], 4, 10
    ],
    "1f198": [
        ["\uD83C\uDD98"], "", "\uDBBA\uDF4F", ["sos"], 4, 11
    ],
    "1f199": [
        ["\uD83C\uDD99"], "\uE213", "\uDBBA\uDF37", ["up"], 4, 12
    ],
    "1f19a": [
        ["\uD83C\uDD9A"], "\uE12E", "\uDBBA\uDF32", ["vs"], 4, 13
    ],
    "1f201": [
        ["\uD83C\uDE01"], "\uE203", "\uDBBA\uDF24", ["koko"], 4, 14
    ],
    "1f202": [
        ["\uD83C\uDE02"], "\uE228", "\uDBBA\uDF3F", ["sa"], 4, 15
    ],
    "1f21a": [
        ["\uD83C\uDE1A\uFE0F", "\uD83C\uDE1A"], "\uE216", "\uDBBA\uDF3A", ["u7121"], 4, 16
    ],
    "1f22f": [
        ["\uD83C\uDE2F\uFE0F", "\uD83C\uDE2F"], "\uE22C", "\uDBBA\uDF40", ["u6307"], 4, 17
    ],
    "1f232": [
        ["\uD83C\uDE32"], "", "\uDBBA\uDF2E", ["u7981"], 4, 18
    ],
    "1f233": [
        ["\uD83C\uDE33"], "\uE22B", "\uDBBA\uDF2F", ["u7a7a"], 4, 19
    ],
    "1f234": [
        ["\uD83C\uDE34"], "", "\uDBBA\uDF30", ["u5408"], 4, 20
    ],
    "1f235": [
        ["\uD83C\uDE35"], "\uE22A", "\uDBBA\uDF31", ["u6e80"], 4, 21
    ],
    "1f236": [
        ["\uD83C\uDE36"], "\uE215", "\uDBBA\uDF39", ["u6709"], 4, 22
    ],
    "1f237": [
        ["\uD83C\uDE37"], "\uE217", "\uDBBA\uDF3B", ["u6708"], 4, 23
    ],
    "1f238": [
        ["\uD83C\uDE38"], "\uE218", "\uDBBA\uDF3C", ["u7533"], 4, 24
    ],
    "1f239": [
        ["\uD83C\uDE39"], "\uE227", "\uDBBA\uDF3E", ["u5272"], 4, 25
    ],
    "1f23a": [
        ["\uD83C\uDE3A"], "\uE22D", "\uDBBA\uDF41", ["u55b6"], 4, 26
    ],
    "1f250": [
        ["\uD83C\uDE50"], "\uE226", "\uDBBA\uDF3D", ["ideograph_advantage"], 4, 27
    ],
    "1f251": [
        ["\uD83C\uDE51"], "", "\uDBBA\uDF50", ["accept"], 4, 28
    ],
    "1f300": [
        ["\uD83C\uDF00"], "\uE443", "\uDBB8\uDC05", ["cyclone"], 4, 29
    ],
    "1f301": [
        ["\uD83C\uDF01"], "", "\uDBB8\uDC06", ["foggy"], 5, 0
    ],
    "1f302": [
        ["\uD83C\uDF02"], "\uE43C", "\uDBB8\uDC07", ["closed_umbrella"], 5, 1
    ],
    "1f303": [
        ["\uD83C\uDF03"], "\uE44B", "\uDBB8\uDC08", ["night_with_stars"], 5, 2
    ],
    "1f304": [
        ["\uD83C\uDF04"], "\uE04D", "\uDBB8\uDC09", ["sunrise_over_mountains"], 5, 3
    ],
    "1f305": [
        ["\uD83C\uDF05"], "\uE449", "\uDBB8\uDC0A", ["sunrise"], 5, 4
    ],
    "1f306": [
        ["\uD83C\uDF06"], "\uE146", "\uDBB8\uDC0B", ["city_sunset"], 5, 5
    ],
    "1f307": [
        ["\uD83C\uDF07"], "\uE44A", "\uDBB8\uDC0C", ["city_sunrise"], 5, 6
    ],
    "1f308": [
        ["\uD83C\uDF08"], "\uE44C", "\uDBB8\uDC0D", ["rainbow"], 5, 7
    ],
    "1f309": [
        ["\uD83C\uDF09"], "\uE44B", "\uDBB8\uDC10", ["bridge_at_night"], 5, 8
    ],
    "1f30a": [
        ["\uD83C\uDF0A"], "\uE43E", "\uDBB8\uDC38", ["ocean"], 5, 9
    ],
    "1f30b": [
        ["\uD83C\uDF0B"], "", "\uDBB8\uDC3A", ["volcano"], 5, 10
    ],
    "1f30c": [
        ["\uD83C\uDF0C"], "\uE44B", "\uDBB8\uDC3B", ["milky_way"], 5, 11
    ],
    "1f30d": [
        ["\uD83C\uDF0D"], "", "", ["earth_africa"], 5, 12
    ],
    "1f30e": [
        ["\uD83C\uDF0E"], "", "", ["earth_americas"], 5, 13
    ],
    "1f30f": [
        ["\uD83C\uDF0F"], "", "\uDBB8\uDC39", ["earth_asia"], 5, 14
    ],
    "1f310": [
        ["\uD83C\uDF10"], "", "", ["globe_with_meridians"], 5, 15
    ],
    "1f311": [
        ["\uD83C\uDF11"], "", "\uDBB8\uDC11", ["new_moon"], 5, 16
    ],
    "1f312": [
        ["\uD83C\uDF12"], "", "", ["waxing_crescent_moon"], 5, 17
    ],
    "1f313": [
        ["\uD83C\uDF13"], "\uE04C", "\uDBB8\uDC13", ["first_quarter_moon"], 5, 18
    ],
    "1f314": [
        ["\uD83C\uDF14"], "\uE04C", "\uDBB8\uDC12", ["moon", "waxing_gibbous_moon"], 5, 19
    ],
    "1f315": [
        ["\uD83C\uDF15"], "", "\uDBB8\uDC15", ["full_moon"], 5, 20
    ],
    "1f316": [
        ["\uD83C\uDF16"], "", "", ["waning_gibbous_moon"], 5, 21
    ],
    "1f317": [
        ["\uD83C\uDF17"], "", "", ["last_quarter_moon"], 5, 22
    ],
    "1f318": [
        ["\uD83C\uDF18"], "", "", ["waning_crescent_moon"], 5, 23
    ],
    "1f319": [
        ["\uD83C\uDF19"], "\uE04C", "\uDBB8\uDC14", ["crescent_moon"], 5, 24
    ],
    "1f31a": [
        ["\uD83C\uDF1A"], "", "", ["new_moon_with_face"], 5, 25
    ],
    "1f31b": [
        ["\uD83C\uDF1B"], "\uE04C", "\uDBB8\uDC16", ["first_quarter_moon_with_face"], 5, 26
    ],
    "1f31c": [
        ["\uD83C\uDF1C"], "", "", ["last_quarter_moon_with_face"], 5, 27
    ],
    "1f31d": [
        ["\uD83C\uDF1D"], "", "", ["full_moon_with_face"], 5, 28
    ],
    "1f31e": [
        ["\uD83C\uDF1E"], "", "", ["sun_with_face"], 5, 29
    ],
    "1f31f": [
        ["\uD83C\uDF1F"], "\uE335", "\uDBBA\uDF69", ["star2"], 6, 0
    ],
    "1f320": [
        ["\uD83C\uDF20"], "", "\uDBBA\uDF6A", ["stars"], 6, 1
    ],
    "1f330": [
        ["\uD83C\uDF30"], "", "\uDBB8\uDC4C", ["chestnut"], 6, 2
    ],
    "1f331": [
        ["\uD83C\uDF31"], "\uE110", "\uDBB8\uDC3E", ["seedling"], 6, 3
    ],
    "1f332": [
        ["\uD83C\uDF32"], "", "", ["evergreen_tree"], 6, 4
    ],
    "1f333": [
        ["\uD83C\uDF33"], "", "", ["deciduous_tree"], 6, 5
    ],
    "1f334": [
        ["\uD83C\uDF34"], "\uE307", "\uDBB8\uDC47", ["palm_tree"], 6, 6
    ],
    "1f335": [
        ["\uD83C\uDF35"], "\uE308", "\uDBB8\uDC48", ["cactus"], 6, 7
    ],
    "1f337": [
        ["\uD83C\uDF37"], "\uE304", "\uDBB8\uDC3D", ["tulip"], 6, 8
    ],
    "1f338": [
        ["\uD83C\uDF38"], "\uE030", "\uDBB8\uDC40", ["cherry_blossom"], 6, 9
    ],
    "1f339": [
        ["\uD83C\uDF39"], "\uE032", "\uDBB8\uDC41", ["rose"], 6, 10
    ],
    "1f33a": [
        ["\uD83C\uDF3A"], "\uE303", "\uDBB8\uDC45", ["hibiscus"], 6, 11
    ],
    "1f33b": [
        ["\uD83C\uDF3B"], "\uE305", "\uDBB8\uDC46", ["sunflower"], 6, 12
    ],
    "1f33c": [
        ["\uD83C\uDF3C"], "\uE305", "\uDBB8\uDC4D", ["blossom"], 6, 13
    ],
    "1f33d": [
        ["\uD83C\uDF3D"], "", "\uDBB8\uDC4A", ["corn"], 6, 14
    ],
    "1f33e": [
        ["\uD83C\uDF3E"], "\uE444", "\uDBB8\uDC49", ["ear_of_rice"], 6, 15
    ],
    "1f33f": [
        ["\uD83C\uDF3F"], "\uE110", "\uDBB8\uDC4E", ["herb"], 6, 16
    ],
    "1f340": [
        ["\uD83C\uDF40"], "\uE110", "\uDBB8\uDC3C", ["four_leaf_clover"], 6, 17
    ],
    "1f341": [
        ["\uD83C\uDF41"], "\uE118", "\uDBB8\uDC3F", ["maple_leaf"], 6, 18
    ],
    "1f342": [
        ["\uD83C\uDF42"], "\uE119", "\uDBB8\uDC42", ["fallen_leaf"], 6, 19
    ],
    "1f343": [
        ["\uD83C\uDF43"], "\uE447", "\uDBB8\uDC43", ["leaves"], 6, 20
    ],
    "1f344": [
        ["\uD83C\uDF44"], "", "\uDBB8\uDC4B", ["mushroom"], 6, 21
    ],
    "1f345": [
        ["\uD83C\uDF45"], "\uE349", "\uDBB8\uDC55", ["tomato"], 6, 22
    ],
    "1f346": [
        ["\uD83C\uDF46"], "\uE34A", "\uDBB8\uDC56", ["eggplant"], 6, 23
    ],
    "1f347": [
        ["\uD83C\uDF47"], "", "\uDBB8\uDC59", ["grapes"], 6, 24
    ],
    "1f348": [
        ["\uD83C\uDF48"], "", "\uDBB8\uDC57", ["melon"], 6, 25
    ],
    "1f349": [
        ["\uD83C\uDF49"], "\uE348", "\uDBB8\uDC54", ["watermelon"], 6, 26
    ],
    "1f34a": [
        ["\uD83C\uDF4A"], "\uE346", "\uDBB8\uDC52", ["tangerine"], 6, 27
    ],
    "1f34b": [
        ["\uD83C\uDF4B"], "", "", ["lemon"], 6, 28
    ],
    "1f34c": [
        ["\uD83C\uDF4C"], "", "\uDBB8\uDC50", ["banana"], 6, 29
    ],
    "1f34d": [
        ["\uD83C\uDF4D"], "", "\uDBB8\uDC58", ["pineapple"], 7, 0
    ],
    "1f34e": [
        ["\uD83C\uDF4E"], "\uE345", "\uDBB8\uDC51", ["apple"], 7, 1
    ],
    "1f34f": [
        ["\uD83C\uDF4F"], "\uE345", "\uDBB8\uDC5B", ["green_apple"], 7, 2
    ],
    "1f350": [
        ["\uD83C\uDF50"], "", "", ["pear"], 7, 3
    ],
    "1f351": [
        ["\uD83C\uDF51"], "", "\uDBB8\uDC5A", ["peach"], 7, 4
    ],
    "1f352": [
        ["\uD83C\uDF52"], "", "\uDBB8\uDC4F", ["cherries"], 7, 5
    ],
    "1f353": [
        ["\uD83C\uDF53"], "\uE347", "\uDBB8\uDC53", ["strawberry"], 7, 6
    ],
    "1f354": [
        ["\uD83C\uDF54"], "\uE120", "\uDBBA\uDD60", ["hamburger"], 7, 7
    ],
    "1f355": [
        ["\uD83C\uDF55"], "", "\uDBBA\uDD75", ["pizza"], 7, 8
    ],
    "1f356": [
        ["\uD83C\uDF56"], "", "\uDBBA\uDD72", ["meat_on_bone"], 7, 9
    ],
    "1f357": [
        ["\uD83C\uDF57"], "", "\uDBBA\uDD76", ["poultry_leg"], 7, 10
    ],
    "1f358": [
        ["\uD83C\uDF58"], "\uE33D", "\uDBBA\uDD69", ["rice_cracker"], 7, 11
    ],
    "1f359": [
        ["\uD83C\uDF59"], "\uE342", "\uDBBA\uDD61", ["rice_ball"], 7, 12
    ],
    "1f35a": [
        ["\uD83C\uDF5A"], "\uE33E", "\uDBBA\uDD6A", ["rice"], 7, 13
    ],
    "1f35b": [
        ["\uD83C\uDF5B"], "\uE341", "\uDBBA\uDD6C", ["curry"], 7, 14
    ],
    "1f35c": [
        ["\uD83C\uDF5C"], "\uE340", "\uDBBA\uDD63", ["ramen"], 7, 15
    ],
    "1f35d": [
        ["\uD83C\uDF5D"], "\uE33F", "\uDBBA\uDD6B", ["spaghetti"], 7, 16
    ],
    "1f35e": [
        ["\uD83C\uDF5E"], "\uE339", "\uDBBA\uDD64", ["bread"], 7, 17
    ],
    "1f35f": [
        ["\uD83C\uDF5F"], "\uE33B", "\uDBBA\uDD67", ["fries"], 7, 18
    ],
    "1f360": [
        ["\uD83C\uDF60"], "", "\uDBBA\uDD74", ["sweet_potato"], 7, 19
    ],
    "1f361": [
        ["\uD83C\uDF61"], "\uE33C", "\uDBBA\uDD68", ["dango"], 7, 20
    ],
    "1f362": [
        ["\uD83C\uDF62"], "\uE343", "\uDBBA\uDD6D", ["oden"], 7, 21
    ],
    "1f363": [
        ["\uD83C\uDF63"], "\uE344", "\uDBBA\uDD6E", ["sushi"], 7, 22
    ],
    "1f364": [
        ["\uD83C\uDF64"], "", "\uDBBA\uDD7F", ["fried_shrimp"], 7, 23
    ],
    "1f365": [
        ["\uD83C\uDF65"], "", "\uDBBA\uDD73", ["fish_cake"], 7, 24
    ],
    "1f366": [
        ["\uD83C\uDF66"], "\uE33A", "\uDBBA\uDD66", ["icecream"], 7, 25
    ],
    "1f367": [
        ["\uD83C\uDF67"], "\uE43F", "\uDBBA\uDD71", ["shaved_ice"], 7, 26
    ],
    "1f368": [
        ["\uD83C\uDF68"], "", "\uDBBA\uDD77", ["ice_cream"], 7, 27
    ],
    "1f369": [
        ["\uD83C\uDF69"], "", "\uDBBA\uDD78", ["doughnut"], 7, 28
    ],
    "1f36a": [
        ["\uD83C\uDF6A"], "", "\uDBBA\uDD79", ["cookie"], 7, 29
    ],
    "1f36b": [
        ["\uD83C\uDF6B"], "", "\uDBBA\uDD7A", ["chocolate_bar"], 8, 0
    ],
    "1f36c": [
        ["\uD83C\uDF6C"], "", "\uDBBA\uDD7B", ["candy"], 8, 1
    ],
    "1f36d": [
        ["\uD83C\uDF6D"], "", "\uDBBA\uDD7C", ["lollipop"], 8, 2
    ],
    "1f36e": [
        ["\uD83C\uDF6E"], "", "\uDBBA\uDD7D", ["custard"], 8, 3
    ],
    "1f36f": [
        ["\uD83C\uDF6F"], "", "\uDBBA\uDD7E", ["honey_pot"], 8, 4
    ],
    "1f370": [
        ["\uD83C\uDF70"], "\uE046", "\uDBBA\uDD62", ["cake"], 8, 5
    ],
    "1f371": [
        ["\uD83C\uDF71"], "\uE34C", "\uDBBA\uDD6F", ["bento"], 8, 6
    ],
    "1f372": [
        ["\uD83C\uDF72"], "\uE34D", "\uDBBA\uDD70", ["stew"], 8, 7
    ],
    "1f373": [
        ["\uD83C\uDF73"], "\uE147", "\uDBBA\uDD65", ["egg"], 8, 8
    ],
    "1f374": [
        ["\uD83C\uDF74"], "\uE043", "\uDBBA\uDD80", ["fork_and_knife"], 8, 9
    ],
    "1f375": [
        ["\uD83C\uDF75"], "\uE338", "\uDBBA\uDD84", ["tea"], 8, 10
    ],
    "1f376": [
        ["\uD83C\uDF76"], "\uE30B", "\uDBBA\uDD85", ["sake"], 8, 11
    ],
    "1f377": [
        ["\uD83C\uDF77"], "\uE044", "\uDBBA\uDD86", ["wine_glass"], 8, 12
    ],
    "1f378": [
        ["\uD83C\uDF78"], "\uE044", "\uDBBA\uDD82", ["cocktail"], 8, 13
    ],
    "1f379": [
        ["\uD83C\uDF79"], "\uE044", "\uDBBA\uDD88", ["tropical_drink"], 8, 14
    ],
    "1f37a": [
        ["\uD83C\uDF7A"], "\uE047", "\uDBBA\uDD83", ["beer"], 8, 15
    ],
    "1f37b": [
        ["\uD83C\uDF7B"], "\uE30C", "\uDBBA\uDD87", ["beers"], 8, 16
    ],
    "1f37c": [
        ["\uD83C\uDF7C"], "", "", ["baby_bottle"], 8, 17
    ],
    "1f380": [
        ["\uD83C\uDF80"], "\uE314", "\uDBB9\uDD0F", ["ribbon"], 8, 18
    ],
    "1f381": [
        ["\uD83C\uDF81"], "\uE112", "\uDBB9\uDD10", ["gift"], 8, 19
    ],
    "1f382": [
        ["\uD83C\uDF82"], "\uE34B", "\uDBB9\uDD11", ["birthday"], 8, 20
    ],
    "1f383": [
        ["\uD83C\uDF83"], "\uE445", "\uDBB9\uDD1F", ["jack_o_lantern"], 8, 21
    ],
    "1f384": [
        ["\uD83C\uDF84"], "\uE033", "\uDBB9\uDD12", ["christmas_tree"], 8, 22
    ],
    "1f385": [
        ["\uD83C\uDF85"], "\uE448", "\uDBB9\uDD13", ["santa"], 8, 23
    ],
    "1f386": [
        ["\uD83C\uDF86"], "\uE117", "\uDBB9\uDD15", ["fireworks"], 8, 24
    ],
    "1f387": [
        ["\uD83C\uDF87"], "\uE440", "\uDBB9\uDD1D", ["sparkler"], 8, 25
    ],
    "1f388": [
        ["\uD83C\uDF88"], "\uE310", "\uDBB9\uDD16", ["balloon"], 8, 26
    ],
    "1f389": [
        ["\uD83C\uDF89"], "\uE312", "\uDBB9\uDD17", ["tada"], 8, 27
    ],
    "1f38a": [
        ["\uD83C\uDF8A"], "", "\uDBB9\uDD20", ["confetti_ball"], 8, 28
    ],
    "1f38b": [
        ["\uD83C\uDF8B"], "", "\uDBB9\uDD21", ["tanabata_tree"], 8, 29
    ],
    "1f38c": [
        ["\uD83C\uDF8C"], "\uE143", "\uDBB9\uDD14", ["crossed_flags"], 9, 0
    ],
    "1f38d": [
        ["\uD83C\uDF8D"], "\uE436", "\uDBB9\uDD18", ["bamboo"], 9, 1
    ],
    "1f38e": [
        ["\uD83C\uDF8E"], "\uE438", "\uDBB9\uDD19", ["dolls"], 9, 2
    ],
    "1f38f": [
        ["\uD83C\uDF8F"], "\uE43B", "\uDBB9\uDD1C", ["flags"], 9, 3
    ],
    "1f390": [
        ["\uD83C\uDF90"], "\uE442", "\uDBB9\uDD1E", ["wind_chime"], 9, 4
    ],
    "1f391": [
        ["\uD83C\uDF91"], "\uE446", "\uDBB8\uDC17", ["rice_scene"], 9, 5
    ],
    "1f392": [
        ["\uD83C\uDF92"], "\uE43A", "\uDBB9\uDD1B", ["school_satchel"], 9, 6
    ],
    "1f393": [
        ["\uD83C\uDF93"], "\uE439", "\uDBB9\uDD1A", ["mortar_board"], 9, 7
    ],
    "1f3a0": [
        ["\uD83C\uDFA0"], "", "\uDBB9\uDFFC", ["carousel_horse"], 9, 8
    ],
    "1f3a1": [
        ["\uD83C\uDFA1"], "\uE124", "\uDBB9\uDFFD", ["ferris_wheel"], 9, 9
    ],
    "1f3a2": [
        ["\uD83C\uDFA2"], "\uE433", "\uDBB9\uDFFE", ["roller_coaster"], 9, 10
    ],
    "1f3a3": [
        ["\uD83C\uDFA3"], "\uE019", "\uDBB9\uDFFF", ["fishing_pole_and_fish"], 9, 11
    ],
    "1f3a4": [
        ["\uD83C\uDFA4"], "\uE03C", "\uDBBA\uDC00", ["microphone"], 9, 12
    ],
    "1f3a5": [
        ["\uD83C\uDFA5"], "\uE03D", "\uDBBA\uDC01", ["movie_camera"], 9, 13
    ],
    "1f3a6": [
        ["\uD83C\uDFA6"], "\uE507", "\uDBBA\uDC02", ["cinema"], 9, 14
    ],
    "1f3a7": [
        ["\uD83C\uDFA7"], "\uE30A", "\uDBBA\uDC03", ["headphones"], 9, 15
    ],
    "1f3a8": [
        ["\uD83C\uDFA8"], "\uE502", "\uDBBA\uDC04", ["art"], 9, 16
    ],
    "1f3a9": [
        ["\uD83C\uDFA9"], "\uE503", "\uDBBA\uDC05", ["tophat"], 9, 17
    ],
    "1f3aa": [
        ["\uD83C\uDFAA"], "", "\uDBBA\uDC06", ["circus_tent"], 9, 18
    ],
    "1f3ab": [
        ["\uD83C\uDFAB"], "\uE125", "\uDBBA\uDC07", ["ticket"], 9, 19
    ],
    "1f3ac": [
        ["\uD83C\uDFAC"], "\uE324", "\uDBBA\uDC08", ["clapper"], 9, 20
    ],
    "1f3ad": [
        ["\uD83C\uDFAD"], "\uE503", "\uDBBA\uDC09", ["performing_arts"], 9, 21
    ],
    "1f3ae": [
        ["\uD83C\uDFAE"], "", "\uDBBA\uDC0A", ["video_game"], 9, 22
    ],
    "1f3af": [
        ["\uD83C\uDFAF"], "\uE130", "\uDBBA\uDC0C", ["dart"], 9, 23
    ],
    "1f3b0": [
        ["\uD83C\uDFB0"], "\uE133", "\uDBBA\uDC0D", ["slot_machine"], 9, 24
    ],
    "1f3b1": [
        ["\uD83C\uDFB1"], "\uE42C", "\uDBBA\uDC0E", ["8ball"], 9, 25
    ],
    "1f3b2": [
        ["\uD83C\uDFB2"], "", "\uDBBA\uDC0F", ["game_die"], 9, 26
    ],
    "1f3b3": [
        ["\uD83C\uDFB3"], "", "\uDBBA\uDC10", ["bowling"], 9, 27
    ],
    "1f3b4": [
        ["\uD83C\uDFB4"], "", "\uDBBA\uDC11", ["flower_playing_cards"], 9, 28
    ],
    "1f3b5": [
        ["\uD83C\uDFB5"], "\uE03E", "\uDBBA\uDC13", ["musical_note"], 9, 29
    ],
    "1f3b6": [
        ["\uD83C\uDFB6"], "\uE326", "\uDBBA\uDC14", ["notes"], 10, 0
    ],
    "1f3b7": [
        ["\uD83C\uDFB7"], "\uE040", "\uDBBA\uDC15", ["saxophone"], 10, 1
    ],
    "1f3b8": [
        ["\uD83C\uDFB8"], "\uE041", "\uDBBA\uDC16", ["guitar"], 10, 2
    ],
    "1f3b9": [
        ["\uD83C\uDFB9"], "", "\uDBBA\uDC17", ["musical_keyboard"], 10, 3
    ],
    "1f3ba": [
        ["\uD83C\uDFBA"], "\uE042", "\uDBBA\uDC18", ["trumpet"], 10, 4
    ],
    "1f3bb": [
        ["\uD83C\uDFBB"], "", "\uDBBA\uDC19", ["violin"], 10, 5
    ],
    "1f3bc": [
        ["\uD83C\uDFBC"], "\uE326", "\uDBBA\uDC1A", ["musical_score"], 10, 6
    ],
    "1f3bd": [
        ["\uD83C\uDFBD"], "", "\uDBB9\uDFD0", ["running_shirt_with_sash"], 10, 7
    ],
    "1f3be": [
        ["\uD83C\uDFBE"], "\uE015", "\uDBB9\uDFD3", ["tennis"], 10, 8
    ],
    "1f3bf": [
        ["\uD83C\uDFBF"], "\uE013", "\uDBB9\uDFD5", ["ski"], 10, 9
    ],
    "1f3c0": [
        ["\uD83C\uDFC0"], "\uE42A", "\uDBB9\uDFD6", ["basketball"], 10, 10
    ],
    "1f3c1": [
        ["\uD83C\uDFC1"], "\uE132", "\uDBB9\uDFD7", ["checkered_flag"], 10, 11
    ],
    "1f3c2": [
        ["\uD83C\uDFC2"], "", "\uDBB9\uDFD8", ["snowboarder"], 10, 12
    ],
    "1f3c3": [
        ["\uD83C\uDFC3"], "\uE115", "\uDBB9\uDFD9", ["runner", "running"], 10, 13
    ],
    "1f3c4": [
        ["\uD83C\uDFC4"], "\uE017", "\uDBB9\uDFDA", ["surfer"], 10, 14
    ],
    "1f3c6": [
        ["\uD83C\uDFC6"], "\uE131", "\uDBB9\uDFDB", ["trophy"], 10, 15
    ],
    "1f3c7": [
        ["\uD83C\uDFC7"], "", "", ["horse_racing"], 10, 16
    ],
    "1f3c8": [
        ["\uD83C\uDFC8"], "\uE42B", "\uDBB9\uDFDD", ["football"], 10, 17
    ],
    "1f3c9": [
        ["\uD83C\uDFC9"], "", "", ["rugby_football"], 10, 18
    ],
    "1f3ca": [
        ["\uD83C\uDFCA"], "\uE42D", "\uDBB9\uDFDE", ["swimmer"], 10, 19
    ],
    "1f3e0": [
        ["\uD83C\uDFE0"], "\uE036", "\uDBB9\uDCB0", ["house"], 10, 20
    ],
    "1f3e1": [
        ["\uD83C\uDFE1"], "\uE036", "\uDBB9\uDCB1", ["house_with_garden"], 10, 21
    ],
    "1f3e2": [
        ["\uD83C\uDFE2"], "\uE038", "\uDBB9\uDCB2", ["office"], 10, 22
    ],
    "1f3e3": [
        ["\uD83C\uDFE3"], "\uE153", "\uDBB9\uDCB3", ["post_office"], 10, 23
    ],
    "1f3e4": [
        ["\uD83C\uDFE4"], "", "", ["european_post_office"], 10, 24
    ],
    "1f3e5": [
        ["\uD83C\uDFE5"], "\uE155", "\uDBB9\uDCB4", ["hospital"], 10, 25
    ],
    "1f3e6": [
        ["\uD83C\uDFE6"], "\uE14D", "\uDBB9\uDCB5", ["bank"], 10, 26
    ],
    "1f3e7": [
        ["\uD83C\uDFE7"], "\uE154", "\uDBB9\uDCB6", ["atm"], 10, 27
    ],
    "1f3e8": [
        ["\uD83C\uDFE8"], "\uE158", "\uDBB9\uDCB7", ["hotel"], 10, 28
    ],
    "1f3e9": [
        ["\uD83C\uDFE9"], "\uE501", "\uDBB9\uDCB8", ["love_hotel"], 10, 29
    ],
    "1f3ea": [
        ["\uD83C\uDFEA"], "\uE156", "\uDBB9\uDCB9", ["convenience_store"], 11, 0
    ],
    "1f3eb": [
        ["\uD83C\uDFEB"], "\uE157", "\uDBB9\uDCBA", ["school"], 11, 1
    ],
    "1f3ec": [
        ["\uD83C\uDFEC"], "\uE504", "\uDBB9\uDCBD", ["department_store"], 11, 2
    ],
    "1f3ed": [
        ["\uD83C\uDFED"], "\uE508", "\uDBB9\uDCC0", ["factory"], 11, 3
    ],
    "1f3ee": [
        ["\uD83C\uDFEE"], "\uE30B", "\uDBB9\uDCC2", ["izakaya_lantern", "lantern"], 11, 4
    ],
    "1f3ef": [
        ["\uD83C\uDFEF"], "\uE505", "\uDBB9\uDCBE", ["japanese_castle"], 11, 5
    ],
    "1f3f0": [
        ["\uD83C\uDFF0"], "\uE506", "\uDBB9\uDCBF", ["european_castle"], 11, 6
    ],
    "1f400": [
        ["\uD83D\uDC00"], "", "", ["rat"], 11, 7
    ],
    "1f401": [
        ["\uD83D\uDC01"], "", "", ["mouse2"], 11, 8
    ],
    "1f402": [
        ["\uD83D\uDC02"], "", "", ["ox"], 11, 9
    ],
    "1f403": [
        ["\uD83D\uDC03"], "", "", ["water_buffalo"], 11, 10
    ],
    "1f404": [
        ["\uD83D\uDC04"], "", "", ["cow2"], 11, 11
    ],
    "1f405": [
        ["\uD83D\uDC05"], "", "", ["tiger2"], 11, 12
    ],
    "1f406": [
        ["\uD83D\uDC06"], "", "", ["leopard"], 11, 13
    ],
    "1f407": [
        ["\uD83D\uDC07"], "", "", ["rabbit2"], 11, 14
    ],
    "1f408": [
        ["\uD83D\uDC08"], "", "", ["cat2"], 11, 15
    ],
    "1f409": [
        ["\uD83D\uDC09"], "", "", ["dragon"], 11, 16
    ],
    "1f40a": [
        ["\uD83D\uDC0A"], "", "", ["crocodile"], 11, 17
    ],
    "1f40b": [
        ["\uD83D\uDC0B"], "", "", ["whale2"], 11, 18
    ],
    "1f40c": [
        ["\uD83D\uDC0C"], "", "\uDBB8\uDDB9", ["snail"], 11, 19
    ],
    "1f40d": [
        ["\uD83D\uDC0D"], "\uE52D", "\uDBB8\uDDD3", ["snake"], 11, 20
    ],
    "1f40e": [
        ["\uD83D\uDC0E"], "\uE134", "\uDBB9\uDFDC", ["racehorse"], 11, 21
    ],
    "1f40f": [
        ["\uD83D\uDC0F"], "", "", ["ram"], 11, 22
    ],
    "1f410": [
        ["\uD83D\uDC10"], "", "", ["goat"], 11, 23
    ],
    "1f411": [
        ["\uD83D\uDC11"], "\uE529", "\uDBB8\uDDCF", ["sheep"], 11, 24
    ],
    "1f412": [
        ["\uD83D\uDC12"], "\uE528", "\uDBB8\uDDCE", ["monkey"], 11, 25
    ],
    "1f413": [
        ["\uD83D\uDC13"], "", "", ["rooster"], 11, 26
    ],
    "1f414": [
        ["\uD83D\uDC14"], "\uE52E", "\uDBB8\uDDD4", ["chicken"], 11, 27
    ],
    "1f415": [
        ["\uD83D\uDC15"], "", "", ["dog2"], 11, 28
    ],
    "1f416": [
        ["\uD83D\uDC16"], "", "", ["pig2"], 11, 29
    ],
    "1f417": [
        ["\uD83D\uDC17"], "\uE52F", "\uDBB8\uDDD5", ["boar"], 12, 0
    ],
    "1f418": [
        ["\uD83D\uDC18"], "\uE526", "\uDBB8\uDDCC", ["elephant"], 12, 1
    ],
    "1f419": [
        ["\uD83D\uDC19"], "\uE10A", "\uDBB8\uDDC5", ["octopus"], 12, 2
    ],
    "1f41a": [
        ["\uD83D\uDC1A"], "\uE441", "\uDBB8\uDDC6", ["shell"], 12, 3
    ],
    "1f41b": [
        ["\uD83D\uDC1B"], "\uE525", "\uDBB8\uDDCB", ["bug"], 12, 4
    ],
    "1f41c": [
        ["\uD83D\uDC1C"], "", "\uDBB8\uDDDA", ["ant"], 12, 5
    ],
    "1f41d": [
        ["\uD83D\uDC1D"], "", "\uDBB8\uDDE1", ["bee", "honeybee"], 12, 6
    ],
    "1f41e": [
        ["\uD83D\uDC1E"], "", "\uDBB8\uDDE2", ["beetle"], 12, 7
    ],
    "1f41f": [
        ["\uD83D\uDC1F"], "\uE019", "\uDBB8\uDDBD", ["fish"], 12, 8
    ],
    "1f420": [
        ["\uD83D\uDC20"], "\uE522", "\uDBB8\uDDC9", ["tropical_fish"], 12, 9
    ],
    "1f421": [
        ["\uD83D\uDC21"], "\uE019", "\uDBB8\uDDD9", ["blowfish"], 12, 10
    ],
    "1f422": [
        ["\uD83D\uDC22"], "", "\uDBB8\uDDDC", ["turtle"], 12, 11
    ],
    "1f423": [
        ["\uD83D\uDC23"], "\uE523", "\uDBB8\uDDDD", ["hatching_chick"], 12, 12
    ],
    "1f424": [
        ["\uD83D\uDC24"], "\uE523", "\uDBB8\uDDBA", ["baby_chick"], 12, 13
    ],
    "1f425": [
        ["\uD83D\uDC25"], "\uE523", "\uDBB8\uDDBB", ["hatched_chick"], 12, 14
    ],
    "1f426": [
        ["\uD83D\uDC26"], "\uE521", "\uDBB8\uDDC8", ["bird"], 12, 15
    ],
    "1f427": [
        ["\uD83D\uDC27"], "\uE055", "\uDBB8\uDDBC", ["penguin"], 12, 16
    ],
    "1f428": [
        ["\uD83D\uDC28"], "\uE527", "\uDBB8\uDDCD", ["koala"], 12, 17
    ],
    "1f429": [
        ["\uD83D\uDC29"], "\uE052", "\uDBB8\uDDD8", ["poodle"], 12, 18
    ],
    "1f42a": [
        ["\uD83D\uDC2A"], "", "", ["dromedary_camel"], 12, 19
    ],
    "1f42b": [
        ["\uD83D\uDC2B"], "\uE530", "\uDBB8\uDDD6", ["camel"], 12, 20
    ],
    "1f42c": [
        ["\uD83D\uDC2C"], "\uE520", "\uDBB8\uDDC7", ["dolphin", "flipper"], 12, 21
    ],
    "1f42d": [
        ["\uD83D\uDC2D"], "\uE053", "\uDBB8\uDDC2", ["mouse"], 12, 22
    ],
    "1f42e": [
        ["\uD83D\uDC2E"], "\uE52B", "\uDBB8\uDDD1", ["cow"], 12, 23
    ],
    "1f42f": [
        ["\uD83D\uDC2F"], "\uE050", "\uDBB8\uDDC0", ["tiger"], 12, 24
    ],
    "1f430": [
        ["\uD83D\uDC30"], "\uE52C", "\uDBB8\uDDD2", ["rabbit"], 12, 25
    ],
    "1f431": [
        ["\uD83D\uDC31"], "\uE04F", "\uDBB8\uDDB8", ["cat"], 12, 26
    ],
    "1f432": [
        ["\uD83D\uDC32"], "", "\uDBB8\uDDDE", ["dragon_face"], 12, 27
    ],
    "1f433": [
        ["\uD83D\uDC33"], "\uE054", "\uDBB8\uDDC3", ["whale"], 12, 28
    ],
    "1f434": [
        ["\uD83D\uDC34"], "\uE01A", "\uDBB8\uDDBE", ["horse"], 12, 29
    ],
    "1f435": [
        ["\uD83D\uDC35"], "\uE109", "\uDBB8\uDDC4", ["monkey_face"], 13, 0
    ],
    "1f436": [
        ["\uD83D\uDC36"], "\uE052", "\uDBB8\uDDB7", ["dog"], 13, 1
    ],
    "1f437": [
        ["\uD83D\uDC37"], "\uE10B", "\uDBB8\uDDBF", ["pig"], 13, 2
    ],
    "1f438": [
        ["\uD83D\uDC38"], "\uE531", "\uDBB8\uDDD7", ["frog"], 13, 3
    ],
    "1f439": [
        ["\uD83D\uDC39"], "\uE524", "\uDBB8\uDDCA", ["hamster"], 13, 4
    ],
    "1f43a": [
        ["\uD83D\uDC3A"], "\uE52A", "\uDBB8\uDDD0", ["wolf"], 13, 5
    ],
    "1f43b": [
        ["\uD83D\uDC3B"], "\uE051", "\uDBB8\uDDC1", ["bear"], 13, 6
    ],
    "1f43c": [
        ["\uD83D\uDC3C"], "", "\uDBB8\uDDDF", ["panda_face"], 13, 7
    ],
    "1f43d": [
        ["\uD83D\uDC3D"], "\uE10B", "\uDBB8\uDDE0", ["pig_nose"], 13, 8
    ],
    "1f43e": [
        ["\uD83D\uDC3E"], "\uE536", "\uDBB8\uDDDB", ["feet", "paw_prints"], 13, 9
    ],
    "1f440": [
        ["\uD83D\uDC40"], "\uE419", "\uDBB8\uDD90", ["eyes"], 13, 10
    ],
    "1f442": [
        ["\uD83D\uDC42"], "\uE41B", "\uDBB8\uDD91", ["ear"], 13, 11
    ],
    "1f443": [
        ["\uD83D\uDC43"], "\uE41A", "\uDBB8\uDD92", ["nose"], 13, 12
    ],
    "1f444": [
        ["\uD83D\uDC44"], "\uE41C", "\uDBB8\uDD93", ["lips"], 13, 13
    ],
    "1f445": [
        ["\uD83D\uDC45"], "\uE409", "\uDBB8\uDD94", ["tongue"], 13, 14
    ],
    "1f446": [
        ["\uD83D\uDC46"], "\uE22E", "\uDBBA\uDF99", ["point_up_2"], 13, 15
    ],
    "1f447": [
        ["\uD83D\uDC47"], "\uE22F", "\uDBBA\uDF9A", ["point_down"], 13, 16
    ],
    "1f448": [
        ["\uD83D\uDC48"], "\uE230", "\uDBBA\uDF9B", ["point_left"], 13, 17
    ],
    "1f449": [
        ["\uD83D\uDC49"], "\uE231", "\uDBBA\uDF9C", ["point_right"], 13, 18
    ],
    "1f44a": [
        ["\uD83D\uDC4A"], "\uE00D", "\uDBBA\uDF96", ["facepunch", "punch"], 13, 19
    ],
    "1f44b": [
        ["\uD83D\uDC4B"], "\uE41E", "\uDBBA\uDF9D", ["wave"], 13, 20
    ],
    "1f44c": [
        ["\uD83D\uDC4C"], "\uE420", "\uDBBA\uDF9F", ["ok_hand"], 13, 21
    ],
    "1f44d": [
        ["\uD83D\uDC4D"], "\uE00E", "\uDBBA\uDF97", ["+1", "thumbsup"], 13, 22
    ],
    "1f44e": [
        ["\uD83D\uDC4E"], "\uE421", "\uDBBA\uDFA0", ["-1", "thumbsdown"], 13, 23
    ],
    "1f44f": [
        ["\uD83D\uDC4F"], "\uE41F", "\uDBBA\uDF9E", ["clap"], 13, 24
    ],
    "1f450": [
        ["\uD83D\uDC50"], "\uE422", "\uDBBA\uDFA1", ["open_hands"], 13, 25
    ],
    "1f451": [
        ["\uD83D\uDC51"], "\uE10E", "\uDBB9\uDCD1", ["crown"], 13, 26
    ],
    "1f452": [
        ["\uD83D\uDC52"], "\uE318", "\uDBB9\uDCD4", ["womans_hat"], 13, 27
    ],
    "1f453": [
        ["\uD83D\uDC53"], "", "\uDBB9\uDCCE", ["eyeglasses"], 13, 28
    ],
    "1f454": [
        ["\uD83D\uDC54"], "\uE302", "\uDBB9\uDCD3", ["necktie"], 13, 29
    ],
    "1f455": [
        ["\uD83D\uDC55"], "\uE006", "\uDBB9\uDCCF", ["shirt", "tshirt"], 14, 0
    ],
    "1f456": [
        ["\uD83D\uDC56"], "", "\uDBB9\uDCD0", ["jeans"], 14, 1
    ],
    "1f457": [
        ["\uD83D\uDC57"], "\uE319", "\uDBB9\uDCD5", ["dress"], 14, 2
    ],
    "1f458": [
        ["\uD83D\uDC58"], "\uE321", "\uDBB9\uDCD9", ["kimono"], 14, 3
    ],
    "1f459": [
        ["\uD83D\uDC59"], "\uE322", "\uDBB9\uDCDA", ["bikini"], 14, 4
    ],
    "1f45a": [
        ["\uD83D\uDC5A"], "\uE006", "\uDBB9\uDCDB", ["womans_clothes"], 14, 5
    ],
    "1f45b": [
        ["\uD83D\uDC5B"], "", "\uDBB9\uDCDC", ["purse"], 14, 6
    ],
    "1f45c": [
        ["\uD83D\uDC5C"], "\uE323", "\uDBB9\uDCF0", ["handbag"], 14, 7
    ],
    "1f45d": [
        ["\uD83D\uDC5D"], "", "\uDBB9\uDCF1", ["pouch"], 14, 8
    ],
    "1f45e": [
        ["\uD83D\uDC5E"], "\uE007", "\uDBB9\uDCCC", ["mans_shoe", "shoe"], 14, 9
    ],
    "1f45f": [
        ["\uD83D\uDC5F"], "\uE007", "\uDBB9\uDCCD", ["athletic_shoe"], 14, 10
    ],
    "1f460": [
        ["\uD83D\uDC60"], "\uE13E", "\uDBB9\uDCD6", ["high_heel"], 14, 11
    ],
    "1f461": [
        ["\uD83D\uDC61"], "\uE31A", "\uDBB9\uDCD7", ["sandal"], 14, 12
    ],
    "1f462": [
        ["\uD83D\uDC62"], "\uE31B", "\uDBB9\uDCD8", ["boot"], 14, 13
    ],
    "1f463": [
        ["\uD83D\uDC63"], "\uE536", "\uDBB9\uDD53", ["footprints"], 14, 14
    ],
    "1f464": [
        ["\uD83D\uDC64"], "", "\uDBB8\uDD9A", ["bust_in_silhouette"], 14, 15
    ],
    "1f465": [
        ["\uD83D\uDC65"], "", "", ["busts_in_silhouette"], 14, 16
    ],
    "1f466": [
        ["\uD83D\uDC66"], "\uE001", "\uDBB8\uDD9B", ["boy"], 14, 17
    ],
    "1f467": [
        ["\uD83D\uDC67"], "\uE002", "\uDBB8\uDD9C", ["girl"], 14, 18
    ],
    "1f468": [
        ["\uD83D\uDC68"], "\uE004", "\uDBB8\uDD9D", ["man"], 14, 19
    ],
    "1f469": [
        ["\uD83D\uDC69"], "\uE005", "\uDBB8\uDD9E", ["woman"], 14, 20
    ],
    "1f46a": [
        ["\uD83D\uDC6A"], "", "\uDBB8\uDD9F", ["family"], 14, 21
    ],
    "1f46b": [
        ["\uD83D\uDC6B"], "\uE428", "\uDBB8\uDDA0", ["couple"], 14, 22
    ],
    "1f46c": [
        ["\uD83D\uDC6C"], "", "", ["two_men_holding_hands"], 14, 23
    ],
    "1f46d": [
        ["\uD83D\uDC6D"], "", "", ["two_women_holding_hands"], 14, 24
    ],
    "1f46e": [
        ["\uD83D\uDC6E"], "\uE152", "\uDBB8\uDDA1", ["cop"], 14, 25
    ],
    "1f46f": [
        ["\uD83D\uDC6F"], "\uE429", "\uDBB8\uDDA2", ["dancers"], 14, 26
    ],
    "1f470": [
        ["\uD83D\uDC70"], "", "\uDBB8\uDDA3", ["bride_with_veil"], 14, 27
    ],
    "1f471": [
        ["\uD83D\uDC71"], "\uE515", "\uDBB8\uDDA4", ["person_with_blond_hair"], 14, 28
    ],
    "1f472": [
        ["\uD83D\uDC72"], "\uE516", "\uDBB8\uDDA5", ["man_with_gua_pi_mao"], 14, 29
    ],
    "1f473": [
        ["\uD83D\uDC73"], "\uE517", "\uDBB8\uDDA6", ["man_with_turban"], 15, 0
    ],
    "1f474": [
        ["\uD83D\uDC74"], "\uE518", "\uDBB8\uDDA7", ["older_man"], 15, 1
    ],
    "1f475": [
        ["\uD83D\uDC75"], "\uE519", "\uDBB8\uDDA8", ["older_woman"], 15, 2
    ],
    "1f476": [
        ["\uD83D\uDC76"], "\uE51A", "\uDBB8\uDDA9", ["baby"], 15, 3
    ],
    "1f477": [
        ["\uD83D\uDC77"], "\uE51B", "\uDBB8\uDDAA", ["construction_worker"], 15, 4
    ],
    "1f478": [
        ["\uD83D\uDC78"], "\uE51C", "\uDBB8\uDDAB", ["princess"], 15, 5
    ],
    "1f479": [
        ["\uD83D\uDC79"], "", "\uDBB8\uDDAC", ["japanese_ogre"], 15, 6
    ],
    "1f47a": [
        ["\uD83D\uDC7A"], "", "\uDBB8\uDDAD", ["japanese_goblin"], 15, 7
    ],
    "1f47b": [
        ["\uD83D\uDC7B"], "\uE11B", "\uDBB8\uDDAE", ["ghost"], 15, 8
    ],
    "1f47c": [
        ["\uD83D\uDC7C"], "\uE04E", "\uDBB8\uDDAF", ["angel"], 15, 9
    ],
    "1f47d": [
        ["\uD83D\uDC7D"], "\uE10C", "\uDBB8\uDDB0", ["alien"], 15, 10
    ],
    "1f47e": [
        ["\uD83D\uDC7E"], "\uE12B", "\uDBB8\uDDB1", ["space_invader"], 15, 11
    ],
    "1f47f": [
        ["\uD83D\uDC7F"], "\uE11A", "\uDBB8\uDDB2", ["imp"], 15, 12
    ],
    "1f480": [
        ["\uD83D\uDC80"], "\uE11C", "\uDBB8\uDDB3", ["skull"], 15, 13
    ],
    "1f481": [
        ["\uD83D\uDC81"], "\uE253", "\uDBB8\uDDB4", ["information_desk_person"], 15, 14
    ],
    "1f482": [
        ["\uD83D\uDC82"], "\uE51E", "\uDBB8\uDDB5", ["guardsman"], 15, 15
    ],
    "1f483": [
        ["\uD83D\uDC83"], "\uE51F", "\uDBB8\uDDB6", ["dancer"], 15, 16
    ],
    "1f484": [
        ["\uD83D\uDC84"], "\uE31C", "\uDBB8\uDD95", ["lipstick"], 15, 17
    ],
    "1f485": [
        ["\uD83D\uDC85"], "\uE31D", "\uDBB8\uDD96", ["nail_care"], 15, 18
    ],
    "1f486": [
        ["\uD83D\uDC86"], "\uE31E", "\uDBB8\uDD97", ["massage"], 15, 19
    ],
    "1f487": [
        ["\uD83D\uDC87"], "\uE31F", "\uDBB8\uDD98", ["haircut"], 15, 20
    ],
    "1f488": [
        ["\uD83D\uDC88"], "\uE320", "\uDBB8\uDD99", ["barber"], 15, 21
    ],
    "1f489": [
        ["\uD83D\uDC89"], "\uE13B", "\uDBB9\uDD09", ["syringe"], 15, 22
    ],
    "1f48a": [
        ["\uD83D\uDC8A"], "\uE30F", "\uDBB9\uDD0A", ["pill"], 15, 23
    ],
    "1f48b": [
        ["\uD83D\uDC8B"], "\uE003", "\uDBBA\uDC23", ["kiss"], 15, 24
    ],
    "1f48c": [
        ["\uD83D\uDC8C"], "\uE103\uE328", "\uDBBA\uDC24", ["love_letter"], 15, 25
    ],
    "1f48d": [
        ["\uD83D\uDC8D"], "\uE034", "\uDBBA\uDC25", ["ring"], 15, 26
    ],
    "1f48e": [
        ["\uD83D\uDC8E"], "\uE035", "\uDBBA\uDC26", ["gem"], 15, 27
    ],
    "1f48f": [
        ["\uD83D\uDC8F"], "\uE111", "\uDBBA\uDC27", ["couplekiss"], 15, 28
    ],
    "1f490": [
        ["\uD83D\uDC90"], "\uE306", "\uDBBA\uDC28", ["bouquet"], 15, 29
    ],
    "1f491": [
        ["\uD83D\uDC91"], "\uE425", "\uDBBA\uDC29", ["couple_with_heart"], 16, 0
    ],
    "1f492": [
        ["\uD83D\uDC92"], "\uE43D", "\uDBBA\uDC2A", ["wedding"], 16, 1
    ],
    "1f493": [
        ["\uD83D\uDC93"], "\uE327", "\uDBBA\uDF0D", ["heartbeat"], 16, 2
    ],
    "1f494": [
        ["\uD83D\uDC94"], "\uE023", "\uDBBA\uDF0E", ["broken_heart"], 16, 3, "<\/3"
    ],
    "1f495": [
        ["\uD83D\uDC95"], "\uE327", "\uDBBA\uDF0F", ["two_hearts"], 16, 4
    ],
    "1f496": [
        ["\uD83D\uDC96"], "\uE327", "\uDBBA\uDF10", ["sparkling_heart"], 16, 5
    ],
    "1f497": [
        ["\uD83D\uDC97"], "\uE328", "\uDBBA\uDF11", ["heartpulse"], 16, 6
    ],
    "1f498": [
        ["\uD83D\uDC98"], "\uE329", "\uDBBA\uDF12", ["cupid"], 16, 7
    ],
    "1f499": [
        ["\uD83D\uDC99"], "\uE32A", "\uDBBA\uDF13", ["blue_heart"], 16, 8, "<3"
    ],
    "1f49a": [
        ["\uD83D\uDC9A"], "\uE32B", "\uDBBA\uDF14", ["green_heart"], 16, 9, "<3"
    ],
    "1f49b": [
        ["\uD83D\uDC9B"], "\uE32C", "\uDBBA\uDF15", ["yellow_heart"], 16, 10, "<3"
    ],
    "1f49c": [
        ["\uD83D\uDC9C"], "\uE32D", "\uDBBA\uDF16", ["purple_heart"], 16, 11, "<3"
    ],
    "1f49d": [
        ["\uD83D\uDC9D"], "\uE437", "\uDBBA\uDF17", ["gift_heart"], 16, 12
    ],
    "1f49e": [
        ["\uD83D\uDC9E"], "\uE327", "\uDBBA\uDF18", ["revolving_hearts"], 16, 13
    ],
    "1f49f": [
        ["\uD83D\uDC9F"], "\uE204", "\uDBBA\uDF19", ["heart_decoration"], 16, 14
    ],
    "1f4a0": [
        ["\uD83D\uDCA0"], "", "\uDBBA\uDF55", ["diamond_shape_with_a_dot_inside"], 16, 15
    ],
    "1f4a1": [
        ["\uD83D\uDCA1"], "\uE10F", "\uDBBA\uDF56", ["bulb"], 16, 16
    ],
    "1f4a2": [
        ["\uD83D\uDCA2"], "\uE334", "\uDBBA\uDF57", ["anger"], 16, 17
    ],
    "1f4a3": [
        ["\uD83D\uDCA3"], "\uE311", "\uDBBA\uDF58", ["bomb"], 16, 18
    ],
    "1f4a4": [
        ["\uD83D\uDCA4"], "\uE13C", "\uDBBA\uDF59", ["zzz"], 16, 19
    ],
    "1f4a5": [
        ["\uD83D\uDCA5"], "", "\uDBBA\uDF5A", ["boom", "collision"], 16, 20
    ],
    "1f4a6": [
        ["\uD83D\uDCA6"], "\uE331", "\uDBBA\uDF5B", ["sweat_drops"], 16, 21
    ],
    "1f4a7": [
        ["\uD83D\uDCA7"], "\uE331", "\uDBBA\uDF5C", ["droplet"], 16, 22
    ],
    "1f4a8": [
        ["\uD83D\uDCA8"], "\uE330", "\uDBBA\uDF5D", ["dash"], 16, 23
    ],
    "1f4a9": [
        ["\uD83D\uDCA9"], "\uE05A", "\uDBB9\uDCF4", ["hankey", "poop", "shit"], 16, 24
    ],
    "1f4aa": [
        ["\uD83D\uDCAA"], "\uE14C", "\uDBBA\uDF5E", ["muscle"], 16, 25
    ],
    "1f4ab": [
        ["\uD83D\uDCAB"], "\uE407", "\uDBBA\uDF5F", ["dizzy"], 16, 26
    ],
    "1f4ac": [
        ["\uD83D\uDCAC"], "", "\uDBB9\uDD32", ["speech_balloon"], 16, 27
    ],
    "1f4ad": [
        ["\uD83D\uDCAD"], "", "", ["thought_balloon"], 16, 28
    ],
    "1f4ae": [
        ["\uD83D\uDCAE"], "", "\uDBBA\uDF7A", ["white_flower"], 16, 29
    ],
    "1f4af": [
        ["\uD83D\uDCAF"], "", "\uDBBA\uDF7B", ["100"], 17, 0
    ],
    "1f4b0": [
        ["\uD83D\uDCB0"], "\uE12F", "\uDBB9\uDCDD", ["moneybag"], 17, 1
    ],
    "1f4b1": [
        ["\uD83D\uDCB1"], "\uE149", "\uDBB9\uDCDE", ["currency_exchange"], 17, 2
    ],
    "1f4b2": [
        ["\uD83D\uDCB2"], "\uE12F", "\uDBB9\uDCE0", ["heavy_dollar_sign"], 17, 3
    ],
    "1f4b3": [
        ["\uD83D\uDCB3"], "", "\uDBB9\uDCE1", ["credit_card"], 17, 4
    ],
    "1f4b4": [
        ["\uD83D\uDCB4"], "", "\uDBB9\uDCE2", ["yen"], 17, 5
    ],
    "1f4b5": [
        ["\uD83D\uDCB5"], "\uE12F", "\uDBB9\uDCE3", ["dollar"], 17, 6
    ],
    "1f4b6": [
        ["\uD83D\uDCB6"], "", "", ["euro"], 17, 7
    ],
    "1f4b7": [
        ["\uD83D\uDCB7"], "", "", ["pound"], 17, 8
    ],
    "1f4b8": [
        ["\uD83D\uDCB8"], "", "\uDBB9\uDCE4", ["money_with_wings"], 17, 9
    ],
    "1f4b9": [
        ["\uD83D\uDCB9"], "\uE14A", "\uDBB9\uDCDF", ["chart"], 17, 10
    ],
    "1f4ba": [
        ["\uD83D\uDCBA"], "\uE11F", "\uDBB9\uDD37", ["seat"], 17, 11
    ],
    "1f4bb": [
        ["\uD83D\uDCBB"], "\uE00C", "\uDBB9\uDD38", ["computer"], 17, 12
    ],
    "1f4bc": [
        ["\uD83D\uDCBC"], "\uE11E", "\uDBB9\uDD3B", ["briefcase"], 17, 13
    ],
    "1f4bd": [
        ["\uD83D\uDCBD"], "\uE316", "\uDBB9\uDD3C", ["minidisc"], 17, 14
    ],
    "1f4be": [
        ["\uD83D\uDCBE"], "\uE316", "\uDBB9\uDD3D", ["floppy_disk"], 17, 15
    ],
    "1f4bf": [
        ["\uD83D\uDCBF"], "\uE126", "\uDBBA\uDC1D", ["cd"], 17, 16
    ],
    "1f4c0": [
        ["\uD83D\uDCC0"], "\uE127", "\uDBBA\uDC1E", ["dvd"], 17, 17
    ],
    "1f4c1": [
        ["\uD83D\uDCC1"], "", "\uDBB9\uDD43", ["file_folder"], 17, 18
    ],
    "1f4c2": [
        ["\uD83D\uDCC2"], "", "\uDBB9\uDD44", ["open_file_folder"], 17, 19
    ],
    "1f4c3": [
        ["\uD83D\uDCC3"], "\uE301", "\uDBB9\uDD40", ["page_with_curl"], 17, 20
    ],
    "1f4c4": [
        ["\uD83D\uDCC4"], "\uE301", "\uDBB9\uDD41", ["page_facing_up"], 17, 21
    ],
    "1f4c5": [
        ["\uD83D\uDCC5"], "", "\uDBB9\uDD42", ["date"], 17, 22
    ],
    "1f4c6": [
        ["\uD83D\uDCC6"], "", "\uDBB9\uDD49", ["calendar"], 17, 23
    ],
    "1f4c7": [
        ["\uD83D\uDCC7"], "\uE148", "\uDBB9\uDD4D", ["card_index"], 17, 24
    ],
    "1f4c8": [
        ["\uD83D\uDCC8"], "\uE14A", "\uDBB9\uDD4B", ["chart_with_upwards_trend"], 17, 25
    ],
    "1f4c9": [
        ["\uD83D\uDCC9"], "", "\uDBB9\uDD4C", ["chart_with_downwards_trend"], 17, 26
    ],
    "1f4ca": [
        ["\uD83D\uDCCA"], "\uE14A", "\uDBB9\uDD4A", ["bar_chart"], 17, 27
    ],
    "1f4cb": [
        ["\uD83D\uDCCB"], "\uE301", "\uDBB9\uDD48", ["clipboard"], 17, 28
    ],
    "1f4cc": [
        ["\uD83D\uDCCC"], "", "\uDBB9\uDD4E", ["pushpin"], 17, 29
    ],
    "1f4cd": [
        ["\uD83D\uDCCD"], "", "\uDBB9\uDD3F", ["round_pushpin"], 18, 0
    ],
    "1f4ce": [
        ["\uD83D\uDCCE"], "", "\uDBB9\uDD3A", ["paperclip"], 18, 1
    ],
    "1f4cf": [
        ["\uD83D\uDCCF"], "", "\uDBB9\uDD50", ["straight_ruler"], 18, 2
    ],
    "1f4d0": [
        ["\uD83D\uDCD0"], "", "\uDBB9\uDD51", ["triangular_ruler"], 18, 3
    ],
    "1f4d1": [
        ["\uD83D\uDCD1"], "\uE301", "\uDBB9\uDD52", ["bookmark_tabs"], 18, 4
    ],
    "1f4d2": [
        ["\uD83D\uDCD2"], "\uE148", "\uDBB9\uDD4F", ["ledger"], 18, 5
    ],
    "1f4d3": [
        ["\uD83D\uDCD3"], "\uE148", "\uDBB9\uDD45", ["notebook"], 18, 6
    ],
    "1f4d4": [
        ["\uD83D\uDCD4"], "\uE148", "\uDBB9\uDD47", ["notebook_with_decorative_cover"], 18, 7
    ],
    "1f4d5": [
        ["\uD83D\uDCD5"], "\uE148", "\uDBB9\uDD02", ["closed_book"], 18, 8
    ],
    "1f4d6": [
        ["\uD83D\uDCD6"], "\uE148", "\uDBB9\uDD46", ["book", "open_book"], 18, 9
    ],
    "1f4d7": [
        ["\uD83D\uDCD7"], "\uE148", "\uDBB9\uDCFF", ["green_book"], 18, 10
    ],
    "1f4d8": [
        ["\uD83D\uDCD8"], "\uE148", "\uDBB9\uDD00", ["blue_book"], 18, 11
    ],
    "1f4d9": [
        ["\uD83D\uDCD9"], "\uE148", "\uDBB9\uDD01", ["orange_book"], 18, 12
    ],
    "1f4da": [
        ["\uD83D\uDCDA"], "\uE148", "\uDBB9\uDD03", ["books"], 18, 13
    ],
    "1f4db": [
        ["\uD83D\uDCDB"], "", "\uDBB9\uDD04", ["name_badge"], 18, 14
    ],
    "1f4dc": [
        ["\uD83D\uDCDC"], "", "\uDBB9\uDCFD", ["scroll"], 18, 15
    ],
    "1f4dd": [
        ["\uD83D\uDCDD"], "\uE301", "\uDBB9\uDD27", ["memo", "pencil"], 18, 16
    ],
    "1f4de": [
        ["\uD83D\uDCDE"], "\uE009", "\uDBB9\uDD24", ["telephone_receiver"], 18, 17
    ],
    "1f4df": [
        ["\uD83D\uDCDF"], "", "\uDBB9\uDD22", ["pager"], 18, 18
    ],
    "1f4e0": [
        ["\uD83D\uDCE0"], "\uE00B", "\uDBB9\uDD28", ["fax"], 18, 19
    ],
    "1f4e1": [
        ["\uD83D\uDCE1"], "\uE14B", "\uDBB9\uDD31", ["satellite"], 18, 20
    ],
    "1f4e2": [
        ["\uD83D\uDCE2"], "\uE142", "\uDBB9\uDD2F", ["loudspeaker"], 18, 21
    ],
    "1f4e3": [
        ["\uD83D\uDCE3"], "\uE317", "\uDBB9\uDD30", ["mega"], 18, 22
    ],
    "1f4e4": [
        ["\uD83D\uDCE4"], "", "\uDBB9\uDD33", ["outbox_tray"], 18, 23
    ],
    "1f4e5": [
        ["\uD83D\uDCE5"], "", "\uDBB9\uDD34", ["inbox_tray"], 18, 24
    ],
    "1f4e6": [
        ["\uD83D\uDCE6"], "\uE112", "\uDBB9\uDD35", ["package"], 18, 25
    ],
    "1f4e7": [
        ["\uD83D\uDCE7"], "\uE103", "\uDBBA\uDF92", ["e-mail"], 18, 26
    ],
    "1f4e8": [
        ["\uD83D\uDCE8"], "\uE103", "\uDBB9\uDD2A", ["incoming_envelope"], 18, 27
    ],
    "1f4e9": [
        ["\uD83D\uDCE9"], "\uE103", "\uDBB9\uDD2B", ["envelope_with_arrow"], 18, 28
    ],
    "1f4ea": [
        ["\uD83D\uDCEA"], "\uE101", "\uDBB9\uDD2C", ["mailbox_closed"], 18, 29
    ],
    "1f4eb": [
        ["\uD83D\uDCEB"], "\uE101", "\uDBB9\uDD2D", ["mailbox"], 19, 0
    ],
    "1f4ec": [
        ["\uD83D\uDCEC"], "", "", ["mailbox_with_mail"], 19, 1
    ],
    "1f4ed": [
        ["\uD83D\uDCED"], "", "", ["mailbox_with_no_mail"], 19, 2
    ],
    "1f4ee": [
        ["\uD83D\uDCEE"], "\uE102", "\uDBB9\uDD2E", ["postbox"], 19, 3
    ],
    "1f4ef": [
        ["\uD83D\uDCEF"], "", "", ["postal_horn"], 19, 4
    ],
    "1f4f0": [
        ["\uD83D\uDCF0"], "", "\uDBBA\uDC22", ["newspaper"], 19, 5
    ],
    "1f4f1": [
        ["\uD83D\uDCF1"], "\uE00A", "\uDBB9\uDD25", ["iphone"], 19, 6
    ],
    "1f4f2": [
        ["\uD83D\uDCF2"], "\uE104", "\uDBB9\uDD26", ["calling"], 19, 7
    ],
    "1f4f3": [
        ["\uD83D\uDCF3"], "\uE250", "\uDBBA\uDC39", ["vibration_mode"], 19, 8
    ],
    "1f4f4": [
        ["\uD83D\uDCF4"], "\uE251", "\uDBBA\uDC3A", ["mobile_phone_off"], 19, 9
    ],
    "1f4f5": [
        ["\uD83D\uDCF5"], "", "", ["no_mobile_phones"], 19, 10
    ],
    "1f4f6": [
        ["\uD83D\uDCF6"], "\uE20B", "\uDBBA\uDC38", ["signal_strength"], 19, 11
    ],
    "1f4f7": [
        ["\uD83D\uDCF7"], "\uE008", "\uDBB9\uDCEF", ["camera"], 19, 12
    ],
    "1f4f9": [
        ["\uD83D\uDCF9"], "\uE03D", "\uDBB9\uDCF9", ["video_camera"], 19, 13
    ],
    "1f4fa": [
        ["\uD83D\uDCFA"], "\uE12A", "\uDBBA\uDC1C", ["tv"], 19, 14
    ],
    "1f4fb": [
        ["\uD83D\uDCFB"], "\uE128", "\uDBBA\uDC1F", ["radio"], 19, 15
    ],
    "1f4fc": [
        ["\uD83D\uDCFC"], "\uE129", "\uDBBA\uDC20", ["vhs"], 19, 16
    ],
    "1f500": [
        ["\uD83D\uDD00"], "", "", ["twisted_rightwards_arrows"], 19, 17
    ],
    "1f501": [
        ["\uD83D\uDD01"], "", "", ["repeat"], 19, 18
    ],
    "1f502": [
        ["\uD83D\uDD02"], "", "", ["repeat_one"], 19, 19
    ],
    "1f503": [
        ["\uD83D\uDD03"], "", "\uDBBA\uDF91", ["arrows_clockwise"], 19, 20
    ],
    "1f504": [
        ["\uD83D\uDD04"], "", "", ["arrows_counterclockwise"], 19, 21
    ],
    "1f505": [
        ["\uD83D\uDD05"], "", "", ["low_brightness"], 19, 22
    ],
    "1f506": [
        ["\uD83D\uDD06"], "", "", ["high_brightness"], 19, 23
    ],
    "1f507": [
        ["\uD83D\uDD07"], "", "", ["mute"], 19, 24
    ],
    "1f508": [
        ["\uD83D\uDD08"], "", "", ["speaker"], 19, 25
    ],
    "1f509": [
        ["\uD83D\uDD09"], "", "", ["sound"], 19, 26
    ],
    "1f50a": [
        ["\uD83D\uDD0A"], "\uE141", "\uDBBA\uDC21", ["loud_sound"], 19, 27
    ],
    "1f50b": [
        ["\uD83D\uDD0B"], "", "\uDBB9\uDCFC", ["battery"], 19, 28
    ],
    "1f50c": [
        ["\uD83D\uDD0C"], "", "\uDBB9\uDCFE", ["electric_plug"], 19, 29
    ],
    "1f50d": [
        ["\uD83D\uDD0D"], "\uE114", "\uDBBA\uDF85", ["mag"], 20, 0
    ],
    "1f50e": [
        ["\uD83D\uDD0E"], "\uE114", "\uDBBA\uDF8D", ["mag_right"], 20, 1
    ],
    "1f50f": [
        ["\uD83D\uDD0F"], "\uE144", "\uDBBA\uDF90", ["lock_with_ink_pen"], 20, 2
    ],
    "1f510": [
        ["\uD83D\uDD10"], "\uE144", "\uDBBA\uDF8A", ["closed_lock_with_key"], 20, 3
    ],
    "1f511": [
        ["\uD83D\uDD11"], "\uE03F", "\uDBBA\uDF82", ["key"], 20, 4
    ],
    "1f512": [
        ["\uD83D\uDD12"], "\uE144", "\uDBBA\uDF86", ["lock"], 20, 5
    ],
    "1f513": [
        ["\uD83D\uDD13"], "\uE145", "\uDBBA\uDF87", ["unlock"], 20, 6
    ],
    "1f514": [
        ["\uD83D\uDD14"], "\uE325", "\uDBB9\uDCF2", ["bell"], 20, 7
    ],
    "1f515": [
        ["\uD83D\uDD15"], "", "", ["no_bell"], 20, 8
    ],
    "1f516": [
        ["\uD83D\uDD16"], "", "\uDBBA\uDF8F", ["bookmark"], 20, 9
    ],
    "1f517": [
        ["\uD83D\uDD17"], "", "\uDBBA\uDF4B", ["link"], 20, 10
    ],
    "1f518": [
        ["\uD83D\uDD18"], "", "\uDBBA\uDF8C", ["radio_button"], 20, 11
    ],
    "1f519": [
        ["\uD83D\uDD19"], "\uE235", "\uDBBA\uDF8E", ["back"], 20, 12
    ],
    "1f51a": [
        ["\uD83D\uDD1A"], "", "\uDBB8\uDC1A", ["end"], 20, 13
    ],
    "1f51b": [
        ["\uD83D\uDD1B"], "", "\uDBB8\uDC19", ["on"], 20, 14
    ],
    "1f51c": [
        ["\uD83D\uDD1C"], "", "\uDBB8\uDC18", ["soon"], 20, 15
    ],
    "1f51d": [
        ["\uD83D\uDD1D"], "\uE24C", "\uDBBA\uDF42", ["top"], 20, 16
    ],
    "1f51e": [
        ["\uD83D\uDD1E"], "\uE207", "\uDBBA\uDF25", ["underage"], 20, 17
    ],
    "1f51f": [
        ["\uD83D\uDD1F"], "", "\uDBBA\uDC3B", ["keycap_ten"], 20, 18
    ],
    "1f520": [
        ["\uD83D\uDD20"], "", "\uDBBA\uDF7C", ["capital_abcd"], 20, 19
    ],
    "1f521": [
        ["\uD83D\uDD21"], "", "\uDBBA\uDF7D", ["abcd"], 20, 20
    ],
    "1f522": [
        ["\uD83D\uDD22"], "", "\uDBBA\uDF7E", ["1234"], 20, 21
    ],
    "1f523": [
        ["\uD83D\uDD23"], "", "\uDBBA\uDF7F", ["symbols"], 20, 22
    ],
    "1f524": [
        ["\uD83D\uDD24"], "", "\uDBBA\uDF80", ["abc"], 20, 23
    ],
    "1f525": [
        ["\uD83D\uDD25"], "\uE11D", "\uDBB9\uDCF6", ["fire"], 20, 24
    ],
    "1f526": [
        ["\uD83D\uDD26"], "", "\uDBB9\uDCFB", ["flashlight"], 20, 25
    ],
    "1f527": [
        ["\uD83D\uDD27"], "", "\uDBB9\uDCC9", ["wrench"], 20, 26
    ],
    "1f528": [
        ["\uD83D\uDD28"], "\uE116", "\uDBB9\uDCCA", ["hammer"], 20, 27
    ],
    "1f529": [
        ["\uD83D\uDD29"], "", "\uDBB9\uDCCB", ["nut_and_bolt"], 20, 28
    ],
    "1f52a": [
        ["\uD83D\uDD2A"], "", "\uDBB9\uDCFA", ["hocho", "knife"], 20, 29
    ],
    "1f52b": [
        ["\uD83D\uDD2B"], "\uE113", "\uDBB9\uDCF5", ["gun"], 21, 0
    ],
    "1f52c": [
        ["\uD83D\uDD2C"], "", "", ["microscope"], 21, 1
    ],
    "1f52d": [
        ["\uD83D\uDD2D"], "", "", ["telescope"], 21, 2
    ],
    "1f52e": [
        ["\uD83D\uDD2E"], "\uE23E", "\uDBB9\uDCF7", ["crystal_ball"], 21, 3
    ],
    "1f52f": [
        ["\uD83D\uDD2F"], "\uE23E", "\uDBB9\uDCF8", ["six_pointed_star"], 21, 4
    ],
    "1f530": [
        ["\uD83D\uDD30"], "\uE209", "\uDBB8\uDC44", ["beginner"], 21, 5
    ],
    "1f531": [
        ["\uD83D\uDD31"], "\uE031", "\uDBB9\uDCD2", ["trident"], 21, 6
    ],
    "1f532": [
        ["\uD83D\uDD32"], "\uE21A", "\uDBBA\uDF64", ["black_square_button"], 21, 7
    ],
    "1f533": [
        ["\uD83D\uDD33"], "\uE21B", "\uDBBA\uDF67", ["white_square_button"], 21, 8
    ],
    "1f534": [
        ["\uD83D\uDD34"], "\uE219", "\uDBBA\uDF63", ["red_circle"], 21, 9
    ],
    "1f535": [
        ["\uD83D\uDD35"], "\uE21A", "\uDBBA\uDF64", ["large_blue_circle"], 21, 10
    ],
    "1f536": [
        ["\uD83D\uDD36"], "\uE21B", "\uDBBA\uDF73", ["large_orange_diamond"], 21, 11
    ],
    "1f537": [
        ["\uD83D\uDD37"], "\uE21B", "\uDBBA\uDF74", ["large_blue_diamond"], 21, 12
    ],
    "1f538": [
        ["\uD83D\uDD38"], "\uE21B", "\uDBBA\uDF75", ["small_orange_diamond"], 21, 13
    ],
    "1f539": [
        ["\uD83D\uDD39"], "\uE21B", "\uDBBA\uDF76", ["small_blue_diamond"], 21, 14
    ],
    "1f53a": [
        ["\uD83D\uDD3A"], "", "\uDBBA\uDF78", ["small_red_triangle"], 21, 15
    ],
    "1f53b": [
        ["\uD83D\uDD3B"], "", "\uDBBA\uDF79", ["small_red_triangle_down"], 21, 16
    ],
    "1f53c": [
        ["\uD83D\uDD3C"], "", "\uDBBA\uDF01", ["arrow_up_small"], 21, 17
    ],
    "1f53d": [
        ["\uD83D\uDD3D"], "", "\uDBBA\uDF00", ["arrow_down_small"], 21, 18
    ],
    "1f550": [
        ["\uD83D\uDD50"], "\uE024", "\uDBB8\uDC1E", ["clock1"], 21, 19
    ],
    "1f551": [
        ["\uD83D\uDD51"], "\uE025", "\uDBB8\uDC1F", ["clock2"], 21, 20
    ],
    "1f552": [
        ["\uD83D\uDD52"], "\uE026", "\uDBB8\uDC20", ["clock3"], 21, 21
    ],
    "1f553": [
        ["\uD83D\uDD53"], "\uE027", "\uDBB8\uDC21", ["clock4"], 21, 22
    ],
    "1f554": [
        ["\uD83D\uDD54"], "\uE028", "\uDBB8\uDC22", ["clock5"], 21, 23
    ],
    "1f555": [
        ["\uD83D\uDD55"], "\uE029", "\uDBB8\uDC23", ["clock6"], 21, 24
    ],
    "1f556": [
        ["\uD83D\uDD56"], "\uE02A", "\uDBB8\uDC24", ["clock7"], 21, 25
    ],
    "1f557": [
        ["\uD83D\uDD57"], "\uE02B", "\uDBB8\uDC25", ["clock8"], 21, 26
    ],
    "1f558": [
        ["\uD83D\uDD58"], "\uE02C", "\uDBB8\uDC26", ["clock9"], 21, 27
    ],
    "1f559": [
        ["\uD83D\uDD59"], "\uE02D", "\uDBB8\uDC27", ["clock10"], 21, 28
    ],
    "1f55a": [
        ["\uD83D\uDD5A"], "\uE02E", "\uDBB8\uDC28", ["clock11"], 21, 29
    ],
    "1f55b": [
        ["\uD83D\uDD5B"], "\uE02F", "\uDBB8\uDC29", ["clock12"], 22, 0
    ],
    "1f55c": [
        ["\uD83D\uDD5C"], "", "", ["clock130"], 22, 1
    ],
    "1f55d": [
        ["\uD83D\uDD5D"], "", "", ["clock230"], 22, 2
    ],
    "1f55e": [
        ["\uD83D\uDD5E"], "", "", ["clock330"], 22, 3
    ],
    "1f55f": [
        ["\uD83D\uDD5F"], "", "", ["clock430"], 22, 4
    ],
    "1f560": [
        ["\uD83D\uDD60"], "", "", ["clock530"], 22, 5
    ],
    "1f561": [
        ["\uD83D\uDD61"], "", "", ["clock630"], 22, 6
    ],
    "1f562": [
        ["\uD83D\uDD62"], "", "", ["clock730"], 22, 7
    ],
    "1f563": [
        ["\uD83D\uDD63"], "", "", ["clock830"], 22, 8
    ],
    "1f564": [
        ["\uD83D\uDD64"], "", "", ["clock930"], 22, 9
    ],
    "1f565": [
        ["\uD83D\uDD65"], "", "", ["clock1030"], 22, 10
    ],
    "1f566": [
        ["\uD83D\uDD66"], "", "", ["clock1130"], 22, 11
    ],
    "1f567": [
        ["\uD83D\uDD67"], "", "", ["clock1230"], 22, 12
    ],
    "1f5fb": [
        ["\uD83D\uDDFB"], "\uE03B", "\uDBB9\uDCC3", ["mount_fuji"], 22, 13
    ],
    "1f5fc": [
        ["\uD83D\uDDFC"], "\uE509", "\uDBB9\uDCC4", ["tokyo_tower"], 22, 14
    ],
    "1f5fd": [
        ["\uD83D\uDDFD"], "\uE51D", "\uDBB9\uDCC6", ["statue_of_liberty"], 22, 15
    ],
    "1f5fe": [
        ["\uD83D\uDDFE"], "", "\uDBB9\uDCC7", ["japan"], 22, 16
    ],
    "1f5ff": [
        ["\uD83D\uDDFF"], "", "\uDBB9\uDCC8", ["moyai"], 22, 17
    ],
    "1f600": [
        ["\uD83D\uDE00"], "", "", ["grinning"], 22, 18, ":D"
    ],
    "1f601": [
        ["\uD83D\uDE01"], "\uE404", "\uDBB8\uDF33", ["grin"], 22, 19
    ],
    "1f602": [
        ["\uD83D\uDE02"], "\uE412", "\uDBB8\uDF34", ["joy"], 22, 20
    ],
    "1f603": [
        ["\uD83D\uDE03"], "\uE057", "\uDBB8\uDF30", ["smiley"], 22, 21, ":)"
    ],
    "1f604": [
        ["\uD83D\uDE04"], "\uE415", "\uDBB8\uDF38", ["smile"], 22, 22, ":)"
    ],
    "1f605": [
        ["\uD83D\uDE05"], "\uE415\uE331", "\uDBB8\uDF31", ["sweat_smile"], 22, 23
    ],
    "1f606": [
        ["\uD83D\uDE06"], "\uE40A", "\uDBB8\uDF32", ["satisfied"], 22, 24
    ],
    "1f607": [
        ["\uD83D\uDE07"], "", "", ["innocent"], 22, 25
    ],
    "1f608": [
        ["\uD83D\uDE08"], "", "", ["smiling_imp"], 22, 26
    ],
    "1f609": [
        ["\uD83D\uDE09"], "\uE405", "\uDBB8\uDF47", ["wink"], 22, 27, ";)"
    ],
    "1f60a": [
        ["\uD83D\uDE0A"], "\uE056", "\uDBB8\uDF35", ["blush"], 22, 28
    ],
    "1f60b": [
        ["\uD83D\uDE0B"], "\uE056", "\uDBB8\uDF2B", ["yum"], 22, 29
    ],
    "1f60c": [
        ["\uD83D\uDE0C"], "\uE40A", "\uDBB8\uDF3E", ["relieved"], 23, 0
    ],
    "1f60d": [
        ["\uD83D\uDE0D"], "\uE106", "\uDBB8\uDF27", ["heart_eyes"], 23, 1
    ],
    "1f60e": [
        ["\uD83D\uDE0E"], "", "", ["sunglasses"], 23, 2
    ],
    "1f60f": [
        ["\uD83D\uDE0F"], "\uE402", "\uDBB8\uDF43", ["smirk"], 23, 3
    ],
    "1f610": [
        ["\uD83D\uDE10"], "", "", ["neutral_face"], 23, 4
    ],
    "1f611": [
        ["\uD83D\uDE11"], "", "", ["expressionless"], 23, 5
    ],
    "1f612": [
        ["\uD83D\uDE12"], "\uE40E", "\uDBB8\uDF26", ["unamused"], 23, 6
    ],
    "1f613": [
        ["\uD83D\uDE13"], "\uE108", "\uDBB8\uDF44", ["sweat"], 23, 7
    ],
    "1f614": [
        ["\uD83D\uDE14"], "\uE403", "\uDBB8\uDF40", ["pensive"], 23, 8
    ],
    "1f615": [
        ["\uD83D\uDE15"], "", "", ["confused"], 23, 9
    ],
    "1f616": [
        ["\uD83D\uDE16"], "\uE407", "\uDBB8\uDF3F", ["confounded"], 23, 10
    ],
    "1f617": [
        ["\uD83D\uDE17"], "", "", ["kissing"], 23, 11
    ],
    "1f618": [
        ["\uD83D\uDE18"], "\uE418", "\uDBB8\uDF2C", ["kissing_heart"], 23, 12
    ],
    "1f619": [
        ["\uD83D\uDE19"], "", "", ["kissing_smiling_eyes"], 23, 13
    ],
    "1f61a": [
        ["\uD83D\uDE1A"], "\uE417", "\uDBB8\uDF2D", ["kissing_closed_eyes"], 23, 14
    ],
    "1f61b": [
        ["\uD83D\uDE1B"], "", "", ["stuck_out_tongue"], 23, 15, ":p"
    ],
    "1f61c": [
        ["\uD83D\uDE1C"], "\uE105", "\uDBB8\uDF29", ["stuck_out_tongue_winking_eye"], 23, 16, ";p"
    ],
    "1f61d": [
        ["\uD83D\uDE1D"], "\uE409", "\uDBB8\uDF2A", ["stuck_out_tongue_closed_eyes"], 23, 17
    ],
    "1f61e": [
        ["\uD83D\uDE1E"], "\uE058", "\uDBB8\uDF23", ["disappointed"], 23, 18, ":("
    ],
    "1f61f": [
        ["\uD83D\uDE1F"], "", "", ["worried"], 23, 19
    ],
    "1f620": [
        ["\uD83D\uDE20"], "\uE059", "\uDBB8\uDF20", ["angry"], 23, 20
    ],
    "1f621": [
        ["\uD83D\uDE21"], "\uE416", "\uDBB8\uDF3D", ["rage"], 23, 21
    ],
    "1f622": [
        ["\uD83D\uDE22"], "\uE413", "\uDBB8\uDF39", ["cry"], 23, 22, ":'("
    ],
    "1f623": [
        ["\uD83D\uDE23"], "\uE406", "\uDBB8\uDF3C", ["persevere"], 23, 23
    ],
    "1f624": [
        ["\uD83D\uDE24"], "\uE404", "\uDBB8\uDF28", ["triumph"], 23, 24
    ],
    "1f625": [
        ["\uD83D\uDE25"], "\uE401", "\uDBB8\uDF45", ["disappointed_relieved"], 23, 25
    ],
    "1f626": [
        ["\uD83D\uDE26"], "", "", ["frowning"], 23, 26
    ],
    "1f627": [
        ["\uD83D\uDE27"], "", "", ["anguished"], 23, 27
    ],
    "1f628": [
        ["\uD83D\uDE28"], "\uE40B", "\uDBB8\uDF3B", ["fearful"], 23, 28
    ],
    "1f629": [
        ["\uD83D\uDE29"], "\uE403", "\uDBB8\uDF21", ["weary"], 23, 29
    ],
    "1f62a": [
        ["\uD83D\uDE2A"], "\uE408", "\uDBB8\uDF42", ["sleepy"], 24, 0
    ],
    "1f62b": [
        ["\uD83D\uDE2B"], "\uE406", "\uDBB8\uDF46", ["tired_face"], 24, 1
    ],
    "1f62c": [
        ["\uD83D\uDE2C"], "", "", ["grimacing"], 24, 2
    ],
    "1f62d": [
        ["\uD83D\uDE2D"], "\uE411", "\uDBB8\uDF3A", ["sob"], 24, 3, ":'("
    ],
    "1f62e": [
        ["\uD83D\uDE2E"], "", "", ["open_mouth"], 24, 4
    ],
    "1f62f": [
        ["\uD83D\uDE2F"], "", "", ["hushed"], 24, 5
    ],
    "1f630": [
        ["\uD83D\uDE30"], "\uE40F", "\uDBB8\uDF25", ["cold_sweat"], 24, 6
    ],
    "1f631": [
        ["\uD83D\uDE31"], "\uE107", "\uDBB8\uDF41", ["scream"], 24, 7
    ],
    "1f632": [
        ["\uD83D\uDE32"], "\uE410", "\uDBB8\uDF22", ["astonished"], 24, 8
    ],
    "1f633": [
        ["\uD83D\uDE33"], "\uE40D", "\uDBB8\uDF2F", ["flushed"], 24, 9
    ],
    "1f634": [
        ["\uD83D\uDE34"], "", "", ["sleeping"], 24, 10
    ],
    "1f635": [
        ["\uD83D\uDE35"], "\uE406", "\uDBB8\uDF24", ["dizzy_face"], 24, 11
    ],
    "1f636": [
        ["\uD83D\uDE36"], "", "", ["no_mouth"], 24, 12
    ],
    "1f637": [
        ["\uD83D\uDE37"], "\uE40C", "\uDBB8\uDF2E", ["mask"], 24, 13
    ],
    "1f638": [
        ["\uD83D\uDE38"], "\uE404", "\uDBB8\uDF49", ["smile_cat"], 24, 14
    ],
    "1f639": [
        ["\uD83D\uDE39"], "\uE412", "\uDBB8\uDF4A", ["joy_cat"], 24, 15
    ],
    "1f63a": [
        ["\uD83D\uDE3A"], "\uE057", "\uDBB8\uDF48", ["smiley_cat"], 24, 16
    ],
    "1f63b": [
        ["\uD83D\uDE3B"], "\uE106", "\uDBB8\uDF4C", ["heart_eyes_cat"], 24, 17
    ],
    "1f63c": [
        ["\uD83D\uDE3C"], "\uE404", "\uDBB8\uDF4F", ["smirk_cat"], 24, 18
    ],
    "1f63d": [
        ["\uD83D\uDE3D"], "\uE418", "\uDBB8\uDF4B", ["kissing_cat"], 24, 19
    ],
    "1f63e": [
        ["\uD83D\uDE3E"], "\uE416", "\uDBB8\uDF4E", ["pouting_cat"], 24, 20
    ],
    "1f63f": [
        ["\uD83D\uDE3F"], "\uE413", "\uDBB8\uDF4D", ["crying_cat_face"], 24, 21
    ],
    "1f640": [
        ["\uD83D\uDE40"], "\uE403", "\uDBB8\uDF50", ["scream_cat"], 24, 22
    ],
    "1f645": [
        ["\uD83D\uDE45"], "\uE423", "\uDBB8\uDF51", ["no_good"], 24, 23
    ],
    "1f646": [
        ["\uD83D\uDE46"], "\uE424", "\uDBB8\uDF52", ["ok_woman"], 24, 24
    ],
    "1f647": [
        ["\uD83D\uDE47"], "\uE426", "\uDBB8\uDF53", ["bow"], 24, 25
    ],
    "1f648": [
        ["\uD83D\uDE48"], "", "\uDBB8\uDF54", ["see_no_evil"], 24, 26
    ],
    "1f649": [
        ["\uD83D\uDE49"], "", "\uDBB8\uDF56", ["hear_no_evil"], 24, 27
    ],
    "1f64a": [
        ["\uD83D\uDE4A"], "", "\uDBB8\uDF55", ["speak_no_evil"], 24, 28
    ],
    "1f64b": [
        ["\uD83D\uDE4B"], "\uE012", "\uDBB8\uDF57", ["raising_hand"], 24, 29
    ],
    "1f64c": [
        ["\uD83D\uDE4C"], "\uE427", "\uDBB8\uDF58", ["raised_hands"], 25, 0
    ],
    "1f64d": [
        ["\uD83D\uDE4D"], "\uE403", "\uDBB8\uDF59", ["person_frowning"], 25, 1
    ],
    "1f64e": [
        ["\uD83D\uDE4E"], "\uE416", "\uDBB8\uDF5A", ["person_with_pouting_face"], 25, 2
    ],
    "1f64f": [
        ["\uD83D\uDE4F"], "\uE41D", "\uDBB8\uDF5B", ["pray"], 25, 3
    ],
    "1f680": [
        ["\uD83D\uDE80"], "\uE10D", "\uDBB9\uDFED", ["rocket"], 25, 4
    ],
    "1f681": [
        ["\uD83D\uDE81"], "", "", ["helicopter"], 25, 5
    ],
    "1f682": [
        ["\uD83D\uDE82"], "", "", ["steam_locomotive"], 25, 6
    ],
    "1f683": [
        ["\uD83D\uDE83"], "\uE01E", "\uDBB9\uDFDF", ["railway_car"], 25, 7
    ],
    "1f684": [
        ["\uD83D\uDE84"], "\uE435", "\uDBB9\uDFE2", ["bullettrain_side"], 25, 8
    ],
    "1f685": [
        ["\uD83D\uDE85"], "\uE01F", "\uDBB9\uDFE3", ["bullettrain_front"], 25, 9
    ],
    "1f686": [
        ["\uD83D\uDE86"], "", "", ["train2"], 25, 10
    ],
    "1f687": [
        ["\uD83D\uDE87"], "\uE434", "\uDBB9\uDFE0", ["metro"], 25, 11
    ],
    "1f688": [
        ["\uD83D\uDE88"], "", "", ["light_rail"], 25, 12
    ],
    "1f689": [
        ["\uD83D\uDE89"], "\uE039", "\uDBB9\uDFEC", ["station"], 25, 13
    ],
    "1f68a": [
        ["\uD83D\uDE8A"], "", "", ["tram"], 25, 14
    ],
    "1f68b": [
        ["\uD83D\uDE8B"], "", "", ["train"], 25, 15
    ],
    "1f68c": [
        ["\uD83D\uDE8C"], "\uE159", "\uDBB9\uDFE6", ["bus"], 25, 16
    ],
    "1f68d": [
        ["\uD83D\uDE8D"], "", "", ["oncoming_bus"], 25, 17
    ],
    "1f68e": [
        ["\uD83D\uDE8E"], "", "", ["trolleybus"], 25, 18
    ],
    "1f68f": [
        ["\uD83D\uDE8F"], "\uE150", "\uDBB9\uDFE7", ["busstop"], 25, 19
    ],
    "1f690": [
        ["\uD83D\uDE90"], "", "", ["minibus"], 25, 20
    ],
    "1f691": [
        ["\uD83D\uDE91"], "\uE431", "\uDBB9\uDFF3", ["ambulance"], 25, 21
    ],
    "1f692": [
        ["\uD83D\uDE92"], "\uE430", "\uDBB9\uDFF2", ["fire_engine"], 25, 22
    ],
    "1f693": [
        ["\uD83D\uDE93"], "\uE432", "\uDBB9\uDFF4", ["police_car"], 25, 23
    ],
    "1f694": [
        ["\uD83D\uDE94"], "", "", ["oncoming_police_car"], 25, 24
    ],
    "1f695": [
        ["\uD83D\uDE95"], "\uE15A", "\uDBB9\uDFEF", ["taxi"], 25, 25
    ],
    "1f696": [
        ["\uD83D\uDE96"], "", "", ["oncoming_taxi"], 25, 26
    ],
    "1f697": [
        ["\uD83D\uDE97"], "\uE01B", "\uDBB9\uDFE4", ["car", "red_car"], 25, 27
    ],
    "1f698": [
        ["\uD83D\uDE98"], "", "", ["oncoming_automobile"], 25, 28
    ],
    "1f699": [
        ["\uD83D\uDE99"], "\uE42E", "\uDBB9\uDFE5", ["blue_car"], 25, 29
    ],
    "1f69a": [
        ["\uD83D\uDE9A"], "\uE42F", "\uDBB9\uDFF1", ["truck"], 26, 0
    ],
    "1f69b": [
        ["\uD83D\uDE9B"], "", "", ["articulated_lorry"], 26, 1
    ],
    "1f69c": [
        ["\uD83D\uDE9C"], "", "", ["tractor"], 26, 2
    ],
    "1f69d": [
        ["\uD83D\uDE9D"], "", "", ["monorail"], 26, 3
    ],
    "1f69e": [
        ["\uD83D\uDE9E"], "", "", ["mountain_railway"], 26, 4
    ],
    "1f69f": [
        ["\uD83D\uDE9F"], "", "", ["suspension_railway"], 26, 5
    ],
    "1f6a0": [
        ["\uD83D\uDEA0"], "", "", ["mountain_cableway"], 26, 6
    ],
    "1f6a1": [
        ["\uD83D\uDEA1"], "", "", ["aerial_tramway"], 26, 7
    ],
    "1f6a2": [
        ["\uD83D\uDEA2"], "\uE202", "\uDBB9\uDFE8", ["ship"], 26, 8
    ],
    "1f6a3": [
        ["\uD83D\uDEA3"], "", "", ["rowboat"], 26, 9
    ],
    "1f6a4": [
        ["\uD83D\uDEA4"], "\uE135", "\uDBB9\uDFEE", ["speedboat"], 26, 10
    ],
    "1f6a5": [
        ["\uD83D\uDEA5"], "\uE14E", "\uDBB9\uDFF7", ["traffic_light"], 26, 11
    ],
    "1f6a6": [
        ["\uD83D\uDEA6"], "", "", ["vertical_traffic_light"], 26, 12
    ],
    "1f6a7": [
        ["\uD83D\uDEA7"], "\uE137", "\uDBB9\uDFF8", ["construction"], 26, 13
    ],
    "1f6a8": [
        ["\uD83D\uDEA8"], "\uE432", "\uDBB9\uDFF9", ["rotating_light"], 26, 14
    ],
    "1f6a9": [
        ["\uD83D\uDEA9"], "", "\uDBBA\uDF22", ["triangular_flag_on_post"], 26, 15
    ],
    "1f6aa": [
        ["\uD83D\uDEAA"], "", "\uDBB9\uDCF3", ["door"], 26, 16
    ],
    "1f6ab": [
        ["\uD83D\uDEAB"], "", "\uDBBA\uDF48", ["no_entry_sign"], 26, 17
    ],
    "1f6ac": [
        ["\uD83D\uDEAC"], "\uE30E", "\uDBBA\uDF1E", ["smoking"], 26, 18
    ],
    "1f6ad": [
        ["\uD83D\uDEAD"], "\uE208", "\uDBBA\uDF1F", ["no_smoking"], 26, 19
    ],
    "1f6ae": [
        ["\uD83D\uDEAE"], "", "", ["put_litter_in_its_place"], 26, 20
    ],
    "1f6af": [
        ["\uD83D\uDEAF"], "", "", ["do_not_litter"], 26, 21
    ],
    "1f6b0": [
        ["\uD83D\uDEB0"], "", "", ["potable_water"], 26, 22
    ],
    "1f6b1": [
        ["\uD83D\uDEB1"], "", "", ["non-potable_water"], 26, 23
    ],
    "1f6b2": [
        ["\uD83D\uDEB2"], "\uE136", "\uDBB9\uDFEB", ["bike"], 26, 24
    ],
    "1f6b3": [
        ["\uD83D\uDEB3"], "", "", ["no_bicycles"], 26, 25
    ],
    "1f6b4": [
        ["\uD83D\uDEB4"], "", "", ["bicyclist"], 26, 26
    ],
    "1f6b5": [
        ["\uD83D\uDEB5"], "", "", ["mountain_bicyclist"], 26, 27
    ],
    "1f6b6": [
        ["\uD83D\uDEB6"], "\uE201", "\uDBB9\uDFF0", ["walking"], 26, 28
    ],
    "1f6b7": [
        ["\uD83D\uDEB7"], "", "", ["no_pedestrians"], 26, 29
    ],
    "1f6b8": [
        ["\uD83D\uDEB8"], "", "", ["children_crossing"], 27, 0
    ],
    "1f6b9": [
        ["\uD83D\uDEB9"], "\uE138", "\uDBBA\uDF33", ["mens"], 27, 1
    ],
    "1f6ba": [
        ["\uD83D\uDEBA"], "\uE139", "\uDBBA\uDF34", ["womens"], 27, 2
    ],
    "1f6bb": [
        ["\uD83D\uDEBB"], "\uE151", "\uDBB9\uDD06", ["restroom"], 27, 3
    ],
    "1f6bc": [
        ["\uD83D\uDEBC"], "\uE13A", "\uDBBA\uDF35", ["baby_symbol"], 27, 4
    ],
    "1f6bd": [
        ["\uD83D\uDEBD"], "\uE140", "\uDBB9\uDD07", ["toilet"], 27, 5
    ],
    "1f6be": [
        ["\uD83D\uDEBE"], "\uE309", "\uDBB9\uDD08", ["wc"], 27, 6
    ],
    "1f6bf": [
        ["\uD83D\uDEBF"], "", "", ["shower"], 27, 7
    ],
    "1f6c0": [
        ["\uD83D\uDEC0"], "\uE13F", "\uDBB9\uDD05", ["bath"], 27, 8
    ],
    "1f6c1": [
        ["\uD83D\uDEC1"], "", "", ["bathtub"], 27, 9
    ],
    "1f6c2": [
        ["\uD83D\uDEC2"], "", "", ["passport_control"], 27, 10
    ],
    "1f6c3": [
        ["\uD83D\uDEC3"], "", "", ["customs"], 27, 11
    ],
    "1f6c4": [
        ["\uD83D\uDEC4"], "", "", ["baggage_claim"], 27, 12
    ],
    "1f6c5": [
        ["\uD83D\uDEC5"], "", "", ["left_luggage"], 27, 13
    ],
    "0023-20e3": [
        ["\u0023\uFE0F\u20E3", "\u0023\u20E3"], "\uE210", "\uDBBA\uDC2C", ["hash"], 27, 14
    ],
    "0030-20e3": [
        ["\u0030\uFE0F\u20E3", "\u0030\u20E3"], "\uE225", "\uDBBA\uDC37", ["zero"], 27, 15
    ],
    "0031-20e3": [
        ["\u0031\uFE0F\u20E3", "\u0031\u20E3"], "\uE21C", "\uDBBA\uDC2E", ["one"], 27, 16
    ],
    "0032-20e3": [
        ["\u0032\uFE0F\u20E3", "\u0032\u20E3"], "\uE21D", "\uDBBA\uDC2F", ["two"], 27, 17
    ],
    "0033-20e3": [
        ["\u0033\uFE0F\u20E3", "\u0033\u20E3"], "\uE21E", "\uDBBA\uDC30", ["three"], 27, 18
    ],
    "0034-20e3": [
        ["\u0034\uFE0F\u20E3", "\u0034\u20E3"], "\uE21F", "\uDBBA\uDC31", ["four"], 27, 19
    ],
    "0035-20e3": [
        ["\u0035\uFE0F\u20E3", "\u0035\u20E3"], "\uE220", "\uDBBA\uDC32", ["five"], 27, 20
    ],
    "0036-20e3": [
        ["\u0036\uFE0F\u20E3", "\u0036\u20E3"], "\uE221", "\uDBBA\uDC33", ["six"], 27, 21
    ],
    "0037-20e3": [
        ["\u0037\uFE0F\u20E3", "\u0037\u20E3"], "\uE222", "\uDBBA\uDC34", ["seven"], 27, 22
    ],
    "0038-20e3": [
        ["\u0038\uFE0F\u20E3", "\u0038\u20E3"], "\uE223", "\uDBBA\uDC35", ["eight"], 27, 23
    ],
    "0039-20e3": [
        ["\u0039\uFE0F\u20E3", "\u0039\u20E3"], "\uE224", "\uDBBA\uDC36", ["nine"], 27, 24
    ],
    "1f1e8-1f1f3": [
        ["\uD83C\uDDE8\uD83C\uDDF3"], "\uE513", "\uDBB9\uDCED", ["cn"], 27, 25
    ],
    "1f1e9-1f1ea": [
        ["\uD83C\uDDE9\uD83C\uDDEA"], "\uE50E", "\uDBB9\uDCE8", ["de"], 27, 26
    ],
    "1f1ea-1f1f8": [
        ["\uD83C\uDDEA\uD83C\uDDF8"], "\uE511", "\uDBB9\uDCEB", ["es"], 27, 27
    ],
    "1f1eb-1f1f7": [
        ["\uD83C\uDDEB\uD83C\uDDF7"], "\uE50D", "\uDBB9\uDCE7", ["fr"], 27, 28
    ],
    "1f1ec-1f1e7": [
        ["\uD83C\uDDEC\uD83C\uDDE7"], "\uE510", "\uDBB9\uDCEA", ["gb", "uk"], 27, 29
    ],
    "1f1ee-1f1f9": [
        ["\uD83C\uDDEE\uD83C\uDDF9"], "\uE50F", "\uDBB9\uDCE9", ["it"], 28, 0
    ],
    "1f1ef-1f1f5": [
        ["\uD83C\uDDEF\uD83C\uDDF5"], "\uE50B", "\uDBB9\uDCE5", ["jp"], 28, 1
    ],
    "1f1f0-1f1f7": [
        ["\uD83C\uDDF0\uD83C\uDDF7"], "\uE514", "\uDBB9\uDCEE", ["kr"], 28, 2
    ],
    "1f1f7-1f1fa": [
        ["\uD83C\uDDF7\uD83C\uDDFA"], "\uE512", "\uDBB9\uDCEC", ["ru"], 28, 3
    ],
    "1f1fa-1f1f8": [
        ["\uD83C\uDDFA\uD83C\uDDF8"], "\uE50C", "\uDBB9\uDCE6", ["us"], 28, 4
    ]
};

Config.smileys = {
    "<3": "heart",
    "<\/3": "broken_heart",
    ":)": "blush",
    "(:": "blush",
    ":-)": "blush",
    "C:": "smile",
    "c:": "smile",
    ":D": "smile",
    ":-D": "smile",
    ";)": "wink",
    ";-)": "wink",
    "):": "disappointed",
    ":(": "disappointed",
    ":-(": "disappointed",
    ":'(": "cry",
    "=)": "smiley",
    "=-)": "smiley",
    ":*": "kiss",
    ":-*": "kiss",
    ":>": "laughing",
    ":->": "laughing",
    "8)": "sunglasses",
    ":\\\\": "confused",
    ":-\\\\": "confused",
    ":\/": "confused",
    ":-\/": "confused",
    ":|": "neutral_face",
    ":-|": "neutral_face",
    ":o": "open_mouth",
    ":-o": "open_mouth",
    ">:(": "angry",
    ">:-(": "angry",
    ":p": "stuck_out_tongue",
    ":-p": "stuck_out_tongue",
    ":P": "stuck_out_tongue",
    ":-P": "stuck_out_tongue",
    ":b": "stuck_out_tongue",
    ":-b": "stuck_out_tongue",
    ";p": "stuck_out_tongue_winking_eye",
    ";-p": "stuck_out_tongue_winking_eye",
    ";b": "stuck_out_tongue_winking_eye",
    ";-b": "stuck_out_tongue_winking_eye",
    ";P": "stuck_out_tongue_winking_eye",
    ";-P": "stuck_out_tongue_winking_eye",
    ":o)": "monkey_face",
    "D:": "anguished"
};

Config.inits = {};
Config.map = {};

Config.mapcolon = {};
var a = [];
Config.reversemap = {};

Config.init_emoticons = function()
{
    if (Config.inits.emoticons)
        return;
    Config.init_colons(); // we require this for the emoticons map
    Config.inits.emoticons = 1;

    var a = [];
    Config.map.emoticons = {};
    for (var i in Config.emoticons_data)
    {
        // because we never see some characters in our text except as
        // entities, we must do some replacing
        var emoticon = i.replace(/\&/g, '&amp;').replace(/\</g, '&lt;')
            .replace(/\>/g, '&gt;');

        if (!Config.map.colons[emoji.emoticons_data[i]])
            continue;

        Config.map.emoticons[emoticon] = Config.map.colons[Config.emoticons_data[i]];
        a.push(Config.escape_rx(emoticon));
    }
    Config.rx_emoticons = new RegExp(
        ('(^|\\s)(' + a.join('|') + ')(?=$|[\\s|\\?\\.,!])'), 'g');
};
Config.init_colons = function()
{
    if (Config.inits.colons)
        return;
    Config.inits.colons = 1;
    Config.rx_colons = new RegExp('\:[^\\s:]+\:', 'g');
    Config.map.colons = {};
    for (var i in Config.data)
    {
        for (var j = 0; j < Config.data[i][3].length; j++)
        {
            Config.map.colons[emoji.data[i][3][j]] = i;
        }
    }
};
Config.init_unified = function()
{
    if (Config.inits.unified)
        return;
    Config.inits.unified = 1;

    buildMap();

};


Config.escape_rx = function(text)
{
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

function buildMap()
{

    var colons = [],codes=[];
    for (var i in Config.emoji_data)
    {
        for (var j = 0; j < Config.emoji_data[i][0].length; j++)
        {
            colons.push(Config.escape_rx (":"+Config.emoji_data[i][3][0])+":");
            codes.push(Config.emoji_data[i][0][0]);

            // it is a map of {"colon smiley":"unicode char"}
            Config.map[Config.emoji_data[i][3][0]] = Config.emoji_data[i][0][0];
            Config.mapcolon[":"+Config.emoji_data[i][3][0]+":"] = Config.emoji_data[i][0][0];
            // it is a map of {"unicode char": "colon smiley"}
            Config.reversemap[Config.emoji_data[i][0][0]] = Config.emoji_data[i][3][0];
        }

        Config.rx_colons = new RegExp('(' + colons.join('|') + ')', "g");
        Config.rx_codes = new RegExp('(' + codes.join('|') + ')', "g");
    }
}

;

'use strict';
    
function cancelEvent (event) {
  event = event || window.event;
  if (event) {
    event = event.originalEvent || event;

    if (event.stopPropagation) event.stopPropagation();
    if (event.preventDefault) event.preventDefault();
  }

  return false;
}

function getGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

//ConfigStorage
(function(window)
{
    var keyPrefix = '';
    var noPrefix = false;
    var cache = {};
    var useCs = !!(window.chrome && chrome.storage && chrome.storage.local);
    var useLs = !useCs && !!window.localStorage;

    function storageSetPrefix(newPrefix)
    {
        keyPrefix = newPrefix;
    }

    function storageSetNoPrefix()
    {
        noPrefix = true;
    }

    function storageGetPrefix()
    {
        if (noPrefix)
        {
            noPrefix = false;
            return '';
        }
        return keyPrefix;
    }

    function storageGetValue()
    {
        var keys = Array.prototype.slice.call(arguments),
            callback = keys.pop(),
            result = [],
            single = keys.length == 1,
            value,
            allFound = true,
            prefix = storageGetPrefix(),
            i, key;

        for (i = 0; i < keys.length; i++)
        {
            key = keys[i] = prefix + keys[i];
            if (key.substr(0, 3) != 'xt_' && cache[key] !== undefined)
            {
                result.push(cache[key]);
            }
            else if (useLs)
            {
                try
                {
                    value = localStorage.getItem(key);
                }
                catch (e)
                {
                    useLs = false;
                }
                try
                {
                    value = (value === undefined || value === null) ? false : JSON.parse(value);
                }
                catch (e)
                {
                    value = false;
                }
                result.push(cache[key] = value);
            }
            else if (!useCs)
            {
                result.push(cache[key] = false);
            }
            else
            {
                allFound = false;
            }
        }

        if (allFound)
        {
            return callback(single ? result[0] : result);
        }

        chrome.storage.local.get(keys, function(resultObj)
        {
            var value;
            result = [];
            for (i = 0; i < keys.length; i++)
            {
                key = keys[i];
                value = resultObj[key];
                value = value === undefined || value === null ? false : JSON.parse(value);
                result.push(cache[key] = value);
            }

            callback(single ? result[0] : result);
        });
    };

    function storageSetValue(obj, callback)
    {
        var keyValues = {},
            prefix = storageGetPrefix(),
            key, value;

        for (key in obj)
        {
            if (obj.hasOwnProperty(key))
            {
                value = obj[key];
                key = prefix + key;
                cache[key] = value;
                value = JSON.stringify(value);
                if (useLs)
                {
                    try
                    {
                        localStorage.setItem(key, value);
                    }
                    catch (e)
                    {
                        useLs = false;
                    }
                }
                else
                {
                    keyValues[key] = value;
                }
            }
        }

        if (useLs || !useCs)
        {
            if (callback)
            {
                callback();
            }
            return;
        }

        chrome.storage.local.set(keyValues, callback);
    };

    function storageRemoveValue()
    {
        var keys = Array.prototype.slice.call(arguments),
            prefix = storageGetPrefix(),
            i, key, callback;

        if (typeof keys[keys.length - 1] === 'function')
        {
            callback = keys.pop();
        }

        for (i = 0; i < keys.length; i++)
        {
            key = keys[i] = prefix + keys[i];
            delete cache[key];
            if (useLs)
            {
                try
                {
                    localStorage.removeItem(key);
                }
                catch (e)
                {
                    useLs = false;
                }
            }
        }
        if (useCs)
        {
            chrome.storage.local.remove(keys, callback);
        }
        else if (callback)
        {
            callback();
        }
    };

    window.ConfigStorage = {
        prefix: storageSetPrefix,
        noPrefix: storageSetNoPrefix,
        get: storageGetValue,
        set: storageSetValue,
        remove: storageRemoveValue
    };


})(this);


;

/**
 * emojiarea - A rich textarea control that supports emojis, WYSIWYG-style.
 * Copyright (c) 2012 DIY Co
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@diy.org>
 */

/**
 * This file also contains some modifications by Igor Zhukov in order to add
 * custom scrollbars to EmojiMenu See keyword `MODIFICATION` in source code.
 */
(function($, window, document) {

	var ELEMENT_NODE = 1;
	var TEXT_NODE = 3;
	var TAGS_BLOCK = [ 'p', 'div', 'pre', 'form' ];
	var KEY_ESC = 27;
	var KEY_TAB = 9;
	
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	/*
	 * ! MODIFICATION START Options 'spritesheetPath', 'spritesheetDimens',
	 * 'iconSize' added by Andre Staltz.
	 */
	$.emojiarea = {
		assetsPath : '',
		iconSize : 25,
		icons : {},
	};
	var defaultRecentEmojis = ':joy:,:kissing_heart:,:heart:,:heart_eyes:,:blush:,:grin:,:+1:,:relaxed:,:pensive:,:smile:,:sob:,:kiss:,:unamused:,:flushed:,:stuck_out_tongue_winking_eye:,:see_no_evil:,:wink:,:smiley:,:cry:,:stuck_out_tongue_closed_eyes:,:scream:,:rage:,:smirk:,:disappointed:,:sweat_smile:,:kissing_closed_eyes:,:speak_no_evil:,:relieved:,:grinning:,:yum:,:laughing:,:ok_hand:,:neutral_face:,:confused:'
			.split(',');
	/* ! MODIFICATION END */

	$.fn.emojiarea = function(options) {
		options = $.extend({}, options);
		return this
			.each(function () {
				var originalInput = $(this);
				if ('contentEditable' in document.body
					&& options.wysiwyg !== false) {
					var id = getGuid();
					new EmojiArea_WYSIWYG(originalInput, id, $.extend({}, options));
				} else {
					var id = getGuid();
					new EmojiArea_Plain(originalInput, id, options);
				}
				originalInput.attr(
					{
						'data-emojiable': 'converted',
						'data-id': id,
						'data-type': 'original-input'
					});
			});
	};

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	var util = {};

	util.restoreSelection = (function() {
		if (window.getSelection) {
			return function(savedSelection) {
				var sel = window.getSelection();
				sel.removeAllRanges();
				for (var i = 0, len = savedSelection.length; i < len; ++i) {
					sel.addRange(savedSelection[i]);
				}
			};
		} else if (document.selection && document.selection.createRange) {
			return function(savedSelection) {
				if (savedSelection) {
					savedSelection.select();
				}
			};
		}
	})();

	util.saveSelection = (function() {
		if (window.getSelection) {
			return function() {
				var sel = window.getSelection(), ranges = [];
				if (sel.rangeCount) {
					for (var i = 0, len = sel.rangeCount; i < len; ++i) {
						ranges.push(sel.getRangeAt(i));
					}
				}
				return ranges;
			};
		} else if (document.selection && document.selection.createRange) {
			return function() {
				var sel = document.selection;
				return (sel.type.toLowerCase() !== 'none') ? sel.createRange()
						: null;
			};
		}
	})();

	util.replaceSelection = (function() {
		if (window.getSelection) {
			return function(content) {
				var range, sel = window.getSelection();
				var node = typeof content === 'string' ? document
						.createTextNode(content) : content;
				if (sel.getRangeAt && sel.rangeCount) {
					range = sel.getRangeAt(0);
					range.deleteContents();
					//range.insertNode(document.createTextNode(''));
					range.insertNode(node);
					range.setStart(node, 0);

					window.setTimeout(function() {
						range = document.createRange();
						range.setStartAfter(node);
						range.collapse(true);
						sel.removeAllRanges();
						sel.addRange(range);
					}, 0);
				}
			}
		} else if (document.selection && document.selection.createRange) {
			return function(content) {
				var range = document.selection.createRange();
				if (typeof content === 'string') {
					range.text = content;
				} else {
					range.pasteHTML(content.outerHTML);
				}
			}
		}
	})();

	util.insertAtCursor = function(text, el) {
		text = ' ' + text;
		var val = el.value, endIndex, startIndex, range;
		if (typeof el.selectionStart != 'undefined'
				&& typeof el.selectionEnd != 'undefined') {
			startIndex = el.selectionStart;
			endIndex = el.selectionEnd;
			el.value = val.substring(0, startIndex) + text
					+ val.substring(el.selectionEnd);
			el.selectionStart = el.selectionEnd = startIndex + text.length;
		} else if (typeof document.selection != 'undefined'
				&& typeof document.selection.createRange != 'undefined') {
			el.focus();
			range = document.selection.createRange();
			range.text = text;
			range.select();
		}
	};

	util.extend = function(a, b) {
		if (typeof a === 'undefined' || !a) {
			a = {};
		}
		if (typeof b === 'object') {
			for ( var key in b) {
				if (b.hasOwnProperty(key)) {
					a[key] = b[key];
				}
			}
		}
		return a;
	};

	util.escapeRegex = function(str) {
		return (str + '').replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
	};

	util.htmlEntities = function(str) {
		return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;')
				.replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	};

	/*
	 * ! MODIFICATION START This function was added by Igor Zhukov to save
	 * recent used emojis.
	 */
	util.emojiInserted = function(emojiKey, menu) {
		ConfigStorage.get('emojis_recent', function(curEmojis) {
			curEmojis = curEmojis || defaultRecentEmojis || [];

			var pos = curEmojis.indexOf(emojiKey);
			if (!pos) {
				return false;
			}
			if (pos != -1) {
				curEmojis.splice(pos, 1);
			}
			curEmojis.unshift(emojiKey);
			if (curEmojis.length > 42) {
				curEmojis = curEmojis.slice(42);
			}

			ConfigStorage.set({
				emojis_recent : curEmojis
			});
		})
	};
	/* ! MODIFICATION END */

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	var EmojiArea = function() {
	};

	EmojiArea.prototype.setup = function() {
		var self = this;

		this.$editor.on('focus', function() {
			self.hasFocus = true;
		});
		this.$editor.on('blur', function() {
			self.hasFocus = false;
		});

    // Assign a unique instance of an emojiMenu to
    self.emojiMenu = new EmojiMenu(self);

		this.setupButton();
	};

	EmojiArea.prototype.setupButton = function() {
		var self = this;
		var $button = $('[data-id=' + this.id + '][data-type=picker]');

    $button.on('click', function(e) {
      self.emojiMenu.show(self);
		});

		this.$button = $button;
    this.$dontHideOnClick = 'emoji-picker';
	};

	/*
	 * ! MODIFICATION START This function was modified by Andre Staltz so that
	 * the icon is created from a spritesheet.
	 */
	EmojiArea.createIcon = function(emoji, menu) {
		var category = emoji[0];
		var row = emoji[1];
		var column = emoji[2];
		var name = emoji[3];
		var filename = $.emojiarea.assetsPath + '/emoji_spritesheet_!.png';
    var blankGifPath = $.emojiarea.assetsPath + '/blank.gif';
		var iconSize = menu && Config.Mobile ? 26 : $.emojiarea.iconSize
		var xoffset = -(iconSize * column);
		var yoffset = -(iconSize * row);
		var scaledWidth = (Config.EmojiCategorySpritesheetDimens[category][1] * iconSize);
		var scaledHeight = (Config.EmojiCategorySpritesheetDimens[category][0] * iconSize);

		var style = 'display:inline-block;';
		style += 'width:' + iconSize + 'px;';
		style += 'height:' + iconSize + 'px;';
		style += 'background:url(\'' + filename.replace('!', category) + '\') '
				+ xoffset + 'px ' + yoffset + 'px no-repeat;';
		style += 'background-size:' + scaledWidth + 'px ' + scaledHeight
				+ 'px;';
		return '<img src="' + blankGifPath + '" class="img" style="'
				+ style + '" alt="' + util.htmlEntities(name) + '">';
	};
	
	$.emojiarea.createIcon = EmojiArea.createIcon;
	/* ! MODIFICATION END */

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	/**
	 * Editor (plain-text)
	 * 
	 * @constructor
	 * @param {object}
	 *            $textarea
	 * @param {object}
	 *            options
	 */

	var EmojiArea_Plain = function($textarea, id, options) {
		this.options = options;
		this.$textarea = $textarea;
		this.$editor = $textarea;
    this.id = id;
		this.setup();
	};

	EmojiArea_Plain.prototype.insert = function(emoji) {
		if (!$.emojiarea.icons.hasOwnProperty(emoji))
			return;
		util.insertAtCursor(emoji, this.$textarea[0]);
		/*
		 * MODIFICATION: Following line was added by Igor Zhukov, in order to
		 * save recent emojis
		 */
		util.emojiInserted(emoji, this.menu);
		this.$textarea.trigger('change');
	};

	EmojiArea_Plain.prototype.val = function() {
		if (this.$textarea == '\n')
			return '';
		return this.$textarea.val();
	};

	util.extend(EmojiArea_Plain.prototype, EmojiArea.prototype);

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	/**
	 * Editor (rich)
	 * 
	 * @constructor
	 * @param {object}
	 *            $textarea
	 * @param {object}
	 *            options
	 */

	var EmojiArea_WYSIWYG = function($textarea, id, options) {
		var self = this;

		this.options = options || {};
		if ($($textarea).attr('data-emoji-input') === 'unicode')
			this.options.inputMethod = 'unicode';
		else
			this.options.inputMethod = 'image';
    this.id = id;
		this.$textarea = $textarea;
    this.emojiPopup = options.emojiPopup;
		this.$editor = $('<div>').addClass('emoji-wysiwyg-editor').addClass($($textarea)[0].className);
    this.$editor.data('self', this);

    if ($textarea.attr('maxlength')) {
      this.$editor.attr('maxlength', $textarea.attr('maxlength'));
    }
    var unicodeToImageText = this.emojiPopup.unicodeToImage($textarea.val());
		this.$editor.html(unicodeToImageText);
		this.$editor.attr({
			'data-id': id,
			'data-type': 'input',
			'placeholder': $textarea.attr('placeholder'),
			'contenteditable': 'true',
		});

		/*
		 * ! MODIFICATION START Following code was modified by Igor Zhukov, in
		 * order to improve rich text paste
		 */
		var changeEvents = 'blur change';
		if (!this.options.norealTime) {
			changeEvents += ' keyup';
		}
		this.$editor.on(changeEvents, function(e) {
			return self.onChange.apply(self, [ e ]);
		});
		/* ! MODIFICATION END */

		this.$editor.on('mousedown focus', function() {
			document.execCommand('enableObjectResizing', false, false);
		});
		this.$editor.on('blur', function() {
			document.execCommand('enableObjectResizing', true, true);
		});

    var editorDiv = this.$editor;
		this.$editor.on("change keydown keyup resize scroll", function(e) {

      if(e.which != 8 && editorDiv.text().length + editorDiv.find('img').length >= editorDiv.attr('maxlength'))
      {
        e.preventDefault();
      }
      self.updateBodyPadding(editorDiv);
    });

    $textarea.after("<i class='emoji-picker-icon emoji-picker " + this.options.popupButtonClasses + "' data-id='" + id + "' data-type='picker'></i>");

		$textarea.hide().after(this.$editor);
		this.setup();

		/*
		 * MODIFICATION: Following line was modified by Igor Zhukov, in order to
		 * improve emoji insert behaviour
		 */
		$(document.body).on('mousedown', function() {
			if (self.hasFocus) {
				self.selection = util.saveSelection();
			}
		});
	};

  EmojiArea_WYSIWYG.prototype.updateBodyPadding = function(target) {
    var emojiPicker = $('[data-id=' + this.id + '][data-type=picker]');
    if ($(target).hasScrollbar()) {
      if (!(emojiPicker.hasClass('parent-has-scroll')))
        emojiPicker.addClass('parent-has-scroll');
      if (!($(target).hasClass('parent-has-scroll')))
        $(target).addClass('parent-has-scroll');
    } else {
      if ((emojiPicker.hasClass('parent-has-scroll')))
        emojiPicker.removeClass('parent-has-scroll');
      if (($(target).hasClass('parent-has-scroll')))
        $(target).removeClass('parent-has-scroll');
    }
  };

	EmojiArea_WYSIWYG.prototype.onChange = function(e) {
		this.$textarea.val(this.val()).trigger('change');
	};

	EmojiArea_WYSIWYG.prototype.insert = function(emoji) {
		var content;
		/*
		 * MODIFICATION: Following line was modified by Andre Staltz, to use new
		 * implementation of createIcon function.
		 */
		var insertionContent = '';
		if (this.options.inputMethod == 'unicode') {
			insertionContent = this.emojiPopup.colonToUnicode(emoji);
		} else {
			var $img = $(EmojiArea.createIcon($.emojiarea.icons[emoji]));
			if ($img[0].attachEvent) {
				$img[0].attachEvent('onresizestart', function(e) {
					e.returnValue = false;
				}, false);
			}
			insertionContent = $img[0];
		}

		this.$editor.trigger('focus');
		if (this.selection) {
			util.restoreSelection(this.selection);
		}
		try {
			util.replaceSelection(insertionContent);
		} catch (e) {
		}

		/*
		 * MODIFICATION: Following line was added by Igor Zhukov, in order to
		 * save recent emojis
		 */
		util.emojiInserted(emoji, this.menu);

		this.onChange();
	};

	EmojiArea_WYSIWYG.prototype.val = function() {
		var lines = [];
		var line = [];
    var emojiPopup = this.emojiPopup;

		var flush = function() {
			lines.push(line.join(''));
			line = [];
		};

		var sanitizeNode = function(node) {
			if (node.nodeType === TEXT_NODE) {
				line.push(node.nodeValue);
			} else if (node.nodeType === ELEMENT_NODE) {
				var tagName = node.tagName.toLowerCase();
				var isBlock = TAGS_BLOCK.indexOf(tagName) !== -1;

				if (isBlock && line.length)
					flush();

				if (tagName === 'img') {
					var alt = node.getAttribute('alt') || '';
					if (alt) {
							line.push(alt);
					}
					return;
				} else if (tagName === 'br') {
					flush();
				}

				var children = node.childNodes;
				for (var i = 0; i < children.length; i++) {
					 sanitizeNode(children[i]);
				}

				if (isBlock && line.length)
					flush();
			}
		};

		var children = this.$editor[0].childNodes;
		for (var i = 0; i < children.length; i++) {
			sanitizeNode(children[i]);
		}

		if (line.length)
			flush();

		var returnValue = lines.join('\n');
    return emojiPopup.colonToUnicode(returnValue);
	};

	util.extend(EmojiArea_WYSIWYG.prototype, EmojiArea.prototype);

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  jQuery.fn.hasScrollbar = function() {
    var scrollHeight = this.get(0).scrollHeight;

    //safari's scrollHeight includes padding
    //if ($.browser.safari)
//      scrollHeight -= parseInt(this.css('padding-top')) + parseInt(this.css('padding-bottom'));
    if (this.outerHeight() < scrollHeight)
      return true;
    else
      return false;
  }

	/**
	 * Emoji Dropdown Menu
	 * 
	 * @constructor
	 * @param {object}
	 *            emojiarea
	 */
	var EmojiMenu = function(emojiarea) {
		var self = this;
    self.id = emojiarea.id;
		var $body = $(document.body);
		var $window = $(window);

		this.visible = false;
		this.emojiarea = emojiarea;
		EmojiMenu.menuZIndex = 5000;
		this.$menu = $('<div>');
		this.$menu.addClass('emoji-menu');
    this.$menu.attr('data-id', self.id);
    this.$menu.attr('data-type', 'menu');
		this.$menu.hide();

		/*
		 * ! MODIFICATION START Following code was modified by Igor Zhukov, in
		 * order to add scrollbars and tail to EmojiMenu Also modified by Andre
		 * Staltz, to include tabs for categories, on the menu header.
		 */
		this.$itemsTailWrap = $('<div class="emoji-items-wrap1"></div>')
				.appendTo(this.$menu);
		this.$categoryTabs = $(
				'<table class="emoji-menu-tabs"><tr>'
						+ '<td><a class="emoji-menu-tab icon-recent" ></a></td>'
						+ '<td><a class="emoji-menu-tab icon-smile" ></a></td>'
						+ '<td><a class="emoji-menu-tab icon-flower"></a></td>'
						+ '<td><a class="emoji-menu-tab icon-bell"></a></td>'
						+ '<td><a class="emoji-menu-tab icon-car"></a></td>'
						+ '<td><a class="emoji-menu-tab icon-grid"></a></td>'
						+ '</tr></table>').appendTo(this.$itemsTailWrap);
		this.$itemsWrap = $(
				'<div class="emoji-items-wrap nano mobile_scrollable_wrap"></div>')
				.appendTo(this.$itemsTailWrap);
		this.$items = $('<div class="emoji-items nano-content">').appendTo(
				this.$itemsWrap);
		/* ! MODIFICATION END */

		$body.append(this.$menu);

		/*
		 * ! MODIFICATION: Following 3 lines were added by Igor Zhukov, in order
		 * to add scrollbars to EmojiMenu
		 */
		
		  if (!Config.Mobile) {
		  this.$itemsWrap.nanoScroller({preventPageScrolling: true, tabIndex:
		  -1}); }
		 
		
		//this.$itemsWrap.nanoScroller({preventPageScrolling: true, tabIndex:* -1});

		$body.on('keydown', function(e) {
			if (e.keyCode === KEY_ESC || e.keyCode === KEY_TAB) {
				self.hide();
			}
		});

		/*
		 * ! MODIFICATION: Following 3 lines were added by Igor Zhukov, in order
		 * to hide menu on message submit with keyboard
		 */
		$body.on('message_send', function(e) {
			self.hide();
		});

		$body.on('mouseup', function(e) {
			/*
			 * ! MODIFICATION START Following code was added by Igor Zhukov, in
			 * order to prevent close on click on EmojiMenu scrollbar
			 */
			e = e.originalEvent || e;
			var target = e.originalTarget || e.target || window;

      if ($(target).hasClass(self.emojiarea.$dontHideOnClick)) {
        return;
      }

			while (target && target != window) {
				target = target.parentNode;
				if (target == self.$menu[0] || self.emojiarea
						&& target == self.emojiarea.$button[0]) {
					return;
				}
			}
			/* ! MODIFICATION END */
			self.hide();
		});

		$window.on('resize', function() {
			if (self.visible)
				self.reposition();
		});

		this.$menu.on('mouseup', 'a', function(e) {
			e.stopPropagation();
			return false;
		});

		this.$menu.on('click', 'a', function(e) {
      self.emojiarea.updateBodyPadding(self.emojiarea.$editor);
			/*
			 * ! MODIFICATION START Following code was modified by Andre Staltz,
			 * to capture clicks on category tabs and change the category
			 * selection.
			 */
			if ($(this).hasClass('emoji-menu-tab')) {
				if (self.getTabIndex(this) !== self.currentCategory) {
					self.selectCategory(self.getTabIndex(this));
				}
				return false;
			}
			/* ! MODIFICATION END */
			var emoji = $('.label', $(this)).text();
			window.setTimeout(function() {
				self.onItemSelected(emoji);
				/*
				 * ! MODIFICATION START Following code was modified by Igor
				 * Zhukov, in order to close only on ctrl-, alt- emoji select
				 */
				if (e.ctrlKey || e.metaKey) {
					self.hide();
				}
				/* ! MODIFICATION END */
			}, 0);
			e.stopPropagation();
			return false;
		});

		/*
		 * MODIFICATION: Following line was modified by Andre Staltz, in order
		 * to select a default category.
		 */
		this.selectCategory(0);
	};

	/*
	 * ! MODIFICATION START Following code was added by Andre Staltz, to
	 * implement category selection.
	 */
	EmojiMenu.prototype.getTabIndex = function(tab) {
		return this.$categoryTabs.find('.emoji-menu-tab').index(tab);
	};

	EmojiMenu.prototype.selectCategory = function(category) {
		var self = this;
		this.$categoryTabs.find('.emoji-menu-tab').each(function(index) {
			if (index === category) {
				this.className += '-selected';
			} else {
				this.className = this.className.replace('-selected', '');
			}
		});
		this.currentCategory = category;
		this.load(category);

		
		 if (!Config.Mobile) { this.$itemsWrap.nanoScroller({ scroll: 'top'
		 }); }
		 
		 
		 
	};
	/* ! MODIFICATION END */

	EmojiMenu.prototype.onItemSelected = function(emoji) {
    if(this.emojiarea.$editor.text().length + this.emojiarea.$editor.find('img').length >= this.emojiarea.$editor.attr('maxlength'))
    {
      return;
    }
		this.emojiarea.insert(emoji);
	};

	/*
	 * MODIFICATION: The following function argument was modified by Andre
	 * Staltz, in order to load only icons from a category. Also function was
	 * modified by Igor Zhukov in order to display recent emojis from
	 * localStorage
	 */
	EmojiMenu.prototype.load = function(category) {
		var html = [];
		var options = $.emojiarea.icons;
		var path = $.emojiarea.assetsPath;
		var self = this;
		if (path.length && path.charAt(path.length - 1) !== '/') {
			path += '/';
		}

		/*
		 * ! MODIFICATION: Following function was added by Igor Zhukov, in order
		 * to add scrollbars to EmojiMenu
		 */
		var updateItems = function() {
			self.$items.html(html.join(''));

			
			  if (!Config.Mobile) { setTimeout(function () {
			  self.$itemsWrap.nanoScroller(); }, 100); }
			 
		}

		if (category > 0) {
			for ( var key in options) {
				/*
				 * MODIFICATION: The following 2 lines were modified by Andre
				 * Staltz, in order to load only icons from the specified
				 * category.
				 */
				if (options.hasOwnProperty(key)
						&& options[key][0] === (category - 1)) {
					html.push('<a href="javascript:void(0)" title="'
							+ util.htmlEntities(key) + '">'
							+ EmojiArea.createIcon(options[key], true)
							+ '<span class="label">' + util.htmlEntities(key)
							+ '</span></a>');
				}
			}
			updateItems();
		} else {
			ConfigStorage.get('emojis_recent', function(curEmojis) {
				curEmojis = curEmojis || defaultRecentEmojis || [];
				var key, i;
				for (i = 0; i < curEmojis.length; i++) {
					key = curEmojis[i]
					if (options[key]) {
						html.push('<a href="javascript:void(0)" title="'
								+ util.htmlEntities(key) + '">'
								+ EmojiArea.createIcon(options[key], true)
								+ '<span class="label">'
								+ util.htmlEntities(key) + '</span></a>');
					}
				}
				updateItems();
			});
		}0
	};

	EmojiMenu.prototype.reposition = function() {
    if (!this.tether) {

      this.tether = new Tether({
        element: '[data-id="' + this.id + '"][data-type="menu"]',
        target: '[data-id="' + this.id + '"][data-type="picker"]',
        attachment: 'left center',
        targetAttachment: 'bottom left',
        offset: '0 12px',
        constraints: [
          {
            to: 'html',
            pin: true
          }
        ]
      });
    }
	};

  EmojiMenu.prototype.hide = function(callback) {
    this.visible = false;
    this.$menu.hide("fast");
  };

  EmojiMenu.prototype.show = function(emojiarea) {
    /*
     * MODIFICATION: Following line was modified by Igor Zhukov, in order to
     * improve EmojiMenu behaviour
     */
    if (this.visible)
      return this.hide();
    this.reposition();
		$(this.$menu).css('z-index', ++EmojiMenu.menuZIndex);
    this.$menu.show("fast");
    /*
     * MODIFICATION: Following 3 lines were added by Igor Zhukov, in order
     * to update EmojiMenu contents
     */
    if (!this.currentCategory) {
      this.load(0);
    }
    this.visible = true;
  };

})(jQuery, window, document);;

// Generated by CoffeeScript 1.9.3
(function() {
  this.EmojiPicker = (function() {
    function EmojiPicker(options) {
      var ref, ref1;
      if (options == null) {
        options = {};
      }
      $.emojiarea.iconSize = (ref = options.iconSize) != null ? ref : 25;
      $.emojiarea.assetsPath = (ref1 = options.assetsPath) != null ? ref1 : '';
      this.generateEmojiIconSets(options);
      if (!options.emojiable_selector) {
        options.emojiable_selector = '[data-emojiable=true]';
      }
      this.options = options;
    }

    EmojiPicker.prototype.discover = function() {
      var isiOS;
      isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      if (isiOS) {
        return;
      }
      return $(this.options.emojiable_selector).emojiarea($.extend({
        emojiPopup: this,
        norealTime: true
      }, this.options));
    };

    EmojiPicker.prototype.generateEmojiIconSets = function(options) {
      var column, dataItem, hex, i, icons, j, name, reverseIcons, row, totalColumns;
      icons = {};
      reverseIcons = {};
      i = void 0;
      j = void 0;
      hex = void 0;
      name = void 0;
      dataItem = void 0;
      row = void 0;
      column = void 0;
      totalColumns = void 0;
      j = 0;
      while (j < Config.EmojiCategories.length) {
        totalColumns = Config.EmojiCategorySpritesheetDimens[j][1];
        i = 0;
        while (i < Config.EmojiCategories[j].length) {
          dataItem = Config.Emoji[Config.EmojiCategories[j][i]];
          name = dataItem[1][0];
          row = Math.floor(i / totalColumns);
          column = i % totalColumns;
          icons[':' + name + ':'] = [j, row, column, ':' + name + ':'];
          reverseIcons[name] = dataItem[0];
          i++;
        }
        j++;
      }
      $.emojiarea.icons = icons;
      return $.emojiarea.reverseIcons = reverseIcons;
    };

    EmojiPicker.prototype.colonToUnicode = function(input) {
      if (!input) {
        return '';
      }
      if (!Config.rx_colons) {
        Config.init_unified();
      }
      return input.replace(Config.rx_colons, function(m) {
        var val;
        val = Config.mapcolon[m];
        if (val) {
          return val;
        } else {
          return '';
        }
      });
    };

    EmojiPicker.prototype.unicodeToImage = function(input) {
      if (!input) {
        return '';
      }
      if (!Config.rx_codes) {
        Config.init_unified();
      }
      return input.replace(Config.rx_codes, function(m) {
        var $img, val;
        val = Config.reversemap[m];
        if (val) {
          val = ':' + val + ':';
          $img = $.emojiarea.createIcon($.emojiarea.icons[val]);
          return $img;
        } else {
          return '';
        }
      });
    };

    EmojiPicker.prototype.colonToImage = function(input) {
      if (!input) {
        return '';
      }
      if (!Config.rx_colons) {
        Config.init_unified();
      }
      return input.replace(Config.rx_colons, function(m) {
        var $img;
        if (m) {
          $img = $.emojiarea.createIcon($.emojiarea.icons[m]);
          return $img;
        } else {
          return '';
        }
      });
    };

    return EmojiPicker;

  })();

}).call(this);
//# sourceMappingURL=vendor.js.map