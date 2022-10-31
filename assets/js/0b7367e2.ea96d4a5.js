"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[7598],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=o,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8009:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={sidebar_position:2,title:"CI/CD"},u=void 0,s={unversionedId:"eco-system/ci-cd",id:"eco-system/ci-cd",title:"CI/CD",description:"Torque enables you to integrate with various leading CI/CD tools such as Bamboo, Jenkins and TeamCity, to facilitate your application development activities.",source:"@site/docs/eco-system/ci-cd.md",sourceDirName:"eco-system",slug:"/eco-system/ci-cd",permalink:"/eco-system/ci-cd",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/eco-system/ci-cd.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"CI/CD"},sidebar:"torqueSidebar",previous:{title:"Integrations Overview",permalink:"/eco-system/integrations-overview"},next:{title:"Development Tools",permalink:"/eco-system/dev-tools"}},c={},p=[],m={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Torque enables you to integrate with various leading CI/CD tools such as Bamboo, Jenkins and TeamCity, to facilitate your application development activities."),(0,i.kt)("p",null,"The basic process for integrating a CI/CD tool with Torque is as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the suitable Torque space, select ",(0,i.kt)("strong",{parentName:"li"},"Settings")," from the left menu."),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Integrations")," tab."),(0,i.kt)("li",{parentName:"ol"},"Click the desired tool's ",(0,i.kt)("strong",{parentName:"li"},"Connect")," button and follow the plugin's instructions. ")),(0,i.kt)("p",null,"For details on setting up your pipeline, see the relevant plugin's README file:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=Quali.build-release-task-torque"},"Azure DevOps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/jenkinsci/sandbox-jenkins-plugin"},"Jenkins")),(0,i.kt)("li",{parentName:"ul"},"GitHub Actions: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/QualiTorque/torque-start-sb-action#readme"},"torque-start-sb-action")," / ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/QualiTorque/torque-end-sb-action#readme"},"torque-end-sb-action")," / ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/QualiTorque/torque-validate-bp-action#readme"},"torque-validate-bp-action")),(0,i.kt)("li",{parentName:"ul"},"Spinnaker (coming soon)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://plugins.jetbrains.com/plugin/18582-torque"},"TeamCity")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://circleci.com/developer/orbs/orb/quali/torque"},"CircleCI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/QualiTorque/bamboo-torque-plugin"},"Bamboo")," (coming soon)"),(0,i.kt)("li",{parentName:"ul"},"Jira (coming soon)")))}f.isMDXComponent=!0}}]);