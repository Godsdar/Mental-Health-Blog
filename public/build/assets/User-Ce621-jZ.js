import{a as o,j as e}from"./app-DyZufzeA.js";import{I as n}from"./DashboardItem-DGO7fgsM.js";import{A as s}from"./AuthenticatedLayout-B_-31uIB.js";import{d as r}from"./global-styles-j6qhmdoU.js";import{R as a,C as l}from"./sidebar-Dj7PD_Mw.js";import"./Container-D6icfpOl.js";const c=r.div`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 24px;
    background-color: #343080;
    border-radius: 12px;
    margin-bottom: 24px;
`,m=r.div`
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: linear-gradient(135deg, #7471c9, #42468b);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 1.6rem;
    font-weight: 700;
`,d=r.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`,p=r.span`
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 600;
`;r.p`
    margin: 4px 0 0 0;
    color: rgba(255, 255, 255, 0.75);
    font-size: 0.95rem;
    line-height: 1.5;
    max-width: 520px;
`;const f=[{title:"Posts",number:8,description:"Articles this member has published."},{title:"Comments",number:24,description:"Conversations they have joined."},{title:"Likes",number:91,description:"Helpful reactions received."}];function u(t){return t?t.split(" ").map(i=>i[0]).slice(0,2).join("").toUpperCase():"?"}function v(){const t=o().props.auth.user;return e.jsxs(s,{title:"Your profile",subtitle:"A quick look at your activity on Serenity.",children:[e.jsxs(c,{children:[e.jsx(m,{children:u(t?.name)}),e.jsxs(d,{children:[e.jsx(p,{children:t?.name}),e.jsx(ProfileEmail,{style:{color:"rgba(255,255,255,0.7)",fontSize:"0.9rem"},children:t?.email})]})]}),e.jsx(a,{className:"row",children:f.map(i=>e.jsx(l,{xxl:4,md:6,style:{marginBottom:16},children:e.jsx(n,{title:i.title,number:i.number,description:i.description})},i.title))})]})}export{v as default};
