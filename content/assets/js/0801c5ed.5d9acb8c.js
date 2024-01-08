"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1791],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,k=p["".concat(i,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},76269:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={layout:"post",title:"[CVE-2014-0031] CloudStack ListNetworkACL API discloses ACLs for other users",tags:["announcement"],slug:"cve_2014_0031_cloudstack_listnetworkacl"},l=void 0,c={permalink:"/blog/cve_2014_0031_cloudstack_listnetworkacl",source:"@site/blog/2014-01-10-cve_2014_0031_cloudstack_listnetworkacl.md",title:"[CVE-2014-0031] CloudStack ListNetworkACL API discloses ACLs for other users",description:"Product: Apache CloudStack",date:"2014-01-10T00:00:00.000Z",formattedDate:"January 10, 2014",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"[CVE-2014-0031] CloudStack ListNetworkACL API discloses ACLs for other users",tags:["announcement"],slug:"cve_2014_0031_cloudstack_listnetworkacl"},prevItem:{title:"[CVE-2013-6398] CloudStack Virtual Router stop/start modifies firewall rules allowing additional access",permalink:"/blog/cve_2013_6398_cloudstack_virtual"},nextItem:{title:"Announcing Apache CloudStack 4.2.0",permalink:"/blog/announcing_apache_cloudstack_4_2"}},i={authorsImageUrls:[]},s=[],u={toc:s},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Product: Apache CloudStack",(0,o.kt)("br",null),"Vendor: Apache Software Foundation",(0,o.kt)("br",null),"Vulnerability type: Information Disclosure",(0,o.kt)("br",null),"Vulnerable Versions: Apache CloudStack 4.2.0",(0,o.kt)("br",null),"CVE References: CVE-2014-0031",(0,o.kt)("br",null),"Risk Level: Low",(0,o.kt)("br",null),"CVSSv2 Base Scores: 3.5  (AV:N/AC:M/Au:S/C:P/I:N/A:N)",(0,o.kt)("br",null)),(0,o.kt)("p",null,"Description:"),(0,o.kt)("p",null,"The Apache CloudStack Security Team was notified of a an issue in Apache CloudStack which permits an authenticated user to list network ACLs for other users."),(0,o.kt)("p",null,"Mitigation:"),(0,o.kt)("p",null,"Upgrading to CloudStack 4.2.1 or higher will mitigate this issue."),(0,o.kt)("p",null,"References:"),(0,o.kt)("p",null,"https://issues.apache.org/jira/browse/CLOUDSTACK-5145"),(0,o.kt)("p",null,"Credit:"),(0,o.kt)("p",null,"This issue was identified by Marcus Sorensen"))}f.isMDXComponent=!0}}]);