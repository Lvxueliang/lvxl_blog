"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[120],{8860:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(7953);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),g=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=g(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=g(n),y=l,m=c["".concat(s,".").concat(y)]||c[y]||u[y]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var g=2;g<a;g++)o[g]=n[g];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>g});var r=n(3911),l=(n(7953),n(8860));const a={slug:"utils",title:"\u5de5\u5177\u51fd\u6570",authors:["Lvxl"],tags:["\u9632\u6296\u8282\u6d41","call","apply","bind"]},o="\u51fd\u6570\u624b\u5199",i={permalink:"/lvxl_blog/blog/utils",source:"@site/blog/2023-02-05-\u5de5\u5177\u51fd\u6570.md",title:"\u5de5\u5177\u51fd\u6570",description:"\u9632\u6296",date:"2023-02-05T00:00:00.000Z",formattedDate:"February 5, 2023",tags:[{label:"\u9632\u6296\u8282\u6d41",permalink:"/lvxl_blog/blog/tags/\u9632\u6296\u8282\u6d41"},{label:"call",permalink:"/lvxl_blog/blog/tags/call"},{label:"apply",permalink:"/lvxl_blog/blog/tags/apply"},{label:"bind",permalink:"/lvxl_blog/blog/tags/bind"}],readingTime:1.375,hasTruncateMarker:!1,authors:[{name:"Lvxl",title:"\u524d\u7aef\u5c0f\u767d",url:"https://lvxueliang.github.io/lvxl_blog",imageURL:"https://lvxueliang.github.io/lvxl_blog/img/logo.jpeg",key:"Lvxl"}],frontMatter:{slug:"utils",title:"\u5de5\u5177\u51fd\u6570",authors:["Lvxl"],tags:["\u9632\u6296\u8282\u6d41","call","apply","bind"]},prevItem:{title:"JAVASCRIPT",permalink:"/lvxl_blog/blog/js"},nextItem:{title:"HTTP",permalink:"/lvxl_blog/blog/HTTP"}},s={authorsImageUrls:[void 0]},g=[{value:"\u9632\u6296",id:"\u9632\u6296",level:3},{value:"\u8282\u6d41",id:"\u8282\u6d41",level:3},{value:"call,apply,bind",id:"callapplybind",level:3}],p={toc:g},c="wrapper";function u(e){let{components:t,...n}=e;return(0,l.yg)(c,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h3",{id:"\u9632\u6296"},"\u9632\u6296"),(0,l.yg)("p",null,"\u8fde\u7eed\u89e6\u53d1\u4e8b\u4ef6\u4f46\u662f\u5728\u8bbe\u5b9a\u7684\u4e00\u6bb5\u65f6\u95f4\u5185\u4e2d ",(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"\u53ea\u6267\u884c\u6700\u540e\u4e00\u6b21")),"\n\u573a\u666f: "),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u641c\u7d22\u6846\u8f93\u5165"),(0,l.yg)("li",{parentName:"ul"},"\u6587\u672c\u7f16\u8f91\u5668\u5b9e\u65f6\u4fdd\u5b58")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"function debounce(fn,wait = 2000, open=true) {\n    let timer;\n    let isUse = false;\n    return function(...arg) {\n        if (timer) {\n            clearInterval(timer)\n        }\n        if (open && !isUse) {\n            fn.call(this,...arg)\n            isUse = true\n        }\n        timer = setTimeout(() => {\n            fn.call(this,...arg)\n            }, wait);\n    }\n}\n")),(0,l.yg)("h3",{id:"\u8282\u6d41"},"\u8282\u6d41"),(0,l.yg)("p",null,"\u8fde\u7eed\u89e6\u53d1\u4e8b\u4ef6\u4f46\u662f\u5728\u8bbe\u5b9a\u7684\u4e00\u6bb5\u65f6\u95f4\u5185 ",(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"\u53ea\u6267\u884c\u4e00\u6b21")),"\n\u573a\u666f:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u9ad8\u9891\u4e8b\u4ef6 \u5feb\u901f\u70b9\u51fb, \u9f20\u6807\u6ed1\u52a8, resize\u4e8b\u4ef6, scroll\u4e8b\u4ef6"),(0,l.yg)("li",{parentName:"ul"},"\u4e0b\u62c9\u52a0\u8f7d")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"function throttle(fn, wait=200) {\n    let now = Date.now()\n    return function(...arg) {\n        let curtime = Date.now()\n        if(curtime - now > wait) {\n            fn.call(this,...arg)\n            now = Date.now()\n        }\n    }\n}\n")),(0,l.yg)("h3",{id:"callapplybind"},"call,apply,bind"),(0,l.yg)("p",null,"\u6539\u53d8this\u6307\u5411"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"// call\n// obj.say._call(a, 'xxx')  \n// this\u8c01\u8c03\u7528\u6307\u5411\u8c01 => target[symbolkey] = this \n// this = f() say\nFunction.prototype._call = function(target, ...args) {\n    target = target || window\n    const symbolKey = Symbol()\n    target[symbolKey] = this\n    const res = target[symbolKey](...args)\n    delete target[symbolKey]\n    return res\n}\n\nFunction.prototype._apply = function(target, args) {\n    target = target || window\n    let symbolkey = Symbol()\n    target[symbolkey] = this\n    const res = target[symbolkey](...args)\n    delete target[symbolkey]\n    return res\n}\n\nFunction.prototype._bind = function(target, ...args) {\n    target = target || {}\n    const symbolkey = Symbol()\n    target[symbolkey] = this\n    return function (...outerArgs) {\n        const res = target[symbolkey](...args,...outerArgs)\n        return res \n    }\n}\n")))}u.isMDXComponent=!0}}]);