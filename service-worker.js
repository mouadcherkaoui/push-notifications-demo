self.addEventListener('push', (e) => {
    e.waitUntil(self.registration.showNotification('test message', {}));
    console.log(e);
});
