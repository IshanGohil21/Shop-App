import React, { Children } from "react";
import { View, Text, Image, StyleSheet,  TouchableOpacity } from 'react-native';

const ProductItem = props => {
    return (
        <View style={styles.touchable}>
    <TouchableOpacity onPress={props.onSelect} >
    <View style={styles.product}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: props.image }}  />
        </View>
        <View style={styles.details}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.price}>${props.price}</Text>
        </View>
        <View style={styles.actions}>
            {props.children}
        </View>
    </View>
    </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    product:{
        shadowColor: 'black',
        shadowOpacity: 0.26,
        textShadowOffset: { width: 0, height: 2 },
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20,
    },
    image:{
        width: '100%',
        height: '100%',

    },
    title:{
        fontSize:18,
        marginVertical: 4,
    },
    price:{
        fontSize: 14,
        color: '#888'
    },
    actions:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center' ,
      height: '23%',
      paddingHorizontal: 20
    },
    details:{
        alignItems: 'center',
        height: '18%',
        padding: 10
    },
    imageContainer:{
       height: '60%',
       width: '100%',
       borderTopLeftRadius: 10,
       borderTopRightRadius: 10,
       overflow: 'hidden'
    },
    touchable:{
        overflow: 'hidden',
        borderRadius: 10,
    }
});

export default ProductItem;