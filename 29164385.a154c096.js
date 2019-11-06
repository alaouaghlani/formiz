(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return m}));t(59),t(32),t(23),t(24),t(60),t(0);var a=t(169),i=t(176);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var l={id:"rules",title:"Validation Rules"},o=[{value:"isRequired()",id:"isrequired",children:[]},{value:"isNotEmptyString()",id:"isnotemptystring",children:[]},{value:"isNotEmptyArray()",id:"isnotemptyarray",children:[]},{value:"isEmail()",id:"isemail",children:[]},{value:"isNumber()",id:"isnumber",children:[]},{value:"isLength(length)",id:"islengthlength",children:[]},{value:"isMinLength(length)",id:"isminlengthlength",children:[]},{value:"isMaxLength(length)",id:"ismaxlengthlength",children:[]}],s={rightToc:o},c="wrapper";function m(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(a.b)(c,r({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"isrequired"},"isRequired()"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Test if there is value.")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"import { isRequired } from '@formiz/validations'\n\n<MyField\n  name=\"fieldName\"\n  validations={[\n    {\n      rule: isRequired(),\n      message: 'This field is required',\n    },\n  ]}\n>\n")),Object(a.b)("h3",{id:"isnotemptystring"},"isNotEmptyString()"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Test if a string has not only spaces.")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"import { isNotEmptyString } from '@formiz/validations'\n\n<MyField\n  name=\"fieldName\"\n  validations={[\n    {\n      rule: isNotEmptyString(),\n      message: 'This field can\\'t be empty',\n    },\n  ]}\n>\n")),Object(a.b)("h3",{id:"isnotemptyarray"},"isNotEmptyArray()"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Test if an array is not empty.")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"import { isNotEmptyArray } from '@formiz/validations'\n\n<MyField\n  name=\"fieldName\"\n  validations={[\n    {\n      rule: isNotEmptyArray(),\n      message: 'This array can\\'t be empty',\n    },\n  ]}\n>\n")),Object(a.b)("h3",{id:"isemail"},"isEmail()"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Test if a string is an valid email.")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"import { isEmail } from '@formiz/validations'\n\n<MyField\n  name=\"fieldName\"\n  validations={[\n    {\n      rule: isEmail(),\n      message: 'This is not a valid email',\n    },\n  ]}\n>\n")),Object(a.b)("h3",{id:"isnumber"},"isNumber()"),Object(a.b)(i.b,{of:"isNumber()",mdxType:"NotImplemented"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Test if the value is a number.")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"import { isNumber } from '@formiz/validations'\n\n<MyField\n  name=\"fieldName\"\n  validations={[\n    {\n      rule: isNumber(),\n      message: 'This is not a number',\n    },\n  ]}\n>\n")),Object(a.b)("h3",{id:"islengthlength"},"isLength(length)"),Object(a.b)(i.b,{of:"isLength(length)",mdxType:"NotImplemented"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Test if a string or an array has a specific length.")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"import { isLength } from '@formiz/validations'\n\n<MyField\n  name=\"fieldName\"\n  validations={[\n    {\n      rule: isLength(4),\n      message: 'This has not a length of 4',\n    },\n  ]}\n>\n")),Object(a.b)("h3",{id:"isminlengthlength"},"isMinLength(length)"),Object(a.b)(i.b,{of:"isMinLength(length)",mdxType:"NotImplemented"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Test if a string or an array has a minimum length.")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"import { isMinLength } from '@formiz/validations'\n\n<MyField\n  name=\"fieldName\"\n  validations={[\n    {\n      rule: isMinLength(4),\n      message: 'This should at least have a length of 4',\n    },\n  ]}\n>\n")),Object(a.b)("h3",{id:"ismaxlengthlength"},"isMaxLength(length)"),Object(a.b)(i.b,{of:"isMaxLength(length)",mdxType:"NotImplemented"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Test if a string or an array has a maximum length.")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"import { isMaxLength } from '@formiz/validations'\n\n<MyField\n  name=\"fieldName\"\n  validations={[\n    {\n      rule: isMaxLength(4),\n      message: 'This should have a length of 4 or less',\n    },\n  ]}\n>\n")))}m.isMDXComponent=!0},169:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return u}));var a=t(0),i=t.n(a),r=i.a.createContext({}),l=function(e){var n=i.a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},o=function(e){var n=l(e.components);return i.a.createElement(r.Provider,{value:n},e.children)};var s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),m=l(t),u=a,b=m[o+"."+u]||m[u]||c[u]||r;return t?i.a.createElement(b,Object.assign({},{ref:n},s,{components:t})):i.a.createElement(b,Object.assign({},{ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},176:function(e,n,t){"use strict";var a=t(0),i=t.n(a),r=function(){return i.a.createElement("div",{className:"callout is-warning"},"This is an"," ",i.a.createElement("strong",null,"early and alpha release")," ","of Formiz."," ","API is subject to change."," ",i.a.createElement("strong",null,"Do not use in production."))},l=t(13),o=t.n(l),s=function(e){var n=e.of;return i.a.createElement("div",{className:"callout is-warning"},"Work in Progress."," ",i.a.createElement("strong",null,n)," ","is not implemented yet.")};s.propTypes={of:o.a.string},s.defaultProps={of:"This"};var c=function(e){var n=e.of;return i.a.createElement("div",{className:"callout is-warning"},"Work in Progress."," ",i.a.createElement("strong",null,"@formiz/",n)," ","is not published on NPM yet.")};c.propTypes={of:o.a.string},c.defaultProps={of:"core"};t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return s}))}}]);