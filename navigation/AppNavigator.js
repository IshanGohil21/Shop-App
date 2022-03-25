import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { ShopNavigator, AuthNavigator,  } from "./ShopNavigator";
import StartupScreen from "../screens/StartupScreen";

import { ProductsNavigator } from "./ShopNavigator";
import { useSelector } from "react-redux";



const AppNavigator = props => {
    const isAuth = useSelector(state => !!state.auth.token);
    const didTryAutoLogin = useSelector(state => !!state.auth.didTryAutoLogin);

    return <NavigationContainer>
        {isAuth && <ShopNavigator />}
        {!isAuth && didTryAutoLogin && <AuthNavigator/>}
        {!isAuth && !didTryAutoLogin && <StartupScreen/>}
    </NavigationContainer> 
};

export default AppNavigator;