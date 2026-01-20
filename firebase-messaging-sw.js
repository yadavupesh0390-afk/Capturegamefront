importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBioiLSE3HyZh49yJv93MwnQFrmAm6wJ5g",
  projectId: "shop-ab586",
  messagingSenderId: "603669325846",
  appId: "1:603669325846:web:00f3ccff7fa977bf542d37"
});

const messaging = firebase.messaging();

/* 🔔 Background notification */
messaging.onBackgroundMessage(payload => {
  const title = payload.notification?.title || "Bazaar Sathi";

  self.registration.showNotification(title, {
    body: payload.notification?.body,
    icon: "/icon-192.png",   // optional
    data: {
      url: payload.data?.url || "https://bazaarsathi.vercel.app/wholesaler/dashboard"
    }
  });
});

/* 🖱️ Click open dashboard */
self.addEventListener("notificationclick", event => {
  event.notification.close();

  const openUrl = event.notification.data.url;

  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true })
      .then(clientList => {
        for (const client of clientList) {
          if (client.url.includes(openUrl) && "focus" in client) {
            return client.focus();
          }
        }
        return clients.openWindow(openUrl);
      })
  );
});
