"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[3250],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,a(a({ref:t},l),{},{components:n})):r.createElement(g,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9843:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:3,title:"Cost"},u=void 0,c={unversionedId:"admin-guide/cost",id:"admin-guide/cost",title:"Cost",description:"Torque's Cost dashboard provides you with actionable insights into the costs of your environments. Cost data is collected using a toque_environment_id tag that is assigned (with a unique value) to every new environment's resources. To learn more about Torque tagging, see tags.",source:"@site/docs/admin-guide/cost.md",sourceDirName:"admin-guide",slug:"/admin-guide/cost",permalink:"/admin-guide/cost",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/admin-guide/cost.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Cost"},sidebar:"torqueSidebar",previous:{title:"Roles and Permissions",permalink:"/admin-guide/roles-and-permissions"},next:{title:"Configuring Cost for AWS",permalink:"/admin-guide/configuring-cost-aws"}},l={},d=[{value:"Supported cloud providers",id:"supported-cloud-providers",level:2}],p={toc:d};function m(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Torque's ",(0,i.kt)("strong",{parentName:"p"},"Cost")," dashboard provides you with actionable insights into the costs of your environments. Cost data is collected using a ",(0,i.kt)("strong",{parentName:"p"},"toque_environment_id")," tag that is assigned (with a unique value) to every new environment's resources. To learn more about Torque tagging, see ",(0,i.kt)("a",{parentName:"p",href:"/admin-guide/tags"},"tags"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(3491).Z,width:"1665",height:"853"}))),(0,i.kt)("p",null,"With the cost dashboard, you can understand your business activities cost:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Understand the total monthly cost"),(0,i.kt)("li",{parentName:"ul"},"Group by cloud account"),(0,i.kt)("li",{parentName:"ul"},"Group by application (blueprint) , Space (team), manual/automation, and by specific environment.")),(0,i.kt)("h2",{id:"supported-cloud-providers"},"Supported cloud providers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/admin-guide/configuring-cost-aws"},"AWS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/admin-guide/configuring-cost-azure"},"Azure")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/admin-guide/configuring-cost-k8s"},"Kubernetes"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),(0,i.kt)("strong",{parentName:"h5"},"Note"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Torque calls your cloud provider's API to query the cost. This operation might incur additional charges from your cloud provider."))))}m.isMDXComponent=!0},3491:function(e,t,n){t.Z=n.p+"assets/images/cost-dashboard-9445f350569333c65708852d6c28e716.png"}}]);