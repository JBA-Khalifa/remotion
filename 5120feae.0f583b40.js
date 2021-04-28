(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{104:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),o=(t(0),t(158)),i={id:"render-frames",title:"renderFrames()"},c={unversionedId:"render-frames",id:"render-frames",isDocsHomePage:!1,title:"renderFrames()",description:"Part of the @remotion/renderer package.",source:"@site/docs/render-frames.md",slug:"/render-frames",permalink:"/docs/render-frames",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/render-frames.md",version:"current",sidebar:"someSidebar",previous:{title:"getCompositions()",permalink:"/docs/get-compositions"},next:{title:"stitchFramesToVideo()",permalink:"/docs/stitch-frames-to-video"}},l=[{value:"Arguments",id:"arguments",children:[{value:"<code>config</code>",id:"config",children:[]},{value:"<code>compositionId</code>",id:"compositionid",children:[]},{value:"<code>onStart</code>",id:"onstart",children:[]},{value:"<code>onFrameUpdate</code>",id:"onframeupdate",children:[]},{value:"<code>outputDir</code>",id:"outputdir",children:[]},{value:"<code>inputProps</code>",id:"inputprops",children:[]},{value:"<code>webpackBundle</code>",id:"webpackbundle",children:[]},{value:"<code>imageFormat</code>",id:"imageformat",children:[]},{value:"<code>parallelism?</code>",id:"parallelism",children:[]},{value:"<code>quality?</code>",id:"quality",children:[]},{value:"<code>frameRange?</code>",id:"framerange",children:[]},{value:"<code>dumpBrowserLogs?</code>",id:"dumpbrowserlogs",children:[]},{value:"<code>puppeteerInstance?</code>",id:"puppeteerinstance",children:[]}]},{value:"Return value",id:"return-value",children:[]},{value:"See also",id:"see-also",children:[]}],b={toc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Part of the ",Object(o.b)("inlineCode",{parentName:"em"},"@remotion/renderer")," package.")),Object(o.b)("p",null,"Renders a series of images using Puppeteer and computes information for mixing audio."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'const renderFrames: (options: {\n  config: VideoConfig;\n  compositionId: string;\n  onFrameUpdate: (frame: number) => void;\n  onStart: (data: {\n    frameCount: number;\n  }) => void;\n  outputDir: string;\n  inputProps: unknown;\n  webpackBundle: string;\n  imageFormat: "png" | "jpeg" | "none";\n  parallelism?: number | null;\n  quality?: number;\n  frameRange?: number | [number, number] | null;\n  dumpBrowserLogs?: boolean;\n  puppeteerInstance?: puppeteer.Browser\n}): Promise<RenderFramesOutput>;\n')),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Configuration in ",Object(o.b)("inlineCode",{parentName:"p"},"remotion.config.ts")," and CLI flags do not apply to this function. You must pass all options explicitly."))),Object(o.b)("h2",{id:"arguments"},"Arguments"),Object(o.b)("p",null,"Takes an object with the following keys:"),Object(o.b)("h3",{id:"config"},Object(o.b)("inlineCode",{parentName:"h3"},"config")),Object(o.b)("p",null,"A video config, consisting out of ",Object(o.b)("inlineCode",{parentName:"p"},"width"),", ",Object(o.b)("inlineCode",{parentName:"p"},"height"),", ",Object(o.b)("inlineCode",{parentName:"p"},"durationInFrames")," and ",Object(o.b)("inlineCode",{parentName:"p"},"fps"),". See: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/the-fundamentals#defining-compositions"}),"Defining compositions")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/use-video-config"}),"useVideoConfig()"),"."),Object(o.b)("h3",{id:"compositionid"},Object(o.b)("inlineCode",{parentName:"h3"},"compositionId")),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"string")," specifying the ID of the composition. See: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/the-fundamentals#defining-compositions"}),"Defining compositions"),"."),Object(o.b)("h3",{id:"onstart"},Object(o.b)("inlineCode",{parentName:"h3"},"onStart")),Object(o.b)("p",null,"A callback that fires after the setup process (validation, browser launch) has finished. Example value"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const onStart = () => {\n  console.log('Starting rendering...');\n}\n")),Object(o.b)("h3",{id:"onframeupdate"},Object(o.b)("inlineCode",{parentName:"h3"},"onFrameUpdate")),Object(o.b)("p",null,"A callback function that gets called whenever a frame finished rendering. An argument is passed containing how many frames have been rendered (not the frame number of the rendered frame). Example value"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const onFrameUpdate = (frame: number) => {\n  console.log(`${frame} frames rendered.`)\n}\n")),Object(o.b)("h3",{id:"outputdir"},Object(o.b)("inlineCode",{parentName:"h3"},"outputDir")),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"string")," specifying the directory (absolute path) to which frames should be saved."),Object(o.b)("h3",{id:"inputprops"},Object(o.b)("inlineCode",{parentName:"h3"},"inputProps")),Object(o.b)("p",null,"Custom props which will be passed to the component. Useful for rendering videos with dynamic content. Can be an object of any shape."),Object(o.b)("h3",{id:"webpackbundle"},Object(o.b)("inlineCode",{parentName:"h3"},"webpackBundle")),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"string")," specifying the location of the bundled Remotion project."),Object(o.b)("h3",{id:"imageformat"},Object(o.b)("inlineCode",{parentName:"h3"},"imageFormat")),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"string")," which must be either ",Object(o.b)("inlineCode",{parentName:"p"},"png"),", ",Object(o.b)("inlineCode",{parentName:"p"},"jpeg")," or ",Object(o.b)("inlineCode",{parentName:"p"},"none"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Choose ",Object(o.b)("inlineCode",{parentName:"li"},"jpeg")," by default because it is the fastest."),Object(o.b)("li",{parentName:"ul"},"Choose ",Object(o.b)("inlineCode",{parentName:"li"},"png")," if you want your image sequence to have an alpha channel (for transparency)."),Object(o.b)("li",{parentName:"ul"},"Choose ",Object(o.b)("inlineCode",{parentName:"li"},"none")," if you only want to render audio.")),Object(o.b)("h3",{id:"parallelism"},Object(o.b)("inlineCode",{parentName:"h3"},"parallelism?")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"optional")),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"number")," specifying how many frames should be rendered in parallel or ",Object(o.b)("inlineCode",{parentName:"p"},"null")," to let Remotion decide based on the CPU of the host machine. Default is half of the CPU threads available."),Object(o.b)("h3",{id:"quality"},Object(o.b)("inlineCode",{parentName:"h3"},"quality?")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"optional")),Object(o.b)("p",null,"Sets the quality of the generated JPEG images. Must be an integer between 0 and 100. Default is to leave it up to the browser, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chromium/chromium/blob/99314be8152e688bafbbf9a615536bdbb289ea87/headless/lib/browser/protocol/headless_handler.cc#L32"}),"current default is 80"),"."),Object(o.b)("p",null,"Only applies if ",Object(o.b)("inlineCode",{parentName:"p"},"imageFormat")," is ",Object(o.b)("inlineCode",{parentName:"p"},"'jpeg'"),", otherwise this option is invalid."),Object(o.b)("h3",{id:"framerange"},Object(o.b)("inlineCode",{parentName:"h3"},"frameRange?")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"optional")),Object(o.b)("p",null,"Specify a single frame (passing a ",Object(o.b)("inlineCode",{parentName:"p"},"number"),") or a range of frames (passsing a tuple ",Object(o.b)("inlineCode",{parentName:"p"},"[number, number]"),") to be rendered. By passing ",Object(o.b)("inlineCode",{parentName:"p"},"null")," (default) all frames of a composition get rendered."),Object(o.b)("h3",{id:"dumpbrowserlogs"},Object(o.b)("inlineCode",{parentName:"h3"},"dumpBrowserLogs?")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"optional")),Object(o.b)("p",null,"Passes the ",Object(o.b)("inlineCode",{parentName:"p"},"dumpio")," flag to Puppeteer which will log all browser logs to the console. Useful for debugging. ",Object(o.b)("inlineCode",{parentName:"p"},"boolean")," flag, default is ",Object(o.b)("inlineCode",{parentName:"p"},"false"),"."),Object(o.b)("h3",{id:"puppeteerinstance"},Object(o.b)("inlineCode",{parentName:"h3"},"puppeteerInstance?")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"optional")),Object(o.b)("p",null,"An already open Puppeteer ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://pptr.dev/#?product=Puppeteer&version=main&show=api-class-browser"}),Object(o.b)("inlineCode",{parentName:"a"},"Browser"))," instance. Reusing a browser across multiple function calls can speed up the rendering process. You are responsible for opening and closing the browser yourself. If you don't specify this option, a new browser will be opened and closed at the end."),Object(o.b)("h2",{id:"return-value"},"Return value"),Object(o.b)("p",null,"A promise resolving to an object containing the following properties:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"frameCount"),": ",Object(o.b)("inlineCode",{parentName:"li"},"number")," - describing how many frames got rendered."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"assetsInfo"),": ",Object(o.b)("inlineCode",{parentName:"li"},"RenderAssetInfo")," - information that can be passed to ",Object(o.b)("inlineCode",{parentName:"li"},"stitchFramesToVideo()")," to mix audio. The shape of this object should be considered as Remotion internals and may change across Remotion versions.")),Object(o.b)("h2",{id:"see-also"},"See also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/bundle"}),"bundle()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/ssr"}),"Server-Side rendering")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/get-compositions"}),"getCompositions()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/stitch-frames-to-video"}),"stitchFramesToVideo()"))))}p.isMDXComponent=!0},158:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),p=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,u=s["".concat(i,".").concat(m)]||s[m]||d[m]||o;return t?r.a.createElement(u,c(c({ref:n},b),{},{components:t})):r.a.createElement(u,c({ref:n},b))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<o;b++)i[b]=t[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);