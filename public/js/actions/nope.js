export const nope = (image) => {
  const bigNope = document.createElement('div');
  const text = document.createTextNode('NOPE');
  const offsetTop = `${image.offsetTop}px`;
  const offsetLeft = `${image.offsetLeft}px`;
  bigNope.appendChild(text);
  bigNope.classList.add('no-trump');
  bigNope.style.width = `${image.width}px`;
  bigNope.style.height = `${image.height}px`;
  bigNope.style.position = 'absolute';
  bigNope.style.top = offsetTop;
  bigNope.style.left = offsetLeft;
  image.parentNode.insertBefore(bigNope, image.nextSibling);
}
