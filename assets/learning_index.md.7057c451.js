import{_,o,c,b as s,t as n,F as l,r,u as g,e as p,p as h,f as u,d as m}from"./app.3556b385.js";const b="/assets/cover-my-docs.40e57e37.png",f="/assets/cover-this-blog.9b5fb2eb.png",v="/assets/hate.5a163641.gif",k="/assets/hypo.abdc9ce8.gif",y="/assets/logo-picasso1.7b3604cb.png";const x={props:{post:{type:Object}},methods:{clickMethod(e){window.location.assign(e)},getImgUrl(e){return e.includes("http")?e:new URL(Object.assign({"../../learning/assets/docs/cover-my-docs.png":b,"../../learning/assets/docs/cover-this-blog.png":f,"../../learning/assets/docs/hate.gif":v,"../../learning/assets/docs/hypo.gif":k,"../../learning/assets/logo-picasso1.png":y})[`../../learning/assets/${e}`],self.location).href}}},w={class:"card__header"},I=["src"],A={class:"card__body"};function S(e,a,t,i,P,d){return o(),c("div",{class:"card",onClick:a[0]||(a[0]=U=>d.clickMethod(t.post.link))},[s("div",w,[s("img",{src:d.getImgUrl(t.post.image),alt:"card__image"},null,8,I)]),s("div",A,[s("h3",null,n(t.post.title),1),s("p",null,n(t.post.description),1),s("small",null,n(t.post.date),1)])])}const B=_(x,[["render",S],["__scopeId","data-v-bf37ebc8"]]),L=[{image:"docs/cover-my-docs.png",title:"Documentation Tips",description:"A quick page on writing tips, as well as tools used.",date:"03/01/2023",link:"./docs/my-docs"},{image:"docs/cover-this-blog.png",title:"How I created this awesome blog!",description:"A step by step of how this blog was made and published.",date:"28/12/2022",link:"./docs/this-blog"},{image:"logo-picasso1.png",title:"What is this??",description:"A random card to make it look like I did something!",date:"28/12/2022",link:"./index"}];const O=e=>(h("data-v-f8193625"),e=e(),u(),e),j=O(()=>s("h1",{id:"latest-additions",tabindex:"-1"},[m("Latest Additions "),s("a",{class:"header-anchor",href:"#latest-additions","aria-hidden":"true"},"#")],-1)),C={class:"container"},M=JSON.parse('{"title":"Latest Additions","description":"","frontmatter":{},"headers":[],"relativePath":"learning/index.md"}'),D={name:"learning/index.md"},N=Object.assign(D,{setup(e){return(a,t)=>(o(),c("div",null,[j,s("div",C,[(o(!0),c(l,null,r(g(L),i=>(o(),p(B,{key:i.name,post:i},null,8,["post"]))),128))])]))}}),T=_(N,[["__scopeId","data-v-f8193625"]]);export{M as __pageData,T as default};
