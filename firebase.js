// firebase.js (frontend)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSyBioiLSE3HyZh49yJv93MwnQFrmAm6wJ5g",
  authDomain: "shop-ab586.firebaseapp.com",
  projectId: "shop-ab586",
  messagingSenderId: "603669325846",
  appId: "1:603669325846:web:00f3ccff7fa977bf542d37"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// User login ke baad token get karo
export const getFCMToken = async () => {
  try {
    const token = await getToken(messaging, { vapidKey: "BFcKfbosO2sXWogZ5fBBt31vEkw_1iwgQWVrZjAJ90pXdhdFBSbXM_Oppuoxm-QIidekMzIQdcl3XrJy0ltkC8s" });
    console.log("FCM TOKEN:", token);
    return token;
  } catch (err) {
    console.error("FCM TOKEN ERROR:", err);
    return null;
  }
};

// Incoming foreground messages
onMessage(messaging, (payload) => {
  console.log("Foreground message:", payload);
});
