import React, {useEffect, useState} from 'react'
import { FlatList } from 'react-native';
import {View,Text,Image,Button} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import cartFirebase from './CartFirebase';
import * as firebase from 'firebase';


const ProductScreen = ({navigation}) =>{
    const [product,setProduct] = useState('');

    const addtoCart = async (name,price,quantity)=>{
        firebase.database().ref('/cart').push({product_name:name,product_price:price,quantity:quantity});
    }

    useEffect(() => {
        firebase.database().ref('/product').once('value').then((snapshot)=> {
            setProduct(snapshot.val());
           console.log(product);
          });
    }, [])

    const renderProduct =({item})=>{
        return(
      <View style={{padding:20,flexDirection:'row',justifyContent:'space-between'}}>
        <View>
          <Text style={{fontSize:18}}>{item.product_name}</Text>
          <Text>{item.product_price}</Text>
        </View>
        <TouchableOpacity onPress={()=> addtoCart(item.product_name,item.product_price,item.quantity)} style={{backgroundColor:'black',borderRadius:5,paddingHorizontal:20,paddingVertical:5}}>
          <Text style={{color:'white'}}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    )}
   
    return(
     <View style={{flex:1,backgroundColor:'white'}}>
        <FlatList
          data={product}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
        />
        <TouchableOpacity onPress={()=> navigation.navigate('Cart')} style={{marginBottom:150,backgroundColor:'black',borderRadius:5,paddingHorizontal:30,paddingVertical:8,alignSelf:'center'}}>
          <Text style={{color:'white'}}>View Cart</Text>
        </TouchableOpacity>
     </View>
      );

}
export default ProductScreen;
