"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9854],{8860:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(7953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,y=m["".concat(i,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(5890),o=(n(7953),n(8860));const a={},l="\u751f\u547d\u5468\u671f",p={unversionedId:"react/\u751f\u547d\u5468\u671f",id:"react/\u751f\u547d\u5468\u671f",title:"\u751f\u547d\u5468\u671f",description:"\u521d\u59cb\u5316\u9636\u6bb5",source:"@site/docs/react/10.\u751f\u547d\u5468\u671f.md",sourceDirName:"react",slug:"/react/\u751f\u547d\u5468\u671f",permalink:"/docs/react/\u751f\u547d\u5468\u671f",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49hook",permalink:"/docs/react/hooks"},next:{title:"react - JSX",permalink:"/docs/react/jsx"}},i={},c=[{value:"\u521d\u59cb\u5316\u9636\u6bb5",id:"\u521d\u59cb\u5316\u9636\u6bb5",level:3},{value:"\u8fd0\u884c\u4e2d\u9636\u6bb5",id:"\u8fd0\u884c\u4e2d\u9636\u6bb5",level:3},{value:"\u9500\u6bc1\u9636\u6bb5",id:"\u9500\u6bc1\u9636\u6bb5",level:3},{value:"\u65b0\u751f\u547d\u5468\u671f",id:"\u65b0\u751f\u547d\u5468\u671f",level:3}],u={toc:c},m="wrapper";function s(e){let{components:t,...n}=e;return(0,o.yg)(m,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"\u751f\u547d\u5468\u671f"},"\u751f\u547d\u5468\u671f"),(0,o.yg)("h3",{id:"\u521d\u59cb\u5316\u9636\u6bb5"},"\u521d\u59cb\u5316\u9636\u6bb5"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"componentWillMount: render\u4e4b\u524d\u6700\u540e\u4e00\u6b21\u4fee\u6539\u72b6\u6001\u7684\u673a\u4f1a  UNSAFE_componentWillMount"),(0,o.yg)("li",{parentName:"ul"},"render: \u53ea\u80fd\u8bbf\u95eethis.props\u548cthis.state , \u4e0d\u5141\u8bb8\u4fee\u6539\u72b6\u6001\u548cDom\u8f93\u51fa"),(0,o.yg)("li",{parentName:"ul"},"componentDidMount: \u6210\u529frender\u5e76\u6e32\u67d3\u5b8c\u6210\u771f\u5b9eDom\u4e4b\u540e\u89e6\u53d1, \u53ef\u4ee5\u4fee\u6539Dom")),(0,o.yg)("p",null,"UNSAFE_componentWillMount,UNSAFE_componentWillUpdate:\n16.2\u4e4b\u524d\u9700\u8981\u521b\u5efa\u865a\u62dfdom\u6811,\u65b0\u7684\u865a\u62dfdom\u6811\u5bf9\u6bd4\u8001\u7684\u865a\u62dfdom\u6811 \u8fd9\u4e2a\u64cd\u4f5c\u5b9e\u5728\u6d4f\u89c8\u5668\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u4e2d\u6267\u884c\u7684,\u800c\u4e14\u662f\u540c\u6b65\u7684, \u5982\u679cdom\u6811\u975e\u5e38\u5e9e\u5927, \u4f1a\u9020\u6210\u6d4f\u89c8\u5668\u7684\u5047\u6b7b, \u5361\u987f."),(0,o.yg)("p",null,"16.2\u4e4b\u540eReact Fiber\u6280\u672f\u4f18\u5316\u7684\u865a\u62dfdom\u7684diff\u7b97\u6cd5,\u628a\u521b\u5efa,\u548c\u6e32\u67d3\u788e\u7247\u5316,\u6309\u4f18\u5148\u7ea7\u6267\u884c, \u4f4e\u4f18\u5148\u7ea7\u53ef\u4ee5\u88ab\u6253\u65ad\u6267\u884c, \u5148\u6267\u884c\u9ad8\u4f18\u5148\u7ea7(render), \u518d\u91cd\u65b0\u6267\u884c\u4f4e\u4f18\u5148\u7ea7(UNSAFE_componentWillMount,UNSAFE_componentWillUpdate) \u6240\u4ee5\u4f4e\u4f18\u5148\u7ea7\u7684\u53ef\u80fd\u4f1a\u6267\u884c\u591a\u6b21 "),(0,o.yg)("h3",{id:"\u8fd0\u884c\u4e2d\u9636\u6bb5"},"\u8fd0\u884c\u4e2d\u9636\u6bb5"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"componentWillReceiveProps: \u7236\u7ec4\u4ef6\u4fee\u6539\u5c5e\u6027\u89e6\u53d1"),(0,o.yg)("li",{parentName:"ul"},"shouldComponentUpdate: \u8fd4\u56defalse\u4f1a\u963b\u6b62render\u8c03\u7528"),(0,o.yg)("li",{parentName:"ul"},"componentWillUpdate: \u4e0d\u80fd\u4fee\u6539\u5c5e\u6027\u548c\u72b6\u6001"),(0,o.yg)("li",{parentName:"ul"},"render: \u53ea\u80fd\u8bbf\u95eethis.props\u548cthis.state , \u4e0d\u5141\u8bb8\u4fee\u6539\u72b6\u6001\u548cDom\u8f93\u51fa"),(0,o.yg)("li",{parentName:"ul"},"componentDidUpdate: \u53ef\u4ee5\u4fee\u6539dom")),(0,o.yg)("h3",{id:"\u9500\u6bc1\u9636\u6bb5"},"\u9500\u6bc1\u9636\u6bb5"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"componentWillUnmount: \u5728\u5220\u9664\u7ec4\u4ef6\u4e4b\u524d\u6e05\u7406\u64cd\u4f5c, \u6bd4\u5982\u8ba1\u65f6\u5668\u548c\u4e8b\u4ef6\u76d1\u542c")),(0,o.yg)("h3",{id:"\u65b0\u751f\u547d\u5468\u671f"},"\u65b0\u751f\u547d\u5468\u671f"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"getDerivedStateFromProps "),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"\u7528\u4e8e\u66ff\u4ee3 componentWillReceiveProps \u548c componentWillMount"),(0,o.yg)("li",{parentName:"ul"},"\u7ec4\u4ef6\u521d\u59cb\u5316\u6216\u66f4\u65b0\u65f6\u5c06props\u6620\u5c04\u5230state"),(0,o.yg)("li",{parentName:"ul"},"\u8fd4\u56de\u503c\u4e0e state \u5408\u5e76\u540e\u53ef\u4ee5\u505a\u7528\u4e3a shouldcomponentupdate \u751f\u547d\u5468\u671f\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570newstate"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"getSnapshotBeforeUpdate"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"\u914d\u5408componentDidUpdate\u4f7f\u7528, \u53ef\u4ee5dom\u66f4\u65b0\u4e4b\u524d\u83b7\u53d6dom\u5143\u7d20\u7684\u5feb\u7167, return \u540e\u4f1a\u4f20\u9012\u7ed9componentDidUpdate\u7684\u7b2c\u4e09\u4e2a\u53c2\u6570")),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-js"},"getSnapshotBeforeUpdate(prevProps,preState){\n    const style = getComputedStyle(this.node)\n\n    // \u4f20\u9012\u66f4\u65b0\u524d\u7684\u5143\u7d20\u4f4d\u7f6e\n    return {\n        cx:style.cx,\n        cy:style.cy\n    }\n    }\n    componentDidUpdate(prevProps, prevState, snapshot){\n    // \u83b7\u53d6\u5143\u7d20\u7ed8\u5236\u4e4b\u524d\u7684\u4f4d\u7f6e\n    console.log(snapshot)\n}\n")))))}s.isMDXComponent=!0}}]);