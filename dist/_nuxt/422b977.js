(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3,7],{459:function(t,e,r){var content=r(463);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("2d946d8f",content,!0,{sourceMap:!1})},460:function(t,e,r){var content=r(465);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("1b7bd390",content,!0,{sourceMap:!1})},462:function(t,e,r){"use strict";r(459)},463:function(t,e,r){var n=r(18)(!1);n.push([t.i,".hero-container[data-v-84e8a044]{width:100%;background-size:cover;border-bottom-left-radius:80px}.register-btn[data-v-84e8a044]{background:linear-gradient(121deg,#f29822 13.56%,#f26643 46.86%,#f24857 72.25%,#f23c5f 86.44%);text-transform:capitalize;border-radius:100px}@media screen and (max-width:440px){.hero[data-v-84e8a044]{min-height:265px;border-bottom-left-radius:80px;background-size:cover;background-position:50%}.btn-wrap[data-v-84e8a044],.hero[data-v-84e8a044]{width:100%}}",""]),t.exports=n},464:function(t,e,r){"use strict";r(460)},465:function(t,e,r){var n=r(18)(!1);n.push([t.i,".hero-section[data-v-31822154]{position:relative;background-repeat:no-repeat;background-size:cover;height:98vh;width:100%;border-bottom-left-radius:370px}@media screen and (max-width:400px){.hero-section[data-v-31822154]{height:208px;background-size:cover;border-bottom-left-radius:89px}}@media screen and (max-width:768px){.hero-section[data-v-31822154]{height:60vh;background-size:cover;border-bottom-left-radius:216px}}.hero-inner[data-v-31822154]{height:100%}",""]),t.exports=n},466:function(t,e,r){"use strict";r.r(e);var n={props:{backgroundImage:{type:String,default:"/hero-bg-lg.png"}},computed:{inlineStyle:function(){return{backgroundImage:"url(".concat(this.backgroundImage,")"),height:"/"===this.$route.path&&"293px",boxShadow:"/"===this.$route.path?"":"inset 2000px 0 0 0 rgba(0, 0, 0, 0.5); border-bottom-left-radius:80px;"}}}},o=(r(462),r(26)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex flex-column"},[r("div",{staticClass:"hero-container",style:t.inlineStyle},[t._t("default",(function(){return[r("div",{staticClass:"hero d-flex flex-column align-center"})]}))],2)])}),[],!1,null,"84e8a044",null);e.default=component.exports},467:function(t,e,r){"use strict";r.r(e);var n={props:{backgroundImage:{type:String,default:"/hero-bg-lg2.png"}},computed:{inlineStyle:function(){return{backgroundImage:"url(".concat(this.backgroundImage,")"),boxShadow:"/"===this.$route.path?"":"inset 2000px 0 0 0 rgba(0, 0, 0, 0.5);"}}}},o=(r(464),r(26)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hero-section",style:t.inlineStyle},[r("div",{staticClass:"hero-inner"},[t._t("default")],2)])}),[],!1,null,"31822154",null);e.default=component.exports},476:function(t,e,r){"use strict";r(11),r(15),r(21),r(22);var n=r(1),o=(r(6),r(39),r(12),r(25),r(54),r(272),r(48),r(273),r(274),r(275),r(276),r(277),r(278),r(279),r(280),r(281),r(282),r(283),r(284),r(285),r(49),r(57),r(16),r(58),r(190),r(0)),l=r(62),c=r(2);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],v=f.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=f.reduce((function(t,e){return t["offset"+Object(c.q)(e)]={type:[String,Number],default:null},t}),{}),x=f.reduce((function(t,e){return t["order"+Object(c.q)(e)]={type:[String,Number],default:null},t}),{}),m={col:Object.keys(v),offset:Object.keys(h),order:Object.keys(x)};function _(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},x),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,c=(e.parent,"");for(var C in r)c+=String(r[C]);var d=w.get(c);return d||function(){var t,e;for(e in d=[],m)m[e].forEach((function(t){var n=r[t],o=_(e,t,n);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),w.set(c,d)}(),t(r.tag,Object(l.a)(data,{class:d}),o)}})},480:function(t,e,r){var content=r(494);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("1db181ae",content,!0,{sourceMap:!1})},493:function(t,e,r){"use strict";r(480)},494:function(t,e,r){var n=r(18)(!1);n.push([t.i,'.faq-parag[data-v-46abc195]  p{font-size:18px}.faq-parag[data-v-46abc195]  ul{padding-left:0;list-style:none!important}.faq-parag[data-v-46abc195]  ul li{font-size:12px;margin:10px 0}.faq-parag[data-v-46abc195]  ul li:before{content:"😎";font-size:10px}.svg-wrap[data-v-46abc195]{width:200px}@media screen and (max-width:440px){.svg-wrap[data-v-46abc195]{width:64px}}.hero-desk-content[data-v-46abc195]{height:100%}.hero-desk-content h3[data-v-46abc195]{font-size:62px}h3.notif-header[data-v-46abc195]{width:635px;font-size:77px}@media screen and (max-width:440px){.hero-content[data-v-46abc195]{min-height:208px!important;padding:0 20px}.hero-content h3[data-v-46abc195]{font-size:26px}.faq-parag[data-v-46abc195]{font-size:16px}}.faq-heading[data-v-46abc195]{font-size:25px;font-weight:500}.faq-parag[data-v-46abc195]{font-size:18px;font-weight:400}.bullet[data-v-46abc195]{width:52px;height:52px;background:linear-gradient(121deg,#f29822 13.56%,#f26643 46.86%,#f24857 72.25%,#f23c5f 86.44%);color:#fff;font-size:14px;font-weight:400;border-radius:50%}@media screen and (max-width:440px){.faq-heading[data-v-46abc195]{font-size:24px}.faq-parag[data-v-46abc195]{font-size:14px}.bullet[data-v-46abc195]{width:24px;height:24px}}',""]),t.exports=n},552:function(t,e,r){"use strict";r.r(e);var n=r(34),o=(r(98),{name:"Faq",layout:"custom",fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("/api/faq");case 3:return t.faqs=e.sent,e.next=6,t.$axios.$get("/api/page/faq");case 6:t.pageData=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},data:function(){return{faqs:[],pageData:{data:{banner_image_desktop:{value:"/faq-desk.png"},banner_image_mobile:{value:"/faq-mobile.png.png"},page_title:{value:"faqs"}}}}}}),l=(r(493),r(26)),c=r(31),C=r.n(c),d=r(476),f=r(457),v=r(454),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("MobileHero",{staticClass:"d-md-none",attrs:{"background-image":t.pageData.data.banner_image_desktop.value}},[r("div",{staticClass:"d-flex hero-content justify-center align-center"},[r("h3",{staticClass:"white--text pa-4"},[t._v("\n        Most frequently "),r("br"),t._v("\n        asked questions\n      ")]),t._v(" "),r("div",{staticClass:"svg-wrap"},[r("svg",{attrs:{viewBox:"0 0 248 353",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M24.6205 103.348H84.0139C84.0139 103.348 84.0139 57.3358 135.838 56.5197C162.753 56.0833 176.709 72.3568 182.386 84.8158C188.968 99.2864 186.973 115.778 178.149 129.205C168.08 144.53 146.379 159.93 106.352 153.421L105.971 275.515H164.707V203.133C164.707 203.133 247.076 183.491 247.076 99.7039C247.076 19.5698 176.842 2.26198 139.088 1.14229C118.087 0.525507 110.476 -0.309515 84.4972 3.09701C51.3912 7.46193 23.9211 42.9316 24.6205 103.348Z",fill:"#F29822"}}),t._v(" "),r("path",{attrs:{d:"M165.417 300.964H105.808V352.328H165.417V300.964Z",fill:"#F29822"}}),t._v(" "),r("path",{attrs:{opacity:"0.1",d:"M165.417 300.964H105.808V352.328H165.417V300.964Z",fill:"black"}}),t._v(" "),r("path",{attrs:{opacity:"0.1",d:"M24.6205 103.348H84.0139C84.0139 103.348 84.0139 57.3358 135.838 56.5197C162.753 56.0833 176.709 72.3568 182.386 84.8158C188.968 99.2864 186.973 115.778 178.149 129.205C168.08 144.53 146.379 159.93 106.352 153.421L105.971 275.515H164.707V203.133C164.707 203.133 247.076 183.491 247.076 99.7039C247.076 19.5698 176.842 2.26198 139.088 1.14229C118.087 0.525507 110.476 -0.309515 84.4972 3.09701C51.3912 7.46193 23.9211 42.9316 24.6205 103.348Z",fill:"black"}}),t._v(" "),r("path",{attrs:{d:"M0.0107512 103.345H59.4144C59.4144 103.345 59.4144 57.3334 111.238 56.5173C138.153 56.0808 152.109 72.3544 157.776 84.8134C164.368 99.284 162.373 115.776 153.549 129.203C143.48 144.527 121.4 158.457 81.372 151.976V275.513H140.107V203.131C140.107 203.131 222.476 183.489 222.476 99.7015C222.476 19.5674 144.581 0.959595 111.249 0.959595C85.7532 0.988062 -1.11027 6.67194 0.0107512 103.345Z",fill:"#F29822"}}),t._v(" "),r("path",{attrs:{opacity:"0.3",d:"M0.0107512 103.345H59.4144C59.4144 103.345 59.4144 57.3334 111.238 56.5173C138.153 56.0808 152.109 72.3544 157.776 84.8134C164.368 99.284 162.373 115.776 153.549 129.203C143.48 144.527 121.4 158.457 81.372 151.976V275.513H140.107V203.131C140.107 203.131 222.476 183.489 222.476 99.7015C222.476 19.5674 144.581 0.959595 111.249 0.959595C85.7532 0.988062 -1.11027 6.67194 0.0107512 103.345Z",fill:"black"}}),t._v(" "),r("path",{attrs:{d:"M140.817 300.964H81.208V352.328H140.817V300.964Z",fill:"#F29822"}}),t._v(" "),r("path",{attrs:{opacity:"0.3",d:"M140.817 300.964H81.208V352.328H140.817V300.964Z",fill:"black"}}),t._v(" "),r("path",{attrs:{d:"M117.945 56.7665C117.651 56.7899 117.355 56.7899 117.06 56.7665C116.474 56.7665 115.631 56.5862 114.53 56.5767C111.419 56.4357 108.3 56.5564 105.213 56.9373C100.634 57.4721 96.1287 58.4484 91.7707 59.8504C89.2017 60.6789 86.6997 61.6745 84.2835 62.8299C81.6718 64.034 79.2126 65.5011 76.9506 67.2043C74.7042 68.9229 72.691 70.8855 70.9547 73.0495C69.3089 75.0502 67.8076 77.1486 66.4604 79.3312C64.2112 83.0484 62.4274 86.9894 61.1433 91.0785C60.2726 93.8382 59.6737 96.6647 59.3537 99.5237C59.2303 100.529 59.1995 101.327 59.1686 101.858C59.1693 102.132 59.1417 102.405 59.0863 102.674C59.0598 102.403 59.0598 102.129 59.0863 101.858C59.0863 101.317 59.0863 100.52 59.1789 99.5047C59.4154 96.615 59.9631 93.7542 60.8141 90.9646C62.051 86.8283 63.8115 82.8408 66.0593 79.0845C67.4092 76.8779 68.9175 74.7572 70.5742 72.7364C72.3251 70.537 74.3631 68.5451 76.6421 66.8058C78.9315 65.0791 81.4219 63.5929 84.0676 62.3744C86.4988 61.1978 89.0181 60.1831 91.6062 59.338C96.0037 57.9414 100.552 56.9869 105.172 56.4913C108.28 56.1389 111.418 56.0722 114.541 56.292C115.389 56.3421 116.234 56.4371 117.071 56.5767C117.367 56.6209 117.659 56.6844 117.945 56.7665Z",fill:"#263238"}}),t._v(" "),r("path",{attrs:{d:"M207.438 46.999C207.438 46.999 207.366 46.9326 207.243 46.7902C207.119 46.6479 206.934 46.4012 206.729 46.126L204.764 43.564C204.343 43.0136 203.89 42.3779 203.355 41.7231L201.504 39.6451L199.385 37.2444C198.614 36.4093 197.709 35.6028 196.804 34.7203C195.899 33.8378 194.973 32.8984 193.924 31.997C192.875 31.0955 191.754 30.1751 190.602 29.2262C190.026 28.7517 189.461 28.2773 188.844 27.7744L186.931 26.3795C185.625 25.4306 184.329 24.4817 182.92 23.5328C176.779 19.4788 170.264 15.929 163.451 12.9242L158.031 10.6658L152.652 8.76804C150.894 8.09433 149.104 7.61988 147.376 7.0885C145.649 6.55712 143.962 6.01625 142.234 5.64618L137.318 4.46006C135.724 4.07102 134.14 3.83379 132.628 3.51117C131.116 3.18854 129.656 2.90388 128.227 2.74257L124.113 2.19221C121.511 1.78418 119.125 1.69878 117.047 1.509C116.019 1.43309 114.99 1.32872 114.137 1.29076L111.689 1.23382L108.295 1.12945H107.411H107.112C107.211 1.11522 107.312 1.11522 107.411 1.12945H108.295H111.689H114.147C115.042 1.12945 116.019 1.24331 117.068 1.30974C119.125 1.47105 121.552 1.53747 124.154 1.92652L128.268 2.43892C129.697 2.59074 131.158 2.93235 132.68 3.18855C134.202 3.44475 135.765 3.71044 137.4 4.13744L142.337 5.31407C144.044 5.67465 145.731 6.26296 147.479 6.7469C149.228 7.23084 151.007 7.69579 152.766 8.41695L158.175 10.3147L163.626 12.5826C170.475 15.5943 177.015 19.1703 183.167 23.2671C184.586 24.216 185.882 25.2314 187.188 26.1708L189.101 27.4518C189.718 27.9262 190.284 28.4007 190.86 28.9131L194.171 31.7597C195.2 32.7086 196.125 33.6575 197.041 34.521C197.956 35.3845 198.83 36.229 199.601 37.0735L201.658 39.4932L203.489 41.5998C204.013 42.264 204.456 42.9092 204.867 43.4976C205.669 44.6078 206.297 45.4807 206.739 46.107L207.222 46.7997C207.303 46.8572 207.376 46.9242 207.438 46.999Z",fill:"#263238"}}),t._v(" "),r("path",{attrs:{d:"M201.249 164.665C201.127 164.871 200.978 165.062 200.807 165.235L199.388 166.781C198.801 167.474 198.061 168.299 197.145 169.22C196.23 170.14 195.253 171.222 194.06 172.342C192.867 173.461 191.592 174.714 190.142 175.976C188.692 177.238 187.118 178.567 185.442 179.952C178.089 185.873 170.029 191.002 161.417 195.239C159.422 196.187 157.54 197.136 155.719 197.867C153.899 198.598 152.202 199.347 150.639 199.955C149.075 200.562 147.636 201.065 146.381 201.511C145.126 201.957 144.026 202.317 143.121 202.583L141.064 203.2C140.825 203.287 140.577 203.351 140.323 203.39C140.545 203.273 140.779 203.177 141.023 203.105L143.079 202.403C143.974 202.109 145.054 201.729 146.299 201.255C147.543 200.78 148.983 200.306 150.526 199.632C152.068 198.958 153.775 198.323 155.555 197.497C157.334 196.671 159.237 195.798 161.221 194.84C165.14 192.847 169.367 190.513 173.635 187.818C177.903 185.123 181.739 182.286 185.154 179.61C186.83 178.244 188.434 176.963 189.864 175.672C191.294 174.382 192.631 173.215 193.813 172.095C194.996 170.975 196.035 169.941 196.96 169.03C197.886 168.119 198.647 167.322 199.264 166.658L200.704 165.149C200.871 164.975 201.053 164.813 201.249 164.665Z",fill:"#263238"}}),t._v(" "),r("path",{attrs:{d:"M139.07 271.207C138.915 271.207 138.792 255.968 138.792 237.17C138.792 218.373 138.915 203.124 139.07 203.124C139.224 203.124 139.337 218.363 139.337 237.17C139.337 255.977 139.214 271.207 139.07 271.207Z",fill:"#263238"}}),t._v(" "),r("path",{attrs:{d:"M141.329 348.846C141.175 348.846 141.062 338.151 141.062 324.962C141.062 311.772 141.175 301.069 141.329 301.069C141.483 301.069 141.596 311.763 141.596 324.962C141.596 338.161 141.473 348.846 141.329 348.846Z",fill:"#263238"}})])])])]),t._v(" "),r("DesktopHero",{staticClass:"d-none d-md-block",attrs:{"background-image":t.pageData.data.banner_image_mobile.value}},[r("div",{staticClass:"d-flex hero-desk-content justify-center align-center"},[r("h3",{staticClass:"white--text pa-4 notif-header"},[t._v("\n        Most frequently "),r("br"),t._v("\n        asked questions\n      ")]),t._v(" "),r("div",{staticClass:"svg-wrap"},[r("svg",{attrs:{viewBox:"0 0 248 353",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M24.6205 103.348H84.0139C84.0139 103.348 84.0139 57.3358 135.838 56.5197C162.753 56.0833 176.709 72.3568 182.386 84.8158C188.968 99.2864 186.973 115.778 178.149 129.205C168.08 144.53 146.379 159.93 106.352 153.421L105.971 275.515H164.707V203.133C164.707 203.133 247.076 183.491 247.076 99.7039C247.076 19.5698 176.842 2.26198 139.088 1.14229C118.087 0.525507 110.476 -0.309515 84.4972 3.09701C51.3912 7.46193 23.9211 42.9316 24.6205 103.348Z",fill:"#F29822"}}),t._v(" "),r("path",{attrs:{d:"M165.417 300.964H105.808V352.328H165.417V300.964Z",fill:"#F29822"}}),t._v(" "),r("path",{attrs:{opacity:"0.1",d:"M165.417 300.964H105.808V352.328H165.417V300.964Z",fill:"black"}}),t._v(" "),r("path",{attrs:{opacity:"0.1",d:"M24.6205 103.348H84.0139C84.0139 103.348 84.0139 57.3358 135.838 56.5197C162.753 56.0833 176.709 72.3568 182.386 84.8158C188.968 99.2864 186.973 115.778 178.149 129.205C168.08 144.53 146.379 159.93 106.352 153.421L105.971 275.515H164.707V203.133C164.707 203.133 247.076 183.491 247.076 99.7039C247.076 19.5698 176.842 2.26198 139.088 1.14229C118.087 0.525507 110.476 -0.309515 84.4972 3.09701C51.3912 7.46193 23.9211 42.9316 24.6205 103.348Z",fill:"black"}}),t._v(" "),r("path",{attrs:{d:"M0.0107512 103.345H59.4144C59.4144 103.345 59.4144 57.3334 111.238 56.5173C138.153 56.0808 152.109 72.3544 157.776 84.8134C164.368 99.284 162.373 115.776 153.549 129.203C143.48 144.527 121.4 158.457 81.372 151.976V275.513H140.107V203.131C140.107 203.131 222.476 183.489 222.476 99.7015C222.476 19.5674 144.581 0.959595 111.249 0.959595C85.7532 0.988062 -1.11027 6.67194 0.0107512 103.345Z",fill:"#F29822"}}),t._v(" "),r("path",{attrs:{opacity:"0.3",d:"M0.0107512 103.345H59.4144C59.4144 103.345 59.4144 57.3334 111.238 56.5173C138.153 56.0808 152.109 72.3544 157.776 84.8134C164.368 99.284 162.373 115.776 153.549 129.203C143.48 144.527 121.4 158.457 81.372 151.976V275.513H140.107V203.131C140.107 203.131 222.476 183.489 222.476 99.7015C222.476 19.5674 144.581 0.959595 111.249 0.959595C85.7532 0.988062 -1.11027 6.67194 0.0107512 103.345Z",fill:"black"}}),t._v(" "),r("path",{attrs:{d:"M140.817 300.964H81.208V352.328H140.817V300.964Z",fill:"#F29822"}}),t._v(" "),r("path",{attrs:{opacity:"0.3",d:"M140.817 300.964H81.208V352.328H140.817V300.964Z",fill:"black"}}),t._v(" "),r("path",{attrs:{d:"M117.945 56.7665C117.651 56.7899 117.355 56.7899 117.06 56.7665C116.474 56.7665 115.631 56.5862 114.53 56.5767C111.419 56.4357 108.3 56.5564 105.213 56.9373C100.634 57.4721 96.1287 58.4484 91.7707 59.8504C89.2017 60.6789 86.6997 61.6745 84.2835 62.8299C81.6718 64.034 79.2126 65.5011 76.9506 67.2043C74.7042 68.9229 72.691 70.8855 70.9547 73.0495C69.3089 75.0502 67.8076 77.1486 66.4604 79.3312C64.2112 83.0484 62.4274 86.9894 61.1433 91.0785C60.2726 93.8382 59.6737 96.6647 59.3537 99.5237C59.2303 100.529 59.1995 101.327 59.1686 101.858C59.1693 102.132 59.1417 102.405 59.0863 102.674C59.0598 102.403 59.0598 102.129 59.0863 101.858C59.0863 101.317 59.0863 100.52 59.1789 99.5047C59.4154 96.615 59.9631 93.7542 60.8141 90.9646C62.051 86.8283 63.8115 82.8408 66.0593 79.0845C67.4092 76.8779 68.9175 74.7572 70.5742 72.7364C72.3251 70.537 74.3631 68.5451 76.6421 66.8058C78.9315 65.0791 81.4219 63.5929 84.0676 62.3744C86.4988 61.1978 89.0181 60.1831 91.6062 59.338C96.0037 57.9414 100.552 56.9869 105.172 56.4913C108.28 56.1389 111.418 56.0722 114.541 56.292C115.389 56.3421 116.234 56.4371 117.071 56.5767C117.367 56.6209 117.659 56.6844 117.945 56.7665Z",fill:"#263238"}}),t._v(" "),r("path",{attrs:{d:"M207.438 46.999C207.438 46.999 207.366 46.9326 207.243 46.7902C207.119 46.6479 206.934 46.4012 206.729 46.126L204.764 43.564C204.343 43.0136 203.89 42.3779 203.355 41.7231L201.504 39.6451L199.385 37.2444C198.614 36.4093 197.709 35.6028 196.804 34.7203C195.899 33.8378 194.973 32.8984 193.924 31.997C192.875 31.0955 191.754 30.1751 190.602 29.2262C190.026 28.7517 189.461 28.2773 188.844 27.7744L186.931 26.3795C185.625 25.4306 184.329 24.4817 182.92 23.5328C176.779 19.4788 170.264 15.929 163.451 12.9242L158.031 10.6658L152.652 8.76804C150.894 8.09433 149.104 7.61988 147.376 7.0885C145.649 6.55712 143.962 6.01625 142.234 5.64618L137.318 4.46006C135.724 4.07102 134.14 3.83379 132.628 3.51117C131.116 3.18854 129.656 2.90388 128.227 2.74257L124.113 2.19221C121.511 1.78418 119.125 1.69878 117.047 1.509C116.019 1.43309 114.99 1.32872 114.137 1.29076L111.689 1.23382L108.295 1.12945H107.411H107.112C107.211 1.11522 107.312 1.11522 107.411 1.12945H108.295H111.689H114.147C115.042 1.12945 116.019 1.24331 117.068 1.30974C119.125 1.47105 121.552 1.53747 124.154 1.92652L128.268 2.43892C129.697 2.59074 131.158 2.93235 132.68 3.18855C134.202 3.44475 135.765 3.71044 137.4 4.13744L142.337 5.31407C144.044 5.67465 145.731 6.26296 147.479 6.7469C149.228 7.23084 151.007 7.69579 152.766 8.41695L158.175 10.3147L163.626 12.5826C170.475 15.5943 177.015 19.1703 183.167 23.2671C184.586 24.216 185.882 25.2314 187.188 26.1708L189.101 27.4518C189.718 27.9262 190.284 28.4007 190.86 28.9131L194.171 31.7597C195.2 32.7086 196.125 33.6575 197.041 34.521C197.956 35.3845 198.83 36.229 199.601 37.0735L201.658 39.4932L203.489 41.5998C204.013 42.264 204.456 42.9092 204.867 43.4976C205.669 44.6078 206.297 45.4807 206.739 46.107L207.222 46.7997C207.303 46.8572 207.376 46.9242 207.438 46.999Z",fill:"#263238"}}),t._v(" "),r("path",{attrs:{d:"M201.249 164.665C201.127 164.871 200.978 165.062 200.807 165.235L199.388 166.781C198.801 167.474 198.061 168.299 197.145 169.22C196.23 170.14 195.253 171.222 194.06 172.342C192.867 173.461 191.592 174.714 190.142 175.976C188.692 177.238 187.118 178.567 185.442 179.952C178.089 185.873 170.029 191.002 161.417 195.239C159.422 196.187 157.54 197.136 155.719 197.867C153.899 198.598 152.202 199.347 150.639 199.955C149.075 200.562 147.636 201.065 146.381 201.511C145.126 201.957 144.026 202.317 143.121 202.583L141.064 203.2C140.825 203.287 140.577 203.351 140.323 203.39C140.545 203.273 140.779 203.177 141.023 203.105L143.079 202.403C143.974 202.109 145.054 201.729 146.299 201.255C147.543 200.78 148.983 200.306 150.526 199.632C152.068 198.958 153.775 198.323 155.555 197.497C157.334 196.671 159.237 195.798 161.221 194.84C165.14 192.847 169.367 190.513 173.635 187.818C177.903 185.123 181.739 182.286 185.154 179.61C186.83 178.244 188.434 176.963 189.864 175.672C191.294 174.382 192.631 173.215 193.813 172.095C194.996 170.975 196.035 169.941 196.96 169.03C197.886 168.119 198.647 167.322 199.264 166.658L200.704 165.149C200.871 164.975 201.053 164.813 201.249 164.665Z",fill:"#263238"}}),t._v(" "),r("path",{attrs:{d:"M139.07 271.207C138.915 271.207 138.792 255.968 138.792 237.17C138.792 218.373 138.915 203.124 139.07 203.124C139.224 203.124 139.337 218.363 139.337 237.17C139.337 255.977 139.214 271.207 139.07 271.207Z",fill:"#263238"}}),t._v(" "),r("path",{attrs:{d:"M141.329 348.846C141.175 348.846 141.062 338.151 141.062 324.962C141.062 311.772 141.175 301.069 141.329 301.069C141.483 301.069 141.596 311.763 141.596 324.962C141.596 338.161 141.473 348.846 141.329 348.846Z",fill:"#263238"}})])])])]),t._v(" "),r("div",{staticClass:"mt-md-16 pa-md-10"}),t._v(" "),r("div",{staticClass:"my-16"},[r("v-container",[r("v-row",t._l(t.faqs.data,(function(e,n){return r("v-col",{key:n,staticClass:"pr-md-10",attrs:{cols:"12",md:"6"}},[r("div",{staticClass:"faq-container d-flex"},[r("div",{staticClass:"bullet-container mr-4 mr-md-7"},[r("div",{staticClass:"bullet d-flex align-center justify-center"},[t._v("\n                0"+t._s(n+1)+"\n              ")])]),t._v(" "),r("div",{staticClass:"faq-content"},[r("h3",{staticClass:"faq-heading"},[t._v(t._s(e.question))]),t._v(" "),r("div",{staticClass:"faq-parag mt-5",domProps:{innerHTML:t._s(e.answer)}})])])])})),1)],1)],1)],1)}),[],!1,null,"46abc195",null);e.default=component.exports;C()(component,{MobileHero:r(466).default,DesktopHero:r(467).default}),C()(component,{VCol:d.a,VContainer:f.a,VRow:v.a})}}]);