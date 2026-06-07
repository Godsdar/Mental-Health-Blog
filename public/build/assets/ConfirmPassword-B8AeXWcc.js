import{u as m,j as s,H as l}from"./app-DyZufzeA.js";import{T as u,I as c}from"./TextInput-B2NrP0n1.js";import{I as f}from"./InputLabel-CsZeEefb.js";import{P as x}from"./PrimaryButton-Ju1kdgTi.js";import{G as w}from"./GuestLayout-dVJV_qG3.js";import{d as o}from"./global-styles-j6qhmdoU.js";import"./Container-D6icfpOl.js";const h=o.form`
    display: flex;
    flex-direction: column;
    gap: 14px;
`,j=o.p`
    margin: 0 0 8px 0;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    line-height: 1.5;
`,g=o.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 8px;
`;function D(){const{data:e,setData:t,post:a,processing:i,errors:n,reset:p}=m({password:""}),d=r=>{r.preventDefault(),a(route("password.confirm"),{onFinish:()=>p("password")})};return s.jsxs(w,{title:"Confirm your password",subtitle:"This is a secure area of the application.",children:[s.jsx(l,{title:"Confirm Password"}),s.jsx(j,{children:"Please confirm your password before continuing."}),s.jsxs(h,{onSubmit:d,children:[s.jsxs("div",{children:[s.jsx(f,{htmlFor:"password",value:"Password"}),s.jsx(u,{id:"password",type:"password",name:"password",value:e.password,className:"block w-full",isFocused:!0,onChange:r=>t("password",r.target.value)}),s.jsx(c,{message:n.password})]}),s.jsx(g,{children:s.jsx(x,{disabled:i,children:"Confirm"})})]})]})}export{D as default};
