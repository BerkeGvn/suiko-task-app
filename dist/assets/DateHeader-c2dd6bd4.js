import{_,c as l,b as p,e as i,h as t,t as s,u as o,z as m,A as y}from"./index-2f4f0047.js";const u={class:"date"},h={class:"sub-date"},g={__name:"DateHeader",props:["date","today"],setup(d){const e=d,a=l(()=>{const n=e.date.toLocaleString("en-GB",{day:"numeric"}),c=e.date.toLocaleString("en-GB",{weekday:"long"}),r=e.date.toLocaleString("en-GB",{month:"long"});return{day:n,dayName:c,month:r}});return(n,c)=>(p(),i("div",u,[t("h1",{class:m({today:e.today})},s(o(a).day),3),t("h2",h,[y(s(o(a).month)+" ",1),t("span",null,s(o(a).dayName),1)])]))}},D=_(g,[["__scopeId","data-v-be187890"]]);export{D};
