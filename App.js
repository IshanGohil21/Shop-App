import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './store/reducers/products'
import ShopNavigator from './navigation/ShopNavigator';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './store/reducers/cart';
import cart from './store/reducers/cart';
import ordersReducer from './store/reducers/orders';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default function App() {
  return (
   <Provider store={store}>
    <ShopNavigator />
   </Provider>
  );
}
