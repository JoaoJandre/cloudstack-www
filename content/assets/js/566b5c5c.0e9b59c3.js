"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5415],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,h=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31347:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={layout:"post",title:'CloudStack and the "Ghost" glibc vulnerability',tags:["announcement"],slug:"cloudstack_and_the_ghost_glibc"},l=void 0,s={permalink:"/blog/cloudstack_and_the_ghost_glibc",source:"@site/blog/2015-01-28-cloudstack_and_the_ghost_glibc.md",title:'CloudStack and the "Ghost" glibc vulnerability',description:"UPDATE: mitigation instructions have been improved (don't update openswan) and we forgot to mention rebooting.",date:"2015-01-28T00:00:00.000Z",formattedDate:"January 28, 2015",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:'CloudStack and the "Ghost" glibc vulnerability',tags:["announcement"],slug:"cloudstack_and_the_ghost_glibc"},prevItem:{title:"CloudStack and OpenSSL CVE-2015-1793",permalink:"/blog/cloudstack_and_openssl_cve_2015"},nextItem:{title:"[ANNOUNCE] Announcing Apache CloudStack 4.3.2",permalink:"/blog/announce_announcing_apache_cloudstack_4"}},i={authorsImageUrls:[]},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("b",null,"UPDATE: mitigation instructions have been improved (don't update openswan) and we forgot to mention rebooting."),(0,r.kt)("br",null),(0,r.kt)("b",null,"UPDATE: Links to updated System VM templates are now below"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"Yesterday, a buffer overflow vulnerability was announced in glibc that affects most current Linux distributions. In CloudStack, the system VMs contain a vulnerable version of glibc. "),(0,r.kt)("p",null,"CloudStack community members have built an updated system VM template, which ShapeBlue is hosting at ",(0,r.kt)("a",{href:"http://packages.shapeblue.com/systemvmtemplate/"},"http://packages.shapeblue.com/systemvmtemplate/")," (More information on the packages at ",(0,r.kt)("a",{href:"http://shapeblue.com/packages"},"http://shapeblue.com/packages"),"). "),(0,r.kt)("p",null,"For instructions on how to update the SystemVM template in CloudStack, see ",(0,r.kt)("a",{href:"http://support.citrix.com/article/CTX200024"},"here"),"."),(0,r.kt)("p",null,"For those who wish to patch their running system VMs, ssh into each one and run:"),(0,r.kt)("pre",null,"apt-mark hold openswan apt-get clean apt-get update && apt-get upgrade"),(0,r.kt)("p",null,"After updating glibc, the system will need to be rebooted."),(0,r.kt)("p",null,"Information about how to connect to your System VMs is available ",(0,r.kt)("a",{href:"https://cloudstack.apache.org/docs/en-US/Apache_CloudStack/4.2.0/html/Admin_Guide/accessing-system-vms.html"},"here"),"."),(0,r.kt)("h2",null,"Other CloudStack-related systems may be affected!"),(0,r.kt)("p",null,"Please review security updates from Linux distributions you use on your management server, storage systems, hypervisors, as well as other Linux VMs and bare-metal systems running in your environments. ",(0,r.kt)("a",{href:"http://www.cyberciti.biz/faq/cve-2015-0235-patch-ghost-on-debian-ubuntu-fedora-centos-rhel-linux/"},"This post")," provides instructions for determining if a system is vulnerable, as well as patching directions for common Linux distributions."))}m.isMDXComponent=!0}}]);