(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{205:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return l}),a.d(t,"teamQuery",function(){return M}),a(218);var c=a(1),r=a.n(c),s=a(220),n=a(242),u=a(235),i=a(215);function l(e){var t,a,c,l,M=e.data.markdownRemark,m=M.frontmatter,o=M.html,N=m.name,L=m.role,E=m.location,j=m.social,D=m.medium_posts,g=m.specialties,I=m.image,y=m.quote,T=I?I.childImageSharp.resize.src:"";return g&&(t=g.map(function(e,t){return r.a.createElement("li",{className:"hero__specialties",key:t},e)}),a=r.a.createElement("ul",{className:"hero__specs--list"},t)),D&&(c=D.map(function(e,t){return r.a.createElement(n.a,{teaserDate:e.date,teaserTitle:e.title,teaserLink:e.url})}),l=r.a.createElement("ul",{className:"team__medium-posts medium--teasers teaser--wrapper"},c)),r.a.createElement(s.a,{heroTitle:N,heroSubtitle:L,pageTitle:"CivicActions | "+N,teamImage:T,location:E,social:j},r.a.createElement("section",{className:" section usa-grid "},r.a.createElement("div",{className:"study__tech-specs "},r.a.createElement("h3",null," Specialties "),r.a.createElement("ul",null,a))),r.a.createElement("section",{className:"section text-container"},r.a.createElement("p",{dangerouslySetInnerHTML:{__html:o}}),r.a.createElement(u.a,{quote:y,quote_source:N})),r.a.createElement("section",{className:"section section__recent-posts usa-grid"},r.a.createElement(i.a,{title:"Authored Articles"}),l))}var M="1694751740"},215:function(e,t,a){"use strict";var c=a(1),r=a.n(c);t.a=function(e){var t=e.title;return r.a.createElement("h2",{className:"section__title"},t)}},218:function(e,t,a){var c=a(16).f,r=Function.prototype,s=/^\s*function ([^ (]*)/;"name"in r||a(17)&&c(r,"name",{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(e){return""}}})},235:function(e,t,a){"use strict";var c=a(1),r=a.n(c),s=a(0),n=a.n(s),u=a(236),i=a.n(u),l=function(e){var t,a=e.quote,c=e.quote_source,s=e.quote_class,n=e.quote_image,u="blockquote__wrapper "+s;return n&&(t=r.a.createElement("div",{className:"blockquote__image"},r.a.createElement("img",{src:n,alt:c}))),r.a.createElement("div",{className:u},t,r.a.createElement("img",{className:"blockquote__icon ",src:i.a,alt:"blockquote icon"}),r.a.createElement("blockquote",{className:"blockquote__text"},r.a.createElement("p",null,a),r.a.createElement("cite",null," ",c," ")))};t.a=l,l.propTypes={quote:n.a.string,quote_class:n.a.string,quote_image:n.a.string,quote_source:n.a.string}},236:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjA1MyAzLjcxN2MtMS43MS44NzQtMi45OTIgMS44NzEtMy44NDggMi45OTMtLjg1NSAxLjEyLTEuMjgyIDIuNTM2LTEuMjgyIDQuMjQ2LjExNC0uMDM4LjMwNC0uMDU3LjU3LS4wNTcgMS4yMTYgMCAyLjI1MS4zNyAzLjEwNyAxLjExMi44NTUuNzQgMS4yODIgMS43NTcgMS4yODIgMy4wNDkgMCAxLjQ0NC0uNDE4IDIuNTg0LTEuMjU0IDMuNDItLjgzNi44MzYtMS44ODEgMS4yNTQtMy4xMzUgMS4yNTQtMS43ODYgMC0zLjEyNS0uNjU1LTQuMDE5LTEuOTY3LS44OTMtMS4zMS0xLjMzOS0zLjE0NC0xLjMzOS01LjUgMC0yLjY5OC42NjUtNS4wNzMgMS45OTUtNy4xMjVDMy40NiAzLjA5IDUuNDkzIDEuMzk5IDguMjI5LjA2OWwxLjgyNCAzLjY0OHptMTMuNDUyIDBjLTEuNzEuODc0LTIuOTkyIDEuODcxLTMuODQ4IDIuOTkzLS44NTUgMS4xMi0xLjI4MiAyLjUzNi0xLjI4MiA0LjI0Ni4xMTQtLjAzOC4zMDQtLjA1Ny41Ny0uMDU3IDEuMjE2IDAgMi4yNTEuMzcgMy4xMDcgMS4xMTIuODU1Ljc0IDEuMjgyIDEuNzU3IDEuMjgyIDMuMDQ5IDAgMS40NDQtLjQxOCAyLjU4NC0xLjI1NCAzLjQyLS44MzYuODM2LTEuODgxIDEuMjU0LTMuMTM1IDEuMjU0LTEuNzg2IDAtMy4xMjUtLjY1NS00LjAxOC0xLjk2Ny0uODk0LTEuMzEtMS4zNC0zLjE0NC0xLjM0LTUuNSAwLTIuNjk4LjY2NS01LjA3MyAxLjk5NS03LjEyNSAxLjMzLTIuMDUyIDMuMzYzLTMuNzQzIDYuMDk5LTUuMDczbDEuODI0IDMuNjQ4eiIgZmlsbD0iI0RCMUIzQiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"},242:function(e,t,a){"use strict";var c=a(1),r=a.n(c),s=a(213),n=a.n(s);t.a=function(e){var t=e.teaserDate,a=e.teaserImage,c=e.teaserTitle,s=e.teaserText,u=e.teaserLink,i=e.teaserClass,l=(e.teaserType,"teaser"),M="";return i&&(l="teaser "+i),a&&(M=r.a.createElement("div",{className:"teaser__image--wrapper"},r.a.createElement("img",{src:a,alt:c}))),r.a.createElement("div",{className:l},M,r.a.createElement("div",{className:"teaser__date"}," ",t," "),r.a.createElement("h3",{className:"teaser__title"}," ",c," "),r.a.createElement("p",{className:"teaser__text"}," ",s," "),r.a.createElement("div",{className:"teaser__link"}," ",r.a.createElement(n.a,{to:u},"Read More")," "))}}}]);
//# sourceMappingURL=component---src-templates-team-member-template-js-d368bbede72cef8e554d.js.map