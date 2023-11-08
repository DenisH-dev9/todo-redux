import { createStore, combineRedusers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineRedusers({
  //
})

const initialState = {}

const middleWare = [thunk]

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleWare)
)

export default store