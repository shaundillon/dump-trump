import {recognize} from './services/FaceApi';
import {convertToCat} from './actions/cat';
import {nope} from './actions/nope';

const images = document.getElementsByTagName('img');
const cat = 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg';

const checkImageForTrump = (image) => {
  return recognize(image.currentSrc)
    .then(res => res.json())
    .then(match => {
      if(match.images && match.images[0].transaction.status === 'success') {
        return image;
      }
      return false;
    });
}

const trumpedImages = () => {
  const upper = images.length < 60 ? images.length : 60;
  for(var i=0; i < upper; i++) {
    checkImageForTrump(images[i])
      .then(res => res ? nope(res) : false);
  }
}

trumpedImages();
