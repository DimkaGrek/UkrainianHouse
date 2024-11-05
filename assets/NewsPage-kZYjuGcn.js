import{b as v,j as e,M as y,r as o,u as M,f as I,s as S,B as g,c as w,d as P,e as E,a as k}from"./index-D6rhmND_.js";import{u as f}from"./useNews-CreyEg-x.js";import{R as z,a as L,N as R}from"./ReadMoreButton-BIAncnt4.js";import{I as T,a as B}from"./InfoMessage-dHSdY7CP.js";import"./getFormattedDate-C-n2GMDM.js";const D=()=>{var p,m,d;const{announceNews:s}=f(),[n,t]=v();return s!=null&&s.length?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col-reverse gap-[16px] bg-[#fff5c6] p-[18px] rounded-[18px] mb-[34px] md:flex-row md:gap-[12px] md:p-[24px] md:bg-[#ffd437] md:bg-opacity-40 lg:gap-[40px] lg:bg-opacity-50 lg:py-[57px] lg:px-[40px] lg:mb-[44px] shadow-sm",children:[e.jsxs("div",{className:"lg:max-w-[748px] flex flex-col  min-h-full",children:[e.jsx("h3",{className:"font-proza-semibold text-[20px] font-semibold text-[#1e1e1e] mb-[4px] leading-[160%] md:font-proza-medium md:font-medium md:text-[26px] md:leading-[131%] md:mb-[8px] lg:font-proza-semibold lg:font-semibold lg:text-[36px] lg:leading-[111%] lg:mb-[20px] ",children:"Coming soon..."}),e.jsx("p",{className:"font-istok text-[16px] text-[#666] mb-[16px] leading-[137%] md:text-[18px] md:leading-[133%] lg:text-[22px] lg:leading-[129%] line-clamp-3 md:line-clamp-4 lg:line-clamp-6",children:(p=s[0])==null?void 0:p.content}),e.jsx("div",{className:"mt-auto",children:e.jsx(z,{toggleModal:t})})]}),e.jsx("img",{className:"shrink-0 md:max-w-none md:w-[300px] lg:w-[450px] lg:max-w-[500px] max-h-[450px] rounded-[10px] md:rounded-[18px]",src:(d=(m=s[0])==null?void 0:m.photoUrls[0])==null?void 0:d.photoUrls,alt:"People",width:"308",height:"250"})]}),n&&e.jsxs(y,{toggleModal:t,className:"py-[58px] pl-[20px] pr-[10px] md:py-[58px] md:pl-[40px] md:pr-[25px] bg-white",children:[" ",e.jsx(L,{...s[0]})]})]}):null},A=()=>{const{news:s}=f();return e.jsx("ul",{className:"flex flex-col gap-y-[16px] mb-[34px] md:mb-[40px] lg:mb-[44px] md:flex-row md:flex-wrap md:gap-x-[20px]  lg:gap-x-[24px] lg:gap-y-[44px]",children:s.map((n,t)=>e.jsx(R,{item:n},t))})},K=()=>{const{news:s,page:n,isLoading:t,error:p}=f(),[m,d]=o.useState(!0),[x,N]=o.useState(""),[h,u]=o.useState(!1),l=M(),b=o.useRef(null),c=o.useCallback(()=>{const a={params:{page:n,status:"PUBLISHED",...x&&{keyword:x}}};l(I(a)).unwrap().then(r=>{l(S(r.currentPage+1));const i=r.currentPage+1<r.totalPages;d(i),!i&&s.length&&g.info("You have reached the end of the news list.")}).catch(r=>g.error(r.message))},[n,x,l,s.length]);o.useEffect(()=>{l(w()),l(P()).unwrap().then().catch(a=>g.error(a.message))},[l]),o.useEffect(()=>{h&&!t&&(c(),u(!1))},[h,c,l,t]),o.useEffect(()=>{const a=b.current,r=new IntersectionObserver(i=>{i[0].isIntersecting&&m&&!t&&!p&&c()},{threshold:1});return a&&r.observe(a),()=>{a&&r.unobserve(a)}},[l,c,p,m,x,n,t]);const j=a=>{l(w()),N(a),u(!0)};return e.jsx(e.Fragment,{children:e.jsxs("section",{className:"pb-[74px] md:pb-[50px] lg:pb-[110px]",children:[e.jsxs("div",{className:"flex md:justify-between md:items-center mb-5 md:mb-[40px] lg:mb-[44px]",children:[e.jsx("h3",{className:"hidden md:block font-proza-semibold font-semibold text-[20px] text-[#222] leading-[160%] lg:font-proza-medium lg:font-medium lg:text-[60px] lg:leading-[130%]",children:"News"}),e.jsx("div",{className:"md:w-[500px] lg:w-[654px]",children:e.jsx(E,{setQuery:j})})]}),e.jsx(D,{}),!s.length&&x?e.jsx(T,{type:B.NoResults,searchValue:x}):e.jsx(A,{}),e.jsx("div",{ref:b}),t&&e.jsx(k,{placement:"bottom"})]})})};export{K as default};
