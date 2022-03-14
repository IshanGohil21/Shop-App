import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import ProductOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';
import ProductDetailsScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen'
import { Ionicons } from '@expo/vector-icons';
import UserProductScreen from '../screens/user/UserProductsScreen';
import EditProdcutScreen from '../screens/user/EditProductScreen';
import AuthScreen from '../screens/user/AuthScreen';
import StartupScreen from '../screens/StartupScreen';
import { SafeAreaView, Button, View } from 'react-native';
import { useDispatch } from 'react-redux';
import * as authActions from '../store/actions/auth';

const defaultNavOptions = {
        headerStyle: {
            backgroundColor: 'white' 
        },
        headerTintColor: Colors.primary,
    }

const ProductsNavigator = createStackNavigator({
    ProductOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailsScreen,
    Cart: CartScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => <Ionicons 
        name='ios-cart' 
        size={23} 
        color={drawerConfig.tintColor} />
    },
    defaultNavigationOptions: defaultNavOptions
});

const OrdersNavigator = createStackNavigator({
    Orders: OrdersScreen
},{
    navigationOptions: {
        drawerIcon: drawerConfig => <Ionicons 
        name='ios-list' 
        size={23} 
        color={drawerConfig.tintColor} />
    },
    defaultNavigationOptions: defaultNavOptions
});

const AdminNavigator = createStackNavigator({
    UserProducts: UserProductScreen,
    EditProduct: EditProdcutScreen
},{
    navigationOptions: {
        drawerIcon: drawerConfig => <Ionicons 
        name='ios-create' 
        size={23} 
        color={drawerConfig.tintColor} />
    },
    defaultNavigationOptions: defaultNavOptions
});

const ShopNavigator = createDrawerNavigator({
    Products:  ProductsNavigator,
    Orders: OrdersNavigator,
    Admin: AdminNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.primary
    },
    contentComponent: props => {
        const dispatch = useDispatch();
        return <View style={{flex:1, paddingTop: 20}}>
            <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
                <DrawerItems {...props} />
                <Button title='Logout' color={Colors.primary} onPress={() => {
                    dispatch(authActions.logout());
                //    props.navigation.navigate('Auth');
                }} />
            </SafeAreaView>
        </View>
    }
});

const AuthNavigator = createStackNavigator({
    Auth: AuthScreen 
}, {
    defaultNavigationOptions: defaultNavOptions
});

const MainNavigator = createSwitchNavigator({
    Startup: StartupScreen,
    Auth: AuthNavigator,
    Shop: ShopNavigator
})

export default createAppContainer(MainNavigator);
