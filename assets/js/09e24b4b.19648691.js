"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4479],{8860:(e,r,t)=>{t.d(r,{xA:()=>a,yg:()=>f});var n=t(7953);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},a=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,a=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||p;return t?n.createElement(f,s(s({ref:r},a),{},{components:t})):n.createElement(f,s({ref:r},a))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var p=t.length,s=new Array(p);s[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<p;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2193:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var n=t(5890),o=(t(7953),t(8860));const p={},s="Providers",i={unversionedId:"nestjs/\u63d0\u4f9b\u8005",id:"nestjs/\u63d0\u4f9b\u8005",title:"Providers",description:"Providers \u63d0\u4f9b\u8005\u662fNest\u4e2d\u7684\u4e00\u4e2a\u57fa\u672c\u6982\u5ff5\u3002\u8bb8\u591a\u57fa\u672c\u7684Nest\u7c7b\u53ef\u4ee5\u88ab\u89c6\u4e3a\u63d0\u4f9b\u8005-\u670d\u52a1\u3001\u4ed3\u5e93\u3001\u5de5\u5382\u3001\u52a9\u624b\u7b49\u7b49\u3002\u63d0\u4f9b\u8005\u7684\u4e3b\u8981\u601d\u60f3\u662f\u5b83\u53ef\u4ee5\u4f5c\u4e3a\u4f9d\u8d56\u6ce8\u5165;\u8fd9\u610f\u5473\u7740\u5bf9\u8c61\u53ef\u4ee5\u521b\u5efa\u5f7c\u6b64\u4e4b\u95f4\u7684\u5404\u79cd\u5173\u7cfb\uff0c\u5e76\u4e14\u201c\u8fde\u63a5\u201d\u8fd9\u4e9b\u5bf9\u8c61\u7684\u529f\u80fd\u53ef\u4ee5\u5728\u5f88\u5927\u7a0b\u5ea6\u4e0a\u59d4\u6258\u7ed9Nest\u8fd0\u884c\u65f6\u7cfb\u7edf\u3002",source:"@site/docs/nestjs/05.\u63d0\u4f9b\u8005.md",sourceDirName:"nestjs",slug:"/nestjs/\u63d0\u4f9b\u8005",permalink:"/lvxl_blog/docs/nestjs/\u63d0\u4f9b\u8005",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Session\u5e94\u7528",permalink:"/lvxl_blog/docs/nestjs/Session\u5e94\u7528"},next:{title:"\u524d\u7f6e\u77e5\u8bc6",permalink:"/lvxl_blog/docs/nestjs/02 \u524d\u7f6e\u77e5\u8bc6"}},l={},c=[],a={toc:c},u="wrapper";function m(e){let{components:r,...t}=e;return(0,o.yg)(u,(0,n.A)({},a,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"providers"},"Providers"),(0,o.yg)("p",null,"Providers \u63d0\u4f9b\u8005\u662fNest\u4e2d\u7684\u4e00\u4e2a\u57fa\u672c\u6982\u5ff5\u3002\u8bb8\u591a\u57fa\u672c\u7684Nest\u7c7b\u53ef\u4ee5\u88ab\u89c6\u4e3a\u63d0\u4f9b\u8005-\u670d\u52a1\u3001\u4ed3\u5e93\u3001\u5de5\u5382\u3001\u52a9\u624b\u7b49\u7b49\u3002\u63d0\u4f9b\u8005\u7684\u4e3b\u8981\u601d\u60f3\u662f\u5b83\u53ef\u4ee5\u4f5c\u4e3a\u4f9d\u8d56\u6ce8\u5165;\u8fd9\u610f\u5473\u7740\u5bf9\u8c61\u53ef\u4ee5\u521b\u5efa\u5f7c\u6b64\u4e4b\u95f4\u7684\u5404\u79cd\u5173\u7cfb\uff0c\u5e76\u4e14\u201c\u8fde\u63a5\u201d\u8fd9\u4e9b\u5bf9\u8c61\u7684\u529f\u80fd\u53ef\u4ee5\u5728\u5f88\u5927\u7a0b\u5ea6\u4e0a\u59d4\u6258\u7ed9Nest\u8fd0\u884c\u65f6\u7cfb\u7edf\u3002"),(0,o.yg)("p",null,"\u5148\u770b\u4f8b\u5b50 "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"import { Module } from '@nestjs/common';\nimport { AppController } from './app.controller';\nimport { AppService } from './app.service';\nimport { AppService2 } from './app.service2';\nimport { DemoModule } from './demo/demo.module';\nimport { UserModule } from './user/user.module';\n\n\n@Module({\n  imports: [DemoModule, UserModule],\n  controllers: [AppController],\n  providers: [\n    AppService2,\n    {\n     provide: 'app',\n     useClass: AppService\n    },\n    {\n    provide: 'shop',\n     useValue: ['lvxl', 'wx']\n    },\n    {\n    provide: 'factory',\n     inject: [AppService2],\n     useFactory(AppService2: AppService2) {\n     console.log(AppService2.getHello())\n     return 123\n     }\n    }\n  ],\n})\nexport class AppModule {}\n")))}m.isMDXComponent=!0}}]);