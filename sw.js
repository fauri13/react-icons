if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise(async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()})),s.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},s=(s,c)=>{Promise.all(s.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(s)};self.define=(s,a,n)=>{c[s]||(c[s]=Promise.resolve().then(()=>{let c={};const i={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return c;case"module":return i;default:return e(s)}})).then(e=>{const s=n(...e);return c.default||(c.default=s),c})}))}}define("./sw.js",["./workbox-d8fc897c"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"nKB-6Ft1jYaBQf8WjseYU"},{url:"/_next/static/chunks/13.5a23f43665dbfd5dbb14.js",revision:"2514015db48ab686dd3d6e37dcf7f7f1"},{url:"/_next/static/chunks/14.d2e449f17d737ae66269.js",revision:"f8ce3a9950fddd27836f1b09e043f924"},{url:"/_next/static/chunks/15.d76395620ff9d97db505.js",revision:"93ef482bd7170fb8f6d6f170051d6f99"},{url:"/_next/static/chunks/16.9a7c1336969bdfb594c3.js",revision:"c5d9ef28e472fab313b7eaf6ae24c474"},{url:"/_next/static/chunks/17.f756ee24e398b8b1c6f2.js",revision:"81b6910e3f447be37e5eb9d20e231de9"},{url:"/_next/static/chunks/18.7a5ad51b53f53894a353.js",revision:"658fc22c5d0d0e4278a74da5363c0368"},{url:"/_next/static/chunks/19.a548b6ddfeb5101bfaa3.js",revision:"768e5cbb01b08bab6f02b350dd0492df"},{url:"/_next/static/chunks/1d7de3dbcee8cc0ba1441789490f57b5dbab48f4.5e48bf5977f34f95f215.js",revision:"1104c04abdfaf2c59f845bf6a0c22461"},{url:"/_next/static/chunks/20.646780a75e6797184c20.js",revision:"a2f70945df101db4d341aec64039098c"},{url:"/_next/static/chunks/22.45334a6718ffeef8b2d3.js",revision:"cd9d4cef8691c22b353aa745f3fd4adb"},{url:"/_next/static/chunks/23.8c1bcf2801885036f4fb.js",revision:"0ed5db0d2cec95696c1aa75c439c6e0f"},{url:"/_next/static/chunks/24.51ce9fe28e2c8c3b9ecb.js",revision:"f175fdd4ab0682531b1720a975af38f5"},{url:"/_next/static/chunks/25.8a8b6090e2cc3026af98.js",revision:"0d937e6f206f45e1e3605c6af690b0b2"},{url:"/_next/static/chunks/26.0bb29948d1bc9b7580b8.js",revision:"1d8519f3f6000aa93d04728a5df398d0"},{url:"/_next/static/chunks/27.326654279d0c4e52a9c7.js",revision:"e83050807165e8ad5197c706b468a71e"},{url:"/_next/static/chunks/28.3b1aa512b2dcadab6a30.js",revision:"f25b643116756685bf9cbabf6e3ddc53"},{url:"/_next/static/chunks/29.4a46ae1bc89aaa018654.js",revision:"30b6af0fc7ea24087c807336edef189f"},{url:"/_next/static/chunks/31.c82c80a1eb22dd8fca1b.js",revision:"32620be3b0adfe86cfa1ab2697ae83be"},{url:"/_next/static/chunks/32.ec7418ee3b2fa0790b15.js",revision:"eaa283429138f4289ffd92c6f16a75d5"},{url:"/_next/static/chunks/33.da844f0b1c149f68def5.js",revision:"1effd873a426951b4aa5b8e52adac467"},{url:"/_next/static/chunks/6e718a903d2b2e8e5adbb27243021d89c3092835.48bed343ce448998f2e6.js",revision:"81f9fdc01e4866d297e9608506bffe49"},{url:"/_next/static/chunks/9c52c29b96d2a801339ded4fe12325569159951c.e9342f858c870d6b5456.js",revision:"638705c6fc5e83f5c1652c2b004b5ba9"},{url:"/_next/static/chunks/aa7211ef10ddeeb2b5b69fd333f2710cede69d3c.e7a1e113131f3888b8d7.js",revision:"c5fd3917f5fb3f7d6bf383a83e1fec0c"},{url:"/_next/static/chunks/framework.cd0bada2e78bd80de574.js",revision:"01280601953dd03ceb505456ad964e7a"},{url:"/_next/static/chunks/main-ca46882811e4c77da806.js",revision:"e711f1022f9594576179c8b6f83952dd"},{url:"/_next/static/chunks/pages/_app-147fdfca012183f3cdd7.js",revision:"26a9c4a86b5d8b8201e1325dca36e9f6"},{url:"/_next/static/chunks/pages/_error-9f9ba3ddda95c9822910.js",revision:"d62f1f1bf39bb3067d60a608278e8849"},{url:"/_next/static/chunks/pages/icons-fbcda91e8c8bf538dab2.js",revision:"dfc68355e6c5a3d3089eb381f1b3c4a9"},{url:"/_next/static/chunks/pages/index-03a88097ee7ce1a69486.js",revision:"c95612f766d23aa177333d0a1af1c205"},{url:"/_next/static/chunks/pages/search-a3078a6af86e69f37bad.js",revision:"a16c6539a67dd5f7b9c7b609edd288c9"},{url:"/_next/static/chunks/polyfills-8767c02c7b67810a8144.js",revision:"94efb455366e067bdbf17c784da05738"},{url:"/_next/static/chunks/webpack-2f60743333bd5af1319c.js",revision:"b677561502e2faa243fdf26eb5432fbc"},{url:"/_next/static/css/2c00a4f70d316ec83713.css",revision:"990577bdf503c03239f02bd213e80549"},{url:"/_next/static/nKB-6Ft1jYaBQf8WjseYU/_buildManifest.js",revision:"88525cd750eb2814c9cf61d15c47a166"},{url:"/_next/static/nKB-6Ft1jYaBQf8WjseYU/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/brand-icon.svg",revision:"33455d33822cd86a7b2e7c12be2688f6"},{url:"/favicon.png",revision:"217bba9d985038b5db0f675aadef1058"},{url:"/icons/icon-128x128.png",revision:"61141052122e82b0e4c106b6478053f7"},{url:"/icons/icon-144x144.png",revision:"d7041f383ef13f304ce0c8222c768687"},{url:"/icons/icon-152x152.png",revision:"e892614a0964881052f52449818355d2"},{url:"/icons/icon-192x192.png",revision:"09b80496ac709b0fceef80e2c89a5558"},{url:"/icons/icon-384x384.png",revision:"065ce43c918fae1157d9fa6757bc7685"},{url:"/icons/icon-512x512.png",revision:"c4642057e4afcfa6776064b99ae43a13"},{url:"/icons/icon-72x72.png",revision:"5fedad82387f7b30c250134c5a394688"},{url:"/icons/icon-96x96.png",revision:"2c3ea4bbe99ae01388b3dcd30b5d053d"},{url:"/manifest.json",revision:"95cea107ce25d574dcfc372c8d72408e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"POST"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
