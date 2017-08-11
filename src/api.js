
// export const fetchImages = () => {
//   return fetch(API_ENDPOINT).then(function (response) {
//     return response.json().then(function (json) {
//       return json.photos.photo.map(
//         ({farm, server, id, secret}) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
//       );
//     })
//   })
// };


const AuthStr = //api key

export const getProducts = () => {
  return fetch('http://95.85.12.250/api/products?page=1&limit=5', {
    headers: { Authorization: AuthStr }
  }).then(function (response) {
      // console.log(response.data);
     return response.json().then(function(json){
       return json.data
     })
   })
}


export const getImages = (eans) => {
    const images = [];
    eans.map(ean => {
      images.push(`http://www.secondplayer.nl/img/games/medium/${ean}.jpg`);
    });
    console.log(images);
    return images;
}
