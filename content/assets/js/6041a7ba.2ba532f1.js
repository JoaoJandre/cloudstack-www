"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5936],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=l.createContext({}),c=function(e){var t=l.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return l.createElement(i.Provider,{value:t},e.children)},k="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),k=c(a),d=n,p=k["".concat(i,".").concat(d)]||k[d]||h[d]||o;return a?l.createElement(p,r(r({ref:t},u),{},{components:a})):l.createElement(p,r({ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[k]="string"==typeof e?e:n,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},23569:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var l=a(87462),n=(a(67294),a(3905));const o={layout:"post",title:"Apache CloudStack Weekly News - 10 June 2013",slug:"apache_cloudstack_weekly_news_10"},r=void 0,s={permalink:"/blog/apache_cloudstack_weekly_news_10",source:"@site/blog/2013-06-12-apache_cloudstack_weekly_news_10.md",title:"Apache CloudStack Weekly News - 10 June 2013",description:"This week, we take a look at the 4.2.0 feature freeze pushback, the Apache CloudStack user survey, and new committers and PMC members for Apache CloudStack.",date:"2013-06-12T00:00:00.000Z",formattedDate:"June 12, 2013",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Apache CloudStack Weekly News - 10 June 2013",slug:"apache_cloudstack_weekly_news_10"},prevItem:{title:"Apache CloudStack Weekly News - 17 June 2013",permalink:"/blog/apache_cloudstack_weekly_news_17"},nextItem:{title:"Apache CloudStack 4.1.0 Released",permalink:"/blog/apache_cloudstack_4_1_0"}},i={authorsImageUrls:[]},c=[],u={toc:c},k="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(k,(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{href:"/img/imported/ab378739-3c34-48ea-9495-2c49e23e58d6"},(0,n.kt)("img",{src:"/img/imported/ab378739-3c34-48ea-9495-2c49e23e58d6?t=true",alt:"square-cloudmonkey.png",align:"left",vspace:"5",hspace:"5"})),"This week, we take a look at the 4.2.0 feature freeze pushback, the Apache CloudStack user survey, and new committers and PMC members for Apache CloudStack."),(0,n.kt)("h3",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-10June2013-MajorDiscussions"}),"Major Discussions"),(0,n.kt)("p",null,"In this section we look at major discussions that have happened on the CloudStack mailing lists. This is by no means a full summary of all discussions on the lists, but we try to hit the highlights that are relevant to the larger CloudStack community. "),(0,n.kt)("h5",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-10June2013-4.1Releases"}),"4.1 Releases"),(0,n.kt)("p",null,"The first major release of Apache CloudStack since it became a top level project was released on June 5, 2013 and is available. For more information, please see the official ",(0,n.kt)("a",{href:"https://blogs.apache.org/cloudstack/entry/apache_cloudstack_4_1_0",class:"external-link",rel:"nofollow"},"announcement.")," "),(0,n.kt)("h5",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-10June2013-4.2FeatureFreezePushBack"}),"4.2 Feature Freeze Push Back"),(0,n.kt)("p",null,"Due to the delays in releasing 4.1 release, it was requested by many in the community to push back the freeze date. Chip Childers called for a Vote on 5/31 to move the Feature Freeze back from 5/31 to 6/28 (",(0,n.kt)("a",{href:"https://cwiki.apache.org/confluence/display/CLOUDSTACK/Cloudstack+4.2+Release",class:"external-link",rel:"nofollow"},"Updated Schedule"),"). The push back was approved with 19 +1 votes (",(0,n.kt)("a",{href:"http://markmail.org/message/2pd33ofdegqugsi2?q",class:"external-link",rel:"nofollow"},"full results"),")."),(0,n.kt)("h5",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-10June2013-CloudStackCommunitySurveyUnderway"}),"CloudStack Community Survey Underway"),(0,n.kt)("p",null,'Please let your voice and your organization be heard in this short survey. We would like to have both users of the Apache CloudStack source and Commercial derivatives, "We will be using the data in ',(0,n.kt)("b",null,"aggregate")," to get to know more about how it's being deployed out there.\" Chip Childers ",(0,n.kt)("a",{href:"http://markmail.org/message/7s3ev7leok7uxucb?q",class:"external-link",rel:"nofollow"},"commented"),". Click ",(0,n.kt)("a",{href:"https://www.surveymonkey.com/s/28BV97D",class:"external-link",rel:"nofollow"},"Here")," to take the short survey."),(0,n.kt)("h3",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-10June2013-CloudStackPlanet"}),"CloudStack Planet"),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:"http://buildacloud.org/blog/259-cloudstack-university.html",class:"external-link",rel:"nofollow"},"CloudStack University"))," by Sebastien Goasguen: ",(0,n.kt)("em",null,"At Apache CloudStack we recently started an initiative to organize our content into learning modules. We call this initiative CloudStack University. Everyone is invited to participate by contributing content (slides and screencasts), suggesting new learning modules that are needed and even creating exercises and assignments. School fun ! As we were discussing the initiative on the mailing list we started by looking at our existing content: slideshares, youtube videos and thought about organizing them into a CloudStack 101 course. This is still a work in progress that requires everyones participation to make it a great resource."))),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:"http://markmail.org/message/fdughdzmp7ia44yx?q",class:"external-link",rel:"nofollow"},"Videographer is working with CloudStack to create videos for the project.")),' Is your cloud one of the "Top 10 Coolest CloudStack Deployments"? Videographer Gregg Witkin and writer Jessica Tomechak are working together on videos this summer, including one that aims to show some of the most interesting real-world applications of CloudStack. They welcome your participation on this video, and suggestions for other videos you\'d like to see. Check out these videos Gregg did with CloudStack just last year. ',(0,n.kt)("a",{href:"http://www.youtube.com/watch?v=oJ4b8HFmFTc",class:"external-link",rel:"nofollow"},"Link 1"),", ",(0,n.kt)("a",{href:"http://www.youtube.com/watch?v=KATuxn5pimY",class:"external-link",rel:"nofollow"},"Link 2"))),(0,n.kt)("h3",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-10June2013-UpcomingEvents"}),"Upcoming Events"),(0,n.kt)("p",null,"Don't miss the ",(0,n.kt)("b",null,(0,n.kt)("a",{href:"http://cloudstackcollab.net/",class:"external-link",rel:"nofollow"},"CloudStack Collaboration Conference")),", which is coming up June 23 through June 25. "),(0,n.kt)("ul",null,(0,n.kt)("li",null,'Just announced that Adrian Cockcroft (Director of Architecture for the Cloud Systems team at Netflix) will deliver the closing keynote at the conference with, "Dystopia as a Service" on June 25th, 2013. Adrian will discuss the new challenges and demands of living in this dystopian world of cloud-based services along with an overview of the Netflix open source cloud platform. For more info click ',(0,n.kt)("a",{href:"http://www.cloudstackcollab.org/keynotes/keynote3/",class:"external-link",rel:"nofollow"},"here"))),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:"https://www.ch-open.ch/events/aktuelle-events/open-cloud-day-2013/",class:"external-link",rel:"nofollow"},"Open Cloud Day "))," in Zurich, June 11th. Sebastien Goasguen will talk about the Apache Cloud ecosystem."),(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:"http://bacdparis.eventbrite.com",class:"external-link",rel:"nofollow"},"Build a Cloud Day Paris"))," Paris, June 19th."),(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:"http://www.shapeblue.com/cloudstack-bootcamp-training-course",class:"external-link",rel:"nofollow"},"ShapeBlue CloudStack BootCamp"))," being held June 19/20 in London,UK."),(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:"http://www.shapeblue.com/cloudstack-bootcamp-training-course",class:"external-link",rel:"nofollow"},"ShapeBlue CloudStack BootCamp"))," being held June 22/23 at the Santa Clara Convention Center."),(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:"http://www.meetup.com/CloudStack-SF-Bay-Area-Users-Group/events/117379992/",class:"external-link",rel:"nofollow"},"CloudStack San Francisco Users Group Event"))," being held at SAP Labs in Palo Alto CA. on June 27th."),(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:"http://www.eventbrite.com/event/6727182183",class:"external-link",rel:"nofollow"},"CloudStack European User Group meeting"))," being held in London, UK on July 4"),(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:"http://www.oscon.com/oscon2013",class:"external-link",rel:"nofollow"},"O'Reiley's Open Source Conference (OSCON)"))," being held July 22-26 at Oregon Convention Center, Portland Oregon.")),(0,n.kt)("h3",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-10June2013-NewCommittersandPMCMembers"}),"New Committers and PMC Members"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"John Burwell has been invited to join the CloudStack PMC, and ",(0,n.kt)("a",{href:"http://markmail.org/message/hsbd7g3dnyop3rcv?q",class:"external-link",rel:"nofollow"},"has accepted")),(0,n.kt)("li",null,"Sailaja Mada has been invited to become a CloudStack committer, and ",(0,n.kt)("a",{href:"http://markmail.org/message/crdmnb5d2siq6t35?q",class:"external-link",rel:"nofollow"},"has accepted")),(0,n.kt)("li",null,"Venkata Swamy has been invited to become a CloudStack committer, and ",(0,n.kt)("a",{href:"http://markmail.org/message/mnnpesrkay4s3qdr?q",class:"external-link",rel:"nofollow"},"has accepted")),(0,n.kt)("li",null,"Wei Zhou has been invited to become a CloudStack committer, and ",(0,n.kt)("a",{href:"http://markmail.org/message/e4rsrs6ujlau36jh?q",class:"external-link",rel:"nofollow"},"has accepted")),(0,n.kt)("li",null,"Sangeetha Hariharan has been invited to become a CloudStack committer, and ",(0,n.kt)("a",{href:"http://markmail.org/message/k2o2l4x3drqe5hl2?q",class:"external-link",rel:"nofollow"},"has accepted"))))}h.isMDXComponent=!0}}]);