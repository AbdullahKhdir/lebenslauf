/*! For license information please see component---src-pages-index-js-7afa221c18e5549ecd65.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7W2i":function(e,t,a){var n=a("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&n(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},Fxm3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){var t,a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var l=+new Date;!!t&&l<t+n?(clearTimeout(a),a=setTimeout((function(){t=l,e()}),n)):(t=l,e())}};t.default=n},Ijbi:function(e,t,a){var n=a("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},Nsbk:function(e,t){function a(t){return e.exports=a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,a(t)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},RIqP:function(e,t,a){var n=a("Ijbi"),l=a("EbDI"),r=a("ZhPi"),i=a("Bnag");e.exports=function(e){return n(e)||l(e)||r(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("7oih");function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s=a("dI71"),o=a("YIkO"),c=a.n(o),m=a("dwco"),u=a.n(m),d=function(e){return e.children},f=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(i(t)),t}Object(s.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){u.a.polyfill()},a.handleClick=function(e){e.preventDefault();var t=0,a=!0,n=this.props,l=n.type,r=n.element,i=n.offset,s=n.timeout;if(l&&r)switch(l){case"class":a=!!(t=document.getElementsByClassName(r)[0]);break;case"id":a=!!(t=document.getElementById(r))}a?this.scrollTo(t,i,s):console.log("Element not found: "+r)},a.scrollTo=function(e,t,a){void 0===t&&(t=0),void 0===a&&(a=null);var n=e?e.getBoundingClientRect().top+window.pageYOffset:0;a?setTimeout((function(){window.scroll({top:n+t,left:0,behavior:"smooth"})}),a):window.scroll({top:n+t,left:0,behavior:"smooth"})},a.render=function(){return l.a.createElement(d,null,"object"==typeof this.props.children?l.a.cloneElement(this.props.children,{onClick:this.handleClick}):l.a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(l.a.Component),p=a("btRG"),h=a.n(p),b=a("obyI"),v=a.n(b),g=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={tabs:[{content:"Über mich",href:"about"},{content:"Erfahrungen",href:"experience"},{content:"Beruflicher Werdegang",href:"education"},{content:"Kenntnisse",href:"skills"},{content:"Interessen",href:"interests"}],isCollapsed:!0},a.toggleNavbar=a.toggleNavbar.bind(i(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.toggleNavbar=function(){this.setState({isCollapsed:!this.state.isCollapsed})},a.render=function(){var e=this.state,t=e.tabs,a=e.isCollapsed;return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},l.a.createElement("a",{className:"navbar-brand",href:"#page-top"},l.a.createElement("span",{className:"d-block d-lg-none"},v.a.firstName,"   ",v.a.lastName),l.a.createElement("span",{className:"d-none d-lg-block"},l.a.createElement("img",{className:"img-fluid img-profile mx-auto mb-2",src:h.a,alt:""}))),l.a.createElement("button",{className:"navbar-toggler navbar-toggler-right "+(a?"collapsed":""),type:"button","data-toggle":"collapse","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:this.toggleNavbar},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse "+(a?"":"show"),id:"navbarSupportedContent"},l.a.createElement(c.a,{items:t.map((function(e){return e.href})),currentClassName:"active",offset:-300,className:"navbar-nav"},t.map((function(e,t){var a=e.href,n=e.content;return l.a.createElement("li",{className:"nav-item",key:a},l.a.createElement(f,{type:"id",element:a},l.a.createElement("a",{className:"nav-link",href:"#"+a},n)))})))))},t}(n.Component);t.default=function(){return l.a.createElement(r.a,null,l.a.createElement(g,null),l.a.createElement("div",{className:"container-fluid p-0"},l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h1",{className:"mb-0"},v.a.firstName,l.a.createElement("span",{className:"text-primary"}," ",v.a.lastName)),l.a.createElement("div",{className:"subheading mb-5"},v.a.address," · ",v.a.phone," ·",l.a.createElement("a",{href:"mailto:"+v.a.email},v.a.email)),l.a.createElement("p",{className:"lead mb-5"},"Ich bin Abdullah, Khdir, 25 Jahre alt und komme aus Syrien. Ich bin seit 7 Jahren in Deutschland und arbeite gerade als Full Stack Web Developer bei der Deutschen Telekom Individual Solutions & Products GmbH. In 2021 absolvierte ich eine Ausbildung als Fachinformatiker für Anwendungsentwicklung bei der Deutschen Telekom AG. Während meiner Ausbildung habe ich Erfahrungen in unterschiedlichen Bereichen gesammelt, die in der Telekommunikationswelt wichtig sind und in der IT-Welt als Programmierer benötigt werden. Ich habe auch Erfahrungen in dem Automatisierungsbereich, wo unterschiedliche Netzkomponenten durch Agenten gesteuert und automatisiert werden können, und habe an die Entwicklung vom SNMP-Agent gearbeitet, welches für die Steuerung und Automatisierung von Power-Distribution-Units eingesetzt werden kann. Zusätzlich habe ich mit der Entwicklung von automatisierten System-Tests die Qualität des Projekts geprüft, und sammelte ich Wissen über die Entwicklung von Web-Applikationen mit der Nutzung von umfangreichen Technologien, als auch Erfahrungen für den Entwurf und Entwicklung von Oberflächen (GUI). Aktuell spezielaisiere ich konkret und tief in den unterschiedlichen Technologien und Framework, die sich um die Web-Entwicklung umdrehen."),l.a.createElement("div",{className:"social-icons"},v.a.socialLinks.map((function(e){var t=e.icon,a=e.url;return l.a.createElement("a",{key:a,href:a},l.a.createElement("i",{className:"fab "+t}))}))))),l.a.createElement("hr",{className:"m-0"}),l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"Erfahrungen"),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Full Stack PHP Web Developer"),l.a.createElement("div",{className:"subheading mb-3"},"Deutsche Telekom Individual Solutions & Products GmbH"),l.a.createElement("p",null,"Durch den Einsatz vom Laravel Framework arbeite ich an den Entwickelung bzw. Implementierung, Anpassung, Data-Model-Entwurf, Testing, und Organisierung von einem Tool, die Aufträge und Verträge globalen und lokalen Kunden archiviert und adressiert.")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"Juni 2021 - Präsens"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Autiomatisierungsbereich"),l.a.createElement("div",{className:"subheading mb-3"},"Deutsche Telekom Technik GmbH"),l.a.createElement("p",null,"Ich habe ein SNMP-Agent der Hilfe von Programmiersprahe Java entwickelt, welcher zur Steuerung von Power-Distribution-Units durch SNMP-Protokoll dient. Ebenso habe ich an unterschiedlichen Automatisierungs-Lösungen gearbeitet, die Netzkomponenten durch den Agent automatisiert werden können.")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"März 2021 - Juni 2021"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Entwicklung Web-Applikationen"),l.a.createElement("div",{className:"subheading mb-3"},"Berufliche Entwicklung"),l.a.createElement("p",null,"Durch verschiedene Projekte könnte ich im Bereich Entwicklung von Web-Applikationen mit der Nutzung von MERN-Technologien Kenntnisse aneigenen. Zusätzlich bin ich auch mit separaten Frontends-Applikationen vertraut.")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"Februar 2021"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Entwicklung von Graphical User Interface"),l.a.createElement("div",{className:"subheading mb-3"},"Deutsche Telekom Technik GmbH"),l.a.createElement("p",null,"Ich habe eine Graphical-User-Interface mit der Hilfe von Programmiersprahe Java für ein Power-Distribution-Unit-Device entwickelt, die die Funktionalitäten des Produkts steuert und überwacht.")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"August 2020"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Entwicklung und Betreuung von Datenbank"),l.a.createElement("div",{className:"subheading mb-3"},"Deutsche Telekom Technik GmbH"),l.a.createElement("p",null,"Ich habe eine Oberfläche für eine Datenbank mit der Nutzung von MS-Access entwickelt und betreut, die sich mit den Tools aller Abteilungen befasst.")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"Dezember 2020"))))),l.a.createElement("hr",{className:"m-0"}),l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"BERUFLICHER WERDEGANG"),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Fachinformatiker als Anwendungsentwickler"),l.a.createElement("div",{className:"subheading mb-3"},"Ausbildung bei der Deutschen Telekom AG in Nürnberg"),l.a.createElement("div",null,"Umfangreichen Themen in der Telekommunikationswelt, spezifisch in dem Automatisierungsbereich"),l.a.createElement("p",null)),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"September 2018 - September 2021"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Sprachliche Kenntnisse"),l.a.createElement("div",{className:"subheading mb-3"},"Universität Oldenburg"),l.a.createElement("div",null,"Abschluss Sprachkurs DSH-1 mit Zertifikat"),l.a.createElement("p",null,"Ich verfüge auch über sehr gute Kenntnisse in englische Sprache")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"März 2017 - Februar 2018"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Al Imam Ali Senior High School, Amman"),l.a.createElement("div",{className:"subheading mb-3"},"Gymnasium Abitur"),l.a.createElement("p",null)),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"September 2013 - Mai 2015"))))),l.a.createElement("hr",{className:"m-0"}),l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"KENNTNISSE"),l.a.createElement("div",{className:"subheading mb-3"},"Programmiersprachen & Tools"),l.a.createElement("ul",{className:"list-inline dev-icons"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-java"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{class:"fab fa-cuttlefish"},"++")),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{class:"fab fa-cuttlefish"},"#")),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-html5"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-css3-alt"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-js-square"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-react"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-node-js"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-npm"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-php"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-laravel"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-github"}))),l.a.createElement("div",{className:"subheading mb-3"},"Workflow"),l.a.createElement("ul",{className:"fa-ul mb-0"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"Cross Functional Teams"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"Agile Development & Scrum"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"EDV")))),l.a.createElement("hr",{className:"m-0"}),l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"INTERESSEN"),l.a.createElement("p",null,"Lernen von den neuen Technologien, die die IT-Welt allen bereichen umdreht. Spezifisch die Programmierungstechnologien, die im Praxis häufig eingestzt sind."),l.a.createElement("p",{className:"mb-0"},"Ich mag reisen, und neue Orte, Eigenschaften, Kulturen und Menschen kennenzulernen.")))))}},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var i=l.apply(null,n);i&&e.push(i)}}else if("object"===r)if(n.toString===Object.prototype.toString)for(var s in n)a.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},W8MJ:function(e,t){function a(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n},e.exports.__esModule=!0,e.exports.default=e.exports},YIkO:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("pVnL")),r=n(a("lSNA")),i=n(a("RIqP")),s=n(a("lwsE")),o=n(a("a1gu")),c=n(a("Nsbk")),m=n(a("PJYZ")),u=n(a("W8MJ")),d=n(a("7W2i")),f=n(a("17x9")),p=n(a("q1tI")),h=n(a("TSYQ")),b=n(a("Fxm3"));var v=function(e){function t(e){var a;return(0,s.default)(this,t),(a=(0,o.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},a._handleSpy=a._handleSpy.bind((0,m.default)(a)),a}return(0,d.default)(t,e),(0,u.default)(t,null,[{key:"propTypes",get:function(){return{items:f.default.arrayOf(f.default.string).isRequired,currentClassName:f.default.string.isRequired,scrolledPastClassName:f.default.string,style:f.default.object,componentTag:f.default.oneOfType([f.default.string,f.default.elementType]),offset:f.default.number,rootEl:f.default.string,onUpdate:f.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,u.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var a=[],n=0,l=e.length;n<l;n++)a[n]=t;return a}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],a=[],n=[],l=e||this.state.targetItems,r=!1,s=0,o=l.length;s<o;s++){var c=l[s],m=!r&&this._isInView(c);m?(r=!0,t.push(c)):a.push(c);var u=s===o-1,d=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!m&&u&&d&&(a.pop(),a.push.apply(a,(0,i.default)(t)),t=[c],n=this._fillArray(n,!1),m=!0),n.push(m)}return{inView:t,outView:a,viewStatusList:n,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(n)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,a=this.props,n=a.rootEl,l=a.offset;n&&(t=document.querySelector(n).getBoundingClientRect());var r=e.getBoundingClientRect(),i=n?t.height:window.innerHeight,s=this._getScrollDimension().scrollTop,o=s+i,c=n?r.top+s-t.top+l:r.top+s+l,m=c+e.offsetHeight;return c<o&&m>s}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),a=t.scrollTop,n=t.scrollHeight;return a+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=n}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,a=this._getElemsViewState(e),n=this.state.inViewState;this.setState({inViewState:a.viewStatusList,isScrolledPast:a.scrolledPast},(function(){t._update(n)}))}},{key:"_update",value:function(e){var t,a;(t=this.state.inViewState,a=e,t.length===a.length&&t.every((function(e,t){return e===a[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,b.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,a=this.props,n=a.children,i=a.className,s=a.scrolledPastClassName,o=a.style,c=0,m=p.default.Children.map(n,(function(t,a){var n;if(!t)return null;var i=t.type,o=s&&e.state.isScrolledPast[a],m=(0,h.default)((n={},(0,r.default)(n,"".concat(t.props.className),t.props.className),(0,r.default)(n,"".concat(e.props.currentClassName),e.state.inViewState[a]),(0,r.default)(n,"".concat(e.props.scrolledPastClassName),o),n));return p.default.createElement(i,(0,l.default)({},t.props,{className:m,key:c++}),t.props.children)})),u=(0,h.default)((0,r.default)({},"".concat(i),i));return p.default.createElement(t,{className:u,style:o},m)}}]),t}(p.default.Component);t.default=v},ZhPi:function(e,t,a){var n=a("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},a1gu:function(e,t,a){var n=a("cDf5").default,l=a("PJYZ");e.exports=function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return l(e)},e.exports.__esModule=!0,e.exports.default=e.exports},btRG:function(e,t,a){e.exports=a.p+"static/Foto-341d8235baa42aa4d05af5a3b8f41287.jpg"},dwco:function(e,t,a){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var a,n=e.HTMLElement||e.Element,l={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||s,scrollIntoView:n.prototype.scrollIntoView},r=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,i=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==o(arguments[0])?p.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):l.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(o(arguments[0])?l.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):p.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==o(arguments[0])){var e=arguments[0].left,t=arguments[0].top;p.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==o(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==o(arguments[0])){var a=d(this),n=a.getBoundingClientRect(),r=this.getBoundingClientRect();a!==t.body?(p.call(this,a,a.scrollLeft+r.left-n.left,a.scrollTop+r.top-n.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else l.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(e,t){this.scrollLeft=e,this.scrollTop=t}function o(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+i<e.scrollHeight:"X"===t?e.clientWidth+i<e.scrollWidth:void 0}function m(t,a){var n=e.getComputedStyle(t,null)["overflow"+a];return"auto"===n||"scroll"===n}function u(e){var t=c(e,"Y")&&m(e,"Y"),a=c(e,"X")&&m(e,"X");return t||a}function d(e){for(;e!==t.body&&!1===u(e);)e=e.parentNode||e.host;return e}function f(t){var a,n,l,i,s=(r()-t.startTime)/468;i=s=s>1?1:s,a=.5*(1-Math.cos(Math.PI*i)),n=t.startX+(t.x-t.startX)*a,l=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,n,l),n===t.x&&l===t.y||e.requestAnimationFrame(f.bind(e,t))}function p(a,n,i){var o,c,m,u,d=r();a===t.body?(o=e,c=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,u=l.scroll):(o=a,c=a.scrollLeft,m=a.scrollTop,u=s),f({scrollable:o,method:u,startTime:d,startX:c,startY:m,x:n,y:i})}}}}()},lSNA:function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e},e.exports.__esModule=!0,e.exports.default=e.exports},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},obyI:function(e,t){e.exports={siteTitle:"Lebenslauf",manifestName:"Lebenslauf",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#b8b8b8",manifestThemeColor:"#0049bf",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/lebenslauf",firstName:"Abdullah",lastName:"Khdir",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/AbdullahKhdir"}],email:"abdullahkhder77@gmail.com",phone:"+49-1577 1191 488",address:"DL, Deutschland, Nürnberg"}}}]);
//# sourceMappingURL=component---src-pages-index-js-7afa221c18e5549ecd65.js.map