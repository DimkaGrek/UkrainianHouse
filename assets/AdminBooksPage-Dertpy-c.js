import{a as m,r as e,z as l,l as p,j as o,C as f}from"./index-CZDjmvx5.js";import{u}from"./useBooks-KH-7HDsv.js";import{C as x,P as g}from"./Pagination-C8umk4ly.js";import"./getFormattedDate-C-n2GMDM.js";const j=()=>{const{books:i,page:t,totalBooks:n,totalPages:c}=u(),s=m();e.useEffect(()=>{s(l())},[s]),e.useEffect(()=>{s(p({params:{page:t,size:7},isAdmin:!0}))},[s,t]);const r=a=>{s(f(a))};return o.jsxs("section",{className:"py-5",children:[o.jsxs("h2",{className:"text-[24px] font-medium mb-6",children:["Total books: ",n]}),o.jsx(x,{items:i}),o.jsx(g,{setPage:r,page:t,totalPages:c})]})};export{j as default};