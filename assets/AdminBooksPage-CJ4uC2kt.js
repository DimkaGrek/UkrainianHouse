import{r as a,t as g,u as j,E as k,F as P,P as w,m as A,j as s,w as E,d as b,G as r}from"./index-CX4Gl8eE.js";import{u as B}from"./useBooks-C0-M-zKg.js";import{C as L,P as y}from"./ConfirmDelete-5_lLvKUk.js";import"./getFormattedDate-C-n2GMDM.js";const I=()=>{const{books:i,page:n,totalBooks:l,totalPages:u,isLoading:m}=B(),[o,d]=a.useState("Show All"),[h,f]=a.useState([]),[c]=g(),t=j();a.useEffect(()=>{f(["Show All",...k])},[]),a.useEffect(()=>{t(P())},[t]),a.useEffect(()=>{const e=c.get("keyword"),S={params:{page:n,size:w,...e&&{keyword:e},...o!=="Show All"&&{status:o}},isAdmin:!0};t(A(S))},[t,n,c,o]);const x=e=>{t(r(0)),d(e)},p=e=>{t(r(e))};return s.jsxs(s.Fragment,{children:[s.jsxs("section",{className:"py-5",children:[s.jsxs("div",{className:"flex justify-between mb-3",children:[s.jsxs("h2",{className:"text-[24px] font-medium",children:["Total books: ",l]}),s.jsx(E,{status:o,setStatus:x,statuses:h,showLabel:!1})]}),s.jsx(L,{items:i}),s.jsx(y,{setPage:p,page:n,totalPages:u})]}),m&&s.jsx(b,{})]})};export{I as default};
