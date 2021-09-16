(function(t){function e(e){for(var i,a,r=e[0],c=e[1],l=e[2],_=0,d=[];_<r.length;_++)a=r[_],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},o={app:0},s=[];function a(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"de40c53a"}[t]+".js"}function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,i){n=o[t]=[e,i]}));e.push(n[2]=i);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=a(t);var l=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(_);var n=o[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",l.name="ChunkLoadError",l.type=i,l.request=s,n[1](l)}o[t]=void 0}};var _=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var _=0;_<c.length;_++)e(c[_]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"052f":function(t,e,n){},5579:function(t,e,n){"use strict";n("052f")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("TickTakToe")],1)},s=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.start_div?n("b-container",[n("b-row",[n("b-col",{staticClass:"first_class",attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6","offset-md":"3","offset-lg":"3","offset-xl":"3"}},[n("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"30rem"},attrs:{title:"TICK TAK TOE","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[n("b-card-text",[n("b-list-group-item",[t._v("BY AAQIB GOUHER")])],1),n("b-button",{attrs:{variant:"outline-info",size:"lg"},on:{click:function(e){return t.start_to_game_rules()}}},[t._v("START")])],1)],1)],1)],1):t._e(),t.game_rules_div?n("b-container",[n("b-row",[n("b-col",{staticClass:"second_class",attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[n("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"30rem"},attrs:{title:"Game Rules","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[n("b-card-text",[n("b-list-group-item",{attrs:{variant:"light"}},[t._v("1. The game is played on a grid that's 3 squares by 3 squares.")]),n("b-list-group-item",{attrs:{variant:"light"}},[t._v("2. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.")]),n("b-list-group-item",{attrs:{variant:"light"}},[t._v("3. When all 9 squares are full, the game is over.")])],1),n("b-button",{attrs:{variant:"outline-info",size:"md"},on:{click:function(e){return t.game_rules_to_choose_icon()}}},[t._v("NEXT")])],1)],1)],1)],1):t._e(),t.choose_icon_div?n("b-container",[n("b-row",[n("b-col",{staticClass:"third_class",attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[n("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"30rem"},attrs:{title:"Choose Icon","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[n("b-card-text",[n("b-row",[n("b-col",[n("b-form-group",{attrs:{label:"PLAYER A"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.ariaDescribedby;return[n("b-form-radio",{attrs:{"aria-describedby":i,name:"some-radios",value:"X"},on:{change:function(e){return t.select_icon_auto(t.selected_icon_a)}},model:{value:t.selected_icon_a,callback:function(e){t.selected_icon_a=e},expression:"selected_icon_a"}},[t._v(" X")]),n("b-form-radio",{attrs:{"aria-describedby":i,name:"some-radios",value:"0"},on:{change:function(e){return t.select_icon_auto(t.selected_icon_a)}},model:{value:t.selected_icon_a,callback:function(e){t.selected_icon_a=e},expression:"selected_icon_a"}},[t._v(" 0")])]}}],null,!1,3282491793)})],1),n("b-col",[n("b-card-text",[n("h6",[t._v("PLAYER B")])]),n("p",[t._v(t._s(t.selected_icon_b?t.selected_icon_b:"not selected"))])],1)],1)],1),n("b-button",{attrs:{disabled:t.choose_icon_div_ready_btn,variant:"outline-info",size:"lg"},on:{click:function(e){return t.start_game()}}},[t._v("READY")])],1)],1)],1)],1):t._e(),t.tick_tak_toe_div?n("b-container",[n("h2",{staticClass:"mt-5 font_style"},[t._v(t._s(this.result.winner_name+" "+this.result.message))]),this.count%2!=0&&this.count<=9&&!this.result.winner_name?n("h2",{staticClass:"mt-5 font_style"},[t._v(t._s(this.selected_icon_obj[0].name+" turn"))]):t._e(),this.count%2==0&&this.count<=9&&!this.result.winner_name?n("h2",{staticClass:"mt-5 font_style"},[t._v(t._s(this.selected_icon_obj[1].name+" turn"))]):t._e(),n("b-row",[n("b-col",{staticClass:"fourth_class",attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[n("b-col",[n("b-button",{staticClass:"btn_manage",attrs:{value:"1",id:"btn_1",variant:"outline-info",size:"lg"},on:{click:function(e){t.tick_tak_toe_start(+e.target.value)}}}),n("b-button",{staticClass:"btn_manage",attrs:{value:"2",id:"btn_2",variant:"outline-info",size:"lg"},on:{click:function(e){t.tick_tak_toe_start(+e.target.value)}}}),n("b-button",{staticClass:"btn_manage",attrs:{value:"3",id:"btn_3",variant:"outline-info",size:"lg"},on:{click:function(e){t.tick_tak_toe_start(+e.target.value)}}})],1),n("b-col",[n("b-button",{staticClass:"btn_manage",attrs:{value:"4",id:"btn_4",variant:"outline-info",size:"lg"},on:{click:function(e){t.tick_tak_toe_start(+e.target.value)}}}),n("b-button",{staticClass:"btn_manage",attrs:{value:"5",id:"btn_5",variant:"outline-info",size:"lg"},on:{click:function(e){t.tick_tak_toe_start(+e.target.value)}}}),n("b-button",{staticClass:"btn_manage",attrs:{value:"6",id:"btn_6",variant:"outline-info",size:"lg"},on:{click:function(e){t.tick_tak_toe_start(+e.target.value)}}})],1),n("b-col",[n("b-button",{staticClass:"btn_manage",attrs:{value:"7",id:"btn_7",variant:"outline-info",size:"lg"},on:{click:function(e){t.tick_tak_toe_start(+e.target.value)}}}),n("b-button",{staticClass:"btn_manage",attrs:{value:"8",id:"btn_8",variant:"outline-info",size:"lg"},on:{click:function(e){t.tick_tak_toe_start(+e.target.value)}}}),n("b-button",{staticClass:"btn_manage",attrs:{value:"9",id:"btn_9",variant:"outline-info",size:"lg"},on:{click:function(e){t.tick_tak_toe_start(+e.target.value)}}})],1),this.result.winner_name?n("b-button",{staticClass:"mt-5",attrs:{variant:"outline-danger",size:"lg"},on:{click:function(e){return t.reset()}}},[t._v("RESET")]):t._e()],1)],1)],1):t._e()],1)},r=[],c=(n("ac1f"),n("1276"),n("b0c0"),{name:"TikTakToe",data:function(){return{start_div:!0,game_rules_div:!1,choose_icon_div:!1,tick_tak_toe_div:!1,choose_icon_div_ready_btn:!0,selected_icon_obj:[{name:"player_A",icon:"",color:"",player_str:""},{name:"player_B",icon:"",color:"",player_str:""}],selected_icon_a:"",selected_icon_b:"",count:1,winner_array:["123","456","789","147","258","369","159","357"],result:{winner_name:"",message:""}}},methods:{hide_start_div:function(){this.start_div=!1},show_game_rules:function(){this.game_rules_div=!0},hide_game_rules:function(){this.game_rules_div=!1},show_choose_icon_div:function(){this.choose_icon_div=!0},hide_choose_icon_div:function(){this.choose_icon_div=!1},show_tick_tak_toe_div:function(){this.tick_tak_toe_div=!0},start_to_game_rules:function(){this.hide_start_div(),this.show_game_rules()},game_rules_to_choose_icon:function(){this.hide_game_rules(),this.show_choose_icon_div()},hide_tick_tak_toe_div:function(){this.tick_tak_toe_div=!1},select_icon_auto:function(t){"X"==t?(this.selected_icon_b="0",this.selected_icon_obj[0].icon=this.selected_icon_a,this.selected_icon_obj[0].color="grey",this.selected_icon_obj[1].icon=this.selected_icon_b,this.selected_icon_obj[1].color="red",this.choose_icon_div_ready_btn=!1):(this.selected_icon_b="X",this.selected_icon_obj[0].icon=this.selected_icon_a,this.selected_icon_obj[0].color="red",this.selected_icon_obj[1].icon=this.selected_icon_b,this.selected_icon_obj[1].color="grey",this.choose_icon_div_ready_btn=!1)},start_game:function(){this.hide_choose_icon_div(),this.show_tick_tak_toe_div()},get_id:function(t){return"btn_"+t},split_winner_array:function(t){return t.split("")},compare_player_str_and_split_winner_element:function(t,e){var n,i=0;if(t.length>=3)for(n in t)e.indexOf(t[n])+1&&i++;return i},disable_all_btn:function(){var t,e,n;for(t=1;t<=9;t++)e=this.get_id(t),n=document.getElementById(e),n.setAttribute("disabled",!1)},find_winner:function(){if(this.count%2!=0){var t,e,n=this.selected_icon_obj[0].player_str.split("");for(t in this.winner_array){e=this.split_winner_array(this.winner_array[t]);var i=this.compare_player_str_and_split_winner_element(n,e);3==i&&(this.result.winner_name=this.selected_icon_obj[0].name,this.result.message="Won",this.disable_all_btn())}9==this.count&&(this.result.winner_name="Match",this.result.message="Draw")}else{var o,s,a=this.selected_icon_obj[1].player_str.split("");for(o in this.winner_array){s=this.split_winner_array(this.winner_array[o]);var r=this.compare_player_str_and_split_winner_element(a,s);3==r&&(this.result.winner_name=this.selected_icon_obj[1].name,this.result.message="Won",this.disable_all_btn())}}},tick_tak_toe_start:function(t){var e=this.get_id(t);if(this.count%2!=0){this.selected_icon_obj[0].player_str+=t;var n=document.getElementById(e);n.innerHTML="<h2 style='color: "+this.selected_icon_obj[0].color+"'>"+this.selected_icon_obj[0].icon+"</h2>",n.setAttribute("disabled",!1),this.find_winner(),this.count++}else{this.selected_icon_obj[1].player_str+=t;var i=document.getElementById(e);i.innerHTML="<h2 style='color: "+this.selected_icon_obj[1].color+"'>"+this.selected_icon_obj[1].icon+"</h2>",i.setAttribute("disabled",!1),this.find_winner(),this.count++}},reset:function(){this.selected_icon_a="",this.selected_icon_b="",this.selected_icon_obj[0].icon="",this.selected_icon_obj[0].color="",this.selected_icon_obj[1].icon="",this.selected_icon_obj[1].color="",this.choose_icon_div_ready_btn=!0,this.result.winner_name="",this.result.message="",this.count=1,this.selected_icon_obj[0].player_str="",this.selected_icon_obj[1].player_str="",this.show_choose_icon_div(),this.hide_tick_tak_toe_div()}}}),l=c,_=(n("5579"),n("2877")),u=Object(_["a"])(l,a,r,!1,null,"5c630f3e",null),d=u.exports,h={name:"App",components:{TickTakToe:d}},b=h,f=(n("5c0b"),Object(_["a"])(b,o,s,!1,null,null,null)),m=f.exports,v=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h2",[t._v("Hello")])])}],y={name:"Home",components:{}},k=y,w=Object(_["a"])(k,g,p,!1,null,null,null),j=w.exports;i["default"].use(v["a"]);var C=[{path:"/",name:"Home",component:j},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/hello",name:"Hello",component:function(){return n.e("about").then(n.bind(null,"3ba4"))}}],T=new v["a"]({mode:"history",base:"/",routes:C}),x=T,E=n("5f5b"),O=n("b1e0");n("f9e3"),n("2dd8");i["default"].config.productionTip=!1,i["default"].use(E["a"]),i["default"].use(O["a"]),new i["default"]({router:x,render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.21f09d91.js.map