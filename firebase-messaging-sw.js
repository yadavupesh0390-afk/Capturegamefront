/* firebase-messaging-sw.js */

/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

// 🔥 Firebase config (same as frontend)
firebase.initializeApp({
  apiKey: "AIzaSyBioiLSE3HyZh49yJv93MwnQFrmAm6wJ5g",
  authDomain: "shop-ab586.firebaseapp.com",
  projectId: "shop-ab586",
  storageBucket: "shop-ab586.firebasestorage.app",
  messagingSenderId: "603669325846",
  appId: "1:603669325846:web:00f3ccff7fa977bf542d37"
});

// 🔔 Messaging instance
const messaging = firebase.messaging();

// ✅ Background notification handler
messaging.onBackgroundMessage(function (payload) {
  console.log("📩 Background Message received:", payload);

  const title = payload.notification?.title || "New Notification";
  const options = {
    body: payload.notification?.body || "",
    icon: "/logo.png",   // optional
    badge: "/logo.png"  // optional
  };

  self.registration.showNotification(title, options);
});
