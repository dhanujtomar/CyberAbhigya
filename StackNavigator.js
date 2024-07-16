import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './app/WelcomeScreen';
import HomeScreen from './app/HomeScreen';
import FraudScreen2 from './app/FraudScreen2';
import SmC from './app/SmC';
import OC from './app/Online-website_crimes';
import OGW from './app/OGW';
import FaR from './app/FaR';
import EnS from './app/EnS';
import WnC from './app/WnC';
import ES from './app/ES';
import Crypto from './app/Crytpo';
import CSAM from './app/CSAM';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Group>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Fraud" component={FraudScreen2} />
            <Stack.Screen name="SmC" component={SmC}/>
            <Stack.Screen name="OC" component={OC}/>
            <Stack.Screen name="WnC" component={WnC}/>
            <Stack.Screen name="OGW" component={OGW}/>
            <Stack.Screen name="FaR" component={FaR}/>
            <Stack.Screen name="EnS" component={EnS}/>
            <Stack.Screen name="ES" component={ES}/>
            <Stack.Screen name="Crypto" component={Crypto}/>
            <Stack.Screen name="CSAM" component={CSAM}/>
        </Stack.Group>
    </Stack.Navigator>
  )
}

export default StackNavigator