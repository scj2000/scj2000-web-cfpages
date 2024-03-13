import{_ as Y,a as Z}from"./TagCloud.vue.77cdeb3b.js";import{a as O,w as H,b as P,e as g,o as k,f as _,h as S,i as E,j as N,t as y,u as o,F as w,r as R,c as C,k as Q,l as T,m as B,p as M,q as U,s as ee}from"./entry.8f4ee121.js";import{_ as ne}from"./ArticleCard.vue.1695c552.js";var $={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GET_TAG"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tags"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}]}},{kind:"ObjectField",name:{kind:"Name",value:"status"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"StringValue",value:"published",block:!1}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"articles"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"articles_id"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"status"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"StringValue",value:"published",block:!1}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cover_image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"folder"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"filename_disk"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filename_download"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filesize"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:653}};$.loc.source={body:`query GET_TAG($id: String!){
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
}`,name:"GraphQL request",locationOffset:{line:1,column:1}};function x(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){x(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){x(t,n)}),e.definitions&&e.definitions.forEach(function(t){x(t,n)})}var A={};(function(){$.definitions.forEach(function(n){if(n.name){var i=new Set;x(n,i),A[n.name.value]=i}})})();function z(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function ie(e,n){var i={kind:e.kind,definitions:[z(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=A[n]||new Set,a=new Set,s=new Set;for(t.forEach(function(r){s.add(r)});s.size>0;){var f=s;s=new Set,f.forEach(function(r){if(!a.has(r)){a.add(r);var l=A[r]||new Set;l.forEach(function(d){s.add(d)})}})}return a.forEach(function(r){var l=z(e,r);l&&i.definitions.push(l)}),i}ie($,"GET_TAG");const ae={class:"text-xl font-bold text-red-800 hover:text-white font-ming mb-2"},te={key:0,class:"text-sm"},de=O({__name:"TagArticleLinks",props:{id:{}},async setup(e){let n,i;const t=e,{data:a}=([n,i]=H(()=>P($,{id:t.id})),n=await n,i(),n),s=g(()=>{var l,d,v,p;return(p=(v=(d=(l=a==null?void 0:a.value)==null?void 0:l.tags)==null?void 0:d[0])==null?void 0:v.articles)==null?void 0:p.map(u=>u==null?void 0:u.articles_id)}),f=g(()=>{var l,d,v;return(v=(d=(l=a==null?void 0:a.value)==null?void 0:l.tags)==null?void 0:d[0])==null?void 0:v.name}),r=g(()=>{var l,d,v;return(v=(d=(l=a==null?void 0:a.value)==null?void 0:l.tags)==null?void 0:d[0])==null?void 0:v.slug});return(l,d)=>{const v=B;return k(),_("article",null,[S(v,{to:o(r)},{default:E(()=>[N("h3",ae,y(o(f)),1)]),_:1},8,["to"]),o(s)?(k(),_("div",te,[(k(!0),_(w,null,R(o(s),p=>(k(),C(v,{to:p==null?void 0:p.slug,class:"block m-2 text-red-300 hover:text-white"},{default:E(()=>[Q(y(p==null?void 0:p.title),1)]),_:2},1032,["to"]))),256))])):T("",!0)])}}}),le={class:"text-3xl font-bold text-red-800 font-ming mb-2"},se=["innerHTML"],re=O({__name:"ArticleContent",props:{data:{}},setup(e){const n=e,i=g(()=>{var a;return(a=n.data)==null?void 0:a.title}),t=g(()=>{var a;return(a=n.data)==null?void 0:a.body});return(a,s)=>(k(),_("article",null,[N("h1",le,y(o(i)),1),N("div",{innerHTML:o(t)},null,8,se)]))}}),ce={key:0,class:"text-sm"},ue=O({__name:"TagLinks",props:{tags:{}},setup(e){return(n,i)=>{const t=B;return n.tags?(k(),_("span",ce,[(k(!0),_(w,null,R(n.tags,a=>(k(),C(t,{to:a==null?void 0:a.slug,class:"text-white bg-gray-300 hover:text-red-300 hover:bg-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"},{default:E(()=>[Q(y(a==null?void 0:a.name),1)]),_:2},1032,["to"]))),256))])):T("",!0)}}}),me={class:"text-3xl font-bold text-red-800 font-ming mb-2"},oe={class:"grid grid-cols-1 gap-2 md:grid-cols-2 text-sm"},ke=O({__name:"TagContent",props:{data:{}},setup(e){const n=e,i=g(()=>{var a,s;return(s=(a=n.data)==null?void 0:a.articles)==null?void 0:s.map(f=>f==null?void 0:f.articles_id)}),t=g(()=>{var a;return(a=n.data)==null?void 0:a.name});return(a,s)=>{const f=ne;return k(),_("article",null,[N("h1",me,y(o(t)),1),N("div",oe,[(k(!0),_(w,null,R(o(i),r=>(k(),C(f,{data:r},null,8,["data"]))),256))])])}}});function ve(e){const{public:{cdnUrl:n,ogImageUrl:i}}=U(),t=g(()=>e!=null&&e.id?`${n}/assets/${e.id}.png?key=ogimage`:i);return M({ogImage:t}),t}var q={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GET_PATH"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"path"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"articles"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"slug"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"path"}}}]}},{kind:"ObjectField",name:{kind:"Name",value:"status"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"StringValue",value:"published",block:!1}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cover_image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"folder"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"filename_disk"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filename_download"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filesize"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"body"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tags"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tags_id"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"tags"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"slug"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"path"}}}]}},{kind:"ObjectField",name:{kind:"Name",value:"status"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"StringValue",value:"published",block:!1}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cover_image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"folder"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"filename_disk"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filename_download"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filesize"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"articles"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"articles_id"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"status"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"StringValue",value:"published",block:!1}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cover_image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"folder"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"filename_disk"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filename_download"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filesize"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:1371}};q.loc.source={body:`query GET_PATH($path: String!){
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
}`,name:"GraphQL request",locationOffset:{line:1,column:1}};function V(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){V(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){V(t,n)}),e.definitions&&e.definitions.forEach(function(t){V(t,n)})}var D={};(function(){q.definitions.forEach(function(n){if(n.name){var i=new Set;V(n,i),D[n.name.value]=i}})})();function I(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function ge(e,n){var i={kind:e.kind,definitions:[I(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=D[n]||new Set,a=new Set,s=new Set;for(t.forEach(function(r){s.add(r)});s.size>0;){var f=s;s=new Set,f.forEach(function(r){if(!a.has(r)){a.add(r);var l=D[r]||new Set;l.forEach(function(d){s.add(d)})}})}return a.forEach(function(r){var l=I(e,r);l&&i.definitions.push(l)}),i}ge(q,"GET_PATH");const fe={class:"grid grid-cols-12 gap-2"},_e={class:"hidden lg:col-span-3 2xl:col-span-2 lg:block mx-2 lg:mr-0 bg-gray-500 shadow-lg h-full"},pe={class:"p-2"},Ne={key:0,class:"p-2"},Fe={class:"p-2"},Se={class:"col-span-12 my-2 pb-12 lg:m-2 p-2 bg-gray-100 shadow-lg lg:col-span-9 2xl:col-span-10 lg:ml-0"},be={class:"lg:hidden p-2"},Oe=O({__name:"[...slug]",async setup(e){let n,i;const t=ee(),{public:{siteName:a,siteDescription:s,ogImageUrl:f}}=U(),r="/"+[t.params.slug].flat().filter(c=>c).join("/"),{data:l}=([n,i]=H(()=>P(q,{path:r})),n=await n,i(),n),d=g(()=>{var c,m;return(m=(c=l.value)==null?void 0:c.articles)==null?void 0:m[0]}),v=g(()=>{var c,m,b,h,F,j;return(j=(F=(h=(b=(m=(c=l.value)==null?void 0:c.articles)==null?void 0:m[0])==null?void 0:b.tags)==null?void 0:h[0])==null?void 0:F.tags_id)==null?void 0:j.id}),p=g(()=>{var c,m,b,h;return(h=(b=(m=(c=l.value)==null?void 0:c.articles)==null?void 0:m[0])==null?void 0:b.tags)==null?void 0:h.map(F=>F==null?void 0:F.tags_id)}),u=g(()=>{var c,m;return(m=(c=l.value)==null?void 0:c.tags)==null?void 0:m[0]}),J=g(()=>{var c,m;return d!=null&&d.value?(c=d==null?void 0:d.value)==null?void 0:c.cover_image:u!=null&&u.value?(m=u==null?void 0:u.value)==null?void 0:m.cover_image:null}),K=ve(J.value),G=d.value?d.value.title:u.value?u.value.name:a,L=d.value?d.value.summary:u.value?u.value.summary:s;return M({title:G,ogTitle:G,description:L,ogDescription:L,ogImage:K}),(c,m)=>{const b=Y,h=de,F=Z,j=re,W=ue,X=ke;return k(),_("div",fe,[N("div",_e,[N("section",pe,[S(b)]),o(v)?(k(),_("section",Ne,[S(h,{id:o(v)},null,8,["id"])])):T("",!0),N("section",Fe,[S(F)])]),N("div",Se,[o(d)?(k(),_(w,{key:0},[S(j,{data:o(d),class:"mb-4"},null,8,["data"]),S(W,{tags:o(p)},null,8,["tags"])],64)):o(u)?(k(),_(w,{key:1},[S(X,{data:o(u)},null,8,["data"]),N("section",be,[S(F)])],64)):T("",!0)])])}}});export{Oe as default};
