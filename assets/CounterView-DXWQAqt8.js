import{_ as i,f as l,k as f,o as r,c as s,t as $,a as p,r as a,d as u,i as C}from"./index-Ojvld5h0.js";import{u as v}from"./loader-D5D7i2A8.js";const x={props:["counter"],setup(e){const t=l(e.counter);return f(()=>e.counter,o=>{t.value=o}),{counter:t}}},b={class:"text-center fs-1 bg-tertiary"};function k(e,t,o,n,d,_){return r(),s("div",b,$(n.counter),1)}const y=i(x,[["render",k]]),h={emits:["increment","decrement"],setup(e,t){return{increment:()=>{t.emit("increment",1)},decrement:()=>{t.emit("decrement",1)}}}},B={class:"text-center py-5"};function I(e,t,o,n,d,_){return r(),s("div",B,[p("button",{class:"btn btn-dark mx-2 px-3 py-2",type:"button",onClick:t[0]||(t[0]=(...c)=>n.increment&&n.increment(...c))},"+"),p("button",{class:"btn btn-dark mx-2 px-3 py-2",type:"button",onClick:t[1]||(t[1]=(...c)=>n.decrement&&n.decrement(...c))},"-")])}const g=i(h,[["render",I]]),D={components:{CounterItem:y,CounterButton:g},setup(){const e=l(0);return{count:e,inc:n=>{e.value>=0&&(e.value+=n)},dec:n=>{e.value>0&&(e.value-=n)}}}},L={class:"counter"},V={class:"container"};function w(e,t,o,n,d,_){const c=a("CounterItem"),m=a("CounterButton");return r(),s("div",L,[p("div",V,[u(c,{counter:n.count},null,8,["counter"]),u(m,{onIncrement:n.inc,onDecrement:n.dec},null,8,["onIncrement","onDecrement"])])])}const N=i(D,[["render",w]]),E={components:{Counter:N},setup(){const{loading:e,start:t,stop:o}=v();return C(()=>{o()}),{loading:e,start:t,stop:o}}},M={key:0},S={key:1};function j(e,t,o,n,d,_){const c=a("Loader"),m=a("Counter");return n.loading?(r(),s("div",M,[u(c)])):(r(),s("div",S,[u(m)]))}const A=i(E,[["render",j]]);export{A as default};