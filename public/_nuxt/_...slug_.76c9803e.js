import{_ as R,a as G}from"./TagCloud.vue.5e3f66a1.js";import{a as x,w as V,b as O,e as f,o as m,f as k,h as v,t as F,u as o,F as j,r as q,i as w,c as A,j as C,k as L,l as H,m as P,p as y}from"./entry.36f8ec1f.js";var S={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GET_TAG"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"tag"},name:{kind:"Name",value:"tags_by_id"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"articles"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"article"},name:{kind:"Name",value:"articles_id"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:276}};S.loc.source={body:`query GET_TAG($id: ID!){
    tag: tags_by_id(id: $id) {
        id
        name
        slug
        status
        articles {
            article: articles_id {
                id
                title
                summary
                slug
            }
        }
	}
}`,name:"GraphQL request",locationOffset:{line:1,column:1}};function h(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){h(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){h(a,n)}),e.definitions&&e.definitions.forEach(function(a){h(a,n)})}var T={};(function(){S.definitions.forEach(function(n){if(n.name){var i=new Set;h(n,i),T[n.name.value]=i}})})();function D(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function Q(e,n){var i={kind:e.kind,definitions:[D(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=T[n]||new Set,l=new Set,d=new Set;for(a.forEach(function(t){d.add(t)});d.size>0;){var u=d;d=new Set,u.forEach(function(t){if(!l.has(t)){l.add(t);var s=T[t]||new Set;s.forEach(function(c){d.add(c)})}})}return l.forEach(function(t){var s=D(e,t);s&&i.definitions.push(s)}),i}Q(S,"GET_TAG");const B={class:"text-xl font-bold text-red-500 font-kai mb-2"},I={key:0,class:"text-sm"},M=x({__name:"Tag",props:{id:{}},async setup(e){let n,i;const a=e,{data:l}=([n,i]=V(()=>O(S,{id:a.id})),n=await n,i(),n),d=f(()=>{var t,s,c;return(c=(s=(t=l==null?void 0:l.value)==null?void 0:t.tag)==null?void 0:s.articles)==null?void 0:c.map(r=>r==null?void 0:r.article)}),u=f(()=>{var t,s;return(s=(t=l==null?void 0:l.value)==null?void 0:t.tag)==null?void 0:s.name});return(t,s)=>{const c=H;return m(),k("article",null,[v("h3",B,F(o(u)),1),o(d)?(m(),k("div",I,[(m(!0),k(j,null,q(o(d),r=>(m(),A(c,{to:r==null?void 0:r.slug,class:"block m-2 text-red-300 hover:text-white"},{default:C(()=>[L(F(r==null?void 0:r.title),1)]),_:2},1032,["to"]))),256))])):w("",!0)])}}}),z={class:"text-3xl font-bold text-red-500 font-kai mb-2"},J=["innerHTML"],K=x({__name:"ArticleContent",props:{data:{}},setup(e){const n=e,i=f(()=>{var l;return(l=n.data)==null?void 0:l.title}),a=f(()=>{var l;return(l=n.data)==null?void 0:l.body});return(l,d)=>(m(),k("article",null,[v("h1",z,F(o(i)),1),v("div",{innerHTML:o(a)},null,8,J)]))}});var b={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GET_PATH"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"path"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"articles"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"slug"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"path"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"body"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tags"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"tag"},name:{kind:"Name",value:"tags_id"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"tags"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"slug"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"path"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"articles"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"article"},name:{kind:"Name",value:"articles_id"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:508}};b.loc.source={body:`query GET_PATH($path: String!){
    articles (filter: {slug: {_eq: $path}}) {
        id
        title
        body
        tags {
            tag: tags_id {
                id
                name
                slug
            }
        }
	}
    tags (filter: {slug: {_eq: $path}}) {
        id
        name
        slug
        status
        articles {
            article: articles_id {
                id
                title
                summary
                slug
            }
        }
	}
}`,name:"GraphQL request",locationOffset:{line:1,column:1}};function N(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){N(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){N(a,n)}),e.definitions&&e.definitions.forEach(function(a){N(a,n)})}var E={};(function(){b.definitions.forEach(function(n){if(n.name){var i=new Set;N(n,i),E[n.name.value]=i}})})();function $(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function U(e,n){var i={kind:e.kind,definitions:[$(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=E[n]||new Set,l=new Set,d=new Set;for(a.forEach(function(t){d.add(t)});d.size>0;){var u=d;d=new Set,u.forEach(function(t){if(!l.has(t)){l.add(t);var s=E[t]||new Set;s.forEach(function(c){d.add(c)})}})}return l.forEach(function(t){var s=$(e,t);s&&i.definitions.push(s)}),i}U(b,"GET_PATH");const W={class:"grid grid-cols-12 gap-2"},X={class:"hidden lg:col-span-3 2xl:col-span-2 lg:block mx-2 lg:mr-0 bg-gray-500 shadow-lg h-full"},Y={class:"p-2"},Z={key:0,class:"p-2"},ee={class:"p-2"},ne={class:"col-span-12 my-2 lg:m-2 p-2 bg-gray-100 shadow-lg lg:col-span-9 2xl:col-span-10 lg:ml-0"},te=x({__name:"[...slug]",async setup(e){let n,i;const l="/"+[P().params.slug].flat().filter(s=>s).join("/"),{data:d}=([n,i]=V(()=>O(b,{path:l})),n=await n,i(),n),u=f(()=>{var s,c;return(c=(s=d.value)==null?void 0:s.articles)==null?void 0:c[0]}),t=f(()=>{var s,c,r,g,_,p;return(p=(_=(g=(r=(c=(s=d.value)==null?void 0:s.articles)==null?void 0:c[0])==null?void 0:r.tags)==null?void 0:g[0])==null?void 0:_.tag)==null?void 0:p.id});return(s,c)=>{const r=R,g=M,_=G,p=K;return m(),k("div",W,[v("div",X,[v("section",Y,[y(r)]),o(t)?(m(),k("section",Z,[y(g,{id:o(t)},null,8,["id"])])):w("",!0),v("section",ee,[y(_)])]),v("div",ne,[o(u)?(m(),A(p,{key:0,data:o(u)},null,8,["data"])):w("",!0)])])}}});export{te as default};
