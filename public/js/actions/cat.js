export const convertToCat = (image) => {
    const imageHeight = image.height;
    const imageWidth = image.width;
    image.src = `https://placekitten.com/${imageWidth}/${imageHeight}`;
}
