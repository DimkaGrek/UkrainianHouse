import{i as j,e as f,j as s,b as w,M as k,I as y,r as p,g as N,h as B,k as S,S as L,a as I}from"./index-BF8NoceB.js";import{u}from"./useBooks-CGTMldD5.js";import{u as C}from"./useInfiniteScroll-BoCv2_DG.js";const{libraryImages:e}=j,b=[[e.mobl_1_1x,e.mobl_1_2x,e.desk_1_1x,e.desk_1_2x],[e.mobl_2_1x,e.mobl_2_2x,e.desk_2_1x,e.desk_2_2x],[e.mobl_3_1x,e.mobl_3_2x,e.desk_3_1x,e.desk_3_2x],[e.mobl_4_1x,e.mobl_4_2x,e.desk_4_1x,e.desk_4_2x],[e.mobl_5_1x,e.mobl_5_2x,e.desk_5_1x,e.desk_5_2x],[e.mobl_6_1x,e.mobl_6_2x,e.desk_6_1x,e.desk_6_2x],[e.mobl_7_1x,e.mobl_7_2x,e.desk_7_1x,e.desk_7_2x],[e.mobl_8_1x,e.mobl_8_2x,e.desk_8_1x,e.desk_8_2x],[e.mobl_9_1x,e.mobl_9_2x,e.desk_9_1x,e.desk_9_2x],[e.mobl_10_1x,e.mobl_10_2x,e.desk_10_1x,e.desk_10_2x],[e.mobl_11_1x,e.mobl_11_2x,e.desk_11_1x,e.desk_11_2x],[e.mobl_12_1x,e.mobl_12_2x,e.desk_12_1x,e.desk_12_2x],[e.mobl_13_1x,e.mobl_13_2x,e.desk_13_1x,e.desk_13_2x],[e.mobl_14_1x,e.mobl_14_2x,e.desk_14_1x,e.desk_14_2x],[e.mobl_15_1x,e.mobl_15_2x,e.desk_15_1x,e.desk_15_2x],[e.mobl_16_1x,e.mobl_16_2x,e.desk_16_1x,e.desk_16_2x],[e.mobl_17_1x,e.mobl_17_2x,e.desk_17_1x,e.desk_17_2x],[e.mobl_18_1x,e.mobl_18_2x,e.desk_18_1x,e.desk_18_2x],[e.mobl_19_1x,e.mobl_19_2x,e.desk_19_1x,e.desk_19_2x],[e.mobl_20_1x,e.mobl_20_2x,e.desk_20_1x,e.desk_20_2x],[e.mobl_21_1x,e.mobl_21_2x,e.desk_21_1x,e.desk_21_2x],[e.mobl_22_1x,e.mobl_22_2x,e.desk_22_1x,e.desk_22_2x],[e.mobl_23_1x,e.mobl_23_2x,e.desk_23_1x,e.desk_23_2x],[e.mobl_24_1x,e.mobl_24_2x,e.desk_24_1x,e.desk_24_2x],[e.mobl_25_1x,e.mobl_25_2x,e.desk_25_1x,e.desk_25_2x],[e.mobl_26_1x,e.mobl_26_2x,e.desk_26_1x,e.desk_26_2x],[e.mobl_27_1x,e.mobl_27_2x,e.desk_27_1x,e.desk_27_2x],[e.mobl_28_1x,e.mobl_28_2x,e.desk_28_1x,e.desk_28_2x],[e.mobl_29_1x,e.mobl_29_2x,e.desk_29_1x,e.desk_29_2x],[e.mobl_30_1x,e.mobl_30_2x,e.desk_30_1x,e.desk_30_2x],[e.mobl_31_1x,e.mobl_31_2x,e.desk_31_1x,e.desk_31_2x],[e.mobl_32_1x,e.mobl_32_2x,e.desk_32_1x,e.desk_32_2x]],_=["Here you can find your favorite book waiting for you in our library","Here you can find your favorite book, search by title, author, or genre..."],v=()=>{const{books:o}=u(),{innerWidth:t}=f(),a=[];if(t>=1440)for(let x=0;x<o.length;x+=3)a.push(o.slice(x,x+3));else for(let x=0;x<o.length;x+=2)a.push(o.slice(x,x+2));const i=t>=375?375*160/360:t*160/360,m=(x,l)=>x%2===0?"md:justify-start":l<2?"md:justify-center md:pl-[160px]":"md:justify-end";return s.jsx("div",{className:"mb-[150px]",children:a.map((x,l)=>{const n=m(l,x.length);return s.jsxs("div",{className:"relative mb-[436px] h-auto md:mb-[75px] lg:mb-[220px]",children:[s.jsx(E,{index:l}),s.jsx("ul",{className:`flex justify-between gap-x-[5px] ${n} md:gap-x-[16px] lg:gap-x-[50px]`,children:x.map(d=>s.jsx("li",{className:"lg:flex-shrink-1 flex-shrink-0 lg:w-[238px]",style:{width:t<1440?`${i}px`:void 0},children:s.jsx(J,{item:d})},d.id))})]},l)})})},J=({item:{coverImageUrl:o,author:t,title:a,publicationYear:i,pageCount:m,genre:x,description:l}})=>{const[n,d]=w();return s.jsxs(s.Fragment,{children:[s.jsxs("div",{onClick:d,className:"group w-full cursor-pointer rounded-[18px] border border-transparent p-1 shadow-lg transition duration-300 hover:bg-my-lightblue focus-visible:bg-my-lightblue active:bg-my-lightblue lg:w-[260px] lg:p-4",children:[s.jsx("div",{className:"mb-[16px] overflow-hidden rounded-[18px] transition duration-300 group-hover:text-[#fbfbfb] group-focus-visible:text-[#fbfbfb] group-active:text-[#fbfbfb] lg:mb-[6px]",children:s.jsx("img",{className:"h-[260px] w-[163px] rounded-[18px] transition duration-300 group-hover:scale-[1.05] group-focus:scale-[1.05] group-active:scale-[1.05] lg:h-[380px] lg:w-[238px]",src:o,alt:`книга бібліотеки, автор: ${t}, назва твору: ${a} `})}),s.jsx("h4",{className:"mb-[4px] line-clamp-1 text-center font-istok text-[18px] leading-[1] text-[#1e1e1e] transition duration-300 lg:text-[28px] lg:leading-[1.28571]",children:t}),s.jsxs("ul",{className:"pb-2 pl-2 pr-2 pt-0",children:[s.jsx("li",{children:s.jsx("p",{className:"mb-[4px] line-clamp-1 text-center font-proza text-[20px] font-semibold leading-[1.2] text-[#1e1e1e] lg:font-semibold lg:leading-[1.6]",children:a})}),s.jsx("li",{children:s.jsx("p",{className:"line-clamp-1 text-center font-istok text-[12px] leading-[1.5] text-[#666] lg:text-start lg:text-[20px] lg:italic lg:leading-normal",children:x})}),s.jsx("li",{children:s.jsxs("p",{className:"flex items-center justify-between font-istok text-[14px] leading-[1.28571] text-[#666666] lg:text-[20px] lg:italic lg:leading-normal lg:text-[#1e1e1e]",children:[m," pages",s.jsx("span",{className:"text-right text-[16px] leading-[1.375]",children:i})]})})]})]}),n&&s.jsxs(k,{toggleModal:d,isOpen:n,className:"bg-white py-[58px] pl-[20px] pr-[10px] md:py-[58px] md:pl-[40px] md:pr-[25px]",children:[" ",s.jsx(M,{coverImageUrl:o,author:t,title:a,publicationYear:i,pageCount:m,genre:x,description:l})]})]})},M=({coverImageUrl:o,author:t,title:a,publicationYear:i,pageCount:m,genre:x,description:l})=>s.jsxs("div",{className:"relative items-start md:pr-[205px] lg:pr-[415px]",children:[s.jsxs("div",{className:"flex gap-[10px]",children:[s.jsx("img",{className:"mb-[16px] h-[260px] w-[163px] rounded-[18px] sm-max:h-[159px] sm-max:w-[100px] md:absolute md:right-0 md:top-[90px] md:h-[324px] md:w-[200px] lg:right-4 lg:top-0 lg:h-auto lg:w-[390px]",src:o,alt:`книга бібліотеки, автор: ${t}, назва твору: ${a} `,loading:"lazy"}),s.jsxs("div",{className:"flex flex-col",children:[s.jsx("h3",{id:"book-title",className:"mb-[4px] font-proza text-[20px] font-semibold leading-[1.2] text-[#1e1e1e] md:mb-[15px] md:text-[30px] md:leading-[1.1] lg:text-[60px] lg:font-medium lg:leading-[1.1]",children:a}),s.jsx("h3",{className:"pb-[4px] font-istok text-[18px] font-normal leading-[1] text-[#1e1e1e] md:text-[16px] md:font-bold md:leading-[1.375] lg:text-[24px] lg:font-bold lg:leading-[1.41667]",children:t}),s.jsx("p",{className:"pb-[4px] font-istok text-[12px] font-normal leading-[1.5] text-[#666] md:text-[16px] md:italic md:leading-[1.375]",children:x})," ",s.jsxs("p",{className:"flex items-center justify-between pb-[4px] pr-[20px] font-istok text-[12px] leading-[1.5] text-[#666666] md:hidden md:text-[16px] md:leading-[1.375]",children:[m," pages",s.jsx("span",{className:" ",children:i})]}),s.jsx("p",{className:"pb-[4px] font-istok text-[12px] font-normal leading-[1.5] text-[#f9a407] md:text-[16px] lg:mb-[6px] lg:text-[18px]",children:"*книгу можна знайти в бібліотеці «Оселя»."})]})]}),s.jsxs("article",{children:[s.jsx("p",{className:"scrollbar h-[285px] pr-2 font-istok text-[14px] font-normal leading-[1.28571] text-[#1e1e1e] md:mb-[8px] md:text-[16px] md:leading-[1.375] lg:mb-[16px] lg:h-[385px] lg:text-[20px] lg:leading-[1.4]",children:l}),s.jsxs("p",{className:"hidden items-center justify-between pr-[20px] font-istok md:flex md:text-[16px] md:font-normal md:italic md:leading-[1.375] md:text-[#666666]",children:[m," pages",s.jsx("span",{className:" ",children:i})]})]}),s.jsx(y,{name:"heart",size:65,className:"absolute bottom-[-40px] right-[20px] size-[35px] fill-[#daefff] md:bottom-auto md:right-[50px] md:top-[-20px] md:size-[65px] lg:right-[43%] lg:top-[90px]",viewbox:"36"})]}),E=({index:o})=>{const[t,a]=p.useState(null),[i,m]=p.useState(null);if(p.useEffect(()=>{const n=()=>Math.floor(Math.random()*31);a(n()),m(n())},[]),t===null||i===null)return null;const x=b[t]||[],l=b[i]||[];return s.jsx("div",{children:o%2===0?s.jsxs("picture",{children:[s.jsx("source",{media:"(min-width: 768px)",srcSet:`${x[2]} 1x, ${x[3]} 2x`,type:"image/webp"}),s.jsx("source",{media:"(min-width: 320px)",srcSet:`${x[0]} 1x, ${x[1]} 2x`,type:"image/webp"}),s.jsx("img",{className:"absolute right-1/2 top-[395px] w-[324px] translate-x-1/2 md:right-0 md:top-0 md:w-[300px] md:translate-x-0 lg:right-[-60px] lg:top-[-20px] lg:w-[430px]",src:x[0],alt:`Image with a quote ${t}`,loading:"lazy"})]}):s.jsxs("picture",{children:[s.jsx("source",{media:"(min-width: 768px)",srcSet:`${l[2]} 1x, ${l[3]} 2x`,type:"image/webp"}),s.jsx("source",{media:"(min-width: 320px)",srcSet:`${l[0]} 1x, ${l[1]} 2x`,type:"image/webp"}),s.jsx("img",{className:"absolute right-1/2 top-[395px] w-[324px] translate-x-1/2 md:left-0 md:top-0 md:w-[300px] md:translate-x-0 lg:left-[-60px] lg:right-auto lg:top-[-20px] lg:w-[430px]",src:l[0],alt:`Image with a quote ${i}`,loading:"lazy"})]})})},r="/UkrainianHouse/assets/ivan_library_not_found@1x-DpIJ21tm.png",h="/UkrainianHouse/assets/social_media_icon1x-PriC1LdU.png",Q="/UkrainianHouse/assets/social_media_icon2x-Cb8LW9O9.png",g="data:image/png;base64,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",A="data:image/png;base64,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",Y=()=>s.jsx("section",{className:"md:pl-[55px] lg:pl-8 lg:pr-6",children:s.jsxs("div",{className:"relative flex h-[353px] flex-col items-center justify-center pt-[68px] md:ml-auto md:mr-auto md:w-[347px] lg:flex lg:h-full lg:flex-row lg:items-center lg:justify-end lg:pt-0 lg:md:w-full",children:[s.jsxs("picture",{className:"absolute bottom-[188px] right-[5px] h-[102px] w-[102px] lg:bottom-[14px] lg:left-[7%] lg:h-[238px] lg:w-[238px]",children:[s.jsx("source",{media:"(min-width: 1440px)",srcSet:`${h} 1x, ${Q} 2x`,type:"image/png"}),s.jsx("source",{media:"(min-width: 768px)",srcSet:`${g} 1x, ${A} 2x`,type:"image/png"}),s.jsx("source",{media:"(min-width: 320px)",srcSet:`${g} 1x, ${A} 2x`,type:"image/png"}),s.jsx("img",{className:"w-full",srcSet:`${g} 1x, ${A} 2x`,src:h,alt:" Image with a quote Ivan Franko ",loading:"lazy"})]}),s.jsx("p",{className:"font-sans absolute left-0 top-0 w-[342px] text-[26px] font-medium leading-tight text-[#1e1e1e] lg:left-[41%] lg:top-[27%] lg:w-[446px] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:text-4xl lg:font-semibold",children:"Sorry, but nothing was found for this request..."}),s.jsxs("picture",{className:"w-[342px] md:w-[347px] lg:w-[587px]",children:[s.jsx("source",{media:"(min-width: 768px)",srcSet:`${r} 1x, ${r} 2x`,type:"image/png"}),s.jsx("source",{media:"(min-width: 320px)",srcSet:`${r} 1x, ${r} 2x`,type:"image/png"}),s.jsx("img",{className:"w-full",srcSet:`${r} 1x, ${r} 2x`,src:r,alt:" Image with a quote Ivan Franko ",loading:"lazy"})]})]})}),z=()=>{const{books:o,page:t,isLoading:a,error:i}=u(),{keyword:m,observerTarget:x,onSearchSubmit:l}=C(o,t,S,a,i,B,N),[n,d]=p.useState(""),{innerWidth:c}=f();return p.useEffect(()=>{d(c>=1440?_[0]:_[1])},[c]),s.jsxs("section",{className:"pb-[74px] md:pb-[50px] lg:pb-0",children:[s.jsxs("div",{className:"mb-[40px] flex flex-col items-center justify-between gap-y-[6px] md:items-end lg:mb-[64px] lg:flex-row",children:[s.jsxs("div",{className:"w-full items-center justify-between gap-10 md:flex lg:w-auto lg:justify-start",children:[s.jsx("h3",{className:"md:font-proza-semibold lg:font-proza-medium hidden md:block md:text-[20px] md:font-semibold md:leading-[160%] md:text-[#1e1e1e] lg:text-[60px] lg:font-medium lg:leading-[130%]",children:"Library"}),s.jsx("div",{className:"md:w-[500px] lg:w-[540px]",children:s.jsx(L,{setQuery:l})})]}),s.jsx("p",{className:"font-sans font-istok text-[14px] font-normal leading-[128.571%] text-[#1e1e1e] md:w-[500px] lg:w-[426px] lg:text-[28px]",children:n})]}),!o.length&&m&&!a?s.jsx(Y,{}):s.jsx(v,{}),s.jsx("div",{ref:x}),a&&s.jsx(I,{placement:"bottom"})]})};export{z as default};
