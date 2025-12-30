// sw.js - The Service Worker
self.addEventListener('push', function(event) {
    const options = {
        body: event.data ? event.data.text() : 'The New Dawn is 60 seconds away!',
        icon: 'logo.png',
        badge: 'logo.png', // Small icon for the status bar
        vibrate: [200, 100, 200],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '1'
        },
        actions: [
            {action: 'explore', title: 'Open the Digital Telegraph'}
        ]
    };

    event.waitUntil(
        self.registration.showNotification('🎩 Victorian Youth: 2026', options)
    );
});

// Listener for when the user clicks the notification
self.onnotificationclick = function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('https://roosewelt-nacth.github.io/nye2026/')
    );
};