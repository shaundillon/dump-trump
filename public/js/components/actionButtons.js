import {nope} from '../actions/nope';
import {convertToCat} from '../actions/cat';

export const actionButtons = (image) => {
  const btnContainer = document.createElement('div');

  const nopeBtn = document.createElement('button');
  const nopeText = document.createTextNode('NOPE');

  const catBtn =  document.createElement('button');
  const catText = document.createTextNode('CAT');

  const dismissBtn =  document.createElement('button');
  const dismissText = document.createTextNode('DISMISS');

  const warning = document.createElement('p');
  const warningText = document.createTextNode('DONALD DETECTED');

  btnContainer.style.width = `${image.width}px`;
  btnContainer.style.height = `${image.height}px`;
  btnContainer.style.position = 'absolute';
  btnContainer.style.top = `${image.offsetTop}px`;
  btnContainer.style.left = `${image.offsetLeft}px`;

  nopeBtn.appendChild(nopeText);
  catBtn.appendChild(catText);
  dismissBtn.appendChild(dismissText);
  warning.appendChild(warningText);

  btnContainer.classList.add('trump-btn-container');
  nopeBtn.classList.add('trump-btn');
  catBtn.classList.add('trump-btn');
  dismissBtn.classList.add('trump-btn');

  btnContainer.appendChild(warning);
  btnContainer.appendChild(nopeBtn);
  btnContainer.appendChild(catBtn);
  btnContainer.appendChild(dismissBtn);

  nopeBtn.onclick = () => {
    nope(image);
    btnContainer.parentNode.removeChild(btnContainer);
  };

  catBtn.onclick = () => {
    convertToCat(image);
    btnContainer.parentNode.removeChild(btnContainer);
  };

  dismissBtn.onclick = () => {
    btnContainer.parentNode.removeChild(btnContainer);
  };

  image.parentNode.insertBefore(btnContainer, image.nextSibling);
}
