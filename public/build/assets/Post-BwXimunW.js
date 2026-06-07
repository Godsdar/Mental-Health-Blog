import{j as e,r as a}from"./app-DyZufzeA.js";import{c as i,d as t}from"./global-styles-j6qhmdoU.js";const l=t.div`
  display: flex;
  align-items: center;
`,u=t.div`
  margin: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ddd;
`,m=t.h2`
  color: #eee;
`,p=t.p`
  font: 500 1.5rem sans-serif;
  line-height: 1.5em;
  color: #eee;
`,x=t.h2`
  color: #ddd;
`,h=t.div`
  padding: 10px;
  margin-top: 20px;
  border-radius: 12px;
  background-color: ${i.lightPurple};
`;function o(){return e.jsxs(h,{children:[e.jsxs(l,{children:[e.jsx(u,{}),e.jsx(m,{children:"Doctor Smith"})]}),e.jsx(p,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quod doloremque saepe sunt voluptatem at vel. Minus laborum fugiat minima? Ab, sunt cum enim debitis dolorum beatae ducimus! Quibusdam, dolor."}),e.jsx(x,{children:"19/09/2004"})]})}const j=t.h2`
  font: 700 2rem Arial;
  color: #eee;
`,g=t.h2`
  color: #eee;
`,b=t.p`
  color: #eee;
`,f=t.div`
  margin-top: 20px;
`,k=t.div`
  margin: auto;
  padding: 30px;
  max-width: 600px;
  border-radius: 12px;
  background-color: ${i.purple};
`,r=t.button`
  width: 100px;
  height: 30px;
  background-color: ${i.lightPurple};
  color: #eee;
  border-style: none;
  border-radius: 8px;
`,C=t.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`,P=t.span`
  font-size: 1.75rem;
`;function S({title:v,content:y}){const[s,n]=a.useState(0);function c(){n(s+1)}function d(){n(0)}return e.jsxs(k,{children:[e.jsx(j,{children:"First Post Title"}),e.jsx(g,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempora animi placeat assumenda adipisci ratione praesentium nihil voluptatum autem quidem sequi natus omnis, distinctio optio dolorem neque qui non amet."}),e.jsxs(b,{children:[e.jsxs(C,{children:[e.jsx(r,{onClick:c,children:"Like"}),e.jsx(r,{onClick:d,children:"ResetLikes"}),e.jsx(P,{className:"likeCount",children:s})]}),e.jsxs(f,{children:[e.jsx(o,{}),e.jsx(o,{}),e.jsx(o,{})]})]})]})}export{S as default};
