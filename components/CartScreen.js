import React, {useEffect, useState} from 'react'
import { FlatList } from 'react-native';
import {View,Text,Image,Button} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import cartFirebase from './CartFirebase';
import * as firebase from 'firebase';


const CatScreen = ({navigation}) =>{
    const [product,setProduct] = useState('');
    const [loading,setLoading] = useState(false);
    const [key,setKey] = useState('');

    const removefromCart = async (keys)=>{
        firebase.database().ref(`/cart/${keys}`).remove();
        getData();
    }

    const updateQuantity = async (keys,quantity)=>{
      firebase.database().ref(`/cart/${keys}`).update({quantity:quantity});
      getData();
  }

    useEffect(() => {
        getData();
    }, [])
    
   const getData = () =>{
      firebase.database().ref('/cart').once('value').then((snapshot)=> {
        const userItem = snapshot.val();
        if(userItem){
        let items = Object.values(userItem);
        let key = Object.keys(userItem);
          setProduct(items);
          setKey(key);
          // console.log(key);
          // console.log(items);
        }
        else{
          setProduct('')
        }
        });
    }

    const renderCart =({item,index})=>{
        return(
      <View style={{padding:20,flexDirection:'row',justifyContent:'space-between'}}>
        <View>
          <Text style={{fontSize:18}}>{item.product_name}</Text>
          <Text>{item.product_price}</Text>
        </View>
        <View style={{flexDirection:'row',alignSelf:'center'}}>
          <TouchableOpacity disabled={item.quantity>1?false:true} onPress={()=> updateQuantity(key[index],item.quantity-1)}><Text style={{fontSize:18,width:10}}>-</Text></TouchableOpacity>
          <Text style={{paddingHorizontal:10,fontSize:18}}>{item.quantity}</Text>
          <TouchableOpacity onPress={()=>updateQuantity(key[index],item.quantity+1)}><Text style={{fontSize:18}}>+</Text></TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=> removefromCart(key[index])} style={{backgroundColor:'black',borderRadius:5,paddingHorizontal:20,paddingVertical:5}}>
          <Text style={{color:'white'}}>Remove</Text>
        </TouchableOpacity>
      </View>
    )}
   
    return(
     <View style={{flex:1}}>
        {product.length>0 ?
          <FlatList
          data={product}
          renderItem={renderCart}
          keyExtractor={(item,index) =>index.toString() }
        /> :
        <View style={{justifyContent:'center',alignItems:'center',marginTop:300}}>
          <Text>No Items</Text>
        </View>}
     </View>
      );

}
export default CatScreen;
