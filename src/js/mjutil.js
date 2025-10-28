"use strict";

import { sample, sampleSize } from 'lodash-es';

// A number suit has 36 tiles in total
const allTiles = [
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  1, 2, 3, 4, 5, 6, 7, 8, 9,
];

export function generateWaitingTiles(numOfTiles, enableHardMode) {
  while (true) {
    // Randomly sample tiles
    let sampleTiles = sampleSize(allTiles, numOfTiles);

    let waitedTiles = getWaitedTiles(sampleTiles);

    if (enableHardMode) {
      // In hard mode, only return if there are at least 3 waited tiles and they are not 147/258/369
      if (waitedTiles.length >= 3 && !waitedTiles.every(t => t % 3 === waitedTiles[0] % 3)) {
        // Ignore the cases where any 2 consecutive tiles are too far apart, e.g. 2223678
        // Such cases are relatively easier to solve, hence we want to avoid them in hard mode
        let hasDiffOfAtLeast3 = false;
        for (let i = 1; i < sampleTiles.length; i++) {
          if (sampleTiles[i] >= sampleTiles[i - 1] + 3) hasDiffOfAtLeast3 = true;
        }
        if (hasDiffOfAtLeast3) continue;
      }
      else continue;
    }
    else {
      if (waitedTiles.length <= 0) continue;
    }

    if (numOfTiles > 4) {
      if (last100Hands.includes(sampleTiles.toString())) continue;
      else {
        last100Hands.push(sampleTiles.toString());
        if (last100Hands.length > 100) last100Hands.shift();
      }
    }

    return [ sampleTiles, waitedTiles ];
  }
}

export function getRandomSuit() {
  return sample(['m', 'p', 's']);
}

// Export for unit tests
export function getWaitedTiles(tiles) {
  let waitedTiles = [];

  // For each tile from 1 to 9, insert it into sample tiles and check if it's winning
  for (let tile = 1; tile <= 9; tile++) {
    // Ignore tile if it already appeared 4 times
    if (tiles.filter(val => val === tile).length >= 4) continue;

    tiles.push(tile);
    tiles.sort();
    if (isWin(tiles)) waitedTiles.push(tile);
    tiles.splice(tiles.indexOf(tile), 1);
  }

  return waitedTiles;
}

// Assume the tiles are already sorted
function isWin(tiles) {
  // Check for 7 pairs first
  if (is7pairs(tiles)) return true;

  // Remove a pair first, and then check for triplets and sequences
  let availablePairs = getAvailablePairs(tiles);
  for (let i = 0; i < availablePairs.length; i++) {
    let tilesCopy = tiles.slice();
    tilesCopy.splice(tilesCopy.indexOf(availablePairs[i]), 1);
    tilesCopy.splice(tilesCopy.indexOf(availablePairs[i]), 1);
    if (isTripletsAndSequences(tilesCopy)) return true;
  }

  return false;
}

function is7pairs(tiles) {
  const numPairs = 7;
  if (tiles.length != 2 * numPairs) return false;
  for (let i = 0; i < numPairs; i++) {
    if (tiles[2 * i] != tiles[2 * i + 1]) return false;
  }
  return true;
}

function getAvailablePairs(tiles) {
  let availablePairs = [];

  for (let i = 0; i < tiles.length; i++) {
    if (i > 0 && tiles[i] === tiles[i - 1]) continue; // Skip duplicates

    let currentTile = tiles[i];
    if (tiles.filter(val => val === currentTile).length >= 2) {
      availablePairs.push(currentTile);
    }
  }

  return availablePairs;
}

function isTripletsAndSequences(tiles) {
  if (tiles.length === 0) return true;
  if (tiles.length < 3) return false;

  let firstTile = tiles[0];

  // Check triplet
  if (firstTile === tiles[1] && firstTile === tiles[2]) {
    // Remove the triplet, then check recursively
    let tilesCopy = tiles.slice();
    tilesCopy.splice(0, 3);

    if (isTripletsAndSequences(tilesCopy)) return true;
  }

  // Check sequence
  if (tiles.includes(firstTile + 1) && tiles.includes(firstTile + 2)) {
    // Remove the sequence, then check recursively
    let tilesCopy = tiles.slice();
    tilesCopy.splice(0, 1);
    tilesCopy.splice(tilesCopy.indexOf(firstTile + 1), 1);
    tilesCopy.splice(tilesCopy.indexOf(firstTile + 2), 1);

    if (isTripletsAndSequences(tilesCopy)) return true;
  }

  return false;
}

var last100Hands = [];

// Unused
function generateWinningTiles() {
  let numOfTiles = 14;

  while (true) {
    let sampleTiles = sampleSize(allTiles, numOfTiles);
    sampleTiles.sort();
    if (isWin(sampleTiles)) return sampleTiles;
  }
}
