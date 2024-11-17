import{i as c,r as d,j as e,I as n,L as p,_ as v,u as I,c as y,f as k,B as z,a as $}from"./index-BF8NoceB.js";import{u as S}from"./useNews-DWHzTF5H.js";import{N as L}from"./ReadMoreButton-CWdOHPmx.js";import"./getFormattedDate-C-n2GMDM.js";const{homeImages:t}=c,C=[{logos:[t.logo1Img1,t.logo1Img2]},{logos:[t.logo2Img1,t.logo2Img2]},{logos:[t.logo3Img1,t.logo3Img2]},{logos:[t.logo4Img1,t.logo4Img2]},{logos:[t.logo5Img1,t.logo5Img2]},{logos:[t.logo6Img1,t.logo6Img2]},{logos:[t.logo7Img1,t.logo7Img2]},{logos:[t.logo8Img1,t.logo8Img2]},{logos:[t.logo9Img1,t.logo9Img2]},{logos:[t.logo10Img1,t.logo10Img2]},{logos:[t.logo11Img1,t.logo11Img2]},{logos:[t.logo12Img1,t.logo12Img2]},{logos:[t.logo13Img1,t.logo13Img2]}],u=()=>{const[s,i]=d.useState(window.innerWidth),[o,l]=d.useState({mission:!0,vision:!0,areas:!0});return d.useEffect(()=>{const r=()=>{i(window.innerWidth),l({mission:!0,vision:!0,areas:!0})};return window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]),{windowWidth:s,isOpen:o,setIsOpen:l}},E=s=>s>=1440?40:15,P=()=>{const{isOpen:s,setIsOpen:i}=u(),o=l=>{i(r=>({...r,[l]:!r[l]}))};return e.jsxs("section",{className:"mb-[34px] md:mb-[66px] lg:mb-[349px]",children:[e.jsx("h2",{className:"font-proza-medium mb-[24px] text-[20px] font-[600] leading-[1.6] md:mb-[34px] lg:mb-[74px] lg:text-[60px]",children:"About Us"}),e.jsxs("div",{className:"flex flex-col gap-[34px] md:flex-row lg:gap-[65px]",children:[e.jsxs("div",{className:"relative md:flex-1",children:[e.jsxs("h3",{className:`font-proza-medium text-[20px] font-[500] leading-[1.2] text-[#223f86] md:mb-[7px] lg:mb-[24px] lg:text-[36px] lg:font-[600] ${s.mission?"mb-[10px]":"mb-0"} `,children:["Mission:",e.jsx("button",{className:"absolute right-0 top-0 md:hidden",onClick:()=>o("mission"),children:e.jsx(n,{name:`${s.mission?"minus":"plus"}`,size:24})})]}),e.jsxs("ul",{className:`custom-list ml-[18px] text-[16px] leading-[1.37] transition-all duration-500 ease-in-out md:text-[14px] md:leading-[1.29] lg:text-[24px] lg:leading-[1.42] ${s.mission?"max-h-screen opacity-100":"transition-delay-500 max-h-0 opacity-0"} `,children:[e.jsx("li",{className:"relative",children:"To preserve the national identity;"}),e.jsx("li",{className:"relative",children:"Uniting Ukrainians;"}),e.jsxs("li",{className:"relative",children:["Create an ecosystem that ",e.jsx("br",{className:"hidden md:block"}),"helps them adapt to their ",e.jsx("br",{className:"hidden md:block"}),"new environment;"]}),e.jsxs("li",{className:"relative",children:["Promote Ukrainian ",e.jsx("br",{className:"hidden md:block"}),"traditions and conduct ",e.jsx("br",{className:"hidden md:block"}),"cultural dialogues with the Dutch;"]}),e.jsx("li",{className:"relative",children:"Defending Ukraine's democratic values and interests."})]})]}),e.jsxs("div",{className:"relative md:flex-1",children:[e.jsxs("h3",{className:`font-proza-medium text-[20px] font-[500] leading-[1.2] text-[#223f86] md:mb-[7px] lg:mb-[24px] lg:text-[36px] lg:font-[600] ${s.vision?"mb-[10px]":"mb-0"} `,children:["Vision:"," ",e.jsx("button",{className:"absolute right-0 top-0 md:hidden",onClick:()=>o("vision"),children:e.jsx(n,{name:`${s.vision?"minus":"plus"}`,size:24})})]}),e.jsxs("p",{className:`text-[16px] leading-[1.37] transition-all duration-500 ease-in-out md:text-[14px] md:leading-[1.29] lg:text-[24px] lg:leading-[1.42] ${s.vision?"max-h-screen opacity-100":"transition-delay-500 max-h-0 opacity-0"} `,children:["We aim for the Ukrainian ",e.jsx("br",{className:"hidden md:block"}),"House in Maastricht to become ",e.jsx("br",{className:"hidden md:block"}),"a source of inspiration and support for Ukrainians in the Netherlands, contributing to"," ",e.jsx("br",{className:"hidden md:block"}),"their adaptation and preserving their cultural heritage."]})]}),e.jsxs("div",{className:"relative md:flex-1",children:[e.jsxs("h3",{className:`font-proza-medium text-[20px] font-[500] leading-[1.2] text-[#223f86] md:mb-[7px] lg:mb-[24px] lg:text-[36px] lg:font-[600] ${s.areas?"mb-[10px]":"mb-0"} `,children:["Areas of Activity:"," ",e.jsx("button",{className:"absolute right-0 top-0 md:hidden",onClick:()=>o("areas"),children:e.jsx(n,{name:`${s.areas?"minus":"plus"}`,size:24})})]}),e.jsxs("ul",{className:`custom-list text-[16px]" md:md-0 mb-[34px] ml-[18px] leading-[1.37] transition-all duration-500 ease-in-out md:text-[14px] md:leading-[1.29] lg:text-[24px] lg:leading-[1.42] ${s.areas?"max-h-screen opacity-100":"transition-delay-500 max-h-0 opacity-0"} `,children:[e.jsx("li",{className:"relative",children:"Information Support;"}),e.jsx("li",{className:"relative",children:"Language Courses;"}),e.jsx("li",{className:"relative",children:"Cultural Events;"}),e.jsx("li",{className:"relative",children:"Educational Programmes;"}),e.jsx("li",{className:"relative",children:"Community Gatherings;"}),e.jsx("li",{className:"relative",children:"Intercultural Projects."})]})]})]})]})},U=()=>{const{windowWidth:s}=u(),i=E(s);return e.jsxs("ul",{className:"font-proza-medium md:grid-cols-1 md:grid-rows-4 mb-[44px] flex flex-col gap-[16px] text-[20px] font-semibold leading-[1.2] md:grid md:gap-[24px] lg:absolute lg:left-[586px] lg:top-[-180px] lg:mb-0 lg:gap-[34px] lg:gap-x-[84px] lg:gap-y-[24px] lg:leading-[1.6]",children:[e.jsxs("li",{className:"flex items-center gap-[8px] md:col-start-1 lg:gap-[24px]",children:[e.jsx(n,{size:i}),"Ukrainian Echo"]}),e.jsxs("li",{className:"flex items-center gap-[8px] font-[600] md:col-start-1 lg:gap-[24px]",children:[e.jsx(n,{size:i})," Dutch Lessons"]}),e.jsxs("li",{className:"flex items-center gap-[8px] md:col-start-1 lg:gap-[24px]",children:[e.jsx(n,{size:i}),"Cultural Events"]}),e.jsxs("li",{className:"flex items-center gap-[8px] md:col-start-1 lg:gap-[24px]",children:[e.jsx(n,{size:i})," Integration Lectures"]}),e.jsxs("li",{className:"flex items-center gap-[8px] md:col-start-2 md:row-start-1 lg:gap-[24px]",children:[e.jsx(n,{size:i})," Creative Workshops"]}),e.jsxs("li",{className:"flex items-center gap-[8px] md:col-start-2 md:row-start-2 lg:gap-[24px]",children:[e.jsx(n,{size:i})," Yoga Sessions"]}),e.jsxs("li",{className:"flex items-center gap-[8px] font-[600] md:col-start-2 md:row-start-3 lg:gap-[24px]",children:[e.jsx(n,{size:i})," Cinema"]}),e.jsxs("li",{className:"flex items-center gap-[8px] md:col-start-2 md:row-start-4 lg:gap-[24px]",children:[e.jsx(n,{size:i}),e.jsx(p,{to:"/library",className:"border-b-2 border-[#2355cc] text-[#2355cc]",children:"Library"})]})]})},W=()=>{const{homeImages:s}=c;return e.jsxs("section",{className:"relative bg-[url('../../assets/images/home/ManwithFlag@2x_tablet.webp')] lg:mb-[40px]",children:[e.jsxs("div",{className:"md:mb-[40px] md:flex md:flex-row-reverse md:justify-between lg:mb-[28px] lg:flex-col",children:[e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${s.friendsImg5} 1x, ${s.friendsImg6} 2x`,height:"413",width:"473",type:"image/webp"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${s.friendsImg3} 1x, ${s.friendsImg4} 2x`,type:"image/webp",height:"274",width:"310"}),e.jsx("img",{className:"mb-[34px] md:mb-0 lg:absolute lg:left-[-100px] lg:top-[-380px]",src:s.friendsImg1,srcSet:`${s.friendsImg1} 1x, ${s.friendsImg2} 2x`,alt:"Photo of friends",height:"247",width:"300"})]}),e.jsxs("div",{className:"md:w-[272px] lg:w-[516px]",children:[e.jsx("h2",{className:"font-proza-semibold mb-[24px] text-[20px] font-[600] leading-[1.6] md:text-[26px] md:font-[500] md:leading-[1.3] lg:mb-[50px] lg:text-[60px]",children:"Get Involved!"}),e.jsxs("p",{className:"mb-[30px] font-istok text-[16px] leading-[1.37] md:mb-[28px] md:text-[14px] md:leading-[1.29] lg:mb-0 lg:text-[24px] lg:leading-[1.42]",children:["Come ",e.jsx("span",{className:"md:font-[700] md:leading-[1.43] lg:font-[400]",children:"join"})," our vibrant activities and"," ",e.jsxs("span",{className:"md:font-[700] md:leading-[1.43] lg:font-[400]",children:[" ",e.jsx("br",{className:"hidden md:block lg:hidden"}),"explore"]})," ","new horizons. Whether you're into learning, having fun, or finding inner peace, there's ",e.jsx("span",{className:"lg:font-[700]",children:" something for everyone "})," here."]}),e.jsxs("p",{className:"mb-[44px] font-istok text-[16px] leading-[1.37] md:hidden",children:["With a vision of bridging cultures and building connections, we strive to be a beacon of Ukrainian ",e.jsx("span",{className:"font-[700] md:font-[400]",children:"culture and identity"})," ",e.jsx("span",{className:"block md:inline",children:"in the heart of Limburg."})]})]})]}),e.jsxs("div",{className:"flex-col-reverse md:flex lg:relative",children:[e.jsx(U,{}),e.jsxs("div",{className:"top-[160px] flex-col gap-[24px] md:absolute md:flex lg:relative lg:top-0 lg:w-[516px]",children:[e.jsxs("p",{className:"mb-[20px] font-istok leading-[1.37] md:mb-0 md:text-[14px] md:leading-[1.29] lg:text-[24px] lg:leading-[1.42]",children:["Step into our center and dive into the",e.jsx("br",{})," rich world of"," ",e.jsx("span",{className:"font-[700] md:font-[400] lg:font-[700]",children:"Ukrainian culture!"})]}),e.jsx(p,{to:"/contacts",className:"mb-[75px] flex h-[44px] w-full items-center justify-center gap-[8px] rounded-[10px] border-[1px] border-[#1e1e1e] text-[16px] font-[700] leading-[1.5] text-[#1e1e1e] transition duration-300 hover:bg-[#ffc520] focus:bg-[#ffc520] md:mb-0 md:w-[278px] lg:h-[52px] lg:w-[338px] lg:text-[20px]","aria-label":"Link to contacts",children:"Contact Us to Get More Details"})]})]})]})},T=()=>{const{homeImages:s}=c;return e.jsxs("section",{className:"mb-[34px] md:mb-[80px] lg:mb-[74px]",children:[e.jsxs("div",{className:"flex flex-col gap-[16px] md:mb-[40px] md:block lg:mb-[57px]",children:[e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${s.titleImg5} 1x, ${s.titleImg6} 2x`,type:"image/webp",height:"316",width:"600"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${s.titleImg3} 1x, ${s.titleImg4} 2x`,type:"image/webp",height:"188",width:"360"}),e.jsx("img",{height:"180",width:"342",srcSet:`${s.titleImg1} 1x, ${s.titleImg2} 2x`,src:s.titleImg1,alt:"Title",className:"lg:mb-[131px]"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"relative mb-[24px] md:mb-0",children:[e.jsx("p",{className:"w-[106px] font-istok text-[18px] leading-[1.33] md:absolute md:right-[140px] md:top-[-45px] md:w-[185px] md:text-[16px] lg:right-[245px] lg:top-[-210px] lg:w-[334px] lg:text-[28px] lg:leading-[1.29]",children:"Community of Ukrainians in Limburg and beyond"}),e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${s.flagImg5} 1x, ${s.flagImg6} 2x`,height:"362",width:"400",type:"image/webp"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${s.flagImg3} 1x, ${s.flagImg4} 2x`,type:"image/webp",height:"177",width:"193"}),e.jsx("img",{src:s.flagImg1,srcSet:`${s.flagImg1} 1x, ${s.flagImg2} 2x`,height:"148",width:"177",alt:"Photo of man with ukrainian flag",className:"absolute right-0 top-[-33px] md:right-0 md:top-[-182px] lg:top-[-445px]"})]})]}),e.jsxs(p,{to:"https://www.facebook.com/ua.maastricht",className:"flex h-[44px] w-full items-center justify-center gap-[8px] rounded-[10px] border-[1px] border-[#1e1e1e] text-[16px] font-[700] leading-[1.5] transition duration-300 hover:bg-[#ffd437] focus:bg-[#ffd437] md:hidden",target:"_blank","aria-label":"Link to Facebook",children:[e.jsx(n,{name:"fb",className:"fill-[#1e1e1e]",size:"24"}),"Let's be friends on facebook"]})]})]}),e.jsx(D,{})]})},A=({news:s})=>{const[i,o]=d.useState(0),[l,r]=d.useState(1),[x,f]=d.useState(0);d.useEffect(()=>{const a=()=>{window.innerWidth>=1440?r(s==null?void 0:s.length):window.innerWidth>=768?r(2):r(1)};return window.addEventListener("resize",a),a(),()=>{window.removeEventListener("resize",a)}},[s.length]);const b=()=>i===s.length-1&&l===2?[s[i],s[0]]:s.slice(i,i+l),j=a=>{o(a)},N=a=>{window.innerWidth>=1440||f(a.touches[0].clientX)},w=a=>{if(window.innerWidth>=1440)return;const m=a.changedTouches[0].clientX,h=20;x-m>h?o(g=>(g+1)%s.length):m-x>h&&o(g=>(g-1+s.length)%s.length)};return e.jsx("section",{className:"mb-[34px] md:mb-[40px] lg:mb-[100px]",children:e.jsxs("div",{className:"flex flex-col justify-center gap-[16px]",onTouchStart:N,onTouchEnd:w,children:[e.jsx("div",{className:"flex gap-[24px]",children:b().map((a,m)=>e.jsx(L,{item:a,className:"h-[439px] md:h-[440px] lg:h-[491px]"},m))}),e.jsx("div",{className:"flex items-center justify-center gap-[6px] lg:hidden",children:s.map((a,m)=>e.jsx("span",{className:`cursor-pointer rounded-[50%] border-[2px] border-my-black1 ${m===i?"h-[10px] w-[10px] border-none bg-my-blue":"h-[8px] w-[8px]"}`,onClick:()=>j(m)},m))})]})})},D=()=>e.jsx("div",{className:"hidden md:block",children:e.jsx(v,{direction:"right",children:e.jsx("ul",{className:"flex items-center justify-center overflow-y-hidden md:gap-[10px] lg:gap-[14px]",children:C.map(({logos:s},i)=>e.jsx("li",{className:"flex h-[73px] w-[122px] items-center justify-center lg:h-[120px]",children:e.jsx("img",{src:s[0],srcSet:`${s[0]} 1x, ${s[1]} 2x`,alt:"Partner's logo"})},i))})})}),G=()=>{const s=I(),{news:i,isLoading:o}=S(),{homeImages:l}=c;return d.useEffect(()=>{s(y())},[s]),d.useEffect(()=>{(async()=>{const x={params:{page:0,size:3,status:"PUBLISHED"}};try{await s(k(x)).unwrap()}catch{z.error("Something went wrong. Please, reload the page.")}})()},[s]),e.jsxs(e.Fragment,{children:[o&&e.jsx($,{}),e.jsxs("div",{className:"relative",children:[e.jsxs("picture",{className:"absolute left-[10px] top-0 z-[-1] md:left-[20px] lg:left-[100px]",children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:l.BgImg_desktop,height:"1711",width:"1040",loading:"lazy"}),e.jsx("source",{media:"(min-width: 768px)",srcSet:l.BgImg_tablet,height:"1093",width:"664",loading:"lazy"}),e.jsx("img",{src:l.BgImg_mobile,height:"525",width:"319",alt:"Photo of Tryzub",loading:"lazy"})]}),e.jsx(T,{}),e.jsx(A,{news:i}),e.jsx(P,{}),e.jsx(W,{})]})]})};export{G as default};
