import{T as S,r as o,h as j,u as P,U as A,V as E,P as w,j as s,x as M,W as l,a as N}from"./index-Bg99GbQ6.js";import{C as D,P as I}from"./Pagination-D2otnnbD.js";import{I as L}from"./InfoMessage-Ct4lnWUE.js";import"./getFormattedDate-C-n2GMDM.js";const R=["READ","UNREAD"],C=()=>{const{messages:r,page:c,totalMessages:i,totalPages:m,isLoading:g}=S(),[e,u]=o.useState("Show All"),[d,h]=o.useState([]),[x]=j(),a=P(),n=x.get("keyword");o.useEffect(()=>{h(["Show All",...R])},[]),o.useEffect(()=>{a(A())},[a]),o.useEffect(()=>{const t={params:{page:c,size:w,...n&&{keyword:n},...e!=="Show All"&&{read:e==="UNREAD"?!1:e==="READ"?!0:void 0}}};a(E(t))},[a,c,e,n]);const f=t=>{a(l(0)),u(t)},p=t=>{a(l(t))};return s.jsxs(s.Fragment,{children:[s.jsxs("section",{className:"py-5",children:[s.jsxs("div",{className:"mb-3 flex justify-between",children:[s.jsxs("h2",{className:"text-[24px] font-medium",children:["Total messages: ",i]}),s.jsx(M,{status:e,setStatus:f,statuses:d,showLabel:!1})]}),r.length?s.jsx(D,{items:r}):s.jsx(L,{messageText:"No messages received.",keyword:n,status:e}),s.jsx(I,{setPage:p,page:c,totalPages:m})]}),g&&s.jsx(N,{})]})};export{C as default};
