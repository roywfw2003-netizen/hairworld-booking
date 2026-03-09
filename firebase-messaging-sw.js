importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCTgUIWXKjNZqp-bC1jk-XxZvoMihs6vO4",
  authDomain: "hairworld-2026.firebaseapp.com",
  projectId: "hairworld-2026",
  storageBucket: "hairworld-2026.firebasestorage.app",
  messagingSenderId: "531811271889",
  appId: "1:531811271889:web:62bf3e37996b9b154831f0"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});