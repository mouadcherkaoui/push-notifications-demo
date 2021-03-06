// import { firebaseConfig } from './firebase-config';
// import { subscriptionItemTemplate } from './templates/subscription-item.js';

let messaging;//: firebase.messaging;
let firestore;//: firebase.firestore;

let publicVapidKey;
let customConfig = false;
let app;

function initializeWithConfig(config, publicVapidKey) {
    if(firebase.apps.length) 
        firebase.app()
            .delete()
            .then(() => {
                app = firebase.initializeApp(config);
            });
    else {
        app = firebase.initializeApp(config);        
    }
    console.log(app);

    // caches.open('fcm-sw').then((cache) => {
    //     cache.add(JSON.stringify({ firebaseConfig: config, publicVapidKey: publicVapidKey }));
    // });
    messaging = app.messaging();
    firestore = app.firestore();
}

initializeWithConfig(firebaseConfig, publicVapidKey);

function toggleConfig() {
    customConfig = !customConfig;
    if(customConfig){
        renderCustomConfigForm();
    }else {
        document.getElementById('custom-config-target').innerHTML = "";
    }
}

async function subscribeClient() {
    try {
        let identifier = document.getElementById('subscription-identifier').value;
        let description = document.getElementById('subscription-description').value;
        

        const token = await messaging.getToken();
        if (token) {
            sendTokenToServer({identifier, description, token});
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
            await subscribeClient();
        } else {
            console.log('permission denied');
        }
    } catch (error) {
        console.log(error);
    }
}

async function sendTokenToServer(subscription) {
    if (!isTokenSentToServer()) {
        const result = await firestore.collection('tokens').add(subscription);    
        var modal = CarbonComponents.Modal.components.get(document.getElementById('modal-lokx1olb9q'));
        modal.hide();    

        setTokenSentToServer(true);        
    }else {
        renderModal('secondary-modal-target', { id:'alert-modal', primary_action: 'setTokenSentToServer(false)', html_content: '<h3>content</h3>'});
        var modal = CarbonComponents.Modal.create(document.getElementById('alert-modal'));
        modal.show();        
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
