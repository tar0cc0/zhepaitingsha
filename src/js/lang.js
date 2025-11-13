"use strict";

import langData from '../lang/lang.json' with { type: "json" };

function getLangFromQueryParams() {
  const urlParams = new URLSearchParams(window.location.search);
  let lang = urlParams.get('lang');
  if (!['zh', 'en'].includes(lang)) lang = 'zh';
  return lang;
}

// Based on the given argument, replace text with translation for elements with attribute text-i18n-key
function runI18nByLang(lang) {
  const elementsWithI18n = document.querySelectorAll('[text-i18n-key]');
  for (let elem of elementsWithI18n) {
    let key = elem.getAttribute('text-i18n-key');
    elem.innerHTML = langData[key][lang];
    elem.style.visibility = 'visible';  // Make element visible after translation is loaded
  }
}

export { getLangFromQueryParams, runI18nByLang };
