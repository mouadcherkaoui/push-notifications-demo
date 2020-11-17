// import { firebaseConfig } from './firebase-config';
// import { subscriptionItemTemplate } from './templates/subscription-item.js';

renderModal();

let messaging;//: firebase.messaging;
let firestore;//: firebase.firestore;

function initializeWithConfig(config, publicVapidKey) {
    firebase.initializeApp(config);
    messaging = firebase.messaging();
    firestore = firebase.firestore();
}

initializeWithConfig(firebaseConfig);

async function subscribeClient() {
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

function renderModal() {
    var modal = Handlebars.compile(modalTemplate);
    rendered = modal({});
    document.getElementById('modal-target').innerHTML = rendered;
}

function showSubscriptionWizard() {
    var modal = document.getElementById('modal-lokx1olb9q');
    modal.setAttribute('visibility', 'block');
}

var _tokens = [];

function getTokensCollectionItems() {
    tokensRef = firestore.collection('tokens');
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
    var template = Handlebars.compile(subscriptionItemTemplate);
    var rendered = template({
        tokens: _tokens
    });
    document.getElementById('target').innerHTML = rendered;
}
