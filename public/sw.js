const version = "1.03",
    preCache = "PRECACHE-" + version,
    cacheList = [
        "/",
        "manifest.json",
        "index.html",
        "js/Application.js",
        "static/js/bundle.js",
        "static/js/0.chunk.js",
        "static/js/1.chunk.js",
        "static/js/main.chunk.js",
        "img/MyTool192.png",
        "img/favicon.ico ",
        "Rabattrechner",
        "stundenlohnrechner",
        "MyData",
        "brottoNetto",
        "static/media/drawing.1d61db46.svg",
        // "img/MyTool192.png",
        // "img/MyTool192.png",
        // "img/MyTool192.png",
    ];

/*  Service Worker Event Handlers */

self.addEventListener("install", function(event) {

    console.log("Installing the service worker!");

    self.skipWaiting();

    caches.open(preCache)
        .then(cache => {

            cache.addAll(cacheList);

        });

});

self.addEventListener("activate", function(event) {

    event.waitUntil(

        caches.keys().then(cacheNames => {
            cacheNames.forEach(value => {

                if (value.indexOf(version) < 0) {
                    caches.delete(value);
                }

            });

            console.log("service worker activated");

            return;

        })

    );

});

self.addEventListener("fetch", function(event) {

    event.respondWith(

        caches.match(event.request)
        .then(function(response) {

            if (response) {
                return response;
            }

            return fetch(event.request);
        })
    );

});