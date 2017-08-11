// const defaultState = {
//   images: []
// }
//
// export default function images(state = defaultState, action) {
//   switch (action.type) {
//     case 'IMAGE_SELECTED':
//         return {...state, selectedImage: action.image}
//       break;
//     case 'IMAGES_LOADED':
//       return {...state, images: action.images}
//     default:
//       return state;
//     }
// }

const defaultState = {
  products: []
}

export default function products(state = defaultState, action) {
  switch (action.type) {
    case 'PRODUCTS_LOADED':
        console.log(action);
        return {...state, products: action.products}
      break;
    case 'PRODUCT_IMAGES':
        console.log(action);
        console.log('images', action.images);
        return {...state, images: action.images}
      break;
    default:
      return state
  }
}
