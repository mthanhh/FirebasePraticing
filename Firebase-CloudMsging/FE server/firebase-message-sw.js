importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js",
);
importScripts(
  "https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js",
);

firebase.initializeApp({
  apiKey: "AIzaSyBLmycYHX4rB7N7cVYPFeACMxecEh2FUTs",
  authDomain: "fir-firebase-cloudmsging.firebaseapp.com",
  projectId: "fir-firebase-cloudmsging",
  storageBucket: "fir-firebase-cloudmsging.appspot.com",
  messagingSenderId: "494440780502",
  appId: "1:494440780502:web:6654686d68b673b4f16f77",
  measurementId: "G-04Y6MNWK5C"
});

const messaging = firebase.messaging();

// messaging.setBackgroundMessageHandler(function (payload) {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload,
//   );
//   const notificationTitle = "Background Message Title";
//   const notificationOptions = {
//     body: "Background Message body.",
//   };
//   return self.registration.showNotification(
//     notificationTitle,
//     notificationOptions,
//   );
// });
