(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject);__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),client=__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-info/dist/index.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object(client.addDecorator)(Object(dist.withInfo)({header:!1,inline:!0})),Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(tsx|mdx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./packages/TextView/index.less":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,'.text-view {\n  font-size: 24px;\n  line-height: 40px;\n  font-family: "Times New Roman", Times, serif;\n}\n',""]),module.exports=exports},"./node_modules/nested-object-assign/lib sync recursive ^\\.\\/.*$":function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":"./node_modules/nested-object-assign/lib/nestedObjectAssign.js","./nestedObjectAssign.js":"./node_modules/nested-object-assign/lib/nestedObjectAssign.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./node_modules/nested-object-assign/lib sync recursive ^\\.\\/.*$"},"./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(tsx|mdx))$":function(module,exports,__webpack_require__){var map={"./Mp4Player/index.stories.mdx":"./packages/Mp4Player/index.stories.mdx","./Mp4Player/index.stories.tsx":"./packages/Mp4Player/index.stories.tsx","./TextView/index.stories.tsx":"./packages/TextView/index.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(tsx|mdx))$"},"./packages/Mp4Player/index.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"mp4Player",(function(){return mp4Player}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@storybook/addon-docs/blocks.js"),_index_tsx__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/Mp4Player/index.tsx"),_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_8__.b,{title:"MDX/Mp4Player",component:_index_tsx__WEBPACK_IMPORTED_MODULE_9__.a,mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h2",null,"Mp4Player"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h3",null,"Markdown 原功能"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h1",null,"一级标题"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h2",null,"二级标题"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h3",null,"三级标题"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h4",null,"四级标题"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h5",null,"五级标题"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h6",null,"六级标题"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h1",null,"一级标题"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h2",null,"二级标题"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h3",null,"基础使用如下"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_8__.a,{mdxType:"Canvas"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_8__.c,{name:"Mp4Player",mdxType:"Story"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_index_tsx__WEBPACK_IMPORTED_MODULE_9__.a,{controls:!0,autoPlay:!1,url:"https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo-720p.mp4",style:{width:"100%"},mdxType:"Mp4Player"}))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var mp4Player=function mp4Player(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_index_tsx__WEBPACK_IMPORTED_MODULE_9__.a,{controls:!0,autoPlay:!1,url:"https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo-720p.mp4",style:{width:"100%"}})};mp4Player.displayName="mp4Player",mp4Player.storyName="Mp4Player",mp4Player.parameters={storySource:{source:'<Mp4Player controls={true} autoPlay={false} url="https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo-720p.mp4" style={{\n  width: "100%"\n}} />'}};var componentMeta={title:"MDX/Mp4Player",component:_index_tsx__WEBPACK_IMPORTED_MODULE_9__.a,includeStories:["mp4Player"]},mdxStoryNameToKey={Mp4Player:"mp4Player"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},"./packages/Mp4Player/index.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"WithMp4Player",(function(){return WithMp4Player}));var _Users_zhangjdd_github_css_component_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/Mp4Player/index.tsx");__webpack_exports__.default={title:"Mp4Player"};var WithMp4Player=function WithMp4Player(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.a,{controls:!0,autoPlay:!1,url:"https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo-720p.mp4",style:{width:"100%"}})};WithMp4Player.parameters=Object(_Users_zhangjdd_github_css_component_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:'() => (\n  <Mp4Player\n    controls={true}\n    autoPlay={false}\n    url="https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo-720p.mp4"\n    style={{\n      width: "100%"\n    }}\n  />\n)'}},WithMp4Player.parameters)},"./packages/Mp4Player/index.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _Users_zhangjdd_github_css_component_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_excluded=["url"],Mp4Player=function Mp4Player(_ref){var url=_ref.url,props=Object(_Users_zhangjdd_github_css_component_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.a)(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("video",Object.assign({src:url,autoPlay:!0,controls:!0},props),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("source",{src:url,type:"video/mp4"}),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("track",{src:url,kind:"captions",label:"english_captions"}))};__webpack_exports__.a=Mp4Player;try{Mp4Player.displayName="Mp4Player",Mp4Player.__docgenInfo={description:"",displayName:"Mp4Player",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/Mp4Player/index.tsx#Mp4Player"]={docgenInfo:Mp4Player.__docgenInfo,name:"Mp4Player",path:"packages/Mp4Player/index.tsx#Mp4Player"})}catch(__react_docgen_typescript_loader_error){}},"./packages/TextView/index.less":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./packages/TextView/index.less");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./packages/TextView/index.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"WithTextView",(function(){return index_stories_WithTextView})),__webpack_require__.d(__webpack_exports__,"TestAddonActions",(function(){return index_stories_TestAddonActions})),__webpack_require__.d(__webpack_exports__,"TestAddonKnobs",(function(){return index_stories_TestAddonKnobs})),__webpack_require__.d(__webpack_exports__,"TestAddonKnobsMore",(function(){return index_stories_TestAddonKnobsMore}));var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),esm=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),demo=__webpack_require__("./node_modules/@storybook/react/demo.js"),dist=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),TextView_TextView=(__webpack_require__("./packages/TextView/index.less"),function TextView(_ref){var children=_ref.children;return react_default.a.createElement("div",{className:"text-view"},children)}),packages_TextView_0=TextView_TextView;try{TextView_TextView.displayName="TextView",TextView_TextView.__docgenInfo={description:"",displayName:"TextView",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/TextView/index.tsx#TextView"]={docgenInfo:TextView_TextView.__docgenInfo,name:"TextView",path:"packages/TextView/index.tsx#TextView"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"TextView"};var index_stories_WithTextView=function WithTextView(){return react_default.a.createElement(packages_TextView_0,null,"This is my test component")},index_stories_TestAddonActions=function TestAddonActions(){return react_default.a.createElement(demo.Button,{onClick:Object(esm.action)("clicked")},react_default.a.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯"))},index_stories_TestAddonKnobs=function TestAddonKnobs(){return react_default.a.createElement(packages_TextView_0,{children:Object(dist.text)("children","children_value")})},index_stories_TestAddonKnobsMore=function TestAddonKnobsMore(){return react_default.a.createElement("input",{onClick:Object(esm.action)("onClick"),onFocus:Object(esm.action)("onFocus"),placeholder:Object(dist.text)("placeholder","placeholder_value"),type:Object(dist.select)("type",{password:"password",number:"number",text:"text"},"number"),disabled:Object(dist.boolean)("disabled",!1),size:Object(dist.number)("size",24)})};index_stories_WithTextView.parameters=Object(objectSpread2.a)({storySource:{source:"() => (\n  <TextView>This is my test component</TextView>\n)"}},index_stories_WithTextView.parameters),index_stories_TestAddonActions.parameters=Object(objectSpread2.a)({storySource:{source:'() => (\n  <Button onClick={action("clicked")}>\n    <span role="img" aria-label="so cool">\n      😀 😎 👍 💯\n    </span>\n  </Button>\n)'}},index_stories_TestAddonActions.parameters),index_stories_TestAddonKnobs.parameters=Object(objectSpread2.a)({storySource:{source:'() => (\n  <TextView children={text("children", "children_value")} />\n)'}},index_stories_TestAddonKnobs.parameters),index_stories_TestAddonKnobsMore.parameters=Object(objectSpread2.a)({storySource:{source:'() => (\n  <input\n    onClick={action("onClick")}\n    onFocus={action("onFocus")}\n    placeholder={text("placeholder", "placeholder_value")}\n    type={select(\n      "type",\n      { password: "password", number: "number", text: "text" },\n      "number"\n    )}\n    disabled={boolean("disabled", false)}\n    size={number("size", 24)}\n  />\n)'}},index_stories_TestAddonKnobsMore.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-knobs/dist/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,4,5]]]);