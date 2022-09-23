import { createStore } from 'redux'
import categoryReducer from './reducers/categoryReducer'

const store = createStore(categoryReducer, ['Use Redux'])

export default store