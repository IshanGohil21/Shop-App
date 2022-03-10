import React from "react";
import { View, Text, StyleSheet, Touchable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";


const cartItem = props => {
    return (
        <View style={styles.cartItem}>
            <View style={styles.itemData}>
               <Text style={styles.quantity}>{props.quantity} </Text>  
               <Text style={styles.title}>{props.title}</Text>  
            </View>
            <View style={styles.itemData}>
                <Text style={styles.amount}> {props.amount} </Text>
                {props.deletable && (
                <TouchableOpacity 
                onPress={props.onRemove} 
                style={styles.deleteButton}
                >
                <Ionicons 
                name="ios-trash"  
                size={23}  
                color='red' />
                </TouchableOpacity>
                )}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    cartItem:{
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    itemData:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    quantity:{
        fontSize: 18,
        color: '#888',
        fontWeight: 'bold'
    },
    title:{
       fontSize: 18,
       fontWeight: 'bold',
    },
    amount:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    deleteButton:{
        marginLeft: 20
    }
});

export default cartItem;