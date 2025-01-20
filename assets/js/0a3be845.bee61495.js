"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3371],{8860:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>u});var a=t(7953);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var y=a.createContext({}),i=function(e){var r=a.useContext(y),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=i(e.components);return a.createElement(y.Provider,{value:r},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},c=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,y=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=i(t),c=n,u=m["".concat(y,".").concat(c)]||m[c]||g[c]||l;return t?a.createElement(u,o(o({ref:r},s),{},{components:t})):a.createElement(u,o({ref:r},s))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=c;var p={};for(var y in r)hasOwnProperty.call(r,y)&&(p[y]=r[y]);p.originalType=e,p[m]="string"==typeof e?e:n,o[1]=p;for(var i=2;i<l;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1634:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>y,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var a=t(5890),n=(t(7953),t(8860));const l={},o="ES6 \u65b0\u589e",p={unversionedId:"js/es6",id:"js/es6",title:"ES6 \u65b0\u589e",description:"Map & WeakMap",source:"@site/docs/js/2.es6.md",sourceDirName:"js",slug:"/js/es6",permalink:"/lvxl_blog/docs/js/es6",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"javascript\u6570\u636e\u7c7b\u578b",permalink:"/lvxl_blog/docs/js/\u6570\u636e\u7c7b\u578b"},next:{title:"NestJS",permalink:"/lvxl_blog/docs/category/nestjs"}},y={},i=[{value:"Map &amp; WeakMap",id:"map--weakmap",level:3},{value:"Set &amp; WeakSet",id:"set--weakset",level:3},{value:"Reflect \u53cd\u5c04\u5bf9\u8c61",id:"reflect-\u53cd\u5c04\u5bf9\u8c61",level:3},{value:"Proxy \u4ee3\u7406\u5bf9\u8c61",id:"proxy-\u4ee3\u7406\u5bf9\u8c61",level:3},{value:"Promise",id:"promise",level:3}],s={toc:i},m="wrapper";function g(e){let{components:r,...t}=e;return(0,n.yg)(m,(0,a.A)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"es6-\u65b0\u589e"},"ES6 \u65b0\u589e"),(0,n.yg)("h3",{id:"map--weakmap"},"Map & WeakMap"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Map",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"map\u5bf9\u8c61\u7ee7\u627f\u81eaobject,\u53ef\u4ee5\u901a\u8fc7\u539f\u578b\u7ee7\u627f\u53bb\u8c03\u7528object\u8eab\u4e0a\u539f\u578b\u65b9\u6cd5"),(0,n.yg)("li",{parentName:"ul"},"map\u5b9e\u4f8b\u5bf9\u8c61\u80fd\u901a\u8fc7for...of , \u666e\u901a\u5bf9\u8c61\u5b9e\u4f8b\u53ea\u80fd\u901a\u8fc7 for...in"),(0,n.yg)("li",{parentName:"ul"},"map\u7684key\u662f\u6709\u5e8f\u7684\u63d2\u5165\u7684\u65f6\u95f4\u987a\u5e8f, \u666e\u901a\u5bf9\u8c61\u7684key\u662f\u65e0\u5e8f\u7684"),(0,n.yg)("li",{parentName:"ul"},"map\u5bf9\u8c61\u7684key\u53ef\u4ee5\u662f\u4efb\u4f55\u7c7b\u578b\u7684\u503c, \u666e\u901a\u5bf9\u8c61\u7684key\u53ea\u80fd\u662fstring \u548c symbol"))),(0,n.yg)("li",{parentName:"ol"},"WeakMap",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"\u5b83\u53ef\u7528\u7684API\u529f\u80fd\u4e0emap\u4e00\u81f4, \u4f46\u662f\u4ed6\u7684key\u503c\u4e0d\u80fd\u662f\u539f\u59cb\u6570\u636e\u7c7b\u578b, \u4f1a\u62a5\u9519"),(0,n.yg)("li",{parentName:"ul"},"\u5f31\u5f15\u7528\u952e\u540d, \u952e\u540d\u7684\u5f15\u7528\u4e00\u65e6\u6d88\u9664, weakmap\u4e2d\u4fdd\u5b58\u7684\u5bf9\u5e94\u952e\u503c\u5bf9\u4e5f\u4f1a\u81ea\u52a8\u6d88\u5931 ")))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"    const map = new Map([\n        ['key1','val1']\n        ['key2','val2']\n    ])\n\n    console.log(map.size) // 2 \u83b7\u53d6\u957f\u5ea6\n    console.log(map.has('key1')) // true  // \u5224\u65ad\u5b58\u4e0d\u5b58\u5728\u8fd9\u4e2akey\n    console.log(map.get('key1')) // val1  // \u83b7\u53d6\u5f53\u524d\u952e\u7684\u503c \u6ca1\u6709 \u5219\u8fd4\u56de undefined \n    map.set('key3','value3')  // \u6dfb\u52a0\u4e00\u7ec4\u952e\u503c\u5bf9   map \u7684key\u503c\u63d2\u5165\u662f\u6709\u5e8f\u7684  object \u662f\u65e0\u5e8f\u7684\n    console.log(map.delete('key3')) // \u5220\u9664 \u5bf9\u5e94\u7684key  \u64cd\u4f5c\u6210\u529f\u8fd4\u56detrue \u5426\u5219 false\n    map.clear() // \u6e05\u7a7amap\u96c6\u5408\u6240\u6709\u952e\u503c\u5bf9 \n\n    for(const [key,value] of map.entries()) {\n        console.log(key, value)\n    }\n    // \u904d\u5386map\u96c6\u5408 \u8f93\u51fa\u5bf9\u5e94key value\n    map.entries() === map[Symbol.Iterator] // true   Iterator \u8fed\u4ee3\u5668\n    \n    Array.from(map)  or  [...map]  // \u53ef\u4ee5\u5c06map\u96c6\u5408\u8f6c\u4e3a\u4e8c\u7ef4\u6570\u7ec4\n\n    map.forEach((value,key,map) => {console.log(key, value, map)})\n\n    console.log(map.keys()); // [Map Iterator] { 'key1', 'key2', 'key3' }\n    console.log(map.values()); // [Map Iterator] { 'val1', 'val2', 'val3' }\n")),(0,n.yg)("h3",{id:"set--weakset"},"Set & WeakSet"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Set ",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"set \u7684Api \u4e0e map\u4e00\u81f4, \u4f46\u662f\u6ca1\u6709 get(...) \u65b9\u6cd5"),(0,n.yg)("li",{parentName:"ul"},"\u6211\u4eec\u4e00\u822c\u4f7f\u7528set\u8fdb\u884c\u6570\u7ec4\u53bb\u91cd"))),(0,n.yg)("li",{parentName:"ol"},"WeakSet",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"\u4e0eset \u7684Api \u76f8\u540c"),(0,n.yg)("li",{parentName:"ul"},"\u4e5f\u662f\u5f31\u6620\u5c04")))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},'const s = new Set(["val1", "val2", "val3"]);\ns.add(111);\ns.delete("val1");\n\nconsole.log(s.has("val1")); // true\nconsole.log(s.values()); // [Set Iterator] { \'val2\', \'val3\', 111 }\nconsole.log(s.keys()); // [Set Iterator] { \'val2\', \'val3\', 111 }\n\ns.forEach((key, value) => {\n  console.log(key, value);\n});\n// val2 val2\n// val3 val3\n// 111 111\nconst result = [1, 2, 3, 4, 5, 5, 6, 7, 7, 7, 8];\n\nconsole.log([...new Set(result)]); // [1, 2, 3, 4, 5, 6, 7, 8];\n')),(0,n.yg)("h3",{id:"reflect-\u53cd\u5c04\u5bf9\u8c61"},"Reflect \u53cd\u5c04\u5bf9\u8c61"),(0,n.yg)("h3",{id:"proxy-\u4ee3\u7406\u5bf9\u8c61"},"Proxy \u4ee3\u7406\u5bf9\u8c61"),(0,n.yg)("p",null,"Proxy \u5bf9\u76ee\u6807\u5bf9\u8c61\u5efa\u7acb\u4e00\u5c42\u62e6\u622a, \u53ef\u4ee5\u5bf9\u5916\u754c\u7684\u64cd\u4f5c\u8fdb\u884c\u8fc7\u6ee4\u548c\u6539\u5199"),(0,n.yg)("p",null,"Proxy\u4e5f\u662f\u5b58\u5728\u4ee3\u7406\u5c40\u9650\u6027\u7684\uff0c\u56e0\u4e3a\u4f60\u64cd\u4f5c\u6e90\u5bf9\u8c61\u65f6\uff0c\u6355\u83b7\u5668\u5e76\u4e0d\u4f1a\u88ab\u89e6\u53d1"),(0,n.yg)("p",null,"\u4e0b\u9762\u662f Proxy \u652f\u6301\u7684\u62e6\u622a\u64cd\u4f5c\u4e00\u89c8\uff0c\u4e00\u5171 13 \u79cd\u3002"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"get(target, propKey, receiver)\uff1a\u62e6\u622a\u5bf9\u8c61\u5c5e\u6027\u7684\u8bfb\u53d6\uff0c\u6bd4\u5982proxy.foo\u548cproxy","['foo']","\u3002"),(0,n.yg)("li",{parentName:"ul"},"set(target, propKey, value, receiver)\uff1a\u62e6\u622a\u5bf9\u8c61\u5c5e\u6027\u7684\u8bbe\u7f6e\uff0c\u6bd4\u5982proxy.foo = v\u6216proxy","['foo']"," = v\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002"),(0,n.yg)("li",{parentName:"ul"},"has(target, propKey)\uff1a\u62e6\u622apropKey in proxy\u7684\u64cd\u4f5c\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002"),(0,n.yg)("li",{parentName:"ul"},"deleteProperty(target, propKey)\uff1a\u62e6\u622adelete proxy","[propKey]","\u7684\u64cd\u4f5c\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002"),(0,n.yg)("li",{parentName:"ul"},"ownKeys(target)\uff1a\u62e6\u622aObject.getOwnPropertyNames(proxy)\u3001Object.getOwnPropertySymbols(proxy)\u3001Object.keys(proxy)\u3001for...in\u5faa\u73af\uff0c\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\u3002\u8be5\u65b9\u6cd5\u8fd4\u56de\u76ee\u6807\u5bf9\u8c61\u6240\u6709\u81ea\u8eab\u7684\u5c5e\u6027\u7684\u5c5e\u6027\u540d\uff0c\u800cObject.keys()\u7684\u8fd4\u56de\u7ed3\u679c\u4ec5\u5305\u62ec\u76ee\u6807\u5bf9\u8c61\u81ea\u8eab\u7684\u53ef\u904d\u5386\u5c5e\u6027\u3002"),(0,n.yg)("li",{parentName:"ul"},"getOwnPropertyDescriptor(target, propKey)\uff1a\u62e6\u622aObject.getOwnPropertyDescriptor(proxy, propKey)\uff0c\u8fd4\u56de\u5c5e\u6027\u7684\u63cf\u8ff0\u5bf9\u8c61\u3002"),(0,n.yg)("li",{parentName:"ul"},"defineProperty(target, propKey, propDesc)\uff1a\u62e6\u622aObject.defineProperty(proxy, propKey, propDesc\uff09\u3001Object.defineProperties(proxy, propDescs)\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002"),(0,n.yg)("li",{parentName:"ul"},"preventExtensions(target)\uff1a\u62e6\u622aObject.preventExtensions(proxy)\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002"),(0,n.yg)("li",{parentName:"ul"},"getPrototypeOf(target)\uff1a\u62e6\u622aObject.getPrototypeOf(proxy)\uff0c\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\u3002"),(0,n.yg)("li",{parentName:"ul"},"isExtensible(target)\uff1a\u62e6\u622aObject.isExtensible(proxy)\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002"),(0,n.yg)("li",{parentName:"ul"},"setPrototypeOf(target, proto)\uff1a\u62e6\u622aObject.setPrototypeOf(proxy, proto)\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002\u5982\u679c\u76ee\u6807\u5bf9\u8c61\u662f\u51fd\u6570\uff0c\u90a3\u4e48\u8fd8\u6709\u4e24\u79cd\u989d\u5916\u64cd\u4f5c\u53ef\u4ee5\u62e6\u622a\u3002"),(0,n.yg)("li",{parentName:"ul"},"apply(target, object, args)\uff1a\u62e6\u622a Proxy \u5b9e\u4f8b\u4f5c\u4e3a\u51fd\u6570\u8c03\u7528\u7684\u64cd\u4f5c\uff0c\u6bd4\u5982proxy(...args)\u3001proxy.call(object, ...args)\u3001proxy.apply(...)\u3002"),(0,n.yg)("li",{parentName:"ul"},"construct(target, args)\uff1a\u62e6\u622a Proxy \u5b9e\u4f8b\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\u8c03\u7528\u7684\u64cd\u4f5c\uff0c\u6bd4\u5982new proxy(...args)\u3002")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"\nvar arr = [1,2,3,4]\nconsole.log(arr[-1])  // \u6211\u60f3\u8ba9\u4ed6\u8f93\u51fa 4 \n\nfunction createArray(arr) {\n    let handle = {\n        get: function(target, index, recvie) {\n            index = Number(index)\n            if(index < 0){\n                index += target.length\n            }\n            return Reflect.get(target,index,recvie)\n        }\n    }\n    return new Proxy(arr, handle)\n}\n\narr[-1] \n")),(0,n.yg)("h3",{id:"promise"},"Promise"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u4e09\u4e2a\u72b6\u6001"),(0,n.yg)("ol",{parentName:"li"},(0,n.yg)("li",{parentName:"ol"},"pendding - \u8fdb\u884c\u4e2d"),(0,n.yg)("li",{parentName:"ol"},"fufilled - \u5df2\u6210\u529f"),(0,n.yg)("li",{parentName:"ol"},"rejected - \u5df2\u5931\u8d25"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Promise.prototype.then()\n\u63a5\u6536\u4e24\u4e2a\u56de\u8c03\u51fd\u6570 resolve , reject  \u8fd4\u56de\u4e00\u4e2a\u65b0\u7684Promise\u5b9e\u4f8b")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Promise.prototype.catch()\n\u63a5\u6536\u4e00\u4e2aerror\u5bf9\u8c61 , promise \u72b6\u6001\u5982\u679c\u53d8\u6210reject\u5c31\u4f1a\u8c03\u7528 catch\u56de\u8c03, \u53e6\u5916 promise.then()\u56de\u8c03\u4e2d,\u5982\u679c\u51fa\u73b0\u7684\u9519\u8bef\u4e5f\u4f1a\u8c03\u7528catch()")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Promise.prototype.finally()\n\u4e0d\u7ba1promise\u72b6\u6001\u662f\u4ec0\u4e48, \u518dthen() \u6216\u8005 catch() \u6267\u884c\u5b8c\u540e\u4f1a\u6267\u884c")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Promise.all(","[p1,p2,p3]",").then((res1,res2,res3))\n\u5c06\u591a\u4e2apromise\u5b9e\u4f8b\u653e\u5728\u4e00\u8d77\u5305\u88c5\u6210\u4e00\u4e2a\u65b0\u7684promise\u5b9e\u4f8b, \u5176\u4e2d\u6240\u6709\u7684\u72b6\u6001\u90fd\u53d8\u6210fufilled, \u6216\u8005\u5176\u4e2d\u4e00\u4e2a\u53d8\u6210rejected, \u624d\u4f1a\u53bb\u6267\u884c\u56de\u8c03\u51fd\u6570")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Promise.race(","[p1,p2,p3]",").then((res1,res2,res3))\n\u540c\u4e0a, \u4f46\u662f\u5176\u4e2d\u6709\u4e00\u4e2a\u7ed3\u679c\u53d8\u6210fufilled\u6216\u8005rejected ,\u5c31\u4f1a\u53bb\u6267\u884c\u56de\u8c03\u51fd\u6570")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Promise.AllSettled(","[1,2,3]",")\n\u540c\u4e0a, \u4f46\u662f\u53ea\u6709\u7b49\u5230\u7740\u4e09\u4e2a\u8bf7\u6c42\u90fd\u7ed3\u675f,\u4e0d\u7ba1\u6210\u529f\u8fd8\u662f\u5931\u8d25,\u624d\u4f1a\u6267\u884c\u540e\u7eed\u7684\u56de\u8c03\u51fd\u6570")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Promise.any(","[1,2,3]",")\n\u540crace(), \u53ea\u6709\u4e00\u70b9\u4e0d\u540c\uff0c\u5c31\u662fPromise.any()\u4e0d\u4f1a\u56e0\u4e3a\u67d0\u4e2a Promise \u53d8\u6210rejected\u72b6\u6001\u800c\u7ed3\u675f\uff0c\u5fc5\u987b\u7b49\u5230\u6240\u6709\u53c2\u6570 Promise \u53d8\u6210rejected\u72b6\u6001\u624d\u4f1a\u7ed3\u675f\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Promise.resolve()\n\u5c06\u73b0\u6709\u5bf9\u8c61\u8f6c\u6362\u4e3apromise\u5bf9\u8c61"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-js"},"Promise.resolve('foo')\n// \u7b49\u4ef7\u4e8e\nnew Promise(resolve => resolve('foo'))\n"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Promise.reject()\n\u540c\u4e0a")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Promise.try()\n\u4e0d\u77e5\u9053\u51fd\u6570\u5185\u90e8\u662f\u540c\u6b65\u8fd8\u662f\u5f02\u6b65\u6267\u884c,\u6216\u8005\u4e0d\u60f3\u5904\u7406, \u7c7b\u4f3c\u4e8etry...catch"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-js"},"Promise.try(() => database.users.get({id: userId}))\n.then(...)\n.catch(...)\n")))))}g.isMDXComponent=!0}}]);