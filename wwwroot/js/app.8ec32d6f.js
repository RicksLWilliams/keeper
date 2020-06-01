(function(e){function t(t){for(var s,i,l=t[0],o=t[1],u=t[2],p=0,d=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);c&&c(t);while(d.length)d.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,l=1;l<a.length;l++){var o=a[l];0!==r[o]&&(s=!1)}s&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},r={app:0},n=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=o;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},n=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[e._v("Keepr")]),e._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"home"==e.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"home"}}},[e._v("Home")])],1),e.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"dashboard"==e.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"dashboard"}}},[e._v("My-Dashboard")])],1):e._e()]),a("span",{staticClass:"navbar-text"},[e.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",on:{click:e.logout}},[e._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:e.login}},[e._v(" Login ")])])])],1)},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],o=a("bc3a"),u=a.n(o);u.a.create({baseURL:"https://localhost:5001",withCredentials:!0});var c={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),console.log("this.$auth.user: "),console.log(this.$auth.user)},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})}}},p=c,d=a("2877"),h=Object(d["a"])(p,i,l,!1,null,null,null),v=h.exports,m=a("335d"),f={name:"App",async beforeCreate(){await Object(m["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer)},components:{Navbar:v}},b=f,g=(a("5c0b"),Object(d["a"])(b,r,n,!1,null,null,null)),_=g.exports,w=a("8c4f"),y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home container-fluid"},[a("h1",[e._v("Welcome Home: "+e._s(this.$auth.userInfo.sub))]),a("div",{staticClass:"row justify-content-center"},e._l(e.keeps,(function(e){return a("keep",{key:e.id,attrs:{keepData:e}})})),1)])},k=[],K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-3 m-3 border rounded"},[a("div",[this.userId==this.keepData.userId&&this.keepData.isPrivate?a("div",[a("button",{staticClass:"close text-danger",attrs:{type:"button"},on:{click:function(t){return e.deleteKeep()}}},[a("span",[e._v("×")])])]):e._e(),a("h1",[e._v(e._s(e.keepData.name))]),a("img",{staticClass:"img-fluid",attrs:{src:e.keepData.img,alt:"",srcset:""}}),a("h2",[e._v(e._s(e.keepData.description))]),a("h5",[e._v(e._s(e.keepData.userId))]),a("h5",[e._v("isPrivate: "+e._s(e.keepData.isPrivate))]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return e.editKeep("views")}}},[e._v("View("+e._s(e.keepData.views)+")")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return e.editKeep("shares")}}},[e._v("Share("+e._s(e.keepData.shares)+")")]),this.userId?a("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"select",on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?a:a[0]},function(t){return e.vaultKeep()}]}},[a("option",{attrs:{disabled:"",value:""}},[a("h3",{staticClass:"edit"},[e._v("Keep("+e._s(e.keepData.keeps)+")")])]),e._l(e.listItems,(function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])}))],2):e._e(),this.keepData.vaultKeepId?a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return e.deleteVaultKeep()}}},[e._v("Remove("+e._s(e.keepData.vaultKeepId)+")")]):e._e()])])},$=[],C={name:"Keep",props:["keepData"],data(){return{selected:""}},methods:{deleteKeep(){let e={};e.route="keeps/"+this.keepData.id,e.dispatch="getAllKeeps",e.path="keeps/mykeeps",this.$store.dispatch("deleteAny",e)},deleteVaultKeep(){let e={};e.route="vaultKeeps/"+this.keepData.vaultKeepId,e.dispatch="getAllKeeps",e.path="vaults/"+this.$router.currentRoute.params.vaultId+"/keeps",this.$store.dispatch("deleteAny",e)},editKeep(e){let t={};t["id"]=this.keepData.id,t[e]=1,this.$store.dispatch("editKeep",t)},vaultKeep(){let e={};e.vaultId=this.selected,e.keepId=this.keepData.id,e.route="vaultKeeps",this.$store.dispatch("addAny",e)}},computed:{userId(){return this.$auth.userInfo.sub?this.$auth.userInfo.sub:""},listItems(){return this.$store.state.vaults}}},A=C,V=Object(d["a"])(A,K,$,!1,null,null,null),x=V.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("h1",[e._v("Add Keep")]),a("h5"),a("form",{on:{submit:function(t){return t.preventDefault(),e.addKeep()}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newKeep.name,expression:"newKeep.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:"Enter name...."},domProps:{value:e.newKeep.name},on:{input:function(t){t.target.composing||e.$set(e.newKeep,"name",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[e._v("Description")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newKeep.description,expression:"newKeep.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:"Enter description...."},domProps:{value:e.newKeep.description},on:{input:function(t){t.target.composing||e.$set(e.newKeep,"description",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"img"}},[e._v("Img")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newKeep.img,expression:"newKeep.img"}],staticClass:"form-control",attrs:{type:"text",name:"img",placeholder:"Enter img...."},domProps:{value:e.newKeep.img},on:{input:function(t){t.target.composing||e.$set(e.newKeep,"img",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"isPrivate"}},[e._v("isPrivate")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newKeep.isPrivate,expression:"newKeep.isPrivate"}],staticClass:"form-control",attrs:{type:"checkbox",name:"isPrivate"},domProps:{checked:Array.isArray(e.newKeep.isPrivate)?e._i(e.newKeep.isPrivate,null)>-1:e.newKeep.isPrivate},on:{change:function(t){var a=e.newKeep.isPrivate,s=t.target,r=!!s.checked;if(Array.isArray(a)){var n=null,i=e._i(a,n);s.checked?i<0&&e.$set(e.newKeep,"isPrivate",a.concat([n])):i>-1&&e.$set(e.newKeep,"isPrivate",a.slice(0,i).concat(a.slice(i+1)))}else e.$set(e.newKeep,"isPrivate",r)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Add Keep")])])])},P=[],O={name:"keepAdd",data(){return{newKeep:{}}},mounted(){},computed:{},methods:{addKeep(){this.newKeep.route="keeps",this.newKeep.dispatch="getAllKeeps",this.newKeep.path="keeps/mykeeps",this.$store.dispatch("addKeep",this.newKeep),this.newKeep={}}}},I=O,j=Object(d["a"])(I,D,P,!1,null,null,null),E=j.exports,N={name:"home",data(){return{newKeep:{}}},mounted(){this.$store.dispatch("getAllKeeps","keeps"),this.$auth.userInfo.sub&&this.$store.dispatch("getVaults")},computed:{user(){return this.$store.state.user},keeps(){return this.$store.state.keeps}},methods:{logout(){this.$store.dispatch("logout")}},components:{Keep:x,KeepAdd:E}},S=N,T=Object(d["a"])(S,y,k,!1,null,null,null),M=T.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard container-fluid"},[a("h1",[e._v("WELCOME TO THE DASHBOARD")]),a("VaultAdd"),a("div",e._l(e.vaults,(function(e){return a("vault",{key:e.id,attrs:{vaultData:e}})})),1),a("KeepAdd"),a("div",{staticClass:"row justify-content-center"},e._l(e.keeps,(function(e){return a("keep",{key:e.id,attrs:{keepData:e}})})),1)],1)},B=[],R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"row  m-3 border rounded"},[a("div",{staticClass:"col-5 m-1",on:{click:function(t){return e.gotoVault()}}},[a("h1",[e._v("Name: "+e._s(e.vaultData.name))])]),a("div",{staticClass:"col-5 m-1"},[a("h2",[e._v("Description: "+e._s(e.vaultData.description))])]),a("div",{staticClass:"col-1 m-1"},[a("div",[a("button",{staticClass:"close text-danger",attrs:{type:"button"},on:{click:function(t){return e.deleteVault()}}},[a("span",[e._v("×")])])])])])])},U=[],H={name:"Vault",props:["vaultData"],data(){return{}},methods:{deleteVault(){let e={};e.route="vaults/"+this.vaultData.id,e.dispatch="getVaults",e.path="",this.$store.dispatch("deleteAny",e)},gotoVault(){this.$router.push({name:"vault",params:{vaultId:this.vaultData.id}})}}},L=H,W=Object(d["a"])(L,R,U,!1,null,null,null),z=W.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("h1",[e._v("Add Vault")]),a("h5"),a("form",{on:{submit:function(t){return t.preventDefault(),e.addVault()}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newVault.name,expression:"newVault.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:"Enter name...."},domProps:{value:e.newVault.name},on:{input:function(t){t.target.composing||e.$set(e.newVault,"name",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[e._v("Description")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newVault.description,expression:"newVault.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:"Enter description...."},domProps:{value:e.newVault.description},on:{input:function(t){t.target.composing||e.$set(e.newVault,"description",t.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Add Vault")])])])},q=[],F={name:"vaultAdd",data(){return{newVault:{}}},computed:{user(){return this.$store.state.user}},methods:{addVault(){this.newVault.route="vaults",this.newVault.dispatch="getVaults",this.$store.dispatch("addAny",this.newVault),this.newVault={}}}},G=F,Q=Object(d["a"])(G,X,q,!1,null,null,null),Y=Q.exports,Z={mounted(){this.$store.dispatch("getVaults"),this.$store.dispatch("getAllKeeps","keeps/mykeeps")},computed:{user(){return this.$store.state.user},vaults(){return this.$store.state.vaults},keeps(){return this.$store.state.keeps}},components:{Vault:z,VaultAdd:Y,Keep:x,KeepAdd:E}},ee=Z,te=Object(d["a"])(ee,J,B,!1,null,null,null),ae=te.exports,se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home container-fluid"},[a("h1",[e._v("Vault Details")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"select",on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?a:a[0]},function(t){return e.changeVault()}]}},[e._m(0),e._l(e.listItems,(function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])}))],2),a("div",{staticClass:"row justify-content-center"},e._l(e.keeps,(function(e){return a("keep",{key:e.vaultKeepid,attrs:{keepData:e}})})),1)])},re=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("option",{attrs:{disabled:"",value:""}},[a("h3",{staticClass:"edit"},[e._v("Keep")])])}],ne={name:"home",data(){return{newKeep:{},selected:""}},mounted(){let e="vaults/"+this.$route.params.vaultId+"/keeps";this.$store.dispatch("getAllKeeps",e),this.$store.dispatch("getVaults")},computed:{user(){return this.$store.state.user},keeps(){return this.$store.state.keeps},listItems(){return this.$store.state.vaults}},methods:{changeVault(){if(this.$route.params.vaultId!=this.selected){let e="vaults/"+this.selected+"/keeps";this.$store.dispatch("getAllKeeps",e),this.$router.push({name:"vault",params:{vaultId:this.selected}})}}},components:{Keep:x}},ie=ne,le=Object(d["a"])(ie,se,re,!1,null,null,null),oe=le.exports;s["a"].use(w["a"]);var ue=new w["a"]({routes:[{path:"/",name:"home",component:M},{path:"/dashboard",name:"dashboard",component:ae,beforeEnter:m["b"]},{path:"/vault/:vaultId",name:"vault",component:oe,beforeEnter:m["b"]}]}),ce=a("2f62");s["a"].use(ce["a"]);let pe=location.host.includes("localhost")?"https://localhost:5001/":"/",de=u.a.create({baseURL:pe+"api/",timeout:3e3,withCredentials:!0});var he=new ce["a"].Store({state:{keeps:[],vaults:[]},mutations:{setKeeps(e,t){e.keeps=t},setVaults(e,t){e.vaults=t},setAny(e,t){e[t.name]=t.payload}},actions:{setBearer({},e){de.defaults.headers.authorization=e},resetBearer(){de.defaults.headers.authorization=""},async getAllKeeps({commit:e,dispatch:t},a){try{let t=await de.get(a);e("setKeeps",t.data)}catch(s){alert(JSON.stringify(s))}},async getVaults({commit:e,dispatch:t},a){try{let t=await de.get("vaults");e("setVaults",t.data)}catch(s){alert(JSON.stringify(s))}},async editKeep({commit:e,dispatch:t},a){try{await de.put("keeps/"+a.id,a);t("getAllKeeps","keeps")}catch(s){alert(JSON.stringify(s))}},async deleteAny({commit:e,dispatch:t},a){try{await de.delete(a.route);this.dispatch(a.dispatch,a.path)}catch(s){alert(JSON.stringify(s))}},async addAny({commit:e,dispatch:t},a){try{await de.post(a.route,a);a.dispatch&&t(a.dispatch,a.path)}catch(s){alert(JSON.stringify(s))}}}});const ve="dev-x0hagl0b.auth0.com",me="https://gregslist.com",fe="XiNMTXrs6aM7Is2M6jzFcTWymqOKbU90";s["a"].use(m["a"],{domain:ve,clientId:fe,audience:me,onRedirectCallback:e=>{ue.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}}),new s["a"]({router:ue,store:he,render:function(e){return e(_)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var s=a("9c0c"),r=a.n(s);r.a},"9c0c":function(e,t,a){}});