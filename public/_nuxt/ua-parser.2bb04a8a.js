function ki(m,A){for(var v=0;v<A.length;v++){const d=A[v];if(typeof d!="string"&&!Array.isArray(d)){for(const _ in d)if(_!=="default"&&!(_ in m)){const x=Object.getOwnPropertyDescriptor(d,_);x&&Object.defineProperty(m,_,x.get?x:{enumerable:!0,get:()=>d[_]})}}}return Object.freeze(Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}))}var xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yi(m){return m&&m.__esModule&&Object.prototype.hasOwnProperty.call(m,"default")?m.default:m}var ii={exports:{}};(function(m,A){(function(v,d){var _="1.0.35",x="",ei="?",V="function",P="undefined",F="object",C="string",oi="major",e="model",a="name",i="type",o="vendor",r="version",f="architecture",S="console",b="mobile",n="tablet",p="smarttv",E="wearable",G="embedded",H=350,z="Amazon",N="Apple",ai="ASUS",ri="BlackBerry",O="Browser",q="Chrome",fi="Edge",U="Firefox",B="Google",ti="Huawei",W="LG",Y="Microsoft",si="Motorola",j="Opera",Z="Samsung",ni="Sharp",D="Sony",X="Xiaomi",K="Zebra",bi="Facebook",wi="Chromium OS",li="Mac OS",hi=function(w,c){var s={};for(var u in w)c[u]&&c[u].length%2===0?s[u]=c[u].concat(w[u]):s[u]=w[u];return s},I=function(w){for(var c={},s=0;s<w.length;s++)c[w[s].toUpperCase()]=w[s];return c},ci=function(w,c){return typeof w===C?M(c).indexOf(M(w))!==-1:!1},M=function(w){return w.toLowerCase()},vi=function(w){return typeof w===C?w.replace(/[^\d\.]/g,x).split(".")[0]:d},J=function(w,c){if(typeof w===C)return w=w.replace(/^\s\s*/,x),typeof c===P?w:w.substring(0,H)},R=function(w,c){for(var s=0,u,y,g,l,t,k;s<c.length&&!t;){var $=c[s],pi=c[s+1];for(u=y=0;u<$.length&&!t&&$[u];)if(t=$[u++].exec(w),t)for(g=0;g<pi.length;g++)k=t[++y],l=pi[g],typeof l===F&&l.length>0?l.length===2?typeof l[1]==V?this[l[0]]=l[1].call(this,k):this[l[0]]=l[1]:l.length===3?typeof l[1]===V&&!(l[1].exec&&l[1].test)?this[l[0]]=k?l[1].call(this,k,l[2]):d:this[l[0]]=k?k.replace(l[1],l[2]):d:l.length===4&&(this[l[0]]=k?l[3].call(this,k.replace(l[1],l[2])):d):this[l]=k||d;s+=2}},Q=function(w,c){for(var s in c)if(typeof c[s]===F&&c[s].length>0){for(var u=0;u<c[s].length;u++)if(ci(c[s][u],w))return s===ei?d:s}else if(ci(c[s],w))return s===ei?d:s;return w},gi={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},di={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},ui={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[r,[a,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[r,[a,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[a,r],[/opios[\/ ]+([\w\.]+)/i],[r,[a,j+" Mini"]],[/\bopr\/([\w\.]+)/i],[r,[a,j]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[a,r],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[r,[a,"UC"+O]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[r,[a,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[r,[a,"WeChat"]],[/konqueror\/([\w\.]+)/i],[r,[a,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[r,[a,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[r,[a,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[a,/(.+)/,"$1 Secure "+O],r],[/\bfocus\/([\w\.]+)/i],[r,[a,U+" Focus"]],[/\bopt\/([\w\.]+)/i],[r,[a,j+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[r,[a,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[r,[a,"Dolphin"]],[/coast\/([\w\.]+)/i],[r,[a,j+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[r,[a,"MIUI "+O]],[/fxios\/([-\w\.]+)/i],[r,[a,U]],[/\bqihu|(qi?ho?o?|360)browser/i],[[a,"360 "+O]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[a,/(.+)/,"$1 "+O],r],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],r],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[a,r],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[a],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[a,bi],r],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[a,r],[/\bgsa\/([\w\.]+) .*safari\//i],[r,[a,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[r,[a,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[r,[a,q+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[a,q+" WebView"],r],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[r,[a,"Android "+O]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[a,r],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[r,[a,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[r,a],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[a,[r,Q,gi]],[/(webkit|khtml)\/([\w\.]+)/i],[a,r],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[a,"Netscape"],r],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[r,[a,U+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[a,r],[/(cobalt)\/([\w\.]+)/i],[a,[r,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[f,"amd64"]],[/(ia32(?=;))/i],[[f,M]],[/((?:i[346]|x)86)[;\)]/i],[[f,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[f,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[f,"armhf"]],[/windows (ce|mobile); ppc;/i],[[f,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[f,/ower/,x,M]],[/(sun4\w)[;\)]/i],[[f,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[f,M]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[e,[o,Z],[i,n]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[e,[o,Z],[i,b]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[e,[o,N],[i,b]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[e,[o,N],[i,n]],[/(macintosh);/i],[e,[o,N]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[e,[o,ni],[i,b]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[e,[o,ti],[i,n]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[e,[o,ti],[i,b]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[e,/_/g," "],[o,X],[i,b]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[e,/_/g," "],[o,X],[i,n]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[e,[o,"OPPO"],[i,b]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[e,[o,"Vivo"],[i,b]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[e,[o,"Realme"],[i,b]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[e,[o,si],[i,b]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[e,[o,si],[i,n]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[e,[o,W],[i,n]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[e,[o,W],[i,b]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[e,[o,"Lenovo"],[i,n]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[e,/_/g," "],[o,"Nokia"],[i,b]],[/(pixel c)\b/i],[e,[o,B],[i,n]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[e,[o,B],[i,b]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[e,[o,D],[i,b]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[e,"Xperia Tablet"],[o,D],[i,n]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[e,[o,"OnePlus"],[i,b]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[e,[o,z],[i,n]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[e,/(.+)/g,"Fire Phone $1"],[o,z],[i,b]],[/(playbook);[-\w\),; ]+(rim)/i],[e,o,[i,n]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[e,[o,ri],[i,b]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[e,[o,ai],[i,n]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[e,[o,ai],[i,b]],[/(nexus 9)/i],[e,[o,"HTC"],[i,n]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[o,[e,/_/g," "],[i,b]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[e,[o,"Acer"],[i,n]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[e,[o,"Meizu"],[i,b]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[o,e,[i,b]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[o,e,[i,n]],[/(surface duo)/i],[e,[o,Y],[i,n]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[e,[o,"Fairphone"],[i,b]],[/(u304aa)/i],[e,[o,"AT&T"],[i,b]],[/\bsie-(\w*)/i],[e,[o,"Siemens"],[i,b]],[/\b(rct\w+) b/i],[e,[o,"RCA"],[i,n]],[/\b(venue[\d ]{2,7}) b/i],[e,[o,"Dell"],[i,n]],[/\b(q(?:mv|ta)\w+) b/i],[e,[o,"Verizon"],[i,n]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[e,[o,"Barnes & Noble"],[i,n]],[/\b(tm\d{3}\w+) b/i],[e,[o,"NuVision"],[i,n]],[/\b(k88) b/i],[e,[o,"ZTE"],[i,n]],[/\b(nx\d{3}j) b/i],[e,[o,"ZTE"],[i,b]],[/\b(gen\d{3}) b.+49h/i],[e,[o,"Swiss"],[i,b]],[/\b(zur\d{3}) b/i],[e,[o,"Swiss"],[i,n]],[/\b((zeki)?tb.*\b) b/i],[e,[o,"Zeki"],[i,n]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[o,"Dragon Touch"],e,[i,n]],[/\b(ns-?\w{0,9}) b/i],[e,[o,"Insignia"],[i,n]],[/\b((nxa|next)-?\w{0,9}) b/i],[e,[o,"NextBook"],[i,n]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[o,"Voice"],e,[i,b]],[/\b(lvtel\-)?(v1[12]) b/i],[[o,"LvTel"],e,[i,b]],[/\b(ph-1) /i],[e,[o,"Essential"],[i,b]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[e,[o,"Envizen"],[i,n]],[/\b(trio[-\w\. ]+) b/i],[e,[o,"MachSpeed"],[i,n]],[/\btu_(1491) b/i],[e,[o,"Rotor"],[i,n]],[/(shield[\w ]+) b/i],[e,[o,"Nvidia"],[i,n]],[/(sprint) (\w+)/i],[o,e,[i,b]],[/(kin\.[onetw]{3})/i],[[e,/\./g," "],[o,Y],[i,b]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[e,[o,K],[i,n]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[e,[o,K],[i,b]],[/smart-tv.+(samsung)/i],[o,[i,p]],[/hbbtv.+maple;(\d+)/i],[[e,/^/,"SmartTV"],[o,Z],[i,p]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[o,W],[i,p]],[/(apple) ?tv/i],[o,[e,N+" TV"],[i,p]],[/crkey/i],[[e,q+"cast"],[o,B],[i,p]],[/droid.+aft(\w)( bui|\))/i],[e,[o,z],[i,p]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[e,[o,ni],[i,p]],[/(bravia[\w ]+)( bui|\))/i],[e,[o,D],[i,p]],[/(mitv-\w{5}) bui/i],[e,[o,X],[i,p]],[/Hbbtv.*(technisat) (.*);/i],[o,e,[i,p]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[o,J],[e,J],[i,p]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[i,p]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[o,e,[i,S]],[/droid.+; (shield) bui/i],[e,[o,"Nvidia"],[i,S]],[/(playstation [345portablevi]+)/i],[e,[o,D],[i,S]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[e,[o,Y],[i,S]],[/((pebble))app/i],[o,e,[i,E]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[e,[o,N],[i,E]],[/droid.+; (glass) \d/i],[e,[o,B],[i,E]],[/droid.+; (wt63?0{2,3})\)/i],[e,[o,K],[i,E]],[/(quest( 2| pro)?)/i],[e,[o,bi],[i,E]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[o,[i,G]],[/(aeobc)\b/i],[e,[o,z],[i,G]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[e,[i,b]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[e,[i,n]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[i,n]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[i,b]],[/(android[-\w\. ]{0,9});.+buil/i],[e,[o,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[r,[a,fi+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[r,[a,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[a,r],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[r,a]],os:[[/microsoft (windows) (vista|xp)/i],[a,r],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[a,[r,Q,di]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[a,"Windows"],[r,Q,di]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[r,/_/g,"."],[a,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[a,li],[r,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[r,a],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[a,r],[/\(bb(10);/i],[r,[a,ri]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[r,[a,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[r,[a,U+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[r,[a,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[r,[a,"watchOS"]],[/crkey\/([\d\.]+)/i],[r,[a,q+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[a,wi],r],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[a,r],[/(sunos) ?([\w\.\d]*)/i],[[a,"Solaris"],r],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[a,r]]},h=function(w,c){if(typeof w===F&&(c=w,w=d),!(this instanceof h))return new h(w,c).getResult();var s=typeof v!==P&&v.navigator?v.navigator:d,u=w||(s&&s.userAgent?s.userAgent:x),y=s&&s.userAgentData?s.userAgentData:d,g=c?hi(ui,c):ui,l=s&&s.userAgent==u;return this.getBrowser=function(){var t={};return t[a]=d,t[r]=d,R.call(t,u,g.browser),t[oi]=vi(t[r]),l&&s&&s.brave&&typeof s.brave.isBrave==V&&(t[a]="Brave"),t},this.getCPU=function(){var t={};return t[f]=d,R.call(t,u,g.cpu),t},this.getDevice=function(){var t={};return t[o]=d,t[e]=d,t[i]=d,R.call(t,u,g.device),l&&!t[i]&&y&&y.mobile&&(t[i]=b),l&&t[e]=="Macintosh"&&s&&typeof s.standalone!==P&&s.maxTouchPoints&&s.maxTouchPoints>2&&(t[e]="iPad",t[i]=n),t},this.getEngine=function(){var t={};return t[a]=d,t[r]=d,R.call(t,u,g.engine),t},this.getOS=function(){var t={};return t[a]=d,t[r]=d,R.call(t,u,g.os),l&&!t[a]&&y&&y.platform!="Unknown"&&(t[a]=y.platform.replace(/chrome os/i,wi).replace(/macos/i,li)),t},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return u},this.setUA=function(t){return u=typeof t===C&&t.length>H?J(t,H):t,this},this.setUA(u),this};h.VERSION=_,h.BROWSER=I([a,r,oi]),h.CPU=I([f]),h.DEVICE=I([e,o,i,S,b,p,n,E,G]),h.ENGINE=h.OS=I([a,r]),m.exports&&(A=m.exports=h),A.UAParser=h;var T=typeof v!==P&&(v.jQuery||v.Zepto);if(T&&!T.ua){var L=new h;T.ua=L.getResult(),T.ua.get=function(){return L.getUA()},T.ua.set=function(w){L.setUA(w);var c=L.getResult();for(var s in c)T.ua[s]=c[s]}}})(typeof window=="object"?window:xi)})(ii,ii.exports);var mi=ii.exports;const _i=yi(mi),Ei=ki({__proto__:null,default:_i},[mi]);export{Ei as u};
