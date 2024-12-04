const express = require('express');
const bodyParser = require('body-parser');
const webPush = require('web-push');

const app = express();
app.use(bodyParser.json());

// Claves VAPID (deben ser únicas y generadas una vez)
const vapidKeys = webPush.generateVAPIDKeys();

// Configura las claves VAPID
webPush.setVapidDetails(
  'mailto:tu-email@ejemplo.com', // Email de contacto
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// Almacén de suscripciones (en memoria para este ejemplo)
const subscriptions = [];

// Endpoint para obtener la clave pública VAPID
app.get('/vapidPublicKey', (req, res) => {
  res.send({ publicKey: vapidKeys.publicKey });
});

// Endpoint para registrar suscripciones
app.post('/subscribe', (req, res) => {
  const subscription = req.body;
  subscriptions.push(subscription);
  res.status(201).send({ message: 'Suscripción registrada' });
});

// Endpoint para enviar notificaciones push
app.post('/sendNotification', (req, res) => {
  const { title, body } = req.body;

  // Enviar notificación a cada suscripción
  subscriptions.forEach((subscription) => {
    const payload = JSON.stringify({ title, body });

    webPush.sendNotification(subscription, payload).catch((err) => {
      console.error('Error al enviar notificación:', err);
    });
  });

  res.status(200).send({ message: 'Notificaciones enviadas' });
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log('Clave pública VAPID:', vapidKeys.publicKey);
});
