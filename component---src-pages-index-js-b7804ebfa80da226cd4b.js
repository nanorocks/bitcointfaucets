(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8+s/":function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var i=r("q1tI"),a=n(i),o=n(r("Gytx"));function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,m=[];function u(){s=e(m.map((function(e){return e.props}))),p.canUseDOM?t(s):r&&(s=r(s))}var p=function(e){var t,r;function i(){return e.apply(this,arguments)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.peek=function(){return s},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,m=[],e};var c=i.prototype;return c.shouldComponentUpdate=function(e){return!o(e,this.props)},c.componentWillMount=function(){m.push(this),u()},c.componentDidUpdate=function(){u()},c.componentWillUnmount=function(){var e=m.indexOf(this);m.splice(e,1),u()},c.render=function(){return a.createElement(n,this.props)},i}(i.Component);return c(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),c(p,"canUseDOM",l),p}}},Gytx:function(e,t){e.exports=function(e,t,r,n){var i=r?r.call(n,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var s=a[l];if(!c(s))return!1;var m=e[s],u=t[s];if(!1===(i=r?r.call(n,m,u,s):void 0)||void 0===i&&m!==u)return!1}return!0}},RXBc:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),i=r.n(n),a=r("TJpk"),o=r("Wbzz");var c,l=function(e){var t=e.title,r=e.description,n=e.image,c=e.pagePath,l=e.ogType,s=void 0===l?"website":l,m=e.requireImage,u=void 0===m||m,p=e.appendSiteTitleToPageTitle,f=void 0===p||p,d=e.twitterCard,T=void 0===d?"summary_large_image":d,E=e.locale,h=e.authorUrl,g=e.publisherUrl,y=e.keywords,A=e.schema,_=Object(o.c)("2446164016").seo,b=_.siteName,S=_.siteUrl,v=_.defaultSiteImage,w=_.defaultLocale,P=_.twitterSite,R=_.twitterCreator,O=_.defaultAuthorUrl,M=_.defaultPublisherUrl,C=_.appleTouch,N=_.favicon16,I=_.favicon32,k=_.globalSchema;if(!t)throw Error("'title' prop is required.");if(!r)throw Error("'description' prop is required.");if(!c)throw Error("'pagePath' prop is required.");var L,x=E||w,G=new URL(c,S),B=n||v,H=f?t+" · "+b:t,j=h||O,U=g||M;if(y&&"string"==typeof y&&(L=y.trim()),y&&Array.isArray(y)&&(L=y.join(", ").trim()),!B&&u)throw Error("Image not supplied. Add a 'defaultSiteImage' to site metadata, or pass in an 'image' prop. Or pass 'false' to the requireImage prop, if this page does not need an image.");var F,D=!!k||!!A;if(D&&!function(e){try{JSON.parse(e)}catch(t){return!1}return!0}(F='\n    { "@context": "https://schema.org",\n      "@graph": [\n      '+(k||"")+(k&&A?",":"")+(A||"")+"\n      ]\n    }"))throw Error("Invalid JSON Schema. Check the values of 'globalSchema' in gatsby-config.js, or 'schema' prop of the page");return i.a.createElement(a.Helmet,null,i.a.createElement("html",{lang:"en"}),i.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:C}),i.a.createElement("link",{rel:"icon",type:"image/png",href:I,sizes:"32x32"}),i.a.createElement("link",{rel:"icon",type:"image/png",href:N,sizes:"16x16"}),i.a.createElement("link",{rel:"shortcut icon",href:"/favicon.ico"}),i.a.createElement("title",null,H),i.a.createElement("meta",{name:"description",content:r}),L&&i.a.createElement("meta",{name:"keywords",content:L}),i.a.createElement("meta",{property:"og:url",content:G}),i.a.createElement("meta",{property:"og:type",content:s}),i.a.createElement("meta",{property:"og:title",content:t}),i.a.createElement("meta",{property:"og:description",content:r}),i.a.createElement("meta",{property:"og:locale",content:x}),i.a.createElement("meta",{property:"og:site_name",content:b}),u&&i.a.createElement("meta",{property:"og:image",content:new URL(B,S)}),u&&i.a.createElement("meta",{property:"og:image:secure_url",content:new URL(B,S)}),"article"===s&&U&&i.a.createElement("meta",{property:"article:publisher",content:U}),"article"===s&&j&&i.a.createElement("meta",{property:"article:author",content:j}),i.a.createElement("meta",{name:"twitter:card",content:T}),P&&i.a.createElement("meta",{name:"twitter:site",content:P}),R&&i.a.createElement("meta",{name:"twitter:creator",content:R}),D&&i.a.createElement("script",{type:"application/ld+json"},F))},s=function(e){var t=e.data,r=(t.id,t.name),i=(t.img,t.link,t.claim_time,t.minimal_claim,t.maximum_claim,t.referral_comm_rate,t.crypto,t.description);return n.createElement("figure",{className:e.scale+" md:flex bg-gray-100 rounded-xl md:p-0 p-8 shadow-md hover:bg-gray-200"},n.createElement("div",{className:"pt-6 md:p-8 text-center md:text-left space-y-4"},n.createElement("figcaption",{className:"font-medium"},n.createElement("div",{className:"text-cyan-600"},r),n.createElement("div",{className:"text-gray-500"},"Staff Engineer, Algolia")),n.createElement("blockquote",null,n.createElement("p",{className:"text-lg font-semibold"},i))))},m=function(e){return n.createElement("div",null,n.createElement("p",{className:"text-lg font-light text-gray-800"},e.data.text),n.createElement("br",null))},u=[{id:1,name:"Bitking",img:"bitking.png",link:"https://www.bitking.biz/signup?r=28707",claim_time:"60 minutes",minimal_claim:"5 Satoshi",maximum_claim:"55000 Satoshi",referral_comm_rate:"50%",crypto:"Bitcoin",description:"Earn Satoshi by claiming the faucet, you can increase your minimal claim by playing their games."},{id:2,name:"Coinpayu",img:"coinpayu.png",link:"https://www.coinpayu.com/?r=imhotep22",claim_time:"60 minutes",minimal_claim:"2 Satoshi",maximum_claim:"5 Satoshi",referral_comm_rate:"20%",crypto:"Bitcoin",description:"Earn Satoshi by claiming the faucet, watching ads, and completing offers."},{id:3,name:"GainBTC",img:"gainbtc.png",link:"https://gainbtc.click/ref/imhotep22",claim_time:"60 minutes",minimal_claim:"1 Satoshi",maximum_claim:"25 Satoshi",referral_comm_rate:"25%",crypto:"Bitcoin",description:"Earn Satoshi by claiming the faucet, watching ads, and completing offers. You can also participate in the lottery and play their games."},{id:4,name:"EarnSato",img:"earnsato.png",link:"https://earnsato.com/?ref=imhotep22",claim_time:"30 minutes",minimal_claim:"1 Satoshi",maximum_claim:"1000 Satoshi",referral_comm_rate:"30%",crypto:"Bitcoin",description:"Earn Satoshi by claiming the faucet, watching ads, and completing offers."},{id:5,name:"FaucetVille",img:"faucetville.png",link:"https://faucetville.io/?ref=109292",claim_time:"60 minutes",minimal_claim:"20 Satoshi",maximum_claim:"100000 Satoshi",referral_comm_rate:"50%",crypto:"Bitcoin",description:"Earn Satoshi by claiming the faucet, watching ads, and completing offers. One of the highest paying faucets!"},{id:6,name:"ClaimBTC",img:"claimbtc.png",link:"https://claimbtc.io/?p=70676",claim_time:"60 minutes",minimal_claim:"6 Satoshi",maximum_claim:"5500 Satoshi",referral_comm_rate:"50%",crypto:"Bitcoin",description:"Earn Satoshi by claiming the faucet. You can increase your minimal claim by playing their games or buying a booster."},{id:7,name:"Btcmaker",img:"btcmaker.png",link:"https://btcmaker.io/?ref=Imhotep22",claim_time:"60 minutes",minimal_claim:"5 Satoshi",maximum_claim:"25000 Satoshi",referral_comm_rate:"20%",crypto:"Bitcoin",description:"Earn Satoshi by claiming the faucet. You can increase your minimal claim by playing their games or buying a booster."},{id:8,name:"BetFury",img:"betfury.png",link:"https://betfury.io/?r=5fe8e4a03d4001a0d9e95963",claim_time:"20 minutes",minimal_claim:"10 Satoshi",maximum_claim:"10000 Satoshi",referral_comm_rate:"15%",crypto:"Bitcoin, Ethereum",description:"Earn Satoshi by opening boxes or betting."},{id:9,name:"Bucksify",img:"bucksify.png",link:"https://bucksify.com/?ref=im35928",claim_time:"60 minutes",minimal_claim:"10 BXT",maximum_claim:"30 BXT",referral_comm_rate:"10%",crypto:"Bitcoin",description:"Earn BXT by claiming the faucet. The more you claim the higher the bonus. You can also view ads and do offers."},{id:10,name:"Bitshark",img:"bitshark.png",link:"https://bitshark.io/r/368498",claim_time:"60 minutes",minimal_claim:"1 Satoshi",maximum_claim:"1000000 Satoshi",referral_comm_rate:"50%",crypto:"Bitcoin",description:"Earn Satoshi by claiming the faucet."},{id:11,name:"FreeBitco",img:"freebitco.png",link:"https://freebitco.in/?r=39388075",claim_time:"60 minutes",minimal_claim:"4 Satoshi",maximum_claim:"550000 Satoshi",referral_comm_rate:"50%",crypto:"Bitcoin",description:"Earn Satoshi by claiming the faucet, one of the oldest faucets!"},{id:12,name:"Faucet Crypto",img:"faucetcrypto.png",link:"https://faucetcrypto.com/ref/592349",claim_time:"30 minutes",minimal_claim:"2 Satoshi",maximum_claim:"10 Satoshi",referral_comm_rate:"20%",crypto:"Bitcoin",description:"Earn Satoshi by claiming the faucet, watching ads, and completing offers."},{id:13,name:"LarvelFaucet",img:"larvelfaucet.png",link:"https://larvelfaucet.com/ref/efSuOok2",claim_time:"60 minutes",minimal_claim:"2 Satoshi",maximum_claim:"40 Satoshi",referral_comm_rate:"10%",crypto:"Bitcoin",description:"Earn Satoshi by claiming the faucet, watching ads, and completing offers."},{id:14,name:"GraB.TC",img:"grabtc.png",link:"https://grab.tc/?ref=150710",claim_time:"60 minutes",minimal_claim:"2 Satoshi",maximum_claim:"6000000 Satoshi",referral_comm_rate:"13%",crypto:"Bitcoin",description:"Earn Satoshi by claiming the faucet, watching ads, and completing offers."},{id:15,name:"Bitpick",img:"bitpick.png",link:"https://bitpick.co/?ref=254352",claim_time:"60 minutes",minimal_claim:"12 Satoshi",maximum_claim:"55000 Satoshi",referral_comm_rate:"50%",crypto:"Bitcoin",description:"Earn Satoshi by claiming the faucet, you can increase your minimal claim by playing their games."},{id:16,name:"Freebitcoin",img:"freebitcoin.png",link:"https://freebitcoin.io/?ref=388861",claim_time:"60 minutes",minimal_claim:"2 Satoshi",maximum_claim:"800000 Satoshi",referral_comm_rate:"50%",crypto:"Bitcoin",description:"Earn Satoshi by claiming the faucet."},{id:17,name:"Moremoney",img:"moremoney.png",link:"https://moremoney.io/?ref=604846",claim_time:"60 minutes",minimal_claim:"6 Satoshi",maximum_claim:"1000000 Satoshi",referral_comm_rate:"15%",crypto:"Bitcoin",description:"Earn Satoshi by claiming the faucet."}],p=[{text:"Making money from faucets The btc is the easiest method for acquiring a small amount of bitcoins. To get a small part of bitcoin (or satoshi) in most guys just click on the CLAIM button and solve the CAPTCHA. Depending on CAPTCHA security codes, there may be several. In return, we will get some satoshi. Where do the bitcoins come from? Owners of faucets put ads on their websites. The higher the number of ads from trusted and tested affiliate programs, the rates for each CLAIM can be higher. However, they do not exceed 50 satoshi for each CLAIM. To increase your earnings with a BTC guy you can also use a registered system. Thanks to this you will receive an additional percentage of the earnings of people you invited to fautet bitcoin."},{text:"Making money from bitcoin faucets is the easiest method for acquiring a small amount of bitcoin. You get a small part of bitcoin called satoshi every 20-60 minutes, in order to claim you have to solve the CAPTCHA. "}],f=r("UP/U"),d=r.n(f),T=(c=[[1,5,8,12],[3,4,7,15],[3,4,5,11],[3,4,5,11],[2,8,16],[2,8,15],[1,8,17],[7,13,17]])[Math.floor(Math.random()*c.length)];console.log(T);t.default=function(){return n.createElement("main",null,n.createElement(l,{title:"Bitcoint faucets for everyone",description:"WebSite for active Bitcoint Faucets",pagePath:"/",schema:'{\n              "@type": "Bitcoint faucets for everyone",\n              "mainEntity": {\n                "@type": "Organization",\n                "name": "bitcointfaucets.ml"\n              }\n            }'}),n.createElement("div",{className:"bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-full"},n.createElement("h1",{className:"md:pl-16 md:pr-16 pl-4 pr-4 pt-10 pb-10 font-black text-white md:text-6xl text-2xl"},n.createElement("img",{src:d.a,className:"md:w-24 w-16 inline-block",alt:"logo"}),n.createElement("span",{className:"relative top-2"},"itcoint Faucets"),n.createElement("small",{className:"md:text-sm relative md:bottom-9 bottom-4 text-sm"},(new Date).getFullYear()))),n.createElement("div",{className:"grid sm:grid-cols-12 md:grid-cols-4 gap-6 pt-4 pb-20 md:pl-16 md:pr-16 pl-4 pr-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"},u.map((function(e,t){return n.createElement(s,{key:t,data:e,scale:T.includes(e.id)?"sm:col-span-2":""})}))),n.createElement("div",{className:"pt-4 pb-10 md:pl-16 md:pr-16 pl-4 pr-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"},n.createElement("iframe",{className:"border-0 overflow-hidden p-0 w-full h-full inline-block mx-auto","data-aa":"1554738",src:"//ad.a-ads.com/1554738?size=728x90",scrolling:"no",allowtransparency:"true"})),n.createElement("div",{className:"pt-4 pb-20 md:pl-16 md:pr-16 pl-4 pr-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"},n.createElement("figure",{className:"md:flex bg-gray-200 rounded-xl md:p-0 p-8 shadow-md"},n.createElement("div",{className:"pt-6 md:p-8 text-center md:text-left space-y-4"},n.createElement("p",{className:"text-lg font-semibold"},"How do you earn bitcoins with bitcoin faucets?"),n.createElement("blockquote",null,p.map((function(e,t){return n.createElement(m,{key:t,data:e})})))))))}},TJpk:function(e,t,r){t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=u(r("q1tI")),o=u(r("17x9")),c=u(r("8+s/")),l=u(r("bmMU")),s=r("v1p5"),m=r("hFT/");function u(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var T,E,h,g=(0,c.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),y=(T=g,h=E=function(e){function t(){return f(this,t),d(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,l.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case m.TAG_NAMES.SCRIPT:case m.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case m.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,i=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return n({},i,((t={})[r.type]=[].concat(i[r.type]||[],[n({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,i=e.child,a=e.newProps,o=e.newChildProps,c=e.nestedChildren;switch(i.type){case m.TAG_NAMES.TITLE:return n({},a,((t={})[i.type]=c,t.titleAttributes=n({},o),t));case m.TAG_NAMES.BODY:return n({},a,{bodyAttributes:n({},o)});case m.TAG_NAMES.HTML:return n({},a,{htmlAttributes:n({},o)})}return n({},a,((r={})[i.type]=n({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach((function(t){var i;r=n({},r,((i={})[t]=e[t],i))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return a.default.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,a=i.children,o=p(i,["children"]),c=(0,s.convertReactPropstoHtmlAttributes)(o);switch(r.warnOnInvalidChildren(e,a),e.type){case m.TAG_NAMES.LINK:case m.TAG_NAMES.META:case m.TAG_NAMES.NOSCRIPT:case m.TAG_NAMES.SCRIPT:case m.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:c,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=p(e,["children"]),i=n({},r);return t&&(i=this.mapChildrenToProps(t,i)),a.default.createElement(T,i)},i(t,null,[{key:"canUseDOM",set:function(e){T.canUseDOM=e}}]),t}(a.default.Component),E.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},E.defaultProps={defer:!0,encodeSpecialCharacters:!0},E.peek=T.peek,E.rewind=function(){var e=T.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},"UP/U":function(e,t,r){e.exports=r.p+"static/btc-logo-bd8a66a284e28bc271f6d0209f2de868.png"},bmMU:function(e,t,r){"use strict";var n=Array.isArray,i=Object.keys,a=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var c,l,s,m=n(t),u=n(r);if(m&&u){if((l=t.length)!=r.length)return!1;for(c=l;0!=c--;)if(!e(t[c],r[c]))return!1;return!0}if(m!=u)return!1;var p=t instanceof Date,f=r instanceof Date;if(p!=f)return!1;if(p&&f)return t.getTime()==r.getTime();var d=t instanceof RegExp,T=r instanceof RegExp;if(d!=T)return!1;if(d&&T)return t.toString()==r.toString();var E=i(t);if((l=E.length)!==i(r).length)return!1;for(c=l;0!=c--;)if(!a.call(r,E[c]))return!1;if(o&&t instanceof Element&&r instanceof Element)return t===r;for(c=l;0!=c--;)if(!("_owner"===(s=E[c])&&t.$$typeof||e(t[s],r[s])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},"hFT/":function(e,t,r){r("E9XD"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},i=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(i).reduce((function(e,t){return e[i[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},v1p5:function(e,t,r){(function(e){r("E9XD"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=l(r("q1tI")),o=l(r("YVoz")),c=r("hFT/");function l(e){return e&&e.__esModule?e:{default:e}}var s,m=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},u=function(e){var t=E(e,c.TAG_NAMES.TITLE),r=E(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,(function(){return t}));var n=E(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},p=function(e){return E(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},f=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return i({},e,t)}),{})},d=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i++){var a=n[i].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},T=function(e,t,r){var i={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&_("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),o=0;o<a.length;o++){var l=a[o],s=l.toLowerCase();-1===t.indexOf(s)||r===c.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||s===c.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(l)||l!==c.TAG_PROPERTIES.INNER_HTML&&l!==c.TAG_PROPERTIES.CSS_TEXT&&l!==c.TAG_PROPERTIES.ITEM_PROP||(r=l)}if(!r||!e[r])return!1;var m=e[r].toLowerCase();return i[r]||(i[r]={}),n[r]||(n[r]={}),!i[r][m]&&(n[r][m]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(n),l=0;l<a.length;l++){var s=a[l],m=(0,o.default)({},i[s],n[s]);i[s]=m}return e}),[]).reverse()},E=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},h=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){h(e)}),0)}),g=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,A="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||g:e.cancelAnimationFrame||g,_=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},b=null,S=function(e,t){var r=e.baseTag,n=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,l=e.noscriptTags,s=e.onChangeClientState,m=e.scriptTags,u=e.styleTags,p=e.title,f=e.titleAttributes;P(c.TAG_NAMES.BODY,n),P(c.TAG_NAMES.HTML,i),w(p,f);var d={baseTag:R(c.TAG_NAMES.BASE,r),linkTags:R(c.TAG_NAMES.LINK,a),metaTags:R(c.TAG_NAMES.META,o),noscriptTags:R(c.TAG_NAMES.NOSCRIPT,l),scriptTags:R(c.TAG_NAMES.SCRIPT,m),styleTags:R(c.TAG_NAMES.STYLE,u)},T={},E={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(T[e]=r),n.length&&(E[e]=d[e].oldTags)})),t&&t(),s(e,T,E)},v=function(e){return Array.isArray(e)?e.join(""):e},w=function(e,t){void 0!==e&&document.title!==e&&(document.title=v(e)),P(c.TAG_NAMES.TITLE,t)},P=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(c.HELMET_ATTRIBUTE),i=n?n.split(","):[],a=[].concat(i),o=Object.keys(t),l=0;l<o.length;l++){var s=o[l],m=t[s]||"";r.getAttribute(s)!==m&&r.setAttribute(s,m),-1===i.indexOf(s)&&i.push(s);var u=a.indexOf(s);-1!==u&&a.splice(u,1)}for(var p=a.length-1;p>=0;p--)r.removeAttribute(a[p]);i.length===a.length?r.removeAttribute(c.HELMET_ATTRIBUTE):r.getAttribute(c.HELMET_ATTRIBUTE)!==o.join(",")&&r.setAttribute(c.HELMET_ATTRIBUTE,o.join(","))}},R=function(e,t){var r=document.head||document.querySelector(c.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),i=Array.prototype.slice.call(n),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===c.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===c.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[n]?"":t[n];r.setAttribute(n,l)}r.setAttribute(c.HELMET_ATTRIBUTE,"true"),i.some((function(e,t){return o=t,r.isEqualNode(e)}))?i.splice(o,1):a.push(r)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:i,newTags:a}},O=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[c.REACT_TAG_MAP[r]||r]=e[r],t}),t)},C=function(e,t,r){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[c.HELMET_ATTRIBUTE]=!0,i=M(r,n),[a.default.createElement(c.TAG_NAMES.TITLE,i,e)];var e,r,n,i},toString:function(){return function(e,t,r,n){var i=O(r),a=v(t);return i?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+i+">"+m(a,n)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+m(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(t)},toString:function(){return O(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,i=((n={key:r})[c.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var r=c.REACT_TAG_MAP[e]||e;if(r===c.TAG_PROPERTIES.INNER_HTML||r===c.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),a.default.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var i=Object.keys(n).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var i=void 0===n[t]?t:t+'="'+m(n[t],r)+'"';return e?e+" "+i:i}),""),a=n.innerHTML||n.cssText||"",o=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+i+(o?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[c.HTML_TAG_MAP[r]||r]=e[r],t}),t)},t.handleClientStateChange=function(e){b&&A(b),e.defer?b=y((function(){S(e,(function(){b=null}))})):(S(e),b=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,l=e.noscriptTags,s=e.scriptTags,m=e.styleTags,u=e.title,p=void 0===u?"":u,f=e.titleAttributes;return{base:C(c.TAG_NAMES.BASE,t,n),bodyAttributes:C(c.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:C(c.ATTRIBUTE_NAMES.HTML,i,n),link:C(c.TAG_NAMES.LINK,a,n),meta:C(c.TAG_NAMES.META,o,n),noscript:C(c.TAG_NAMES.NOSCRIPT,l,n),script:C(c.TAG_NAMES.SCRIPT,s,n),style:C(c.TAG_NAMES.STYLE,m,n),title:C(c.TAG_NAMES.TITLE,{title:p,titleAttributes:f},n)}},t.reducePropsToState=function(e){return{baseTag:d([c.TAG_PROPERTIES.HREF],e),bodyAttributes:f(c.ATTRIBUTE_NAMES.BODY,e),defer:E(e,c.HELMET_PROPS.DEFER),encode:E(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:f(c.ATTRIBUTE_NAMES.HTML,e),linkTags:T(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:T(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:T(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:T(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:T(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:u(e),titleAttributes:f(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=_}).call(this,r("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-index-js-b7804ebfa80da226cd4b.js.map