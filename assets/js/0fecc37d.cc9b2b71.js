"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[5304],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=n.createContext({}),p=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},s=function(t){var e=p(t.components);return n.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),c=p(r),d=a,g=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(g,l(l({ref:e},s),{},{components:r})):n.createElement(g,l({ref:e},s))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=c;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:a,l[1]=u;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9144:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],u={sidebar_position:3,title:"Outbound Ports for Kubernetes Cluster Nodes"},i=void 0,p={unversionedId:"misc/torque-outbound-ports",id:"misc/torque-outbound-ports",title:"Outbound Ports for Kubernetes Cluster Nodes",description:"This table lists the outbound ports that are requried for Kubernetes cluster nodes to fully function when hosting a Torque Execution Host.",source:"@site/docs/misc/torque-outbound-ports.md",sourceDirName:"misc",slug:"/misc/torque-outbound-ports",permalink:"/misc/torque-outbound-ports",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/misc/torque-outbound-ports.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Outbound Ports for Kubernetes Cluster Nodes"},sidebar:"torqueSidebar",previous:{title:"Terraform GKE Authentication",permalink:"/authentication/service-accounts-for-gcp"},next:{title:"3rd Party Tools",permalink:"/misc/3rd-party"}},s={},m=[],c={toc:m};function d(t){var e=t.components,r=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This table lists the outbound ports that are requried for Kubernetes cluster nodes to fully function when hosting a Torque Execution Host."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Target Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Target Address/Hostname"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Ports"),(0,o.kt)("th",{parentName:"tr",align:null},"Traffic Purpose"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Torque Agent registration endpoint"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://portal.qtorque.io:5056/hub/agent"},"https://portal.qtorque.io:5056/hub/agent")),(0,o.kt)("td",{parentName:"tr",align:null},"HTTPS"),(0,o.kt)("td",{parentName:"tr",align:null},"5056"),(0,o.kt)("td",{parentName:"tr",align:null},"Register new Torque agent with Torque back-end")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Torque Back-end APIs"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://portal.qtorque.io:443"},"https://portal.qtorque.io:443")),(0,o.kt)("td",{parentName:"tr",align:null},"HTTPS"),(0,o.kt)("td",{parentName:"tr",align:null},"443"),(0,o.kt)("td",{parentName:"tr",align:null},"Communicate from agent to Torque APIs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Cloud AMQP for Torque"),(0,o.kt)("td",{parentName:"tr",align:null},"amqp://acrobatic-lime-gerbil.rmq3.cloudamqp.com:5672"),(0,o.kt)("td",{parentName:"tr",align:null},"AMQP (HTTPS)"),(0,o.kt)("td",{parentName:"tr",align:null},"5671 5672"),(0,o.kt)("td",{parentName:"tr",align:null},"Communicate between agent and back-end using message queues")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Cloud AMQP nodes for Torque"),(0,o.kt)("td",{parentName:"tr",align:null},"acrobatic-lime-gerbil-01.rmq3.cloudamqp.com,",(0,o.kt)("br",null),"acrobatic-lime-gerbil-02.rmq3.cloudamqp.com,",(0,o.kt)("br",null),"acrobatic-lime-gerbil-03.rmq3.cloudamqp.com"),(0,o.kt)("td",{parentName:"tr",align:null},"AMQP (HTTPS)"),(0,o.kt)("td",{parentName:"tr",align:null},"5671 5672"),(0,o.kt)("td",{parentName:"tr",align:null},"Communicate between agent and back-end using message queues")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Github"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/your_repo"},"https://github.com/your_repo")),(0,o.kt)("td",{parentName:"tr",align:null},"HTTPS"),(0,o.kt)("td",{parentName:"tr",align:null},"443"),(0,o.kt)("td",{parentName:"tr",align:null},"Retrieve customer's repo from GitHub using Git to TF Runner Pod")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Hashicorp - Terraform Releases download"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://releases.hashicorp.com"},"https://releases.hashicorp.com")),(0,o.kt)("td",{parentName:"tr",align:null},"HTTPS"),(0,o.kt)("td",{parentName:"tr",align:null},"443"),(0,o.kt)("td",{parentName:"tr",align:null},"Download and install Terraform on sandbox TF Runner pod")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Hashicorp - Terraform Providers registry"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://registry.terraform.io"},"https://registry.terraform.io")),(0,o.kt)("td",{parentName:"tr",align:null},"HTTPS"),(0,o.kt)("td",{parentName:"tr",align:null},"443"),(0,o.kt)("td",{parentName:"tr",align:null},"Download Terraform provider to TF Runner Pod")))))}d.isMDXComponent=!0}}]);