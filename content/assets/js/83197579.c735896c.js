"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7387],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),i=u(a),h=o,f=i["".concat(s,".").concat(h)]||i[h]||d[h]||r;return a?n.createElement(f,c(c({ref:t},p),{},{components:a})):n.createElement(f,c({ref:t},p))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,c=new Array(r);c[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[i]="string"==typeof e?e:o,c[1]=l;for(var u=2;u<r;u++)c[u]=a[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},63806:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=a(87462),o=(a(67294),a(3905));const r={layout:"post",title:"Apache CloudStack LTS Maintenance Release 4.14.1.0",tags:["announcement"],slug:"apache-cloudstack-lts-maintenance-release"},c="Apache CloudStack LTS Maintenance Release 4.14.1.0",l={permalink:"/blog/apache-cloudstack-lts-maintenance-release",source:"@site/blog/2021-03-03-apache-cloudstack-lts-maintenance-release.md",title:"Apache CloudStack LTS Maintenance Release 4.14.1.0",description:"The Apache CloudStack project is pleased to announce the release of",date:"2021-03-03T00:00:00.000Z",formattedDate:"March 3, 2021",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],hasTruncateMarker:!0,authors:[],frontMatter:{layout:"post",title:"Apache CloudStack LTS Maintenance Release 4.14.1.0",tags:["announcement"],slug:"apache-cloudstack-lts-maintenance-release"},prevItem:{title:"Meet the Community - Gabriel Brascher - VP of Apache CloudStack",permalink:"/blog/meet-the-community-gabriel-brascher"},nextItem:{title:"The Apache Software Foundation Announces Apache\xae CloudStack\xae v4.15",permalink:"/blog/the-apache-software-foundation-announces2"}},s={authorsImageUrls:[]},u=[],p={toc:u},i="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(i,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Apache CloudStack project is pleased to announce the release of\nCloudStack 4.14.1.0 as part of its LTS 4.14.x releases. The CloudStack\n4.14.1.0 release is a maintenance release and contains more than\n100 fixes and improvements since the CloudStack 4.14.0.0 release."),(0,o.kt)("p",null,"CloudStack LTS branches are supported for 18 months and will receive\nupdates for the first 12 months and only security updates in its last 6 months."),(0,o.kt)("p",null,"Apache CloudStack is an integrated Infrastructure-as-a-Service (IaaS)\nsoftware platform that allows users to build feature-rich public and\nprivate cloud environments. CloudStack includes an intuitive user interface\nand rich API for managing the compute, networking, software, and storage\nresources. The project became an Apache top-level project in March, 2013."),(0,o.kt)("p",null,"ore information about Apache CloudStack can be found at:\n",(0,o.kt)("a",{parentName:"p",href:"http://cloudstack.apache.org/"},"http://cloudstack.apache.org/")),(0,o.kt)("h1",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"What's new in  CloudStack 4.14.1.0:\n",(0,o.kt)("a",{parentName:"p",href:"http://docs.cloudstack.apache.org/projects/cloudstack-release-notes/en/4.14.1.0/about.html"},"http://docs.cloudstack.apache.org/projects/cloudstack-release-notes/en/4.14.1.0/about.html")),(0,o.kt)("p",null,"The 4.14.1.0 release notes include a full list of issues fixed, as well\nas upgrade instructions from previous versions of Apache CloudStack, and\ncan be found at:\n",(0,o.kt)("a",{parentName:"p",href:"http://docs.cloudstack.apache.org/en/4.14.1.0/releasenotes/"},"http://docs.cloudstack.apache.org/en/4.14.1.0/releasenotes/")),(0,o.kt)("p",null,"The official installation, administration, and API documentation for each of\nthe releases are available on our documentation page:\n",(0,o.kt)("a",{parentName:"p",href:"http://docs.cloudstack.apache.org/"},"http://docs.cloudstack.apache.org/")),(0,o.kt)("h1",{id:"downloads"},"Downloads"),(0,o.kt)("p",null,"The official source code for the 4.14.1.0 release can be downloaded from our\ndownloads page:\n",(0,o.kt)("a",{parentName:"p",href:"http://cloudstack.apache.org/downloads.html"},"http://cloudstack.apache.org/downloads.html")),(0,o.kt)("p",null,"In addition to the official source code release, individual contributors\nhave also made convenience binaries available on the Apache CloudStack\ndownload page, and can be found at:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://download.cloudstack.org/ubuntu/dists/"},"http://download.cloudstack.org/ubuntu/dists/"),"\n",(0,o.kt)("a",{parentName:"p",href:"http://download.cloudstack.org/centos/7/"},"http://download.cloudstack.org/centos/7/"),"\n",(0,o.kt)("a",{parentName:"p",href:"http://www.shapeblue.com/packages/"},"http://www.shapeblue.com/packages/")))}d.isMDXComponent=!0}}]);