import PRODUCTS from "../../data/dummy-data";
import Product from "../../models/product";
import { CREATE_PRODUCT, DELETE_PRODUCT, SET_PRODUCTS, UPDATE_PRODUCT } from "../actions/products_1";

const initalState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
};

export default (state = initalState, action) => {
    switch(action.type) {
        case SET_PRODUCTS:
            return {
                availableProducts: action.products,
                userProducts: action.products
            }
        case CREATE_PRODUCT:
            const newProduct = new Product(
                action.productData.id, 
                'u1', 
                action.productData.title , 
                action.productData.imageUrl, 
                action.productData.description, 
                action.productData.price 
            );
            return {
                ...state,
                availableProducts: state.availableProducts.concat(newProduct),
                userProducts: state.userProducts.concat(newProduct)
            };
        

        case UPDATE_PRODUCT:
      const productIndex = state.userProducts.findIndex(
        prod => prod.id === action.pid
      );
      const updatedProducts = new Product(
        action.pid,
        state.userProducts[productIndex].ownerId,
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        state.userProducts[productIndex].price
      );
      const updatedUserProducts = [...state.userProducts];
      updatedUserProducts[productIndex] = updatedProducts;
      const availableProductIndex = state.availableProducts.findIndex(
        prod => prod.id === action.pid
      );
      const updatedAvailableProducts = [...state.availableProducts];
      updatedAvailableProducts[availableProductIndex] = updatedProducts;
      return {
        ...state,
        availableProducts: updatedAvailableProducts,
        userProducts: updatedUserProducts
      };
        case DELETE_PRODUCT:
            return {
                ...state,
                userProduct: state.userProducts.filter(product => 
                    product.id !== action.pid
                ),
                availableProducts: state.availableProducts.filter(
                    product => product.id !== action.pid
                ),
            };
        }
    return state;
};

