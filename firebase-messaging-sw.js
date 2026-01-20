importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBioiLSE3HyZh49yJv93MwnQFrmAm6wJ5g",
  authDomain: "shop-ab586.firebaseapp.com",
  projectId: "shop-ab586",
  messagingSenderId: "603669325846",
  appId: "1:603669325846:web:00f3ccff7fa977bf542d37"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: "/icon-192.png",
      data: payload.data
    }
  );
});

self.addEventListener("notificationclick", event => {
  event.notification.close();

  const role = event.notification.data?.role;

  let url = "/";
  if (role === "delivery") url = "/delivery.html";
  else url = "/wholesaler.html";

  event.waitUntil(
    clients.openWindow(url)
  );
});
