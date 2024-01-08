"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5849],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=l.createContext({}),u=function(e){var t=l.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return l.createElement(i.Provider,{value:t},e.children)},h="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),h=u(a),d=n,p=h["".concat(i,".").concat(d)]||h[d]||k[d]||o;return a?l.createElement(p,s(s({ref:t},c),{},{components:a})):l.createElement(p,s({ref:t},c))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[h]="string"==typeof e?e:n,s[1]=r;for(var u=2;u<o;u++)s[u]=a[u];return l.createElement.apply(null,s)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},80981:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var l=a(87462),n=(a(67294),a(3905));const o={layout:"post",title:"Apache Cloudstack Weekly News - 25 February 2013",slug:"apache_cloudstack_weekly_news_25"},s=void 0,r={permalink:"/blog/apache_cloudstack_weekly_news_25",source:"@site/blog/2013-02-26-apache_cloudstack_weekly_news_25.md",title:"Apache Cloudstack Weekly News - 25 February 2013",description:"This week, interesting discussions on the Java version(s) to be supported by CloudStack, updates on translation, and database changes. Also discussion on the next CloudStack Collaboration Conference, and more. Work on 4.1.0 continues, and there's much to be done before it's ready to ship.",date:"2013-02-26T00:00:00.000Z",formattedDate:"February 26, 2013",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Apache Cloudstack Weekly News - 25 February 2013",slug:"apache_cloudstack_weekly_news_25"},prevItem:{title:"Apache CloudStack Weekly News - 4 March 2013",permalink:"/blog/apache_cloudstack_weekly_news_41"},nextItem:{title:"Apache CloudStack Weekly News - 18 February 2013",permalink:"/blog/apache_cloudstack_weekly_news_18"}},i={authorsImageUrls:[]},u=[],c={toc:u},h="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This week, interesting discussions on the Java version(s) to be supported by CloudStack, updates on translation, and database changes. Also discussion on the next CloudStack Collaboration Conference, and more. Work on 4.1.0 continues, and there's much to be done before it's ready to ship."),(0,n.kt)("h3",null,(0,n.kt)("a",{name:"ApacheCloudstackWeeklyNews-25February2013-MajorDiscussionsandIssues"}),"Major Discussions and Issues"),(0,n.kt)("p",null,"Some of the major discussions and issues that have taken place on cloudstack-dev and cloudstack-users in the past week. This is by no means exhaustive, if you need to be up-to-date on all development issues in the project, you'll definitely want to be subscribed to the mailing lists!"),(0,n.kt)("h5",null,(0,n.kt)("a",{name:"ApacheCloudstackWeeklyNews-25February2013-ScheduleReminder"}),"Schedule Reminder"),(0,n.kt)("p",null,"Chip Childers has sent out a ",(0,n.kt)("a",{href:"http://markmail.org/message/z37xsunbtikzukzl",class:"external-link",rel:"nofollow"},"friendly reminder")," about the schedule: "),(0,n.kt)("blockquote",null,(0,n.kt)("p",null," Thursday is the last day of this",(0,n.kt)("br",null),"phase of QA / bug-fix work.  We defined it as:"),(0,n.kt)("p",null,"2013-02-28",(0,n.kt)("br",null),"Docs Completion Target (except release notes and translations) (Docs",(0,n.kt)("br",null),"may be included in the release after this date, after consensus on",(0,n.kt)("br",null),"each addition that the inclusion does not reduce release quality)."),(0,n.kt)("p",null,"  Release Branch moves to limited updates only (only commits allowed",(0,n.kt)("br",null),"in would be release blockers fixes, translation updates, etc...)"),(0,n.kt)("p",null,"I'd like to get as many bugs resolved as possible (as well as ensure",(0,n.kt)("br",null),"that the blockers that Sudha has shared this morning are addressed as",(0,n.kt)("br",null),"quickly as possible)."),(0,n.kt)("p",null,"After Thursday, we're going to want to move to a very limited amount of",(0,n.kt)("br",null),"change within the 4.1 branch.  Given that, now's the time to knock down",(0,n.kt)("br",null),"the blockers...  but also as many of the other priority bugs as",(0,n.kt)("br",null),"possible.")),(0,n.kt)("p",null,"If you have 4.1 bugs on your plate, please be sure to try to either resolve them or at least triage/report status. "),(0,n.kt)("h5",null,(0,n.kt)("a",{name:"ApacheCloudstackWeeklyNews-25February2013-CloudStackCollaborationSummit"}),"CloudStack Collaboration Summit"),(0,n.kt)("p",null,"Mark Hinkle ",(0,n.kt)("a",{href:"http://markmail.org/message/flbkomj6mvgvfsdx",class:"external-link",rel:"nofollow"},"started a discussion about the next CloudStack Collaboration Conference"),", offering to work on a proposal for an event in the spring and fall. Lots of folks have expressed interest, and suggested holding the spring event in Europe rather than North America. The discussion hasn't been resolved yet, so no dates or location have been announced as of yet. "),(0,n.kt)("h5",null,(0,n.kt)("a",{name:"ApacheCloudstackWeeklyNews-25February2013-QAScrumMeetingMinutes"}),"QA Scrum Meeting Minutes"),(0,n.kt)("p",null,(0,n.kt)("a",{href:"/confluence/display/CLOUDSTACK/Minutes+18th+Feb+2013",title:"Minutes 18th Feb 2013"},"The QA Scrum meeting minutes for 18 February 2013")," sent to the mailing list."),(0,n.kt)("h5",null,(0,n.kt)("a",{name:"ApacheCloudstackWeeklyNews-25February2013-WeeklyIRCMeetingMinutes"}),"Weekly IRC Meeting Minutes"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{href:"http://markmail.org/message/s5dg4bwzlpk7rt4z",class:"external-link",rel:"nofollow"},"minutes for the weekly CloudStack meeting")," have been posted to the list. Note that the community has a weekly meeting every Wednesday at 17:00 UTC in #cloudstack-meeting on Freenode."),(0,n.kt)("h5",null,(0,n.kt)("a",{name:"ApacheCloudstackWeeklyNews-25February2013-SupportedJavaVersion%3F"}),"Supported Java Version?"),(0,n.kt)("p",null,"Wido den Hollander noted that ",(0,n.kt)("a",{href:"http://markmail.org/message/sryxuq6ks7ukpkp6",class:"external-link",rel:"nofollow"},"the master branch wouldn't build on his systems")," over the last few days. The culprit? Seems to be that some changes have snuck in that want a later version of Java than is in Ubuntu 12.04."),(0,n.kt)("p",null,"No decision has been reached so far, but there is a case to be made that changing the Java version is a significant disruption to users."),(0,n.kt)("h5",null,(0,n.kt)("a",{name:"ApacheCloudstackWeeklyNews-25February2013-TranslationUpdate"}),"Translation Update"),(0,n.kt)("p",null,"Sebastien Goasguen has sent out an ",(0,n.kt)("a",{href:"http://markmail.org/message/wnkzas5bnd4t3fn6",class:"external-link",rel:"nofollow"},"update")),(0,n.kt)("h5",null,(0,n.kt)("a",{name:"ApacheCloudstackWeeklyNews-25February2013-DiscussiononDatabaseChanges"}),"Discussion on Database Changes"),(0,n.kt)("p",null,"Last week Rohit Yadav ",(0,n.kt)("a",{href:"https://www.youtube.com/watch?v=Xp2AGii1szQ",class:"external-link",rel:"nofollow"},"had a Google+ hangout with Alex and Abhi")," to discuss future of database deployment and upcoming work on creating a new tool called DatabaseCreator that will make database deployments easier. It was decided and enforced on 4.1 and master branch that:"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"create-schema.sql ought not be changed from the version 4.0 schema"),(0,n.kt)("li",null,"Any new additions should go into their correct upgrade paths, for 4.2 that would mean schema-410to420.sql and schema-410to420-cleanup.sql"),(0,n.kt)("li",null,"It would do rolling upgrade from 4.0, this was enforced in DatabaseUpgradeChecker")),(0,n.kt)("p",null,"Once DatabaseCreator is implemented correctly for 4.2 release, a sysadmin will have power to work on their own upgrade strategies. The workflow would be:"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"System admin uses the tool to take a db dump, upgrade the database, at this stage the new database should be backward compatible with old db."),(0,n.kt)("li",null,"Next all CloudStack management servers are upgraded."),(0,n.kt)("li",null,"The tool is called again to do sanity checks and cleanup any db schema.")),(0,n.kt)("h5",null,(0,n.kt)("a",{name:"ApacheCloudstackWeeklyNews-25February2013-DevelopmentonDIYSystemVMtemplates"}),"Development on DIY SystemVM templates"),(0,n.kt)("p",null,"This week ",(0,n.kt)("a",{href:"http://markmail.org/message/znflttrdsv3gtoh4",class:"external-link",rel:"nofollow"},"Rohit Yadav and Chiradeep")," were finally able to configure a veewee project so systemvm template can be built on one's own box using veewee and VirtualBox, Rohit also created a systemvm building jenkins job. The source code exists in tools/appliance and has a README for folks to get started. The default template is based on Debian Wheezy but anyone can change the definition.rb, preseed.cfg and postinstall.sh script to fork their own systemvm templates based on Ubuntu, Fedora etc."),(0,n.kt)("p",null,"Rohit shared a ",(0,n.kt)("a",{href:"http://rohityadav.in/logs/building-systemvms/",class:"external-link",rel:"nofollow"},"post")," with the issues and challenges of setting an ",(0,n.kt)("a",{href:"http://jenkins.cloudstack.org/view/master/job/build-systemvm-master/",class:"external-link",rel:"nofollow"},"automated jenkins build job")," that would create systemvm appliances and export them to various virtual disk image formats. Using his approach anyone should be able to replicate an automated appliance build job."),(0,n.kt)("h3",null,(0,n.kt)("a",{name:"ApacheCloudstackWeeklyNews-25February2013-UpcomingEvents"}),"Upcoming Events"),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("b",null,"ApacheCon North America"),": ApacheCon NA is in Portland, Oregon from 26 February to 28 February. Cloud is a hot topic at ApacheCon North America and you'll find quite a bit of CloudStack content on the schedule:",(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"http://na.apachecon.com/schedule/presentation/126/",class:"external-link",rel:"nofollow"},"Apache CloudStack's Plugin Model: Balancing the Cathedral with a Bazaar")," - Donal Lafferty"),(0,n.kt)("li",null,(0,n.kt)("a",{href:"http://na.apachecon.com/schedule/presentation/127/",class:"external-link",rel:"nofollow"},"Top 10 Network Issues in Apache CloudStack")," - Kirk Kosinski"),(0,n.kt)("li",null,(0,n.kt)("a",{href:"http://na.apachecon.com/schedule/presentation/128/",class:"external-link",rel:"nofollow"},"Advanced CloudStack Troubleshooting using Log Analysis")," - Kirk Kosinski"),(0,n.kt)("li",null,(0,n.kt)("a",{href:"http://na.apachecon.com/schedule/presentation/129/",class:"external-link",rel:"nofollow"},"Scalable Object Storage with Apache CloudStack and Apache Hadoop")," - Chiradeep Vittal"),(0,n.kt)("li",null,(0,n.kt)("a",{href:"http://na.apachecon.com/schedule/presentation/116/",class:"external-link",rel:"nofollow"},"Getting to Know Apache CloudStack")," - Joe Brockmeier"),(0,n.kt)("li",null,(0,n.kt)("a",{href:"http://na.apachecon.com/schedule/presentation/145/",class:"external-link",rel:"nofollow"},"DevCloud: A CloudStack Sandbox")," - Sebastien Goasguen"),(0,n.kt)("li",null,(0,n.kt)("a",{href:"http://na.apachecon.com/schedule/presentation/146/",class:"external-link",rel:"nofollow"},"Powering CloudStack with Ceph RDB")," - Patrick McGarry"),(0,n.kt)("li",null,(0,n.kt)("a",{href:"http://na.apachecon.com/schedule/presentation/147/",class:"external-link",rel:"nofollow"},"Software Defined Networking in Apache CloudStack")," - Chiradeep Vittal")))),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("b",null,"New York City Cloud Computing Group"),": ",(0,n.kt)("a",{href:"http://www.meetup.com/nyccloudcomputing/events/104771232/",class:"external-link",rel:"nofollow"},"Deploying Apache CloudStack from API to UI")," - New York City, Wednesday March 13, 2013.")),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("b",null,"NYLUG Meetup"),": ",(0,n.kt)("a",{href:"http://www.meetup.com/nylug-meetings/events/82181872/",class:"external-link",rel:"nofollow"},(0,n.kt)("em",null,"Open Source Private Clouds with CloudStack, Eucalyptus and OpenStack"))," - New York City, Thursday March 14, 2013. RSVPs open on February 28th at 6:15 p.m. Eastern.")),(0,n.kt)("h3",null,(0,n.kt)("a",{name:"ApacheCloudstackWeeklyNews-25February2013-Jira"}),"Jira"),(0,n.kt)("p",null,"The count of bugs for 4.1.0 has actually increased since last week. The overall tally of blocker and critical bugs has increased, with two additional blocker bugs and four more critical bugs (though perhaps not the ",(0,n.kt)("b",null,"same")," bugs as last week). A lot of work is needed to get 4.1.0 into shape before we will be able to release."),(0,n.kt)("ul",null,(0,n.kt)("li",null,"Last week: 7 blocker bugs. This week: 9 ",(0,n.kt)("a",{href:"http://is.gd/blockers41acs",class:"external-link",rel:"nofollow"},"blocker bugs")),(0,n.kt)("li",null,"Last week: 17 critical bugs. This week: 21 ",(0,n.kt)("a",{href:"http://is.gd/critical41acs",class:"external-link",rel:"nofollow"},"critical bugs")),(0,n.kt)("li",null,"Last week: 202 major bugs. This week: 200 ",(0,n.kt)("a",{href:"http://is.gd/major41acs",class:"external-link",rel:"nofollow"},"major bugs")),(0,n.kt)("li",null,"Last week: 34 minor bugs. This week: 33 ",(0,n.kt)("a",{href:"http://is.gd/minor41acs",class:"external-link",rel:"nofollow"},"minor bugs"))),(0,n.kt)("p",null,"Of the remaining bugs for 4.1.0, 99 are ",(0,n.kt)("a",{href:"http://is.gd/unassigned41acs",class:"external-link",rel:"nofollow"},"currently unassigned"),"."),(0,n.kt)("h3",null,(0,n.kt)("a",{name:"ApacheCloudstackWeeklyNews-25February2013-NewCommittersandPPMCMembers"}),"New Committers and PPMC Members"),(0,n.kt)("p",null,"No new committers or PPMC members announced this week."),(0,n.kt)("h3",null,(0,n.kt)("a",{name:"ApacheCloudstackWeeklyNews-25February2013-ContributingtotheApacheCloudStackWeeklyNews"}),"Contributing to the Apache CloudStack Weekly News"),(0,n.kt)("p",null,"If you have an event, discussion, or other item to contribute to the ",(0,n.kt)("em",null,"Weekly News"),", you can add it directly to the ",(0,n.kt)("a",{href:"https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+Weekly+News",class:"external-link",rel:"nofollow"},"wiki")," by editing the issue you want your item to appear in. (The next week's issue is created before the current issue is published - so at any time there should be at least one issue ready to edit.) Alternatively, you can send to the cloudstack-dev mailing list with a subject including ",(0,n.kt)("a",{href:"",title:"News"},"News"),": ",(0,n.kt)("em",null,"description of topic")," or email the newsletter editor directly (jzb at apache.org), again with the subject ",(0,n.kt)("a",{href:"",title:"News"},"News"),": ",(0,n.kt)("em",null,"description of topic"),". ",(0,n.kt)("b",null,"Please include a link to the discussion in the mailing list archive or Web page with details of the event, etc.")," "))}k.isMDXComponent=!0}}]);