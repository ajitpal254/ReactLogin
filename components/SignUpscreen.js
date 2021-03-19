import React, {useState} from 'react';
import {Input, Text} from 'react-native-elements'
import {Button, View} from "react-native";
import {TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import firebase from '../components/FireBase';


const SignUpScreen = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const signup = async()=>{
        try{
           const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
            navigation.navigate('SignIn');
        }
        catch (err) {
            setError(err.message)
        }
    }
    return(
        <View>
            <Input label="Email" value={email} onChangeText={setEmail}></Input>
            <Input label="Password" value={password} onChangeText={setPassword} secureTextEntry></Input>
            <Button title="SignUp" onPress={()=> signup()}></Button>
            {
                error?
                    <Text style={{color: 'red'}}>{error}</Text>
                    :null
            }
            <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
                <Text>Already have an account? Sign in</Text>
            </TouchableOpacity>
        </View>
    )
};

export default SignUpScreen;
