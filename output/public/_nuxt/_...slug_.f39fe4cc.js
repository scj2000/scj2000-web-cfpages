import{a as y,b as f,e as H,f as P,w as Q,h as B,o as k,i as _,j as F,k as E,l as N,t as w,u as m,F as j,r as R,c as C,m as M,p as T,q as U,s as Y}from"./entry.c791cfa0.js";import{_ as Z,a as ee}from"./TagCloud.vue.edc0a903.js";import{_ as ne}from"./ArticleCard.vue.1c250b62.js";const ie=y({__name:"OgImage",props:{data:{}},setup(e){const n=e,{public:{cdnUrl:a,ogImageUrl:t}}=P(),i=f(()=>{var l;return(l=n.data)!=null&&l.id?`${a}/assets/${n.data.id}.png?key=ogimage`:t});return H({ogImage:i.value}),()=>{}}});var $={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GET_TAG"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tags"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}]}},{kind:"ObjectField",name:{kind:"Name",value:"status"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"StringValue",value:"published",block:!1}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"articles"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"articles_id"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"status"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"StringValue",value:"published",block:!1}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cover_image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"folder"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"filename_disk"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filename_download"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filesize"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:653}};$.loc.source={body:`query GET_TAG($id: String!){
    tags (filter: {id: {_eq: $id}, status: {_eq: "published"}}) {
        id
        name
        slug
        status
        articles {
            articles_id(filter: {status: {_eq: "published"}}) {
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
}`,name:"GraphQL request",locationOffset:{line:1,column:1}};function x(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var a=e.type;a.kind==="NamedType"&&n.add(a.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){x(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){x(t,n)}),e.definitions&&e.definitions.forEach(function(t){x(t,n)})}var A={};(function(){$.definitions.forEach(function(n){if(n.name){var a=new Set;x(n,a),A[n.name.value]=a}})})();function z(e,n){for(var a=0;a<e.definitions.length;a++){var t=e.definitions[a];if(t.name&&t.name.value==n)return t}}function ae(e,n){var a={kind:e.kind,definitions:[z(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var t=A[n]||new Set,i=new Set,l=new Set;for(t.forEach(function(r){l.add(r)});l.size>0;){var g=l;l=new Set,g.forEach(function(r){if(!i.has(r)){i.add(r);var s=A[r]||new Set;s.forEach(function(d){l.add(d)})}})}return i.forEach(function(r){var s=z(e,r);s&&a.definitions.push(s)}),a}ae($,"GET_TAG");const te={class:"text-xl font-bold text-red-500 hover:text-white font-ming mb-2"},de={key:0,class:"text-sm"},le=y({__name:"TagArticleLinks",props:{id:{}},async setup(e){let n,a;const t=e,{data:i}=([n,a]=Q(()=>B($,{id:t.id})),n=await n,a(),n),l=f(()=>{var s,d,v,p;return(p=(v=(d=(s=i==null?void 0:i.value)==null?void 0:s.tags)==null?void 0:d[0])==null?void 0:v.articles)==null?void 0:p.map(u=>u==null?void 0:u.articles_id)}),g=f(()=>{var s,d,v;return(v=(d=(s=i==null?void 0:i.value)==null?void 0:s.tags)==null?void 0:d[0])==null?void 0:v.name}),r=f(()=>{var s,d,v;return(v=(d=(s=i==null?void 0:i.value)==null?void 0:s.tags)==null?void 0:d[0])==null?void 0:v.slug});return(s,d)=>{const v=U;return k(),_("article",null,[F(v,{to:m(r)},{default:E(()=>[N("h3",te,w(m(g)),1)]),_:1},8,["to"]),m(l)?(k(),_("div",de,[(k(!0),_(j,null,R(m(l),p=>(k(),C(v,{to:p==null?void 0:p.slug,class:"block m-2 text-red-300 hover:text-white"},{default:E(()=>[M(w(p==null?void 0:p.title),1)]),_:2},1032,["to"]))),256))])):T("",!0)])}}}),se={class:"text-3xl font-bold text-red-500 font-ming mb-2"},re=["innerHTML"],ce=y({__name:"ArticleContent",props:{data:{}},setup(e){const n=e,a=f(()=>{var i;return(i=n.data)==null?void 0:i.title}),t=f(()=>{var i;return(i=n.data)==null?void 0:i.body});return(i,l)=>(k(),_("article",null,[N("h1",se,w(m(a)),1),N("div",{innerHTML:m(t)},null,8,re)]))}}),ue={key:0,class:"text-sm"},me=y({__name:"TagLinks",props:{tags:{}},setup(e){return(n,a)=>{const t=U;return n.tags?(k(),_("span",ue,[(k(!0),_(j,null,R(n.tags,i=>(k(),C(t,{to:i==null?void 0:i.slug,class:"text-white bg-gray-300 hover:text-red-300 hover:bg-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"},{default:E(()=>[M(w(i==null?void 0:i.name),1)]),_:2},1032,["to"]))),256))])):T("",!0)}}}),oe={class:"text-3xl font-bold text-red-500 font-ming mb-2"},ke={class:"grid grid-cols-1 gap-2 md:grid-cols-2 text-sm"},ve=y({__name:"TagContent",props:{data:{}},setup(e){const n=e,a=f(()=>{var i,l;return(l=(i=n.data)==null?void 0:i.articles)==null?void 0:l.map(g=>g==null?void 0:g.articles_id)}),t=f(()=>{var i;return(i=n.data)==null?void 0:i.name});return(i,l)=>{const g=ne;return k(),_("article",null,[N("h1",oe,w(m(t)),1),N("div",ke,[(k(!0),_(j,null,R(m(a),r=>(k(),C(g,{data:r},null,8,["data"]))),256))])])}}});var q={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GET_PATH"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"path"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"articles"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"slug"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"path"}}}]}},{kind:"ObjectField",name:{kind:"Name",value:"status"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"StringValue",value:"published",block:!1}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cover_image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"folder"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"filename_disk"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filename_download"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filesize"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"body"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tags"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tags_id"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"tags"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"slug"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"path"}}}]}},{kind:"ObjectField",name:{kind:"Name",value:"status"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"StringValue",value:"published",block:!1}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cover_image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"folder"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"filename_disk"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filename_download"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filesize"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"articles"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"articles_id"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"status"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"StringValue",value:"published",block:!1}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cover_image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"folder"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"filename_disk"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filename_download"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filesize"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:1371}};q.loc.source={body:`query GET_PATH($path: String!){
    articles (filter: {slug: {_eq: $path}, status: {_eq: "published"}}) {
        id
        title
        summary
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
        body
        tags {
            tags_id {
                id
                name
                slug
            }
        }
	}
    tags (filter: {slug: {_eq: $path}, status: {_eq: "published"}}) {
        id
        name
        summary
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
        slug
        status
        articles {
            articles_id(filter: {status: {_eq: "published"}}) {
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
}`,name:"GraphQL request",locationOffset:{line:1,column:1}};function V(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var a=e.type;a.kind==="NamedType"&&n.add(a.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){V(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){V(t,n)}),e.definitions&&e.definitions.forEach(function(t){V(t,n)})}var D={};(function(){q.definitions.forEach(function(n){if(n.name){var a=new Set;V(n,a),D[n.name.value]=a}})})();function I(e,n){for(var a=0;a<e.definitions.length;a++){var t=e.definitions[a];if(t.name&&t.name.value==n)return t}}function ge(e,n){var a={kind:e.kind,definitions:[I(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var t=D[n]||new Set,i=new Set,l=new Set;for(t.forEach(function(r){l.add(r)});l.size>0;){var g=l;l=new Set,g.forEach(function(r){if(!i.has(r)){i.add(r);var s=D[r]||new Set;s.forEach(function(d){l.add(d)})}})}return i.forEach(function(r){var s=I(e,r);s&&a.definitions.push(s)}),a}ge(q,"GET_PATH");const fe={class:"grid grid-cols-12 gap-2"},_e={class:"hidden lg:col-span-3 2xl:col-span-2 lg:block mx-2 lg:mr-0 bg-gray-500 shadow-lg h-full"},pe={class:"p-2"},Ne={key:0,class:"p-2"},Fe={class:"p-2"},Se={class:"col-span-12 my-2 pb-12 lg:m-2 p-2 bg-gray-100 shadow-lg lg:col-span-9 2xl:col-span-10 lg:ml-0"},be={class:"lg:hidden p-2"},we=y({__name:"[...slug]",async setup(e){let n,a;const t=Y(),{public:{siteName:i,siteDescription:l,ogImageUrl:g}}=P(),r="/"+[t.params.slug].flat().filter(c=>c).join("/"),{data:s}=([n,a]=Q(()=>B(q,{path:r})),n=await n,a(),n),d=f(()=>{var c,o;return(o=(c=s.value)==null?void 0:c.articles)==null?void 0:o[0]}),v=f(()=>{var c,o,b,h,S,O;return(O=(S=(h=(b=(o=(c=s.value)==null?void 0:c.articles)==null?void 0:o[0])==null?void 0:b.tags)==null?void 0:h[0])==null?void 0:S.tags_id)==null?void 0:O.id}),p=f(()=>{var c,o,b,h;return(h=(b=(o=(c=s.value)==null?void 0:c.articles)==null?void 0:o[0])==null?void 0:b.tags)==null?void 0:h.map(S=>S==null?void 0:S.tags_id)}),u=f(()=>{var c,o;return(o=(c=s.value)==null?void 0:c.tags)==null?void 0:o[0]}),J=f(()=>{var c,o;return d!=null&&d.value?(c=d==null?void 0:d.value)==null?void 0:c.cover_image:u!=null&&u.value?(o=u==null?void 0:u.value)==null?void 0:o.cover_image:null}),G=d.value?d.value.title:u.value?u.value.name:i,L=d.value?d.value.summary:u.value?u.value.summary:l;return H({title:G,ogTitle:G,description:L,ogDescription:L,ogImage:g}),(c,o)=>{const b=ie,h=Z,S=le,O=ee,K=ce,W=me,X=ve;return k(),_("div",fe,[F(b,{data:m(J)},null,8,["data"]),N("div",_e,[N("section",pe,[F(h)]),m(v)?(k(),_("section",Ne,[F(S,{id:m(v)},null,8,["id"])])):T("",!0),N("section",Fe,[F(O)])]),N("div",Se,[m(d)?(k(),_(j,{key:0},[F(K,{data:m(d),class:"mb-4"},null,8,["data"]),F(W,{tags:m(p)},null,8,["tags"])],64)):m(u)?(k(),_(j,{key:1},[F(X,{data:m(u)},null,8,["data"]),N("section",be,[F(O)])],64)):T("",!0)])])}}});export{we as default};
