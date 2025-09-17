importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyAE0RJ5LEQ0AQT6G05UHc15FSTilVqu0vc",
    authDomain: "anal-messenger.firebaseapp.com",
    projectId: "anal-messenger",
    storageBucket: "anal-messenger.firebasestorage.app",
    messagingSenderId: "302872384307",
    appId: "1:302872384307:web:48ef1f9af350a0d476e446"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Обработка фоновых сообщений
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/icon-192x192.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
