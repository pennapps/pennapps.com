(self.webpackChunkpennapps_com_redesign=self.webpackChunkpennapps_com_redesign||[]).push([[61],{6135:function(e,t,a){"use strict";var n=a(4948),r=a(3070),i=a(9114);e.exports=function(e,t,a){var o=n(t);o in e?r.f(e,o,i(0,a)):e[o]=a}},1246:function(e,t,a){var n=a(648),r=a(8173),i=a(8554),o=a(7497),s=a(5112)("iterator");e.exports=function(e){if(!i(e))return r(e,s)||r(e,"@@iterator")||o[n(e)]}},4121:function(e,t,a){var n=a(6916),r=a(9662),i=a(9670),o=a(6330),s=a(1246),l=TypeError;e.exports=function(e,t){var a=arguments.length<2?s(e):t;if(r(a))return i(n(a,e));throw l(o(e)+" is not iterable")}},7659:function(e,t,a){var n=a(5112),r=a(7497),i=n("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||o[i]===e)}},408:function(e,t,a){var n=a(9974),r=a(6916),i=a(9670),o=a(6330),s=a(7659),l=a(6244),c=a(7976),u=a(4121),d=a(1246),m=a(9212),p=TypeError,g=function(e,t){this.stopped=e,this.result=t},h=g.prototype;e.exports=function(e,t,a){var f,v,y,w,E,b,C,k=a&&a.that,L=!(!a||!a.AS_ENTRIES),S=!(!a||!a.IS_RECORD),x=!(!a||!a.IS_ITERATOR),T=!(!a||!a.INTERRUPTED),_=n(t,k),N=function(e){return f&&m(f,"normal",e),new g(!0,e)},I=function(e){return L?(i(e),T?_(e[0],e[1],N):_(e[0],e[1])):T?_(e,N):_(e)};if(S)f=e.iterator;else if(x)f=e;else{if(!(v=d(e)))throw p(o(e)+" is not iterable");if(s(v)){for(y=0,w=l(e);w>y;y++)if((E=I(e[y]))&&c(h,E))return E;return new g(!1)}f=u(e,v)}for(b=S?e.next:f.next;!(C=r(b,f)).done;){try{E=I(C.value)}catch(O){m(f,"throw",O)}if("object"==typeof E&&E&&c(h,E))return E}return new g(!1)}},9212:function(e,t,a){var n=a(6916),r=a(9670),i=a(8173);e.exports=function(e,t,a){var o,s;r(e);try{if(!(o=i(e,"return"))){if("throw"===t)throw a;return a}o=n(o,e)}catch(l){s=!0,o=l}if("throw"===t)throw a;if(s)throw o;return r(o),a}},7497:function(e){e.exports={}},8559:function(e,t,a){var n=a(2109),r=a(408),i=a(6135);n({target:"Object",stat:!0},{fromEntries:function(e){var t={};return r(e,(function(e,a){i(t,e,a)}),{AS_ENTRIES:!0}),t}})},3723:function(e,t,a){"use strict";a.d(t,{G:function(){return I},L:function(){return g},M:function(){return b},P:function(){return E},_:function(){return s},a:function(){return o},b:function(){return c},g:function(){return u},h:function(){return l}});var n=a(7294),r=(a(2369),a(5697)),i=a.n(r);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(a=i[n])>=0||(r[a]=e[a]);return r}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,a,n,r){return void 0===r&&(r={}),o({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},r,{opacity:t?1:0})})}function u(e,t,a,n,r,i,s,l){var c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);var u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var d,m=["children"],p=function(e){var t=e.layout,a=e.width,r=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){var t=e.children,a=s(e,m);return n.createElement(n.Fragment,null,n.createElement(p,o({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,a=e.srcSet,r=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,u=s(e,h);return n.createElement("img",o({},u,{decoding:"async",loading:r,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:l}))},y=function(e){var t=e.fallback,a=e.sources,r=void 0===a?[]:a,i=e.shouldLoad,l=void 0===i||i,c=s(e,f),u=c.sizes||(null==t?void 0:t.sizes),d=n.createElement(v,o({},c,t,{sizes:u,shouldLoad:l}));return r.length?n.createElement("picture",null,r.map((function(e){var t=e.media,a=e.srcSet,r=e.type;return n.createElement("source",{key:t+"-"+r+"-"+a,type:r,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:u})})),d):d};v.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},y.displayName="Picture",y.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};var w=["fallback"],E=function(e){var t=e.fallback,a=s(e,w);return t?n.createElement(y,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},a))};E.displayName="Placeholder",E.propTypes={fallback:r.string,sources:null==(d=y.propTypes)?void 0:d.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var b=function(e){return n.createElement(n.Fragment,null,n.createElement(y,o({},e)),n.createElement("noscript",null,n.createElement(y,o({},e,{shouldLoad:!0}))))};b.displayName="MainImage",b.propTypes=y.propTypes;var C,k,L=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),o=3;o<n;o++)r[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:i().object.isRequired,alt:L},x=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],_=new Set,N=function(e){var t=e.as,r=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,m=e.class,p=e.onStartLoad,g=e.onLoad,h=e.onError,f=s(e,x),v=i.width,y=i.height,w=i.layout,E=function(e,t,a){var n={},r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}(v,y,w),b=E.style,L=E.className,S=s(E,T),N=(0,n.useRef)(),I=(0,n.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);m&&(d=m);var O=function(e,t,a){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(w,v,y);return(0,n.useEffect)((function(){C||(C=Promise.all([a.e(774),a.e(217)]).then(a.bind(a,9217)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return k=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,n=N.current.querySelector("[data-gatsby-image-ssr]");return n&&l()?(n.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),n.addEventListener("load",(function e(){n.removeEventListener("load",e),null==g||g({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)}))),void _.add(I)):k&&_.has(I)?void 0:(C.then((function(a){var n=a.renderImageToString,r=a.swapPlaceholderImage;N.current&&(N.current.innerHTML=n(o({isLoading:!0,isLoaded:_.has(I),image:i},f)),_.has(I)||(e=requestAnimationFrame((function(){N.current&&(t=r(N.current,I,_,c,p,g,h))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,n.useLayoutEffect)((function(){_.has(I)&&k&&(N.current.innerHTML=k(o({isLoading:_.has(I),isLoaded:_.has(I),image:i},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,n.createElement)(r,o({},S,{style:o({},b,c,{backgroundColor:u}),className:L+(d?" "+d:""),ref:N,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},I=(0,n.memo)((function(e){return e.image?(0,n.createElement)(N,e):null}));I.propTypes=S,I.displayName="GatsbyImage";var O,A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],R=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},z=new Set(["fixed","fullWidth","constrained"]),j={src:i().string.isRequired,alt:L,width:R,height:R,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!z.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},P=(O=I,function(e){var t=e.src,a=e.__imageData,r=e.__error,i=s(e,A);return r&&console.warn(r),a?n.createElement(O,o({image:a},i)):(console.warn("Image not loaded",t),null)});P.displayName="StaticImage",P.propTypes=j},2369:function(e){"use strict";var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,n=!1,r=0;r<e.length;r++){var i=e[r];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,r)+"-"+e.slice(r),t=!1,n=a,a=!0,r++):a&&n&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,r-1)+"-"+e.slice(r-1),n=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,n=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},2281:function(e,t,a){"use strict";a.r(t),a.d(t,{Head:function(){return p},default:function(){return g}});a(8559);var n=a(7294),r=a(1082),i=a(6947),o=a(3723);function s(e){var t=e.name,a=e.title,r=e.image;return n.createElement("div",{className:"organizer-card"},n.createElement("div",{className:"img-container"},r&&n.createElement(o.G,{image:r,imgStyle:{borderRadius:"4px"},alt:t})),n.createElement("div",{className:"title-container"},n.createElement("h4",null,t),n.createElement("div",{className:"organizer-title"},a.toUpperCase())))}var l=a(7300),c=a.p+"static/landing-image-0a44b7dd5e7b3a9378602ada9e24f5ea.png",u=a.p+"static/timeline-9aba137c5fe75955a66f3e00ba43c10d.png",d=a.p+"static/mobile-timeline-18fe532e198adb1dc7eb05fc76d05426.png",m=JSON.parse('[{"name":"Lina Chihoub","title":"Co-Director","image":"lina_chihoub"},{"name":"Zora Mardjoko","title":"Co-Director","image":"zora_mardjoko"},{"name":"Jackie Li","title":"Creative","image":"jackie_li"},{"name":"Rachel Lin","title":"Creative","image":"rachel_lin"},{"name":"Zihao Zhou","title":"Outreach","image":"zihao_zhou"},{"name":"Melody Cheng","title":"Outreach","image":"melody_cheng"},{"name":"Joseph Dattilo","title":"Dev","image":"joseph_dattilo"},{"name":"Millie Gu","title":"Dev","image":"millie_gu"},{"name":"Mackenzie Coultoff","title":"Sponsorship","image":"blank"},{"name":"Akshat Parthiban","title":"Sponsorship","image":"14"},{"name":"August Fu","title":"Logistics","image":"august_fu"},{"name":"Caroline Chen","title":"Logistics","image":"caroline_chen"}]');function p(){return n.createElement(n.Fragment,null,n.createElement("title",null,"PennApps - The world's first college hackathon"),n.createElement("link",{rel:"stylesheet",href:"https://use.typekit.net/tri7gwo.css"}))}function g(){var e=(0,r.useStaticQuery)("3037083354"),t=Object.fromEntries(e.allFile.nodes.map((function(e){return[e.name,e.childImageSharp.gatsbyImageData]})));return n.createElement("div",{className:"landing"},n.createElement(l.Z,null),n.createElement("div",{className:"landing"},n.createElement("img",{className:"landing-img",src:c,alt:"Landing Header"})),n.createElement("div",{className:"landing-page-container"},n.createElement("div",{className:"about-pennapps"},n.createElement("h3",null,"About PennApps"),n.createElement("div",null,"Founded in the fall of 2009, PennApps was the nation’s first student-run college hackathon. Since then, it has spurred a revolution in the way engineering students develop and showcase their skills, spawning an entire “league” of hackathons across the nation. In past years, over a thousand students from the U.S. and other countries like Switzerland, Canada, England, and Singapore have converged in Philadelphia for the spring and fall editions of the event for a weekend of creation and discovery. Both beginners and experts alike will work together, learn and compete to become better engineers and work on awesome projects.")),n.createElement("div",{className:"timeline"},n.createElement("h3",null,"Event Timeline"),n.createElement("div",{className:"timeline-img-wrapper"},n.createElement("picture",null,n.createElement("source",{media:"(min-width: 680px)",srcSet:u}),n.createElement("img",{src:d,alt:"Timeline Image",className:"timeline-img"}))),n.createElement("p",null,"Reach out to contact@pennapps.com if you have any questions!")),n.createElement("div",{className:"organizers"},n.createElement("h3",null,"Organizers"),n.createElement("div",{className:"organizers-grid"},m.map((function(e){return n.createElement(s,{key:e.image,name:e.name,title:e.title,image:t[e.image]})}))))),n.createElement(i.Z,null))}}}]);
//# sourceMappingURL=e50e9c162871c1d91fba5ce567a5656e16dc6783-fe7e71bca1dbbf1b6ac4.js.map