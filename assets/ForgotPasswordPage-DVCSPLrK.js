import{a9 as m,l as n,o as i,aa as l,j as s,L as d,a7 as u}from"./index-DcwjW7M-.js";const c=()=>{const e=m(),{register:a,handleSubmit:t,formState:{errors:o}}=n({mode:"onSubmit",resolver:i(l)}),r=()=>{e("/auth/reset")};return s.jsxs("form",{onSubmit:t(r),className:"auth-form",children:[s.jsxs("div",{className:"font-proza-medium flex gap-3 text-[26px] leading-[34px]",children:[s.jsx(d,{to:"/auth/login",className:"text-[#666666]",children:"Login"}),s.jsx("p",{children:"Forgot password"})]}),s.jsx(u,{label:"Email",name:"email",type:"email",placeholder:"Enter your email adress",register:a,errors:o}),s.jsx("button",{className:"primaryBtn mt-1 h-[56px] w-full",type:"submit",children:"Reset password"})]})},x=()=>s.jsx(c,{});export{x as default};