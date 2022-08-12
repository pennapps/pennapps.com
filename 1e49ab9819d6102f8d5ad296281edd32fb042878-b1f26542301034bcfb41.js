"use strict";(self.webpackChunkpennapps_com_redesign=self.webpackChunkpennapps_com_redesign||[]).push([[379,678],{8513:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.Collapse=void 0;var r,i=(r=n(7294))&&r.__esModule?r:{default:r};function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=f(e);if(t){var r=f(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return s(this,n)}}function s(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return u(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(s,e);var t,n,o,r=c(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),p(u(t=r.call(this,e)),"timeout",void 0),p(u(t),"container",void 0),p(u(t),"content",void 0),p(u(t),"onResize",(function(){if(clearTimeout(t.timeout),t.container&&t.content){var e=t.props,n=e.isOpened,o=e.checkTimeout,r=Math.floor(t.container.clientHeight),i=Math.floor(t.content.clientHeight),a=n&&Math.abs(i-r)<=1,l=!n&&Math.abs(r)<=1;a||l?t.onRest({isFullyOpened:a,isFullyClosed:l,isOpened:n,containerHeight:r,contentHeight:i}):(t.onWork({isFullyOpened:a,isFullyClosed:l,isOpened:n,containerHeight:r,contentHeight:i}),t.timeout=setTimeout((function(){return t.onResize()}),o))}})),p(u(t),"onRest",(function(e){var n=e.isFullyOpened,o=e.isFullyClosed,r=e.isOpened,i=e.containerHeight,a=e.contentHeight;if(t.container&&t.content){var l=r&&t.container.style.height==="".concat(a,"px"),c=!r&&"0px"===t.container.style.height;if(l||c){t.container.style.overflow=r?"initial":"hidden",t.container.style.height=r?"auto":"0px";var s=t.props.onRest;s&&s({isFullyOpened:n,isFullyClosed:o,isOpened:r,containerHeight:i,contentHeight:a})}}})),p(u(t),"onWork",(function(e){var n=e.isFullyOpened,o=e.isFullyClosed,r=e.isOpened,i=e.containerHeight,a=e.contentHeight;if(t.container&&t.content){var l=r&&t.container.style.height==="".concat(a,"px"),c=!r&&"0px"===t.container.style.height;if(!l&&!c){t.container.style.overflow="hidden",t.container.style.height=r?"".concat(a,"px"):"0px";var s=t.props.onWork;s&&s({isFullyOpened:n,isFullyClosed:o,isOpened:r,containerHeight:i,contentHeight:a})}}})),p(u(t),"onRefContainer",(function(e){t.container=e})),p(u(t),"onRefContent",(function(e){t.content=e})),e.initialStyle?t.initialStyle=e.initialStyle:t.initialStyle=e.isOpened?{height:"auto",overflow:"initial"}:{height:"0px",overflow:"hidden"},t}return t=s,(n=[{key:"componentDidMount",value:function(){this.onResize()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=t.theme,o=t.isOpened;return t.children!==e.children||o!==e.isOpened||Object.keys(n).some((function(t){return n[t]!==e.theme[t]}))}},{key:"getSnapshotBeforeUpdate",value:function(){if(!this.container||!this.content)return null;if("auto"===this.container.style.height){var e=this.content.clientHeight;this.container.style.height="".concat(e,"px")}return null}},{key:"componentDidUpdate",value:function(){this.onResize()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"render",value:function(){var e=this.props,t=e.theme,n=e.children,o=e.isOpened;return i.default.createElement("div",{ref:this.onRefContainer,className:t.collapse,style:this.initialStyle,"aria-hidden":!o},i.default.createElement("div",{ref:this.onRefContent,className:t.content},n))}}])&&a(t.prototype,n),o&&a(t,o),s}(i.default.Component);t.Collapse=d,p(d,"defaultProps",{theme:{collapse:"ReactCollapse--collapse",content:"ReactCollapse--content"},initialStyle:void 0,onRest:void 0,onWork:void 0,checkTimeout:50})},6187:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.UnmountClosed=void 0;var r,i=(r=n(7294))&&r.__esModule?r:{default:r},a=n(8513),l=["isOpened"],c=["isOpened"];function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s.apply(this,arguments)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=g(e);if(t){var r=g(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return m(this,n)}}function m(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(u,e);var t,n,o,r=y(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),O(v(t=r.call(this,e)),"onWork",(function(e){var n=e.isOpened,o=p(e,l);t.setState({isResting:!1,isOpened:n});var r=t.props.onWork;r&&r(f({isOpened:n},o))})),O(v(t),"onRest",(function(e){var n=e.isOpened,o=p(e,c);t.setState({isResting:!0,isOpened:n,isInitialRender:!1});var r=t.props.onRest;r&&r(f({isOpened:n},o))})),O(v(t),"getInitialStyle",(function(){var e=t.state,n=e.isOpened;return e.isInitialRender&&n?{height:"auto",overflow:"initial"}:{height:"0px",overflow:"hidden"}})),t.state={isResting:!0,isOpened:e.isOpened,isInitialRender:!0},t}return t=u,(n=[{key:"componentDidUpdate",value:function(e){var t=this.props.isOpened;e.isOpened!==t&&this.setState({isResting:!1,isOpened:t,isInitialRender:!1})}},{key:"render",value:function(){var e=this.state,t=e.isResting,n=e.isOpened;return t&&!n?null:i.default.createElement(a.Collapse,s({},this.props,{initialStyle:this.getInitialStyle(),onWork:this.onWork,onRest:this.onRest}))}}])&&d(t.prototype,n),o&&d(t,o),u}(i.default.PureComponent);t.UnmountClosed=b,O(b,"defaultProps",{onWork:void 0,onRest:void 0})},4397:function(e,t,n){var o=n(8513).Collapse,r=n(6187).UnmountClosed;e.exports=r,r.Collapse=o,r.UnmountClosed=r},2600:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(7294),r=n(4397);function i(e){var t=e.q,n=e.a,i=(0,o.useState)(!1),a=i[0],l=i[1];return o.createElement("div",{className:"faq-section "+(a?"open":"closed"),onClick:function(){return l(!a)},onKeyPress:function(){return l(!a)}},o.createElement("div",{className:"faq-question-container"},o.createElement("div",{className:"faq-question-text"},t)),o.createElement("img",{className:"faq-question-icon "+(a?"open":"closed"),src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAARCAYAAADkIz3lAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEJSURBVHgBfdAxT8JAGAbg7702ahc8E2QGNaawWP9BUbrr5ib8Ev0nsLm6Onk/ARfjRBlN7NCxGvDz7hDS0Cvf0OZNnrz33Xny/Ppmv3X2tNfsFD9Z+kY1I0iwJOJIABPZS6I66BVZOg2aJyBQrPNd0Dp9Kb5mnxVoPkU2U8Fx54gItRjlILvJhInv9Spz8LKff6i5E+7CFWjmsDt41b+4jJ1QRrHkb9/gaI2d0OIwbjP89D8q34naupG851WyjSPhgnzgKQIuyjtWYKOXjLdR5dYGgXnoesdNYyMcPFgEyoHlbRltGi0CPVpEi37+rqbbK0GGV0OGGNuAxaULrY4GdAv0Tr+jOmTmD0CoiGrlLj0tAAAAAElFTkSuQmCC",alt:"arrow"}),o.createElement(r.Collapse,{isOpened:a},o.createElement("div",null,o.createElement("div",null,n))))}},6558:function(e,t,n){n.r(t),n.d(t,{Head:function(){return R},default:function(){return j}});var o=n(7294),r=n(6947),i=n(3621),a=n(7300),l=n(2281),c=n(2136),s=n(8014),u=n(5660),f=n(3948),p=n(867),d=n(3209),h=n(3836),y=n(7557),m=n(2031),v=n(3340),g=n(7821),O=n(3749),b=n(6691),E=n(4308),A=n(5062);function R(e){var t=e.location;return o.createElement(o.Fragment,null,o.createElement("title",null,t.pathname),o.createElement("link",{rel:"stylesheet",href:"https://use.typekit.net/tri7gwo.css"}))}var w={"Sai Mamidala":"DIRECTOR","Jason Hom":"VICE DIRECTOR","Anna Xia":"OUTREACH","Heyi Liu":"OUTREACH","Anuj Kothari":"LOGISTICS","Qijia (Joy) Liu":"LOGISTICS","Audrey Yang":"DEV","Joe Konno":"DEV","Cynthia Adhiambo Otieno":"SPONSORSHIP","Zachary Huang-Ogata":"SPONSORSHIP","Mia Kim":"CREATIVE","Sylvia Zhao":"CREATIVE","Wenny Cheng":"MARKETING"},S=[u.Z,f.Z,p.Z,m.Z,d.Z,O.Z,h.Z,v.Z,y.Z,E.Z,g.Z,b.Z,A.Z];function j(){return o.createElement("div",{className:"landing"},o.createElement(a.Z,null),o.createElement("div",{className:"landing-info"},o.createElement("div",{className:"landing-info-text"},"Applications for PennAppsXXIII are open!"),o.createElement("div",{className:"landing-info-btn-container"},o.createElement("a",{href:"http://2022f.pennapps.com/"},o.createElement("button",{className:"landing-info-btn",type:"button"},"GO TO SITE")))),o.createElement("div",{className:"landing"},o.createElement("img",{className:"landing-img",src:l.Z,alt:"Landing Header"})),o.createElement("div",{className:"landing-page-container"},o.createElement("div",{className:"about-pennapps"},o.createElement("h3",null,"About PennApps"),o.createElement("div",null,"Founded in the fall of 2009, PennApps was the nation’s first student-run college hackathon. Since then, it has spurred a revolution in the way engineering students develop and showcase their skills, spawning an entire “league” of hackathons across the nation. In past years, over a thousand students from the U.S. and other countries like Switzerland, Canada, England, and Singapore have converged in Philadelphia for the spring and fall editions of the event for a weekend of creation and discovery. Both beginners and experts alike will work together, learn and compete to become better engineers and work on awesome projects.")),o.createElement("div",{className:"timeline"},o.createElement("h3",null,"Event Timeline"),o.createElement("div",{className:"timeline-img-wrapper"},o.createElement("picture",null,o.createElement("source",{media:"(min-width: 680px)",srcSet:c.Z}),o.createElement("img",{src:s.Z,alt:"Timeline Image",className:"timeline-img"}))),o.createElement("p",null,"Reach out to contact@pennapps.com if you have any questions!")),o.createElement("div",{className:"organizers"},o.createElement("h3",null,"Organizers"),o.createElement("div",{className:"organizers-grid"},Object.keys(w).map((function(e,t){return o.createElement(i.Z,{name:e,title:w[e],idx:t,src:S[t]})}))))),o.createElement(r.Z,null))}}}]);
//# sourceMappingURL=1e49ab9819d6102f8d5ad296281edd32fb042878-b1f26542301034bcfb41.js.map