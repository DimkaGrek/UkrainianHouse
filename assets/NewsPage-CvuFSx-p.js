import{b as v,j as e,M as y,r as o,u as M,f as S,s as I,B as i,c as w,d as E,S as P,a as k}from"./index-DNdD33I3.js";import{u as g}from"./useNews-CEQFERFk.js";import{R as z,a as L,N as A}from"./ReadMoreButton-Blx4Y1By.js";import{I as B}from"./InfoMessage-XQkfBSy2.js";import"./getFormattedDate-C-n2GMDM.js";const D=()=>{var m,p;const{announceNews:s}=g(),[r,t]=v();return s.length?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col-reverse gap-[16px] bg-[#ffd4377b] p-[18px] rounded-[18px] mb-[34px] md:flex-row md:justify-between  md:p-[24px] lg:py-[57px] lg:px-[40px] lg:mb-[44px] shadow-sm",children:[e.jsxs("div",{className:"md:min-w-[50%] lg:max-w-[748px] flex flex-col  min-h-full",children:[e.jsx("h3",{className:"font-proza-semibold text-[20px] font-semibold text-[#1e1e1e] mb-[4px] leading-[160%] md:font-proza-medium md:font-medium md:text-[26px] md:leading-[131%] md:mb-[8px] lg:font-proza-semibold lg:font-semibold lg:text-[36px] lg:leading-[111%] lg:mb-[20px] ",children:"Coming soon..."}),e.jsx("p",{className:"font-istok text-[16px] text-[#666] mb-[16px] leading-[137%] md:text-[18px] md:leading-[133%] lg:text-[22px] lg:leading-[129%] line-clamp-3 md:line-clamp-4 lg:line-clamp-6",children:s[0].content}),e.jsx("div",{className:"mt-auto",children:e.jsx(z,{toggleModal:t})})]}),e.jsx("img",{className:"shrink-0 md:max-w-none md:w-[300px] lg:w-[450px] lg:max-w-[500px] max-h-[450px] rounded-[10px] md:rounded-[18px]",src:(m=s[0].photoUrls[0])==null?void 0:m.photoUrls,alt:`${((p=s[0].photoUrls[0])==null?void 0:p.caption)||"Announce photo"}`,width:"308",height:"250"})]}),r&&e.jsxs(y,{toggleModal:t,className:"py-[58px] pl-[20px] pr-[10px] md:py-[58px] md:pl-[40px] md:pr-[25px] bg-white",children:[" ",e.jsx(L,{...s[0]})]})]}):null},R=()=>{const{news:s}=g();return e.jsx("ul",{className:"flex flex-col gap-y-[16px] mb-[34px] md:mb-[40px] lg:mb-[44px] md:flex-row md:flex-wrap md:gap-x-[20px]  lg:gap-x-[24px] lg:gap-y-[44px]",children:s.map((r,t)=>e.jsx(A,{item:r},t))})},H=()=>{const{news:s,page:r,isLoading:t,error:m}=g(),[p,b]=o.useState(!0),[x,N]=o.useState(""),[f,h]=o.useState(!1),n=M(),u=o.useRef(null),d=o.useCallback(()=>{const a={params:{page:r,status:"PUBLISHED",...x&&{keyword:x}}};n(S(a)).unwrap().then(l=>{n(I(l.currentPage+1));const c=l.currentPage+1<l.totalPages;b(c),!c&&s.length&&i.info("You have reached the end of the news list.")}).catch(l=>i.error(l.message))},[r,x,n,s.length]);o.useEffect(()=>{n(w()),n(E()).unwrap().then().catch(a=>i.error(a.message))},[n]),o.useEffect(()=>{f&&!t&&(d(),h(!1))},[f,d,n,t]),o.useEffect(()=>{const a=u.current,l=new IntersectionObserver(c=>{c[0].isIntersecting&&p&&!t&&!m&&d()},{threshold:1});return a&&l.observe(a),()=>{a&&l.unobserve(a)}},[n,d,m,p,x,r,t]);const j=a=>{n(w()),N(a),h(!0)};return e.jsx(e.Fragment,{children:e.jsxs("section",{className:"pb-[74px] md:pb-[50px] lg:pb-[110px]",children:[e.jsxs("div",{className:"flex md:justify-between md:items-center mb-5 md:mb-[40px] lg:mb-[44px]",children:[e.jsx("h3",{className:"hidden md:block font-proza-semibold font-semibold text-[20px] text-[#222] leading-[160%] lg:font-proza-medium lg:font-medium lg:text-[60px] lg:leading-[130%]",children:"News"}),e.jsx("div",{className:"md:w-[500px] lg:w-[654px]",children:e.jsx(P,{setQuery:j})})]}),e.jsx(D,{}),!s.length&&x&&!t?e.jsx(B,{keyword:x}):e.jsx(R,{}),e.jsx("div",{ref:u}),t&&e.jsx(k,{placement:"bottom"})]})})};export{H as default};