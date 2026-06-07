import{a as j,u as g,j as e,L as y}from"./app-DyZufzeA.js";import{T as l,I as c}from"./TextInput-B2NrP0n1.js";import{I as m}from"./InputLabel-CsZeEefb.js";import{P as S}from"./PrimaryButton-Ju1kdgTi.js";import{d as i,c as o}from"./global-styles-j6qhmdoU.js";import{z as b}from"./transition-Ce-YKUKe.js";const z=i.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`,I=i.header`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,k=i.h2`
    margin: 0;
    color: ${o.white};
    font-size: 1.15rem;
    font-weight: 600;
`,w=i.p`
    margin: 0;
    color: ${o.font};
    font-size: 0.9rem;
    line-height: 1.5;
`,P=i.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`,T=i.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 8px;
`,F=i.p`
    color: ${o.font};
    font-size: 0.85rem;
`,C=i(y)`
    color: ${o.lighterPurple};
    font-size: 0.85rem;
    text-decoration: underline;
    &:hover { opacity: 0.85; }
`,$=i.p`
    margin: 4px 0 0 0;
    color: ${o.font};
    font-size: 0.9rem;
`,L=i.div`
    margin-top: 4px;
    color: #a5d6a7;
    font-size: 0.9rem;
`;function U({mustVerifyEmail:d,status:u,className:p=""}){const n=j().props.auth.user,{data:r,setData:a,patch:f,errors:s,processing:x,recentlySuccessful:h}=g({name:n.name,email:n.email}),v=t=>{t.preventDefault(),f(route("profile.update"))};return e.jsxs(z,{className:p,children:[e.jsxs(I,{children:[e.jsx(k,{children:"Profile Information"}),e.jsx(w,{children:"Update your account's profile information and email address."})]}),e.jsxs(P,{onSubmit:v,children:[e.jsxs("div",{children:[e.jsx(m,{htmlFor:"name",value:"Name"}),e.jsx(l,{id:"name",className:"block w-full",value:r.name,onChange:t=>a("name",t.target.value),required:!0,isFocused:!0,autoComplete:"name"}),e.jsx(c,{message:s.name})]}),e.jsxs("div",{children:[e.jsx(m,{htmlFor:"email",value:"Email"}),e.jsx(l,{id:"email",type:"email",className:"block w-full",value:r.email,onChange:t=>a("email",t.target.value),required:!0,autoComplete:"username"}),e.jsx(c,{message:s.email})]}),d&&n.email_verified_at===null&&e.jsxs("div",{children:[e.jsxs($,{children:["Your email address is unverified."," ",e.jsx(C,{href:route("verification.send"),method:"post",as:"button",children:"Click here to re-send the verification email."})]}),u==="verification-link-sent"&&e.jsx(L,{children:"A new verification link has been sent to your email address."})]}),e.jsxs(T,{children:[e.jsx(S,{disabled:x,children:"Save"}),e.jsx(b,{show:h,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx(F,{children:"Saved."})})]})]})]})}export{U as default};
