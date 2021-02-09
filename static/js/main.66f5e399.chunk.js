(this.webpackJsonpmyflow=this.webpackJsonpmyflow||[]).push([[0],{10:function(e,s,c){},12:function(e,s,c){"use strict";c.r(s);var t=c(1),i=c.n(t),j=c(4),n=c.n(j),l=(c(9),c.p,c(10),c(2)),r=c(0),a=function(){var e=Object(t.useState)("Your automation pipeline"),s=Object(l.a)(e,2),c=s[0],i=(s[1],Object(t.useState)("Marketing automation")),j=Object(l.a)(i,2),n=j[0];j[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{id:"leftside",children:Object(r.jsxs)("div",{id:"details",children:[Object(r.jsx)("div",{id:"back",onClick:function(){console.log("I was clicked-backbutton")},children:Object(r.jsx)("img",{src:"./assets/arrow.svg",alt:"missing"})}),Object(r.jsxs)("div",{id:"names",children:[Object(r.jsx)("p",{id:"title",children:c}),Object(r.jsx)("p",{id:"subtitle",children:n})]})]})})})},d=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{id:"centerswitch",children:[Object(r.jsx)("div",{id:"leftswitch",children:"Diagram view"}),Object(r.jsx)("div",{id:"rightswitch",children:"Code editor"})]})})},b=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{id:"buttonsright",children:[Object(r.jsx)("div",{id:"discard",children:"Discard"}),Object(r.jsx)("div",{id:"publish",children:"Publish to site"})]})})},o=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{id:"navigation",children:[Object(r.jsx)(a,{}),Object(r.jsx)(d,{}),Object(r.jsx)(b,{})]})})},O=function(){var e=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{id:"closecard",children:Object(r.jsx)("img",{src:"./assets/closeleft.svg",onClick:function(){console.log("I was clicked")}})}),Object(r.jsx)("p",{id:"header",children:"Blocks"})]})},s=function(){return Object(r.jsxs)("div",{id:"search",children:[Object(r.jsx)("img",{src:"./assets/search.svg"}),Object(r.jsx)("input",{type:"text",placeholder:"Search blocks"})]})},c=function(){var e=Object(t.useState)("navactive side"),s=Object(l.a)(e,2),c=(s[0],s[1],Object(t.useState)("navdisabled side")),i=Object(l.a)(c,2),j=i[0],n=i[1],a=function(){var e=function(){return Object(r.jsx)("div",{id:"triggers",className:j,onClick:function(e){e.stopPropagation(),n("navactive side")},children:"Triggers"})},s=function(){return Object(r.jsx)("div",{id:"actions",className:j,onClick:function(e){e.stopPropagation(),n("navactive side")},children:"Actions"})},c=function(){return Object(r.jsx)("div",{id:"loggers",className:j,onClick:function(e){e.stopPropagation(),n("navactive side")},children:"Loggers"})};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(e,{}),Object(r.jsx)(s,{}),Object(r.jsx)(c,{})]})};return Object(r.jsx)("div",{id:"subnav",children:Object(r.jsx)(a,{})})},i=function(){return Object(r.jsxs)("div",{id:"blocklist",children:[Object(r.jsxs)("div",{className:"blockelem create-flowy noselect",children:[Object(r.jsx)("input",{type:"hidden",name:"blockelemtype",className:"blockelemtype",value:"1"}),Object(r.jsx)("div",{className:"grabme",children:Object(r.jsx)("img",{src:"assets/grabme.svg"})}),Object(r.jsxs)("div",{className:"blockin",children:[Object(r.jsxs)("div",{className:"blockico",children:[Object(r.jsx)("span",{}),Object(r.jsx)("img",{src:"../assets/eye.svg"})]}),Object(r.jsxs)("div",{className:"blocktext",children:[Object(r.jsx)("p",{className:"blocktitle",children:"New visitor"}),Object(r.jsx)("p",{className:"blockdesc",children:"Triggers when somebody visits a specified page"})]})]})]}),Object(r.jsxs)("div",{className:"blockelem create-flowy noselect",children:[Object(r.jsx)("input",{type:"hidden",name:"blockelemtype",className:"blockelemtype",value:"2"}),Object(r.jsx)("div",{className:"grabme",children:Object(r.jsx)("img",{src:"../assets/grabme.svg"})}),Object(r.jsxs)("div",{className:"blockin",children:[Object(r.jsxs)("div",{className:"blockico",children:[Object(r.jsx)("span",{}),Object(r.jsx)("img",{src:"../assets/action.svg"})]}),Object(r.jsxs)("div",{className:"blocktext",children:[Object(r.jsx)("p",{className:"blocktitle",children:"Action is performed"}),Object(r.jsx)("p",{className:"blockdesc",children:"Triggers when somebody performs a specified action"})]})]})]}),Object(r.jsxs)("div",{className:"blockelem create-flowy noselect",children:[Object(r.jsx)("input",{type:"hidden",name:"blockelemtype",className:"blockelemtype",value:"3"}),Object(r.jsx)("div",{className:"grabme",children:Object(r.jsx)("img",{src:"assets/grabme.svg"})}),Object(r.jsxs)("div",{className:"blockin",children:[Object(r.jsxs)("div",{className:"blockico",children:[Object(r.jsx)("span",{}),Object(r.jsx)("img",{src:"assets/time.svg"})]}),Object(r.jsxs)("div",{className:"blocktext",children:[Object(r.jsx)("p",{className:"blocktitle",children:"Time has passed"}),Object(r.jsx)("p",{className:"blockdesc",children:"Triggers after a specified amount of time"})]})]})]}),Object(r.jsxs)("div",{className:"blockelem create-flowy noselect",children:[Object(r.jsx)("input",{type:"hidden",name:"blockelemtype",className:"blockelemtype",value:"4"}),Object(r.jsx)("div",{className:"grabme",children:Object(r.jsx)("img",{src:"../assets/grabme.svg"})}),Object(r.jsxs)("div",{className:"blockin",children:[Object(r.jsxs)("div",{className:"blockico",children:[Object(r.jsx)("span",{}),Object(r.jsx)("img",{src:"assets/error.svg"})]}),Object(r.jsx)("div",{className:"blocktext"})]})]})]})};return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{id:"leftcard",children:[Object(r.jsx)(e,{}),Object(r.jsx)(s,{}),Object(r.jsx)(c,{}),Object(r.jsx)(i,{})]})})},x=function(){return Object(r.jsx)("div",{id:"canvas",children:Object(r.jsx)("div",{className:"indicator invisible"})})},h=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{id:"propwrap",children:Object(r.jsxs)("div",{id:"properties",children:[Object(r.jsx)("div",{id:"close",children:Object(r.jsx)("img",{src:"assets/close.svg"})}),Object(r.jsx)("p",{id:"header2",children:"Properties"}),Object(r.jsxs)("div",{id:"propswitch",children:[Object(r.jsx)("div",{id:"dataprop",children:"Data"}),Object(r.jsx)("div",{id:"alertprop",children:"Alerts"}),Object(r.jsx)("div",{id:"logsprop",children:"Logs"})]}),Object(r.jsxs)("div",{id:"proplist",children:[Object(r.jsx)("p",{className:"inputlabel",children:"Select database"}),Object(r.jsxs)("div",{className:"dropme",children:["Database 1 ",Object(r.jsx)("img",{src:"assets/dropdown.svg"})]}),Object(r.jsx)("p",{className:"inputlabel",children:"Check properties"}),Object(r.jsxs)("div",{className:"dropme",children:["All",Object(r.jsx)("img",{src:"assets/dropdown.svg"})]}),Object(r.jsxs)("div",{className:"checkus",children:[Object(r.jsx)("img",{src:"assets/checkon.svg"}),Object(r.jsx)("p",{children:"Log on successful performance"})]}),Object(r.jsxs)("div",{className:"checkus",children:[Object(r.jsx)("img",{src:"assets/checkoff.svg"}),Object(r.jsx)("p",{children:"Give priority to this block"})]})]}),Object(r.jsx)("div",{id:"divisionthing"}),Object(r.jsx)("div",{id:"removeblock",children:"Delete blocks"})]})})})};var m=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(o,{}),Object(r.jsx)(O,{}),Object(r.jsx)(h,{}),Object(r.jsx)(x,{})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(s){var c=s.getCLS,t=s.getFID,i=s.getFCP,j=s.getLCP,n=s.getTTFB;c(e),t(e),i(e),j(e),n(e)}))};n.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root")),v()},9:function(e,s,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.66f5e399.chunk.js.map