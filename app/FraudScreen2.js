
import React, { Component } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
    StyleSheet,
    View,
    Button,
    Image,
    Text,
    TouchableHighlight,
    SafeAreaView,
    ImageBackground,
    Platform,
    Touchable
  } from 'react-native';
import {btnNames} from './Info';


export default function FraudScreen2(){

    const navigation = useNavigation();
    const route = useRoute();
    return (
        <SafeAreaView style={styles.container}>
            <TouchableHighlight onPress={ () => navigation.navigate('SmC',{lanID:route.params.lanID}) } style={{margin:10,}} underlayColor='transparent'>
                <View style={[styles.appHolder, {flexDirection:'row'}]}>
                    <View style={styles.roundImgContainer}>
                        <Image style={[styles.roundImg]} source={require('../assets/MyAssets/Social-media.png')} />
                    </View>
                    <Text style={{position:'relative', left:10, color: 'black', fontSize:20}}>{route.params.lanID==1? 'सामाजिक मीडिया अपराध' : 'Social Media Crimes'}</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={ () => navigation.navigate('OC') } style={{margin:10,}} underlayColor='transparent'>
                <View style={[styles.appHolder, {flexDirection:'row'}]}>
                    <View style={styles.roundImgContainer}>
                        <Image style={[styles.roundImg]} source={require('../assets/MyAssets/www.png')} />
                    </View>
                    <Text style={{position:'relative', left:10, color: 'black', fontSize:20}}>{route.params.lanID==1? 'ऑनलाइन/वेबसाइट\nअपराध' : 'Website/Online Crimes'}</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={ () => navigation.navigate('EnS',{lanID:route.params.lanID}) }  style={{margin:10,}} underlayColor='transparent'>
                <View style={[styles.appHolder, {flexDirection:'row'}]}>
                    <View style={styles.roundImgContainer}>
                        <Image style={[styles.roundImg, {width:57,height: 62}]} source={require('../assets/MyAssets/email.png')} />
                    </View>
                    <Text style={{position:'relative', left:10, color: 'black', fontSize:20}}>{route.params.lanID==1? 'ईमेल/एस.एम.एस. अपराध' : 'Email/SMS Crimes'}</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={ () => navigation.navigate('Crypto',{lanID:route.params.lanID}) } style={{margin:10,}} underlayColor='transparent'>
                <View style={[styles.appHolder, {flexDirection:'row'}]}>
                    <View style={styles.roundImgContainer}>
                        <Image style={[styles.roundImg]} source={require('../assets/MyAssets/Bitcoin.png')} />
                    </View>
                    <Text style={{position:'relative', left:10, color: 'black', fontSize:20}}>{route.params.lanID==1? 'क्रिप्टोकरेंसी / यूपीआई अपराध' : 'Crypto Currency/ UPI Crimes'}</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={ () => navigation.navigate('WnC',{lanID:route.params.lanID}) } style={{margin:10,}} underlayColor='transparent'>
                <View style={[styles.appHolder, {flexDirection:'row'}]}>
                    <View style={styles.roundImgContainer}>
                        <Image style={[styles.roundImg, {width:57,height: 67}]} source={require('../assets/MyAssets/Child_women.png')} />
                    </View>
                    <Text style={{position:'relative', left:10, color: 'black', fontSize:20}}>{route.params.lanID==1? 'महिलाओं और बच्चों के खिलाफ साइबर अपराध' : 'Cyber crime against Woman & Children'}</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={ () => navigation.navigate('CSAM',{lanID:route.params.lanID}) } style={{margin:10,}} underlayColor='transparent'>
                <View style={[styles.appHolder, {flexDirection:'row'}]}>
                    <View style={styles.roundImgContainer}>
                        <Image style={[styles.roundImg, {width:75,height: 70}]} source={require('../assets/MyAssets/CSAM.png')} />
                    </View>
                    <Text style={{position:'relative', left:10, color: 'black', fontSize:20}}>{route.params.lanID==1? 'बाल यौन शोषण भौतिक रूप से अपराध' : 'Child Sexual Abusive Material (CSAM)'}</Text>
                </View>
            </TouchableHighlight>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#fff3db',
    },
    roundImgContainer: {
        width: 90,
        height: 90,
        borderRadius: 100,
        backgroundColor: '#E6C2BF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    roundImg: {
        width: 70,
        height: 70,
    },
    appHolder: {
        width: 300,
        height: 90,
        backgroundColor: 'white',
        borderRadius: 100,
        paddingRight: 100,
        alignItems: 'center',
    },
})