import{a as p,k as u,j as e,W as o,L as d,o as c,X as h,B as a,Y as x}from"./index-CZDjmvx5.js";const g=()=>{const t=p(),{register:s,handleSubmit:n,formState:{errors:r}}=u({mode:"onSubmit",resolver:c(x)}),l=i=>{t(h(i)).unwrap().catch(m=>{m.slice(-3)==="401"?a.error("Wrong email or password."):a.error("Something went wrong. Please, reload the page.")})};return e.jsxs("form",{onSubmit:n(l),className:"auth-form",children:[e.jsx("h2",{className:"font-proza-medium text-[26px] leading-[34px]",children:"Login"}),e.jsx(o,{label:"Email",name:"username",type:"email",placeholder:"Enter your email adress",register:s,errors:r}),e.jsx(o,{label:"Password",name:"password",type:"password",placeholder:"Enter your password",register:s,errors:r,password:"true"}),e.jsx(d,{to:"/auth/forgot",className:"text-sm leading-[18px] text-my-blue hover:underline",children:"Forgot password?"}),e.jsx("button",{className:"primaryBtn w-full h-[56px]",type:"submit",children:"Login"})]})},b=()=>e.jsx(g,{});export{b as default};