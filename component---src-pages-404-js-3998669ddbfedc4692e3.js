(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{128:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(133),o=n(163),c=n(142),l=n(143),s=function(){return r.a.createElement("div",null,r.a.createElement(l.a,{color:"backgroundDark",height:["35vh","80vh"],width:["95vw","60vw"]}),r.a.createElement(l.a,{color:"primary",height:["25vh","35vh"],width:["75vw","60vw"],invertX:!0}),r.a.createElement(l.a,{color:"secondaryLight",height:["10vh","20vh"],width:["50vw","50vw"],invertX:!0,invertY:!0}))};t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a.Container,{id:"404",Background:s},r.a.createElement(i.Box,{width:[320,400,600],m:"auto"},r.a.createElement(i.Heading,{color:"primaryDark",fontSize:["9rem","13rem","16rem"]},"404"),r.a.createElement(i.Heading,{color:"secondary",fontSize:["4rem","5rem","6rem"]},"There isn't anything here"))))}},137:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(132),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(141),m=n.n(s);n.d(t,"PageRenderer",function(){return m.a});var u=n(30);n.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},141:function(e,t,n){var a;e.exports=(a=n(154))&&a.default||a},142:function(e,t,n){"use strict";n(136);var a=n(0),r=n.n(a),i=n(131),o=n(139),c=n(133),l=n(4),s=n.n(l),m=n(170),u=n.n(m),d=n(145),f=i.default.div.withConfig({displayName:"Section__SectionContainer",componentId:"sc-13j1h0y-0"})(["min-height:100vh;min-width:320px;max-width:1366px;display:flex;margin:auto;flex:0 1 auto;flex-direction:column;justify-content:center;padding:5em 1em;scroll-behavior:smooth;"]),p=function(){return r.a.createElement("div",null)},h=function(e){var t=e.id,n=e.children,a=e.Background,i=void 0===a?p:a;return r.a.createElement(o.b,{id:t,style:{position:"relative"}},r.a.createElement(i,null),r.a.createElement(f,null,n))};h.propTypes={id:s.a.string.isRequired,children:s.a.node.isRequired,Background:s.a.func};var g=function(e){var t=e.name,n=e.icon,a=void 0===n?"":n,i=e.label,o=void 0===i?"":i;return r.a.createElement(u.a,{left:!0},r.a.createElement(c.Heading,{color:"secondaryDark",mb:4},r.a.createElement(d.a,{selected:!0},t,a&&r.a.createElement("span",{role:"img","aria-label":o,style:{marginLeft:"10px"}},a))))};g.propTypes={name:s.a.string.isRequired,icon:s.a.string,label:s.a.string},t.a={Container:h,Header:g}},143:function(e,t,n){"use strict";var a=n(131).default.div.withConfig({displayName:"Triangle",componentId:"np5xmt-0"})(["position:absolute;width:0;height:0;z-index:-2;"," "," @media only screen and (min-width:768px){"," ",";}"],function(e){var t=e.theme.colors[e.color]||e.color,n=e.height[0]+" solid "+t+";";return e.invertY?"border-bottom: "+n+"; bottom: 0;":"border-top: "+n+";"},function(e){var t=e.width[0]+" solid transparent;";return e.invertX?"border-left: "+t+"; right: 0;":"border-right: "+t+";"},function(e){var t=e.height[1];return e.invertY?"border-bottom-width: "+t+";":"border-top-width: "+t+";"},function(e){var t=e.width[1];return e.invertX?"border-left-width: "+t+";":"border-right-width: "+t+";"});t.a=a},145:function(e,t,n){"use strict";var a=n(131).default.span.withConfig({displayName:"LinkAnimated",componentId:"x6iha3-0"})(["text-decoration:none;position:relative;margin-bottom:0;padding-bottom:5px;color:inherit;",";transition:0.4s;cursor:",";&:after{content:'';position:absolute;right:0;width:0;bottom:-5px;background:",";height:5px;transition-property:width;transition-duration:0.3s;transition-timing-function:ease-out;}&:hover:after{left:0;right:auto;width:100%;}"],function(e){return e.selected&&"border-bottom:  5px solid "+e.theme.colors.primaryLight},function(e){return e.onClick?"pointer":"default"},function(e){return e.theme.colors.secondaryLight});t.a=a},152:function(e,t){e.exports={background:"#FFFFFF",backgroundDark:"#B2BCAA",primary:"#121420",primaryLight:"#B3B3B3",primaryDark:"#7A7A7A",secondary:"#C9CEBD",secondaryLight:"#B3B3B3",secondaryDark:"#121420"}},153:function(e){e.exports={data:{contentfulAbout:{name:"William VanDolah",description:"This is a portfolio!",profile:{favicon16:{src:"//images.ctfassets.net/i2030mvfbgdi/5bv74CuKfS2bbaqMWr8L3E/f4974a2bb154b9c719070208b93bc137/IMG_0967.jpg?w=16&fl=progressive&q=50"},favicon32:{src:"//images.ctfassets.net/i2030mvfbgdi/5bv74CuKfS2bbaqMWr8L3E/f4974a2bb154b9c719070208b93bc137/IMG_0967.jpg?w=32&fl=progressive&q=50"},bigIcon:{src:"//images.ctfassets.net/i2030mvfbgdi/5bv74CuKfS2bbaqMWr8L3E/f4974a2bb154b9c719070208b93bc137/IMG_0967.jpg?w=192&fl=progressive&q=50"},appleIcon:{src:"//images.ctfassets.net/i2030mvfbgdi/5bv74CuKfS2bbaqMWr8L3E/f4974a2bb154b9c719070208b93bc137/IMG_0967.jpg?w=180&fl=progressive&q=50"}}}}}},154:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(50),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},163:function(e,t,n){"use strict";var a=n(164),r=n.n(a),i=n(0),o=n.n(i),c=n(131),l=n(4),s=n.n(l),m=n(139),u=(n(165),n(140)),d=n.n(u),f=n(152),p=n.n(f),h=(n(136),n(153)),g=n(166),b=n.n(g),v=n(137),y=function(e){var t=e.theme,n=void 0===t?{}:t;return o.a.createElement(v.StaticQuery,{query:"4063282471",render:function(e){var t=e.contentfulAbout,a=t.name,r=t.description,i=t.profile,c=a+" Portofolio";return o.a.createElement(b.a,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,c),o.a.createElement("meta",{name:"description",content:r}),o.a.createElement("link",{rel:"shortcut icon",href:i.favicon32.src}),o.a.createElement("meta",{name:"theme-color",content:n.background}),o.a.createElement("meta",{name:"image",content:i.favicon32.src}),o.a.createElement("meta",{itemProp:"name",content:c}),o.a.createElement("meta",{itemProp:"description",content:r}),o.a.createElement("meta",{itemProp:"image",content:i.favicon32.src}),o.a.createElement("meta",{name:"og:title",content:c}),o.a.createElement("meta",{name:"og:description",content:r}),o.a.createElement("meta",{name:"og:image",content:i.bigIcon.src}),o.a.createElement("meta",{name:"og:site_name",content:c}),o.a.createElement("meta",{name:"og:locale",content:"en_US"}),o.a.createElement("meta",{name:"og:type",content:"website"}),o.a.createElement("meta",{name:"twitter:card",content:"summary"}),o.a.createElement("meta",{name:"twitter:title",content:c}),o.a.createElement("meta",{name:"twitter:description",content:r}),o.a.createElement("meta",{name:"twitter:image",content:i.bigIcon.src}),o.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:i.appleIcon.src}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:i.favicon32.src}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:i.favicon16.src}),o.a.createElement("link",{href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet",integrity:"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",crossOrigin:"anonymous"}))},data:h})};y.propTypes={theme:s.a.object};var E=Object(c.withTheme)(y);function w(){var e=r()(["\n*,\n*::after,\n*::before { \n  -webkit-box-sizing: inherit;\n  box-sizing: inherit;\n  }\n\nbody {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; \n  margin: 0;\n  font-family: Cabin;\n  overflow-x: hidden;\n}\n"]);return w=function(){return e},e}var x=Object(c.createGlobalStyle)(w());d()({ssrFadeout:!0});var k=function(e){var t=e.children;return o.a.createElement(i.Fragment,null,o.a.createElement(x,null),o.a.createElement(c.ThemeProvider,{theme:{colors:p.a}},o.a.createElement(m.a,null,o.a.createElement(E,null),t)))};k.propTypes={children:s.a.node.isRequired};t.a=k}}]);
//# sourceMappingURL=component---src-pages-404-js-3998669ddbfedc4692e3.js.map