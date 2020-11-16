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


async function subscrbeClient() {
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
            await subscrbeClient();
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


var tabs = [{
        id: "tab1",
        title: 'subscriptions',
        content: '<p><b>content1</b></p>'
    },
    {
        id: "tab2",
        title: 'subscriptions',
        content: '<p><b>content1</b></p>'
    },
    {
        id: "tab3",
        title: 'subscriptions',
        content: '<p><b>content1</b></p>'
    }
];

function showSubscriptionWizard() {
    var modal = document.getElementById('modal-lokx1olb9q');
    modal.setAttribute('visibility', 'block');
}

var _tokens = [];

function getTokensCollectionItems() {
    tokensRef = firebase.firestore().collection('tokens');
    tokensRef.onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
            if (change.type === 'added') {
                _tokens.push({
                    id: change.doc.id,
                    ...change.doc.data()
                });
            }
        });
        console.log(_tokens);
        renderTokenItems();
    });
}

function renderTokenItems() {
    var template = Handlebars.compile(document.getElementById('subscription-item').innerHTML);
    var rendered = template({
        tokens: _tokens
    });
    document.getElementById('target').innerHTML = rendered;
}

function sendNotification(token) {
    $.ajax('https://fcm.googleapis.com/fcm/send', {
        headers: [{
                'Content-Type': 'application/json'
            },
            {
                'Authorization': 'AAAAWeQ09i0:APA91bGFCjMvlMlIXRGkqFyKb_of6jQDMQjyo9GbfwtrhG3vtZyYBZLZSG5TYZddTIuqLX_ziCT-_vMsWnGCfQhNYWPcawsziPN0ozZsWLujb9j4caV8nLDUHcf_IjnY2ml61qkH2H09'
            }
        ],
        data: {
            "data": {
                "title": "from powershell test data",
                "body": "body"
            },
            "body": {
                "title": "from powershell test",
                "content": "test"
            },
            "to": token
        },
        method: 'POST'
    });
}