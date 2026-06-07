import{j as e,u as f,H as b,L as j}from"./app-DyZufzeA.js";import{c as l,d as o}from"./global-styles-j6qhmdoU.js";import{T as m,I as p}from"./TextInput-B2NrP0n1.js";import{I as d}from"./InputLabel-CsZeEefb.js";import{P as w}from"./PrimaryButton-Ju1kdgTi.js";import{G as y}from"./GuestLayout-dVJV_qG3.js";import"./Container-D6icfpOl.js";const v=o.input`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid ${l.border};
  accent-color: ${l.lighterPurple};
  cursor: pointer;
`;function k({className:s="",...a}){return e.jsx(v,{...a,type:"checkbox",className:s})}const F=o.form`
    display: flex;
    flex-direction: column;
    margin: 8px 0;
    padding: 0;
`,c=o.div`
    margin-bottom: 18px;

    &:last-of-type {
        margin-bottom: 0;
    }
`,L=o.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 12px;

    & > a {
        margin-right: auto;
    }
`,C=o.label`
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 6px 0 18px 0;
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.9rem;
    cursor: pointer;
`,I=o(j)`
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.85rem;
    text-decoration: underline;
    margin-right: auto;
    &:hover { opacity: 0.85; }
`;function G({status:s,canResetPassword:a}){const{data:t,setData:i,post:u,processing:x,errors:n,reset:g}=f({email:"",password:"",remember:!1}),h=r=>{r.preventDefault(),u(route("login"),{onFinish:()=>g("password")})};return e.jsxs(y,{title:"Welcome back",subtitle:"Sign in to continue your wellness journey",children:[e.jsx(b,{title:"Log in"}),s&&e.jsx("div",{style:{marginBottom:16,color:"#a5d6a7",fontSize:"0.9rem"},children:s}),e.jsxs(F,{onSubmit:h,children:[e.jsxs(c,{children:[e.jsx(d,{htmlFor:"email",value:"Email"}),e.jsx(m,{id:"email",type:"email",name:"email",value:t.email,className:"block w-full",autoComplete:"username",isFocused:!0,onChange:r=>i("email",r.target.value)}),e.jsx(p,{message:n.email})]}),e.jsxs(c,{children:[e.jsx(d,{htmlFor:"password",value:"Password"}),e.jsx(m,{id:"password",type:"password",name:"password",value:t.password,className:"block w-full",autoComplete:"current-password",onChange:r=>i("password",r.target.value)}),e.jsx(p,{message:n.password})]}),e.jsxs(C,{children:[e.jsx(k,{name:"remember",checked:t.remember,onChange:r=>i("remember",r.target.checked)}),e.jsx("span",{children:"Remember me"})]}),e.jsxs(L,{children:[a&&e.jsx(I,{href:route("password.request"),children:"Forgot your password?"}),e.jsx(w,{disabled:x,children:"Log in"})]})]})]})}export{G as default};
