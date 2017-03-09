export const nope = (image) => {
  const bigNope = document.createElement('div');
  const text = document.createTextNode('NOPE!');
  bigNope.appendChild(text);
  bigNope.classList.add('no-trump');
  image.classList.add('hide');
  bigNope.style.width = `${image.width}px`;
  bigNope.style.height = `${image.height}px`;
  image.parentNode.insertBefore(bigNope, image.nextSibling);
}
