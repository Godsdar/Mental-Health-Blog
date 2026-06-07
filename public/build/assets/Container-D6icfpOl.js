import{j as t,L as h,g as m,r as c}from"./app-DyZufzeA.js";import{d as a,c as g}from"./global-styles-j6qhmdoU.js";const j=a.div`
  display: flex;
`,y=a.div`
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  justify-self: flex-end;
  align-self: center;

  &:last-child {
    margin-right: 0;
  }
`,v=a.div`
  margin-right: 24px;
`,b=a.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${g.white};
  letter-spacing: 0.08em;
  text-transform: uppercase;

  & > a {
    color: inherit;
    text-decoration: none;
  }

  & > a:hover {
    opacity: 0.85;
  }

  & > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;a.div`
    display: flex;
    padding: 16px 0;
`;const w=a.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    padding: 8px 0;
`,C=a.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 8px;
    align-items: center;
`,l=a(h)`
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
    text-decoration: none;
    &:hover {
        opacity: 0.85;
    }
`,N=[{label:"Home",href:"/"},{label:"Articles",href:"/"},{label:"About",href:"/"}];function O({user:n=null,navItems:o=N}){return t.jsxs(w,{children:[t.jsx(b,{children:t.jsx(h,{href:"/",children:"Serenity"})}),t.jsxs(j,{children:[t.jsx(y,{children:o.map(s=>t.jsx(v,{children:t.jsx("a",{href:s.href,children:s.label})},s.label))}),t.jsx(C,{children:n?t.jsxs(t.Fragment,{children:[t.jsx(l,{href:route("dashboard"),children:"Dashboard"}),t.jsx(l,{href:route("profile.edit"),children:n.name}),t.jsx(l,{href:route("logout"),method:"post",as:"button",children:"Log out"})]}):t.jsxs(t.Fragment,{children:[t.jsx(l,{href:route("login"),as:"button",children:"Login"}),t.jsx(l,{href:route("register"),as:"button",children:"Sign up"})]})})]})]})}var u={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var x;function S(){return x||(x=1,(function(n){(function(){var o={}.hasOwnProperty;function s(){for(var e="",r=0;r<arguments.length;r++){var i=arguments[r];i&&(e=f(e,d(i)))}return e}function d(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var i in e)o.call(e,i)&&e[i]&&(r=f(r,i));return r}function f(e,r){return r?e?e+" "+r:e+r:e}n.exports?(s.default=s,n.exports=s):window.classNames=s})()})(u)),u.exports}var B=S();const A=m(B),E=["xxl","xl","lg","md","sm","xs"],L="xs",p=c.createContext({prefixes:{},breakpoints:E,minBreakpoint:L}),{Consumer:P,Provider:R}=p;function k(n,o){const{prefixes:s}=c.useContext(p);return n||s[o]||o}function T(){const{breakpoints:n}=c.useContext(p);return n}function D(){const{minBreakpoint:n}=c.useContext(p);return n}const F=c.forwardRef(({bsPrefix:n,fluid:o=!1,as:s="div",className:d,...f},e)=>{const r=k(n,"container"),i=typeof o=="string"?`-${o}`:"-fluid";return t.jsx(s,{ref:e,...f,className:A(d,o?`${r}${i}`:r)})});F.displayName="Container";export{F as C,O as H,T as a,D as b,A as c,k as u};
