import{u as d,j as e,H as u}from"./app-DyZufzeA.js";import{T as p,I as c}from"./TextInput-B2NrP0n1.js";import{P as x}from"./PrimaryButton-Ju1kdgTi.js";import{G as f}from"./GuestLayout-dVJV_qG3.js";import{d as o}from"./global-styles-j6qhmdoU.js";import"./Container-D6icfpOl.js";const w=o.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`,g=o.p`
    margin: 0 0 8px 0;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    line-height: 1.5;
`,h=o.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 8px;
`,j=o.div`
    margin-bottom: 16px;
    color: #a5d6a7;
    font-size: 0.9rem;
`;function D({status:t}){const{data:r,setData:a,post:i,processing:l,errors:n}=d({email:""}),m=s=>{s.preventDefault(),i(route("password.email"))};return e.jsxs(f,{title:"Forgot your password?",subtitle:"No worries, we will send you reset instructions.",children:[e.jsx(u,{title:"Forgot Password"}),e.jsx(g,{children:"Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),t&&e.jsx(j,{children:t}),e.jsxs(w,{onSubmit:m,children:[e.jsxs("div",{children:[e.jsx(p,{id:"email",type:"email",name:"email",value:r.email,placeholder:"you@example.com",className:"block w-full",isFocused:!0,onChange:s=>a("email",s.target.value)}),e.jsx(c,{message:n.email})]}),e.jsx(h,{children:e.jsx(x,{disabled:l,children:"Email Password Reset Link"})})]})]})}export{D as default};
