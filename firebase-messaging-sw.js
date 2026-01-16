/* Firebase App (compat) */
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");

/* Firebase Init */
firebase.initializeApp({
  apiKey: "AIzaSyBioiLSE3HyZh49yJv93MwnQFrmAm6wJ5g",
  authDomain: "shop-ab586.firebaseapp.com",
  projectId: "shop-ab586",
  messagingSenderId: "603669325846",
  appId: "1:603669325846:web:00f3ccff7fa977bf542d37"
});

/* Messaging instance */
const messaging = firebase.messaging();

/* 🔔 Background Notification Handler */
messaging.onBackgroundMessage((payload) => {
  console.log("📩 Background FCM Message:", payload);

  const title = payload?.notification?.title || "New Notification";
  const body  = payload?.notification?.body  || "";

  self.registration.showNotification(title, {
    body: body,

    // ✅ SAFE ICON (no path issue)
    icon: "https://shop-ab586.firebaseapp.com/favicon.ico",

    // optional
    data: payload?.data || {}
  });
});
