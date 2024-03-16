import{a as wt,w as St,b as _t,e as ut,o as z,f as Y,j as Mt,u as nt,F as $t,r as Ut,c as qt,i as Et,k as Ht,t as Ft,l as Bt,m as zt,I as B,h as Kt,L as Qt,M as Jt}from"./entry.9e5cbd75.js";var rt={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GET_SIDE_MENU"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sidemenu"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"menulinks_id"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"status"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"StringValue",value:"published",block:!1}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sort"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:251}};rt.loc.source={body:`query GET_SIDE_MENU {
    sidemenu {
        items {
        	menulinks_id(filter: {status: {_eq: "published"}}) {
                id
                title
                url
                status
                sort
            }
        }
    }
}`,name:"GraphQL request",locationOffset:{line:1,column:1}};function Z(t,e){if(t.kind==="FragmentSpread")e.add(t.name.value);else if(t.kind==="VariableDefinition"){var i=t.type;i.kind==="NamedType"&&e.add(i.name.value)}t.selectionSet&&t.selectionSet.selections.forEach(function(n){Z(n,e)}),t.variableDefinitions&&t.variableDefinitions.forEach(function(n){Z(n,e)}),t.definitions&&t.definitions.forEach(function(n){Z(n,e)})}var ct={};(function(){rt.definitions.forEach(function(e){if(e.name){var i=new Set;Z(e,i),ct[e.name.value]=i}})})();function mt(t,e){for(var i=0;i<t.definitions.length;i++){var n=t.definitions[i];if(n.name&&n.name.value==e)return n}}function Xt(t,e){var i={kind:t.kind,definitions:[mt(t,e)]};t.hasOwnProperty("loc")&&(i.loc=t.loc);var n=ct[e]||new Set,o=new Set,a=new Set;for(n.forEach(function(s){a.add(s)});a.size>0;){var r=a;a=new Set,r.forEach(function(s){if(!o.has(s)){o.add(s);var c=ct[s]||new Set;c.forEach(function(u){a.add(u)})}})}return o.forEach(function(s){var c=mt(t,s);c&&i.definitions.push(c)}),i}Xt(rt,"GET_SIDE_MENU");const Yt={class:"pt-0"},Zt={class:"flex items-center justify-between flex-wrap bg-white-300 drop-shadow-lg mt-0 p-2"},te={key:0,class:"text-sm"},he=wt({__name:"SideMenu",async setup(t){let e,i;const{data:n}=([e,i]=St(()=>_t(rt)),e=await e,i(),e),o=ut(()=>{var a,r,s;return(s=(r=(a=n==null?void 0:n.value)==null?void 0:a.sidemenu)==null?void 0:r.items)==null?void 0:s.map(c=>c==null?void 0:c.menulinks_id)});return(a,r)=>{const s=zt;return z(),Y("div",Yt,[Mt("nav",Zt,[nt(o)?(z(),Y("div",te,[(z(!0),Y($t,null,Ut(nt(o),c=>(z(),qt(s,{to:c==null?void 0:c.url,class:"block m-2 text-red-700 hover:text-white"},{default:Et(()=>[Ht(Ft(c==null?void 0:c.title),1)]),_:2},1032,["to"]))),256))])):Bt("",!0)])])}}});function xt(t){return typeof t=="function"}function vt(){}var tt=function(t){this.previousValue=t,this.interrupted=!1,this.interruptHandlers=new Set};tt.prototype.throwIfInterrupted=function(){if(this.interrupted)throw new Error},tt.prototype.interrupt=function(){this.interrupted||(this.interrupted=!0,this.interruptHandlers.forEach(function(t){try{t()}catch{}}))},tt.prototype.onInterrupt=function(t){if(this.interrupted&&!this.interruptHandlers.has(t))try{t()}catch{}this.interruptHandlers.add(t)};function it(t){return function(){return t}}function Ot(){return[]}var ee={animationDuration:{type:Number,default:1e3},animationEasing:{type:String,default:"ease"},animationOverlap:{type:Number,default:1},color:{type:[String,Function],default:"Black"},createCanvas:{type:Function,default:function(){return document.createElement("canvas")}},createWorker:{type:Function,default:function(t){return new Worker(URL.createObjectURL(new Blob([t])))}},enterAnimation:{type:[Object,String],default:it({opacity:0})},fontFamily:{type:[String,Function],default:"serif"},fontSizeRatio:{type:Number,default:0},fontStyle:{type:[String,Function],default:"normal"},fontVariant:{type:[String,Function],default:"normal"},fontWeight:{type:[String,Function],default:"normal"},leaveAnimation:{type:[Object,String],default:it({opacity:0})},loadFont:{type:Function,default:function(t,e,i,n){return document.fonts.load([e,i,"1px",t].join(" "),n)}},rotation:{type:[Number,Function],default:0},rotationUnit:{type:[String,Function],default:"turn"},spacing:{type:Number,default:0},text:{type:[String,Function],default:""},weight:{type:[Number,Function],default:1},words:{type:Array,default:Ot}},ne=it(null);function lt(t){if(t){var e=typeof t;return e==="object"||e==="function"}return!1}function ft(t){return typeof t=="string"}var ie={animationOptions:function(){var t,e,i,n=this.animationDuration,o=this.enterAnimation,a=this.leaveAnimation;if(lt(o)&&lt(a)){var r=(t=Object.assign({},o,a),e=ne,i={},Object.entries(t).forEach(function(u){var l=u[0],f=u[1];i[l]=e(f,l,t)}),i),s=function(u){Object.assign(u.style,o)},c=function(u,l){setTimeout(function(){Object.assign(u.style,r),setTimeout(l,n)},1)};return{props:{css:!1},on:{beforeAppear:s,appear:c,beforeEnter:s,enter:c,leave:function(u,l){Object.assign(u.style,a),setTimeout(l,n)}}}}return ft(o)&&ft(a)?{props:{duration:n,appear:!0,appearActiveClass:o,enterActiveClass:o,leaveActiveClass:a}}:{}},normalizedAnimationOverlap:function(){var t=this.animationOverlap;return(t=Math.abs(t))<1&&(t=1/t),t},separateAnimationDelay:function(){var t=this.cloudWords;return t.length>1?(this.animationDuration-this.separateAnimationDuration)/(t.length-1):0},separateAnimationDuration:function(){var t=this.cloudWords;if(t.length>0){var e=this.animationDuration,i=this.normalizedAnimationOverlap;return e/Math.min(i,t.length)}return 0}},re=Array.isArray;function W(t){return xt(t)?t:it(t)}var jt=2*Math.PI,ae=jt/360;function T(t){return t===void 0}function C(t,e){return t.postMessage(e),function(i){return new Promise(function(n,o){var a,r=function(c){var u=c.data;a(),n(u)},s=function(c){var u=c.error;a(),o(u)};a=function(){i.removeEventListener("message",r),i.removeEventListener("error",s)},i.addEventListener("message",r),i.addEventListener("error",s)})}(t)}function pt(t,e,i){return Math.ceil(t*Math.abs(Math.sin(i))+e*Math.abs(Math.cos(i)))}function gt(t,e,i){return Math.ceil(t*Math.abs(Math.cos(i))+e*Math.abs(Math.sin(i)))}function st(t,e,i,n,o){return[t,e,i,n+"px",o].join(" ")}function kt(t,e){return Math.ceil(t/e)*e}function yt(t,e,i){var n=i().getContext("2d");return n.font=e,n.measureText(t).width}var Nt=function(t,e,i,n,o,a,r){this.t=t,this.i=e,this.o=i,this.u=n,this.s=o,this.h=a,this.l=r,this.v=1,this.m=0,this.p=0,this.g=0},v={M:{configurable:!0},S:{configurable:!0},F:{configurable:!0},j:{configurable:!0},O:{configurable:!0},W:{configurable:!0},A:{configurable:!0},B:{configurable:!0},C:{configurable:!0},L:{configurable:!0},_:{configurable:!0},P:{configurable:!0},T:{configurable:!0},N:{configurable:!0},k:{configurable:!0},D:{configurable:!0},H:{configurable:!0},R:{configurable:!0},U:{configurable:!0}};v.M.get=function(){return this.v},v.M.set=function(t){this.v!==t&&(this.v=t,this.V=void 0)},v.S.get=function(){return st(this.h,this.s,this.u,this.M,this.o)},v.F.get=function(){return this.q===void 0&&(this.q=yt(this.t,st(this.h,this.s,this.u,1,this.o),this.l)),this.q},v.j.get=function(){return this.F*this.M},v.O.get=function(){return this.p*this.M},v.O.set=function(t){this.p=t/this.M},v.W.get=function(){return this.g*this.M},v.W.set=function(t){this.g=t/this.M},v.A.get=function(){return gt(this.j,this.M,this.i)},v.B.get=function(){return pt(this.j,this.M,this.i)},v.C.get=function(){return this.O-this.A/2},v.L.get=function(){return this.W-this.B/2},v._.get=function(){return this.m},v._.set=function(t){this.m!==t&&(this.m=t,this.V=void 0)},v.P.get=function(){return this.V===void 0&&(this.V=function(t,e,i,n,o,a,r,s,c){var u=st(e,i,n,o*=4,a),l=r*o*2,f=l+yt(t,u,c),b=l+o,S=c(),_=S.getContext("2d"),A=kt(gt(f,b,s),4),L=kt(pt(f,b,s),4);S.width=A,S.height=L,_.translate(A/2,L/2),_.rotate(s),_.font=u,_.textAlign="center",_.textBaseline="middle",_.fillText(t,0,0),l>0&&(_.miterLimit=1,_.lineWidth=l,_.strokeText(t,0,0));for(var P=_.getImageData(0,0,A,L).data,G=[],I=1/0,$=0,V=1/0,U=0,K=A/4,Q=L/4,D=0;D<K;++D)for(var R=0;R<Q;++R)t:for(var q=0;q<4;++q)for(var H=0;H<4;++H)if(P[4*(A*(4*R+H)+(4*D+q))+3]){G.push([D,R]),I=Math.min(D,I),$=Math.max(D+1,$),V=Math.min(R,V),U=Math.max(R+1,U);break t}return G.length>0?[G.map(function(J){var ot=J[0],h=J[1];return[ot-I,h-V]}),$-I,U-V,Math.ceil(K/2)-I,Math.ceil(Q/2)-V]:[G,0,0,0,0]}(this.t,this.h,this.s,this.u,this.M,this.o,this._,this.i,this.l)),this.V},v.T.get=function(){return this.P[0]},v.N.get=function(){return this.P[1]},v.k.get=function(){return this.P[2]},v.D.get=function(){return this.P[3]},v.H.get=function(){return this.P[4]},v.R.get=function(){return Math.ceil(this.O)-this.D},v.R.set=function(t){this.O=t+this.D},v.U.get=function(){return Math.ceil(this.W)-this.H},v.U.set=function(t){this.W=t+this.H},Object.defineProperties(Nt.prototype,v);var oe={cloudWords:function(t){this.$emit("update:cloudWords",t)},progress:{handler:function(t){this.$emit("update:progress",t)},deep:!0,immediate:!0}},se={updateElementSize:function(){var t=this.$el;t&&(this.elementWidth=t.offsetWidth,this.elementHeight=t.offsetHeight)}},ue={name:"VueWordCloud",mixins:[function(t){return{data:function(){var e={};return Object.keys(t).forEach(function(i){e["asyncComputed_trigger_"+i]={}}),e},computed:{},beforeCreate:function(){var e=this,i=new Set;Object.entries(t).forEach(function(n){var o=n[0],a=n[1],r=a.get,s=a.default,c=a.errorHandler;c===void 0&&(c=vt);var u,l=!0;e.$options.computed[o]=function(){return this["asyncComputed_trigger_"+o],this["asyncComputed_promise_"+o],s},e.$options.computed["asyncComputed_promise_"+o]=function(){var f=this;u&&(u.interrupt(),i.delete(u)),l&&(l=!1,xt(s)&&(s=s.call(this)));var b=new tt(s);u=b,i.add(u),new Promise(function(S){S(r.call(f,b))}).then(function(S){b.throwIfInterrupted(),s=S,f["asyncComputed_trigger_"+o]={}}).catch(c)}})}}}({cloudWords:{get:function(t){var e,i=this,n=this,o=n.elementWidth,a=n.elementHeight,r=n.words,s=n.text,c=n.weight,u=n.rotation,l=n.rotationUnit,f=n.fontFamily,b=n.fontWeight,S=n.fontVariant,_=n.fontStyle,A=n.color,L=n.spacing,P=n.fontSizeRatio,G=n.createCanvas,I=n.loadFont,$=n.createWorker;e=P,P=(e=Math.abs(e))>1?1/e:e;var V=function(h){var p=h[0],w=h[1];return p>w?[1,w/p]:w>p?[p/w,1]:[1,1]}([o,a]);if(o>0&&a>0){var U=W(s),K=W(c),Q=W(u),D=W(l),R=W(f),q=W(b),H=W(S),J=W(_),ot=W(A);return r=r.map(function(h,p){var w,k,O,M,j,d,m,g,F,E,N;h&&(ft(h)?O=h:re(h)?(O=(w=h)[0],M=w[1]):lt(h)&&(O=(k=h).text,M=k.weight,j=k.rotation,d=k.rotationUnit,m=k.fontFamily,g=k.fontWeight,F=k.fontVariant,E=k.fontStyle,N=k.color)),T(O)&&(O=U(h,p,r)),T(M)&&(M=K(h,p,r)),T(j)&&(j=Q(h,p,r)),T(d)&&(d=D(h,p,r)),T(m)&&(m=R(h,p,r)),T(g)&&(g=q(h,p,r)),T(F)&&(F=H(h,p,r)),T(E)&&(E=J(h,p,r)),T(N)&&(N=ot(h,p,r));var x=new Nt(O,function(){switch(d){case"turn":return j*jt;case"deg":return function(y){return y*ae}(j)}return j}(),m,g,F,E,G);return Object.assign(x,{J:h,G:M,I:N}),x}),Promise.resolve().then(function(){return Promise.all(r.map(function(h){var p=h.o,w=h.h,k=h.u,O=h.t;return I(p,w,k,O)}))}).catch(vt).then(function(){if((r=r.filter(function(d){return d.j>0}).sort(function(d,m){return m.G-d.G})).length>0){var h=r[0],p=function(d){return d[m=d,m.length-1];var m}(r),w=h.G,k=p.G;if(k<w){var O=P>0?1/P:k>0?w/k:w<0?k/w:1+w-k;r.forEach(function(d){var m,g,F;d.M=(m=d.G,(F=1)+(m-(g=k))*(O-F)/(w-g))})}r.reduceRight(function(d,m){return m.M<2*d?m.M/=d:(d=m.M,m.M=1),m.K=d},1),r.forEach(function(d){d.M*=4});var M=$(`!function(){"use strict";var r=function(t){self.removeEventListener("message",r);var n,e,a,f,i,u=t.data,o=function(){n={},e=0,a=0,f=0,i=0};o();var s=function(){return Math.ceil((e+a)/2)},v=function(){return Math.ceil((f+i)/2)},c=function(){return{left:s(),top:v(),width:a-e,height:i-f}},l=function(r,t,u){r.forEach((function(r){var o=r[0],s=r[1],v=t+o,c=u+s;n[v+"|"+c]=!0,e=Math.min(v,e),a=Math.max(v+1,a),f=Math.min(c,f),i=Math.max(c+1,i)}))},h=function(r,t,e){return function(r,t,n){var e,a,f=r[0],i=r[1],u=t[0],o=t[1];f>i?(e=1,a=i/f):i>f?(a=1,e=f/i):e=a=1;var s=[u,o];if(n(s))return s;for(var v=u,c=o,l=u,h=o,M=v,d=c;;){u-=e,o-=a,v+=e,c+=a;var m=Math.floor(u),g=Math.floor(o),p=Math.ceil(v),E=Math.ceil(c);if(p>M)for(var L=g;L<E;++L){var x=[p,L];if(n(x))return x}if(E>d)for(var y=p;y>m;--y){var w=[y,E];if(n(w))return w}if(m<l)for(var B=E;B>g;--B){var F=[m,B];if(n(F))return F}if(g<h)for(var b=m;b<p;++b){var j=[b,g];if(n(j))return j}l=m,h=g,M=p,d=E}}(u,[t+s(),e+v()],(function(t){var e=t[0],a=t[1];return function(r,t,e){return r.every((function(r){var a=r[0],f=r[1];return!n[t+a+"|"+(e+f)]}))}(r,e,a)}))};self.postMessage({}),self.addEventListener("message",(function(r){self.postMessage({getBounds:c,put:l,findFit:h,clear:o}[r.data.name].apply(null,r.data.args))}))};self.addEventListener("message",r)}();
`),j={completedWords:0,totalWords:r.length};return Promise.resolve().then(function(){return t.throwIfInterrupted(),i.progress=j,C(M,V)}).then(function(){t.throwIfInterrupted(),j.completedWords++;var d=Promise.resolve();return r.reduce(function(m,g,F){return d=d.then(function(){return g.K<m.K?Promise.resolve().then(function(){return C(M,{name:"clear"})}).then(function(){var E=Promise.resolve(),N=m.K/g.K;return r.slice(0,F).forEach(function(x){E=E.then(function(){return x.M*=N,C(M,{name:"put",args:[x.T,x.R,x.U]})})}),E}):C(M,{name:"put",args:[m.T,m.R,m.U]})}).then(function(){return g._=L,C(M,{name:"findFit",args:[g.T,g.R,g.U]})}).then(function(E){var N=E[0],x=E[1];t.throwIfInterrupted(),j.completedWords++,g.R=N,g.U=x,g._=0}),g}),d}).then(function(){return C(M,{name:"put",args:[p.T,p.R,p.U]})}).then(function(){return C(M,{name:"getBounds"})}).then(function(d){var m=d.left,g=d.top,F=d.width,E=d.height;if(F>0&&E>0){var N=Math.min(o/F,a/E);r.forEach(function(y){y.O-=m,y.W-=g,y.M*=N})}var x=new Set;return r.map(function(y){for(var At=y.J,ht=y.t,Wt=y.G,Tt=y.i,Dt=y.o,Rt=y.u,It=y.s,Vt=y.h,Ct=y.S,Lt=y.O,Pt=y.W,Gt=y.I,X=JSON.stringify([ht,Dt,Rt,It,Vt]);x.has(X);)X+="!";return x.add(X),{key:X,word:At,text:ht,weight:Wt,rotation:Tt,font:Ct,color:Gt,left:Lt,top:Pt}})}).finally(function(){M.terminate()}).finally(function(){t.throwIfInterrupted(),i.progress=null})}return[]})}return[]},default:Ot}})],props:ee,data:function(){return{elementWidth:0,elementHeight:0,progress:null}},computed:ie,watch:oe,mounted:function(){var t,e,i=this;t=function(){if(i._isDestroyed)return!1;i.updateElementSize()},e=1e3,function(n){var o=function(){for(var a=[],r=arguments.length;r--;)a[r]=arguments[r];return n.call.apply(n,[this,o].concat(a))};return o}(function(n){requestAnimationFrame(function(){t()!==!1&&setTimeout(n,e)})})()},methods:se,render:function(){var t=this.$slots,e=this.animationEasing,i=this.animationOptions,n=this.cloudWords,o=this.separateAnimationDelay,a=this.separateAnimationDuration;return t=Object.assign({},{default:function(r){return r.text}},t),B("div",{style:{height:"100%",position:"relative",width:"100%"}},[B("div",{style:{bottom:"50%",position:"absolute",right:"50%",transform:"translate(50%,50%)"}},n.map(function(r,s){var c=r.color,u=r.font,l=r.left,f=r.rotation,b=r.text,S=r.top,_=r.weight,A=r.word;return B("transition",Object.assign({},i),[B("div",{key:s,style:Object.assign({},{left:l+"px",position:"absolute",top:S+"px"},a>0?{animation:[a+"ms",e,o*s+"ms"].join(" "),transition:["all",a+"ms",e,o*s+"ms"].join(" ")}:{})},[B("div",{style:Object.assign({},{bottom:"50%",color:c,font:u,position:"absolute",right:"50%",transform:["translate(50%,50%)","rotate("+f+"rad)"].join(" "),whiteSpace:"nowrap"},a>0?{transition:["all",a+"ms",e,o*s+"ms"].join(" ")}:{})},[t.default({color:c,font:u,left:l,text:b,top:S,weight:_,word:A})])])])}))])}},at={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GET_TAGS"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tags"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"status"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"StringValue",value:"published",block:!1}}]}}]}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"30"}},{kind:"Argument",name:{kind:"Name",value:"page"},value:{kind:"IntValue",value:"1"}},{kind:"Argument",name:{kind:"Name",value:"sort"},value:{kind:"StringValue",value:"-count(articles)",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"articles_func"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:221}};at.loc.source={body:`query GET_TAGS {
    tags (filter: {status: {_eq: "published"}}, limit: 30, page: 1, sort: "-count(articles)") {
        id
        name
        slug
        status
        articles_func {
            count
        }
	}
}`,name:"GraphQL request",locationOffset:{line:1,column:1}};function et(t,e){if(t.kind==="FragmentSpread")e.add(t.name.value);else if(t.kind==="VariableDefinition"){var i=t.type;i.kind==="NamedType"&&e.add(i.name.value)}t.selectionSet&&t.selectionSet.selections.forEach(function(n){et(n,e)}),t.variableDefinitions&&t.variableDefinitions.forEach(function(n){et(n,e)}),t.definitions&&t.definitions.forEach(function(n){et(n,e)})}var dt={};(function(){at.definitions.forEach(function(e){if(e.name){var i=new Set;et(e,i),dt[e.name.value]=i}})})();function bt(t,e){for(var i=0;i<t.definitions.length;i++){var n=t.definitions[i];if(n.name&&n.name.value==e)return n}}function ce(t,e){var i={kind:t.kind,definitions:[bt(t,e)]};t.hasOwnProperty("loc")&&(i.loc=t.loc);var n=dt[e]||new Set,o=new Set,a=new Set;for(n.forEach(function(s){a.add(s)});a.size>0;){var r=a;a=new Set,r.forEach(function(s){if(!o.has(s)){o.add(s);var c=dt[s]||new Set;c.forEach(function(u){a.add(u)})}})}return o.forEach(function(s){var c=bt(t,s);c&&i.definitions.push(c)}),i}ce(at,"GET_TAGS");const le={class:"p-4 text-red-800"},fe=["title","onClick"],me=wt({__name:"TagCloud",props:{height:{default:200}},async setup(t){let e,i;const{data:n}=([e,i]=St(()=>_t(at,{pageSize:100})),e=await e,i(),e),o=ut(()=>{var l,f;let u=new Map;return(f=(l=n==null?void 0:n.value)==null?void 0:l.tags)==null||f.reduce((b,S)=>(b.set(S.name,S),b),u),u}),a=ut(()=>{var u,l;return(l=(u=n==null?void 0:n.value)==null?void 0:u.tags)==null?void 0:l.map(f=>{var b;return{text:f==null?void 0:f.name,weight:(b=f==null?void 0:f.articles_func)==null?void 0:b.count,url:f==null?void 0:f.slug}})}),r=u=>{const l=[.125,.875],f=Math.floor(Math.random()*l.length);return l[f]},s=u=>{const l=["#555555","#553333","#775555","#333333"],f=Math.floor(Math.random()*l.length);return l[f]},c=async u=>{const l=o.value.get(u),f=l==null?void 0:l.slug;await Jt(f)};return(u,l)=>(z(),Y("div",le,[Kt(nt(ue),{style:Qt(`height: ${u.height}px;`),words:nt(a),rotation:f=>r(),color:f=>s(),"font-family":"Noto Serif TC","font-size-ratio":3,spacing:.1},{default:Et(f=>[Mt("div",{title:f.weight,class:"hover:text-white",style:{cursor:"pointer"},onClick:b=>c(f.text)},Ft(f.text),9,fe)]),_:1},8,["style","words","rotation","color"])]))}});export{he as _,me as a};