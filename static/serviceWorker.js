const FILES_TO_CACHE = [
    "pudding.png",
    "/pages/index.js"
],
    CACHE_NAME = "static-v1"

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then((cache) => {
                console.log('ServiceWorker pre-caching offline')
                return cache.addAll(FILES_TO_CACHE)
            })
    )
})

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches
            .keys()
            .then(keys => Promise.all(keys.map(key => {
                if(key !== CACHE_NAME) {
                    console.log('ServiceWorker removing old cache')
                    return caches.delete(key)
                }
            })))
    )
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches
            .match(event.request)
            .then((res) => {
                if(res) return res
            console.log('ServiceWorker fetching page')
            return fetch(event.request)
            })
    )
})