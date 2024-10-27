import{G as c,a as x,u as p,j as e,q as g,M as u,t as m,B as d,v as j,N,R as f,r as h,d as b,f as k,h as v}from"./index-LdvIt083.js";import{u as C}from"./useNews-B8ojIejM.js";import{g as L}from"./getFormattedDate-C-n2GMDM.js";function w(s){return c({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"},child:[]}]})(s)}const M=({item:s})=>{const t=x(),[a,l]=p(),n=()=>{t(m(s.id)).unwrap().then(()=>d.success("News deleted successfully")).catch(o=>d.error(o.message))},r=()=>{if(Object.hasOwn(s,"btnLink")){const o=j[s.status];return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"w-[520px]",children:[e.jsx("h2",{className:" font-medium text-[26px] leading-[131%] text-my-black2 mb-[6px]",children:s.title}),e.jsx("p",{className:" text-my-black3 leading-[137%] truncate",children:s.content})]}),e.jsx("span",{className:"text-[#666]",children:L(s.publishDate,".")}),e.jsx("span",{className:"font-bold leading-[143%]",children:"Maastricht"}),e.jsx("span",{className:`inline-block h-[32px] w-[120px] py-1 px-3 bg-[${o}] rounded-[35px] text-white text-center`,style:{backgroundColor:o},children:s.status})]})}},i=()=>{if(Object.hasOwn(s,"btnLink"))return e.jsx(N,{item:s,toggleModal:l})};return e.jsxs(e.Fragment,{children:[e.jsxs("li",{className:"flex justify-between items-center",children:[r(),e.jsxs("div",{className:"flex gap-6",children:[e.jsx("button",{type:"button",onClick:l,children:e.jsx(w,{size:24})}),e.jsx("button",{type:"button",onClick:n,className:"hover:text-green",children:e.jsx(g,{size:24,color:"red"})})]})]}),a&&e.jsx(u,{toggleModal:l,children:i()})]})},y=({items:s})=>e.jsx("ul",{className:"pr-2 flex flex-col gap-8 h-[70vh] max-h-[70vh] scrollbar mb-6",children:s.map(t=>e.jsx(M,{item:t},t.id))});function z(s){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"},child:[]}]})(s)}function B(s){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"},child:[]}]})(s)}function D(s){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m12.707 7.707-1.414-1.414L5.586 12l5.707 5.707 1.414-1.414L8.414 12z"},child:[]},{tag:"path",attr:{d:"M16.293 6.293 10.586 12l5.707 5.707 1.414-1.414L13.414 12l4.293-4.293z"},child:[]}]})(s)}function F(s){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10.296 7.71 14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z"},child:[]},{tag:"path",attr:{d:"M6.704 6.29 5.296 7.71 9.621 12l-4.325 4.29 1.408 1.42L12.461 12z"},child:[]}]})(s)}const O=({setPage:s,page:t,totalPages:a})=>{const l=i=>{s(i.selected)},n=()=>{s(0)},r=()=>{s(a-1)};if(!(a<=1))return e.jsxs("div",{className:"flex items-center justify-center gap-[17px]",children:[e.jsx("button",{className:"page-link",onClick:n,disabled:t===0,children:e.jsx(D,{})}),e.jsx(f,{pageCount:a,pageRangeDisplayed:2,marginPagesDisplayed:1,onPageChange:l,forcePage:t,containerClassName:"pagination flex gap-[4px]",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeLinkClassName:"active-pg",previousLabel:e.jsx("button",{className:"page-link",disabled:t===0,children:e.jsx(z,{})}),nextLabel:e.jsx("button",{className:"page-link",disabled:t===a-1,children:e.jsx(B,{})}),breakLabel:"..."}),e.jsx("button",{className:"page-link",onClick:r,disabled:t===a-1,children:e.jsx(F,{})})]})},A=()=>{const{news:s,page:t,totalNews:a,totalPages:l}=C(),n=x();h.useEffect(()=>{n(b())},[n]),h.useEffect(()=>{n(k({params:{page:t,size:7},isAdmin:!0}))},[n,t]);const r=i=>{n(v(i))};return e.jsxs("section",{className:"py-5",children:[e.jsxs("h2",{className:"text-[24px] font-medium mb-6",children:["Total news: ",a]}),e.jsx(y,{items:s}),e.jsx(O,{setPage:r,page:t,totalPages:l})]})};export{A as default};
