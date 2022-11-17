"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[9487],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8146:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:3,title:"Blueprint Quickstart Guide"},l=void 0,u={unversionedId:"blueprint-designer-guide/blueprint-quickstart-guide",id:"blueprint-designer-guide/blueprint-quickstart-guide",title:"Blueprint Quickstart Guide",description:"Now that you have seen how Torque works, it\u2019s time to link your assets to Torque and see what you can do with them.",source:"@site/docs/blueprint-designer-guide/blueprint-quickstart-guide.md",sourceDirName:"blueprint-designer-guide",slug:"/blueprint-designer-guide/blueprint-quickstart-guide",permalink:"/blueprint-designer-guide/blueprint-quickstart-guide",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/blueprint-designer-guide/blueprint-quickstart-guide.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Blueprint Quickstart Guide"},sidebar:"torqueSidebar",previous:{title:"What's next?",permalink:"/getting-started/Whats next"},next:{title:"Autogenerated Blueprints",permalink:"/blueprint-designer-guide/Autogenerated Blueprints"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Let Torque autogenerate blueprints from your assets",id:"let-torque-autogenerate-blueprints-from-your-assets",level:2},{value:"Create a multi-asset blueprint",id:"create-a-multi-asset-blueprint",level:2},{value:"Example 1: Helm Application with MySQL and S3 Deployed by Terraform",id:"example-1-helm-application-with-mysql-and-s3-deployed-by-terraform",level:3},{value:"Example 2: Webgame on S3 (using CloudFormation and Terraform)",id:"example-2-webgame-on-s3-using-cloudformation-and-terraform",level:2}],d={toc:c};function m(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Now that you have seen how Torque works, it\u2019s time to link your assets to Torque and see what you can do with them."),(0,i.kt)("p",null,"In this article:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#let-torque-autogenerate-blueprints-from-your-assets"},"Let Torque autogenerate blueprints from your assets")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#create-a-multi-asset-blueprint"},"Create a multi-asset blueprint"))),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You have created your own space"),(0,i.kt)("li",{parentName:"ul"},"Asset repository associated to the space"),(0,i.kt)("li",{parentName:"ul"},"Execution host associated to the space")),(0,i.kt)("h2",{id:"let-torque-autogenerate-blueprints-from-your-assets"},"Let Torque autogenerate blueprints from your assets"),(0,i.kt)("p",null,"Torque launches environments out of blueprints, which are YAML files that represent the environments. So the first step is to create blueprints out of your existing assets."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In your space, go to ",(0,i.kt)("strong",{parentName:"li"},"Settings > Repositories")," and discover your assets.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(8818).Z,width:"1148",height:"455"}))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Select the assets you want Torque to discover and click ",(0,i.kt)("strong",{parentName:"li"},"Generate Blueprints"),".")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(45).Z,width:"1018",height:"756"}))),(0,i.kt)("p",null,"  Torque creates a blueprint YAML for each asset, and lists the blueprints in your space\u2019s ",(0,i.kt)("strong",{parentName:"p"},"Blueprints")," page. You can click the blueprint to see the YAML file."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(8767).Z,width:"1617",height:"455"}))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Publish")," the blueprints and you\u2019re good to go.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(9741).Z,width:"566",height:"421"}))),(0,i.kt)("p",null,"  You and your space\u2019s users can now launch these environments from the space."),(0,i.kt)("p",null,"  In some cases, you may need to adjust your autogenerated blueprints. For details on what you can do, see ",(0,i.kt)("a",{parentName:"p",href:"/blueprint-designer-guide/autogenerated%20blueprints"},"Autogenerated Blueprints"),"."),(0,i.kt)("h2",{id:"create-a-multi-asset-blueprint"},"Create a multi-asset blueprint"),(0,i.kt)("p",null,"So far, we\u2019ve learned how to create single-asset blueprints. But what if you want to create an application-stack environment? This is easily done by nesting an existing blueprint within a master blueprint as a grain. "),(0,i.kt)("p",null,"It is also possible to nest a single-asset blueprint, which can be an application or cloud service deployed via an asset, like a Terraform module, Helm chart, or CloudFormation template, to name a few. To do so, save the autogenerated blueprint as a blueprint yaml file in the space's blueprint repository, and follow the below steps."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To nest a blueprint as a grain in another blueprint:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open the new blueprint's YAML file."),(0,i.kt)("li",{parentName:"ol"},"Add a new grain to the ",(0,i.kt)("inlineCode",{parentName:"li"},"grains")," section."),(0,i.kt)("li",{parentName:"ol"},"Define the grain's details. These are the mandatory settings:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Change the _",(0,i.kt)("em",{parentName:"li"},"kind")," param to: ",(0,i.kt)("inlineCode",{parentName:"li"},"kind: blueprint")),(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("strong",{parentName:"li"},"store"),", specify the name of the blueprint repository defined in the space."),(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("strong",{parentName:"li"},"path"),", specify ",(0,i.kt)("inlineCode",{parentName:"li"},'blueprints/<blueprint file name without ".yaml">'),". Alternatively, specify only ",(0,i.kt)("inlineCode",{parentName:"li"},"blueprints"),' and change the grain name to the blueprint file name without ".yaml".'),(0,i.kt)("li",{parentName:"ul"},"Specify the execution host as an input of ",(0,i.kt)("inlineCode",{parentName:"li"},"type: execution-host")," on the blueprint level, and reference it from the grain, both as an input and in the host section."))),(0,i.kt)("li",{parentName:"ol"},"If the grain should run after the deployment of another grain, add ",(0,i.kt)("inlineCode",{parentName:"li"},"__depends_on: <name of grain dependency>"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},'grains:\nmy-nested-blueprint-grain:\n  kind: blueprint\n  depends-on: infra-grain\n  spec: \n    source:\n      store: <space\'s blueprint repository>\n      path: blueprints/<blueprint file name without ".yaml">\n    host:\n      name: prod-host\n    inputs:\n      - my-excution-host: prod-host \n'))),(0,i.kt)("li",{parentName:"ol"},"Define the rest of the grain's settings as appropriate. For details, see ",(0,i.kt)("a",{parentName:"li",href:"/blueprint-designer-guide/blueprints"},"Blueprint YAML"),".")),(0,i.kt)("h3",{id:"example-1-helm-application-with-mysql-and-s3-deployed-by-terraform"},"Example 1: Helm Application with MySQL and S3 Deployed by Terraform"),(0,i.kt)("p",null,"This blueprint is available in the ",(0,i.kt)("strong",{parentName:"p"},"Sample")," space ",(0,i.kt)("a",{parentName:"p",href:"https://portal.qtorque.io/Sample/blueprints/%5BSample%5DHelm%20Application%20with%20MySql%20and%20S3%20Deployed%20by%20Terraform"},"here"),", which deploys 2 Terraform modules and a Helm chart:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"spec_version: 2\ndescription: Robotshot microservices application deployed on K8S with Helm and RDS deployed with TF\n\noutputs:\n  WebsiteUrl:\n    kind: link\n    value: 'https://portal.qtorque.io/static/demo-quick-links/stans-robot-shop.html'\n\n\ngrains:\n  mySqlDB:\n    kind: terraform\n    spec:\n      source:\n        path: github.com/QualiTorque/samples.git//terraform/rds\n      host:\n        name: eks-demo\n      inputs:\n        - sandbox_id: '{{ sandboxid | downcase }}'\n        - size: small \n        - allocated_storage: 20\n        - db_name: demo_db\n        - engine_version: 8.0.26\n        - engine: MySQL\n        - username: adminuser\n        - vpc_id: vpc-02e3bca90b081cd0f\n        - region: us-east-1\n      outputs:\n        - hostname\n        - connection_string\n\n  s3Bucket:\n    kind: terraform\n    spec: \n      source:\n        path: github.com/QualiTorque/samples.git//terraform/s3\n      host:\n        name: eks-demo\n      inputs:\n        - region: eu-west-1\n        - acl: public-read\n        - name: 'robotshop-s3-{{ sandboxid | downcase }}'\n      outputs:\n        - s3_bucket_arn\n\n  robotShopMicroservices:\n    kind: helm\n    depends-on: mySqlDB, s3Bucket\n    spec:\n      source:\n        path: https://github.com/QualiTorque/samples.git//helm/robotshop\n      host:\n        name: eks-demo\n      inputs:\n        - hostname: 'robotshop-{{ sandboxid | downcase }}'\n        - version: 0.4.3\n        - connectionString: '{{ .grains.mySqlDB.outputs.connection_string }}'\n        - objectStore.s3BucketArn: '{{ .grains.s3Bucket.outputs.s3_bucket_arn }}'\n        - redis.storageClassName: gp2\n")),(0,i.kt)("h2",{id:"example-2-webgame-on-s3-using-cloudformation-and-terraform"},"Example 2: Webgame on S3 (using CloudFormation and Terraform)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},'spec_version: 2\ndescription: "S3 Bucket creation with Input and Output parameters"\n\ninputs:\n   # The access_control property is case-sensitive and must be one of the following values: \n   # Private, PublicRead, PublicReadWrite, AuthenticatedRead, LogDeliveryWrite, BucketOwnerRead, BucketOwnerFullControl, or AwsExecRead\n   Access Control:\n      type: string\n      description: >\n        Type of access to configure on Bucket objects: Private, PublicRead, PublicReadWrite, AuthenticatedRead,\n        LogDeliveryWrite, BucketOwnerRead, BucketOwnerFullControl, or AwsExecRead\n      default: "PublicRead"\n      allowed-values: ["Private", "PublicRead", "PublicReadWrite"]\n   Bucket Name:\n      type: string\n      default: my-bucket-test\n   AWS Region:\n      description: "The name of the AWS Region to use"\n      default: "us-west-1"\n      allowed-values: ["us-west-1", "us-west-2", "eu-west-1"]\n    \n\noutputs:\n   S3 Bucket ARN:\n        value: \'{{ .grains.my-S3-Bucket.outputs.Arn }}\'\n   S3 Bucket Domain Name:\n        value: \'{{ .grains.my-S3-Bucket.outputs.DomainName }}\'\n        kind: link\n   Webgame Link:\n        value: \'{{ .grains.S3-Upload-Webapp-File.outputs.website_link }}\'\n        kind: link\n\ngrains:\n  CFN-S3-Bucket:\n    kind: cloudformation\n    spec: \n      source:\n        # store: autogen_repo_sandbox_2453f24g9\n        path: https://.../AWSS3Bucket.yaml\n      region: \'{{ .inputs.["AWS Region"] }}\'\n      authentication:\n        role-arn: arn:aws:iam::{{ .params.My_Torque_AWS }}:role/{{ .params.My_Torque_Agent_IAM_Role }}\n        external-id: \'{{ .params.My_Torque_External_ID }}\'\n      inputs:\n        - AccessControl: \'{{ .inputs.["Access Control"] }}\'\n        - BucketName: \'{{ .inputs.["Bucket Name"] }}-{{ sandboxid | downcase }}\'\n      outputs:\n         - Arn\n         - DomainName\n  \n  S3-Upload-Webapp-File:\n    kind: terraform\n    depends-on: my-S3-Bucket\n    spec:\n      source:\n        store: assets\n        path: assets/terraform/s3-deploy-webapp\n      host:\n        name: demo-prod\n        service-account: app-sa\n      inputs:\n      - bucket_name: \'{{ .inputs.["Bucket Name"] }}-{{ sandboxid | downcase }}\'\n      - region: \'{{ .inputs.["AWS Region"] }}\'\n      outputs:\n      - website_link\n    # The terraform version that will be used to deploy the module\n    tf-version: 1.2.3\n\n')))}m.isMDXComponent=!0},8818:function(e,t,n){t.Z=n.p+"assets/images/discover-assets-96653993ffd2ed7bfb9d4931d6e204e9.png"},8767:function(e,t,n){t.Z=n.p+"assets/images/new-assets-7033537c275cbc9bb07e24fdb2badbee.png"},9741:function(e,t,n){t.Z=n.p+"assets/images/publish-blueprint-ce1ebeda84f2847c3ffa70f70df3e0cc.png"},45:function(e,t,n){t.Z=n.p+"assets/images/select-assets-c4fb78d678b12fca19c4265f8d874468.png"}}]);