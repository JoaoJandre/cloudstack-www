"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5413],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(o),h=n,m=p["".concat(i,".").concat(h)]||p[h]||d[h]||a;return o?r.createElement(m,s(s({ref:t},c),{},{components:o})):r.createElement(m,s({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:n,s[1]=l;for(var u=2;u<a;u++)s[u]=o[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},46435:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=o(87462),n=(o(67294),o(3905));const a={layout:"post",title:"[ADVISORY] Apache CloudStack Advisory on KVM Shared Mount Point issues on version 4.17.0.0",tags:["announcement"],slug:"advisory-apache-cloudstack-advisory-on"},s=void 0,l={permalink:"/blog/advisory-apache-cloudstack-advisory-on",source:"@site/blog/2022-06-17-advisory-apache-cloudstack-advisory-on.md",title:"[ADVISORY] Apache CloudStack Advisory on KVM Shared Mount Point issues on version 4.17.0.0",description:"On 14th June 2022, a new issue affecting only KVM users using Shared Mount Point storage was reported [1]. This issue affects the creation and the usage of existing Shared Mount Point storage pools on Apache CloudStack 4.17.0.0.",date:"2022-06-17T00:00:00.000Z",formattedDate:"June 17, 2022",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"[ADVISORY] Apache CloudStack Advisory on KVM Shared Mount Point issues on version 4.17.0.0",tags:["announcement"],slug:"advisory-apache-cloudstack-advisory-on"},prevItem:{title:"Meet the Community - K B Shiv Kumar ",permalink:"/blog/meet-the-community-k-b"},nextItem:{title:"Apache CloudStack 4.17.0.0 LTS Release",permalink:"/blog/apache-cloudstack-4-17-release"}},i={authorsImageUrls:[]},u=[],c={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"On 14th June 2022, a new issue affecting only KVM users using Shared Mount Point storage was reported [1]. This issue affects the creation and the usage of existing Shared Mount Point storage pools on Apache CloudStack 4.17.0.0.",(0,n.kt)("br",null),(0,n.kt)("p",null,"Apache CloudStack 4.17.0.0 added support for the StorPool storage based on Shared Mount Point. However, the current version of CloudStack doesn","'","t allow multiple implementations of Shared Mount Point storage pool providers, causing the StorPool provider to override the default implementation. This affected the other storage pool providers for Shared Mount Point since CloudStack tries to add them as a StorPool storage pool.",(0,n.kt)("br",null)),(0,n.kt)("p",null,"To mitigate the issue, a CloudStack administrator needs to do the following on version 4.17.0.0:",(0,n.kt)("br",null)),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"On each management server: stop the CloudStack management service, remove the Storpool plugin jar on /usr/share/cloudstack-management/lib/cloud-plugin-storage-volume-storpool-4.17.0.0.jar and restart the Cloudstack management service",(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ul"},"On each KVM host: stop the CloudStack agent service, remove the StorPool plugin jar on /usr/share/cloudstack-agent/lib/cloud-plugin-storage-volume-storpool-4.17.0.0.jar and restart the CloudStack agent service",(0,n.kt)("br",null))),(0,n.kt)("p",null,"Note: This workaround removes the StorPool plugin support. StorPool users should not apply the workaround to continue using their Storpool storage.",(0,n.kt)("br",null)),(0,n.kt)("p",null,"This issue will be fixed in the upcoming CloudStack version 4.17.1.0.",(0,n.kt)("br",null)),(0,n.kt)("p",null,"[1]","\xa0",(0,n.kt)("a",{href:"https://github.com/apache/cloudstack/issues/6455",title:"https://github.com/apache/cloudstack/issues/6455"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/cloudstack/issues/6455"},"https://github.com/apache/cloudstack/issues/6455")))))}d.isMDXComponent=!0}}]);