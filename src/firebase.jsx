import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported as isAnalyticsSupported } from "firebase/analytics";
import { getMessaging, isSupported as isMessagingSupported } from "firebase/messaging";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCw-xb9AVmi0QGBoLdx8T42OMDBuXBdIDg",
  authDomain: "homeetute.firebaseapp.com",
  projectId: "homeetute",
  storageBucket: "homeetute.appspot.com",
  messagingSenderId: "210815607701",
  appId: "1:210815607701:web:147c2adbf26039f80f8c9c",
  measurementId: "G-PZ1JHY36BX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export const storage = getStorage(app);
export const database = getDatabase(app);

// Analytics (safe check)
let analytics;
if (typeof window !== "undefined") {
  isAnalyticsSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

// Messaging (safe check)
let messaging;
if (typeof window !== "undefined") {
  isMessagingSupported().then((supported) => {
    if (supported) {
      messaging = getMessaging(app);
    }
  });
}

export { messaging, analytics };
export default db;
