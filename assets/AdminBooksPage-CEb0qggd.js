import{r as o,m as S,u as j,D as k,E as P,P as b,g as w,j as s,q as A,a as E,F as i}from"./index-CzKhTpzY.js";import{u as B}from"./useBooks-j6ui8Czk.js";import{C as L,P as y}from"./ConfirmDelete-DV7GCKJj.js";import{I}from"./InfoMessage-CM2gRiMl.js";import"./getFormattedDate-C-n2GMDM.js";const M=()=>{const{books:c,page:r,totalBooks:l,totalPages:m,isLoading:u}=B(),[e,d]=o.useState("Show All"),[f,h]=o.useState([]),[x]=S(),t=j(),n=x.get("keyword");o.useEffect(()=>{h(["Show All",...k])},[]),o.useEffect(()=>{t(P())},[t]),o.useEffect(()=>{const a={params:{page:r,size:b,...n&&{keyword:n},...e!=="Show All"&&{status:e}},isAdmin:!0};t(w(a))},[t,r,n,e]);const g=a=>{t(i(0)),d(a)},p=a=>{t(i(a))};return s.jsxs(s.Fragment,{children:[s.jsxs("section",{className:"py-5",children:[s.jsxs("div",{className:"flex justify-between mb-3",children:[s.jsxs("h2",{className:"text-[24px] font-medium",children:["Total books: ",l]}),s.jsx(A,{status:e,setStatus:g,statuses:f,showLabel:!1})]}),c.length?s.jsx(L,{items:c}):s.jsx(I,{messageText:"Please add a book.",keyword:n,status:e}),s.jsx(y,{setPage:p,page:r,totalPages:m})]}),u&&s.jsx(E,{})]})};export{M as default};
