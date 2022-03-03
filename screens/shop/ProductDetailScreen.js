import React from "react";
import { View, Text, Image, Button, StyleSheet, ScrollView } from "react-native";
import { useSelector } from "react-redux";



const ProductDetailsScreen = props => {
    const productId = props.navigation.getParam('productId');
    const selectedProduct = useSelector(state => 
        state.products.availableProducts.find(prod => prod.id === productId));

    return (
        <View>
            <Text>{selectedProduct.title}</Text>
        </View>
    );
};


const styles = StyleSheet.create({

});

export default ProductDetailsScreen;