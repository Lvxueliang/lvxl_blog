"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2296,8714],{7286:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ve});var a=n(7953),l=n(8835),o=n(3442),r=n(9757),c=n(7961),i=n(4584),s=n(8534),d=n(6086),m=n(1826),u=n(8245),b=n(454),p=n(9352);const h={backToTopButton:"backToTopButton_r9dL",backToTopButtonShow:"backToTopButtonShow_tUlE"};function E(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),o=(0,a.useRef)(!1),{startScroll:r,cancelScroll:c}=(0,b.gk)();return(0,b.Mq)(((e,n)=>{let{scrollY:a}=e;const r=n?.scrollY;r&&(o.current?o.current=!1:a>=r?(c(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.$)((e=>{e.location.hash&&(o.current=!0,l(!1))})),{shown:n,scrollToTop:()=>r(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.A)("clean-btn",r.G.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var g=n(5926),f=n(2583),v=n(1916),A=n(9715),_=n(5890);function C(e){return a.createElement("svg",(0,_.A)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const k="collapseSidebarButton_kaLt",S="collapseSidebarButtonIcon_h4QC";function N(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.A)("button button--secondary button--outline",k),onClick:t},a.createElement(C,{className:S}))}var T=n(2859),I=n(4246);const y=Symbol("EmptyContext"),x=a.createContext(y);function w(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),o=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(x.Provider,{value:o},t)}var B=n(2200),L=n(2035),M=n(7920),P=n(1980);function H(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.T)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function G(e){let{item:t,onItemClick:n,activePath:o,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,v.p)(),g=function(e){const t=(0,P.A)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i._o)(e):void 0),[e,t])}(t),f=(0,i.w8)(t,o),A=(0,L.ys)(h,o),{collapsed:C,setCollapsed:k}=(0,B.u)({initialState:()=>!!b&&(!f&&t.collapsed)}),{expandedItem:S,setExpandedItem:N}=function(){const e=(0,a.useContext)(x);if(e===y)throw new I.dV("DocSidebarItemsExpandedStateProvider");return e}(),T=function(e){void 0===e&&(e=!C),N(e?null:s),k(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const o=(0,I.ZC)(t);(0,a.useEffect)((()=>{t&&!o&&n&&l(!1)}),[t,o,n,l])}({isActive:f,collapsed:C,updateCollapsed:T}),(0,a.useEffect)((()=>{b&&null!=S&&S!==s&&E&&k(!0)}),[b,S,s,k,E]),a.createElement("li",{className:(0,l.A)(r.G.docs.docSidebarItemCategory,r.G.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":C},p)},a.createElement("div",{className:(0,l.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":A})},a.createElement(M.A,(0,_.A)({className:(0,l.A)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":f}),onClick:b?e=>{n?.(t),h?T(!1):(e.preventDefault(),T())}:()=>{n?.(t)},"aria-current":A?"page":void 0,"aria-expanded":b?!C:void 0,href:b?g??"#":g},d),u),h&&b&&a.createElement(H,{categoryLabel:u,onClick:e=>{e.preventDefault(),T()}})),a.createElement(B.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},a.createElement(K,{items:m,tabIndex:C?-1:0,onItemClick:n,activePath:o,level:c+1})))}var F=n(9979),W=n(7332);const U="menuExternalLink_CLac";function D(e){let{item:t,onItemClick:n,activePath:o,level:c,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,i.w8)(t,o),E=(0,F.A)(m);return a.createElement("li",{className:(0,l.A)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:u},a.createElement(M.A,(0,_.A)({className:(0,l.A)("menu__link",!E&&U,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(W.A,null)))}const R="menuHtmlItem_kABA";function V(e){let{item:t,level:n,index:o}=e;const{value:c,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,l.A)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(n),i&&[R,"menu__list-item"],s),key:o,dangerouslySetInnerHTML:{__html:c}})}function z(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(G,(0,_.A)({item:t},n));case"html":return a.createElement(V,(0,_.A)({item:t},n));default:return a.createElement(D,(0,_.A)({item:t},n))}}function q(e){let{items:t,...n}=e;return a.createElement(w,null,t.map(((e,t)=>a.createElement(z,(0,_.A)({key:t,item:e,index:t},n)))))}const K=(0,a.memo)(q),Y="menu_C9Ei",j="menuWithAnnouncementBar_BA4C";function Q(e){let{path:t,sidebar:n,className:o}=e;const c=function(){const{isActive:e}=(0,T.Mj)(),[t,n]=(0,a.useState)(e);return(0,b.Mq)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.A)("menu thin-scrollbar",Y,c&&j,o)},a.createElement("ul",{className:(0,l.A)(r.G.docs.docSidebarMenu,"menu__list")},a.createElement(K,{items:n,activePath:t,level:1})))}const O="sidebar_UQNo",X="sidebarWithHideableNavbar_Paj2",Z="sidebarHidden_rp8g",$="sidebarLogo_qvKl";function J(e){let{path:t,sidebar:n,onCollapse:o,isHidden:r}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,v.p)();return a.createElement("div",{className:(0,l.A)(O,c&&X,r&&Z)},c&&a.createElement(A.A,{tabIndex:-1,className:$}),a.createElement(Q,{path:t,sidebar:n}),i&&a.createElement(N,{onClick:o}))}const ee=a.memo(J);var te=n(1398),ne=n(8977);const ae=e=>{let{sidebar:t,path:n}=e;const o=(0,ne.M)();return a.createElement("ul",{className:(0,l.A)(r.G.docs.docSidebarMenu,"menu__list")},a.createElement(K,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function le(e){return a.createElement(te.GX,{component:ae,props:e})}const oe=a.memo(le);function re(e){const t=(0,f.l)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(ee,e),l&&a.createElement(oe,e))}const ce={expandButton:"expandButton_gPKr",expandButtonIcon:"expandButtonIcon_BMIl"};function ie(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:ce.expandButton,title:(0,u.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(C,{className:ce.expandButtonIcon}))}const se={docSidebarContainer:"docSidebarContainer_i6bU",docSidebarContainerHidden:"docSidebarContainerHidden_vBMd",sidebarViewport:"sidebarViewport_Kyed"};function de(e){let{children:t}=e;const n=(0,d.t)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function me(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:o}=e;const{pathname:c}=(0,g.zy)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),o((e=>!e))}),[o,i]);return a.createElement("aside",{className:(0,l.A)(r.G.docs.docSidebarContainer,se.docSidebarContainer,n&&se.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(se.docSidebarContainer)&&n&&s(!0)}},a.createElement(de,null,a.createElement("div",{className:(0,l.A)(se.sidebarViewport,i&&se.sidebarViewportHidden)},a.createElement(re,{sidebar:t,path:c,onCollapse:d,isHidden:i}),i&&a.createElement(ie,{toggleSidebar:d}))))}const ue={docMainContainer:"docMainContainer_nMFU",docMainContainerEnhanced:"docMainContainerEnhanced_qr6p",docItemWrapperEnhanced:"docItemWrapperEnhanced_PNgd"};function be(e){let{hiddenSidebarContainer:t,children:n}=e;const o=(0,d.t)();return a.createElement("main",{className:(0,l.A)(ue.docMainContainer,(t||!o)&&ue.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.A)("container padding-top--md padding-bottom--lg",ue.docItemWrapper,t&&ue.docItemWrapperEnhanced)},n))}const pe={docPage:"docPage_Cfk3",docsWrapper:"docsWrapper_nAbH"};function he(e){let{children:t}=e;const n=(0,d.t)(),[l,o]=(0,a.useState)(!1);return a.createElement(m.A,{wrapperClassName:pe.docsWrapper},a.createElement(E,null),a.createElement("div",{className:pe.docPage},n&&a.createElement(me,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),a.createElement(be,{hiddenSidebarContainer:l},t)))}var Ee=n(2296),ge=n(6905);function fe(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(ge.A,{version:t.version,tag:(0,c.tU)(t.pluginId,t.version)}),a.createElement(o.be,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function ve(e){const{versionMetadata:t}=e,n=(0,i.mz)(e);if(!n)return a.createElement(Ee.default,null);const{docElement:c,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(fe,e),a.createElement(o.e3,{className:(0,l.A)(r.G.wrapper.docsPages,r.G.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.n,{version:t},a.createElement(d.V,{name:m,items:u},a.createElement(he,null,c)))))}},2296:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(7953),l=n(8245),o=n(3442),r=n(1826);function c(){return a.createElement(a.Fragment,null,a.createElement(o.be,{title:(0,l.T)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.A,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.A,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);