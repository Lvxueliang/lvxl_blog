"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9764],{8860:(e,t,n)=>{n.d(t,{xA:()=>i,yg:()=>f});var r=n(7953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=u(n),y=o,f=p["".concat(l,".").concat(y)]||p[y]||m[y]||a;return n?r.createElement(f,s(s({ref:t},i),{},{components:n})):r.createElement(f,s({ref:t},i))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},4075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(3911),o=(n(7953),n(8860));const a={},s="hooks\u4f7f\u7528\u4e4buseMemo",c={unversionedId:"react/useMemo",id:"react/useMemo",title:"hooks\u4f7f\u7528\u4e4buseMemo",description:"1. vue ---\x3e \u8ba1\u7b97\u5c5e\u6027  useMemo \u7c7b\u4f3c",source:"@site/docs/react/4.useMemo.md",sourceDirName:"react",slug:"/react/useMemo",permalink:"/lvxl_blog/docs/react/useMemo",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"hooks\u4f7f\u7528\u4e4buseCallback",permalink:"/lvxl_blog/docs/react/useCallback"},next:{title:"hooks\u4f7f\u7528\u4e4buseRef",permalink:"/lvxl_blog/docs/react/useRef"}},l={},u=[],i={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"hooks\u4f7f\u7528\u4e4busememo"},"hooks\u4f7f\u7528\u4e4buseMemo"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"vue ---\x3e \u8ba1\u7b97\u5c5e\u6027  useMemo \u7c7b\u4f3c"),(0,o.yg)("li",{parentName:"ol"},"useCallback \u5c31\u662f useMemo\u5b9e\u73b0\u7684")),(0,o.yg)("p",null,"\u7528\u6765\u505a\u7f13\u5b58\u7684  \u529f\u80fd\u4e0a\u548c useCallback \u5b8c\u5168\u4e00\u81f4 \u53ea\u4e0d\u8fc7\u4ed6\u9664\u4e86\u53ef\u4ee5\u7f13\u5b58\u51fd\u6570\u4ee5\u5916 \u4efb\u4f55\u4e1c\u897f\u90fd\u53ef\u4ee5\u7f13\u5b58"),(0,o.yg)("p",null,"useCallback: \u7b2c\u4e00\u4e2a\u53c2\u6570\u4e5f\u662f\u4e00\u4e2a\u51fd\u6570, \u4f46\u662f\u4ed6\u7684\u8fd9\u4e2a\u51fd\u6570\u4e0d\u4f1a\u88abreact\u6267\u884c, \u800c\u662f\u76f4\u63a5\u8fdb\u5165\u7f13\u5b58"),(0,o.yg)("p",null,"useMemo:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u51fd\u6570, \u8fd9\u4e2a\u51fd\u6570\u4f1a\u88abreact\u76f4\u63a5\u6267\u884c, \u4efb\u4f55\u5c06\u5176\u8fd4\u56de\u503c\u8fdb\u884c\u7f13\u5b58"),(0,o.yg)("li",{parentName:"ol"},"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4f9d\u8d56\u9879, \u5f53\u4f9d\u8d56\u9879\u53d1\u751f\u53d8\u5316\u65f6, react\u4f1a\u91cd\u65b0\u6267\u884c\u5bf9\u5e94\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570, \u7136\u540e\u62ff\u5230\u65b0\u7684\u8fd4\u56de\u503c, \u518d\u6b21\u7f13\u5b58")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"\nfunction StudentList () {\n    const [studentList, setStudentList] = useState([])\n    const {loading, executeRequest} = useRequestLoadingDispatcher()\n    \n\n    const fetchResponse = useCallback(async() => {\n        executeRequest(async() => {\n            const res = await getStudentList()\n            setStudentList(res.data)\n        })\n    }, [executeRequest])\n\n    useEffect(() => {\n        executeRequest(fetchResponse)\n    },[])\n\n    return (\n        <div>\n            {loading ? (<div>\u6b63\u5728\u52a0\u8f7d\u4e2d...</div>) : studentList.map(item => (<StudentItem {...item} key={item.name}/>))}\n        </div>\n    )\n}\n")))}m.isMDXComponent=!0}}]);