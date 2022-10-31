"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[4324],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,f=d["".concat(s,".").concat(g)]||d[g]||p[g]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4969:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:3,title:"Audit Log Configuration"},s=void 0,u={unversionedId:"audit-log/audit-log-configuration",id:"audit-log/audit-log-configuration",title:"Audit Log Configuration",description:"Torque provides integration with Elastic Stack, allowing you to easily monitor and audit your system users' behavior, investigate and remove security risks and vulnerabilities, and more. Once integrated, Torque begins capturing events and streams them to Elastic Stack for analytics, allowing you to gain visibility into key platform events within your account, identify the most active policies, significant changes in resource operations, or filter actions by user and space.",source:"@site/docs/audit-log/audit-log-configuration.md",sourceDirName:"audit-log",slug:"/audit-log/audit-log-configuration",permalink:"/audit-log/audit-log-configuration",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/audit-log/audit-log-configuration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Audit Log Configuration"},sidebar:"torqueSidebar",previous:{title:"Issue Trackers",permalink:"/eco-system/issue-trackers"},next:{title:"Audit Log Usage",permalink:"/audit-log/audit-log-usage"}},c={},p=[{value:"Licensing",id:"licensing",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2}],d={toc:p};function g(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Torque provides integration with Elastic Stack, allowing you to easily monitor and audit your system users' behavior, investigate and remove security risks and vulnerabilities, and more. Once integrated, Torque begins capturing events and streams them to Elastic Stack for analytics, allowing you to gain visibility into key platform events within your account, identify the most active policies, significant changes in resource operations, or filter actions by user and space."),(0,a.kt)("h2",{id:"licensing"},"Licensing"),(0,a.kt)("p",null,"Audit log integration is available for Enterprise plan only and requires a specific pricing feature."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Working Elastic Stack server with internet access")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In Torque, access your space."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"REST API")," in the left pane."),(0,a.kt)("li",{parentName:"ol"},"Expand ",(0,a.kt)("strong",{parentName:"li"},"Settings")," and click ",(0,a.kt)("strong",{parentName:"li"},"Update audit provider"),"."),(0,a.kt)("li",{parentName:"ol"},"Specify the following details",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type"),' of log management system - "elasticsearch"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"url")," of the Elastic server"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"username")," and ",(0,a.kt)("strong",{parentName:"li"},"password")," of the Elastic Stack admin."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Certificate"),": Optionally specify a certificate if you wish to secure the connection."))),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Send API Request")," and make sure it completes successfully.\nFor example:",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"Locale Dropdown",src:n(5980).Z,width:"990",height:"440"})," "))),(0,a.kt)("li",{parentName:"ol"},"To make sure everything was configured properly, run the ",(0,a.kt)("strong",{parentName:"li"},"Get audit provider")," API.",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"Locale Dropdown",src:n(7989).Z,width:"994",height:"543"}))))))}g.isMDXComponent=!0},7989:function(e,t,n){t.Z=n.p+"assets/images/get-audit-provider-25f4640245ebfe3d3f9fab2af18e58f9.png"},5980:function(e,t,n){t.Z=n.p+"assets/images/update-audit-provider-6358bc75aaa44795515cb9e9dac2b861.png"}}]);