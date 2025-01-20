"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9848],{8860:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var r=t(7953);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=s,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(g,a(a({ref:n},c),{},{components:t})):r.createElement(g,a({ref:n},c))}));function g(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[m]="string"==typeof e?e:s,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5630:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(5890),s=(t(7953),t(8860));const o={},a="Session\u5e94\u7528",l={unversionedId:"nestjs/Session\u5e94\u7528",id:"nestjs/Session\u5e94\u7528",title:"Session\u5e94\u7528",description:"session \u662f\u670d\u52a1\u5668\u4e3a\u6bcf\u4e2a\u7528\u6237\u7684\u6d4f\u89c8\u5668\u521b\u5efa\u7684\u4e00\u4e2a\u4f1a\u8bdd\u5bf9\u8c61\uff0c session\u4f1a\u8bb0\u5f55\u5230\u6d4f\u89c8\u5668\u7684cookie\u4e2d\u6765\u533a\u5206\u7528\u6237\u3002",source:"@site/docs/nestjs/04.Session\u5e94\u7528.md",sourceDirName:"nestjs",slug:"/nestjs/Session\u5e94\u7528",permalink:"/lvxl_blog/docs/nestjs/Session\u5e94\u7528",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u63a7\u5236\u5668\u8be6\u89e3",permalink:"/lvxl_blog/docs/nestjs/\u63a7\u5236\u5668\u8be6\u89e3"},next:{title:"Providers",permalink:"/lvxl_blog/docs/nestjs/\u63d0\u4f9b\u8005"}},i={},p=[{value:"\u53c2\u6570\u914d\u7f6e\u8be6\u89e3",id:"\u53c2\u6570\u914d\u7f6e\u8be6\u89e3",level:3},{value:"\u9a8c\u8bc1\u7801\u6848\u4f8b",id:"\u9a8c\u8bc1\u7801\u6848\u4f8b",level:3}],c={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,s.yg)(m,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"session\u5e94\u7528"},"Session\u5e94\u7528"),(0,s.yg)("p",null,"session \u662f\u670d\u52a1\u5668\u4e3a\u6bcf\u4e2a\u7528\u6237\u7684\u6d4f\u89c8\u5668\u521b\u5efa\u7684\u4e00\u4e2a\u4f1a\u8bdd\u5bf9\u8c61\uff0c session\u4f1a\u8bb0\u5f55\u5230\u6d4f\u89c8\u5668\u7684cookie\u4e2d\u6765\u533a\u5206\u7528\u6237\u3002"),(0,s.yg)("p",null,"nestjs \u9ed8\u8ba4\u4f7f\u7528\u7684\u662fexpress\u6846\u67b6\uff0c \u4ed6\u4e5f\u53ef\u4ee5\u652f\u6301 express\u7684\u63d2\u4ef6"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-zsh"},"npm i express-session --save\nnpm i @types/express-session -D\n")),(0,s.yg)("p",null,"\u7136\u540e\u5728main.ts\u4e2d\u5f15\u5165"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-ts"},"import * as session from 'express-session'\n\napp.use(session())\n\n")),(0,s.yg)("h3",{id:"\u53c2\u6570\u914d\u7f6e\u8be6\u89e3"},"\u53c2\u6570\u914d\u7f6e\u8be6\u89e3"),(0,s.yg)("table",null,(0,s.yg)("thead",{parentName:"table"},(0,s.yg)("tr",{parentName:"thead"},(0,s.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,s.yg)("th",{parentName:"tr",align:null},"\u7528\u9014"))),(0,s.yg)("tbody",{parentName:"table"},(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:null},"secret"),(0,s.yg)("td",{parentName:"tr",align:null},"\u751f\u6210\u670d\u52a1\u5ea6session\u7b7e\u540d")),(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:null},"name"),(0,s.yg)("td",{parentName:"tr",align:null},"\u751f\u6210\u5ba2\u6237\u7aefcookie\u7684\u540d\u5b57\u9ed8\u8ba4 connect.sid")),(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:null},"cookie"),(0,s.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u8fd4\u56de\u5230\u524d\u7aefkey\u7684\u5c5e\u6027\uff0c\u9ed8\u8ba4{ path: \u2018/\u2019, httpOnly: true, secure: false, maxAge: null }")),(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:null},"rolling"),(0,s.yg)("td",{parentName:"tr",align:null},"\u6bcf\u6b21\u8bf7\u6c42\u65f6\u5f3a\u884c\u8bbe\u7f6ecookie\uff0c\u8fd9\u5c06\u91cd\u7f6ecookie\u8fc7\u671f\u65f6\u95f4")))),(0,s.yg)("p",null,"\u914d\u7f6e\u793a\u4f8b"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-ts"},"import { NestFactory } from '@nestjs/core';\nimport { AppModule } from './app.module';\nimport * as session from \"express-session\";\n\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n    app.use(session({\n        secret: 'Lvxl',\n        rolling: true,\n        name: 'Lvxl.ppid'\n    }))\n  await app.listen(3000);\n}\nbootstrap();\n\n")),(0,s.yg)("h3",{id:"\u9a8c\u8bc1\u7801\u6848\u4f8b"},"\u9a8c\u8bc1\u7801\u6848\u4f8b"),(0,s.yg)("p",null,"\u524d\u7aef\u4ee3\u7801\uff1a"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-vue"},'<template>\n    <div style="margin: 20px" />\n    <el-form\n      :label-position="labelPosition"\n      label-width="auto"\n      :model="formLabelAlign"\n      style="max-width: 600px"\n    >\n      <el-form-item label="Name">\n        <el-input v-model="formLabelAlign.name" />\n      </el-form-item>\n      <el-form-item label="password">\n        <el-input v-model="formLabelAlign.password" type="password"/>\n      </el-form-item>\n      <el-form-item label="svgCode">\n        <el-input v-model="formLabelAlign.code" />\n        <img @click="resetCode" :src="codeUrl">\n      </el-form-item>\n    <el-form-item>\n        <el-button @click="submit">login</el-button>\n    </el-form-item>\n    </el-form>\n  </template>\n  \n  <script lang="ts" setup>\n  import { reactive, ref } from \'vue\'\n  import type { FormProps } from \'element-plus\'\n  \n  const labelPosition = ref<FormProps[\'labelPosition\']>(\'right\')\n  const codeUrl = ref<string>(\'/api/user/createcode\')\n  const userUrl = ref<string>(\'/api/user/createuser\')\n  const formLabelAlign = reactive({\n    name: \'\',\n    password: \'\',\n    code: \'\',\n  })\n\n  const resetCode = () => codeUrl.value = codeUrl.value + \'?\' + Math.random()\n\n  const submit = () => {\n    fetch(userUrl.value, {\n        method: \'post\',\n        body: JSON.stringify(formLabelAlign),\n        headers: {\n            \'content-type\': \'application/json\'\n        }\n    }).then(res => res.json()).then(res => {\n        console.log(res, \'.213\')\n    })\n  }\n  <\/script>\n')),(0,s.yg)("p",null,"nestJs\u4ee3\u7801"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sh"},"npm i svg-captcha -S\n")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-ts"},"import {Controller, Get, Post, Body, Param, Request, Query, Headers, HttpCode,Session,Res, Req} from '@nestjs/common';\nimport { UserService } from './user.service';\nimport { CreateUserDto } from './dto/create-user.dto';\nimport { UpdateUserDto } from './dto/update-user.dto';\nimport * as svgCapcha from 'svg-captcha'\nimport {create} from \"svg-captcha\";\n\n@Controller('user')\nexport class UserController {\n  constructor(private readonly userService: UserService) {}\n    @Get('createcode')\n    createCode(@Req() req, @Res() res, @Session() session) {\n        const Captcha = svgCapcha.create({\n            size: 4, // \u751f\u6210\u51e0\u4e2a\u9a8c\u8bc1\u7801\n            fontSize: 50, // \u6587\u5b57\u5927\u5c0f\n            width: 100,\n            height:34,\n            background: '#cc9966'\n        })\n        session.code = Captcha.text;\n        res.type('image/svg+xml');\n        res.send(Captcha.data);\n    }\n\n    @Post('createuser')\n    createUser(@Body() body, @Session() session) {\n        console.log(body, session)\n        if(body?.code === session.code) {\n            return {\n                code: 200,\n                message: {\n                    ...body,\n                    sessionCode: session.code,\n                    su: 'success'\n                }\n            }\n        } else {\n            return {\n                code: 200,\n                message: {\n                    ...body,\n                    sessionCode: session.code,\n                    su: 'error'\n                }\n            }\n        }\n\n    }\n}\n\n")))}u.isMDXComponent=!0}}]);