import React from "react";
import { FlatList, Button, Alert } from "react-native";
import ProductItem from '../../components/shop/ProductItem'
import { useSelector, useDispatch } from "react-redux";
import Colors from "../../constants/Colors";
import * as productsActions from '../../store/actions/products_1'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';

const UserProductScreen = props => {
    const userProducts = useSelector(state => state.products.userProducts);
    const dispatch = useDispatch();
    const editProductHandler = (id) =>{
        props.navigation.navigate('EditProduct', { productId: id });
    };

    const deleteHandler = (id) => {
        Alert.alert('ARE YOU SURE ?','You Really Wanna Delete this Product ?', [
            { text: 'No', style: 'default'},
            { text: 'Yes', style: 'destructive', onPress: () => {
                dispatch(productsActions.deleteProduct(id));
            }}
        ]);
      };

    return <FlatList 
    data={userProducts}
    renderItem={itemData => <ProductItem
    image={itemData.item.imageUrl}
    title={itemData.item.title}
    price={itemData.item.price}
    onSelect={()=> {
        editProductHandler(itemData.item.id);
    }}
    >
     <Button 
            color={Colors.primary} 
            title = "Edit" 
            onPress={() => {
                editProductHandler(itemData.item.id);
            }} 
            />
            <Button 
            color={Colors.primary} 
            title = "Delete" 
            onPress={ deleteHandler.bind(this, itemData.item.id)} 
            />
    </ProductItem>       
        } 
    /> 
    }
    UserProductScreen.navigationOptions = navData => {
        return {
        headerTitle: 'Your Products',
        headerLeft: () =>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
            title='Menu'
            iconName='ios-menu' 
            onPress={() => {
                navData.navigation.toggleDrawer();
            }} 
        /> 
        </HeaderButtons>
        },{
            headerRight: () =>
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                  <Item
                    title="Add"
                    iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                    onPress={() => {
                      navData.navigation.navigate('EditProduct');
                    }}
                  />
        </HeaderButtons>
    };
};

export default UserProductScreen;