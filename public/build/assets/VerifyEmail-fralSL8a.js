import{u as a,j as e,H as l,L as d}from"./app-DyZufzeA.js";import{P as c}from"./PrimaryButton-Ju1kdgTi.js";import{G as u}from"./GuestLayout-dVJV_qG3.js";import{d as i}from"./global-styles-j6qhmdoU.js";import"./Container-D6icfpOl.js";const m=i.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`,f=i.p`
    margin: 0 0 8px 0;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    line-height: 1.5;
`,p=i.div`
    margin-bottom: 8px;
    color: #a5d6a7;
    font-size: 0.9rem;
`,g=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-top: 8px;
`,x=i(d)`
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.85rem;
    text-decoration: underline;
    &:hover { opacity: 0.85; }
`;function k({status:t}){const{post:o,processing:n}=a({}),r=s=>{s.preventDefault(),o(route("verification.send"))};return e.jsxs(u,{title:"Verify your email",subtitle:"One more step before you can start exploring Serenity.",children:[e.jsx(l,{title:"Email Verification"}),e.jsx(f,{children:"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."}),t==="verification-link-sent"&&e.jsx(p,{children:"A new verification link has been sent to the email address you provided during registration."}),e.jsx(m,{onSubmit:r,children:e.jsxs(g,{children:[e.jsx(c,{disabled:n,children:"Resend Verification Email"}),e.jsx(x,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})})]})}export{k as default};
