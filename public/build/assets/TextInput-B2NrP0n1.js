import{j as a,r}from"./app-DyZufzeA.js";import{c as o,d as c}from"./global-styles-j6qhmdoU.js";const u=c.p`
  margin-top: 6px;
  color: ${o.error};
  font-size: 0.85rem;
`;function b({message:e,className:t="",...n}){return e?a.jsx(u,{...n,className:t,children:e}):null}const d=c.input`
  display: block;
  width: 100%;
  margin-top: 6px;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid ${o.border};
  background-color: rgba(0, 0, 0, 0.25);
  color: ${o.white};
  font-size: 0.95rem;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    border-color: ${o.lighterPurple};
    box-shadow: 0 0 0 3px rgba(116, 113, 201, 0.25);
  }
`,m=r.forwardRef(function({type:t="text",className:n="",isFocused:l=!1,...i},p){const s=r.useRef(null);return r.useImperativeHandle(p,()=>({focus:()=>s.current?.focus()})),r.useEffect(()=>{l&&s.current?.focus()},[l]),a.jsx(d,{...i,type:t,className:n,ref:s})});export{b as I,m as T};
