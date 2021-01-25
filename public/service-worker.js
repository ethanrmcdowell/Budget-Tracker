const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";
const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/index.js",
    "/styles.css",
    "/manifest.webmanifest",
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png",
    "/db.js"
];

// INSTALL

self.addEventListener("install", (event) => {
    // PRE-CACHE ALL STATIC ASSETS
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    // TELL BROWSER TO ACTIVATE SERVICE WORKER WHEN INSTALLATION/CACHE IS COMPLETE
    self.skipWaiting();
});

// ACTIVATE
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(
                keyList.map(key => {
                    if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
                        console.log("Removing old cache data.", key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    self.clients.claim();
});




// FETCH
self.addEventListener("fetch", (event) => {
    if (event.request.url.includes("/api/transaction/")) {
        event.respondWith(
            caches.open(DATA_CACHE_NAME).then(cache => {
                return fetch(event.request).then(response => {
                    // IF STATUS CODE RECEIVED IS 200 (GOOD), GETS CLONED AND STORED IN CACHE
                    if (response.status === 200) {
                        cache.put(event.request.url, response.clone());
                    }
                    return response;
                }).catch(err => {
                    // IF FETCH NETWORK REQUEST FAILLED, TRIES CACHE
                    return cache.match(event.request);
                });
            }).catch(err => console.log(err))
        );
        return;
    }
    event.respondWith(
        caches.open(CACHE_NAME).then(cache => {
            return cache.match(event.request).then(response => {
                return response || fetch(event.request);
            });
        })
    );
});