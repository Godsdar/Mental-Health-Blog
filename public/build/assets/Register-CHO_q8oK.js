import{u as c,j as e,H as x,L as f}from"./app-DyZufzeA.js";import{T as t,I as i}from"./TextInput-B2NrP0n1.js";import{I as n}from"./InputLabel-CsZeEefb.js";import{P as w}from"./PrimaryButton-Ju1kdgTi.js";import{G as j}from"./GuestLayout-dVJV_qG3.js";import{d as l}from"./global-styles-j6qhmdoU.js";import"./Container-D6icfpOl.js";const g=l.form`
    display: flex;
    flex-direction: column;
    gap: 14px;
`,h=l.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-top: 8px;
`,v=l(f)`
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.85rem;
    text-decoration: underline;
    &:hover { opacity: 0.85; }
`;function L(){const{data:a,setData:r,post:m,processing:d,errors:o,reset:u}=c({name:"",email:"",password:"",password_confirmation:""}),p=s=>{s.preventDefault(),m(route("register"),{onFinish:()=>u("password","password_confirmation")})};return e.jsxs(j,{title:"Create your account",subtitle:"Join Serenity and start your wellness journey",children:[e.jsx(x,{title:"Register"}),e.jsxs(g,{onSubmit:p,children:[e.jsxs("div",{children:[e.jsx(n,{htmlFor:"name",value:"Name"}),e.jsx(t,{id:"name",name:"name",value:a.name,className:"block w-full",autoComplete:"name",isFocused:!0,onChange:s=>r("name",s.target.value),required:!0}),e.jsx(i,{message:o.name})]}),e.jsxs("div",{children:[e.jsx(n,{htmlFor:"email",value:"Email"}),e.jsx(t,{id:"email",type:"email",name:"email",value:a.email,className:"block w-full",autoComplete:"username",onChange:s=>r("email",s.target.value),required:!0}),e.jsx(i,{message:o.email})]}),e.jsxs("div",{children:[e.jsx(n,{htmlFor:"password",value:"Password"}),e.jsx(t,{id:"password",type:"password",name:"password",value:a.password,className:"block w-full",autoComplete:"new-password",onChange:s=>r("password",s.target.value),required:!0}),e.jsx(i,{message:o.password})]}),e.jsxs("div",{children:[e.jsx(n,{htmlFor:"password_confirmation",value:"Confirm Password"}),e.jsx(t,{id:"password_confirmation",type:"password",name:"password_confirmation",value:a.password_confirmation,className:"block w-full",autoComplete:"new-password",onChange:s=>r("password_confirmation",s.target.value),required:!0}),e.jsx(i,{message:o.password_confirmation})]}),e.jsxs(h,{children:[e.jsx(v,{href:route("login"),children:"Already registered?"}),e.jsx(w,{disabled:d,children:"Register"})]})]})]})}export{L as default};
