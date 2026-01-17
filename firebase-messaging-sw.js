/* firebase-messaging-sw.js */

/* Firebase compat libraries (Service Worker ke liye required) */
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");

/* Firebase config */
firebase.initializeApp({
  apiKey: "AIzaSyBioiLSE3HyZh49yJv93MwnQFrmAm6wJ5g",
  authDomain: "shop-ab586.firebaseapp.com",
  projectId: "shop-ab586",
  messagingSenderId: "603669325846",
  appId: "1:603669325846:web:00f3ccff7fa977bf542d37"
});

/* Messaging instance */
const messaging = firebase.messaging();

/* 🔔 Background Notifications */
messaging.onBackgroundMessage((payload) => {
  console.log("📩 Background Notification received:", payload);

  const title = payload.notification?.title || "New Notification";
  const options = {
    body: payload.notification?.body || "",
    icon: "/logo.png",       // optional
    badge: "/badge.png",     // optional
    data: payload.data || {}
  };

  self.registration.showNotification(title, options);
});

/* 🖱 Notification click handler (optional but recommended) */
self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      if (clientList.length > 0) {
        clientList[0].focus();
      } else {
        clients.openWindow("/");
      }
    })
  );
});
