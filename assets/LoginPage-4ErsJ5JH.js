import{j as e,L as l,C as n}from"./index-BkKuPzRt.js";import{u as i}from"./index.esm-B5x0qvRq.js";import{I as t,o as x}from"./yup-5VTaAaTc.js";const p=()=>{const{register:s,handleSubmit:o,formState:{errors:r}}=i({mode:"onSubmit",resolver:x(n)}),a=m=>{console.log(m)};return e.jsxs("form",{onSubmit:o(a),className:"auth-form",children:[e.jsx("h2",{className:"font-proza-medium text-[26px] leading-[34px]",children:"Login"}),e.jsx(t,{label:"Email",name:"email",type:"email",placeholder:"Enter your email adress",register:s,errors:r}),e.jsx(t,{label:"Password",name:"password",type:"text",placeholder:"Enter your password",register:s,errors:r}),e.jsx(l,{to:"/auth/forgot",className:"text-sm leading-[18px] text-my-blue hover:underline",children:"Forgot password?"}),e.jsxs("label",{className:"flex items-center gap-3",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5",...s("remember")}),e.jsx("span",{className:"text-sm leading-[18px] text-[#666666]",children:"Remember me"})]}),e.jsx("button",{className:"primaryBtn w-full h-[56px]",type:"submit",children:"Login"})]})},h=()=>e.jsx(p,{});export{h as default};
