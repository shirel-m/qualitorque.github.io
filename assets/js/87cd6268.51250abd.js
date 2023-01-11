"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[5378],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7859:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={sidebar_position:36,title:"Self-managed Source Control"},l=void 0,u={unversionedId:"admin-guide/source-control/source-managed-self-service",id:"admin-guide/source-control/source-managed-self-service",title:"Self-managed Source Control",description:"Torque supports connecting asset/blueprint repositories residing in a self-managed GitLab repository.",source:"@site/docs/admin-guide/source-control/source-managed-self-service.md",sourceDirName:"admin-guide/source-control",slug:"/admin-guide/source-control/source-managed-self-service",permalink:"/admin-guide/source-control/source-managed-self-service",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/admin-guide/source-control/source-managed-self-service.md",tags:[],version:"current",sidebarPosition:36,frontMatter:{sidebar_position:36,title:"Self-managed Source Control"},sidebar:"torqueSidebar",previous:{title:"GitLab Source Control",permalink:"/admin-guide/source-control/source-control-gitlab"},next:{title:"Integrations Overview",permalink:"/eco-system/integrations-overview"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2}],m={toc:c};function d(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Torque supports connecting asset/blueprint repositories residing in a self-managed GitLab repository. "),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GitLab access token with no expiration date and ",(0,i.kt)("strong",{parentName:"li"},"read.api")," and ",(0,i.kt)("strong",{parentName:"li"},"read.repository")," permission scopes.",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:r(3113).Z,width:"1235",height:"746"}))))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create Provider via Torque REST API."),(0,i.kt)("p",{parentName:"li"},"   Post: ",(0,i.kt)("a",{parentName:"p",href:"http://portal.qtorque.io/api/settings/repository_providers"},"http://portal.qtorque.io/api/settings/repository_providers")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-{"},'"name":"gitlab-1,\n"type":"gitLabEnterprise",\n"details": {\n    "token":"NzcmESA2NjQ4MjUzOiCO87F2eTXL9TbHeWpeZO3p3GS9",\n    "base_url": http://private.mygitlab.org/,\n},\n"repos": []\n}\n')),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"name"),": Display name of repository"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type"),": Value representing the type of repository provider (",(0,i.kt)("strong",{parentName:"li"},"gitlabEnterprise")," in this case)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"token"),": Private access token (see ",(0,i.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"base_url"),": __Schema://Host:Port/ of the GitLab server (include port if required)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"username"),": Owner of the token username. (Not required for GitLab)"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Connect the repository as an asset repository to the space and discover the suitable assets. For details, see ",(0,i.kt)("a",{parentName:"p",href:"/getting-started/Discover%20Your%20Assets"},"Discover Your Assets"),"."))))}d.isMDXComponent=!0},3113:function(e,t,r){t.Z=r.p+"assets/images/gitlab-reqs-255706ef30d1f1857947e118b28f0c1f.png"}}]);