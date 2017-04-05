import {
  FETCH_PRODUCT,
  FETCH_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT
} from './mutation-types'

const mutations = {

  [FETCH_PRODUCTS] (state, products) {
    state.all = products;
  },

  [FETCH_PRODUCT] (state, product) {
    const index = state.all.findIndex(p => p.id === product.id);

    if (index === -1) {
      state.all.push(product);
    } else {
      state.all.splice(index, 1, product);
    }
  },

  [CREATE_PRODUCT] (state, product) {
    state.all.push(product);
  },

  [UPDATE_PRODUCT] (state, product) {
    const index = state.all.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      state.all.splice(index, 1, product); //re-render
    }
  },

  [DELETE_PRODUCT] (state, productId) {
    state.all = state.all.filter(p => p.id !== productId);
  }

};

export default mutations;