import { createAppContainer } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack';
import ProductOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';
import ProductDetailsScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';


const ProductsNavigator = createStackNavigator({
    ProductOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailsScreen,
    Cart: CartScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'white' 
        },
        headerTintColor: Colors.primary,

    }
});

export default createAppContainer(ProductsNavigator);
