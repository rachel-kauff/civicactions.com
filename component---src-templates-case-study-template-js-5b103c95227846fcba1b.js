(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{215:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(222),c=a.n(i),r=a(219),l=(a(67),a(32)),m=a.n(l),o=a(66),u=a.n(o),d=a(249),g=a.n(d),p=a(225),_=a.n(p),v=function(e){var t=e.image,a=e.caption,n=e.alt;return s.a.createElement("div",{className:"slide__item"},s.a.createElement(_.a,{sizes:t,alt:n}),s.a.createElement("div",{className:"slide__caption"}," ",a))},E=a(342),N=a.n(E),h=a(231),y=a.n(h),f=function(e){function t(t){var a;return(a=e.call(this,t)||this).next=a.next.bind(u()(u()(a))),a.previous=a.previous.bind(u()(u()(a))),a}m()(t,e);var a=t.prototype;return a.next=function(){this.slider.slickNext()},a.previous=function(){this.slider.slickPrev()},a.render=function(){var e,t=this,a=this.props.images,n="";if(null!==a){var i=a.length;return n={customPaging:function(e){return s.a.createElement("div",{className:"slide__custom-dots"},e+1,"/",i)},dots:!0,infinite:!1,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!1,centerMode:!0,focusOnSelect:!0},e=this.props.images.map(function(e,t){return s.a.createElement(v,{key:t,image:e.url.childImageSharp.resize,alt:e.alt,caption:e.caption})}),s.a.createElement("section",{className:"section section__image-slider usa-grid"},s.a.createElement("div",{className:"slide-images"},s.a.createElement(g.a,Object.assign({ref:function(e){return t.slider=e}},n),e),s.a.createElement("div",{className:"slide__arrows"},s.a.createElement("div",{style:{backgroundImage:"url("+N.a+")"},className:"slide__previous",onClick:this.previous},s.a.createElement("span",{className:"visually-hidden"},"Previous")),s.a.createElement("div",{style:{backgroundImage:"url("+y.a+")"},className:"slide__next",onClick:this.next},s.a.createElement("span",{className:"visually-hidden"},"Next")))))}return null},t}(n.Component),k=(a(120),a(121),a(0)),w=a.n(k),b=a(235),M=a(218),T=function(e){var t=e.posts,a=e.tags,n=0,i=t.map(function(e,t){var i=e.node.frontmatter,c=i.title,r=i.preview_image,l=i.client_name,m=i.path,o=null!==r?r.childImageSharp.resize:null,u=e.node.frontmatter.tags;if(a.some(function(e){return u.includes(e)}))return n++,s.a.createElement(b.a,{title:c,image:o,client_name:l,link:m,key:t})});return n>0?s.a.createElement("div",{className:"section__related-content"},s.a.createElement("section",{className:"section usa-grid "},s.a.createElement(M.a,{title:"Related Case Studies"}),i)):null},x=T;function I(e){var t=e.data,a=t.markdownRemark,n=t.allMarkdownRemark,i=a.frontmatter,l=a.html,m=i.specs,o=i.tags,u=i.images,d=n.edges,g=c.a.map(m,function(e,t){return s.a.createElement("li",{className:"study__item",key:t}," ",e)}),p=o.map(function(e,t){return s.a.createElement("button",{className:"tags",key:t},e)});return s.a.createElement(r.a,{heroTitle:i.title,pageTitle:"CivicActions | "+i.title,clientName:i.client_name,heroCTALink:i.website,heroCTAText:"Visit Website",heroClass:"case-study-hero"},s.a.createElement("div",{className:"section__specs section"},s.a.createElement("section",{className:"usa-grid study"},s.a.createElement("div",{className:"study__project study--col"},s.a.createElement("h3",null,"Project"),s.a.createElement("div",{className:"study__project__title"},i.project)),s.a.createElement("div",{className:"study__tech-specs study--col"},s.a.createElement("h3",null," Tech Specs "),s.a.createElement("ul",null,g)))),s.a.createElement("div",{className:"text-container section"},s.a.createElement("h3",null,"Background"),s.a.createElement("h4",null," ",i.background_section_title," "),s.a.createElement("p",null,i.background_section," ")),s.a.createElement(f,{images:u}),s.a.createElement("div",{className:"text-container section"},s.a.createElement("div",{className:"case-study-text",dangerouslySetInnerHTML:{__html:l}}),p),s.a.createElement(x,{posts:d,tags:o}))}T.Proptypes={tags:w.a.array,posts:w.a.object},a.d(t,"default",function(){return I}),a.d(t,"studyQuery",function(){return j});var j="496014030"},218:function(e,t,a){"use strict";var n=a(1),s=a.n(n);t.a=function(e){var t=e.title;return s.a.createElement("h2",{className:"section__title"},t)}},235:function(e,t,a){"use strict";a(230);var n=a(1),s=a.n(n),i=a(217),c=a.n(i),r=a(225),l=a.n(r),m=a(0),o=a.n(m),u=function(e){var t=e.image,a=e.title,n=e.link,i=e.client_name,r=t?s.a.createElement("div",{className:"teaser--case-study__image"},s.a.createElement(l.a,{sizes:t})):null;return s.a.createElement(c.a,{to:n,className:"teaser--case-study--wrapper"},s.a.createElement("div",{className:"teaser--case-study"},r,s.a.createElement("div",{className:"teaser--case-study__text"},s.a.createElement("span",{className:"teaser--case-study__client"},i),s.a.createElement("h4",{className:"teaser--case-study__title"},a))))};t.a=u,u.propTypes={image:o.a.object,title:o.a.string,link:o.a.string,client_name:o.a.string}},342:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTg5IiBoZWlnaHQ9IjMwNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUzIDMwNmwzNS43LTM1LjdMNzEuNCAxNTMgMTg4LjcgMzUuNyAxNTMgMCAwIDE1M2wxNTMgMTUzeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="}}]);
//# sourceMappingURL=component---src-templates-case-study-template-js-5b103c95227846fcba1b.js.map