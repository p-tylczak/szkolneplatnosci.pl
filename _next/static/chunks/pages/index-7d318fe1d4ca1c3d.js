(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5420:function(e,a,i){"use strict";i(7294);var n=i(5893);a.Z=function(e){var a=e.width,i=void 0===a?"w-64":a;return(0,n.jsx)("div",{className:"w-full mb-4",children:(0,n.jsx)("div",{className:"h-1 mx-auto bg-primary ".concat(i," opacity-25 my-0 py-0 rounded-t mb-10")})})}},6565:function(e,a,i){"use strict";i.r(a),i.d(a,{default:function(){return O}});var n=i(7294),t=i(6201),s=i(5893),o=function(){var e=t.S9,a=t.jZ,i=e.logo,n=e.name,o=a.copyrights,l=a.sections;return(0,s.jsx)("div",{id:"about",className:"mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12",children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:i,alt:n,className:"w-16 h-16"})}),(0,s.jsx)("div",{className:"flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12",children:l.map((function(e,a){return(0,s.jsx)("a",{href:e.href,target:e.target||"_blank",className:"hover:text-primary text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white",children:e.name},"".concat(e.name,"-").concat(a))}))}),(0,s.jsx)("div",{className:"flex items-center mt-6",children:(0,s.jsxs)("p",{className:"mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50",children:["\xa9 ",(new Date).getFullYear()," ",(0,s.jsx)("a",{href:o.href,rel:"noreferrer nofollow",target:"_blank",children:o.text})]})})]})})},l=i(7625),r=i(5420),c=function(){var e,a,i=t.NR,n=(0,l.Z)(i.sections,2),o=n[0],c=n[1];return(0,s.jsx)("section",{className:"bg-background py-8",id:"about-us",children:(0,s.jsxs)("div",{className:"container max-w-5xl mx-auto m-8",children:[(0,s.jsx)("h1",{className:"w-full my-2 text-5xl font-bold leading-tight text-center text-primary",children:i.title.split(" ").map((function(e,a){return(0,s.jsxs)("span",{className:a%2?"text-primary":"text-border",children:[e," "]},a)}))}),(0,s.jsx)(r.Z,{}),(0,s.jsxs)("div",{className:"flex flex-wrap",children:[(0,s.jsxs)("div",{className:"w-5/6 sm:w-1/2 p-6 mt-20",children:[(0,s.jsx)("h3",{className:"text-3xl text-gray-800 font-bold leading-none",children:null===o||void 0===o?void 0:o.title}),null===o||void 0===o||null===(e=o.paragraphs)||void 0===e?void 0:e.map((function(e){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("p",{className:"text-gray-400 mt-5",children:e})})}))]}),(0,s.jsx)("div",{className:"w-full sm:w-1/2 p-6",children:(0,s.jsx)("img",{className:"h-6/6",src:null===o||void 0===o?void 0:o.href,alt:null===o||void 0===o?void 0:o.title})})]}),(0,s.jsxs)("div",{className:"flex flex-wrap flex-col-reverse sm:flex-row",children:[(0,s.jsx)("div",{className:"w-full sm:w-1/2 p-6",children:(0,s.jsx)("img",{className:"h-6/6",src:null===c||void 0===c?void 0:c.href,alt:null===c||void 0===c?void 0:c.title})}),(0,s.jsx)("div",{className:"w-full sm:w-1/2 p-6 mt-20",children:(0,s.jsxs)("div",{className:"align-middle",children:[(0,s.jsx)("h3",{className:"text-3xl text-gray-800 font-bold leading-none mb-3",children:null===c||void 0===c?void 0:c.title}),null===c||void 0===c||null===(a=c.paragraphs)||void 0===a?void 0:a.map((function(e){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("p",{className:"text-gray-400 mt-5",children:e})})}))]})})]})]})})},d=i(1163),m=i(4298),u=i(4155).env.NEXT_PUBLIC_GOOGLE_ADS_ID,p="G-QS8G8MZWEE",x=function(){var e=(0,d.useRouter)();return(0,n.useEffect)((function(){var a=function(e){!function(e){window.gtag("config",p,{page_path:e})}(e)};return e.events.on("routeChangeComplete",a),function(){e.events.off("routeChangeComplete",a)}}),[e.events]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.default,{strategy:"afterInteractive",src:"https://www.googletagmanager.com/gtag/js?id=".concat(p)}),(0,s.jsx)(m.default,{id:"gtag-init",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(p,"', {\n              page_path: window.location.pathname,\n            });\n          ")}}),(0,s.jsx)(m.default,{async:!0,src:u,crossOrigin:"anonymous"})]})},g=(0,n.createContext)({context:void 0}),h=function(){var e=(0,n.useState)(0),a=e[0],i=e[1],t=(0,n.useState)(0),s=t[0],o=t[1],l=(0,n.useCallback)((function(){i(window.innerWidth),o(window.innerHeight)}),[i,o]);return(0,n.useEffect)((function(){window.addEventListener("resize",l),l()}),[l]),{width:a,height:s}},w=i(5671),j=i(4942),y=function e(a,i){var n=this;(0,w.Z)(this,e),(0,j.Z)(this,"waveLength",void 0),(0,j.Z)(this,"color",void 0),(0,j.Z)(this,"draw",(function(e,a,i,t){if(e.beginPath(),e.moveTo(0,i),!(n.waveLength.length<3)){for(var s=0;s<a;s++){var o,l,r,c=Math.sin(s*(null!==(o=null===n||void 0===n?void 0:n.waveLength[0])&&void 0!==o?o:0)-t),d=Math.sin(s*(null!==(l=n.waveLength[1])&&void 0!==l?l:0)-t),m=Math.sin(s*(null!==(r=n.waveLength[2])&&void 0!==r?r:0)-t);e.lineTo(2.5*s,i-400+c*d*m*200)}e.lineTo(a,i),e.fillStyle=n.color,e.fill(),e.closePath()}})),this.waveLength=a,this.color=i},z=function(){var e=(0,n.useContext)(g).context,a=h().width,i=.013,t={frontWave:new y([.0211,.028,.015],"rgb(24, 123, 205, 0.1)"),backWave:new y([.0122,.018,.005],"rgb(17, 103, 177, 0.1)")};return e&&function n(){null===e||void 0===e||e.clearRect(0,0,a,600),Object.entries(t).forEach((function(n){(0,l.Z)(n,2)[1].draw(e,a,600,i)})),i+=.013,requestAnimationFrame(n)}(),null},f=function(e){var a=e.showWave,i=void 0!==a&&a,t=(0,n.useRef)(null),o=h().width,l=(0,n.useState)(),r=l[0],c=l[1];return(0,n.useEffect)((function(){var e,a=null===t||void 0===t||null===(e=t.current)||void 0===e?void 0:e.getContext("2d");a&&c(a)}),[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(g.Provider,{value:{context:r},children:[(0,s.jsx)("canvas",{id:"canvas",ref:t,width:o,height:i?220:10}),i?(0,s.jsx)(z,{}):(0,s.jsx)("hr",{})]})})},v=function(){var e=t.R2,a=e.title,i=e.subtitle,n=e.description,o=e.items,l=e.featuresFootnotes;return(0,s.jsx)("div",{className:"py-12 bg-background",id:"features",children:(0,s.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,s.jsxs)("div",{className:"lg:text-center",children:[(0,s.jsx)("h2",{className:"text-base text-primary font-semibold tracking-wide uppercase",children:a}),(0,s.jsx)("p",{className:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl",children:i}),(0,s.jsx)("p",{className:"mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto",children:n})]}),(0,s.jsx)("div",{className:"mt-10",children:(0,s.jsx)("dl",{className:"space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10",children:o.map((function(e){return(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)("dt",{children:[(0,s.jsx)("div",{className:"absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4",children:(0,s.jsx)("img",{className:"inline-block h-6 w-6",src:e.icon,alt:e.name})}),(0,s.jsx)("p",{className:"ml-16 text-lg leading-6 font-medium text-gray-900",children:e.name})]}),(0,s.jsx)("dd",{className:"mt-2 ml-16 text-base text-gray-500",children:e.description})]},e.name)}))})}),(0,s.jsx)("div",{className:"flex flex-col sm:flex-column pt-12 my-12 sm:my-4 gap-4 text-primary",children:l.map((function(e,a){return(0,s.jsx)("p",{children:e},a)}))})]})})},k=i(1203),b=i(5685),N=i(3801),S=i(6261),P=function(){var e=t.G,a=t.S9,i=t.p,o=a.name,l=a.logo;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("svg",{className:"hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-background transform translate-x-1/2",fill:"currentColor",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true",children:(0,s.jsx)("polygon",{points:"50,0 100,0 50,100 0,100"})}),(0,s.jsxs)(k.J,{children:[(0,s.jsx)("div",{className:"relative pt-6 px-4 sm:px-6 lg:px-8",children:(0,s.jsxs)("nav",{className:"relative flex items-center justify-between sm:h-10 lg:justify-start","aria-label":"Global",children:[(0,s.jsx)("div",{className:"flex items-center flex-grow flex-shrink-0 lg:flex-grow-0",children:(0,s.jsxs)("div",{className:"flex items-center justify-between w-full md:w-auto",children:[(0,s.jsxs)("a",{href:"#",children:[(0,s.jsx)("span",{className:"sr-only",children:o}),(0,s.jsx)("img",{alt:"logo",className:"h-16 w-auto sm:h-16",src:l})]}),(0,s.jsx)("div",{className:"-mr-2 flex items-center md:hidden",children:(0,s.jsxs)(k.J.Button,{className:"bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary",children:[(0,s.jsx)("span",{className:"sr-only",children:"Otw\xf3rz menu g\u0142\xf3wne"}),(0,s.jsx)(N.Oqj,{className:"h-6 w-6","aria-hidden":"true"})]})})]})}),(0,s.jsxs)("div",{className:"hidden md:block md:ml-10 md:pr-4 md:space-x-8",children:[e.map((function(e){return(0,s.jsx)(S.rU,{spy:!0,active:"active",smooth:!0,duration:1e3,to:e.href,className:"font-medium text-gray-500 hover:text-gray-900",children:e.name},e.name)})),(0,s.jsx)("a",{href:i.href,className:"font-medium text-primary hover:text-secondary",children:i.text})]})]})}),(0,s.jsx)(b.u,{as:n.Fragment,enter:"duration-150 ease-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"duration-100 ease-in",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,s.jsx)(k.J.Panel,{focus:!0,className:"absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden",children:(0,s.jsxs)("div",{className:"rounded-lg shadow-md bg-background ring-1 ring-black ring-opacity-5 overflow-hidden",children:[(0,s.jsxs)("div",{className:"px-5 pt-4 flex items-center justify-between",children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{className:"h-8 w-auto",src:l,alt:""})}),(0,s.jsx)("div",{className:"-mr-2",children:(0,s.jsxs)(k.J.Button,{className:"bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary",children:[(0,s.jsx)("span",{className:"sr-only",children:"Close main menu"}),(0,s.jsx)(N.b0D,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),(0,s.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:e.map((function(e){return(0,s.jsx)(S.rU,{spy:!0,active:"active",smooth:!0,duration:1e3,to:e.href,className:"block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50",children:e.name},e.name)}))}),(0,s.jsx)("a",{href:i.href,className:"block w-full px-5 py-3 text-center font-medium text-primary bg-gray-50 hover:bg-gray-100",children:i.text})]})})})]})]})},C=i(6513),_=i(2688);var D=function(e){var a=e.children,i=(0,C._)(),t=(0,n.useRef)(null),o=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0px",i=(0,n.useState)(!1),t=i[0],s=i[1];return(0,n.useEffect)((function(){var i=null,n=new IntersectionObserver((function(e){var a=(0,l.Z)(e,1)[0];null!==a&&void 0!==a&&a.isIntersecting&&s(null===a||void 0===a?void 0:a.isIntersecting)}),{rootMargin:a});return e&&null!==e&&void 0!==e&&e.current&&(i=e.current,n.observe(i)),function(){n.unobserve(i)}}),[e,a]),t}(t);return(0,n.useEffect)((function(){o&&i.start({x:0,opacity:1,transition:{duration:.5,ease:"easeOut"}})}),[o,i]),(0,s.jsx)(_.E.div,{className:"lazy-div",ref:t,initial:{opacity:0,x:-50},animate:i,children:a})},L=function(){var e=t.PL;return(0,s.jsx)("main",{className:"mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28",children:(0,s.jsxs)("div",{className:"sm:text-center lg:text-left",children:[(0,s.jsxs)("h1",{className:"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl",children:[(0,s.jsx)("span",{className:"block xl:inline",children:e.title})," ",(0,s.jsx)("span",{className:"block text-primary xl:inline",children:e.subtitle})]}),(0,s.jsx)("p",{className:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0",children:e.description.line1}),(0,s.jsxs)("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start",children:[(0,s.jsx)("div",{className:"rounded-md shadow",children:(0,s.jsx)("a",{href:e.primaryAction.href,className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10",children:e.primaryAction.text})}),(0,s.jsx)("div",{className:"mt-3 sm:mt-0 sm:ml-3",children:(0,s.jsx)("a",{href:e.secondaryAction.href,className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-secondary bg-background hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10",children:e.secondaryAction.text})})]})]})})},Z=function(){var e=t.PL;return(0,s.jsx)("div",{className:"lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2",children:(0,s.jsx)("img",{className:"h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full",src:e.img,alt:e.alt})})},T=function(){var e=t.D,a=e.items,i=e.title,n=e.platformFeesDescription,o=(0,l.Z)(a,3),r=o[0],c=o[1],d=o[2];return(0,s.jsx)("section",{className:"bg-background py-8",id:"pricing",children:(0,s.jsxs)("div",{className:"container mx-auto px-2 pt-4 pb-12 text-primary",children:[(0,s.jsx)("h1",{className:"w-full my-2 text-5xl font-bold leading-tight text-center text-primary",children:i}),(0,s.jsx)("div",{className:"w-full mb-4",children:(0,s.jsx)("div",{className:"h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t"})}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4 gap-4",children:[(0,s.jsxs)("div",{className:"flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4",children:[(0,s.jsxs)("div",{className:"flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow",children:[(0,s.jsx)("div",{className:"p-8 text-3xl font-bold text-center border-b-4",children:null===r||void 0===r?void 0:r.name}),(0,s.jsx)("ul",{className:"w-full text-center text-sm",children:null===r||void 0===r?void 0:r.features.map((function(e){return(0,s.jsx)("li",{className:"border-b py-4",children:e},"".concat(r.name,"-").concat(e))}))})]}),(0,s.jsx)("div",{className:"flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6",children:(0,s.jsxs)("div",{className:"w-full pt-6 text-3xl text-gray-600 font-bold text-center",children:[null===r||void 0===r?void 0:r.price,(0,s.jsxs)("span",{className:"text-base",children:[" ",null===r||void 0===r?void 0:r.priceDetails]})]})})]}),(0,s.jsxs)("div",{className:"flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-background mt-4 sm:-mt-6 shadow-lg z-10",children:[(0,s.jsxs)("div",{className:"flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow",children:[(0,s.jsx)("div",{className:"w-full p-8 text-3xl font-bold text-center",children:null===c||void 0===c?void 0:c.name}),(0,s.jsx)("div",{className:"h-1 w-full bg-primary my-0 py-0 rounded-t"}),(0,s.jsx)("ul",{className:"w-full text-center text-base font-bold",children:null===c||void 0===c?void 0:c.features.map((function(e){return(0,s.jsx)("li",{className:"border-b py-4",children:e},"".concat(null===c||void 0===c?void 0:c.name,"-").concat(e))}))})]}),(0,s.jsx)("div",{className:"flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6",children:(0,s.jsxs)("div",{className:"w-full pt-6 text-4xl font-bold text-center",children:[null===c||void 0===c?void 0:c.price,(0,s.jsxs)("span",{className:"text-base",children:[" ",null===c||void 0===c?void 0:c.priceDetails]})]})})]}),(0,s.jsxs)("div",{className:"flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4",children:[(0,s.jsxs)("div",{className:"flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow",children:[(0,s.jsx)("div",{className:"p-8 text-3xl font-bold text-center border-b-4",children:null===d||void 0===d?void 0:d.name}),(0,s.jsx)("ul",{className:"w-full text-center text-sm",children:null===d||void 0===d?void 0:d.features.map((function(e){return(0,s.jsx)("li",{className:"border-b py-4",children:e},"".concat(d.name,"-").concat(e))}))})]}),(0,s.jsx)("div",{className:"flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6",children:(0,s.jsxs)("div",{className:"w-full pt-6 text-3xl text-gray-600 font-bold text-center",children:[null===d||void 0===d?void 0:d.price,(0,s.jsxs)("span",{className:"text-base",children:[" ",null===d||void 0===d?void 0:d.priceDetails]})]})})]})]}),(0,s.jsx)("div",{className:"flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4 gap-4",children:(0,s.jsx)("p",{children:n})})]})})},F=function(){var e=t.O7,a=(0,l.Z)(e.items,3),i=a[0],n=a[1],o=a[2];return(0,s.jsx)("section",{className:"bg-background py-8",id:"product",children:(0,s.jsxs)("div",{className:"container max-w-5xl mx-auto m-8",children:[(0,s.jsx)("h1",{className:"w-full my-2 text-5xl font-bold leading-tight text-center text-primary",children:e.title.split(" ").map((function(e,a){return(0,s.jsxs)("span",{className:a%2?"text-primary":"text-border",children:[e," "]},a)}))}),(0,s.jsx)(r.Z,{}),(0,s.jsxs)("div",{className:"flex flex-wrap",children:[(0,s.jsxs)("div",{className:"w-5/6 sm:w-1/2 p-6 mt-20",children:[(0,s.jsx)("h3",{className:"text-3xl text-gray-800 font-bold leading-none mb-3",children:null===i||void 0===i?void 0:i.title}),(0,s.jsx)("p",{className:"text-gray-600",children:null===i||void 0===i?void 0:i.description})]}),(0,s.jsx)("div",{className:"w-full sm:w-1/2 p-6",children:(0,s.jsx)("img",{className:"h-6/6",src:null===i||void 0===i?void 0:i.img,alt:null===i||void 0===i?void 0:i.title})})]}),(0,s.jsxs)("div",{className:"flex flex-wrap flex-col-reverse sm:flex-row",children:[(0,s.jsx)("div",{className:"w-full sm:w-1/2 p-6",children:(0,s.jsx)("img",{className:"h-6/6",src:null===n||void 0===n?void 0:n.img,alt:null===n||void 0===n?void 0:n.title})}),(0,s.jsx)("div",{className:"w-full sm:w-1/2 p-6 mt-20",children:(0,s.jsxs)("div",{className:"align-middle",children:[(0,s.jsx)("h3",{className:"text-3xl text-gray-800 font-bold leading-none mb-3",children:null===n||void 0===n?void 0:n.title}),(0,s.jsx)("p",{className:"text-gray-600 mb-8",children:null===n||void 0===n?void 0:n.description})]})})]}),(0,s.jsxs)("div",{className:"flex flex-wrap",children:[(0,s.jsxs)("div",{className:"w-5/6 sm:w-1/2 p-6 mt-20",children:[(0,s.jsx)("h3",{className:"text-3xl text-gray-800 font-bold leading-none mb-3",children:null===o||void 0===o?void 0:o.title}),(0,s.jsx)("p",{className:"text-gray-600",children:null===o||void 0===o?void 0:o.description})]}),(0,s.jsx)("div",{className:"w-full sm:w-1/2 p-6",children:(0,s.jsx)("img",{className:"h-6/6",src:null===o||void 0===o?void 0:o.img,alt:null===o||void 0===o?void 0:o.title})})]})]})})},O=function(){return(0,s.jsxs)("div",{className:"bg-background grid gap-y-16 overflow-hidden",children:[(0,s.jsxs)("div",{className:"relative bg-background",children:[(0,s.jsx)("div",{className:"max-w-7xl mx-auto",children:(0,s.jsxs)("div",{className:"relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32",children:[(0,s.jsx)(P,{}),(0,s.jsx)(L,{})]})}),(0,s.jsx)(Z,{})]}),(0,s.jsx)(f,{showWave:!0}),(0,s.jsx)(D,{children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(F,{}),(0,s.jsx)(f,{showWave:!1})]})}),(0,s.jsx)(D,{children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v,{}),(0,s.jsx)(f,{showWave:!1})]})}),(0,s.jsx)(D,{children:(0,s.jsx)(c,{})}),(0,s.jsx)(D,{children:(0,s.jsx)(T,{})}),(0,s.jsx)(D,{children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f,{showWave:!1}),(0,s.jsx)(o,{})]})}),(0,s.jsx)(x,{})]})}},5301:function(e,a,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(6565)}])},6201:function(e){"use strict";e.exports=JSON.parse('{"S9":{"name":"Szkolne P\u0142atno\u015bci","logo":"/assets/images/logo.svg"},"G":[{"name":"Opis","href":"product"},{"name":"Funkcje","href":"features"},{"name":"O nas","href":"about-us"},{"name":"Cennik","href":"pricing"}],"p":{"text":"Login","href":"https://app.szkolneplatnosci.pl"},"PL":{"title":"Szkolne P\u0142atno\u015bci","subtitle":"nie tylko dla szko\u0142y","description":{"line1":"Maksymalizujemy wydajno\u015b\u0107 instruktor\xf3w, nauczycieli i freelancer\xf3w w zarz\u0105dzaniu zaj\u0119ciami dydaktycznymi, prowadzeniu statystyk a tak\u017ce usprawniamy kontakt ze studentami i ich opiekunami. Je\u015bli cenisz sw\xf3j czas, pragniesz usprawni\u0107 swoj\u0105 prac\u0119 i skupi\u0107 si\u0119 nad tym co robisz najlepiej, wybierz Szkolne P\u0142atno\u015bci! My zajmiemy si\u0119 reszt\u0105!"},"img":"/assets/images/students-building-robot.png","alt":"Zarz\u0105dzaj p\u0142atno\u015bciami online","primaryAction":{"text":"Login / Rejestracja","href":"https://app.szkolneplatnosci.pl"},"secondaryAction":{"text":"Napisz do nas","href":"mailto:szkolne.platnosci@gmail.com?subject=Szkolne P\u0142atno\u015bci - zapytanie"}},"O7":{"title":"P\u0142atno\u015bci, sk\u0142adki i wiele wi\u0119cej","items":[{"title":"Szkolne P\u0142atno\u015bci - co to jest?","description":"Jest to bardzo \u0142atwy w obs\u0142udze system do zarz\u0105dzania grupami, gdzie mo\u017cesz doda\u0107 uczni\xf3w, tworzy\u0107 sk\u0142adki na zaj\u0119cia szkolne lub pozaszkolne, oraz zobaczy\u0107 histori\u0119 wszystkich p\u0142atno\u015bci. Dla rodzic\xf3w/opiekun\xf3w, system umo\u017cliwia szybkie p\u0142atno\u015bci online. Zawsze wiesz za co i ile p\u0142acisz!","img":"/assets/images/product1-blue.jpg"},{"title":"Czy jest to dla Ciebie?","description":"Je\u015bli sam robisz wiele rzeczy manualnie, samo zarz\u0105dzanie uczniami, tworzenie grup i sprawdzanie obecno\u015bci z pewno\u015bci\u0105 zaoszcz\u0119dzi Ci wiele czasu! Podobnie, je\u015bli u\u017cywasz skomplikowanych i drogich system\xf3w kt\xf3re znacznie przerastaj\u0105 Twoje potrzeby, zakochasz si\u0119 w prostocie i przejrzysto\u015bci naszego rozwi\u0105zania.","img":"/assets/images/product2-blue.jpg"},{"title":"Wsp\xf3\u0142pracujesz z innymi?","description":"Je\u015bli pracujesz z innymi nauczycielami/instruktorami, system u\u0142atwia logiczne zarz\u0105dzanie r\xf3\u017cnymi plac\xf3wkami. Twoi wsp\xf3\u0142pracownicy maj\u0105 dost\u0119p dok\u0142adnie i tylko do tych organizacji gdzie nauczaj\u0105 b\u0105d\u017a prowadz\u0105 zaj\u0119cia.","img":"/assets/images/product3-blue.jpg"}]},"R2":{"title":"Funkcje i mo\u017cliwo\u015bci","subtitle":"Co Szkolne P\u0142atno\u015bci mog\u0105 zrobi\u0107 dla Ciebie?","description":"System upora si\u0119 z nudnymi dla Ciebie zadaniami kt\xf3re teraz to w\u0142a\u015bnie Ty musisz wykona\u0107. Sprawd\u017a co Szkolne P\u0142atno\u015bci mog\u0105 zrobi\u0107 dla Ciebie.","featuresFootnotes":["* Wysy\u0142anie wiadomo\u015bci email jest w trakcie implementacji - dost\u0119pne ju\u017c wkr\xf3tce.","** Osobne op\u0142aty za SMS, poza wybranym pakietem."],"items":[{"name":"Planowanie i harmonogram zaj\u0119\u0107","description":"Zapewniamy narz\u0119dzia do \u0142atwego i efektywnego planowania zaj\u0119\u0107, pomagaj\u0105c Ci w organizacji czasu, zarz\u0105dzaniu priorytetami i utrzymaniu harmonii w Twoim planie dnia.","icon":"/assets/images/calendar-days-regular.svg"},{"name":"Zarz\u0105dzanie uczniami i grupami student\xf3w","description":"Oferujemy kompleksowe rozwi\u0105zania do zarz\u0105dzania uczniami i grupami student\xf3w co u\u0142atwi Ci skuteczne stworzenie dynamicznej, interaktywnej przestrzeni edukacyjnej.","icon":"/assets/images/user-pen-solid.svg"},{"name":"Otrzymywanie p\u0142atno\u015bci online","description":"Umo\u017cliwiamy wygodne i bezpieczne dokonywanie p\u0142atno\u015bci online, zapewniaj\u0105c Ci szybkie i sprawne rozliczanie si\u0119 za produkty lub us\u0142ugi. Dzi\u0119ki niej b\u0119dziesz m\xf3g\u0142/a \u0142atwo akceptowa\u0107 r\xf3\u017cne formy p\u0142atno\u015bci, monitorowa\u0107 transakcje oraz zapewni\u0107 swoim klientom wygodne i bezproblemowe do\u015bwiadczenie.","icon":"/assets/images/hand-holding-dollar-solid.svg"},{"name":"Komunikacja email* i SMS**","description":"Zapewniamy skuteczn\u0105 i efektywn\u0105 komunikacj\u0119 za pomoc\u0105 emaili i SMS-\xf3w, umo\u017cliwiaj\u0105c Ci \u0142atwe nawi\u0105zywanie kontaktu ze studentami/opiekunami oraz wysy\u0142anie wa\u017cnych powiadomie\u0144, co pozwoli Ci skutecznie utrzyma\u0107 silne relacje z nimi.","icon":"/assets/images/comment-sms-solid.svg"},{"name":"Sprawdzanie obecno\u015bci na zaj\u0119ciach","description":"Oferujemy wygodne i precyzyjne sprawdzanie obecno\u015bci na zaj\u0119ciach, dzi\u0119ki czemu b\u0119dziesz m\xf3g\u0142/a skutecznie monitorowa\u0107 uczestnictwo i dok\u0142adnie \u015bledzi\u0107 frekwencj\u0119.","icon":"/assets/images/person-circle-question-solid.svg"},{"name":"P\u0142atno\u015b\u0107 got\xf3wk\u0105 lub przelewem","description":"U\u0142atwimy Ci zarz\u0105dzanie p\u0142atno\u015bciami, \u015bledzenie historii transakcji oraz zapewnimy Ci spok\xf3j umys\u0142u, wiedz\u0105c \u017ce Twoi klienci mog\u0105 p\u0142aci\u0107 w spos\xf3b, kt\xf3ry jest dla nich najdogodniejszy.","icon":"/assets/images/money-bill-1-wave-solid.svg"},{"name":"Statystyki: frekwencja, koszty, doch\xf3d","description":"Dzi\u0119ki naszej aplikacji b\u0119dziesz m\xf3g\u0142/a w \u0142atwy spos\xf3b \u015bledzi\u0107 i ocenia\u0107 poziom frekwencji na zaj\u0119ciach, monitorowa\u0107 wydatki oraz analizowa\u0107 generowany doch\xf3d. Nasze zaawansowane funkcje statystyczne umo\u017cliwi\u0105 Ci dok\u0142adne raportowanie, identyfikowanie trend\xf3w oraz podejmowanie decyzji dotycz\u0105cych zarz\u0105dzania i rozwoju Twojej dzia\u0142alno\u015bci.","icon":"/assets/images/chart-pie-solid.svg"},{"name":"Darmowy dost\u0119p dla studenta i/lub jego opiekuna","description":"Nasza aplikacja oferuje bezp\u0142atny dost\u0119p dla student\xf3w/opiekun\xf3w, co oznacza, \u017ce mog\u0105 oni korzysta\u0107 z jej podstawowych funkcji i us\u0142ug bez \u017cadnych op\u0142at. Umo\u017cliwi im to \u015bledzenie harmonogramu zaj\u0119\u0107, wgl\u0105d do historii transacji i uiszczenia op\u0142aty za zaj\u0119cia online.","icon":"/assets/images/graduation-cap-solid.svg"}]},"D":{"title":"Cennik","platformFeesDescription":"* Op\u0142aty systemowe wynikaj\u0105 ze wzgl\u0119du na integracj\u0119 z systemem p\u0142atno\u015bci. Jest to sta\u0142a op\u0142ata od ka\u017cdej transakcji.","items":[{"name":"Pocz\u0105tkuj\u0105cy","price":"0 z\u0142","priceDetails":"","features":["1 u\u017cytkownik","Do 15 uczni\xf3w","Darmowy dost\u0119p dla rodzica/opiekuna","P\u0142atno\u015bci online (5% + 1PLN op\u0142aty systemowej*)","Grupowa wysy\u0142ka email","Emailowe wsparcie techniczne"]},{"name":"Zaawansowany","price":"39 z\u0142","priceDetails":"/u\u017cytkownika z VAT/m-c","features":["Nielimitowana liczba u\u017cytkownik\xf3w","Nielimitowana liczba uczni\xf3w","Darmowy dost\u0119p dla rodzica/opiekuna","P\u0142atno\u015bci online (5% + 1PLN op\u0142aty systemowej*)","Grupowa wysy\u0142ka email/SMS","Telefoniczne wsparcie techniczne"]},{"name":"Zaawansowany na rok","price":"444 z\u0142","priceDetails":"/u\u017cytkownika z VAT/rok","features":["5% zni\u017cki","Nielimitowana liczba u\u017cytkownik\xf3w","Nielimitowana liczba uczni\xf3w","Darmowy dost\u0119p dla rodzica/opiekuna","P\u0142atno\u015bci online (5% + 1PLN op\u0142aty systemowej*)","Grupowa wysy\u0142ka email/SMS","Telefoniczne wsparcie techniczne"]}]},"NR":{"title":"Nasza wizja","sections":[{"title":"Pasja","href":"/assets/images/filmmaker-online-4.jpg","paragraphs":["Wierzymy, \u017ce ludzie z pasj\u0105 maj\u0105 niezwyk\u0142\u0105 moc, by zmienia\u0107 \u015bwiat na lepsze. Nasz\u0105 wizj\u0105 jest stworzenie platformy Szkolne P\u0142atno\u015bci, kt\xf3ra nie tylko u\u0142atwia i usprawnia procesy p\u0142atno\u015bci online dla szk\xf3\u0142, nauczycieli, instruktor\xf3w i rodzic\xf3w, ale tak\u017ce inspiruje i motywuje ludzi do dzia\u0142ania.","Pragniemy by\u0107 cz\u0119\u015bci\u0105 spo\u0142eczno\u015bci, kt\xf3ra d\u0105\u017cy do edukacji i rozwoju dzieci, m\u0142odzie\u017cy i doros\u0142ych. Nasza platforma ma za zadanie wspiera\u0107 i u\u0142atwia\u0107 codzienn\u0105 prac\u0119 instruktor\xf3w i nauczycieli, aby mogli skupi\u0107 si\u0119 na tym, co naprawd\u0119 ich pasjonuje - przekazywaniu wiedzy, rozwijaniu umiej\u0119tno\u015bci i inspirowaniu innych."]},{"title":"Technologia","href":"/assets/images/wavy-bus-25-single-09.jpg","paragraphs":["Wierzymy, \u017ce technologia mo\u017ce by\u0107 narz\u0119dziem do pozytywnej zmiany. Nasza wizja to stworzenie prostego, intuicyjnego i bezpiecznego \u015brodowiska, kt\xf3re umo\u017cliwi p\u0142atno\u015bci online i zarz\u0105dzanie grupami w spos\xf3b efektywny i przyjazny dla u\u017cytkownika. Chcemy, aby nasi u\u017cytkownicy mieli pewno\u015b\u0107, \u017ce mog\u0105 zaufa\u0107 naszej platformie i skupi\u0107 si\u0119 na swojej pasji, wiedz\u0105c, \u017ce ich p\u0142atno\u015bci s\u0105 bezpieczne i przejrzyste.","Dlatego, jako Szkolne P\u0142atno\u015bci, d\u0105\u017cymy do tworzenia innowacyjnych rozwi\u0105za\u0144, kt\xf3re u\u0142atwi\u0105 \u017cycie naszym u\u017cytkownikom i przyczyni\u0105 si\u0119 do pozytywnej zmiany w obszarze edukacji i szkolnictwa. Wierzymy, \u017ce razem mo\u017cemy stworzy\u0107 lepsze i bardziej inspiruj\u0105ce przysz\u0142o\u015bci dla naszych dzieci i spo\u0142eczno\u015bci.","Do\u0142\u0105cz do nas i razem zmieniajmy \u015bwiat na lepsze!"]}]},"jZ":{"copyrights":{"text":"Szkolne P\u0142atno\u015bci","href":"mailto:szkolne.platnosci@gmail.com?subject=Szkolne P\u0142atno\u015bci - zapytanie"},"sections":[{"name":"Proces Rejestracji","href":"/start","target":"_self"},{"name":"Regulamin","href":"https://drive.google.com/file/d/1T9m0ed1KgcH1kRKEHWLCsaBxrGNlFsk9/view","target":null},{"name":"Status","href":"https://status.szkolneplatnosci.pl","target":null},{"name":"Kontakt","href":"mailto:szkolne.platnosci@gmail.com?subject=Szkolne P\u0142atno\u015bci - zapytanie","target":null}],"socialMedia":{"github":"https://github.com","twitter":"https://twitter.com","linkedin":"https://www.linkedin.com"}},"l9":{"return":{"text":".:: Wr\xf3\u0107 do strony g\u0142\xf3wnej ::.","href":"/"},"nextStepLabel":"Nast\u0119pny Krok >","previousStepLabel":"< Poprzedni Krok","steps":[{"title":"Rejestracja","paragraphs":["Wejd\u017a na https://szkolneplatnosci.pl","-","Kliknij na jeden z link\xf3w","[1] Login [2] Zacznij ju\u017c dzisiaj"],"imgUrl":"https://res.cloudinary.com/dyqm44qjp/image/upload/v1679332642/szkolneplatnosci.pl/sp-v1-step-1_m6vchw.png"},{"title":"Rejestracja","paragraphs":["Pojawi si\u0119 okno logowania.","Je\u015bli nie masz jeszcze konta, kliknij [3] \'Zarejestruj si\u0119\'","-","Je\u015bli posiadasz konto na portalu, [1] podaj nazw\u0119 u\u017cytkownika, has\u0142o i kliknij Kontynuuj.","-","Je\u017celi posiadasz ju\u017c konto, ale nie pami\u0119tasz has\u0142a, kliknij [2] \'Nie pami\u0119tasz has\u0142a?\'"],"imgUrl":"https://res.cloudinary.com/dyqm44qjp/image/upload/v1677661218/szkolneplatnosci.pl/sp-step-2_zizgge.png"},{"title":"Rejestracja","paragraphs":["Podaj sw\xf3j email i u\u017cyj has\u0142a wed\u0142ug wyja\u015bnionych zasad.","Nast\u0119pnie kliknij Kontynuuj."],"imgUrl":"https://res.cloudinary.com/dyqm44qjp/image/upload/v1677674426/szkolneplatnosci.pl/sp-step-3_dynljj.png"},{"title":"Dodaj podopiecznego","paragraphs":["Po rejestracji, nale\u017cy poda\u0107 swoje dane.","Nast\u0119pnym krokiem b\u0119dzie dodanie do systemu Twojego dziecka/podopiecznego."],"imgUrl":"https://res.cloudinary.com/dyqm44qjp/image/upload/v1677671461/szkolneplatnosci.pl/sp-step-4a_wonv0g.png"},{"title":"Dodaj podopiecznego","paragraphs":["Podaj dane Twojego dziecka/podopiecznego: imi\u0119, nazwisko i numer identyfikacyjny, aby znale\u017a\u0107 dane w systemie.","Numer identyfikacyjny zostanie Ci przekazany osobno, dla ochrony i bezpiecze\u0144stwa danych.","Nast\u0119pnie kliknij Znajd\u017a, a w nast\u0119pnym kroku potwierdzisz dane dziecka/podopiecznego."],"imgUrl":"https://res.cloudinary.com/dyqm44qjp/image/upload/v1677671461/szkolneplatnosci.pl/sp-step-4b_hymwh0.png"},{"title":"Dodaj podopiecznego","paragraphs":["System wy\u015bwietli dane dziecka/podopiecznego.","-","W razie potrzeby, mo\u017cesz doda\u0107 wi\u0119cej dzieci/podopiecznych [2]."],"imgUrl":"https://res.cloudinary.com/dyqm44qjp/image/upload/v1677671461/szkolneplatnosci.pl/sp-step-4c_yijkvt.png"}]}}')}},function(e){e.O(0,[774,361,888,179],(function(){return a=5301,e(e.s=a);var a}));var a=e.O();_N_E=a}]);