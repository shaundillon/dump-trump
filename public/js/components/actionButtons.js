import {nope} from '../actions/nope';
import {convertToCat} from '../actions/cat';

export const actionButtons = (image) => {
  const btnContainer = document.createElement('div');
  btnContainer.classList.add('trump-btn-container');
  const nopeBtn = document.createElement('button');
  const nopeText = document.createTextNode('NOPE');
  const catBtn =  document.createElement('button');
  const catText = document.createTextNode('CAT');
  nopeBtn.appendChild(nopeText);
  catBtn.appendChild(catText);
  nopeBtn.classList.add('trump-btn');
  catBtn.classList.add('trump-btn');
  btnContainer.appendChild(nopeBtn);
  btnContainer.appendChild(catBtn);
  btnContainer.style.width = `${image.width}px`;
  btnContainer.style.position = 'absolute';
  btnContainer.style.top = `${(image.offsetTop + image.height) - 20}px`;


  nopeBtn.onclick = () => {
    nope(image);
    btnContainer.parentNode.removeChild(btnContainer);
  };
  catBtn.onclick = () => {
    convertToCat(image);
    btnContainer.parentNode.removeChild(btnContainer);
  };

  image.parentNode.insertBefore(btnContainer, image.nextSibling);
}
