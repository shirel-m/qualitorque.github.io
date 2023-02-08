"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[1930],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},137:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:15,title:"Workflows"},p=void 0,s={unversionedId:"admin-guide/governance/workflows",id:"admin-guide/governance/workflows",title:"Workflows",description:"Torque role: Account admin",source:"@site/docs/admin-guide/governance/workflows.md",sourceDirName:"admin-guide/governance",slug:"/admin-guide/governance/workflows",permalink:"/admin-guide/governance/workflows",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/admin-guide/governance/workflows.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15,title:"Workflows"},sidebar:"torqueSidebar",previous:{title:"Audit Log Event Examples",permalink:"/admin-guide/governance/audit-log/audit-log-json-example"},next:{title:"Cost",permalink:"/admin-guide/cost-tracking/cost"}},c={},u=[{value:"How to add a workflow",id:"how-to-add-a-workflow",level:2}],m={toc:u};function d(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Torque role: Account admin"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Workflows")," allow you to schedule actions on all resources of a certain cloud provider (AWS or Azure) in the relevant environment. For example, to power off all VMs daily at the end of the work day. Each workflow is triggered at its scheduled time and can also be executed by the end-user from the ",(0,a.kt)("strong",{parentName:"p"},"Workflows")," tab of the environment's resource."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"At this time, Workflows are supported only for VM esources."))),(0,a.kt)("h2",{id:"how-to-add-a-workflow"},"How to add a workflow"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"Administration > Workflows"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Add Workflow"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Fill in the details:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Name"),": Workflow name")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Display name"),': Provide an informative one as this will be the Workflow\'s display name in the environment. For example, "Power off all Azure VMs EOD". ')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Description"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Action")," to be performed in the environment. Workflows support all resource actions (",(0,a.kt)("strong",{parentName:"p"},"Power on"),", ",(0,a.kt)("strong",{parentName:"p"},"Power off"),", ",(0,a.kt)("strong",{parentName:"p"},"Restart"),", ",(0,a.kt)("strong",{parentName:"p"},"Connect"),") as well as ",(0,a.kt)("strong",{parentName:"p"},"Terminate"),", which ends the environment. For details about resource actions, see ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/Run%20day2%20actions"},"Run Day 2 Actions on Your Environment"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Spaces"),": Toggle blue to apply the workflow to all spaces or select specific ones.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Schedule"),": Workflow's scheduled execution time. You can specify the time and day(s) using the editor, or toggle ",(0,a.kt)("strong",{parentName:"p"},"Custom CRON")," to specify the schedule in CRON format.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Allow overriding schedule on launch"),": Toggle blue to enable the environment's end-user to manually run the workflow from the resource's ",(0,a.kt)("strong",{parentName:"p"},"Workflows")," tab."),(0,a.kt)("p",{parentName:"li"}," For example:"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"Locale Dropdown",src:n(3922).Z,width:"605",height:"937"})))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save"),"."))))}d.isMDXComponent=!0},3922:function(e,t,n){t.Z=n.p+"assets/images/workflow-1-134e6a512c1894caecced859e28db408.png"}}]);