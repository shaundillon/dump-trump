export const convertToCat = (image) => {
    const imageHeight = image.height;
    const imageWidth = image.width;
    image.src = `https://placekitten.com/${imageWidth}/${imageHeight}`;
}

export const preloadCats = (image) => {
  const imageHeight = image.height;
  const imageWidth = image.width;
  var newCat = new Image();
  newCat.src = `https://placekitten.com/${imageWidth}/${imageHeight}`;
}
