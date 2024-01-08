"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2840],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=l.createContext({}),u=function(e){var t=l.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return l.createElement(i.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(a),k=n,d=h["".concat(i,".").concat(k)]||h[k]||p[k]||o;return a?l.createElement(d,r(r({ref:t},c),{},{components:a})):l.createElement(d,r({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[h]="string"==typeof e?e:n,r[1]=s;for(var u=2;u<o;u++)r[u]=a[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},38613:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var l=a(87462),n=(a(67294),a(3905));const o={layout:"post",title:"Apache CloudStack Weekly News - 8 April 2013",slug:"apache_cloudstack_weekly_news_8"},r=void 0,s={permalink:"/blog/apache_cloudstack_weekly_news_8",source:"@site/blog/2013-04-09-apache_cloudstack_weekly_news_8.md",title:"Apache CloudStack Weekly News - 8 April 2013",description:"The Apache CloudStack community has been heads-down for the last week working out the remaining bugs for the 4.1.0 release. Chatter on the dev@ mailing list has been a little muted, comparatively, but there's still plenty of interest in this week's roundup of major discussions and CloudStack community activity.",date:"2013-04-09T00:00:00.000Z",formattedDate:"April 9, 2013",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Apache CloudStack Weekly News - 8 April 2013",slug:"apache_cloudstack_weekly_news_8"},prevItem:{title:"Apache CloudStack Weekly News - 22 April 2013",permalink:"/blog/apache_cloudstack_weekly_news_22"},nextItem:{title:"Apache CloudStack Weekly News - 1 April 2013",permalink:"/blog/apache_cloudstack_weekly_news_1"}},i={authorsImageUrls:[]},u=[],c={toc:u},h="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Apache CloudStack community has been heads-down for the last week working out the remaining bugs for the 4.1.0 release. Chatter on the dev@ mailing list has been a little muted, comparatively, but there's still plenty of interest in this week's roundup of major discussions and CloudStack community activity."),(0,n.kt)("p",null,"This week, we look at the outstanding issues for 4.1.0, a discussion about allowing multiple API names for the same API Cmd object, how to deal with tests that expect no database, and how ticket assignment should work. "),(0,n.kt)("h3",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-8April2013-MajorDiscussions"}),"Major Discussions"),(0,n.kt)("h5",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-8April2013-OutstandingWorkforthe4.1.0Release"}),"Outstanding Work for the 4.1.0 Release"),(0,n.kt)("p",null,"4.1.0 is getting close, but we're not quite there yet. Chip Childers sent out a ",(0,n.kt)("a",{href:"http://markmail.org/thread/7igfqlwj3ornbwq7",class:"external-link",rel:"nofollow"},"list of outstanding work")," required for 4.1.0. Several of the issues are already in progress, but Chip also pointed out ",(0,n.kt)("a",{href:"https://issues.apache.org/jira/browse/CLOUDSTACK-1941",class:"external-link",rel:"nofollow"},"CLOUDSTACK-1941: Cannot delete users in the default admin account within the UI")," as unassigned. This is a critical issue that will need to be addressed before an RC or release can be cut."),(0,n.kt)("h5",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-8April2013-APINameAlias"}),"API Name Alias"),(0,n.kt)("p",null,"Kishan Kavala has raised a discussion ",(0,n.kt)("a",{href:"http://markmail.org/message/5j6qhtyw53vxbnal",class:"external-link",rel:"nofollow"},"about an API name alias"),'. Kishan has a plan to enhance the name parameter "to support comma separated values. This will allow multiple API names for the same API Cmd object." John Burwell ',(0,n.kt)("a",{href:"http://markmail.org/message/zz5inlth3jtrpjok",class:"external-link",rel:"nofollow"},"recommended")," using an array rather than a comma separated value, but there's been some discussion as to whether that's the best arrangement for the current code."),(0,n.kt)("p",null,"So far, the discussion has not come to a resolution. Folks who have an understanding of the impact or wish to comment on the feature should jump into the discussion on dev@."),(0,n.kt)("h5",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-8April2013-DatabaseTestsandHittingMaster"}),"Database Tests and Hitting Master"),(0,n.kt)("p",null,"While the project works on finalizing 4.1.0, work continues on 4.2.0 and later releases in the master branch. This week there was another breakage in master, ",(0,n.kt)("a",{href:"http://markmail.org/thread/sqxci3hswfmrionn",class:"external-link",rel:"nofollow"},"and a discussion following about database access during tests"),". One proposal was to disable the database before running tests, but this has been challenged as being overly complicated for developers who may be running CloudStack on their test machines and find it inconvenient to disable the db when running tests."),(0,n.kt)("h5",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-8April2013-PreparingtheBoardReport"}),"Preparing the Board Report"),(0,n.kt)("p",null,"As an Incubating project, Apache CloudStack prepared a board report every three months, which would be reviewed by the IPMC and (if approved) sent up to the board as part of the Apache Incubator report."),(0,n.kt)("p",null,"Now that Apache CloudStack is a top-level project (TLP), it prepares its own report for the board. Chip Childers ",(0,n.kt)("a",{href:"http://markmail.org/thread/s7sx3fgfkb6hsbqy",class:"external-link",rel:"nofollow"},"started the discussion on the mailing list")," with a draft of the report."),(0,n.kt)("h5",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-8April2013-AssigningTickets"}),"Assigning Tickets "),(0,n.kt)("p",null,"Noah Slater ",(0,n.kt)("a",{href:"http://markmail.org/message/ngt2o3wqh5fm6n6y",class:"external-link",rel:"nofollow"},"raised an issue")," about ticket assignments:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",null,"Right now, we have people who are regularly going through JIRA and triaging tickets. This is totally fantastic, and a very valuable activity for the project. (So thank you!) But I also notice that specific individuals are being assigned to the tickets in the process."),(0,n.kt)("p",null,'This is a form of "cookie licking". The analogy is that if you fancy a cookie, but you\'re too hungry right now, you take a lick of it so nobody else can touch it. This is an anti-pattern and we should try to avoid it. ')),(0,n.kt)("p",null,"As a result, Noah suggested that we change the way that ticket assignments are handled so that people are taking tickets as they get a chance to work on them, rather than taking tickets that they plan to work on. "),(0,n.kt)("h3",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-8April2013-CloudStackPlanetPostsfromtheCloudStackCommunity"}),"CloudStack Planet - Posts from the CloudStack Community"),(0,n.kt)("ul",null,(0,n.kt)("li",null,'Chip Childers: "',(0,n.kt)("a",{href:"http://www.chipchilders.com/blog/2013/4/4/apache-cloudstack-graduation-news-roundup.html",class:"external-link",rel:"nofollow"},"Apache CloudStack Graduation News Roundup"),'" Chip rounds up some of the reports on the Apache CloudStack graduation.')),(0,n.kt)("h3",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-8April2013-UpcomingEvents"}),"Upcoming Events"),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("b",null,"Open Cloud Challenges")," at the Data Center Expo, Paris, April 10th ",(0,n.kt)("a",{href:"http://www.datacenter-expo.com/info_event/80/cloud-open-source---les-communautes-open-cloud-et-leurs-defis.html",class:"external-link",rel:"nofollow"},"Open Cloud"),"."),(0,n.kt)("li",null,(0,n.kt)("b",null,"Cloud Computing")," at the University of British Columbia (Robson Campus), Vancouver, Canada, April 9th."),(0,n.kt)("li",null,(0,n.kt)("b",null,"CloudStack Introduction and Basics")," - The inaugural meeting of the ",(0,n.kt)("a",{href:"http://meetup.com/CloudStack-NYC-User-Group/",class:"external-link",rel:"nofollow"},"CloudStack NYC User Group")," will be Wednesday, April 10th in New York City. ",(0,n.kt)("a",{href:"http://www.meetup.com/CloudStack-NYC-User-Group/events/106104162/",class:"external-link",rel:"nofollow"},"Sign up on Meetup.com"),"."),(0,n.kt)("li",null,(0,n.kt)("b",null,"UK/European CloudStack user group")," ",(0,n.kt)("a",{href:"http://www.eventbrite.com/event/5816841329/eorg",class:"external-link",rel:"nofollow"},"meet-up")," will be April 11th in London."),(0,n.kt)("li",null,(0,n.kt)("b",null,"Storage in Apache CloudStack")," being held by the ",(0,n.kt)("a",{href:"http://www.meetup.com/CloudStack-SF-Bay-Area-Users-Group/events/108916562/",class:"external-link",rel:"nofollow"},"CloudStack SF Bay Area Users Group")," on April 30, 2013 @ Citrix Conference Center, sign up on the Meetup.com Website."),(0,n.kt)("li",null,(0,n.kt)("b",null,"CloudStack Bangalore Meetup")," Sometime in April, date not yet announced. Watch the ",(0,n.kt)("a",{href:"http://www.meetup.com/CloudStack-Bangalore-Group/events/110900872/",class:"external-link",rel:"nofollow"},"Meetup page for details"),".")),(0,n.kt)("h3",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-8April2013-Jira"}),"Jira"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"Last week: 2 blocker bugs. This week: 2 ",(0,n.kt)("a",{href:"http://is.gd/blockers41acs",class:"external-link",rel:"nofollow"},"blocker bugs"),", only one of which is truly a bug. (The other is a task that must be completed before release.)"),(0,n.kt)("li",null,"Last week: 6 critical bugs. This week: 6 ",(0,n.kt)("a",{href:"http://is.gd/critical41acs",class:"external-link",rel:"nofollow"},"critical bugs")),(0,n.kt)("li",null,"Last week: 122 major bugs. This week: 118 ",(0,n.kt)("a",{href:"http://is.gd/major41acs",class:"external-link",rel:"nofollow"},"major bugs")),(0,n.kt)("li",null,"Last week: 23 minor bugs. This week: 23 ",(0,n.kt)("a",{href:"http://is.gd/minor41acs",class:"external-link",rel:"nofollow"},"minor bugs"))),(0,n.kt)("h3",null,(0,n.kt)("a",{name:"ApacheCloudStackWeeklyNews-8April2013-NewCommittersandPMCMembers"}),"New Committers and PMC Members"),(0,n.kt)("p",null,"No new committers or PMC members were announced this week. To see all current committers and PMC members, see the ",(0,n.kt)("em",null,(0,n.kt)("a",{href:"http://cloudstack.apache.org/who.html",class:"external-link",rel:"nofollow"},"Who We Are"))," page on the Apache CloudStack website."))}p.isMDXComponent=!0}}]);