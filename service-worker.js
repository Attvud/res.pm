if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const o=e=>n(e,a),r={module:{uri:a},exports:t,require:o};s[a]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(c(...e),t)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/664-e9e57813eff8aee0.js",revision:"e9e57813eff8aee0"},{url:"/_next/static/chunks/framework-3581bb99e4b98af8.js",revision:"3581bb99e4b98af8"},{url:"/_next/static/chunks/main-b010f0771f4fa94f.js",revision:"b010f0771f4fa94f"},{url:"/_next/static/chunks/pages/404-d19c98b3b731fc24.js",revision:"d19c98b3b731fc24"},{url:"/_next/static/chunks/pages/_app-31c3c37992081d9b.js",revision:"31c3c37992081d9b"},{url:"/_next/static/chunks/pages/_error-6e6353f79838677c.js",revision:"6e6353f79838677c"},{url:"/_next/static/chunks/pages/contacts-4091ec809aa8d9a7.js",revision:"4091ec809aa8d9a7"},{url:"/_next/static/chunks/pages/index-61e4bcaf7b7a2c14.js",revision:"61e4bcaf7b7a2c14"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-34c76af51fb9f015.js",revision:"34c76af51fb9f015"},{url:"/_next/static/css/169df1bed0f113fa.css",revision:"169df1bed0f113fa"},{url:"/_next/static/css/c18a1cb43b5eed5c.css",revision:"c18a1cb43b5eed5c"},{url:"/_next/static/vKhosW-tPIRbbLuIFCfP3/_buildManifest.js",revision:"1fdb0f7870b9a212b433ae62aff4fa2f"},{url:"/_next/static/vKhosW-tPIRbbLuIFCfP3/_middlewareManifest.js",revision:"468e9a0ecca0c65bcb0ee673b762445d"},{url:"/_next/static/vKhosW-tPIRbbLuIFCfP3/_ssgManifest.js",revision:"5352cb582146311d1540f6075d1f265e"},{url:"/files/docs/Artem-Attvud-CV.pdf",revision:"3ce4a92445deb948b5c6b332855ac07b"},{url:"/files/img/001.jpg",revision:"be91d8aa4bbd48e7cd9580e8dc123600"},{url:"/files/img/open-graph.jpg",revision:"174d31a7c2bacefc4b5f164f344f3b30"},{url:"/icons/favicon-16x16.png",revision:"6bc271af9ea41727b44327956e62f07a"},{url:"/icons/favicon-32x32.png",revision:"dc1992182785395272e7e9b917c8f4b1"},{url:"/icons/favicon.ico",revision:"b754f817efde1c49660e10cb9da99ab7"},{url:"/icons/favicon.svg",revision:"ab1b001ba42bfa2580bb8516801ce9b9"},{url:"/icons/icon-128x128.png",revision:"12fc76d73b61ed1203a38c6a2fc3b06e"},{url:"/icons/icon-144x144.png",revision:"d0518679c841a4d1915e8af820ae7ec1"},{url:"/icons/icon-152x152.png",revision:"6fa56f6b933480179a817109ad7cebef"},{url:"/icons/icon-192x192.png",revision:"55b260d328dff698ebf0dfade01b9065"},{url:"/icons/icon-384x384.png",revision:"bd14d521bc57ab735d795cbf1a1a87f5"},{url:"/icons/icon-512x512.png",revision:"71a291d5538c207d6b0b8ff859770705"},{url:"/icons/icon-72x72.png",revision:"e29119641ef559c67df5f9fb4ab7659f"},{url:"/icons/icon-96x96.png",revision:"9c887b739e1c414a2fb0cec31a0e9448"},{url:"/manifest.json",revision:"5edf4a5570397523e54627903586ad96"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
