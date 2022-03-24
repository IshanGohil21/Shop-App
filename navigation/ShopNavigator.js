import React from 'react';

//import { createAppContainer, createSwitchNavigator } from 'react-navigation'; 
//import { createStackNavigator } from 'react-navigation-stack';
//import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProductOverviewScreen, { screenOptions as productOverviewScreenOptions } from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';
import ProductDetailsScreen, { screenOptions as productDetailsScreenOptions } from '../screens/shop/ProductDetailScreen';
import CartScreen, { screenOptions as cartScreenOptions } from '../screens/shop/CartScreen';
import OrdersScreen, { screenOptions as ordersScreenOptions } from '../screens/shop/OrdersScreen'
import { Ionicons } from '@expo/vector-icons';
import UserProductScreen, { screenOptions as userProductsOptions } from '../screens/user/UserProductsScreen';
import EditProdcutScreen, { screenOptions as editProductScreenOptions } from '../screens/user/EditProductScreen';
import AuthScreen from '../screens/user/AuthScreen';
import StartupScreen from '../screens/StartupScreen';
import { SafeAreaView, Button, View, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import * as authActions from '../store/actions/auth';

const defaultNavOptions = {
        headerStyle: {
            backgroundColor: 'white' 
        },
        headerTintColor: Platform.OS === 'android' ? 'white': Colors.primary
    };

// const ProductsNavigator = createStackNavigator({
//     ProductOverview: ProductOverviewScreen,
//     ProductDetail: ProductDetailsScreen,
//     Cart: CartScreen
// }, {
//     navigationOptions: {
//         drawerIcon: drawerConfig => <Ionicons 
//         name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} 
//         size={23} 
//         color={drawerConfig.tintColor} />
//     },
//     defaultNavigationOptions: defaultNavOptions
// });


const ProductsStackNavigator = createStackNavigator();

export const ProductsNavigator = () => {
    return <ProductsStackNavigator.Navigator screenOptions={defaultNavOptions}>
        <ProductsStackNavigator.Screen 
            name="ProductOverview" 
            component={ProductOverviewScreen}
            options={productOverviewScreenOptions}
        />
        <ProductsStackNavigator.Screen 
            name="ProductDetail" 
            component={ProductDetailsScreen}
            options={productDetailsScreenOptions} 
        />
        <ProductsStackNavigator.Screen 
            name="Cart" 
            component={CartScreen}
            options={cartScreenOptions} 
        />
    </ProductsStackNavigator.Navigator>
};

const OrdersStackNavigator = createStackNavigator();

export const OrdersNavigator = () => {
    return <OrdersStackNavigator.Navigator screenOptions={defaultNavOptions} >
        <OrdersNavigator.Screen 
        name="Orders" 
        component={OrdersScreen} 
        options={ordersScreenOptions}
        />
    </OrdersStackNavigator.Navigator>
};

const AdminStackNavigator = createStackNavigator();

export const AdminNavigator = () => {
    return <AdminStackNavigator.Navigator screenOptions={defaultNavOptions} >
        <AdminStackNavigator.Screen 
        name="UserProducts" 
        component={UserProductScreen}
        options={userProductsOptions}
        />
        <AdminStackNavigator.Screen 
        name="EditProduct" 
        component={EditProdcutScreen}
        options={editProductScreenOptions}
        />
    </AdminStackNavigator.Navigator>
}

const ShopDrawerNavigator = createDrawerNavigator();

export const ShopNavigator = () => {
    return <ShopDrawerNavigator.Navigator>
        <ShopDrawerNavigator.Screen name="Products" component={ProductsNavigator} />
        <ShopDrawerNavigator.Screen name="Orders" component={OrdersNavigator} />
        <ShopDrawerNavigator.Screen name="Admin" component={AdminNavigator} />
    </ShopDrawerNavigator.Navigator>
};



// const OrdersNavigator = createStackNavigator({
//     Orders: OrdersScreen
// },{
//     navigationOptions: {
//         drawerIcon: drawerConfig => <Ionicons 
//         name='ios-list' 
//         size={23} 
//         color={drawerConfig.tintColor} />
//     },
//     defaultNavigationOptions: defaultNavOptions
// });

// const AdminNavigator = createDrawerNavigator({
//     UserProducts: UserProductScreen,
//     EditProduct: EditProdcutScreen
// },{
//     navigationOptions: {
//         drawerIcon: drawerConfig => <Ionicons 
//         name='ios-create' 
//         size={23} 
//         color={drawerConfig.tintColor} />
//     },
//     defaultNavigationOptions: defaultNavOptions
// });

// const ShopNavigator = createDrawerNavigator({
//     Products:  ProductsNavigator,
//     Orders: OrdersNavigator,
//     Admin: AdminNavigator
// }, {
//     contentOptions: {
//         activeTintColor: Colors.primary
//     },
//     contentComponent: props => {
//         const dispatch = useDispatch();
//         return <View style={{flex:1, paddingTop: 20}}>
//             <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
//                 <DrawerItems {...props} />
//                 <Button title='Logout' color={Colors.primary} onPress={() => {
//                     dispatch(authActions.logout());
//                 //    props.navigation.navigate('Auth');
//                 }} />
//             </SafeAreaView>
//         </View>
//     }
// });

// const AuthNavigator = createStackNavigator({
//     Auth: AuthScreen 
// }, {
//     defaultNavigationOptions: defaultNavOptions
// });

// const MainNavigator = createSwitchNavigator({
//     Startup: StartupScreen,
//     Auth: AuthNavigator,
//     Shop: ShopNavigator
//  })

// export default createAppContainer(MainNavigator);
