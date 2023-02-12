"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[6379],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return N}});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var d=n.createContext({}),o=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=o(t.components);return n.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),k=o(a),N=l,c=k["".concat(d,".").concat(N)]||k[N]||m[N]||r;return a?n.createElement(c,i(i({ref:e},u),{},{components:a})):n.createElement(c,i({ref:e},u))}));function N(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=k;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6152:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return d},default:function(){return N},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return m}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=["components"],p={sidebar_position:7,title:"Audit Log Events"},d=void 0,o={unversionedId:"admin-guide/governance/audit-log/events",id:"admin-guide/governance/audit-log/events",title:"Audit Log Events",description:'These events are captured by Audit Log. All events are of type "string".',source:"@site/docs/admin-guide/governance/audit-log/events.md",sourceDirName:"admin-guide/governance/audit-log",slug:"/admin-guide/governance/audit-log/events",permalink:"/admin-guide/governance/audit-log/events",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/admin-guide/governance/audit-log/events.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Audit Log Events"},sidebar:"torqueSidebar",previous:{title:"Audit Log Event Structure and Contents",permalink:"/admin-guide/governance/audit-log/audit-log-usage"},next:{title:"Audit Log Data Retention",permalink:"/admin-guide/governance/audit-log/data-retention"}},u={},m=[{value:"Account",id:"account",level:2},{value:"Approval",id:"approval",level:2},{value:"Blueprint",id:"blueprint",level:2},{value:"Cloud Account (cost target)",id:"cloud-account-cost-target",level:2},{value:"Cost",id:"cost",level:2},{value:"Credential",id:"credential",level:2},{value:"Environment",id:"environment",level:2},{value:"Host/Agent",id:"hostagent",level:2},{value:"Notification",id:"notification",level:2},{value:"Parameter",id:"parameter",level:2},{value:"Policy",id:"policy",level:2},{value:"Repository",id:"repository",level:2},{value:"Space",id:"space",level:2},{value:"Tag",id:"tag",level:2},{value:"User",id:"user",level:2},{value:"Workflows",id:"workflows",level:2}],k={toc:m};function N(t){var e=t.components,a=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'These events are captured by Audit Log. All events are of type "string".'),(0,r.kt)("h2",{id:"account"},"Account"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Scopes"),(0,r.kt)("th",{parentName:"tr",align:null},"Data (parameters)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Login"),(0,r.kt)("td",{parentName:"tr",align:null},"Login to account"),(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deleted"),(0,r.kt)("td",{parentName:"tr",align:null},"Account was deleted."),(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null},"planId")))),(0,r.kt)("h2",{id:"approval"},"Approval"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Scopes"),(0,r.kt)("th",{parentName:"tr",align:null},"Data (parameters)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add approval channel"),(0,r.kt)("td",{parentName:"tr",align:null},"New approval channel was added to Torque's ",(0,r.kt)("strong",{parentName:"td"},"Approval Channels")," administration page.."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"- Name",(0,r.kt)("br",null),"- Type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Delete approval channel"),(0,r.kt)("td",{parentName:"tr",align:null},"Approval channel was deleted from Torque's ",(0,r.kt)("strong",{parentName:"td"},"Approval Channels")," administration page."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"- Name",(0,r.kt)("br",null),"- Type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Policy auto approved"),(0,r.kt)("td",{parentName:"tr",align:null},"Policy was approved automatically by OPA."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space"),(0,r.kt)("td",{parentName:"tr",align:null},"- Name",(0,r.kt)("br",null),"- Type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Update approval channel"),(0,r.kt)("td",{parentName:"tr",align:null},"Approval channel's settings were updated, like description or approvers list."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"- Approval type (auto/manual)",(0,r.kt)("br",null),"- Approval status (approved/denied)",(0,r.kt)("br",null),"- Entity type",(0,r.kt)("br",null),"- Entity name",(0,r.kt)("br",null),"- Action (Launch/Extend)",(0,r.kt)("br",null),"- Policy path + name",(0,r.kt)("br",null),"- Approver Email (if approval type is manual)",(0,r.kt)("br",null),"- Notes (if exist)")))),(0,r.kt)("h2",{id:"blueprint"},"Blueprint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Scopes"),(0,r.kt)("th",{parentName:"tr",align:null},"Data (parameters)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Content Modified"),(0,r.kt)("td",{parentName:"tr",align:null},"Blueprint YAML was modified."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space/Blueprint"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Published"),(0,r.kt)("td",{parentName:"tr",align:null},"Blueprint was published"),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space/Blueprint."),(0,r.kt)("td",{parentName:"tr",align:null},"- Repository name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Removed"),(0,r.kt)("td",{parentName:"tr",align:null},"User removed blueprint. This applies to blueprints that were discovered from assets, not for blueprints who are defined in the repository."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Unpublished"),(0,r.kt)("td",{parentName:"tr",align:null},"Blueprint was unpublished."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space/Blueprint"),(0,r.kt)("td",{parentName:"tr",align:null},"- Repository name")))),(0,r.kt)("h2",{id:"cloud-account-cost-target"},"Cloud Account (cost target)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Scopes"),(0,r.kt)("th",{parentName:"tr",align:null},"Data (parameters)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Created"),(0,r.kt)("td",{parentName:"tr",align:null},"Cloud account was created."),(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null},"- Name",(0,r.kt)("br",null),"- Cloud")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deleted"),(0,r.kt)("td",{parentName:"tr",align:null},"Cloud account was deleted."),(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null},"- Name",(0,r.kt)("br",null),"- Cloud")))),(0,r.kt)("h2",{id:"cost"},"Cost"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Scopes"),(0,r.kt)("th",{parentName:"tr",align:null},"Data (parameters)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Exported"),(0,r.kt)("td",{parentName:"tr",align:null},"Cost data was exported using the ",(0,r.kt)("strong",{parentName:"td"},"Cost")," page's ",(0,r.kt)("strong",{parentName:"td"},"Export to CSV")," button."),(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"credential"},"Credential"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Scopes"),(0,r.kt)("th",{parentName:"tr",align:null},"Data (parameters)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Created"),(0,r.kt)("td",{parentName:"tr",align:null},"New credential was created in the ",(0,r.kt)("strong",{parentName:"td"},"Credentials")," store."),(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null},"- Name",(0,r.kt)("br",null),"- Cloud Type",(0,r.kt)("br",null),"- Credential Type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deleted"),(0,r.kt)("td",{parentName:"tr",align:null},"A credential was deleted."),(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null},"- Name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Modified"),(0,r.kt)("td",{parentName:"tr",align:null},"A credential was modified."),(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null},"- Name")))),(0,r.kt)("h2",{id:"environment"},"Environment"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Scopes"),(0,r.kt)("th",{parentName:"tr",align:null},"Data (parameters)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Collaborators Added"),(0,r.kt)("td",{parentName:"tr",align:null},"Collaborators were added to an environment."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space/Environment"),(0,r.kt)("td",{parentName:"tr",align:null},"- list of new collaborators")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Collaborators Removed"),(0,r.kt)("td",{parentName:"tr",align:null},"Environment's collaborators were removed."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space/Environment"),(0,r.kt)("td",{parentName:"tr",align:null},"- list of removed collaborators")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Drift Detected"),(0,r.kt)("td",{parentName:"tr",align:null},"Environment's resources were modified externally."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space/Environment"),(0,r.kt)("td",{parentName:"tr",align:null},"- Grain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Drift Reconcile Started"),(0,r.kt)("td",{parentName:"tr",align:null},"Environment's ",(0,r.kt)("strong",{parentName:"td"},"Reconcile")," operation was initiated to reset the environment to its original state."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space/Environment"),(0,r.kt)("td",{parentName:"tr",align:null},"- Grain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Drift Reconcile Completed"),(0,r.kt)("td",{parentName:"tr",align:null},"Environment's Reconcile operation completed."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space/Environment"),(0,r.kt)("td",{parentName:"tr",align:null},"- Grain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Environment Extended"),(0,r.kt)("td",{parentName:"tr",align:null},"Environment's duration was extended."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space/Environment"),(0,r.kt)("td",{parentName:"tr",align:null},"- Extension Duration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Environment Launch Started"),(0,r.kt)("td",{parentName:"tr",align:null},"Environment was launched."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space/Environment"),(0,r.kt)("td",{parentName:"tr",align:null},'- is_sample: "true" indicates that the environment was created from a sample blueprint')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Environment Launch Completed"),(0,r.kt)("td",{parentName:"tr",align:null},"Environment's launch completed and the environment's state changed to Active."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space/Environment"),(0,r.kt)("td",{parentName:"tr",align:null},'- is_sample: "true" indicates that the environment was created from a sample blueprint',(0,r.kt)("br",null),"- Duration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Termination Started"),(0,r.kt)("td",{parentName:"tr",align:null},"Environment's termination was initiated."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space/Environment"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Termination Completed"),(0,r.kt)("td",{parentName:"tr",align:null},"Environment's termination completed."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space/Environment"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Force Terminate"),(0,r.kt)("td",{parentName:"tr",align:null},"Environment was force terminated immmediately."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space/Environment"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Owner changed"),(0,r.kt)("td",{parentName:"tr",align:null},"Environment's owner was changed."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space/Environment"),(0,r.kt)("td",{parentName:"tr",align:null},"- New owner")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Updates Detected"),(0,r.kt)("td",{parentName:"tr",align:null},"Torque detected a change in the asset files in the repository."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space/Environment"),(0,r.kt)("td",{parentName:"tr",align:null},"- Grain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Update Started"),(0,r.kt)("td",{parentName:"tr",align:null},"Environment's update was initiated by the user to update the environment with the latest changes to the asset files."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space/Environment"),(0,r.kt)("td",{parentName:"tr",align:null},"- Grain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Update Complete"),(0,r.kt)("td",{parentName:"tr",align:null},"Environment was updated."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space/Environment"),(0,r.kt)("td",{parentName:"tr",align:null},"- Grain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Update Dismissed"),(0,r.kt)("td",{parentName:"tr",align:null},"User dismissed updates to the asset files, choosing to leave their environment as is."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space/Environment"),(0,r.kt)("td",{parentName:"tr",align:null},"- Grain")))),(0,r.kt)("h2",{id:"hostagent"},"Host/Agent"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Scopes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Added to Space"),(0,r.kt)("td",{parentName:"tr",align:null},"Added an agent to a space."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space"),(0,r.kt)("td",{parentName:"tr",align:null},"- Host name",(0,r.kt)("br",null),"- Cloud",(0,r.kt)("br",null),"- Type (Docker, K8s), Space")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Created"),(0,r.kt)("td",{parentName:"tr",align:null},"Created a new agent."),(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null},"- Host name",(0,r.kt)("br",null),"- Cloud",(0,r.kt)("br",null),"- Type (Docker, K8s)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Connected"),(0,r.kt)("td",{parentName:"tr",align:null},"Agent was successfully connected to the cluster."),(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null},"- host_name",(0,r.kt)("br",null),"- Type (Docker, K8s)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deleted"),(0,r.kt)("td",{parentName:"tr",align:null},"Sgent was deleted from Torque."),(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null},"- Host name",(0,r.kt)("br",null),"- Cloud",(0,r.kt)("br",null),"- Type (Docker, K8s)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Removed From Space"),(0,r.kt)("td",{parentName:"tr",align:null},"Sgent was removed from a space."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space"),(0,r.kt)("td",{parentName:"tr",align:null},"- Host name",(0,r.kt)("br",null),"- Cloud",(0,r.kt)("br",null),"- Type (Docker, K8s), Space")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Renamed"),(0,r.kt)("td",{parentName:"tr",align:null},"Agent's name was changed."),(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null},"-old_host_name",(0,r.kt)("br",null),"- new_host_name",(0,r.kt)("br",null),"- type")))),(0,r.kt)("h2",{id:"notification"},"Notification"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Scopes"),(0,r.kt)("th",{parentName:"tr",align:null},"Data (parameters)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Added"),(0,r.kt)("td",{parentName:"tr",align:null},"New notification target was created."),(0,r.kt)("td",{parentName:"tr",align:null},"Account, Space"),(0,r.kt)("td",{parentName:"tr",align:null},"- Name",(0,r.kt)("br",null),"- Target")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deleted"),(0,r.kt)("td",{parentName:"tr",align:null},"Notification target was deleted from Torque."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space"),(0,r.kt)("td",{parentName:"tr",align:null},"- Old Name",(0,r.kt)("br",null),"- New Name",(0,r.kt)("br",null),"- Old Target type",(0,r.kt)("br",null),"- New Target type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enabled Toggled"),(0,r.kt)("td",{parentName:"tr",align:null},"Notifications were enabled for a notification target."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space"),(0,r.kt)("td",{parentName:"tr",align:null},"- Name",(0,r.kt)("br",null),"- Old enabled ",(0,r.kt)("br",null),"- New enabled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Modified"),(0,r.kt)("td",{parentName:"tr",align:null},"Notification target was modified (name, eanbled notifications, etc."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space"),(0,r.kt)("td",{parentName:"tr",align:null},"- Name")))),(0,r.kt)("h2",{id:"parameter"},"Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Scopes"),(0,r.kt)("th",{parentName:"tr",align:null},"Data (parameters)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Created"),(0,r.kt)("td",{parentName:"tr",align:null},"New parameter was created in the ",(0,r.kt)("strong",{parentName:"td"},"Parameters")," store."),(0,r.kt)("td",{parentName:"tr",align:null},"Account or Account/Space"),(0,r.kt)("td",{parentName:"tr",align:null},"- Name (parameter event)",(0,r.kt)("br",null),"- Sensitive",(0,r.kt)("br",null),"- Value",(0,r.kt)("br",null),"- Description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deleted"),(0,r.kt)("td",{parentName:"tr",align:null},"Parameter was deleted from the ",(0,r.kt)("strong",{parentName:"td"},"Parameters")," store."),(0,r.kt)("td",{parentName:"tr",align:null},"Account or Account/Space"),(0,r.kt)("td",{parentName:"tr",align:null},"- Name (parameter event)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Modified"),(0,r.kt)("td",{parentName:"tr",align:null},"Parameter's settings were modified."),(0,r.kt)("td",{parentName:"tr",align:null},"Account or Account/Space"),(0,r.kt)("td",{parentName:"tr",align:null},"- Name (parameter event)",(0,r.kt)("br",null),"- oldIsSensitive",(0,r.kt)("br",null),"- newIsSensitive")))),(0,r.kt)("h2",{id:"policy"},"Policy"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Scopes"),(0,r.kt)("th",{parentName:"tr",align:null},"Data (parameters)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deleted"),(0,r.kt)("td",{parentName:"tr",align:null},"Policy was deleted from Torque."),(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null},"- Name",(0,r.kt)("br",null),"- approvalChannel",(0,r.kt)("br",null),"- overridable",(0,r.kt)("br",null),"- manualInitiation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Policy was disabled."),(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null},"- policyName",(0,r.kt)("br",null),"- enabledValue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Duplicated"),(0,r.kt)("td",{parentName:"tr",align:null},"A copy of an existing policy was created."),(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null},"- policyName",(0,r.kt)("br",null),"- existingPolicyName",(0,r.kt)("br",null),"- isCustom",(0,r.kt)("br",null),"- spaceNames")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Policy was enabled."),(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null},"- policyName",(0,r.kt)("br",null),"- enabledValue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Imported"),(0,r.kt)("td",{parentName:"tr",align:null},"Policy was imported from a connected policy repository."),(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null},"- policyName")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Modified"),(0,r.kt)("td",{parentName:"tr",align:null},"Policy's settings were modified."),(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null},"- policyName")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Synchronized"),(0,r.kt)("td",{parentName:"tr",align:null},"The version of a custom policy in Torque was synced with the policy version in the repository."),(0,r.kt)("td",{parentName:"tr",align:null},"Account"),(0,r.kt)("td",{parentName:"tr",align:null},"- policyName")))),(0,r.kt)("h2",{id:"repository"},"Repository"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Scopes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Assets Discovered"),(0,r.kt)("td",{parentName:"tr",align:null},"Assets were discovered from a space's repository."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Connected"),(0,r.kt)("td",{parentName:"tr",align:null},"A repository was connected to a space."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Disconnected"),(0,r.kt)("td",{parentName:"tr",align:null},"A repository was disconnected from a space."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space")))),(0,r.kt)("h2",{id:"space"},"Space"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Scopes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Create"),(0,r.kt)("td",{parentName:"tr",align:null},"New space was created in Torque."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Modify"),(0,r.kt)("td",{parentName:"tr",align:null},"Space's settings were modified (name, icon, banner color)."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Delete"),(0,r.kt)("td",{parentName:"tr",align:null},"Space was deleted from Torque."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space")))),(0,r.kt)("h2",{id:"tag"},"Tag"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Scopes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Created"),(0,r.kt)("td",{parentName:"tr",align:null},"New tag created in the ",(0,r.kt)("strong",{parentName:"td"},"Tags")," administration page."),(0,r.kt)("td",{parentName:"tr",align:null},"Account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deleted"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag was deleted."),(0,r.kt)("td",{parentName:"tr",align:null},"Account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Modified"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag was modified."),(0,r.kt)("td",{parentName:"tr",align:null},"Account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Overridden"),(0,r.kt)("td",{parentName:"tr",align:null},"User changed a space-level tag's value in the space's ",(0,r.kt)("strong",{parentName:"td"},"Tags")," page."),(0,r.kt)("td",{parentName:"tr",align:null},"Account")))),(0,r.kt)("h2",{id:"user"},"User"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Scopes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Invited"),(0,r.kt)("td",{parentName:"tr",align:null},"User was invited to join Torque (Torque invitation email)."),(0,r.kt)("td",{parentName:"tr",align:null},"Account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Invitation Cancelled"),(0,r.kt)("td",{parentName:"tr",align:null},"Torque invitation was cancelled by an admin."),(0,r.kt)("td",{parentName:"tr",align:null},"Account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sign up"),(0,r.kt)("td",{parentName:"tr",align:null},"New user signed up to Torque."),(0,r.kt)("td",{parentName:"tr",align:null},"Account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User Account Role Updated"),(0,r.kt)("td",{parentName:"tr",align:null},"User's account role was changed (or attached - for new users)."),(0,r.kt)("td",{parentName:"tr",align:null},"Account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deleted"),(0,r.kt)("td",{parentName:"tr",align:null},"User was deleted from Torque."),(0,r.kt)("td",{parentName:"tr",align:null},"Account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Login"),(0,r.kt)("td",{parentName:"tr",align:null},"User logged into Torque."),(0,r.kt)("td",{parentName:"tr",align:null},"Account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Reset Password"),(0,r.kt)("td",{parentName:"tr",align:null},"User's password was reset."),(0,r.kt)("td",{parentName:"tr",align:null},"Account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User Added to Space"),(0,r.kt)("td",{parentName:"tr",align:null},"User was added to a space."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Space")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User Space Role Updated"),(0,r.kt)("td",{parentName:"tr",align:null},"User's space role was changed (space admin/dev/member)."),(0,r.kt)("td",{parentName:"tr",align:null},"Account")))),(0,r.kt)("h2",{id:"workflows"},"Workflows"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Scopes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Created"),(0,r.kt)("td",{parentName:"tr",align:null},"Created a new workflow."),(0,r.kt)("td",{parentName:"tr",align:null},"Account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deleted"),(0,r.kt)("td",{parentName:"tr",align:null},"Deleted a workflow from Torque."),(0,r.kt)("td",{parentName:"tr",align:null},"Account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Disabled a workflow."),(0,r.kt)("td",{parentName:"tr",align:null},"Account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Enabled a workflow."),(0,r.kt)("td",{parentName:"tr",align:null},"Account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ended"),(0,r.kt)("td",{parentName:"tr",align:null},"Workflow's execution ended at the completion of all its actions."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Environment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Invoked"),(0,r.kt)("td",{parentName:"tr",align:null},"Workflow was triggered, either by the worklow's defined schedule or manually by the environment end-user."),(0,r.kt)("td",{parentName:"tr",align:null},"Account/Environment")))))}N.isMDXComponent=!0}}]);