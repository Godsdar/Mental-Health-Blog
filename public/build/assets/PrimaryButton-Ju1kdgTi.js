import{j as a}from"./app-DyZufzeA.js";import{c as t,d as s,l as i}from"./global-styles-j6qhmdoU.js";const l=i`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: inherit;
  cursor: pointer;
  transition: background-color 0.15s ease, transform 0.05s ease, opacity 0.15s ease;

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,c=s.button`
  ${l}
  background-color: ${t.lighterPurple};
  color: ${t.white};

  &:hover:not(:disabled) {
    background-color: ${t.purple};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(116, 113, 201, 0.4);
  }
`;function u({className:o="",disabled:r,children:e,...n}){return a.jsx(c,{...n,className:o,disabled:r,children:e})}export{u as P};
