"use strict";

document.getElementById("next").addEventListener("click", function() {
  let [ waitingTiles, waitedTiles ] = generateWaitingTiles();
  console.log(waitingTiles);
  console.log(waitedTiles);
  // console.log(getAvailablePairs(waitingTiles));
});
