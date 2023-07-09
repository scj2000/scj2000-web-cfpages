import{a as w,b as N,_ as y}from"./ArticleCard.vue.748cc1d4.js";import{a as E,w as b,e as g,f as k,j as o,h as _,u as p,F as T,r as x,b as R,o as f,c as D}from"./entry.be424422.js";var u={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GET_FRONTPAGE"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"frontpage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"welcome_message"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"articles"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cover_image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"folder"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"filename_disk"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filename_download"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filesize"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:363}};u.loc.source={body:`query GET_FRONTPAGE {
  frontpage {
	  id
    welcome_message
    articles {
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
}`,name:"GraphQL request",locationOffset:{line:1,column:1}};function m(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){m(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){m(a,n)}),e.definitions&&e.definitions.forEach(function(a){m(a,n)})}var v={};(function(){u.definitions.forEach(function(n){if(n.name){var i=new Set;m(n,i),v[n.name.value]=i}})})();function h(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function G(e,n){var i={kind:e.kind,definitions:[h(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=v[n]||new Set,c=new Set,l=new Set;for(a.forEach(function(t){l.add(t)});l.size>0;){var d=l;l=new Set,d.forEach(function(t){if(!c.has(t)){c.add(t);var s=v[t]||new Set;s.forEach(function(r){l.add(r)})}})}return c.forEach(function(t){var s=h(e,t);s&&i.definitions.push(s)}),i}G(u,"GET_FRONTPAGE");const O={class:"grid grid-cols-12 gap-2"},A={class:"hidden lg:col-span-3 2xl:col-span-2 lg:block mx-2 lg:mr-0 bg-gray-500 shadow-lg h-full"},B={class:"p-2"},C={class:"p-2"},L={class:"col-span-12 my-2 lg:m-2 p-2 bg-gray-100 shadow-lg lg:col-span-9 2xl:col-span-10 lg:ml-0"},M=["innerHTML"],P={class:"grid grid-cols-1 gap-2 md:grid-cols-2 text-sm"},Q=E({__name:"index",async setup(e){let n,i;const{data:a}=([n,i]=b(()=>R(u)),n=await n,i(),n),c=g(()=>{var d,t,s;return(s=(t=(d=a.value)==null?void 0:d.frontpage)==null?void 0:t.articles)==null?void 0:s.map(r=>r)}),l=g(()=>{var d,t;return(t=(d=a.value)==null?void 0:d.frontpage)==null?void 0:t.welcome_message});return(d,t)=>{const s=w,r=N,S=y;return f(),k("div",O,[o("div",A,[o("section",B,[_(s)]),o("section",C,[_(r)])]),o("div",L,[o("div",{innerHTML:p(l),class:"my-6"},null,8,M),o("div",P,[(f(!0),k(T,null,x(p(c),F=>(f(),D(S,{data:F},null,8,["data"]))),256))])])])}}});export{Q as default};
