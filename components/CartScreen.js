import React, {useState} from 'react'
import {View,Text,Image,Button} from "react-native";
import cartFirebase from './CartFirebase';

const CatScreen = () =>{
  const [productImage,setProductImage] = useState('');
    const [productIName,setProductName] = useState('');
    const [productPrice,setProductPrice] = useState('');
    const [productQuantity,setProductQuantity] = useState('');

    const addtoCart = async ()=>{
        cartFirebase.push(productImage,productIName,productPrice,productQuantity);
    }

}
export default CatScreen;
