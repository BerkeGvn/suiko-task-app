import{D}from"./DateHeader-c2dd6bd4.js";import{_ as m,r as v,b as u,e as g,f,h as a,t as p,p as y,i as w,c as h,w as x,n as b,u as _,F as $,j as S,k as G,v as L,l as T,m as B}from"./index-2f4f0047.js";import{T as I}from"./TaskList-9e1e8184.js";const H={__name:"HomeCalendar",setup(o){const t=v(new Date);return(d,e)=>(u(),g("header",null,[f(D,{date:t.value,today:!0},null,8,["date"])]))}},N=m(H,[["__scopeId","data-v-4332b858"]]),C="/suiko-task-app/assets/greet-f1e48a48.png";const V=o=>(y("data-v-619b35f2"),o=o(),w(),o),j={class:"greet"},F={class:"greet-text"},P=V(()=>a("img",{src:C,alt:"a person waving from a window",draggable:"false"},null,-1)),W={__name:"HomeGreet",setup(o){const t=v(""),e=new Date().getHours();return e>=6&&e<12?t.value={header:"Good Morning!",text:"Are you ready for today?"}:e>=12&&e<18?t.value={header:"Good Afternoon!",text:"How is your day going?"}:e>=18&&e<=23?t.value={header:"Good Evening!",text:"Today is almost over"}:t.value={header:"Good Night!",text:"Have a good sleep!"},(l,i)=>(u(),g("div",j,[a("div",F,[a("p",null,p(t.value.header),1),a("span",null,p(t.value.text),1)]),P]))}},A=m(W,[["__scopeId","data-v-619b35f2"]]);const E=o=>(y("data-v-6f070c0c"),o=o(),w(),o),M={class:"progress"},Y={class:"progress-cirlce"},z={class:"progress-cirlce-inner"},R={class:"progress-cirlce-percentage"},U={class:"progress-text"},q=E(()=>a("p",null,"Let's to do this!",-1)),J={key:0},K={key:1},O={__name:"ProgressBar",props:["taskNum","taskDone","day"],setup(o){const t=o,d=h(()=>t.day==="Today"?"today":`on ${t.day}`);let e=v(0);const l=h(()=>(t.taskDone/t.taskNum*100).toFixed());function i(n){const s=setInterval(()=>{t.taskNum==0?(clearInterval(s),e.value=0):n<=e.value?(e.value-=1,e.value==n&&clearInterval(s)):(e.value+=1,e.value==n&&clearInterval(s))},10)}return i(l.value),x(l,n=>{i(n)}),(n,s)=>(u(),g("div",M,[a("div",Y,[a("div",{class:"progress-cirlce-outer progress-bar",style:b({background:`conic-gradient(#f13b1c ${_(e)*3.6}deg,
          #fafafa ${_(e)*3.6}deg
          )`})},[a("div",z,[a("div",R,p(_(e))+"%",1)])],4),a("p",null,p(`${t.day}'s progress`),1)]),a("div",U,[q,_(l)>=100?(u(),g("p",J," Congratulations! You completed all your tasks! ")):(u(),g("p",K,p(`You have ${o.taskNum} ${o.taskNum>1?"tasks":"task"} ${_(d)}`),1))])]))}},Q=m(O,[["__scopeId","data-v-6f070c0c"]]);const X={class:"week-calendar"},Z=["name","id","value"],ee=["for"],te={__name:"WeekCalendar",emits:["getSelectedDate"],setup(o,{emit:t}){let d=new Date;d={date:d.toLocaleDateString("en-GB"),day:d.toLocaleString("en-GB",{weekday:"long"})};const e=v(d),l=v([]);for(let n=0;n<7;n++){const s=new Date;s.setDate(s.getDate()+n),l.value.push({fullDate:s.toLocaleDateString("en-GB"),weekday:s.toLocaleString("en-GB",{weekday:"short"}),weekdayLong:s.toLocaleString("en-GB",{weekday:"long"}),day:s.toLocaleString("en-GB",{day:"numeric"})})}function i(){const n=e.value;t("getSelectedDate",n)}return(n,s)=>(u(),g("ul",X,[(u(!0),g($,null,S(l.value,c=>(u(),g("li",{key:c.day},[G(a("input",{type:"radio",name:c.weekday,id:c.day,value:{date:c.fullDate,day:c.weekdayLong},"onUpdate:modelValue":s[0]||(s[0]=k=>e.value=k),onChange:i},null,40,Z),[[L,e.value]]),a("label",{for:c.day},[a("p",null,p(c.weekday),1),a("p",null,p(c.day),1)],8,ee)]))),128))]))}},ae=m(te,[["__scopeId","data-v-225ff769"]]);const se={class:"homepage"},oe={class:"homepage-header"},ne=B('<div class="main-logo" data-v-50bc6d3f><svg width="37" height="27" version="1.1" viewBox="0 0 28.917 21.102" xmlns="http://www.w3.org/2000/svg" data-v-50bc6d3f><g transform="matrix(.817 0 0 1.0208 -29.884 -89.969)" stroke-linejoin="round" data-v-50bc6d3f><g transform="matrix(1.1759 0 0 1.1274 -36.075 -14.488)" data-v-50bc6d3f><g transform="translate(-3.2249 2.0773)" fill="none" stroke="#f03b1c" stroke-linecap="round" stroke-linejoin="miter" data-v-50bc6d3f><path d="m66.085 98.145 6.4934 5.5263" stroke-width="1.5631px" data-v-50bc6d3f></path><path d="m72.708 103.71 11.831-13.784" stroke-width="1.6346px" data-v-50bc6d3f></path></g></g><g transform="matrix(-1.1759 0 0 -1.1274 144.69 211.43)" stroke-linejoin="round" data-v-50bc6d3f><g transform="translate(-3.2249 2.0773)" fill="none" stroke="#122c6f" stroke-linecap="round" stroke-linejoin="miter" data-v-50bc6d3f><path d="m66.085 98.145 6.4934 5.5263" stroke-width="1.5631px" data-v-50bc6d3f></path><path d="m72.708 103.71 11.831-13.784" stroke-width="1.6346px" data-v-50bc6d3f></path></g></g></g></svg><span data-v-50bc6d3f>Suiko</span></div>',1),re={class:"gadgets"},de={__name:"HomeView",setup(o){const t=T(),d=new Date().toLocaleDateString("en-GB"),e=v(d),l=v("Today");let i=h({get:()=>t.getTasksFromDate(e.value),set:r=>t.getTasksFromDate(r)});const n=h(()=>i.value.filter(r=>r.isDone));function s(r){t.deleteTask(r)}function c(r){t.toggleTaskIsDone(r)}function k(r){e.value=r.date,r.date==d?l.value="Today":l.value=r.day}return(r,le)=>(u(),g("div",se,[a("div",oe,[ne,f(N),f(ae,{onGetSelectedDate:k})]),a("main",null,[a("div",re,[f(A),f(Q,{taskNum:_(i).length,taskDone:_(n).length,day:l.value},null,8,["taskNum","taskDone","day"])]),f(I,{tasks:_(i),home:!0,onDeleteTask:s,onToggleDone:c,getListDetails:_(t).getListDetails},null,8,["tasks","getListDetails"])])]))}},ue=m(de,[["__scopeId","data-v-50bc6d3f"]]);export{ue as default};