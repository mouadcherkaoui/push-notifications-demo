importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDOCAbC123dEf456GhI789jKl01-MnO",
    authDomain: "myapp-project-123.firebaseapp.com",
    databaseURL: "https://myapp-project-123.firebaseio.com",
    projectId: "myapp-project-123",
    storageBucket: "myapp-project-123.appspot.com",
    messagingSenderId: "65211879809",
    appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
};


function initializeWithConfig(config, publicVapidKey) {
    firebase.initializeApp(config);
    const messaging = firebase.app().messaging();
    
    messaging.usePublicVapidKey(publicVapidKey);
    messaging.onBackgroundMessage(function (payload) {
        const notificationTitle = payload.data.title;
        const notificationOptions = {
            body: payload.data.body,
            icon: '',
            data: {
                url: payload.data.utl
            }, //the url which we gonna use later
        };
        return self.registration.showNotification(notificationTitle, notificationOptions);
    });
}

let publicVapidKey = 'BH3RMd7zUDygYXo-UC9xES2dXdglgiwcSjs7PxWHwAjswoUgkn_aO5LM8pQGeYSeBn1SU3f11gnRlTiQsCYicic';

//let customConfig;

// caches.open('fcm-sw').then((cache) => {
//     customConfig = JSON.parse(cache.get('config'));
// });
/*
if(customConfig){
    firebaseConfig = customConfig.firebaseConfig;
    publicVapidKey = customConfig.publicVapidKey;
}
*/
initializeWithConfig(firebaseConfig, publicVapidKey);

//Code for adding event on click of notification
self.addEventListener('notificationclick', function (event) {
    let url = event.notification.data.url;
    event.notification.close();
    event.waitUntil(
        clients.matchAll({
            type: 'window'
        }).then(windowClients => {
            // Check if there is already a window/tab open with the target URL
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                // If so, just focus it.
                if (client.url === url && 'focus' in client) {
                    return client.focus();
                }
            }
            // If not, then open the target URL in a new window/tab.
            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );
});