import{_ as l,o,c as d,b as e,t as c,n as g,u as p,F as h,r as u,e as r,f as m,p as b,g as v,d as f}from"./app.f04210d6.js";const k="/assets/cover-my-docs.40e57e37.png",y="/assets/cover-this-blog.9b5fb2eb.png",x="/assets/hate.5a163641.gif",w="/assets/hypo.abdc9ce8.gif",D="/assets/logo-picasso1.7b3604cb.png";const I={props:{post:{type:Object},isDark:{type:Boolean}},methods:{clickMethod(s){window.location.assign(s)},getImgUrl(s){return s.includes("http")?s:new URL(Object.assign({"../../learning/assets/docs/cover-my-docs.png":k,"../../learning/assets/docs/cover-this-blog.png":y,"../../learning/assets/docs/hate.gif":x,"../../learning/assets/docs/hypo.gif":w,"../../learning/assets/logo-picasso1.png":D})[`../../learning/assets/${s}`],self.location).href}},computed:{cssVars(){return{"--box-shadow":this.isDark?"#525252":"#cee1ce","--hover-background":this.isDark?"#525252":"#f1f3f3"}}}},S={class:"card__header"},A=["src"],B={class:"card__body"};function L(s,a,t,_,i,n){return o(),d("div",{class:"card",style:g(n.cssVars),onClick:a[0]||(a[0]=F=>n.clickMethod(t.post.link))},[e("div",S,[e("img",{src:n.getImgUrl(t.post.image),alt:"card__image"},null,8,A)]),e("div",B,[e("h3",null,c(t.post.title),1),e("p",null,c(t.post.description),1),e("small",null,c(t.post.date),1)])],4)}const O=l(I,[["render",L],["__scopeId","data-v-148ec488"]]),V=[{image:"docs/cover-my-docs.png",title:"Documentation Tips",description:"A quick page on writing tips, as well as tools used.",date:"03/01/2023",link:"./docs/my-docs"},{image:"docs/cover-this-blog.png",title:"How I created this awesome blog!",description:"A step by step of how this blog was made and published.",date:"28/12/2022",link:"./docs/this-blog"},{image:"logo-picasso1.png",title:"What is this??",description:"A random card to make it look like I did something!",date:"28/12/2022",link:"./index"}];const j=s=>(b("data-v-c269d4a4"),s=s(),v(),s),C=j(()=>e("h1",{id:"latest-additions",tabindex:"-1"},[f("Latest Additions "),e("a",{class:"header-anchor",href:"#latest-additions","aria-hidden":"true"},"#")],-1)),N={class:"container"},T=JSON.parse('{"title":"Latest Additions","description":"","frontmatter":{},"headers":[],"relativePath":"learning/index.md"}'),P={name:"learning/index.md"},U=Object.assign(P,{setup(s){const{isDark:a}=p();return(t,_)=>(o(),d("div",null,[C,e("div",N,[(o(!0),d(h,null,u(r(V),i=>(o(),m(O,{key:i.name,post:i,isDark:r(a)},null,8,["post","isDark"]))),128))])]))}}),q=l(U,[["__scopeId","data-v-c269d4a4"]]);export{T as __pageData,q as default};
