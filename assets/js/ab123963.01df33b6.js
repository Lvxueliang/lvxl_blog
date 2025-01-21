"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3866],{8860:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>d});var r=t(7953);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=i(t),f=a,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return t?r.createElement(d,l(l({ref:n},s),{},{components:t})):r.createElement(d,l({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u[p]="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8143:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var r=t(5890),a=(t(7953),t(8860));const o={},l="hooks\u4f7f\u7528\u4e4buseRef",u={unversionedId:"react/useRef",id:"react/useRef",title:"hooks\u4f7f\u7528\u4e4buseRef",description:"useState ---\x3e \u6784\u5efa\u7ec4\u4ef6\u72b6\u6001 \u5f53\u72b6\u6001\u53d8\u66f4\u7684\u65f6\u5019 \u7ec4\u4ef6\u5fc5\u5b9a\u91cd\u65b0\u6e32\u67d3",source:"@site/docs/react/5.useRef.md",sourceDirName:"react",slug:"/react/useRef",permalink:"/docs/react/useRef",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"hooks\u4f7f\u7528\u4e4buseMemo",permalink:"/docs/react/useMemo"},next:{title:"hooks\u4f7f\u7528\u4e4bforwardRef",permalink:"/docs/react/forwardRef"}},c={},i=[{value:"\u5904\u7406\u771f\u5b9edom",id:"\u5904\u7406\u771f\u5b9edom",level:3}],s={toc:i},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"hooks\u4f7f\u7528\u4e4buseref"},"hooks\u4f7f\u7528\u4e4buseRef"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"useState")," ---\x3e \u6784\u5efa\u7ec4\u4ef6\u72b6\u6001 ",(0,a.yg)("strong",{parentName:"p"},"\u5f53\u72b6\u6001\u53d8\u66f4\u7684\u65f6\u5019 \u7ec4\u4ef6\u5fc5\u5b9a\u91cd\u65b0\u6e32\u67d3")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"useRef"),": \u6784\u5efa\u4e00\u4e2a\u72b6\u6001\u51fa\u6765, \u4f46\u662f\u8fd9\u4e2a\u72b6\u6001\u662f\u76f4\u63a5\u8131\u79bbreact\u63a7\u5236\u7684, \u4ed6\u7684\u53d8\u5316\u4e5f\u4e0d\u4f1a\u9020\u6210\u91cd\u65b0\u6e32\u67d3, \u540c\u65f6\u72b6\u6001\u8fd8\u4e0d\u4f1a\u56e0\u4e3a\u7ec4\u4ef6\u7684\u91cd\u65b0\u6e32\u67d3\u800c\u88ab\u521d\u59cb\u5316"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"\nimport {useState, useCallback, useRef} from 'react'\nexport default function Ticker() {\n    const [timeCount, setTimeCount] = useState(60)\n\n    const timerIdRef = useRef(null)\n    // useRef\u4f1a\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61 \u5bf9\u8c61\u91cc\u9762\u6709\u4e2acurrent\u5c5e\u6027\n    // ref \u662f\u53ef\u8bfb\u53ef\u5199\u7684  \n\n    const startTick = useCallback(() => {\n        if(timerIdRef.current) return\n        timerIdRef.current = setInterval(() => {\n            setTimeCount(prev => prev - 1)\n        }, 1000)\n    }, [])\n\n    const stopTick = useCallback(() => {\n        if (timerIdRef.current) clearInterval(timerIdRef.current)\n    }, [])\n\n\n    // \u6709\u4e14\u53ea\u6709\u4e00\u4e2a\u6839\u7ec4\u4ef6 <></>  --\x3e \u662f\u4e00\u4e2a\u8bed\u6cd5\u7cd6 React.Fragment\n    return (\n        <>\n            <button onClick={startTick}>start</button>\n            <button onClick={stopTick}>stop</button>\n            <span>{ timeCount }</span>\n        </>\n    )\n}\n\n")),(0,a.yg)("h3",{id:"\u5904\u7406\u771f\u5b9edom"},"\u5904\u7406\u771f\u5b9edom"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'export default function TestInput() {\n    // \u9700\u6c42 \u5f53\u70b9\u51fb clickme \u7684\u65f6\u5019 \u8f93\u5165\u6846\u805a\u7126\n\n    const [inputElement, setInputElement] = useState(null)\n\n    useEffect(() => {\n        // \u8fd9\u4e2a\u771f\u5b9edom \u548creact \u6709\u6ca1\u6709\u4efb\u4f55\u5173\u7cfb\n        const inputEl = document.getElementsByClassName("input-example")[0]\n        setInputElement(inputEl)\n    })\n\n    const handlerClick = useCallback(() => {\n        inputElement.focus()\n    }, [])\n    return (\n        <div>\n            <input type="text" className="input-example" />\n            <button onClick={handlerClick}>click me</button>\n        </div>\n    )\n}\n')),(0,a.yg)("p",null,"\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"p"},"useRef"),"\u7684\u5b9e\u73b0"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'export default function TestInput() {\n    const inputElementRef = useRef(null)\n\n    // useEffect(() => {\n    //     // \u8fd9\u4e2a\u771f\u5b9edom \u548creact \u6709\u6ca1\u6709\u4efb\u4f55\u5173\u7cfb\n    //     inputElementRef = document.getElementsByClassName("input-example")[0]\n    // })\n\n    const handlerClick = useCallback(() => {\n        inputElement.current.focus()\n    }, [])\n\n\n    return (\n        <div>\n            {/* \u8fd9\u79cdref  \u4f7f\u7528\u4e86useEffect \u53bb\u5e2e\u4f60\u83b7\u53d6dom \u5e76\u4e14\u8d4b\u503c */}\n            <input ref={inputElementRef} type="text" className="input-example" />\n            {/*  */}\n            {/* <input type="text" className="input-example" /> */}\n            <button onClick={handlerClick}>click me</button>\n        </div>\n    )\n}\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Question"),": "),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u65e2\u7136\u6211\u53ef\u4ee5\u901a\u8fc7document.xx.getElementById\u76f4\u63a5\u62ff\u5230\u771f\u5b9edom, \u90a3\u4e48useRef\u5b58\u5728\u7684\u610f\u4e49\u662f\u4ec0\u4e48? "),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"useRef\u4e0d\u662f\u4e0d\u4ec5\u4e3a\u4e86\u771f\u5b9edom\u670d\u52a1 \u6784\u5efa\u4e00\u4e2a\u72b6\u6001\u51fa\u6765, \u4f46\u662f\u8fd9\u4e2a\u72b6\u6001\u662f\u76f4\u63a5\u8131\u79bbreact\u63a7\u5236\u7684, \u4ed6\u7684\u53d8\u5316\u4e5f\u4e0d\u4f1a\u9020\u6210\u91cd\u65b0\u6e32\u67d3, \u540c\u65f6\u72b6\u6001\u8fd8\u4e0d\u4f1a\u56e0\u4e3a\u7ec4\u4ef6\u7684\u91cd\u65b0\u6e32\u67d3\u800c\u88ab\u521d\u59cb\u5316"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5982\u679c\u4e0d\u4f7f\u7528useRef\u53bb\u5904\u7406\u771f\u5b9edom, \u4f1a\u51fa\u73b0\u4ec0\u4e48\u95ee\u9898?"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"\u4e0d\u7528ref\u5c31\u9700\u8981\u6784\u5efa\u72b6\u6001,  \u800c\u4f7f\u7528\u72b6\u6001\u4f1a\u9020\u6210\u6ca1\u5fc5\u8981\u7684\u91cd\u65b0\u6e32\u67d3, \u7528\u5168\u5c40\u53d8\u91cf\u53bb\u63a7\u5236, \u53c8\u4f1a\u9020\u6210\u95ed\u5305\u95ee\u9898")))))}m.isMDXComponent=!0}}]);