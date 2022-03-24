import React from "react";
import { NavigationContainer } from "@react-navigation/native";


import { ProductsNavigator } from "./ShopNavigator";
import { useSelector } from "react-redux";



const AppNavigator = props => {
    const isAuth = useSelector(state => !!state.auth.token);

    return <NavigationContainer>
        <ProductsNavigator/>
    </NavigationContainer> ;
};

export default AppNavigator;