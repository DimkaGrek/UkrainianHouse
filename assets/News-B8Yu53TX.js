import{r,j as e}from"./vendor-8B-Zb1Ix.js";const n=({children:t,toggleModal:o})=>{r.useEffect(()=>{const s=a=>{a.code==="Escape"&&o()};return document.addEventListener("keydown",s),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",s),document.body.style.overflow="auto"}},[o]);const i=s=>{s.currentTarget===s.target&&o()};return e.jsx("div",{className:"flex items-center justify-center fixed bg-yellow-400 bg-opacity-40 w-screen h-screen left-0 top-0 z-100",onClick:i,children:e.jsxs("div",{className:"relative bg-white rounded-[30px] py-[35px] px-[80px] w-[700px] h-auto",children:[e.jsx("button",{type:"button",onClick:o,className:"absolute top-[25px] right-[25px] w-[32px] h-[32px] bg-red-500",children:"X"}),t]})})},d=()=>{const[t,o]=r.useState(!1);return[t,()=>{o(!t)}]},l=()=>{const[t,o]=d(),i=()=>{o()};return e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:i,className:"rounded-[10px] bg-blue-600 p-[10px]",children:"Open modal"}),t&&e.jsxs(n,{toggleModal:o,children:[e.jsx("h2",{children:"New modal"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam labore inventore earum, expedita excepturi nam perferendis temporibus alias modi consequatur optio reiciendis saepe a nemo exercitationem error, soluta quibusdam assumenda?"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam labore inventore earum, expedita excepturi nam perferendis temporibus alias modi consequatur optio reiciendis saepe a nemo exercitationem error, soluta quibusdam assumenda?"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam labore inventore earum, expedita excepturi nam perferendis temporibus alias modi consequatur optio reiciendis saepe a nemo exercitationem error, soluta quibusdam assumenda?"})]})]})};export{l as default};
