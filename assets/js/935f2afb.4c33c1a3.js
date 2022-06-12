"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"torqueSidebar":[{"type":"html","value":"<div class=\\"torque-brand\\"></div>"},{"type":"html","value":"<h2>Documentation</h2>"},{"type":"link","label":"Welcome to Torque!","href":"/","docId":"intro"},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Torque Terminology","href":"/getting-started/The Torque Terminology","docId":"getting-started/The Torque Terminology"},{"type":"link","label":"The Sample Space","href":"/getting-started/The Sample Space","docId":"getting-started/The Sample Space"},{"type":"link","label":"Your First Workload","href":"/getting-started/Running your first workload","docId":"getting-started/Running your first workload"},{"type":"link","label":"Create Your Space","href":"/getting-started/Create your space","docId":"getting-started/Create your space"},{"type":"link","label":"Connect Your Asset Repository","href":"/getting-started/Connect your asset repository","docId":"getting-started/Connect your asset repository"},{"type":"link","label":"Connect an Execution Host","href":"/getting-started/Connect an Execution Host","docId":"getting-started/Connect an Execution Host"},{"type":"link","label":"Connect a Kubernetes Cluster","href":"/getting-started/Connect a Kubernetes Cluster","docId":"getting-started/Connect a Kubernetes Cluster"},{"type":"link","label":"What\'s next?","href":"/getting-started/Whats next","docId":"getting-started/Whats next"}]},{"type":"category","label":"Blueprint Designer Guide","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Blueprint YAML","href":"/blueprint-designer-guide/blueprints","docId":"blueprint-designer-guide/blueprints"},{"type":"link","label":"Autogenerated Blueprints","href":"/blueprint-designer-guide/Autogenerated Blueprints","docId":"blueprint-designer-guide/Autogenerated Blueprints"},{"type":"link","label":"Service Accounts","href":"/blueprint-designer-guide/Service Accounts","docId":"blueprint-designer-guide/Service Accounts"}]},{"type":"category","label":"Roles & Permissions","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Roles in Torque","href":"/roles-and-permissions/roles-in-torque","docId":"roles-and-permissions/roles-in-torque"},{"type":"link","label":"Blueprint Policies","href":"/roles-and-permissions/Policies","docId":"roles-and-permissions/Policies"},{"type":"link","label":"Invite Users to Torque","href":"/roles-and-permissions/invite-users-to-torque","docId":"roles-and-permissions/invite-users-to-torque"},{"type":"link","label":"Add Existing Users to Your Space","href":"/roles-and-permissions/add-users-to-space","docId":"roles-and-permissions/add-users-to-space"}],"href":"/roles-and-permissions/"},{"type":"category","label":"Administration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Tags","href":"/admin-guide/tags","docId":"admin-guide/tags"}]},{"type":"category","label":"Deployment Architecture","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Architecture","href":"/deployment-architecture/Architecture","docId":"deployment-architecture/Architecture"}]},{"type":"category","label":"Ecosystem & Integrations","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Torque Integrations","href":"/eco-system/integrations-overview","docId":"eco-system/integrations-overview"}]}]},"docs":{"admin-guide/tags":{"id":"admin-guide/tags","title":"Tags","description":"The cloud providers cost management pillars provide tools to cover many aspect of your cloud spending, like billing isolation, specific service limits and cost alerts. 3rd party tools also exist which provide enhanced functionality, such as inventory visibility, rightsizing recommendations, idle resources detection etc.","sidebar":"torqueSidebar"},"blueprint-designer-guide/Autogenerated Blueprints":{"id":"blueprint-designer-guide/Autogenerated Blueprints","title":"Autogenerated Blueprints","description":"Torque autogenerated blueprints","sidebar":"torqueSidebar"},"blueprint-designer-guide/blueprints":{"id":"blueprint-designer-guide/blueprints","title":"Blueprint YAML","description":"Torque\'s blueprints are reusable components designed to model a required environment from the infrastructure to the application. Blueprint designers utilize Torque\'s VSCode plugin or the Torque\'s self-service UI to build a YAML based imperative blueprints that aimed to fulfill business requirements in a self-service manner for their end-users.","sidebar":"torqueSidebar"},"blueprint-designer-guide/Service Accounts":{"id":"blueprint-designer-guide/Service Accounts","title":"Service Accounts","description":"A kubernetes service account provides an identity for processes that run in a pod. We recommend using service accounts if you are using a Kubernetes cluster as your execution host.","sidebar":"torqueSidebar"},"deployment-architecture/Architecture":{"id":"deployment-architecture/Architecture","title":"Architecture","description":"Torque is a SaaS platform that interfaces with different cloud services to enable the deployment and modelling of applications.","sidebar":"torqueSidebar"},"eco-system/integrations-overview":{"id":"eco-system/integrations-overview","title":"Torque Integrations","description":"Torque supports integration with various 3rd party tools, including CI/CD tools such as Azure DevOps, Jenkins and Circle CI, and Torque\'s very own Torque CLI and Torque VSCode plugin development tools. Integrations are configured on the space level, so you could have different integrations for each space, as needed.","sidebar":"torqueSidebar"},"getting-started/Connect a Kubernetes Cluster":{"id":"getting-started/Connect a Kubernetes Cluster","title":"Connect a Kubernetes Cluster","description":"Kubernetes host architecture","sidebar":"torqueSidebar"},"getting-started/Connect an Execution Host":{"id":"getting-started/Connect an Execution Host","title":"Connect an Execution Host","description":"Next, let\'s connect an execution host to Torque. The execution host is the platform on which the asset will be launched For example, a Kubernetes cluster can be used as an execution host, and the commands such as terraform apply or helm install would be run from the cluster.","sidebar":"torqueSidebar"},"getting-started/Connect your asset repository":{"id":"getting-started/Connect your asset repository","title":"Connect Your Asset Repository","description":"Torque needs access to your relevant git repositories to read your Terraform modules or Helm charts.","sidebar":"torqueSidebar"},"getting-started/Create your space":{"id":"getting-started/Create your space","title":"Create Your Space","description":"As we discussed in The Sample Space, the space is your work area and here you work with your team on a project. It will contain the team members, repositories, assets, and execution hosts.","sidebar":"torqueSidebar"},"getting-started/Running your first workload":{"id":"getting-started/Running your first workload","title":"Your First Workload","description":"First time?","sidebar":"torqueSidebar"},"getting-started/The Sample Space":{"id":"getting-started/The Sample Space","title":"The Sample Space","description":"Torque comes out of the box with a single space - the Sample space. This space contains several example blueprints for you to play with and get familiarized with the product.","sidebar":"torqueSidebar"},"getting-started/The Torque Terminology":{"id":"getting-started/The Torque Terminology","title":"Torque Terminology","description":"Blueprint - An offline plan (template) of an environment. A blueprint contains grains. Each grain represents a specific workload (for example, a Rerraform module or a Helm chart). The blueprint defines the orchestration between the grains (order, dependency, etc.), and deploys a whole environment, from infrastructure to application. Blueprints are defined in source-controlled YAML files.","sidebar":"torqueSidebar"},"getting-started/Whats next":{"id":"getting-started/Whats next","title":"What\'s next?","description":"By now, you have succeeded to run your first workload with Torque. To take it to the next level, download your autogenerated blueprints, and store them in your VCS of choice. It may reside in the same repository with your assets, or a diffrent one.","sidebar":"torqueSidebar"},"intro":{"id":"intro","title":"Welcome to Torque!","description":"APPLICATION ENVIRONMENTS - Anytime. Anywhere.","sidebar":"torqueSidebar"},"roles-and-permissions/add-users-to-space":{"id":"roles-and-permissions/add-users-to-space","title":"Add Existing Users to Your Space","description":"Torque role: Account admin, space admin","sidebar":"torqueSidebar"},"roles-and-permissions/invite-users-to-torque":{"id":"roles-and-permissions/invite-users-to-torque","title":"Invite Users to Torque","description":"Torque role: Account admin","sidebar":"torqueSidebar"},"roles-and-permissions/Policies":{"id":"roles-and-permissions/Policies","title":"Blueprint Policies","description":"As the blueprint designer, you can define the blueprint\'s max duration or allow it to run indefinitely, to support scenarios that deploy a sandbox that must be always online, or delivers a static cloud resource.","sidebar":"torqueSidebar"},"roles-and-permissions/roles-and-permissions":{"id":"roles-and-permissions/roles-and-permissions","title":"Users, Roles and Permissions","description":"Now that you understand how Torque works, it\'s time to invite other members of your team to your Torque account. As Account Admin, you can invite users to your Torque account and add them to spaces, while Space Admins can only add existing Torque users to the spaces they administer.","sidebar":"torqueSidebar"},"roles-and-permissions/roles-in-torque":{"id":"roles-and-permissions/roles-in-torque","title":"Roles in Torque","description":"There are 4 roles in Torque:","sidebar":"torqueSidebar"}}}')}}]);