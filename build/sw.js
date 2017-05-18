var serviceWorkerOption = {"assets":["/9d2e8b48c1ff4e45e20d.worker.js","/bd136e3a745c5ca2ae8d.worker.js","/fonts/-L14Jk06m6pUHB-5mXQQnYX0hVgzZQUfRDuZrPvH3D885b8ec3ad2.woff2","/fonts/0eC6fl06luXEYWpBSJvXCIX0hVgzZQUfRDuZrPvH3D89b68886401.woff2","/fonts/Fl4y0QdOxyyTHEGMXX8kcYX0hVgzZQUfRDuZrPvH3D8af34a57573.woff2","/fonts/Hgo13k-tfSpn0qi1SFdUfZBw1xU1rKptJj_0jans92016a9467557.woff2","/fonts/I3S1wsgSg9YCurV6PUkTOYX0hVgzZQUfRDuZrPvH3D8890137f2a9.woff2","/fonts/NYDWBdD4gIq26G5XYbHsFIX0hVgzZQUfRDuZrPvH3D8bcb5918360.woff2","/fonts/Pru33qjShpZSmG3z6VYwnYX0hVgzZQUfRDuZrPvH3D889028d2d23.woff2","/fonts/N4duVc9C58uwPiY8_59Fz-pRBTtN4E2_qSPBnw6AgMc62f2f972e0.woff2","/fonts/N4duVc9C58uwPiY8_59Fz0ExlR2MysFCBK8OirNw2kMc9e9d851eb.woff2","/fonts/N4duVc9C58uwPiY8_59Fz2MSHb9EAJwuSzGfuRChQzQ3c4e397d8b.woff2","/fonts/N4duVc9C58uwPiY8_59Fz2dsm03krrxlabhmVQFB99s200142f539.woff2","/fonts/N4duVc9C58uwPiY8_59Fz9Dnm4qiMZlH5rhYv_7LI2Ybd43bb45b2.woff2","/fonts/N4duVc9C58uwPiY8_59Fz9TIkQYohD4BpHvJ3NvbHoA63cba37360.woff2","/fonts/N4duVc9C58uwPiY8_59FzyJ0caWjaSBdV-xZbEgst_kefb845429d.woff2","/assets/unknown-64x64.47a5c5b596.png","/assets/parity-logo-black-no-text.71cc5be1ab.svg","/assets/ethereum-black-64x64.fa56d82ce6.png","/assets/blocks-350.e777adb75b.jpg","/assets/shapeshift-btn.a547d8096f.png","/assets/shapeshift-logo.281d85adf0.png","/assets/unknown.09a220f1d3.svg","/assets/close.dbe8e66fd9.svg","/assets/plus.53601dd8f4.svg","/assets/parity-logo-white.685cdc3b98.svg","/index.5073e3ce60.js","/registry.5073e3ce60.js","/tokenreg.5073e3ce60.js","/dappreg.5073e3ce60.js","/tokendeploy.5073e3ce60.js","/chaindeploy.5073e3ce60.js","/signaturereg.5073e3ce60.js","/githubhint.5073e3ce60.js","/localtx.5073e3ce60.js","/styles/chaindeploy.5073e3ce60.css","/styles/tokendeploy.5073e3ce60.css","/styles/registry.5073e3ce60.css","/styles/tokenreg.5073e3ce60.css","/styles/signaturereg.5073e3ce60.css","/styles/githubhint.5073e3ce60.css","/styles/localtx.5073e3ce60.css","/styles/dappreg.5073e3ce60.css","/styles/index.5073e3ce60.css","/parity-logo-black-no-text.png","/index.html"]};
        
        !function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=16)}([function(e,t,n){"use strict";function r(e,t){t=t||{},(t.debug||m.debug)&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=a.bind(null,e,t,n);d=d?d.then(r):r()}function a(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,a=n.name,s=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(a).then(function(e){return g.setTimestampForUrl(e,o,s)}).then(function(e){return g.expireEntries(e,c,i,s)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function s(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||l(e),m.preCacheItems=m.preCacheItems.concat(e)}function l(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function p(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){if(new Date(r).getTime()+1e3*t<n)return!1}}return!0}var d,m=n(1),g=n(8);e.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:s,cache:u,uncache:f,precache:h,validatePrecacheInput:l,isResponseFresh:p}},function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,e.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=n(10),i=n(0),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){new RegExp(r.value[0]).test(t)&&o.push(r.value[1]),r=n.next()}return o},a=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){a.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),a.prototype.add=function(e,t,n,c){c=c||{};var a;t instanceof RegExp?a=RegExp:(a=c.origin||self.location.origin,a=a instanceof RegExp?a.source:r(a)),e=e.toLowerCase();var s=new o(e,t,n,c);this.routes.has(a)||this.routes.set(a,new Map);var u=this.routes.get(a);u.has(e)||u.set(e,new Map);var f=u.get(e),h=s.regexp||s.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,s)},a.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},a.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var a=c(i,n);if(a.length>0)return a[0].makeHandler(n)}}return null},a.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},e.exports=new a},function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=n(1),i=n(0);e.exports=r},function(e,t,n){"use strict";var r=n(1),o=n(2),i=n(0),c=n(13),a=n(9);i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",a.installListener),self.addEventListener("activate",a.activateListener),self.addEventListener("fetch",a.fetchListener),e.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},function(e,t){var n={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==n.call(e)}},function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",a=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],l=n.index;if(c+=e.slice(i,l),i=l+f.length,h)c+=h[1];else{var p=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=p&&p!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,$=n[2]||a,k=g||v;r.push({name:m||o++,prefix:d||"",delimiter:$,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:k?u(k):y?".*":"[^"+s($)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return a(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function a(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",a=n||{},s=r||{},u=s.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var l,p=a[h.name];if(null==p){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(p)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<p.length;d++){if(l=u(p[d]),!t[f].test(l))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(l)+"`");o+=(0===d?h.prefix:h.delimiter)+l}}else{if(l=h.asterisk?c(p):u(p),!t[f].test(l))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+l+'"');o+=h.prefix+l}}else o+=h}return o}}function s(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function l(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function p(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);return f(new RegExp("(?:"+r.join("|")+")",h(n)),t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var a=e[c];if("string"==typeof a)i+=s(a);else{var u=s(a.prefix),l="(?:"+a.pattern+")";t.push(a),a.repeat&&(l+="(?:"+u+l+")*"),l=a.optional?a.partial?u+"("+l+")?":"(?:"+u+"("+l+"))?":u+"("+l+")",i+=l}}var p=s(n.delimiter||"/"),d=i.slice(-p.length)===p;return r||(i=(d?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+p+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?l(e,t):v(e)?p(e,t,n):d(e,t,n)}var v=n(5);e.exports=g,e.exports.parse=r,e.exports.compile=o,e.exports.tokensToFunction=a,e.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},function(e,t){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){r.result.createObjectStore(h,{keyPath:l}).createIndex(p,p,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite");i.objectStore(h).put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],a=e.transaction(h,"readwrite"),s=a.objectStore(h);s.index(p).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[p]){var r=t.value[l];c.push(r),s.delete(r),t.continue()}},a.oncomplete=function(){r(c)},a.onabort=o}):Promise.resolve([])}function a(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),a=c.index(p),s=a.count();a.count().onsuccess=function(){var e=s.result;e>t&&(a.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[l];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function s(e,t,n,r){return c(e,n,r).then(function(n){return a(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",l="url",p="timestamp",d={};e.exports={getDb:o,setTimestampForUrl:i,expireEntries:s}},function(e,t,n){"use strict";function r(e){var t=s.match(e.request);t?e.respondWith(t(e.request)):s.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(s.default(e.request))}function o(e){a.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(a.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";a.debug("install event fired"),a.debug("creating cache ["+t+"]"),e.waitUntil(a.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(a.validatePrecacheInput).then(function(t){return a.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}n(7);var a=n(0),s=n(2),u=n(1);e.exports={fetchListener:r,activateListener:o,installListener:c}},function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=n(6),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},e.exports=c},function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=n(1),i=n(0);e.exports=r},function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var a=!1,s=[],u=function(e){s.push(e.toString()),a?c(new Error('Both cache and network failed: "'+s.join('", "')+'"')):a=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=n(0),i=n(3);e.exports=r},function(e,t,n){e.exports={networkOnly:n(15),networkFirst:n(14),cacheOnly:n(3),cacheFirst:n(11),fastest:n(12)}},function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var a,s,u=[];if(c){var f=new Promise(function(r){a=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),a=t.maxAgeSeconds;i.isResponseFresh(e,a,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(a&&clearTimeout(a),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),s=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(s)return s;throw r})});return u.push(h),Promise.race(u)})}var o=n(1),i=n(0);e.exports=r},function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=n(0);e.exports=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(4),i=r(o);i.default.router.any(/rawgit.com\/ethereum\/solc-bin(.+)list\.json$/,i.default.networkFirst),i.default.router.any(/rawgit.com\/ethereum\/solc-bin(.+)soljson(.+)\.js$/,i.default.cacheFirst),self.addEventListener("install",function(e){e.waitUntil(self.skipWaiting())}),self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())})}]);