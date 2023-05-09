import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
          StyleSheet,
          View,
          Button,
          Image,
          Text,
          TouchableHighlight,
          SafeAreaView,
          ImageBackground,
          Platform
        } from 'react-native';

const img = require("../assets/MyAssets/image-bg.png");

export default function WelcomeScreen() {
    const navigation = useNavigation();
  console.log("Android Executed!");
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={img} style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.Wel}>Welcome to</Text>
          <Text style={styles.AppName}>Cyberअभिज्ञा</Text>
        </View>
        <View style={{flex: 1.8}}>
            <Image resizeMode='cover' style={{width:300,height:300}} source={require('../assets/MyAssets/CyberAbhigya.png')}/>
        </View>
        <View style={styles.LanBtnGrp}>
            <Text style={{textAlign:'center', margin:5}}>कृपया भाषा चुनें/Please Select Language</Text>
            <View style={{flexDirection:'row',}}>
                <View style={styles.LanBtn}>
                    <TouchableHighlight onPress={()=> navigation.navigate('Home',{lanID:1})} style={{color:'#cd1410'}} underlayColor='transparent'><Text style={styles.LanBtnTxt}>हिन्दी</Text></TouchableHighlight>
                </View>
                <View style={styles.LanBtn}>
                    <TouchableHighlight onPress={()=> navigation.navigate('Home',{lanID:2})} style={{color:'#cd1410'}} underlayColor='transparent'><Text style={styles.LanBtnTxt}>English</Text></TouchableHighlight>
                </View>
            </View>
            <View flexDirection='row' style={{alignItems:'center',justifyContent:'center',marginTop:25,}}>
                <Text>Trust Clause</Text>
                <Image source={(require("../assets/MyAssets/Trust_Badge.png"))} style={{width:30,height:35,}} />
            </View>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? 30 : 0,
    width: '100%',
  },
  Wel:{
    fontSize:20,
  },
  AppName: {
    fontSize: 40,
  },
  LanBtnGrp: {
    flex: 1,
  },
  LanBtn: {
    margin:5,
    backgroundColor:'#cd1410',
    borderRadius:50,
  },
  LanBtnTxt: {
    textAlign: 'center',
    width: 150,
    padding:17,
    color: 'white',
  }
});