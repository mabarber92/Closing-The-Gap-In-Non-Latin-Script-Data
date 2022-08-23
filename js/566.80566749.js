"use strict";(self["webpackChunkMLDH"]=self["webpackChunkMLDH"]||[]).push([[566],{9566:function(e,t,l){l.r(t),l.d(t,{default:function(){return Pe}});var a=l(3472),r=l(5971);const o={class:"flex flex-wrap m-5"},s={class:"sticky top-0 stickybox rounded-xl w-full py-2"},n={class:"w-full"},i={class:"w-full text-xl m-2 elementcount"};function c(e,t,l,c,p,d){const u=(0,a.up)("cat-list"),g=(0,a.up)("tag-list"),w=(0,a.up)("project-item");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",s,[(0,a._)("div",n,[(0,a.Wm)(u),(0,a.Wm)(g,{taglist:e.tags},null,8,["taglist"])])]),(0,a._)("div",i,(0,r.zw)(e.projectList.length)+" Elements ",1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.projectList,(e=>((0,a.wg)(),(0,a.j4)(w,{key:e._id,project:e.project,id:e._id,source:e.source,metadata:e.metadata},null,8,["project","id","source","metadata"])))),128))])}var p=l(7755),d=l(5910),u=l(7966),g=l.n(u);const w={class:"md:basis-1/2 lg:basis-1/3"},m={class:"box relative rounded-2xl m-4"},k={class:"content h-auto relative p-4 pb-7 flex flex-wrap md:flex-row"},h={class:"left w-auto"},f={class:"text-left flex flex-wrap p-3 py-0"},v=(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 float-left mr-1",viewBox:"0 0 20 20",fill:"currentColor"},[(0,a._)("path",{"fill-rule":"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z","clip-rule":"evenodd"})],-1),b=["href"],x={key:0},j={class:"mb-3"},_={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 mr-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1"},y=(0,a._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"},null,-1),D=[y],C={key:1},L={key:2,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 m-auto mx-1",viewBox:"0 0 20 20",fill:"currentColor"},H=(0,a._)("path",{"fill-rule":"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z","clip-rule":"evenodd"},null,-1),M=[H],z={key:3},q={class:"flex flex-row ml-3 mb-5 font-light"},B=(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 mr-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1"},[(0,a._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"})],-1),S={class:"text-left w-full p-3 py-0 leading-relaxed antialiased"},Z={class:"tagrow flex flex-wrap p-3 pb-10 mt-5"},Y={class:"footer absolute bottom-0 inset-x-0 rounded-b-2xl h-8 pl-7 flex flex-row"},A={key:0,class:"text-sm bright-text mt-1 absolute right-5"};function K(e,t,l,o,s,n){const i=(0,a.up)("simple-badge"),c=(0,a.up)("tag-bubble"),p=(0,a.up)("link-bubble");return(0,a.wg)(),(0,a.iD)("div",w,[(0,a._)("div",m,[(0,a._)("div",k,[(0,a._)("div",h,[(0,a._)("div",f,[v,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.project.places,((t,l)=>((0,a.wg)(),(0,a.iD)("div",{key:l},[(0,a._)("a",{href:t.place_name.ref[0],target:"_blank"},(0,r.zw)(t.place_name.text),9,b),l<e.project.places.length-1?((0,a.wg)(),(0,a.iD)("span",x,", ")):(0,a.kq)("",!0)])))),128))]),(0,a._)("div",{onClick:t[0]||(t[0]=t=>e.extend=!e.extend),class:"text-3xl text-left p-3 py-5 text-comfortaa leading-normal antialiased"},(0,r.zw)(e.project.title),1),(0,a._)("ul",j,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.project.date,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{key:t,class:"text-left m-3 my-0 flex flex-row font-light"},[e.from||e.to?((0,a.wg)(),(0,a.iD)("svg",_,D)):(0,a.kq)("",!0),e.from?((0,a.wg)(),(0,a.iD)("span",C,(0,r.zw)(new Date(e.from).getFullYear()),1)):(0,a.kq)("",!0),e.from||e.to?((0,a.wg)(),(0,a.iD)("svg",L,M)):(0,a.kq)("",!0),e.to?((0,a.wg)(),(0,a.iD)("span",z,(0,r.zw)(new Date(e.to).getFullYear()),1)):(0,a.kq)("",!0)])))),128))]),(0,a._)("div",q,[B,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.project.lang,((e,t)=>((0,a.wg)(),(0,a.iD)("span",{key:t,class:"mr-2"},(0,r.zw)(e),1)))),128))]),(0,a._)("div",S,(0,r.zw)(e.project.project_desc),1),(0,a._)("div",Z,[e.project.topic_relations.nls?((0,a.wg)(),(0,a.j4)(i,{key:0,label:"Non-Latin Script"})):(0,a.kq)("",!0),e.project.topic_relations.dh?((0,a.wg)(),(0,a.j4)(i,{key:1,label:"Digital Humanities"})):(0,a.kq)("",!0),e.project.topic_relations.rdm?((0,a.wg)(),(0,a.j4)(i,{key:2,label:"Research Data Management"})):(0,a.kq)("",!0),e.project.topic_relations.meta?((0,a.wg)(),(0,a.j4)(i,{key:3,label:"Meta"})):(0,a.kq)("",!0),e.project.topic_relations.infrastructure?((0,a.wg)(),(0,a.j4)(i,{key:4,label:"Infrastructure"})):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.project.keywords,((e,t)=>((0,a.wg)(),(0,a.j4)(c,{key:t,label:e,link:e,target:"tag",small:!0},null,8,["label","link"])))),128))])])]),(0,a._)("div",Y,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.project.websites,((e,t)=>((0,a.wg)(),(0,a.j4)(p,{key:t,href:e,type:"link"},null,8,["href"])))),128)),(0,a.Wm)(p,{href:e.source,type:"git"},null,8,["href"]),e.metadata.record_modified[e.metadata.record_modified.length-1].record_modified_on?((0,a.wg)(),(0,a.iD)("div",A," Last edit: "+(0,r.zw)(e.metadata.record_modified[e.metadata.record_modified.length-1].record_modified_on),1)):(0,a.kq)("",!0)])])])}const T={key:0},P=(0,a._)("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clip-rule":"evenodd"},null,-1),N=[P];function V(e,t,l,o,s,n){const i=(0,a.up)("router-link");return e.link?((0,a.wg)(),(0,a.j4)(i,{key:0,class:(0,r.C_)(["bubble rounded-full pr-4 pl-4 ml-0 mr-2 my-1",e.route.params[e.target]===e.link?"bg-darkblue pr-0 flex flex-row":""]),to:e.targetArr},{default:(0,a.w5)((()=>["tag"===e.target?((0,a.wg)(),(0,a.iD)("span",T,"#")):(0,a.kq)("",!0),(0,a.Uk)((0,r.zw)(e.label)+" ",1),e.route.params[e.target]===e.link?((0,a.wg)(),(0,a.iD)("svg",{key:1,xmlns:"http://www.w3.org/2000/svg",class:(0,r.C_)(["ml-1 m-auto h-5 w-5",e.small?"mr-0":"mr-1"]),viewBox:"0 0 20 20",fill:"currentColor"},N,2)):(0,a.kq)("",!0)])),_:1},8,["class","to"])):(0,a.kq)("",!0)}var $=(0,a.aZ)({components:{},props:{label:String,link:String,small:Boolean,target:String},setup(e){const t=(new Date).getTime(),l=(0,a.f3)("rtlCharset").test(e.label),r=(0,d.yj)(),o=(0,a.Fl)((()=>{switch(e.target){case"tag":return{name:"projectsFiltered",params:{tag:r.params.tag===e.link?"":e.link}};case"cat":return{name:"projectCategories",params:{cat:r.params.cat===e.link?"":e.link}};default:return{}}}));return{isArabic:l,now:t,route:r,targetArr:o}}}),F=l(5899);const G=(0,F.Z)($,[["render",V]]);var O=G;const I={class:"icon rounded-full w-8 h-8 border-2 mr-1"},R=["href"],U={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 icon-text m-auto mt-1",viewBox:"0 0 20 20",fill:"currentColor"},W=(0,a._)("path",{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"},null,-1),E=(0,a._)("path",{d:"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"},null,-1),J=[W,E],Q={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 icon-text m-auto mt-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},X=(0,a._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"},null,-1),ee=[X];function te(e,t,l,r,o,s){return(0,a.wg)(),(0,a.iD)("div",I,[(0,a._)("a",{href:e.href,target:"_blank"},["link"===e.type?((0,a.wg)(),(0,a.iD)("svg",U,J)):(0,a.kq)("",!0),"git"===e.type?((0,a.wg)(),(0,a.iD)("svg",Q,ee)):(0,a.kq)("",!0)],8,R)])}var le=(0,a.aZ)({components:{},props:{href:String,type:String},setup(e){const t=(new Date).getTime(),l=(0,a.f3)("rtlCharset").test(e.label);return{isArabic:l,now:t}}});const ae=(0,F.Z)(le,[["render",te]]);var re=ae;const oe={class:"bubble bg-brightblue rounded-full px-4 ml-0 mr-2 my-1"};function se(e,t,l,o,s,n){return(0,a.wg)(),(0,a.iD)("div",oe,(0,r.zw)(e.label),1)}var ne=(0,a.aZ)({components:{},props:{label:String,link:String},setup(e){const t=(new Date).getTime(),l=(0,a.f3)("rtlCharset").test(e.label);return{isArabic:l,now:t}}});const ie=(0,F.Z)(ne,[["render",se]]);var ce=ie,pe=(0,a.aZ)({components:{TagBubble:O,LinkBubble:re,SimpleBadge:ce},props:{project:Object,id:String,source:String,metadata:Object},setup(e){const t=(0,p.iH)();t.value=!1;const l=(new Date).getTime(),r=(0,a.f3)("rtlCharset").test(e.label);return(0,a.YP)(t,(e=>{console.log(e)})),{isArabic:r,now:l,extend:t}}});const de=(0,F.Z)(pe,[["render",K]]);var ue=de;const ge={class:"w-auto mx-4"},we={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 float-right ml-2",viewBox:"-2 -2 18 18",fill:"currentColor"},me=(0,a._)("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"},null,-1),ke=[me],he={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 float-right ml-2",viewBox:"-2 -2 18 18",stroke:"currentColor"},fe=(0,a._)("path",{"fill-rule":"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z","clip-rule":"evenodd"},null,-1),ve=[fe],be={key:0,class:"tag-container flex flex-wrap text-sm rounded-b-xl p-3 mt-0"};function xe(e,t,l,o,s,n){const i=(0,a.up)("tag-bubble");return(0,a.wg)(),(0,a.iD)("div",ge,[(0,a._)("div",{class:(0,r.C_)(["tag-container rounded-t-xl pointer px-5 py-2 mb-0",e.collapsed?"rounded-b-xl":""]),onClick:t[0]||(t[0]=t=>e.collapsed=!e.collapsed)},[(0,a.Uk)((0,r.zw)(e.collapse_btn)+" ",1),e.collapsed?((0,a.wg)(),(0,a.iD)("svg",we,ke)):(0,a.kq)("",!0),e.collapsed?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("svg",he,ve))],2),e.collapsed?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",be,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.taglist,((e,t)=>((0,a.wg)(),(0,a.j4)(i,{key:t,label:e,link:e,target:"tag",small:!0},null,8,["label","link"])))),128))]))])}var je=(0,a.aZ)({components:{TagBubble:O},props:{taglist:Array},setup(){const e=(0,p.iH)("List of Keywords"),t=(0,d.yj)();let l=(0,p.iH)(!t.params.tag||""==t.params.tag);return{collapse_btn:e,collapsed:l}}});const _e=(0,F.Z)(je,[["render",xe]]);var ye=_e;const De={class:"w-auto mx-4 mb-2"},Ce={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 float-right ml-2",viewBox:"-2 -2 18 18",fill:"currentColor"},Le=(0,a._)("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"},null,-1),He=[Le],Me={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 float-right ml-2",viewBox:"-2 -2 18 18",stroke:"currentColor"},ze=(0,a._)("path",{"fill-rule":"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z","clip-rule":"evenodd"},null,-1),qe=[ze],Be={key:0,class:"tag-container flex flex-wrap text-sm rounded-b-xl p-3 mt-0"};function Se(e,t,l,o,s,n){const i=(0,a.up)("tag-bubble");return(0,a.wg)(),(0,a.iD)("div",De,[(0,a._)("div",{class:(0,r.C_)(["tag-container rounded-t-xl pointer px-5 py-2 mb-0",e.collapsed?"rounded-b-xl":""]),onClick:t[0]||(t[0]=t=>e.collapsed=!e.collapsed)},[(0,a.Uk)((0,r.zw)(e.collapse_btn)+" ",1),e.collapsed?((0,a.wg)(),(0,a.iD)("svg",Ce,He)):(0,a.kq)("",!0),e.collapsed?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("svg",Me,qe))],2),e.collapsed?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",Be,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.categories,((e,t)=>((0,a.wg)(),(0,a.j4)(i,{key:t,label:e.label,link:e.link,target:"cat",small:!0},null,8,["label","link"])))),128))]))])}var Ze=(0,a.aZ)({components:{TagBubble:O},props:{taglist:Array},setup(){const e=(0,p.iH)("Categories"),t=(0,d.yj)();let l=(0,p.iH)(!t.params.cat||""==t.params.cat);const a=(0,p.iH)([{label:"Digital Humanities",link:"dh"},{label:"Non-Latin Script",link:"nls"},{label:"Research Data Management",link:"rdm"},{label:"Infrastructure",link:"infrastructure"},{label:"Meta",link:"meta"}]);return{collapse_btn:e,collapsed:l,categories:a}}});const Ye=(0,F.Z)(Ze,[["render",Se]]);var Ae=Ye,Ke=(0,a.aZ)({components:{projectItem:ue,tagList:ye,catList:Ae},setup(){const e=(0,p.iH)([]),t=(0,p.iH)([]),l=(0,d.yj)(),r=()=>{t.value=[],e.value=[]},o=()=>{g().get("https://raw.githubusercontent.com/Closing-the-Gap-in-NLS-DH/Projects/master/PROJECTS.json").then((a=>{Object.keys(a.data).map((r=>(g().get(`https://raw.githubusercontent.com/Closing-the-Gap-in-NLS-DH/Projects/master${a.data[r].path}${r}.json`).then((o=>(l.params.tag&&o.data.project.keywords.includes(l.params.tag)||l.params.cat&&o.data.project.topic_relations[l.params.cat]?(e.value.push({_id:r,metadata:o.data.record_metadata,project:o.data.project,source:`https://github.com/Closing-the-Gap-in-NLS-DH/Projects/blob/master${a.data[r].path}${r}.json`}),o.data.project.keywords.map((e=>{t.value.includes(e)||t.value.push(e)})),e.value.sort(((e,t)=>e.project.title.toLowerCase()>t.project.title.toLowerCase()?1:e.project.title.toLowerCase()<t.project.title.toLowerCase()?-1:0))):l.params.tag||l.params.cat||(e.value.push({_id:r,metadata:o.data.record_metadata,project:o.data.project,source:`https://github.com/Closing-the-Gap-in-NLS-DH/Projects/blob/master${a.data[r].path}${r}.json`}),o.data.project.keywords.map((e=>{t.value.includes(e)||t.value.push(e)})),e.value.sort(((e,t)=>e.project.title.toLowerCase()>t.project.title.toLowerCase()?1:e.project.title.toLowerCase()<t.project.title.toLowerCase()?-1:0))),null))),null)))})).then((()=>{console.log("finished"),console.log(t.value)}))};return(0,a.m0)((()=>{o()})),(0,a.YP)(l,(e=>{e.hash||(r(),o())})),{projectList:e,tags:t}}});const Te=(0,F.Z)(Ke,[["render",c]]);var Pe=Te}}]);
//# sourceMappingURL=566.80566749.js.map