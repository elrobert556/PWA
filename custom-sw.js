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