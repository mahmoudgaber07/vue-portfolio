import{_ as m,f as v,u as f,r as l,o as c,c as a,w as T,v as h,a as n,x,d as i,s as $,F as b,m as I}from"./index-Ojvld5h0.js";const y={setup(){const t=v(""),e=f();return{todoText:t,addTodo:()=>{t.value===""?alert("Please enter some text"):(e.commit("addTodo",t.value),t.value="")}}}},g={class:"input-group mb-3"};function k(t,e,_,o,r,u){const d=l("font-awesome-icon");return c(),a("div",g,[T(n("input",{type:"text",class:"form-control",placeholder:"Type todo here","onUpdate:modelValue":e[0]||(e[0]=s=>o.todoText=s),onKeyup:e[1]||(e[1]=x((...s)=>o.addTodo&&o.addTodo(...s),["enter"]))},null,544),[[h,o.todoText]]),n("button",{class:"btn btn-outline-secondary",type:"button",onClick:e[2]||(e[2]=(...s)=>o.addTodo&&o.addTodo(...s))},[i(d,{icon:"fa-solid fa-square-plus"})])])}const w=m(y,[["render",k]]),C={setup(){const t=f();return{todoItems:$(()=>t.getters.todoItems),editTodo:r=>{t.commit("updateTodo",r)},removeTodo:r=>{t.commit("removeTodo",r)}}}},V={class:"container"},B={key:0},N=n("h4",{class:"py-5 text-danger"},"No Todo Items",-1),U=[N],q={key:1,class:"list-group"},F={class:"list-group-item"},K={class:"d-flex justify-content-between align-items-center"},L=["onUpdate:modelValue"],j={class:"d-flex"},D=["onClick"],E=["onClick"];function M(t,e,_,o,r,u){const d=l("font-awesome-icon");return c(),a("div",V,[o.todoItems.length==0?(c(),a("div",B,U)):(c(),a("ul",q,[(c(!0),a(b,null,I(o.todoItems,s=>(c(),a("li",F,[n("div",K,[T(n("input",{type:"text",class:"form-control","onUpdate:modelValue":p=>s.title=p},null,8,L),[[h,s.title]]),n("div",j,[n("button",{class:"btn btn-success mx-2",onClick:p=>o.editTodo(s)},[i(d,{icon:"fa-solid fa-pen-to-square"})],8,D),n("button",{class:"btn btn-danger",onClick:p=>o.removeTodo(s)},[i(d,{icon:"fa-solid fa-trash"})],8,E)])])]))),256))]))])}const P=m(C,[["render",M]]),S={components:{TodoInput:w,TodoItems:P},setup(){return{}}},z={class:"container"},A=n("h2",{class:"main-heading"},"Todo List",-1);function G(t,e,_,o,r,u){const d=l("TodoInput"),s=l("TodoItems");return c(),a("div",z,[A,i(d),i(s)])}const H=m(S,[["render",G]]),J={components:{Todo:H},setup(){return{}}},O={class:"todo"};function Q(t,e,_,o,r,u){const d=l("Todo");return c(),a("div",O,[i(d)])}const W=m(J,[["render",Q]]);export{W as default};
