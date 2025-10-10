"use strict";

import { generateWaitingTiles, getRandomSuit } from './mjutil.js';

document.addEventListener('DOMContentLoaded', function() {
  renderNewTiles();
});

document.getElementById('next-puzzle').addEventListener('click', function() {
  renderNewTiles();
});

document.getElementById('reveal-waited-tiles').addEventListener('click', function() {
  document.getElementById('waited-tiles').style.visibility = 'visible';
  this.disabled = true;
});

function renderNewTiles() {
  let [ waitingTiles, waitedTiles ] = getRandomTilesWithSuit();
  renderTiles('waiting-tiles', waitingTiles);
  renderTiles('waited-tiles', waitedTiles);
  document.getElementById('waited-tiles').style.visibility = 'hidden';
  document.getElementById('reveal-waited-tiles').disabled = false;
}

function getRandomTilesWithSuit() {
  let numOfTiles = document.querySelector('input[name="number-of-tiles"]:checked').value;
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
