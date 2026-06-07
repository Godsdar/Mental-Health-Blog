import{r as w,u as v,j as s}from"./app-DyZufzeA.js";import{T as i,I as c}from"./TextInput-B2NrP0n1.js";import{I as d}from"./InputLabel-CsZeEefb.js";import{P as _}from"./PrimaryButton-Ju1kdgTi.js";import{d as o,c as p}from"./global-styles-j6qhmdoU.js";import{z as y}from"./transition-Ce-YKUKe.js";const P=o.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`,S=o.header`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,C=o.h2`
    margin: 0;
    color: ${p.white};
    font-size: 1.15rem;
    font-weight: 600;
`,F=o.p`
    margin: 0;
    color: ${p.font};
    font-size: 0.9rem;
    line-height: 1.5;
`,I=o.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`,b=o.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 8px;
`,z=o.p`
    color: ${p.font};
    font-size: 0.85rem;
`;function $({className:f=""}){const l=w.useRef(),u=w.useRef(),{data:e,setData:a,errors:t,put:x,reset:n,processing:h,recentlySuccessful:j}=v({current_password:"",password:"",password_confirmation:""}),g=r=>{r.preventDefault(),x(route("password.update"),{preserveScroll:!0,onSuccess:()=>n(),onError:m=>{m.password&&(n("password","password_confirmation"),l.current.focus()),m.current_password&&(n("current_password"),u.current.focus())}})};return s.jsxs(P,{className:f,children:[s.jsxs(S,{children:[s.jsx(C,{children:"Update Password"}),s.jsx(F,{children:"Ensure your account is using a long, random password to stay secure."})]}),s.jsxs(I,{onSubmit:g,children:[s.jsxs("div",{children:[s.jsx(d,{htmlFor:"current_password",value:"Current Password"}),s.jsx(i,{id:"current_password",ref:u,value:e.current_password,onChange:r=>a("current_password",r.target.value),type:"password",className:"block w-full",autoComplete:"current-password"}),s.jsx(c,{message:t.current_password})]}),s.jsxs("div",{children:[s.jsx(d,{htmlFor:"password",value:"New Password"}),s.jsx(i,{id:"password",ref:l,value:e.password,onChange:r=>a("password",r.target.value),type:"password",className:"block w-full",autoComplete:"new-password"}),s.jsx(c,{message:t.password})]}),s.jsxs("div",{children:[s.jsx(d,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(i,{id:"password_confirmation",value:e.password_confirmation,onChange:r=>a("password_confirmation",r.target.value),type:"password",className:"block w-full",autoComplete:"new-password"}),s.jsx(c,{message:t.password_confirmation})]}),s.jsxs(b,{children:[s.jsx(_,{disabled:h,children:"Save"}),s.jsx(y,{show:j,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:s.jsx(z,{children:"Saved."})})]})]})]})}export{$ as default};
