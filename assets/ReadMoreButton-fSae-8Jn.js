import{j as e,k as p}from"./index-CjeDPkTS.js";const m=({title:a,content:x,publishDate:d,photoUrls:t,btnLink:l,btnText:s})=>e.jsxs("div",{className:" h-[70vh] pr-[10px] md:pr-[15px] flex flex-col gap-[24px] lg:flex-row scrollbar",children:[e.jsxs("div",{className:"md:order-1 lg:order-1",children:[e.jsx("h3",{className:"font-proza-medium font-semibold text-[20px] text-[#1a1a1a] leading-[120%] md:leading-[160%] mb-[10px] md:mb-[24px] lg:text-[60px] lg:leading-[131%]",children:a}),e.jsx("p",{className:"font-istok text-[16px] text-[#393939] leading-[137%] lg:text-[20px] lg:leading-[140%] mb-[24px]",children:x}),e.jsx("p",{className:" font-istok text-[12px] md:text-[14px] lg:text-[20px] text-[#a6a6a6] text-left leading-[150%] md:leading-[129%] lg:leading-[150%] lg:mb-[24px]",children:d.slice(0,10)}),e.jsx(o,{className:"hidden lg:block",caption:s,link:l})]}),t!=null&&t.length?e.jsx("ul",{className:"flex flex-col items-center md:flex-row lg:flex-col gap-[12px] md:gap-[24px] md:order-2 lg:order-2 ",children:t.map((n,r)=>e.jsx("li",{className:"w-auto md:w-auto lg:w-auto",children:e.jsx("img",{src:`http://dev.ukrhouse.pp.ua:8080/${n.photoUrls}`,width:316,height:108,className:"w-auto max-w-full md:max-w-[189px] lg:max-w-[400px] h-auto rounded-[18px]",alt:n.caption||"News photo"})},r))}):null,e.jsx(o,{className:"lg:hidden",caption:s,link:l})]}),o=({onClick:a,className:x="",caption:d="Read more",btnLink:t="/news"})=>{const l=p();return e.jsx("button",{type:"button",className:`${x} mx-auto w-[100%] h-[44px] md:h-[54px] py-[10px] px-[18px] bg-transparent border border-[#1e1e1e] rounded-[10px] font-istok  font-bold text-[16px] md:text-[20px] text-[#1e1e1e] leading-[150%] md:leading-[170%] text-center  lg:py-[9px] lg:leading-[170%] hover:bg-[#ffd437] focus:bg-[#ffd437] transition duration-300 md:order-1 lg:order-1`,onClick:a||(()=>l(t)),children:d})};export{m as N,o as R};
