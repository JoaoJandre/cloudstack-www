"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4402],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(f,c(c({ref:t},s),{},{components:n})):a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},89268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={layout:"post",title:"[CVE-2014-7807] Apache CloudStack unauthenticated LDAP binds",tags:["announcement"],slug:"cve_2014_7807_apache_cloudstack"},c=void 0,i={permalink:"/blog/cve_2014_7807_apache_cloudstack",source:"@site/blog/2014-12-08-cve_2014_7807_apache_cloudstack.md",title:"[CVE-2014-7807] Apache CloudStack unauthenticated LDAP binds",description:"CVE-2014-7807: Apache CloudStack unauthenticated LDAP binds",date:"2014-12-08T00:00:00.000Z",formattedDate:"December 8, 2014",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"[CVE-2014-7807] Apache CloudStack unauthenticated LDAP binds",tags:["announcement"],slug:"cve_2014_7807_apache_cloudstack"},prevItem:{title:"[ANNOUNCE] Announcing Apache CloudStack 4.3.2",permalink:"/blog/announce_announcing_apache_cloudstack_4"},nextItem:{title:"The Apache CloudStack Project Announces Apache\u2122 CloudMonkey\u2122 v5.3.0",permalink:"/blog/the_apache_cloudstack_project_announces1"}},l={authorsImageUrls:[]},u=[],s={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"CVE-2014-7807: Apache CloudStack unauthenticated LDAP binds"),(0,r.kt)("p",null,"CVSS:",(0,r.kt)("br",null),"7.5, AV:N/AC:L/Au:N/C:P/I:P/A:P"),(0,r.kt)("p",null,"Vendors:",(0,r.kt)("br",null),"The Apache Software Foundation",(0,r.kt)("br",null),"Citrix, Inc."),(0,r.kt)("p",null,"Versions Afffected:",(0,r.kt)("br",null),"Apache CloudStack 4.3, 4.4"),(0,r.kt)("p",null,"Description:",(0,r.kt)("br",null),"Apache CloudStack may be configured to authenticate LDAP users. When so configured, it performs a simple LDAP bind with the name and password provided by a user.  Simple LDAP binds are defined with three mechanisms (RFC 4513): 1) username and password; 2) unauthenticated if only a username is specified; and 3) anonymous if neither username or password is specified.  Currently, Apache CloudStack does not check if the password was provided which could allow an attacker to bind as an unauthenticated user."),(0,r.kt)("p",null,"Mitigation:",(0,r.kt)("br",null),"Users of Apache CloudStack 4.4 and derivatives should update to the latest version (4.4.2)"),(0,r.kt)("p",null,"An updated release for Apache CloudStack 4.3.2 is in testing. Until that is released, we recommend following the mitigation below:"),(0,r.kt)("p",null,"By default, many LDAP servers are not configured to allow unauthenticated binds.  If the LDAP server in use allow this behaviour, a potential interim solution would be to consider disabling unauthenticated binds."),(0,r.kt)("p",null,"Credit:",(0,r.kt)("br",null),"This issue was identified by the Citrix Security Team."))}d.isMDXComponent=!0}}]);