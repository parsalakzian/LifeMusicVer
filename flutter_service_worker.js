'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "588773e6df3a086f72b299957af8143c",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"version.json": "a8eb99403839256bddab86d0f64a5800",
"favicon.ico": "6821b06b90e73665dcd68cb8c87471ca",
"index.html": "7a1a997bc0b37d1377698fad00650cbb",
"/": "7a1a997bc0b37d1377698fad00650cbb",
"icons/Icon-maskable-512.png": "45d43d77b7737453447d6c801345f22b",
"icons/Icon-192.png": "208b87360ee3146f0623523c215e564f",
"icons/icon-192-maskable.png": "350ac0ad19c4fcda5210081f559b2d79",
"icons/Icon-512.png": "b34a52d876d0e11ff9aee27ad5e05229",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1e17b1ec3152f29bf783bd42db8b6023",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "093d2cde7075fcffb24ab215668d0da2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5ac99533bd9dc46227434b4853c3e532",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/NOTICES": "d8b78d3f9add9b8f66dde9f843afd3d9",
"assets/AssetManifest.json": "7dae66cb43e27b0516495dca34c605bc",
"assets/AssetManifest.bin.json": "654e9155349d3dcf19dbcb8f6208abd1",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/assets/gifs/work.gif": "05517ebd2de835de4f408e686a2206c8",
"assets/assets/gifs/game.gif": "d36145f244c94db34a35d3e198a59589",
"assets/assets/gifs/roll.gif": "292ce0e19c14944b73b30333b861e740",
"assets/assets/gifs/projects.gif": "f194c53cb22cc3a9ac706fefe2ac4bd8",
"assets/assets/gifs/go.gif": "6bd21d6d541c056c5ebc23e6cbfd05eb",
"assets/assets/gifs/fin.gif": "6f5c58cbdb45d470fb21054337bbe0a4",
"assets/assets/icons/youtube.svg": "363aa8888c16180c5aed84a805a9a6b2",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/instagram.svg": "4c7ce1b03d039e985ccc196099fde994",
"assets/assets/icons/linkedin.svg": "2d331657904bdd184bd0cd82140c871c",
"assets/assets/images/sun.png": "18dfc536ae939604c3e4c6dadb535429",
"assets/assets/images/logo.png": "cfba1fdad81a21c63ae986d013dff538",
"assets/assets/images/github.png": "49ce671d71ef625b9e90aca6286bb1ce",
"assets/assets/images/barista_dash.png": "43b335dfaedf338f085669d0aabd4d08",
"assets/assets/images/tenant_dash.png": "a01a95bb9d628b92b29385ccadcbd100",
"assets/assets/images/threads_dash.png": "08100648951860bc4d25d7cb1d8419c7",
"assets/assets/images/black.jpg": "f9074fffd52042b93f097aa3bd77b008",
"assets/assets/images/moon.png": "47009ed126ab16e8d4fd17310c27197a",
"assets/assets/images/linkedin_480.png": "9a642c22165f5b493639d2f8101efac9",
"assets/assets/images/github_850.png": "062344fc16dc0a101cd62205f58aae0c",
"assets/assets/images/bdo_light.png": "41864209c0fccbf6553c31e7d7cc4187",
"assets/assets/images/epona_dash.png": "9ed73aeaa9a08d7658612e2828d63169",
"assets/assets/images/bdo_logo.png": "f19c0de7068aa43db644749e0516eafa",
"assets/assets/images/maviarge.png": "6356689e75d1f5ef3294c3ca570ec1b6",
"assets/assets/readme/screenshots/5.png": "060d50fbb65273d85c37e3bb294dec2c",
"assets/assets/readme/screenshots/7.png": "30d495f195cd5da39fd23f91cd8270ae",
"assets/assets/readme/screenshots/4.png": "ff6b368cdcfe678d3c41ba2c8922650e",
"assets/assets/readme/screenshots/1.png": "3a90511bd3ad14b6209dd109f170d034",
"assets/assets/readme/screenshots/home_dark.png": "b361c4f7a912d36dd6469489d355cff4",
"assets/assets/readme/screenshots/2.png": "abfd6ac42319b10e947cd6a155c06626",
"assets/assets/readme/screenshots/projects.png": "bb211ced90d5b173a286cdca3270f533",
"assets/assets/readme/screenshots/projects_dark.png": "9e451ef2503b6fadf6ccace45ac72aa5",
"assets/assets/readme/screenshots/home_light.png": "5c8f8704e8f0cec4b9fd20a883444f3e",
"assets/assets/readme/screenshots/6.png": "609cbdfb4e9e9f95af9db543d6f6608f",
"assets/assets/readme/screenshots/3.png": "dd79231cfc5c6e43c140fc56252fe9b9",
"assets/AssetManifest.bin": "fb85d4e4e11c39bc0dcc190e03ef762c",
"assets/fonts/MaterialIcons-Regular.otf": "e74d4d885cfab8b66fc0df3fe763bd36",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"main.dart.js": "b95d4ad6c6397e8a953e3366e44e728b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
