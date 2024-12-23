if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let o={};const n=e=>i(e,a),b={module:{uri:a},exports:o,require:n};s[a]=Promise.all(c.map((e=>b[e]||n(e)))).then((e=>(r(...e),o)))}}define(["./workbox-6c9c7848"],(function(e){"use strict";importScripts("custom-sw.js"),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/styles.css",revision:"a34ffd1f70317e4348cee7546848ba06"},{url:"custom-sw.js",revision:"c5a3d5c6b6b874e3f34cb35fa0cce0f9"},{url:"img/ensalada-cesar.jpg",revision:"ce5eeb45ac8e738c1dbf6ffaace05bb6"},{url:"img/espagueti-carbonara.jpg",revision:"165d23e9498384a1d5f3068691bba7a6"},{url:"img/hamburguesa.webp",revision:"2a4f796a530cea9cc3e36ea3461cf15a"},{url:"img/hotcakes.jpg",revision:"c8969bc9d88f5d9058dd8dfc9de9a464"},{url:"img/icon.png",revision:"0138ab4b41aa19257a6e86f6f4d7d150"},{url:"img/papa-rellena.webp",revision:"734ec4bd355d172c6f78b342c698d117"},{url:"img/recetas-con-pechuga-de-pollo.jpg",revision:"7e62780b0de6b6366f5e099cabb632e2"},{url:"img/tacos-pescado.jpg",revision:"29237314967f70917dc548b4913f5697"},{url:"img/tacos.webp",revision:"db3850ba6e20fd0762558b6618945a78"},{url:"index.html",revision:"ce0b942e69a4a9e5c6569ddb538cdeca"},{url:"js/script.js",revision:"4dec3fe3200ff991baf2b7aee78fd004"},{url:"js/server.js",revision:"832945b4b51e58400de221b79d94ed45"},{url:"manifest.json",revision:"d8ab40b38703882d329e6bac51eb87eb"},{url:"package-lock.json",revision:"0775c08ec753c39f6caf2bc6ba4a7406"},{url:"package.json",revision:"ba2f490eed4253a99b0fe1020f5a382c"},{url:"sw-base.js",revision:"c29f004306dd36cb65be779e51459db0"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
self.addEventListener('push', function (event) {
    const data = event.data.json(); // Parsear el mensaje
    const options = {
      body: data.body,
      icon: 'img/icon.png', // Icono de la notificación
    };
  
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
});

navigator.serviceWorker.ready.then(function(registration) {
    return registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
    });
  }).then(function(subscription) {
    console.log('Subscription:', subscription);
    // Aquí puedes enviar esta suscripción a tu servidor
    fetch('/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(subscription)
    });
});