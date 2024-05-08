"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5481],{8860:(n,e,t)=>{t.d(e,{xA:()=>s,yg:()=>m});var r=t(7953);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c=r.createContext({}),i=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},s=function(n){var e=i(n.components);return r.createElement(c.Provider,{value:e},n.children)},g="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,l=n.originalType,c=n.parentName,s=u(n,["components","mdxType","originalType","parentName"]),g=i(t),f=a,m=g["".concat(c,".").concat(f)]||g[f]||p[f]||l;return t?r.createElement(m,o(o({ref:e},s),{},{components:t})):r.createElement(m,o({ref:e},s))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var l=t.length,o=new Array(l);o[0]=f;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=n,u[g]="string"==typeof n?n:a,o[1]=u;for(var i=2;i<l;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},754:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var r=t(3911),a=(t(7953),t(8860));const l={slug:"\u9898\u76ee",title:"\u9898\u76ee",authors:["Lvxl"],tags:["\u9898\u76ee"]},o="\u8bd5\u9898",u={permalink:"/lvxl_blog/question/\u9898\u76ee",source:"@site/question/question.md",title:"\u9898\u76ee",description:"\u8003\u70b9: this",date:"2023-02-17T10:28:10.000Z",formattedDate:"February 17, 2023",tags:[{label:"\u9898\u76ee",permalink:"/lvxl_blog/question/tags/\u9898\u76ee"}],readingTime:2.995,hasTruncateMarker:!1,authors:[{name:"Lvxl",title:"\u524d\u7aef\u5c0f\u767d",url:"https://lvxueliang.github.io/lvxl_blog",imageURL:"https://lvxueliang.github.io/lvxl_blog/img/logo.jpeg",key:"Lvxl"}],frontMatter:{slug:"\u9898\u76ee",title:"\u9898\u76ee",authors:["Lvxl"],tags:["\u9898\u76ee"]},prevItem:{title:"\u9762\u8bd5\u9898",permalink:"/lvxl_blog/question/\u9762\u8bd5\u9898"}},c={authorsImageUrls:[void 0]},i=[],s={toc:i},g="wrapper";function p(n){let{components:e,...t}=n;return(0,a.yg)(g,(0,r.A)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u8003\u70b9: this "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"window.onload = function() {\n    var length = 1;\n    function fn() {\n        console.log(this.length)\n    }\n    var obj = {\n        length: 100,\n        action: function(callback) {\n            callback();\n            arguments[0]();\n        }\n    }\n\n    var arr = [1,2,3,4]\n    obj.action(fn, ...arr)\n\n    // \u7ed3\u679c:\n}\n\n")),(0,a.yg)("p",null,"\u8003\u70b9 \u4e8b\u4ef6\u5faa\u73af"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"\nsetTimeout(() => {\n    console.log(100)\n},0)\n\nnew Promise((resolve, reject) => {\n    resolve()\n}).then(() => {\n    console.log(200)\n}) \n\nfunction f() {\n    console.log(300)\n}\n\nasync function f2 () {\n    await f()\n    console.log(400)\n}\nf2()\n\n\n//  300 -> 200 -> 400 -> 100\n// \u601d\u8def: \n// 1. settimeout100 \u52a0\u5165\u5230\u5b8f\u4efb\u52a1\u961f\u5217\n// 2. promise.then() \u52a0\u5165\u5230\u5fae\u4efb\u52a1\u961f\u5217\n// 3. f2() \u6267\u884c\n// 4. await f()\u6267\u884c \u8f93\u51fa 300\n// 5. await \u4e0b\u9762\u7684 400 \u52a0\u5165\u5230\u5fae\u4efb\u52a1\u961f\u5217\n// 6. \u5f00\u59cb\u4e0b\u4e00\u6b21\u5faa\u73af \u5148\u6267\u884c\u5fae\u4efb\u52a1\u961f\u5217\u5148\u8fdb\u5148\u51fa\u539f\u5219 \u8f93\u51fa 200\n// 7. \u7ee7\u7eed\u6267\u884c\u5fae\u4efb\u52a1\u961f\u5217\u91cc\u9762\u7684\u4efb\u52a1 400\n// 8. \u6700\u540e\u6267\u884c\u5b8f\u4efb\u52a1 100\n")),(0,a.yg)("p",null,"\u8003\u70b9 \u4f5c\u7528\u57df"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"\nvar a = 10     \nvar obj = {   \n    a: 99,\n    f: test\n}\nfunction test() {\n    console.log(a)   \n    a = 100\n    console.log(this.a) \n    var a \n    console.log(a)\n}\nobj.f()\n\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"\nvar a = 10\nfunction f1 () {\n    var b = 2 *a:\n    var a =  20;\n    var c = a + 1\n    console.log(b)\n    console.log(c)\n}\nf1()\n\n// go: a f1    => undefind\n// vo: b a c \n//     b = 2 * undefind  => NaN\n//     a = 20\n//     c = 20 + 1\n//     b = NaN\n//     c = 21\n")),(0,a.yg)("p",null,"\u8003\u70b9: js\u8ba1\u7b97\u7cbe\u5ea6\u95ee\u9898"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"// \u5bf9\u4e8e\u8fd9\u4e2a\u95ee\u9898\uff0c\u4e00\u4e2a\u76f4\u63a5\u7684\u89e3\u51b3\u65b9\u6cd5\u5c31\u662f\u8bbe\u7f6e\u4e00\u4e2a\u8bef\u5dee\u8303\u56f4\uff0c\u901a\u5e38\u79f0\u4e3a\u201c\u673a\u5668\u7cbe\u5ea6\u201d\u3002\u5bf9JavaScript\u6765\u8bf4\uff0c\u8fd9\u4e2a\u503c\u901a\u5e38\u4e3a2-52\uff0c\u5728ES6\u4e2d\uff0c\u63d0\u4f9b\u4e86Number.EPSILON\u5c5e\u6027\uff0c\u800c\u5b83\u7684\u503c\u5c31\u662f2-52\uff0c\u53ea\u8981\u5224\u65ad0.1+0.2-0.3\u662f\u5426\u5c0f\u4e8eNumber.EPSILON\uff0c\u5982\u679c\u5c0f\u4e8e\uff0c\u5c31\u53ef\u4ee5\u5224\u65ad\u4e3a0.1+0.2 ===0.3\n\nfunction numberepsilon(arg1,arg2){                   \n  return Math.abs(arg1 - arg2) < Number.EPSILON;        \n}        \n\nconsole.log(numberepsilon(0.1 + 0.2, 0.3)); // true\n")),(0,a.yg)("p",null,"\u8003\u70b9: \u4e8c\u53c9\u6811\n\u5c06","[3,9,null,null,15,7]"," \u8f6c\u4e3a\u6811\u5f62\u7ed3\u6784"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"// 1. \u5b9a\u4e49\u4e00\u4e2a\u6811\u8282\u70b9\u7c7b\uff0c\u5305\u542b\u8282\u70b9\u503c\u3001\u5de6\u5b50\u8282\u70b9\u548c\u53f3\u5b50\u8282\u70b9\uff1a\nclass TreeNode  {\n    constructor(val) {\n        this.val = val \n        this.left = null \n        this.right = null \n    }\n}\n// 2.\u5b9a\u4e49\u4e00\u4e2a\u51fd\u6570\uff0c\u63a5\u53d7\u4e00\u4e2a\u6570\u7ec4\u4f5c\u4e3a\u53c2\u6570\uff0c\u5e76\u8fd4\u56de\u6784\u5efa\u597d\u7684\u6811\u7684\u6839\u8282\u70b9\uff1a\nfunction buildTree(arr) {\n    if (!arr || !arr.length) return null;\n\n    // \u521b\u5efa\u6839\u8282\u70b9\n    const root = new TreeNode(arr[0])\n    // \u5c42\u5e8f\u904d\u5386\u521b\u5efa\u6811\n    const queue = [root]\n    let i = 1;\n    while(queue.length > 0 && i <arr.lenght) {\n        const node = queue.shift()\n        //\u5de6\u5b50\u8282\u70b9\n        if(arr[i] !== null) {\n            const left = new TreeNode(arr[i]);\n            node.left = left\n            queue.push(left)\n        }\n        i++;\n    }\n}\n\n")),(0,a.yg)("p",null,"(a == 1 && a == 2 && a == 3)"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"\nlet obj = {\n  value: 1,\n  get a() {\n    return this.value++;\n  }\n};\n\nconsole.log(a == 1 && a == 2 && a == 3); // \u8f93\u51fa true\n")),(0,a.yg)("p",null,"\u5bf9\u8c61\u7684\u6241\u5e73\u5316"))}p.isMDXComponent=!0}}]);