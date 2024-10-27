import{N as r,a as x,u as h,j as e,O as p,M as g,P as u,B as d,Q as m,R as b,T as j,U as k,V as v}from"./index-BYWiZ_IK.js";import{g as N}from"./getFormattedDate-C-n2GMDM.js";function C(s){return r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"},child:[]}]})(s)}const f=({item:s})=>{const t=x(),[a,l]=h(),i=()=>{t(u(s.id)).unwrap().then(()=>d.success("News deleted successfully")).catch(n=>d.error(n.message))},c=()=>{if(Object.hasOwn(s,"btnLink")){const n=m[s.status];return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"min-w-[250px] w-[25vw]",children:[e.jsx("h2",{className:" font-medium text-[26px] leading-[131%] text-my-black2 mb-[6px] truncate",children:s.title}),e.jsx("p",{className:" text-my-black3 leading-[137%] truncate",children:s.content})]}),e.jsx("span",{className:"text-[#666]",children:N(s.publishDate,".")}),e.jsx("span",{className:"font-bold leading-[143%]",children:"Maastricht"}),e.jsx("span",{className:`inline-block h-[32px] w-[120px] py-1 px-3 bg-[${n}] rounded-[35px] text-white text-center`,style:{backgroundColor:n},children:s.status})]})}if(Object.hasOwn(s,"coverImageUrl")){const n=b[s.status];return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-center items-center gap-3",children:[e.jsx("img",{src:`http://dev.ukrhouse.pp.ua:8080/${s.coverImageUrl}`,className:"w-[47px] h-[74px] rounded"}),e.jsxs("div",{className:"leading-6 text-xl min-w-[180px] w-[25vw]",children:[e.jsx("p",{className:" text-my-black1 leading-6 font-medium",children:s.author}),e.jsx("p",{className:" text-my-black1 leading-6 truncate font-semibold",children:s.title})]})]}),e.jsxs("div",{className:"flex items-center justify-start gap-4 text-sm leading-5 w-[240px]",children:[e.jsx("p",{className:"text-[#666666]",children:s.genre}),e.jsxs("p",{children:[s.pageCount," pages"]}),e.jsx("p",{children:s.publicationYear})]}),e.jsx("span",{className:`inline-block h-[32px] w-[120px] py-1 px-3 bg-[${n}] rounded-[35px] text-white text-center`,style:{backgroundColor:n},children:s.status})]})}},o=()=>{if(Object.hasOwn(s,"btnLink"))return e.jsx(j,{item:s,toggle:l});if(Object.hasOwn(s,"coverImageUrl"))return e.jsx(k,{item:s,toggle:l})};return e.jsxs(e.Fragment,{children:[e.jsxs("li",{className:"h-[100px] flex justify-between items-center px-2 py-2.5 hover:bg-my-lightblue border-b border-[#C4C4C4] last:border-none",children:[c(),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("button",{type:"button",onClick:l,children:e.jsx(C,{size:24})}),e.jsx("button",{type:"button",onClick:i,className:"hover:text-green",children:e.jsx(p,{size:24,color:"red"})})]})]}),a&&e.jsx(g,{toggleModal:l,children:o()})]})},z=({items:s})=>e.jsx("ul",{className:"pr-2 flex flex-col h-[70vh] max-h-[70vh] scrollbar mb-6",children:s.map(t=>e.jsx(f,{item:t},t.id))});function w(s){return r({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"},child:[]}]})(s)}function L(s){return r({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"},child:[]}]})(s)}function y(s){return r({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m12.707 7.707-1.414-1.414L5.586 12l5.707 5.707 1.414-1.414L8.414 12z"},child:[]},{tag:"path",attr:{d:"M16.293 6.293 10.586 12l5.707 5.707 1.414-1.414L13.414 12l4.293-4.293z"},child:[]}]})(s)}function M(s){return r({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10.296 7.71 14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z"},child:[]},{tag:"path",attr:{d:"M6.704 6.29 5.296 7.71 9.621 12l-4.325 4.29 1.408 1.42L12.461 12z"},child:[]}]})(s)}const F=({setPage:s,page:t,totalPages:a})=>{const l=o=>{s(o.selected)},i=()=>{s(0)},c=()=>{s(a-1)};if(!(a<=1))return e.jsxs("div",{className:"flex items-center justify-center gap-[17px]",children:[e.jsx("button",{className:"page-link",onClick:i,disabled:t===0,children:e.jsx(y,{})}),e.jsx(v,{pageCount:a,pageRangeDisplayed:2,marginPagesDisplayed:1,onPageChange:l,forcePage:t,containerClassName:"pagination flex gap-[4px]",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeLinkClassName:"active-pg",previousLabel:e.jsx("button",{className:"page-link",disabled:t===0,children:e.jsx(w,{})}),nextLabel:e.jsx("button",{className:"page-link",disabled:t===a-1,children:e.jsx(L,{})}),breakLabel:"..."}),e.jsx("button",{className:"page-link",onClick:c,disabled:t===a-1,children:e.jsx(M,{})})]})};export{z as C,F as P};
