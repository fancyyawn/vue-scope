import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'


const initialState = {
  products: []
};


export default {
  state: {...initialState},
  getters,
  actions,
  mutations
}
