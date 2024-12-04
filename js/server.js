const express = require('express');
const bodyParser = require('body-parser');
const webPush = require('web-push');
const cors = require('cors');

const app = express();

// Configuración CORS para permitir solicitudes desde el dominio de producción (GitHub Pages)
app.use(cors({
  origin: 'https://elrobert556.github.io/PWA', // Cambia esto por tu dominio de GitHub Pages
  methods: ['GET', 'POST'],  // Métodos permitidos
  allowedHeaders: ['Content-Type'], // Encabezados permitidos
}));

app.use(bodyParser.json());

// Claves VAPID (deben ser únicas y generadas una vez)
const vapidKeys = webPush.generateVAPIDKeys();

// Configura las claves VAPID
webPush.setVapidDetails(
  'mailto:tu-email@ejemplo.com',  // Tu correo de contacto
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

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
