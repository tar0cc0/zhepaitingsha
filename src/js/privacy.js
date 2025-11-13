"use strict";

import { getLangFromQueryParams, runI18nByLang } from './lang.js';

document.addEventListener('DOMContentLoaded', function() {
  const lang = getLangFromQueryParams();
  runI18nByLang(lang);
  document.getElementById('privacy-back-link').href = `./?lang=${lang}`;
  document.querySelectorAll('.privacy-content-section').forEach(s => s.classList.add('disabled'));
  document.querySelector(`.privacy-content-section[data-lang="${lang}"]`).classList.remove('disabled');
});

// Disable the link for current language
document.querySelectorAll('.privacy-lang-link').forEach(link => {
  const lang = getLangFromQueryParams();
  if (link.dataset.lang === lang) {
    link.classList.add('disabled');
    link.setAttribute('aria-disabled', 'true');
    link.addEventListener('click', function(e) {
      e.preventDefault();
    });
  }
});
