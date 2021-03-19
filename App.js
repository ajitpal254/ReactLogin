import React from 'react';
import{createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import SignUpScreen from "./components/SignUpscreen";
import SignInScreen from "./components/SignInScreen";
import CartScreen from "./components/CartScreen";

const stackNavigator = createStackNavigator({
    SignUp: SignUpScreen,
    SignIn: SignInScreen,
    Cart: CartScreen,
})

const App = createAppContainer(stackNavigator);

export default App;
