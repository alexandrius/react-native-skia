"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2124],{3905:function(e,a,t){t.d(a,{Zo:function(){return m},kt:function(){return N}});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=n.createContext({}),i=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=i(e.components);return n.createElement(o.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=i(t),N=s,k=c["".concat(o,".").concat(N)]||c[N]||d[N]||r;return t?n.createElement(k,l(l({ref:a},m),{},{components:t})):n.createElement(k,l({ref:a},m))}));function N(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,l=new Array(r);l[0]=c;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p.mdxType="string"==typeof e?e:s,l[1]=p;for(var i=2;i<r;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1735:function(e,a,t){t.r(a),t.d(a,{assets:function(){return m},contentTitle:function(){return o},default:function(){return N},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return d}});var n=t(3117),s=t(102),r=(t(7294),t(3905)),l=["components"],p={id:"offset",title:"Offset",sidebar_label:"Offset",slug:"/image-filters/offset"},o=void 0,i={unversionedId:"image-filters/offset",id:"image-filters/offset",title:"Offset",description:"This offset filter is identical to its SVG counterpart. It allows offsetting the filtered image.",source:"@site/docs/image-filters/offset.md",sourceDirName:"image-filters",slug:"/image-filters/offset",permalink:"/react-native-skia/docs/image-filters/offset",editUrl:"https://github.com/shopify/react-native-skia/edit/main/docs/docs/image-filters/offset.md",tags:[],version:"current",frontMatter:{id:"offset",title:"Offset",sidebar_label:"Offset",slug:"/image-filters/offset"},sidebar:"tutorialSidebar",previous:{title:"Displacement Map",permalink:"/react-native-skia/docs/image-filters/displacement-map"},next:{title:"Morphology",permalink:"/react-native-skia/docs/image-filters/morphology"}},m={},d=[{value:"Example",id:"example",level:2}],c={toc:d};function N(e){var a=e.components,p=(0,s.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},c,p,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This offset filter is identical to its ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feOffset"},"SVG counterpart"),". It allows offsetting the filtered image. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Offset along the X axis.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"y"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Offset along the Y axis.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"children?"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ImageFilter")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional image filter to be applied first.")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," { ",(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | ... 46 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) module Image\n(alias) const Image: {\n    (props: AnimatedProps<ImageProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n        fit: string;\n    };\n}\nimport Image"},"Image")),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) module Offset\n(alias) const Offset: {\n    (props: AnimatedProps<OffsetProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n    };\n}\nimport Offset"},"Offset")),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const useImage: (source: DataSource) => SkImage | null\nimport useImage"},"useImage")),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Fill: (props: AnimatedProps<FillProps>) => JSX.Element\nimport Fill"},"Fill")," } "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"@shopify/react-native-skia"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const Filter: () => JSX.Element | null"},"Filter")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const image: SkImage | null"},"image")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) useImage(source: DataSource): SkImage | null\nimport useImage"},"useImage")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"var require: NodeRequire\n(id: string) => any (+1 overload)"},"require")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"./assets/oslo.jpg"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"));")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"if"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ("),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"!"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const image: SkImage | null"},"image"),") {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"null"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  }")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | ... 46 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) style?: StyleProp<ViewStyle>"},"style")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{{ ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.width?: string | number | undefined"},"width")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"256"),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.height?: string | number | undefined"},"height")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"256"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," }}>")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Fill: (props: AnimatedProps<FillProps>) => JSX.Element\nimport Fill"},"Fill")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) color?: Color | SkiaReadonlyValue<Color | undefined> | undefined"},"color")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"lightblue"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," />")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) module Image\n(alias) const Image: {\n    (props: AnimatedProps<ImageProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n        fit: string;\n    };\n}\nimport Image"},"Image"))),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) image: SkImage"},"image")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,r.kt)("data-lsp",{parentName:"span",lsp:"const image: SkImage"},"image"),"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) x: number"},"x")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"0"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) y: number"},"y")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"0"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) width: number | SkiaReadonlyValue<number>"},"width")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"256"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) height: number | SkiaReadonlyValue<number>"},"height")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"256"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:'(JSX attribute) fit: "cover"'},"fit")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"cover"')),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      >")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        <"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) module Offset\n(alias) const Offset: {\n    (props: AnimatedProps<OffsetProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n    };\n}\nimport Offset"},"Offset")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) x?: number | SkiaReadonlyValue<number> | undefined"},"x")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"64"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"} "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) y?: number | SkiaReadonlyValue<number> | undefined"},"y")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"64"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"} />")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      </"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) module Image\n(alias) const Image: {\n    (props: AnimatedProps<ImageProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n        fit: string;\n    };\n}\nimport Image"},"Image")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | ... 46 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  );")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"};"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord twoslash lsp",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | ... 46 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) module Image\n(alias) const Image: {\n    (props: AnimatedProps<ImageProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n        fit: string;\n    };\n}\nimport Image"},"Image")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) module Offset\n(alias) const Offset: {\n    (props: AnimatedProps<OffsetProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n    };\n}\nimport Offset"},"Offset")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const useImage: (source: DataSource) => SkImage | null\nimport useImage"},"useImage")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Fill: (props: AnimatedProps<FillProps>) => JSX.Element\nimport Fill"},"Fill")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@shopify/react-native-skia"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const Filter: () => JSX.Element | null"},"Filter")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"()"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const image: SkImage | null"},"image")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) useImage(source: DataSource): SkImage | null\nimport useImage"},"useImage")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"var require: NodeRequire\n(id: string) => any (+1 overload)"},"require")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"./assets/oslo.jpg"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"))"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"if"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ("),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"!"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const image: SkImage | null"},"image")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},") "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"null;")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," (")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | ... 46 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) style?: StyleProp<ViewStyle>"},"style")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.width?: string | number | undefined"},"width")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"256"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.height?: string | number | undefined"},"height")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"256"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}>")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Fill: (props: AnimatedProps<FillProps>) => JSX.Element\nimport Fill"},"Fill")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) color?: Color | SkiaReadonlyValue<Color | undefined> | undefined"},"color")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"lightblue"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) module Image\n(alias) const Image: {\n    (props: AnimatedProps<ImageProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n        fit: string;\n    };\n}\nimport Image"},"Image"))),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) image: SkImage"},"image")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const image: SkImage"},"image")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) x: number"},"x")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,r.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"0"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) y: number"},"y")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,r.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"0"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) width: number | SkiaReadonlyValue<number>"},"width")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,r.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"256"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) height: number | SkiaReadonlyValue<number>"},"height")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,r.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"256"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:'(JSX attribute) fit: "cover"'},"fit")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"cover"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"')),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) module Offset\n(alias) const Offset: {\n    (props: AnimatedProps<OffsetProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n    };\n}\nimport Offset"},"Offset")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) x?: number | SkiaReadonlyValue<number> | undefined"},"x")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,r.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"64"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) y?: number | SkiaReadonlyValue<number> | undefined"},"y")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,r.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"64"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) module Image\n(alias) const Image: {\n    (props: AnimatedProps<ImageProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n        fit: string;\n    };\n}\nimport Image"},"Image")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | ... 46 more ... | "fontMgr"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  )"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Offset",src:t(3712).Z,width:"256",height:"256"})))}N.isMDXComponent=!0},3712:function(e,a,t){a.Z=t.p+"assets/images/offset-189ba114fac3fa1817d2dcfaf21174eb.png"}}]);