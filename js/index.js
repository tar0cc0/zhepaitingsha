"use strict";

import { generateWaitingTiles, getRandomSuit } from './mjutil.js';
import langData from '../lang/lang.json' with { type: "json" };

document.addEventListener('DOMContentLoaded', function() {
  internationalize();
  renderNewTiles();
});

document.getElementById('next-puzzle').addEventListener('click', function() {
  renderNewTiles();
});

document.getElementById('reveal-waited-tiles').addEventListener('click', function() {
  document.getElementById('waited-tiles').style.visibility = 'visible';
  this.disabled = true;
});

// Disable the link for current language
document.querySelectorAll('.lang-link').forEach(link => {
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get('lang') || 'zh';
  if (link.id === `lang-${lang}`) {
    link.classList.add('disabled');
    link.setAttribute('aria-disabled', 'true');
    link.addEventListener('click', function(e) {
      e.preventDefault();
    });
  }
});

// Based on URL parameter "lang", replace text with translation for elements with attribute text-i18n
function internationalize() {
  const elementsWithI18n = document.querySelectorAll('[text-i18n]');
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get('lang') || 'zh';  // Default to Chinese
  for (let elem of elementsWithI18n) {
    elem.innerHTML = elem.innerHTML.replace(/{{(.*?)}}/g, function($0) {  // Match every occurrence of "{{key}}"
      let key = $0.slice(2, -2);  // Extract "key" from "{{key}}"
      return langData[key][lang];
    });
    elem.style.visibility = 'visible';  // Make element visible after translation is loaded
  }
}

function renderNewTiles() {
  let [ waitingTiles, waitedTiles ] = getRandomTilesWithSuit();
  renderTiles('waiting-tiles', waitingTiles);
  renderTiles('waited-tiles', waitedTiles);
  document.getElementById('waited-tiles').style.visibility = 'hidden';
  document.getElementById('reveal-waited-tiles').disabled = false;
}

function getRandomTilesWithSuit() {
  let numOfTiles = parseInt(document.querySelector('input[name="number-of-tiles"]:checked').value);
  let enableHardMode = document.getElementById('enable-hard-mode').checked;
  let [ waitingTiles, waitedTiles ] = generateWaitingTiles(numOfTiles, enableHardMode);
  let suit = getRandomSuit();
  return [ waitingTiles.map(tile => tile + suit), waitedTiles.map(tile => tile + suit) ];
}

function renderTiles(containerId, tiles) {
  const container = document.getElementById(containerId);
  container.innerHTML = ''; // Clear previous tiles

  // const labelElem = document.createElement('span');
  // labelElem.textContent = label;
  // container.appendChild(labelElem);

  tiles.forEach(tile => {
    const img = document.createElement('img');
    img.src = `./images/tiles/${tile}.png`;
    img.className = 'tile-img';
    img.alt = tile;
    container.appendChild(img);
  });
}
