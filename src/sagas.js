
import {getImages, getProducts} from './api';
import {put, take, fork} from 'redux-saga/effects';

//
//
// export function* loadImages() {
//   try {
//     const images = yield fetchImages();
//     yield put({type: 'IMAGES_LOADED', images})
//     yield put({type: 'IMAGE_SELECTED', image: images[0]})
//   }
//   catch(error){
//      yield put({type: 'IMAGE_LOAD_FAILURE', error})
//   }
// }
//
//
// export function* watchForLoadImages() {
//   while(true) {
//     yield take('LOAD_IMAGES');
//     yield loadImages()
//   }
// }


export function* loadProducts(){
  try {
    const products = yield getProducts();

    yield put({type: 'PRODUCTS_LOADED', products})
    yield getImage(products)
  }
  catch(error){
    console.log(error);
  }
}


export function* getImage(products){
  console.log('loading');
  // console.log(products);
  const eans = []
  products.map((product) => {
    eans.push(product.ean);
  })
  // console.log(eans);
  const images = getImages(eans);
  yield put({type: 'PRODUCT_IMAGES', images})
}
