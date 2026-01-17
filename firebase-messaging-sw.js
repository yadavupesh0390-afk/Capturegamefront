importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBioiLSE3HyZh49yJv93MwnQFrmAm6wJ5g",
  authDomain: "shop-ab586.firebaseapp.com",
  projectId: "shop-ab586",
  storageBucket: "shop-ab586.firebasestorage.app",
  messagingSenderId: "603669325846",
  appId: "1:603669325846:web:00f3ccff7fa977bf542d37"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  console.log("📩 Background message:", payload);

  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: "/icon-192.png"
    }
  );
});
