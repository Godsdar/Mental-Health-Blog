import{c as x,u as b,a as y,b as $}from"./Container-D6icfpOl.js";import{r as w,j as s}from"./app-DyZufzeA.js";import{d as g,f as S}from"./global-styles-j6qhmdoU.js";function k({as:l,bsPrefix:e,className:u,...t}){e=b(e,"col");const p=y(),c=$(),i=[],h=[];return p.forEach(f=>{const a=t[f];delete t[f];let o,n,r;typeof a=="object"&&a!=null?{span:o,offset:n,order:r}=a:o=a;const d=f!==c?`-${f}`:"";o&&i.push(o===!0?`${e}${d}`:`${e}${d}-${o}`),r!=null&&h.push(`order${d}-${r}`),n!=null&&h.push(`offset${d}-${n}`)}),[{...t,className:x(u,...i,...h)},{as:l,bsPrefix:e,spans:i}]}const v=w.forwardRef((l,e)=>{const[{className:u,...t},{as:p="div",bsPrefix:c,spans:i}]=k(l);return s.jsx(p,{...t,ref:e,className:x(u,!i.length&&c)})});v.displayName="Col";const B=w.forwardRef(({bsPrefix:l,className:e,as:u="div",...t},p)=>{const c=b(l,"row"),i=y(),h=$(),f=`${c}-cols`,a=[];return i.forEach(o=>{const n=t[o];delete t[o];let r;n!=null&&typeof n=="object"?{cols:r}=n:r=n;const d=o!==h?`-${o}`:"";r!=null&&a.push(`${f}${d}-${r}`)}),s.jsx(u,{ref:p,...t,className:x(e,c,...a)})});B.displayName="Row";const N=g.ul`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  list-style: none;
`,m=g.li`
  font-size: 18px;
`;function z({data:l}){return s.jsxs(N,{children:[s.jsx(m,{children:"Main"}),s.jsx(m,{children:"News"}),s.jsx(m,{children:"About Us"}),s.jsx(m,{children:"Contacts"})]})}const j={purple:"#343080",font:"rgba(255 255 255 / 0.7)"};S`
  :root {
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 1);

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

  a {
    font-weight: 500;
    text-decoration: none;
  }

  body {
    min-width: 320px;
    background-image: red;
    color: ${j.font};
  }

  h1 {
    font-size: 10em;
    line-height: 1.1;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
    a:hover {
      color: #747bff;
    }
    button {
      background-color: #f9f9f9;
    }
  }

  [href] {
    text-decoration: none;
    color: white;
  }
`;const C=g.div`
  width: 200px;
  height: auto;
  padding: 20px;
  display: flex;
  left: 12px;
  /* position: fixed; */
  background-color: ${j.purple};
  border-radius: 8px;
`;function L(){return s.jsx(C,{children:s.jsx(z,{})})}export{v as C,B as R,L as S,j as c};
