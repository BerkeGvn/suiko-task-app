import{_ as S,c as x,q as A,b as _,e as k,h as e,f,s as y,t as h,u as d,F as I,j as P,x as F,B,C as N,n as D,p as g,i as V,r as b,k as w,D as U,y as T,v as L,l as Y,A as H,E as M}from"./index-2f4f0047.js";const $=t=>(g("data-v-0c9bbe29"),t=t(),V(),t),E={class:"base-lists"},j=$(()=>e("p",null,"Personal",-1)),q={class:"sub-text"},z=$(()=>e("p",null,"Work",-1)),R={class:"sub-text"},W=$(()=>e("p",null,"Home",-1)),G={class:"sub-text"},J={class:"sub-text"},K=["onClick"],O=$(()=>e("span",{class:"material-symbols-rounded"}," delete ",-1)),Q=[O],X={__name:"AllTasksList",props:["allTasks"],emits:["deleteList"],setup(t,{emit:u}){const o=t,s=x(()=>{const[n,c,l]=o.allTasks;return{personal:n,work:c,home:l}}),m=x(()=>o.allTasks.slice(3));function v(n){u("deleteList",n)}return(n,c)=>{const l=A("router-link");return _(),k(I,null,[e("div",E,[f(l,{class:"base-lists-personal list",to:{name:"SelectedTask",params:{listName:d(s).personal.name}}},{default:y(()=>[j,e("span",q,"You have "+h(d(s).personal.length)+" tasks",1)]),_:1},8,["to"]),f(l,{class:"base-lists-work list",to:{name:"SelectedTask",params:{listName:d(s).work.name}}},{default:y(()=>[e("div",null,[z,e("span",R,"You have "+h(d(s).work.length)+" tasks",1)])]),_:1},8,["to"]),f(l,{class:"base-lists-home list",to:{name:"SelectedTask",params:{listName:d(s).home.name}}},{default:y(()=>[W,e("span",G,"You have "+h(d(s).home.length)+" tasks",1)]),_:1},8,["to"])]),(_(!0),k(I,null,P(d(m),r=>(_(),F(l,{class:"base-lists-custom list",style:D({backgroundColor:r.color}),key:r.id,to:{name:"SelectedTask",params:{listName:r.name}}},{default:y(()=>[e("p",null,h(d(B)(r.name)),1),e("span",J,"You have "+h(r.length)+" tasks",1),e("button",{class:"delete-button",onClick:N(C=>v(r.id),["prevent"])},Q,8,K)]),_:2},1032,["style","to"]))),128))],64)}}},Z=S(X,[["__scopeId","data-v-0c9bbe29"]]);const p=t=>(g("data-v-722f9301"),t=t(),V(),t),ee={class:"form-backdrop"},se=["onSubmit"],te=["onClick"],ae=p(()=>e("span",{class:"material-symbols-rounded"}," close ",-1)),le=[ae],oe={for:"task-title"},ne=p(()=>e("span",{class:"input-label-text"}," List Title",-1)),ie={key:0,class:"input-label-error"},ue=p(()=>e("p",null,"Pick a color",-1)),ce={class:"color-picker"},re=p(()=>e("label",{for:"yellow"},null,-1)),de=p(()=>e("label",{for:"green"},null,-1)),_e=p(()=>e("label",{for:"purple"},null,-1)),pe=p(()=>e("label",{for:"pink"},null,-1)),me={key:0,class:"input-label-error"},ve=p(()=>e("button",{class:"create-button new-list-button"},"Create a new list",-1)),ke={__name:"NewList",emits:["submitNewList","cancelSubmit"],setup(t,{emit:u}){const o=b(""),s=b(""),m=b(!0),v=b(!0),n=b(!0);function c(){n.value=!0,o.value<=0&&(m.value=!1,n.value=!1),s.value||(v.value=!1,n.value=!1)}function l(){if(c(),n.value)u("submitNewList",{name:o.value,color:s.value}),o.value="",s.value="";else return}function r(){u("cancelSubmit")}return(C,a)=>(_(),k("div",ee,[e("form",{onSubmit:N(l,["prevent"])},[e("button",{class:"cancel-button",onClick:N(r,["prevent"])},le,8,te),e("label",oe,[ne,w(e("input",{placeholder:"List Name",type:"text",id:"task-title","onUpdate:modelValue":a[0]||(a[0]=i=>o.value=i),onFocusout:a[1]||(a[1]=i=>m.value=!0)},null,544),[[U,o.value,void 0,{trim:!0}]]),m.value?T("",!0):(_(),k("span",ie,"Please enter a list name"))]),e("div",{class:"color",onFocusout:a[6]||(a[6]=i=>v.value=!0)},[ue,e("div",ce,[w(e("input",{type:"radio",name:"yellow",id:"yellow",value:"#f6c445","onUpdate:modelValue":a[2]||(a[2]=i=>s.value=i)},null,512),[[L,s.value]]),re,w(e("input",{type:"radio",name:"green",id:"green",value:"#b3c901","onUpdate:modelValue":a[3]||(a[3]=i=>s.value=i)},null,512),[[L,s.value]]),de,w(e("input",{type:"radio",name:"purple",id:"purple",value:"#a557ac","onUpdate:modelValue":a[4]||(a[4]=i=>s.value=i)},null,512),[[L,s.value]]),_e,w(e("input",{type:"radio",name:"pink",id:"pink",value:"#c20d84","onUpdate:modelValue":a[5]||(a[5]=i=>s.value=i)},null,512),[[L,s.value]]),pe]),v.value?T("",!0):(_(),k("span",me," Please pick a color "))],32),ve],40,se)]))}},be=S(ke,[["__scopeId","data-v-722f9301"]]);const fe=t=>(g("data-v-6569fc90"),t=t(),V(),t),he={class:"page"},we={class:"task-lists"},ye=fe(()=>e("span",{class:"material-symbols-rounded circle"}," add_circle ",-1)),Le={key:0,class:"backdrop"},Te={__name:"AllTasksView",setup(t){const u=b(!1),o=Y(),s=x(()=>o.allListDetails);function m(c){o.deleteList(c)}function v(c){const l={name:c.name,color:c.color,tasks:[]};o.createNewList(l),u.value=!1}function n(){u.value=!1}return(c,l)=>{const r=A("PageHeader");return _(),k("div",he,[f(r,{icon:"list_alt",headerText:"Task List"}),e("div",we,[f(Z,{allTasks:d(s),onDeleteList:m},null,8,["allTasks"]),e("button",{onClick:l[0]||(l[0]=C=>u.value=!0),class:"create-button fixed-task-button"},[ye,H(" New task list ")]),u.value?(_(),k("div",Le)):T("",!0),f(M,{name:"slide-up"},{default:y(()=>[u.value?(_(),F(be,{key:0,onSubmitNewList:v,onCancelSubmit:n})):T("",!0)]),_:1})])])}}},xe=S(Te,[["__scopeId","data-v-6569fc90"]]);export{xe as default};
