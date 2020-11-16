// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD97qANmG63Y_hxrWne13hzT4CYzDLntME",
    authDomain: "socialize-push.firebaseapp.com",
    databaseURL: "https://socialize-push.firebaseio.com",
    projectId: "socialize-push",
    storageBucket: "socialize-push.appspot.com",
    messagingSenderId: "386080765485",
    appId: "1:386080765485:web:63da65394f72b1a9fcaaa4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
const firestore = firebase.firestore();

// getStartToken()
//     .then((token) => {
//         messaging.onMessage(function (payload) {
//             console.log("onMessage", payload);
//         });
//         console.log(token);
//     })
//     .catch(err => console.log(err));


async function getStartToken() {
    try {
        const token = await messaging.getToken();
        if (token) {
            sendTokenToServer(token);
            return token;
        } else {
            await RequestPermission();
            setTokenSentToServer(false);
        }
    } catch (error) {
        setTokenSentToServer(false);
        console.log(error);
    }
}

async function RequestPermission() {
    try {
        const permission = await messaging.requestPermission()
        if (permission === 'granted') {
            console.log('permission granted');
            await getStartToken();
        } else {
            console.log('permission denied');
        }
    } catch (error) {
        console.log(error);
    }
}

async function sendTokenToServer(token) {
    if (!isTokenSentToServer()) {
        const result = await firestore.collection('tokens').add({
            token: token
        });
        console.log(result);
        setTokenSentToServer(true);
    }
}

function isTokenSentToServer() {
    return window.localStorage.getItem('sendTokenToServer') === '1';
}

function setTokenSentToServer(sent) {
    window.localStorage.setItem('sendTokenToServer', sent ? '1' : '0');
}