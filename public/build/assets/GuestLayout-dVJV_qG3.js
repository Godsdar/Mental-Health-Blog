import{a,j as e}from"./app-DyZufzeA.js";import{G as d,N as l,d as r,c as n}from"./global-styles-j6qhmdoU.js";import{C as x,H as c}from"./Container-D6icfpOl.js";const p=r.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
`,h=r.header`
  width: 100%;
`,m=r.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 16px;
`,u=r.div`
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  padding: 32px;
  background-color: ${n.purple};
  border-radius: 12px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);
`,g=r.h1`
  margin: 0 0 8px 0;
  font-size: 1.75rem;
  font-weight: 600;
  color: ${n.white};
`,j=r.p`
  margin: 0 0 24px 0;
  color: ${n.font};
  font-size: 0.95rem;
  line-height: 1.4;
`;function y({children:t,title:o,subtitle:s}){const i=a().props.auth?.user??null;return e.jsxs(e.Fragment,{children:[e.jsx(d,{}),e.jsx(l,{}),e.jsx(x,{children:e.jsxs(p,{children:[e.jsx(h,{children:e.jsx(c,{user:i})}),e.jsx(m,{children:e.jsxs(u,{children:[o&&e.jsx(g,{children:o}),s&&e.jsx(j,{children:s}),t]})})]})})]})}export{y as G};
