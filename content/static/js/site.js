'use strict';
/*!
 * @license
 * Copyright 2019-2020 The Go Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
var _a;
(function registerHeaderListeners() {
  'use strict';
  const header = document.querySelector('.js-header');
  const menuButtons = document.querySelectorAll('.js-headerMenuButton');
  menuButtons.forEach(button => {
    button.addEventListener('click', e => {
      var _a;
      e.preventDefault();
      header === null || header === void 0 ? void 0 : header.classList.toggle('is-active');
      button.setAttribute(
        'aria-expanded',
        `${
          (_a =
            header === null || header === void 0
              ? void 0
              : header.classList.contains('is-active')) !== null && _a !== void 0
            ? _a
            : false
        }`
      );
    });
  });
  const scrim = document.querySelector('.js-scrim');
  if (scrim && scrim.hasOwnProperty('addEventListener')) {
    scrim.addEventListener('click', e => {
      e.preventDefault();
      header === null || header === void 0 ? void 0 : header.classList.remove('is-active');
      menuButtons.forEach(button => {
        var _a;
        button.setAttribute(
          'aria-expanded',
          `${
            (_a =
              header === null || header === void 0
                ? void 0
                : header.classList.contains('is-active')) !== null && _a !== void 0
              ? _a
              : false
          }`
        );
      });
    });
  }
})();
(function setupGoogleTagManager() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  });
})();
function removeUTMSource() {
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source');
  if (utmSource !== 'gopls' && utmSource !== 'godoc') {
    return;
  }
  const newURL = new URL(window.location.href);
  urlParams.delete('utm_source');
  newURL.search = urlParams.toString();
  window.history.replaceState(null, '', newURL.toString());
}
if (
  ((_a = document.querySelector('.js-gtmID')) === null || _a === void 0
    ? void 0
    : _a.dataset.gtmid) &&
  window.dataLayer
) {
  window.dataLayer.push(function () {
    removeUTMSource();
  });
} else {
  removeUTMSource();
}
//# sourceMappingURL=site.js.map
