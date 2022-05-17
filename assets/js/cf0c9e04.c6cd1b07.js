"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[2446],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4145:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:2,title:"Custom Tags"},u=void 0,l={unversionedId:"tags/tags",id:"tags/tags",title:"Custom Tags",description:"Torque uses several out-of-the-box system tags to provide you with activity and cost data. In addition, you can attach your own custom tags to your environments for your own uses, including monitoring and control, troubleshooting, and more. All environment resources are tagged with Torque's out-of-the-box tags when the environment's deployment.",source:"@site/docs/tags/tags.md",sourceDirName:"tags",slug:"/tags/",permalink:"/torque-docs/tags/",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tags/tags.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Custom Tags"},sidebar:"torqueSidebar",previous:{title:"Running your first workload in Torque",permalink:"/torque-docs/eco-system/running-your-workload"},next:{title:"Add Tags",permalink:"/torque-docs/tags/add-tags"}},c={},d=[],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Torque uses several out-of-the-box system tags to provide you with activity and cost data. In addition, you can attach your own custom tags to your environments for your own uses, including monitoring and control, troubleshooting, and more. All environment resources are tagged with Torque's out-of-the-box tags when the environment's deployment.\nThe following tags are supported:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"activity_type"),': This tag is defined by the account admin and allows the sandbox end-user to indicate the purpose of the sandbox. For example: "development", "manual-testing", "staging", etc. This tag comes out of the box with Torque and cannot be deleted.'),(0,a.kt)("li",{parentName:"ul"},"Account-level tags: Defined by the account admin and apply to all environments in Torque. Account-level tags cannot be overridden by anyone who is not an account admin."),(0,a.kt)("li",{parentName:"ul"},"Space-level tags: Defined by the account admin and applies to all environments deployed in that space. This tag can be overridden by space admins."),(0,a.kt)("li",{parentName:"ul"},"Blueprint-level tags: Defined by the account admin and can be overridden by the blueprint designer."),(0,a.kt)("li",{parentName:"ul"},"Sandbox-level tags: Defined by the account admin and applies to all sandboxes in Torque. This tag can be overridden by the sandbox end-user.",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"Space, blueprint and sandbox-level tags can have a single value that will be used when deploying the environment, or multiple values, allowing the relevant user to select the appropriate one.")))),(0,a.kt)("p",null,"Tags are managed in the ",(0,a.kt)("strong",{parentName:"p"},"Tags")," administration page."),(0,a.kt)("p",null,"Features and limitations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Custom tags apply for all blueprint types, including YAML and Terraform-based."),(0,a.kt)("li",{parentName:"ul"},"Custom tags are applied to every cloud resource that is created in the sandbox or production environment, including resources created by services (Terraform modules), and deleted from the cloud along with the environment when it is ended/renamed."),(0,a.kt)("li",{parentName:"ul"},"Custom tags are created on the account level and defined with a scope, which determines where they get their value (account, space, blueprint, and sandbox)."),(0,a.kt)("li",{parentName:"ul"},"The custom tag\u2019s value can be defined by the Torque admin, selected from a dropdown list of possible values, or entered as freetext (if possible values were not defined)."),(0,a.kt)("li",{parentName:"ul"},"When a sandbox or production environment is deployed, its tags are the aggregation of the tags defined for this sandbox (in runtime), the blueprint tags, the space tags and the account tags, as well as the Torque automatic tags. "),(0,a.kt)("li",{parentName:"ul"},"Custom tags are not used in environments deployed over existing cloud infrastructure."),(0,a.kt)("li",{parentName:"ul"},"Up to 20 custom tags can be created, to avoid passing the limit of the cloud providers.")))}m.isMDXComponent=!0}}]);