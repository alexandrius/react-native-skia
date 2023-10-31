"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2682],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>k});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),i=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=i(e.components);return n.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=i(t),k=r,N=c["".concat(p,".").concat(k)]||c[k]||d[k]||s;return t?n.createElement(N,l(l({ref:a},m),{},{components:t})):n.createElement(N,l({ref:a},m))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=c;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var i=2;i<s;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7062:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var n=t(7462),r=(t(7294),t(3905));const s={id:"image",title:"Images",sidebar_label:"Image",slug:"/images"},l=void 0,o={unversionedId:"image",id:"image",title:"Images",description:"Loading Images",source:"@site/docs/image.md",sourceDirName:".",slug:"/images",permalink:"/react-native-skia/docs/images",draft:!1,editUrl:"https://github.com/shopify/react-native-skia/edit/main/docs/docs/image.md",tags:[],version:"current",frontMatter:{id:"image",title:"Images",sidebar_label:"Image",slug:"/images"},sidebar:"tutorialSidebar",previous:{title:"Custom Drawing",permalink:"/react-native-skia/docs/shapes/custom-drawing"},next:{title:"Animated Images",permalink:"/react-native-skia/docs/animated-images"}},p={},i=[{value:"Loading Images",id:"loading-images",level:2},{value:"Image",id:"image",level:2},{value:"Example",id:"example",level:3},{value:"fit=&quot;contain&quot;",id:"fitcontain",level:3},{value:"fit=&quot;cover&quot;",id:"fitcover",level:3},{value:"fit=&quot;fill&quot;",id:"fitfill",level:3},{value:"fit=&quot;fitHeight&quot;",id:"fitfitheight",level:3},{value:"fit=&quot;fitWidth&quot;",id:"fitfitwidth",level:3},{value:"fit=&quot;scaleDown&quot;",id:"fitscaledown",level:3},{value:"fit=&quot;none&quot;",id:"fitnone",level:3},{value:"Instance Methods",id:"instance-methods",level:2}],m={toc:i};function d(e){let{components:a,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,s,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"loading-images"},"Loading Images"),(0,r.kt)("p",null,"Images are loaded using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useImage")," hook. This hook returns an ",(0,r.kt)("inlineCode",{parentName:"p"},"SkImage")," instance which can be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Image")," component."),(0,r.kt)("p",null,"Images can be loaded using require statements, or by passing a network URL directly. It is also possible to load images from the app bundle using named images."),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," { ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const useImage: (source: DataSourceParam, onError?: ((err: Error) => void) | undefined) => SkImage | null\nimport useImage"},"useImage")," } "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"@shopify/react-native-skia"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// Loads an image from the JavaScript bundle")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const image1: SkImage | null"},"image1")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) useImage(source: DataSourceParam, onError?: ((err: Error) => void) | undefined): SkImage | null\nimport useImage"},"useImage")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"var require: NodeRequire\n(id: string) => any (+1 overload)"},"require")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"./assets/oslo"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"));")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// Loads an image from the network")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const image2: SkImage | null"},"image2")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) useImage(source: DataSourceParam, onError?: ((err: Error) => void) | undefined): SkImage | null\nimport useImage"},"useImage")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"https://picsum.photos/200/300"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},");")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// Loads an image that was added to the Android/iOS bundle")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const image3: SkImage | null"},"image3")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) useImage(source: DataSourceParam, onError?: ((err: Error) => void) | undefined): SkImage | null\nimport useImage"},"useImage")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"Logo"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},");"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord twoslash lsp",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const useImage: (source: DataSourceParam, onError?: ((err: Error) => void) | undefined) => SkImage | null\nimport useImage"},"useImage")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@shopify/react-native-skia"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// Loads an image from the JavaScript bundle")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const image1: SkImage | null"},"image1")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) useImage(source: DataSourceParam, onError?: ((err: Error) => void) | undefined): SkImage | null\nimport useImage"},"useImage")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"var require: NodeRequire\n(id: string) => any (+1 overload)"},"require")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"./assets/oslo"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"))"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// Loads an image from the network")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const image2: SkImage | null"},"image2")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) useImage(source: DataSourceParam, onError?: ((err: Error) => void) | undefined): SkImage | null\nimport useImage"},"useImage")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"https://picsum.photos/200/300"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// Loads an image that was added to the Android/iOS bundle")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const image3: SkImage | null"},"image3")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) useImage(source: DataSourceParam, onError?: ((err: Error) => void) | undefined): SkImage | null\nimport useImage"},"useImage")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"Logo"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))),(0,r.kt)("p",null,"Loading an image is an asynchronous operation, so the ",(0,r.kt)("inlineCode",{parentName:"p"},"useImage")," hook will return null until the image is loaded. You can use this to conditionally render the ",(0,r.kt)("inlineCode",{parentName:"p"},"Image")," component like in the ",(0,r.kt)("a",{parentName:"p",href:"#example"},"example below"),". The hook also provides an optional error handler as a second parameter."),(0,r.kt)("h2",{id:"image"},"Image"),(0,r.kt)("p",null,"Images can be drawn by specifying the output rectangle and how the image should fit into that rectangle."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"image"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SkImage")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Image instance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Left position of the destination image.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"y"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Right position of the destination image.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"width"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Width of the destination image.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"height"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Height of the destination image.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"fit?"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Fit")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Method to make the image fit into the rectangle. Value can be ",(0,r.kt)("inlineCode",{parentName:"td"},"contain"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"fill"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"cover")," ",(0,r.kt)("inlineCode",{parentName:"td"},"fitHeight"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"fitWidth"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"scaleDown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"none")," (default is ",(0,r.kt)("inlineCode",{parentName:"td"},"contain"),").")))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," { ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FC<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Image: (props: SkiaProps<ImageProps>) => JSX.Element\nimport Image"},"Image")),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const useImage: (source: DataSourceParam, onError?: ((err: Error) => void) | undefined) => SkImage | null\nimport useImage"},"useImage")," } "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"@shopify/react-native-skia"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const ImageDemo: () => JSX.Element"},"ImageDemo")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const image: SkImage | null"},"image")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) useImage(source: DataSourceParam, onError?: ((err: Error) => void) | undefined): SkImage | null\nimport useImage"},"useImage")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"var require: NodeRequire\n(id: string) => any (+1 overload)"},"require")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"./assets/oslo.jpg"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"));")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FC<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) ViewProps.style?: StyleProp<ViewStyle>"},"style")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{{ ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"1"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," }}>")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Image: (props: SkiaProps<ImageProps>) => JSX.Element\nimport Image"},"Image")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) image: SkImage | null"},"image")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,r.kt)("data-lsp",{parentName:"span",lsp:"const image: SkImage | null"},"image"),"} "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:'(property) fit: "contain"'},"fit")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"contain"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) x?: AnimatedProp<number | undefined, any>"},"x")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"0"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"} "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) y?: AnimatedProp<number | undefined, any>"},"y")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"0"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"} "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) width: AnimatedProp<number, any>"},"width")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"256"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"} "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) height: AnimatedProp<number, any>"},"height")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"256"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"} />")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FC<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  );")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"};"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord twoslash lsp",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FC<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Image: (props: SkiaProps<ImageProps>) => JSX.Element\nimport Image"},"Image")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const useImage: (source: DataSourceParam, onError?: ((err: Error) => void) | undefined) => SkImage | null\nimport useImage"},"useImage")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@shopify/react-native-skia"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const ImageDemo: () => JSX.Element"},"ImageDemo")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"()"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const image: SkImage | null"},"image")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) useImage(source: DataSourceParam, onError?: ((err: Error) => void) | undefined): SkImage | null\nimport useImage"},"useImage")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"var require: NodeRequire\n(id: string) => any (+1 overload)"},"require")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"./assets/oslo.jpg"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"))"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," (")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FC<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) ViewProps.style?: StyleProp<ViewStyle>"},"style")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"1"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}>")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Image: (props: SkiaProps<ImageProps>) => JSX.Element\nimport Image"},"Image")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) image: SkImage | null"},"image")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const image: SkImage | null"},"image")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:'(property) fit: "contain"'},"fit")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"contain"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) x?: AnimatedProp<number | undefined, any>"},"x")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,r.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"0"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) y?: AnimatedProp<number | undefined, any>"},"y")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,r.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"0"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) width: AnimatedProp<number, any>"},"width")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,r.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"256"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) height: AnimatedProp<number, any>"},"height")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,r.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"256"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Canvas: React.FC<CanvasProps & React.RefAttributes<SkiaDomView>>\nimport Canvas"},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  )"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))),(0,r.kt)("h3",{id:"fitcontain"},'fit="contain"'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fit=&quot;contain&quot;",src:t(5684).Z,width:"768",height:"256"})),(0,r.kt)("h3",{id:"fitcover"},'fit="cover"'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fit=&quot;cover&quot;",src:t(7594).Z,width:"768",height:"256"})),(0,r.kt)("h3",{id:"fitfill"},'fit="fill"'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fit=&quot;fill&quot;",src:t(2200).Z,width:"768",height:"256"})),(0,r.kt)("h3",{id:"fitfitheight"},'fit="fitHeight"'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fit=&quot;fitHeight&quot;",src:t(792).Z,width:"768",height:"256"})),(0,r.kt)("h3",{id:"fitfitwidth"},'fit="fitWidth"'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fit=&quot;fitWidth&quot;",src:t(7593).Z,width:"768",height:"256"})),(0,r.kt)("h3",{id:"fitscaledown"},'fit="scaleDown"'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fit=&quot;fitWidth&quot;",src:t(1463).Z,width:"768",height:"256"})),(0,r.kt)("h3",{id:"fitnone"},'fit="none"'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fit=&quot;none&quot;",src:t(4742).Z,width:"768",height:"256"})),(0,r.kt)("h2",{id:"instance-methods"},"Instance Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"height"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Returns the possibly scaled height of the image.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"width"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Returns the possibly scaled width of the image.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"encodeToBytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Encodes Image pixels, returning result as UInt8Array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"encodeToBase64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Encodes Image pixels, returning result as a base64 encoded string")))))}d.isMDXComponent=!0},5684:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/contain-feb18e23f3d0efa665f2cf1005d1f578.png"},7594:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/cover-d876e99ed6b72cd68d4cf2de2da0368b.png"},2200:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/fill-f171bf1f95388655be7dd89930ba35ac.png"},792:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/fitHeight-1c9334534883f9df13fe0362cb0e9180.png"},7593:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/fitWidth-0ce6d3402dc86f3796438d76c6c230f9.png"},4742:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/none-5afc0e6ba4602acd65d5704fb5dee8da.png"},1463:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/scaleDown-feb18e23f3d0efa665f2cf1005d1f578.png"}}]);