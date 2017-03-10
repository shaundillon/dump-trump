import {recognize} from './services/FaceApi';
import {actionButtons} from './components/actionButtons';
import {preloadCats} from './actions/cat';

const images = document.getElementsByTagName('img');
const cat = 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg';

const checkImageForTrump = (image) => {
  image.classList.add('loading');
  return recognize(image.src)
    .then(res => res.json())
    .then(match => {
      image.classList.remove('loading');
      if(match.images) {
        for(var i=0; i < match.images.length; i++) {
          if(match.images[i].transaction.status === 'success') {
            return image;
          }
        }
        return false;
      }
      return false;
    });
}

const checkImages = () => {
  const upper = images.length < 60 ? images.length : 60;
  for(var i=0; i < upper; i++) {
    checkImageForTrump(images[i])
      .then(image => {
        if(image) {
          actionButtons(image);
          preloadCats(image)
        }
      });
  }
}

const clearOverlays = () => {
  const overlays = document.getElementsByClassName('trump-btn-container');

  while(overlays.length) {
    overlays[0].parentNode.removeChild(overlays[0]);
  }
}


// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "look_for_trump" ) {
      clearOverlays();
      checkImages();
    }
  }
);
