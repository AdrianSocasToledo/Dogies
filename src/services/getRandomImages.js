export default function getRandomImages(selectedBreed, selectedSubBreed) {
  /*
    let url ='';
    if(selectedSubBreed){
        url = `https://dog.ceo/api/breed/${selectedBreed}-${selectedSubBreed}/images/random/10`
    }else{
        url = `https://dog.ceo/api/breed/${selectedBreed}/images/random/10`
    }
    */
  const urlParams = selectedSubBreed
    ? `${selectedBreed}-${selectedSubBreed}`
    : selectedBreed;
  const url = `https://dog.ceo/api/breed/${urlParams}/images/random/10`;
  return fetch(url)
    .then((response) => response.json())
    .then((response) => {
      const images = [];
      const message = response.message || [];
      if (Array.isArray(message)) {
        //message.map( image => images.push(image))
        message.forEach((element) => images.push(element));
        //console.log(images);
      }
      return images;
    });
}
