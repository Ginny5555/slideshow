(function(){"use strict";var e={6213:function(e,n,t){var o=t(9963),i=t(6252);function r(e,n){const t=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(t)}var s=t(3744);const l={},c=(0,s.Z)(l,[["render",r]]);var a=c,d=t(5205);(0,d.z)("/slideshow/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var u=t(2201),p=t.p+"img/logo.8a11737a.webp";const f=e=>((0,i.dD)("data-v-5f0c5cfa"),e=e(),(0,i.Cn)(),e),v={class:"home"},h=f((()=>(0,i._)("div",{class:"home-header container"},[(0,i._)("img",{alt:"Vue logo",src:p}),(0,i._)("h1",null,"Carousele")],-1)));function g(e,n,t,o,r,s){const l=(0,i.up)("HelloWorld");return(0,i.wg)(),(0,i.iD)("div",v,[h,(0,i.Wm)(l)])}var m=t(3577);const w={class:""},k={class:"hello container"},b={class:"slider-container"},y=["onClickOnce","onClick"],S=["src"];function O(e,n,t,r,s,l){return(0,i.wg)(),(0,i.iD)("div",w,[(0,i._)("div",k,[(0,i._)("span",{onClick:n[0]||(n[0]=(...e)=>l.prevSlide&&l.prevSlide(...e)),class:"lightgrey prev"},"◄"),(0,i._)("div",b,[s.posts&&s.posts.length?((0,i.wg)(),(0,i.iD)("ul",{key:0,class:"slider",style:(0,m.j5)(l.styleObject)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.posts,(e=>((0,i.wg)(),(0,i.iD)("li",{class:"green slide",key:e},[(0,i._)("div",null,[(0,i._)("div",{onClickOnce:(0,o.iM)((n=>l.onSelect(e)),["exact"]),onClick:(0,o.iM)((n=>l.onDel(e)),["exact","ctrl"])},[(0,i._)("img",{src:e.download_url,alt:""},null,8,S)],40,y)])])))),128))],4)):(0,i.kq)("",!0)]),(0,i._)("span",{onClick:n[1]||(n[1]=(...e)=>l.nextSlide&&l.nextSlide(...e)),class:"lightgrey next"},"►")]),(0,i._)("ul",null,[(0,i._)("h2",{onClick:n[2]||(n[2]=n=>l.onDel(e.post))},"Click on the link to delete"),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.clickedItems,((e,n)=>((0,i.wg)(),(0,i.iD)("li",{key:n,class:"fade-in"},[(0,i._)("p",null,(0,m.zw)(e.url),1)])))),128))])])}t(7658);var _=t(6154),C={name:"HelloWorld",data(){return{posts:"",slides:100,active:0,activeSlide:1,clickedItems:[]}},created(){_.Z.get("https://picsum.photos/v2/list?page=2&limit=15").then((e=>{this.posts=e.data.map((e=>({...e}))),console.log(this.posts)}))},computed:{styleObject:function(){const e=2-230*(this.activeSlide-0);return{transform:"translateX("+e+"px)"}}},methods:{changeSlide(e){this.activeSlide=e+1},nextSlide(){this.activeSlide<10&&this.activeSlide++},prevSlide(){this.activeSlide>0&&this.activeSlide--},onSelect(e){this.clickedItems.push(e),JSON.stringify(this.clickedItems),console.log(this.clickedItems.toString())},onDel(e){this.clickedItems.pop(e)}}};const j=(0,s.Z)(C,[["render",O]]);var x=j,D={name:"HomeView",components:{HelloWorld:x}};const I=(0,s.Z)(D,[["render",g],["__scopeId","data-v-5f0c5cfa"]]);var H=I;const N=[{path:"/",name:"home",component:H}],W=(0,u.p7)({history:(0,u.r5)(),routes:N});var Z=W,A=t(3907),F=(0,A.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(a).use(F).use(Z).mount("#app")}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={exports:{}};return e[o](r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,o,i,r){if(!o){var s=1/0;for(d=0;d<e.length;d++){o=e[d][0],i=e[d][1],r=e[d][2];for(var l=!0,c=0;c<o.length;c++)(!1&r||s>=r)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(l=!1,r<s&&(s=r));if(l){e.splice(d--,1);var a=i();void 0!==a&&(n=a)}}return n}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[o,i,r]}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p="/slideshow/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var i,r,s=o[0],l=o[1],c=o[2],a=0;if(s.some((function(n){return 0!==e[n]}))){for(i in l)t.o(l,i)&&(t.m[i]=l[i]);if(c)var d=c(t)}for(n&&n(o);a<s.length;a++)r=s[a],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(d)},o=self["webpackChunkslider"]=self["webpackChunkslider"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(6213)}));o=t.O(o)})();
//# sourceMappingURL=app.0d85f932.js.map