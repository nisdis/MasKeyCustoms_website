import{S as t,i as e,s as a,e as o,k as s,c as n,a as l,n as d,d as r,b as c,G as i,f as u,H as h,X as m,Y as f,Z as p,_ as v,$ as g,a0 as b,a1 as x,a2 as E,t as j,V as w,g as y,a3 as T,w as q,x as _,u as k,a4 as M,a5 as O,r as I,a6 as N,I as U}from"../../chunks/vendor-84e00a01.js";function D(t,{pending:e,error:a,result:o}){let s;async function n(n){const l=s={};n.preventDefault();const d=new FormData(t);e&&e(d,t);try{const e=await fetch(t.action,{method:t.method,headers:{accept:"application/json"},body:d});if(l!==s)return;e.ok?o(e,t):a?a(e,null,t):console.error(await e.text())}catch(r){if(!a)throw r;a(null,r,t)}}return t.addEventListener("submit",n),{destroy(){t.removeEventListener("submit",n)}}}function F(t,e,a){const o=t.slice();return o[6]=e[a],o[7]=e,o[8]=a,o}function R(t,e){let a,j,w,y,T,q,_,k,I,N,F,R,B,P,V,$,H,L,S,A,C,G,X,Y,Z,z,J,K,Q=U;function W(...t){return e[3](e[6],e[7],e[8],...t)}function tt(){return e[4](e[6],e[7],e[8])}function et(){return e[5](e[6])}return{key:t,first:null,c(){a=o("div"),j=o("form"),w=o("input"),T=s(),q=o("button"),N=s(),F=o("form"),R=o("input"),P=s(),V=o("button"),H=s(),L=o("form"),S=o("button"),X=s(),this.h()},l(t){a=n(t,"DIV",{class:!0});var e=l(a);j=n(e,"FORM",{action:!0,method:!0});var o=l(j);w=n(o,"INPUT",{type:!0,name:!0,class:!0}),T=d(o),q=n(o,"BUTTON",{class:!0,"aria-label":!0}),l(q).forEach(r),o.forEach(r),N=d(e),F=n(e,"FORM",{class:!0,action:!0,method:!0});var s=l(F);R=n(s,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),P=d(s),V=n(s,"BUTTON",{class:!0,"aria-label":!0}),l(V).forEach(r),s.forEach(r),H=d(e),L=n(e,"FORM",{action:!0,method:!0});var c=l(L);S=n(c,"BUTTON",{class:!0,"aria-label":!0}),l(S).forEach(r),c.forEach(r),X=d(e),e.forEach(r),this.h()},h(){c(w,"type","hidden"),c(w,"name","done"),w.value=y=e[6].done?"":"true",c(w,"class","svelte-dmxqmd"),c(q,"class","toggle svelte-dmxqmd"),c(q,"aria-label",_="Mark todo as "+(e[6].done?"not done":"done")),c(j,"action",k="/todos/"+e[6].uid+".json?_method=patch"),c(j,"method","post"),c(R,"aria-label","Edit todo"),c(R,"type","text"),c(R,"name","text"),R.value=B=e[6].text,c(R,"class","svelte-dmxqmd"),c(V,"class","save svelte-dmxqmd"),c(V,"aria-label","Save todo"),c(F,"class","text svelte-dmxqmd"),c(F,"action",$="/todos/"+e[6].uid+".json?_method=patch"),c(F,"method","post"),c(S,"class","delete svelte-dmxqmd"),c(S,"aria-label","Delete todo"),S.disabled=A=e[6].pending_delete,c(L,"action",C="/todos/"+e[6].uid+".json?_method=delete"),c(L,"method","post"),c(a,"class","todo svelte-dmxqmd"),i(a,"done",e[6].done),this.first=a},m(t,o){u(t,a,o),h(a,j),h(j,w),h(j,T),h(j,q),h(a,N),h(a,F),h(F,R),h(F,P),h(F,V),h(a,H),h(a,L),h(L,S),h(a,X),z=!0,J||(K=[m(I=D.call(null,j,{pending:W,result:e[1]})),m(D.call(null,F,{result:e[1]})),m(G=D.call(null,L,{pending:tt,result:et}))],J=!0)},p(t,o){e=t,(!z||1&o&&y!==(y=e[6].done?"":"true"))&&(w.value=y),(!z||1&o&&_!==(_="Mark todo as "+(e[6].done?"not done":"done")))&&c(q,"aria-label",_),(!z||1&o&&k!==(k="/todos/"+e[6].uid+".json?_method=patch"))&&c(j,"action",k),I&&f(I.update)&&1&o&&I.update.call(null,{pending:W,result:e[1]}),(!z||1&o&&B!==(B=e[6].text)&&R.value!==B)&&(R.value=B),(!z||1&o&&$!==($="/todos/"+e[6].uid+".json?_method=patch"))&&c(F,"action",$),(!z||1&o&&A!==(A=e[6].pending_delete))&&(S.disabled=A),(!z||1&o&&C!==(C="/todos/"+e[6].uid+".json?_method=delete"))&&c(L,"action",C),G&&f(G.update)&&1&o&&G.update.call(null,{pending:tt,result:et}),1&o&&i(a,"done",e[6].done)},r(){Z=a.getBoundingClientRect()},f(){p(a),Q(),v(a,Z)},a(){Q(),Q=g(a,Z,M,{duration:200})},i(t){z||(t&&b((()=>{Y||(Y=x(a,O,{start:.7},!0)),Y.run(1)})),z=!0)},o(t){t&&(Y||(Y=x(a,O,{start:.7},!1)),Y.run(0)),z=!1},d(t){t&&r(a),t&&Y&&Y.end(),J=!1,E(K)}}}function B(t){let e,a,i,p,v,g,b,x,E,M,O,U,B=[],P=new Map,V=t[0];const $=t=>t[6].uid;for(let o=0;o<V.length;o+=1){let e=F(t,V,o),a=$(e);P.set(a,B[o]=R(a,e))}return{c(){e=s(),a=o("div"),i=o("h1"),p=j("Todos"),v=s(),g=o("form"),b=o("input"),E=s();for(let t=0;t<B.length;t+=1)B[t].c();this.h()},l(t){w('[data-svelte="svelte-181o7gf"]',document.head).forEach(r),e=d(t),a=n(t,"DIV",{class:!0});var o=l(a);i=n(o,"H1",{});var s=l(i);p=y(s,"Todos"),s.forEach(r),v=d(o),g=n(o,"FORM",{class:!0,action:!0,method:!0});var c=l(g);b=n(c,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),c.forEach(r),E=d(o);for(let e=0;e<B.length;e+=1)B[e].l(o);o.forEach(r),this.h()},h(){document.title="Todos",c(b,"name","text"),c(b,"aria-label","Add todo"),c(b,"placeholder","+ tap to add a todo"),c(b,"class","svelte-dmxqmd"),c(g,"class","new svelte-dmxqmd"),c(g,"action","/todos.json"),c(g,"method","post"),c(a,"class","todos svelte-dmxqmd")},m(o,s){u(o,e,s),u(o,a,s),h(a,i),h(i,p),h(a,v),h(a,g),h(g,b),h(a,E);for(let t=0;t<B.length;t+=1)B[t].m(a,null);M=!0,O||(U=m(x=D.call(null,g,{result:t[2]})),O=!0)},p(t,[e]){if(x&&f(x.update)&&1&e&&x.update.call(null,{result:t[2]}),3&e){V=t[0],I();for(let t=0;t<B.length;t+=1)B[t].r();B=T(B,e,$,1,t,V,P,a,N,R,null,F);for(let t=0;t<B.length;t+=1)B[t].a();q()}},i(t){if(!M){for(let t=0;t<V.length;t+=1)_(B[t]);M=!0}},o(t){for(let e=0;e<B.length;e+=1)k(B[e]);M=!1},d(t){t&&r(e),t&&r(a);for(let e=0;e<B.length;e+=1)B[e].d();O=!1,U()}}}const P=async({fetch:t})=>{const e=await t("/todos.json");if(e.ok){return{props:{todos:await e.json()}}}const{message:a}=await e.json();return{error:new Error(a)}};function V(t,e,a){let{todos:o}=e;return t.$$set=t=>{"todos"in t&&a(0,o=t.todos)},[o,async function(t){const e=await t.json();a(0,o=o.map((t=>t.uid===e.uid?e:t)))},async(t,e)=>{const s=await t.json();a(0,o=[...o,s]),e.reset()},(t,e,s,n)=>{a(0,e[s].done=!!n.get("done"),o)},(t,e,s)=>a(0,e[s].pending_delete=!0,o),t=>{a(0,o=o.filter((e=>e.uid!==t.uid)))}]}class $ extends t{constructor(t){super(),e(this,t,V,B,a,{todos:0})}}export{$ as default,P as load};
