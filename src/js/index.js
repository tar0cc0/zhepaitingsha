"use strict";

import { generateWaitingTiles, getRandomSuit } from './mjutil.js';
import langData from '../lang/lang.json' with { type: "json" };

// Function to detect mobile devices
window.isMobileDevice = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

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

document.getElementById('hard-mode-help').addEventListener('click', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get('lang') || 'zh';
  alert(`${langData['hardMode'][lang]}:\n${langData['hardModeHelp'][lang]}`);
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
    // Tile images are placed in /src/public so that vite bundling picks them up
    img.src = `/zhepaitingsha/tiles/${tile}.png`;  // TODO: change base to '/' when deploying to custom domain
    img.className = 'tile-img';
    img.alt = tile;
    container.appendChild(img);
  });
}
