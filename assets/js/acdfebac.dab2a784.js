"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[637],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2209:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={sidebar_position:8,title:"Terraform AKS Authentication"},l=void 0,c={unversionedId:"authentication/service-accounts-for-azure",id:"authentication/service-accounts-for-azure",title:"Terraform AKS Authentication",description:"If you're using an AKS cluster as your execution host, and you want to run Terraform that deploys resources on Azure, you can use a Azure Workload Identity (valid for AKS clusters version 1.22+) that allows the cluster to securely authenticate with Azure using K8s service account and an Open ID connect (OIDC) token.",source:"@site/docs/authentication/service-accounts-for-azure.md",sourceDirName:"authentication",slug:"/authentication/service-accounts-for-azure",permalink:"/authentication/service-accounts-for-azure",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/authentication/service-accounts-for-azure.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Terraform AKS Authentication"},sidebar:"torqueSidebar",previous:{title:"Terraform EKS Authentication",permalink:"/authentication/service-accounts-for-aws"},next:{title:"Terraform GKE Authentication",permalink:"/authentication/service-accounts-for-gcp"}},p={},u=[{value:"<strong>Azure Configuration</strong>",id:"azure-configuration",level:2},{value:"<strong>Prerequisites</strong>",id:"prerequisites",level:3},{value:"<strong>Configure the Azure Workload Identity</strong>",id:"configure-the-azure-workload-identity",level:3},{value:"<strong>Torque Configuration</strong>",id:"torque-configuration",level:2},{value:"<strong>Prerequisites</strong>",id:"prerequisites-1",level:3},{value:"<strong>Configure the AKS authentication in Torque</strong>",id:"configure-the-aks-authentication-in-torque",level:3}],m={toc:u};function d(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you're using an AKS cluster as your execution host, and you want to run Terraform that deploys resources on Azure, you can use a Azure Workload Identity (valid for AKS clusters version 1.22+) that allows the cluster to securely authenticate with Azure using K8s service account and an Open ID connect (OIDC) token."),(0,i.kt)("p",null,"The basic process is as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#azure-configuration"},(0,i.kt)("strong",{parentName:"a"},"Azure Configuration")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#prerequisites"},(0,i.kt)("strong",{parentName:"a"},"Prerequisites"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configure-the-azure-workload-identity"},(0,i.kt)("strong",{parentName:"a"},"Configure the Azure Workload Identity"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#torque-configuration"},(0,i.kt)("strong",{parentName:"a"},"Torque Configuration")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#prerequisites-1"},(0,i.kt)("strong",{parentName:"a"},"Prerequisites"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configure-the-aks-authentication-in-torque"},(0,i.kt)("strong",{parentName:"a"},"Configure the AKS authentication in Torque")))))),(0,i.kt)("h2",{id:"azure-configuration"},(0,i.kt)("strong",{parentName:"h2"},"Azure Configuration")),(0,i.kt)("h3",{id:"prerequisites"},(0,i.kt)("strong",{parentName:"h3"},"Prerequisites")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Azure CLI installed locally or use Azure CLI in Azure portal"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If not installed: Download the MSI from ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/installazurecliwindows"},"https://aka.ms/installazurecliwindows")," and run the installer."),(0,i.kt)("li",{parentName:"ul"},"Update to latest:  ",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"az upgrade\n"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install aks-preview Azure CLI extension and update extension to latest:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"az extension add --name aks-preview\naz extension update --name aks-preview\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Command-line with ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl installed")," connected the cluster where you installed the Torque agent.\nTo connect to the cluster use: "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"kubectl config use-context <your-cluster>\n")))),(0,i.kt)("h3",{id:"configure-the-azure-workload-identity"},(0,i.kt)("strong",{parentName:"h3"},"Configure the Azure Workload Identity")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set CLI context to the Azure Subscription the AKS cluster is in:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"az account set --subscription (subscription name or ID)\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enable WorkloadIdentity feature on Azure Subscription:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},'az feature register --namespace "Microsoft.ContainerService" --name "EnableWorkloadIdentityPreview"\n')),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'This step may take 10-20 minutes until it is in effect, use the below command to check the state of the registration until it says "Registered"')))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check registration status:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},'az feature show --namespace "Microsoft.ContainerService" --name "EnableWorkloadIdentityPreview"\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Propogate registration:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"az provider register --namespace Microsoft.ContainerService\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Update the AKS cluster to enable OIDC and Workload Identity:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"az aks update -g {aks_resource_group_name} -n {aks_cluster_name} --enable-oidc-issuer --enable-workload-identity  \n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},'Copy the "issuerURl" from the response to this command to a note for use later as OIDC_ISSUER_URL.'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a managed identity and grant permissions:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"az identity create --name {Managed_Identity_Name} --resource-group {AKS_Resource_Group_Name} --location {resource_group_location} --subscription {aks_cluster_subscription_id}\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},'Copy the Managed Identity\'s name and "client id" to a note for use later.'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Add permissions to the managed identity at the subscription level using azure portal (this example uses the "contributor" role. You can select a different role, that has enough permissions to run your terraform modules):'),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"a. Go to the ",(0,i.kt)("strong",{parentName:"p"},"Subscriptions")," page (type in the search box \u201csubscriptions\u201d)."),(0,i.kt)("p",{parentName:"blockquote"},"b. Click the appropriate subscription."),(0,i.kt)("p",{parentName:"blockquote"},"c. Select ",(0,i.kt)("strong",{parentName:"p"},"Access Control (IAM)"),"."),(0,i.kt)("p",{parentName:"blockquote"},"d. Click ",(0,i.kt)("strong",{parentName:"p"},"+ Add")," and select ",(0,i.kt)("strong",{parentName:"p"},"Add role assignment"),"."),(0,i.kt)("p",{parentName:"blockquote"},"e. Select ",(0,i.kt)("strong",{parentName:"p"},"Contributor")," and click ",(0,i.kt)("strong",{parentName:"p"},"Next"),"."),(0,i.kt)("p",{parentName:"blockquote"},"f. In the ",(0,i.kt)("strong",{parentName:"p"},"Members")," page, select the ",(0,i.kt)("strong",{parentName:"p"},"User, group or service principle")," option and click the ",(0,i.kt)("strong",{parentName:"p"},"+ Select members")," link."),(0,i.kt)("p",{parentName:"blockquote"},"g. Use the search bar to find and select the managed identity. Then, click ",(0,i.kt)("strong",{parentName:"p"},"Select"),"."),(0,i.kt)("p",{parentName:"blockquote"},"h. Click ",(0,i.kt)("strong",{parentName:"p"},"Create")," to create the role assignment."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a file called aks_workload_id_service_account.yaml with the below content:"),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Replace the {property name} with the corresponding values."),(0,i.kt)("p",{parentName:"div"},"For service account name, choose a new name."),(0,i.kt)("p",{parentName:"div"},"Take a note of the namespace that you select for Torque Environments (it will be in use in the next part - Torque configuration)"))),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},'apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  annotations:\n    azure.workload.identity/client-id: {Managed_Identity_Client_ID}\n  labels:\n    azure.workload.identity/use: "true"\n  name: {New_Service_Account_Name}\n  namespace: {Torque_Environments_K8s_Namespace} \n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Apply the file on your AKS Cluster"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"kubectl apply -f {path_to_file}\\aks_workload_id_service_account.yaml  \n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Establish federated identity credential (Allow the AKS Cluster's OIDC provider access to the Managed Identity via the service account)"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"az identity federated-credential create --name {federated_credential_name} --identity-name {managed_identity_name} --resource-group {managed_identity_resource_group} --issuer {AKS_cluster_OIDC_issuer_URL} --subject system:serviceaccount:{Torque_Environments_K8s_namespace}:{service_account_name}\n")))),(0,i.kt)("h2",{id:"torque-configuration"},(0,i.kt)("strong",{parentName:"h2"},"Torque Configuration")),(0,i.kt)("h3",{id:"prerequisites-1"},(0,i.kt)("strong",{parentName:"h3"},"Prerequisites")),(0,i.kt)("p",null,"Have the following formation ready (from the previous section)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tenant ID (displayed in the ",(0,i.kt)("strong",{parentName:"li"},"Azure Active Directory > Overview"),")"),(0,i.kt)("li",{parentName:"ul"},"Subscription ID"),(0,i.kt)("li",{parentName:"ul"},"The namespace where the Torque environments will run (which you chose previously) and the service account name (which you also created in the previous step).")),(0,i.kt)("h3",{id:"configure-the-aks-authentication-in-torque"},(0,i.kt)("strong",{parentName:"h3"},"Configure the AKS authentication in Torque")),(0,i.kt)("p",null,"There are 2 ways to acomplish this:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"(Recommended) When adding a new AKS agent, you can provide the ",(0,i.kt)("strong",{parentName:"li"},"default tenant Id"),", and when attaching it a space you can provide the ",(0,i.kt)("strong",{parentName:"li"},"default_subscription"),". ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"From the ",(0,i.kt)("inlineCode",{parentName:"p"},"Administration")," menu, select ",(0,i.kt)("inlineCode",{parentName:"p"},"Cloud Accounts ")," and then ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect a Cloud")," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Choose "Azure" then "AKS" and fill the information:'),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:a(8861).Z,width:"896",height:"677"})))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Connect the agent to one or more spaces:"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:a(7924).Z,width:"922",height:"687"}))),(0,i.kt)("p",{parentName:"li"},"Note: select the namespace and the service account you configured in the previous step."))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You may override the default credentials defined for the AKS agent, or define the credentials if no credentials were configured as the default."),(0,i.kt)("p",{parentName:"li"},"a. In the ",(0,i.kt)("inlineCode",{parentName:"p"},"Terraform grain"),", specify the service-account name under ",(0,i.kt)("inlineCode",{parentName:"p"},"spec")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"host"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"  spec:\n    source:\n      ...\n    namespace:\n    host:\n      name: {aks_torque_agent_name}\n      service account: {new_service_account_name} # this is the k8s service account created above\n\n")),(0,i.kt)("p",{parentName:"li"},"b. Under ",(0,i.kt)("inlineCode",{parentName:"p"},"env-vars")," add the following (will override the default definition of the AKS agent)"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"  ARM_SUBSCRIPTION_ID: <Subscription_ID>\n  ARM_TENANT_ID: <Tenant_ID>\n  ARM_CLIENT_ID: <Client_ID>\n")))))}d.isMDXComponent=!0},7924:function(e,t,a){t.Z=a.p+"assets/images/AKS-doc-2-7640d648e6f3877bd7fb22cb3d5a2ac9.png"},8861:function(e,t,a){t.Z=a.p+"assets/images/AKS-doc-329b5c8b4ca054ba11722d4ce0b92e46.png"}}]);