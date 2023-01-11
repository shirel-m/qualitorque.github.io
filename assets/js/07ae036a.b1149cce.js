"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[6826],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),g=i,k=m["".concat(s,".").concat(g)]||m[g]||c[g]||o;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9671:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={sidebar_position:9,title:"Jenkins Plugin"},s=void 0,u={unversionedId:"eco-system/Integrations/jenkins",id:"eco-system/Integrations/jenkins",title:"Jenkins Plugin",description:"The Jenkins plugin lets developers trigger application environments on-demand directly from their Jenkins pipelines. Jenkins users can easily integrate the Torque environments-as-a-service platform into their projects by utilizing the Torque orb\u2019s pre-defined commands.",source:"@site/docs/eco-system/Integrations/jenkins.md",sourceDirName:"eco-system/Integrations",slug:"/eco-system/Integrations/jenkins",permalink:"/eco-system/Integrations/jenkins",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/eco-system/Integrations/jenkins.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Jenkins Plugin"},sidebar:"torqueSidebar",previous:{title:"Azure DevOps Plugin",permalink:"/eco-system/Integrations/azure-devops"},next:{title:"GitHub Actions Plugin",permalink:"/eco-system/Integrations/github-actions"}},p={},c=[{value:"1. Install",id:"1-install",level:2},{value:"2. Configure",id:"2-configure",level:2},{value:"3. Verify and launch",id:"3-verify-and-launch",level:2}],m={toc:c};function g(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jenkinsci/quali-torque-plugin/"},"Jenkins plugin")," lets developers trigger application environments on-demand directly from their Jenkins pipelines. Jenkins users can easily integrate the Torque environments-as-a-service platform into their projects by utilizing the Torque orb\u2019s pre-defined commands."),(0,o.kt)("p",null,"To integrate Torque with the Jenkins plugin, make sure to complete the next few steps."),(0,o.kt)("h2",{id:"1-install"},"1. Install"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Install the latest version from within Jenkins:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("strong",{parentName:"li"},"Manage Jenkins > Manage Plugins")," and select the ",(0,o.kt)("strong",{parentName:"li"},"Available")," tab."),(0,o.kt)("li",{parentName:"ol"},'Locate this plugin by searching for "quali-torque".'),(0,o.kt)("li",{parentName:"ol"},"Select and install the plugin.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Or, manually download and install it:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the latest ",(0,o.kt)("strong",{parentName:"li"},"Jenkins Torque Plugin")," from ",(0,o.kt)("a",{parentName:"li",href:"https://plugins.jenkins.io/quali-torque/#releases"},"here"),"."),(0,o.kt)("li",{parentName:"ol"},"In Jenkins Web UI, click ",(0,o.kt)("strong",{parentName:"li"},"Manage Jenkins > Manage Plugins"),"."),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Advanced")," tab."),(0,o.kt)("li",{parentName:"ol"},"Scroll down to the ",(0,o.kt)("strong",{parentName:"li"},"Deploy Plugin")," section."),(0,o.kt)("li",{parentName:"ol"},"Browse to and select the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"quali-torque.hpi"))," file you downloaded."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Deploy"),"."),(0,o.kt)("li",{parentName:"ol"},"Make sure all tasks have been successfully completed.")),(0,o.kt)("h2",{id:"2-configure"},"2. Configure"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log in to Jenkins as administrator."),(0,o.kt)("li",{parentName:"ol"},"From the left pane, click ",(0,o.kt)("strong",{parentName:"li"},"Manage Jenkins"),", and then select ",(0,o.kt)("strong",{parentName:"li"},"Configure System"),"."),(0,o.kt)("li",{parentName:"ol"},"Scroll down to the ",(0,o.kt)("strong",{parentName:"li"},"Torque Connection")," section.\na. The ",(0,o.kt)("strong",{parentName:"li"},"Domain")," name or IP should be set to ",(0,o.kt)("a",{parentName:"li",href:"https://portal.qtorque.io"},"https://portal.qtorque.io"),"\nb. Specify the ",(0,o.kt)("strong",{parentName:"li"},"Token"),". Use the one generated below:"),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Generate New Token")," button in the plugin's instructions pane."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save"),".")),(0,o.kt)("h2",{id:"3-verify-and-launch"},"3. Verify and launch"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use Torque's tasks in your Jenkins pipeline")),(0,o.kt)("p",null,"After installing and configuring the Jenkins plugin, you can start using the plugin to launch environments from your Jenkins Pipeline. Note that this plugin only supports environments.\nTo use the plugin, you will need to instantiate a Blueprint object with using the torque global object. This object can then be used to start an environment. The environment object can later be used to end the Torque Environment."),(0,o.kt)("p",null,"To learn more about the parameters of each step, read ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jenkinsci/quali-torque-plugin/#readme"},"here"),"."))}g.isMDXComponent=!0}}]);