(this.webpackJsonpsimplified_cra_starter_code=this.webpackJsonpsimplified_cra_starter_code||[]).push([[0],{13:function(e,a,c){},15:function(e,a,c){"use strict";c.r(a);var s=c(1),n=c.n(s),r=c(6),t=c.n(r),i=c(5),o=c(7),d=c(8),l=(c(13),[{rank:"queen",suit:"hearts",cardImage:"https://res.cloudinary.com/jkeohan/image/upload/v1511808103/queen-of-hearts_nbvwls.png",backgroundImage:"https://res.cloudinary.com/jkeohan/image/upload/v1511808091/back_xldk5l.png"},{rank:"queen",suit:"diamonds",cardImage:"https://res.cloudinary.com/jkeohan/image/upload/v1511808103/queen-of-diamonds_opxv6b.png",backgroundImage:"https://res.cloudinary.com/jkeohan/image/upload/v1511808091/back_xldk5l.png"},{rank:"king",suit:"hearts",cardImage:"https://res.cloudinary.com/jkeohan/image/upload/v1511808103/king-of-hearts_njmwml.png",backgroundImage:"https://res.cloudinary.com/jkeohan/image/upload/v1511808091/back_xldk5l.png"},{rank:"king",suit:"diamonds",cardImage:"https://res.cloudinary.com/jkeohan/image/upload/v1511808103/king-of-diamonds_mpn7sm.png",backgroundImage:"https://res.cloudinary.com/jkeohan/image/upload/v1511808091/back_xldk5l.png"}]),m=c(0);function h(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("img",{id:e.id,className:"card",src:e.isFlipped?e.cardImage:e.backgroundImage,alt:"uwu"})})}function j(){var e=Object(s.useState)([!1,!1,!1,!1]),a=Object(d.a)(e,2),c=a[0],n=a[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("header",{children:[Object(m.jsx)("h1",{children:"Memory Game"}),Object(m.jsxs)("nav",{children:[Object(m.jsx)("a",{href:"#instructions",children:"Instructions"}),Object(m.jsx)("a",{href:"#game-board",children:"Game"})]})]}),Object(m.jsxs)("main",{children:[Object(m.jsx)("h2",{id:"instructions",children:"Instructions"}),Object(m.jsx)("p",{children:"Concentration, also known as Match Match, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs, is a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn.The object of the game is to turn over pairs of matching cards."}),Object(m.jsx)("div",{id:"message"}),Object(m.jsx)("div",{id:"game-board",className:"board",onClick:function(e){"card"===e.target.className&&(c.splice(e.target.id,1,!c[e.target.id]),console.log(c),n(Object(o.a)(c)))},children:l.map((function(e,a){return Object(m.jsx)(h,Object(i.a)({id:a,isFlipped:c[a]},e),a)}))})]}),Object(m.jsxs)("footer",{className:"clearfix",children:[Object(m.jsx)("p",{className:"copyright",children:"COPYRIGHT 2017"}),Object(m.jsxs)("p",{className:"message",children:["Created with \u2665 by ",Object(m.jsx)("span",{className:"name",children:"GA"})]})]})]})}var u=document.getElementById("root");t.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(j,{})}),u)}},[[15,1,2]]]);
//# sourceMappingURL=main.adecc38a.chunk.js.map