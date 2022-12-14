// Source index.js para llamar el Service Worker

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js').catch((error) => {
		console.log(error.message);
	});
}

// Source sw.js
const VERSION = 'V1';

self.addEventListener('install', (event) => {
	event.waitUntil(precache());
});

self.addEventListener('fetch', (event) => {
	const request = event.request;
	// Only GET
	if (request.method !== 'GET') {
		return;
	}

	// buscamos en cache
	event.respondWith(cachedResponse(request));

	// actualizamos el cache
	event.waitUntil(updateCache(request));
});

async function precache() {
	const cache = await caches.open(VERSION);
	return cache.addAll([
		'/',
		'/index.html',
		'/assets/index.js',
		'/assets/MediaPlayer.js',
		'/assets/plugins/AutoPlay.js',
		'/assets/plugins/AutoPause.js',
		'/assets/index.css',
		'/assets/BigBuckBunny.mp4',
	]);
}

async function cachedResponse(request) {
	const cache = await caches.open(VERSION);
	const response = await cache.match(request);
	return response || fetch(request);
}

async function updateCache(request) {
	const cache = await caches.open(VERSION);
	const response = await fetch(request);
	return cache.put(request, response);
}
