import{a,j as e}from"./app-DyZufzeA.js";import{I as l}from"./DashboardItem-DGO7fgsM.js";import{A as c}from"./AuthenticatedLayout-B_-31uIB.js";import{d as r}from"./global-styles-j6qhmdoU.js";import{m as d,b as m,h as u,P as p}from"./post-card-Clc6-w4W.js";import{R as n,C as o}from"./sidebar-Dj7PD_Mw.js";import"./Container-D6icfpOl.js";const s=r.h2`
    margin: 24px 0 16px 0;
    color: rgba(255, 255, 255, 0.95);
    font-size: 1.25rem;
    font-weight: 600;
`,f=r.div`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px;
    background-color: #343080;
    border-radius: 12px;
    margin-bottom: 24px;
`,x=r.div`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: linear-gradient(135deg, #7471c9, #42468b);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 700;
`,h=r.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`,g=r.span`
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 600;
`,b=r.span`
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
`,j=[{title:"Posts",number:12,description:"Articles you have published on Serenity."},{title:"Comments",number:48,description:"Conversations you have started with the community."},{title:"Likes",number:132,description:"Readers who appreciated your contributions."}],y=[{title:"The Art of Mindful Meditation",subtitleText:"Discover simple techniques to quiet the mind, ease stress, and find inner peace through a daily practice.",imageSrc:d},{title:"Understanding Your Mind",subtitleText:"Explore how your brain works and learn practical neuroscience tips to sharpen focus and balance emotions.",imageSrc:m},{title:"Healing the Heart",subtitleText:"A gentle guide to processing emotions, building self-compassion, and nurturing your inner well-being.",imageSrc:u}];function w(i){return i?i.split(" ").map(t=>t[0]).slice(0,2).join("").toUpperCase():"?"}function k(){const i=a().props.auth.user;return e.jsxs(c,{title:`Welcome back, ${i?.name??"friend"}`,subtitle:"Here is a snapshot of your activity and recent reads.",children:[e.jsxs(f,{children:[e.jsx(x,{children:w(i?.name)}),e.jsxs(h,{children:[e.jsx(g,{children:i?.name}),e.jsx(b,{children:i?.email})]})]}),e.jsx(s,{children:"Your statistics"}),e.jsx(n,{className:"row",children:j.map(t=>e.jsx(o,{xxl:4,md:6,style:{marginBottom:16},children:e.jsx(l,{title:t.title,number:t.number,description:t.description})},t.title))}),e.jsx(s,{children:"Recommended for you"}),e.jsx(n,{className:"row",children:y.map(t=>e.jsx(o,{xxl:4,md:6,style:{marginBottom:16},children:e.jsx(p,{titleText:t.title,subtitleText:t.subtitleText,imageSrc:t.imageSrc})},t.title))})]})}export{k as default};
