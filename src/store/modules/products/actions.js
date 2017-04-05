import http from '../../../api/vueResource'

import {
  FETCH_PRODUCT,
  FETCH_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT
} from './mutation-types'

export function fetchProducts ({ commit }) {
  return http.get('/products/')
      .then((response) => commit(FETCH_PRODUCTS, response.body.data));
}

export function fetchProduct ({ commit }, productId) {
  return http.get(`/products/${productId}`)
      .then((response) => commit(FETCH_PRODUCT, response.body.data));
}

export function createProduct({ commit }, { product, image }) {

  return http.post('/products', product)
      .then((response) => {
          commit(CREATE_PRODUCT, response.body.data);
          return response.body.data.id;
      }).then((productId) =>
          // Only upload image if an image has been defined
          image && uploadProductImage({ commit }, image, productId)
      );

}

export function updateProduct ({ commit }, { product, image }) {
  return http.put(`/products/${product.id}`, product)
      .then((response) => commit(UPDATE_PRODUCT, response.body.data))
      .then((productId) =>
          // Only upload image if an image has been defined
          image && uploadProductImage({ commit }, image, product.id)
      )
}

export function deleteProduct ({ commit }, productId) {
  return http.delete(`/products/${productId}`)
      .then((response) => commit(DELETE_PRODUCT, productId))
}

export function saveProduct({ commit, state }, { product, image }) {
  const index = state.all.findIndex((p) => p.id === product.id);

  if (index !== -1) {
    return updateProduct({ commit }, { product, image })
  } else {
    return createProduct({ commit }, { product, image })
  }
}

function uploadProductImage ({ commit }, image, productId) {
  let formData = new global.FormData();

  formData.append('product_id', productId);
  formData.append('product_image', image);

  return http.put('/products/upload', formData)
      .then((response) => response.body.data)
      .then(() => fetchProduct({ commit }, productId));
}
