import{s as x,f as c,c as u,t as g,j as s,v as f,a as j}from"./index-BF8NoceB.js";import{u as w}from"./useNews-DWHzTF5H.js";import{u as h,C as p,P as N}from"./Pagination-JKY6PfIU.js";import{I as P}from"./InfoMessage-BiqGCuHw.js";import"./getFormattedDate-C-n2GMDM.js";const C=()=>{const{news:e,page:a,totalNews:n,totalPages:o,isLoading:i}=w(),{status:t,statuses:l,keyword:r,handleChangeStatus:m,handleSetPage:d}=h(a,g,u,c,x);return s.jsxs(s.Fragment,{children:[s.jsxs("section",{className:"py-5",children:[s.jsxs("div",{className:"mb-3 flex justify-between",children:[s.jsxs("h2",{className:"text-[24px] font-medium",children:["Total news: ",n]}),s.jsx(f,{status:t,setStatus:m,statuses:l,showLabel:!1})]}),e.length?s.jsx(p,{items:e}):s.jsx(P,{messageText:"Please add an article.",keyword:r,status:t}),s.jsx(N,{setPage:d,page:a,totalPages:o})]}),i&&s.jsx(j,{})]})};export{C as default};
