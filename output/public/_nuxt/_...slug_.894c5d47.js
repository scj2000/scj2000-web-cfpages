import{_ as L,a as z,b as H}from"./ArticleCard.vue.748cc1d4.js";import{a as w,w as R,b as G,e as v,o as k,f as g,h as S,i as A,j as f,t as y,u,F as j,r as q,c as b,k as P,l as E,m as Q,p as B}from"./entry.be424422.js";var x={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GET_TAG"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"tag"},name:{kind:"Name",value:"tags_by_id"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"articles"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"articles_id"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cover_image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"folder"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"filename_disk"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filename_download"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filesize"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:576}};x.loc.source={body:`query GET_TAG($id: ID!){
    tag: tags_by_id(id: $id) {
        id
        name
        slug
        status
        articles {
            articles_id {
                id
                title
                cover_image {
                    id
                    folder {
                        name
                    }
                    filename_disk
                    filename_download
                    type
                    description
                    filesize
                }
                summary
                slug
            }
        }
	}
}`,name:"GraphQL request",locationOffset:{line:1,column:1}};function h(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){h(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){h(t,n)}),e.definitions&&e.definitions.forEach(function(t){h(t,n)})}var $={};(function(){x.definitions.forEach(function(n){if(n.name){var i=new Set;h(n,i),$[n.name.value]=i}})})();function V(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function I(e,n){var i={kind:e.kind,definitions:[V(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=$[n]||new Set,a=new Set,d=new Set;for(t.forEach(function(l){d.add(l)});d.size>0;){var m=d;d=new Set,m.forEach(function(l){if(!a.has(l)){a.add(l);var r=$[l]||new Set;r.forEach(function(s){d.add(s)})}})}return a.forEach(function(l){var r=V(e,l);r&&i.definitions.push(r)}),i}I(x,"GET_TAG");const M={class:"text-xl font-bold text-red-500 hover:text-white font-kai mb-2"},J={key:0,class:"text-sm"},K=w({__name:"TagArticleLinks",props:{id:{}},async setup(e){let n,i;const t=e,{data:a}=([n,i]=R(()=>G(x,{id:t.id})),n=await n,i(),n),d=v(()=>{var r,s,c;return(c=(s=(r=a==null?void 0:a.value)==null?void 0:r.tag)==null?void 0:s.articles)==null?void 0:c.map(o=>o==null?void 0:o.articles_id)}),m=v(()=>{var r,s;return(s=(r=a==null?void 0:a.value)==null?void 0:r.tag)==null?void 0:s.name}),l=v(()=>{var r,s;return(s=(r=a==null?void 0:a.value)==null?void 0:r.tag)==null?void 0:s.slug});return(r,s)=>{const c=Q;return k(),g("article",null,[S(c,{to:u(l)},{default:A(()=>[f("h3",M,y(u(m)),1)]),_:1},8,["to"]),u(d)?(k(),g("div",J,[(k(!0),g(j,null,q(u(d),o=>(k(),b(c,{to:o==null?void 0:o.slug,class:"block m-2 text-red-300 hover:text-white"},{default:A(()=>[P(y(o==null?void 0:o.title),1)]),_:2},1032,["to"]))),256))])):E("",!0)])}}}),U={class:"text-3xl font-bold text-red-500 font-kai mb-2"},W=["innerHTML"],X=w({__name:"ArticleContent",props:{data:{}},setup(e){const n=e,i=v(()=>{var a;return(a=n.data)==null?void 0:a.title}),t=v(()=>{var a;return(a=n.data)==null?void 0:a.body});return(a,d)=>(k(),g("article",null,[f("h1",U,y(u(i)),1),f("div",{innerHTML:u(t)},null,8,W)]))}}),Y={class:"text-3xl font-bold text-red-500 font-kai mb-2"},Z={class:"grid grid-cols-1 gap-2 md:grid-cols-2 text-sm"},ee=w({__name:"TagContent",props:{data:{}},setup(e){const n=e,i=v(()=>{var a,d;return(d=(a=n.data)==null?void 0:a.articles)==null?void 0:d.map(m=>m==null?void 0:m.articles_id)}),t=v(()=>{var a;return(a=n.data)==null?void 0:a.name});return(a,d)=>{const m=L;return k(),g("article",null,[f("h1",Y,y(u(t)),1),f("div",Z,[(k(!0),g(j,null,q(u(i),l=>(k(),b(m,{data:l},null,8,["data"]))),256))])])}}});var T={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GET_PATH"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"path"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"articles"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"slug"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"path"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"body"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tags"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tags_id"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"tags"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"slug"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"path"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"articles"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"articles_id"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cover_image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"folder"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"filename_disk"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filename_download"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filesize"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:803}};T.loc.source={body:`query GET_PATH($path: String!){
    articles (filter: {slug: {_eq: $path}}) {
        id
        title
        body
        tags {
            tags_id {
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
            articles_id {
                id
                title
                cover_image {
                    id
                    folder {
                        name
                    }
                    filename_disk
                    filename_download
                    type
                    description
                    filesize
                }
                summary
                slug
            }
        }
	}
}`,name:"GraphQL request",locationOffset:{line:1,column:1}};function F(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){F(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){F(t,n)}),e.definitions&&e.definitions.forEach(function(t){F(t,n)})}var D={};(function(){T.definitions.forEach(function(n){if(n.name){var i=new Set;F(n,i),D[n.name.value]=i}})})();function O(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function ne(e,n){var i={kind:e.kind,definitions:[O(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=D[n]||new Set,a=new Set,d=new Set;for(t.forEach(function(l){d.add(l)});d.size>0;){var m=d;d=new Set,m.forEach(function(l){if(!a.has(l)){a.add(l);var r=D[l]||new Set;r.forEach(function(s){d.add(s)})}})}return a.forEach(function(l){var r=O(e,l);r&&i.definitions.push(r)}),i}ne(T,"GET_PATH");const ie={class:"grid grid-cols-12 gap-2"},ae={class:"hidden lg:col-span-3 2xl:col-span-2 lg:block mx-2 lg:mr-0 bg-gray-500 shadow-lg h-full"},te={class:"p-2"},se={key:0,class:"p-2"},de={class:"p-2"},le={class:"col-span-12 my-2 lg:m-2 p-2 bg-gray-100 shadow-lg lg:col-span-9 2xl:col-span-10 lg:ml-0"},oe=w({__name:"[...slug]",async setup(e){let n,i;const a="/"+[B().params.slug].flat().filter(s=>s).join("/"),{data:d}=([n,i]=R(()=>G(T,{path:a})),n=await n,i(),n),m=v(()=>{var s,c;return(c=(s=d.value)==null?void 0:s.articles)==null?void 0:c[0]}),l=v(()=>{var s,c,o,_,p,N;return(N=(p=(_=(o=(c=(s=d.value)==null?void 0:s.articles)==null?void 0:c[0])==null?void 0:o.tags)==null?void 0:_[0])==null?void 0:p.tags_id)==null?void 0:N.id}),r=v(()=>{var s,c;return(c=(s=d.value)==null?void 0:s.tags)==null?void 0:c[0]});return(s,c)=>{const o=z,_=K,p=H,N=X,C=ee;return k(),g("div",ie,[f("div",ae,[f("section",te,[S(o)]),u(l)?(k(),g("section",se,[S(_,{id:u(l)},null,8,["id"])])):E("",!0),f("section",de,[S(p)])]),f("div",le,[u(m)?(k(),b(N,{key:0,data:u(m)},null,8,["data"])):u(r)?(k(),b(C,{key:1,data:u(r)},null,8,["data"])):E("",!0)])])}}});export{oe as default};
