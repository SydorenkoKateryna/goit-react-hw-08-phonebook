"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[485],{8485:function(n,e,t){t.r(e),t.d(e,{default:function(){return cn}});var i,r,o,a,d,s,c,p,x,l,u,m,h,f,g,b,w,Z=t(9439),v=t(2791),j=t(3855),k=t(8174),y=t(6916),z=function(n){return n.contacts.items},P=function(n){return n.contacts.isLoading},C=function(n){return n.contacts.error},A=function(n){return n.filter},L=(0,y.P1)([z,A],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),S=t(6788),E=t(168),F=t(6444),I=F.ZP.form(i||(i=(0,E.Z)([""]))),_=F.ZP.label(r||(r=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  & + & {\n    margin-top: 16px;\n\n    @media screen and (min-width: 768px) {\n      margin-top: 24px;\n    }\n\n    @media screen and (min-width: 1280px) {\n      margin-top: 26px;\n    }\n  }\n"]))),q=F.ZP.input(o||(o=(0,E.Z)(["\n  width: 100%;\n  height: 42px;\n  padding: 14px;\n\n  border: 1px solid #d4d7e3;\n  border-radius: 8px;\n  background-color: #f3f7fb;\n  font-size: 14px;\n\n  color: #162d3a;\n  transition: border-color 250ms ease-in-out;\n\n  &:focus {\n    border-color: #162d3a;\n    outline: transparent;\n  }\n\n  &::placeholder {\n    color: #8897ad;\n  }\n\n  @media screen and (min-width: 768px) {\n    height: 48px;\n    padding: 16px;\n\n    font-size: 16px;\n  }\n"]))),N=F.ZP.span(a||(a=(0,E.Z)(["\n  margin-bottom: 8px;\n\n  font-size: 14px;\n  text-align: left;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"]))),T=F.ZP.button(d||(d=(0,E.Z)(["\n  display: inline-flex;\n  width: 100%;\n  height: 44px;\n  padding: 14px;\n  justify-content: center;\n  align-items: center;\n  margin-top: 16px;\n\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: inherit;\n  letter-spacing: inherit;\n\n  color: #ffffff;\n  background-color: #162d3a;\n  border: 1px solid transparent;\n  border-radius: 12px;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  transition: background-color 250ms ease-in-out, transform 250ms ease-in-out;\n  cursor: pointer;\n\n  @media screen and (min-width: 768px) {\n    height: 52px;\n    padding: 16px;\n    margin-top: 24px;\n\n    font-size: 20px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    margin-top: 26px;\n  }\n\n  ","\n"])),(function(n){if(!n.disabled)return"&:hover {\n        background-color: #0c1421;\n        transform: scale(1.01);\n  }"})),J=t(3329),K=function(n){var e=n.onClose,t=(0,j.I0)(),i=(0,j.v9)(z),r=(0,v.useState)(""),o=(0,Z.Z)(r,2),a=o[0],d=o[1],s=(0,v.useState)(""),c=(0,Z.Z)(s,2),p=c[0],x=c[1],l=function(n){var e=n.target,t=e.name,i=e.value;switch(t){case"name":d(i);break;case"number":x(i);break;default:return}};return(0,J.jsxs)(I,{onSubmit:function(n){if(n.preventDefault(),i.find((function(n){return n.name===a})))return k.Am.info("".concat(a," is already in contact list.")),void d("");t((0,S.uK)({name:a,number:p})),d(""),x(""),e()},children:[(0,J.jsxs)(_,{children:[(0,J.jsx)(N,{children:"Name"}),(0,J.jsx)(q,{type:"text",name:"name",value:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:l})]}),(0,J.jsxs)(_,{children:[(0,J.jsx)(N,{children:"Number"}),(0,J.jsx)(q,{type:"tel",name:"number",value:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,disabled:!a,onChange:l})]}),(0,J.jsx)(T,{type:"submit",disabled:!a||!p,children:"Add contact"})]})},B=F.ZP.div(s||(s=(0,E.Z)(["\n  width: 100%;\n  margin-bottom: 16px;\n\n  @media screen and (min-width: 768px) {\n    width: 340px;\n    margin-bottom: 24px;\n    margin-right: auto;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 388px;\n    margin-bottom: 26px;\n  }\n"]))),D=F.ZP.input(c||(c=(0,E.Z)(["\n  width: 100%;\n  height: 42px;\n  padding: 14px;\n\n  border: 1px solid #d4d7e3;\n  border-radius: 8px;\n  background-color: #f3f7fb;\n  font-size: 14px;\n\n  color: #162d3a;\n  transition: border-color 250ms ease-in-out;\n\n  &:focus {\n    border-color: #162d3a;\n    outline: transparent;\n  }\n\n  &::placeholder {\n    color: #8897ad;\n  }\n\n  @media screen and (min-width: 768px) {\n    height: 48px;\n    padding: 16px;\n\n    font-size: 16px;\n  }\n"]))),G=t(4943),M=function(){var n=(0,j.v9)(A),e=(0,j.I0)();return(0,J.jsx)(B,{children:(0,J.jsx)(D,{type:"text",name:"filter",placeholder:"Find a contact by name...",value:n,onChange:function(n){return e((0,G.T)(n.currentTarget.value))}})})},$=F.ZP.li(p||(p=(0,E.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #d4d7e3;\n  border-radius: 8px;\n  box-shadow: 4px 8px 4px 0px rgba(0, 0, 0, 0.25);\n  font-size: 16px;\n\n  transition: background-color 250ms ease-in-out, transform 250ms ease-in-out,\n    border-color 250ms ease-in-out;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: rgb(30, 74, 233, 0.2);\n    border-color: rgb(30, 74, 233, 0.6);\n    transform: scale(1.05);\n  }\n\n  @media screen and (min-width: 768px) {\n    width: calc((100% - 24px) / 2);\n    font-size: 18px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: calc((100% - 2 * 26px) / 3);\n  }\n"]))),H=F.ZP.p(x||(x=(0,E.Z)(["\n  max-width: 220px;\n\n  @media screen and (min-width: 768px) {\n    max-width: 280px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    max-width: 320px;\n  }\n"]))),O=F.ZP.p(l||(l=(0,E.Z)(["\n  margin-top: 8px;\n"]))),Q=F.ZP.button(u||(u=(0,E.Z)(["\n  padding: 0;\n  position: absolute;\n  top: 8px;\n  right: 8px;\n\n  color: #162d3a;\n  background-color: transparent;\n  border: 1px solid transparent;\n  transition: color 250ms ease-in-out;\n\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    color: #0c1421;\n  }\n"]))),R=t(1213),U=function(n){var e=n.name,t=n.number,i=n.id,r=(0,j.I0)();return(0,J.jsxs)($,{children:[(0,J.jsx)(H,{children:e}),(0,J.jsx)(O,{children:t}),(0,J.jsx)(Q,{type:"button","aria-label":"delete a contact",onClick:function(){return r((0,S.GK)(i))},children:(0,J.jsx)(R.ySC,{size:20})})]})},V=F.ZP.ul(m||(m=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 24px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    gap: 26px;\n  }\n"]))),W=function(){var n=(0,j.v9)(L);return(0,J.jsx)(V,{children:n.map((function(n){var e=n.id,t=n.name,i=n.number;return(0,J.jsx)(U,{name:t,number:i,id:e},e)}))})},X=t(3904),Y=F.ZP.div(h||(h=(0,E.Z)(["\n  padding-top: 24px;\n  padding-bottom: 16px;\n\n  @media screen and (min-width: 768px) {\n    padding-top: 48px;\n    padding-bottom: 24px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    padding-bottom: 26px;\n  }\n"]))),nn=F.ZP.section(f||(f=(0,E.Z)(["\n  padding-bottom: 24px;\n\n  @media screen and (min-width: 768px) {\n    padding-bottom: 48px;\n  }\n"]))),en=F.ZP.button(g||(g=(0,E.Z)(["\n  display: inline-flex;\n  width: 40px;\n  height: 40px;\n  justify-content: center;\n  align-items: center;\n\n  font-family: inherit;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1.1666666667;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n\n  color: #ffffff;\n  background-color: #162d3a;\n  border: 1px solid transparent;\n  border-radius: 12px;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  transition: background-color 250ms ease-in-out, transform 250ms ease-in-out;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: #0c1421;\n    transform: scale(1.01);\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 50px;\n    height: 50px;\n    font-size: 14px;\n    line-height: 1.14;\n  }\n"]))),tn=t(9126),rn=t(4164),on=F.ZP.div(b||(b=(0,E.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.9);\n  z-index: 1200;\n"]))),an=F.ZP.div(w||(w=(0,E.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  max-width: 280px;\n  width: 100%;\n  max-height: calc(100vh - 80px);\n  padding: 20px;\n\n  background-color: #ffffff;\n  overflow-y: auto;\n\n  @media screen and (min-width: 768px) {\n    max-width: 404px;\n    width: 100%;\n    max-height: calc(100vh - 40px);\n    padding: 32px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    max-width: 484px;\n    width: 100%;\n    padding: 48px;\n  }\n"]))),dn=document.querySelector("#modal-root"),sn=function(n){var e=n.children,t=n.onClose;(0,v.useEffect)((function(){var n=function(n){"Escape"===n.code&&t()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[t]);return(0,rn.createPortal)((0,J.jsx)(on,{onClick:function(n){n.currentTarget===n.target&&t()},children:(0,J.jsx)(an,{children:e})}),dn)},cn=function(){var n=(0,j.I0)(),e=(0,j.v9)(z),t=(0,j.v9)(P),i=(0,j.v9)(C),r=(0,v.useState)(!1),o=(0,Z.Z)(r,2),a=o[0],d=o[1],s=function(){d((function(n){return!n}))};return(0,v.useEffect)((function(){n((0,S.yF)())}),[n]),(0,J.jsxs)("main",{children:[(0,J.jsx)(Y,{children:(0,J.jsx)(en,{onClick:s,children:(0,J.jsx)(tn.LzJ,{size:40})})}),a&&(0,J.jsx)(sn,{onClose:s,children:(0,J.jsx)(K,{onClose:s})}),(0,J.jsxs)(nn,{children:[t&&!i&&(0,J.jsx)(X.Z,{}),!t&&!i&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(M,{}),e.length>0&&(0,J.jsx)(W,{})]})]})]})}}}]);
//# sourceMappingURL=485.8ed37042.chunk.js.map