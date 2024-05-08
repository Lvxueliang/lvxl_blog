"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4582],{8860:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>g});var n=r(7953);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,g=s["".concat(u,".").concat(d)]||s[d]||y[d]||l;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9313:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(3911),a=(r(7953),r(8860));const l={},i="\u6570\u636e\u7ed3\u6784\u4e2d\u5178\u578b\u6570\u636e\u7c7b\u578b",o={unversionedId:"data_structure/\u6570\u636e\u7ed3\u6784",id:"data_structure/\u6570\u636e\u7ed3\u6784",title:"\u6570\u636e\u7ed3\u6784\u4e2d\u5178\u578b\u6570\u636e\u7c7b\u578b",description:"\u6570\u7ec4 Array",source:"@site/docs/data_structure/1.\u6570\u636e\u7ed3\u6784.md",sourceDirName:"data_structure",slug:"/data_structure/\u6570\u636e\u7ed3\u6784",permalink:"/lvxl_blog/docs/data_structure/\u6570\u636e\u7ed3\u6784",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5",permalink:"/lvxl_blog/docs/category/\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5"},next:{title:"\u7b97\u6cd5",permalink:"/lvxl_blog/docs/data_structure/\u7b97\u6cd5"}},u={},c=[{value:"\u6570\u7ec4 Array",id:"\u6570\u7ec4-array",level:3},{value:"\u6808 Stack",id:"\u6808-stack",level:3},{value:"\u961f\u5217 Queue",id:"\u961f\u5217-queue",level:3},{value:"\u94fe\u8868 Linked List",id:"\u94fe\u8868-linked-list",level:3},{value:"\u6811 Tree",id:"\u6811-tree",level:3},{value:"\u56fe Graph",id:"\u56fe-graph",level:3},{value:"\u5806 Heap",id:"\u5806-heap",level:3},{value:"\u6563\u5217\u8868 Hash",id:"\u6563\u5217\u8868-hash",level:3}],p={toc:c},s="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(s,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u6570\u636e\u7ed3\u6784\u4e2d\u5178\u578b\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7ed3\u6784\u4e2d\u5178\u578b\u6570\u636e\u7c7b\u578b"),(0,a.yg)("h3",{id:"\u6570\u7ec4-array"},"\u6570\u7ec4 Array"),(0,a.yg)("p",null,"\u5728\u7a0b\u5e8f\u8bbe\u8ba1\u4e2d,\u4e3a\u4e86\u5904\u7406\u65b9\u4fbf,\u628a\u5177\u6709\u76f8\u540c\u7c7b\u578b\u7684\u82e5\u5e72\u53d8\u91cf\u6709\u5e8f\u7684\u5f62\u5f0f\u5b58\u50a8\u7ec4\u7ec7\u8d77\u6765, \u8fd9\u4e9b\u6309\u5e8f\u6392\u5217\u7684\u540c\u7c7b\u6570\u636e\u5143\u7d20\u7684\u96c6\u5408\u79f0\u4e3a\u6570\u7ec4. \u6570\u7ec4\u5143\u7d20\u53ef\u4ee5\u662f\u57fa\u672c\u6570\u636e\u7c7b\u578b\u6216\u662f\u7c7b\u7c7b\u578b."),(0,a.yg)("h3",{id:"\u6808-stack"},"\u6808 Stack"),(0,a.yg)("p",null,"\u662f\u53ea\u80fd\u5728\u67d0\u4e00\u7aef\u63d2\u5165\u548c\u5220\u9664\u7684\u7279\u6b8a\u7ebf\u6027\u8868,\u5b83\u6309\u7167\u540e\u8fdb\u5148\u51fa\u7684\u539f\u5219\u5b58\u50a8\u6570\u636e, \u5148\u8fdb\u5165\u7684\u6570\u636e\u88ab\u538b\u5165\u6808\u5e95,\u6700\u540e\u7684\u6570\u636e\u5728\u6808\u9876,\u8bfb\u6570\u636e\u7684\u65f6\u5019\u4ece\u6808\u9876\u5f00\u59cb\u5f39\u51fa\u6570\u636e(\u6700\u540e\u4e00\u4e2a\u5165\u6808\u88ab\u7b2c\u4e00\u4e2a\u5f39\u51fa)."),(0,a.yg)("h3",{id:"\u961f\u5217-queue"},"\u961f\u5217 Queue"),(0,a.yg)("p",null,"\u4e00\u53ea\u7279\u6b8a\u7684\u7ebf\u6027\u8868,\u5b83\u53ea\u5141\u8bb8\u5728\u8868\u7684\u524d\u7aef\u8fdb\u884c\u5220\u9664\u64cd\u4f5c, \u800c\u5728\u8868\u7684\u540e\u7aef\u8fdb\u884c\u63d2\u5165\u64cd\u4f5c,\u8fdb\u884c\u63d2\u5165\u64cd\u4f5c\u7684\u7aef\u79f0\u4e3a\u961f\u5c3e,\u8fdb\u884c\u5220\u9664\u7684\u7aef\u79f0\u4e3a\u961f\u5934, \u961f\u5217\u4e2d\u6ca1\u6709\u5143\u7d20\u662f, \u79f0\u4e3a\u7a7a\u961f\u5217."),(0,a.yg)("h3",{id:"\u94fe\u8868-linked-list"},"\u94fe\u8868 Linked List"),(0,a.yg)("p",null,"\u7531\u4e00\u4e2a\u7cfb\u5217\u8282\u70b9\u5143\u7d20\u7ec4\u6210, \u8282\u70b9\u7269\u7406\u5b58\u50a8\u975e\u987a\u5e8f, \u6570\u636e\u5143\u7d20\u7684\u903b\u8f91\u987a\u5e8f\u662f\u901a\u8fc7\u8282\u70b9\u4e2d\u7684\u6307\u9488/\u5f15\u7528\u6b21\u5e8f\u5b9e\u73b0\u7684."),(0,a.yg)("p",null,"\u6bcf\u4e2a\u8282\u70b9\u5305\u62ec\u4e24\u4e2a\u90e8\u5206: \u4e00\u4e2a\u662f\u8282\u70b9\u6570\u636e(\u53ef\u4ee5\u662f\u4efb\u610f\u6570\u636e\u7c7b\u578b), \u53e6\u4e00\u4e2a\u662f\u4e0b\u4e00\u4e2a\u8282\u70b9\u7684\u5730\u5740/\u5f15\u7528."),(0,a.yg)("h3",{id:"\u6811-tree"},"\u6811 Tree"),(0,a.yg)("p",null,"\u6811\u662f\u5305\u542bn(n>0) \u4e2a\u8282\u70b9\u7684\u6709\u7a77\u96c6\u5408K, \u4e14\u5728K\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u5173\u7cfbN, N\u6ee1\u8db3\u4ee5\u4e0b\u6761\u4ef6:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u6709\u4e14\u4ec5\u6709\u4e00\u4e2a\u8282\u70b9K0, \u4ed6\u5bf9\u4e8e\u5173\u7cfbN\u6765\u8bf4\u6ca1\u6709\u524d\u9a71, \u79f0K0\u4e3a\u6811\u7684\u6839\u8282\u70b9. \u7b80\u79f0\u4e3a\u6839(root)"),(0,a.yg)("li",{parentName:"ul"},"\u9664K0\u5916,K\u4e2d\u7684\u6bcf\u4e2a\u8282\u70b9,\u5bf9\u4e8e\u5173\u7cfbN\u6765\u8bf4\u6709\u4e14\u4ec5\u6709\u4e00\u4e2a\u524d\u9a71."),(0,a.yg)("li",{parentName:"ul"},"K\u4e2d\u5404\u8282\u70b9, \u5bf9\u5173\u7cfbN\u6765\u8bf4\u53ef\u4ee5\u6709M\u4e2a\u540e\u7ee7(m>=0)")),(0,a.yg)("h3",{id:"\u56fe-graph"},"\u56fe Graph"),(0,a.yg)("p",null,"\u56fe\u662f\u7531\u8282\u70b9\u7684\u6709\u7a77\u96c6\u5408 V\u548c\u8fb9\u7684\u96c6\u5408 E\u7ec4\u6210\u3002\u5176\u4e2d\uff0c\u4e3a\u4e86\u4e0e\u6811\u5f62\u7ed3\u6784\u52a0\u4ee5\u533a\u522b\uff0c\u5728\u56fe\u7ed3\u6784\u4e2d\u5e38\u5e38\u5c06\u8282\u70b9\u79f0\u4e3a\u9876\u70b9\uff0c\u8fb9\u662f\u9876\u70b9\u7684\u6709\u5e8f\u5076\u5bf9\uff0c\u82e5\u4e24\u4e2a\u9876\u70b9\u4e4b\u95f4\u5b58\u5728\u4e00\u6761\u8fb9\uff0c\u5c31\u8868\u793a\u8fd9\u4e24\u4e2a\u9876\u70b9\u5177\u6709\u76f8\u90bb\u5173\u7cfb\u3002"),(0,a.yg)("h3",{id:"\u5806-heap"},"\u5806 Heap"),(0,a.yg)("p",null,"\u5728\u8ba1\u7b97\u673a\u79d1\u5b66\u4e2d \uff0c\u5806\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u6811\u5f62\u6570\u636e\u7ed3\u6784\uff0c\u6bcf\u4e2a\u8282\u70b9\u90fd\u6709\u4e00\u4e2a\u503c\u3002\u901a\u5e38\u6211\u4eec\u6240\u8bf4\u7684\u5806\u7684\u6570\u636e\u7ed3\u6784\uff0c\u662f\u6307\u4e8c\u53c9\u5806\u3002\u5806\u7684\u7279\u70b9\u662f\u6839\u8282\u70b9\u7684\n\u503c\u6700\u5c0f\uff08\u6216\u6700\u5927\uff09\uff0c\u4e14\u6839\u8282\u70b9\u7684\u4e24\u4e2a\u5b50\u6811\u4e5f\u662f\u4e00\u4e2a\u5806\u3002"),(0,a.yg)("h3",{id:"\u6563\u5217\u8868-hash"},"\u6563\u5217\u8868 Hash"),(0,a.yg)("p",null,"\u82e5\u7ed3\u6784\u4e2d\u5b58\u5728\u5173\u952e\u5b57\u548cK\u76f8\u7b49\u7684\u8bb0\u5f55\uff0c\u5219\u5fc5\u5b9a\u5728f(K)\u7684\u5b58\u50a8\u4f4d\u7f6e\u4e0a\u3002\u7531\u6b64\uff0c\u4e0d\u9700\u6bd4\u8f83\u4fbf\u53ef\u76f4\u63a5\u53d6\u5f97\u6240\u67e5\u8bb0\u5f55\u3002\u79f0\u8fd9\u4e2a\u5bf9\u5e94\u5173\u7cfbf\u4e3a\u6563\u5217\u51fd\u6570\u6309\u8fd9\u4e2a\u601d\u60f3\u5efa\u7acb\u7684\u8868\u4e3a\u6563\u5217\u8868"))}y.isMDXComponent=!0}}]);