(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[532],{8026:function(n,e,t){"use strict";t.d(e,{AV:function(){return f},JM:function(){return b},Sn:function(){return g},Wi:function(){return d},l0:function(){return s},ub:function(){return u}});var r,o,i,a,x,p,c=t(168),l=t(5867),s=l.ZP.form(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n  padding: 8px;\n  max-width: 100%;\n  width: 500px;\n"]))),d=l.ZP.label(o||(o=(0,c.Z)(["\n  display: flex;\n flex-direction: row;\n    align-items: center;\n    justify-content: center;\n  font-size: 20px;\n  max-width: 100%;\n  width: 500px;\n  text-shadow: rgb(255, 255, 255) 0px 1px 1px;\n"]))),u=l.ZP.div(i||(i=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 8px;\n  margin-left: 8px;\n"]))),f=l.ZP.span(a||(a=(0,c.Z)(["\n  padding-left: 5px;\n"]))),b=l.ZP.input(x||(x=(0,c.Z)(["\n  padding: 8px 16px;\nwidth: 300px;\n  border: 0px;\n  outline: 0px;\n  border-radius: 8px;\n\n\n  color: rgb(6, 58, 54);\n  background-color: #EDE4F7;\n  box-shadow: rgb(139, 167, 147) 1px 1px 3px inset,\n    rgb(255, 255, 255) -1px -1px 5px inset;\n  font-style: italic;\n  text-shadow: rgb(255, 255, 255) 0px 1px 1px;\n  font-size: 14px;\n"]))),g=l.ZP.button(p||(p=(0,c.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 8px 16px;\n  max-width: 100%;\n  border: none;\n  outline: none;\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.24) 10px 10px 5px 0px;\n  transition: all 0.2s ease-in-out 0s;\n  background-color: #C4A7E7;\n  color: rgb(255, 255, 255);\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: #8974a1;\n    color: rgb(6, 58, 54);\n    box-shadow: rgb(255, 255, 255) -2px -2px 5px, rgb(139, 167, 147) 2px 2px 5px;\n  }\n"])))},760:function(){},6532:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return R}});var r,o,i,a,x,p,c,l,s,d=t(9434),u=t(1232),f=t(4373),b=t(9126),g=t(8026),h=t(184),m=function(){var n=(0,d.I0)();return(0,h.jsxs)(g.l0,{onSubmit:function(e){e.preventDefault();var t=e.currentTarget,r={name:t.name.value,number:t.number.value};n((0,u.uK)(r)),t.reset()},children:[(0,h.jsx)(g.ub,{children:(0,h.jsxs)(g.Wi,{htmlFor:"name",children:[(0,h.jsx)(b.RPM,{}),(0,h.jsx)(g.AV,{children:"Name"})]})}),(0,h.jsx)(g.JM,{id:"name",name:"name",type:"text",autoComplete:"name",placeholder:"Name",required:!0}),(0,h.jsx)(g.ub,{children:(0,h.jsxs)(g.Wi,{htmlFor:"number",children:[(0,h.jsx)(b.lfG,{}),(0,h.jsx)(g.AV,{children:"Number"})]})}),(0,h.jsx)(g.JM,{type:"tel",name:"number",autoComplete:"number",required:!0,placeholder:"+38-050-123-45-67"}),(0,h.jsxs)(g.Sn,{type:"submit",children:[(0,h.jsx)(f.M0G,{size:"16"}),"Add contact"]})]})},j=t(2791),w=t(168),v=t(5867),Z=v.ZP.ul(r||(r=(0,w.Z)(["\n  display: flex;\n        flex-direction: column;\n        gap: 16px;\n        padding: 8px 16px;\n        max-width: 100%;\n        width: 300px;\n}\n"]))),k=v.ZP.li(o||(o=(0,w.Z)(["\n  display: flex;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  align-items: center;\n  gap: 16px;\n    font-size: 14px;\n"]))),y=v.ZP.button(i||(i=(0,w.Z)(["\n  padding: 4px 8px;\n  border: none;\n  outline: none;\n  border-radius: 8px;\n  color: rgb(255, 255, 255);\n  background-color: #C4A7E7;\n  box-shadow: rgba(0, 0, 0, 0.24) 10px 10px 5px 0px;\n  transition: all 0.2s ease-in-out 0s;\n\n  &:hover,\n  &:focus {\n    background-color: #8974a1;\n    color: rgb(6, 58, 54);\n    box-shadow: rgb(255, 255, 255) -2px -2px 5px, rgb(139, 167, 147) 2px 2px 5px;\n  }\n"]))),P=v.ZP.span(a||(a=(0,w.Z)(["\npadding-left: 10px;\n"]))),C=function(n){return n.contacts.contacts.items},F=function(n){return n.contacts.contacts.error},E=function(n){return n.contacts.filter},M=function(n){return n.modal.isOpen},A=function(n){var e=n.contact,t=(0,d.I0)();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("p",{children:[" ",e.name,":",(0,h.jsx)(P,{children:e.number})]}),(0,h.jsx)(y,{onClick:function(){return t((0,u.GK)(e.id))},children:"delete"})]})},z=function(){var n=(0,d.v9)(C);console.log(n);var e=(0,d.v9)(E);console.log(e);var t=e.toLowerCase(),r=n.filter((function(n){var e=n.name,r=n.number;return e.toLowerCase().trim().includes(t)||r.trim().includes(t)}));return(0,h.jsx)(Z,{children:null===r||void 0===r?void 0:r.map((function(n){return(0,h.jsx)(k,{children:(0,h.jsx)(A,{contact:n},n.id)},n.id)}))})},I=v.ZP.button(x||(x=(0,w.Z)(["\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  padding-top: 5px;\n  padding-bottom:5px;\n  padding-left: 5px;\n  padding-right: 5px;\n\n  width: 30px;\n  height: 30px;\n  border: none;\n  outline: none;\n  border-radius: 50%;\n  color: black;\n  background-color: transparent;\n  transition: all 0.2s ease-in-out;\n\n  &:hover,\n  &:focus {\n    box-shadow: inset -1px -1px 1px #ffffff, inset 1px 1px 1px #8e9aaf;\n\n   \n  }\n"]))),S=v.ZP.div(p||(p=(0,w.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0,0,0,0.5);\n"]))),T=v.ZP.div(c||(c=(0,w.Z)(["\n  position: absolute;\n  \n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  min-height: 200px;\n  width: 600px;\n  max-width: 95%;\n  padding: 80px 32px;\n  background-color: #fff;\n  border-radius: 3px;\n"]))),W=t(4164),_=t(2803),q=t(1213),D=t(760),G=t.n(D),J=document.querySelector("#modal-root"),N=function(){var n=(0,d.I0)();return(0,W.createPortal)((0,h.jsx)(S,{onClick:function(e){e.target===e.currentTarget&&n((0,_.Mr)())},children:(0,h.jsxs)(T,{children:[(0,h.jsx)(I,{onClick:function(){n((0,_.Mr)())},children:(0,h.jsx)(q.$iT,{})}),(0,h.jsx)(G(),{})]})}),J)},V=t(9652),K=v.ZP.label(l||(l=(0,w.Z)(["\ndisplay: flex;\n    align-items: center;\n        flex-direction: column;\n        gap: 8px;\n        color: #000;\n"]))),L=v.ZP.input(s||(s=(0,w.Z)(["\n        padding: 8px 16px;\n        max-width: 100%;\n        width: 300px;\n        border: 0px;\n        outline: 0px;\n        border-radius: 8px;\n        background-color: #EDE4F7;\n        color: #000;\n        box-shadow: rgb(139, 167, 147) 1px 1px 3px inset, rgb(255, 255, 255) -1px -1px 5px inset;\n        font-style: italic;\n        font-size: 14px;\n}\n"]))),O=function(){var n=(0,d.I0)();return(0,h.jsxs)(K,{htmlFor:"filter",children:["Find contacts by name",(0,h.jsx)(L,{name:"filter",type:"text",onChange:function(e){var t=e.currentTarget;console.log(t.value),n((0,V.W)(t.value))},debounceTimeout:500})]})},R=function(){var n=(0,d.I0)(),e=(0,d.v9)(F);(0,j.useEffect)((function(){n((0,u.yF)())}),[n]);var t=(0,d.v9)(M);return e?(0,h.jsx)("div",{children:"Something went wrong..."}):(0,h.jsxs)(h.Fragment,{children:[t&&(0,h.jsx)(N,{}),(0,h.jsx)(m,{}),(0,h.jsx)(O,{}),(0,h.jsx)(z,{})]})}}}]);
//# sourceMappingURL=532.2a32f0ec.chunk.js.map