import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import productsReducer from './store/reducers/products'
import ShopNavigator from './navigation/ShopNavigator';
import cartReducer from './store/reducers/cart';
import cart from './store/reducers/cart';
import ordersReducer from './store/reducers/orders';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
   <Provider store={store}>
    <ShopNavigator />
   </Provider>
  );
}
